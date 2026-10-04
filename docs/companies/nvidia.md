# Nvidia interview guide

Process notes and the most asked LeetCode problems at Nvidia. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |

## What they ask (data)

Based on **27** distinct problems tagged to Nvidia in the last 6 months (1 in the last 30 days, 7 in the last 3 months, 142 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 63%, Easy 22%, Hard 15%

**Most tagged topics (share of problems):** Array 52%, Hash Table 33%, String 26%, Linked List 22%, Stack 19%, Sorting 15%, Heap (Priority Queue) 15%, Dynamic Programming 11%, Two Pointers 11%, Design 11%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | 30 days | Array, Binary Search |
| 2 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | 3 months | String, Backtracking |
| 3 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | 3 months | Array, Dynamic Programming |
| 4 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 3 months | Array, Hash Table, String, Sorting |
| 5 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | 3 months | Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm |
| 6 | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | Medium | 3 months | Array, Linked List, Design, Queue |
| 7 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue) |
| 8 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 6 months | Hash Table, String, Sliding Window |
| 9 | [Special Binary String](https://leetcode.com/problems/special-binary-string/) | Hard | 6 months | String, Divide and Conquer, Sorting |
| 10 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 11 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | 6 months | Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort |
| 12 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | 6 months | Array, Hash Table, Union-Find |
| 13 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 14 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 6 months | Array, Hash Table |
| 15 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | 6 months | String, Stack, Bracket Sequences |
| 16 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | 6 months | Array, Two Pointers, Dynamic Programming, Stack |
| 17 | [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/) | Medium | 6 months | String, Greedy |
| 18 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | 6 months | Hash Table, Linked List |
| 19 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Sorting |
| 20 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | 6 months | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 21 | [Minimum Absolute Difference](https://leetcode.com/problems/minimum-absolute-difference/) | Easy | 6 months | Array, Sorting |
| 22 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Easy | 6 months | Linked List, Two Pointers, Stack, Recursion |
| 23 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | 6 months | Array, Dynamic Programming |
| 24 | [Decode String](https://leetcode.com/problems/decode-string/) | Medium | 6 months | String, Stack, Recursion |
| 25 | [Min Stack](https://leetcode.com/problems/min-stack/) | Medium | 6 months | Stack, Design |
| 26 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | Medium | 6 months | Array, Hash Table, Sliding Window, Prefix Sum |
| 27 | [Count Primes](https://leetcode.com/problems/count-primes/) | Medium | 6 months | Array, Math, Enumeration, Number Theory |

### Signature problems

Problems where Nvidia accounts for a large share of all recent tags across companies. These are the most Nvidia-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | 3 months | String, Backtracking |
| 2 | [Special Binary String](https://leetcode.com/problems/special-binary-string/) | Hard | 6 months | String, Divide and Conquer, Sorting |
| 3 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue) |
| 4 | [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/) | Medium | 6 months | String, Greedy |

## 4-week plan for Nvidia

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the behavioral round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).

Next: [All companies](index.md)
