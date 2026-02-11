# Exercise 1.1 -- Market Research Sprint

**Agent Teams Layer: Your First Team** -- Create a 3-agent team to analyze a market opportunity

## Goal

Create your first agent team with 3 specialized researchers, assign them different angles of a market analysis, and synthesize their findings into a single recommendation document.

## Prerequisites

Lesson 20: Agent Teams -- you should understand TeamCreate, spawning teammates, and TaskCreate basics.

## What You Have

- `analysis-brief.md` -- Your VP's request: evaluate the premium pet food delivery market for possible entry
- `market-data.csv` -- 50 rows of market data (segments, growth rates, market size, competition levels)
- `competitors/acme-pet-co.md` -- Competitor profile: Acme Pet Co (established player)
- `competitors/fresh-paws.md` -- Competitor profile: Fresh Paws (venture-backed disruptor)
- `competitors/pet-palace.md` -- Competitor profile: Pet Palace (traditional retailer going online)

## Your Tasks

### Step 1: Read the Brief

Open `analysis-brief.md` and understand what your VP is asking for. Note the three specific angles they want covered: market sizing, competitive landscape, and entry strategy.

### Step 2: Create Your Research Team

Create a team called "market-research" with 3 specialized agents:

```
"Create a team called 'market-research' using TeamCreate. Spawn 3 teammates:
- 'market-analyst' -- analyzes market-data.csv for segment sizes, growth rates, and trends
- 'competitive-intel' -- reads all three competitor profiles and maps their strengths/weaknesses
- 'strategy-advisor' -- synthesizes both analyses into entry recommendations

Create tasks for each teammate with clear deliverables. The strategy-advisor's task should be blockedBy both the market-analyst and competitive-intel tasks, since it needs their findings first."
```

### Step 3: Monitor and Synthesize

Watch the team work. When all three tasks complete, review the outputs. The strategy advisor should have produced a recommendation that draws on both the market data analysis and competitive intelligence.

### Step 4: Score Your Results

Use the scoring rubric from the repo root (`../scoring-rubric.md`) to evaluate your team's output on all 4 criteria.

## Scoring

| Criteria                    | What to Evaluate                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Did the analysis cover market sizing, competition, AND entry strategy?                |
| **Actionability** (1-5)     | Could your VP make a go/no-go decision based on this?                                 |
| **Evidence Quality** (1-5)  | Are conclusions backed by specific data from market-data.csv and competitor profiles? |
| **Team Coordination** (1-5) | Did the strategy advisor effectively build on the other two agents' findings?         |

**Target**: 14/20 or higher.

## Expected Results

A thorough team should produce:

- Market analyst output covering at least 3 segments with growth rates and market sizes
- Competitive intel covering all 3 competitors with clear strengths/weaknesses
- Strategy recommendation that references specific data points from both analyses
- A clear go/no-go recommendation with supporting evidence

## Reflection

1. How did dividing the research across 3 agents compare to what you'd get from a single prompt asking for "complete market analysis"?
2. Did the strategy advisor actually reference findings from the other two agents, or did it work independently? What does this tell you about `blockedBy` dependencies?
3. If you could add a 4th agent, what angle would it cover? (Financial modeling? Customer interviews? Regulatory?)
4. How much did this cost in API tokens compared to a single-agent approach? Was the quality improvement worth it?

## Tool Note

This exercise works in Claude Code (terminal). Agent Teams requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` to be set. Cowork does not support multi-agent team orchestration.
