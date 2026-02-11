# Exercise 1.2 -- Team Architecture Workshop

**Agent Teams Layer: Design Thinking** -- Design team structures for 5 business scenarios (no agents needed)

## Goal

Design optimal agent team structures for 5 different business scenarios. For each scenario, define the team members, their roles, task dependencies, and communication patterns. This is a design exercise -- no API costs required.

## Prerequisites

Lesson 20: Agent Teams -- you should understand TeamCreate, task dependencies, and SendMessage concepts.

## What You Have

- `scenarios.md` -- 5 business scenarios requiring team-based solutions
- `team-design-template.md` -- A template to fill out for each scenario

## Your Tasks

### Step 1: Read All Five Scenarios

Read `scenarios.md` completely. Each scenario describes a different business problem that could benefit from a multi-agent team approach.

### Step 2: Design a Team for Each Scenario

Using `team-design-template.md` as your structure, design a team for each of the five scenarios. For each team, specify:

- Team name
- Number of agents (2-5)
- Each agent's name, role, and specific responsibilities
- Task list with dependencies (which tasks block which)
- Communication plan (which agents need to talk to each other and when)
- Expected output from the team

### Step 3: Compare Your Designs

After designing all five, answer:

- Which scenario needed the most agents? Why?
- Which scenario had the most complex dependency chain? Could you simplify it?
- Were there any scenarios where a single agent would have been sufficient?

### Step 4: Peer Review One Design

Pick your weakest design. Now improve it by:

- Removing any agent that doesn't have a clear, unique responsibility
- Adding any missing dependency that could cause incorrect ordering
- Checking that no agent is a bottleneck (receiving output from all others)

## Scoring

| Criteria                    | What to Evaluate                                                         |
| --------------------------- | ------------------------------------------------------------------------ |
| **Comprehensiveness** (1-5) | Did each design address all aspects of the scenario?                     |
| **Actionability** (1-5)     | Could someone implement this team design directly in Claude Code?        |
| **Evidence Quality** (1-5)  | Are role assignments and dependencies justified by the scenario details? |
| **Team Coordination** (1-5) | Do the communication plans avoid bottlenecks and unnecessary broadcasts? |

**Target**: 14/20 or higher.

## Expected Results

Strong designs should demonstrate:

- Right-sized teams (not every scenario needs 5 agents)
- Clear task dependencies that prevent out-of-order work
- Communication that uses DMs over broadcasts where possible
- Each agent has a distinct, non-overlapping responsibility

## Reflection

1. What was the hardest part of designing teams -- choosing the number of agents, defining their roles, or mapping dependencies?
2. Did any scenario tempt you to create too many agents? What's the cost of over-staffing a team?
3. How would you validate whether your team design actually works without running it? What questions would you ask?
4. If you had to explain "when to use a team vs a single agent" to a colleague, what would your rule of thumb be?
5. Which of your five designs are you most confident about? Least confident? Why?

## Tool Note

This is a design exercise -- no Claude Code or API costs needed. You can complete it with pen and paper, a text editor, or a whiteboard. If you want to validate your designs, you can implement one in Claude Code afterward.
