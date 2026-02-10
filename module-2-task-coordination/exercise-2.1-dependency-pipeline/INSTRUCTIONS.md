# Exercise 2.1 -- Build a Dependency Pipeline

**Core Skill: Task Dependencies** -- Design a multi-step pipeline where tasks unblock automatically as dependencies complete.

## Goal

Create an agent team that refactors a project in the correct order using task dependencies. The schema must be updated before the backend, the backend before the frontend, and tests only after both frontend and backend are done. Watch tasks unblock automatically as predecessors complete.

## What You Have

- `project/` -- A Node.js project that needs a coordinated refactoring:
  - `src/schema.js` -- Data model that currently uses string IDs (needs migration to UUIDs)
  - `src/backend.js` -- API routes that reference the old schema
  - `src/frontend.js` -- UI helpers that format data from the API
  - `src/tests.js` -- Test file that verifies the full flow

## Prerequisites

- Claude Code with Agent Teams enabled
- Completed Exercise 1.1 (understand team navigation)

## Your Tasks

### Step 1: Understand the Dependency Chain

Read all 4 files. The refactoring order MUST be:

1. **Schema** (no dependencies) -- Change ID type from string to UUID
2. **Backend** (blocked by Schema) -- Update routes to use new UUID format
3. **Frontend** (blocked by Backend) -- Update formatters for UUID display
4. **Tests** (blocked by Backend AND Frontend) -- Update assertions for new format

If you refactor out of order, things will break. This is why task dependencies matter.

### Step 2: Create the Team with Dependencies

Type this prompt (modify based on your understanding of the files):

```
Create a team to refactor this project from string IDs to UUIDs.
Set up these tasks with dependencies:

1. Update schema.js to use UUID (no dependencies)
2. Update backend.js routes for UUID format (blocked by task 1)
3. Update frontend.js formatters for UUID display (blocked by task 2)
4. Update tests.js for UUID assertions (blocked by tasks 2 AND 3)

Assign each task to a different teammate. They should self-coordinate
based on the dependency chain -- do NOT start a task until its
dependencies are complete.
```

### Step 3: Watch the Unblocking

Press **Ctrl+T** repeatedly to watch the task list:

1. First, only task 1 is workable (everything else is blocked)
2. When task 1 completes, task 2 unblocks
3. When task 2 completes, task 3 unblocks
4. When both tasks 2 and 3 complete, task 4 unblocks

Note the times: how long does each phase take? Is the pipeline efficient?

### Step 4: Verify the Result

After all tasks complete:

```bash
# Check that all files are consistently using UUIDs
grep -n "uuid" project/src/*.js
```

## Important Constraint

Do NOT tell teammates to "wait" or "check if the previous task is done." The `blockedBy` mechanism handles this automatically. If you find yourself manually coordinating, your dependencies are wrong.

## Reflection

- Did tasks unblock in the order you expected?
- Was there any point where multiple tasks could run in parallel? (Hint: tasks 2 and 3 don't depend on each other -- could they run simultaneously?)
- How would you redesign the dependency chain to maximize parallelism?
- What happens if you accidentally create a circular dependency (task A blocks B, B blocks A)?
