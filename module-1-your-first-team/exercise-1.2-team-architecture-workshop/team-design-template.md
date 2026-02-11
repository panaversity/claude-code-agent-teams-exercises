# Team Design Template

Copy this template for each scenario.

---

## Scenario: [Number and Name]

### Team Name

`[your-team-name]`

### Why a Team?

[1-2 sentences: Why can't a single agent handle this? What's the benefit of parallelization?]

### Team Members

| Agent Name | Role | Specific Responsibility | Key Input Files |
| ---------- | ---- | ----------------------- | --------------- |
|            |      |                         |                 |
|            |      |                         |                 |
|            |      |                         |                 |

### Task Pipeline

```
Task 1: [description] → assigned to [agent]
Task 2: [description] → assigned to [agent], blockedBy: [task 1]
Task 3: [description] → assigned to [agent], blockedBy: [task 1]
Task 4: [description] → assigned to [agent], blockedBy: [task 2, task 3]
```

### Dependency Diagram

```
[Task 1] ──→ [Task 2] ──→ [Task 4 (Final)]
         └──→ [Task 3] ──┘
```

### Communication Plan

| From | To  | When | Method         | Purpose |
| ---- | --- | ---- | -------------- | ------- |
|      |     |      | DM / Broadcast |         |

### Expected Final Output

[What does the team produce when all tasks complete?]

### Design Rationale

[Why this team size? Why these dependencies? What tradeoffs did you make?]
