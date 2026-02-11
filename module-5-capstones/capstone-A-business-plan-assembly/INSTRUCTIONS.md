# Capstone A -- Business Plan Assembly

**Agent Teams Capstone: Entrepreneurship** -- Assemble a complete business plan using a multi-agent team

## Goal

Combine everything you've learned -- team creation, task pipelines, inter-agent communication, and quality gates -- to create a 5-agent team that produces a complete business plan for a food truck startup. This is a full integration exercise.

## Prerequisites

Modules 1-4 completed. You should be comfortable with all Agent Teams concepts.

## What You Have

- `business-idea.md` -- The founder's vision and initial concept for a gourmet grilled cheese food truck
- `market-research.csv` -- Market data on the local food truck industry (55 rows)
- `cost-estimates.csv` -- Detailed startup and operating cost estimates

## Your Challenge

Design and run a team that produces a complete business plan with these sections:

1. **Executive Summary** -- The pitch (synthesized from all other sections)
2. **Market Analysis** -- Local market size, competition, target customers, trends
3. **Operations Plan** -- Menu, sourcing, daily operations, staffing
4. **Financial Projections** -- Startup costs, monthly P&L, break-even analysis, 12-month forecast
5. **Marketing Strategy** -- Customer acquisition, branding, social media, partnerships

### Suggested Team Structure

This is a suggestion -- design your own team if you see a better approach:

- **market-researcher** -- Analyzes market-research.csv for local market insights
- **operations-planner** -- Designs menu, staffing, and daily operations using cost data
- **financial-analyst** -- Builds financial projections from cost-estimates.csv and market data
- **marketing-strategist** -- Designs customer acquisition plan based on market analysis
- **plan-assembler** -- Synthesizes all sections into a coherent business plan (blocked by all others)

### Requirements

- At least 4 agents with clear, non-overlapping responsibilities
- Task dependencies that enforce logical ordering (can't do financial projections without cost data AND market sizing)
- At least one quality gate (the plan assembler should review each section before synthesizing)
- The final plan should reference specific data from the starter files (not generic advice)

### No Starter Prompts

This is a capstone -- design the team, tasks, dependencies, and prompts yourself.

## Scoring

| Criteria                    | What to Evaluate                                                        |
| --------------------------- | ----------------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Does the business plan cover all 5 required sections?                   |
| **Actionability** (1-5)     | Could a founder use this plan to apply for a small business loan?       |
| **Evidence Quality** (1-5)  | Are projections and claims backed by data from the CSV files?           |
| **Team Coordination** (1-5) | Did the agents build on each other's work (not just work in isolation)? |

**Target**: 16/20 or higher (capstone standard).

## Expected Results

A complete business plan should include:

- Market analysis citing specific local data (not generic "food trucks are growing")
- Financial projections with month-by-month P&L for at least 12 months
- Break-even analysis showing when the truck becomes profitable
- Marketing strategy tailored to the specific location and target customer
- Executive summary that coherently ties all sections together

## Reflection

1. How did you decide on team structure? Did you consider alternatives?
2. Which dependency was most critical? What would break if you removed it?
3. Did the plan assembler actually improve the plan, or just concatenate sections?
4. How does this compare to asking a single agent to "write a business plan for a food truck"?
5. What would you change about your team design if you ran this again?

## Tool Note

Works in Claude Code (terminal). Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. This is the most API-intensive exercise in the pack.
