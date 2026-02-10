# Agent Teams Exercise Guide

## Overview

This exercise pack accompanies **Lesson 20: Agent Teams** from Chapter 3 (General Agents). It provides hands-on practice with every major concept from the lesson: team creation, task coordination, delegate mode, plan approval, quality hooks, and multi-agent code review.

## Exercise Map

### Module 1: Team Fundamentals
*Practice after reading the "Enable Agent Teams" and "Lab 1" sections of Lesson 20*

| Exercise | Type     | Skill Practiced                              | API Cost |
| -------- | -------- | -------------------------------------------- | -------- |
| 1.1      | Hands-on | Create team, navigate teammates, inspect internals | Medium   |
| 1.2      | Debug    | Read team config/task JSON to find 3 bugs    | Free     |

### Module 2: Task Coordination
*Practice after reading the "Controlling Your Team" section of Lesson 20*

| Exercise | Type     | Skill Practiced                              | API Cost |
| -------- | -------- | -------------------------------------------- | -------- |
| 2.1      | Hands-on | Design blockedBy dependency chains, observe unblocking | Medium   |
| 2.2      | Debug    | Analyze failed delegation, rewrite prompt    | Free     |

### Module 3: Quality Hooks
*Practice after reading the "Quality Hooks for Teams" section of Lesson 20*

| Exercise | Type     | Skill Practiced                              | API Cost |
| -------- | -------- | -------------------------------------------- | -------- |
| 3.1      | Hands-on | Write TeammateIdle and TaskCompleted hooks    | Medium   |
| 3.2      | Debug    | Fix 3 broken hook configurations             | Free     |

### Module 4: Capstones
*Attempt after completing Modules 1-3*

| Capstone | Challenge                              | API Cost |
| -------- | -------------------------------------- | -------- |
| A        | Full 3-agent parallel code review      | High     |
| B        | Apply agent teams to your professional domain | Varies   |

## Budget-Friendly Path

If API credits are limited, complete the debug exercises first (1.2, 2.2, 3.2) -- these require no API calls and build the diagnostic skills you'll need for the hands-on exercises.

**Minimum path**: Exercises 1.2 → 2.2 → 3.2 → 1.1 (one team session to apply learnings)

## Key Concepts Practiced

1. **Team Creation**: `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, teammate spawning, display modes
2. **Navigation**: Shift+Up/Down (teammate switching), Ctrl+T (task list), Shift+Tab (delegate mode)
3. **Task Dependencies**: `blockedBy` relationships, automatic unblocking, deadlock prevention
4. **Delegation**: Delegate mode, plan approval, file ownership boundaries
5. **Quality Hooks**: TeammateIdle (keep working), TaskCompleted (quality gate)
6. **Inter-Agent Communication**: Direct messages, broadcast, shared findings documents
7. **Team Debugging**: Reading `.claude/teams/` and `.claude/tasks/` JSON files

## Common Mistakes to Watch For

- Creating teams for tasks a single agent can handle (teams are expensive)
- Not setting file ownership boundaries (causes merge conflicts)
- Circular task dependencies (causes deadlock -- see Exercise 1.2)
- Forgetting `chmod +x` on hook scripts (hooks fail silently)
- Using `exit 0` instead of `exit 2` in rejection hooks (accepts when it should reject)
- Not enabling the experimental flag before creating teams

## Connection to Lesson 20

| Lesson Section                 | Exercise |
| ------------------------------ | -------- |
| Enable Agent Teams             | 1.1      |
| Lab 1: Your First Team         | 1.1      |
| Peek Under the Hood            | 1.2      |
| Controlling Your Team          | 2.1, 2.2 |
| Quality Hooks for Teams        | 3.1, 3.2 |
| Lab 2: Parallel Code Review    | Capstone A |
| Real-World Patterns            | Capstone B |
| When Teams Go Wrong            | 1.2, 2.2 |
