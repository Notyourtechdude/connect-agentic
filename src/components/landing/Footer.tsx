import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-4 pb-16 sm:px-6 md:px-10">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Hexagon size={16} className="text-af-glow" />
            <span className="text-chrome text-sm font-semibold tracking-[0.2em] uppercase">
              Agentic Force
            </span>
          </div>
          <p className="text-xs tracking-[0.18em] text-white/40 uppercase">
            Autonomous systems built for control
          </p>
        </div>
      </div>
    </footer>
  );
}
