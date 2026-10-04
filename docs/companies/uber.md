# Uber interview guide

Rides, Eats and Freight marketplace. Interviews: CodeSignal or HackerRank OA, medium-hard coding heavy on graphs and union-find, machine-coding LLD, hiring manager round. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Software Engineering Intern (summer; US Fall and Winter co-ops; 6-month SDE interns in India with PPO). Uber Career Prep and UberSTAR are listed as early-talent programs. |
| **New grad level** | L3 (Software Engineer I) |
| **0 to 3 years** | L3 Software Engineer I for 0 to about 2 yrs; L4 Software Engineer II for roughly 2 to 5 yrs (Levels.fyi lists L3 typical experience as 1 to 2 years, so '1 to 2 years' on an Engineer I posting does not rule out new grads). Senior is 5a. |
| **Online assessment** | CodeSignal (US new grad and SWE II; India SDE-1 in 2025) and HackerRank (India OAs in 2026; HackerRank links used for US 2026 intern interviews) : US: GCA-style, 4 questions of increasing difficulty. India: 3 questions in 60 to 65 minutes, medium to hard (greedy, binary search, prefix sums, 2D DP, graphs and MST, DSU, bitwise OR/XOR tricks, monotonic stack). Some L4 OAs are 2 medium-hard questions. |
| **Coding rounds** | New grad: phone screen plus 2 coding rounds in the loop. India SDE-1: BPS plus 1 DSA round plus 1 LLD round. L4: 2 coding-type rounds plus LLD and HLD. |
| **Behavioral** | Uber values (careers values page, archived Nov 2025): Go get it; Trip obsessed; Build with heart; Stand for safety; See the forest and the trees; One Uber; Great minds don't think alike; Do the right thing. Period. The onsite behavioral round is 'Collaboration and Leadership' with the hiring manager (75 minutes per interviewing.io). One US candidate structured stories with the CARL framework (Context, Action, Result, Learning). |
| **Timeline** | interviewing.io and Aced both estimate 4 to 6 weeks, longer with team matching. India SDE-1 off-campus (2025): OA on Jun 15, elimination round on Jun 22, loop within days, offer later accepted. US L4 (Sep 2025): phone screen to onsite in 2 days, recruiter reply 3 days after debrief. India SDE II: about 2 months end to end (May 2026). US new grad (Jun 2026): phone screen result in 2 days, then 2+ weeks of silence after the final onsite amid hiring-freeze talk. Recruiting season: US intern and new grad OAs from August to December; India campus drives July to September. |
| **New grad pay** | Levels.fyi US software engineer data (page read Oct 4, 2026): L3 Software Engineer I about $204K total comp (base $153K, stock $30K/yr, bonus $21K); L4 Software Engineer II about $271K (base $182K, stock $75K/yr). India (Levels.fyi USD figures at the site rate of about 94.5 INR/USD): L3 about 37 lakh INR, L4 about 71 lakh. Reported offers: India Software Engineer I (Aug 2026) base 23 lakh, about 37.5 lakh total; India 6-month SDE intern stipend 1.87 lakh INR per month (Feb 2026); US L4 with 2.5 YOE initial TC $310K year 1, negotiated to $335K year 1 (Sep 2025). |
| **Official links** | [Careers](https://jobs.uber.com/), [Students](https://jobs.uber.com/en/teams/emerging-talent/), [Official interview prep](https://jobs.uber.com/en/what-moves-us/how-we-hire/), [Values](https://web.archive.org/web/20251112091134/https://www.uber.com/us/en/careers/values/) |

## Interview process

### New grad

1. **Apply.** Apply on jobs.uber.com (University team filter). Uber's official hiring page lists: apply, talent team conversation, hiring manager chat, technical interview, functional exercise (role-dependent), team interview.
2. **Online assessment.** US: CodeSignal, General Coding Assessment style with 4 questions (two easy, one tricky implementation, one algorithmic); solving 3 of 4 has been enough. India 2025: CodeSignal, 3 medium to hard questions in 60 minutes, run in candidate batches and scored out of 600. India 2026: HackerRank, 2 to 3 questions in 65 minutes.
3. **Technical phone screen / BPS.** US: 60 minute live coding screen, usually one LeetCode medium style design-a-class problem with follow-ups (Sep 2026 new grad screen ran in a Jupyter Notebook, with a shadow interviewer). India: 'BPS' (business phone screen) elimination round of 1 hour, 45 minutes coding plus 15 minutes high-level design or project discussion.
4. **Virtual onsite (business interviews).** New grad loops are about 3 one-hour interviews: coding (DSA), a second coding round ('Depth in Specialization' for US backend new grads was a standard LeetCode question; India SDE-1 gets LLD or design instead), and a hiring manager behavioral round called Collaboration and Leadership. Coding rounds expect production-quality, running code.
5. **Debrief, team match, offer.** Panel debrief; interviewing.io says decisions aim to be unanimous and one strong no-hire usually rejects. Results range from 3 days to several weeks; mid-2026 reports describe paused onsites and closed roles after a hire decision.

### Intern

1. **Apply.** US summer SWE intern postings plus Fall and Winter co-ops; India runs on-campus summer and 6-month intern drives. Uber Career Prep (first and second years) interviews include a behavioral and a technical part (Nov 2025 report).
2. **Online assessment.** India 2027 summer intern (on-campus, Jul 2026): 3 coding questions in 65 minutes on HackerRank style problems (city delivery cost queries, trucks colliding on a lane, ordered tree traversal queries). India 6-month intern (Feb 2026): HackerRank, 3 questions in 65 minutes, partial credit on the hard one still advanced. US 2026 interns took an OA then were scheduled within about a week.
3. **Technical interviews.** US 2026 summer: two 1-hour technical interviews on the same day, both on HackerRank links, no separate behavioral first. India 6-month intern: two rounds shaped as intro, about 10 minutes of behavioral (teamwork, conflict, decisions), then one DSA problem and discussion. US Fall 2026 co-op: 2 technical rounds; some candidates heard system design may appear.
4. **Team matching.** After passing, interns go to team matching; a 2026 PhD ML intern was told Uber's match rate is effectively 100% (Reddit comment, unconfirmed). PhD ML intern loop: Round 1 LeetCode medium to hard, Round 2 code a classic ML model (k-NN, k-means, decision tree, regression) with follow-ups.

### With 1 to 3 years of experience

L4 (Software Engineer II) loops add rounds: OA (CodeSignal in the US, HackerRank in India, 2 to 4 questions), a phone screen or BPS, then 4 to 5 interviews: DSA (often union-find or graphs), Depth in Specialization or LLD machine coding with running code in 60 minutes (Splitwise, parking lot, circuit breaker, TTL counter, pub-sub queue, in-memory file system), HLD (restaurant recommendation with geohash, stock price alerts, grocery cart management, trending items page), a hiring manager round, and sometimes a bar raiser. A 2026 candidate quoted the official Depth in Specialization prep guide: day-to-day backend coding, implementing something from scratch, modifying an existing codebase, and discussing how to take it to production. Expect concurrency and scale follow-ups even in DSA rounds.

## Online assessment

- **Platform:** CodeSignal (US new grad and SWE II; India SDE-1 in 2025) and HackerRank (India OAs in 2026; HackerRank links used for US 2026 intern interviews)
- **Format:** US: GCA-style, 4 questions of increasing difficulty. India: 3 questions in 60 to 65 minutes, medium to hard (greedy, binary search, prefix sums, 2D DP, graphs and MST, DSU, bitwise OR/XOR tricks, monotonic stack). Some L4 OAs are 2 medium-hard questions.
- **Notes:** Partial solutions often still advance (3 of 4 solved; 9 of 15 test cases on Q3). India 2025 OAs were run in timed group batches and proctored (camera plus screen), with complaints about cheating and 'waitlist' emails after the OA. Problems are framed in Uber domains (drivers, zones, deliveries, trucks).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** New grad: phone screen plus 2 coding rounds in the loop. India SDE-1: BPS plus 1 DSA round plus 1 LLD round. L4: 2 coding-type rounds plus LLD and HLD.
- **Style:** LeetCode medium to hard, usually wrapped in an Uber scenario with 2 to 3 escalating follow-ups (2D to 3D, then union-find; static k to per-station k with Dijkstra; then 10,000 concurrent requests). Heavy on graphs, BFS/DFS, union-find, heaps, sliding window with deques, intervals, binary search, and design-a-class problems over streams. Recent Uber-tagged problems repeat (First Unique Number in Feb 2025 and Sep 2026).
- **Environment:** CodeSignal IDE for US screens and onsite rounds (interviewing.io), HackerRank links for some 2025 to 2026 rounds, a Jupyter Notebook in one Sep 2026 US new grad screen; Zoom or Teams video. You choose the language. Code is expected to compile and run against tests you write.
- **Graded on:** Working, production-quality code; reasoning and communication more than memorized answers (a 2026 intern was selected with an incomplete solution after strong reasoning); edge cases; complexity; handling follow-ups. Uber's hiring page: 'We care as much about how you solve problems as the solution itself.'
- **Reported focus topics:** Union-find (DSU) with path compression and union by rank, Graphs: BFS/DFS, multi-source BFS, Dijkstra, topological sort, MST, Grids and islands (including dynamic additions), Heaps and sliding window with monotonic deques, Intervals and room scheduling, Binary search on the answer, Design-a-class over streams (first unique, TTL counters, hit counters), Machine-coding LLD with design patterns and concurrency, HLD with geospatial indexing (geohash, quadtree) and real-time alerts, Uber-tagged LeetCode, last 3 months (snehasishroy repo, July 2026 snapshot): Number of Islands II, First Unique Number, The Earliest Moment When Everyone Become Friends, Squares of a Sorted Array, Minimum Edge Reversals So Every Node Is Reachable, Longest Continuous Subarray With Absolute Diff <= Limit, Construct Quad Tree, Bus Routes, Alien Dictionary, Find the Safest Path in a Grid

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **71** distinct problems tagged to Uber in the last 6 months (4 in the last 30 days, 31 in the last 3 months, 364 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 56%, Hard 37%, Easy 7%

**Most tagged topics (share of problems):** Array 62%, Breadth-First Search 31%, Depth-First Search 28%, Sorting 24%, Hash Table 21%, Binary Search 18%, String 17%, Matrix 15%, Design 15%, Union-Find 14%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/) | Hard | 30 days | Array, Hash Table, Union-Find |
| 2 | [Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/) | Medium | 30 days | Array, Binary Search, Breadth-First Search, Union-Find |
| 3 | [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) | Hard | 30 days | Array, Dynamic Programming, Greedy, Heap (Priority Queue) |
| 4 | [Maximize Sum of Weights after Edge Removals](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/) | Hard | 30 days | Dynamic Programming, Tree, Depth-First Search, Sorting |
| 5 | [First Unique Number](https://leetcode.com/problems/first-unique-number/) | Medium | 3 months | Array, Hash Table, Design, Queue |
| 6 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | Medium | 3 months | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 7 | [Minimum Edge Reversals So Every Node Is Reachable](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/) | Hard | 3 months | Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory |
| 8 | [Bus Routes](https://leetcode.com/problems/bus-routes/) | Hard | 3 months | Array, Hash Table, Breadth-First Search |
| 9 | [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/) | Medium | 3 months | Array, Divide and Conquer, Tree, Matrix |
| 10 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | Easy | 3 months | Array, Two Pointers, Sorting |
| 11 | [The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/) | Medium | 3 months | Array, Union-Find, Sorting |
| 12 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | Hard | 3 months | Array, String, Depth-First Search, Breadth-First Search |
| 13 | [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | Easy | 3 months | Array, Stack, Monotonic Stack |
| 14 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 3 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 15 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | 3 months | Tree, Depth-First Search, Binary Search Tree, Binary Tree |
| 16 | [Word Search](https://leetcode.com/problems/word-search/) | Medium | 3 months | Array, String, Backtracking, Depth-First Search |
| 17 | [Leftmost Column with at Least a One](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/) | Medium | 3 months | Array, Binary Search, Matrix, Interactive |
| 18 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | Hard | 3 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 19 | [Find the Closest Palindrome](https://leetcode.com/problems/find-the-closest-palindrome/) | Hard | 3 months | Math, String |
| 20 | [Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/) | Medium | 3 months | Array, Math, Design, Randomized |
| 21 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Hard | 3 months | Array, Binary Search, Dynamic Programming, Greedy |
| 22 | [Minimum Operations to Reduce an Integer to 0](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/) | Medium | 3 months | Dynamic Programming, Greedy, Bit Manipulation |
| 23 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Medium | 3 months | Array, Binary Search |
| 24 | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | Medium | 3 months | Array, Hash Table, Math, Design |
| 25 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | Hard | 3 months | Array, String, Backtracking, Trie |
| 26 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | 3 months | Hash Table, String, Binary Search, Design |
| 27 | [Make Lexicographically Smallest Array by Swapping Elements](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/) | Medium | 3 months | Array, Union-Find, Sorting |
| 28 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 3 months | Array, Sorting, Quicksort |
| 29 | [Maximum Number of Points From Grid Queries](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) | Hard | 3 months | Array, Two Pointers, Breadth-First Search, Union-Find |
| 30 | [Binary Searchable Numbers in an Unsorted Array](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/) | Medium | 3 months | Array, Binary Search, Stack, Monotonic Stack |
| 31 | [Count Paths That Can Form a Palindrome in a Tree](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/) | Hard | 6 months | Hash Table, Bit Manipulation, Tree, Depth-First Search |
| 32 | [Number of Wonderful Substrings](https://leetcode.com/problems/number-of-wonderful-substrings/) | Medium | 3 months | Hash Table, String, Bit Manipulation, Prefix Sum |
| 33 | [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) | Medium | 6 months | Array, Binary Search, Design, Queue |
| 34 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 35 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 36 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | 6 months | Array, Dynamic Programming |
| 37 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | Medium | 6 months | Array, String, Depth-First Search, Breadth-First Search |
| 38 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 39 | [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) | Hard | 6 months | Hash Table, String, Design, Trie |
| 40 | [Exam Room](https://leetcode.com/problems/exam-room/) | Medium | 6 months | Design, Heap (Priority Queue), Ordered Set |
| 41 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | 6 months | Array, Two Pointers, Greedy, Sorting |
| 42 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | Easy | 6 months | Hash Table, Math, String |
| 43 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | 6 months | Array, Binary Search |
| 44 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | 6 months | String, Tree, Depth-First Search, Breadth-First Search |
| 45 | [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Matrix |
| 46 | [Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/) | Hard | 6 months | Array, Bit Manipulation, Breadth-First Search, Matrix |
| 47 | [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) | Hard | 6 months | Array, Hash Table, Sorting, Heap (Priority Queue) |
| 48 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | 6 months | Array, Breadth-First Search, Matrix |
| 49 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | 6 months | Two Pointers, Design, Sorting, Heap (Priority Queue) |
| 50 | [Maximum Number of Alloys](https://leetcode.com/problems/maximum-number-of-alloys/) | Medium | 6 months | Array, Binary Search |

### Signature problems

Problems where Uber accounts for a large share of all recent tags across companies. These are the most Uber-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/) | Hard | 30 days | Array, Hash Table, Union-Find |
| 2 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | Medium | 3 months | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 3 | [First Unique Number](https://leetcode.com/problems/first-unique-number/) | Medium | 3 months | Array, Hash Table, Design, Queue |
| 4 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | Hard | 3 months | Array, String, Depth-First Search, Breadth-First Search |
| 5 | [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/) | Medium | 3 months | Array, Divide and Conquer, Tree, Matrix |
| 6 | [Minimum Edge Reversals So Every Node Is Reachable](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/) | Hard | 3 months | Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory |
| 7 | [Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/) | Medium | 30 days | Array, Binary Search, Breadth-First Search, Union-Find |
| 8 | [The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/) | Medium | 3 months | Array, Union-Find, Sorting |
| 9 | [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | Easy | 3 months | Array, Stack, Monotonic Stack |
| 10 | [Leftmost Column with at Least a One](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/) | Medium | 3 months | Array, Binary Search, Matrix, Interactive |
| 11 | [Find the Closest Palindrome](https://leetcode.com/problems/find-the-closest-palindrome/) | Hard | 3 months | Math, String |
| 12 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | Hard | 3 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 13 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | Hard | 3 months | Array, String, Backtracking, Trie |
| 14 | [Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/) | Medium | 3 months | Array, Math, Design, Randomized |
| 15 | [Maximize Sum of Weights after Edge Removals](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/) | Hard | 30 days | Dynamic Programming, Tree, Depth-First Search, Sorting |
| 16 | [Count Paths That Can Form a Palindrome in a Tree](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/) | Hard | 6 months | Hash Table, Bit Manipulation, Tree, Depth-First Search |
| 17 | [Maximum Number of Points From Grid Queries](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) | Hard | 3 months | Array, Two Pointers, Breadth-First Search, Union-Find |
| 18 | [Binary Searchable Numbers in an Unsorted Array](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/) | Medium | 3 months | Array, Binary Search, Stack, Monotonic Stack |
| 19 | [Number of Wonderful Substrings](https://leetcode.com/problems/number-of-wonderful-substrings/) | Medium | 3 months | Hash Table, String, Bit Manipulation, Prefix Sum |
| 20 | [Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Matrix |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [post(id) and getEarliestSingleVisit(): earliest ID posted exactly once (First Unique Number)](https://leetcode.com/problems/first-unique-number/) | New grad SWE phone screen, US | 2026-09 | [post](https://leetcode.com/discuss/post/8520134/uber-new-grad-sde-phone-screen-usa-first-k57o/) |
| [OA: trucks on a lane swap velocities on collision; when does the last truck leave (similar to Last Moment Before All Ants Fall Out of a Plank)](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/) | SWE intern 2027 OA, India on-campus | 2026-07 | [post](https://leetcode.com/discuss/post/8396093/uber-2027-swe-intern-oa-experience-by-ra-4t3x/) |
| OA: minimum delivery cost between cities where moving to the unique closest city costs 1, answered for many queries | SWE intern 2027 OA, India on-campus | 2026-07 | [post](https://leetcode.com/discuss/post/8396093/uber-2027-swe-intern-oa-experience-by-ra-4t3x/) |
| [Earliest timestamp when all users are connected through shared rides (union-find), follow-up with 'cancel ride' removals](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/) | SDE I, India | 2026-02 | [post](https://leetcode.com/discuss/post/7647484/uber-sde-i-interview-experience-feb-2026-snr8/) |
| Microservice restart cycles: services start only when dependencies are up, scanned 0 to N-1 per cycle; minimum cycles or impossible | SDE I, India | 2026-02 | [post](https://leetcode.com/discuss/post/7647484/uber-sde-i-interview-experience-feb-2026-snr8/) |
| [LLD: in-memory file system with mkdir, pwd and cd (similar to Design In-Memory File System)](https://leetcode.com/problems/design-in-memory-file-system/) | SDE I, India | 2026-02 | [post](https://leetcode.com/discuss/post/7647484/uber-sde-i-interview-experience-feb-2026-snr8/) |
| [Grid with spreading poisonous gas and walls: maximum time you can wait at (0,0) and still reach (n-1,m-1) (multi-source BFS plus binary search)](https://leetcode.com/problems/escape-the-spreading-fire/) | 6-month SDE intern with PPO, India | 2026-02 | [post](https://leetcode.com/discuss/post/7605181/how-i-got-a-6-month-sde-internship-ppo-a-qofy/) |
| OA: k-th largest subarray bitwise OR; index of k-th next greater element for every index; MST of a complete graph with 0/1 edge weights | SDE 1 OA, India | 2026-02 | [post](https://leetcode.com/discuss/post/7606241/uber-sde1-oa-24-feb-2026-by-octochet-7ub6/) |
| [OA: zones connected when gcd of signatures > 1, return each zone's cluster size (similar to Largest Component Size by Common Factor)](https://leetcode.com/problems/largest-component-size-by-common-factor/) | SWE I OA | 2026-01 | [post](https://leetcode.com/discuss/post/7650054/uber-swe-i-online-assessment-jan-2026-by-f05e/) |
| [Alien Dictionary (phone screen)](https://leetcode.com/problems/alien-dictionary/) | L4 SWE II, US, 2.5 YOE | 2025-09 | [post](https://leetcode.com/discuss/post/7217970/uber-sde2-interview-experience-us-offer-hfj64/) |
| [Find the Closest Palindrome (bar raiser DSA, follow-ups until time ran out)](https://leetcode.com/problems/find-the-closest-palindrome/) | L4 SWE II, US, 2.5 YOE | 2025-09 | [post](https://leetcode.com/discuss/post/7217970/uber-sde2-interview-experience-us-offer-hfj64/) |
| Design a restaurant recommendation system by location, then tighten latency (geohash, quadtree, sharding) | L4 SWE II, US, 2.5 YOE | 2025-09 | [post](https://leetcode.com/discuss/post/7217970/uber-sde2-interview-experience-us-offer-hfj64/) |
| [openRestaurant(r, c) and countDeliveryZones() on a grid; interviewer wanted union-find (Number of Islands II style)](https://leetcode.com/problems/number-of-islands-ii/) | SWE II backend, US (Grocery org) | 2025-10 | [post](https://leetcode.com/discuss/post/7270594/usa-uber-swe-ii-backend-interview-by-mat-wibz/) |
| [scheduleMeeting(start, end) across office rooms; follow-ups on 10,000 concurrent requests and binary search over sorted bookings](https://leetcode.com/problems/meeting-rooms-iii/) | SWE II backend, US (Grocery org) | 2025-10 | [post](https://leetcode.com/discuss/post/7270594/usa-uber-swe-ii-backend-interview-by-mat-wibz/) |
| [Evaluate Division, follow-up at 10 million equations](https://leetcode.com/problems/evaluate-division/) | SWE II, US (Marketplace onsite) | 2025-01 | [post](https://leetcode.com/discuss/post/6300303/uber-usa-onsite-technical-problems-by-an-idac/) |
| Ad event ingestion: consume events, per-day impressions and clicks, flag ads with X impressions and no click in Y days; storage and per-country follow-ups | SWE II, US (Marketplace onsite) | 2025-01 | [post](https://leetcode.com/discuss/post/6300303/uber-usa-onsite-technical-problems-by-an-idac/) |
| [Longest subarray with absolute difference at most limit, framed as drivers and cabs (four approaches down to monotonic deques)](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | SDE-2 (L4), Bangalore, 3 YOE | 2025-09 | [post](https://leetcode.com/discuss/post/7182332/uber-sde-2-interview-experience-l4-banga-fd1d/) |
| [Count islands in 2D, then 3D, then implement a 2D union-find](https://leetcode.com/problems/number-of-islands/) | L4 SDE-2 backend (offer) | 2026-03 | [post](https://leetcode.com/discuss/post/7706639/uber-l4-sde-2-interview-experience-offer-r0k1/) |
| LLD: circuit breaker that opens when request count exceeds a threshold, with OPEN, CLOSED and HALF_OPEN states and concurrency questions | L4 SDE-2 backend (offer) | 2026-03 | [post](https://leetcode.com/discuss/post/7706639/uber-l4-sde-2-interview-experience-offer-r0k1/) |
| Minimum time to burn an undirected tree when you may start the fire at any node | L4 screening, Bangalore hiring drive | 2026-02 | [post](https://leetcode.com/discuss/post/7578312/uber-interview-experience-oa-and-phone-s-z9hr/) |
| [Phone screen like Minimum Number of Taps to Open to Water a Garden; onsite Maximum Points You Can Obtain from Cards and Cheapest Flights Within K Stops; parking lot LLD; stock alert HLD](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) | L4, Bangalore, 3 YOE (offer) | 2025-05 | [post](https://leetcode.com/discuss/post/6770968/uber-l4-bangalore-offer-by-10399vk-c73t/) |
| [Longest Path With Different Adjacent Characters; LLD pub-sub queue with ordered processing](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) | Uber loop via referral (reject) | 2025-10 | [post](https://leetcode.com/discuss/post/8351633/uber-interview-experience-october-2025-r-y75m/) |
| Max XOR-subtree scores of two non-overlapping subtrees in a rooted tree | SDE-1, 2026 grad, India | 2026-05 | [post](https://leetcode.com/discuss/post/8298899/uber-sde-1-65-70lpa-ctc-2026-grad-dsa-in-4er2/) |

## Beyond LeetCode

Machine-coding LLD in 60 minutes with running code and tests (Splitwise, parking lot, circuit breaker with OPEN, CLOSED and HALF_OPEN states, pub-sub queue with ordering, in-memory file system with mkdir, cd and pwd). 'Depth in Specialization' coding round tailored to backend, frontend (for example Promise.all, widgets) or mobile (Android or iOS depth). India BPS elimination round. PhD ML intern round where you code a classic ML model from scratch. Bar raiser for experienced hires (reverse system design or deep project introspection).

## System design

New grads: usually no standalone HLD round in the US, but India SDE-1 loops include 15 minutes of HLD in the BPS and a design round (design a messaging app with DB schema; LLD for a Zomato-style food delivery system with classes, tables and consistency). Clarify LLD vs HLD early: one 2025 SDE-1 candidate wrote classes when interviewers wanted a real-world schema. L4: separate machine-coding LLD with running code and HLD. Hello Interview's free 'Design Uber' breakdown covers the classic ride-matching prompt.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Uber values (careers values page, archived Nov 2025): Go get it; Trip obsessed; Build with heart; Stand for safety; See the forest and the trees; One Uber; Great minds don't think alike; Do the right thing. Period. The onsite behavioral round is 'Collaboration and Leadership' with the hiring manager (75 minutes per interviewing.io). One US candidate structured stories with the CARL framework (Context, Action, Result, Learning). ([official page](https://web.archive.org/web/20251112091134/https://www.uber.com/us/en/careers/values/))

**What they look for:**

- Ownership of end-to-end delivery of a project
- Collaboration across teams and being a team player
- Handling conflict and critical feedback well
- A champion mindset on bad days (Go get it)
- Judgment on trade-offs and attention to details that matter
- Specific, verifiable stories (a 2026 hiring manager kept asking for more detail)

**Questions to prepare:**

- Tell me about a time you received critical feedback from your manager and how you handled it
- Tell me about a time you worked with someone outside your team
- Tell me about a conflict with a coworker and how you solved it
- How do you handle burnout on your team, and how do you stay afloat when things are stressful?
- Design the HLD of the most complex thing you have built (hiring manager round, SWE II)
- Tell me about a project conflict or a decision you had to make as a team (intern round)
- What project are you most proud of?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Drill union-find until you can write it from memory in 5 minutes; it shows up in OAs, phone screens and onsites across 2025 to 2026 reports.
- Solve the Uber-tagged LeetCode problems from the last 3 to 6 months; First Unique Number was reported in Feb 2025 and again in a Sep 2026 new grad screen.
- Expect every DSA problem to get scale or concurrency follow-ups (10,000 concurrent bookings, 10 million equations); think out loud about locks and data size.
- In machine coding, get to running code early, then refactor and add tests; interfaces and extensible classes score well.
- Ask at the start whether a design round is LLD (classes) or HLD (schema, services); misreading it cost an SDE-1 candidate a round.
- Read the recruiter's prep guide for 'Depth in Specialization'; backend new grads got standard LeetCode, mobile candidates get platform depth.
- Prepare 6 to 8 detailed stories for Collaboration and Leadership; hiring managers push for specifics to filter out invented stories.
- Keep other processes moving: mid-2026 reports describe paused onsites and roles closed after a hire decision.

## 4-week plan for Uber

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Uber values (careers values page, archived Nov 2025): Go get it; Trip obsessed; Build with heart; Stand for safety; See the forest and the trees; One Uber; Great minds don't think alike; Do the right thing. Period. The onsite behavioral round is 'Collaboration and Leadership' with the hiring manager (75 minutes per interviewing.io). One US candidate structured stories with the CARL framework (Context, Action, Result, Learning). round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://jobs.uber.com/>
- <https://jobs.uber.com/en/teams/emerging-talent/>
- <https://jobs.uber.com/en/what-moves-us/how-we-hire/>
- <https://jobs.uber.com/en/what-moves-us/life-at-uber/>
- <https://web.archive.org/web/20251112091134/https://www.uber.com/us/en/careers/values/>
- <https://www.uber.com/us/en/about/>
- <https://www.uber.com/blog/engineering/>
- <https://www.levels.fyi/companies/uber/salaries/software-engineer>
- <https://www.levels.fyi/companies/uber/salaries/software-engineer/locations/india>
- <https://interviewing.io/uber-interview-questions>
- <https://www.aced.io/blog/uber-interview-process>
- <https://www.hellointerview.com/learn/system-design/problem-breakdowns/uber>
- <https://www.hellointerview.com/community/questions/company/Uber>
- <https://github.com/snehasishroy/leetcode-companywise-interview-questions>
- <https://leetcode.com/discuss/post/8520134/uber-new-grad-sde-phone-screen-usa-first-k57o/>
- <https://leetcode.com/discuss/post/8396093/uber-2027-swe-intern-oa-experience-by-ra-4t3x/>
- <https://leetcode.com/discuss/post/7650054/uber-swe-i-online-assessment-jan-2026-by-f05e/>
- <https://leetcode.com/discuss/post/7647484/uber-sde-i-interview-experience-feb-2026-snr8/>
- <https://leetcode.com/discuss/post/7606241/uber-sde1-oa-24-feb-2026-by-octochet-7ub6/>
- <https://leetcode.com/discuss/post/7605181/how-i-got-a-6-month-sde-internship-ppo-a-qofy/>
- <https://leetcode.com/discuss/post/7578312/uber-interview-experience-oa-and-phone-s-z9hr/>
- <https://leetcode.com/discuss/post/7485346/uber-swe-hackerrank-oa-by-4fnefawe5c-o6b9/>
- <https://leetcode.com/discuss/post/7345883/uber-interview-sde1-by-anonymous_user-y70t/>
- <https://leetcode.com/discuss/post/7217970/uber-sde2-interview-experience-us-offer-hfj64/>
- <https://leetcode.com/discuss/post/7270594/usa-uber-swe-ii-backend-interview-by-mat-wibz/>

> **Watch out:** Most detailed public reports are India SDE-1, India and US SWE II; US new grad reports are fewer, so the US new grad loop combines a Sep 2026 phone-screen report, a May 2026 Reddit comment on the backend Depth in Specialization round, interviewing.io and Aced. OA vendor differs by region and season (CodeSignal vs HackerRank). The official values page now redirects to 'Life at Uber'; the values list comes from the Nov 2025 Wayback snapshot. Uber Career Prep and UberSTAR appear on the official early-talent page, but no current posting was verified. Hiring pauses (Jun 2026) are candidate reports, not official statements. Reddit claims (100% intern match rate, HR layoffs) are unverified comments. [UNVERIFIED] Glassdoor snippets seen only in search results: US new grad CodeSignal OA about 1.5 weeks after applying, interview invite about a month after the OA, a 1-hour LeetCode screen on Zoom, and a 3-round loop of 2 LeetCode mediums plus behavioral; Glassdoor pages could not be fetched. LeetCode Discuss URLs were confirmed through LeetCode's GraphQL API because the pages block automated browsers.

Next: [All companies](index.md)
