# Snowflake interview guide

Cloud data platform (the 'AI Data Cloud'). Known for hard HackerRank OAs, LeetCode medium-hard rounds and database or infrastructure flavored design. Updated October 2026.

| Snowflake at a glance | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | Software Engineer Intern (North America cohorts in Spring, Summer and Fall; EMEA and APAC year-round, 12 to 16 weeks) |
| **New grad level** | IC1 (entry level per Levels.fyi); Snowflake does not post roles labeled new grad, so match by years of experience in the job description |
| **0 to 3 years** | IC1 (Software Engineer I) and IC2 (Software Engineer II); IC3 is Senior Software Engineer. Levels.fyi medians: IC1 about 1 YOE, IC2 about 5 YOE (small US sample), IC3 about 9 YOE. Titles vary by team and country (a Jun 2026 LeetCode post reports a Pune IC3 data-engineering offer at about 3.5 YOE), so confirm the level with your recruiter. |
| **Online assessment** | HackerRank (most reports); some proctored or self-recorded variants; Aced also lists CodeSignal : 2 to 3 coding problems in about 90 to 120 minutes; frequently LC hard (DP, backtracking, graphs, trees); some variants add SQL puzzles (Canada SWE, Jul 2025) or ML questions (ML intern, Jul 2025). |
| **Coding rounds** | Intern: 2 technical after the OA. NG and IC2: 2 to 3 screens plus 1 to 2 coding rounds in the panel. |
| **Behavioral** | Snowflake values: Put Customers First, Integrity Always, Think Big, Be Excellent, Get It Done, Own It, Make Each Other The Best, Embrace Each Other's Differences |
| **Timeline** | Official engineering process: four stages in about two to four weeks, but candidates report up to 2 months when team matching is slow. University: applications reviewed year-round as roles post; Snowflake aims to respond in 2 to 3 weeks. North America internships run in Spring, Summer and Fall cohorts; EMEA and APAC are year-round. A hiring committee step is mentioned by one Summer/Fall 2025 intern candidate, followed by team matching. |
| **New grad pay** | Levels.fyi (US, page updated Oct 4 2026): IC1 entry median total comp about $236K (base about $168K, stock about $60K/yr, bonus about $8K); IC2 about $357K. RSUs vest over 4 years, 25% per year (Levels.fyi lists a 1-year cliff then quarterly, quarterly from the start, and a 1-year cliff then monthly). India data on Levels.fyi starts at IC2 with a median of about INR 27.7 lakh (base about INR 19 lakh), but from only 2 samples. A Jun 2026 LeetCode post describes a Pune IC3 data-engineering offer (about 3.5 YOE) with no RSUs, comparable to a Goldman Sachs SDE2 offer of about INR 35 lakh base. Intern pay was not found on a verifiable source. |
| **Official links** | [Careers](https://careers.snowflake.com/us/en), [Students](https://careers.snowflake.com/us/en/university), [Official interview prep](https://careers.snowflake.com/us/en/gethired), [Values](https://www.snowflake.com/en/company/overview/about-snowflake/) |

## Interview process

### New grad

1. **Application.** Snowflake says employment regulations stop it posting roles specifically for recent graduates; apply to roles whose required years of experience fit (official internship FAQ). No reply in 30 days usually means no match.
2. **Initial screen (30 min).** Recruiter or hiring manager call on background and skills; your first meeting may be with your future manager (official how-we-hire page).
3. **Technical screens (60 min each, usually 2 to 3).** Live coding on CoderPad or HackerRank over Zoom. Toronto NG (Jul 2025): LC easy (strings, hashmap), LC medium-hard (BFS, topological sort) and a React frontend screen. Other early-career screens: two 1-hour coding rounds, LC medium with follow-ups.
4. **Panel (3 to 5 interviews of 60 min).** Official: three to five 60-minute interviews (technical, expertise, system design, behavioral and collaboration); a 30-minute tech talk may be added by level. Official how-we-hire page: you may be asked to attend at least one interview in person. Official AI blog (Jan 20 2026): coding interviews are done without any coding or AI assistants, and one coding interview is conducted in person.
5. **Hiring manager call and team match.** Toronto NG (Jul 2025) ended the loop with a hiring manager call. Several 2025 candidates report waiting for team match after the panel; one 2025 US Software Engineer offer took 2 months, mostly waiting for a team.
6. **Decision.** Team debriefs within a few days of the panel; reference and background checks before onboarding (official).

### Intern

1. **Online assessment (sent automatically after applying).** Official internship FAQ: technical roles start with a coding assessment. Reports: HackerRank, up to about 2 hours, 2 to 3 problems that are often LC hard (DP, backtracking, graphs, tree manipulation). Some variants are recorded or proctored with no live interviewer (Berlin intern, Mar 2025). ML intern OA (Poland, Jul 2025) had 1 algorithm plus 2 ML questions. A Canada full-time SWE OA (Jul 2025) had 2 algorithm questions plus SQL logic puzzles in 90 minutes.
2. **Recruiter call.** Mostly logistics, little behavioral (US intern, Mar 2025).
3. **Two technical interviews (45 to 60 min each).** LC medium to hard (graphs, trees, trapping rain water, merge k lists), sometimes a distributed systems or concurrency question; interviewers probe why you chose an approach and which inputs favor each alternative; you may be asked to write test cases.
4. **Hiring manager or team-match calls.** One or more calls with team managers, often more recruiting than evaluation; showing interest in several areas helps (US intern, Mar 2025). Then offer. If rejected you must wait for the next seasonal program to reapply (official FAQ).

### With 1 to 3 years of experience

For IC2 and IC3 (about 1 to 5 yrs): recruiter (and optional hiring manager) call, then two 1-hour coding screens or a 2-hour phone screen (sometimes 1 coding plus 1 system design), then a panel of 3 to 5 one-hour rounds: coding with a Snowflake twist (database internals), an expertise or project deep dive, system design that recruiters describe as infrastructure style rather than product style (key-value stores with versioning and time travel, real-time analytics with high availability, memory usage tracking), behavioral and collaboration. IC3+ may give a 30-minute tech talk. interviewing.io (Dec 2025) notes some candidates now go through a team matching process. Aced reports an emerging AI screening interview step; not confirmed elsewhere.

## Online assessment

- **Platform:** HackerRank (most reports); some proctored or self-recorded variants; Aced also lists CodeSignal
- **Format:** 2 to 3 coding problems in about 90 to 120 minutes; frequently LC hard (DP, backtracking, graphs, trees); some variants add SQL puzzles (Canada SWE, Jul 2025) or ML questions (ML intern, Jul 2025).
- **Notes:** Widely called one of the hardest intern OAs. Copy-paste and tab switching are restricted. Official policy (Jan 2026) bans AI on any assessment, even though one 2025 Berlin report claimed otherwise.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Intern: 2 technical after the OA. NG and IC2: 2 to 3 screens plus 1 to 2 coding rounds in the panel.
- **Style:** LeetCode medium to hard, plus problems with a database twist (constraint checks, parent-array forests, log streams, distributed tree counting by message passing). Follow-ups push scale (large sorted files, chunking).
- **Environment:** CoderPad or HackerRank over Zoom; at least one coding interview in person since Jan 2026; no AI or coding assistants.
- **Graded on:** Correct, efficient code; reasoning about why an approach fits and its trade-offs; complexity analysis; test cases; edge cases; communication.
- **Reported focus topics:** graphs: BFS, topological sort, DFS on weighted relations, trees: height, pruning, deletion problems, dynamic programming (hard), backtracking and tries (Word Search II), sliding window on strings, heaps and k-way merge, database internals: keys, constraints, sorted data, large files, distributed systems basics: message passing, availability, versioning, concurrency, SQL for data-oriented roles

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **30** distinct problems tagged to Snowflake in the last 6 months (2 in the last 30 days, 13 in the last 3 months, 104 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 67%, Hard 20%, Easy 13%

**Most tagged topics (share of problems):** Array 47%, Depth-First Search 40%, String 27%, Hash Table 23%, Breadth-First Search 23%, Graph Theory 20%, Tree 17%, Design 17%, Dynamic Programming 13%, Topological Sort 13%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/) | Hard | 30 days | Array, Dynamic Programming, Graph Theory, Topological Sort |
| 2 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | 30 days | Array, Two Pointers, Dynamic Programming, Stack |
| 3 | [Throne Inheritance](https://leetcode.com/problems/throne-inheritance/) | Medium | 3 months | Hash Table, Tree, Depth-First Search, Design |
| 4 | [Happy Number](https://leetcode.com/problems/happy-number/) | Easy | 3 months | Hash Table, Math, Two Pointers, Floyd's Cycle Finding Algorithm |
| 5 | [Count Vowel Substrings of a String](https://leetcode.com/problems/count-vowel-substrings-of-a-string/) | Easy | 3 months | Hash Table, String |
| 6 | [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) | Hard | 3 months | Hash Table, String, Design, Trie |
| 7 | [Calculate Amount Paid in Taxes](https://leetcode.com/problems/calculate-amount-paid-in-taxes/) | Easy | 3 months | Array, Simulation |
| 8 | [Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance/) | Easy | 3 months | Array, String |
| 9 | [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | Medium | 3 months | String, Tree, Depth-First Search, Binary Tree |
| 10 | [Parallel Courses](https://leetcode.com/problems/parallel-courses/) | Medium | 3 months | Graph Theory, Topological Sort, Directed Acyclic Graph |
| 11 | [Most Frequent IDs](https://leetcode.com/problems/most-frequent-ids/) | Medium | 3 months | Array, Hash Table, Heap (Priority Queue), Ordered Set |
| 12 | [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/) | Medium | 3 months | Array, Divide and Conquer, Tree, Matrix |
| 13 | [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Union-Find, Graph Theory |
| 14 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 15 | [Painting the Walls](https://leetcode.com/problems/painting-the-walls/) | Hard | 6 months | Array, Dynamic Programming |
| 16 | [Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/) | Medium | 6 months | Tree, Depth-First Search, Binary Tree |
| 17 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Medium | 6 months | Hash Table, String, Sliding Window |
| 18 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | Hard | 6 months | Array, Binary Search, Dynamic Programming, Sorting |
| 19 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 20 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 21 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Sorting |
| 22 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | 6 months | String, Depth-First Search, Design, Trie |
| 23 | [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | Medium | 6 months | Array, Greedy, Sorting, Heap (Priority Queue) |
| 24 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | Medium | 6 months | String, Stack |
| 25 | [Web Crawler](https://leetcode.com/problems/web-crawler/) | Medium | 6 months | String, Depth-First Search, Breadth-First Search, Interactive |
| 26 | [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) | Medium | 6 months | Array, Linked List, Design, Queue |
| 27 | [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Union-Find, Graph Theory |
| 28 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | Hard | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 29 | [Count Nodes Equal to Average of Subtree](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/) | Medium | 6 months | Tree, Depth-First Search, Binary Tree |
| 30 | [Design Browser History](https://leetcode.com/problems/design-browser-history/) | Medium | 6 months | Array, Linked List, Stack, Design |

### Signature problems

Problems where Snowflake accounts for a large share of all recent tags across companies. These are the most Snowflake-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/) | Hard | 30 days | Array, Dynamic Programming, Graph Theory, Topological Sort |
| 2 | [Throne Inheritance](https://leetcode.com/problems/throne-inheritance/) | Medium | 3 months | Hash Table, Tree, Depth-First Search, Design |
| 3 | [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) | Hard | 3 months | Hash Table, String, Design, Trie |
| 4 | [Calculate Amount Paid in Taxes](https://leetcode.com/problems/calculate-amount-paid-in-taxes/) | Easy | 3 months | Array, Simulation |
| 5 | [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | Medium | 3 months | String, Tree, Depth-First Search, Binary Tree |
| 6 | [Parallel Courses](https://leetcode.com/problems/parallel-courses/) | Medium | 3 months | Graph Theory, Topological Sort, Directed Acyclic Graph |
| 7 | [Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance/) | Easy | 3 months | Array, String |
| 8 | [Most Frequent IDs](https://leetcode.com/problems/most-frequent-ids/) | Medium | 3 months | Array, Hash Table, Heap (Priority Queue), Ordered Set |
| 9 | [Painting the Walls](https://leetcode.com/problems/painting-the-walls/) | Hard | 6 months | Array, Dynamic Programming |
| 10 | [Boundary of Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/) | Medium | 6 months | Tree, Depth-First Search, Binary Tree |
| 11 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | 6 months | String, Depth-First Search, Design, Trie |
| 12 | [Web Crawler](https://leetcode.com/problems/web-crawler/) | Medium | 6 months | String, Depth-First Search, Breadth-First Search, Interactive |
| 13 | [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) | Medium | 6 months | Array, Linked List, Design, Queue |
| 14 | [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Union-Find, Graph Theory |
| 15 | [Count Nodes Equal to Average of Subtree](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/) | Medium | 6 months | Tree, Depth-First Search, Binary Tree |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Phone screen (1 of 2) | 2025-05 | [post](https://leetcode.com/discuss/post/6799130/snowflake-2-phone-screening-interviews-b-etg0/) |
| [Word Search II](https://leetcode.com/problems/word-search-ii/) | Phone screen (2 of 2) | 2025-05 | [post](https://leetcode.com/discuss/post/6799130/snowflake-2-phone-screening-interviews-b-etg0/) |
| [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Software Engineer Intern (New York) | 2025-03 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-engineerinternship-new-york-ny-march-22-2025-declined-offer-positive-19cdc02e/) |
| [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Software Engineer Intern (New York) | 2025-03 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-engineerinternship-new-york-ny-march-22-2025-declined-offer-positive-19cdc02e/) |
| Minimize deletions so a tree has height at most k, tie-break by deleting deeper nodes | Software Engineer Intern interview | 2025-12 | [post](https://leetcode.com/discuss/post/7452152/snowflake-intern-interview-technical-que-zqq3/) |
| Minimize deletions to target tree height (binary tree, maximize sum of depths of deleted nodes) | Coding interview (role not stated) | 2025-11 | [post](https://leetcode.com/discuss/post/7327204/tree-question-snowflake-by-gavieeen-mboq/) |
| OA: tree manipulation and splitting to minimize height | SWE Intern OA (Bellevue) | 2025-10 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/swe-intern-bellevue-wa-october-1-2025-no-offer-positive-b02a687c/) |
| OA: one LC hard DP, one vowel-substring sliding window, one hard graph problem | Software Intern OA (US) | 2025-09 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-intern-united-states-september-1-2025-no-offer-neutral-aad776fa/) |
| SET card game: validate 3 cards; follow-ups for N attributes and for finding a valid set among N cards | Screening | 2025-09 | [post](https://leetcode.com/discuss/post/7206810/snowflake-screening-by-anonymous_user-6u3n/) |
| Per product: number of unique customers and total revenue from products and sales lists (hash map plus set) | Software Engineer Intern | 2026-04 | [post](https://leetcode.com/discuss/post/7754090/snowflake-interview-question-intern-prod-g9mu/) |
| Remove a node from a forest stored as a parent-index array, keeping invariants | Backend Engineer | 2026-06 | [post](https://leetcode.com/discuss/post/8354847/snowflake-interview-experience-backend-e-32sz/) |
| Count nodes of a distributed N-ary tree where each node is a process communicating by async messages; print at root | Backend Engineer | 2026-06 | [post](https://leetcode.com/discuss/post/8354847/snowflake-interview-experience-backend-e-32sz/) |
| Key constraint check: given referenced rows and keys to insert, detect violations; follow-ups for sorted rows and very large files | Backend Engineer technical screen | 2025-05 | [post](https://leetcode.com/discuss/post/6794302/snowflake-coding-screening-weird-questio-ud43/) |
| [Currency exchange rates via graph DFS (Evaluate Division pattern)](https://leetcode.com/problems/evaluate-division/) | IC3 coding screen (Seattle) | 2025-04 | [post](https://leetcode.com/discuss/post/6726727/snowflake-ic3-seattle-by-anonymous_user-4i9n/) |
| Filter a stream of log entries, dropping DELETE operations; production scaling follow-ups | IC3 coding screen (Seattle) | 2025-04 | [post](https://leetcode.com/discuss/post/6726727/snowflake-ic3-seattle-by-anonymous_user-4i9n/) |
| [Variant of Trapping Rain Water (day 2); IP/CIDR prefix problem (day 1)](https://leetcode.com/problems/trapping-rain-water/) | Mid-level SWE assessment | 2025-11 | [post](https://leetcode.com/discuss/post/7330752/snowflake-day-2-task-by-stanii-owpq/) |
| [Parallel Courses III (LC hard) asked in a frontend loop](https://leetcode.com/problems/parallel-courses-iii/) | Software Engineer Front End (Menlo Park) | 2025-04 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-engineer-front-end-menlo-park-ca-april-1-2025-no-offer-negative-0ca8f0f3/) |
| Merge temperature and rain APIs in React or vanilla JS when the rain API fails every other call and is slow | Frontend phone screen | 2025-07 | [post](https://leetcode.com/discuss/post/6968724/snowflake-frontend-phone-screen-by-scala-7t02/) |
| Optimize a CI test pipeline's end-to-end time; connect-four canPlayWin; design a key-value store with global versioning and time travel | SDE full loop | 2025-07 | [post](https://leetcode.com/discuss/post/6930095/snowflake-sde-5-round-interview-experien-ytqe/) |
| Design a system that supports real-time analytics with high availability | Software Engineer (Canada) | 2025-07 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-engineer-canada-july-25-2025-no-offer-positive-7cf8eeb3/) |
| Design a system tracking how much memory (storage) each user has written, like Google Drive | Software Engineer (San Francisco) | 2025-02 | [post](https://www.jointaro.com/interviews/companies/snowflake/experiences/software-engineer-san-francisco-ca-february-11-2025-no-offer-positive-15c681b5/) |

## Beyond LeetCode

Expertise round (deep dive into your domain and past impact); infrastructure-style system design; 30-minute tech talk for some levels; React UI coding screens for frontend roles (merge async APIs where one fails intermittently); SQL plus algorithm hybrid OAs for some teams; ML OA and transformer-architecture interview for ML interns; take-home assignment reported for the SnowConvert AI team (Mar 2026).

## System design

Usually absent for interns, though one 2025 intern reported a distributed systems and reliability question. For IC2 and above, expect an infrastructure or data-systems design round (database internals, storage, versioning and time travel, high availability) rather than consumer product design. Frontend roles may get UI design plus a surprise LC hard.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Snowflake values: Put Customers First, Integrity Always, Think Big, Be Excellent, Get It Done, Own It, Make Each Other The Best, Embrace Each Other's Differences ([official page](https://www.snowflake.com/en/company/overview/about-snowflake/))

**What they look for:**

- Ownership of a project you can explain end to end (most proud project deep dive)
- Impact measured with data and results
- Collaboration with difficult or new teammates
- Integrity, including honest use of AI in the process
- Genuine interest in Snowflake's product and teams

**Questions to prepare:**

- Tell me about a cool or difficult project you took on recently.
- Tell me about a time you worked with difficult people.
- What is your ideal work environment?
- Why are you interested in working at Snowflake?
- Are you interested in working here?
- Walk me through your most proud project.
- Tell me about a time you made a mistake.

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Train for the OA with timed LC hards (DP, graphs, tree manipulation); intern candidates repeatedly call it the hardest OA they took.
- Plan for one coding interview in person and no AI or coding assistants anywhere in the process (official policy, Jan 2026).
- Learn database basics (primary and foreign keys, indexes, sorted scans, MVCC and time travel) because coding and design rounds carry a database twist.
- Search roles by required years of experience, not 'new grad'; Snowflake says it cannot post roles labeled for recent graduates.
- When you pick an approach, be ready to explain which inputs favor it over the alternative; interviewers grade the why.
- Write a brute-force solution quickly and leave time for the optimization follow-up; several rejections came from running out of time on follow-ups.
- In hiring manager and team calls, show interest in several areas; team match can be the slowest step.
- Apply early for each seasonal cohort; if rejected for an internship you must wait for the next season to reapply.

## 4-week plan for Snowflake

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Snowflake values: Put Customers First, Integrity Always, Think Big, Be Excellent, Get It Done, Own It, Make Each Other The Best, Embrace Each Other's Differences round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://careers.snowflake.com/us/en>
- <https://careers.snowflake.com/us/en/university>
- <https://careers.snowflake.com/us/en/gethired>
- <https://careers.snowflake.com/us/en/blogarticle/ai-cheat-sheet-how-and-when-to-use-ai-in-your-snowflake-interview>
- <https://careers.snowflake.com/us/en/blogarticle/navigating-the-data-slopes-applying-and-interviewing-at-snowflake>
- <https://careers.snowflake.com/us/en/blogarticle/snowflake-internship-faqs>
- <https://www.snowflake.com/en/company/overview/about-snowflake/>
- <https://interviewing.io/snowflake-interview-questions>
- <https://www.aced.io/guides/snowflake-software-engineer-interview>
- <https://www.levels.fyi/companies/snowflake/salaries/software-engineer>
- <https://www.levels.fyi/companies/snowflake/salaries/software-engineer/levels/ic1>
- <https://www.levels.fyi/companies/snowflake/salaries/software-engineer/locations/india>
- <https://leetcode.com/discuss/post/8354847/snowflake-interview-experience-backend-e-32sz/>
- <https://leetcode.com/discuss/post/8339519/snowflake-ic2-upcoming-round-for-snowcon-m1om/>
- <https://leetcode.com/discuss/post/8329603/help-me-choose-an-offer-sde2-at-goldman-t3mgk/>
- <https://leetcode.com/discuss/post/7754090/snowflake-interview-question-intern-prod-g9mu/>
- <https://leetcode.com/discuss/post/7661818/snowconvert-ai-take-home-assignment-by-m-fyt4/>
- <https://leetcode.com/discuss/post/7646514/are-leetcode-tagged-questions-enough-for-93nu/>
- <https://leetcode.com/discuss/post/7485328/snowflake-senior-software-engineer-prep-2vk8p/>
- <https://leetcode.com/discuss/post/7452152/snowflake-intern-interview-technical-que-zqq3/>
- <https://leetcode.com/discuss/post/7335584/snowflake-onsite-loop-ic2-by-srcharug-3qlx/>
- <https://leetcode.com/discuss/post/7330752/snowflake-day-2-task-by-stanii-owpq/>
- <https://leetcode.com/discuss/post/7327204/tree-question-snowflake-by-gavieeen-mboq/>
- <https://leetcode.com/discuss/post/7206810/snowflake-screening-by-anonymous_user-6u3n/>
- <https://leetcode.com/discuss/post/7196984/snowflake-system-design-round-by-mihikaa-fydt/>

> **Watch out:** All URLs above were loaded and checked on 2026-10-04 (LeetCode Discuss via LeetCode's public GraphQL API; jointaro pages fetched directly; Snowflake careers blog text extracted from page data, publish dates read from page metadata: AI blog 2026-01-20, data-slopes blog 2025-01-01, internship FAQ 2024-08-06). Fact-check corrections (2026-10-04): the 90-minute algorithm plus SQL OA was a full-time Canada SWE report, not an intern one; the 'shape-pattern aptitude test' claim came from an unrelated, uncertain teaser on a jointaro page and was removed; the 2-month team-match wait was a 2025 US Software Engineer offer, not a confirmed new grad; the unsupported claim that 1 to 3 yr loops are usually IC2 was replaced with Levels.fyi medians. Biggest recent change: the Jan 20 2026 official blog says coding interviews must be done without AI or coding assistants, AI is banned on assessments and take-homes, and one coding interview is in person. Level for new grads (IC1 vs IC2) is not documented officially; Levels.fyi lists IC1 as entry level. OA difficulty and format vary a lot by team (core/database, infrastructure automation, AI/ML, frontend). Aced's 'AI screening interview' step (it names HackerRank's AI interviewer) and its CodeSignal mention were not confirmed by candidate reports. Team matching and HC timing come from individual reports and an interviewing.io Dec 2025 edit. Glassdoor reviews could not be fetched (403) and were not used. One 2025 SDE loop post (6930095) links to a paid question bank, so treat its details as lower confidence. Jugal's Substack lists a Snowflake AI Research Scientist New Grad role (Agents and RL, Bellevue) in the Aug 2026 internships post; there is no Snowflake-specific interview post.

Next: [All companies](index.md)
