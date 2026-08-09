import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "@/components/journey/Journey";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agentic Force — A Scroll-Driven Helmet Journey" },
      {
        name: "description",
        content:
          "Scroll through five cinematic stages of the Agentic Force helmet: hangar, atmosphere, silhouette, hexagonal mesh, and final integration. A WebGL journey in precision engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Agentic Force — A Scroll-Driven Helmet Journey" },
      {
        property: "og:description",
        content:
          "Five cinematic stages, one continuous WebGL journey. Precision, atmosphere, and blue-LED engineering.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">Agentic Force — a scroll-driven cinematic helmet journey</h1>
      <Journey />
    </main>
  );
}
