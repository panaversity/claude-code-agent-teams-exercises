# Exercise 4.2 -- Review Workflow Design

**Agent Teams Layer: Design Thinking** -- Plan approval pipelines for 3 deliverable types (no agents needed)

## Goal

Design review and approval workflows for 3 different business deliverables, specifying who reviews, what criteria they check, and when to reject vs approve. This is a design exercise -- no API costs required.

## Prerequisites

Exercise 4.1 -- you should understand delegate mode, plan approval, and review cycles.

## What You Have

- `deliverables.md` -- 3 deliverable types that need review workflows
- `approval-checklist-template.md` -- A template for designing approval checklists

## Your Tasks

### Step 1: Read All Three Deliverables

Read `deliverables.md` to understand the three types of deliverables that need review workflows.

### Step 2: Design a Review Workflow for Each

For each deliverable, define:

1. **Reviewers**: Who reviews and in what order?
2. **Criteria**: What does each reviewer check?
3. **Gates**: What triggers approval vs rejection?
4. **Revision Loop**: What happens when rejected? How many rounds before escalation?
5. **Final Approval**: Who makes the final call and what do they check?

### Step 3: Map to Agent Teams Concepts

For each workflow, specify:

- Which agents would you create?
- Which would use delegate mode (plan_mode_required)?
- Where would you use plan approval vs simple task completion?

### Step 4: Compare Approaches

After designing all three, analyze:

- Which deliverable needed the most review stages?
- Which had the highest risk of "revision death spiral" (endless back-and-forth)?
- How would you prevent gold-plating (reviewing forever instead of shipping)?

## Scoring

| Criteria                    | What to Evaluate                                             |
| --------------------------- | ------------------------------------------------------------ |
| **Comprehensiveness** (1-5) | Does each workflow cover all review stages?                  |
| **Actionability** (1-5)     | Could someone implement this workflow in Claude Code?        |
| **Evidence Quality** (1-5)  | Are review criteria specific and measurable (not vague)?     |
| **Team Coordination** (1-5) | Do workflows prevent bottlenecks and revision death spirals? |

**Target**: 14/20 or higher.

## Expected Results

Strong designs should include:

- Clear review criteria (not just "review for quality" -- specify WHAT quality means)
- Maximum revision count before escalation
- Different rigor levels for different deliverables (blog post vs legal contract)
- Prevention of bottlenecks (single reviewer blocking everything)

## Reflection

1. Which deliverable needed the strictest review process? Why?
2. How do you balance thoroughness with speed? When is "good enough" actually good enough?
3. What's the cost of over-reviewing? (Hint: think about agent time, tokens, and opportunity cost)
4. In your own work, which deliverables would benefit from this kind of structured review?

## Tool Note

This is a design exercise -- no Claude Code or API costs needed. Complete it with a text editor.
