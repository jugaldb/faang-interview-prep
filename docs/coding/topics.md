# DSA topics in learning order

Every topic big tech coding rounds use, in the order to learn it. Each row tells you what to know, what the core operations cost, one free resource, which problems to start with, and how long to spend.

## How to use this page

1. **Go top to bottom.** Each topic needs only the ones above it. Trees need recursion. Graphs need trees and queues. Dijkstra needs heaps. Dynamic programming needs recursion with memoization.
2. **Read the resource first (20 to 30 minutes).** For a data structure, implement it once from a blank file before you use the built-in. Jugal's Amazon plan says it plainly: "Implement a min-heap from scratch or use built-in; note complexities" ([post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-7f8)).
3. **Solve the starter problems.** Then drill the matching pattern on [Patterns](patterns.md), which has the cues, a template and 5 to 10 ordered problems.
4. **Copy the topic's corner cases** from [Corner cases to test](#corner-cases-to-test) into your cheat sheet.
5. **Tick the topic** in the [checklist](#topic-checklist) at the bottom. Progress saves in your browser.

Week numbers follow [the 12-week learning order](index.md#the-12-week-learning-order) at 7 to 10 coding hours a week. At 15 or more hours a week, do two weeks of topics in one. Hours are estimates built from Grind 75's per-problem time budgets plus reading time.

Priority labels:

| Label | Meaning | Based on |
|---|---|---|
| Must | Shows up across big tech loops. Learn it fully | [Tech Interview Handbook priorities](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/), the 18 [NeetCode 150](https://neetcode.io/practice/practice/neetcode150) topics, tag counts in [Sean Prashad's list](https://seanprashad.com/leetcode-patterns/) |
| Should | Asked at some companies, or as a follow-up. Learn the core version | Same sources |
| Rare | Almost never asked at big tech. Learn only with time left | Same sources |

## Phase 1: foundations (weeks 1 to 2)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Big-O and your language (Must) | Time vs space. Average vs worst case. Amortized O(1) append. Recursion depth counts as space. Read the input limits to pick a target complexity | See the [cheat sheet](#big-o-cheat-sheet) | [NeetCode Big-O notes](https://github.com/neetcode-gh/lesson-data/blob/main/bigO.md) and [video](https://www.youtube.com/watch?v=BgLTDT03QtU) | Write the cost of every line in your next 3 solutions | Week 1, 4 to 6 h |
| Arrays and strings (Must) | Subarray vs subsequence. In-place swaps. Sort first. Two passes are still O(n). Strings are immutable in Python and Java, so build with a list or `StringBuilder` | Access O(1). Search O(n). Insert or delete in the middle O(n), at the end O(1). Slice O(k) | [TIH: Array](https://www.techinterviewhandbook.org/algorithms/array/), [TIH: String](https://www.techinterviewhandbook.org/algorithms/string/) | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/), [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Week 1, 6 to 8 h |
| Hashing (Must) | Maps and sets. `Counter`, `defaultdict`. A tuple or sorted string as a key. A 26-slot count array as O(1) space. TIH: "Hash table is probably the most commonly used data structure for algorithm questions" | Search, insert, delete O(1) average, O(n) worst | [TIH: Hash table](https://www.techinterviewhandbook.org/algorithms/hash-table/) | [Two Sum](https://leetcode.com/problems/two-sum/), [Valid Anagram](https://leetcode.com/problems/valid-anagram/), [Group Anagrams](https://leetcode.com/problems/group-anagrams/), [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Week 1, 3 to 4 h |
| Two pointers (Must) | Pointers from both ends on sorted input. Read and write pointers for in-place work. Three regions (Dutch national flag) | O(n) per pass, O(1) space | [Hello Interview: Two pointers](https://www.hellointerview.com/learn/code/two-pointers/overview) | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/), [3Sum](https://leetcode.com/problems/3sum/) | Week 2, 3 to 4 h |
| Sliding window (Must) | Fixed vs variable windows. Keep window state in a counter. Shrink while the window is invalid. Negative numbers break sum windows | O(n): each index enters and leaves once | [Hello Interview: Variable length window](https://www.hellointerview.com/learn/code/sliding-window/variable-length) | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/), [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/), [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Week 2, 4 to 6 h |
| Prefix sums (Must) | 1D and 2D prefix arrays. Prefix sum plus a hash map counts subarrays with sum k. Difference arrays for many range updates | Build O(n), each range query O(1) | [Hello Interview: Prefix sum](https://www.hellointerview.com/learn/code/prefix-sum/overview) | [Range Sum Query Immutable](https://leetcode.com/problems/range-sum-query-immutable/), [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Week 2, 2 to 3 h |

## Phase 2: linear structures and searching (weeks 3 to 4)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Stack and queue (Must) | LIFO and FIFO. Python list as a stack, `collections.deque` as a queue. Java `ArrayDeque` for both. Build each one from the other | Push, pop, enqueue, dequeue O(1). Search O(n) | [TIH: Stack](https://www.techinterviewhandbook.org/algorithms/stack/), [TIH: Queue](https://www.techinterviewhandbook.org/algorithms/queue/) | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/), [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/), [Min Stack](https://leetcode.com/problems/min-stack/) | Week 3, 3 to 4 h |
| Monotonic stack and deque (Should) | Keep indices in increasing or decreasing order. Each index is pushed and popped once. A deque gives the max or min of a sliding window | O(n) total, amortized | [Hello Interview: Monotonic stack](https://www.hellointerview.com/learn/code/stack/monotonic-stack) | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/), [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Week 3, 3 to 4 h |
| Linked list (Must) | Dummy head node. Reverse in place. Find the middle with fast and slow pointers. Merge two lists. Kth from the end with a gap. Detect a cycle | Access and search O(n). Insert or delete at a known node O(1) | [TIH: Linked list](https://www.techinterviewhandbook.org/algorithms/linked-list/) | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/), [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Week 3, 5 to 6 h |
| Binary search (Must) | One boundary template: the first index where a condition becomes true. Rotated arrays. 2D matrices. Search on the answer with a yes/no check. TIH: with sorted input the interviewer is "usually looking for a solution that is faster than O(n)" | O(log n) per search. On the answer: O(n log range) | [LeetCode Binary Search study plan](https://leetcode.com/studyplan/binary-search/) | [Binary Search](https://leetcode.com/problems/binary-search/), [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/), [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Week 4, 5 to 7 h |
| Sorting (Should) | Your language's sort and custom keys. Merge sort (stable, O(n) extra). Quickselect for the kth element. Counting sort for small ranges. Microsoft says to "know the details of at least one n*log(n) sorting algorithm, preferably two" ([Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)) | Comparison sorts O(n log n). Counting sort O(n + k) | [TIH: Sorting and searching](https://www.techinterviewhandbook.org/algorithms/sorting-searching/), [VisuAlgo: Sorting](https://visualgo.net/en/sorting) | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/), [Sort Colors](https://leetcode.com/problems/sort-colors/), [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Week 4, 2 to 3 h |

## Phase 3: recursion, trees, heaps (weeks 5 to 6)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Recursion and backtracking (Must) | Base cases first. Recursion depth (Python's default limit is about 1000). Memoization. Choose, explore, un-choose. Skip duplicates after sorting. Prune early | Subsets O(n * 2^n). Permutations O(n * n!) | [TIH: Recursion](https://www.techinterviewhandbook.org/algorithms/recursion/), [Hello Interview: Backtracking](https://www.hellointerview.com/learn/code/backtracking/overview) | [Subsets](https://leetcode.com/problems/subsets/), [Permutations](https://leetcode.com/problems/permutations/), [Combination Sum](https://leetcode.com/problems/combination-sum/), [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Week 5, 6 to 8 h |
| Binary trees (Must) | Pre, in and post-order, recursive and iterative. TIH: interviewers ask for iterative "especially if the candidate finishes writing the recursive approach too quickly". Level order with a queue. Return values vs a global answer. Build a tree from traversals | O(n) time. O(h) space, O(n) for a skewed tree | [TIH: Tree](https://www.techinterviewhandbook.org/algorithms/tree/) | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/), [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/), [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/), [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | Week 5, 8 to 10 h |
| Binary search trees (Must) | In-order traversal is sorted. Validate with low and high bounds passed down. Kth smallest by in-order. Insert and delete. LCA by comparing values | O(h) per operation: O(log n) balanced, O(n) skewed | [VisuAlgo: BST](https://visualgo.net/en/bst), plus the BST section of [TIH: Tree](https://www.techinterviewhandbook.org/algorithms/tree/) | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/), [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/), [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Week 6, 2 to 3 h |
| Heaps (Must) | Your language's min-heap API. Max-heap by negating values in Python (built-in max-heap functions arrived only in Python 3.14, per the [heapq docs](https://docs.python.org/3/library/heapq.html)). A size-k heap for top k. Heaps of tuples | Peek O(1). Push and pop O(log n). Heapify O(n) | [TIH: Heap](https://www.techinterviewhandbook.org/algorithms/heap/) | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/), [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/), [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Week 6, 4 to 5 h |
| Intervals (Must) | Sort by start to merge. Sort by end to keep the most non-overlapping. Overlap test: `a[0] < b[1] and b[0] < a[1]`. Count rooms with a heap of end times. Ask whether touching intervals overlap | O(n log n) for the sort | [TIH: Interval](https://www.techinterviewhandbook.org/algorithms/interval/) | [Merge Intervals](https://leetcode.com/problems/merge-intervals/), [Insert Interval](https://leetcode.com/problems/insert-interval/), [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Week 6, 3 to 4 h |

## Phase 4: graphs and tries (weeks 7 to 8)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Graphs: BFS, DFS, grids (Must) | Build an adjacency list from an edge list. A grid is a graph: 4 directions, bounds check, visited set. BFS for the fewest steps when edges have no weight. DFS for reachability and components. Start BFS from many sources at once. Detect cycles | O(V + E). A grid is O(rows * cols) | [TIH: Graph](https://www.techinterviewhandbook.org/algorithms/graph/), [William Fiset: Graph Theory](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P) | [Flood Fill](https://leetcode.com/problems/flood-fill/), [Number of Islands](https://leetcode.com/problems/number-of-islands/), [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/), [Clone Graph](https://leetcode.com/problems/clone-graph/) | Week 7, 8 to 10 h |
| Topological sort (Should) | Kahn's algorithm with an indegree queue. DFS post-order with three colors. A cycle exists if the order has fewer than n nodes | O(V + E) | [Hello Interview: Topological sort](https://www.hellointerview.com/learn/code/graphs/topological-sort) | [Course Schedule](https://leetcode.com/problems/course-schedule/), [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Week 7, 2 to 3 h |
| Union-find (Should) | Parent array. Path compression. Union by size or rank. Count components. A union that finds both nodes already joined means a cycle | Near O(1) amortized per operation | [CP-Algorithms: Disjoint set union](https://cp-algorithms.com/data_structures/disjoint_set_union.html), [VisuAlgo: Union-find](https://visualgo.net/en/ufds) | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/), [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Week 8, 2 to 3 h |
| Shortest paths and MST (Dijkstra: Should. The rest: Rare) | Dijkstra with a heap for non-negative weights, skipping stale heap entries. Bellman-Ford rounds for "at most k edges". Kruskal or Prim for a minimum spanning tree | Dijkstra O((V + E) log V). Bellman-Ford O(V * E). Kruskal O(E log E) | [Hello Interview: Shortest path algorithms](https://www.hellointerview.com/learn/code/graphs/shortest-path-algorithms), [CP-Algorithms: Dijkstra](https://cp-algorithms.com/graph/dijkstra.html) | [Network Delay Time](https://leetcode.com/problems/network-delay-time/), [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/), [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | Week 8, 4 to 6 h |
| Tries (Should) | A node holds a children map and an end-of-word flag. Insert, search, starts-with. Wildcard search with DFS. A trie plus grid DFS for word search | O(L) per operation, L = word length | [TIH: Trie](https://www.techinterviewhandbook.org/algorithms/trie/) | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/), [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/), [Word Search II](https://leetcode.com/problems/word-search-ii/) | Week 8, 2 to 3 h |

## Phase 5: dynamic programming and the rest (weeks 9 to 11)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Dynamic programming, 1D (Must) | Define the state in words. Write the recurrence, base cases and answer location. Code top-down with memoization first, then bottom-up, then keep only the last few values | Usually O(n) time, O(1) to O(n) space | [TIH: Dynamic programming](https://www.techinterviewhandbook.org/algorithms/dynamic-programming/), [Hello Interview: DP fundamentals](https://www.hellointerview.com/learn/code/dynamic-programming/fundamentals) | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/), [House Robber](https://leetcode.com/problems/house-robber/), [Coin Change](https://leetcode.com/problems/coin-change/), [Word Break](https://leetcode.com/problems/word-break/) | Week 9, 6 to 8 h |
| Dynamic programming, 2D (Should. Must for Google) | Grids. Two strings (longest common subsequence, edit distance). Knapsack. Longest increasing subsequence. Rolling rows to save space | Usually O(m * n) | [LeetCode Dynamic Programming study plan](https://leetcode.com/studyplan/dynamic-programming/) | [Unique Paths](https://leetcode.com/problems/unique-paths/), [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/), [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/), [Edit Distance](https://leetcode.com/problems/edit-distance/) | Week 10, 8 to 12 h |
| Greedy (Should) | A local choice you can show is never worse (the exchange argument). Sort, then one pass. Greedy fails on some inputs (coin change with arbitrary coins): then use DP | Usually O(n log n) for the sort | [Hello Interview: Greedy](https://www.hellointerview.com/learn/code/greedy/overview) | [Jump Game](https://leetcode.com/problems/jump-game/), [Gas Station](https://leetcode.com/problems/gas-station/), [Partition Labels](https://leetcode.com/problems/partition-labels/) | Week 10, 4 to 5 h |
| Bit manipulation (Should) | Test, set, clear and toggle bit k. `x & (x - 1)` drops the lowest set bit. XOR cancels pairs. Python integers never overflow, so mask to 32 bits when a problem expects it | O(1) per operation, O(bits) per number | [TIH: Binary](https://www.techinterviewhandbook.org/algorithms/binary/) | [Single Number](https://leetcode.com/problems/single-number/), [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/), [Counting Bits](https://leetcode.com/problems/counting-bits/) | Week 10, 2 to 3 h |
| Math and geometry (Should for Google) | GCD. Sieve of primes. Fast power. Modular arithmetic. Digit tricks. Overflow. In Python `-3 // 2` is `-2` | GCD O(log n). Sieve O(n log log n). Fast power O(log n) | [TIH: Math](https://www.techinterviewhandbook.org/algorithms/math/), [TIH: Geometry](https://www.techinterviewhandbook.org/algorithms/geometry/) | [Plus One](https://leetcode.com/problems/plus-one/), [Pow(x, n)](https://leetcode.com/problems/powx-n/), [Multiply Strings](https://leetcode.com/problems/multiply-strings/) | Week 10, 2 to 4 h |
| Design a data structure (Must for Amazon and Meta) | Combine structures to hit O(1): hash map plus doubly linked list (LRU), hash map plus array (random pick), per-key sorted list plus binary search (time-based lookups). Jugal's notes list it as a core pattern for Amazon and Meta | O(1) or O(log n) per operation | [Jugal: Company Wise DSA patterns](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc) | [Min Stack](https://leetcode.com/problems/min-stack/), [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/), [LRU Cache](https://leetcode.com/problems/lru-cache/), [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Week 11, 3 to 4 h |
| Advanced DP: intervals, states, bitmasks, trees (Rare. Google-leaning) | Bitmask DP for n up to about 20. Tree DP returns a small tuple per node. Stock problems as a few states. Interval DP over growing lengths. Jugal's Google plan calls tree DP "commonly asked by Google" ([post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e)) | Interval DP usually O(n^3). Bitmask DP O(2^n * n) | [Aditya Verma: Dynamic Programming playlist](https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go) | [House Robber III](https://leetcode.com/problems/house-robber-iii/), [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/), [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/), [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | Week 11, Google targets only, 4 to 6 h |

## Phase 6: rare topics (only with time left)

| Topic | What to know | Core costs | Best free resource | Start with | When and how long |
|---|---|---|---|---|---|
| Segment tree and Fenwick tree (Rare) | Needed only when range queries and point updates are mixed. Static ranges use prefix sums. NeetCode lists segment trees as optional, and Sean Prashad's 179-problem list tags only 2 problems for each | O(log n) per update and query | [CP-Algorithms: Segment tree](https://cp-algorithms.com/data_structures/segment_tree.html), [CP-Algorithms: Fenwick tree](https://cp-algorithms.com/data_structures/fenwick.html) | [Range Sum Query Mutable](https://leetcode.com/problems/range-sum-query-mutable/), [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | Optional, 0 to 3 h |
| String matching: KMP, Z, rolling hash (Rare) | Interviewers usually accept the built-in search first. Learn KMP only if asked for O(n + m) | O(n + m) | [CP-Algorithms: Prefix function](https://cp-algorithms.com/string/prefix-function.html) | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/), [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/), [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | Optional, 0 to 3 h |

## What you can skip

| Topic | Why skip it | Learn it only if |
|---|---|---|
| Bellman-Ford, Floyd-Warshall, Prim, Kruskal | The [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/graph/) rates them "Almost never" asked: "Your interviewer likely doesn't know them either." Jugal's 60-day roadmap covers them briefly in the graph block | A problem says "at most k stops" (Bellman-Ford rounds) or "connect all points at minimum cost" (MST) |
| Segment trees, Fenwick trees | Listed as optional advanced topics by [NeetCode](https://github.com/neetcode-gh/lesson-data/blob/main/howToUseNeetcode.md). Only 2 problems each in [Sean Prashad's list](https://seanprashad.com/leetcode-patterns/) | You target quant or HFT roles, or Google Hards |
| KMP, Z-function, rolling hash | Built-in search is usually accepted first | You target competitive programming or quant roles |
| Network flow, suffix arrays | Not a topic in NeetCode 150 or Grind 169 | Competitive programming only |

NeetCode's advice holds for all of these: learn advanced topics "when you actually encounter them in practice problems" ([NeetCode](https://github.com/neetcode-gh/lesson-data/blob/main/howToUseNeetcode.md)).

## Corner cases to test

Run these before you say "done". Adapted from the topic pages of the [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/).

| Topic | Inputs to test |
|---|---|
| Arrays | Empty. One or two elements. All duplicates. Already sorted. Negative numbers and zero |
| Strings | Empty. One or two characters. All the same character. All different characters. Upper and lower case, if the problem allows both |
| Matrices | Empty. 1 x 1. A single row. A single column |
| Linked lists | Empty. One node. Two nodes. A cycle (ask whether one can exist) |
| Trees | Empty. One node. Two nodes. Skewed like a linked list. Negative values in path sums |
| Graphs | Empty. One or two nodes. Disconnected parts. Cycles. Self-loops |
| Intervals | None. One. Two. One inside another. Duplicates. Touching, like [1, 2] and [2, 3] (ask whether they overlap) |
| Binary search | Target below all values, above all values, absent, duplicated. One element |
| Recursion | n = 0. n = 1. The deepest input (recursion limit) |
| Numbers | Zero. Negative. Overflow past 2^31 - 1. Integer division rounding |

## Big-O cheat sheet

### Data structure operations

Average case unless noted. Sources: the [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/) topic tables and the [Big-O Cheat Sheet](https://www.bigocheatsheet.com/).

| Structure | Access | Search | Insert | Delete | Notes |
|---|---|---|---|---|---|
| Array or dynamic array | O(1) | O(n), O(log n) if sorted | O(n), end: amortized O(1) | O(n), end: O(1) | Python list, Java ArrayList, C++ vector |
| String | O(1) | O(n) | O(n) | O(n) | Immutable in Python and Java |
| Linked list | O(n) | O(n) | O(1) at a known node | O(1) at a known node | Use a dummy head |
| Hash map or set | n/a | O(1) | O(1) | O(1) | O(n) worst case. Interviews use the average |
| Stack | O(1) top | O(n) | O(1) push | O(1) pop | |
| Queue or deque | O(1) at the ends | O(n) | O(1) | O(1) | Python deque, Java ArrayDeque |
| Binary heap | O(1) min or max | O(n) | O(log n) | O(log n) pop | Heapify is O(n) |
| Balanced BST (TreeMap, std::map) | O(log n) | O(log n) | O(log n) | O(log n) | Python has no built-in one |
| Trie | n/a | O(L) | O(L) | O(L) | L = word length |
| Union-find | n/a | Near O(1) find | Near O(1) union | n/a | Needs path compression and union by size |

### Algorithms

| Algorithm | Time | Extra space |
|---|---|---|
| Binary search | O(log n) | O(1) |
| Built-in sort, merge sort | O(n log n) | O(n) |
| Heapsort | O(n log n) | O(1) |
| Quicksort | O(n log n) average, O(n^2) worst | O(log n) |
| Quickselect (kth element) | O(n) average | O(1) |
| Counting sort | O(n + k) | O(k) |
| BFS, DFS, topological sort | O(V + E) | O(V) |
| Dijkstra with a binary heap | O((V + E) log V) | O(V) |
| Bellman-Ford | O(V * E) | O(V) |
| Floyd-Warshall | O(V^3) | O(V^2) |
| Kruskal | O(E log E) | O(V) |
| All subsets / all permutations | O(n * 2^n) / O(n * n!) | O(n) recursion depth |
| 1D DP / 2D DP / interval DP | O(n) / O(m * n) / O(n^3), typical | O(n) / O(m * n) / O(n^2) |

### Pick the target from the input size

Read the constraints before you choose an approach. This table assumes about 10^8 simple operations per second ([USACO Guide](https://usaco.guide/bronze/time-comp)).

| n up to | Fast enough |
|---|---|
| 10 | O(n!) |
| 20 | O(n * 2^n) |
| 400 | O(n^3) |
| 7,500 | O(n^2) |
| 5 * 10^5 | O(n log n) |
| 5 * 10^6 | O(n) |
| 10^18 | O(log n) or O(1) |

Rules of thumb for LeetCode-style limits: n up to 20 points to backtracking or bitmask DP. n up to 1,000 allows O(n^2). n of 10^5 or more needs O(n log n) or O(n).

### Costs people get wrong

- **Hash maps are O(n) in the worst case.** Say "O(1) average" in interviews.
- **Recursion uses stack space.** A DFS on a skewed tree is O(n) space, not O(1).
- **Heapify is O(n).** Pushing n items one by one is O(n log n).
- **Slicing copies.** `nums[1:]` in Python is O(k), so slicing inside a loop can make an O(n) idea O(n^2).
- **String `+=` in a loop can be O(n^2).** Build a list and `"".join` it ([Python TimeComplexity wiki](https://wiki.python.org/moin/TimeComplexity)).
- **`x in list` is O(n).** Use a set when you check membership more than once.
- **`list.pop(0)` and `list.insert(0, x)` are O(n).** Use `collections.deque` for a queue.
- **A grid BFS is O(rows * cols)**, not O(n^2), unless the grid is n by n.
- **Backtracking costs the number of results times the work per result.** All subsets of n items is O(n * 2^n).

More references: [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) (memorize the data structure table; Jugal links it in his [Amazon roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)), [freeCodeCamp Big O cheat sheet](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/) (read once if Big-O is new), [Python TimeComplexity wiki](https://wiki.python.org/moin/TimeComplexity) (cost of every list, deque, set and dict operation).

## Language cheat sheets

Learn these calls until you can type them without looking. Write your own version of the block for your language and keep it on one page.

### Python

```python
from collections import Counter, defaultdict, deque
from functools import cache
import bisect
import heapq

s, nums, k = "banana", [5, 1, 4, 1, 3], 2

counts = Counter(s)                      # counts["a"] == 3, counts.most_common(1)
graph = defaultdict(list)                # graph[u].append(v) with no KeyError
seen = set(nums)                         # O(1) average membership

q = deque([0])                           # queue: O(1) at both ends
q.append(1)
front = q.popleft()                      # never list.pop(0), which is O(n)

heap = []                                # heapq is a MIN-heap
heapq.heappush(heap, (3, "c"))           # tuples compare by the first item
smallest = heapq.heappop(heap)
max_heap = [-x for x in nums]            # max-heap: store negatives
heapq.heapify(max_heap)                  # O(n)
largest = -max_heap[0]
top_k = heapq.nlargest(k, nums)          # [5, 4]

nums.sort(key=lambda x: -x)              # in place, descending
ordered = sorted(nums)                   # returns a new list
i = bisect.bisect_left(ordered, 4)       # first index with value >= 4
j = bisect.bisect_right(ordered, 4)      # first index with value > 4

@cache                                   # memoize a recursive function
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

word = "".join(["a", "b"])               # build strings with join
grid = [[0] * 3 for _ in range(2)]       # never [[0] * 3] * 2: rows would share memory
INF = float("inf")
print(-3 // 2, int(-3 / 2))              # -2 -1: floor division rounds down
```

- [Python docs: heapq](https://docs.python.org/3/library/heapq.html), [collections](https://docs.python.org/3/library/collections.html), [bisect](https://docs.python.org/3/library/bisect.html), [functools](https://docs.python.org/3/library/functools.html), [itertools](https://docs.python.org/3/library/itertools.html): the official reference. How to use it: read the function list of each module once, then only look things up.
- [NeetCode Python cheat sheet](https://github.com/neetcode-gh/lesson-data/blob/main/python.md) and [video](https://www.youtube.com/watch?v=0K_eZGS5NsU): Python for interviews, including the math traps. How to use it: watch once in week 1 and type every example.
- [NeetCode: Python for coding interviews](https://neetcode.io/courses/lessons/python-for-coding-interviews): the same material as a lesson. How to use it: if Python is new to you, do it before your first problem.

### Java

```java
import java.util.*;

public class Cheats {
    public static void main(String[] args) {
        int x = 5, lo = 0, hi = 10;
        int[] arr = {3, 1, 2};
        int[] dp = new int[5];
        List<Integer> list = new ArrayList<>(List.of(3, 1, 2));

        Map<Integer, Integer> count = new HashMap<>();
        count.merge(x, 1, Integer::sum);                     // count[x]++
        int c = count.getOrDefault(x, 0);

        Deque<Integer> stack = new ArrayDeque<>();           // push, pop, peek
        Deque<Integer> queue = new ArrayDeque<>();           // offer, poll, peek

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<int[]> byFirst = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));

        TreeMap<Integer, Integer> sorted = new TreeMap<>();  // ordered map
        Integer floor = sorted.floorKey(x);                  // largest key <= x, or null
        Integer ceiling = sorted.ceilingKey(x);              // smallest key >= x, or null

        Arrays.sort(arr);
        Arrays.fill(dp, -1);
        list.sort((a, b) -> Integer.compare(a, b));          // never (a, b) -> a - b: it can overflow
        StringBuilder sb = new StringBuilder();              // build strings in loops
        int mid = lo + (hi - lo) / 2;                        // no overflow
        long total = 0L;                                     // sums past 2^31 - 1
    }
}
```

- [Java 21 docs: PriorityQueue](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html), [ArrayDeque](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html), [TreeMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html), [HashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html), [Collections](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html), [Arrays](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html): the official API pages. How to use it: read the method summary table of each class once.
- [Java Collections tutorial](https://docs.oracle.com/javase/tutorial/collections/index.html): Oracle's tutorial. How to use it: read it if `Map`, `Deque` and `PriorityQueue` are new to you.
- [Sean Prashad's Java syntax notes (PDF)](https://drive.google.com/open?id=1ao4ZA28zzBttDkuS6MLQI52gDs_CJZEm): linked from his LeetCode Patterns repo. How to use it: print it and keep it next to you for the first 30 problems.

### C++

```cpp
#include <algorithm>
#include <deque>
#include <functional>
#include <map>
#include <queue>
#include <set>
#include <stack>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
    int x = 4;
    vector<int> v = {5, 1, 4, 1, 3};

    unordered_map<int, int> cnt;
    cnt[x]++;                                                 // average O(1)
    map<int, int> m;                                          // ordered map, O(log n)
    auto it = m.lower_bound(x);                               // first key >= x
    set<int> st = {1, 2, 3};
    stack<int> stk;
    queue<int> q;
    deque<int> dq;
    priority_queue<int> maxHeap;                              // MAX-heap by default
    priority_queue<int, vector<int>, greater<int>> minHeap;   // min-heap
    sort(v.begin(), v.end());
    int idx = lower_bound(v.begin(), v.end(), x) - v.begin(); // first index with v[i] >= x
    long long total = 0;                                      // sums past 2^31 - 1
    return 0;
}
```

- [cppreference: containers](https://en.cppreference.com/w/cpp/container), [priority_queue](https://en.cppreference.com/w/cpp/container/priority_queue), [unordered_map](https://en.cppreference.com/w/cpp/container/unordered_map), [map](https://en.cppreference.com/w/cpp/container/map), [lower_bound](https://en.cppreference.com/w/cpp/algorithm/lower_bound), [sort](https://en.cppreference.com/w/cpp/algorithm/sort): the standard library reference. How to use it: check the complexity line at the top of each page. Amazon's online assessment allows public docs such as the STL ([Amazon OA prep](https://amazon.jobs/content/en/how-we-hire/university/sde-oa)).

### JavaScript and TypeScript

- Use `Map` and `Set` for hashing, and arrays for stacks.
- There is no built-in heap ([TIH: Heap](https://www.techinterviewhandbook.org/algorithms/heap/)). Ask the interviewer if you can assume a heap with `push`, `pop` and `peek`, or keep a short binary heap class in your notes.
- Sort numbers with a comparator: `nums.sort((a, b) => a - b)`. The default sort compares values as strings.

## Topic checklist

- [ ] Big-O and your language's standard library
- [ ] Arrays and strings
- [ ] Hashing
- [ ] Two pointers
- [ ] Sliding window
- [ ] Prefix sums
- [ ] Stack and queue
- [ ] Monotonic stack and deque
- [ ] Linked list
- [ ] Binary search
- [ ] Sorting
- [ ] Recursion and backtracking
- [ ] Binary trees
- [ ] Binary search trees
- [ ] Heaps
- [ ] Intervals
- [ ] Graphs: BFS, DFS, grids
- [ ] Topological sort
- [ ] Union-find
- [ ] Shortest paths (Dijkstra)
- [ ] Tries
- [ ] Dynamic programming, 1D
- [ ] Dynamic programming, 2D
- [ ] Greedy
- [ ] Bit manipulation
- [ ] Math and geometry
- [ ] Design a data structure
- [ ] Advanced DP (Google targets only)
- [ ] Rare topics (optional)

Next: [Coding interview patterns](patterns.md)
