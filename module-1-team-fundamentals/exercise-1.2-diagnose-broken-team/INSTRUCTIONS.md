# Exercise 1.2 -- Diagnose a Broken Team

**Core Skill: Team Debugging** -- Read team internals to find coordination failures without running an expensive team session.

## Goal

Given a snapshot of a broken team's config and task files, diagnose three coordination failures by reading the JSON files. This exercise teaches you to debug teams by inspecting internals -- a critical skill when a real team gets stuck.

## What You Have

- `broken-team/config.json` -- A team configuration with issues
- `broken-tasks/` -- 5 task files representing a stuck team
- `session-log.md` -- Partial transcript showing symptoms

## Prerequisites

- Ability to read JSON files
- Understanding of team config structure (from Exercise 1.1 or Lesson 20)

> **Budget-friendly**: This exercise requires NO API calls. You diagnose by reading files, not running agents.

## Your Tasks

### Step 1: Read the Team Config

Open `broken-team/config.json`. Look for:

- Are all members properly defined (name, agentType, model)?
- Is there a team lead?
- Do any member definitions look wrong?

### Step 2: Map the Task Dependencies

Open each file in `broken-tasks/`. For each task, note:

- `id`, `subject`, `status`, `owner`
- `blocks` and `blockedBy` relationships

Draw the dependency graph on paper or in a text file. Where are the cycles? Where are the dead ends?

### Step 3: Find the Three Bugs

There are exactly 3 bugs causing this team to be stuck:

1. **Bug 1 (Config)**: A problem in the team configuration itself
2. **Bug 2 (Dependencies)**: A task dependency issue causing deadlock
3. **Bug 3 (Assignment)**: A task assignment problem

For each bug, document:
- **Symptom**: What would you observe if this team were running?
- **Root Cause**: What's wrong in the JSON?
- **Fix**: What change would resolve it?

### Step 4: Cross-Reference with the Session Log

Read `session-log.md`. Do the symptoms described match the bugs you found? Is there a bug you found in the files that hasn't manifested as a symptom yet?

## Important Constraint

Do NOT run a team to test your fixes. The goal is to build your ability to read team internals and reason about coordination -- the same skill you'll use when debugging a real stuck team at 2am.

## Reflection

- Which bug was hardest to spot? Why?
- How would you prevent each bug from occurring in a real team?
- If you only had the session log (no config files), could you have diagnosed the issues? What additional information would you need?
- What monitoring would you add to catch these problems automatically?
