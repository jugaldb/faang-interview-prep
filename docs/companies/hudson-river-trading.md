# Hudson River Trading interview guide

Algorithmic trading firm writing low-latency C++ and Python. Interviews test fundamentals deeply: OS, C++ internals, data structure internals, and implementation-heavy coding. Updated October 2026.

| Hudson River Trading at a glance | |
|---|---|
| **Category** | Finance and quant |
| **Intern level** | Software Engineering Internship (C++ or Python), Summer 2027: posting lists Austin, Chicago, London, New York, Singapore (the Student Opportunities page names NYC, London, Singapore, Chicago); late May to mid-August, 'fully in-person'; Student Opportunities labels summer internships 'For 2028 Grads'. Early programs: Inside HRT (first/second-year STEM students, NYC, spring, 3 days), Explore HRT (2028 grads interested in quant trading, NYC/London/Singapore, spring), WiTTI winter internship (2 to 4 weeks in January, second-year students from underrepresented backgrounds). |
| **New grad level** | Software Engineer (C++ or Python), 2027 Grads. Levels.fyi labels entry level L1 'Junior Software Engineer'. |
| **0 to 3 years** | Software Engineer. Levels.fyi: L1 'Junior Software Engineer' typically 0 to 1 yrs, L2 'Software Engineer' typically 2 to 5 yrs. Experienced postings (for example Software Engineer, C++) ask for 1+ years. |
| **Online assessment** | HackerRank or Codility (official 2021 blog); recent candidates do not always name the platform. : Timed take-home coding test. 2025 intern reports: 4 problems, LeetCode easy to medium, many hidden tests. Language restrictions depend on the role. |
| **Coding rounds** | 1 OA + 1 to 2 phone screens + a multi-round onsite (3 to 4 rounds for interns). |
| **Behavioral** | No named framework. Team fit is assessed at the onsite; communication is scored in every technical round. |
| **Timeline** | Official: allow up to 2 weeks for application review. Intern and new grad postings go up in summer: the Summer 2027 SWE intern posting was already live on Aug 20, 2026 (Jugal's Summer 2027 internship roundup, https://jugaldb.substack.com/p/494-summer-2027-internships-are-already), and both the 2027 grad and Summer 2027 intern postings were updated on HRT's Greenhouse board on Oct 1, 2026. Jugal's HFT post: HRT, Jane Street, Citadel and IMC open as early as June to August, and many roles close by September to October. No hiring committee publicly described. |
| **New grad pay** | Official (HRT Greenhouse postings, updated Oct 1, 2026): 2027 grads Software Engineer 'Base salary for US is $300,000' plus sign-on and discretionary performance bonus. Summer 2027 SWE intern weekly base: New York $5,800, Singapore SGD 7,650, London GBP 4,350, plus signing bonus, paid housing and meals. Experienced Software Engineer (C++, 1+ yrs) base range $200,000 to $300,000. Levels.fyi (US, updated Oct 4, 2026, 123 submissions): L1 'Junior Software Engineer' median total comp $467K (base $240K, bonus $219K, stock about $8.3K); overall median $500K. |
| **Official links** | [Careers](https://www.hudsonrivertrading.com/careers/), [Students](https://www.hudsonrivertrading.com/student-opportunities/), [Official interview prep](https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/), [Values](https://www.hudsonrivertrading.com/life-at-hrt/) |

## Interview process

### New grad

1. **Application.** Apply to ONE posting only; official: 'We do not allow multiple applications' and you will be considered for all open positions. Choose C++ or Python track. Official: 'please allow up to 2 weeks for your application to be reviewed.'
2. **Coding test (OA).** Official (Student Opportunities page): 'Technical interviews at HRT usually consist of a coding test, 1-2 technical phone screens, and an onsite multi-round final interview.' 2021 official blog: test 'typically conducted over Hackerrank or Codility', books/internet allowed as a language reference, sample tests 'aren't comprehensive'. 2025 intern reports: about 4 LeetCode-style easy/medium problems with many test cases; another said the OA was LeetCode mediums.
3. **Technical phone screens (1 to 2).** 2021 official blog: rounds are 'usually a 45-minute discussion' on systems knowledge, data structures, or problem solving, plus programming skills for the team. Jul 2025 NY offer: one 1-hour technical phone screen covering floating point, bit manipulation, DSA and basic OS (Union-Find question). Nov 2025 NY offer: phone screen, then a LeetCode-medium round (binary search).
4. **Onsite final.** Multi-round onsite; HRT 'much prefer[s] at least some of the onsite interviews to be in person' and onsites are 'generally composed of coding and debugging rounds, technical design discussions, and team fit' (official Oct 2025 post). Graded on idiomatic modern code, systems-level understanding (memory, I/O, process management) and problem-solving method (2021 blog). Nov 2025 offer: another LeetCode medium plus some system design questions.

### Intern

1. **Application.** One posting only. Summer 2027 SWE internship listed on HRT's Greenhouse board (updated Oct 1, 2026).
2. **OA.** Coding test; 2025 intern reports: 4 LeetCode easy/medium problems, many test cases, time pressure from coverage rather than difficulty. A Singapore 2025 report (Indian campus pool) said CGPA and JEE Advanced rank weighed more than OA score; single anecdote.
3. **Phone screens (1 to 2).** Round 1: general C++ (or Python) programming. Round 2: C++ fundamentals and 'how computers work under the hood' (Canada, Sep 2025). Some candidates get one LeetCode-medium coding round and stop there.
4. **Superday / final.** 3 to 4 rounds, about 75 min each, 'very dense, with very rapid follow-ups' (Oct 2025 offer): algorithms on balanced BSTs, k-d tree internals, operating systems, networking protocols and reliability. Others report three live coding rounds with heavy implementation (games).

### With 1 to 3 years of experience

Experienced loops start with exploratory Zoom calls or go straight to technical screens, then an onsite with coding, debugging, design and team fit (official Oct 2025 post). Design questions are systems-flavored (for example routing packets between a hub and node servers, Apr 2025). C++ roles expect advanced C++, Linux, processor performance and networking knowledge (official C++ posting, 1+ years, base $200,000 to $300,000).

## Online assessment

- **Platform:** HackerRank or Codility (official 2021 blog); recent candidates do not always name the platform.
- **Format:** Timed take-home coding test. 2025 intern reports: 4 problems, LeetCode easy to medium, many hidden tests. Language restrictions depend on the role.
- **Notes:** Official blog: you may use books and the internet as a language reference, test your own edge cases, and sample tests are not comprehensive. AI tools: every 2026 posting says 'Use of AI tools by an applicant during interviews or assessments is strictly prohibited, unless otherwise instructed or agreed upon' and HRT may end the interview, disqualify you, or rescind offers. HRT's Oct 2025 post lists cheating with LLMs on earlier assessment stages as a common reason candidates fail.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 OA + 1 to 2 phone screens + a multi-round onsite (3 to 4 rounds for interns).
- **Style:** Fundamentals-first. Official Oct 2025: 'We do our best to stray away from "burst of insight" leet-code style questions' and 'Our ideal would be that a strong programmer from a competitive firm would ace our technical interview with no studying.' Expect LeetCode-medium algorithms, implementation-heavy builds (tic-tac-toe-like game, 'Lines and Squares'), and deep follow-ups on how things work (C++ object lifetime, function calls, BBST rebuilds, k-d trees).
- **Environment:** Phone/video with a shared editor, then onsite (at least partly in person preferred). Choose C++ or Python (TypeScript/Python for full-stack roles, official Oct 2025); the 2021 blog says some roles let you pick any language. Interviewers may show unfamiliar code to test reading ability, with grading adjusted for language familiarity.
- **Graded on:** Programming ability (idiomatic, modern syntax, resource use), systems-level understanding, problem-solving method, and equally communication: taking hints, teachability, explaining with context (official 2021 blog). Top failure reasons (official 2025): shallow fundamentals, communication, poor listening, avoiding real work, arrogance, indifference, cheating.
- **Reported focus topics:** C++ internals: object lifetime, static/const, constructors, memory layout, what the compiler emits (or Python internals if on the Python track), Operating systems: processes, memory, I/O, what happens in a function call, Networking protocols and reliability, Data structure internals: balanced BSTs, k-d trees, hash tables, Union-find, binary search, bit manipulation, floating point, Implementation-heavy coding: grid and board games, Low-latency and distributed systems design (experienced)

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **2** distinct problems tagged to Hudson River Trading in the last 6 months (1 in the last 30 days, 1 in the last 3 months, 16 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Hard 50%, Medium 50%

**Most tagged topics (share of problems):** Array 100%, Binary Search 50%, Binary Indexed Tree 50%, Segment Tree 50%, Ordered Set 50%, Hash Table 50%, Design 50%, Simulation 50%

> **Watch out:** Hudson River Trading has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Block Placement Queries](https://leetcode.com/problems/block-placement-queries/) | Hard | 30 days | Array, Binary Search, Binary Indexed Tree, Segment Tree |
| 2 | [Design Memory Allocator](https://leetcode.com/problems/design-memory-allocator/) | Medium | 6 months | Array, Hash Table, Design, Simulation |

### Signature problems

Problems where Hudson River Trading accounts for a large share of all recent tags across companies. These are the most Hudson River Trading-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Block Placement Queries](https://leetcode.com/problems/block-placement-queries/) | Hard | 30 days | Array, Binary Search, Binary Indexed Tree, Segment Tree |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Describe object lifetime for static and const variables in function scope and global scope | C++ SWE Intern, New York | 2025-09 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/c-software-engineer-intern-new-york-ny-september-1-2025-no-offer-positive-7430a883) |
| How does a function work under the hood? | SWE Intern, Canada (phone screen 2) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-canada-september-1-2025-no-offer-positive-7035af2a) |
| Build a game in C++ under time pressure (candidate called it 'Lines and Squares' and forgot the exact name; likely dots and boxes) | SWE Intern (location not stated) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-september-1-2025-no-offer-neutral-88a68274) |
| Write a program for a tic-tac-toe-like game | SWE (location not stated; coding interview before a CS fundamentals round) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-october-15-2025-no-offer-neutral-bd6da5f3) |
| Balanced BST: use it, traverse it, rebuild it, then reason about internals (candidate: walking a subtree is O(K + n log n) even if random access to all nodes is K log n) | SWE Intern, US (offer) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-united-states-october-13-2025-accepted-offer-positive-ab3e79e2) |
| k-d tree internals (algorithms round) | SWE Intern, US (offer) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-united-states-october-13-2025-accepted-offer-positive-ab3e79e2) |
| Operating systems round; networking protocols and reliability round (75 min each) | SWE Intern, US (offer) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-united-states-october-13-2025-accepted-offer-positive-ab3e79e2) |
| Basic application of Union-Find; plus floating point, bit manipulation and basic OS questions | SWE, New York (offer) | 2025-07 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-new-york-ny-july-1-2025-accepted-offer-positive-01f53671) |
| Binary search problem (LeetCode medium); onsite added more medium coding and system design | SWE, New York (offer) | 2025-11 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-new-york-new-york-november-7-2025-declined-offer-positive-5465b02e) |
| Design a system to route network packets between one hub and multiple node servers | SWE, US (final round) | 2025-04 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-united-states-april-1-2025-no-offer-negative-2a2ca5aa) |
| OA: four LeetCode-style easy/medium problems with many test cases (no specific problems named) | SWE Intern, US | 2025-09 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/swe-intern-united-states-september-18-2025-no-offer-positive-d4d9712b) |
| First-round coding interview at LeetCode-medium level after the OA | SWE Intern (location not stated) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-intern-october-22-2025-no-offer-neutral-f995d3d8) |

## Beyond LeetCode

CS fundamentals interviews (OS, networking protocols and reliability, C++ language and compiler behavior), data structure internals (rebuild a balanced BST, k-d tree internals), debugging exercises, reading unfamiliar code, implementation-heavy game builds, and floating point / bit manipulation questions. Algorithm Developer (quant) roles use separate math and modeling interviews.

## System design

New grads and interns: systems fundamentals rounds (OS, networking, memory) rather than classic web-scale HLD; some new grad onsites include a design discussion (Nov 2025 offer). Experienced: technical design discussion in the onsite, low-latency and distributed systems flavor.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** No named framework. Team fit is assessed at the onsite; communication is scored in every technical round. ([official page](https://www.hudsonrivertrading.com/life-at-hrt/))

**What they look for:**

- Collaboration: 'Do you take hints well? Do you have an openness to a different approach?' (official 2021 blog)
- Teachability: applying feedback from earlier in the interview (official 2021 blog)
- Over-communication when thinking, changing approach, or unsure (official 2021 blog)
- Honesty and integrity, including saying when you have seen a problem before (official 2021 blog)
- Passion for the work and humility (official 2025 post lists indifference and arrogance as failure reasons)
- Values on Life at HRT: Automation & Efficiency, Collaboration, Code of Ethics, Diversity & Inclusion, Make it Better, Togetherness

**Questions to prepare:**

- Why are you interested in working here? (SWE intern, Mar 2025)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Apply to exactly one posting and pick the C++ or Python track you can defend at depth; HRT considers you for other roles automatically.
- Choose C++ only if you can explain object lifetime, static/const behavior, and what a function call does in memory. A 2025 intern said: 'Basics, basics, basics.'
- Study OS and networking even as a student. A 2025 intern with an offer had full 75-min rounds on each.
- Learn how core data structures work inside, not only their APIs: rebuild a balanced BST, explain a k-d tree, analyze traversal costs.
- In the OA, write your own edge-case tests. The official blog warns that the sample test cases do not cover everything.
- Practice building a small board game end to end in 30 to 40 minutes (tic-tac-toe, dots and boxes) and debug it fast.
- Never use AI tools in the OA or interviews. Every 2026 posting says HRT may end the interview, disqualify you, or rescind offers.
- Apply in early summer. Jugal's HFT post: quant applications open June to August and close by September to October (https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles).

## 4-week plan for Hudson River Trading

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the No named framework. Team fit is assessed at the onsite; communication is scored in every technical round. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.hudsonrivertrading.com/careers/>
- <https://www.hudsonrivertrading.com/student-opportunities/>
- <https://www.hudsonrivertrading.com/work-at-hrt/>
- <https://www.hudsonrivertrading.com/life-at-hrt/>
- <https://www.hudsonrivertrading.com/hrtbeat/>
- <https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/>
- <https://www.hudsonrivertrading.com/hrtbeat/engineering-and-interviewing-at-hrt/>
- <https://www.hudsonrivertrading.com/hrt-job/software-engineering-internship-c-or-python-summer-2027/>
- <https://www.hudsonrivertrading.com/careers/job/?gh_jid=8052122>
- <https://www.hudsonrivertrading.com/careers/job/?gh_jid=8052083>
- <https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs/8052122>
- <https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs/8052083>
- <https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs/7392942>
- <https://leetcode.com/discuss/post/7370213/hrt-swe-oa-questions-about-number-of-pro-jz8k/>
- <https://leetcode.com/discuss/post/7136600/have-my-hrt-swe-intern-cpp-interview-com-x5iy/>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/c-software-engineer-intern-new-york-ny-september-1-2025-no-offer-positive-7430a883>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-new-york-new-york-november-7-2025-declined-offer-positive-5465b02e>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-new-york-ny-july-1-2025-accepted-offer-positive-01f53671>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-united-states-october-13-2025-accepted-offer-positive-ab3e79e2>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-intern-october-22-2025-no-offer-neutral-f995d3d8>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineer-october-15-2025-no-offer-neutral-bd6da5f3>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/swe-intern-united-states-september-18-2025-no-offer-positive-d4d9712b>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-canada-september-1-2025-no-offer-positive-7035af2a>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/software-engineerinternship-september-1-2025-no-offer-neutral-88a68274>
- <https://www.jointaro.com/interviews/companies/hudson-river-trading/experiences/swe-intern-united-states-march-11-2025-no-offer-neutral-947da4ed>

> **Watch out:** Fact-checked 2026-10-04: hudsonrivertrading.com returns 403 to plain HTTP clients, so those pages were confirmed with a rendering fetch (careers, student opportunities, life at HRT, work at HRT, HRTbeat index, both interview posts, intern page, and both careers/job?gh_jid links load the expected content); pay and AI-policy lines were read from the Greenhouse API copies (boards-api.greenhouse.io/v1/boards/wehrtyou). Taro pages read from server-rendered HTML; LeetCode posts via LeetCode's GraphQL API. Corrections made: removed 'full day of back-to-back interviews' for the onsite (not stated in the Oct 2025 official post); added 'Diversity & Inclusion' to the Life at HRT values list; added the 'unless otherwise instructed' qualifier to the AI rule; 'dots and boxes' is our gloss on the candidate's 'Lines and Squares'; several Taro reports do not state a location. The main official interview guide is from Sep 15, 2021 (HackerRank or Codility OA); the Oct 2, 2025 official Q&A confirms the overall shape but not the OA platform. Candidate reports conflict on interviewer quality (two 2025 reports said interviewers misjudged C++ facts), so treat individual reports cautiously. OA problem counts vary by role and year. The JEE-rank weighting claim for Singapore internships comes from a single Apr 2025 report. The Greenhouse intern posting lists Austin, which the Student Opportunities page does not mention. LeetCode Discuss has only two 2025 HRT-tagged posts and both are unanswered questions. No verified data on HRT visa sponsorship.

Next: [All companies](index.md)
