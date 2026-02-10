# Exercise 1.1 -- Create and Navigate a Team

**Core Skill: Team Creation & Navigation** -- Create your first agent team and learn to observe team dynamics in real time.

## Goal

Create a 2-agent team to investigate the starter project from two angles simultaneously. Learn to navigate between teammates, observe the shared task list, and understand how independent context windows produce deeper analysis.

## What You Have

- `project/` -- A small Node.js project with 6 source files (auth, database, API, validator, logger, cache)
- The project has deliberate issues in multiple categories: security gaps, missing error handling, no tests, and potential memory leaks

## Prerequisites

- Claude Code with Agent Teams enabled:
  ```json
  { "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
  ```
- A working Claude Code session (CLI or VS Code)

## Your Tasks

### Step 1: Enable Agent Teams

Add the experimental flag to your Claude Code settings if you haven't already. Verify by starting a new session.

### Step 2: Create a 2-Agent Team

Open Claude Code in the `project/` directory and type this prompt:

```
Create an agent team to investigate this project from two angles:
- One teammate examines testing patterns (what's tested, what's missing, test quality)
- One teammate examines error handling (try/catch patterns, error messages, edge cases)
Have them share findings with each other before giving me the summary.
```

### Step 3: Navigate Between Teammates

While the team works:

1. Press **Ctrl+T** to view the shared task list -- note which tasks are assigned to which teammate
2. Use **Shift+Up** and **Shift+Down** to switch between the lead and each teammate
3. Watch each teammate's context -- notice how the testing teammate only thinks about tests, while the error-handling teammate only thinks about error paths

### Step 4: Observe Inter-Agent Communication

Watch for the moment teammates message each other. The testing teammate might notice "auth.js has no tests" while the error-handling teammate notices "auth.js silently returns null on verification failure." When they share these findings, the combined insight is stronger than either alone.

### Step 5: Inspect the Internals

While the team works, open a **separate terminal** (not your Claude session) and inspect:

```bash
# See who's on the team:
cat ~/.claude/teams/*/config.json | python3 -m json.tool | head -30

# See the task list:
ls ~/.claude/tasks/*/
cat ~/.claude/tasks/*/1.json | python3 -m json.tool
```

### Step 6: Compare with Single Agent

After the team finishes, start a fresh Claude session and try:

```
Review this project for testing gaps and error handling issues.
Produce a combined report.
```

Compare the depth of findings. The team review should catch more issues because each agent had dedicated context.

## Important Constraint

This exercise uses a **2-agent team** to keep costs manageable. Each teammate maintains its own context window, so a 2-agent team costs roughly 2x a single review. Don't create larger teams until you've practiced the navigation and observation skills here.

## Reflection

- How did the two teammates' findings complement each other? Did they discover issues that a single agent missed?
- What did the shared task list tell you about progress that you couldn't see from conversation alone?
- When teammates messaged each other, did the cross-pollination produce new insights?
- Looking at the team config JSON, what information is stored about each teammate?
