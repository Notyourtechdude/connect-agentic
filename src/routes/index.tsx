import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Journey } from "@/components/journey/Journey";
import { Services } from "@/components/site/Services";
import { Quiz } from "@/components/site/Quiz";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";

const SITE = "https://connect-agentic.lovable.app";
const SHARE_IMAGE = `${SITE}/__l5e/assets-v1/8c9acd1a-a06d-4b63-932f-99f6617c9c20/scene1.webp`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgenticForce — Autonomous AI Agents for Revenue Teams" },
      {
        name: "description",
        content:
          "AgenticForce deploys autonomous AI agents for workflow automation, lead generation, predictive analytics, and performance marketing. Cinematic WebGL journey included.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AgenticForce" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:title", content: "AgenticForce — Autonomous AI Agents for Revenue Teams" },
      {
        property: "og:description",
        content:
          "Agentic AI solutions, workflow automation, and decision intelligence — engineered end to end. Find your perfect AI solution in four questions.",
      },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:alt", content: "AgenticForce helmet in a cinematic blue-lit hangar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AgenticForce — Autonomous AI Agents for Revenue Teams" },
      {
        name: "twitter:description",
        content:
          "Agentic AI solutions, workflow automation, and decision intelligence — engineered end to end.",
      },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "twitter:image:alt", content: "AgenticForce helmet in a cinematic blue-lit hangar" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
  }),
  component: Index,
});


function Index() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  return (
    <main className="bg-af-deep">
      <h1 className="sr-only">
        AgenticForce — autonomous AI agents, workflow automation, and decision intelligence
      </h1>

      <Journey />

      {/* below-hero content rides over the pinned stage through a masked wipe */}
      <div className="relative z-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-[45vh] h-[45vh] bg-gradient-to-b from-transparent to-af-deep"
        />
        <div className="relative bg-af-deep text-white">
          <Services />
          <Quiz />
          <FinalCta mobile={mobile} />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
