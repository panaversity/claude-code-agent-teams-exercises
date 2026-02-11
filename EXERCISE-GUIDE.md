# Agent Teams Exercise Guide

## Overview

This exercise pack accompanies **Lesson 20: Agent Teams** from Chapter 3 (General Agents). It provides hands-on practice with every major concept from the lesson through real business scenarios across four professional domains: knowledge work, corporate operations, entrepreneurship, and freelance consulting.

## Exercise Map

### Module 1: Your First Team (Knowledge Work)

_Practice after reading the "Enable Agent Teams" and "Your First Team" sections of Lesson 20_

| Exercise | Type     | Skill Practiced                                                 | API Cost |
| -------- | -------- | --------------------------------------------------------------- | -------- |
| 1.1      | Hands-on | Create 3-agent research team, assign tasks, synthesize findings | Medium   |
| 1.2      | Design   | Design team structures for 5 business scenarios                 | Free     |

### Module 2: Task Pipelines (Corporate)

_Practice after reading the "Task Coordination" section of Lesson 20_

| Exercise | Type     | Skill Practiced                                                   | API Cost |
| -------- | -------- | ----------------------------------------------------------------- | -------- |
| 2.1      | Hands-on | Build 4-stage event planning pipeline with blockedBy dependencies | Medium   |
| 2.2      | Design   | Map dependency graphs for 3 real business workflows               | Free     |

### Module 3: Communication (Entrepreneurship)

_Practice after reading the "Communication" section of Lesson 20_

| Exercise | Type     | Skill Practiced                                            | API Cost |
| -------- | -------- | ---------------------------------------------------------- | -------- |
| 3.1      | Hands-on | Run 4-agent feature prioritization debate with data        | Medium   |
| 3.2      | Design   | Design communication protocols for 5 multi-agent scenarios | Free     |

### Module 4: Quality Gates (Freelancer/Consultant)

_Practice after reading the "Quality Gates" section of Lesson 20_

| Exercise | Type     | Skill Practiced                                                 | API Cost |
| -------- | -------- | --------------------------------------------------------------- | -------- |
| 4.1      | Hands-on | Build draft-review-approve proposal pipeline with delegate mode | Medium   |
| 4.2      | Design   | Design review workflows for 3 deliverable types                 | Free     |

### Module 5: Capstones

_Attempt after completing Modules 1-4_

| Capstone | Domain           | Challenge                                            | API Cost    |
| -------- | ---------------- | ---------------------------------------------------- | ----------- |
| A        | Entrepreneurship | Assemble a full business plan with 5 agents          | High        |
| B        | Corporate        | Triage 200 customer reviews into action plan         | Medium-High |
| C        | Your Domain      | Apply agent teams to your own professional challenge | Varies      |

## Budget-Friendly Path

If API credits are limited, complete the design exercises first (1.2, 2.2, 3.2, 4.2) -- these require no API calls and build the strategic thinking skills you'll need for hands-on exercises.

**Free path**: Exercises 1.2 → 2.2 → 3.2 → 4.2 (learn team design thinking)
**Minimum paid path**: Add Exercise 1.1 (one team session to apply learnings)
**Recommended path**: All design exercises + Exercises 1.1 and 2.1 + one capstone

## Key Concepts Practiced

| Module | Concept                         | Tools Used                        |
| ------ | ------------------------------- | --------------------------------- |
| 1      | Team creation and structure     | TeamCreate, Task tool             |
| 2      | Task dependencies and pipelines | TaskCreate, TaskUpdate, blockedBy |
| 3      | Inter-agent communication       | SendMessage, broadcast            |
| 4      | Quality gates and approval      | Delegate mode, plan approval      |
| 5      | Full integration                | All of the above                  |

## Starter Files

Every exercise includes realistic business data files:

| Exercise                 | Starter Files                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 1.1 Market Research      | analysis-brief.md, market-data.csv (50 rows), 3 competitor profiles                                          |
| 1.2 Team Architecture    | 5 business scenarios, design template                                                                        |
| 2.1 Event Planning       | event-requirements.md, budget.csv, venue-options.csv (12 venues), guest-list.csv (80 guests)                 |
| 2.2 Pipeline Blueprint   | 3 business workflows, dependency worksheet                                                                   |
| 3.1 Feature Debate       | feature-proposals.md (3 features), user-survey.csv (100 responses), revenue-impact.csv, effort-estimates.csv |
| 3.2 Communication Design | 5 communication scenarios, protocol template                                                                 |
| 4.1 Proposal Pipeline    | client-rfp.md, company-capabilities.md, 2 reference proposals                                                |
| 4.2 Review Workflow      | 3 deliverable types, approval checklist template                                                             |
| Cap A Business Plan      | business-idea.md, market-research.csv (55 rows), cost-estimates.csv                                          |
| Cap B Feedback Triage    | customer-reviews.csv (200 reviews), product-catalog.md, team-brief.md                                        |
| Cap C Your Challenge     | self-assessment.md, planning-worksheet.md                                                                    |

## Common Mistakes to Watch For

- Creating teams for tasks a single agent can handle (teams are expensive)
- Not setting task dependencies (agents work out of order)
- Broadcasting when a DM would suffice (wastes tokens for all agents)
- Vague task descriptions (agents produce generic output)
- Skipping design exercises (you miss the strategic thinking)
- Not reading starter files before creating the team (agents lack context)

## Connection to Lesson 20

| Lesson Section     | Exercise          |
| ------------------ | ----------------- |
| Enable Agent Teams | 1.1               |
| Your First Team    | 1.1, 1.2          |
| Task Coordination  | 2.1, 2.2          |
| Communication      | 3.1, 3.2          |
| Quality Gates      | 4.1, 4.2          |
| Full Integration   | Capstones A, B, C |
