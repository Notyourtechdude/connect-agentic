import { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import type { Service } from "./services-data";

export function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${service.id}-modal-title`}
    >
      <div
        className="animate-modal-backdrop absolute inset-0 bg-af-deep/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="animate-modal-panel liquid-glass relative w-full max-w-2xl rounded-3xl p-6 sm:p-10"
      >
        <div
          aria-hidden
          className="hex-mesh pointer-events-none absolute inset-0 rounded-3xl opacity-[0.07] mix-blend-screen"
        />
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="relative">
          <span className="glow-rim inline-flex h-12 w-12 items-center justify-center rounded-2xl text-af-glow">
            <Icon size={22} />
          </span>
          <p className="mt-6 flex items-center gap-2.5 text-[11px] tracking-[0.28em] text-white/55 uppercase">
            <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
            {service.title}
          </p>
          <h3
            id={`${service.id}-modal-title`}
            className="mt-4 text-2xl font-normal text-white sm:text-4xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            {service.modalTitle}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            {service.intro}
          </p>

          <ul className="mt-8 space-y-3 border-t border-white/10 pt-8">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-af-glow shadow-[0_0_8px_var(--af-glow)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="glow-rim inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
            >
              {service.cta}
              <ArrowRight size={16} />
            </a>
            <button
              onClick={onClose}
              className="rounded-full px-5 py-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              Back to services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
