import { Mark } from "./Mark";

const NAV = ["Journey", "Hardware", "Platform", "Field Notes"];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark className="h-5 w-6 text-white drop-shadow-[0_0_10px_var(--af-glow)]" />
          <span className="text-chrome text-sm font-semibold tracking-[0.2em] uppercase">
            Agentic Force
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {NAV.map((n) => (
            <a
              key={n}
              href="#"
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {n}
            </a>
          ))}
        </nav>
        <p className="text-xs text-white/35">© {new Date().getFullYear()} AgenticForce</p>
      </div>
    </footer>
  );
}
