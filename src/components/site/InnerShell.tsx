import { Link } from "@tanstack/react-router";
import { Hexagon, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Mark } from "./Mark";

export const PRIMARY_NAV = [
  { label: "Journey", to: "/", hash: "journey" },
  { label: "Services", to: "/services" },
  { label: "Diagnostic", to: "/", hash: "quiz" },
  { label: "Contact", to: "/", hash: "cta" },
] as const;

/** Compact glass masthead for inner pages — never mounts the hero WebGL journey. */
export function InnerHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-40">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-5 backdrop-blur-xl bg-af-deep/60 border-b border-white/10">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <Mark className="h-5 w-6 shrink-0 text-white drop-shadow-[0_0_10px_var(--af-glow)]" />
          <span className="text-chrome truncate text-sm font-semibold tracking-[0.2em] whitespace-nowrap uppercase md:text-base">
            Agentic Force
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {PRIMARY_NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={"hash" in n ? n.hash : undefined}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:hello@agenticforce.ai?subject=AgenticForce%20access%20request"
            className="liquid-glass hidden shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-[11px] tracking-[0.14em] whitespace-nowrap uppercase sm:flex sm:px-5 sm:text-sm"
          >
            <Hexagon size={15} />
            Request access
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-b border-white/10 bg-af-deep/95 px-4 py-4 backdrop-blur-xl">
          <nav className="flex flex-col">
            {PRIMARY_NAV.map((n, i) => (
              <Link
                key={n.label}
                to={n.to}
                hash={"hash" in n ? n.hash : undefined}
                onClick={() => setOpen(false)}
                className="animate-blur-fade-up border-b border-white/5 py-3 text-sm text-white/75"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="mailto:hello@agenticforce.ai?subject=AgenticForce%20access%20request"
              className="glow-rim mt-4 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Request access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Static cinematic masthead + page body wrapper for inner routes. */
export function InnerShell({
  kicker,
  title,
  lead,
  children,
  poster,
}: {
  kicker: string;
  title: string;
  lead: string;
  children: ReactNode;
  poster: string;
}) {
  return (
    <div className="min-h-screen bg-af-deep text-white">
      <InnerHeader />

      <section className="relative isolate overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:px-10 md:pt-44 md:pb-24">
        <img
          src={poster}
          alt="The Agentic Force helmet lit by blue LED accents in a dark studio"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-af-deep via-af-deep/85 to-af-deep/60"
        />
        <div
          aria-hidden
          className="hex-mesh pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-screen"
        />

        <div className="mx-auto max-w-5xl">
          <p className="animate-blur-fade-up mb-5 flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/60 uppercase">
            <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
            {kicker}
          </p>
          <h1
            className="animate-blur-fade-up text-4xl font-normal sm:text-5xl md:text-6xl"
            style={{ letterSpacing: "-0.045em", animationDelay: "80ms" }}
          >
            {title}
          </h1>
          <p
            className="animate-blur-fade-up mt-5 max-w-2xl text-base text-white/65 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {lead}
          </p>
        </div>
      </section>

      {children}
    </div>
  );
}
