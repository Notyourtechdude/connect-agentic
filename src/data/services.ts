export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  copy: string;
}

export interface ServiceContent {
  slug: string;
  /** Homepage card title — canonical, do not change. */
  title: string;
  /** Homepage card one-liner — canonical, do not change. */
  short: string;
  icon: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** ~50-word answer-first paragraph for answer engines. */
  answer: string;
  dream: string;
  audience: string[];
  problems: { title: string; copy: string }[];
  deploy: string[];
  steps: ServiceStep[];
  stack: string[];
  faqs: ServiceFaq[];
  related: string[];
}

export const SERVICE_PAGES: ServiceContent[] = [
  {
    slug: "agentic-ai-solutions",
    title: "Agentic AI Solutions",
    short:
      "Deploy autonomous AI agents that handle complex workflows, make decisions, and continuously improve their performance.",
    icon: "Bot",
    h1: "Agentic AI Solutions in Dubai",
    metaTitle: "Agentic AI Solutions in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce builds autonomous AI agents in Dubai that run real workflows, make decisions, and improve with use. First production agent live in 14 days.",
    answer:
      "Agentic AI solutions are production systems where autonomous agents take an objective, plan the steps, use your tools, and report the outcome. AgenticForce designs, builds, and wires those agents in Dubai for UAE and GCC operators, so a department runs itself instead of waiting on a human queue.",
    dream:
      "A department that runs itself: agents pick up work, decide, act inside your tools, and report — without you becoming the bottleneck.",
    audience: [
      "Founders whose growth is capped by their own calendar",
      "UAE and GCC operators running manual back-office queues",
      "Teams already on tools they like, but stitched together by people",
      "Mid-market companies that need production systems, not demos",
    ],
    problems: [
      {
        title: "Work waits on humans",
        copy: "Every handoff parks a task in an inbox. Throughput is capped by attention, not capability.",
      },
      {
        title: "Chatbots answer, they do not act",
        copy: "A prompt window cannot open your CRM, decide, and close the loop. Agents can.",
      },
      {
        title: "Pilots never reach production",
        copy: "Demos skip auth, permissions, error paths, and logs — so nothing survives real volume.",
      },
      {
        title: "No one owns the decision logic",
        copy: "Rules live in someone's head. Agents need it written, testable, and versioned.",
      },
      {
        title: "Nothing compounds",
        copy: "Without evaluation loops, an agent is as good on day 90 as it was on day one.",
      },
    ],
    deploy: [
      "Agent Architecture Blueprint — objectives, tools, guardrails, escalation paths",
      "Production agent swarm on your first live workflow",
      "Tool wiring: CRM, inbox, sheets, storage, internal APIs",
      "Human-in-the-loop approval gates on anything irreversible",
      "Run logs, traces, and cost controls per agent",
      "14-day iteration sprint with weekly evaluation reviews",
    ],
    steps: [
      {
        title: "Diagnose",
        copy: "Four questions map the workflow, volume, and the decision a human currently makes.",
      },
      {
        title: "Architect",
        copy: "We write the agent's objective, tools, limits, and escalation rules before any code ships.",
      },
      {
        title: "Deploy",
        copy: "The first agent goes live in your stack with logs, approvals, and a rollback path.",
      },
    ],
    stack: [
      "Command Diagnostic — included",
      "Agent Architecture Blueprint — included",
      "First production workflow live — core",
      "Stack wiring across your apps — included",
      "14-Day Control Room iteration sprint — included",
    ],
    faqs: [
      {
        q: "What is an autonomous AI agent for business?",
        a: "An autonomous AI agent receives an objective, plans its own steps, calls your tools to execute them, and reports the result. Unlike a chatbot, it acts inside real systems and only escalates to a person at the gates you define.",
      },
      {
        q: "What is agentic AI vs chatbot automation?",
        a: "A chatbot returns text. An agentic system takes an outcome, decides, uses tools, and finishes the job. Chat is an interface; agentic AI is an operator.",
      },
      {
        q: "How long does it take to deploy production AI agents?",
        a: "AgenticForce targets a first production agent within 14 days of the diagnostic. Broader swarms follow in staged sprints once the first workflow proves out.",
      },
      {
        q: "Will agents replace my team?",
        a: "No. We deploy agents onto queue work and keep humans on judgment, exceptions, and relationships. Approval gates keep people in control of irreversible actions.",
      },
    ],
    related: ["workflow-automation", "predictive-analytics-bi", "startup-ai-incubation"],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    short:
      "Streamline operations with intelligent automation that connects your apps, data, and processes into seamless flows.",
    icon: "Workflow",
    h1: "AI Workflow Automation in Dubai",
    metaTitle: "AI Workflow Automation in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce wires your apps, data, and approvals into intelligent automated flows for Dubai and GCC operators. Manual queues out, agent-run operations in.",
    answer:
      "AI workflow automation connects your apps, data, and approvals so a process runs end to end without manual relay. AgenticForce maps the current flow, removes the handoffs, and puts an agent on the decision points — with logs and approval gates, so operations stay auditable in Dubai and across the GCC.",
    dream:
      "Operations that move at system speed: intake, decision, action, and reporting happen without a single copy-paste.",
    audience: [
      "Retail, beauty, and lifestyle brands drowning in order and inbox admin",
      "Operators running finance or HR steps across four disconnected tools",
      "Agencies repeating the same onboarding checklist per client",
      "Teams where the process only works when one person is online",
    ],
    problems: [
      {
        title: "Copy-paste is the integration",
        copy: "Humans move data between tools because the tools were never wired together.",
      },
      {
        title: "Approvals stall for days",
        copy: "There is no routing, so requests sit until someone remembers to look.",
      },
      {
        title: "Zaps break silently",
        copy: "Fragile no-code chains fail without alerts, and nobody notices until a customer does.",
      },
      {
        title: "Nobody can see the flow",
        copy: "Without a run log, you cannot tell where time is lost or which step fails.",
      },
      {
        title: "Exceptions eat the day",
        copy: "Edge cases route to whoever is nearest instead of a defined path.",
      },
    ],
    deploy: [
      "Process map of the current flow with time and cost per step",
      "Automated intake, routing, and approval chain",
      "Agent-run decision step where a rule is not enough",
      "Failure alerts, retries, and a run log per execution",
      "Documentation your team can operate without us",
    ],
    steps: [
      { title: "Map", copy: "We record the real process, including the workarounds nobody documented." },
      { title: "Wire", copy: "Apps, data, and approvals connect into one flow with observable steps." },
      { title: "Automate", copy: "Agents take the repetitive decisions; people keep the exceptions." },
    ],
    stack: [
      "Process map and time audit — included",
      "First automated flow live — core",
      "Stack wiring across apps and data — included",
      "Failure alerting and run logs — included",
      "Team handover documentation — included",
    ],
    faqs: [
      {
        q: "How much does AI workflow automation cost in the UAE?",
        a: "Cost tracks scope, not seats. A single production workflow is a fixed-scope deployment; multi-department programmes are staged in sprints. The diagnostic returns a scoped path before you commit anything.",
      },
      {
        q: "Do you replace tools we already use?",
        a: "Rarely. We automate around your CRM, inbox, sheets, and storage. Replacement is only recommended when a tool blocks automation outright.",
      },
      {
        q: "What is the difference from a no-code automation?",
        a: "No-code chains follow fixed rules. We add agents that judge unstructured inputs, plus logging, retries, and alerts so the flow survives real volume.",
      },
    ],
    related: ["agentic-ai-solutions", "ai-lead-generation", "predictive-analytics-bi"],
  },
  {
    slug: "ai-social-media-management",
    title: "AI Social Media Management",
    short:
      "AI-powered content creation, scheduling, and engagement optimization across all major platforms.",
    icon: "Share2",
    h1: "AI Social Media Management in Dubai",
    metaTitle: "AI Social Media Management in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce runs AI social media management for Dubai brands: agent-built content, scheduling, and engagement optimization across every major platform.",
    answer:
      "AI social media management uses agents to research, draft, schedule, and optimise content across platforms while a human keeps brand control. AgenticForce builds the content engine for Dubai and GCC brands, so cadence holds every week without a full in-house content team.",
    dream:
      "A publishing cadence that never slips: on-brand content ships daily, engagement is handled, and reporting arrives without a chase.",
    audience: [
      "Beauty, retail, and lifestyle brands in the UAE competing on cadence",
      "Founders who are the brand voice and have no hours left",
      "Teams posting in bursts, then going quiet for weeks",
      "Brands needing bilingual-ready process for GCC audiences",
    ],
    problems: [
      {
        title: "Cadence collapses",
        copy: "Posting depends on whoever has a free hour, so the feed goes dark under pressure.",
      },
      {
        title: "Generic output",
        copy: "Raw model output reads like everyone else's. Voice needs a defined brand system.",
      },
      {
        title: "Engagement is ignored",
        copy: "Comments and DMs are where intent lives, and they go unanswered for days.",
      },
      {
        title: "No feedback loop",
        copy: "Nothing feeds performance data back into the next batch of content.",
      },
      {
        title: "Approval is the bottleneck",
        copy: "Content sits in review because there is no structured approval step.",
      },
    ],
    deploy: [
      "Brand voice system: tone rules, do-not-say list, reference library",
      "Content agent producing platform-native drafts on a weekly batch",
      "Scheduling pipeline with a single approval surface",
      "Engagement agent triaging comments and DMs to intent buckets",
      "Weekly performance digest feeding the next content cycle",
    ],
    steps: [
      { title: "Codify voice", copy: "We turn your best-performing content into an explicit brand system." },
      { title: "Produce", copy: "Agents draft platform-native posts in batches; you approve in one place." },
      { title: "Optimise", copy: "Performance data returns to the agent, so the next batch is sharper." },
    ],
    stack: [
      "Brand voice system — included",
      "Weekly content engine — core",
      "Scheduling and approval pipeline — included",
      "Engagement triage agent — included",
      "Performance digest — included",
    ],
    faqs: [
      {
        q: "Who should use AI social media management?",
        a: "Brands that need consistent cadence but cannot staff a full content team. It fits UAE retail, beauty, and lifestyle operators, plus founder-led brands where the founder is the voice.",
      },
      {
        q: "Does AI content sound generic?",
        a: "Only without a system. We codify your voice, references, and banned phrasing first, then keep a human approval gate before anything publishes.",
      },
      {
        q: "Can you handle Arabic and English audiences?",
        a: "The process is bilingual-ready: voice rules and approval flows are built per language so GCC audiences get native phrasing, not translation.",
      },
    ],
    related: ["ai-performance-marketing", "brand-identity-strategy", "ai-lead-generation"],
  },
  {
    slug: "ai-lead-generation",
    title: "AI Lead Generation",
    short:
      "Identify, qualify, and convert high-intent prospects with autonomous lead generation systems.",
    icon: "Target",
    h1: "AI Lead Generation in Dubai",
    metaTitle: "AI Lead Generation in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce builds autonomous AI lead generation in Dubai: agents source, qualify, and route high-intent prospects into your CRM with booked calls as the output.",
    answer:
      "AI lead generation uses agents to source prospects, enrich them, score intent, and start qualified conversations that land in your CRM. AgenticForce builds that pipeline for Dubai and GCC operators, so the output is booked calls with qualified buyers rather than a bigger unworked list.",
    dream:
      "A pipeline that fills itself: qualified conversations arrive daily and your team only joins where a human closes.",
    audience: [
      "B2B teams whose pipeline depends on founder networking",
      "Sales teams sitting on thousands of unworked records",
      "UAE service businesses buying leads that never qualify",
      "Operators who need predictable meetings, not more traffic",
    ],
    problems: [
      {
        title: "Volume without intent",
        copy: "Lists get bigger while qualified conversations stay flat.",
      },
      {
        title: "Follow-up dies at touch two",
        copy: "Most revenue sits after the second follow-up, exactly where manual sequences stop.",
      },
      {
        title: "Qualification is inconsistent",
        copy: "Every rep scores differently, so forecasts cannot be trusted.",
      },
      {
        title: "Inbound leaks",
        copy: "Form fills, DMs, and WhatsApp messages land in three places and go cold.",
      },
      {
        title: "No attribution",
        copy: "Without tracking, you cannot tell which source produced the closed deal.",
      },
    ],
    deploy: [
      "Ideal customer definition with explicit disqualifiers",
      "Sourcing and enrichment agent building a scored prospect set",
      "Qualification agent applying one consistent scoring rubric",
      "Multi-channel follow-up sequences with reply handling",
      "CRM routing, handover rules, and source attribution",
    ],
    steps: [
      { title: "Define", copy: "We write who qualifies and who is disqualified, with signals for each." },
      { title: "Source and score", copy: "Agents build and enrich the prospect set, then rank it by intent." },
      { title: "Convert", copy: "Sequences run and reply handling books the call into your calendar." },
    ],
    stack: [
      "ICP and disqualifier definition — included",
      "Scored pipeline live in your CRM — core",
      "Follow-up and reply handling agent — included",
      "Attribution and source reporting — included",
      "14-day optimisation sprint — included",
    ],
    faqs: [
      {
        q: "How do I automate lead generation with AI in Dubai?",
        a: "Define who qualifies, let agents source and enrich matching prospects, score intent against one rubric, then run multi-channel follow-up that routes replies into your CRM. AgenticForce implements the full pipeline in Dubai.",
      },
      {
        q: "Is this cold outreach spam?",
        a: "No. Targeting is narrow, messaging is relevant to a stated signal, and disqualifiers remove poor fits before contact. Volume without relevance damages the brand.",
      },
      {
        q: "Do we still need salespeople?",
        a: "Yes. Agents handle sourcing, qualification, and follow-up. Humans run the conversations where trust and negotiation decide the outcome.",
      },
    ],
    related: ["ai-performance-marketing", "workflow-automation", "predictive-analytics-bi"],
  },
  {
    slug: "predictive-analytics-bi",
    title: "Predictive Analytics & BI",
    short:
      "Turn raw data into actionable insights and strategic decisions with advanced predictive AI models.",
    icon: "BarChart3",
    h1: "Predictive Analytics and BI in Dubai",
    metaTitle: "Predictive Analytics & BI in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce turns raw operational data into forecasts and decision dashboards for Dubai operators — predictive models wired to the actions agents can take.",
    answer:
      "Predictive analytics turns your historical data into forecasts you can act on: demand, churn, pipeline, and stock. AgenticForce builds the data layer, the model, and the decision surface for Dubai operators, then connects the forecast to an agent that acts on it instead of a report nobody opens.",
    dream:
      "Decisions made a week early: you see demand, churn, and pipeline shifts before they hit the P&L.",
    audience: [
      "E-commerce and retail teams guessing at stock and demand",
      "Subscription businesses that spot churn only after it happens",
      "Leadership teams reconciling numbers across three dashboards",
      "Operators who want forecasts wired into action, not slides",
    ],
    problems: [
      {
        title: "Data is scattered",
        copy: "Sales, ads, and ops live in separate tools with no shared definition of a metric.",
      },
      {
        title: "Reporting is backwards-looking",
        copy: "Dashboards explain last month instead of predicting next month.",
      },
      {
        title: "Insight without action",
        copy: "A forecast that no workflow consumes changes nothing.",
      },
      {
        title: "Manual reporting cycles",
        copy: "Someone rebuilds the same spreadsheet every Monday morning.",
      },
      {
        title: "No confidence in numbers",
        copy: "Conflicting figures stall decisions instead of speeding them up.",
      },
    ],
    deploy: [
      "Unified data layer with one agreed metric definition set",
      "Predictive models for demand, churn, or pipeline conversion",
      "Decision dashboard built for the operator, not the analyst",
      "Automated anomaly alerts on the metrics that matter",
      "Agent hooks so forecasts trigger real actions",
    ],
    steps: [
      { title: "Consolidate", copy: "Sources join into one clean layer with agreed metric definitions." },
      { title: "Model", copy: "We forecast the specific decision you need to make earlier." },
      { title: "Act", copy: "Alerts and agents turn the forecast into a triggered action." },
    ],
    stack: [
      "Unified data layer — included",
      "Predictive model on your priority decision — core",
      "Operator decision dashboard — included",
      "Anomaly alerting — included",
      "Agent action hooks — included",
    ],
    faqs: [
      {
        q: "How much data do we need?",
        a: "Usually twelve months of transactional history is enough for useful demand or churn forecasting. With less, we start with diagnostic reporting and build the predictive layer as data accumulates.",
      },
      {
        q: "Do you replace our BI tool?",
        a: "No. We build the data layer and models, then surface them where your team already looks.",
      },
      {
        q: "What makes this different from a dashboard project?",
        a: "The forecast is wired to an action. An agent can reorder, flag, or trigger outreach rather than waiting for someone to read a chart.",
      },
    ],
    related: ["workflow-automation", "agentic-ai-solutions", "ai-performance-marketing"],
  },
  {
    slug: "ai-performance-marketing",
    title: "AI Performance Marketing",
    short:
      "Optimize ad spend, target high-value audiences, and maximize ROI with AI-driven marketing campaigns.",
    icon: "Megaphone",
    h1: "AI Performance Marketing in Dubai",
    metaTitle: "AI Performance Marketing in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce runs AI performance marketing in Dubai: agent-optimised spend, high-value audience targeting, clean tracking, and creative that iterates weekly.",
    answer:
      "AI performance marketing uses agents to test creative, reallocate budget, and target high-value audiences against a clean measurement setup. AgenticForce runs this for Dubai and GCC operators so spend follows contribution margin, not last-click vanity metrics, and creative iterates every week.",
    dream:
      "Spend that compounds: every week the machine knows more about which audience and creative earn the next dirham.",
    audience: [
      "E-commerce brands scaling paid social and search in the GCC",
      "Lead-gen businesses paying for volume that never closes",
      "Teams whose tracking broke and never got rebuilt",
      "Operators who need margin-level reporting, not platform ROAS",
    ],
    problems: [
      {
        title: "Creative is the bottleneck",
        copy: "Ad accounts starve because production cannot keep pace with testing.",
      },
      {
        title: "Broken measurement",
        copy: "Without clean events, platform numbers and the bank account disagree.",
      },
      {
        title: "Optimising to the wrong metric",
        copy: "ROAS looks fine while contribution margin quietly goes negative.",
      },
      {
        title: "Budget moves too slowly",
        copy: "Manual weekly reviews leave spend on losing sets for days.",
      },
      {
        title: "Landing pages leak",
        copy: "Traffic converts poorly because the page never matched the ad promise.",
      },
    ],
    deploy: [
      "Clean tracking and event layer with margin reporting",
      "Creative testing system with a weekly iteration cadence",
      "Audience and budget reallocation agent",
      "Landing page and CTA alignment per campaign angle",
      "Weekly performance review with next-cycle decisions",
    ],
    steps: [
      { title: "Instrument", copy: "Tracking, events, and margin reporting get rebuilt first." },
      { title: "Test", copy: "Structured creative and audience tests run on a weekly cadence." },
      { title: "Scale", copy: "Agents shift budget to winners and cut losers without waiting for a meeting." },
    ],
    stack: [
      "Tracking and margin reporting rebuild — included",
      "Creative testing engine — core",
      "Budget reallocation agent — included",
      "Landing and CTA alignment — included",
      "Weekly decision review — included",
    ],
    faqs: [
      {
        q: "Do you need a minimum ad budget?",
        a: "Testing needs enough volume to reach significance. Below roughly 10,000 AED per month we recommend fixing tracking, offer, and landing conversion first — that returns more than optimisation would.",
      },
      {
        q: "Which platforms do you run?",
        a: "Meta, Google, and TikTok cover most UAE demand. Channel choice follows where your buyers already are, confirmed in the diagnostic.",
      },
      {
        q: "How is this different from a normal media buyer?",
        a: "The optimisation loop is agent-run and continuous, tracking is rebuilt to margin, and creative production is part of the deployment.",
      },
    ],
    related: ["ai-lead-generation", "brand-identity-strategy", "predictive-analytics-bi"],
  },
  {
    slug: "brand-identity-strategy",
    title: "Brand Identity & Strategy",
    short:
      "Build a memorable, distinctive brand identity engineered to resonate with modern digital audiences.",
    icon: "Sparkles",
    h1: "Brand Identity and Strategy in Dubai",
    metaTitle: "Brand Identity & Strategy in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce engineers brand identity and positioning for Dubai operators — distinctive systems built to convert on every surface agents publish to.",
    answer:
      "Brand identity and strategy define what you stand for, how you sound, and how you look on every surface. AgenticForce builds that system for Dubai and GCC operators as a working asset: positioning, voice, and visual rules that agents and campaigns can execute consistently at volume.",
    dream:
      "A brand people recognise in one frame, with a system your team and your agents can execute without you in the room.",
    audience: [
      "Brands that look interchangeable with three competitors",
      "Founders scaling content and needing consistency at volume",
      "Companies repositioning for the UAE and GCC market",
      "Teams whose assets drift across every channel",
    ],
    problems: [
      {
        title: "No distinct position",
        copy: "The promise could belong to any competitor, so price becomes the argument.",
      },
      {
        title: "Voice drifts",
        copy: "Every channel sounds like a different company because no rules were written.",
      },
      {
        title: "Assets do not scale",
        copy: "A logo file is not a system, so each new format is improvised.",
      },
      {
        title: "Design without conversion",
        copy: "Beautiful surfaces that never state the offer or the next step.",
      },
      {
        title: "Guidelines nobody uses",
        copy: "A PDF in a drive folder does not change what ships.",
      },
    ],
    deploy: [
      "Positioning statement with proof points and disqualifiers",
      "Verbal identity: tone rules, message hierarchy, banned phrasing",
      "Visual system: type, colour, motion, and layout rules",
      "Applied templates for the surfaces you actually publish to",
      "Machine-readable brand rules your content agents consume",
    ],
    steps: [
      { title: "Position", copy: "We define the claim you can own and prove in your market." },
      { title: "Systemise", copy: "Voice and visual rules become executable, not aspirational." },
      { title: "Apply", copy: "Templates and agent-ready rules ship to every live surface." },
    ],
    stack: [
      "Positioning and proof points — included",
      "Verbal and visual identity system — core",
      "Applied surface templates — included",
      "Agent-ready brand rules — included",
      "Rollout review — included",
    ],
    faqs: [
      {
        q: "Is this only a logo project?",
        a: "No. The deliverable is a working system: positioning, voice, visual rules, and templates that agents and campaigns execute consistently.",
      },
      {
        q: "Can you rebrand without losing existing recognition?",
        a: "Yes. We audit which assets already carry recognition, keep those, and rebuild the parts that dilute the position.",
      },
      {
        q: "How does brand connect to agents?",
        a: "Brand rules are written machine-readable, so content and engagement agents publish on-brand at volume without a human rewriting every draft.",
      },
    ],
    related: ["ai-social-media-management", "ai-performance-marketing", "startup-ai-incubation"],
  },
  {
    slug: "startup-ai-incubation",
    title: "Start-up AI Incubation",
    short:
      "Comprehensive support for startups including AI strategy, implementation, and growth acceleration.",
    icon: "Rocket",
    h1: "Start-up AI Incubation in Dubai",
    metaTitle: "Start-up AI Incubation in Dubai | AgenticForce",
    metaDescription:
      "AgenticForce incubates AI-native startups in Dubai: strategy, agent architecture, build, and go-to-market with a founding team that ships production systems.",
    answer:
      "Start-up AI incubation gives founders the strategy, architecture, build capacity, and go-to-market motion to launch an AI-native product. AgenticForce works with Dubai and GCC founders from the first agent prototype to a production system with a working acquisition engine attached.",
    dream:
      "Launch as an AI-native company: a working agent product, a repeatable acquisition motion, and no eighteen-month build detour.",
    audience: [
      "Founders with domain expertise and no AI engineering team",
      "Early startups that need a production system, not a prototype",
      "Operators spinning an internal agent into a product",
      "UAE founders raising and needing shipped proof",
    ],
    problems: [
      {
        title: "Prototype trap",
        copy: "A demo impresses, then collapses on auth, cost, or real user volume.",
      },
      {
        title: "Wrong first wedge",
        copy: "Building the whole platform before proving the one workflow anyone pays for.",
      },
      {
        title: "No distribution plan",
        copy: "The product ships to silence because acquisition was never designed.",
      },
      {
        title: "Unmanaged model cost",
        copy: "Token spend scales faster than revenue with no per-action ceiling.",
      },
      {
        title: "Hiring before validation",
        copy: "Burn goes to headcount before the wedge is proven.",
      },
    ],
    deploy: [
      "Wedge definition: the one workflow that gets paid for first",
      "Agent architecture and cost model per action",
      "Production build of the core agent product",
      "Acquisition engine: landing, tracking, and first lead pipeline",
      "Weekly build cadence with investor-ready progress artefacts",
    ],
    steps: [
      { title: "Sharpen", copy: "We cut the roadmap to the wedge someone will pay for now." },
      { title: "Build", copy: "The core agent product ships to production with cost controls." },
      { title: "Accelerate", copy: "Acquisition and reporting attach so traction is measurable." },
    ],
    stack: [
      "Wedge and cost model — included",
      "Production agent product build — core",
      "Acquisition engine — included",
      "Weekly build cadence — included",
      "Investor-ready progress artefacts — included",
    ],
    faqs: [
      {
        q: "Do you take equity?",
        a: "Engagements are scoped as paid deployments by default. Alternative structures are discussed case by case after the diagnostic, never before.",
      },
      {
        q: "How fast can we launch?",
        a: "A first production wedge typically ships within weeks of the diagnostic, not quarters, because scope is cut to one paid workflow.",
      },
      {
        q: "Do we get the code?",
        a: "Yes. You own the system, the architecture documentation, and the operating runbook.",
      },
    ],
    related: ["agentic-ai-solutions", "brand-identity-strategy", "ai-lead-generation"],
  },
];

export const SERVICE_MAP: Record<string, ServiceContent> = Object.fromEntries(
  SERVICE_PAGES.map((s) => [s.slug, s]),
);
