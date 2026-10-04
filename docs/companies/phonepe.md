# PhonePe interview guide

Indian UPI payments app and fintech group (PhonePe Group also runs Share.Market, insurance, lending and the Indus Appstore). Known for machine coding rounds, story-wrapped hard DSA and fintech-flavored design. Updated October 2026.

| PhonePe at a glance | |
|---|---|
| **Category** | India and Asia |
| **Intern level** | SDE Intern (Bengaluru/Pune); summer 2027 intern interviews ran in July 2026 (LeetCode). |
| **New grad level** | Software Engineer (campus SDE). PhonePe uses a flat title; a Feb 2025 offer post says 'Software Engineer (PhonePe has flat hierarchy)'. Levels.fyi maps entry to Software Engineer 1. |
| **0 to 3 years** | Job titles carry experience bands instead of levels. On SmartRecruiters (Oct 2026): 'Software Engineer (5-7) Lending', 'Site Reliability Engineer - On-Prem (1 to 4 Years)'. Candidate posts cite 'SDE (0-3 years)', 'SE (1-3Y)', 'Software Engineer (1-3 yrs)' and 'Backend (3-5 years)' roles. Levels.fyi ladder: Software Engineer 1, Software Engineer 2, Senior Software Engineer (median YOE 2, 5, 7). Candidates compare the 3 to 5 band with SDE 2 roles elsewhere (Amazon SDE II vs PhonePe SDE 3-5 yrs, Aug 2025), and the same Logger-library machine coding problem appears in posts titled 'SDE-2' (Mar 2026) and 'Backend (3-5 years)' (Sep 2026). |
| **Online assessment** | CodeSignal for lateral and off-campus roles (2025 posts; problem statements show CodeSignal execution and memory limits). Campus 2026 OA platform not named but camera-proctored. : 4 coding problems; lateral OA about 70 minutes (1 easy, 2 medium-hard, 1 hard reported); campus OA 4 problems, DP-heavy with long story statements. |
| **Coding rounds** | Campus/intern: 2 DSA rounds. Lateral 0 to 3 yrs: 1 machine coding (plus review) and 1 to 2 DSA rounds. |
| **Behavioral** | PhonePe values on the Life at PhonePe page: integrity and honesty as 'the price of admission', zero tolerance for politics, audacious goals and calculated risks, transparency, first-principles problem solving, customer first, complete ownership ('We never say this is not my job'), removing complexity. |
| **Timeline** | Campus OA for the next year's graduates runs in July (2027-grad OA posts dated 20 July 2026), with interviews in July to August. Off-campus: rounds are often scheduled within days of each other (OA, then round 1 about a week later, round 2 next day, HM the following week, Oct 2025). Post-HM there is a 'debrief' status and then an offer call; HM rescheduling and a location change offer (Bangalore vs another city) were reported (Sep 2026). A Sep 2025 thread asks about the cooldown period after rejection; its length is not confirmed anywhere public. |
| **New grad pay** | Levels.fyi (India, updated Oct 4 2026): Software Engineer 1 median total comp about INR 29.2 lakh/yr (base about INR 24.3 lakh, stock about INR 4.75 lakh/yr); Software Engineer 2 about INR 45.9 lakh. LeetCode offers: 7 months experience, Bengaluru, Feb 2025: base INR 20 lakh + INR 5 lakh signing + INR 8.5 lakh ESOPs over 4 years after negotiation (initial base 19.25 lakh, signing 3 lakh; poster notes campus offers had a 5 lakh joining bonus); SDE 0 to 3 years, ~1 YOE, Sep 2025: base INR 21 lakh + INR 3 lakh joining + INR 14 lakh ESOPs over 4 years; 1.5 YOE Pune, Oct 2025: base INR 22 lakh + INR 2 lakh signing + INR 19 lakh ESOPs over 4 years. Campus 2027 OA post title claims '50 LPA CTC' and an SDE 1 post title claims '40 Lakhs CTC' (candidate claims, unverified). |
| **Official links** | [Careers](https://www.phonepe.com/careers/), [Values](https://www.phonepe.com/careers/life-at-phonepe/) |

## Interview process

### New grad

1. **Campus OA.** 4 problems, DP-heavy and Codeforces-style statements; camera on, so no screenshots (2027 grads, around 20 July 2026). On-campus example set: Nth valid number avoiding 'hated' digits with n up to 1e18, minimum node-cost path under a latency limit, a two-channel energy simulation, a tree DP like House Robber III. 2025 campus OA: 4 questions (2 DP, 1 tree, 1 digit-subsequence counting); solving 2 fully and 2 partially still got one candidate shortlisted.
2. **Technical round 1.** About 70 minutes. 2 problems, full code written on paper plus a dry run (2025 campus: Burning Tree and Shortest Path to Get All Keys).
3. **Hiring manager round.** Ad hoc discussion on projects, problem solving and fit. One 2025 campus candidate felt it went poorly and still advanced.
4. **Technical round 2.** 2 more problems at Codeforces difficulty (Codeforces 2028C plus a custom bitmask-DP problem), again on paper (2025 campus).
5. **Off-campus 0 to 3 years alternative.** Apply via referral, Instahyre or the careers site (jobs are hosted on SmartRecruiters). Either OA on CodeSignal (4 DSA, 70 minutes, 1 easy, 2 medium-hard, 1 hard reported Apr 2025) then 2 DSA rounds on Google Meet then HM, or a 90 minute machine coding assignment plus 30 minute review then DSA then HM. HM rounds can include a HLD exercise on CodeSignal (library management) and a math/BFS problem. After HM: debrief, then an offer discussion with the head of engineering and an engineering manager (Sep 2025). A Feb 2025 SDE 1 backend round mixed DSA (Sort Colors, palindrome number) with HTTP methods, ACID, microservices vs monolith and Kafka questions.

### Intern

1. **Online assessment.** Same campus OA style as full time (4 problems, camera on). Off-campus 2027-grad OA in July 2026 included 'Luna and the Colorful Socks' (Codeforces 731C).
2. **Technical round 1 (DSA).** 2 DSA problems, no other discussion; code written on paper (summer 2027 intern, July 2026): Shortest Bridge and a coverage-range variant of Minimum Number of Taps to Open to Water a Garden.
3. **Technical round 2 (DSA).** 2 to 3 problems: count substrings with equal vowels and consonants, Shortest Path in a Grid with Obstacles Elimination, then an easy subtree-average problem if time remains.
4. **HR round.** Resume deep dive (projects, achievements) and behavioral questions.

### With 1 to 3 years of experience

For 1 to 3 yrs the loop is usually 3 to 4 rounds: (1) Machine coding: 90 minutes to 2 hours on CodeSignal or your own IDE (one 2026 candidate was told it would be on a HackerEarth smart browser), solution zipped and emailed even if written on CodeSignal; functions listed in decreasing order of importance; longer take-home versions were reported for the 3 to 5 band (Logger library in 24 hours, Mar 2026; Logger library in about 6 hours, Sep 2026); then a 30 to 60 minute review on design choices, concurrency and thread safety, and optimizing brute-force functions; (2) DSA/PS: 2 problems in 60 minutes, often story-wrapped, LeetCode medium to hard (Burst Balloons and the celebrity problem were asked to a 2 YOE candidate); explain brute force, optimal and complexity; (3) For the 3 to 5 band: HLD (Shazam-like song identification, Sep 2026; Job Scheduler, Jul 2026); (4) Hiring manager: 45 to 75 minutes on project walkthrough, hardest technical problems, on-call, behavioral and situational questions; one HM rejected a 1 YOE candidate citing skills and cultural fit (Apr 2025). Some loops replace MC with an OA on CodeSignal (4 questions). AI tools are explicitly banned in the MC assignment instructions (Sep 2026).

## Online assessment

- **Platform:** CodeSignal for lateral and off-campus roles (2025 posts; problem statements show CodeSignal execution and memory limits). Campus 2026 OA platform not named but camera-proctored.
- **Format:** 4 coding problems; lateral OA about 70 minutes (1 easy, 2 medium-hard, 1 hard reported); campus OA 4 problems, DP-heavy with long story statements.
- **Notes:** Problems read like Codeforces (Socks 731C, digit DP, constrained path counting modulo 1e9+7). Strip the story first. Partial solutions still get shortlisted in some cycles.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Campus/intern: 2 DSA rounds. Lateral 0 to 3 yrs: 1 machine coding (plus review) and 1 to 2 DSA rounds.
- **Style:** LeetCode medium to hard and Codeforces-level, frequently disguised in a story. Machine coding is practical LLD in code (issue resolution, booking, leaderboard, communication layer, app version rollout, hackathon platform).
- **Environment:** Campus and intern: pen and paper with dry run. Lateral DSA: Google Meet with a shared editor. Machine coding: CodeSignal or local IDE (IntelliJ etc.), any language, in-memory storage, driver class or tests, no REST layer, avoid third-party libraries.
- **Graded on:** MC (from PhonePe problem sheets): completeness of functional requirements, OO design and SOLID, code efficiency, readability and maintainability, testability, corner cases, language proficiency, separation of data access from business logic, proper error codes. DSA: brute force to optimal with complexity, correctness on tricky interpretation.
- **Reported focus topics:** Graphs: multi-source BFS, BFS with state (keys, obstacle eliminations), Dijkstra with constraints, union-find, Dynamic programming including digit DP and bitmask DP, Trees: BFS from a node (burning tree), distance K, Greedy and interval problems (meeting rooms, taps), Stacks and monotonic stacks (Min Stack, remove duplicate letters), String counting with prefix sums and two pointers, Machine coding: OOD, SOLID, strategy pattern, thread safety, in-memory repositories, Fintech system design for SDE 2: idempotency, ledger consistency, reconciliation

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **10** distinct problems tagged to PhonePe in the last 6 months (7 in the last 30 days, 7 in the last 3 months, 103 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 70%, Hard 30%

**Most tagged topics (share of problems):** Array 80%, Graph Theory 30%, Sliding Window 30%, Hash Table 20%, Depth-First Search 20%, Union-Find 20%, Sorting 20%, Heap (Priority Queue) 20%, Queue 20%, Monotonic Queue 20%

> **Watch out:** PhonePe has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Medium | 30 days | Hash Table, Depth-First Search, Union-Find, Graph Theory |
| 2 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | Hard | 30 days | Array, String, Depth-First Search, Graph Theory |
| 3 | [Make Lexicographically Smallest Array by Swapping Elements](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/) | Medium | 30 days | Array, Union-Find, Sorting |
| 4 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | Medium | 30 days | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 5 | [Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/) | Hard | 30 days | Array, Dynamic Programming, Graph Theory, Dijkstra's Algorithm |
| 6 | [Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/) | Hard | 30 days | Array, Queue, Sliding Window, Monotonic Queue |
| 7 | [Predict the Winner](https://leetcode.com/problems/predict-the-winner/) | Medium | 30 days | Array, Math, Dynamic Programming, Recursion |
| 8 | [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | Medium | 6 months | Array, Sliding Window, Prefix Sum |
| 9 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 10 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | 6 months | Array, Matrix, Simulation |

### Signature problems

Problems where PhonePe accounts for a large share of all recent tags across companies. These are the most PhonePe-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Medium | 30 days | Hash Table, Depth-First Search, Union-Find, Graph Theory |
| 2 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | Hard | 30 days | Array, String, Depth-First Search, Graph Theory |
| 3 | [Make Lexicographically Smallest Array by Swapping Elements](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/) | Medium | 30 days | Array, Union-Find, Sorting |
| 4 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | Medium | 30 days | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 5 | [Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/) | Hard | 30 days | Array, Dynamic Programming, Graph Theory, Dijkstra's Algorithm |
| 6 | [Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/) | Hard | 30 days | Array, Queue, Sliding Window, Monotonic Queue |
| 7 | [Predict the Winner](https://leetcode.com/problems/predict-the-winner/) | Medium | 30 days | Array, Math, Dynamic Programming, Recursion |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Shortest Bridge (code on paper)](https://leetcode.com/problems/shortest-bridge/) | SDE Intern (summer 2027) | 2026-07 | [post](https://leetcode.com/discuss/post/8418761/phonepe-sde-intern-interview-experience-q4q3x/) |
| [Coverage-range array: minimum indices to cover all positions (equivalent to Minimum Number of Taps to Open to Water a Garden)](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) | SDE Intern (summer 2027) | 2026-07 | [post](https://leetcode.com/discuss/post/8418761/phonepe-sde-intern-interview-experience-q4q3x/) |
| Count substrings with equal numbers of vowels and consonants | SDE Intern (summer 2027) | 2026-07 | [post](https://leetcode.com/discuss/post/8418761/phonepe-sde-intern-interview-experience-q4q3x/) |
| [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | SDE Intern (summer 2027) | 2026-07 | [post](https://leetcode.com/discuss/post/8418761/phonepe-sde-intern-interview-experience-q4q3x/) |
| OA: Luna and the Colorful Socks, minimum total repaint cost (per-color costs) so each day's sock pair matches (a weighted variant of Codeforces 731C 'Socks'; the post itself names no source) | 2027 grad OA (off campus) | 2026-07 | [post](https://leetcode.com/discuss/post/8409804/phonepe-online-assissment-off-campus-202-ncgk/) |
| OA: Nth positive integer that avoids a set of hated digits (n up to 1e18); minimum node-cost path with total latency at most L | 2027 grad OA (on campus) | 2026-07 | [post](https://leetcode.com/discuss/post/8410002/phonepe-oa-on-campus-by-anonymous_user-kluy/) |
| OA: count substrings of S that do not contain T as a subsequence; DP task assignment with context-switch idle days; count K-jump sequences modulo 1e9+7 | SDE 1 OA | 2026-08 | [post](https://leetcode.com/discuss/post/8444588/phonepe-sde-1-oa-experience-august-2026-ouj8k/) |
| Maximize the number of even-sum subarrays by changing at most one element | SDE 1 (face to face) | 2026-02 | [post](https://leetcode.com/discuss/post/7615254/phonepe-sde1-interview-ctc-40lakhs-got-c-83l6/) |
| [Burning Tree (Amount of Time for Binary Tree to Be Infected), full code on paper with dry run](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | SDE (2025 campus) | 2025-08 | [post](https://leetcode.com/discuss/post/7087077/phonepe-oa-interview-experience-2025-cam-xtjm/) |
| [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) | SDE (2025 campus) | 2025-08 | [post](https://leetcode.com/discuss/post/7087077/phonepe-oa-interview-experience-2025-cam-xtjm/) |
| [Evaluate Division; minimize total cost of repeatedly removing two elements (cost = their sum)](https://leetcode.com/problems/evaluate-division/) | SDE backend (0 to 3 years), ~1 YOE | 2025-09 | [post](https://leetcode.com/discuss/post/7222612/phonepe-interview-experience-sde-0-3-yea-5nll/) |
| [Amount of Time for Binary Tree to Be Infected with a follow-up for multiple infected nodes](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | SDE backend (0 to 3 years) | 2025-09 | [post](https://leetcode.com/discuss/post/7222612/phonepe-interview-experience-sde-0-3-yea-5nll/) |
| [Min Stack (single question, multiple approaches)](https://leetcode.com/problems/min-stack/) | Software Engineer (1 to 3 years) | 2025-10 | [post](https://leetcode.com/discuss/post/7286629/phonepe-se-1-3y-interview-experience-by-qdo0q/) |
| [Accounts Merge; variation of Meeting Rooms (minimum rooms)](https://leetcode.com/problems/accounts-merge/) | Software Engineer (1 to 3 years) | 2025-10 | [post](https://leetcode.com/discuss/post/7286629/phonepe-se-1-3y-interview-experience-by-qdo0q/) |
| Machine coding: Customer Issue Resolution System for failed/pending transactions (createIssue, addAgent, assignIssue with strategy, getIssues, resolveIssue, agent work history), 90 minutes, review on concurrency | SDE (0 to 3 years) | 2025-09 | [post](https://leetcode.com/discuss/post/7218643/phonepe-machine-coding-round-for-sde0-3-k5jh1/) |
| Machine coding: Fitness Class Booking with Platinum/Gold/Silver tiers, waitlist promotion, cancellation 30 minutes before, thread-safe booking | SDE 1 | 2025-07 | [post](https://leetcode.com/discuss/post/6980677/phonepe-machine-coding-round-sde-intervi-wqqs/) |
| [Remove k from either end to maximize sum (Maximum Points You Can Obtain from Cards); minimum insertions to make a string a palindrome; remove k adjacent duplicates](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | Software Engineer backend (0 to 3 years), Pune, 2 YOE | 2025-07 | [post](https://leetcode.com/discuss/post/6965107/phonepe-software-engineer-backend-0-to-3-3a64/) |
| [All Nodes Distance K in Binary Tree; implement a stack with getMin](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) | SDE 1 backend (0 to 3 years), Pune | 2025-04 | [post](https://leetcode.com/discuss/post/6680307/phonepe-interview-for-sde1-backend-0-3-y-i9lr/) |
| Machine coding: daily/weekly Leaderboard service for multiple games with concurrent score submissions | Not stated (first-round machine coding assignment) | 2026-01 | [post](https://leetcode.com/discuss/post/7474219/machine-coding-assignment-phonepe-first-1e4a0/) |
| HLD: design a Shazam-like song identification service | SDE 2 backend | 2026-09 | [post](https://leetcode.com/discuss/post/8547106/phonepe-sde-2-backend-interview-experien-vcqt/) |
| [DSA round: 3Sum, Generate Parentheses, Candy](https://leetcode.com/problems/candy/) | SDE 1, India | 2025-01 | [post](https://leetcode.com/discuss/post/6306400/phonepe-sde1-india-20-jan-2025-by-anonym-e8tv/) |
| [Sort Colors and palindrome number in O(1) space, plus POST vs PUT, ACID, microservices vs monolith, Kafka](https://leetcode.com/problems/sort-colors/) | SDE 1 backend | 2025-02 | [post](https://leetcode.com/discuss/post/6437867/my-phonepe-sde-1-interview-experience-by-gha9/) |
| [Machine coding: Hackathon platform (90 minutes, emailed); DSA: Count Bowl Subarrays and Reconstruct Itinerary; HLD: Job Scheduler](https://leetcode.com/problems/reconstruct-itinerary/) | Software Engineer (3 to 5 years) | 2026-07 | [post](https://leetcode.com/discuss/post/8382058/phonepe-software-engineer-3-5-years-by-a-iwkf/) |

## Beyond LeetCode

Machine coding assignments with a later review: Customer Issue Resolution System (agents, strategies, work history), Fitness Class Booking (tiers, waitlist, thread safety), Leaderboard service for many games with concurrent score submissions, Communication layer (email/SMS/soundbox providers with auth and random provider selection), App Version Management (beta and percentage rollouts, diff patches), Hackathon platform (filters, scoring strategy, recommendations), Logger library with sinks (24 hours, SDE 2). HLD for SDE 2. HM rounds may include an HLD mini-exercise and a math puzzle.

## System design

New grads: no dedicated system design round reported; a light HLD prompt can appear inside the HM round (library management on CodeSignal, Sep 2025), and backend fundamentals (HTTP, ACID, Kafka) can come up in a DSA round (Feb 2025). 0 to 3 yrs: machine coding is the design signal (LLD in running code with concurrency). 3 to 5 yrs (SDE 2): a HLD round is standard, with unusual prompts (Shazam-style audio matching, Sep 2026; Job Scheduler, Jul 2026). A promotional LeetCode post claims a 'Design a Digital Wallet' SDE 2 round (Jun 2026). Interviewers probe concurrency, data storage choices and trade-offs.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** PhonePe values on the Life at PhonePe page: integrity and honesty as 'the price of admission', zero tolerance for politics, audacious goals and calculated risks, transparency, first-principles problem solving, customer first, complete ownership ('We never say this is not my job'), removing complexity. ([official page](https://www.phonepe.com/careers/life-at-phonepe/))

**What they look for:**

- Deep ownership of your projects: architecture, your decisions, hardest problems
- First-principles reasoning and data-driven decisions
- Candor: admit mistakes, voice unpopular opinions
- No over-engineering: alignment with stated requirements (a Logger MC candidate was rejected for adding an extra sink-selection API)
- Cultural fit with a fast, high-ownership environment (an HM rejection of a 1 YOE candidate cited skills and cultural fit, Apr 2025)

**Questions to prepare:**

- Deep dive into one project: why this design, what would you change?
- What is the most difficult technical problem you have handled?
- Explain the architecture and tech stack at your current company.
- Situational questions on handling production issues and deadlines (reported generically).
- Why PhonePe and why this location?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice Codeforces Div 2 C-level problems with long stories; PhonePe OAs and campus rounds read like contest problems (a 2025 campus candidate was asked Codeforces 2028C; a 2026 OA problem is a weighted variant of Codeforces 731C).
- For campus and intern rounds, write complete code on paper and dry run it; interviewers ask for both.
- In machine coding, implement the required functions in the order listed (they are ranked by importance) and submit on time even if partial; the instructions say a partial on-time solution beats a late one.
- Do not add unrequested features or leak implementation details through the API; a Logger candidate was rejected for an extra sink-specific log method (Mar 2026).
- Expect the MC review to focus on concurrency: know how your assign/book methods behave under simultaneous calls and how you would make them thread safe.
- For SDE 2 HLD, lead with what cannot go wrong with money (idempotency, consistency, reconciliation) and be ready for unusual prompts like Shazam. This framing comes from general fintech design practice and a promotional LeetCode post, not from a verified PhonePe rubric.
- Prepare a crisp architecture walkthrough of your current project for the HM round; HM feedback can override strong technical rounds.
- On offers, joining bonus is easier to move than base: one candidate negotiated signing bonus from INR 3 lakh to 5 lakh and base from 19.25 to 20 lakh by citing an expected competing offer (Feb 2025).

## 4-week plan for PhonePe

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the PhonePe values on the Life at PhonePe page: integrity and honesty as 'the price of admission', zero tolerance for politics, audacious goals and calculated risks, transparency, first-principles problem solving, customer first, complete ownership ('We never say this is not my job'), removing complexity. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.phonepe.com/careers/>
- <https://www.phonepe.com/careers/life-at-phonepe/>
- <https://www.phonepe.com/careers/job-openings/>
- <https://jobs.smartrecruiters.com/PHONEPELIMITED>
- <https://tech.phonepe.com/>
- <https://www.levels.fyi/companies/phonepe/salaries/software-engineer>
- <https://leetcode.com/discuss/post/8418761/phonepe-sde-intern-interview-experience-q4q3x/>
- <https://leetcode.com/discuss/post/8409804/phonepe-online-assissment-off-campus-202-ncgk/>
- <https://leetcode.com/discuss/post/8409327/phonepe-oa-50lpa-ctc-2027-grad-camera-on-7to7/>
- <https://leetcode.com/discuss/post/8410002/phonepe-oa-on-campus-by-anonymous_user-kluy/>
- <https://leetcode.com/discuss/post/8444588/phonepe-sde-1-oa-experience-august-2026-ouj8k/>
- <https://leetcode.com/discuss/post/7615254/phonepe-sde1-interview-ctc-40lakhs-got-c-83l6/>
- <https://leetcode.com/discuss/post/7087077/phonepe-oa-interview-experience-2025-cam-xtjm/>
- <https://leetcode.com/discuss/post/7222612/phonepe-interview-experience-sde-0-3-yea-5nll/>
- <https://leetcode.com/discuss/post/7286629/phonepe-se-1-3y-interview-experience-by-qdo0q/>
- <https://leetcode.com/discuss/post/7286689/phonepe-offer-software-engineer-backend-lzkfp/>
- <https://leetcode.com/discuss/post/7218643/phonepe-machine-coding-round-for-sde0-3-k5jh1/>
- <https://leetcode.com/discuss/post/7126839/customer-support-system-phone-pe-machine-swtd/>
- <https://leetcode.com/discuss/post/6980677/phonepe-machine-coding-round-sde-intervi-wqqs/>
- <https://leetcode.com/discuss/post/6759550/phonepe-software-engineer-backend-machin-7det/>
- <https://leetcode.com/discuss/post/6759565/phonepe-se-backend-1-3-years-dsa-round-i-c4a1/>
- <https://leetcode.com/discuss/post/6965107/phonepe-software-engineer-backend-0-to-3-3a64/>
- <https://leetcode.com/discuss/post/6903844/phonepe-software-engineer-backend-dsa-ro-310o/>
- <https://leetcode.com/discuss/post/6680307/phonepe-interview-for-sde1-backend-0-3-y-i9lr/>
- <https://leetcode.com/discuss/post/6306400/phonepe-sde1-india-20-jan-2025-by-anonym-e8tv/>

> **Watch out:** Fact-checked 2026-10-04: every URL was re-fetched (LeetCode Discuss posts through LeetCode's public GraphQL API with slugs matched to post IDs; LeetCode problem slugs checked through the GraphQL question API; phonepe.com pages with curl and a browser; SmartRecruiters through its public postings API). PhonePe has no public interview-prep page and no dedicated students page; campus hiring runs through college placement cells. PhonePe's job board moved from Greenhouse (job-boards.greenhouse.io/phonepe now returns 404) to SmartRecruiters (company id PHONEPELIMITED; phonepe.com job links point to jobs.smartrecruiters.com). Corrections made: the 'Codeforces 731C' label was the previous writer's mapping, not the poster's, and the OA problem is a weighted variant; the '3 to 5 years' band and 'SDE 2' label are now sourced; the cooldown claim now cites its Sep 2025 thread; 'digital wallet' HLD is now attributed to a promotional post (8359466) rather than stated as fact; one-liner no longer claims 'largest' (not verifiable on official pages). The two posts recommending a design site (8359466, 8420715) read as promotional and are used only as context. OA platform for the 2026 campus test is not named. Process varies by team and band: some 0 to 3 loops start with MC, others with an OA; HM-round content varies widely. Comp titles ('50 LPA', '40 Lakhs') are candidate claims. Levels.fyi figures are per-level values at the site's displayed rate. Web search budget was exhausted, so Glassdoor, Reddit, Blind and YouTube were not checked; LeetCode Discuss search was used instead.

Next: [All companies](index.md)
