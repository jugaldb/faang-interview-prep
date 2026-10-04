# Palantir interview guide

Data and AI platforms (Foundry, Gotham, AIP) for governments and enterprises. Known for decomposition and learning rounds, debugging exercises, and practical OAs over pure LeetCode. Updated October 2026.

| Palantir at a glance | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Software Engineer, Internship or Forward Deployed Software Engineer (FDSE), Internship; 12 weeks, May to September with four start dates; also 'Year at Palantir' full-year internships (NYC, DC, Chicago) |
| **New grad level** | Software Engineer, New Grad (Dev) or Forward Deployed Software Engineer, New Grad (Delta). Palantir has no public numbered ladder; Levels.fyi shows a single 'Software Engineer' level, with Forward Deployed Engineer folded in as an included title. |
| **0 to 3 years** | Same flat titles (Software Engineer, FDSE). New grad eligibility covers Fall 2026 and Spring 2027 graduates or people with under six months of industry experience; beyond that you apply to regular SWE/FDSE roles. |
| **Online assessment** | HackerRank : Varies by role and cycle. Reported 2026 formats: DSA questions requiring production-quality code (new grad); two medium algorithm questions plus a REST API task (SWE, Jul 2026); one three-part progressive build of a coupon/discount system in about 90 min (FDE intern, Aug 2026). |
| **Coding rounds** | 1 to 2 phone/technical rounds plus 0 to 2 onsite coding rounds (often merged with debugging or learning) |
| **Behavioral** | No published values list. Postings list SWE principles (Ownership, Collaboration, Trust) and FDE values (going where needed, agency, embracing ambiguity, intrinsic motivation, ruthless goal orientation). The official getting-hired page says interviewers ask how you executed, challenged yourself, motivated others, made judgments, and where you failed. |
| **Timeline** | Official: phone interview feedback within a week or two. interviewing.io and Prepfully (updated Sep 2026) both estimate 3 to 4 weeks end to end. Recent reports describe long waits: about five weeks after the hiring manager round for an FDE rejection (Jul 2026), and weeks of recruiter silence mid-process. New grad roles are open to Fall 2026 and Spring 2027 graduates; internships run May to September. Palantir Launch (spring insight week for 2nd-year students in London, DC, New York) ran in Spring 2025; its page still shows 2025 dates. |
| **New grad pay** | Levels.fyi (US, as of 2026-10-04): single 'Software Engineer' level (FDE folded in) averages about $244K total comp (base $169K, stock $69K/yr, bonus $5K). New grad (0 YOE) entries from Sep 2026: $225K to $267K in New York and Washington DC (base $155K to $175K plus $60K to $75K stock per year, some with a first-year bonus). Postings: SWE New Grad (New York) base $145K to $155K plus RSUs and sign-on; FDSE New Grad (New York) base $135K to $145K; SWE Intern $10,500/month. Levels.fyi intern entries: $60.58/hr (Summer 2026 and 2027, US), London $54.23 to $65.08/hr equivalent. |
| **Official links** | [Careers](https://www.palantir.com/careers/), [Students](https://www.palantir.com/careers/students-and-early-talent), [Official interview prep](https://www.palantir.com/careers/getting-hired/), [Values](https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92) |

## Interview process

### New grad

1. **Apply.** Resume (PDF) plus written answers to application questions on Lever. Choose Dev (Software Engineer, product development, 'one capability, many customers') or Delta (FDSE, business development, 'one customer, many capabilities'; 25 to 50% travel).
2. **Online assessment.** HackerRank coding assessment focused on data structures and algorithms with production-quality code (Jun 2026 new grad report; LeetCode Discuss threads from Oct 2025 and Mar 2026 also name HackerRank for the 2026 new grad and FDSE intern OAs). Other 2026 reports: two medium algorithm questions plus a REST API task (Jul 2026, SWE); a three-part grocery coupon system build for FDE intern (Aug 2026).
3. **Recruiter call.** 20 to 30 min on background, internships, projects, motivation for Palantir, and team interests. Some candidates get a 30 min screen with a deployment strategist instead of a recruiter.
4. **Technical interview.** One medium-to-hard coding problem; interviewers weigh thought process, tradeoffs, edge cases and communication. Official guide: 1 or 2 phone interviews of 20 to 45 min, each with a coding question, using HackerRank or Google Docs.
5. **Onsite (virtual or in person).** Learning round (learn an unfamiliar concept or API in the interview, then apply it) and Decomposition round (break an ambiguous real-world problem into components and a concrete plan). Many loops add a coding round and a debugging or re-engineering round. Behavioral questions run inside every round. FDSE intern onsites in DC were in person in Sep 2026.
6. **Hiring manager round.** Mix of behavioral and technical discussion on past projects, decisions, challenges and teamwork.
7. **Team placement and offer.** Placement is a 'Venn diagram' of your experience and interests with business needs, decided from interview signal (official FAQ).

### Intern

1. **Apply.** Summer 2027 US internships require graduating in 2028 and must be your final internship before graduation. Locations: New York, Washington DC, Chicago, London, Sydney, Tokyo, Palo Alto, Denver, Seattle, Singapore.
2. **Online assessment.** HackerRank. FDE intern OA (Aug 2026): about 90 min, one three-part problem that builds a grocery coupon system (per-item percent coupons with half-even cent rounding, then category discounts stacking multiplicatively with an 80% cap, then optimizing coupon choice under a 20-point budget).
3. **Phone / technical screen.** Live coding question. London SWE intern (Feb 2026): given share counts per company on given dates, return total shares held on each date (carry forward the last value per company).
4. **Onsite.** FDSE intern (Sep 2026, DC, in person): decomposition round, learning round, behavioral, and live coding.

### With 1 to 3 years of experience

For 1 to 3 years the same competencies apply, with more weight on system design and debugging. interviewing.io describes a 1 hour CodePair phone screen and an onsite of 3 of 4 rounds (decomposition, system design, re-engineering, meaning a bug hunt through a few hundred lines of unfamiliar code with red herrings, coding with end-user context), each with about 20 min of behavioral, followed by a hiring manager screen that repeats one round type and revisits weak areas. interviewing.io also says AI use in Palantir interviews is strictly prohibited. A Jul 2026 New York report had decomposition and debugging folded into the first technical round. A Mar 2026 SWE onsite had a coding round, a code-review round on a city-roads graph (fix the one-directional road bug, then BFS for unit weights and Dijkstra for real weights), and a 'system design' round that required writing multithreaded code for a worker collecting metrics from 1000 servers every 10 minutes.

## Online assessment

- **Platform:** HackerRank
- **Format:** Varies by role and cycle. Reported 2026 formats: DSA questions requiring production-quality code (new grad); two medium algorithm questions plus a REST API task (SWE, Jul 2026); one three-part progressive build of a coupon/discount system in about 90 min (FDE intern, Aug 2026).
- **Notes:** Watch rounding rules (half-even rounding to cents, round once per item) and integer cents. The FDE OA rewards reading the spec carefully and keeping earlier parts working as requirements extend.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 to 2 phone/technical rounds plus 0 to 2 onsite coding rounds (often merged with debugging or learning)
- **Style:** Practical and implementation-heavy rather than trick puzzles: stock holdings aggregation, graphs (BFS, Dijkstra), session manager classes, grouping employees by shared interests. Reported difficulty LeetCode easy to hard. Candidates keep asking on LeetCode Discuss whether the Palantir company tag is still relevant, with no clear answer; a Mar 2026 onsite report says its coding and code-review questions repeated earlier candidate write-ups exactly.
- **Environment:** HackerRank or Google Docs for phone interviews (official); HackerRank CodePair per interviewing.io (which also says AI use is strictly prohibited); in-person onsites may involve whiteboard or a provided computer. Any mainstream imperative language is fine (Java, Python, C++, Go, TypeScript); not Lisp, Prolog, COBOL.
- **Graded on:** Official competencies: writing good code (correct, testable, readable, well structured, no needless space or API calls), analyzing efficiency (time and space, practical constants), solving technical problems, navigating open-ended questions, and working inside existing systems. Thinking out loud and starting simple then expanding are explicitly recommended.
- **Reported focus topics:** Hash maps and aggregation over time-ordered records, Graphs: BFS, Dijkstra, modeling bidirectional edges, Careful arithmetic: integer cents, rounding rules, Reading and debugging unfamiliar code, Concurrency basics (thread pools, workers), Problem decomposition and requirement clarification, Learning a new API under time pressure, Access control and data permissions in design

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **4** distinct problems tagged to Palantir in the last 6 months (0 in the last 30 days, 3 in the last 3 months, 29 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 100%

**Most tagged topics (share of problems):** String 100%, Two Pointers 75%, Array 50%, Hash Table 50%, Binary Search 25%, Rolling Hash 25%, String Matching 25%, Hash Function 25%, Z Algorithm 25%, Knuth, Morris, Pratt Algorithm 25%

> **Watch out:** Palantir has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Find Beautiful Indices in the Given Array I](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/) | Medium | 3 months | Two Pointers, String, Binary Search, Rolling Hash |
| 2 | [String Compression](https://leetcode.com/problems/string-compression/) | Medium | 3 months | Two Pointers, String |
| 3 | [Shortest Word Distance II](https://leetcode.com/problems/shortest-word-distance-ii/) | Medium | 3 months | Array, Hash Table, Two Pointers, String |
| 4 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | Medium | 6 months | Array, Hash Table, String, Depth-First Search |

### Signature problems

Problems where Palantir accounts for a large share of all recent tags across companies. These are the most Palantir-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Find Beautiful Indices in the Given Array I](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/) | Medium | 3 months | Two Pointers, String, Binary Search, Rolling Hash |
| 2 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | Medium | 6 months | Array, Hash Table, String, Depth-First Search |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Given share counts per company on given dates, return total shares held on each date (carry forward last known value) | SWE Intern, London (phone screen) | 2026-02 | [post](https://leetcode.com/discuss/post/7568192/palantir-phone-screen-software-engineeri-xwzl/) |
| HackerRank DSA OA, then medium-hard technical coding, then Learning round, Decomposition round, and hiring manager round | New Grad SWE, Denver | 2026-06 | [post](https://leetcode.com/discuss/post/8334276/palantir-software-engineer-interview-exp-qa09/) |
| FDE OA part 1: apply per-item percent coupons to a cart in integer cents with half-even rounding; return subtotal, total discount, final total | SWE/FDE Intern (OA) | 2026-08 | [post](https://prachub.com/interview-experiences/palantir-intern-software-engineer-interview-experience-three-part-fde-oa-building-a-grocery-coupon-system-watch-the-rounding) |
| FDE OA part 2 and 3: stack item and category coupons multiplicatively with an 80% cap; choose coupons under a 20-point budget | SWE/FDE Intern (OA) | 2026-08 | [post](https://prachub.com/interview-questions/optimize-coupon-selection-under-a-twenty-point-budget) |
| Code review of a city-roads graph: fix bidirectional-road bug, shortest path with BFS (unit weights), then Dijkstra (weighted) | SWE (onsite) | 2026-03 | [post](https://prachub.com/interview-experiences/palantir-software-engineer-interview-experience-graph-code-review-dijkstra-and-a-multithreaded-system-monitor) |
| Design a system monitor that collects metrics from 1000 servers every 10 minutes; write the multithreaded worker code | SWE (onsite) | 2026-03 | [post](https://prachub.com/interview-questions/design-a-server-metrics-monitor) |
| Coding assessment with two medium algorithm questions and a REST API task, then 45 min technical, then learning and decomposition loop | SWE, Washington DC | 2026-07 | [post](https://prachub.com/interview-experiences/palantir-software-engineer-interview-algorithms-rest-api-and-learning-loop-bfd1af83d6) |
| Debug a long file with multiple bugs, plus a LeetCode-like exercise | FDE, New York (technical screen) | 2026-07 | [post](https://prachub.com/interview-experiences/forward-deployed-engineer-interview-at-palantir-collaborative-debugging-de00787812) |
| Referral path: HR screen, decomposition round, then onsite with coding, learning and decomposition, then hiring manager | FDE | 2026-07 | [post](https://prachub.com/interview-experiences/palantir-forward-deployed-engineer-interview-referral-decomposition-and-long-decision-wait-9b717b5ca0) |
| Group employees by shared interests (map entities to interests, query groups) | SWE (technical screen) | 2025-07 | [post](https://prachub.com/coding-questions/group-employees-by-shared-interests) |
| Design an internal interest-matching platform | SWE (technical screen) | 2025-07 | [post](https://prachub.com/interview-questions/design-an-internal-interest-matching-platform) |
| Design a scalable interview question bank | SWE (technical screen) | 2025-07 | [post](https://prachub.com/interview-questions/design-a-scalable-interview-question-bank) |
| Design a compliant multi-tenant analytics platform with attribute-based access control | SWE (onsite) | 2026-01 | [post](https://prachub.com/interview-questions/design-a-compliant-multi-tenant-analytics-platform) |
| Behavioral: handling value conflicts and disagreeing with leadership | SWE (onsite) | 2026-01 | [post](https://prachub.com/interview-questions/handle-value-conflicts-and-disagreeing-with-leadership) |
| [Find shortest paths in a road network (BFS for unweighted, Dijkstra for weighted)](https://leetcode.com/problems/network-delay-time/) | SWE (onsite) | 2026-03 | [post](https://prachub.com/coding-questions/find-shortest-paths-in-road-network) |

## Beyond LeetCode

Decomposition (break an open-ended real-world problem into parts and a plan), Learning (learn a new concept, library or API live and apply it, for example a package installer using a concurrency library per Prepfully), Re-engineering or debugging (find logical bugs in a few hundred lines of unfamiliar code, or a graph code review with several bugs), practical multi-part OA (coupon system), REST API task in the OA, and FDE-flavored customer problem framing.

## System design

New grads mostly meet design through the Decomposition round: an ambiguous real-world problem (examples from guides: design a chess game, technology to help seniors with glaucoma cook) where you clarify users and data sources, break it into components, and land a concrete plan. Formal system design appears for some SWE loops and most experienced loops: server metrics monitor with multithreaded workers, permissions for a data platform with sensitive data, compliant multi-tenant analytics platform with attribute-based access control, internal interest-matching platform. Expect questions on data access control, auditability and failure handling more than raw web scale.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** No published values list. Postings list SWE principles (Ownership, Collaboration, Trust) and FDE values (going where needed, agency, embracing ambiguity, intrinsic motivation, ruthless goal orientation). The official getting-hired page says interviewers ask how you executed, challenged yourself, motivated others, made judgments, and where you failed. ([official page](https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92))

**What they look for:**

- Mission motivation and a real answer to 'why Palantir' (including comfort with government and defense work)
- Honest discussion of failures and what you learned (Palantirians say they want an actual failure, not a disguised success)
- Independent problem solving and learning speed
- Communicating technical ideas to non-technical users
- Connecting data and software to real outcomes (value orientation)
- Ownership and judgment under ambiguity

**Questions to prepare:**

- Tell me about your biggest professional or academic accomplishment
- Tell me about a real failure or mistake and what you learned
- What are you passionate about?
- Why Palantir, and why this role (Dev vs Delta)?
- Describe a time your values conflicted with a decision, or you disagreed with leadership (Jan 2026 report)
- How did you motivate others or make a judgment call with incomplete information?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Read Palantir's official Getting Hired guides (phone interview, writing good code, efficiency, open-ended questions, technical problems, existing systems) before anything else; they describe exactly what is graded.
- Practice decomposition out loud: pick an everyday problem, list users, data sources, components and a first version, and land a concrete plan within 30 min. Deliver a working idea first, then expand.
- For the learning round, practice reading unfamiliar library docs (for example a concurrency library) and building something small in 20 min while narrating.
- Practice debugging other people's code: swap projects with a friend or fix a small bug in an open-source repo, as Palantir's own guide suggests.
- Prepare a real failure story; Palantir interviewers say they want an actual failure and what you learned.
- Decide Dev vs Delta before applying. FDSE (Delta) means 25 to 50% travel and customer-facing work; Jugal's FDE post explains the role and lists Palantir among the companies hiring FDEs.
- International students: read each US posting. Many US SWE intern and new grad postings list 'active US security clearance, or eligibility and willingness to obtain' one, and Jugal's Summer 2027 list warns most Palantir defense roles need US citizenship or permanent residency. London postings do not list clearance.
- Watch rounding in OAs: integer cents, round each item's final discount once, half-even ties.

## 4-week plan for Palantir

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the No published values list. Postings list SWE principles (Ownership, Collaboration, Trust) and FDE values (going where needed, agency, embracing ambiguity, intrinsic motivation, ruthless goal orientation). The official getting-hired page says interviewers ask how you executed, challenged yourself, motivated others, made judgments, and where you failed. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.palantir.com/careers/>
- <https://www.palantir.com/careers/students-and-early-talent>
- <https://www.palantir.com/careers/getting-hired/>
- <https://www.palantir.com/careers/getting-hired/the-phone-interview/>
- <https://www.palantir.com/careers/getting-hired/writing-good-code/>
- <https://www.palantir.com/careers/getting-hired/analyzing-the-efficiency-of-code/>
- <https://www.palantir.com/careers/getting-hired/navigating-open-ended-questions/>
- <https://www.palantir.com/careers/getting-hired/solving-technical-problems/>
- <https://www.palantir.com/careers/getting-hired/working-inside-existing-systems/>
- <https://www.palantir.com/careers/life-at-palantir/>
- <https://www.palantir.com/careers/meritocracy-fellowship/>
- <https://www.palantir.com/careers/students/launch/>
- <https://blog.palantir.com/interviewing-at-palantir-advice-from-palantirians-88444a90e7c4>
- <https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92>
- <https://jobs.lever.co/palantir/7d69cf8a-06fd-4f05-bd84-27149db29c4d>
- <https://jobs.lever.co/palantir/2e6b0ac8-83e9-4be5-a3aa-cf319f751728>
- <https://jobs.lever.co/palantir/d372c805-d0cd-4a10-9522-fbecc78d6f3e>
- <https://www.levels.fyi/companies/palantir/salaries/software-engineer>
- <https://www.levels.fyi/internships/>
- <https://leetcode.com/discuss/post/7568192/palantir-phone-screen-software-engineeri-xwzl/>
- <https://leetcode.com/discuss/post/8334276/palantir-software-engineer-interview-exp-qa09/>
- <https://leetcode.com/discuss/post/8514764/palantir-on-sitedc-for-fdse-internship-b-qb8m/>
- <https://prachub.com/companies/palantir>
- <https://prachub.com/interview-experiences/palantir-intern-software-engineer-interview-experience-three-part-fde-oa-building-a-grocery-coupon-system-watch-the-rounding>
- <https://prachub.com/interview-experiences/palantir-software-engineer-interview-experience-graph-code-review-dijkstra-and-a-multithreaded-system-monitor>

> **Watch out:** Official pages (careers, students FAQ, Getting Hired guides, Lever postings) were fetched on 2026-10-04 by extracting their embedded page data. blog.palantir.com (Medium) returns 403 to scripts from our IP; its 2020 'Interviewing at Palantir' post was confirmed via a Wayback Machine snapshot from Feb 2026. The Getting Hired guides are older evergreen pages (mention whiteboards and landlines) but remain live. Round mix varies by team, office and Dev vs Delta; not every loop has all of decomposition, learning, re-engineering, coding and design. OA platform is consistently HackerRank in 2025 to 2026 reports, but content varies. Visa: the students FAQ says Palantir is 'supportive of visas', yet many US SWE intern and new grad postings list security clearance eligibility (which in practice requires US citizenship); treat each posting separately. New in 2025 to 2026: Meritocracy Fellowship for graduating high school seniors (Fall 2026 cohort; 2027 applications 'opening soon') and 'Year at Palantir' full-year internships. Palantir Launch page still shows 2025 dates, so its 2026 to 2027 status is unknown. Levels.fyi has only 9 recent averaged points for the single level, so comp ranges are approximate. The network-delay-time mapping is a practice equivalent for Dijkstra, not the exact prompt. Fact-check pass 2026-10-04: students URL updated to its redirect target /careers/students-and-early-talent; values_url now points at the SWE New Grad (New York) Lever posting that lists the SWE principles, because life-at-palantir lists no values; interviewing.io's re-engineering page literally says '500-100 lines' (a typo), so the profile now says 'a few hundred lines' instead of '500 to 1000'; the claim that repeat questions come 'with modified constraints' was unsupported and was replaced; intern locations and Year at Palantir postings confirmed via the Lever postings API; Levels.fyi intern rates confirmed from levels.fyi/js/internshipData.json.

Next: [All companies](index.md)
