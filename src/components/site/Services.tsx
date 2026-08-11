import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Megaphone,
  Rocket,
  Share2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { TiltCard } from "./Interactive";
import { Reveal, SectionHeading } from "./Reveal";

const SERVICES = [
  {
    icon: Bot,
    title: "Agentic AI Solutions",
    copy: "Deploy autonomous AI agents that handle complex workflows, make decisions, and continuously improve their performance.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    copy: "Streamline operations with intelligent automation that connects your apps, data, and processes into seamless flows.",
  },
  {
    icon: Share2,
    title: "AI Social Media Management",
    copy: "AI-powered content creation, scheduling, and engagement optimization across all major platforms.",
  },
  {
    icon: Target,
    title: "AI Lead Generation",
    copy: "Identify, qualify, and convert high-intent prospects with autonomous lead generation systems.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & BI",
    copy: "Turn raw data into actionable insights and strategic decisions with advanced predictive AI models.",
  },
  {
    icon: Megaphone,
    title: "AI Performance Marketing",
    copy: "Optimize ad spend, target high-value audiences, and maximize ROI with AI-driven marketing campaigns.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Strategy",
    copy: "Build a memorable, distinctive brand identity engineered to resonate with modern digital audiences.",
  },
  {
    icon: Rocket,
    title: "Start-up AI Incubation",
    copy: "Comprehensive support for startups including AI strategy, implementation, and growth acceleration.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="relative isolate px-4 py-28 sm:px-6 md:px-10 md:py-40">
      <div
        aria-hidden
        className="hex-mesh pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "color-mix(in oklab, var(--af-glow) 22%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="What we build"
          title="Autonomous systems, engineered end to end."
          copy="Eight disciplines, one operating layer. Every engagement ships production-grade agents wired into the tools your team already runs."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <TiltCard className="h-full">
                <article className="liquid-glass relative flex h-full flex-col rounded-2xl p-6">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-af-glow shadow-[0_0_20px_-8px_var(--af-glow)]">
                    <s.icon size={19} />
                  </span>
                  <h3 className="relative z-10 mt-5 text-lg leading-snug font-medium text-white">
                    {s.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/55">
                    {s.copy}
                  </p>
                  <a
                    href="#quiz"
                    className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-xs tracking-[0.18em] text-white/50 uppercase transition-colors hover:text-white"
                  >
                    Explore {s.title}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-af-glow opacity-70 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
