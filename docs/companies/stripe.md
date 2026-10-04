# Stripe interview guide

Payments and financial infrastructure APIs. Interviews are practical: multi-part business-logic coding, an API integration round and a bug squash in a real codebase. Updated October 2026.

| | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | Software Engineering Intern (undergrad and grad). India: 6-month winter intern in Bengaluru reported Oct 2025. |
| **New grad level** | L1 (entry level per Levels.fyi; Bengaluru L1 offers to 2025 grads reported on LeetCode) |
| **0 to 3 years** | L1 for 0 to 1 yrs (Levels.fyi median 0 YOE); L2 for roughly 2 to 5 yrs (Levels.fyi median 4 YOE; e.g. L2 Seattle offer at 3.5 YOE, June 2025). Stripe uses flat external titles: L1 to L3 are all 'Software Engineer' and L4+ is 'Staff' (Aced); candidates often call L2 'SE2'. |
| **Online assessment** | HackerRank (most reports); Unstop for an India intern drive (Sep 2026); isolated HireVue and CodeSignal mentions : 1 problem, 3 to 6 progressive parts, 60 minutes (some 90), all parts in one submission graded by hidden tests (20 hidden tests in a Jul 2026 report). Free language choice with autocomplete; custom tests allowed. |
| **Coding rounds** | NG: 1 team screen plus 1 programming exercise onsite (plus integration and bug squash). Intern: 1 screen plus 1 programming exercise onsite. L2: same plus possible AI programming round. |
| **Behavioral** | Stripe operating principles (Users first, Create with craft and beauty, Move with urgency and focus, Collaborate egolessly, Stay curious, Obsess over talent) assessed in a hiring manager round |
| **Timeline** | Internship interviews align with local academic calendars; full-time and apprenticeship hiring is rolling (official emerging-talent page). NG OA invites often arrive Aug to Oct; one 2024 candidate got 16 days to take the OA. interviewing.io estimates about 6 weeks end to end (as little as 2 weeks with a referral); Aced says 4 to 8 weeks. Intern processes are often fast (responses within days per stage). Post-onsite waits of 2+ weeks reported for L2 (Jul 2026). interviewing.io says team placement is discussed with the hiring manager during the onsite and usually settled after it; there is no public evidence of a separate team-match stage for new grads. |
| **New grad pay** | Levels.fyi (US, page updated Oct 4 2026): L1 entry median total comp about $209K (base about $146K, stock about $45K/yr, bonus about $18K); L2 about $285K. India L1 median about INR 58.1 lakh (base about INR 30.6 lakh, stock about INR 24 lakh/yr). Vesting: Levels.fyi and Aced say Stripe now issues single-year RSU grants, with refreshers available after about 9 months (older 4-year quarterly and 2-year schedules are also listed). LeetCode offer posts: Bengaluru L1 2025 grads about INR 59 to 65 lakh first-year (base INR 29 lakh, RSUs about $26K or INR 22 to 23 lakh per year, 10% target bonus, joining and relocation bonuses; one offer allowed taking cash instead of RSUs); Bengaluru 6-month winter intern stipend INR 2 lakh/month (Oct 2025 offer). |
| **Official links** | [Careers](https://stripe.com/careers), [Students](https://stripe.com/careers/emerging-talent), [Values](https://stripe.com/careers/compatibility) |

## Interview process

### New grad

1. **Application and resume screen.** Apply on stripe.com/careers (filter University). Stripe says GPA matters and it recruits from schools with strong past performance, but not only those. India new grads also hired via on-campus drives (Oct 2025 LeetCode post).
2. **Online assessment (HackerRank).** 60 minutes (one Canada report says 90). One long, Stripe-flavored problem split into 3 to 6 parts that build on each other (fraud scoring, transaction alerts, parsing CSV-like strings, OOP modelling). One submission is graded by hidden test cases (20 in a Jul 2026 report). Language of your choice, can run custom tests. A Dublin candidate (Sep 2025) reported webcam and screen sharing. Reading speed matters more than algorithms.
3. **Recruiter chat (optional) and language form.** Short recruiter call on logistics. Before the onsite you fill a language-choice form (India NG, Oct 2025). Recruiter shares a prep document describing rounds (intern report, Sep 2024).
4. **Technical team screen.** 45 to 60 minutes live coding on HackerRank or your own environment. One practical multi-part problem unlocked part by part (invoice reconciliation, fraud checks, transport cost calculator). Expect to write your own inputs and test cases. Ends with ~15 min Q and A about Stripe.
5. **Virtual onsite.** Usually three ~1 hour technical rounds: Programming exercise (multi-part, same style as screen, harder), Integration (clone a repo, run locally, call HTTP APIs, parse JSON, read docs) and Bug Squash (find and fix bugs in a large unfamiliar codebase using its failing tests and a debugger). Some NG loops reported 2 coding rounds plus debug plus integration (Toronto, Feb 2025).
6. **Hiring manager chat.** Behavioral and experience discussion (teamwork, ownership, past work, how you approach problems). Called 'Experiences and Goals' in a 2026 loop.
7. **Offer.** Recruiters often give no feedback on rejection (several 2025 reports).

### Intern

1. **Online assessment.** HackerRank, about 60 minutes, one long multi-part practical problem (server load balancing, API implementation, data processing). An India intern assessment was run on Unstop (Sep 2026 report). One UK report (Nov 2025) described the OA on HireVue; one report with no location (Oct 2025) mentions CodeSignal.
2. **Technical screen.** ~45 to 60 minute pair-programming style round, same style as the OA: one problem with 2 to 4 parts revealed in stages (string parsing, custom classes).
3. **Virtual onsite (about 2 hours).** Two back-to-back 1 hour sessions: a programming exercise and an integration challenge working in an existing codebase (India Jan 2025, SF Nov 2025, NY Feb 2025). Topics: class design, string parsing, designing API requests.
4. **Hiring manager chat.** Behavioral (e.g. 'How do you see yourself in the next year?'). Then offer. Conversion to full time is selective per Stripe.

### With 1 to 3 years of experience

For L2 (about 2 to 5 yrs) the loop is a phone screen (practical multi-part coding) then 4 to 5 onsite rounds: programming exercise, bug squash, integration, hiring manager (called 'Experiences and Goals') and often system design (Aced: system design is core for mid-level and above; NG loops usually skip it). New in 2026: a recruiter told one L2 candidate the 'AI Programming Exercise' allows the HackerRank AI Assistant and the internet and is graded on architecture, design, testing and optimization (LeetCode, Jun 2026); a Jul 2026 L2 loop listed Screening, AI Programming, Bug Squash, AI Integration, and Experiences and Goals. A Senior+ loop in Aug 2026 had two 'coding with AI' phone screens (PracHub). In contrast, interviewing.io says AI use is strictly prohibited and Aced says AI coding assistants are not permitted in the classic Integration round, so the policy varies by round and changed recently; confirm with your recruiter. System design flavor is payments: idempotency, ledgers, reconciliation, retries, API design.

## Online assessment

- **Platform:** HackerRank (most reports); Unstop for an India intern drive (Sep 2026); isolated HireVue and CodeSignal mentions
- **Format:** 1 problem, 3 to 6 progressive parts, 60 minutes (some 90), all parts in one submission graded by hidden tests (20 hidden tests in a Jul 2026 report). Free language choice with autocomplete; custom tests allowed.
- **Notes:** Long 2 to 3 screen spec; logic is simple but reading and typing speed decide it. Partial passes can still advance (15/17 tests got a Bengaluru intern an interview, Nov 2025); a 12/20 candidate (Aug 2026) did not know the cutoff. Some report webcam plus screen share proctoring; avoid Googling if unsure about rules.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** NG: 1 team screen plus 1 programming exercise onsite (plus integration and bug squash). Intern: 1 screen plus 1 programming exercise onsite. L2: same plus possible AI programming round.
- **Style:** Not LeetCode style. One realistic problem (payments, invoices, fraud, subscriptions, shipping) that grows over 3 to 4 parts. Mostly maps, sets, sorting, parsing and clean classes; occasionally a DP or heap part (shipping cost knapsack, Jun 2026).
- **Environment:** HackerRank IDE or your own local IDE for screens; own IDE with a cloned repo for integration and bug squash; you can run code. Language chosen in advance (Java, Python, C++, Go, etc.).
- **Graded on:** Working, readable code; progress through parts; handling edge cases without prompting; writing tests; explaining complexity; communication (Aced, LeetCode Jun 2026).
- **Reported focus topics:** string parsing (CSV-like records, memo lines), hash maps, sets, multi-key sorting, OOP and class design for evolving requirements, multi-part problems with changing rules, time windows and event processing, union-find grouping, REST APIs, HTTP calls, JSON parsing, debugging unfamiliar codebases with tests and a debugger, writing your own test cases, payments domain: invoices, chargebacks, fraud rules, idempotency, reconciliation

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **1** distinct problems tagged to Stripe in the last 6 months (0 in the last 30 days, 0 in the last 3 months, 13 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 100%

**Most tagged topics (share of problems):** Array 100%, Hash Table 100%, String 100%, Sorting 100%

> **Watch out:** Stripe has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Invalid Transactions](https://leetcode.com/problems/invalid-transactions/) | Medium | 6 months | Array, Hash Table, String, Sorting |

### Signature problems

Problems where Stripe accounts for a large share of all recent tags across companies. These are the most Stripe-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Invalid Transactions](https://leetcode.com/problems/invalid-transactions/) | Medium | 6 months | Array, Hash Table, String, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Invoice reconciliation: match a payment to an invoice via memo id, fall back to amount with earliest due date, then amount within a tolerance | SWE New Grad (virtual onsite) | 2026-03 | [post](https://leetcode.com/discuss/post/7691354/stripe-ng-sde-vo-by-oavo-62ig/) |
| Invoice reconciliation (part 1): parse payment and invoices, output 'paymentX pays off N for invoiceY due on DATE' | Software Engineer (round 1) | 2025-11 | [post](https://leetcode.com/discuss/post/7379560/stripe-interview-round-1-by-anonymous_us-vb2w/) |
| Fraud detection, 4 parts: validate CSV fields, amount and blocked payment-method rules, match user behavior baseline (>=50%), output prioritized error codes | Phone screen | 2025-11 | [post](https://leetcode.com/discuss/post/7384225/stripe-phone-screen-4-part-interview-exp-dhoy/) |
| [Fraud ring detection: group customers sharing a device or card (union-find, similar to LC Accounts Merge), largest ring, average risk factor per ring](https://leetcode.com/problems/accounts-merge/) | Online assessment (HackerRank) | 2026-07 | [post](https://leetcode.com/discuss/post/8385570/stripe-hackerank-oa-by-anonymous_user-4utt/) |
| Merchant error alerting: 30-second sliding window per (merchant, status code), TRIGGER and RESOLVE events, sorted output | Online assessment (HackerRank) | 2026-08 | [post](https://leetcode.com/discuss/post/8489559/stripe-oa-by-anonymous_user-qsfq/) |
| Merchant fraud score from transactions, rule list (threshold multiplier, repeat-customer additive, same-hour penalty) | Software Engineer Intern (India, Unstop assessment) | 2026-09 | [post](https://leetcode.com/discuss/post/8497527/stripe-intern-unstop-assessment-by-jqwra-cipg/) |
| Calculate a vendor fraud score from rules (OA); transport cost for an order from a pricing table, 3 variants (team screen) | SWE New Grad (Bucharest) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/swe-new-grad-bucharest-bucharest-october-1-2025-no-offer-neutral-06efd945/) |
| Datacenter registry: REGISTER/SET_HEALTHZ validation, Haversine distance, route request to nearest healthy region with capacity | Online assessment (SSE3, same OA style) | 2026-08 | [post](https://leetcode.com/discuss/post/8470971/stripe-oa-2026-sse3-by-anonymous_user-qx00/) |
| Integration: request replaying, consolidate duplicate JSON requests from strings and files so each is processed once | Software Engineer Backend (virtual onsite) | 2026-02 | [post](https://leetcode.com/discuss/post/7595344/stripe-onsite-interview-hopeful-pass-sha-x8le/) |
| Bug Squash: find bugs in the Mako templating library codebase using its unit tests | Software Engineer Backend (virtual onsite) | 2026-02 | [post](https://leetcode.com/discuss/post/7595344/stripe-onsite-interview-hopeful-pass-sha-x8le/) |
| Email subscriptions: generate the send schedule for subscribe, reminder and expiry emails from a schedule and user subscriptions | Software Engineer Backend (virtual onsite) | 2026-02 | [post](https://leetcode.com/discuss/post/7595344/stripe-onsite-interview-hopeful-pass-sha-x8le/) |
| [Minimum number of transactions to settle multi-party debts (same as LC Optimal Account Balancing, LC Premium)](https://leetcode.com/problems/optimal-account-balancing/) | Virtual onsite | 2026-01 | [post](https://leetcode.com/discuss/post/7521596/stripe-interview-experience-code-by-prog-22ke/) |
| Shipping cost calculator: greedy for weight only, then weight plus volume, then multiple ship types (DP over weight and volume) | Programming round | 2026-06 | [post](https://leetcode.com/discuss/post/8351452/stripe-programming-round-the-3-part-prob-a3gf/) |
| Render a character as a matrix of 0s and 1s, two follow-ups | Coding round (Bangalore) | 2026-03 | [post](https://leetcode.com/discuss/post/7628650/stripe-bangalore-rejected-but-doesnt-mak-uu11/) |
| Design a system for server load balancing to meet a series of requirements | Software Engineer Intern (OA, US) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/software-engineer-intern-united-states-october-1-2025-no-offer-neutral-4ed6b862/) |
| Design an API request to achieve the desired response (class design, string parsing) | Software Engineering Intern (San Francisco) | 2025-11 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/software-engineer-internship-san-francisco-california-november-2-2025-accepted-offer-positive-1b99d74f/) |
| Implement a given algorithm to preprocess data for fraud-detection ML (turn words into code) | SWE New Grad OA (Seattle) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/swe-new-grad-seattle-washington-september-1-2025-no-offer-neutral-289e6bd4/) |
| Dataset queries similar to SQL joins and filtering, one task with three subproblems | New Grad SWE OA (Dublin) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/new-grad-swe-dublin-dublin-september-1-2025-no-offer-positive-49a6d522/) |
| Revenue for laptops and keyboards sold in different countries with country-specific rules | Software Engineering Intern (Canada) | 2025-06 | [post](https://www.jointaro.com/interviews/companies/stripe/experiences/software-engineerinternship-canada-june-18-2025-no-offer-neutral-d9cda066/) |

## Beyond LeetCode

Integration round: clone a repo, set up locally, call REST APIs, parse JSON from strings and files, follow docs (e.g. request replaying: dedupe duplicate requests so each is processed once). Bug Squash: debug a large real codebase (a Mako templating library repo reported Feb 2026) using its unit tests and an IDE debugger; graded on method, not speed. Programming exercise: evolving multi-part business-logic problem. 2026 addition for L2: AI Programming and AI Integration rounds with an AI assistant allowed.

## System design

Usually not in intern or new grad loops (Aced: NG loops are leaner, no full system design). Appears for L2 and above, about 1 hour on a whiteboarding tool (Aced says Stripe recommends Whimsical). Expect payment-flavored designs: idempotent payment APIs, ledgers with strong consistency, retries, rate limits, reconciliation jobs.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Stripe operating principles (Users first, Create with craft and beauty, Move with urgency and focus, Collaborate egolessly, Stay curious, Obsess over talent) assessed in a hiring manager round ([official page](https://stripe.com/careers/compatibility))

**What they look for:**

- Users first: you work backwards from user needs
- Craft: well-made, clean work and attention to detail
- Urgency and focus: shipping fast on what matters
- Egoless collaboration: debate openly, share credit
- Curiosity about how businesses and money movement work
- Rigorous, first-principles thinking and adaptability to change (including AI)
- Ownership of past projects and clear career goals

**Questions to prepare:**

- Tell me about a challenging project.
- Why are you leaving your current role and why Stripe?
- Tell me about leading a project and assigning tasks.
- Tell me about a conflict with a peer or manager.
- How do you see yourself in the next year?
- Tell me about yourself.

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice reading a 2 to 3 screen spec and coding it part by part inside 60 minutes; skim all parts first because later parts change earlier logic.
- Write your own test inputs and asserts; in screens you are expected to generate inputs and more than two test cases.
- Before the onsite, set up your chosen language locally with a working debugger, a JSON library and an HTTP client; one candidate's debugger failed during Bug Squash.
- Train for Bug Squash by cloning an open-source repo (Python or Java), breaking something, and finding it through failing unit tests.
- For Integration, practice consuming a REST API from docs, parsing JSON from files and strings, and deduplicating or retrying requests safely.
- Learn payment basics (idempotency keys, ledgers, reconciliation, chargebacks); Hello Interview's payment system breakdown is a good free primer.
- Ask your recruiter which rounds allow AI tools: 2026 L2 loops added AI Programming and AI Integration rounds, while other rounds ban AI.
- Apply early with a referral; Stripe says GPA matters and intern conversion is selective, so treat the internship as a full interview bar.

## 4-week plan for Stripe

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Stripe operating principles (Users first, Create with craft and beauty, Move with urgency and focus, Collaborate egolessly, Stay curious, Obsess over talent) assessed in a hiring manager round round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://stripe.com/careers>
- <https://stripe.com/careers/emerging-talent>
- <https://stripe.com/careers/compatibility>
- <https://interviewing.io/stripe-interview-questions>
- <https://www.aced.io/guides/stripe-software-engineer-interview>
- <https://prepfully.com/interview-guides/stripe-software-engineer>
- <https://prachub.com/interview-experiences/stripe-seniorplus-software-engineer-interview-experience-ai-assisted-phone-screens-rejected-after-four-onsite-rounds>
- <https://www.hellointerview.com/learn/system-design/problem-breakdowns/payment-system>
- <https://www.levels.fyi/companies/stripe/salaries/software-engineer>
- <https://www.levels.fyi/companies/stripe/salaries/software-engineer/levels/l1>
- <https://www.levels.fyi/companies/stripe/salaries/software-engineer/locations/india>
- <https://leetcode.com/discuss/post/7566910/stripe-new-grad-interview-experience-202-cpn4/>
- <https://leetcode.com/discuss/post/7691354/stripe-ng-sde-vo-by-oavo-62ig/>
- <https://leetcode.com/discuss/post/7379560/stripe-interview-round-1-by-anonymous_us-vb2w/>
- <https://leetcode.com/discuss/post/6696304/phonescreen-for-stripe-l2backend-positio-5rav/>
- <https://leetcode.com/discuss/post/7384225/stripe-phone-screen-4-part-interview-exp-dhoy/>
- <https://leetcode.com/discuss/post/7497123/google-l4-interview-experience-timeline-3kfe0/>
- <https://leetcode.com/discuss/post/8353936/stripe-technical-phone-screen-reject-by-jy92j/>
- <https://leetcode.com/discuss/post/8385570/stripe-hackerank-oa-by-anonymous_user-4utt/>
- <https://leetcode.com/discuss/post/8489559/stripe-oa-by-anonymous_user-qsfq/>
- <https://leetcode.com/discuss/post/8491383/stripe-oa-hackerrank-assessment-by-kusha-s1tn/>
- <https://leetcode.com/discuss/post/8497527/stripe-intern-unstop-assessment-by-jqwra-cipg/>
- <https://leetcode.com/discuss/post/8470971/stripe-oa-2026-sse3-by-anonymous_user-qx00/>
- <https://leetcode.com/discuss/post/7595344/stripe-onsite-interview-hopeful-pass-sha-x8le/>
- <https://leetcode.com/discuss/post/7521596/stripe-interview-experience-code-by-prog-22ke/>

> **Watch out:** All URLs above were loaded and checked on 2026-10-04 (LeetCode Discuss posts confirmed through LeetCode's public GraphQL API because the HTML is behind a Cloudflare challenge; jointaro pages fetched directly; official Stripe pages fetched and quoted for operating principles, GPA and conversion policy). Fact-check corrections (2026-10-04): no source supports '25 hidden tests' or a '17/25' partial pass, so those were replaced with the sourced 20-test and 15/17 figures; the CodeSignal intern report has no location; L2 is titled 'Software Engineer', not 'SWE II'; 'AI Integration' is from a single Jul 2026 L2 report. Stripe has no public interview prep page; recruiters send a prep doc. OA platform and length vary (mostly HackerRank 60 min; Unstop for an India intern drive; isolated HireVue and CodeSignal mentions). The AI policy is in flux: interviewing.io says AI is strictly prohibited, Aced says no AI coding assistants in integration, but Jun to Aug 2026 reports describe AI Programming and AI Integration rounds (L2) and AI-assisted phone screens (Senior+); unverified whether these reach new grad loops. Several LeetCode posts (fraud phone screen 7384225, debt settlement 7521596, the Jun 2026 shipping-cost posts) read like marketing for paid question banks (programhelp, offerretriever); the questions match other reports, but treat details as lower confidence. Exponent now operates as Aced (aced.io, 'formerly Exponent'). Comp figures are crowd-sourced (Levels.fyi, LeetCode). Jugal's Substack only mentions Stripe in passing (company-wise problem repo in the startup offer post); no Stripe-specific post.

Next: [All companies](index.md)
