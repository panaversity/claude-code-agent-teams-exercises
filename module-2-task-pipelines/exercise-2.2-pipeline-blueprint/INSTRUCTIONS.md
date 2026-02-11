# Exercise 2.2 -- Pipeline Blueprint

**Agent Teams Layer: Design Thinking** -- Design dependency graphs for 3 business workflows (no agents needed)

## Goal

Map out task dependency graphs for 3 real business workflows, identifying which tasks can run in parallel and which must be sequential. This is a design exercise -- no API costs required.

## Prerequisites

Exercise 2.1 -- you should understand how `blockedBy` creates sequential dependencies.

## What You Have

- `workflows.md` -- 3 business workflows to model as task dependency graphs
- `dependency-worksheet.md` -- A worksheet template for mapping dependencies

## Your Tasks

### Step 1: Read All Three Workflows

Read `workflows.md` completely. Each workflow describes a real business process with multiple steps that have natural ordering constraints.

### Step 2: Map Dependencies for Each Workflow

For each workflow, use `dependency-worksheet.md` to:

1. List every task that needs to happen
2. For each task, identify what it depends on (what must finish first)
3. Identify which tasks can run in parallel (no dependencies on each other)
4. Draw the dependency graph
5. Calculate the critical path (longest chain of sequential dependencies)

### Step 3: Optimize for Speed

For each workflow, identify:

- Tasks currently sequential that COULD run in parallel
- Bottleneck tasks that block the most downstream work
- Whether splitting one large task into sub-tasks would improve parallelism

### Step 4: Convert to Agent Team Design

Pick one workflow and write the exact Claude Code prompts you'd use to:

- Create the team
- Create all tasks with correct `blockedBy` relationships
- Assign tasks to agents

## Scoring

| Criteria                    | What to Evaluate                                               |
| --------------------------- | -------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Did you identify ALL tasks and dependencies for each workflow? |
| **Actionability** (1-5)     | Could someone implement your dependency graph directly?        |
| **Evidence Quality** (1-5)  | Are dependency choices justified by workflow logic?            |
| **Team Coordination** (1-5) | Does your optimization maximize parallel work?                 |

**Target**: 14/20 or higher.

## Expected Results

Strong blueprints should show:

- Clear distinction between sequential and parallel tasks
- Critical path identified for each workflow
- At least one optimization that reduces total time
- Exact Claude Code prompts for one workflow

## Reflection

1. Which workflow had the longest critical path? Could you shorten it by splitting tasks?
2. Did you find any tasks that SEEM sequential but could actually run in parallel?
3. What's the danger of making too many tasks parallel? (Hint: think about resource contention and context)
4. How does "critical path" thinking help you estimate how long an agent team will take?

## Tool Note

This is a design exercise -- no Claude Code or API costs needed. Complete it with a text editor, pen and paper, or diagramming tool.
