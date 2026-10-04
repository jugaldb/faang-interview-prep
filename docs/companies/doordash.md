# DoorDash interview guide

Local-commerce delivery marketplace (DoorDash, Wolt, Deliveroo); interviews are practical: runnable LeetCode-style coding, an interactive API-style coding round, debugging, and values chats. Updated October 2026.

| | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | Software Engineer Intern, 12 weeks, summer only (May or June cohort), in-person in NYC, SF, Sunnyvale, LA or Seattle; Toronto has a separate posting. |
| **New grad level** | E3 (Software Engineer I, Entry-Level). |
| **0 to 3 years** | E3 for 0 to about 2 yrs; E4 (Software Engineer II) for roughly 2 to 5 yrs. E5 is Senior. |
| **Online assessment** | HackerRank : Reported for interns (2025 cycle) and Toronto new grads (2026): a few LeetCode medium-hard problems. Experienced candidates get a live HackerRank CodePair phone screen instead of an OA. |
| **Coding rounds** | Intern and new grad: 2 coding rounds (1 LeetCode-style DSA, 1 Interactive Coding Round or codebase round) plus a values chat. Experienced: 1 phone screen + Code Craft + Debugging in the onsite. |
| **Behavioral** | DoorDash Global Operating Principles: 14 principles shared across DoorDash, Deliveroo and Wolt (image labels on the page include Customer Obsessed Not Competitor-Focused, Operate at the Lowest Level of Detail, Bias for Action, Truth Seek, And not Either/Or, 1% Better Every Day, Choose Optimism and Have a Plan, One Team One Fight, Earn Trust, Debate then Commit, Beginner's Mindset, Be Differentiated, Build Global Act Local, Play the Long Game). Answer in STAR. |
| **Timeline** | Official: applications for summer internships and new grad roles open several months ahead, usually in the fall; internships run May or June to August (12 weeks). Reported: phone screen results in 1 to 2 days; onsite can be split over two days a week apart; new grad and intern loops happen in one 'super day'; interviewing.io estimates 3 to 4 weeks overall. A 1-year cool-down after rejection was reported for an E4 phone screen (2025). Interviews pause over late-December holidays. |
| **New grad pay** | Levels.fyi (US, read 2026-10-04): E3 average total comp $188,143/yr (base $147,364, stock $32,189/yr, bonus $8,591; 27 data points in the last 12 months); Aug to Sep 2026 E3 offers cluster at $145k base + about $35k stock/yr = about $180k to $205k. E4 average $283,737. Official SWE I posting: national base range $107,400 to $158,000 plus equity. Intern posting lists the same annualized base range. |
| **Official links** | [Careers](https://careersatdoordash.com/), [Students](https://careersatdoordash.com/university-careers/), [Values](https://careersatdoordash.com/mission-and-values/) |

## Interview process

### New grad

1. **Application.** Applications open in the fall. 2026 to 2027 posting: 'Software Engineer I, Entry-Level (Graduation Date: Fall 2026 to Summer 2027) - US', 5 locations, requires a BS/MS graduating in that window, at least two prior SWE internships or equivalent, and no more than two years of full-time experience. Toronto has its own entry-level posting.
2. **Resume review, sometimes an OA.** Official FAQ goes straight from resume review to interviews. Some candidates report a HackerRank OA first (SWE New Grad Toronto, 2026: LC medium-hard).
3. **Virtual interview day (official: 2 coding rounds + Engineering Values chat).** Reported for SWE I, NYC, Aug 2026: Interactive Coding Round (60 min, coding in a realistic context such as an API or class-based task), LeetCode-style DSA round (60 min), Engineering Values interview with an engineering manager (30 min), all on one day. Recruiters send prep guides with sample questions.
4. **Offer and placement.** Entry-level hires sit in an office hub (SF HQ, Seattle, NYC, LA) and join a one-year New Grad program with trainings and an early careers community.

### Intern

1. **Application.** Summer 2027 posting live as of Oct 2026: BS/MS students graduating Fall 2027 to Summer 2028 with no more than 2 years full-time work, available for a May or June 2027 start. Must be authorized to work in the US; F-1 students eligible via CPT; J-1 not supported. Location preference chosen in the application.
2. **Online assessment (often).** HackerRank OA reported for the 2025 intern cycle (LC medium-hard). Not every 2026 report mentions an OA.
3. **Super day: 2 coding rounds + values.** Fall 2026 reports: 1-hour LeetCode-style round (medium/easy, e.g. sliding window), 1-hour Interactive Coding Round or codebase round (read and extend a long existing codebase), 30-min behavioral with an engineering manager using STAR on DoorDash values. 2025 cycle reports: two DSA rounds (graphs/DFS, 2-sum style; sometimes 2 x 30 min) plus behavioral. Code is run and tested.
4. **Offer and conversion.** Program is conversion-focused but full-time offers depend on intern performance (official FAQ). Relocation support for interns and new grads; interns get housing assistance.

### With 1 to 3 years of experience

E4 (about 2 to 5 yrs): recruiter call (30 min), sometimes a hiring manager screen, then a 60-min technical phone screen on HackerRank CodePair where you must run code (DoorDash-tagged LC medium/hard, e.g. Closest DashMart BFS, binary tree max path sum between 'live' nodes, search suggestions, LRU variant) or a Code Craft screen. Virtual onsite of 4 rounds, often split over 2 days: Code Craft (practical service or API work, e.g. Dasher payout endpoint calling a mocked upstream; since late 2025 an AI-enabled version where you bring a local IDE with AI such as Cursor, Copilot or Claude Code and DoorDash evaluates prompting), Debugging / Bug Bash (fix logic bugs and tests in a round-robin load balancer or dasher assignment service; no AI), System Design + Domain Knowledge (project deep dive plus a design such as a food item review app or donations site), and a hiring manager / leadership round. An E3 experienced-hire report (Aug 2025) also had Code Craft, Debugging, HM and System Design. India (Pune) SDE-2: 5 rounds incl. an LLD + DSA elimination round.

## Online assessment

- **Platform:** HackerRank
- **Format:** Reported for interns (2025 cycle) and Toronto new grads (2026): a few LeetCode medium-hard problems. Experienced candidates get a live HackerRank CodePair phone screen instead of an OA.
- **Notes:** Many US SWE I candidates report no OA, consistent with the official FAQ (resume review then virtual interviews). Treat the OA as possible, not guaranteed.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Intern and new grad: 2 coding rounds (1 LeetCode-style DSA, 1 Interactive Coding Round or codebase round) plus a values chat. Experienced: 1 phone screen + Code Craft + Debugging in the onsite.
- **Style:** Practical. LeetCode medium (sometimes hard) reworded into DoorDash domain stories (dashers, DashMarts, menus, merchants, orders). The Interactive Coding Round and Code Craft are not puzzle problems: model data with classes, call or mock an upstream service, aggregate responses, handle edge cases; follow-ups on latency, retries and tests.
- **Environment:** HackerRank CodePair or CoderPad with code execution; you are expected to run your code and pass provided tests. AI-enabled Code Craft (experienced onsite, since late 2025): your own local editor with an AI assistant, submit one file. Debugging round: no AI.
- **Graded on:** Working code that passes tests, speed (finish with time for follow-ups), clean class design, edge cases, test coverage, communication, and for AI Code Craft the quality of prompting and validation.
- **Reported focus topics:** BFS on grids, multi-source BFS (DashMart / walls and gates variants), Trees: path sums, infection/flood time, Hash maps and LRU-style caches, Heaps and scheduling (k nearest, single-threaded CPU), Prefix search / tries, DP: LCS, knapsack-style budget problems, Practical OOP: API aggregation, mocking upstream services, payout calculations, Debugging unfamiliar code and fixing tests, System design for marketplaces (E4+)

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **7** distinct problems tagged to DoorDash in the last 6 months (0 in the last 30 days, 1 in the last 3 months, 75 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 71%, Hard 29%

**Most tagged topics (share of problems):** Array 71%, Breadth-First Search 43%, Binary Search 29%, Matrix 29%, Dynamic Programming 29%, Depth-First Search 29%, Graph Theory 29%, Topological Sort 29%, Sorting 29%, Stack 14%

> **Watch out:** DoorDash has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | Medium | 3 months | Array, Binary Search, Stack, Monotonic Stack |
| 2 | [Walls and Gates](https://leetcode.com/problems/walls-and-gates/) | Medium | 6 months | Array, Breadth-First Search, Matrix |
| 3 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Hard | 6 months | Array, Dynamic Programming, Depth-First Search, Breadth-First Search |
| 4 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | Hard | 6 months | Array, Binary Search, Dynamic Programming, Sorting |
| 5 | [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) | Medium | 6 months | Array, Sorting, Heap (Priority Queue) |
| 6 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 7 | [Design File System](https://leetcode.com/problems/design-file-system/) | Medium | 6 months | Hash Table, String, Design, Trie |

### Signature problems

Problems where DoorDash accounts for a large share of all recent tags across companies. These are the most DoorDash-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | Medium | 3 months | Array, Binary Search, Stack, Monotonic Stack |
| 2 | [Walls and Gates](https://leetcode.com/problems/walls-and-gates/) | Medium | 6 months | Array, Breadth-First Search, Matrix |
| 3 | [Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/) | Medium | 6 months | Array, Sorting, Heap (Priority Queue) |
| 4 | [Design File System](https://leetcode.com/problems/design-file-system/) | Medium | 6 months | Hash Table, String, Design, Trie |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Interactive Coding Round + LeetCode round + Engineering Values (SWE I super day format) | Software Engineer I (new grad), NYC | 2026-08 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW105419562.htm) |
| Sliding window problem in the LC round; simple Interactive Coding Round task | Software Engineer Intern, NYC (offer) | 2026-08 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW105222508.htm) |
| [Greedy problem and LRU cache in the technical screen (after an OA)](https://leetcode.com/problems/lru-cache/) | SWE New Grad, Toronto | 2026-06 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW104292214.htm) |
| Batch merchants with different time slots and IDs (interactive design round) | Software Engineer, US | 2026-08 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW105344567.htm) |
| DFS graph question and a 2-sum style question (2 x 30-min technical) | SWE Intern, US | 2025-11 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW101171471.htm) |
| [Closest DashMart: distance from query cells to the nearest DashMart on a grid with blocked roads (multi-source BFS); follow-up: DashMart serving most customers](https://leetcode.com/problems/walls-and-gates/) | SWE E4 phone screen, US | 2025-06 | [post](https://leetcode.com/discuss/post/6855674/doordash-phone-interview-by-anonymous_us-yh8b/) |
| [Two dashers: longest common ordered pickup sequence](https://leetcode.com/problems/longest-common-subsequence/) | USA tech screen | 2025-12 | [post](https://leetcode.com/discuss/post/7418588/doordash-usa-tech-screen-by-anonymous_us-zy3f/) |
| Chef orders: repeatedly remove the smallest order ID greater than both neighbors, return removal order in O(n log n) | Phone screen, US | 2025-06 | [post](https://leetcode.com/discuss/post/6855480/doordash-phone-interview-by-brian39-nm4k/) |
| Code Craft: Dasher payout endpoint (POST payout by dasherId, $0.3/min base, multi-order rate, mocked upstream deliveries); follow-up: high upstream latency | Mid-level SWE onsite | 2025-11 | [post](https://leetcode.com/discuss/post/7353783/usa-doordash-code-craft-round-by-mathrul-ch15/) |
| AI Code Craft: build a workflow engine (DAG of nodes like IS_LATE, FULL_REFUND) for self-help support tickets against a mock DoorDash API | SWE onsite, US | 2025-12 | [post](https://leetcode.com/discuss/post/7401147/usa-doordash-onsite-ai-codecraft-by-anon-bods/) |
| Debugging: fix logic bugs in a Dasher Assignment Service (random pick, pool map adjustment, logging stubs) | SWE onsite, US | 2025-12 | [post](https://leetcode.com/discuss/post/7392565/usa-doordash-debugging-onsite-by-anonymo-ikw9/) |
| Debugging: fix a round-robin load balancer and its tests, then implement consistent hashing | Software Engineer, Sunnyvale (offer) | 2026-02 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW104956519.htm) |
| Code Craft: bootstrap API aggregating user, address and payment (nested gift cards) from mocked services | E4 phone interview | 2025-10 | [post](https://leetcode.com/discuss/post/7260823/doordash-e4-software-engineer-interview-8cyeb/) |
| [Binary tree maximum path sum between 'live' (leaf) nodes; follow-up: live nodes anywhere, cannot pass through one](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | E4 phone screen, US | 2025-03 | [post](https://leetcode.com/discuss/post/6561083/doordash-e4-swe-phone-screen-by-matchaic-lhuv/) |
| [Restaurant search suggestions for each search word prefix (with spaces)](https://leetcode.com/problems/search-suggestions-system/) | Backend E4 phone screen, US | 2025-05 | [post](https://leetcode.com/discuss/post/6794074/doordash-phone-screen-us-backend-e4-reje-2ff6/) |
| [Dasher-to-delivery LRU cache (put/get with capacity)](https://leetcode.com/problems/lru-cache/) | E4 phone screen, US | 2025-04 | [post](https://leetcode.com/discuss/post/6605298/doordash-phone-screen-usa-e4-by-anonymou-s7yt/) |
| [Longest increasing path in a matrix (dasher framing), then return the path](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | E4 phone screen, US (pass) | 2025-05 | [post](https://leetcode.com/discuss/post/6765958/doordash-phone-screen-usa-e4-pass-by-ano-fgqg/) |
| [Next greater permutation of a number given as a string](https://leetcode.com/problems/next-greater-element-iii/) | Phone screen, US | 2025-06 | [post](https://leetcode.com/discuss/post/6837694/doordash-phonescreen-us-2025-by-anonymou-9lff/) |
| [Time to flood a tree from a start node (build adjacency map)](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | Phone screen, US | 2025-12 | [post](https://leetcode.com/discuss/post/7401058/doordash-phone-screen-and-virtual-onsite-0jow/) |
| [K nearest restaurants to a user's coordinates](https://leetcode.com/problems/k-closest-points-to-origin/) | Software Engineer, US | 2026-05 | [post](https://www.glassdoor.com/Interview/DoorDash-Interview-E813073-RVW104189499.htm) |

## Beyond LeetCode

Interactive Coding Round (new grad/intern): realistic coding such as building an API-like class. Codebase round (intern 2026): digest and extend a long existing codebase. Code Craft (experienced): build a service endpoint that aggregates or computes from mocked upstream data, now AI-enabled at the onsite. Debugging / Bug Bash: fix logic bugs, bad practices and tests in given code (round-robin load balancer, dasher assignment). System Design + Domain Knowledge project deep dive. Frontend roles: UI design round (search and filter restaurant listing). Staff: incident case study.

## System design

Not in intern or E3 new grad loops (official: 2 coding + values). From E4: a 60-min system design paired with a domain knowledge project deep dive. Reported prompts 2025 to 2026: review app for food items, review and reward system, donations website for a 3-day charity event (100M in donations), real-time order tracking, job scheduler, devbox system, Instagram-like stories in a food app. Code Craft acts as the LLD round.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** DoorDash Global Operating Principles: 14 principles shared across DoorDash, Deliveroo and Wolt (image labels on the page include Customer Obsessed Not Competitor-Focused, Operate at the Lowest Level of Detail, Bias for Action, Truth Seek, And not Either/Or, 1% Better Every Day, Choose Optimism and Have a Plan, One Team One Fight, Earn Trust, Debate then Commit, Beginner's Mindset, Be Differentiated, Build Global Act Local, Play the Long Game). Answer in STAR. ([official page](https://careersatdoordash.com/mission-and-values/))

**What they look for:**

- Customer obsession across consumers, merchants and Dashers
- Bias for action and speed of execution, with a hypothesis and an input metric
- Breaking problems into the lowest-level input drivers
- Seeking disconfirming evidence and learning from mistakes
- Team over self, earning trust, disagree then commit
- Ownership with measurable impact; project deep dives probe your exact role, stakeholders and challenges

**Questions to prepare:**

- What are your strengths and weaknesses when you are working with the team? (SWE I, Aug 2026)
- Why did you choose your major? (SWE I, Aug 2026)
- Tell me about a time you learned from others. (SWE I, Aug 2026)
- In the project, did anything not go as planned? (SWE I, Aug 2026)
- Why are you interested in DoorDash? (SWE Intern, 2026)
- Tell me about a time you received feedback. (E3, 2025)
- Tell me about a bug in production and how you handled it. (E3, 2025)
- Tell me about a time you had a disagreement with a superior and how you navigated it. (SWE, 2025)
- Describe a time when you were given a project and couldn't meet the deadline. (SDE Intern, 2025)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice in HackerRank CodePair until running code is automatic; candidates lost time building TreeNode inputs and fixing syntax.
- Solve the main problem with 10 to 15 minutes left; E4 candidates who solved it with 5 minutes left were still rejected for missing follow-ups.
- For the Interactive Coding Round and Code Craft, use small classes, mock the upstream call in a function, and test from main(); be ready to discuss upstream latency and retries.
- Grind DoorDash-tagged LeetCode: the Closest DashMart / walls-and-gates BFS and LRU variants appear across many 2025 reports.
- Experienced candidates: configure an AI coding assistant in your own IDE before the onsite Code Craft; the Debugging round bans AI, so practice reading code cold.
- Prepare a 2-minute 'why DoorDash' and STAR stories tied to the Operating Principles; the values chat is only 30 minutes.
- Apply in early fall: internships are summer-only (May or June cohorts) and new grad roles open at the same time; Jugal's Aug 2026 Summer 2027 list already included DoorDash Software Engineer I.
- International students: interns must be US work-authorized; F-1 CPT works, J-1 does not.

## 4-week plan for DoorDash

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the DoorDash Global Operating Principles: 14 principles shared across DoorDash, Deliveroo and Wolt (image labels on the page include Customer Obsessed Not Competitor-Focused, Operate at the Lowest Level of Detail, Bias for Action, Truth Seek, And not Either/Or, 1% Better Every Day, Choose Optimism and Have a Plan, One Team One Fight, Earn Trust, Debate then Commit, Beginner's Mindset, Be Differentiated, Build Global Act Local, Play the Long Game). Answer in STAR. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).

> **Watch out:** Strong: official early-career format (2 coding rounds + Engineering Values chat), internship rules and dates, SWE I pay range, and many consistent 2025 to 2026 candidate reports. Medium: whether an OA is sent depends on region and cycle (reported for interns in 2025 and Toronto new grads in 2026, absent in several US SWE I reports). The AI-enabled Code Craft is reported for experienced onsites from late 2025; no report shows AI in intern/new grad rounds. Operating Principle names were read from image labels and the text on the values page (carousel), so exact wording may differ slightly. interviewing.io still says AI use is prohibited, which conflicts with Dec 2025 Code Craft reports. India (Pune) and London (Deliveroo/DoorDash) loops differ from US. LeetCode discuss content confirmed via LeetCode's GraphQL API (pages block scripts); Glassdoor permalinks confirmed in a browser session. Reddit and Blind not covered because the web search budget ran out.

Next: [All companies](index.md)
