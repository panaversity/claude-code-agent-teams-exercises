# Exercise 4.1 -- Client Proposal Pipeline

**Agent Teams Layer: Quality Gates** -- Use delegate mode and plan approval to build a draft-review-approve cycle

## Goal

Create a 3-agent team that drafts a client proposal, reviews it for quality, and requires explicit approval before finalizing. Practice delegate mode where teammates must get plan approval before making changes.

## Prerequisites

Modules 1-3 exercises -- you should be comfortable with teams, task dependencies, and inter-agent communication.

## What You Have

- `client-rfp.md` -- The client's Request for Proposal with specific requirements
- `company-capabilities.md` -- Your company's services, past work, and differentiators
- `reference-proposals/enterprise-saas-proposal.md` -- A previous winning proposal for an enterprise SaaS client
- `reference-proposals/startup-growth-proposal.md` -- A previous winning proposal for a startup growth client

## Your Tasks

### Step 1: Read the RFP and References

Read `client-rfp.md` to understand what the client needs. Then read `company-capabilities.md` and the two reference proposals to understand your company's strengths and winning proposal patterns.

### Step 2: Create the Proposal Team

```
"Create a team called 'proposal-team' with 3 agents:
- 'proposal-writer' -- Drafts the proposal matching the RFP requirements using company capabilities and reference proposals as guides. Use delegate mode so the writer must get plan approval before writing.
- 'quality-reviewer' -- Reviews the draft for completeness (does it address every RFP requirement?), accuracy (are capabilities claims truthful?), and persuasiveness (would you hire this company?)
- 'engagement-lead' -- Makes the final go/no-go decision on whether to submit. Can request revisions from the writer.

Create tasks:
- Task 1: 'Draft proposal responding to client RFP' → proposal-writer
- Task 2: 'Review draft for quality and completeness' → quality-reviewer, blockedBy: [Task 1]
- Task 3: 'Final approval and submission decision' → engagement-lead, blockedBy: [Task 2]

IMPORTANT: The proposal-writer should operate in delegate mode (plan_mode_required). Before writing, it must present its plan (outline, key themes, pricing approach) and get approval. This prevents wasted effort on a wrong direction."
```

### Step 3: Participate in the Approval Cycle

When the proposal writer presents its plan:

- Review the outline against the RFP requirements
- Check that pricing approach aligns with company capabilities
- Approve or request changes

When the quality reviewer completes their review:

- Read their feedback
- If revisions are needed, create a new task for the writer

### Step 4: Score Your Results

Evaluate the final proposal.

## Scoring

| Criteria                    | What to Evaluate                                                               |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Comprehensiveness** (1-5) | Does the proposal address every requirement in the RFP?                        |
| **Actionability** (1-5)     | Is the proposal specific enough that the client could sign and start?          |
| **Evidence Quality** (1-5)  | Are capability claims backed by specific past work and reference examples?     |
| **Team Coordination** (1-5) | Did the review cycle actually improve the proposal (not just rubber-stamp it)? |

**Target**: 14/20 or higher.

## Expected Results

A well-coordinated pipeline should produce:

- A proposal that addresses every section of the RFP
- At least one revision based on quality reviewer feedback
- Clear pricing that matches the client's stated budget range
- References to past work that demonstrate relevant experience
- An engagement lead decision with documented reasoning

## Reflection

1. Did the plan approval step (delegate mode) prevent any wasted effort? What would have happened without it?
2. How many revision cycles did the proposal go through? Was each cycle productive or diminishing returns?
3. Compare the final proposal to the reference proposals. What patterns did the writer borrow? What did it do differently?
4. In a real consulting firm, who fills the "engagement lead" role? Why is a final approval gate important?

## Tool Note

Works in Claude Code (terminal). Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Cowork does not support multi-agent team orchestration.
