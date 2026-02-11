# Exercise 3.2 -- Communication Protocol Design

**Agent Teams Layer: Design Thinking** -- Plan message flows for 5 business scenarios (no agents needed)

## Goal

Design communication protocols for 5 multi-agent scenarios, deciding when to use direct messages vs broadcasts, and identifying wasteful communication patterns. This is a design exercise -- no API costs required.

## Prerequisites

Exercise 3.1 -- you should understand SendMessage, broadcast, and inter-agent communication.

## What You Have

- `scenarios.md` -- 5 communication scenarios with specific constraints
- `protocol-template.md` -- A template for designing communication protocols

## Your Tasks

### Step 1: Read All Five Scenarios

Read `scenarios.md` completely. Each scenario describes a multi-agent situation with communication challenges.

### Step 2: Design a Protocol for Each Scenario

Using `protocol-template.md`, design the communication flow for each scenario:

1. Identify every message that needs to be sent
2. Classify each as DM (direct message) or broadcast
3. Justify your choice for each message
4. Calculate the total message count and identify any that could be eliminated

### Step 3: Optimize for Cost

For each protocol, answer:

- How many total messages are sent?
- How many could be eliminated without losing information?
- What's the cost difference between your protocol and "broadcast everything"?

### Step 4: Design Anti-Patterns

For ONE scenario, design the WORST possible communication protocol (maximum waste). Then explain why each decision is harmful. This teaches you what NOT to do.

## Scoring

| Criteria                    | What to Evaluate                                                           |
| --------------------------- | -------------------------------------------------------------------------- |
| **Comprehensiveness** (1-5) | Did you address all communication needs in each scenario?                  |
| **Actionability** (1-5)     | Could someone implement your protocol in Claude Code?                      |
| **Evidence Quality** (1-5)  | Are DM vs broadcast choices justified by scenario constraints?             |
| **Team Coordination** (1-5) | Does the protocol minimize waste while ensuring everyone gets needed info? |

**Target**: 14/20 or higher.

## Expected Results

Strong protocols should demonstrate:

- DMs used for targeted information (not everyone needs to know)
- Broadcasts reserved for truly team-wide announcements
- Clear reduction in total messages vs "broadcast everything" approach
- At least one well-designed anti-pattern example

## Reflection

1. What percentage of messages in your designs were DMs vs broadcasts? What does this ratio tell you?
2. In which scenario was broadcast most justified? What made it necessary?
3. How does unnecessary broadcasting affect agent performance? (Think about context windows and focus)
4. If you had a team of 10 agents instead of 3-4, how would communication costs scale?
5. What's the "golden rule" of agent communication that emerged from this exercise?

## Tool Note

This is a design exercise -- no Claude Code or API costs needed. Complete it with a text editor.
