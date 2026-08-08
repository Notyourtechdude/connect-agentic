import { Network, ShieldCheck, RefreshCw, Lock, Plug, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; copy: string };

const FEATURES: Feature[] = [
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    copy: "Coordinate multiple AI agents working in parallel, each specialized for different tasks but unified in purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    copy: "SOC 2 compliant infrastructure with end-to-end encryption and role-based access controls.",
  },
  {
    icon: RefreshCw,
    title: "Self-Optimizing Systems",
    copy: "Continuous learning loops that improve performance based on real outcomes and KPI feedback.",
  },
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    copy: "Your data stays yours. On-premise options and strict data isolation by default.",
  },
  {
    icon: Plug,
    title: "No-Code Integrations",
    copy: "Connect to 500+ tools and platforms without writing a single line of code.",
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    copy: "Live dashboards and instant insights across all your AI-powered operations.",
  },
];

export function Features() {
  return (
    <section id="platform" className="relative px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
          <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
          Platform Features
        </p>
        <h2
          className="mt-5 max-w-3xl text-3xl font-normal text-white sm:text-5xl md:text-6xl"
          style={{ letterSpacing: "-0.045em" }}
        >
          Built for Scale &amp; Security
        </h2>
        <p className="mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
          Enterprise-ready infrastructure that grows with your business without compromising on
          security or performance.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="bg-af-deep/70 p-7 transition-colors hover:bg-white/[0.04]">
              <span className="mb-5 inline-flex items-center gap-3 text-af-glow">
                <Icon size={18} />
              </span>
              <h3 className="text-base font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
