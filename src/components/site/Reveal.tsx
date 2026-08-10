import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/** Staggered blur/translate reveal on scroll-in. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h2" | "h3" | "span" | "li";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn(
        "transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[14px]",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Section eyebrow + heading pair used across the page. */
export function SectionHeading({
  kicker,
  title,
  copy,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p
          className={cn(
            "mb-5 flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase",
            align === "center" && "justify-center",
          )}
        >
          <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className="text-3xl font-normal text-white sm:text-5xl md:text-6xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={180}>
          <p className="mt-5 text-base text-white/60 sm:text-lg">{copy}</p>
        </Reveal>
      )}
    </div>
  );
}
