# Contributing to PromptGym

Thank you for helping grow the training dataset! New rounds keep the gym fresh and challenging.

## Round Object Schema

Each round is a JavaScript object with the following fields:

```js
{
  id:          string,  // Unique ID. Format: first letter of habit + 2-digit number
                        // c01–c10 = CONCISENESS, x01–x10 = CONTEXT,
                        // t01–t10 = TONE_FORMAT, e01–e10 = EXAMPLES
                        // For new rounds, continue the sequence (e.g. c11, x11)

  habitFocus:  string,  // One of: "CONCISENESS" | "CONTEXT" | "TONE_FORMAT" | "EXAMPLES"

  difficulty:  number,  // 1 = beginner | 2 = intermediate | 3 = sharp

  category:    string,  // One of: "ELI5" | "Business" | "Creative" | "Code" |
                        // "Marketing" | "Social" | "Technical" | "Productivity" | "Brand Copy"

  output:      string,  // The AI-generated text shown to the user during the round.
                        // Should be realistic and high-quality — as if a skilled prompter
                        // actually generated it. Multi-line strings are fine.

  idealPrompt: string,  // The canonical prompt that would produce the output.
                        // MUST be 15 words or fewer. Short prompts teach conciseness by example.

  habitTip:    string,  // One sentence explaining WHY this ideal prompt works for the target habit.
                        // Shown after the round. Should teach the underlying principle.

  hintText:    string,  // A directional clue shown when the user requests a hint.
                        // Must NOT reveal the ideal prompt or any key words from it.
                        // Should point toward the habit dimension, not the answer.
}
```

## Example Round Entry

```js
{
  id: "c11",
  habitFocus: "CONCISENESS",
  difficulty: 2,
  category: "Business",
  output: "Subject: Decision needed by Friday\n\nHi team, we need to decide on the vendor by Friday EOD. Two options on the table — I'll share a one-pager by Wednesday.",
  idealPrompt: "Internal email: vendor decision deadline Friday, two options, one-pager Wednesday.",
  habitTip: "Every noun in the ideal prompt carries weight: deadline, option count, and deliverable format — no verb phrases needed.",
  hintText: "The ideal prompt names three specific things without using a full sentence to describe any of them."
}
```

## Pull Request Checklist

Before opening a PR, verify all of the following:

- [ ] **One round per PR** — keeps review focused and history clean
- [ ] **`idealPrompt` is 15 words or fewer** — count carefully, every word counts
- [ ] **`hintText` does not reveal the ideal prompt** — it should point toward the habit, not the answer
- [ ] **`output` is plausible** — it should look like genuine AI output, not a test fixture
- [ ] **`id` follows the naming convention** and doesn't conflict with an existing round
- [ ] **`habitFocus` matches the round's actual teaching moment** — the round should clearly train that habit
- [ ] **`habitTip` explains the principle, not just what the prompt does** — teach the "why"
- [ ] Round has been tested by entering it manually in the app and verifying it scores correctly

## What Makes a Good Round?

A good round has an output that is **specific enough** that the trained habit clearly explains what made it good. The user should be able to look at the output, write a prompt, and understand exactly which habit dimension they missed.

Avoid:
- Outputs that are so generic that any decent prompt would produce them
- `idealPrompt` values that are longer than 15 words
- `hintText` that gives away the answer (e.g. "The ideal prompt includes a word count limit" is too specific if the answer is literally "under 10 words")
- Rounds where multiple habits are equally important — pick one and make it obvious
