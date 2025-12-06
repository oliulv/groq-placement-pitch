"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Groq's Position", href: "#groq-position" },
  { label: "Speed Gap", href: "#speed-gap" },
  { label: "Why I Care", href: "#why-i-care" },
  { label: "Mindshare Gap", href: "#mindshare-gap" },
  { label: "Segment to Own", href: "#segment-to-own" },
  { label: "What I'd Do", href: "#what-id-do" },
  { label: "Ask / Contact", href: "#ask-contact" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-sm border-b border-gray-200" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-6 scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex-shrink-0 text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Let Oliver work at Groq.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I think you're in exactly the right place in the AI stack at exactly
            the right time. This page is my argument for why, what gap I see,
            and how I'd like to help during my placement year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:placeholder@example.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-groq-orange text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Email Oliver
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-md font-medium hover:border-gray-400 transition-colors"
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      {/* Groq's Position Section */}
      <section
        id="groq-position"
        className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How I see Groq in the AI value chain
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>
              The way I see it, there are two likely futures:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                The training race plateaus and frontier gains get brutally
                expensive, or
              </li>
              <li>
                Models keep improving, but most real-world use cases hit "good
                enough."
              </li>
            </ul>
            <p>
              In both cases, the value shifts to cheap, fast, reliable inference
              – getting answers out of models into products at scale.
            </p>
            <p>
              You've already built a stack optimised for that, not for training
              vanity metrics. That's why I think Groq is in the right place in
              the value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Speed Gap Section */}
      <section id="speed-gap" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            We made apps smarter, but slower
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>
              For years, software engineering has been about shaving milliseconds
              off latency so products feel instant.
            </p>
            <p>
              Then we glued LLMs into everything and quietly accepted 3–10 second
              waits as normal.
            </p>
            <p>
              That's fine during the hype phase, but long term, users will
              expect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responses that are good enough, and</li>
              <li>Latency that feels like normal software again.</li>
            </ul>
            <p>
              That's the gap Groq fills: making AI feel like software again –
              fast, predictable, and affordable at the point of use.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Care Section */}
      <section
        id="why-i-care"
        className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why I personally want to be part of this
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>
              I'm not in love with "AI" as a buzzword or inference as an
              abstract concept.
            </p>
            <p>
              I care because I think Groq is going to be one of the few
              companies that actually matters once the noise dies down. You're
              aligned with where the value ends up, not just where the hype is.
            </p>
            <p>I want to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Bet my time on a team that is clearly going to win something
                important.
              </li>
              <li>
                Work with people who are much better than me and learn fast.
              </li>
              <li>
                Feel slightly out of my depth walking into the office and come
                out sharper every week.
              </li>
            </ul>
            <p>
              Ideally, that's during my placement year, in a role based in
              London. But the core point is simple: I want to be in the room
              while this is being built.
            </p>
          </div>
        </div>
      </section>

      {/* Mindshare Gap Section */}
      <section
        id="mindshare-gap"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The gap: developer mindshare with the next wave of builders
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>
              Through Accelerate ME (the University of Manchester's startup
              accelerator) and broader student/startup communities, I see:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Students, young founders, and engineers building serious AI
                projects.
              </li>
              <li>Hackathons where almost every team uses LLMs.</li>
              <li>
                Side projects doing real revenue with AI under the hood.
              </li>
            </ul>
            <p className="font-semibold text-gray-900">
              Almost none of them are using Groq.
            </p>
            <p>
              They default to OpenAI, Anthropic, or whatever wrapper is loudest
              – even when they're building things where latency and cost-per-call
              matter more than frontier intelligence.
            </p>
            <p>
              That's not a product problem. That's a mindshare and GTM problem
              in a segment that will compound over the next 5–10 years.
            </p>

            <details className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <summary className="cursor-pointer font-medium text-gray-900 hover:text-groq-orange transition-colors">
                How I noticed this (short story)
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed">
                <p>
                  One of the most capable builders I know, George – who works
                  with me and runs products doing tens of thousands of pounds in
                  MRR – hadn't heard of Groq until we sat in a Groq masterclass
                  at Web Summit.
                </p>
                <p className="mt-2">
                  Once he saw the latency and cost profile, his reaction was
                  basically: "Why was I not already using this?"
                </p>
                <p className="mt-2">
                  If someone like that isn't aware, there's clearly a mindshare
                  gap.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Segment to Own Section */}
      <section
        id="segment-to-own"
        className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The segment I think Groq can quietly own
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>The group I'm thinking about is:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Technical students at strong universities across the UK and
                Europe.
              </li>
              <li>
                Young founders running real revenue side projects and early-stage
                startups.
              </li>
              <li>
                Hackathon and accelerator teams shipping AI MVPs constantly.
              </li>
            </ul>
            <p>They are:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cost-sensitive – API bills actually hurt.</li>
              <li>Latency-sensitive – UX is their differentiator.</li>
              <li>
                Tool-loyal – whatever helped them early tends to stick.
              </li>
            </ul>
            <p>If Groq becomes their default inference platform now, you get:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Bottom-up adoption as they join larger companies.
              </li>
              <li>
                Long-term lock-in as they found and scale new startups.
              </li>
              <li>
                A generation of builders who instinctively think "Groq" for
                anything performance-critical.
              </li>
            </ul>

            {/* Simple Flywheel Diagram */}
            <div className="mt-12 p-8 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                The Flywheel
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-groq-orange/10 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Students &<br />
                    Founders
                  </p>
                </div>
                <div className="text-groq-orange text-2xl">→</div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-groq-orange/10 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Build on<br />
                    Groq
                  </p>
                </div>
                <div className="text-groq-orange text-2xl">→</div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-groq-orange/10 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Scale &<br />
                    Lock-in
                  </p>
                </div>
                <div className="text-groq-orange text-2xl">→</div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-groq-orange/10 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Bring to<br />
                    Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'd Do Section */}
      <section id="what-id-do" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What I'd do in a placement
          </h2>
          <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
            <p>
              Where I think I can add immediate value is helping you win that
              "next generation of builders" problem and turning it into a
              repeatable motion.
            </p>
            <p>Concretely, that could look like:</p>

            <div className="space-y-6 mt-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  University & accelerator GTM
                </h3>
                <p className="text-gray-600">
                  Work with accelerators, hackathons, and AI societies to make
                  "building on Groq" a default option, not an exotic one.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hands-on developer activation
                </h3>
                <p className="text-gray-600">
                  Workshops, mini-hackathons, and "build on Groq" days that
                  actually ship things – not just talks.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simple, opinionated examples
                </h3>
                <p className="text-gray-600">
                  Clear templates and examples that show when Groq is the
                  obvious choice (and how to plug it in quickly).
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tight feedback loop
                </h3>
                <p className="text-gray-600">
                  Bring back blunt, unfiltered feedback from builders into
                  product and GTM to sharpen the story.
                </p>
              </div>
            </div>

            <p className="mt-6">
              This is my view of where I can add the most value. But if you
              think there's a different problem I should work on, I'm very
              happy to adapt. I'm willing to wear whatever hat is most useful –
              GTM, community, product-adjacent, something hybrid – as long as
              I'm close to the work and the team.
            </p>
          </div>
        </div>
      </section>

      {/* Ask / Contact Section */}
      <section
        id="ask-contact"
        className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What I'm asking for
          </h2>
          <div className="text-lg text-gray-600 space-y-4 leading-relaxed mb-12">
            <p>This page is basically one ask:</p>
            <p className="font-semibold text-gray-900">
              Let me do my placement year with Groq.
            </p>
            <p>
              If it makes sense, point me at this "next generation of builders /
              mindshare" problem and let me help turn it into a repeatable GTM
              motion.
            </p>
            <p>
              And if you see a better fit elsewhere, I'm happy to plug into
              whatever gap is most useful. I mainly want to be in the room, learn
              fast, and contribute.
            </p>
            <p>
              If that sounds useful, I'd love to talk about what a concrete role
              could look like.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:placeholder@example.com"
              className="px-6 py-3 bg-groq-orange text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Email Oliver
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-md font-medium hover:border-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-md font-medium hover:border-gray-400 transition-colors"
            >
              X
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-md font-medium hover:border-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-md font-medium hover:border-gray-400 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

