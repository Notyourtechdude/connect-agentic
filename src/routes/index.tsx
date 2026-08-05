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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Step Through. Work Smarter. — Cinematic Streaming" },
      {
        name: "description",
        content:
          "Watch Step Through. Work Smarter. — a voyage through forgotten realms where past and future intertwine. Stream now in cinematic quality.",
      },
      { property: "og:title", content: "Step Through. Work Smarter. — Cinematic Streaming" },
      {
        property: "og:description",
        content:
          "A voyage through forgotten realms, where past and future intertwine. Stream now in cinematic quality.",
      },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

const NAV_LINKS = ["Movies", "TV Series", "Editor's Pick", "Interviews", "User Reviews"];

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
    <div className="relative flex h-screen min-h-screen flex-col overflow-hidden bg-black text-white">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-mask"
      />

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <div
          className="animate-blur-fade-up flex h-8 items-center text-lg font-semibold tracking-[-0.04em] md:h-10 md:text-xl"
          style={{ animationDelay: "0ms" }}
        >
          CINEMATIC
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              className="animate-blur-fade-up text-sm transition-colors hover:text-gray-300"
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
        className={`absolute top-[72px] right-0 left-0 z-40 border-t border-b border-gray-800 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3 sm:px-6">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm transition-all duration-500 ease-out hover:bg-gray-800/50 ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-gray-800 px-4 py-4 sm:hidden sm:px-6">
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
              className="animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm md:mb-8"
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
              <button
                onClick={() => setTrailerOpen(true)}
                className="animate-blur-fade-up flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3"
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
    </div>
  );
}
