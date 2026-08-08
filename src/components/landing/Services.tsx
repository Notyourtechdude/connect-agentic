import {
  ArrowUpRight,
  Bot,
  Workflow,
  Share2,
  Target,
  LineChart,
  Megaphone,
  Gem,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; copy: string };

const SERVICES: Service[] = [
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
    icon: LineChart,
    title: "Predictive Analytics & BI",
    copy: "Turn raw data into actionable insights and strategic decisions with advanced predictive AI models.",
  },
  {
    icon: Megaphone,
    title: "AI Performance Marketing",
    copy: "Optimize ad spend, target high-value audiences, and maximize ROI with AI-driven marketing campaigns.",
  },
  {
    icon: Gem,
    title: "Brand Identity & Strategy",
    copy: "Build a memorable, distinctive brand identity engineered to resonate with modern digital audiences.",
  },
  {
    icon: Rocket,
    title: "Start-up AI Incubation",
    copy: "Comprehensive support for startups including AI strategy, implementation, and growth acceleration.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
          <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
          Our Services
        </p>
        <h2
          className="mt-5 max-w-3xl text-3xl font-normal text-white sm:text-5xl md:text-6xl"
          style={{ letterSpacing: "-0.045em" }}
        >
          AI-First Solutions for Modern Business
        </h2>
        <p className="mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
          Transform every aspect of your business with purpose-built AI solutions that drive
          measurable results.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="liquid-glass group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="glow-rim mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-af-glow">
                <Icon size={19} />
              </span>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{copy}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs tracking-[0.14em] text-white/70 uppercase transition-colors group-hover:text-white">
                Learn more
                <ArrowUpRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
