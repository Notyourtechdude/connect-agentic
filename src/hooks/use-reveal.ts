import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled into view (one-shot, cheap IntersectionObserver). */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = "-12% 0px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Normalized 0→1 progress of an element travelling through the viewport.
 * Writes to a ref and calls back inside a single shared rAF tick.
 */
export function useSectionProgress<T extends HTMLElement = HTMLDivElement>(
  onProgress: (p: number) => void,
  enabled = true,
) {
  const ref = useRef<T>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let last = -1;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const raw = (vh - r.top) / (vh + r.height);
        const p = raw < 0 ? 0 : raw > 1 ? 1 : raw;
        if (Math.abs(p - last) > 0.0015) {
          last = p;
          cb.current(p);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  return ref;
}
