# Exercise 3.1 -- Feature Prioritization Debate

**Agent Teams Layer: Communication** -- Use SendMessage to have agents debate feature priorities with data

## Goal

Create a 4-agent team where 3 advocate agents each champion a different feature using real data, then a decision-maker agent synthesizes their arguments into a prioritized recommendation. Practice SendMessage for direct messages and understand when to use broadcast vs DMs.

## Prerequisites

Modules 1-2 exercises -- you should be comfortable with teams, tasks, and dependencies.

## What You Have

- `feature-proposals.md` -- 3 proposed features with descriptions and target users
- `user-survey.csv` -- 100 survey responses rating feature importance and willingness to pay
- `revenue-impact.csv` -- Projected revenue impact for each feature by quarter
- `effort-estimates.csv` -- Engineering effort estimates broken down by component

## Your Tasks

### Step 1: Understand the Features

Read `feature-proposals.md` to understand the three features being debated:

- Feature A: Advanced Analytics Dashboard
- Feature B: Team Collaboration Suite
- Feature C: API Marketplace

### Step 2: Create the Debate Team

```
"Create a team called 'feature-debate' with 4 agents:
- 'advocate-analytics' -- Champions Feature A using survey data and revenue projections
- 'advocate-collaboration' -- Champions Feature B using survey data and revenue projections
- 'advocate-marketplace' -- Champions Feature C using survey data and revenue projections
- 'decision-maker' -- Listens to all three arguments and makes a prioritized recommendation

Create tasks:
- Task 1: 'Build case for Analytics Dashboard' → advocate-analytics (reads user-survey.csv and revenue-impact.csv for Feature A data)
- Task 2: 'Build case for Collaboration Suite' → advocate-collaboration (reads user-survey.csv and revenue-impact.csv for Feature B data)
- Task 3: 'Build case for API Marketplace' → advocate-marketplace (reads user-survey.csv and revenue-impact.csv for Feature C data)
- Task 4: 'Synthesize arguments and recommend priority order' → decision-maker, blockedBy: [Task 1, Task 2, Task 3]

IMPORTANT: Each advocate should also read effort-estimates.csv to address feasibility in their argument. The decision-maker should weigh revenue potential, user demand, AND engineering effort."
```

### Step 3: Observe the Communication

Watch how information flows between agents. Key questions:

- Do the advocates use SendMessage to share their findings with the decision-maker?
- Does the decision-maker reference specific data points from each advocate?
- Is there any redundant communication (broadcasts that should have been DMs)?

### Step 4: Score Your Results

Evaluate the final prioritization recommendation.

## Scoring

| Criteria                    | What to Evaluate                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Does the recommendation address all 3 features with pros/cons?                      |
| **Actionability** (1-5)     | Is the priority order clear with a timeline?                                        |
| **Evidence Quality** (1-5)  | Are rankings backed by specific survey numbers and revenue projections?             |
| **Team Coordination** (1-5) | Did the decision-maker clearly synthesize (not just list) the advocates' arguments? |

**Target**: 14/20 or higher.

## Expected Results

A well-run debate should produce:

- Three distinct arguments, each citing specific data (not generic claims)
- A recommendation that acknowledges tradeoffs (Feature X has higher revenue but Feature Y has lower effort)
- A clear priority order: Build First → Build Second → Build Third
- Reasoning that a product manager could defend in a stakeholder meeting

## Reflection

1. Did the advocates cherry-pick data that supported their feature? Is that useful or harmful for decision-making?
2. How did the decision-maker weigh conflicting evidence (e.g., Feature A has highest revenue but lowest survey scores)?
3. If you re-ran this with a 4th advocate for "Build Nothing -- Pay Down Tech Debt," how would it change the dynamic?
4. What's the difference between this multi-agent debate and just asking one agent to "analyze all three features"?
5. How much did the communication between agents cost in tokens? Was the structured debate worth the overhead?

## Tool Note

Works in Claude Code (terminal). Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Cowork does not support multi-agent team orchestration.
