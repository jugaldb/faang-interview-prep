# Anduril interview guide

Defense tech company building autonomous systems on Lattice OS; practical, deliberately vague coding problems and repeated 'why defense' probing. US Persons only. Updated October 2026.

| Anduril at a glance | |
|---|---|
| **Category** | High-growth tech |
| **Intern level** | 2027 Software Engineer Intern (12 weeks, paid, in person at one of 9 US offices; the early-careers page lists May to August or June to September; must return to school after). Other 2027 tracks include Flight Software Engineer Intern (Costa Mesa) and electrical, mechanical, manufacturing and industrial engineering interns. |
| **New grad level** | 2027 Early Career Software Engineer (full time, typically 0 to 2 yrs post-graduation per Anduril's FAQ); a 2027 Early Career Flight Software Engineer role also exists. Aced tags its new grad report as Entry Level / L3. |
| **0 to 3 years** | Software Engineer. Levels.fyi lowest listed SWE level is IC2 (typically 2 to 3 yrs), then IC3; Anduril does not publish its ladder. |
| **Online assessment** | HackerRank : Usually a live 60 min HackerRank phone screen with an engineer rather than a solo OA; some roles send a HackerRank take-home assignment first (Broomfield, 2026 report). |
| **Coding rounds** | 1 phone screen + 2 onsite coding rounds (new grad and SWE). |
| **Behavioral** | Anduril 'How We Work' (Autonomy, Speed, Scale, Impact, Grit) and early-career qualities (Proven Impact, Insatiable Curiosity, Unshakeable Initiative, Collaborative Drive, Unwavering Mission Alignment) |
| **Timeline** | interviewing.io and Aced: about 3 to 4 weeks, can be expedited to 2; candidates often hear back the day after each round. Individual reports range from 2 weeks (Aug 2026) to 3.5 months for a 2026 new grad loop. 2027 Early Career SWE and SWE Intern postings opened Jun 10 to 11, 2026 with rolling review. No reply means not moving forward for that cohort (official FAQ). |
| **New grad pay** | 2027 Early Career Software Engineer: base USD 112K to 149K plus equity (Greenhouse posting, Oct 2026). 2027 Software Engineer Intern: USD 40 to 55/hr (posting). Levels.fyi (US, page updated Oct 4, 2026): IC2 median total comp USD 225K (base 164K, stock 59.4K/yr, bonus 1.4K), IC3 USD 271K, IC4 Senior USD 323K; options and RSUs vest 25% in year 1 then monthly. |
| **Official links** | [Careers](https://www.anduril.com/careers), [Students](https://www.anduril.com/early-careers), [Official interview prep](https://www.anduril.com/early-careers), [Values](https://www.anduril.com/careers) |

## Interview process

### New grad

1. **Application.** Rolling review; Anduril says it receives tens of thousands of applications per cycle and only contacts candidates it moves forward with. 2027 Early Career Software Engineer posting first published Jun 11, 2026 (Atlanta, Boston, Broomfield, Colorado Springs, Costa Mesa, Fort Collins, Irvine, Reston, Seattle). Must be a U.S. Person.
2. **Recruiter call.** About 30 min. Maps your interests to domains (perception, backend infrastructure, ML infrastructure, ML) and probes why Anduril and why defense over other companies on your resume.
3. **Technical phone screen.** 60 min on HackerRank with an engineer. Multi-part problem with an intentionally vague prompt (new grad, Apr 2026: arrange two teams in rows for a photo so shorter players are in front; which team goes in front; unequal sizes; impossible cases). Ask clarifying questions before coding; a working solution matters more than early optimization.
4. **Final round.** New grad (interview Apr 2026): 3 x 60 min. Behavioral with a senior leader (full resume walkthrough, favorite past role, return offer, self-rating, what your manager would say, why Anduril is the right next step, which of his teams fits you); coding: shortest distance between two points, then points in space (3D), then obstacles; coding: design a doubly linked list (insert, delete, search at head, tail, middle) and refactor for cleaner code. General SWE onsites are 4 rounds (behavioral, 2 coding, system design) in one day, sometimes with same-day feedback (Boston, Aug 2025).
5. **Team placement and onboarding.** Anduril FAQ: early-career hires are matched to teams based on past projects, technical ability and interests. Early-career SWE hires go through an Engineering Bootcamp (separate software and hardware tracks) plus mentor and buddy programs.

### Intern

1. **Application.** 2027 Software Engineer Intern posting first published Jun 10, 2026; USD 40 to 55/hr; 12 weeks in person at one of 9 US offices. Must be a U.S. Person and returning to school after the internship. Anduril says it has no hard GPA cutoff but strong candidates typically have 3.0+.
2. **Recruiter call.** Background, interests, motivation (official FAQ).
3. **Technical and behavioral interviews.** Official FAQ: technical and behavioral interviews plus role-specific assessments that can include live coding, presentations or in-depth technical discussion. Expect the same HackerRank-style screen and practical coding as new grad; no detailed 2025 to 2026 SWE intern question reports were found in free sources.
4. **Conversion.** Anduril describes internships as often a direct pipeline to full-time roles.

### With 1 to 3 years of experience

For experienced hires, Aced reports team-specific matching happens before interviews and technical rounds test domain skills (C++, perception, ML infrastructure). 2026 reports: C++ screen reading code and explaining pointers, references, lambdas, move semantics, then DFS to find node clusters (Irvine); full-stack loop with calculator parsing, hash map internals, suffix search, typeahead with request racing and debounce, JS memory leak debugging, and a TinyURL design with sharding in the HM's system design round (rejected on that round); some roles use a HackerRank take-home first (Broomfield); a Sweden loop used a drone-simulation coding screen. interviewing.io: 1 hr phone screen and/or HM call, then 4 hr onsite (2 coding in CoderPad, system design, behavioral); L5/L6 robotics roles need deep domain knowledge.

## Online assessment

- **Platform:** HackerRank
- **Format:** Usually a live 60 min HackerRank phone screen with an engineer rather than a solo OA; some roles send a HackerRank take-home assignment first (Broomfield, 2026 report).
- **Notes:** Prompts are intentionally ambiguous and multi-phase; clarify requirements and get a functional solution before optimizing. Aced's 2026 guide says no take-home showed up in its reports, but a Broomfield 2026 candidate received a HackerRank assignment after the recruiter call.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 phone screen + 2 onsite coding rounds (new grad and SWE).
- **Style:** LeetCode medium in practical or defense context (drones, sensors, robots, maps), with evolving constraints and follow-ups on optimization. Graphs and topological sort, BFS shortest path with obstacles, geometry, implement data structures from scratch (doubly linked list, queue, deque), parsing (calculator).
- **Environment:** HackerRank for the phone screen; CoderPad or a shared editor onsite. interviewing.io reports AI use is strictly prohibited. Language choice is generally open; C++ for robotics/systems roles.
- **Graded on:** Clarifying questions, working solution, code decomposition and readability, edge cases, refactoring, and explaining trade-offs.
- **Reported focus topics:** Graphs: topological sort (Course Schedule I and II), connected components, BFS shortest path with obstacles, Grids: Number of Islands, Rotting Oranges, Shortest Path in Binary Matrix, Geometry: Maximum Number of Visible Points, Queries on Number of Points Inside a Circle, Monotonic stack (Daily Temperatures) and binary search / two pointers (Heaters), Implementing data structures from scratch (linked lists, queues, deques, hash maps), Parsing and tries (calculator, suffix search), OO design of physical systems (radar tower, sensors, drones), C++ fundamentals for robotics and systems roles, Mission alignment and ethics answers

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **22** distinct problems tagged to Anduril in the last 6 months (4 in the last 30 days, 15 in the last 3 months, 57 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 68%, Hard 18%, Easy 14%

**Most tagged topics (share of problems):** Array 50%, Breadth-First Search 41%, Depth-First Search 36%, Sorting 23%, String 23%, Matrix 18%, Stack 18%, Tree 18%, Binary Tree 18%, Two Pointers 18%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 30 days | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 2 | [Maximum Number of Visible Points](https://leetcode.com/problems/maximum-number-of-visible-points/) | Hard | 30 days | Array, Math, Geometry, Sliding Window |
| 3 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | 30 days | Hash Table, String, Counting |
| 4 | [Brace Expansion](https://leetcode.com/problems/brace-expansion/) | Medium | 30 days | String, Backtracking, Stack, Breadth-First Search |
| 5 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 6 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | 3 months | Array, Breadth-First Search, Matrix |
| 7 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | 3 months | Array, Breadth-First Search, Matrix |
| 8 | [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | Medium | 3 months | Tree, Binary Search Tree, Binary Tree |
| 9 | [Queries on Number of Points Inside a Circle](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/) | Medium | 3 months | Array, Math, Geometry |
| 10 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 11 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | Easy | 3 months | Tree, Depth-First Search, Binary Tree |
| 12 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Easy | 3 months | Stack, Tree, Depth-First Search, Binary Tree |
| 13 | [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) | Hard | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 14 | [Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/) | Medium | 3 months | Array, Stack, Monotonic Stack |
| 15 | [Push Dominoes](https://leetcode.com/problems/push-dominoes/) | Medium | 3 months | Two Pointers, String, Dynamic Programming |
| 16 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | 6 months | Array, Stack, Monotonic Stack |
| 17 | [Heaters](https://leetcode.com/problems/heaters/) | Medium | 6 months | Array, Two Pointers, Binary Search, Sorting |
| 18 | [String Compression](https://leetcode.com/problems/string-compression/) | Medium | 6 months | Two Pointers, String |
| 19 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | Hard | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 20 | [Word Break II](https://leetcode.com/problems/word-break-ii/) | Hard | 6 months | Array, Hash Table, String, Dynamic Programming |
| 21 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | 6 months | Array, Two Pointers, Greedy, Sorting |
| 22 | [Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) | Medium | 6 months | Hash Table, Tree, Depth-First Search, Breadth-First Search |

### Signature problems

Problems where Anduril accounts for a large share of all recent tags across companies. These are the most Anduril-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Maximum Number of Visible Points](https://leetcode.com/problems/maximum-number-of-visible-points/) | Hard | 30 days | Array, Math, Geometry, Sliding Window |
| 2 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | 30 days | Hash Table, String, Counting |
| 3 | [Brace Expansion](https://leetcode.com/problems/brace-expansion/) | Medium | 30 days | String, Backtracking, Stack, Breadth-First Search |
| 4 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | 3 months | Array, Breadth-First Search, Matrix |
| 5 | [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | Medium | 3 months | Tree, Binary Search Tree, Binary Tree |
| 6 | [Queries on Number of Points Inside a Circle](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/) | Medium | 3 months | Array, Math, Geometry |
| 7 | [Push Dominoes](https://leetcode.com/problems/push-dominoes/) | Medium | 3 months | Two Pointers, String, Dynamic Programming |
| 8 | [Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) | Hard | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 9 | [Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/) | Medium | 3 months | Array, Stack, Monotonic Stack |
| 10 | [Heaters](https://leetcode.com/problems/heaters/) | Medium | 6 months | Array, Two Pointers, Binary Search, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Photo of two teams in rows: order players so shorter are in front and taller behind; which team goes in front; different team sizes and empty spaces; impossible arrangements | Software Engineer New Grad (L3), HackerRank phone screen | 2026-04 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| Shortest distance between two points (2D Euclidean), then points in space (3D), then obstacles blocking the direct path | Software Engineer New Grad (L3), final round coding | 2026-04 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| [Design a doubly linked list with insert, delete and search at beginning, end and middle; then refactor for cleaner code](https://leetcode.com/problems/design-linked-list/) | Software Engineer New Grad (L3), final round coding | 2026-04 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| Behavioral: walk through your resume, favorite role, return offer, self-rating, what your manager would say, why Anduril is the right next step | Software Engineer New Grad (L3), final round behavioral with senior leader | 2026-04 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| [Topological sort problem, essentially Course Schedule](https://leetcode.com/problems/course-schedule/) | Software Engineer, Boston, coding interview | 2025-08 | [post](https://www.jointaro.com/interviews/companies/anduril/experiences/software-engineer-boston-ma-august-19-2025-no-offer-neutral-3ee554cc/) |
| [C++ code reading (pointers, references, lambdas, move semantics), then DFS to identify node clusters in a graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Software Engineer, Irvine, technical screen | 2026-07 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-cplusplus-screen-and-graph-clusters-b7eeefe25d) |
| [Calculator supporting addition and subtraction, follow-up adds multiplication and division](https://leetcode.com/problems/basic-calculator-ii/) | Software Engineer (full stack), onsite coding | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |
| Hash map internals: collision handling and operation complexity | Software Engineer (full stack), onsite | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |
| Word plus suffix search (trie built on reversed words) | Software Engineer (full stack), onsite coding | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |
| Typeahead component handling HTTP request racing and debounce; debug a JavaScript memory leak | Software Engineer (full stack), onsite | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |
| System design with HM: TinyURL with collision resolution, plus database sharding and data migration | Software Engineer (full stack), system design | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |
| Find unreachable objects in a heap graph from stack roots (handle cycles, self-references, missing addresses) | Software Engineer, technical screen | 2026-07 | [post](https://prachub.com/coding-questions/find-unreachable-objects-in-a-heap-graph) |
| [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Software Engineer, technical interview | 2026-08 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| Tell me about your biggest failure; how would you reduce security vulnerability resolution times across software products? | Software Engineer, phone interview | 2026-08 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| Drone-related simulation coding screen (pattern matching not enough), then onsite with system design and two coding challenges | Software Engineer, Sweden | 2026-07 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-drone-equations-and-a-demanding-onsite-c3321ca4d8) |
| Why Anduril? The candidate's feedback said their 'why' was not deep enough | Software Engineer (forum question about feedback) | 2025-10 | [post](https://leetcode.com/discuss/post/7267903/why-anduril-by-leghost-y9cl/) |
| [Course Schedule (topological sort); candidate called the first coding round very easy](https://leetcode.com/problems/course-schedule/) | Software Engineer, technical round | 2026-06 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| [For each prefix of searchWord, return the first three lexicographically matching words from a list](https://leetcode.com/problems/search-suggestions-system/) | Senior Software Engineer, phone screen | 2025-08 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| [Daily Temperatures; design a system that keeps whatever is written to one system consistent with a second system; tell me about a time your project failed](https://leetcode.com/problems/daily-temperatures/) | Senior Software Engineer, final round | 2025-08 | [post](https://www.aced.io/guides/anduril-software-engineer-interview/experiences) |
| [Find the minimum range of tower sensors needed to cover a set of border crossings (same idea as Heaters)](https://leetcode.com/problems/heaters/) | Software Engineer (undated report listed in Aced's Anduril guide, updated Oct 2026) |  | [post](https://www.aced.io/blog/anduril-interview-process) |
| Binary tree traversal with output as JSON or console.log; then the Rabbit Hunter puzzle explained with best, worst and average case | Software Engineer (full stack), onsite coding | 2026-08 | [post](https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it) |

## Beyond LeetCode

Drone-simulation coding screen (calculations closer to a simulation than a textbook prompt); C++ language-semantics reading round; mock application work plus a project presentation; OO design round (radar tower model); puzzle discussion with best/worst/average case ('rabbit hunter'); resume authenticity deep dive in behavioral; HackerRank take-home for some roles. One 2026 report describes AI-sounding automated recruiter messages, a role in a city where Anduril has no office, and a request for three essays before the resume would be submitted; Anduril's job postings carry a 'Protecting Yourself from Recruitment Scams' notice, so confirm any recruiter through an official anduril.com or Greenhouse posting before sending anything.

## System design

The Apr 2026 new grad final round had no system design. General SWE onsites include one system design or object-oriented design round: radar tower model tracking a moving ship, TinyURL with collision handling and DB sharding, distributed logging, computer vision pipeline, Tetris (interviewing.io). Senior robotics roles are more hardware-aware.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Anduril 'How We Work' (Autonomy, Speed, Scale, Impact, Grit) and early-career qualities (Proven Impact, Insatiable Curiosity, Unshakeable Initiative, Collaborative Drive, Unwavering Mission Alignment) ([official page](https://www.anduril.com/careers))

**What they look for:**

- Genuine, specific conviction about defense work and Anduril's mission
- Self-starters who own outcomes without oversight (Autonomy)
- Moving fast while keeping quality (Speed)
- Grit: passion and perseverance on hard, urgent work
- Proven impact through projects, internships or research
- Honest self-assessment and a verifiable resume
- Low ego, high ownership, bias for action (job postings)

**Questions to prepare:**

- Why Anduril, given it is not universally popular? Why over the other companies on your resume?
- Which area interests you most: perception, backend infrastructure, ML infrastructure or ML?
- Walk me through your whole resume. Which role did you enjoy most? Did you get a return offer?
- How would you rate your own performance? What would your manager say about you?
- What about your previous experience makes Anduril the right next step?
- Tell me about your biggest failure
- Tell me about a time you faced a moral or ethical dilemma at work
- How would you reduce security vulnerability resolution times across software products?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Check eligibility first: Anduril requires U.S. Person status (citizen, lawful permanent resident, protected individual under 8 U.S.C. 1324b(a)(3), or able to get State Department authorization) and cannot sponsor F-1 students. Jugal's Summer 2027 internships post flags Anduril as an export-control trap for F-1 students.
- Write a specific 'why defense, why Anduril' answer tied to a product (Lattice, a specific system) and your background; it is asked in the recruiter, screen and behavioral rounds, and one candidate's feedback said their 'why' was not deep enough.
- Treat vague prompts as the test: ask about inputs, edge cases and impossible cases before coding, then ship a working version first.
- Practice implementing a doubly linked list, queue and hash map from scratch in 20 minutes with clean method decomposition, then refactor out loud.
- Drill the Anduril-tagged set: Number of Islands, Course Schedule I and II, Daily Temperatures, Heaters, Rotting Oranges, Maximum Number of Visible Points.
- Be ready to rate your own performance honestly and to explain return-offer outcomes; interviewers verify resume details.
- Do not use AI in interviews; interviewing.io reports it is strictly prohibited.
- Apply early in the cycle: 2027 Early Career SWE and SWE Intern postings have been open since June 2026 and review is rolling.

## 4-week plan for Anduril

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Anduril 'How We Work' (Autonomy, Speed, Scale, Impact, Grit) and early-career qualities (Proven Impact, Insatiable Curiosity, Unshakeable Initiative, Collaborative Drive, Unwavering Mission Alignment) round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.anduril.com/careers>
- <https://www.anduril.com/early-careers>
- <https://www.anduril.com/mission>
- <https://www.anduril.com/open-roles>
- <https://job-boards.greenhouse.io/andurilindustries/jobs/5162263007>
- <https://job-boards.greenhouse.io/andurilindustries/jobs/5148079007>
- <https://www.levels.fyi/companies/anduril-industries/salaries/software-engineer>
- <https://interviewing.io/anduril-interview-questions>
- <https://www.aced.io/guides/anduril-software-engineer-interview>
- <https://www.aced.io/blog/anduril-interview-process>
- <https://www.aced.io/guides/anduril-software-engineer-interview/experiences>
- <https://www.aced.io/experiences/anduril-software-engineer-interview-a63a76>
- <https://www.aced.io/experiences/anduril-software-engineer-interview-1678b7>
- <https://prachub.com/companies/anduril>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-cplusplus-screen-and-graph-clusters-b7eeefe25d>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-onsite-coding-went-great-then-the-hms-system-design-round-sank-it>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-hackerrank-and-ghosting-d5437fb2d3>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-drone-equations-and-a-demanding-onsite-c3321ca4d8>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-mock-application-work-and-a-project-presentation-00c59f9ef3>
- <https://prachub.com/interview-experiences/anduril-software-engineer-interview-experience-automated-recruiter-messages-and-essays-0c51392e8b>
- <https://prachub.com/coding-questions/find-unreachable-objects-in-a-heap-graph>
- <https://www.jointaro.com/interviews/companies/anduril/experiences/software-engineer-boston-ma-august-19-2025-no-offer-neutral-3ee554cc/>
- <https://www.jointaro.com/interviews/companies/anduril/experiences/software-engineer-costa-mesa-ca-september-1-2025-accepted-offer-positive-191cb116/>
- <https://www.jointaro.com/interviews/companies/anduril/experiences/software-engineer-october-16-2025-no-offer-positive-b0151de7/>
- <https://leetcode.com/discuss/post/7267903/why-anduril-by-leghost-y9cl/>

> **Watch out:** Eligibility is the biggest constraint: official FAQ and both 2027 postings require U.S. Person status, so most international students on F-1 cannot apply. Intern-specific question reports for 2025 to 2026 were not found in free sources; the intern process is described from the official FAQ. Many 2026 reports omit level; the clearest new grad data point is the Aced report (interview Apr 2026). Aced's individual experience pages gate the question details behind sign-up; the free listing page (aced.io/guides/anduril-software-engineer-interview/experiences) shows them with 'asked on' dates (new grad: Apr 1, 2026; SWE: Aug 13, 2026; SWE: Jun 30, 2026; Senior SWE: Aug 31, 2025), so reported_questions now cite the listing page. Levels.fyi starts the Anduril ladder at IC2 (typical 2 to 3 yrs), while Aced's guide cites L3 to L7 figures; Anduril publishes neither, so quote the posting's base range for new grads. Aced (formerly Exponent) now serves the old tryexponent.com Anduril URLs. The 'moral or ethical dilemma' question comes from the Aced guide without a date. Company-tagged LeetCode lists are frequency data, not dated reports. LeetCode Discuss has very few Anduril posts; the Apr 2025 'Anduril Phone Screen' post only asks for questions, so it was dropped from sources. Verification (Oct 4, 2026): every URL in sources was fetched and confirmed [VERIFIED]; LeetCode Discuss posts were read through LeetCode GraphQL API because their HTML returns 403 to scripts. Source notes: https://www.anduril.com/careers (How We Work values Autonomy, Speed, Scale, Impact, Grit); https://www.anduril.com/early-careers (FAQ on F-1 sponsorship, GPA, interview process, team placement, Engineering Bootcamp); https://www.anduril.com/open-roles (loads); https://job-boards.greenhouse.io/andurilindustries/jobs/5162263007 (2027 Early Career Software Engineer, USD 112K to 149K base, U.S. Person required); https://job-boards.greenhouse.io/andurilindustries/jobs/5148079007 (2027 Software Engineer Intern, USD 40 to 55/hr, 12 weeks in person); https://www.aced.io/guides/anduril-software-engineer-interview (Aced, formerly Exponent; old tryexponent.com URL redirects here); https://www.aced.io/experiences/anduril-software-engineer-interview-a63a76 (new grad, Entry Level / L3, asked on Apr 1, 2026, posted May 12, 2026; details gated); https://www.aced.io/experiences/anduril-software-engineer-interview-1678b7 (asked on and posted Aug 13, 2026; details gated); https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Anduril (repo 31,048 stars, last push 2026-08-16); https://github.com/snehasishroy/leetcode-companywise-interview-questions/tree/master/anduril (repo 8,233 stars, last push 2026-08-21); https://jugaldb.substack.com/p/494-summer-2027-internships-are-already (local copy; F-1 export-control warning naming Anduril). Fact-check pass (Oct 4, 2026): all URLs re-fetched (HTTP 200; anduril.com pages are client-rendered, so FAQ and How We Work text was read from the embedded page data; LeetCode posts and problem slugs re-checked through the GraphQL API). Corrected: the essays report never says 'scam'; the 'why Anduril' post reports feedback, not a stated rejection reason; Aced question sources moved to the free listing page with exact dates; added 5 questions (Course Schedule Jun 2026, Search Suggestions System and Daily Temperatures from an Aug 2025 senior loop, tower-sensor coverage, binary tree traversal plus Rabbit Hunter puzzle). Process cross-checked against the official early-careers FAQ, interviewing.io, Aced (guide, blog, experiences), Taro (Aug to Oct 2025) and PracHub (2026). Anduril also posts roles outside the US (for example a 2026 GNC intern in Sydney); the U.S. Person rule above applies to the US postings checked.

Next: [All companies](index.md)
