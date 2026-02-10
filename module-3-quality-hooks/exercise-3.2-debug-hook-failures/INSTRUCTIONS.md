# Exercise 3.2 -- Debug Silent Hook Failures

**Core Skill: Hook Debugging** -- Find and fix three broken team hooks that fail silently.

## Goal

A team's quality hooks aren't firing. The settings look correct at first glance, but three subtle bugs prevent the hooks from working. Find and fix each bug.

## What You Have

- `.claude/settings.json` -- Hook configuration with 3 bugs
- `.claude/hooks/` -- Two hook scripts with issues

## Prerequisites

- Understanding of hook events and exit codes from Lesson 15
- Understanding of team-specific hooks from Lesson 20

> **Budget-friendly**: Diagnose the bugs by reading files. Optionally test fixes with a team.

## Your Tasks

### Step 1: Read the Settings File

Open `.claude/settings.json`. The configuration defines two hooks:
- `TeammateIdle` -- should assign remaining work
- `TaskCompleted` -- should run tests before accepting

Both hooks are supposed to fire during team sessions. Neither one works.

### Step 2: Read the Hook Scripts

Open each script in `.claude/hooks/`. For each script:
- Trace the logic step by step
- Check: does it read stdin correctly?
- Check: does it exit with the right codes?
- Check: are the file paths correct?

### Step 3: Find the Three Bugs

**Bug 1 (Settings)**: The hook event name is wrong. Claude Code expects exact event names -- a typo means the hook never fires.

**Bug 2 (Script)**: One script has a logic error that causes it to always exit 0 (accept) even when it should exit 2 (reject).

**Bug 3 (Permissions)**: One script can't execute because of a missing step that's easy to forget on Unix systems.

For each bug:
- **Location**: Which file, which line?
- **Symptom**: What would you observe (or NOT observe)?
- **Fix**: The exact change needed

### Step 4: Fix and Verify

Apply your fixes. Then verify manually:

```bash
# Test the idle hook:
echo '{"teammate_name": "test-agent"}' | bash .claude/hooks/check-remaining-work.sh
echo "Exit code: $?"

# Test the completion hook:
echo '{"task_description": "test task"}' | bash .claude/hooks/verify-tests.sh
echo "Exit code: $?"
```

The idle hook should exit 2 (if TODO items exist) or 0 (if clean). The completion hook should exit 0 (if tests pass) or 2 (if tests fail).

## Reflection

- Which bug would be hardest to diagnose during a live team session? Why?
- Silent failures (hook doesn't fire) vs. loud failures (hook crashes) -- which is worse for debugging?
- What logging would you add to hooks to make failures visible?
- How would you create a "hook health check" that verifies all hooks are correctly configured?
