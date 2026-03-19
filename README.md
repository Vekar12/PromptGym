# 💪 PromptGym

PromptGym is a browser-based deliberate practice tool for prompting skills. You see an AI-generated output, write the prompt you think produced it, and get scored on four specific prompting habits — building measurable skill over time via a radar chart.

## The 4 Habits

**✂️ Conciseness** — Every word earns its place. No filler, no over-explaining.
> Example: Instead of "Can you please write me a short email that follows up on the proposal I sent on Monday?", write "Follow-up email line: checking on Monday proposal."

**🎯 Context** — Right amount of background: audience, purpose, situation.
> Example: Instead of "Explain RAG", write "Explain RAG to a non-technical product manager. Use an exam analogy."

**🎨 Tone & Format** — Explicitly specify voice, style, and output structure.
> Example: Instead of "Write a tweet thread about landing pages", write "3-tweet thread: landing page conversions, technical angle, not copy. Numbered. Punchy."

**💡 Examples** — Anchor the output with a pattern, sample, or 'like this'.
> Example: Instead of "Write meeting action items", write "Meeting action items. Format like: '- [Name]: [task] by [deadline]'. 3 items."

## Setup

1. **Fork this repo** on GitHub
2. Enable GitHub Pages: Settings → Pages → Source: GitHub Actions
3. Push to `main` — GitHub Actions deploys automatically
4. **Visit your GitHub Pages URL** (shown in Settings → Pages)
5. **Enter your free Gemini API key** → Start training

### Get a FREE Gemini API Key (no credit card needed)
1. Go to [https://aistudio.google.com](https://aistudio.google.com)
2. Sign in with Google
3. Click "Get API key" → "Create API key"
4. Copy the key (starts with `AIza`)
5. Paste it into PromptGym on first launch

Free tier: **1,500 requests/day** — more than enough for daily training.

## 30-Day Practice Plan

**Week 1 — Baseline**
- Train All mode, 1 session/day (5 rounds per session)
- After each session, look at your radar chart
- Identify which axis is lowest — that's your weak habit

**Weeks 2–3 — Targeted Drill**
- Drill your weakest habit: 5 reps/day
- Check your radar every 3 days to track improvement
- Keep a note of what you're changing in your prompts

**Week 4 — Retest**
- Switch back to Train All mode
- Complete 5 sessions
- Compare your radar chart to Week 1 — your weakest axis should have grown

## Adding Custom Rounds

See [CONTRIBUTING.md](CONTRIBUTING.md) to add your own training rounds via pull request.
