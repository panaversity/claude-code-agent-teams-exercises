# Capstone A -- The Parallel Code Review

**Integration Challenge** -- Combine team creation, task coordination, inter-agent communication, and quality hooks into a complete 3-agent code review.

## Goal

Run a full 3-agent parallel code review on a real project. Each reviewer focuses on one dimension (security, performance, testing). They share findings, debate conflicts, and produce a unified report. This is the flagship use case for Agent Teams.

## What You Have

- `project/` -- A Node.js API project with deliberate issues across all three review dimensions:
  - **Security**: Hardcoded secrets, missing input validation, SQL injection risk, auth gaps
  - **Performance**: Unnecessary database calls, missing caching, sync operations that should be async
  - **Testing**: Missing edge case tests, no error path testing, fragile assertions

## Prerequisites

- Completed Modules 1-3
- Claude Code with Agent Teams enabled
- Budget for a 3-agent team (approximately 3-5x a single review)

## Your Tasks

### Step 1: Plan the Review

Before creating the team, decide:

1. What specific files should each reviewer focus on?
2. What should reviewers share with each other?
3. How should the lead synthesize conflicting recommendations?

### Step 2: Create the Team

Design your own prompt. It should include:

- Three distinct reviewer roles with clear domains
- Instructions for reviewers to share their top 3 findings with each other
- A request for the lead to produce a unified, severity-ranked report
- File ownership boundaries to prevent overlap

**No starter prompt provided** -- designing the team prompt is part of the challenge.

### Step 3: Add Quality Hooks (Optional)

If you completed Module 3, add:
- A `TaskCompleted` hook that runs the test suite
- A `TeammateIdle` hook that checks for remaining review areas

### Step 4: Run and Observe

While the team works:
- Press **Ctrl+T** to watch task progress
- Use **Shift+Up/Down** to observe each reviewer's focus
- Watch for inter-agent messages where reviewers discuss overlapping findings

### Step 5: Evaluate the Results

After the team finishes:

1. Read the unified report
2. Count total findings per category
3. Check for findings that only emerged from inter-agent discussion
4. Compare with a single-agent review (optional): run the same review with one agent

### Step 6: Document Your Process

Write a brief post-mortem:
- How many findings per reviewer?
- Which findings came from cross-reviewer discussion?
- What would you change about the team structure next time?
- Was the 3x cost justified by the quality improvement?

## The Project Has These Deliberate Issues

(Don't read this list until AFTER the review -- use it to score your team's thoroughness)

<details>
<summary>Click to reveal the issue list (spoilers)</summary>

**Security (8 issues)**:
1. Hardcoded JWT secret in auth/jwt.js
2. No rate limiting on login endpoint
3. SQL injection in user search query
4. Missing CSRF protection
5. Passwords stored as plaintext in test fixtures
6. Auth middleware skipped for admin routes
7. No input length validation on text fields
8. Error messages expose internal paths

**Performance (6 issues)**:
1. N+1 query in user list with posts
2. No database connection pooling
3. Synchronous file read in request handler
4. Missing cache for frequently-accessed config
5. Unbounded query result set (no pagination)
6. JSON serialization of unnecessary fields

**Testing (5 issues)**:
1. No tests for error/rejection paths
2. Test fixtures share mutable state
3. No tests for auth middleware
4. Missing boundary value tests for pagination
5. Tests depend on execution order

</details>

## Reflection

- How did the team's finding count compare to a single-agent review?
- Which reviewer category found the most critical issues?
- Did inter-agent discussion reveal issues that no single reviewer would have found?
- At what project size does a 3-agent review become worth the cost?
