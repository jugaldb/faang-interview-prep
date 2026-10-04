# Netflix interview guide

Process notes and the most asked LeetCode problems at Netflix. Updated October 2026.

| | |
|---|---|
| **Category** | FAANG |

## What they ask (data)

Based on **7** distinct problems tagged to Netflix in the last 6 months (0 in the last 30 days, 1 in the last 3 months, 28 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 86%, Hard 14%

**Most tagged topics (share of problems):** Hash Table 43%, String 43%, Design 29%, Graph Theory 29%, Topological Sort 29%, Sliding Window 29%, Binary Search 14%, Depth-First Search 14%, Breadth-First Search 14%, Directed Acyclic Graph 14%

> **Watch out:** Netflix has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | 3 months | Hash Table, String, Binary Search, Design |
| 2 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | 6 months | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| 3 | [Parallel Courses](https://leetcode.com/problems/parallel-courses/) | Medium | 6 months | Graph Theory, Topological Sort, Directed Acyclic Graph |
| 4 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 6 months | Hash Table, String, Sliding Window |
| 5 | [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | Medium | 6 months | String |
| 6 | [Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) | Hard | 6 months | Array, Sliding Window, Sorting, Bucket Sort |
| 7 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |

### Signature problems

Problems where Netflix accounts for a large share of all recent tags across companies. These are the most Netflix-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Parallel Courses](https://leetcode.com/problems/parallel-courses/) | Medium | 6 months | Graph Theory, Topological Sort, Directed Acyclic Graph |
| 2 | [Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) | Hard | 6 months | Array, Sliding Window, Sorting, Bucket Sort |

## 4-week plan for Netflix

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the behavioral round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).

Next: [All companies](index.md)
