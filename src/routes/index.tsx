import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "@/components/journey/Journey";
import { HexBackdrop } from "@/components/landing/HexBackdrop";
import { Services } from "@/components/landing/Services";
import { Features } from "@/components/landing/Features";
import { Story } from "@/components/landing/Story";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agentic Force — Autonomous AI Systems for Modern Business" },
      {
        name: "description",
        content:
          "Agentic AI solutions, workflow automation, predictive analytics and performance marketing — delivered on enterprise-grade, privacy-first infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Agentic Force — Autonomous AI Systems for Modern Business" },
      {
        property: "og:description",
        content:
          "A cinematic scroll journey into purpose-built AI: autonomous agents, orchestration, and self-optimizing systems built for scale and security.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-af-deep text-white">
      <h1 className="sr-only">
        Agentic Force — autonomous AI solutions for modern business
      </h1>
      <Journey />
      <div className="relative">
        <HexBackdrop />
        <div className="relative z-10">
          <Services />
          <Features />
          <Story />
          <Footer />
        </div>
      </div>
    </main>
  );
}
