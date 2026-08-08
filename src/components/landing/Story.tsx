const CHAPTERS: Array<{ no: string; title: string; copy: string }> = [
  {
    no: "Chapter One",
    title: "The Agents Wake Up",
    copy: "It starts small. A repetitive task, handed off to an AI agent that doesn't get tired, doesn't forget steps, and doesn't need supervision. Then another task. Then a dozen. Before long, your Agentic AI Solutions aren't just executing — they're deciding, adapting, and getting sharper with every cycle. The work that used to eat your day now runs quietly in the background.",
  },
  {
    no: "Chapter Two",
    title: "The Machine Learns to Move",
    copy: "With agents in place, the next question is obvious — what connects them? Workflow Automation becomes the nervous system of the operation, threading your apps, your data, and your people into a single continuous motion. Nothing falls through the cracks because nothing has to be carried by hand anymore.",
  },
  {
    no: "Chapter Three",
    title: "The Voice That Never Sleeps",
    copy: "Meanwhile, your brand needs to show up everywhere, all the time — and that's exhausting for a human team alone. AI Social Media Management picks up the slack: writing, scheduling, engaging, testing what resonates, refining what doesn't. Your presence grows without your hours shrinking.",
  },
  {
    no: "Chapter Four",
    title: "Finding the Right People, Faster",
    copy: "A business that runs well still needs to grow. AI Lead Generation goes looking — quietly identifying who's actually worth talking to, qualifying them before your team spends a single minute, and handing over only the conversations worth having.",
  },
  {
    no: "Chapter Five",
    title: "Seeing What's Coming",
    copy: "At this point, you're not just reacting anymore — you're anticipating. Predictive Analytics & BI takes the noise of raw data and turns it into foresight: what's about to happen, what it means, and what you should do about it before your competitors even notice the shift.",
  },
  {
    no: "Chapter Six",
    title: "Making Every Dollar Work Harder",
    copy: "Growth costs money — unless you spend it intelligently. AI Performance Marketing takes over the guesswork of ad spend, finding the audiences worth reaching and optimizing every campaign in real time, so ROI stops being a hope and starts being a habit.",
  },
  {
    no: "Chapter Seven",
    title: "Becoming Unmistakable",
    copy: "Somewhere in this journey, the business itself needs to feel like something — distinct, memorable, unmistakably yours. Brand Identity & Strategy shapes that identity deliberately, built for an audience that scrolls past everything that doesn't stand out.",
  },
  {
    no: "Chapter Eight",
    title: "Where New Stories Begin",
    copy: "And for those just starting this journey — the founders, the early builders — Start-up AI Incubation exists to make sure they don't have to learn all of this the hard way. Strategy, implementation, and acceleration, from day one.",
  },
];

const FOUNDATION: Array<[string, string]> = [
  ["Multi-Agent Orchestration", "keeps every agent working in concert, not chaos."],
  ["Enterprise-Grade Security", "means the story never becomes a cautionary tale."],
  ["Self-Optimizing Systems", "ensure the plot keeps improving itself, chapter after chapter."],
  ["Privacy-First Architecture", "means the story is always yours to tell — never ours to keep."],
  ["No-Code Integrations", "remove the barrier between idea and action."],
  ["Real-Time Analytics", "let you read the story as it's being written, not after it ends."],
];

export function Story() {
  return (
    <section id="story" className="relative px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="flex items-center gap-2.5 text-xs tracking-[0.28em] text-white/55 uppercase">
          <span className="animate-glow-pulse h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_10px_var(--af-glow)]" />
          Our Services: A Story of Transformation
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
          Every business starts the same way — reacting to problems, drowning in manual work,
          guessing at what comes next. This is the story of what happens after you decide that's not
          good enough anymore.
        </p>

        <ol className="mt-16 space-y-14 border-l border-white/10 pl-6 sm:pl-10">
          {CHAPTERS.map((c) => (
            <li key={c.no} className="relative">
              <span className="absolute top-2 -left-[27px] h-1.5 w-1.5 rounded-full bg-af-glow shadow-[0_0_12px_var(--af-glow)] sm:-left-[43px]" />
              <p className="text-[11px] tracking-[0.28em] text-af-glow uppercase">{c.no}</p>
              <h3
                className="mt-3 text-2xl font-normal text-white sm:text-3xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                {c.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">{c.copy}</p>
            </li>
          ))}
        </ol>

        <div className="liquid-glass mt-20 rounded-2xl p-7 sm:p-10">
          <h3
            className="text-2xl font-normal text-white sm:text-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            The Foundation Beneath the Story
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            None of this works without something solid underneath it. That's what Built for Scale
            &amp; Security means to us — not a feature list, but the quiet infrastructure that lets
            the story keep going without breaking:
          </p>
          <ul className="mt-7 space-y-4">
            {FOUNDATION.map(([name, tail]) => (
              <li key={name} className="flex gap-3 text-sm leading-relaxed text-white/60">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-af-glow" />
                <span>
                  <span className="text-white">{name}</span> {tail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
