import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "./services-data";
import { ServiceModal } from "./ServiceModal";

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = SERVICES.find((s) => s.id === openId) ?? null;

  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
          <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
          Our Services
        </p>
        <h2
          className="mt-5 max-w-3xl text-3xl font-normal text-white sm:text-5xl md:text-6xl"
          style={{ letterSpacing: "-0.045em" }}
        >
          AI-First Solutions for Modern Business
        </h2>
        <p className="mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
          Transform every aspect of your business with purpose-built AI solutions that drive
          measurable results.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ id, icon: Icon, title, copy }) => (
            <article key={id} className="liquid-glass group flex flex-col rounded-2xl p-6">
              <span className="glow-rim mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-af-glow transition-transform duration-300 group-hover:scale-105">
                <Icon size={19} />
              </span>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{copy}</p>
              <button
                onClick={() => setOpenId(id)}
                aria-label={`Learn more about ${title}`}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-xs tracking-[0.14em] text-white/70 uppercase transition-colors hover:text-white group-hover:text-white"
              >
                Learn more
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setOpenId(null)} />}
    </section>
  );
}
