# Business Workflows for Dependency Mapping

Model each of these as a task dependency graph.

---

## Workflow 1: Quarterly Business Review (QBR) Preparation

Your company prepares a QBR deck every quarter. Here's the process:

1. **Collect raw data** from 4 sources:
   - Financial data from accounting (takes 2 hours)
   - Customer metrics from CRM (takes 1 hour)
   - Product metrics from engineering dashboard (takes 1 hour)
   - Competitive intelligence from market research (takes 3 hours)

2. **Analyze each data set**:
   - Financial analysis: trends, YoY comparison, variance from targets
   - Customer analysis: NPS trends, churn analysis, expansion revenue
   - Product analysis: velocity trends, bug rates, roadmap progress
   - Competitive analysis: market moves, new entrants, positioning shifts

3. **Create cross-functional insights**:
   - Revenue-customer correlation (needs both financial + customer analysis)
   - Product-revenue impact (needs both product + financial analysis)
   - Competitive response plan (needs competitive analysis + all internal data)

4. **Build the deck**:
   - Executive summary (needs all cross-functional insights)
   - Department deep-dives (needs individual analyses)
   - Action items and OKR updates (needs executive summary)

5. **Review cycle**:
   - CFO reviews financial sections
   - CTO reviews product sections
   - CEO reviews full deck and executive summary

**Questions to consider**: Which data collections can happen in parallel? Which analyses depend on which data? Can reviews happen in parallel?

---

## Workflow 2: Product Launch

You're launching a new SaaS feature. Here's the process:

1. **Pre-launch preparation** (2 weeks before):
   - Write product documentation (needs: final feature spec)
   - Create marketing blog post (needs: product documentation for accuracy)
   - Design email campaign (needs: marketing blog post for consistent messaging)
   - Update pricing page (needs: final pricing decision from finance)
   - Create support FAQ (needs: product documentation + beta tester feedback)
   - Train support team (needs: support FAQ + product documentation)
   - Set up monitoring dashboards (needs: feature deployed to staging)
   - Deploy feature to staging (needs: code complete + QA sign-off)
   - QA sign-off (needs: code complete)

2. **Launch day**:
   - Deploy to production (needs: staging verified + monitoring ready)
   - Send email campaign (needs: deploy to production confirmed)
   - Publish blog post (needs: deploy to production confirmed)
   - Notify enterprise customers (needs: deploy to production + support team trained)
   - Social media announcement (needs: blog post published)

3. **Post-launch** (week after):
   - Monitor metrics (needs: monitoring dashboards)
   - Collect user feedback (needs: 48 hours post-launch)
   - Write launch retrospective (needs: metrics + feedback)

**Questions to consider**: What's the critical path from code complete to social media announcement? Where are the biggest bottlenecks?

---

## Workflow 3: Hiring Pipeline

You're hiring for 3 positions simultaneously:

1. **Job posting phase**:
   - Write job descriptions (3 separate JDs)
   - Get hiring manager approval on each JD
   - Post to job boards (needs: approved JDs)
   - Share on social media (needs: approved JDs)

2. **Sourcing phase** (runs in parallel with incoming applications):
   - Source passive candidates on LinkedIn (needs: approved JDs)
   - Ask team for referrals (needs: approved JDs)
   - Screen incoming applications (ongoing, needs: posted JDs)

3. **Interview phase** (per candidate):
   - Phone screen (needs: screened application)
   - Technical assessment (needs: passed phone screen)
   - Hiring manager interview (needs: passed technical assessment)
   - Team interview panel (needs: passed hiring manager interview)
   - Reference checks (needs: passed team interview)

4. **Decision phase**:
   - Compile interview scorecards (needs: all interviews complete)
   - Hiring committee review (needs: scorecards + reference checks)
   - Generate offer letter (needs: hiring committee approval)
   - Negotiate and close (needs: offer letter)

5. **Onboarding prep** (can start before candidate's start date):
   - Order equipment (needs: offer accepted)
   - Set up accounts (needs: offer accepted)
   - Assign onboarding buddy (needs: offer accepted)
   - Create 30-60-90 plan (needs: offer accepted + hiring manager input)

**Questions to consider**: How does the parallelism of 3 simultaneous positions affect the dependency graph? Where can one position's process inform another's?
