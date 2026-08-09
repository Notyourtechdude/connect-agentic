import { ArrowRight, CalendarCheck } from "lucide-react";

export function ClosingCTA() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="liquid-glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 md:py-24">
        <div
          aria-hidden
          className="hex-mesh pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
        />
        <div className="relative">
          <p className="flex items-center justify-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
            <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
            Next Step
          </p>
          <h2
            className="mx-auto mt-6 max-w-3xl text-3xl font-normal text-white sm:text-5xl md:text-6xl"
            style={{ letterSpacing: "-0.045em" }}
          >
            Put an autonomous system to work in your business
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
            One discovery session. We map where autonomy pays off first, what it replaces, and what
            it costs to run — before anything gets built.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@agenticforce.ai"
              className="glow-rim inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition-colors hover:bg-white/85"
            >
              <CalendarCheck size={17} />
              Book a discovery call
            </a>
            <a
              href="#services"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white"
            >
              Review the services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
