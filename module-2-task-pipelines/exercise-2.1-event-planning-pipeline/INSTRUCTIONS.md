# Exercise 2.1 -- Event Planning Pipeline

**Agent Teams Layer: Task Pipelines** -- Build a dependency chain for corporate event planning

## Goal

Create a 4-stage task pipeline where each stage depends on the previous one: Budget Analysis → Venue Selection → Guest Management → Logistics Planning. Experience how `blockedBy` dependencies enforce correct ordering.

## Prerequisites

Module 1 exercises -- you should be comfortable creating teams and assigning tasks.

## What You Have

- `event-requirements.md` -- The event brief from your company's Head of Operations
- `budget.csv` -- Departmental budget allocations and spending limits
- `venue-options.csv` -- 12 potential venues with capacity, cost, availability, and amenities
- `guest-list.csv` -- 80 invited guests with dietary needs, accessibility requirements, and VIP status

## Your Tasks

### Step 1: Understand the Dependencies

Read `event-requirements.md` to understand why order matters:

1. **Budget** must be analyzed first (sets venue price ceiling)
2. **Venue** selection depends on budget (can't pick a $50K venue on a $20K budget)
3. **Guest management** depends on venue (dietary needs depend on venue catering options)
4. **Logistics** depends on venue AND guests (transportation, seating, AV needs)

### Step 2: Create the Pipeline Team

```
"Create a team called 'event-planning' with 4 agents:
- 'budget-analyst' -- analyzes budget.csv to determine total available budget, mandatory vs discretionary spending, and the maximum venue cost
- 'venue-scout' -- evaluates venue-options.csv against budget constraints and event requirements
- 'guest-coordinator' -- cross-references guest-list.csv dietary/accessibility needs with selected venue capabilities
- 'logistics-planner' -- creates the final event plan combining budget, venue, and guest data

Create 4 tasks with this dependency chain:
- Task 1: 'Analyze budget and set spending limits' → budget-analyst
- Task 2: 'Select optimal venue within budget' → venue-scout, blockedBy: [Task 1]
- Task 3: 'Plan guest accommodations for selected venue' → guest-coordinator, blockedBy: [Task 2]
- Task 4: 'Create final logistics plan' → logistics-planner, blockedBy: [Task 2, Task 3]"
```

### Step 3: Run and Observe

Start the pipeline. Watch the TaskList to see tasks unblock one at a time. Pay attention to:

- Does task 2 start before task 1 finishes? (It shouldn't)
- Does the venue scout use the budget analyst's spending limits?
- Does the logistics planner reference both venue and guest data?

### Step 4: Score Your Results

Evaluate using the scoring rubric.

## Scoring

| Criteria                    | What to Evaluate                                                            |
| --------------------------- | --------------------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Does the final plan cover budget, venue, guests, AND logistics?             |
| **Actionability** (1-5)     | Could an admin actually execute this event plan?                            |
| **Evidence Quality** (1-5)  | Are venue choices justified by budget numbers? Guest plans by dietary data? |
| **Team Coordination** (1-5) | Did each stage clearly build on the previous stage's output?                |

**Target**: 14/20 or higher.

## Expected Results

A well-coordinated pipeline should produce:

- Budget analysis with clear spending limits per category
- Venue recommendation referencing the budget ceiling and event requirements
- Guest accommodation plan matching dietary needs to venue catering capabilities
- Final logistics document that ties all three analyses together

## Reflection

1. What happened in the TaskList while early tasks were running? Could you see the blocked tasks waiting?
2. Did any agent produce output that the next agent didn't use? What does this tell you about task descriptions?
3. If the budget analysis came back saying "we only have $5,000," how would that change every downstream task? Is this why ordering matters?
4. Could tasks 3 and 4 have run in parallel instead of sequentially? What would be the tradeoff?

## Tool Note

Works in Claude Code (terminal). Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Cowork does not support multi-agent team orchestration.
