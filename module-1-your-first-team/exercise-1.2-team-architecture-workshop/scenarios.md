# Team Architecture Scenarios

Design an agent team for each of the following business scenarios. Use the template in `team-design-template.md` for each one.

---

## Scenario 1: Quarterly Business Review Preparation

Your company's QBR is in one week. The CEO needs a slide deck covering:

- Financial performance (revenue, costs, margins vs targets)
- Customer metrics (NPS, churn, expansion revenue, support tickets)
- Product updates (features shipped, bugs fixed, roadmap progress)
- Competitive intelligence (new entrants, competitor moves, market shifts)

You have access to:

- `financial-summary.csv` with Q4 numbers
- `customer-dashboard-export.csv` with NPS and churn data
- `jira-export.csv` with sprint completion data
- News articles about 3 competitors from the past quarter

The CEO specifically said: "Don't just summarize numbers. Tell me what they MEAN and what we should DO about them."

---

## Scenario 2: New Employee Onboarding Package

Your company just hired 5 new people starting next month. HR asked you to create personalized onboarding packages for each new hire:

- A welcome document explaining team structure and culture
- A first-week schedule with meetings, tool setup, and reading materials
- A 30-60-90 day plan with specific milestones
- Role-specific resources (different for engineering, sales, marketing, etc.)

You have:

- `org-chart.md` with current team structure
- `new-hires.csv` with names, roles, departments, start dates
- `company-handbook.md` with policies and values
- Previous onboarding feedback from recent hires

---

## Scenario 3: Product Launch Checklist

You're launching a new product feature in 3 weeks. The launch requires coordination across:

- Marketing (blog post, social media campaign, email sequence)
- Documentation (user guide, API docs, changelog)
- Support (FAQ document, training for support team, escalation procedures)
- Engineering (feature flags, monitoring dashboards, rollback plan)

You have:

- `product-spec.md` with feature details
- `brand-guidelines.md` for marketing consistency
- `previous-launch-retro.md` with lessons from last launch
- `customer-segments.csv` with target audience details

---

## Scenario 4: Budget Reallocation Analysis

The CFO has given you a $200K budget to reallocate across 4 departments. Each department submitted a request:

- Engineering: $80K for new developer tools and cloud infrastructure
- Marketing: $65K for a brand refresh and paid advertising
- Sales: $45K for a new CRM system and sales training
- Customer Success: $55K for a customer education platform

Total requests: $245K. You need to cut $45K while maximizing impact. You have:

- `department-requests.csv` with line-item breakdowns
- `roi-estimates.csv` with projected returns for each initiative
- `company-okrs.md` with this quarter's objectives
- `historical-spend.csv` with last year's allocation and results

---

## Scenario 5: Crisis Communication Response

A product outage has affected 2,000 customers for 6 hours. The CEO needs:

- A customer-facing incident report (what happened, what we're doing, timeline)
- An internal post-mortem document (root cause, contributing factors, action items)
- Social media responses for the 50+ complaints on Twitter/X
- A proactive email to enterprise customers not yet affected
- Legal review of any SLA implications

You have:

- `incident-log.md` with timestamped technical details
- `affected-customers.csv` with customer tiers and SLA terms
- `sla-terms.md` with contractual obligations
- `brand-voice-guide.md` for consistent tone
- Previous crisis communication templates
