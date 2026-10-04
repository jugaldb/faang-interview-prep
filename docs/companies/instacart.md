# Instacart interview guide

Grocery delivery marketplace and retailer platform. Known for multi-part practical coding (grocery pricing, variable resolution), inventory design, and a new AI-enabled CodeSignal OA. Updated October 2026.

| Instacart at a glance | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | Software Engineer Intern (Levels.fyi entries for Summer 2022 and 2025, remote); no intern postings open as of 2026-10-04 |
| **New grad level** | L3 (Engineer), the entry level on Levels.fyi; Instacart's current Early Career Software Engineering Program is described as Canada-focused |
| **0 to 3 years** | L3 (Engineer) is the entry level; Levels.fyi typical YOE for L3 is 2 to 3, though 0 YOE hires also land there. L4 (Levels.fyi 'Engineer 2'; postings titled Software Engineer II ask for 3 to 5 yrs). L5 is Senior |
| **Online assessment** | CodeSignal : Mid to late 2026: AI-enabled full-stack assessment, one Library Lending System repo in about 5 phases (clarify requirements with an AI PM, implement with Claude, fix a metrics bug without AI, clarify a second feature, implement it under time pressure). Earlier 2026: single progressive problem, 5 parts in 90 min (account creation, payments, top N by transactions, expiring transfers, account merge); Jan 2026: four-question OA. |
| **Coding rounds** | 2 onsite coding rounds (plus a screen or OA) |
| **Behavioral** | No full values list published on the careers site; Instacart pages cite 'serve generously' as one of its values. Behavioral rounds are usually a conversational interview with an engineering manager (some reports call it a bar raiser). |
| **Timeline** | About 2 to 4 weeks per interviewing.io and 4 to 6 weeks per TechPrep's 2026 guide. Reports: about a month from application to recruiter contact (Aug 2026), rejection 2 days after the onsite (Sep 2026), team matching after passing (Aug 2026). No published campus recruiting season; Canada early-career program timing not published. |
| **New grad pay** | Levels.fyi (US, as of 2026-10-04): L3 (Engineer) average total comp about $221K (base $148K, stock $73K/yr; 14 data points, few recent); a Sep 2025 San Francisco L3 entry with 0 YOE was $204.5K (base $171K, stock $33.5K). L4 (Engineer 2) average about $294K. Intern: Levels.fyi Summer 2025 entry $45/hr (remote); Summer 2022 $42/hr. An Aug 2025 Toronto SDE II report cited 160K base plus 120K USD stock over 2 years. |
| **Official links** | [Careers](https://www.instacart.careers/), [Students](https://www.instacart.careers/team-engineering), [Official interview prep](https://www.instacart.careers/ai-usage-guide), [Values](https://www.instacart.careers/taste-of-instacart) |

## Interview process

### New grad

1. **Apply.** Instacart's engineering page describes an Early Career Software Engineering Program 'designed to nurture early career talent in Canada' (Toronto hub). As of 2026-10-04 the Greenhouse board lists no intern or new grad SWE roles; watch the board and the Canada program. Instacart is 'Flex First' (remote-friendly, US and Canada).
2. **Recruiter call.** Background, motivation, past projects. One Aug 2026 candidate waited almost a month after applying for HR to reach out.
3. **CodeSignal online assessment.** Format changed repeatedly in 2026: a four-question timed OA (Jan 2026, SWE II; TechPrep's 2026 guide describes the same classic shape as 4 tasks in 70 min); a single progressive problem with 5 parts in 90 min (Jul 2026, banking system); and from mid-2026 an AI-enabled full-stack assessment on one Library Lending System repo with an AI Product Manager chat, implementation using Claude, a bug fix without AI, and a time-boxed feature extension (a June 2026 LeetCode Discuss post says Instacart had recently switched to it; reports run Jun to Sep 2026).
4. **Phone screen (some candidates).** Some candidates report a Karat phone screen (May 2026; practice questions listed as an asset storage system design and a largest adjacent stock price change problem). interviewing.io says the technical phone screen is about an hour on CodeSignal; Prepfully's 2023 guide describes a 60 min multi-part question on HackerRank CodePair.
5. **Virtual onsite.** Reported 2026 loops: two 60 min multi-part coding rounds (variable resolution 'T1 = T2'; grocery basket pricing with discounts and aisle sorting), one system design (inventory management or dark-store inventory), one behavioral with an engineering manager. Some loops include a 90 min library-app exercise where AI may explain code but not write fixes.
6. **Decision and team matching.** Results reported 2 days after the onsite in one Sep 2026 case; team matching follows for those who pass.

### Intern

1. **Apply.** No current intern postings (2026-10-04). Past intern roles were remote (Levels.fyi Summer 2025 entry). Watch the Canada early-career program.
2. **Assessment and interviews.** No 2025 to 2026 intern-specific interview reports found. Expect a CodeSignal OA and practical multi-part coding similar to full-time loops.

### With 1 to 3 years of experience

Most 2025 to 2026 reports are SWE II, L5 and senior. SWE II (Toronto, Aug 2025): phone screen, 2 coding rounds (HackerRank, multi-part with automated tests), 1 system design, 1 behavioral. L5 Canada (Aug 2026): vibe-coding OA, onsite coding on equation evaluation and a new multi-part problem, behavioral on past projects and negative feedback, system design of a dark-store inventory system focused on consistency in a relational database and on how you would release it (CI/CD, Kubernetes rollout). Senior reports (Sep 2026): two coding rounds (the same grocery pricing and variable-resolution problems, with +/- and cycle-detection parts), an inventory design focused on database locking, race conditions, deadlocks, reservations, overselling and a 10x TPS follow-up, and a behavioral or bar-raiser round with a senior manager who drills into one project for leadership, mentorship and trade-offs (one L6 candidate said only 20 of 45 minutes were used). interviewing.io notes system design decides leveling and the most common failure is passing coding but failing architecture. For senior roles Instacart allows and encourages AI use only in the Karat Next Gen interview (official AI usage guide).

## Online assessment

- **Platform:** CodeSignal
- **Format:** Mid to late 2026: AI-enabled full-stack assessment, one Library Lending System repo in about 5 phases (clarify requirements with an AI PM, implement with Claude, fix a metrics bug without AI, clarify a second feature, implement it under time pressure). Earlier 2026: single progressive problem, 5 parts in 90 min (account creation, payments, top N by transactions, expiring transfers, account merge); Jan 2026: four-question OA.
- **Notes:** Candidates say time is very tight (an Aug 2026 L5 candidate said 10 minutes with the AI PM was nowhere near enough): batch all questions to the AI PM in one prompt, have the AI commit working pieces incrementally, and submit early (one candidate's final submit hung). One Aug 2026 candidate heard from a recruiter that a score in the 600s should be fine. You may not paste the AI PM's answers straight into Claude. Official guide: AI may help organize thoughts in take-home assessments but must not complete the task, unless the stage explicitly asks for AI.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 2 onsite coding rounds (plus a screen or OA)
- **Style:** Practical, multi-part, lots of code: parse pipe-delimited SKU records, apply percent-off and buy-X-get-Y promotions choosing the cheapest, sort by aisle with frozen items last; resolve variables through chained assignments then add +/- expressions and cycle detection; expression evaluators; versioned key-value store; bus boarding simulation with priority and wheelchairs. Difficulty LeetCode medium, but finishing all parts is hard.
- **Environment:** CodeSignal live coding (a Jun 2026 candidate's CodeSignal session broke mid-round), HackerRank with automated tests (Aug 2025 Toronto), Karat for some screens. interviewing.io says the screen and 45 min onsite coding rounds run on CodeSignal in any language it supports; Prepfully's 2023 guide describes HackerRank CodePair with runnable code. No AI in live interviews unless explicitly requested (official AI usage guide).
- **Graded on:** Working code that passes tests, progress through the parts, clarifying input restrictions early, complexity, and production-readiness follow-ups (how would you make this production-grade).
- **Reported focus topics:** String parsing and integer-cent math, Multi-part simulation and state management (bank, payroll, file storage), Recursion and graph resolution with cycle detection, Expression evaluation (stacks), Sorting with custom keys, Full-stack repo work: REST endpoints, query filters, tests, Prompting and steering an AI coding assistant under time pressure, Inventory system design: reservations, consistency, transactions

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **5** distinct problems tagged to Instacart in the last 6 months (0 in the last 30 days, 1 in the last 3 months, 9 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 80%, Easy 20%

**Most tagged topics (share of problems):** Array 100%, Sorting 40%, Simulation 40%, Hash Table 40%, Two Pointers 20%, Binary Search 20%, String 20%, Design 20%

> **Watch out:** Instacart has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | Easy | 3 months | Array, Two Pointers, Sorting |
| 2 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Medium | 6 months | Array, Binary Search |
| 3 | [Average Waiting Time](https://leetcode.com/problems/average-waiting-time/) | Medium | 6 months | Array, Simulation |
| 4 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 6 months | Array, Hash Table, String, Sorting |
| 5 | [Simple Bank System](https://leetcode.com/problems/simple-bank-system/) | Medium | 6 months | Array, Hash Table, Design, Simulation |

### Signature problems

Problems where Instacart accounts for a large share of all recent tags across companies. These are the most Instacart-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Average Waiting Time](https://leetcode.com/problems/average-waiting-time/) | Medium | 6 months | Array, Simulation |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| AI-enabled OA: Library Catalog and Lending System in 5 phases (AI PM requirements chat, build with Claude, fix metrics bug without AI, new feature) | SWE (OA) | 2026-08 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-five-round-ai-online-assessment) |
| OA: extend /api/items with case-insensitive title search plus type and availability filters combined with AND, on backend and frontend, with tests | SWE (OA) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-a-full-stack-codesignal-challenge-with-no-tests-to-check-my-work) |
| OA: progressive banking system (create account, deposit and pay, top N accounts by transactions, expiring transfers with accept, merge accounts), 5 parts in 90 min | SWE (OA) | 2026-07 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-a-single-codesignal-oa-question-with-five-escalating-follow-ups) |
| Resolve a variable through chained assignments ('T1 = T2', 'T2 = 5') by recursion; follow-ups on complexity and making it production-grade | SWE (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-two-coding-rounds-a-manager-bq-chat-and-a-system-design-round) |
| Best price for a transaction given percent-off and buy-X-get-Y-free discounts (3 parts) | SWE (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-two-coding-rounds-a-manager-bq-chat-and-a-system-design-round) |
| Basket total from 'sku/name/qty/cents' lines (skip negatives); apply cheapest of pct or bxyf promotions; sort by aisle with frozen items last | SWE (onsite coding) | 2026-06 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-hit-with-a-brand-new-question-failed-on-bq) |
| Design an inventory management system for a simplified Instacart (backend only) | SWE (onsite system design) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-library-oa-pricing-and-inventory-design) |
| Design a dark-store inventory system with strong consistency on a relational DB, then explain release via CI/CD and Kubernetes rollout | L5 SWE, Canada (onsite) | 2026-08 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-l5-interviews-in-canada-and-team-matching) |
| Onsite: 90 min library-application exercise with AI allowed only to explain code, plus coding on variable evaluation and promotional pricing | SWE (onsite) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-ai-debugging-and-unclear-coding-assumptions) |
| OA: worker time and payroll tracker (temporal events, interval arithmetic) | SWE (OA) | 2026-02 | [post](https://prachub.com/coding-questions/implement-worker-time-and-payroll-tracker) |
| OA: in-memory file storage system | SWE (OA) | 2026-04 | [post](https://prachub.com/coding-questions/implement-an-in-memory-file-storage-system) |
| Simulate bus boarding with priority riders, wheelchairs and capacity | SWE (technical screen) | 2026-03 | [post](https://prachub.com/interview-questions/simulate-bus-boarding-with-priority-and-wheelchairs) |
| Explain how you would understand a large unfamiliar codebase fast | SWE (technical screen) | 2026-01 | [post](https://prachub.com/interview-questions/explain-how-to-understand-a-large-codebase-fast) |
| [Evaluate an arithmetic expression with precedence, parentheses, unary minus and truncating division](https://leetcode.com/problems/basic-calculator-ii/) | SWE (onsite) | 2025-08 | [post](https://prachub.com/coding-questions/evaluate-arithmetic-expression-with-precedence) |
| [Expression evaluator plus nested string decoder](https://leetcode.com/problems/decode-string/) | SWE (onsite) | 2025-09 | [post](https://prachub.com/coding-questions/solve-expression-evaluator-and-string-decoder) |
| [Design a versioned key-value store](https://leetcode.com/problems/time-based-key-value-store/) | SWE (onsite) | 2025-08 | [post](https://prachub.com/interview-questions/design-a-versioned-key-value-store) |
| Design a product catalog service | SWE (onsite) | 2025-08 | [post](https://prachub.com/interview-questions/design-product-catalog-service) |
| HackerRank coding: a 3-part question then a 2-part question with automated tests | SDE II, Toronto (onsite) | 2025-08 | [post](https://leetcode.com/discuss/post/7062286/instacart-sde2-interview-toronto-by-bill-w5h3/) |
| Variable resolution in three parts: chained assignments, then +/- expressions, then cycle detection | Senior (L6) SWE (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-senior-l6-software-engineer-interview-experience-grocery-pricing-coding-inventory-system-design-and-a-20-minute-behavioral) |
| Design an inventory system that prevents overselling: reserve on add-to-cart, locking, race conditions and deadlocks; follow-up on 10x TPS | Senior SWE (onsite system design) | 2026-09 | [post](https://prachub.com/interview-experiences/instacart-senior-software-engineer-interview-experience-fast-coding-and-a-difficult-bar-raiser) |
| Karat screen: design an asset storage system; find the largest adjacent stock price change | SWE (Karat technical screen) | 2026-05 | [post](https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-karat-phone-screen-rejected-two-weeks-later) |

## Beyond LeetCode

AI-enabled CodeSignal repo assessment with an AI Product Manager and Claude (2026), multi-part 'build on the previous part' coding, a 90 min library-application exercise where AI can explain code but not fix it, Karat Next Gen AI-allowed round for senior engineers, and bug-fix tasks in an existing codebase (move a metrics computation after filtering).

## System design

One system design round in full-time loops; it matters for leveling. Recurring prompts: inventory management system (reservations, no overselling, consistency, relational transactions), dark-store inventory with release plan, product catalog service, grocery ordering backend with reliable inventory reservations, cloud storage with quotas and compression. Interviewers lean toward correctness and consistency over caching. New grad expectations are unknown; prepare at least the inventory design.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** No full values list published on the careers site; Instacart pages cite 'serve generously' as one of its values. Behavioral rounds are usually a conversational interview with an engineering manager (some reports call it a bar raiser). ([official page](https://www.instacart.careers/taste-of-instacart))

**What they look for:**

- Projects you led, with technical tradeoffs and details you can defend
- Ownership and learning from mistakes (deployment mistakes are a common prompt)
- Response to negative feedback
- Honest, transparent use of AI in your work
- Customer and four-sided marketplace thinking (customers, shoppers, retailers, brands)

**Questions to prepare:**

- Tell me about the most interesting project you have been responsible for (Sep 2026)
- Have you made a mistake involving a deployment? What did you learn fixing it? (Sep 2026)
- Have you received negative feedback and how did you respond? (Aug 2026)
- Walk me through a project you led and the technical tradeoffs (Sep 2026)
- Why Instacart?
- Describe the project with the most impact and the greatest challenges, then expect follow-ups on leadership, mentorship and trade-offs (Sep 2026 senior bar-raiser round)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice CodeSignal Industry Coding Assessment style problems (one spec, 4 to 5 levels, keep earlier levels passing) such as an in-memory bank, file storage or key-value store.
- For the AI-enabled OA, rehearse with an AI coding tool on a small full-stack repo: write one complete requirements prompt, implement in small committed steps, and leave 5 min to submit.
- In the AI PM chat, ask all clarifying questions in one message (users, edge cases, backend vs frontend logic, tests) and record answers in the notes area.
- Drill the repeat onsite problems: 'T1 = T2' variable resolution with cycles, and the pipe-delimited basket pricing with pct and bxyf promotions and aisle sorting.
- Clarify input constraints in the first 5 minutes; a Sep 2026 candidate lost the round debating cases the interviewer later excluded.
- Prepare one inventory design that keeps stock consistent with relational transactions and reservations, plus a short release and rollback plan.
- Prepare behavioral stories on a deployment mistake and on negative feedback; the EM round is conversational, so tell it naturally rather than as a rigid script.
- Pick one recent project that can carry leadership, mentorship, collaboration, design trade-offs and a conflict story; a Sep 2026 senior bar-raiser insisted on staying with one project instead of switching to another for the conflict question.
- Read Instacart's official AI usage guide: no AI in live interviews unless asked; AI for prep and polishing is fine.

## 4-week plan for Instacart

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the No full values list published on the careers site; Instacart pages cite 'serve generously' as one of its values. Behavioral rounds are usually a conversational interview with an engineering manager (some reports call it a bar raiser). round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.instacart.careers/>
- <https://www.instacart.careers/team-engineering>
- <https://www.instacart.careers/ai-usage-guide>
- <https://www.instacart.careers/taste-of-instacart>
- <https://www.instacart.careers/current-openings>
- <https://www.instacart.careers/job?gh_jid=8244914>
- <https://company.instacart.com/about-us>
- <https://www.levels.fyi/companies/instacart/salaries/software-engineer>
- <https://www.levels.fyi/companies/instacart/salaries/software-engineer/levels/l3>
- <https://www.levels.fyi/internships/>
- <https://leetcode.com/discuss/post/8347997/did-anyone-pass-instacart-assessment-cod-myux/>
- <https://leetcode.com/discuss/post/7662747/instacart-online-assessment-by-anonymous-ak2q/>
- <https://leetcode.com/discuss/post/7062286/instacart-sde2-interview-toronto-by-bill-w5h3/>
- <https://prachub.com/companies/instacart>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-five-round-ai-online-assessment>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-a-full-stack-codesignal-challenge-with-no-tests-to-check-my-work>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-a-single-codesignal-oa-question-with-five-escalating-follow-ups>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-two-coding-rounds-a-manager-bq-chat-and-a-system-design-round>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-hit-with-a-brand-new-question-failed-on-bq>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-library-oa-pricing-and-inventory-design>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-l5-interviews-in-canada-and-team-matching>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-ai-debugging-and-unclear-coding-assumptions>
- <https://prachub.com/interview-experiences/instacart-software-engineer-ii-interview-experience-four-question-oa-with-a-tricky-shape-placement-puzzle>
- <https://prachub.com/interview-experiences/instacart-software-engineer-interview-experience-karat-phone-screen-rejected-two-weeks-later>
- <https://prachub.com/interview-questions/library-catalog-and-lending-system-five-phase-engineering-assessment>

> **Watch out:** Weakest of the four for early career: no 2025 to 2026 intern or new grad interview reports were found, Instacart's careers site has no university page, and no intern or new grad SWE roles were open on 2026-10-04; the engineering page describes the Early Career SWE program as Canada-focused. Process notes come mostly from SWE II, L5 and senior reports, so new grad loops may be lighter on system design. The OA format changed at least three times in 2026; the AI-enabled version is the most recent and may change again. Many PracHub reports are translated and curated by PracHub from other forums; the '600s' score remark is recruiter hearsay relayed by one candidate. Only one Instacart value ('serve generously') is verifiable on Instacart's own pages; the taste-of-instacart page is used as the values URL for that reason. Levels.fyi L3 data is thin (14 points, few in the last 12 months). LeetCode mappings for expression evaluation, decode string and versioned key-value store are practice equivalents, not verbatim. All URLs fetched or API-confirmed on 2026-10-04; Glassdoor and Reddit were not reachable. Fact-check pass 2026-10-04: removed an unsupported claim that 2023 guides allowed your own IDE (Prepfully 2023 says HackerRank CodePair; interviewing.io says CodeSignal); timeline changed from '3 to 6 weeks' to the two cited guide figures (interviewing.io 2 to 4, TechPrep 4 to 6); the Sep 2026 two-coding-rounds report covers only plain chained assignments, so the +/- and cycle parts now cite the Sep 2026 L6 report; Levels.fyi lists L3 typical YOE as 2 to 3, not 0 to 3; no intern or new grad roles on the Greenhouse API (131 jobs) on 2026-10-04.

Next: [All companies](index.md)
