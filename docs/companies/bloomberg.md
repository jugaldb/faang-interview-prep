# Bloomberg interview guide

Builds the Bloomberg Terminal and financial data systems; interviews are LeetCode-tagged mediums with resume talk, then HR and engineering manager rounds. Updated October 2026.

| | |
|---|---|
| **Category** | Finance and quant |
| **Intern level** | Software Engineering Intern (summer; official page says 6 to 10 weeks or up to 6 months depending on region). Entry-level and intern SWE roles are not tied to a team at application time (official). |
| **New grad level** | Software Engineer (single entry title; Bloomberg says it uses fewer titles than hierarchical firms: individual contributors vs people managers). |
| **0 to 3 years** | Software Engineer for roughly 0 to 4 years (Levels.fyi entries with 3 to 4 YOE are still 'Software Engineer'); next is Senior Software Engineer (Levels.fyi median 8 YOE), then Team Lead titles. |
| **Online assessment** | Usually none for US SWE new grad and intern (reported); some roles use a Plum assessment or other assessments per the official How We Hire page : Not applicable for most SWE candidates; round 1 is a live technical interview |
| **Coding rounds** | 3 technical (round 1 plus 2 onsite), sometimes 2 or 4 |
| **Behavioral** | Bloomberg values plus motivation ('why Bloomberg'). Official experienced-hire guide asks for STAR-style stories on collaboration, leadership, innovation and overcoming challenges. |
| **Timeline** | US new grad 2026 example: applied Nov 11, 2025; round 1 Nov 25; full loop (2 technicals plus HR) Jan 15, 2026; EM round Jan 21 (about 2 months). Feb 2025 example: HR scheduled each next round about a week later, with a month gap over the holidays. Summer 2026 intern invites went out mid-September 2025. Offers came 2 days to 2 weeks after the EM round. No hiring committee or team match before the offer is reported; official page says entry-level and intern roles are not team-specific and Bloomberg helps you find a team. |
| **New grad pay** | Levels.fyi (checked Oct 4, 2026): 'Software Engineer' level averages about $206K total comp in the US (16 data points, median 3 YOE, no stock component). New grad NYC entries from Sep 2026: $158K base plus $30K to $32.5K bonus, i.e. $188K to $190.5K. A Feb 2025 NYC new grad offer on Reddit: $158K base, about $23.5K bonus, $10K relocation. London Software Engineer median about £98.7K. Interns (Levels.fyi): NYC $52/hr (Summer 2026), San Francisco $50/hr (Summer 2025), London about $27.5/hr (Summer 2026). |
| **Official links** | [Careers](https://www.bloomberg.com/company/what-we-do/engineering-cto/), [Students](https://www.bloomberg.com/company/early-careers/), [Official interview prep](https://www.bloomberg.com/company/careers/how-we-hire/), [Values](https://www.bloomberg.com/company/values/) |

## Interview process

### New grad

1. **Application.** Official flow: Application, Screening, (Assessment for certain entry-level roles), Interviews, Offer. Certain entry-level roles require a Plum assessment (official). US new grad links are often shared by campus recruiters or at Bloomberg events and through referrals (Sep 2025 and Dec 2025 Reddit reports). As of Oct 4, 2026, Bloomberg's public job search showed no 2027 SWE new grad or intern postings, consistent with link-based recruiting.
2. **Round 1 technical (60 min, video or on campus).** Official step: video interview with an engineer from the department. Reported: about 10 to 15 min intro, resume and project questions and 'why Bloomberg', then 40 to 45 min for 1 to 2 LeetCode-style mediums (often Bloomberg-tagged), then 5 to 10 min for your questions. One Dec 2025 candidate coded in a HackerRank pad where they had to define the node classes themselves. Usually no OA beforehand.
3. **Virtual onsite: 2 technical interviews.** About 1 hour each, often 2 interviewers, 1 to 2 problems per round ranging easy to hard (graphs, backtracking, trees, linked lists, design-a-class). Some candidates get a third technical. In London, one round can be system design (HLD of a Terminal feature, top-N news). Sometimes scheduled back to back on one day with the HR round.
4. **HR interview (about 30 min).** Why Bloomberg, motivation, 4 to 5 general behavioral questions, other offers or processes, and salary expectations; one candidate was walked through what the first two months at Bloomberg look like.
5. **Engineering Manager interview (30 to 80 min).** In-depth project walkthrough: design choices, technology tradeoffs, scalability and reliability, how you handle competing priorities; sometimes a light design question (e.g. modernizing a legacy system). Reported as conversational and the most variable round.
6. **Offer.** Offer call 2 days to 2 weeks after the EM round. Example Feb 2025 NYC offer: $158K base, about $23.5K performance bonus (80% guaranteed in year one), $10K relocation, no sign-on.

### Intern

1. **Round 1 technical (60 min video).** About 10 min resume/behavioral, then 45 to 50 min of 1 to 2 LeetCode-style questions. Summer 2026 NYC candidates (Sep to Oct 2025) reported BFS and graph problems; one reported a LeetCode hard and another a trie. Invites arrived within days of applying in mid-Sep 2025.
2. **Rounds 2 and 3 technical.** Two more technical interviews, often back to back or on a 'super interview day' (London, Nov 2025). A 2025 London intern got an O(1) add/remove/random-pick lottery system plus questions on JUnit testing, and a design round on a real-time stock price feed with price history.
3. **HR round (30 min).** Ambitions, why Bloomberg, working alone vs in a team; the 2025 London intern discussed Bloomberg's values and philanthropy.
4. **Engineering Manager round.** Background, deeper technical discussion of your experience, sometimes a light system design chat (Nov 2025 Reddit).
5. **Offer.** 2025 London intern: applied in November, offer in March. Levels.fyi Summer 2026: NYC $52/hr, London about $27.5/hr.

### With 1 to 3 years of experience

Official experienced-hire process: one or two phone interviews (HR or engineer, then a 45 to 60 min technical call on coding fluency, problem solving and CS fundamentals), then in-house interviews lasting two hours to a full day, each round about an hour with two engineers from the hiring team. Questions are open-ended with multiple solutions and cover coding, data structures, algorithms and design; you can choose paper, whiteboard or laptop and your language. For 1 to 3 years you still interview as 'Software Engineer', but system design shows up more consistently and the EM round goes deeper into ownership and production experience.

## Online assessment

- **Platform:** Usually none for US SWE new grad and intern (reported); some roles use a Plum assessment or other assessments per the official How We Hire page
- **Format:** Not applicable for most SWE candidates; round 1 is a live technical interview
- **Notes:** Official: certain entry-level roles require a Plum assessment; some roles use pre-recorded video interviews or virtual skills assessments, and the recruiter tells you if one applies. A Sep 2025 commenter said Bloomberg does not do OAs for new grad SWE.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 3 technical (round 1 plus 2 onsite), sometimes 2 or 4
- **Style:** LeetCode easy to medium with occasional hards; many questions match or resemble the Bloomberg-tagged list; design-a-class problems (hit counter, min stack, O(1) randomized set, underground system) are common.
- **Environment:** Zoom or on campus with a shared coding pad (HackerRank pad reported); in-house you can choose paper, whiteboard or laptop (official). Some interviewers do not compile the code; others ask you to run and dry-run it.
- **Graded on:** Official four pillars: data structure knowledge, algorithms knowledge, problem solving skills, communication skills. Official: 'We'll focus more on your problem-solving skills and coding fluency than on finding the most optimal solution and running code.'
- **Reported focus topics:** Arrays, strings and hash maps (Two Sum, Group Anagrams, Longest Substring Without Repeating Characters), Linked lists (two linked-list mediums in one Jan 2026 round 1), Trees and n-ary trees, Graphs: BFS/DFS, shortest paths, weighted graphs (currency conversion), Stacks (Decode String, Min Stack), Design-a-class problems (Hit Counter, LRU Cache, Insert Delete GetRandom O(1), Design Underground System), Intervals and two pointers (Merge Intervals, Container With Most Water, Trapping Rain Water), Backtracking (Combination Sum), Basic system design for London/Europe and experienced roles (real-time feeds, news ranking)

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **417** distinct problems tagged to Bloomberg in the last 6 months (86 in the last 30 days, 274 in the last 3 months, 1175 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 56%, Easy 31%, Hard 13%

**Most tagged topics (share of problems):** Array 55%, String 25%, Hash Table 24%, Dynamic Programming 17%, Sorting 17%, Math 15%, Two Pointers 14%, Depth-First Search 11%, Binary Search 11%, Stack 9%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 30 days | Array, Hash Table |
| 2 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 30 days | Hash Table, String, Sliding Window |
| 3 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | 30 days | Array, Dynamic Programming |
| 4 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | 30 days | Array, Two Pointers, Dynamic Programming, Stack |
| 5 | [Decode String](https://leetcode.com/problems/decode-string/) | Medium | 30 days | String, Stack, Recursion |
| 6 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 30 days | Array, Sorting, Quicksort |
| 7 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Medium | 30 days | Linked List, Math, Recursion |
| 8 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 30 days | Array, Hash Table, String, Sorting |
| 9 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | 30 days | Array, Hash Table, Prefix Sum |
| 10 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | 30 days | Array, Two Pointers, Greedy |
| 11 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | 30 days | Two Pointers, String, Dynamic Programming, Manacher |
| 12 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | 30 days | Array, Math, Matrix |
| 13 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | 30 days | Array, Two Pointers, Sorting |
| 14 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | 30 days | Array, Binary Search, Divide and Conquer |
| 15 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 30 days | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 16 | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | Medium | 30 days | Array, Hash Table, Math, Design |
| 17 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | 30 days | Array, Hash Table, Union-Find |
| 18 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | Easy | 30 days | Math, Dynamic Programming, Memoization |
| 19 | [Design Underground System](https://leetcode.com/problems/design-underground-system/) | Medium | 30 days | Hash Table, String, Design |
| 20 | [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) | Easy | 30 days | Array, Simulation |
| 21 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | 30 days | Array, Dynamic Programming |
| 22 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Medium | 30 days | Array, Dynamic Programming, Greedy |
| 23 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | Medium | 30 days | Array, Two Pointers |
| 24 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Medium | 30 days | Depth-First Search, Breadth-First Search, Union-Find, Graph Theory |
| 25 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | 30 days | Two Pointers, String |
| 26 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | Easy | 30 days | Array, String, Trie |
| 27 | [Using a Robot to Print the Lexicographically Smallest String](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) | Medium | 30 days | Hash Table, String, Stack, Greedy |
| 28 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 30 days | Hash Table, Linked List, Design, Doubly-Linked List |
| 29 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | 30 days | Linked List, Recursion |
| 30 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Medium | 30 days | Array, Divide and Conquer, Dynamic Programming |
| 31 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | 30 days | Array, Two Pointers |
| 32 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | 30 days | Array, Binary Search |
| 33 | [Single Number](https://leetcode.com/problems/single-number/) | Easy | 30 days | Array, Bit Manipulation |
| 34 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | Medium | 30 days | Array, Two Pointers, Sorting |
| 35 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | Medium | 30 days | Array, String, Depth-First Search, Breadth-First Search |
| 36 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Easy | 30 days | Math |
| 37 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | 30 days | Tree, Depth-First Search, Breadth-First Search, Binary Tree |
| 38 | [Subsets](https://leetcode.com/problems/subsets/) | Medium | 30 days | Array, Backtracking, Bit Manipulation |
| 39 | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | Easy | 30 days | Array, Sliding Window |
| 40 | [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) | Medium | 30 days | Math, Bit Manipulation |
| 41 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | Easy | 30 days | Array, Hash Table, Stack, Monotonic Stack |
| 42 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | Hard | 30 days | String, Dynamic Programming, Recursion |
| 43 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | Medium | 30 days | Linked List |
| 44 | [Permutations](https://leetcode.com/problems/permutations/) | Medium | 30 days | Array, Backtracking |
| 45 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | 30 days | Array, Matrix, Simulation |
| 46 | [Gas Station](https://leetcode.com/problems/gas-station/) | Medium | 30 days | Array, Greedy |
| 47 | [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) | Medium | 30 days | String |
| 48 | [Triangle](https://leetcode.com/problems/triangle/) | Medium | 30 days | Array, Dynamic Programming |
| 49 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | 30 days | Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort |
| 50 | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | Easy | 30 days | Two Pointers, String, String Matching, Z Algorithm |

### Signature problems

Problems where Bloomberg accounts for a large share of all recent tags across companies. These are the most Bloomberg-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Design Underground System](https://leetcode.com/problems/design-underground-system/) | Medium | 30 days | Hash Table, String, Design |
| 2 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | Medium | 30 days | Array, String, Depth-First Search, Breadth-First Search |
| 3 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Medium | 30 days | Depth-First Search, Breadth-First Search, Union-Find, Graph Theory |
| 4 | [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) | Medium | 30 days | Array, Greedy, Sorting, Hungarian Algorithm |
| 5 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Medium | 30 days | Linked List, Two Pointers, Stack, Recursion |
| 6 | [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | Medium | 30 days | Array, Two Pointers, Binary Search, Greedy |
| 7 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | 30 days | Array, Backtracking |
| 8 | [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) | Medium | 30 days | Math, Bit Manipulation |
| 9 | [Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) | Medium | 30 days | Hash Table, Tree, Depth-First Search, Breadth-First Search |
| 10 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | Medium | 30 days | Linked List, Recursion |
| 11 | [Triangle](https://leetcode.com/problems/triangle/) | Medium | 30 days | Array, Dynamic Programming |
| 12 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | Medium | 30 days | Array, Backtracking, Bit Manipulation |
| 13 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | Medium | 30 days | Array, Stack, Monotonic Stack |
| 14 | [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | Medium | 3 months | Linked List, Depth-First Search, Doubly-Linked List |
| 15 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | Medium | 30 days | String, Stack |
| 16 | [Number of Ships in a Rectangle](https://leetcode.com/problems/number-of-ships-in-a-rectangle/) | Hard | 3 months | Array, Divide and Conquer, Interactive |
| 17 | [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) | Easy | 3 months | Design, Queue, Data Stream |
| 18 | [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | Easy | 30 days | Hash Table, String, Greedy |
| 19 | [Remove Letter To Equalize Frequency](https://leetcode.com/problems/remove-letter-to-equalize-frequency/) | Easy | 3 months | Hash Table, String, Counting |
| 20 | [Design A Leaderboard](https://leetcode.com/problems/design-a-leaderboard/) | Medium | 3 months | Hash Table, Design, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Design Hit Counter, follow-ups to reach O(1) time and space](https://leetcode.com/problems/design-hit-counter/) | SWE New Grad NYC, round 1 | 2025-02 | [post](https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/) |
| [Find Peak Element variant (slightly more complex)](https://leetcode.com/problems/find-peak-element/) | SWE New Grad NYC, round 2 | 2025-02 | [post](https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/) |
| [Combination Sum (word for word)](https://leetcode.com/problems/combination-sum/) | SWE New Grad NYC, round 2 | 2025-02 | [post](https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/) |
| [Min Stack style question](https://leetcode.com/problems/min-stack/) | SWE New Grad NYC, round 3 | 2025-02 | [post](https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/) |
| Wordle checker: given a guess and a target, mark letters correct, misplaced or absent | SWE New Grad NYC, round 3 | 2025-02 | [post](https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/) |
| Minimum-cost root-to-leaf path in an n-ary tree, then return the path | SWE Graduate London, round 1 | 2025-02 | [post](https://leetcode.com/discuss/post/6449189/bloomberg-software-engineer-grad-london-rg9jy/) |
| [Sort words by a Welsh dictionary order (multi-letter characters), follow-up with unknown max letter length (compare Verifying an Alien Dictionary)](https://leetcode.com/problems/verifying-an-alien-dictionary/) | SWE Graduate London, round 2 | 2025-02 | [post](https://leetcode.com/discuss/post/6449189/bloomberg-software-engineer-grad-london-rg9jy/) |
| System design: show the top N news articles | SWE Graduate London, round 3 | 2025-02 | [post](https://leetcode.com/discuss/post/6449189/bloomberg-software-engineer-grad-london-rg9jy/) |
| High-level design of a Bloomberg Terminal feature | SWE New Grad London, system design round | 2025-03 | [post](https://leetcode.com/discuss/post/6589914/bloomberg-new-grad-london-offer-by-ignry-u4ic/) |
| [Is a string valid if all characters occur equally often, allowing removal of one character (poster: similar to LeetCode 1941; closest match is 2423)](https://leetcode.com/problems/remove-letter-to-equalize-frequency/) | SWE Intern London, round 1 | 2025-04 | [post](https://leetcode.com/discuss/post/6607794/bloomberg-intern-swe-london-offered-by-k-jnlw/) |
| [Lottery system with addParticipant, removeParticipant and randomPick all in O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | SWE Intern London, round 2 | 2025-04 | [post](https://leetcode.com/discuss/post/6607794/bloomberg-intern-swe-london-offered-by-k-jnlw/) |
| Design: real-time stock price feed for a stock plus price history | SWE Intern London, design round | 2025-04 | [post](https://leetcode.com/discuss/post/6607794/bloomberg-intern-swe-london-offered-by-k-jnlw/) |
| [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/) | SWE New Grad NYC, phone screen | 2025-04 | [post](https://leetcode.com/discuss/post/6680865/bloomberg-new-grad-nyc-onsite-reject-by-24t64/) |
| [Currency conversion through a graph of exchange rates (same idea as Evaluate Division)](https://leetcode.com/problems/evaluate-division/) | SWE New Grad NYC, onsite | 2025-04 | [post](https://leetcode.com/discuss/post/6680865/bloomberg-new-grad-nyc-onsite-reject-by-24t64/) |
| [Minimum Number of Steps to Make Two Strings Anagram](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/) | SWE New Grad 2026, round 1 | 2025-11 | [post](https://www.reddit.com/r/csMajors/comments/1nr9400/bloomberg_new_grad_interview_questions_new_grad_26/) |
| [Sort Characters By Frequency (alphanumeric)](https://leetcode.com/problems/sort-characters-by-frequency/) | SWE New Grad 2026, round 1 | 2025-11 | [post](https://www.reddit.com/r/csMajors/comments/1nr9400/bloomberg_new_grad_interview_questions_new_grad_26/) |
| [Invalid Transactions (verbatim)](https://leetcode.com/problems/invalid-transactions/) | SWE New Grad 2026, round 2 | 2025-11 | [post](https://www.reddit.com/r/csMajors/comments/1nr9400/bloomberg_new_grad_interview_questions_new_grad_26/) |
| Grid path from one cell to another, follow-ups adding gas stops | SWE New Grad 2026, round 1 | 2025-11 | [post](https://www.reddit.com/r/csMajors/comments/1nr9400/bloomberg_new_grad_interview_questions_new_grad_26/) |
| EM round: how would you convert a legacy software system into a modern one? | SWE New Grad NYC 2026, EM round | 2026-01 | [post](https://www.reddit.com/r/csMajors/comments/1qk8bo2/bloomberg_sde_new_grad_nyc_2026_entire_process/) |

## Beyond LeetCode

Engineering Manager in-depth project walkthrough; system design for London and European grads; design-a-class problems such as a Wordle checker, an O(1) lottery system and a hit counter; questions on unit testing (JUnit) for interns.

## System design

Not standard for US new grads (a Feb 2025 NYC new grad reported no system design; a Jan 2026 NYC candidate got about 10 minutes of design questions in a technical round and a legacy-modernization question from the EM). London and European grad loops often include a full system design round (HLD of a Bloomberg Terminal feature, top-N news articles, real-time stock price feed with history). Standard for experienced hires.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Bloomberg values plus motivation ('why Bloomberg'). Official experienced-hire guide asks for STAR-style stories on collaboration, leadership, innovation and overcoming challenges. ([official page](https://www.bloomberg.com/company/values/))

**What they look for:**

- Official: what draws you to Bloomberg, how the role fits your long-term goals, and your understanding of Bloomberg's business
- Official: clear communication; listening when the interviewer tries to help
- Official: representing yourself accurately and honestly, including any use of AI
- Passion for and command of your own projects
- Being someone the interviewer would like to work with (repeated in 2025 reports)

**Questions to prepare:**

- Why Bloomberg? Why this role, and how does it fit your long-term goals?
- Walk me through a project on your resume. Why did you choose that technology?
- Tell me about a time you showed collaboration, leadership or innovation, or overcame a challenge (situation, actions, outcome).
- What are your strengths and weaknesses?
- How do you approach working alone versus with a team?
- How do you handle competing priorities?
- Do you have other offers or processes going on?
- What are your salary expectations?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Work through the Bloomberg-tagged LeetCode list for the last 3 to 6 months; several 2025 to 2026 candidates got tagged questions verbatim (one solved about 150 tagged questions before the Jan 2026 loop).
- Practice writing the full program in a plain editor, including your own node and class definitions; a Dec 2025 round 1 used a HackerRank pad with no scaffolding.
- Think out loud the whole time and take hints; Bloomberg grades communication as one of four pillars and says thought process matters more than the most optimal solution.
- Prepare a 10-minute resume walkthrough and one project you can defend in depth; every round opens with it and the EM round goes through one project in depth.
- Get the application link early: attend Bloomberg campus events and career-readiness programs (Launch, Insight Week, Tech Labs, Engineering Accelerator); official page says completing select programs gives early access to internship and full-time applications.
- If you are interviewing in London or Europe, prepare one system design (real-time price feed, top-N news) even as a new grad.
- Have a specific 'why Bloomberg' answer that covers the Terminal, financial data, and Bloomberg Philanthropies; HR rounds have asked about values and philanthropy.
- Block 3 to 4 hours for the onsite day; the second technical and the HR round often follow the first with short gaps.

## 4-week plan for Bloomberg

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Bloomberg values plus motivation ('why Bloomberg'). Official experienced-hire guide asks for STAR-style stories on collaboration, leadership, innovation and overcoming challenges. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.bloomberg.com/company/careers/how-we-hire/>
- <https://www.bloomberg.com/company/careers/application-process/engineering-experienced-hire/>
- <https://www.bloomberg.com/company/careers/interview-tips/interview-guide-experienced-hires/>
- <https://www.bloomberg.com/company/what-we-do/engineering-cto/>
- <https://www.bloomberg.com/company/what-we-do/>
- <https://www.bloomberg.com/company/early-careers/>
- <https://www.bloomberg.com/company/early-careers/internship/>
- <https://www.bloomberg.com/company/early-careers/full-time/>
- <https://www.bloomberg.com/company/early-careers/student-programs/>
- <https://www.bloomberg.com/company/values/>
- <https://bloomberg.avature.net/careers/SearchJobs>
- <https://www.levels.fyi/companies/bloomberg/salaries/software-engineer>
- <https://www.levels.fyi/companies/bloomberg/salaries/software-engineer/levels/software-engineer>
- <https://www.levels.fyi/companies/bloomberg/salaries/software-engineer/levels/software-engineer/locations/london-metro-area>
- <https://www.levels.fyi/internships/Bloomberg/Software-Engineer-Intern/>
- <https://github.com/liquidslr/leetcode-company-wise-problems/blob/main/Bloomberg/2.%20Three%20Months.csv>
- <https://www.reddit.com/r/leetcode/comments/1ii2apq/new_grad_2025_bloomberg_swe_interview_experience/>
- <https://www.reddit.com/r/csMajors/comments/1nr9400/bloomberg_new_grad_interview_questions_new_grad_26/>
- <https://www.reddit.com/r/csMajors/comments/1qk8bo2/bloomberg_sde_new_grad_nyc_2026_entire_process/>
- <https://www.reddit.com/r/csMajors/comments/1pcstr9/bloomberg_interview_process_overview/>
- <https://www.reddit.com/r/csMajors/comments/1pnfdyo/bloomberg_2026_new_grad_swe_r1_experience/>
- <https://www.reddit.com/r/csMajors/comments/1nknl8s/bloomberg_2026_swe_intern_round_1_interview_advice/>
- <https://www.reddit.com/r/csMajors/comments/1npnoyq/bloomberg_swe_intern_2026_interview_process/>
- <https://www.reddit.com/r/csMajors/comments/1otzq80/bloomberg_swe_new_grad_final_interview_what/>
- <https://www.reddit.com/r/csMajors/comments/1pcedov/time_interval_after_bloomberg_swe_london_2026/>

> **Watch out:** Verification (Oct 4, 2026): bloomberg.com How We Hire, experienced-hire process, interview guide and Engineering & CTO pages were loaded by a crawler [VERIFIED]; early-careers, internship, full-time, student-programs and values pages were confirmed through Wayback Machine snapshots from Dec 2025 to May 2026 because bloomberg.com shows a bot check to scripts [VERIFIED via archive]. The values page loads but its values text is rendered by script and was not extracted, so no specific value names are given here. The engineering recruitment steps (apply, video interview with an employee, video or in-person interviews with employees, HR and managers, offer) come from step images on the archived internship page. Reddit posts confirmed via the Arctic Shift archive API; LeetCode posts via LeetCode's GraphQL API. Uncertain: number of technical rounds varies (2 to 4) by office and interviewer; system design for new grads is common in London but rare in NYC; whether any OA is used varies (official mentions Plum and other assessments for certain entry-level roles). The 'reapply after about 6 months' claim seen in one Reddit comment was not confirmed and is excluded. Levels.fyi new grad entries are self-reported.

Next: [All companies](index.md)
