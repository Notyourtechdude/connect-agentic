import { useEffect, useRef } from "react";

/**
 * Permanent honeycomb backdrop for the landing content.
 * Breathes continuously, and deepens its breath as the page scrolls.
 */
export function HexBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = window.scrollY;
    let energy = 0;

    const loop = () => {
      const y = window.scrollY;
      const v = Math.min(1, Math.abs(y - last) / 60);
      last = y;
      energy += (v - energy) * 0.06;
      el.style.setProperty("--breath", energy.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-af-deep" />
      <div className="hex-mesh hex-breathe absolute inset-[-20%] mix-blend-screen" />
      <div
        className="hex-mesh hex-breathe absolute inset-[-30%] mix-blend-screen"
        style={{ animationDelay: "-3.5s", backgroundSize: "68px 118px", opacity: 0.5 }}
      />
      <div className="hex-bloom absolute inset-0" />
    </div>
  );
}
