import { ClientOnly } from "@tanstack/react-router";
import Lenis from "lenis";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowDown, Hexagon, Play } from "lucide-react";
import { SCENES, sceneCopyOpacity, clamp01 } from "./timeline";
import staticFrame from "@/assets/scene5.webp.asset.json";

const Experience = lazy(() =>
  import("./Experience").then((m) => ({ default: m.Experience })),
);

const NAV = ["Journey", "Hardware", "Platform", "Field Notes"];

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden className={className} fill="currentColor">
      <path d="M24 0 46 34h-9L24 12 11 34H2L24 0Z" />
      <path d="M15 40h18l-9-14-9 14Z" opacity="0.9" />
    </svg>
  );
}

export function Journey() {
  const progress = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<Array<HTMLDivElement | null>>([]);
  const railRef = useRef<HTMLSpanElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const hintRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);


  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    let raf = 0;

    const paint = (p: number) => {
      progress.current = p;
      SCENES.forEach((_, i) => {
        const el = sceneRefs.current[i];
        if (!el) return;
        const o = sceneCopyOpacity(i, p);
        el.style.opacity = String(o);
        el.style.transform = `translate3d(0, ${(1 - o) * 26}px, 0)`;
        el.style.filter = `blur(${(1 - o) * 14}px)`;
        el.style.pointerEvents = o > 0.7 ? "auto" : "none";
        const dot = dotRefs.current[i];
        if (dot) dot.style.opacity = String(0.25 + o * 0.75);
      });
      if (railRef.current) railRef.current.style.transform = `scaleY(${clamp01(p)})`;
      if (hintRef.current) hintRef.current.style.opacity = String(1 - clamp01(p * 14));
    };

    const loop = (time: number) => {
      lenis.raf(time);
      const hero = heroRef.current;
      let p = 0;
      if (hero) {
        const max = hero.offsetHeight - window.innerHeight;
        p = max > 0 ? clamp01((window.scrollY - hero.offsetTop) / max) : 0;
      }
      paint(p);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return (
    <div className="relative bg-af-deep text-white">
      {/* fixed WebGL stage */}
      <div className="fixed inset-0 z-0 bg-af-deep">
        {reduced && (
          <img
            src={staticFrame.url}
            alt="The Agentic Force helmet resting on a dark pedestal, lit by blue LED accents"
            className="h-full w-full object-cover"
          />
        )}
        {!reduced && (
          <ClientOnly fallback={null}>
            <Suspense fallback={null}>
              <Experience progress={progress} mobile={mobile} />
            </Suspense>
          </ClientOnly>
        )}
      </div>

      <div
        aria-hidden
        className="hex-mesh pointer-events-none fixed inset-0 z-[1] opacity-[0.08] mix-blend-screen"
      />

      {/* nav */}
      <header className="fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-6">
        <div className="flex items-center gap-2.5">
          <Mark className="h-5 w-6 text-white drop-shadow-[0_0_10px_var(--af-glow)]" />
          <span className="text-chrome text-sm font-semibold tracking-[0.2em] uppercase md:text-base">
            Agentic Force
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n} href="#" className="text-sm text-white/70 transition-colors hover:text-white">
              {n}
            </a>
          ))}
        </nav>
        <button className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.14em] uppercase sm:px-5 sm:text-sm">
          <Hexagon size={15} />
          <span>Request access</span>
        </button>
      </header>

      {/* progress rail */}
      <div className="pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 md:right-8 md:flex">
        <div className="relative h-40 w-px bg-white/15">
          <span
            ref={railRef}
            className="absolute inset-0 origin-top bg-af-glow shadow-[0_0_12px_var(--af-glow)]"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          {SCENES.map((s, i) => (
            <span
              key={s.key}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="h-1.5 w-1.5 rounded-full bg-af-glow"
              style={{ opacity: 0.25 }}
            />
          ))}
        </div>
      </div>

      {/* pinned copy layer */}
      <div className="pointer-events-none fixed inset-0 z-20 flex items-end px-4 pb-16 sm:px-6 md:items-center md:px-10 md:pb-0">
        <div className="relative w-full max-w-2xl">
          {(reduced ? [SCENES[SCENES.length - 1]!] : SCENES).map((s, idx) => {
            const i = reduced ? SCENES.length - 1 : idx;
            return (
            <div
              key={s.key}
              ref={(el) => {
                sceneRefs.current[i] = el;
              }}
              className="md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2"
              style={{ opacity: reduced || i === 0 ? 1 : 0 }}
            >
              <p className="mb-4 flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/60 uppercase">
                <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
                {s.kicker}
              </p>
              <h2
                className="text-4xl font-normal sm:text-6xl md:text-7xl"
                style={{ letterSpacing: "-0.045em" }}
              >
                {s.title}
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/65 sm:text-lg">{s.copy}</p>
              {i === SCENES.length - 1 && (
                <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
                  <button className="glow-rim flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/85">
                    <Play size={17} className="fill-black" />
                    <span>Watch the film</span>
                  </button>
                  <button className="liquid-glass rounded-full px-6 py-3 font-medium">
                    Explore the platform
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>

      {/* scroll hint */}
      {!reduced && (
        <div
          ref={hintRef}
          className="pointer-events-none fixed bottom-6 left-1/2 z-30 -translate-x-1/2 text-center"
        >
          <ArrowDown size={16} className="mx-auto animate-bounce text-white/70" />
          <p className="mt-2 text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</p>
        </div>
      )}

      {/* scroll spacer drives the normalized timeline */}
      {!reduced && <div aria-hidden className="relative h-[700vh] w-full" />}
      {reduced && <div aria-hidden className="h-screen w-full" />}
    </div>
  );
}
