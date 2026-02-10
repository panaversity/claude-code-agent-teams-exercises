# Exercise 3.1 -- Write Team Quality Hooks

**Core Skill: TeammateIdle & TaskCompleted Hooks** -- Automate quality gates for team workflows.

## Goal

Write two team-specific hooks: a `TeammateIdle` hook that assigns remaining work to idle teammates, and a `TaskCompleted` hook that runs tests before accepting task completion. These hooks enforce quality without manual oversight.

## What You Have

- `project/` -- A Node.js project with source files and tests
  - `src/` -- 3 source files with known issues (missing validation, console.log statements, TODO items)
  - `tests/` -- Test suite that currently passes
  - `.claude/hooks/` -- Empty directory where you'll create hook scripts

## Prerequisites

- Claude Code with Agent Teams enabled
- Understanding of hooks from Lesson 15
- Understanding of team hooks from Lesson 20

## Your Tasks

### Step 1: Understand the Hook Events

Two hook events are team-specific:

- **`TeammateIdle`**: Fires when a teammate finishes its current task and has nothing left to do. Your hook receives JSON on stdin with `teammate_name`.
- **`TaskCompleted`**: Fires when a teammate marks a task as done. Your hook receives JSON on stdin with `task_description`.

Exit codes:
- `0` = allow (teammate goes idle / task accepted as complete)
- `2` = reject with feedback (stdout message sent back, teammate keeps working / task rejected)

### Step 2: Write the TeammateIdle Hook

Create `.claude/hooks/check-remaining-work.sh`:

```bash
#!/usr/bin/env bash
# When a teammate goes idle, check if there's remaining work

INPUT=$(cat)
TEAMMATE=$(echo "$INPUT" | jq -r '.teammate_name // "unknown"')

# Count remaining TODO/FIXME items in source code
REMAINING=$(grep -r "TODO\|FIXME\|console\.log" src/ 2>/dev/null | wc -l | tr -d ' ')

if [ "$REMAINING" -gt 0 ]; then
  echo "Hey $TEAMMATE -- there are $REMAINING TODO/FIXME/console.log items remaining in src/. Pick one up and fix it."
  exit 2  # Send feedback, keep teammate working
fi

exit 0  # Allow idle -- no remaining work
```

Make it executable: `chmod +x .claude/hooks/check-remaining-work.sh`

### Step 3: Write the TaskCompleted Hook

Create `.claude/hooks/verify-task-quality.sh`:

```bash
#!/usr/bin/env bash
# When a task is marked complete, verify tests still pass

INPUT=$(cat)
TASK=$(echo "$INPUT" | jq -r '.task_description // "unknown task"')

# Run the test suite
cd project 2>/dev/null || true
npm test --silent 2>&1
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
  echo "Tests are failing after completing: $TASK. Fix the failing tests before marking this task complete."
  exit 2  # Reject completion
fi

exit 0  # Accept completion
```

Make it executable: `chmod +x .claude/hooks/verify-task-quality.sh`

### Step 4: Register the Hooks

Add to `.claude/settings.json`:

```json
{
  "hooks": {
    "TeammateIdle": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/check-remaining-work.sh"
          }
        ]
      }
    ],
    "TaskCompleted": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/verify-task-quality.sh"
          }
        ]
      }
    ]
  }
}
```

### Step 5: Test with a Team

Create a 2-agent team to clean up the project:

```
Create a team to clean up this project:
- One teammate fixes all TODO/FIXME items in src/
- One teammate removes all console.log statements from src/

After each fix, verify tests still pass.
```

Watch for:
- Does the TeammateIdle hook catch remaining work?
- Does the TaskCompleted hook reject a task if tests break?

## Important Constraint

Your hooks must be **idempotent** -- they should produce the same result if run multiple times. The TeammateIdle hook should only count REMAINING items (not items that have already been fixed). Test your hook scripts manually before running a team.

## Reflection

- Did either hook fire during your team session? What was the effect?
- What would happen if the TeammateIdle hook was too aggressive (always finding work)? Could it create an infinite loop?
- How would you add a "maximum re-assignment" counter to prevent the idle hook from running forever?
- Could you combine these hooks to create a fully autonomous quality pipeline?
