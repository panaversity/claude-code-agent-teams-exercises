# Dependency Worksheet

Copy this template for each workflow.

---

## Workflow: [Name]

### Task Inventory

List every task. Give each a short ID.

| ID  | Task | Estimated Duration | Dependencies (blockedBy) |
| --- | ---- | ------------------ | ------------------------ |
| T1  |      |                    | None (starting task)     |
| T2  |      |                    | T1                       |
| T3  |      |                    | T1                       |
| T4  |      |                    | T2, T3                   |

### Dependency Graph

Draw the graph using ASCII art:

```
[T1] ──→ [T2] ──→ [T4]
     └──→ [T3] ──┘
```

### Parallel Opportunities

| Tasks That Can Run in Parallel | Why They're Independent                    |
| ------------------------------ | ------------------------------------------ |
| T2 and T3                      | T2 doesn't need T3's output and vice versa |

### Critical Path

The longest chain of sequential tasks:

```
T1 → T2 → T4 → T7 → T9
Total duration: __ hours/days
```

### Bottleneck Analysis

| Bottleneck Task | Why It's a Bottleneck     | How to Mitigate                    |
| --------------- | ------------------------- | ---------------------------------- |
|                 | Blocks X downstream tasks | Split into sub-tasks / parallelize |

### Optimization Proposals

1. **Current total time** (sequential): \_\_
2. **Optimized time** (with parallelism): \_\_
3. **Time saved**: \_\_
4. **How**: [Describe what you'd parallelize]

### Agent Team Design (Optional)

If implementing as an agent team:

```
Team: [name]
Agents: [list]
Tasks:
  T1 → agent-1 (no dependencies)
  T2 → agent-2 (blockedBy: T1)
  T3 → agent-3 (blockedBy: T1)
  T4 → agent-1 (blockedBy: T2, T3)
```
