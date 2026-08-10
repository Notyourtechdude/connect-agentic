import { useState } from "react";
import { ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { Magnetic } from "./Interactive";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

type Track = "growth" | "ops" | "engagement" | "data";

const QUESTIONS: Array<{ q: string; options: Array<{ label: string; track: Track }> }> = [
  {
    q: "What's your primary business challenge?",
    options: [
      { label: "Scaling customer acquisition", track: "growth" },
      { label: "Improving operational efficiency", track: "ops" },
      { label: "Enhancing customer engagement", track: "engagement" },
      { label: "Data-driven decision making", track: "data" },
    ],
  },
  {
    q: "Where does most of your team's time disappear?",
    options: [
      { label: "Prospecting and outbound", track: "growth" },
      { label: "Manual, repetitive processes", track: "ops" },
      { label: "Content and community", track: "engagement" },
      { label: "Reporting and analysis", track: "data" },
    ],
  },
  {
    q: "How mature is your current AI stack?",
    options: [
      { label: "Nothing in production yet", track: "ops" },
      { label: "A few assistants and copilots", track: "engagement" },
      { label: "Automations across some teams", track: "growth" },
      { label: "Models in production, needs scale", track: "data" },
    ],
  },
  {
    q: "What outcome would define success in 90 days?",
    options: [
      { label: "A predictable pipeline of qualified leads", track: "growth" },
      { label: "Hours per week returned to the team", track: "ops" },
      { label: "Higher retention and brand pull", track: "engagement" },
      { label: "Forecasts leadership actually trusts", track: "data" },
    ],
  },
];

const RESULTS: Record<Track, { name: string; copy: string; stack: string[] }> = {
  growth: {
    name: "Autonomous Revenue Engine",
    copy: "Your constraint is pipeline. We deploy lead-generation agents with performance-marketing optimization on top, so acquisition compounds without adding headcount.",
    stack: ["AI Lead Generation", "AI Performance Marketing", "Agentic AI Solutions"],
  },
  ops: {
    name: "Operations Autopilot",
    copy: "Your constraint is throughput. We map your processes, then wire agentic workflow automation across your apps and data to remove the manual middle layer.",
    stack: ["Workflow Automation", "Agentic AI Solutions", "Predictive Analytics & BI"],
  },
  engagement: {
    name: "Always-On Brand Presence",
    copy: "Your constraint is attention. We combine AI social media management with brand strategy so your presence stays consistent, distinctive, and always live.",
    stack: ["AI Social Media Management", "Brand Identity & Strategy", "Agentic AI Solutions"],
  },
  data: {
    name: "Decision Intelligence Layer",
    copy: "Your constraint is clarity. We turn your raw data into predictive models and a live BI surface, then let agents act on the signals automatically.",
    stack: ["Predictive Analytics & BI", "Agentic AI Solutions", "Workflow Automation"],
  },
};

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Track[]>([]);
  const [leaving, setLeaving] = useState<"none" | "out">("none");

  const done = step >= QUESTIONS.length;
  const pct = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100);
  const current = QUESTIONS[Math.min(step, QUESTIONS.length - 1)]!;

  const pick = (track: Track) => {
    setLeaving("out");
    window.setTimeout(() => {
      setAnswers((a) => [...a, track]);
      setStep((s) => s + 1);
      setLeaving("none");
    }, 240);
  };

  const winner: Track = (() => {
    const tally = new Map<Track, number>();
    for (const a of answers) tally.set(a, (tally.get(a) ?? 0) + 1);
    let best: Track = answers[0] ?? "ops";
    let bestN = -1;
    for (const [k, v] of tally) if (v > bestN) ((best = k), (bestN = v));
    return best;
  })();

  const reset = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section id="quiz" className="relative isolate px-4 py-28 sm:px-6 md:px-10 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, color-mix(in oklab, var(--af-glow) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="Diagnostic"
          title="Find your perfect AI solution."
          copy="Four questions. A recommended deployment path built from the same playbooks we run for enterprise teams."
          align="center"
        />

        <Reveal delay={220}>
          <div className="gradient-border mt-14 rounded-3xl">
            <div className="liquid-glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
              {/* progress */}
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-white/50 uppercase">
                <span>
                  {done
                    ? "Recommendation ready"
                    : `Question ${step + 1} of ${QUESTIONS.length} · ${pct}% complete`}
                </span>
                {done && (
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <RotateCcw size={12} /> Restart
                  </button>
                )}
              </div>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-af-glow shadow-[0_0_14px_var(--af-glow)] transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: `${done ? 100 : pct}%` }}
                />
              </div>

              {!done && (
                <div
                  key={step}
                  className={cn(
                    "mt-9 transition-all duration-300 ease-out",
                    leaving === "out"
                      ? "-translate-x-6 opacity-0 blur-[8px]"
                      : "translate-x-0 animate-blur-fade-up opacity-100",
                  )}
                >
                  <h3 className="text-2xl font-normal text-white sm:text-3xl">{current.q}</h3>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {current.options.map((o, i) => (
                      <button
                        key={o.label}
                        onClick={() => pick(o.track)}
                        className="group relative flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-af-glow/60 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_28px_-10px_var(--af-glow)]"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <span>{o.label}</span>
                        <ArrowRight
                          size={15}
                          className="shrink-0 text-af-glow opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {done && (
                <div className="animate-blur-fade-up mt-9">
                  <p className="flex items-center gap-2 text-xs tracking-[0.24em] text-af-glow uppercase">
                    <Sparkles size={13} /> Recommended path
                  </p>
                  <h3 className="mt-4 text-3xl font-normal text-white sm:text-4xl">
                    {RESULTS[winner].name}
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-white/60">{RESULTS[winner].copy}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-3">
                    {RESULTS[winner].stack.map((item, i) => (
                      <li
                        key={item}
                        className="animate-blur-fade-up flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                        style={{ animationDelay: `${140 + i * 110}ms` }}
                      >
                        <Check size={14} className="shrink-0 text-af-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Magnetic className="mt-8">
                    <a
                      href="#cta"
                      className="glow-rim inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/85"
                    >
                      Book the walkthrough <ArrowRight size={16} />
                    </a>
                  </Magnetic>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
