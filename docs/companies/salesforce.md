# Salesforce interview guide

AI CRM (Agentforce, Slack, Tableau). Interviews: HackerRank OA, LeetCode-medium DSA on CodePair, OOP/LLD rounds, and a required onsite before any offer. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Summer Intern, Software Engineer (Futureforce). Summer 2027 US posting (Aug 31, 2026): 8 US locations, must be enrolled in a North American BS/MS and return to school after the internship. India interns are titled AMTS intern (Bangalore/Hyderabad). |
| **New grad level** | AMTS: Associate Member of Technical Staff (posting title 'Software Engineering AMTS (College Grad)'). Levels.fyi lists Associate MTS as the entry level. |
| **0 to 3 years** | AMTS for 0 to about 2 yrs (Levels.fyi India typical YOE 1 to 2); MTS for roughly 2 to 5 yrs (Levels.fyi India typical 4 to 5, though India MTS loops are reported at about 3 yrs); SMTS (Senior MTS) after that (Levels.fyi India typical 6 to 7). |
| **Online assessment** | HackerRank : AMTS: 3 coding questions in 90 to 100 min (last one hard). MTS/SMTS: 2 medium coding questions in 75 min. A C++ SE OA (May 2026): 2 questions, 75 min, worth 50 and 75 marks, 80% to qualify. |
| **Coding rounds** | AMTS: 1 to 2 technical rounds (45 to 60 min). MTS: 1 to 3 DSA or DSA plus LLD rounds. |
| **Behavioral** | Salesforce core values (Trust, Customer Success, Innovation, Equality, Sustainability) plus the STAR method (the official Futureforce university page links Salesforce's 'Use the STAR Method to Ace Your Next Job Interview' careers blog). Official how-we-hire page: behavioral, competency-based, or situational questions about real-life situations. |
| **Timeline** | Example MTS India (Aug 2026): apply day 0, OA day 3, shortlist day 11, 3-round loop on one day day 21, positive feedback day 28, offer day 38. Futureforce postings: Summer 2027 SWE intern opened Aug 31, 2026; AMTS College Grad opened Sep 24, 2026. India runs weekend hiring drives in Hyderabad and Bangalore. Context: on the 20VC podcast (Dec 2024) Marc Benioff said Salesforce would not add software engineers in 2025 because of AI productivity, yet AMTS and MTS offers kept being reported through Sep 2026. |
| **New grad pay** | Levels.fyi (data as of Oct 4, 2026), US: Associate MTS median TC about $178K (base $145K, stock $21K/yr, bonus $12K); MTS about $193K. Official US AMTS College Grad posting (Sep 2026): base $110,000 to $153,000, or $141,000 to $163,000 in select San Francisco and New York City areas. Summer 2027 SWE intern: $43 to $52 per hour. India: Levels.fyi Associate MTS median about INR 26L TC; reported 2026 AMTS offers base INR 16.5L to 18L, joining bonus INR 4L to 5L, RSUs $25K to $28K over 4 yrs (first-year about INR 29L to 30L); India intern stipend INR 1.5L per month (Feb 2026). RSUs vest 25% in year 1, then quarterly. |
| **Official links** | [Careers](https://www.salesforce.com/company/careers/), [Students](https://www.salesforce.com/company/careers/university/), [Official interview prep](https://www.salesforce.com/company/careers/culture/how-we-hire/), [Values](https://www.salesforce.com/company/our-values/) |

## Interview process

### New grad

1. **Application.** Apply on Salesforce's Workday 'Futureforce' site (US AMTS College Grad JR355250 posted Sep 24, 2026: San Francisco, Palo Alto, Seattle, Bellevue, Indianapolis, Dallas; must be located in North America). Salesforce recommends applying to no more than 3 roles in a 12-month period. Official: an automated employment decision tool helps recruiters assess resumes (candidates can opt out via an AI accommodations form). In India, referrals and 'pool campus' interest forms lead to OAs.
2. **HackerRank online assessment.** AMTS (India 2026): 3 coding questions in 90 to 100 min; first two medium to medium-hard, the third hard and decisive. Topics: trees (diameter endpoints, Collect Coins in a Tree), bit tricks, XOR simulation. One India 2026 AMTS OA was called relatively easy versus earlier years.
3. **Technical round 1 (virtual, 45 to 60 min).** HackerRank CodePair with about 15 prewritten test cases per problem. Sometimes a puzzle first, then 2 LeetCode mediums (arrays, strings, priority queues; Kth Largest, Rotting Oranges, stock DP). You must explain approach and complexity and pass the tests.
4. **Technical round 2 (often in person at the Bangalore or Hyderabad office in India).** Either OOP/LLD (implement LRU then LFU as production-ready classes; Library Management System with schema and API) or a resume plus fundamentals round (Java vs JavaScript, multithreading, DBMS indexing, inheritance trade-offs, JS event loop and hoisting) ending with a whiteboard DSA problem. One Aug 2026 AMTS round 2 also included an AI-tools discussion (using Claude effectively, prompting within token limits, what makes a good prompt).
5. **Hiring manager round (onsite).** Behavioral plus project discussion. Official: most interviews run on Google Meet with camera on, and an onsite interview at a Salesforce office is mandatory before an offer.

### Intern

1. **HackerRank OA.** India Summer 2026 AMTS intern track (2025): 3 hard questions (median of odd-length subarrays, binary lifting like CSES Planets Queries I, minimize tree diameter by removing leaves). The 2026 Futureforce AI Challenge had 3 competitive-programming problems (the post does not state the country).
2. **Technical interview(s).** 1 to 2 DSA problems (Maximum Earnings From Taxi variant with tips; sum of all subarray sums; count pairs with product at most k in O(n)) plus CS fundamentals (ACID, semaphores vs mutexes) and design patterns. Only 3 of 8 advanced past round 1 in one 2026 report.
3. **Final round.** Project walkthrough and behavioral (API calls you made and why, working alone vs in a team). In 2025 India finalists attended a 3-day Futureforce Tech Accelerator in Hyderabad ending with a competency (HR) round.
4. **US interns.** No 2025 to 2026 US intern interview reports found. The Summer 2027 US posting lists AI-assisted development experience (Copilot, Cursor, Claude Code) and reviewing LLM-generated code as pluses.

### With 1 to 3 years of experience

MTS (about 1.5 to 4 yrs): recruiter outreach (often via LinkedIn) or referral, HackerRank OA with 2 questions (75 min in SMTS and C++ SE reports; the C++ SE OA required 80% to qualify), then 2 to 5 rounds frequently on one day: DSA (Maximum Profit in Job Scheduling, Top-K over a stream, merge sort from scratch), DSA plus LLD (Splitwise, LUDO, Blinkit-style inventory with reserve/confirm/release), and a hiring manager round that includes HLD (payment processing platform, Saga pattern, idempotency, non-functional requirements). A US full-stack SDE candidate (San Francisco, Mar 2026) reported: HM first, then OA, a frontend technical round, and an onsite with DSA and HLD. Other 2026 variants: a 45-min screen with a PMTS covering one coding problem plus one PR (code) review (May 2026), and an SMTS hiring drive that opened with a pre-screening LLD round (Jul 2026). A role can also close after a full loop, with the profile kept for other MTS openings (Sep 2026).

## Online assessment

- **Platform:** HackerRank
- **Format:** AMTS: 3 coding questions in 90 to 100 min (last one hard). MTS/SMTS: 2 medium coding questions in 75 min. A C++ SE OA (May 2026): 2 questions, 75 min, worth 50 and 75 marks, 80% to qualify.
- **Notes:** Recent OA topics: Collect Coins in a Tree style (Feb 2026), Minimum Operations to Reduce an Integer to 0 (AMTS Jan 2026 and SMTS May 2026), XOR log updates, tree diameter endpoints, sliding window over request timestamps, greedy array partition cost. Official prep video: 'HackerRank Tips with a Senior Software Engineer at Salesforce'. Jan 2026: an India-only HackerRank 'AI Interviewer' general SWE assessment was reported.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** AMTS: 1 to 2 technical rounds (45 to 60 min). MTS: 1 to 3 DSA or DSA plus LLD rounds.
- **Style:** LeetCode medium (Rotting Oranges, Kth Largest, House Robber, Path with Maximum Probability, Valid Parentheses) with occasional hards (Maximum Profit in Job Scheduling, LFU Cache). OOP/LLD with 'production-ready' code is its own round.
- **Environment:** HackerRank CodePair with prewritten test cases; Google Meet, camera on. In-person rounds in India may be on a whiteboard. interviewing.io notes some teams use Quip documents.
- **Graded on:** Working code that passes the provided tests, time and space complexity, edge cases, and clean OOP structure (class design, separation of responsibilities, maintainability).
- **Reported focus topics:** Caches as OOP (LRU, LFU, pluggable eviction), Graphs and grids (Rotting Oranges, islands, max-probability paths, dependency DFS), Trees in OAs (diameter endpoints, Collect Coins in a Tree), DP (job scheduling, House Robber, stock problems, pick/not-pick), Heaps and top-K over streams, Sliding window and two pointers (anagrams, request windows), Bit manipulation (powers of 2, set bits), LLD: Splitwise, LUDO, library, inventory reservation, Java/OOP fundamentals, multithreading, DBMS indexing

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **38** distinct problems tagged to Salesforce in the last 6 months (8 in the last 30 days, 25 in the last 3 months, 201 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 63%, Hard 29%, Easy 8%

**Most tagged topics (share of problems):** Array 50%, Hash Table 32%, Sorting 26%, String 24%, Dynamic Programming 21%, Breadth-First Search 16%, Greedy 13%, Depth-First Search 13%, Heap (Priority Queue) 13%, Two Pointers 11%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Minimum Operations to Reduce an Integer to 0](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/) | Medium | 30 days | Dynamic Programming, Greedy, Bit Manipulation |
| 2 | [Time Needed to Rearrange a Binary String](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/) | Medium | 30 days | String, Dynamic Programming, Simulation |
| 3 | [String Compression](https://leetcode.com/problems/string-compression/) | Medium | 30 days | Two Pointers, String |
| 4 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 30 days | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 5 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 30 days | Array, Sorting, Quicksort |
| 6 | [Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/) | Easy | 30 days | Array, Math, Sorting |
| 7 | [Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing/) | Hard | 30 days | Array, Dynamic Programming, Backtracking, Bit Manipulation |
| 8 | [Count Vowel Substrings of a String](https://leetcode.com/problems/count-vowel-substrings-of-a-string/) | Easy | 30 days | Hash Table, String |
| 9 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | Hard | 3 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 10 | [Maximum Palindromes After Operations](https://leetcode.com/problems/maximum-palindromes-after-operations/) | Medium | 3 months | Array, Hash Table, String, Greedy |
| 11 | [Minimum Removals to Balance Array](https://leetcode.com/problems/minimum-removals-to-balance-array/) | Medium | 3 months | Array, Binary Search, Sliding Window, Sorting |
| 12 | [Minimum Replacements to Sort the Array](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/) | Hard | 3 months | Array, Math, Greedy |
| 13 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Medium | 3 months | String, Dynamic Programming, Backtracking, Bracket Sequences |
| 14 | [Minimum Edge Reversals So Every Node Is Reachable](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/) | Hard | 3 months | Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory |
| 15 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | Medium | 3 months | Array, Greedy, Heap (Priority Queue) |
| 16 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | Medium | 3 months | Array, Stack, Simulation |
| 17 | [Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) | Medium | 3 months | String, Stack |
| 18 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | 3 months | Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort |
| 19 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | 3 months | Array, Two Pointers, Greedy, Sorting |
| 20 | [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | Medium | 3 months | Hash Table, Tree, Depth-First Search, Breadth-First Search |
| 21 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | Medium | 3 months | Array, Hash Table, Sliding Window |
| 22 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | 3 months | String, Dynamic Programming, Backtracking |
| 23 | [Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/) | Hard | 3 months | Array, Two Pointers, Binary Search, Dynamic Programming |
| 24 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | 3 months | Array, Hash Table, Prefix Sum |
| 25 | [Angle Between Hands of a Clock](https://leetcode.com/problems/angle-between-hands-of-a-clock/) | Medium | 3 months | Math |
| 26 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 27 | [Collect Coins in a Tree](https://leetcode.com/problems/collect-coins-in-a-tree/) | Hard | 6 months | Array, Tree, Graph Theory, Topological Sort |
| 28 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 6 months | Array, Hash Table, String, Sorting |
| 29 | [Strange Printer](https://leetcode.com/problems/strange-printer/) | Hard | 6 months | String, Dynamic Programming |
| 30 | [Minimum Absolute Difference](https://leetcode.com/problems/minimum-absolute-difference/) | Easy | 6 months | Array, Sorting |
| 31 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 32 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium | 6 months | Hash Table, Linked List, Design, Heap (Priority Queue) |
| 33 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | 6 months | Array, Breadth-First Search, Matrix |
| 34 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | 6 months | Two Pointers, Design, Sorting, Heap (Priority Queue) |
| 35 | [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | Hard | 6 months | Hash Table, Tree, Depth-First Search, Breadth-First Search |
| 36 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | 6 months | Array, Hash Table, Union-Find |
| 37 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Tree |
| 38 | [Time Taken to Cross the Door](https://leetcode.com/problems/time-taken-to-cross-the-door/) | Hard | 6 months | Array, Queue, Simulation |

### Signature problems

Problems where Salesforce accounts for a large share of all recent tags across companies. These are the most Salesforce-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Minimum Operations to Reduce an Integer to 0](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/) | Medium | 30 days | Dynamic Programming, Greedy, Bit Manipulation |
| 2 | [Time Needed to Rearrange a Binary String](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/) | Medium | 30 days | String, Dynamic Programming, Simulation |
| 3 | [Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/) | Easy | 30 days | Array, Math, Sorting |
| 4 | [Maximum Palindromes After Operations](https://leetcode.com/problems/maximum-palindromes-after-operations/) | Medium | 3 months | Array, Hash Table, String, Greedy |
| 5 | [Minimum Removals to Balance Array](https://leetcode.com/problems/minimum-removals-to-balance-array/) | Medium | 3 months | Array, Binary Search, Sliding Window, Sorting |
| 6 | [Minimum Replacements to Sort the Array](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/) | Hard | 3 months | Array, Math, Greedy |
| 7 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | Medium | 3 months | Array, Greedy, Heap (Priority Queue) |
| 8 | [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) | Medium | 3 months | Hash Table, Tree, Depth-First Search, Breadth-First Search |
| 9 | [Collect Coins in a Tree](https://leetcode.com/problems/collect-coins-in-a-tree/) | Hard | 6 months | Array, Tree, Graph Theory, Topological Sort |
| 10 | [Time Taken to Cross the Door](https://leetcode.com/problems/time-taken-to-cross-the-door/) | Hard | 6 months | Array, Queue, Simulation |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | AMTS (India pool campus) | 2026-09 | [post](https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/) |
| [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | AMTS (India pool campus) | 2026-09 | [post](https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/) |
| [Best Time to Buy and Sell Stock, then a DP version](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | AMTS (India pool campus) | 2026-09 | [post](https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/) |
| [Implement an LRU cache from scratch as production-ready OOP code](https://leetcode.com/problems/lru-cache/) | AMTS (India pool campus) | 2026-09 | [post](https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/) |
| [Extend to an LFU cache](https://leetcode.com/problems/lfu-cache/) | AMTS (India pool campus) | 2026-09 | [post](https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/) |
| [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | MTS (India, about 3 yrs) | 2026-09 | [post](https://leetcode.com/discuss/post/8508596/salesforce-mts-interview-experience-indi-dcdb/) |
| Task dependency queries: is task X a direct or indirect dependency of Y (precompute with DFS) | MTS (India, about 3 yrs) | 2026-09 | [post](https://leetcode.com/discuss/post/8508596/salesforce-mts-interview-experience-indi-dcdb/) |
| LLD: implement LUDO | MTS (India, about 3 yrs) | 2026-09 | [post](https://leetcode.com/discuss/post/8508596/salesforce-mts-interview-experience-indi-dcdb/) |
| [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | MTS (India) | 2026-09 | [post](https://leetcode.com/discuss/post/8500258/salesforce-mts-interview-experience-indi-lcbq/) |
| [House Robber](https://leetcode.com/problems/house-robber/) | MTS (India) | 2026-09 | [post](https://leetcode.com/discuss/post/8500258/salesforce-mts-interview-experience-indi-lcbq/) |
| LLD: Splitwise with split types (who owes whom, how much A owes B) | MTS (India) | 2026-08 | [post](https://leetcode.com/discuss/post/8461169/salesforce-mts-interview-experience-aug-uxjdp/) |
| [Top K most frequent numbers over an infinite stream with interleaved add/query](https://leetcode.com/problems/top-k-frequent-elements/) | MTS (India) | 2026-08 | [post](https://leetcode.com/discuss/post/8475325/salesforce-mts-interview-experience-sele-3z8k/) |
| [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | MTS (India) | 2026-08 | [post](https://leetcode.com/discuss/post/8475325/salesforce-mts-interview-experience-sele-3z8k/) |
| [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | AMTS (Bangalore) | 2026-01 | [post](https://leetcode.com/discuss/post/7650288/salesforce-amts-bangalore-jan-2026-inter-5dfd/) |
| [Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/) | AMTS (Bangalore) | 2026-01 | [post](https://leetcode.com/discuss/post/7650288/salesforce-amts-bangalore-jan-2026-inter-5dfd/) |
| Design a Library Management System (entities, tables, filter API, trending books) | AMTS (Bangalore) | 2026-01 | [post](https://leetcode.com/discuss/post/7650288/salesforce-amts-bangalore-jan-2026-inter-5dfd/) |
| [OA: minimum operations to reduce n to 0 by adding or subtracting powers of 2](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/) | AMTS OA (Bangalore) | 2026-01 | [post](https://leetcode.com/discuss/post/7650288/salesforce-amts-bangalore-jan-2026-inter-5dfd/) |
| [OA: collect all important data in a tree within distance 2, return minimum edges traversed](https://leetcode.com/problems/collect-coins-in-a-tree/) | Salesforce OA (role and country not stated in the post) | 2026-02 | [post](https://leetcode.com/discuss/post/7558530/salesforce-oa-lets-discuss-the-solution-nyrmk/) |
| [Maximum Earnings From Taxi variant (profit = end - start + tip)](https://leetcode.com/problems/maximum-earnings-from-taxi/) | AMTS Intern (India) | 2026-04 | [post](https://leetcode.com/discuss/post/8025475/salesforce-intern-amts-accepted-by-anony-juz2/) |
| [OA: String Compression variant (aaaabeee to a4be3)](https://leetcode.com/problems/string-compression/) | Software Engineer (C++) OA | 2026-05 | [post](https://leetcode.com/discuss/post/8277956/salesforce-se-online-assessment-hackerra-jdht/) |
| OA: maximum number of requests inside any window of windowSize (sort plus sliding window) | MTS OA (India); also in a May 2026 SMTS OA | 2026-08 | [post](https://leetcode.com/discuss/post/8508596/salesforce-mts-interview-experience-indi-dcdb/) |
| [Convert a sorted doubly linked list into a height-balanced BST in place (no new nodes)](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) | MTS (India) | 2026-08 | [post](https://leetcode.com/discuss/post/8475325/salesforce-mts-interview-experience-sele-3z8k/) |

## Beyond LeetCode

OOP/LLD machine-coding rounds ('production-ready' LRU/LFU, Splitwise, LUDO, Blinkit-style inventory). A logic puzzle before coding in some AMTS rounds. CS fundamentals rounds (Java vs JavaScript, multithreading, DBMS indexing, OOP inheritance trade-offs, JS event loop). India-only Futureforce AI Challenge (2026) and a Futureforce Tech Accelerator event with a final competency round (2025). HackerRank 'AI Interviewer' assessment reported in India (Jan 2026). PR (code) review inside a 45-min screening round (May 2026 report). AI-tools prompting discussion inside an AMTS technical round (Aug 2026).

## System design

AMTS: usually LLD/OOP rather than HLD: LRU then LFU as classes, Library Management System (entities, tables, gRPC-style filter request, thread-safe trending counts with a heap). MTS (1.5 to 4 yrs): a dedicated LLD round (Splitwise, LUDO, inventory reservation service) plus HLD inside the HM round (payment processing platform, Saga pattern, idempotency, retries, observability). interviewing.io also mentions CRM-flavored design and SQL questions.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Salesforce core values (Trust, Customer Success, Innovation, Equality, Sustainability) plus the STAR method (the official Futureforce university page links Salesforce's 'Use the STAR Method to Ace Your Next Job Interview' careers blog). Official how-we-hire page: behavioral, competency-based, or situational questions about real-life situations. ([official page](https://www.salesforce.com/company/our-values/))

**What they look for:**

- Real examples tied to the job description's qualifications
- Customer impact and trust (reliability, ethics)
- Ownership of projects: architecture decisions, production issues, trade-offs
- Collaboration and handling disagreement
- Mentoring and driving initiatives (MTS)
- Business understanding (official tip: learn basics on Trailhead)

**Questions to prepare:**

- Why are you looking for a change?
- What are your career goals, and have you mentored anyone?
- Tell me about a disagreement and how you handled it.
- Tell me about an initiative you drove across teams.
- What are the trade-offs of working alone versus in a team?
- What activity outside your studies has helped you in real life?
- Why did you pick those teammates for your project?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Apply to no more than 3 Salesforce roles in 12 months (official recommendation), and apply to the AMTS College Grad posting in its first week (it opened Sep 24, 2026).
- Budget for travel: Salesforce requires an onsite at one of its offices before any offer, and India loops move round 2 into the Bangalore or Hyderabad office.
- In the HackerRank OA, fully solve the first two questions before the hard third one; partial credit on the third has still led to interview calls.
- Practice LRU then LFU as clean, class-based code with clear responsibilities; interviewers grade 'production-ready' OOP, not just correctness.
- Prepare 3 LLDs end to end: Splitwise, a board game (LUDO), and an inventory reservation service with reserve/confirm/release.
- Show AI-tool fluency: the 2026 AMTS and intern postings list reviewing LLM-generated code and tools like Copilot, Cursor and Claude Code as pluses.
- Map 2 stories each to Trust and Customer Success and tell them in STAR form (Salesforce's own careers blog teaches STAR).
- Watch Salesforce's official 'HackerRank Tips with a Senior Software Engineer' video before the OA.
- Practice reviewing a pull request out loud: one 2026 screen paired a coding problem with a PR review.

## 4-week plan for Salesforce

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Salesforce core values (Trust, Customer Success, Innovation, Equality, Sustainability) plus the STAR method (the official Futureforce university page links Salesforce's 'Use the STAR Method to Ace Your Next Job Interview' careers blog). Official how-we-hire page: behavioral, competency-based, or situational questions about real-life situations. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.salesforce.com/company/careers/>
- <https://www.salesforce.com/company/careers/university/>
- <https://www.salesforce.com/company/careers/culture/how-we-hire/>
- <https://www.salesforce.com/company/our-values/>
- <https://www.salesforce.com/blog/use-the-star-method-to-ace-your-next-job-interview/>
- <https://www.youtube.com/watch?v=VBmhOvzvx3g>
- <https://www.youtube.com/c/SalesforceCareersUniversity>
- <https://www.linkedin.com/showcase/futureforce-salesforce-university-recruiting/>
- <https://salesforce.wd12.myworkdayjobs.com/Futureforce_NewGradRoles/job/California---San-Francisco/Software-Engineering-AMTS--College-Grad-_JR355250>
- <https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer_JR340771>
- <https://jugaldb.substack.com/p/494-summer-2027-internships-are-already>
- <https://jugaldb.substack.com/p/the-hidden-ai-career-paying-up-to>
- <https://www.levels.fyi/companies/salesforce/salaries/software-engineer>
- <https://www.levels.fyi/companies/salesforce/salaries/software-engineer/locations/india>
- <https://interviewing.io/salesforce-interview-questions>
- <https://www.salesforceben.com/salesforce-will-hire-no-more-software-engineers-in-2025-says-marc-benioff/>
- <https://leetcode.com/discuss/post/8514030/salesforce-amts-interview-experience-ind-ijyg/>
- <https://leetcode.com/discuss/post/8488321/salesforce-amts-interview-experience-new-csmd/>
- <https://leetcode.com/discuss/post/8508596/salesforce-mts-interview-experience-indi-dcdb/>
- <https://leetcode.com/discuss/post/8500258/salesforce-mts-interview-experience-indi-lcbq/>
- <https://leetcode.com/discuss/post/8461169/salesforce-mts-interview-experience-aug-uxjdp/>
- <https://leetcode.com/discuss/post/8475325/salesforce-mts-interview-experience-sele-3z8k/>
- <https://leetcode.com/discuss/post/8497172/blinkit-lld-question-by-cocovanilla-cb4w/>
- <https://leetcode.com/discuss/post/8493121/salesforce-amts-compensation-fresh-grad-oueyx/>
- <https://leetcode.com/discuss/post/8382897/need-help-how-to-prepare-for-salesforce-s31rr/>

> **Watch out:** Nearly all 2025 to 2026 interview reports come from India (Bangalore/Hyderabad). US AMTS and US intern loops have almost no public 2025 to 2026 write-ups; the US structure (recruiter call, 1-hr technical screen, about 4-hr onsite with 2 hrs coding, 1 hr design, 1 hr behavioral, team-dependent, sometimes using Quip) comes from interviewing.io and may be dated. Salesforce hiring is decentralized by cloud/team, so rounds vary. The Benioff 'no new engineers in 2025' statement (Dec 2024, via SalesforceBen summarizing 20VC) conflicts with continued AMTS/MTS hiring; treat headcount as volatile. The HackerRank 'AI Interviewer' assessment is a single India report (Jan 2026). Jugal's FDE post lists Salesforce among companies investing in Forward Deployed Engineers; FDE loops were not researched here. LeetCode posts read in full via LeetCode's API on Oct 4, 2026. Fact-check pass (Oct 4, 2026): official how-we-hire claims re-verified (3 roles in 12 months, automated resume-screening tool with opt-out, Google Meet on camera, onsite required before an offer, behavioral/competency/situational questions, Trailhead tip); both Workday postings re-verified via the Workday JSON API (pay, locations, North America requirement, AI-tool language). Fixes: AMTS/MTS YOE bands aligned with Levels.fyi; one OA report re-labeled because the post names neither role nor country; the US full-stack report is an SDE post, not MTS; STAR is linked (not stated) on the university page. An Aug 2025 PPO report (base INR 16.5L, $28K RSUs, INR 5L joining) corroborates the 2026 AMTS comp range.

Next: [All companies](index.md)
