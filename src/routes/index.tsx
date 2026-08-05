import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import helmetVideo from "@/assets/helmet-hero.mp4.asset.json";
import helmetPoster from "@/assets/helmet-poster.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agentic Force — Step Through. Work Smarter." },
      {
        name: "description",
        content:
          "Agentic Force: step through to a smarter way of working. A cinematic look at autonomous agents built for precision, speed, and control.",
      },
      { property: "og:title", content: "Agentic Force — Step Through. Work Smarter." },
      {
        property: "og:description",
        content:
          "Step through to a smarter way of working. Autonomous agents built for precision, speed, and control.",
      },
    ],
  }),
  component: Index,
});

const NAV_LINKS = ["Agents", "Platform", "Editor's Pick", "Interviews", "Field Notes"];

/** Glowing double-chevron mark from the brand reference. */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden className={className} fill="currentColor">
      <path d="M24 0 46 34h-9L24 12 11 34H2L24 0Z" />
      <path d="M15 40h18l-9-14-9 14Z" opacity="0.9" />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    if (!trailerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTrailerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [trailerOpen]);

  return (
    <div className="relative flex h-screen min-h-screen flex-col overflow-hidden bg-af-deep text-white">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={helmetVideo.url}
        poster={helmetPoster.url}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      />


      {/* faint hexagon studio mesh + cool navy wash, like the reference renders */}
      <div
        aria-hidden
        className="hex-mesh pointer-events-none fixed inset-0 z-[1] opacity-[0.12] mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 8%, color-mix(in oklab, var(--af-glow) 16%, transparent) 0%, transparent 55%), linear-gradient(to bottom, color-mix(in oklab, var(--af-deep) 55%, transparent) 0%, transparent 30%, color-mix(in oklab, var(--af-deep) 75%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2] backdrop-blur-xl bottom-blur-mask"
      />

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <div
          className="animate-blur-fade-up flex h-8 items-center gap-2.5 md:h-10"
          style={{ animationDelay: "0ms" }}
        >
          <Mark className="h-5 w-6 text-white drop-shadow-[0_0_10px_var(--af-glow)] md:h-6 md:w-7" />
          <span className="text-chrome text-base font-semibold tracking-[0.18em] uppercase md:text-lg">
            Agentic Force
          </span>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              className="animate-blur-fade-up text-sm text-white/80 transition-colors hover:text-white"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="liquid-glass animate-blur-fade-up hidden items-center gap-2 rounded-full px-4 py-2 text-sm md:px-6 sm:flex"
            style={{ animationDelay: "350ms" }}
          >
            <span>Search</span>
            <Search size={18} />
          </button>

          <button
            aria-label="Profile"
            className="liquid-glass animate-blur-fade-up hidden h-10 w-10 items-center justify-center rounded-full sm:flex"
            style={{ animationDelay: "400ms" }}
          >
            <User size={18} />
          </button>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="liquid-glass animate-blur-fade-up relative flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            style={{ animationDelay: "350ms" }}
          >
            <span
              className={`absolute transition-all duration-500 ease-out ${
                open ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu size={18} />
            </span>
            <span
              className={`absolute transition-all duration-500 ease-out ${
                open ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-50 opacity-0"
              }`}
            >
              <X size={18} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`absolute top-[72px] right-0 left-0 z-40 border-t border-b border-white/10 bg-af-deep/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3 sm:px-6">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm transition-all duration-500 ease-out hover:bg-white/5 ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-white/10 px-4 py-4 sm:hidden sm:px-6">
          <button className="liquid-glass flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm">
            <span>Search</span>
            <Search size={18} />
          </button>
          <button
            aria-label="Profile"
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full"
          >
            <User size={18} />
          </button>
        </div>
      </div>

      {/* Hero content */}
      <main className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-8 sm:px-6 md:px-12 md:pb-16">
        <div className="flex flex-col items-end gap-8 md:flex-row">
          <div className="w-full flex-1">
            <div
              className="animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs text-white/80 sm:gap-6 sm:text-sm md:mb-8"
              style={{ animationDelay: "300ms" }}
            >
              <span className="flex items-center gap-2">
                <Star size={16} className="fill-white sm:h-5 sm:w-5" />
                <span className="font-medium">8.7/10 IMDB</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                <span>132 min</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                <span>April, 2025</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
                <span className="tracking-[0.22em] uppercase">Agentic Force</span>
              </span>
            </div>

            <h1
              className="animate-blur-fade-up mb-4 text-3xl font-normal sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
              style={{ animationDelay: "400ms", letterSpacing: "-0.04em" }}
            >
              Step Through. Work Smarter.
            </h1>

            <p
              className="animate-blur-fade-up mb-6 max-w-2xl text-base text-gray-400 sm:text-lg md:mb-12 md:text-xl"
              style={{ animationDelay: "500ms" }}
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => setTrailerOpen(true)}
                className="animate-blur-fade-up glow-rim flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3"
                style={{ animationDelay: "600ms" }}
              >
                <Play size={18} className="fill-black" />
                <span>Watch Now</span>
              </button>
              <button
                className="liquid-glass animate-blur-fade-up rounded-full px-6 py-2.5 font-medium sm:px-8 sm:py-3"
                style={{ animationDelay: "700ms" }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex w-full items-center gap-3 md:w-auto md:justify-end">
            <button
              className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 text-sm sm:px-6 sm:py-3"
              style={{ animationDelay: "800ms" }}
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>
            <button
              className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 text-sm sm:px-6 sm:py-3"
              style={{ animationDelay: "900ms" }}
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>

      {/* Trailer modal */}
      {trailerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Trailer"
          onClick={() => setTrailerOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-af-deep/85 px-4 backdrop-blur-2xl"
          style={{ animation: "trailerBackdropIn 400ms ease-out forwards" }}
        >
          <button
            aria-label="Close trailer"
            onClick={() => setTrailerOpen(false)}
            className="liquid-glass absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full md:top-8 md:right-8"
          >
            <X size={18} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
            style={{ animation: "trailerIn 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            <div className="glow-rim relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                className="h-full w-full object-cover"
                src={helmetVideo.url}
                autoPlay
                loop
                controls
                playsInline
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-lg font-normal tracking-[-0.04em] sm:text-xl">
                Step Through. Work Smarter. — Official Trailer
              </p>
              <p className="text-xs text-gray-400 sm:text-sm">132 min · April, 2025</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
