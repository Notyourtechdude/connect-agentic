import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useRef } from "react";
import { ArrowRight, CalendarCheck, FileText } from "lucide-react";
import { Magnetic } from "./Interactive";
import { Reveal } from "./Reveal";
import { useReducedMotion, useSectionProgress } from "@/hooks/use-reveal";

const ParticleField = lazy(() =>
  import("./ParticleField").then((m) => ({ default: m.ParticleField })),
);

export function FinalCta({ mobile }: { mobile: boolean }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const sectionRef = useSectionProgress<HTMLElement>((p) => {
    if (glowRef.current) {
      glowRef.current.style.opacity = String(0.25 + p * 0.55);
      glowRef.current.style.transform = `translate3d(-50%, ${(0.5 - p) * 90}px, 0) scale(${
        0.9 + p * 0.28
      })`;
    }
    if (fieldRef.current) {
      fieldRef.current.style.transform = `translate3d(0, ${(0.5 - p) * 60}px, 0)`;
      fieldRef.current.style.opacity = String(0.35 + p * 0.65);
    }
  }, !reduced);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative isolate overflow-hidden px-4 py-32 sm:px-6 md:px-10 md:py-48"
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[520px] w-[980px] max-w-[130vw] rounded-full blur-[130px]"
        style={{
          background: "color-mix(in oklab, var(--af-glow) 26%, transparent)",
          opacity: 0.35,
          transform: "translate3d(-50%, 0, 0)",
        }}
      />
      {!reduced && (
        <div ref={fieldRef} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <ClientOnly fallback={null}>
            <Suspense fallback={null}>
              <ParticleField mobile={mobile} />
            </Suspense>
          </ClientOnly>
        </div>
      )}
      <div
        aria-hidden
        className="hex-mesh pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-screen"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
            <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
            Deploy with us
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="mt-6 text-4xl font-normal text-white sm:text-6xl md:text-7xl"
            style={{ letterSpacing: "-0.045em" }}
          >
            Ready to Transform Your Revenue Engine?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
            Join leading companies using AgenticForce to deploy autonomous AI agents that drive real
            business outcomes. Get started with a personalized demo today.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <button className="glow-rim group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition-colors hover:bg-white/85">
                <CalendarCheck size={17} />
                <span>Schedule a Demo</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Magnetic>
            <Magnetic radius={10}>
              <button className="liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white">
                <FileText size={16} />
                <span>View Case Studies</span>
              </button>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-7 text-xs tracking-[0.16em] text-white/40 uppercase">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}
