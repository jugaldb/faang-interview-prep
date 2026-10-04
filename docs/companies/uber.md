# Uber interview guide

Process notes and the most asked LeetCode problems at Uber. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |

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

## 4-week plan for Uber

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the behavioral round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).

Next: [All companies](index.md)
