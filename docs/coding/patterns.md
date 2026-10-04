# Coding interview patterns

For anyone who has covered the matching topic on [Topics](topics.md). Each of the 25 patterns below has the cues that give it away, a Python template to type from memory, and 6 to 10 free LeetCode problems, easy to hard.

> **Credit:** The pattern approach and many cues come from Sean Prashad's [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) and Fahim ul Haq's [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed). Full credits are in [Where these patterns come from](#where-these-patterns-come-from).

## How to use this page

1. **Learn the topic first.** Patterns assume you know the data structure. Use [Topics](topics.md).
2. **Read the cues, then type the template from memory** into a blank file and run it on the first problem.
3. **Solve the problems in order.** The first 1 or 2 with the template open, the rest closed, on a timer: Easy 15 to 20 minutes, Medium 25 to 30, Hard 40 ([time limits](how-to-practice.md#time-limits)).
4. **Spend 2 days on one pattern and nothing else.** "Spend two days doing ONLY sliding window problems. Then two days on binary search." ([Jugal](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
5. **Move on when you can name the pattern from the problem statement alone,** not after reading the solution ([Jugal's 60-day roadmap](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).
6. **Write a cheat-sheet page for the pattern** with the [pattern cheat sheet template](how-to-practice.md#pattern-cheat-sheet-template): cues, your template, 2 anchor problems with a one-line insight each, and your usual bug.
7. **After all 25, mix.** Open unseen problems and name the pattern within 3 minutes, before you write code. That is one of the checks in the [readiness test](how-to-practice.md#how-to-know-you-are-ready).

Every linked problem is free on LeetCode (checked Oct 4, 2026). Every template below was run against test inputs before publishing.

## Find the pattern from the problem

Read the problem, then scan this table. Sean Prashad's version of this idea, the "Helpful Tips" tab on [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/), says: "Based on the problem constraints, use these heuristics to identify possible approaches when unsure." Quoted rows come from that tab.

| If the problem has | Try | Go to |
|---|---|---|
| A sorted array and a pair or triplet with a target | Two pointers, binary search | [Two pointers](#two-pointers) |
| "Seen before", counts, anagram groups, a complement like `target - x` | Hash map or set | [Hashing](#hashing) |
| A contiguous subarray or substring: longest, shortest, "at most K" | Sliding window | [Sliding window](#sliding-window) |
| Count subarrays with sum k (negatives allowed), many range-sum queries | Prefix sums plus a hash map | [Prefix sums](#prefix-sums) |
| A linked list: cycle, middle, kth from the end | Fast and slow pointers | [Fast and slow pointers](#fast-and-slow-pointers) |
| Reverse a list or part of it, O(1) memory | In-place reversal | [Linked list reversal](#linked-list-reversal) |
| Numbers 1 to n in an array of n, find missing or duplicate in O(1) space | Cyclic sort | [Cyclic sort](#cyclic-sort) |
| Brackets, nested decoding, expression evaluation | Stack | [Stack and monotonic stack](#stack-and-monotonic-stack) |
| "If asked for next greater/smaller element" | "Monotonic stack" | [Stack and monotonic stack](#stack-and-monotonic-stack) |
| "If asked for sliding window max/min" | "Monotonic queue" | [Stack and monotonic stack](#stack-and-monotonic-stack) |
| Sorted or rotated input, "O(log n)", first or last position | Binary search | [Binary search](#binary-search) |
| "Smallest speed or capacity that works", "minimize the maximum" | Binary search on the answer | [Binary search](#binary-search) |
| [start, end] pairs: merge, overlap, rooms | Sort, then merge or sweep | [Intervals](#intervals) |
| A tree, level by level | BFS with a queue | [Tree BFS](#tree-bfs) |
| A tree: depth, path sums, LCA, diameter, validate a BST | DFS that returns values | [Tree DFS](#tree-dfs) |
| A grid of land and water, regions, "can you reach" | DFS or BFS | [Graph DFS](#graph-dfs) |
| Fewest steps or minutes when every move costs the same | BFS | [Graph BFS](#graph-bfs) |
| "If asked for ordering/scheduling" (prerequisites) | "Topological sort" | [Topological sort](#topological-sort) |
| "If asked for connectivity/grouping" | "Union-Find, DFS" | [Union-find](#union-find) |
| Weighted edges, minimum total cost or time | Dijkstra | [Shortest paths](#shortest-paths) |
| "If asked for top/least K items", merge K sorted lists, running median | Heaps | [Heaps](#heaps) |
| "If asked for all permutations/subsets" | "Backtracking" | [Backtracking](#backtracking) |
| A local choice you can prove is never worse | Greedy | [Greedy](#greedy) |
| Many words, prefixes, autocomplete | Trie | [Trie](#trie) |
| "If asked to count bits or use XOR" | "Bit manipulation" | [Bit manipulation](#bit-manipulation) |
| Rotate, spiral, change a matrix in place | Matrix traversal | [Matrix traversal](#matrix-traversal) |
| "Implement a class" with O(1) get and put | Combine structures | [Design a data structure](#design-a-data-structure) |
| Count ways or best value, the same subproblems repeat | Dynamic programming | [Dynamic programming](#dynamic-programming) |
| Nothing above fits | "Map/Set for O(1) time & O(n) space" or "Sort input for O(nlogn) time and O(1) space" | [Hashing](#hashing) |

The input size narrows it further: n up to 20 points to backtracking or bitmask DP, and n of 10^5 or more needs O(n log n) or better. Full table: [Pick the target from the input size](topics.md#pick-the-target-from-the-input-size).

## Hashing

Use it when:

- You need "have I seen this before?" or a count in O(1).
- You look for a complement, such as `target - x`.
- You group items that share a property (anagrams, same letter pattern).
- The input is not sorted and the brute force compares every pair.

> **Watch out:** a hash map costs O(n) extra space. If the input is already sorted, [two pointers](#two-pointers) does the job in O(1) space.

```python
from collections import defaultdict


def two_sum(nums, target):
    seen = {}                                    # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:                   # check before you insert
            return [seen[target - x], i]
        seen[x] = i
    return []


def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups["".join(sorted(w))].append(w)     # a canonical key per group
    return list(groups.values())
```

O(n) time, O(n) space. Learn it: [TIH: Hash table](https://www.techinterviewhandbook.org/algorithms/hash-table/).

Problems, easy to hard:

- [Two Sum](https://leetcode.com/problems/two-sum/) (#1, Easy): the base case.
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) (#217, Easy)
- [Valid Anagram](https://leetcode.com/problems/valid-anagram/) (#242, Easy): a 26-slot count array is O(1) space.
- [Ransom Note](https://leetcode.com/problems/ransom-note/) (#383, Easy)
- [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) (#205, Easy): one map per direction.
- [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (#49, Medium): the canonical key.
- [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) (#128, Medium): count only from the start of each run.
- [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) (#138, Medium): map each old node to its copy.

## Two pointers

Use it when:

- The input is sorted (or you may sort it) and you need a pair or triplet that hits a target.
- You remove, move or partition elements in place.
- You compare from both ends, as in a palindrome check.

> **Watch out:** for 3Sum, sort, fix one number, run two pointers on the rest, and skip duplicates at both levels.

```python
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left, right]
        if total < target:
            left += 1                            # need a bigger sum
        else:
            right -= 1                           # need a smaller sum
    return []


def move_zeroes(nums):                           # read and write pointers
    write = 0
    for read in range(len(nums)):
        if nums[read] != 0:
            nums[write], nums[read] = nums[read], nums[write]
            write += 1
```

O(n) per pass, O(1) extra space. 3Sum is O(n^2). Learn it: [Hello Interview: Two pointers](https://www.hellointerview.com/learn/code/two-pointers/overview).

Problems, easy to hard:

- [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (#125, Easy)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes/) (#283, Easy): read and write pointers.
- [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) (#977, Easy): fill the output from the back.
- [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) (#680, Easy): one deletion allowed.
- [Two Sum II (Input Array Is Sorted)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (#167, Medium)
- [3Sum](https://leetcode.com/problems/3sum/) (#15, Medium)
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (#11, Medium): always move the shorter side.
- [Sort Colors](https://leetcode.com/problems/sort-colors/) (#75, Medium): three regions in one pass.
- [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) (#42, Hard)

## Fast and slow pointers

Use it when:

- A linked list asks for a cycle, the middle node, or a palindrome check.
- A sequence where each value points to the next one (happy numbers, values used as indices).
- You must use O(1) extra space.

> **Watch out:** "kth node from the end" uses the same two pointers with a fixed gap of k, both moving one step at a time.

```python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow                                  # second middle for even lengths


def cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:                         # they met inside the cycle
            slow = head
            while slow is not fast:              # now move both one step at a time
                slow, fast = slow.next, fast.next
            return slow                          # the node where the cycle starts
    return None
```

O(n) time, O(1) space. Learn it: [Hello Interview: Linked list](https://www.hellointerview.com/learn/code/linked-list/overview).

Problems, easy to hard:

- [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) (#876, Easy)
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) (#141, Easy)
- [Happy Number](https://leetcode.com/problems/happy-number/) (#202, Easy): the "list" is the sequence of digit-square sums.
- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) (#234, Easy): find the middle, reverse the second half.
- [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) (#142, Medium): the reset-to-head step above.
- [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) (#19, Medium): a gap of n.
- [Reorder List](https://leetcode.com/problems/reorder-list/) (#143, Medium): middle, reverse, merge.
- [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) (#287, Medium): treat each value as a next pointer.
- [Circular Array Loop](https://leetcode.com/problems/circular-array-loop/) (#457, Medium)

## Sliding window

Use it when:

- The answer is a contiguous subarray or substring.
- You want the longest, shortest, count or maximum sum, often with "at most K" or "contains all of".
- The window has a fixed size k.
- You can update the window's state in O(1) when one element enters or leaves.

> **Watch out:** negative numbers break "shrink while the sum is too big". Use [prefix sums](#prefix-sums) instead.

```python
from collections import Counter


def longest_unique(s):                           # variable window
    count = Counter()
    left = best = 0
    for right, ch in enumerate(s):
        count[ch] += 1
        while count[ch] > 1:                     # window invalid: shrink from the left
            count[s[left]] -= 1
            left += 1
        best = max(best, right - left + 1)       # window valid: record the answer
    return best


def max_sum_k(nums, k):                          # fixed window of size k
    window = best = sum(nums[:k])
    for right in range(k, len(nums)):
        window += nums[right] - nums[right - k]  # add the new one, drop the old one
        best = max(best, window)
    return best
```

O(n) time: each index enters and leaves the window once. Learn it: [Hello Interview: Fixed length](https://www.hellointerview.com/learn/code/sliding-window/fixed-length) and [Variable length](https://www.hellointerview.com/learn/code/sliding-window/variable-length) windows, or [Aditya Verma's sliding window playlist](https://www.youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj).

Problems, easy to hard:

- [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) (#643, Easy): fixed window.
- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (#121, Easy)
- [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (#3, Medium): the variable template above.
- [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) (#209, Medium): shortest, so record inside the shrink loop.
- [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) (#1004, Medium)
- [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) (#904, Medium): at most 2 distinct.
- [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) (#424, Medium)
- [Permutation in String](https://leetcode.com/problems/permutation-in-string/) (#567, Medium): fixed window plus counts.
- [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) (#438, Medium)
- [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) (#76, Hard)

## Prefix sums

Use it when:

- You answer many range-sum queries on an array that does not change.
- You count subarrays with sum k, divisible by k, or with equal 0s and 1s, and negatives are allowed.
- You apply many range updates, then read once (a difference array).

> **Watch out:** seed the hash map with `{0: 1}`. Without it you miss subarrays that start at index 0.

```python
from collections import defaultdict


def subarray_sum(nums, k):                       # count subarrays that sum to k
    seen = defaultdict(int)
    seen[0] = 1                                  # the empty prefix
    total = count = 0
    for x in nums:
        total += x
        count += seen[total - k]                 # earlier prefixes that complete k
        seen[total] += 1
    return count


def prefix_sums(nums):
    pre = [0]
    for x in nums:
        pre.append(pre[-1] + x)
    return pre                                   # sum of nums[l..r] = pre[r + 1] - pre[l]
```

O(n) to build, O(1) per query. Learn it: [Hello Interview: Prefix sum](https://www.hellointerview.com/learn/code/prefix-sum/overview).

Problems, easy to hard:

- [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) (#1480, Easy)
- [Range Sum Query Immutable](https://leetcode.com/problems/range-sum-query-immutable/) (#303, Easy)
- [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) (#724, Easy)
- [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) (#238, Medium): prefix and suffix products.
- [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) (#560, Medium): the template above.
- [Contiguous Array](https://leetcode.com/problems/contiguous-array/) (#525, Medium): count 0 as -1.
- [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) (#974, Medium): key on the remainder.
- [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) (#528, Medium): prefix sums plus binary search.
- [Range Sum Query 2D Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) (#304, Medium)
- [Car Pooling](https://leetcode.com/problems/car-pooling/) (#1094, Medium): a difference array.

## Intervals

Use it when:

- The input is a list of [start, end] pairs.
- You merge, insert, intersect, or count overlapping intervals.
- You need the minimum number of rooms, arrows or removals.

> **Watch out:** ask whether [1, 2] and [2, 3] overlap ([TIH: Interval](https://www.techinterviewhandbook.org/algorithms/interval/)). Sort by start to merge. Sort by end to keep the most non-overlapping intervals.

```python
import heapq


def merge(intervals):
    intervals.sort(key=lambda iv: iv[0])         # sort by start
    merged = []
    for start, end in intervals:
        if merged and start <= merged[-1][1]:    # overlaps the last one
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged


def min_rooms(intervals):
    ends = []                                    # min-heap of end times
    for start, end in sorted(intervals):
        if ends and ends[0] <= start:            # a room freed up: reuse it
            heapq.heapreplace(ends, end)
        else:
            heapq.heappush(ends, end)            # open a new room
    return len(ends)
```

O(n log n) for the sort. Learn it: [Hello Interview: Intervals](https://www.hellointerview.com/learn/code/intervals/overview).

Problems, easy to hard:

- [Summary Ranges](https://leetcode.com/problems/summary-ranges/) (#228, Easy)
- [Merge Intervals](https://leetcode.com/problems/merge-intervals/) (#56, Medium): the template above.
- [Insert Interval](https://leetcode.com/problems/insert-interval/) (#57, Medium)
- [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) (#435, Medium): sort by end.
- [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) (#452, Medium)
- [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) (#986, Medium): two pointers on two lists.
- [My Calendar I](https://leetcode.com/problems/my-calendar-i/) (#729, Medium)
- [Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) (#2402, Hard): two heaps, free rooms and busy rooms.
- [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) (#1851, Hard)

## Cyclic sort

Use it when:

- The array holds n numbers in the range 1 to n (or 0 to n).
- You must find the missing number, the duplicate, or the first missing positive.
- O(1) extra space is required, so a set is not allowed.

> **Watch out:** the other O(1)-space trick marks a value as seen by making `nums[abs(x) - 1]` negative. Know both.

```python
def first_missing_positive(nums):
    n = len(nums)
    i = 0
    while i < n:
        target = nums[i] - 1                     # the index where nums[i] belongs
        if 0 <= target < n and nums[i] != nums[target]:
            nums[i], nums[target] = nums[target], nums[i]
        else:
            i += 1
    for i in range(n):
        if nums[i] != i + 1:                     # first index holding the wrong value
            return i + 1
    return n + 1
```

O(n) time, O(1) extra space. Learn it: [Aditya Verma's swap sort (cyclic sort) playlist](https://www.youtube.com/playlist?list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx).

Problems, easy to hard:

- [Missing Number](https://leetcode.com/problems/missing-number/) (#268, Easy): XOR or a sum works too.
- [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) (#448, Easy)
- [Set Mismatch](https://leetcode.com/problems/set-mismatch/) (#645, Easy)
- [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) (#442, Medium)
- [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) (#287, Medium): solve it without changing the array too.
- [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) (#41, Hard): the template above.

## Linked list reversal

Use it when:

- You reverse a whole list, a section of it, or every k nodes.
- You compare or reorder the two halves of a list.
- You must use O(1) extra memory.

> **Watch out:** use a dummy node in front of the head whenever the head can change.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next


def reverse(head):
    prev, cur = None, head
    while cur:
        nxt = cur.next                           # 1. save the next node
        cur.next = prev                          # 2. flip the pointer
        prev, cur = cur, nxt                     # 3. move both forward
    return prev


def reverse_between(head, left, right):          # reverse positions left..right (1-indexed)
    dummy = ListNode(0, head)
    before = dummy
    for _ in range(left - 1):
        before = before.next
    prev, cur = None, before.next
    for _ in range(right - left + 1):
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    before.next.next = cur                       # old first node now points past the block
    before.next = prev                           # node before the block points to the new first
    return dummy.next
```

O(n) time, O(1) space. Learn it: [TIH: Linked list](https://www.techinterviewhandbook.org/algorithms/linked-list/) or [Striver's linked list playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0rAuz8tVcM0AymmhTRsfaLU).

Problems, easy to hard:

- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) (#206, Easy): write it iteratively and recursively.
- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) (#234, Easy)
- [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) (#92, Medium): the second template.
- [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) (#24, Medium)
- [Rotate List](https://leetcode.com/problems/rotate-list/) (#61, Medium)
- [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) (#328, Medium)
- [Reorder List](https://leetcode.com/problems/reorder-list/) (#143, Medium)
- [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) (#25, Hard)

## Stack and monotonic stack

Use it when:

- **Stack:** brackets must match, a structure is nested (`3[a2[c]]`), you evaluate an expression, or the most recent item decides what happens next. Sean Prashad: "If recursion is banned", use a stack.
- **Monotonic stack:** you need the next greater or next smaller element, days until a warmer day, a stock span, or the largest rectangle.
- **Monotonic deque:** you need the max or min of every sliding window.

> **Watch out:** store indices on the stack, not values. You almost always need the distance between positions.

```python
def is_valid(s):                                 # stack: matching
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            stack.append(ch)
    return not stack


def daily_temperatures(temps):                   # monotonic stack: next greater element
    answer = [0] * len(temps)
    stack = []                                   # indices, temperatures decreasing
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:    # t is the next warmer day for these
            j = stack.pop()
            answer[j] = i - j
        stack.append(i)
    return answer
```

O(n) time: each index is pushed and popped once. Learn it: [Hello Interview: Stack](https://www.hellointerview.com/learn/code/stack/overview) and [Monotonic stack](https://www.hellointerview.com/learn/code/stack/monotonic-stack).

Problems, easy to hard:

- [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (#20, Easy)
- [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) (#496, Easy)
- [Min Stack](https://leetcode.com/problems/min-stack/) (#155, Medium): store (value, minimum so far) pairs.
- [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) (#150, Medium)
- [Decode String](https://leetcode.com/problems/decode-string/) (#394, Medium)
- [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) (#1249, Medium)
- [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) (#735, Medium)
- [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) (#739, Medium): the monotonic template above.
- [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) (#84, Hard)
- [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) (#239, Hard): a monotonic deque.

## Binary search

Use it when:

- The input is sorted or rotated sorted, or the problem says "O(log n)".
- You need the first or last position of a value, an insert position, or a peak.
- **On the answer:** "minimize the maximum" or "the smallest speed, capacity or day count that works", and a yes/no check is monotonic: if x works, every larger x works too.

> **Watch out:** use one template for every variant: find the first index where a condition becomes true, on a half-open range. Most bugs come from mixing templates. In Java and C++, write `lo + (hi - lo) / 2` to avoid overflow.

```python
def lower_bound(nums, target):                   # first index with nums[i] >= target
    lo, hi = 0, len(nums)                        # half-open range [lo, hi)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] >= target:                  # condition true: answer is mid or left of it
            hi = mid
        else:
            lo = mid + 1
    return lo


def min_eating_speed(piles, h):                  # binary search on the answer
    def can_finish(speed):
        return sum((p + speed - 1) // speed for p in piles) <= h

    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_finish(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
```

O(log n) per search. On the answer: O(n log range). Learn it: the [LeetCode Binary Search study plan](https://leetcode.com/studyplan/binary-search/) (8 patterns, 42 questions) and [zhijun_liao's binary search template post](https://leetcode.com/discuss/post/786126/python-powerful-ultimate-binary-search-t-rwv8/), which uses this same "first index where the condition holds" idea.

Problems, easy to hard:

- [Binary Search](https://leetcode.com/problems/binary-search/) (#704, Easy)
- [First Bad Version](https://leetcode.com/problems/first-bad-version/) (#278, Easy): the template with no array at all.
- [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (#34, Medium): two calls to the template.
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) (#153, Medium)
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) (#33, Medium): find the sorted half first.
- [Find Peak Element](https://leetcode.com/problems/find-peak-element/) (#162, Medium)
- [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) (#875, Medium): the on-the-answer template above.
- [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) (#1011, Medium)
- [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) (#410, Hard)
- [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) (#4, Hard)

## Tree BFS

Use it when:

- The problem says "level by level": level order, right side view, zigzag, averages per level, widest level.
- You need the minimum depth, or to connect nodes on the same level.
- You need all nodes at distance k (add parent links, then BFS outward).

The [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/tree/) says: "When you are asked to traverse a tree by level, use breadth-first search."

```python
from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right


def level_order(root):
    if not root:
        return []
    levels, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):                  # exactly one level per pass
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        levels.append(level)
    return levels
```

O(n) time, O(width) space. Learn it: [Hello Interview: BFS introduction](https://www.hellointerview.com/learn/code/breadth-first-search/introduction).

Problems, easy to hard:

- [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) (#637, Easy)
- [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) (#111, Easy): stop at the first leaf.
- [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) (#102, Medium): the template above.
- [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) (#199, Medium): last node of each level.
- [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) (#103, Medium)
- [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) (#116, Medium)
- [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) (#662, Medium): track position numbers.
- [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) (#863, Medium)
- [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) (#297, Hard)

## Tree DFS

Use it when:

- You need depth, height, diameter, or whether the tree is balanced.
- You track root-to-leaf paths and their sums, or find the lowest common ancestor.
- A node's answer depends on its children's answers ("return two things from a subtree").
- The tree is a BST and you validate it, find the kth smallest, or find an LCA. In-order traversal of a BST is sorted.

> **Watch out:** very deep trees can hit Python's default recursion limit of about 1000 ([TIH: Recursion](https://www.techinterviewhandbook.org/algorithms/recursion/)). Say so, or use an explicit stack.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right


def diameter(root):
    best = 0

    def height(node):                            # returns a value to the parent...
        nonlocal best                            # ...and updates a global answer
        if not node:
            return 0
        left, right = height(node.left), height(node.right)
        best = max(best, left + right)
        return 1 + max(left, right)

    height(root)
    return best


def is_valid_bst(node, low=float("-inf"), high=float("inf")):
    if not node:
        return True
    if not low < node.val < high:                # pass the allowed range down
        return False
    return (is_valid_bst(node.left, low, node.val)
            and is_valid_bst(node.right, node.val, high))
```

O(n) time, O(h) space for the recursion. Learn it: [Hello Interview: DFS introduction](https://www.hellointerview.com/learn/code/depth-first-search/introduction) and [TIH: Tree](https://www.techinterviewhandbook.org/algorithms/tree/).

Problems, easy to hard:

- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) (#104, Easy)
- [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) (#226, Easy)
- [Same Tree](https://leetcode.com/problems/same-tree/) (#100, Easy)
- [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) (#543, Easy): the first template.
- [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) (#572, Easy)
- [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) (#98, Medium): the second template.
- [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) (#230, Medium): iterative in-order.
- [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) (#236, Medium)
- [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) (#105, Medium)
- [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) (#124, Hard): diameter's idea with values.

## Graph DFS

Use it when:

- A grid of land and water asks for islands, regions or areas.
- You check whether two nodes connect, count components, or copy a graph.
- Regions touch the border (start the search from the border cells).

> **Watch out:** build the adjacency list first, and add both directions for an undirected edge. The templates below use an explicit stack, so deep graphs cannot hit Python's recursion limit.

```python
from collections import defaultdict


def count_components(n, edges):                  # graph given as an edge list
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)                       # undirected: both directions
    seen, count = set(), 0
    for start in range(n):
        if start in seen:
            continue
        count += 1
        seen.add(start)
        stack = [start]
        while stack:
            u = stack.pop()
            for v in graph[u]:
                if v not in seen:
                    seen.add(v)
                    stack.append(v)
    return count


def num_islands(grid):                           # graph given as a grid
    rows, cols = len(grid), len(grid[0])
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] != "1":
                continue
            count += 1
            grid[r][c] = "0"                     # mark visited in place
            stack = [(r, c)]
            while stack:
                i, j = stack.pop()
                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ni, nj = i + di, j + dj
                    if 0 <= ni < rows and 0 <= nj < cols and grid[ni][nj] == "1":
                        grid[ni][nj] = "0"
                        stack.append((ni, nj))
    return count
```

O(V + E) time, or O(rows * cols) for a grid. Learn it: [Hello Interview: Graphs overview](https://www.hellointerview.com/learn/code/depth-first-search/graphs-overview) and the LeetCode Discuss post [Graph For Beginners (wh0ami)](https://leetcode.com/discuss/post/655708/graph-for-beginners-problems-pattern-sam-06fb/).

Problems, easy to hard:

- [Flood Fill](https://leetcode.com/problems/flood-fill/) (#733, Easy)
- [Number of Islands](https://leetcode.com/problems/number-of-islands/) (#200, Medium): the grid template.
- [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) (#695, Medium)
- [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) (#547, Medium): the edge template on a matrix.
- [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) (#841, Medium)
- [Clone Graph](https://leetcode.com/problems/clone-graph/) (#133, Medium): a map from old node to copy.
- [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) (#1254, Medium): clear the border first.
- [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) (#1020, Medium)
- [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) (#130, Medium)
- [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) (#417, Medium): search from each ocean inward.

## Graph BFS

Use it when:

- You need the minimum number of steps, moves or minutes, and every move costs the same.
- The graph is a set of states: lock combinations, word ladders, a board game.
- Something spreads from many sources at once (rot, distance to the nearest 0).

> **Watch out:** mark a cell visited when you add it to the queue, not when you pop it. Otherwise the same cell enters the queue many times.

```python
from collections import deque


def oranges_rotting(grid):                       # multi-source BFS, level by level
    rows, cols = len(grid), len(grid[0])
    q, fresh = deque(), 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                q.append((r, c))                 # every source starts in the queue
            elif grid[r][c] == 1:
                fresh += 1
    minutes = 0
    while q and fresh:
        for _ in range(len(q)):                  # one minute = one level
            i, j = q.popleft()
            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ni, nj = i + di, j + dj
                if 0 <= ni < rows and 0 <= nj < cols and grid[ni][nj] == 1:
                    grid[ni][nj] = 2             # mark when you enqueue
                    fresh -= 1
                    q.append((ni, nj))
        minutes += 1
    return minutes if fresh == 0 else -1
```

O(V + E) time, O(V) space. For one source, start the queue with that one cell. Learn it: [Hello Interview: BFS fundamentals](https://www.hellointerview.com/learn/code/breadth-first-search/fundamentals).

Problems, easy to hard:

- [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) (#994, Medium): the template above.
- [01 Matrix](https://leetcode.com/problems/01-matrix/) (#542, Medium): start from every 0.
- [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) (#1091, Medium): 8 directions.
- [Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/) (#1926, Medium)
- [As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) (#1162, Medium)
- [Open the Lock](https://leetcode.com/problems/open-the-lock/) (#752, Medium): each state is a node.
- [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) (#433, Medium)
- [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) (#909, Medium)
- [Word Ladder](https://leetcode.com/problems/word-ladder/) (#127, Hard)
- [Bus Routes](https://leetcode.com/problems/bus-routes/) (#815, Hard): BFS over routes, not stops.

## Topological sort

Use it when:

- The problem has prerequisites, dependencies, a build order or a schedule.
- You must say whether all tasks can finish (a cycle check in a directed graph).
- You order letters from a sorted list of words in an unknown alphabet.

> **Watch out:** if the order you build has fewer than n nodes, the graph has a cycle and no valid order exists.

```python
from collections import defaultdict, deque


def find_order(n, prerequisites):                # Kahn's algorithm
    graph = defaultdict(list)
    indegree = [0] * n
    for course, pre in prerequisites:
        graph[pre].append(course)                # edge: pre must come before course
        indegree[course] += 1
    q = deque(i for i in range(n) if indegree[i] == 0)
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indegree[v] -= 1
            if indegree[v] == 0:                 # all of v's prerequisites are done
                q.append(v)
    return order if len(order) == n else []      # shorter means a cycle
```

O(V + E) time and space. Learn it: [Hello Interview: Topological sort](https://www.hellointerview.com/learn/code/graphs/topological-sort) or [CP-Algorithms: Topological sort](https://cp-algorithms.com/graph/topological-sort.html) for the DFS version.

Problems, easy to hard:

- [Course Schedule](https://leetcode.com/problems/course-schedule/) (#207, Medium)
- [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) (#210, Medium): the template above.
- [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) (#802, Medium): run it on the reversed graph.
- [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) (#310, Medium): peel leaves layer by layer.
- [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) (#2115, Medium)
- [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) (#329, Hard): also solvable with DFS plus memoization.
- [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) (#1203, Hard)

Alien Dictionary (#269), a common Google and Meta question, is Premium on LeetCode. [NeetCode's Blind 75 list](https://neetcode.io/practice/practice/blind75) hosts it free.

## Union-find

Use it when:

- Connectivity changes as edges arrive, and you ask "are these two in the same group?"
- You merge groups (accounts, equal variables, friend circles).
- One edge creates a cycle (a redundant connection).
- You build a minimum spanning tree with Kruskal: sort edges by weight, union if not yet connected.

> **Watch out:** use both path compression and union by size. Without them, find can degrade to O(n).

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # path halving
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                                   # already joined: this edge makes a cycle
        if self.size[ra] < self.size[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra                               # attach the smaller tree under the larger
        self.size[ra] += self.size[rb]
        return True
```

Near O(1) amortized per operation, O(n) space. Learn it: [CP-Algorithms: Disjoint set union](https://cp-algorithms.com/data_structures/disjoint_set_union.html) and [VisuAlgo: Union-find](https://visualgo.net/en/ufds).

Problems, easy to hard:

- [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) (#547, Medium): count successful unions.
- [Redundant Connection](https://leetcode.com/problems/redundant-connection/) (#684, Medium): the first union that returns False.
- [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) (#990, Medium)
- [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) (#1319, Medium)
- [Accounts Merge](https://leetcode.com/problems/accounts-merge/) (#721, Medium)
- [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) (#947, Medium)
- [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) (#1584, Medium): Kruskal.
- [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/) (#685, Hard)

## Shortest paths

Use it when:

- Edges have weights, and you want the minimum total cost, time or effort: Dijkstra (weights must not be negative).
- The problem limits you to "at most k stops": run k rounds of Bellman-Ford, or BFS level by level.
- Weights are only 0 or 1: 0-1 BFS with a deque.
- You must connect all points at minimum cost: a minimum spanning tree (Kruskal with [union-find](#union-find), or Prim).

The [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/graph/) rates Bellman-Ford, Floyd-Warshall, Prim and Kruskal as "Almost never" asked. Learn Dijkstra well first.

```python
import heapq
from collections import defaultdict


def network_delay_time(times, n, k):             # Dijkstra from node k
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    dist = {}
    heap = [(0, k)]
    while heap:
        d, u = heapq.heappop(heap)
        if u in dist:
            continue                             # stale entry: u already has its final distance
        dist[u] = d
        for v, w in graph[u]:
            if v not in dist:
                heapq.heappush(heap, (d + w, v))
    return max(dist.values()) if len(dist) == n else -1
```

O((V + E) log V) time. Learn it: [Hello Interview: Shortest path algorithms](https://www.hellointerview.com/learn/code/graphs/shortest-path-algorithms) and the [LeetCode Graph Theory study plan](https://leetcode.com/studyplan/graph-theory/).

Problems, easy to hard:

- [Network Delay Time](https://leetcode.com/problems/network-delay-time/) (#743, Medium): the template above.
- [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) (#1514, Medium): maximize a product instead.
- [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) (#1631, Medium): Dijkstra on a grid.
- [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) (#787, Medium): Bellman-Ford with k rounds.
- [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) (#1334, Medium): Floyd-Warshall fits, n is small.
- [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) (#1584, Medium): minimum spanning tree.
- [Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/) (#2290, Hard): 0-1 BFS.
- [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) (#778, Hard)

## Heaps

Use it when:

- **Top K:** the k largest, smallest, most frequent or closest items. Keep a heap of size k.
- **K-way merge:** you merge k sorted lists, or find the kth smallest across sorted rows.
- **Two heaps:** a running median, or two pools such as free and busy servers.

> **Watch out:** Python's `heapq` is a min-heap. For a max-heap, push negated values. Built-in max-heap functions exist only from Python 3.14 ([heapq docs](https://docs.python.org/3/library/heapq.html)), so do not rely on them.

```python
import heapq
from collections import Counter


def top_k_frequent(nums, k):                     # top K: keep a size-k min-heap
    heap = []
    for num, freq in Counter(nums).items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)                  # drop the least frequent
    return [num for _, num in heap]


def merge_k_sorted(lists):                       # k-way merge
    heap = [(lst[0], i, 0) for i, lst in enumerate(lists) if lst]
    heapq.heapify(heap)
    merged = []
    while heap:
        val, i, j = heapq.heappop(heap)
        merged.append(val)
        if j + 1 < len(lists[i]):                # push the next item from the same list
            heapq.heappush(heap, (lists[i][j + 1], i, j + 1))
    return merged


class MedianFinder:                              # two heaps
    def __init__(self):
        self.low, self.high = [], []             # low: max-heap (negated), high: min-heap

    def add(self, num):
        heapq.heappush(self.low, -num)
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.high) > len(self.low):       # keep low the same size or one bigger
            heapq.heappush(self.low, -heapq.heappop(self.high))

    def median(self):
        if len(self.low) > len(self.high):
            return -self.low[0]
        return (-self.low[0] + self.high[0]) / 2
```

Top K is O(n log k), k-way merge is O(N log k) for N total items, and each median insert is O(log n). Learn it: [Hello Interview: Heap](https://www.hellointerview.com/learn/code/heap/overview) and [TIH: Heap](https://www.techinterviewhandbook.org/algorithms/heap/).

Problems, easy to hard:

- [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) (#703, Easy)
- [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) (#1046, Easy): a max-heap by negation.
- [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) (#215, Medium): also try quickselect.
- [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) (#347, Medium): the first template.
- [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) (#973, Medium)
- [Task Scheduler](https://leetcode.com/problems/task-scheduler/) (#621, Medium)
- [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) (#378, Medium): k-way merge over rows.
- [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) (#23, Hard): the second template on linked lists.
- [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) (#295, Hard): the third template.
- [IPO](https://leetcode.com/problems/ipo/) (#502, Hard): two heaps for affordable and locked projects.

## Backtracking

Use it when:

- The problem asks for "all" combinations, permutations, subsets, partitions or placements.
- n is small, often 20 or less.
- It is a constraint puzzle: N-Queens, Sudoku, word search.

> **Watch out:** append a copy (`path[:]`), not `path` itself. Undo every change right after the recursive call. For permutations, replace `start` with a `used` array.

```python
def subsets_with_dup(nums):
    nums.sort()                                  # duplicates sit next to each other
    result, path = [], []

    def backtrack(start):
        result.append(path[:])                   # record a copy
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue                         # skip a duplicate branch
            path.append(nums[i])                 # choose
            backtrack(i + 1)                     # explore
            path.pop()                           # un-choose

    backtrack(0)
    return result
```

Subsets cost O(n * 2^n) and permutations O(n * n!), with O(n) recursion depth. Learn it: [Hello Interview: Backtracking](https://www.hellointerview.com/learn/code/backtracking/overview) or [Striver's recursion and backtracking playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9).

Problems, easy to hard:

- [Subsets](https://leetcode.com/problems/subsets/) (#78, Medium)
- [Subsets II](https://leetcode.com/problems/subsets-ii/) (#90, Medium): the template above.
- [Permutations](https://leetcode.com/problems/permutations/) (#46, Medium): a `used` array.
- [Combinations](https://leetcode.com/problems/combinations/) (#77, Medium)
- [Combination Sum](https://leetcode.com/problems/combination-sum/) (#39, Medium): reuse allowed, so recurse with `i`, not `i + 1`.
- [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) (#17, Medium)
- [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) (#22, Medium): prune with open and close counts.
- [Word Search](https://leetcode.com/problems/word-search/) (#79, Medium): mark the cell, recurse, unmark.
- [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) (#131, Medium)
- [N-Queens](https://leetcode.com/problems/n-queens/) (#51, Hard): sets for columns and both diagonals.

## Greedy

Use it when:

- You can argue a local choice is never worse than any other: the earliest end, the farthest reach, the smallest item that fits.
- Sean Prashad: "If need to count/divide optimally", try "Greedy, Dynamic programming".

> **Watch out:** if you cannot say why the choice is safe, test a small counterexample. If it fails, switch to [dynamic programming](#dynamic-programming).

```python
def can_jump(nums):
    farthest = 0
    for i, step in enumerate(nums):
        if i > farthest:
            return False                         # index i cannot be reached
        farthest = max(farthest, i + step)
    return True


def erase_overlap_intervals(intervals):          # keep the most non-overlapping
    intervals.sort(key=lambda iv: iv[1])         # the earliest end leaves the most room
    kept, last_end = 0, float("-inf")
    for start, end in intervals:
        if start >= last_end:
            kept += 1
            last_end = end
    return len(intervals) - kept
```

Usually O(n log n) for the sort, then O(n). Learn it: [Hello Interview: Greedy](https://www.hellointerview.com/learn/code/greedy/overview).

Problems, easy to hard:

- [Assign Cookies](https://leetcode.com/problems/assign-cookies/) (#455, Easy)
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (#53, Medium): Kadane's algorithm.
- [Jump Game](https://leetcode.com/problems/jump-game/) (#55, Medium): the first template.
- [Jump Game II](https://leetcode.com/problems/jump-game-ii/) (#45, Medium)
- [Gas Station](https://leetcode.com/problems/gas-station/) (#134, Medium)
- [Partition Labels](https://leetcode.com/problems/partition-labels/) (#763, Medium)
- [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) (#846, Medium)
- [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) (#881, Medium): sort, then two pointers.
- [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) (#678, Medium): track a min and max open count.
- [Candy](https://leetcode.com/problems/candy/) (#135, Hard): one pass each way.

## Trie

Use it when:

- You store many words and ask prefix questions, autocomplete, or "starts with".
- You search a dictionary with wildcards.
- You search for many words in a grid at once.
- You want the maximum XOR of two numbers (a trie over bits).

> **Watch out:** in Word Search II, delete words from the trie once found, or the same grid path gets explored again and again.

```python
class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node["$"] = True                         # end-of-word marker

    def _walk(self, s):
        node = self.root
        for ch in s:
            if ch not in node:
                return None
            node = node[ch]
        return node

    def search(self, word):
        node = self._walk(word)
        return node is not None and "$" in node

    def starts_with(self, prefix):
        return self._walk(prefix) is not None
```

O(L) per operation, L = word length. Learn it: [Hello Interview: Trie](https://www.hellointerview.com/learn/code/trie/overview). Jugal's Meta plan sets a target: "Code a Trie class with insert/search/delete in ~20 minutes on paper" ([post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part)).

Problems, easy to hard:

- [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) (#208, Medium): the template above.
- [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) (#720, Medium)
- [Replace Words](https://leetcode.com/problems/replace-words/) (#648, Medium)
- [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (#211, Medium): DFS on "." wildcards.
- [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) (#1268, Medium)
- [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) (#421, Medium)
- [Word Search II](https://leetcode.com/problems/word-search-ii/) (#212, Hard): trie plus grid DFS.
- [Stream of Characters](https://leetcode.com/problems/stream-of-characters/) (#1032, Hard): store words reversed.

## Bit manipulation

Use it when:

- "Every element appears twice except one."
- You count set bits, check a power of two, or reverse bits.
- You add without `+`, or treat subsets as bitmasks.

> **Watch out:** Python integers never overflow. For 32-bit problems, mask with `0xFFFFFFFF` and handle the sign yourself.

```python
def single_number(nums):                         # pairs cancel: x ^ x == 0, x ^ 0 == x
    result = 0
    for x in nums:
        result ^= x
    return result


def count_set_bits(x):                           # x & (x - 1) clears the lowest set bit
    count = 0
    while x:
        x &= x - 1
        count += 1
    return count

# Read bit k: (x >> k) & 1      Set bit k: x | (1 << k)      Clear bit k: x & ~(1 << k)
# Lowest set bit: x & -x        Power of two: x > 0 and x & (x - 1) == 0
```

O(n) or O(number of bits) time, O(1) space. Learn it: [TIH: Binary](https://www.techinterviewhandbook.org/algorithms/binary/).

Problems, easy to hard:

- [Single Number](https://leetcode.com/problems/single-number/) (#136, Easy): the first template.
- [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) (#191, Easy): the second template.
- [Counting Bits](https://leetcode.com/problems/counting-bits/) (#338, Easy): `bits[i] = bits[i >> 1] + (i & 1)`.
- [Missing Number](https://leetcode.com/problems/missing-number/) (#268, Easy)
- [Reverse Bits](https://leetcode.com/problems/reverse-bits/) (#190, Easy)
- [Power of Two](https://leetcode.com/problems/power-of-two/) (#231, Easy)
- [Hamming Distance](https://leetcode.com/problems/hamming-distance/) (#461, Easy)
- [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) (#371, Medium): needs the 32-bit mask in Python.
- [Single Number III](https://leetcode.com/problems/single-number-iii/) (#260, Medium): split by the lowest set bit.
- [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) (#201, Medium)

## Matrix traversal

Use it when:

- You rotate, transpose, or read a matrix in spiral or diagonal order.
- You change a matrix in place (set zeroes, game of life).
- You search a matrix sorted by rows and columns.

> **Watch out:** for in-place updates, encode the old and new state in the same cell, or use the first row and column as markers, so you do not read values you already changed.

```python
def spiral_order(matrix):
    result = []
    top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for c in range(left, right + 1):
            result.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1):
            result.append(matrix[r][right])
        right -= 1
        if top <= bottom:
            for c in range(right, left - 1, -1):
                result.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:
            for r in range(bottom, top - 1, -1):
                result.append(matrix[r][left])
            left += 1
    return result


def rotate(matrix):                              # 90 degrees clockwise, in place
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]   # transpose
    for row in matrix:
        row.reverse()                            # then reverse each row
```

O(rows * cols) time, O(1) extra space for the in-place versions. Learn it: [TIH: Matrix](https://www.techinterviewhandbook.org/algorithms/matrix/) and [Hello Interview: Spiral matrix](https://www.hellointerview.com/learn/code/matrices/spiral-matrix).

Problems, easy to hard:

- [Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) (#867, Easy)
- [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) (#54, Medium): the first template.
- [Rotate Image](https://leetcode.com/problems/rotate-image/) (#48, Medium): the second template.
- [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) (#73, Medium): first row and column as markers.
- [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) (#36, Medium): box index `(r // 3) * 3 + c // 3`.
- [Game of Life](https://leetcode.com/problems/game-of-life/) (#289, Medium)
- [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) (#240, Medium): start at the top-right corner.
- [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) (#498, Medium)

## Design a data structure

Use it when:

- The problem says "implement a class" with methods such as get, put, add or top.
- Every operation must run in O(1) or O(log n).
- It is a cache, iterator, browser history, snapshot or rate counter.

Combine structures to hit the target: a hash map plus a doubly linked list (LRU cache), a hash map plus an array (random pick in O(1)), a per-key list of (time, value) plus binary search (time-based lookups). Jugal's notes rate this a core pattern for Amazon, Meta and Airbnb ([Company Wise DSA patterns](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc)).

```python
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None


class LRUCache:                                  # hash map + doubly linked list
    def __init__(self, capacity):
        self.capacity, self.map = capacity, {}
        self.head, self.tail = Node(), Node()    # dummies: head.next is the most recent
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add_front(self, node):
        node.prev, node.next = self.head, self.head.next
        self.head.next.prev = node
        self.head.next = node

    def get(self, key):
        if key not in self.map:
            return -1
        node = self.map[key]
        self._remove(node)                       # touched: move to the front
        self._add_front(node)
        return node.val

    def put(self, key, value):
        if key in self.map:
            self._remove(self.map[key])
        node = Node(key, value)
        self.map[key] = node
        self._add_front(node)
        if len(self.map) > self.capacity:
            lru = self.tail.prev                 # least recently used sits at the back
            self._remove(lru)
            del self.map[lru.key]
```

O(1) per operation. If you use `OrderedDict`, expect the follow-up "now build it without OrderedDict".

Problems, easy to hard:

- [Design HashMap](https://leetcode.com/problems/design-hashmap/) (#706, Easy): buckets of lists.
- [Min Stack](https://leetcode.com/problems/min-stack/) (#155, Medium)
- [Design Browser History](https://leetcode.com/problems/design-browser-history/) (#1472, Medium)
- [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) (#622, Medium)
- [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) (#380, Medium): swap with the last element before you pop.
- [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) (#981, Medium): binary search per key.
- [Snapshot Array](https://leetcode.com/problems/snapshot-array/) (#1146, Medium)
- [LRU Cache](https://leetcode.com/problems/lru-cache/) (#146, Medium): the template above.
- [Design Twitter](https://leetcode.com/problems/design-twitter/) (#355, Medium): a k-way merge of feeds.
- [LFU Cache](https://leetcode.com/problems/lfu-cache/) (#460, Hard)

## Dynamic programming

Use it when:

- You count the ways, or find the minimum or maximum, and the same subproblems repeat.
- Each step is a choice: take it or skip it, go right or go down.
- The input is two strings, a grid, or items with a capacity.
- A [greedy](#greedy) choice fails on a small counterexample.

Solve every DP problem in the same 5 steps:

1. **Define the state in one sentence.** "best(i) is the most money from houses i onward."
2. **Write the choices** at that state as a recurrence.
3. **Write the base cases.**
4. **Code it top-down with `@cache`.** Get it correct first.
5. **Convert to bottom-up** and keep only the rows you need, if the interviewer asks.

Jugal's 60-day roadmap teaches DP in layers: take or skip, unbounded, longest increasing subsequence, grids, strings, stocks, then partition DP. "By day 45 you should be able to recognize which DP family a problem belongs to within the first 60 seconds of reading it" ([post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).

```python
from functools import cache


def rob(nums):                                   # 1D, take or skip, top-down
    @cache
    def best(i):                                 # most money from house i onward
        if i >= len(nums):
            return 0
        return max(best(i + 1), nums[i] + best(i + 2))

    return best(0)


def rob_bottom_up(nums):                         # same recurrence, O(1) space
    take, skip = 0, 0
    for x in nums:
        take, skip = skip + x, max(take, skip)
    return max(take, skip)


def can_partition(nums):                         # 0/1 knapsack: each item at most once
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    dp = [True] + [False] * target               # dp[t]: some subset sums to t
    for x in nums:
        for t in range(target, x - 1, -1):       # go DOWN so x is used once
            dp[t] = dp[t] or dp[t - x]
    return dp[target]


def coin_change(coins, amount):                  # unbounded knapsack: reuse allowed
    INF = float("inf")
    dp = [0] + [INF] * amount                    # dp[t]: fewest coins for t
    for coin in coins:
        for t in range(coin, amount + 1):        # go UP so a coin can repeat
            dp[t] = min(dp[t], dp[t - coin] + 1)
    return dp[amount] if dp[amount] != INF else -1


def longest_common_subsequence(a, b):            # two strings: prefixes a[:i] and b[:j]
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[-1][-1]
```

Learn it: the [LeetCode Dynamic Programming study plan](https://leetcode.com/studyplan/dynamic-programming/) (10 patterns, 50 questions), [Dynamic Programming Patterns (aatalyk)](https://leetcode.com/discuss/post/458695/dynamic-programming-patterns-by-aatalyk-pmgr/) on LeetCode Discuss, and [Aditya Verma's DP playlist](https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go) or [Striver's DP playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY) if you want video.

First 10 problems, easy to hard:

- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) (#70, Easy)
- [House Robber](https://leetcode.com/problems/house-robber/) (#198, Medium): the first template.
- [Coin Change](https://leetcode.com/problems/coin-change/) (#322, Medium): unbounded knapsack.
- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) (#300, Medium): O(n^2) first, then O(n log n) with `bisect`.
- [Word Break](https://leetcode.com/problems/word-break/) (#139, Medium)
- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) (#416, Medium): 0/1 knapsack.
- [Unique Paths](https://leetcode.com/problems/unique-paths/) (#62, Medium)
- [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) (#1143, Medium): the last template.
- [Edit Distance](https://leetcode.com/problems/edit-distance/) (#72, Medium): insert, delete or replace.
- [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) (#5, Medium): expand around each center.

Then drill by family, easy to hard within each row:

| Family | Cue | Problems |
|---|---|---|
| 1D, take or skip | Answer at i depends on a few earlier positions | [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) (#746, Easy), [House Robber II](https://leetcode.com/problems/house-robber-ii/) (#213, Medium), [Decode Ways](https://leetcode.com/problems/decode-ways/) (#91, Medium), [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) (#152, Medium) |
| 0/1 knapsack | Pick a subset, each item at most once, to hit a target | [Target Sum](https://leetcode.com/problems/target-sum/) (#494, Medium), [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) (#1049, Medium), [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) (#474, Medium) |
| Unbounded knapsack | Items can repeat | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) (#518, Medium), [Perfect Squares](https://leetcode.com/problems/perfect-squares/) (#279, Medium), [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) (#377, Medium), [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) (#983, Medium) |
| Longest increasing subsequence | Longest chain where each item beats the last | [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) (#368, Medium), [Longest String Chain](https://leetcode.com/problems/longest-string-chain/) (#1048, Medium), [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) (#354, Hard) |
| Two strings | Common subsequence, edits, matching | [Interleaving String](https://leetcode.com/problems/interleaving-string/) (#97, Medium), [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) (#115, Hard), [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) (#10, Hard) |
| Grids | Move right or down, count paths or minimum cost | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) (#63, Medium), [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) (#64, Medium), [Maximal Square](https://leetcode.com/problems/maximal-square/) (#221, Medium), [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/) (#741, Hard) |
| Palindromes and intervals | The answer for [i, j] comes from smaller ranges inside it | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) (#647, Medium), [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) (#516, Medium), [Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) (#1547, Hard), [Burst Balloons](https://leetcode.com/problems/burst-balloons/) (#312, Hard) |
| State machine (stocks) | A few states per day: holding, not holding, cooldown | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) (#122, Medium), [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) (#309, Medium), [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) (#714, Medium), [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) (#188, Hard) |
| On trees | Each node returns a small tuple of states to its parent | [House Robber III](https://leetcode.com/problems/house-robber-iii/) (#337, Medium), [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) (#968, Hard) |
| Bitmask | n of 20 or less, and the state is "which items are used" | [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) (#698, Medium), [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) (#847, Hard) |

Google targets: do the last four rows. Jugal's Google plan covers "bitmask DP for small n" and calls tree DP "commonly asked by Google" ([post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e)).

## Company pattern map

Jugal's map of the 4 patterns each company favors, from his own prep ([post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta), with problems per company in his [Notion page](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc)). It is his curation, not measured frequency. For tag frequency, use the company pages.

How to run the sprint (1 to 2 weeks, after you know all 25 patterns):

1. **Pick your company's row** below. Interviewing at several? Start with the patterns that repeat across their rows.
2. **Do 2 to 3 timed problems per pattern** from that company's section of the [Notion page](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc). Jugal: "the timer matters here" ([post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).
3. **Want a fixed schedule?** Use the company days in the day-by-day plan, [Master DSA with patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns).
4. **End with mocks, not new problems:** 45 minutes, one problem, out loud ([Mock interviews](mock-interviews.md)).

| Company | Patterns to sprint on | Company page |
|---|---|---|
| Amazon | [Sliding window](#sliding-window), [Two pointers](#two-pointers), [Graph BFS](#graph-bfs), [Design a data structure](#design-a-data-structure) | [Amazon](../companies/amazon.md) |
| Google | [Dynamic programming](#dynamic-programming), graphs ([DFS](#graph-dfs), [BFS](#graph-bfs), [Topological sort](#topological-sort), [Shortest paths](#shortest-paths)), [Backtracking](#backtracking), [Binary search](#binary-search) | [Google](../companies/google.md) |
| Meta | [Sliding window](#sliding-window), trees ([BFS](#tree-bfs), [DFS](#tree-dfs)), [Graph BFS](#graph-bfs), [Design a data structure](#design-a-data-structure) | [Meta](../companies/meta.md) |
| Netflix | [Intervals](#intervals), [Greedy](#greedy), top K and two heaps ([Heaps](#heaps)) | [Netflix](../companies/netflix.md) |
| Uber | Graphs ([Shortest paths](#shortest-paths), [Union-find](#union-find)), [Greedy](#greedy), top K and two heaps ([Heaps](#heaps)) | [Uber](../companies/uber.md) |
| Airbnb | [Intervals](#intervals), [Graph BFS](#graph-bfs), [Backtracking](#backtracking), [Design a data structure](#design-a-data-structure) | [Airbnb](../companies/airbnb.md) |
| Microsoft | Trees ([Tree DFS](#tree-dfs)), [Dynamic programming](#dynamic-programming), XOR ([Bit manipulation](#bit-manipulation)), [Binary search](#binary-search) | [Microsoft](../companies/microsoft.md) |
| Apple | [Binary search](#binary-search), [Two pointers](#two-pointers), monotonic stack ([Stack](#stack-and-monotonic-stack)), [Matrix traversal](#matrix-traversal) | [Apple](../companies/apple.md) |

## Where these patterns come from

- [Sean Prashad: LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) ([repo](https://github.com/seanprashad/leetcode-patterns)): 179 problems tagged by pattern and by the companies that asked them, a Beginner and an Experienced roadmap, and the Helpful Tips heuristics quoted in the cue table. How to use it: filter by pattern when you need more problems for a weak pattern.
- [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed) (Fahim ul Haq, 2019): the article that named sliding window, two pointers, fast and slow pointers, merge intervals, cyclic sort, in-place reversal, tree BFS, tree DFS, two heaps, subsets, modified binary search, top K, k-way merge and topological sort. How to use it: read it once for its "how to identify" lines.
- [AlgoMaster: 15 LeetCode patterns](https://blog.algomaster.io/p/15-leetcode-patterns) (Ashish Pratap Singh, 2024): 15 patterns with starter problems for each. How to use it: a second set of starter problems when a pattern does not click.
- [Hello Interview: data structures and algorithms](https://www.hellointerview.com/learn/code) (freemium): visual lessons for 16 patterns. How to use it: read the overview before day 1 of a pattern.
- [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/) by Yangshun Tay: topic priorities, techniques and corner cases. How to use it: copy the corner cases for each topic into your cheat sheet.
- LeetCode study plans: [Dynamic Programming](https://leetcode.com/studyplan/dynamic-programming/) (10 patterns), [Binary Search](https://leetcode.com/studyplan/binary-search/) (8 patterns), [Graph Theory](https://leetcode.com/studyplan/graph-theory/) (traversal, union-find, topological sort, Dijkstra, MST). How to use it: 2 to 3 weeks on one plan when that topic is your weakest.
- [Jugal: Company Wise DSA patterns](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc): 22 core patterns with representative problems, plus the company map above. How to use it: Part 3 as a pattern checklist, Part 1 to drill your target company.
- [Jugal: Master DSA with patterns](https://jugaldb.substack.com/p/company-wise-dsa-patterns): the same 22 patterns as a 60-day, day-by-day plan at 60 to 90 minutes a day, with review days and mocks at the end. How to use it: follow it if you want a fixed daily schedule instead of the 2-days-per-pattern loop above.
- [Michael's Guide to FAANG DSA](https://jugaldb.substack.com/p/michaels-guide-to-faang-dsa) (on Ascend): 15 patterns with linked sample problems for each, plus a 10-week roadmap. How to use it: a second set of problems when one pattern does not click.
- Paid, not needed: [Grokking the Coding Interview (DesignGurus)](https://www.designgurus.io/course/grokking-the-coding-interview) ($197, as of Oct 2026) and [AlgoMonster](https://algo.monster/). The free sources above cover the same patterns.

## Pattern checklist

Tick a pattern when you can name it from a problem statement, write its template from memory, and have solved at least 5 of its problems.

- [ ] Hashing
- [ ] Two pointers
- [ ] Fast and slow pointers
- [ ] Sliding window
- [ ] Prefix sums
- [ ] Intervals
- [ ] Cyclic sort
- [ ] Linked list reversal
- [ ] Stack and monotonic stack
- [ ] Binary search
- [ ] Tree BFS
- [ ] Tree DFS
- [ ] Graph DFS
- [ ] Graph BFS
- [ ] Topological sort
- [ ] Union-find
- [ ] Shortest paths
- [ ] Heaps
- [ ] Backtracking
- [ ] Greedy
- [ ] Trie
- [ ] Bit manipulation
- [ ] Matrix traversal
- [ ] Design a data structure
- [ ] Dynamic programming

Next: [Problem lists](problem-lists.md)
