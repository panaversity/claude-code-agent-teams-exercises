# Communication Protocol Scenarios

Design a communication protocol for each scenario.

---

## Scenario 1: Parallel Research with Synthesis

**Team**: 3 researchers + 1 synthesizer (4 agents total)

**Situation**: Three researchers are independently investigating different aspects of a market. When done, the synthesizer needs all three findings to create a unified report.

**Constraints**:

- Researchers do NOT need each other's findings while working
- The synthesizer needs ALL three findings, not just one
- If a researcher discovers something urgent (e.g., "our main competitor just went bankrupt"), all agents should know immediately
- Each researcher may finish at different times

**Design question**: How does information flow from researchers to synthesizer? What triggers the "urgent discovery" broadcast?

---

## Scenario 2: Sequential Review Pipeline

**Team**: 1 drafter + 1 fact-checker + 1 editor + 1 approver (4 agents total)

**Situation**: A document goes through a pipeline: draft → fact-check → edit → approve. Each stage must complete before the next begins.

**Constraints**:

- Each agent only needs the output from the PREVIOUS stage (not all prior stages)
- If the approver rejects the document, it goes back to the drafter with specific feedback
- The approver's rejection reason should NOT go to the fact-checker or editor (they'll see the revised draft)
- If the document is approved, ALL agents should be notified (for their records)

**Design question**: How do you handle the "rejection loop" efficiently? What's the minimum number of messages for a successful approval? For a rejection-then-approval cycle?

---

## Scenario 3: Emergency Response Coordination

**Team**: 1 incident commander + 3 responders (customer comms, technical fix, management update) (4 agents total)

**Situation**: A production incident requires parallel responses: one agent writes customer communications, one works on the technical fix, one prepares management updates.

**Constraints**:

- The incident commander assigns initial tasks (broadcast is OK here -- everyone needs context)
- Status updates go to the commander only (DM) -- not to other responders
- If the technical fix reveals the root cause, the customer comms agent needs that info (but management update does not until later)
- When the incident is resolved, everyone needs to know (broadcast)
- The commander may need to redirect resources mid-incident

**Design question**: How does the commander balance staying informed (receiving DMs) with not becoming a bottleneck (forwarding info)?

---

## Scenario 4: Competitive Intelligence Gathering

**Team**: 4 analysts (one per competitor) + 1 strategist (5 agents total)

**Situation**: Four analysts each monitor a different competitor. The strategist uses their findings to update the company's competitive positioning.

**Constraints**:

- Each analyst's findings are relevant ONLY to the strategist (not to other analysts)
- If Analyst A discovers that Competitor 1 is partnering with Competitor 3, both Analyst A AND Analyst C need to coordinate (but Analysts B and D don't)
- The strategist's final positioning document should be broadcast to all (everyone benefits from the synthesis)
- Analysts should NOT communicate with each other unless there's a cross-competitor discovery

**Design question**: How do you handle the rare "cross-competitor" situation without defaulting to broadcast? How does the strategist decide when to share synthesized insights?

---

## Scenario 5: Training and Mentorship

**Team**: 1 senior agent (mentor) + 3 junior agents (trainees) (4 agents total)

**Situation**: Three junior agents are working on separate tasks. The mentor reviews their work and provides feedback.

**Constraints**:

- Feedback is INDIVIDUAL (don't broadcast one trainee's mistakes to everyone)
- If the mentor notices a common mistake across multiple trainees, a targeted broadcast to those affected is appropriate (but not to the one who got it right)
- Trainees can ask the mentor questions via DM
- If a trainee produces exceptional work, the mentor should share it as a "good example" with all trainees (broadcast)
- Trainees should NOT send messages to each other (they should focus on their own work)

**Design question**: When does individual feedback become a team-wide teaching moment? How do you decide?
