# Databricks interview guide

Data and AI platform (Spark, Delta Lake, lakehouse). Interviews are LeetCode medium-hard plus concurrency, low-level design and practical twists like IP/CIDR parsing. Updated October 2026.

| | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | Software Engineering Intern (12 or 16 weeks; SF, Mountain View, Bellevue, Amsterdam, Berlin, Belgrade, Bangalore) |
| **New grad level** | L3 (entry level per Levels.fyi, 0 to 1 yrs) |
| **0 to 3 years** | L3 for 0 to 2 yrs (Levels.fyi median 0 YOE); L4 (Software Engineer IV) for roughly 2 to 5 yrs (Levels.fyi median 2 YOE, average 3.2; e.g. a 3 YOE Microsoft engineer weighing an India L4 offer, Jul 2025). L5 is Senior Software Engineer. |
| **Online assessment** | CodeSignal when used (proctored, camera on); many 2025 to 2026 intern and NG candidates skipped the OA entirely : 3 questions of increasing difficulty (Netherlands, Jan 2025); second question often a matrix operation; one candidate reports a limit of 3 CodeSignal tests in 6 months |
| **Coding rounds** | NG: 1 phone screen plus 2 onsite coding (algorithm plus implementation). Intern: 2 technical. L4: phone screen plus 2 to 3 coding-type rounds including system programming. |
| **Behavioral** | Databricks culture principles: Customer Obsessed, Raise the Bar, Truth Seeking, First Principles, Bias for Action, Company First. Assessed in a Cross-Functional/Hiring Manager interview with structured competencies. |
| **Timeline** | Official: two to three months end to end, varies by role and region; feedback aimed within 48 hours of the final interview (interview-prep FAQ). University applications typically open in August on academic calendars and are reviewed on a rolling basis (official). interviewing.io says the process can take up to 8 weeks. Jugal's Substack notes Databricks posts internships early, often July to August. Official engineering PDF order: recruiter screen, technical screen, team matching (internal), full panel, hiring committee (internal), references, offer. Intern loops can finish in about 3 weeks; NG onsite rounds often scheduled back to back within a month. |
| **New grad pay** | Levels.fyi (US, page updated Oct 4 2026): L3 entry median total comp about $271K (base about $146K, stock about $88.7K/yr, bonus plus sign-on about $36.4K); L4 about $419K. Levels.fyi lists two RSU schedules: 40/30/20/10 vesting monthly over 4 years (front-loaded) and 25% per year. India L3 median about INR 67.5 lakh (base about INR 37 lakh). LeetCode offer posts for 2025 India campus grads: INR 36 lakh base, 10% bonus, about INR 23 lakh/yr RSUs, INR 5 lakh joining bonus, INR 75K relocation, total CTC about INR 68.35 lakh; a Feb 2025 fresher post lists 1,500 RSUs over 4 years at a private-company valuation ('no IPO'). |
| **Official links** | [Careers](https://www.databricks.com/company/careers), [Students](https://www.databricks.com/company/careers/university-recruiting), [Official interview prep](https://www.databricks.com/company/careers/interview-prep), [Values](https://www.databricks.com/company/careers/culture) |

## Interview process

### New grad

1. **Application.** University roles typically open in August, reviewed on a rolling basis (official FAQ). India new grads also hired through on-campus drives (IIIT Hyderabad, Tier-1 campuses, 2024 to 2025 season).
2. **Recruiter screen (about 20 to 30 min).** Resume walkthrough, 'what role are you looking for', previous internship impact (Bellevue NG, Sep 2025).
3. **Technical phone screen (60 min).** One algorithmic problem, often multi-part with new constraints added, on CoderPad with runnable code. Screens reported across levels: IP firewall with CIDR rules (L4), multi-modal transport grid, Find All Anagrams (graduate). One 2026 candidate was offered a choice between an algorithm screen and an architecture screen.
4. **Virtual onsite (4 interviews).** Typical NG loop: 2 coding (one algorithm, one implementation or OOP-style with clean code), 1 low-level system design, 1 behavioral with a hiring manager (Belgrade NG Jan 2025; US NG Oct 2025). All virtual on Google Meet unless told otherwise.
5. **Team matching, hiring committee, references.** The official engineering prep guide (written for experienced back-end roles) lists team matching as an internal step between the technical screen and the full panel, and a hiring committee after the panel, then references and offer. Candidates also report team-matching calls with several hiring managers after the onsite (SDE-II, Feb 2026), and interviewing.io says about a quarter of candidates switch teams after the onsite.
6. **India on-campus variant.** Resume shortlist, two technical rounds (tree traversal cost problem, server selection DP), hiring manager round (IIIT Hyderabad 2025 grad, interviews and offer Nov 2024, posted Feb 2025).

### Intern

1. **Online assessment (sometimes).** CodeSignal (US Aug 2025; Netherlands Jan 2025: proctored with camera on, 3 questions of increasing difficulty). Many 2025 intern candidates had no OA at all (Singapore: 'no online assessment this year'; Mountain View: went straight to interviews).
2. **Recruiter screen.** Resume, why Databricks, what you want from an internship.
3. **Two technical interviews (1 hour each, often back to back).** One algorithm question (graphs, BFS, topological sort, sliding window, LC medium to hard) and one implementation or OOP design coding question (LazyArray, N x N tic-tac-toe with variable win length). Some loops add a third technical round (US, Sep 2025) or an optional follow-up interview (US, Aug 2025); one SF loop (Nov 2025) added system design and debugging rounds.
4. **Hiring manager behavioral (about 45 min).** Deep dive into a past internship or project, negative feedback you received, what you know about Databricks and its values. Then offer. Whole process about 3 weeks in one Mountain View report.

### With 1 to 3 years of experience

For L4 (about 3+ yrs) the official engineering guide lists: recruiter screen (30 min), technical screen (1 hour), team matching, then a full panel of 4 to 6 one-hour interviews chosen from Coding (production-quality code with tests), Algorithms, System Programming (multithreading, synchronization, I/O, caching, in pseudocode), Architecture (end-to-end design in CoderPad Draw), Domain Deep Dive, and Cross-Functional/Hiring Manager, followed by hiring committee and references. Database roles add Storage, Stream Processing and a 'Database Papers' seminar round. Reported L4 to SDE-II rounds: CIDR firewall, Fibonacci tree path, tic-tac-toe design, CachedFile range-cache LLD, thread-safe EventWriter, plus multiple team-matching calls with hiring managers.

## Online assessment

- **Platform:** CodeSignal when used (proctored, camera on); many 2025 to 2026 intern and NG candidates skipped the OA entirely
- **Format:** 3 questions of increasing difficulty (Netherlands, Jan 2025); second question often a matrix operation; one candidate reports a limit of 3 CodeSignal tests in 6 months
- **Notes:** Inconsistent by region and season. Older Databricks OA questions (2023 to 2024) were LC hard style (partition array into K subarrays by max cost; prefix removal with at most K distinct characters).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** NG: 1 phone screen plus 2 onsite coding (algorithm plus implementation). Intern: 2 technical. L4: phone screen plus 2 to 3 coding-type rounds including system programming.
- **Style:** LeetCode medium to hard with Databricks twists: bit manipulation (IPv4, CIDR masks), custom recursive structures (Fibonacci trees), graph search with extra state (transport modes), iterator and snapshot design, game-board design, concurrency. Follow-ups add constraints mid-interview.
- **Environment:** CoderPad (official prep links CoderPad sandbox), code is run; Google Meet video. Language agnostic but fluency expected.
- **Graded on:** Official university page: 'Brush up on data structures and algorithms. We're evaluating code quality and cleanliness.' Official engineering rubric: production-quality code, clean organization, comprehensive tests and edge cases, Big-O analysis, data structure choice, clear articulation of approach. Some interviewers ask for complexity before you code.
- **Reported focus topics:** graphs: BFS, Dijkstra with extra state, topological sort, trees and custom recursive structures, bit manipulation (IPv4, CIDR masks), design-style coding: iterators, snapshots, game boards, concurrency and multithreading (locks, thread pools, durable writes), caching, chunking and file I/O, strings: sliding window, run-length encoding, dynamic programming, low-level design and clean OOP, storage and distributed systems for architecture rounds

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **10** distinct problems tagged to Databricks in the last 6 months (1 in the last 30 days, 3 in the last 3 months, 31 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 80%, Hard 10%, Easy 10%

**Most tagged topics (share of problems):** Array 50%, Design 50%, String 40%, Hash Table 30%, Binary Search 20%, Queue 20%, Data Stream 20%, Matrix 20%, Sliding Window 10%, Bit Manipulation 10%

> **Watch out:** Databricks has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) | Medium | 30 days | Array, Binary Search, Design, Queue |
| 2 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Medium | 3 months | Hash Table, String, Sliding Window |
| 3 | [IP to CIDR](https://leetcode.com/problems/ip-to-cidr/) | Medium | 3 months | String, Bit Manipulation |
| 4 | [Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/) | Medium | 6 months | Array, Hash Table, Design, Matrix |
| 5 | [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | Medium | 6 months | String, Tree, Depth-First Search, Binary Tree |
| 6 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | 6 months | Hash Table, String, Binary Search, Design |
| 7 | [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | Hard | 6 months | Array, Breadth-First Search, Matrix |
| 8 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | 6 months | Array, Dynamic Programming |
| 9 | [RLE Iterator](https://leetcode.com/problems/rle-iterator/) | Medium | 6 months | Array, Design, Counting, Iterator |
| 10 | [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) | Easy | 6 months | Design, Queue, Data Stream |

### Signature problems

Problems where Databricks accounts for a large share of all recent tags across companies. These are the most Databricks-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) | Medium | 30 days | Array, Binary Search, Design, Queue |
| 2 | [IP to CIDR](https://leetcode.com/problems/ip-to-cidr/) | Medium | 3 months | String, Bit Manipulation |
| 3 | [RLE Iterator](https://leetcode.com/problems/rle-iterator/) | Medium | 6 months | Array, Design, Counting, Iterator |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| IP firewall: ALLOW/DENY rules with IPs and CIDR blocks, decide if an IP is allowed and which rule matched (related: IP to CIDR) | L4 technical phone screen | 2025-06 | [post](https://leetcode.com/discuss/post/6889797/databricks-interview-experience-l4-offer-mibw/) |
| IP firewall with CIDR rules (repeat of the same screen question) | L4 technical phone screen | 2025-02 | [post](https://leetcode.com/discuss/post/6479010/databricks-tech-phonescreen-l4-experienc-upj3/) |
| Fibonacci tree shortest path: return U/L/R moves between two pre-order-numbered nodes in a tree of order n | SDE-II technical screen | 2026-02 | [post](https://leetcode.com/discuss/post/7614788/databricks-sde-ii-interview-experience-b-6n8v/) |
| [Design tic-tac-toe on an n x m board with k in a row, follow-up: random AI player (closest LC: Design Tic-Tac-Toe, LC Premium)](https://leetcode.com/problems/design-tic-tac-toe/) | SDE-II onsite DSA | 2026-02 | [post](https://leetcode.com/discuss/post/7614788/databricks-sde-ii-interview-experience-b-6n8v/) |
| [Tic-tac-toe on an N x N board with a variable win line length (closest LC: Design Tic-Tac-Toe, LC Premium)](https://leetcode.com/problems/design-tic-tac-toe/) | Software Engineering Intern (US) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/databricks/experiences/software-engineering-intern-united-states-september-1-2025-no-offer-neutral-c5a917c0/) |
| CachedFile: serve arbitrary byte ranges of a remote file via getFileSize/fetch while minimizing network calls (chunking, thread pool) | SDE-II onsite LLD | 2026-02 | [post](https://leetcode.com/discuss/post/7614788/databricks-sde-ii-interview-experience-b-6n8v/) |
| Multi-modal transport grid: fastest path S to D using one mode (tie-break by cost); follow-up allows switching with a time penalty | Technical phone screen / L4 onsite | 2025-02 | [post](https://leetcode.com/discuss/post/6411153/databricks-technical-phone-screen-bfs-by-3txb/) |
| Snapshot set: add/remove/contains with an iterator that sees the set as of when iteration started | L4 phone screen | 2025-06 | [post](https://leetcode.com/discuss/post/6809493/databricks-l4-phone-screening-question-b-p476/) |
| Thread-safe EventWriter: many threads append buffers to one file, return only after data is durable (fsync batching) | L4 onsite LLD and concurrency | 2025-06 | [post](https://leetcode.com/discuss/post/6889797/databricks-interview-experience-l4-offer-mibw/) |
| Count encrypted and unencrypted files in a directory tree; follow-up: minimum time to encrypt all using file vs directory APIs | L4 technical phone screen | 2025-11 | [post](https://leetcode.com/discuss/post/7318054/technical-phone-screen-l4-interview-by-a-pdmr/) |
| Run-length plus bit-packing encoder and decoder | Senior engineer onsite coding | 2026-04 | [post](https://leetcode.com/discuss/post/7736707/brutal-system-design-round-databricks-se-kfng/) |
| [Key-value map with put/get plus measure_put_load and measure_get_load averaged over a 5-minute window (poster compares to Time Based Key-Value Store)](https://leetcode.com/problems/time-based-key-value-store/) | SDE machine coding round | 2025-03 | [post](https://leetcode.com/discuss/post/6525129/databricks-interview-sde-by-anonymous_us-gl2r/) |
| [Find All Anagrams in a String (candidate says similar to LC 438); asked for complexity before coding](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Graduate Software Engineer technical (North Holland) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/databricks/experiences/software-engineer-graduate-october-1-2025-declined-offer-negative-1772a5ef/) |
| Topological sort over a graph of jobs | Software Engineer Intern (Amsterdam) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/databricks/experiences/software-engineer-intern-amsterdam-october-28-2025-accepted-offer-positive-cd02b72d/) |
| Build a LazyArray class supporting two methods (OOP implementation) | Software Engineering Intern (US) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/databricks/experiences/software-engineer-internship-united-states-september-1-2025-no-offer-positive-43f9df2d/) |
| [Minimum cost to visit all target nodes in an undirected tree from the root and return; follow-up: start anywhere](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/) | Software Engineer New Grad (Bengaluru, on-campus) | 2024-11 | [post](https://leetcode.com/discuss/post/6459213/databricks-swe-bengaluru-nov-2024-offer-fhuqp/) |
| Server selection: choosing server i also covers the next i servers; minimum cost to cover all (O(n log n) then O(n)) | Software Engineer New Grad (Bengaluru, on-campus) | 2024-11 | [post](https://leetcode.com/discuss/post/6459213/databricks-swe-bengaluru-nov-2024-offer-fhuqp/) |
| Randomly merge n connected graphs into one so every ordering is equally likely | Technical phone screen (San Francisco) | 2025-01 | [post](https://leetcode.com/discuss/post/6331345/databricks-technical-phone-screen-san-fr-dvnw/) |
| System design: credit card processing for an online game platform (refunds, credits, items), deep dive on concurrent transactions | Senior engineer onsite system design | 2026-04 | [post](https://leetcode.com/discuss/post/7736707/brutal-system-design-round-databricks-se-kfng/) |
| Frontend: design an employee rating system; Backend: OOP problem for a game | Full Stack Engineer Intern (US) | 2025-02 | [post](https://www.jointaro.com/interviews/companies/databricks/experiences/full-stack-engineer-intern-united-states-february-14-2025-no-offer-positive-b877bd88/) |

## Beyond LeetCode

System Programming round (concurrency, buffering, caching, I/O, pseudocode allowed). LLD or machine-coding rounds (CachedFile over a remote StorageClient, thread-safe EventWriter with fsync durability, Map with load-measurement methods). Architecture round in CoderPad Draw. Domain Deep Dive conversation. Database Papers seminar for database roles (open book). Front-end loops build a data-fetching app in CoderPad and include a product design round.

## System design

Appears even for new grads: NG loops include one low-level system design round (Belgrade Jan 2025) or a system design round (US Oct 2025), and some intern loops added a system design or debugging round (SF Nov 2025). Flavor is LLD and systems: caching file ranges, thread-safe writers, snapshot structures. L4+ gets an Architecture round (scalability, storage, replication, consistency, failure handling) in CoderPad Draw (official PDF) and a System Programming round on concurrency; interviewing.io notes some interviewers run design in Google Docs. One 2026 candidate was offered an architecture round instead of an algorithm round for the phone screen.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Databricks culture principles: Customer Obsessed, Raise the Bar, Truth Seeking, First Principles, Bias for Action, Company First. Assessed in a Cross-Functional/Hiring Manager interview with structured competencies. ([official page](https://www.databricks.com/company/careers/culture))

**What they look for:**

- Technical depth when explaining your own projects without company jargon
- Career trajectory and clear motivation for Databricks
- How you handle negative feedback and disagreement
- Cross-team collaboration and leadership at your level
- Data-driven, first-principles decision making
- Bias for action and ownership

**Questions to prepare:**

- Why Databricks?
- How do you deal with disagreement?
- What negative feedback have you received?
- What do you know about Databricks and the company values?
- Describe your strengths and weaknesses.
- Tell me about a time you demonstrated leadership.
- How did your work at your previous internship end, and what was the result?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Do the Databricks-tagged LeetCode list; several 2025 intern and NG candidates said tagged questions repeat, and the CIDR firewall and transport-grid problems recur across years.
- Get fluent with IPv4 to 32-bit integer conversion and CIDR masks before your screen; multiple candidates lost the screen on bit representation, not logic.
- Prepare concurrency fundamentals (mutexes, condition variables, producer-consumer, batching writes, thread pools); the official guide includes a System Programming round.
- Write tests and handle edge cases in CoderPad without being asked; the official university page says SWE interviews evaluate code quality and cleanliness, and the engineering rubric grades production-quality code and test coverage.
- State time and space complexity before coding; some interviewers ask for it up front.
- For the hiring manager round, prepare a technical deep dive of your last internship plus a story about negative feedback, and learn the six culture principles.
- Apply in July to August when university roles open and highlight ML work: the current university page says ideal intern candidates know deep learning and PyTorch.
- If you have seen a question before, say so; one 2025 screen candidate was rejected with an 'integrity' reason after solving a known problem quickly.

## 4-week plan for Databricks

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Databricks culture principles: Customer Obsessed, Raise the Bar, Truth Seeking, First Principles, Bias for Action, Company First. Assessed in a Cross-Functional/Hiring Manager interview with structured competencies. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.databricks.com/company/careers>
- <https://www.databricks.com/company/careers/university-recruiting>
- <https://www.databricks.com/company/careers/interview-prep>
- <https://www.databricks.com/sites/default/files/2025-04/engineering-careers-site-interview-prep-april-2025-002.pdf>
- <https://www.databricks.com/company/careers/culture>
- <https://www.databricks.com/company/careers/open-positions>
- <https://interviewing.io/databricks-interview-questions>
- <https://www.hellointerview.com/learn/system-design/problem-breakdowns/payment-system>
- <https://www.levels.fyi/companies/databricks/salaries/software-engineer>
- <https://www.levels.fyi/companies/databricks/salaries/software-engineer/levels/l3>
- <https://www.levels.fyi/companies/databricks/salaries/software-engineer/locations/india>
- <https://leetcode.com/discuss/post/7614788/databricks-sde-ii-interview-experience-b-6n8v/>
- <https://leetcode.com/discuss/post/7736707/brutal-system-design-round-databricks-se-kfng/>
- <https://leetcode.com/discuss/post/7928239/databricks-phone-screen-algo-or-architec-w1fi/>
- <https://leetcode.com/discuss/post/7318054/technical-phone-screen-l4-interview-by-a-pdmr/>
- <https://leetcode.com/discuss/post/7377977/databricks-screening-sse-by-anonymous_us-80uq/>
- <https://leetcode.com/discuss/post/7293675/databricks-new-grad-final-round-by-anony-shqo/>
- <https://leetcode.com/discuss/post/6889797/databricks-interview-experience-l4-offer-mibw/>
- <https://leetcode.com/discuss/post/6809493/databricks-l4-phone-screening-question-b-p476/>
- <https://leetcode.com/discuss/post/6813648/shocking-experience-with-databricks-by-a-gd1h/>
- <https://leetcode.com/discuss/post/6525129/databricks-interview-sde-by-anonymous_us-gl2r/>
- <https://leetcode.com/discuss/post/6479010/databricks-tech-phonescreen-l4-experienc-upj3/>
- <https://leetcode.com/discuss/post/6459213/databricks-swe-bengaluru-nov-2024-offer-fhuqp/>
- <https://leetcode.com/discuss/post/6411153/databricks-technical-phone-screen-bfs-by-3txb/>
- <https://leetcode.com/discuss/post/6366787/databricks-swe-fresher-bangalore-by-anon-7soe/>

> **Watch out:** All URLs above were loaded and checked on 2026-10-04 (LeetCode Discuss via LeetCode's public GraphQL API because HTML is behind Cloudflare; jointaro pages fetched directly; the official engineering prep PDF was downloaded and read; the PDF link had itm_* tracking params, stripped here). Fact-check corrections (2026-10-04): the official PDF puts team matching BEFORE the full panel (hiring committee after), the earlier text said both came after; L4 years adjusted to Levels.fyi data (median 2 YOE); the vesting note now reflects both schedules Levels.fyi lists; the unsupported '2-hour combined block' intern format was removed; the IIIT Hyderabad campus questions are from Nov 2024 interviews. OA use is inconsistent: CodeSignal reported for some US and EU intern applicants in 2025, but several 2025 intern loops had none. The official PDF is for experienced roles; new grad loops are shorter (about 4 onsite rounds). Glassdoor reviews surfaced in search could not be fetched (403) and were not used. Prepfully's Databricks guide is dated 2023 and was not relied on. Several 2026 LeetCode posts link to paid question banks (offerretriever), treat as lower confidence. Jugal's Substack: Databricks posts internships early (July to August) and is expanding intern headcount in the AI wave (how-to-prepare-for-faang-ai-engineer, Jul 2026); Databricks invests in Forward Deployed Engineers (hidden-ai-career post); Summer 2027 PM intern link listed (494 internships post); Databricks GenAI Engineer Associate cert covered in the certifications post. Comp is crowd-sourced; RSU value depends on Databricks' private valuation or listing status (an April 2026 LeetCode post called an IPO 'looming'; IPO status not verified here because web search was unavailable during this check).

Next: [All companies](index.md)
