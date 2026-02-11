# Capstone B -- Customer Feedback Triage

**Agent Teams Capstone: Corporate** -- Triage 200 customer reviews using a multi-agent team

## Goal

Create a team that triages 200 customer reviews into actionable categories, identifies the most critical issues, and produces a prioritized action plan for the product team. Practice team coordination at scale.

## Prerequisites

Modules 1-4 completed. You should be comfortable with all Agent Teams concepts.

## What You Have

- `customer-reviews.csv` -- 200 customer reviews with ratings, categories, and text
- `product-catalog.md` -- Your company's product lineup and recent changes
- `team-brief.md` -- What the Head of Product wants from this analysis

## Your Challenge

Design and run a team that:

1. **Categorizes** all 200 reviews into themes (bug reports, feature requests, praise, complaints, support issues)
2. **Identifies** the top 5 most critical issues by frequency and severity
3. **Analyzes** sentiment trends (are things getting better or worse?)
4. **Produces** a prioritized action plan the product team can execute next sprint

### Requirements

- At least 3 agents with distinct responsibilities
- Task dependencies that enforce logical ordering
- The final action plan must reference specific review data (not generic recommendations)
- Include a "confidence level" for each recommendation (based on how many reviews support it)

### No Starter Prompts

This is a capstone -- design the team, tasks, dependencies, and prompts yourself.

## Scoring

| Criteria                    | What to Evaluate                                                 |
| --------------------------- | ---------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Were all 200 reviews analyzed (not just a sample)?               |
| **Actionability** (1-5)     | Could the product team act on the top 5 issues next sprint?      |
| **Evidence Quality** (1-5)  | Are recommendations backed by specific review counts and quotes? |
| **Team Coordination** (1-5) | Did agents divide work effectively without duplicating effort?   |

**Target**: 16/20 or higher (capstone standard).

## Reflection

1. How did you divide 200 reviews across agents? By theme? By chunk? By rating?
2. Did any agent's findings surprise the others? How was that handled?
3. What would change if you had 2,000 reviews instead of 200?
4. How does automated triage compare to a human PM reading every review manually?
5. What quality gate would you add to catch errors in the categorization?

## Tool Note

Works in Claude Code (terminal). Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Moderate API cost due to the volume of review text.
