import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reveal";

/**
 * 3D tilt-toward-cursor card with a cursor-tracking glow.
 * All motion happens on refs, never on React state, so hover never re-renders.
 */
export function TiltCard({
  children,
  className,
  strength = 9,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = wrap.current;
    const card = inner.current;
    if (!el || !card) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(900px) rotateY(${(x - 0.5) * strength * 2}deg) rotateX(${
      (0.5 - y) * strength * 2
    }deg) translateZ(0)`;
    if (glow.current) {
      glow.current.style.opacity = "1";
      glow.current.style.background = `radial-gradient(340px circle at ${x * 100}% ${
        y * 100
      }%, color-mix(in oklab, var(--af-glow) 26%, transparent), transparent 65%)`;
    }
  };

  const reset = () => {
    if (inner.current) inner.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
    if (glow.current) glow.current.style.opacity = "0";
  };

  return (
    <div ref={wrap} onMouseMove={onMove} onMouseLeave={reset} className={cn("group", className)}>
      <div
        ref={inner}
        className="relative h-full will-change-transform transition-transform duration-300 ease-out"
      >
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        />
        {children}
      </div>
    </div>
  );
}

/** Button wrapper that drifts toward the cursor and springs back. */
export function Magnetic({
  children,
  className,
  radius = 16,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    ref.current.style.transform = `translate3d(${dx * radius}px, ${dy * radius * 0.6}px, 0)`;
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
      }}
      className={cn(
        "inline-block will-change-transform transition-transform duration-500 ease-out",
        className,
      )}
    >
      {children}
    </span>
  );
}
