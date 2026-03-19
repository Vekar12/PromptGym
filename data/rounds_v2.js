// PromptGym v2 — Training Rounds
// 24 rounds across 6 categories
// Schema: id, category, outputFile, habitFocus, difficulty, title, description,
//         keyElements[], hintSeeds{level1..4}, idealPromptContext

window.ROUNDS_V2 = [

  // ─── DASHBOARDS ───────────────────────────────────────────────────────────

  {
    id: "d01",
    category: "Dashboards",
    outputFile: "outputs/dashboards/fleet-ops-morning.html",
    habitFocus: "CONTEXT",
    difficulty: 2,
    title: "Fleet Operations Morning Brief",
    description: "A real-time operational dashboard for a logistics fleet. Your prompt must give Gemini enough context to recreate the domain, audience, and data structure.",
    keyElements: [
      "Fleet or logistics domain clearly specified",
      "Morning-brief or daily-summary framing",
      "Operational metrics: vehicle count, on-time rate, delays",
      "Alert or exception section for problem vehicles",
      "Data table or list of individual vehicle statuses",
      "Visual status indicators (color-coded or badge-based)",
      "Timestamp or 'as of' reference"
    ],
    hintSeeds: {
      level1: "Think about who reads this dashboard and when — that context shapes everything.",
      level2: "The output shows data about moving things. What kind of operation? What time of day does it matter most?",
      level3: "Specify the domain, the time of use, and 2–3 specific metrics the reader cares about first.",
      level4: "A logistics fleet morning dashboard should name: the domain (fleet/logistics), the time (morning brief), key metrics (on-time %, delays, active vehicles), and the format (status table with alerts)."
    },
    idealPromptContext: "Generate an HTML fleet operations morning brief dashboard for a logistics ops manager. Header shows 'As of 07:00' timestamp. Top row: 4 summary cards — Active Vehicles (24), On-Time Rate (78%), Delayed (5), Fuel Alerts (2). Below: an Alerts section listing problem vehicles in red. Main section: status table for 8 vehicles with columns — Vehicle ID, Driver, Route, Status (color-coded badge: On-Time/Delayed/Alert), ETA, Last Update. Dark professional theme."
  },

  {
    id: "d02",
    category: "Dashboards",
    outputFile: "outputs/dashboards/loan-disbursement-tracker.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 2,
    title: "Loan Disbursement Tracker",
    description: "A structured dashboard tracking loan applications through disbursement stages. Your prompt must specify the visual format and data hierarchy clearly.",
    keyElements: [
      "Loan or financial product domain specified",
      "Stage-based or funnel tracking format",
      "Summary KPI row at the top",
      "Table with individual loan records",
      "Status badges or stage indicators",
      "Amount or value column",
      "Filter or sort controls implied"
    ],
    hintSeeds: {
      level1: "Look at how the data is structured — is it a list, a funnel, a table? Your prompt should name that.",
      level2: "Financial dashboards have a specific hierarchy: summary numbers first, then detail rows. Does your prompt specify this?",
      level3: "Name the format explicitly: summary KPIs at top, then a stage-sorted table of individual records with status badges.",
      level4: "Prompt should specify: domain (loans/NBFC), format (KPI summary + records table), columns (loan ID, applicant, stage, amount, SLA), and visual treatment (color-coded stage badges)."
    },
    idealPromptContext: "Build an HTML loan disbursement tracker dashboard for an NBFC ops team. Top: 4 KPI cards — Total Active (142), Approved Today (18), Overdue SLA (7), Pending Amount (₹4.2Cr). Main section: records table with columns — Loan ID, Applicant, Loan Type, Amount, Stage (color-coded badge: Applied / Verification / Approved / Disbursed), Assigned RM, SLA Status. Include filter buttons by stage. Dark professional design."
  },

  {
    id: "d03",
    category: "Dashboards",
    outputFile: "outputs/dashboards/kpi-morning-brief.html",
    habitFocus: "CONCISENESS",
    difficulty: 1,
    title: "KPI Morning Brief",
    description: "A tight executive KPI summary for a startup. The ideal prompt is short and dense — every word earns its place.",
    keyElements: [
      "Executive or leadership audience implied",
      "Morning brief or daily summary format",
      "4–6 specific KPIs with current values",
      "Trend indicators (up/down arrows or deltas)",
      "Clean card-based or grid layout",
      "Today's date or 'as of' timestamp"
    ],
    hintSeeds: {
      level1: "This output has very little text — the prompt that produced it should be equally lean.",
      level2: "Name the audience, the format type, and list only the KPIs you actually need. No sentences.",
      level3: "A prompt like 'Executive KPI daily brief: [metric 1], [metric 2], [metric 3]. Card layout, trend arrows.' is already near ideal.",
      level4: "Ideal form: audience + 'daily KPI brief' + 4–6 named metrics + layout hint. Under 15 words. No filler verbs."
    },
    idealPromptContext: "Generate an HTML executive KPI morning brief for a SaaS startup. Show 6 metric cards in a clean grid: DAU, MRR, Churn Rate, NPS, Burn Rate, Runway. Each card shows the current value, a trend arrow (↑ or ↓), and delta vs last week. Today's date in the header. Minimal card layout, no charts."
  },

  {
    id: "d04",
    category: "Dashboards",
    outputFile: "outputs/dashboards/driver-scorecard.html",
    habitFocus: "EXAMPLES",
    difficulty: 3,
    title: "Driver Scorecard",
    description: "A performance scorecard for individual delivery drivers. The best prompts anchor the output with a concrete example of the scoring format or metric names.",
    keyElements: [
      "Driver or delivery-person as the subject",
      "Individual performance metrics: on-time %, deliveries completed, rating",
      "Scorecard or report card visual metaphor",
      "Comparison to target or benchmark",
      "Named metric format or scoring rubric",
      "Color-coded performance bands",
      "Period specified (week/month)"
    ],
    hintSeeds: {
      level1: "The output scores individual people. Does your prompt give any example of how scoring should look?",
      level2: "Try anchoring the format — 'scorecard like: Name | Metric | Score | Status' gives Gemini a pattern to follow.",
      level3: "Include at least one concrete example metric format: e.g. 'On-Time Rate: 94% — ✓ Exceeds target (90%)'",
      level4: "Ideal prompt includes: subject (driver scorecard), period, 3–4 named metrics with example format, and a benchmark comparison pattern."
    },
    idealPromptContext: "Create an HTML weekly performance scorecard for 5 delivery drivers. For each driver show: name, overall score (0–100), and 4 metrics — On-Time Rate (target 90%), Deliveries Completed (target 85/week), Customer Rating (target 4.5★), Cancellation Rate (target <3%). Format each metric as: value vs target, with a Green/Yellow/Red status band. Week ending date in the header."
  },

  {
    id: "d05",
    category: "Dashboards",
    outputFile: "outputs/dashboards/route-performance-weekly.html",
    habitFocus: "CONTEXT",
    difficulty: 3,
    title: "Route Performance Weekly",
    description: "A weekly analytics view comparing performance across delivery routes. Requires strong context about the logistics domain and comparative structure.",
    keyElements: [
      "Route or geographic zone as the unit of analysis",
      "Weekly comparison framing",
      "Multiple routes compared side-by-side",
      "Performance metrics: on-time %, volume, SLA breach",
      "Best/worst performer highlighted",
      "Trend or week-over-week delta",
      "Logistics or supply chain domain"
    ],
    hintSeeds: {
      level1: "The output compares multiple geographic areas. What domain is this? Who uses this view?",
      level2: "A route performance report needs: the domain (logistics), the unit (routes/zones), the metrics, and the comparison period.",
      level3: "Specify: logistics domain, weekly view, 4–6 routes compared, key metrics per route, and highlight best/worst.",
      level4: "Ideal prompt: 'Logistics weekly route performance: compare 5 delivery zones on on-time %, volume, SLA breaches. Highlight best and worst. Operations manager audience.'"
    },
    idealPromptContext: "Generate an HTML weekly route performance report for a logistics ops manager. Compare 6 delivery zones. Metrics per zone: On-Time %, Delivery Volume, SLA Breaches, Week-over-Week delta. Highlight the best-performing zone in green and worst in red. Summary table with all zones sortable by metric. Week date range in the header."
  },

  // ─── FRAMEWORKS ──────────────────────────────────────────────────────────

  {
    id: "f01",
    category: "Frameworks",
    outputFile: "outputs/frameworks/swot-product.html",
    habitFocus: "CONTEXT",
    difficulty: 1,
    title: "SWOT Analysis — Product",
    description: "A classic SWOT framework applied to a product. The ideal prompt gives the specific product and strategic purpose — not just 'make a SWOT'.",
    keyElements: [
      "SWOT structure: all four quadrants present",
      "Specific product or company domain",
      "Strengths are internal and positive",
      "Weaknesses are internal and negative",
      "Opportunities are external and positive",
      "Threats are external and negative",
      "3–5 bullet points per quadrant"
    ],
    hintSeeds: {
      level1: "A SWOT is only useful if it's specific. Does your prompt say what product or company this is for?",
      level2: "Name the product, the industry, and ideally the strategic question this SWOT is meant to answer.",
      level3: "Good prompt: 'SWOT analysis for [specific product] in [market]. Focus on competitive positioning.'",
      level4: "Ideal: product name + market context + strategic lens (e.g. 'for fundraising pitch' or 'to evaluate expansion'). Vague SWOTs produce vague bullet points."
    },
    idealPromptContext: "Create an HTML SWOT analysis for Notion as a B2B SaaS tool, evaluating its potential to expand into the enterprise project management segment competing with Asana and Monday.com. Four quadrants in a 2×2 grid, 4–5 bullet points each. Strengths and Weaknesses are internal; Opportunities and Threats are external. Clean strategic document layout."
  },

  {
    id: "f02",
    category: "Frameworks",
    outputFile: "outputs/frameworks/rice-scoring-table.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 2,
    title: "RICE Scoring Table",
    description: "A feature prioritisation table using the RICE framework. Prompts must specify the exact format — a table with calculated RICE scores.",
    keyElements: [
      "Table format with columns: Feature, Reach, Impact, Confidence, Effort, RICE Score",
      "RICE formula applied correctly (R×I×C÷E)",
      "Multiple features compared (4+)",
      "Features ranked by RICE score",
      "Confidence as percentage",
      "Effort in person-weeks or sprints",
      "Product or PM audience"
    ],
    hintSeeds: {
      level1: "RICE is a specific framework with a specific formula. Does your prompt tell Gemini to use that exact formula?",
      level2: "The format here is a table. Your prompt should say 'table' and name the columns.",
      level3: "Specify: RICE scoring table, columns (Reach, Impact, Confidence, Effort, Score), features to compare, and sort order.",
      level4: "Ideal: 'RICE prioritisation table for [product] features. Columns: Feature, Reach, Impact, Confidence, Effort, Score (R×I×C÷E). Sorted highest to lowest. [3–5 features listed].'"
    },
    idealPromptContext: "Build an HTML RICE prioritisation table for a fintech mobile app. Columns: Feature Name, Reach (users/quarter), Impact (0.25/0.5/1/2/3), Confidence (%), Effort (person-weeks), RICE Score (calculated as R×I×C÷E). Include 6 features across payments, onboarding, and analytics. Sort rows by RICE score descending. Highlight the top 2 features. Product manager audience."
  },

  {
    id: "f03",
    category: "Frameworks",
    outputFile: "outputs/frameworks/issue-tree-ops.html",
    habitFocus: "EXAMPLES",
    difficulty: 3,
    title: "Issue Tree — Operations",
    description: "A structured MECE issue tree diagnosing an operational problem. The best prompts include a sample branch structure to anchor the format.",
    keyElements: [
      "Issue tree or hypothesis tree structure",
      "MECE principle: branches don't overlap",
      "Root problem clearly stated at top",
      "2–3 levels of decomposition",
      "Operational domain specified",
      "Leaf nodes are testable hypotheses",
      "Visual hierarchy with indentation or tree shape"
    ],
    hintSeeds: {
      level1: "An issue tree has a specific visual hierarchy. Does your prompt give any hint of the branching structure?",
      level2: "Try showing a mini-example of the format: 'Root → Branch 1 → Sub-branch 1a, 1b'",
      level3: "Include the root problem, the domain, and at least one sample branch to show the depth and format expected.",
      level4: "Ideal prompt: 'Issue tree for [problem] in [domain]. MECE branches. 3 levels. Example: Problem → People/Process/Technology → sub-causes. Leaf nodes = testable hypotheses.'"
    },
    idealPromptContext: "Generate an HTML MECE issue tree diagnosing why fleet on-time delivery rate is below 70%. Root problem at the top. 3 levels of decomposition. Level 1 branches: People, Process, Technology, External Factors. Each branch expands to 2–3 sub-causes. Leaf nodes must be testable hypotheses (e.g. 'Drivers take non-optimal routes due to outdated GPS data'). Visual tree hierarchy with indentation and connecting lines."
  },

  {
    id: "f04",
    category: "Frameworks",
    outputFile: "outputs/frameworks/competitive-2x2.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 2,
    title: "Competitive 2×2 Matrix",
    description: "A competitive positioning map with two custom axes. Prompts must define both axes clearly and name the quadrant meanings.",
    keyElements: [
      "2×2 grid layout with 4 labeled quadrants",
      "Both axes clearly named with high/low ends",
      "Competitor names placed in correct quadrants",
      "Quadrant names reflect strategic meaning",
      "5+ competitors or players shown",
      "Legend or color coding for quadrant types",
      "Industry or market specified"
    ],
    hintSeeds: {
      level1: "A 2×2 matrix is useless without axis labels. Does your prompt name both axes?",
      level2: "Name the industry, both axes (X = ?, Y = ?), and the 4 quadrant labels. Then list the competitors.",
      level3: "Format: '[Industry] competitive 2×2. X-axis: [low to high]. Y-axis: [low to high]. Quadrants: [Leaders/Challengers/Followers/Niche]. Competitors: [list].'",
      level4: "Ideal: market name + X-axis (with high/low poles) + Y-axis (with poles) + quadrant names + 6–8 competitor names to place."
    },
    idealPromptContext: "Create an HTML competitive positioning 2×2 matrix for the B2B SaaS market. X-axis: Market Penetration (Low → High). Y-axis: Product Differentiation (Low → High). Four quadrant labels: Leaders (top-right), Challengers (top-left), Innovators (bottom-right), Niche Players (bottom-left). Place 7 competitors: Salesforce, HubSpot, Zoho, Freshworks, Pipedrive, Copper, Streak. Color-code each quadrant. Clean strategic design."
  },

  // ─── DOCUMENTS ────────────────────────────────────────────────────────────

  {
    id: "doc01",
    category: "Documents",
    outputFile: "outputs/documents/mom-template.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 1,
    title: "Minutes of Meeting",
    description: "A structured MoM document for a product team meeting. Format is everything — the prompt must name all required sections.",
    keyElements: [
      "Document header with meeting name, date, and facilitator",
      "Attendees section (present and absent)",
      "Numbered agenda items discussed",
      "Key decisions clearly separated",
      "Action items table with owner, due date, and status",
      "Next meeting date at the end",
      "Professional but scannable format"
    ],
    hintSeeds: {
      level1: "MoM documents have a very specific structure. Does your prompt name all the sections?",
      level2: "List the required sections: header, attendees, agenda, decisions, action items, next steps.",
      level3: "Specify: meeting type, date, team, and name the required sections explicitly. Action items need owner + due date columns.",
      level4: "Ideal: 'MoM for [meeting type], [date], [team]. Sections: header (meeting/date/facilitator), attendees, agenda items, key decisions, action table (action/owner/due/status), next meeting.'"
    },
    idealPromptContext: "Generate an HTML Minutes of Meeting document for a Q3 product roadmap review on March 19, 2026. Attendees: 1 PM, 2 engineers, 1 designer, 1 data analyst. Sections: 1) Header (meeting title, date, facilitator), 2) Attendees (present and absent lists), 3) Agenda Items (4 numbered items with discussion notes), 4) Key Decisions (3 decisions made), 5) Action Items table (Action | Owner | Due Date | Status), 6) Next Meeting date. Professional document styling."
  },

  {
    id: "doc02",
    category: "Documents",
    outputFile: "outputs/documents/project-brief.html",
    habitFocus: "CONTEXT",
    difficulty: 2,
    title: "Project Brief",
    description: "A professional project brief for a product initiative. The ideal prompt gives the product, problem, and stakeholder context — not just 'write a project brief'.",
    keyElements: [
      "Project name and owner specified",
      "Problem statement with quantified impact",
      "Success metrics with specific targets",
      "In-scope and out-of-scope sections",
      "Timeline with milestones",
      "Risk register with severity ratings",
      "Visual hierarchy: cover section + content sections"
    ],
    hintSeeds: {
      level1: "A project brief without context is a template — not a brief. What project is this for?",
      level2: "Provide: the product being built, the problem it solves (with data), who owns it, and the key deliverable dates.",
      level3: "Specify the initiative, the quantified problem, the success metrics, and the key milestones. Include at least one risk.",
      level4: "Ideal: '[Initiative name] project brief. Problem: [quantified]. Owner: [role]. Goals: [2–3 metrics with targets]. Scope: [in/out]. Milestones: [3–4 dates]. Risks: [1–2 with severity].'"
    },
    idealPromptContext: "Create an HTML project brief for 'Driver App Revamp — Phase 2' at a logistics company. Include: overview (owner: Senior PM, timeline: Apr–Jun 2026), problem statement (current task completion 67% vs 84% industry benchmark), success metrics (target 82% completion, 4.6★ app rating, 25% reduction in support tickets), scope section (in-scope: UI redesign, offline mode; out-of-scope: backend changes), milestone timeline with 4 phases, and a risk register with 2 risks rated by severity."
  },

  {
    id: "doc03",
    category: "Documents",
    outputFile: "outputs/documents/prd-feature.html",
    habitFocus: "EXAMPLES",
    difficulty: 3,
    title: "PRD — Feature Spec",
    description: "A product requirements document for a specific feature. Great prompts include a sample user story format to anchor the structure Gemini should follow.",
    keyElements: [
      "Feature name and version clearly stated",
      "Problem statement with baseline data",
      "User stories in 'As a [user], I want [action], so [outcome]' format",
      "Acceptance criteria per story",
      "Functional requirements split: must-have vs nice-to-have",
      "Success metrics table with baseline and target",
      "Open questions or unresolved decisions"
    ],
    hintSeeds: {
      level1: "PRDs have a very specific user story format. Does your prompt show Gemini what that format looks like?",
      level2: "Include a sample user story: 'As a [user type], I want [action] so that [benefit].'",
      level3: "Anchor the user stories and requirements format with examples. Show the structure, not just the topic.",
      level4: "Ideal: 'PRD for [feature]. Problem: [data]. User stories format: As a [role], I want [action], AC: [criteria]. Requirements: must-have / nice-to-have. Metrics table: baseline → target. Open questions.'"
    },
    idealPromptContext: "Build an HTML PRD for a 'Smart Re-engagement Nudge' feature in a logistics driver app. Problem: 28% of drivers go dormant within 14 days of onboarding. User stories format: 'As a [driver/ops manager], I want [action], so that [outcome]. Acceptance Criteria: [numbered list].' Write 3 user stories. Split requirements into must-have and nice-to-have. Include a success metrics table with baseline and target values. End with an Open Questions section (3 unresolved decisions)."
  },

  {
    id: "doc04",
    category: "Documents",
    outputFile: "outputs/documents/sop-incident-report.html",
    habitFocus: "CONCISENESS",
    difficulty: 2,
    title: "Incident Report SOP",
    description: "A standard operating procedure for incident reporting. The ideal prompt is tight and functional — it names the SOP type and structure without over-explaining.",
    keyElements: [
      "SOP or incident report framing",
      "Timeline of events section",
      "Root cause analysis",
      "Impact assessment",
      "Corrective actions with owners",
      "Prevention measures",
      "Structured, numbered format"
    ],
    hintSeeds: {
      level1: "An SOP prompt should be as structured as the output. Are you being concise and specific?",
      level2: "Name the SOP type, the sections required, and the audience — nothing more.",
      level3: "Trim filler words. 'Incident report SOP. Sections: timeline, root cause, impact, corrective actions (with owners), prevention.' is already strong.",
      level4: "Ideal form: document type + sections list (5–6 named) + audience. No full sentences needed. Keep it under 20 words."
    },
    idealPromptContext: "Generate an HTML incident report SOP template for an operations team. Sections: 1) Incident Summary (title, date, severity level, reporter), 2) Timeline of Events (numbered with timestamps), 3) Root Cause Analysis (primary cause + contributing factors), 4) Impact Assessment (affected users, downtime duration, financial impact), 5) Corrective Actions table (Action | Owner | Due Date | Status), 6) Prevention Measures (3 items). Numbered format, professional clean styling."
  },

  // ─── AGENTS ───────────────────────────────────────────────────────────────

  {
    id: "a01",
    category: "Agents",
    outputFile: "outputs/agents/agent-design-spec.html",
    habitFocus: "CONTEXT",
    difficulty: 2,
    title: "Agent Design Spec",
    description: "A design specification for an AI agent. Your prompt must give Gemini the agent's purpose, tools, and architecture pattern — not just 'design an agent'.",
    keyElements: [
      "Agent name or type specified",
      "Clear task or use case for the agent",
      "Tool list the agent has access to",
      "Architecture pattern named (ReAct, plan-and-execute, etc.)",
      "Input/output contract defined",
      "Guardrails or constraints listed",
      "Developer or technical audience"
    ],
    hintSeeds: {
      level1: "An agent design spec needs to say what the agent does and what tools it uses. Does yours?",
      level2: "Specify: the agent's task, the architecture pattern, and 3–5 tools it can call.",
      level3: "Good prompt: '[Agent name] agent spec. Task: [goal]. Pattern: [ReAct/plan-execute]. Tools: [list]. Guardrails: [constraints]. Output: structured spec doc.'",
      level4: "Ideal: agent purpose + task domain + architecture pattern + tool manifest + guardrails + audience (developer). These 6 elements produce a complete spec."
    },
    idealPromptContext: "Create an HTML AI agent design specification for a Competitive Research Agent. Sections: 1) Agent Overview (purpose, architecture pattern: ReAct), 2) Tool Manifest — list each tool with name, input, output: web_search(query) → results, fetch_url(url) → content, extract_structured_data(html) → JSON, summarise(text) → summary, store_to_memory(key, value), 3) Execution Flow (numbered steps), 4) Guardrails (no hallucination, must cite sources, max 10 tool calls/run), 5) Output Contract. Dark-theme technical doc."
  },

  {
    id: "a02",
    category: "Agents",
    outputFile: "outputs/agents/agent-orchestration.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 3,
    title: "Multi-Agent Orchestration Blueprint",
    description: "A technical blueprint for a multi-agent system. The ideal prompt specifies the visual format (flow diagram + agent cards) and the architecture pattern clearly.",
    keyElements: [
      "Multi-agent or orchestration framing",
      "Named roles: orchestrator, executor, critic, memory agent",
      "Sequential flow diagram with steps",
      "Agent cards with tool manifests",
      "Guardrails or inter-agent constraints",
      "Dark-theme or code-aesthetic formatting",
      "Specific use case for the system"
    ],
    hintSeeds: {
      level1: "This is a technical document with a specific visual layout. Does your prompt describe the format?",
      level2: "Name the agents involved, the architecture pattern, and the visual sections: flow diagram + agent cards + guardrails.",
      level3: "Specify: multi-agent orchestration, the use case, agent roles (orchestrator/planner/executor/critic), format (flow + agent cards), and constraints.",
      level4: "Ideal: 'Multi-agent orchestration blueprint for [use case]. Agents: orchestrator, planner, executor(s), critic, memory. Format: step flow + agent tool cards + guardrails section. Technical audience.'"
    },
    idealPromptContext: "Build an HTML multi-agent orchestration blueprint for an automated competitive intelligence pipeline. Five agents: Orchestrator (coordinates the run), Planner (decomposes the research goal), Web Executor (fetches and parses content), Critic (validates accuracy and quality), Memory Agent (stores and retrieves results). Show: a numbered execution flow with agent handoffs, individual agent cards each listing their tool manifest, inter-agent guardrails, and failure/retry handling. Dark-theme technical documentation."
  },

  {
    id: "a03",
    category: "Agents",
    outputFile: "outputs/agents/rag-pipeline.html",
    habitFocus: "EXAMPLES",
    difficulty: 3,
    title: "RAG Pipeline Architecture",
    description: "A technical RAG pipeline document. Anchoring with example config values (chunk size, model names) produces far more specific output.",
    keyElements: [
      "Three phases: ingestion, retrieval, generation",
      "Specific model names for embedding and LLM",
      "Chunk size and overlap specified",
      "Hybrid search (dense + sparse) mentioned",
      "Reranker in the retrieval phase",
      "Evaluation metrics with scores",
      "Configuration parameters shown"
    ],
    hintSeeds: {
      level1: "RAG pipelines have very specific components. Does your prompt name any example values (chunk size, model names)?",
      level2: "Anchor with example config: chunk size, embedding model, top-k retrieval, LLM used.",
      level3: "Show example values: 'Chunk: 512 tokens/64 overlap, embed: text-embedding-3-large, rerank: Cohere, LLM: claude-3-5-sonnet.'",
      level4: "Ideal: '3-phase RAG pipeline (ingest/retrieve/generate). Examples: chunk=512/64, embed=text-embedding-3-large, hybrid search (dense+BM25), rerank=Cohere, LLM=claude-3-5-sonnet. Include RAGAS eval scores.'"
    },
    idealPromptContext: "Generate an HTML RAG pipeline architecture document with 3 phases. Phase 1 — Ingestion: chunking (512 tokens / 64 overlap), embedding model (text-embedding-3-large), vector store (Pinecone). Phase 2 — Retrieval: hybrid search (dense + BM25 sparse), top-k=20, reranker (Cohere rerank-v3), final top-k=5. Phase 3 — Generation: LLM (claude-3-5-sonnet), citation injection, system prompt design. Include RAGAS evaluation scores: Faithfulness 0.89, Answer Relevancy 0.84, Context Recall 0.91. Config parameter table. Dark code aesthetic."
  },

  {
    id: "a04",
    category: "Agents",
    outputFile: "outputs/agents/eval-framework.html",
    habitFocus: "CONCISENESS",
    difficulty: 2,
    title: "LLM Evaluation Framework",
    description: "A systematic evaluation framework for LLM outputs. The ideal prompt is crisp — it names dimensions and methods without over-explaining.",
    keyElements: [
      "4+ evaluation dimensions named",
      "Method per dimension (LLM judge, NLI, schema validation, etc.)",
      "Score bars or visual indicators",
      "Test suite registry or harness table",
      "Current scores or benchmarks shown",
      "Technical/engineering audience",
      "Dark-theme code aesthetic"
    ],
    hintSeeds: {
      level1: "An eval framework document needs named dimensions and methods. Does your prompt name any?",
      level2: "List the eval dimensions and the method for each. Don't describe them — name them.",
      level3: "Concise prompt: 'LLM eval framework. Dimensions: faithfulness (NLI), task completion (LLM judge), format adherence (schema), tone (embedding cosine). Score bars. Test suite table.'",
      level4: "Ideal: eval dimensions as a list with method in parentheses + output format (score bars + harness table) + audience. No filler sentences."
    },
    idealPromptContext: "Create an HTML LLM evaluation framework document. Four evaluation dimensions, each with method and current score: Faithfulness — NLI entailment, score 0.87; Task Completion — LLM-as-judge rubric (1–5), score 4.1; Format Adherence — JSON schema validation, score 98%; Tone Consistency — embedding cosine similarity, score 0.81. For each: show a score bar with target threshold. Include a test suite registry table (suite name, test count, last run date, pass rate). Dark code aesthetic, technical audience."
  },

  // ─── CODE ──────────────────────────────────────────────────────────────────

  {
    id: "c01",
    category: "Code",
    outputFile: "outputs/code/data-pipeline-script.html",
    habitFocus: "CONTEXT",
    difficulty: 2,
    title: "ETL Data Pipeline (Airflow)",
    description: "An Apache Airflow DAG for a daily ETL pipeline. Prompts must give Gemini the tech stack, source/destination, and data transformation requirements.",
    keyElements: [
      "Apache Airflow DAG structure",
      "Three tasks: extract, transform, load",
      "Source database specified (Postgres, etc.)",
      "Data type or event domain named",
      "Error handling and retry config",
      "Logging throughout",
      "Sample console output shown"
    ],
    hintSeeds: {
      level1: "A pipeline script is meaningless without knowing the tech stack and what data it moves. Does your prompt specify?",
      level2: "Name: the framework (Airflow), the source and destination databases, and what data is being moved.",
      level3: "Specify: Airflow DAG, 3 tasks (extract/transform/load), source (Postgres), destination (DWH), data type (events/transactions), retry config.",
      level4: "Ideal: 'Airflow ETL DAG. Extract: [event types] from source Postgres. Transform: dedupe, normalise. Load: upsert to DWH fact table. Daily schedule. 3 retries, 5min delay. Logging throughout.'"
    },
    idealPromptContext: "Generate an HTML page showing a complete Apache Airflow ETL DAG Python script for a daily data pipeline. Extract: purchase events, signup events, and churn events from a source PostgreSQL database. Transform: deduplicate records, normalise timestamps to UTC, add a partition_date field. Load: upsert to fact_events table in a data warehouse. Schedule: daily at 02:00. Config: 3 retries with 5-minute delay, email alert on failure. Show realistic console log output below the code. Syntax-highlighted code display."
  },

  {
    id: "c02",
    category: "Code",
    outputFile: "outputs/code/loan-stage-tracker.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 2,
    title: "Loan Application Tracker UI",
    description: "A UI dashboard for tracking loan applications through stages. The ideal prompt specifies the visual format, column names, and status indicator style.",
    keyElements: [
      "Loan application domain specified",
      "Summary KPI cards at the top",
      "Data table with specific columns",
      "Stage/status badges (color-coded)",
      "Progress indicators per record",
      "Filter controls mentioned",
      "SLA or deadline status column"
    ],
    hintSeeds: {
      level1: "This UI has a very specific layout. Does your prompt describe the visual structure?",
      level2: "Name the layout: KPI summary row + filterable table. Specify the column names.",
      level3: "Prompt: '[Domain] tracker UI. Top: 4 KPI cards (total/approved/overdue/amount). Table: loan ID, applicant, type, amount, stage (badge), progress bar, SLA status.'",
      level4: "Ideal: domain + KPI card layout + table column names + badge style (color-coded stages) + SLA indicator. Name every UI element explicitly."
    },
    idealPromptContext: "Build an HTML loan application tracker UI for an NBFC operations team. Top section: 4 KPI cards — Total Active (248), Approved Today (31), Overdue SLA (12), Pending Amount (₹8.4Cr). Main table columns: Loan ID, Applicant Name, Loan Type, Amount, Stage (color-coded badge: Applied / Document Verification / Credit Check / Approved / Disbursed), Progress bar, Assigned RM, SLA Status (On Track / At Risk / Breached). Filter buttons to toggle by stage above the table. Dark dashboard styling."
  },

  {
    id: "c03",
    category: "Code",
    outputFile: "outputs/code/challan-automation.html",
    habitFocus: "EXAMPLES",
    difficulty: 3,
    title: "Challan Automation Script",
    description: "A Python script for automated traffic challan checking. Anchoring with concrete function signatures or example output structures helps Gemini produce precise code.",
    keyElements: [
      "Python language specified",
      "API endpoint or service named (VAHAN/e-challan)",
      "Retry logic with configurable limit",
      "Dataclass or typed return structure",
      "Batch processing loop",
      "Rate limiting (sleep between requests)",
      "Result output panel with real vehicle data"
    ],
    hintSeeds: {
      level1: "Code prompts benefit from examples of the expected function signature or return type. Did you include any?",
      level2: "Show a sample: 'Function check_challan(vehicle_no: str) -> ChallanResult with fields: count, amount, paid, error'",
      level3: "Anchor with: the API name, a sample return dataclass structure, and the batch processing pattern.",
      level4: "Ideal: 'Python challan checker. API: VAHAN e-challan. Function: check_challan(reg_no) → ChallanResult(count, amount, paid, error). Retry 3×. Batch run_batch(list) with 1.2s sleep. Show sample output.'"
    },
    idealPromptContext: "Create an HTML page showing a Python script for automating vehicle challan lookups via the VAHAN e-challan API. Define a ChallanResult dataclass with fields: vehicle_no, challan_count, total_amount, paid_amount, pending_amount, last_updated, error. Function: check_challan(vehicle_no: str, retries: int = 3) → ChallanResult, with 1.2s rate limiting between calls. Batch function: run_batch(vehicle_list: list[str]) → list[ChallanResult]. Show realistic sample output for 4 vehicles (2 with pending challans, 1 paid, 1 error). Syntax-highlighted code."
  },

  {
    id: "c04",
    category: "Code",
    outputFile: "outputs/code/api-rate-limiter.html",
    habitFocus: "CONCISENESS",
    difficulty: 3,
    title: "Token Bucket Rate Limiter",
    description: "A Python token bucket rate limiter implementation. The ideal prompt names the algorithm and interface concisely — not a wall of explanation.",
    keyElements: [
      "Token bucket algorithm named",
      "Thread-safe implementation",
      "Two classes: TokenBucket and RateLimiter",
      "Per-client isolation",
      "Decorator/middleware pattern",
      "Test output shown",
      "Python language and version"
    ],
    hintSeeds: {
      level1: "Algorithm names are powerful. Does your prompt name the specific algorithm?",
      level2: "Name the algorithm, the two-class structure, and the interface pattern. Skip the explanation.",
      level3: "Concise: 'Python token bucket rate limiter. Thread-safe. Classes: TokenBucket(capacity, rate) and RateLimiter. Per-client isolation. Middleware decorator. Pytest output.'",
      level4: "Ideal: algorithm name + language + class names + key behaviors (thread-safe, per-client, middleware) + output format (code + tests). Under 20 words total."
    },
    idealPromptContext: "Generate an HTML page showing a Python 3.11 token bucket rate limiter implementation. Two classes: TokenBucket(capacity: int, refill_rate: float) with thread-safe token acquisition using threading.Lock, and RateLimiter that manages per-client buckets using defaultdict. Include a @rate_limit(client_id) decorator for use as middleware. Show pytest output with 6 passing test cases covering: basic rate limiting, burst allowance, per-client isolation, refill over time, concurrent requests, and middleware decorator usage. Syntax-highlighted."
  },

  // ─── TRANSFORMATIONS ──────────────────────────────────────────────────────

  {
    id: "t01",
    category: "Transformations",
    outputFile: "outputs/transformations/jargon-to-plain.html",
    habitFocus: "EXAMPLES",
    difficulty: 2,
    title: "Jargon → Plain English",
    description: "SaaS jargon translated into plain language. The best prompts show Gemini an example of what 'plain' means by demonstrating the transformation.",
    keyElements: [
      "Before/after comparison format",
      "4+ jargon passages transformed",
      "Source domain specified (SaaS, corporate, finance)",
      "Target audience for 'plain' version named",
      "Reading level or tone target given",
      "Annotation explaining each change",
      "Summary metrics (word count reduction, grade level)"
    ],
    hintSeeds: {
      level1: "Transformation prompts work best when you show an example of the 'after' state. Did you include one?",
      level2: "Give a mini-example: 'e.g. Rewrite: leveraging synergies → working together on shared goals.'",
      level3: "Anchor the style with one example transform. Name the source domain, target audience, and reading level.",
      level4: "Ideal: 'Jargon→plain for SaaS investor update. Target: non-technical audience, Grade 8 reading level. Before/after format with annotation. Example: [synergy jargon] → [simple version]. 4 passages.'"
    },
    idealPromptContext: "Create an HTML before/after transformation page: rewrite 4 passages from a SaaS investor update from jargon to plain English. Target audience: non-technical reader, Grade 8 reading level. Passages to rewrite: 1) multi-tenant architecture synergies jargon, 2) NRR and land-and-expand metrics, 3) PLG flywheel and GTM motion buzzwords, 4) data-driven culture corporate-speak. Format: side-by-side comparison for each pair, with a short annotation below explaining what changed and why. Summary stats row: word count reduction percentage and readability grade improvement."
  },

  {
    id: "t02",
    category: "Transformations",
    outputFile: "outputs/transformations/dense-to-bullets.html",
    habitFocus: "TONE_FORMAT",
    difficulty: 1,
    title: "Dense Text → Structured Bullets",
    description: "A business narrative converted into structured bullets. The ideal prompt specifies the output format precisely — section headers + bullets, not just 'make it shorter'.",
    keyElements: [
      "Before/after split comparison layout",
      "Original dense paragraph shown",
      "Output: named sections with bullet points",
      "Key numbers preserved and bolded",
      "Section names reflect content categories",
      "Before/after word count or metrics",
      "Business or financial domain"
    ],
    hintSeeds: {
      level1: "Saying 'turn into bullets' is vague. Does your prompt specify the section structure?",
      level2: "Name the sections: 'Revenue, Margins, Retention, Team, Risks' — don't leave Gemini to guess.",
      level3: "Prompt: 'Convert [text] to structured bullets. Sections: [Revenue/Margins/Retention/Team/Risks]. Bold key numbers. Show before/after with word count.'",
      level4: "Ideal: source text type + section names + formatting rules (bold numbers, max 2 lines/bullet) + comparison layout + word count metrics."
    },
    idealPromptContext: "Convert this quarterly business review paragraph into structured bullet points: 'The company achieved revenue of ₹48 crore in Q3, representing a 22% year-on-year increase, driven primarily by the enterprise segment which contributed 64% of total revenue. EBITDA margins contracted by 3.2 percentage points to 14.8% due to elevated customer acquisition costs from Tier-2 city expansion. Churn improved to 1.8% monthly from 2.4%, though SMB churn remains above 3%. Headcount grew to 340 from 298 with hires in engineering and sales. Q4 risks include delayed enterprise onboarding worth ₹4.2Cr ARR and regulatory uncertainty in two states.' Sections: Revenue, Margins, Retention, Team, Q4 Risks. Bold all numbers. Max 2 lines per bullet. Show before/after side-by-side with word count metric."
  },

  {
    id: "t03",
    category: "Transformations",
    outputFile: "outputs/transformations/formal-to-casual.html",
    habitFocus: "CONTEXT",
    difficulty: 2,
    title: "Formal Email → Casual Slack Message",
    description: "An HR policy email rewritten as a Slack message. Context is critical — the audience, channel, and relationship define what 'casual' means here.",
    keyElements: [
      "Source format (formal email) identified",
      "Target format (Slack message) specified",
      "Audience relationship established (team member, not subordinate)",
      "Tone target defined (friendly, not unprofessional)",
      "Same information preserved, shorter",
      "Platform-appropriate conventions (emoji, @mentions, channels)",
      "Change annotation or explanation of transformations"
    ],
    hintSeeds: {
      level1: "Formal→casual means different things in different contexts. Does your prompt say who is reading this and where?",
      level2: "Name the platform (Slack), the relationship (team member), and the tone boundary (friendly but still professional).",
      level3: "Specify: source format, target format, platform, audience relationship, and one constraint (e.g. keep same information, reduce length by 40%).",
      level4: "Ideal: 'Rewrite [formal HR email] as Slack message. Audience: team member (not subordinate). Platform conventions: emoji OK, reference #channel. Tone: warm but professional. Keep same info, cut 40%.'"
    },
    idealPromptContext: "Rewrite this formal HR email as a Slack message for an all-company channel. Email: 'Dear Team, I am writing to inform you that, effective the commencement of the forthcoming quarter, the organisation shall be implementing a revised remote work policy. Employees are hereby required to be physically present at the office premises for a minimum of three days per calendar week. Exceptions may be granted at the sole discretion of the relevant department head, subject to submission of a formal request no fewer than five business days in advance. Failure to comply with the aforementioned stipulations may result in disciplinary proceedings. Kindly acknowledge receipt. Regards, HR Department.' Target: peer-to-peer tone, not top-down. Use emoji, bold key details, reference #people-ops. Preserve all policy information. After the rewrite show a 'Key Changes Made' table with 4 specific transformations explained."
  }

];
