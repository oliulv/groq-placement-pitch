"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  FileText,
  ChevronRight,
  Zap,
  GraduationCap,
  Rocket,
  Briefcase
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTACT } from "@/lib/constants";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

const Section = ({ 
  id, 
  className, 
  children 
}: { 
  id: string; 
  className?: string; 
  children: React.ReactNode 
}) => (
  <section id={id} className={cn("py-24 relative scroll-mt-20", className)}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </section>
);

const FlywheelNode = ({ icon: Icon, label, delay = 0 }: { icon: any, label: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="flex flex-col items-center justify-center text-center z-10 bg-white p-4 border border-gray-100 rounded-lg shadow-sm w-32 h-32"
  >
    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-3 text-groq-orange">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <span className="text-xs font-mono font-medium text-gray-600 leading-tight">{label}</span>
  </motion.div>
);

// X Logo SVG Component
const XIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-groq-orange/10 font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-groq-orange origin-left z-50"
        style={{ scaleX }}
      />

      {/* Vertical Rail */}
      <div className="fixed left-[max(1rem,calc(50%-550px))] top-0 bottom-0 w-px bg-gray-100 hidden xl:block z-0" />
      <div className="fixed right-[max(1rem,calc(50%-550px))] top-0 bottom-0 w-px bg-gray-100 hidden xl:block z-0" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-sm tracking-tight flex items-center gap-2">
            <div className="w-2 h-2 bg-groq-orange rounded-full" />
            OLIVER / GROQ
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            {navLinks.slice(0, 5).map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className={cn(
                  "hover:text-groq-orange transition-colors relative py-5",
                  activeSection === link.href.substring(1) && "text-gray-900"
                )}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-groq-orange" 
                  />
                )}
              </a>
            ))}
            <span className="text-gray-300 py-5">/</span>
            <a href="#ask-contact" className="text-groq-orange hover:opacity-80 transition-opacity py-5">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 sm:px-8 relative pt-16">
        
        {/* Hero */}
        <Section id="hero" className="min-h-[80vh] flex flex-col justify-center border-b border-gray-100">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-groq-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-groq-orange"></span>
              </span>
              <span className="text-xs font-mono font-medium text-gray-600 uppercase tracking-wider">Placement Pitch</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Let Oliver <br />
              work at <span className="text-groq-orange">Groq</span>.
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl font-light">
              I think Groq is in exactly the right place in the AI stack at exactly the right time. 
              This page is my argument for why, what gap I see, and how I’d like to help during my placement year.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded text-sm font-medium hover:bg-groq-orange transition-colors duration-300"
              >
                <Mail size={16} />
                Email Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={CONTACT.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded text-sm font-medium hover:border-gray-400 transition-colors"
              >
                <FileText size={16} />
                View CV
              </a>
            </div>
          </div>
        </Section>

        {/* 2. Groq's Position */}
        <Section id="groq-position" className="border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">01 / Context</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How I see Groq in the AI value chain</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>The way I see it, there are two likely futures in AI:</p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 bg-gray-50 rounded border border-gray-100">
                  <span className="block text-gray-400 mb-2 font-mono text-xs">Scenario A</span>
                  <p className="text-sm font-medium text-gray-900">Training race plateaus and frontier gains get brutally expensive.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded border border-gray-100">
                  <span className="block text-gray-400 mb-2 font-mono text-xs">Scenario B</span>
                  <p className="text-sm font-medium text-gray-900">Models keep improving, but most real-world use cases hit “good enough.”</p>
                </div>
              </div>
              <p>
                In both cases, the value shifts to <span className="text-gray-900 font-medium">cheap, fast, reliable inference</span> – getting answers out of models into products fast and at scale..
              </p>
              <p>
                You’re perfectly position for either scenario.
              </p>
            </div>
          </div>
        </Section>

        {/* 3. Speed Gap */}
        <Section id="speed-gap" className="border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">02 / The Problem</span>
              <h2 className="text-3xl font-bold text-gray-900">We made apps smarter, but slower</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Historically, software engineering has obsessed over shaving milliseconds off latency so products feel instant and snappy.
                Then we glued LLMs into everything and just accepted 3–10 second waits as normal.
              </p>
              <div className="pl-6 border-l-2 border-groq-orange/30 italic text-gray-500">
                That’s normal now, but long term, users will expect latency that feels like normal software again.
              </div>
              <p>
                That’s the gap Groq fills: making AI feel like software again – fast, predictable, and affordable.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. Why I Care */}
        <Section id="why-i-care" className="border-b border-gray-100">
           <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">03 / Motivation</span>
              <h2 className="text-3xl font-bold text-gray-900">Why I personally want to be part of this</h2>
            </div>
            <div className="md:col-span-8">
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-8">
                <p>
                  I care because I expect Groq will be an incredibly important company going forward. 
                  You’re aligned with where the value ends up long term. I want to be a part of it.
                </p>
                <p>
                  I want to:
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Bet my time on a team that is clearly going to win something important.",
                  "Work with people who are much better than me so I can learn fast.",
                  "Feel slightly out of my depth walking into the office and come out sharper every week."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-groq-orange flex-shrink-0" />
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-gray-500 text-sm border-t border-gray-100 pt-6">
                Ideally, that’s during my placement year, in a role based in London. But the core point is simple: <span className="text-gray-900 font-medium">I want to be in the room while this is being built.</span>
              </p>
            </div>
          </div>
        </Section>

        {/* 5. Mindshare Gap */}
        <Section id="mindshare-gap" className="border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-6 md:gap-12">
            <div className="md:col-span-4">
              <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">04 / Observation</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The gap: developer mindshare with the next wave of builders</h2>
            </div>
            <div className="md:col-span-8">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Through running Accelerate ME (the UK's leading student-led startup accelerator) and engaging with broader student/startup communities, I see:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-sm">
                {[
                  "Students & Engineers building serious AI projects",
                  "Hackathon teams where everyone uses LLMs",
                  "Side projects doing real revenue with AI"
                ].map((item, i) => (
                  <li key={i} className="bg-gray-50 p-3 md:p-4 rounded border border-gray-100 text-gray-800">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-lg md:text-xl text-gray-900 font-normal">
                Almost none of them are using Groq.
              </p>
              
              <p>
                They default to OpenAI, Anthropic, or whatever option has the most mindshare – even when they're building things where latency and cost-per-call matter more than frontier intelligence.
                That's not a product problem. That's a mindshare and GTM problem.
              </p>

              <details className="group mt-4 md:mt-6 open:bg-gray-50 transition-colors rounded-lg overflow-hidden border border-gray-200">
                <summary className="flex items-center gap-3 p-3 md:p-4 cursor-pointer font-medium text-gray-900 hover:text-groq-orange transition-colors select-none text-sm md:text-base">
                  <ChevronRight size={16} className="group-open:rotate-90 transition-transform text-gray-400 flex-shrink-0" />
                  How I noticed this (short story)
                </summary>
                <div className="p-3 md:p-4 pt-4 md:pt-6 text-gray-600 text-sm md:text-base border-t border-transparent group-open:border-gray-200">
                  <p className="mb-3">
                    One of the most capable builders I know, George – who works with me and runs products doing tens of thousands of pounds in MRR – hadn't heard of Groq until we sat in a Groq masterclass at Web Summit.
                  </p>
                  <p className="mb-3">
                    Once he saw the latency and cost profile, his reaction was basically: <span className="italic">"Why was I not already using this?"</span>
                  </p>
                  <p>
                    If someone like that isn't aware, there's clearly a mindshare gap.
                  </p>
                </div>
              </details>
            </div>
            </div>
          </div>
        </Section>

        {/* 6. Segment to Own (Flywheel) */}
        <Section id="segment-to-own" className="border-b border-gray-100">
          <div className="text-center mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">05 / Strategy</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">The segment I think Groq can quietly own</h2>
            <p className="text-sm md:text-base text-gray-600 font-light">
              Technical students, young founders, and hackathon teams. They are cost-sensitive, latency-sensitive, and tool-loyal.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto min-h-[320px] md:h-[300px] my-6 md:my-8 px-4">
            {/* Desktop Layout */}
            <div className="hidden md:flex relative items-center h-full w-full">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -z-10" />
              
              {/* Use grid for precise control */}
              <div className="w-full grid grid-cols-7 gap-0 items-center">
                {/* Box 1 */}
                <div className="col-span-1 flex justify-center">
                  <FlywheelNode 
                    icon={GraduationCap} 
                    label={<>Students &<br/>Founders</>} 
                    delay={0.1}
                  />
                </div>
                
                {/* Arrow 1 */}
                <div className="col-span-1 flex justify-center">
                  <div className="text-gray-300">
                    <ArrowRight size={16} strokeWidth={1} />
                  </div>
                </div>

                {/* Box 2 */}
                <div className="col-span-1 flex justify-center">
                  <FlywheelNode 
                    icon={Zap} 
                    label={<>Build on<br/>Groq</>} 
                    delay={0.2}
                  />
                </div>

                {/* Arrow 2 */}
                <div className="col-span-1 flex justify-center">
                  <div className="text-gray-300">
                    <ArrowRight size={16} strokeWidth={1} />
                  </div>
                </div>

                {/* Box 3 */}
                <div className="col-span-1 flex justify-center">
                  <FlywheelNode 
                    icon={Rocket} 
                    label={<>Scale &<br/>Lock-in</>} 
                    delay={0.3}
                  />
                </div>

                {/* Arrow 3 */}
                <div className="col-span-1 flex justify-center">
                  <div className="text-gray-300">
                    <ArrowRight size={16} strokeWidth={1} />
                  </div>
                </div>

                {/* Box 4 */}
                <div className="col-span-1 flex justify-center">
                  <FlywheelNode 
                    icon={Briefcase} 
                    label={<>Bring to<br/>Companies</>} 
                    delay={0.4}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center justify-center gap-4 py-4">
              {/* Connecting Line */}
              <div className="absolute top-8 bottom-8 left-1/2 w-px bg-gray-100 -z-10" />

              <FlywheelNode 
                icon={GraduationCap} 
                label={<>Students &<br/>Founders</>} 
                delay={0.1}
              />
              
              <div className="text-gray-300 py-1">
                <ArrowRight className="rotate-90" size={16} strokeWidth={1} />
              </div>

              <FlywheelNode 
                icon={Zap} 
                label={<>Build on<br/>Groq</>} 
                delay={0.2}
              />

              <div className="text-gray-300 py-1">
                <ArrowRight className="rotate-90" size={16} strokeWidth={1} />
              </div>

              <FlywheelNode 
                icon={Rocket} 
                label={<>Scale &<br/>Lock-in</>} 
                delay={0.3}
              />

              <div className="text-gray-300 py-1">
                <ArrowRight className="rotate-90" size={16} strokeWidth={1} />
              </div>

              <FlywheelNode 
                icon={Briefcase} 
                label={<>Bring to<br/>Companies</>} 
                delay={0.4}
              />
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto text-xs md:text-sm text-gray-500 mt-8 md:mt-12 px-4">
            If Groq becomes their default inference platform now, you get bottom-up adoption, long-term lock-in, and a generation of builders who instinctively think "Groq".
          </div>
        </Section>

        {/* 7. What I'd Do */}
        <Section id="what-id-do" className="border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-groq-orange font-mono text-xs uppercase tracking-wider mb-2 block">06 / Execution</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What I'd do in a placement</h2>
            </div>
            <div className="md:col-span-8">
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "University & Accelerator GTM",
                  desc: "Work with accelerators, hackathons, and AI societies to make “building on Groq” a default option."
                },
                {
                  title: "Hands-on developer activation",
                  desc: "Workshops, mini-hackathons, and “build on Groq” days that actually ship things – not just talks."
                },
                {
                  title: "Simple, opinionated examples",
                  desc: "Clear templates and examples that show when Groq is the obvious choice (and how to plug it in quickly)."
                },
                {
                  title: "Tight feedback loop",
                  desc: "Bring back blunt, unfiltered feedback from builders into product and GTM to sharpen the story."
                }
              ].map((card, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded hover:border-groq-orange/50 hover:shadow-sm transition-all group">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-groq-orange transition-colors">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-500 text-sm">
              I'm willing to wear whatever hat is most useful – GTM, community, dev-ops, project management, product-adjacent, something hybrid – as long as I'm close to the work and the team.
            </p>
            </div>
          </div>
        </Section>

        {/* 8. Ask / Contact */}
        <Section id="ask-contact">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What I’m asking for</h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Let me do my placement year with Groq.
            </p>
            <p className="text-gray-500 mb-12 leading-relaxed">
              If it makes sense, point me at this “next generation of builders / mindshare” problem and let me help turn it into a repeatable GTM motion.
              If not, give me another problem to work on.
              I mainly want to be in the room, learn fast, and contribute.
            </p>

            {/* Career Timeline */}
            <div className="mb-16 pt-10 border-t border-gray-100">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-6 block">Career Context</span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Age 16</div>
                  <div className="text-gray-500">Founded company, scaled to six-figure revenue</div>
                </div>
                <div className="hidden sm:block text-gray-200">/</div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Age 17</div>
                  <div className="text-gray-500">Co-founded high six-figure blockchain project</div>
                </div>
                <div className="hidden sm:block text-gray-200">/</div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Age 20</div>
                  <div className="text-gray-500">VC-backed AI prop-tech startup (London)</div>
                </div>
                <div className="hidden sm:block text-gray-200">/</div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Age 21</div>
                  <div className="text-gray-500">Director, Accelerate ME (UK's leading student-led accelerator)</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-8 py-4 bg-gray-900 text-white rounded font-medium hover:bg-groq-orange transition-colors duration-300 w-full sm:w-auto"
              >
                Contact Me
              </a>
              
              <div className="flex gap-8 text-gray-400">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-groq-orange transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-groq-orange transition-colors" aria-label="X (Twitter)">
                  <XIcon size={24} />
                </a>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-groq-orange transition-colors" aria-label="GitHub">
                  <Github size={24} strokeWidth={1.5} />
                </a>
                <a href={CONTACT.cv} target="_blank" rel="noopener noreferrer" className="hover:text-groq-orange transition-colors" aria-label="Download CV">
                  <FileText size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>
            
            <footer className="mt-24 text-xs text-gray-300 font-mono">
              OLIVER V. // 2025 // BUILT WITH NEXT.JS + TAILWIND + GROQ VIBES
            </footer>
          </div>
        </Section>
      </main>
    </div>
  );
}
