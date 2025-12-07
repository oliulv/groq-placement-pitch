/* 
How to use:
- Drop <AskOliverWidget /> anywhere in a client-side page or layout.
- Ensure the API route exists at /api/ask-oliver (see app/api/ask-oliver/route.ts).
- Required env (server): GROQ_API_KEY for the API route. No other env needed; contact links are read from lib/constants.ts.
- You can set --groq-orange in CSS to match your brand accent; falls back to #f46a37.
*/

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { marked } from "marked";
import { CONTACT } from "@/lib/constants";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const ACCENT = "var(--groq-orange, #f46a37)";

const parseContactResponse = (content: string) => {
  const trimmed = content.trim();

  if (trimmed.startsWith("CONTACT_OLIVER")) {
    const message = trimmed.replace(/^CONTACT_OLIVER\s*/i, "").trim();
    return {
      message:
        message || "Please reach out to Oliver directly for that question.",
      triggerContact: true,
    };
  }

  return { message: content, triggerContact: false };
};

export function AskOliverWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! Ask me anything about Oliver Ulvebne and I'll answer based on his profile.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const contacts = useMemo(
    () => ({
      email: CONTACT.email,
      x: CONTACT.twitter,
      linkedin: CONTACT.linkedin,
    }),
    []
  );

  const renderContent = (content: string) => {
    const html = marked.parse(content, { breaks: true }) as string;
    return (
      <div
        className="ask-oliver-markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || isLoading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ask-oliver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as { content?: string };
      const responseText = data.content ?? "";
      const { message, triggerContact } = parseContactResponse(responseText);

      setMessages((prev) => [...prev, { role: "assistant", content: message }]);
      if (triggerContact) setShowContactOptions(true);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I can't answer right now. Please reach out to Oliver directly.",
        },
      ]);
      setShowContactOptions(true);
      setError("We hit a problem talking to the assistant.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 md:bottom-5 md:right-5">
      {/* Collapsed button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-12 px-4 rounded-full shadow-lg flex items-center gap-2 justify-center text-sm font-semibold text-white"
          style={{ background: ACCENT }}
          aria-label="Ask Oliver"
        >
          <MessageCircle size={18} />
          <span>Ask Oliver</span>
        </button>
      )}

      {/* Expanded panel */}
      {isOpen && (
        <div className="w-[clamp(320px,90vw,520px)] bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/90 backdrop-blur">
            <div className="text-sm font-semibold text-gray-900">
              Ask Oliver <span className="text-gray-400">(Groq-powered)</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 transition-colors text-sm"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div
            ref={scrollRef}
            className="p-4 space-y-2 overflow-y-auto max-h-[60vh] md:max-h-[500px] bg-gradient-to-b from-white via-gray-50 to-white"
          >
            {messages.map((message, idx) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl text-sm leading-relaxed shadow-sm break-words ${
                      isUser
                        ? "bg-gray-900 text-white rounded-br-sm max-w-[80%]"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-sm max-w-full overflow-x-auto"
                    }`}
                  >
                    {isUser ? (
                      message.content
                    ) : (
                      renderContent(message.content)
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="text-xs text-gray-500 animate-pulse">
                Thinking…
              </div>
            )}

            {showContactOptions && (
              <div className="flex justify-start">
                <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm p-3">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`mailto:${contacts.email}`}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-white"
                      style={{ background: ACCENT }}
                    >
                      Email
                    </a>
                    <a
                      href={contacts.x}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-800 hover:border-gray-300 transition-colors"
                    >
                      X (Twitter)
                    </a>
                    <a
                      href={contacts.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-800 hover:border-gray-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="text-xs text-red-500">
                We hit a problem talking to the assistant.
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 bg-white px-4 py-2 flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Oliver…"
                rows={2}
                className="flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--groq-orange,#f46a37)] focus:border-transparent shadow-inner"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isLoading || input.trim().length === 0}
                className="h-10 px-4 rounded-xl text-sm font-semibold uppercase tracking-wide text-white shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-transform duration-150"
                style={{
                  background:
                    "linear-gradient(135deg, #0f172a, #111827 55%, #0f172a)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              >
                Send →
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 150ms ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .ask-oliver-markdown {
          white-space: pre-wrap;
        }
        .ask-oliver-markdown p {
          margin: 0 0 0.25rem 0;
        }
        .ask-oliver-markdown p:last-child {
          margin-bottom: 0;
        }
        .ask-oliver-markdown ul {
          margin: 0.25rem 0 0.35rem 1.25rem;
          padding: 0;
          list-style: disc;
        }
        .ask-oliver-markdown li {
          margin: 0.15rem 0;
        }
        .ask-oliver-markdown strong {
          font-weight: 700;
        }
        .ask-oliver-markdown em {
          font-style: italic;
        }
        .ask-oliver-markdown h1,
        .ask-oliver-markdown h2,
        .ask-oliver-markdown h3 {
          margin: 0 0 0.35rem 0;
          font-weight: 700;
          font-size: 1rem;
        }
        .ask-oliver-markdown code {
          background: #f3f4f6;
          padding: 0.1rem 0.25rem;
          border-radius: 4px;
          font-size: 0.85em;
        }
        .ask-oliver-markdown table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.25rem 0;
          font-size: 0.9em;
        }
        .ask-oliver-markdown th,
        .ask-oliver-markdown td {
          border-bottom: 1px solid #e5e7eb;
          padding: 0.4rem 0.35rem;
          text-align: left;
          vertical-align: top;
        }
        .ask-oliver-markdown th {
          font-weight: 700;
          background: #f9fafb;
        }
        .ask-oliver-markdown tr:last-child th,
        .ask-oliver-markdown tr:last-child td {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
}
