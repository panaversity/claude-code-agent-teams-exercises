# Claude Code Agent Teams: Practical Exercises

**By Panaversity -- Master Multi-Agent Orchestration**

Welcome! This package contains 6 exercises + 2 capstone projects (8 total) for learning Claude Code's Agent Teams feature. You'll create teams, coordinate task dependencies, navigate between teammates, write quality hooks, and run a full 3-agent parallel code review.

---

## Package Structure

```
agent-teams-exercises/
+-- README.md                                       <- You are here
+-- EXERCISE-GUIDE.md                               <- Full pedagogical guide
+-- module-1-team-fundamentals/
|   +-- exercise-1.1-create-navigate-team/          (create a 2-agent team, navigate, inspect internals)
|   +-- exercise-1.2-diagnose-broken-team/          (debug a broken team from config/task files)
+-- module-2-task-coordination/
|   +-- exercise-2.1-dependency-pipeline/           (build a task chain with blockedBy dependencies)
|   +-- exercise-2.2-fix-micromanaging-lead/        (diagnose and fix delegate mode failures)
+-- module-3-quality-hooks/
|   +-- exercise-3.1-team-quality-hooks/            (write TeammateIdle and TaskCompleted hooks)
|   +-- exercise-3.2-debug-hook-failures/           (fix 3 broken team hooks)
+-- module-4-capstones/
    +-- capstone-A-parallel-code-review/            (full 3-agent security/performance/testing review)
    +-- capstone-B-your-domain/                     (apply agent teams to your professional domain)
```

---

## How to Get Started

### Prerequisites

1. Claude Code with Agent Teams enabled:
   ```json
   { "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
   ```
2. A working Claude Code session (CLI or VS Code)

### With Claude Code (Terminal)

1. Navigate to the exercise folder: `cd module-1-team-fundamentals/exercise-1.1-create-navigate-team`
2. Launch Claude Code
3. Read the INSTRUCTIONS.md and start working

### With Cowork (Desktop)

1. Open Claude Desktop, switch to Cowork tab
2. Point Cowork at the exercise folder
3. Read INSTRUCTIONS.md and follow the steps

---

## Recommended Order

| Session   | Module                           | Exercises    | Budget   |
| --------- | -------------------------------- | ------------ | -------- |
| Session 1 | Module 1: Team Fundamentals      | 1.1, 1.2     | Low      |
| Session 2 | Module 2: Task Coordination      | 2.1, 2.2     | Low-Med  |
| Session 3 | Module 3: Quality Hooks          | 3.1, 3.2     | Low-Med  |
| Session 4 | Module 4: Capstones (choose one) | A or B       | Medium   |

**Budget note**: Exercises 1.2, 2.2, and 3.2 are debug/analysis exercises that require minimal or no API credits. They can be completed by reading files and reasoning about the problems.

---

## Self-Assessment Rubric

| Criteria                 | Beginner (1)                  | Developing (2)                    | Proficient (3)                          | Advanced (4)                                 |
| ------------------------ | :---------------------------: | :-------------------------------: | :-------------------------------------: | :------------------------------------------: |
| **Team Creation**        | Cannot create a team          | Creates team but roles unclear    | Clear roles with file ownership         | Optimized team size and model selection      |
| **Navigation**           | Cannot switch between agents  | Switches but loses track          | Fluent navigation, reads task list      | Uses internals to diagnose stuck teams       |
| **Task Dependencies**    | Creates flat task lists       | Basic sequential dependencies     | Parallel-safe dependency chains         | Maximizes parallelism, avoids deadlocks      |
| **Delegation Control**   | Lead implements everything    | Some delegation, some override    | Delegate mode + plan approval enforced  | Combines hooks with delegation for full control |
| **Team Hooks**           | Cannot write team hooks       | Hooks defined but don't fire      | Working TeammateIdle + TaskCompleted    | Self-correcting hook pipelines               |
| **Integration Thinking** | Uses teams for single tasks   | Teams for parallel work           | Teams + hooks + dependencies combined   | Full team workflow templates for reuse       |

---

_Built for Panaversity's AI-Native Development Curriculum_
