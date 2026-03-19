// data/rounds.js
window.ROUNDS = [

  // ── CONCISENESS ──────────────────────────────────────────────────────────
  { id:"c01", habitFocus:"CONCISENESS", difficulty:1, category:"ELI5",
    output:"The mitochondria produces energy for the cell in the form of ATP through cellular respiration, which breaks down glucose using oxygen.",
    idealPrompt:"One sentence: what mitochondria does and why it matters.",
    habitTip:"Specifying 'one sentence' forces Claude to compress. Without it, you get a paragraph.",
    hintText:"The ideal prompt tells Claude exactly how long the answer should be." },

  { id:"c02", habitFocus:"CONCISENESS", difficulty:1, category:"Business",
    output:"Following up to check if you've had a chance to review the proposal I sent on Monday.",
    idealPrompt:"Follow-up email line: checking on Monday proposal.",
    habitTip:"Nine words replaced a full sentence. The task is implied by 'follow-up email line'.",
    hintText:"The ideal prompt names the format and the specific thing being followed up on." },

  { id:"c03", habitFocus:"CONCISENESS", difficulty:2, category:"Marketing",
    output:"Tired of forgetting your best ideas? Notion keeps everything in one place — notes, tasks, and wikis — so your team stays in sync without the chaos.",
    idealPrompt:"Notion tagline: solves idea loss, one place, teams, 25 words max.",
    habitTip:"Constraints (25 words max) and pain point (idea loss) in 9 words. Every word steers the output.",
    hintText:"The ideal prompt names the product, the problem it solves, and a word limit." },

  { id:"c04", habitFocus:"CONCISENESS", difficulty:2, category:"Code",
    output:"def reverse_string(s):\n    return s[::-1]",
    idealPrompt:"Python: reverse a string, one line.",
    habitTip:"'One line' is a constraint that eliminates all explanatory code Claude would add by default.",
    hintText:"The ideal prompt specifies the language, task, and a structural constraint." },

  { id:"c05", habitFocus:"CONCISENESS", difficulty:1, category:"ELI5",
    output:"Inflation means your money buys less stuff than it did before, like when a chocolate bar used to cost 10 rupees and now costs 20.",
    idealPrompt:"Explain inflation to a child using a candy price example.",
    habitTip:"The example ('candy price') is part of the constraint — it told Claude which analogy to use.",
    hintText:"The ideal prompt names the audience and the analogy to use." },

  { id:"c06", habitFocus:"CONCISENESS", difficulty:3, category:"Business",
    output:"Q3 saw 23% revenue growth driven by enterprise deals, offset by a 12% rise in CAC. Net retention remained strong at 118%.",
    idealPrompt:"Q3 summary: growth, CAC, net retention. 3 metrics, 2 sentences.",
    habitTip:"Naming the three metrics you want means Claude doesn't decide for you. '2 sentences' kills padding.",
    hintText:"The ideal prompt names exactly which metrics to include and how long the output should be." },

  { id:"c07", habitFocus:"CONCISENESS", difficulty:2, category:"Creative",
    output:"Not all who wander are lost — but you might want to charge your phone first.",
    idealPrompt:"Funny travel quote, subverts a classic. One sentence.",
    habitTip:"'Subverts a classic' is a precise creative direction in three words. Vague adjectives would have failed.",
    hintText:"The ideal prompt gives a creative direction that tells Claude which literary move to make." },

  { id:"c08", habitFocus:"CONCISENESS", difficulty:1, category:"Productivity",
    output:"1. Wake up at 6am\n2. Drink water immediately\n3. No phone for first 30 minutes\n4. Journal for 10 minutes\n5. Exercise",
    idealPrompt:"Morning routine: 5 steps, numbered list.",
    habitTip:"Format (numbered list) + count (5) in 5 words. Claude fills the content — you control the shape.",
    hintText:"The ideal prompt specifies format type and exact number of items." },

  { id:"c09", habitFocus:"CONCISENESS", difficulty:3, category:"Technical",
    output:"Time complexity: O(n log n) — sorting dominates. Space: O(1) if in-place, O(n) for auxiliary array.",
    idealPrompt:"Merge sort: time + space complexity, one line each.",
    habitTip:"'One line each' is doing the heavy lifting. Without it, you'd get two paragraphs of explanation.",
    hintText:"The ideal prompt names the algorithm and specifies the exact two dimensions to cover." },

  { id:"c10", habitFocus:"CONCISENESS", difficulty:2, category:"Brand Copy",
    output:"Small batch. Big impact. Coffee roasted the way it was meant to be.",
    idealPrompt:"Coffee brand tagline: craft, impact. Under 10 words.",
    habitTip:"Word count limit (under 10) forced the punchy cadence. Without it, Claude writes full sentences.",
    hintText:"The ideal prompt names the brand category, two themes, and a hard word limit." },

  // ── CONTEXT ───────────────────────────────────────────────────────────────
  { id:"x01", habitFocus:"CONTEXT", difficulty:1, category:"Business",
    output:"Hi Priya, just checking in on the vendor shortlist — wanted to make sure we're aligned before Thursday's review meeting.",
    idealPrompt:"Follow-up email to colleague Priya, vendor shortlist status, before Thursday review.",
    habitTip:"Name (Priya) + relationship (colleague) + deadline (Thursday) = Claude writes the right tone and urgency.",
    hintText:"The ideal prompt names the recipient, the specific topic, and the deadline." },

  { id:"x02", habitFocus:"CONTEXT", difficulty:2, category:"Technical",
    output:"Think of RAG like an open-book exam. Instead of memorising everything, the model looks up relevant notes before answering your question.",
    idealPrompt:"Explain RAG to a non-technical product manager. Use an exam analogy.",
    habitTip:"'Non-technical PM' sets vocabulary level. 'Exam analogy' tells Claude which mental model to reach for.",
    hintText:"The ideal prompt specifies the audience's background and the type of analogy to use." },

  { id:"x03", habitFocus:"CONTEXT", difficulty:1, category:"Creative",
    output:"To my dearest friend on her big day — may your marriage be as strong as your WiFi and your in-laws be as quiet as your phone on silent.",
    idealPrompt:"Funny wedding toast for close female friend, inside tech jokes, warm ending.",
    habitTip:"'Close friend' (not colleague) and 'tech jokes' gave Claude the relationship + flavour. Both were essential.",
    hintText:"The ideal prompt specifies the relationship, tone flavor, and how it should end." },

  { id:"x04", habitFocus:"CONTEXT", difficulty:2, category:"Business",
    output:"Subject: Quick sync on onboarding flow?\nHi Aditya, I wanted to loop you in on a few friction points we've spotted in the new user onboarding — would love 20 minutes this week to walk through the data.",
    idealPrompt:"Email to PM Aditya requesting 20-min meeting, discuss onboarding friction data.",
    habitTip:"Name + role + duration + specific topic = Claude writes a specific, action-oriented email, not a generic one.",
    hintText:"The ideal prompt names the person, their role, the meeting length, and the exact agenda item." },

  { id:"x05", habitFocus:"CONTEXT", difficulty:1, category:"ELI5",
    output:"Imagine the internet is a giant library. Websites are books, and Google is the librarian who helps you find the right book without reading all of them.",
    idealPrompt:"Explain the internet to a 7-year-old using a library analogy.",
    habitTip:"Age (7-year-old) changes vocabulary and sentence length. Analogy instruction eliminates guesswork.",
    hintText:"The ideal prompt specifies the exact age and which real-world analogy to use." },

  { id:"x06", habitFocus:"CONTEXT", difficulty:3, category:"Marketing",
    output:"You didn't start your business to spend Sundays doing payroll. Razorpay Payroll handles it so you can get back to what you actually built this for.",
    idealPrompt:"Ad copy for Razorpay Payroll targeting bootstrapped Indian founders. Pain: wasted weekends on admin.",
    habitTip:"'Bootstrapped Indian founders' set the cultural lens and vocabulary. 'Pain' framing directed the hook.",
    hintText:"The ideal prompt names the product, the exact target audience, and the emotional pain point." },

  { id:"x07", habitFocus:"CONTEXT", difficulty:2, category:"Code",
    output:"// Checks if two date ranges overlap\n// Returns true if overlap exists, false otherwise\nfunction rangesOverlap(start1, end1, start2, end2) {\n  return start1 <= end2 && start2 <= end1;\n}",
    idealPrompt:"JS function: check if two date ranges overlap. Add doc comment explaining the logic.",
    habitTip:"'Doc comment explaining logic' is context that shapes the output format, not just the code.",
    hintText:"The ideal prompt specifies the language, task, and a documentation requirement." },

  { id:"x08", habitFocus:"CONTEXT", difficulty:1, category:"Business",
    output:"We appreciate your patience. Our team is reviewing your refund request and will respond within 3 business days.",
    idealPrompt:"Customer support reply: refund request received, 3-day SLA, empathetic tone.",
    habitTip:"SLA (3-day) + tone (empathetic) = Claude writes a specific commitment, not a vague holding reply.",
    hintText:"The ideal prompt names the situation, the specific SLA, and the tone required." },

  { id:"x09", habitFocus:"CONTEXT", difficulty:3, category:"Technical",
    output:"For a seed-stage B2B SaaS with 3 engineers and no dedicated DevOps, start with Railway or Render — both offer managed infrastructure with zero config. Avoid AWS until you have a platform engineer.",
    idealPrompt:"Infra recommendation: seed B2B SaaS, 3 engineers, no DevOps. Prioritise low ops overhead.",
    habitTip:"Company stage + team size + constraint = a recommendation grounded in reality, not a generic cloud comparison.",
    hintText:"The ideal prompt gives the company stage, team size, and the primary decision criterion." },

  { id:"x10", habitFocus:"CONTEXT", difficulty:2, category:"Creative",
    output:"The smell of old books and the scratch of a fountain pen — some rituals don't need upgrading.",
    idealPrompt:"One-line caption for photo of someone journaling in a quiet café. Nostalgic, not sentimental.",
    habitTip:"'Not sentimental' is a negative constraint that prevented cliché. Without it, Claude goes saccharine.",
    hintText:"The ideal prompt describes the scene and gives a tone direction plus a tone exclusion." },

  // ── TONE & FORMAT ─────────────────────────────────────────────────────────
  { id:"t01", habitFocus:"TONE_FORMAT", difficulty:1, category:"Productivity",
    output:"| Tool    | Price       | Learning Curve | Best For         | Free Tier |\n|---------|-------------|----------------|------------------|-----------|\n| Notion  | $10/mo      | Medium         | Wikis + notes    | Yes       |\n| Linear  | $8/mo       | Low            | Dev teams        | Yes       |\n| Asana   | $13.49/mo   | Medium         | Marketing teams  | Yes       |\n| Jira    | $8.15/mo    | High           | Engineering      | Yes       |",
    idealPrompt:"Compare Notion, Linear, Asana, Jira. Markdown table. Columns: price, learning curve, best for, free tier.",
    habitTip:"Naming the format (markdown table) and exact columns eliminates all guesswork about structure.",
    hintText:"The ideal prompt specifies both the output format type and the exact column names." },

  { id:"t02", habitFocus:"TONE_FORMAT", difficulty:1, category:"Social",
    output:"Most meetings could be an email.\nMost emails could be a Slack.\nMost Slacks could be silence.\nChoose silence more.",
    idealPrompt:"4-line poem on meeting culture. Punchy, descending structure, no rhyme.",
    habitTip:"'Descending structure' and 'no rhyme' are format specs. Without them, Claude writes a generic verse.",
    hintText:"The ideal prompt specifies the number of lines, the structural pattern, and what to avoid." },

  { id:"t03", habitFocus:"TONE_FORMAT", difficulty:2, category:"Business",
    output:"Three things from this week:\n• Closed the Meesho deal — 6 months pipeline finally moved\n• Infra costs down 18% after the Redis migration\n• Still blocked on legal sign-off for the SG entity\n\nNext week: close SG, prep Q4 board deck.",
    idealPrompt:"Weekly update email: 3 bullets (wins + blockers), next week focus. Casual, no fluff.",
    habitTip:"'No fluff' + 'casual' overrides Claude's default formal register. Format spec (bullets, 3 items) controls structure.",
    hintText:"The ideal prompt specifies the bullet count, the categories within bullets, and the tone." },

  { id:"t04", habitFocus:"TONE_FORMAT", difficulty:1, category:"ELI5",
    output:"Blockchain is just a shared notebook that everyone can see but nobody can erase. Once you write something in it, it stays forever.",
    idealPrompt:"Explain blockchain in 2 sentences. Plain English, no jargon, no analogies involving chains.",
    habitTip:"'No analogies involving chains' is a negative constraint. It prevents the most overused explanation in the space.",
    hintText:"The ideal prompt specifies length, register, and what type of analogy to avoid." },

  { id:"t05", habitFocus:"TONE_FORMAT", difficulty:2, category:"Marketing",
    output:"Thread: Why your landing page is losing conversions (and it's not the copy)\n\n1/ Most devs obsess over headline A/B tests. Meanwhile their page loads in 4.2 seconds on mobile.\n\n2/ 53% of users bounce if load time exceeds 3s. That's not a copywriting problem.\n\n3/ Fix the speed first. Then argue about button colour.",
    idealPrompt:"3-tweet thread: landing page conversions, technical angle, not copy. Numbered. Punchy.",
    habitTip:"'Technical angle, not copy' redirected Claude away from the obvious take. Format (numbered) controlled the structure.",
    hintText:"The ideal prompt specifies tweet count, the specific angle, and what angle to avoid." },

  { id:"t06", habitFocus:"TONE_FORMAT", difficulty:3, category:"Business",
    output:"Executive Summary\n\nRevenue grew 31% YoY to ₹42Cr. Growth driven by enterprise segment (up 67%). SMB churn increased to 8.2% — primary risk for Q4. Recommend: double down on enterprise, pause SMB acquisition spend until retention improves.",
    idealPrompt:"Board exec summary: revenue, growth driver, top risk, one recommendation. 4 sentences, formal.",
    habitTip:"'4 sentences' is a hard constraint that forces prioritisation. 'Formal' aligns with board register.",
    hintText:"The ideal prompt specifies the four content elements, a sentence count, and the register." },

  { id:"t07", habitFocus:"TONE_FORMAT", difficulty:1, category:"Code",
    output:"```python\ndef celsius_to_fahrenheit(c):\n    \"\"\"Convert Celsius to Fahrenheit.\"\"\"\n    return (c * 9/5) + 32\n```",
    idealPrompt:"Python function: Celsius to Fahrenheit. Include docstring. No explanation outside the code block.",
    habitTip:"'No explanation outside the code block' stops Claude's default behaviour of adding a paragraph after code.",
    hintText:"The ideal prompt specifies language, task, documentation type, and what to exclude from the output." },

  { id:"t08", habitFocus:"TONE_FORMAT", difficulty:2, category:"Creative",
    output:"She didn't storm out. She just stopped refilling his coffee.",
    idealPrompt:"One sentence: a relationship ending, shown through action not emotion. Literary fiction tone.",
    habitTip:"'Shown through action not emotion' is a craft instruction that changes everything. It's a format spec for creative work.",
    hintText:"The ideal prompt specifies output length, a narrative technique, and a genre register." },

  { id:"t09", habitFocus:"TONE_FORMAT", difficulty:2, category:"Technical",
    output:"**Should you use Redux?**\n\n**Yes if:** Your state is shared across 5+ components, multiple devs touching it, or you need time-travel debugging.\n\n**No if:** It's a small app, state is local, or you're just starting out. Use useState.",
    idealPrompt:"When to use Redux vs useState. Bold headers for Yes/No. Direct, opinionated, no hedging.",
    habitTip:"'No hedging' is a tone spec. Claude's default is to qualify everything. This overrides that instinct.",
    hintText:"The ideal prompt specifies the comparison, the structural format (bold headers), and a tone constraint." },

  { id:"t10", habitFocus:"TONE_FORMAT", difficulty:3, category:"Marketing",
    output:"Most tools promise to save time.\nThis one actually gives it back.\n\nNo setup. No learning curve. Open it, use it.",
    idealPrompt:"Product launch copy: anti-feature-list angle, rhythm-focused, 3 sentences max. No exclamation marks.",
    habitTip:"'No exclamation marks' + 'rhythm-focused' are two independent format constraints that together define the voice.",
    hintText:"The ideal prompt names the creative angle, a structural quality, a length limit, and a punctuation rule." },

  // ── EXAMPLES ──────────────────────────────────────────────────────────────
  { id:"e01", habitFocus:"EXAMPLES", difficulty:1, category:"Brand Copy",
    output:"We're down for maintenance. Your data is safe — we'll be back shortly.",
    idealPrompt:"App downtime message. Professional and calm. Like: 'Brief maintenance underway. Back in minutes.'",
    habitTip:"The example set the tone, length, and structure. Without it, Claude writes a generic error page.",
    hintText:"The ideal prompt includes a short example of the style and tone it expects." },

  { id:"e02", habitFocus:"EXAMPLES", difficulty:2, category:"Code",
    output:"SELECT u.name, COUNT(o.id) AS order_count\nFROM users u\n-- Join to orders table to count per user\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name\n-- Only users with more than 5 orders\nHAVING order_count > 5;",
    idealPrompt:"SQL: users with 5+ orders. Inline comments like: '-- Join to link users to orders'",
    habitTip:"The example comment showed Claude the exact format and placement style. Without it, comments would be generic.",
    hintText:"The ideal prompt includes a sample inline comment to demonstrate the expected comment format." },

  { id:"e03", habitFocus:"EXAMPLES", difficulty:2, category:"Creative",
    output:"Zomato is hungry too. We'll be back soon. 🍕",
    idealPrompt:"Zomato downtime message. Brand voice: cheeky, food-pun. Like: 'Taking a quick snack break. Back soon!'",
    habitTip:"'Cheeky, food-pun' + example = Claude understood it was supposed to use the brand's own product as the joke.",
    hintText:"The ideal prompt names the brand voice style and gives a short example matching that voice." },

  { id:"e04", habitFocus:"EXAMPLES", difficulty:1, category:"Business",
    output:"Action items from today's sync:\n- Rohan: share updated deck by EOD Friday\n- Priya: confirm vendor shortlist by Monday\n- Team: review Q3 metrics before next standup",
    idealPrompt:"Meeting action items. Format like: '- [Name]: [task] by [deadline]'. 3 items.",
    habitTip:"The format template ([Name]: [task] by [deadline]) locked the structure. Claude just filled in the slots.",
    hintText:"The ideal prompt includes the exact format template using placeholder syntax." },

  { id:"e05", habitFocus:"EXAMPLES", difficulty:3, category:"Technical",
    output:"camelCase: getUserById\nPascalCase: UserService\nSCREAMING_SNAKE: MAX_RETRY_COUNT\nkebab-case: user-profile-card",
    idealPrompt:"Naming convention cheat sheet. 4 cases, one example each. Like: 'camelCase: getUserById'",
    habitTip:"The seed example (camelCase: getUserById) showed Claude the output format and vocabulary level instantly.",
    hintText:"The ideal prompt includes one complete example to demonstrate the exact output pattern." },

  { id:"e06", habitFocus:"EXAMPLES", difficulty:2, category:"Marketing",
    output:"Before: 'Our platform leverages AI to optimise operational workflows.'\nAfter: 'Less busywork. More results.'",
    idealPrompt:"Rewrite corporate jargon as plain English. Before/after format. Like: 'Before: [jargon] / After: [plain]'",
    habitTip:"Before/after format + a sample entry = Claude understood it was rewriting, not explaining.",
    hintText:"The ideal prompt specifies the before/after structure and includes an example pair." },

  { id:"e07", habitFocus:"EXAMPLES", difficulty:1, category:"ELI5",
    output:"A cookie is like a sticky note your browser keeps for a website. It helps the site remember who you are so you don't have to log in every time.",
    idealPrompt:"Explain browser cookies simply. Use a sticky note analogy like: 'like a note your browser keeps'",
    habitTip:"Giving the analogy seed ('sticky note') meant Claude built the right mental model instead of choosing a random one.",
    hintText:"The ideal prompt seeds the specific analogy to use with a short phrase." },

  { id:"e08", habitFocus:"EXAMPLES", difficulty:3, category:"Creative",
    output:"She ordered the same thing every Tuesday.\nHe always sat two tables away.\nNeither of them would call it a ritual.",
    idealPrompt:"3-line micro story: two strangers, unspoken connection. Understated like: 'Neither spoke. Both stayed.'",
    habitTip:"The example line set the voice register — minimalist, observation-based. Adjectives alone couldn't have done that.",
    hintText:"The ideal prompt includes a short example line that demonstrates the desired voice and style." },

  { id:"e09", habitFocus:"EXAMPLES", difficulty:2, category:"Productivity",
    output:"Daily review questions:\n• What's the one thing I must finish today?\n• What am I avoiding and why?\n• What would make today a win?",
    idealPrompt:"Daily reflection prompts, 3 bullets. Introspective like: 'What am I avoiding and why?'",
    habitTip:"The example question showed Claude the depth and self-awareness level expected. Without it, questions are surface-level.",
    hintText:"The ideal prompt includes one example question to calibrate the depth and introspective tone." },

  { id:"e10", habitFocus:"EXAMPLES", difficulty:3, category:"Brand Copy",
    output:"For the ones who check the weather before bed.\nFor the ones who read the reviews, then order anyway.\nFor the ones who send the long email when they could have called.",
    idealPrompt:"Brand manifesto opening: anaphora structure. Like: 'For the ones who [specific behaviour].' 3 lines.",
    habitTip:"The example line gave Claude the anaphora pattern and showed it wanted specific observed behaviours, not broad values.",
    hintText:"The ideal prompt names the rhetorical structure and provides one complete example line." }

];
