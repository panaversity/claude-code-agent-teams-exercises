# Communication Protocol Template

Copy this template for each scenario.

---

## Scenario: [Number and Name]

### Agents

| Agent | Role | Needs Info From | Sends Info To |
| ----- | ---- | --------------- | ------------- |
|       |      |                 |               |

### Message Flow

| #   | From | To  | Type           | Content Summary | Trigger      |
| --- | ---- | --- | -------------- | --------------- | ------------ |
| 1   |      |     | DM / Broadcast |                 | When [event] |
| 2   |      |     | DM / Broadcast |                 | When [event] |

### Message Type Justification

| Message # | Type Chosen | Why Not the Other?                             |
| --------- | ----------- | ---------------------------------------------- |
| 1         | DM          | Only [agent] needs this information because... |
| 2         | Broadcast   | All agents need this because...                |

### Cost Analysis

- **Total messages (your protocol)**: \_\_
- **Total messages (broadcast everything)**: \_\_
- **Messages saved**: \_\_
- **Savings percentage**: \_\_%

### Edge Cases

| Edge Case               | How Your Protocol Handles It |
| ----------------------- | ---------------------------- |
| [Agent finishes early]  |                              |
| [Urgent discovery]      |                              |
| [Rejection/redo needed] |                              |

### Anti-Patterns to Avoid

1. [Don't do X because...]
2. [Don't do Y because...]
