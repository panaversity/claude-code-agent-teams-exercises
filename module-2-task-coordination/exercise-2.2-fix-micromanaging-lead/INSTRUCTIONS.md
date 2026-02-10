# Exercise 2.2 -- Fix the Micromanaging Lead

**Core Skill: Delegate Mode & Plan Approval** -- Diagnose why a team lead is implementing instead of delegating, then fix the prompt and configuration.

## Goal

Analyze a session transcript where the team lead bypasses teammates and implements directly. Identify the prompt design flaws that caused this, then rewrite the prompt to enforce proper delegation using delegate mode and plan approval.

## What You Have

- `session-transcript.md` -- A full session log showing the lead doing all the work
- `failed-prompt.md` -- The original prompt that caused the failure

## Prerequisites

- Understanding of delegate mode (Shift+Tab) from Lesson 20
- Understanding of plan approval from Lesson 20

> **Budget-friendly**: This exercise is mostly analysis. The final step optionally runs a team to test your fix.

## Your Tasks

### Step 1: Read the Failed Prompt

Open `failed-prompt.md`. Before reading the session transcript, predict what will go wrong. What's missing from this prompt that would cause delegation failures?

### Step 2: Analyze the Session Transcript

Read `session-transcript.md`. Identify every instance where the lead implements directly. For each instance, note:

- What task should have been delegated?
- Which teammate should have received it?
- Why did the lead do it instead?

### Step 3: Identify the Three Prompt Flaws

There are exactly 3 design flaws in the original prompt:

1. **Flaw 1**: Missing role boundary enforcement
2. **Flaw 2**: Missing task assignment specificity
3. **Flaw 3**: Missing control mechanism

Document each flaw with a quote from the transcript showing its effect.

### Step 4: Rewrite the Prompt

Write a new prompt that fixes all 3 flaws. Your rewrite should:

- Explicitly tell the lead to NEVER edit files directly
- Assign specific file ownership to each teammate
- Use delegate mode and/or plan approval

### Step 5: Test Your Fix (Optional -- requires API credits)

Run your rewritten prompt and verify the lead only coordinates. Watch for:

- Does the lead create tasks and assign them?
- Does the lead review (not implement) teammate output?
- Do teammates own their files exclusively?

## Reflection

- What's the minimum change that would have prevented the lead from implementing?
- Is delegate mode (Shift+Tab) sufficient alone, or do you also need prompt instructions?
- When would you NOT want delegate mode? Are there tasks where the lead should implement?
- How does plan approval add a second layer of control beyond delegate mode?
