# Claude Code Agent Teams: Business Problem-Solving Exercises

**By Panaversity -- Master Multi-Agent Orchestration Through Real Business Challenges**

Welcome! This package contains 8 exercises + 3 capstone projects (11 total) for learning Claude Code's Agent Teams feature through real-world business problem solving. You'll create research teams, build task pipelines for event planning, run feature prioritization debates, and manage quality review cycles -- all using multi-agent coordination.

---

## Package Structure

```
agent-teams-exercises/
├── README.md                                          ← You are here
├── EXERCISE-GUIDE.md                                  ← Full guide with budget paths
├── scoring-rubric.md                                  ← Universal 4-criteria rubric
├── module-1-your-first-team/
│   ├── exercise-1.1-market-research-sprint/           (3-agent team analyzes a market opportunity)
│   └── exercise-1.2-team-architecture-workshop/       (design team structures for 5 scenarios)
├── module-2-task-pipelines/
│   ├── exercise-2.1-event-planning-pipeline/          (budget→venue→logistics dependency chain)
│   └── exercise-2.2-pipeline-blueprint/               (design dependency graphs for 3 workflows)
├── module-3-communication/
│   ├── exercise-3.1-feature-prioritization-debate/    (3 advocates + 1 decision-maker)
│   └── exercise-3.2-communication-protocol-design/    (plan message flows for 5 scenarios)
├── module-4-quality-gates/
│   ├── exercise-4.1-client-proposal-pipeline/         (draft→review→approve cycle)
│   └── exercise-4.2-review-workflow-design/           (plan approval pipelines for 3 deliverables)
└── module-5-capstones/
    ├── capstone-A-business-plan-assembly/             (full business plan with 5 agents)
    ├── capstone-B-customer-feedback-triage/           (triage 200 reviews with agent team)
    └── capstone-C-your-business-challenge/            (apply to your own domain)
```

---

## How to Get Started

### Prerequisites

1. Claude Code with Agent Teams enabled:
   ```bash
   export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
   ```
2. A working Claude Code session (CLI or VS Code)

### Quick Start

1. Navigate to the exercise folder: `cd module-1-your-first-team/exercise-1.1-market-research-sprint`
2. Launch Claude Code
3. Read the INSTRUCTIONS.md and start working

---

## Exercise Types

Every module contains two exercises:

| Type                      | What You Do                                            | API Cost |
| ------------------------- | ------------------------------------------------------ | -------- |
| **Exercise A (Hands-on)** | Run real agent teams with provided business data       | $$       |
| **Exercise B (Design)**   | Design team architectures on paper -- no agents needed | Free     |

Design exercises (B-type) teach team THINKING without API costs. You can learn the concepts for free, then selectively run hands-on exercises.

---

## Recommended Paths

### Full Path (All Exercises)

| Session | Module                    | Exercises  | Domain           | Budget   |
| ------- | ------------------------- | ---------- | ---------------- | -------- |
| 1       | Module 1: Your First Team | 1.1, 1.2   | Knowledge Work   | Low-Med  |
| 2       | Module 2: Task Pipelines  | 2.1, 2.2   | Corporate        | Low-Med  |
| 3       | Module 3: Communication   | 3.1, 3.2   | Entrepreneurship | Low-Med  |
| 4       | Module 4: Quality Gates   | 4.1, 4.2   | Freelancer       | Low-Med  |
| 5       | Module 5: Capstones       | A, B, or C | Mixed            | Med-High |

### Budget-Friendly Path (Design First)

Complete all design exercises for free, then run select hands-on exercises:

1. Exercise 1.2 (design) → 2.2 (design) → 3.2 (design) → 4.2 (design)
2. Then pick 1-2 hands-on exercises to run with agents

### Speed Path (Essentials Only)

1. Exercise 1.1 (learn teams) → 2.1 (learn pipelines) → 3.1 (learn communication) → Capstone A or B

---

## Scoring Rubric

All exercises use the same 4-criteria rubric (see `scoring-rubric.md`):

| Criteria                    | What It Measures                                             |
| --------------------------- | ------------------------------------------------------------ |
| **Comprehensiveness** (1-5) | Did the analysis cover all required angles?                  |
| **Actionability** (1-5)     | Could someone act on these recommendations?                  |
| **Evidence Quality** (1-5)  | Are conclusions backed by data from starter files?           |
| **Team Coordination** (1-5) | Did agents effectively share and build on each other's work? |

**Module exercises target**: 14/20
**Capstones target**: 16/20

---

## Tool Note

- **Claude Code (Terminal)**: Required for hands-on exercises (A-type). Agent Teams is a terminal feature.
- **Cowork (Desktop)**: Works for design exercises (B-type) but does not support multi-agent team orchestration.
- **Design exercises**: Can be completed with any text editor -- no Claude Code needed.

---

_Built for Panaversity's AI-Native Development Curriculum_
