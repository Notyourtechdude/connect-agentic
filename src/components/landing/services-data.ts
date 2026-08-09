import {
  Bot,
  Workflow,
  Share2,
  Target,
  LineChart,
  Megaphone,
  Gem,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  copy: string;
  modalTitle: string;
  intro: string;
  bullets: string[];
  cta: string;
  motif: string;
};

export const SERVICES: Service[] = [
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Solutions",
    copy: "Deploy autonomous AI agents that handle complex workflows, make decisions, and continuously improve their performance.",
    modalTitle: "Autonomous agents that run the work",
    intro:
      "Agentic systems don't wait for prompts. They hold an objective, choose the next action, use your tools, and report back — so intelligent operations scale without scaling headcount.",
    bullets: [
      "Autonomous decision-making inside guardrails you define",
      "Agents for operations, sales, support and internal back-office",
      "Multi-step task execution across systems and long horizons",
      "Continuous improvement loops tuned against real outcomes",
      "Manual overhead reduced, not relabelled",
    ],
    cta: "Design my agent stack",
    motif: "A single agent node branching into a lit hexagonal lattice.",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    copy: "Streamline operations with intelligent automation that connects your apps, data, and processes into seamless flows.",
    modalTitle: "One connected flow instead of forty handoffs",
    intro:
      "We map how work actually moves through your company, then rebuild it as automated flows where data arrives already correct and nothing waits on a copy-paste.",
    bullets: [
      "Process mapping and bottleneck removal before any build",
      "Native integrations across your existing app and data stack",
      "Cross-platform automation with full audit trails",
      "No-code and low-code execution your team can own",
      "Handoff delays measured, then engineered out",
    ],
    cta: "Map my workflows",
    motif: "Light tracing a continuous path through machined channels.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "AI Social Media Management",
    copy: "AI-powered content creation, scheduling, and engagement optimization across all major platforms.",
    modalTitle: "A publishing system, not a content treadmill",
    intro:
      "Your brand voice becomes a model the system works inside: planning, producing, scheduling and learning from what actually earns attention.",
    bullets: [
      "AI-assisted planning against a locked brand voice",
      "Automated scheduling pipelines with human approval gates",
      "Engagement support and response triage",
      "Performance insight that redirects the next cycle",
      "Multi-platform consistency without duplicate work",
    ],
    cta: "Build my content engine",
    motif: "Parallel signal bars pulsing in staggered rhythm.",
  },
  {
    id: "lead-generation",
    icon: Target,
    title: "AI Lead Generation",
    copy: "Identify, qualify, and convert high-intent prospects with autonomous lead generation systems.",
    modalTitle: "Pipeline that qualifies itself",
    intro:
      "Instead of buying volume, the system finds intent signals, enriches what it finds, disqualifies early, and hands your team only conversations worth having.",
    bullets: [
      "Prospect discovery from live intent and firmographic signals",
      "Automated qualification against your real ICP",
      "Enrichment and segmentation before first touch",
      "Outbound sequence design and deliverability engineering",
      "Conversion pipeline support through to closed-won",
    ],
    cta: "Open my pipeline audit",
    motif: "A reticle narrowing onto a single bright point.",
  },
  {
    id: "predictive-analytics",
    icon: LineChart,
    title: "Predictive Analytics & BI",
    copy: "Turn raw data into actionable insights and strategic decisions with advanced predictive AI models.",
    modalTitle: "Decisions ahead of the quarter, not after it",
    intro:
      "We consolidate the data you already generate and put a forecast in front of the people who make calls — with the assumptions visible.",
    bullets: [
      "Demand, revenue and churn forecasting",
      "Performance dashboards built per decision, not per department",
      "Predictive modelling with explainable drivers",
      "Strategic reporting cadences leadership can trust",
      "Business intelligence workflows wired into daily operations",
    ],
    cta: "See a forecast on my data",
    motif: "A projected curve extending past the last measured point.",
  },
  {
    id: "performance-marketing",
    icon: Megaphone,
    title: "AI Performance Marketing",
    copy: "Optimize ad spend, target high-value audiences, and maximize ROI with AI-driven marketing campaigns.",
    modalTitle: "Spend that reallocates itself",
    intro:
      "Campaigns run as a closed loop: audience intelligence in, creative and budget decisions out, measured against contribution margin rather than clicks.",
    bullets: [
      "Continuous campaign and creative optimization",
      "Audience intelligence built from first-party signal",
      "Budget efficiency enforced by hard guardrails",
      "Full-funnel performance tracking and attribution",
      "ROI improvement frameworks reviewed on a fixed cadence",
    ],
    cta: "Review my spend efficiency",
    motif: "Concentric rings tightening around a weighted centre.",
  },
  {
    id: "brand-identity",
    icon: Gem,
    title: "Brand Identity & Strategy",
    copy: "Build a memorable, distinctive brand identity engineered to resonate with modern digital audiences.",
    modalTitle: "Identity engineered to survive scale",
    intro:
      "A brand only holds up when the strategy, the system and the surfaces agree. We build all three so growth doesn't dilute what you are.",
    bullets: [
      "Positioning grounded in a defensible market claim",
      "Identity systems with tokens, not just files",
      "Messaging architecture from headline to microcopy",
      "Visual direction with motion and material rules",
      "Digital brand consistency across every touchpoint",
    ],
    cta: "Start a brand session",
    motif: "A machined monogram catching a single hard light.",
  },
  {
    id: "startup-incubation",
    icon: Rocket,
    title: "Start-up AI Incubation",
    copy: "Comprehensive support for startups including AI strategy, implementation, and growth acceleration.",
    modalTitle: "From thesis to shipped system",
    intro:
      "For founders who need to move now: AI strategy, a working build, and the operating discipline to grow it — in one engagement.",
    bullets: [
      "MVP AI strategy scoped to a real wedge",
      "Startup systems design for ops, data and delivery",
      "Growth planning with instrumented milestones",
      "Product and operations enablement for a small team",
      "Investor-ready narrative and metrics direction",
    ],
    cta: "Apply for incubation",
    motif: "Ignition light rising along a vertical rail.",
  },
];
