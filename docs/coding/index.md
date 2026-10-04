# How to learn DSA from zero

For anyone starting coding interview prep, from a first-year student to an engineer with 3 years of experience. When you finish this page you will have a language, a weekly hour budget, a 12-week learning order, and the method that gets you from zero to interview-ready.

## What interview-ready means

You are ready when you pass these tests, not when you reach a problem count. Jugal cleared Amazon, Google, and Meta with 120 LeetCode problems ([post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).

| Test | Target | Source |
|---|---|---|
| Unseen Medium problems | Solve most of them in 20 to 25 minutes | [NeetCode](https://github.com/neetcode-gh/lesson-data/blob/main/howToUseNeetcode.md) |
| Pattern recognition | Name the pattern from the problem statement alone, before you read any solution | [Jugal's 60-day roadmap](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta) |
| Talking | Say the brute force, the better idea, and both complexities before you type | [Jugal's Amazon roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the) |
| Code | Syntactically correct code without an IDE, no pseudo code | [Amazon SDE II prep](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep) |
| Memory | Old misses pass when you re-solve them from a blank file | [How to practice](how-to-practice.md#re-solve-with-spaced-repetition-1-3-7-21-days) |

The full self-test with numbers is on [How to practice](how-to-practice.md#how-to-know-you-are-ready).

## What coding rounds test in 2026

- **Algorithms are still the core.** In an October 2025 survey, 0 of 52 FAANG interviewers said their company had dropped algorithm questions. 58% said the question types changed, toward custom and multi-part problems with deeper follow-ups ([interviewing.io](https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot)).
- **Meta:** select roles now have an AI assistant built into CoderPad ([Meta hiring process](https://www.metacareers.com/hiring-process/)). The AI-enabled round replaces one of two onsite coding rounds; one classic problem round with no AI stays ([Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding)).
- **Google:** its own pages say AI tools are not permitted in interviews ([How we hire](https://www.google.com/about/careers/applications/how-we-hire/)). A Gemini-assisted pilot for select US teams was reported in May 2026 ([Aced](https://www.aced.io/blog/google-ai-coding-interview)). Ask your recruiter which format you get.
- **Amazon:** the coding part of the SDE online assessment averages 70 minutes. Public docs such as the JDK or STL are allowed, and browser use is logged ([Amazon OA prep](https://amazon.jobs/content/en/how-we-hire/university/sde-oa)).
- **What this means for you:** learn patterns well enough to handle a problem you have never seen. Jugal: "Algorithmic fundamentals still matter, because at least one round remains assistance-free at most companies" ([post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).

## The method, step by step

1. **Pick one language and learn its interview toolkit (3 to 5 days).** Use the table in [Pick your language](#pick-your-language). Learn only the calls on the [language cheat sheets](topics.md#language-cheat-sheets): hash map, set, deque, heap, sort with a key, binary search.
2. **Learn Big-O (2 sessions, about 2 hours).** Watch [NeetCode: Big-O Notation](https://www.youtube.com/watch?v=BgLTDT03QtU), read the [NeetCode Big-O notes](https://github.com/neetcode-gh/lesson-data/blob/main/bigO.md), then memorize the tables in the [Big-O cheat sheet](topics.md#big-o-cheat-sheet). You are done when you can state the cost of every line you write.
3. **Set up your tracking sheet and a cheat-sheet doc (30 minutes).** Copy the header and formulas from [Tracking sheet template](how-to-practice.md#tracking-sheet-template). Make one empty page per pattern in your cheat-sheet doc.
4. **Pick one spine list.** NeetCode 250 if you are starting from zero, Grind 75 or NeetCode 150 if you know arrays, hash maps, trees and recursion. Compare them on [Problem lists](problem-lists.md). Never run two spine lists at once.
5. **Learn topics in dependency order.** Go top to bottom on [Topics](topics.md). For each topic: read the linked resource (20 to 30 minutes), implement the data structure once from a blank file, then solve the 2 to 4 starter problems.
6. **Drill one pattern at a time, 2 days each.** Jugal: "Spend two days doing ONLY sliding window problems. Then two days on binary search." ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)). Use the cues, template and ordered problems on [Patterns](patterns.md). Day 1: 2 Easy with the template open, then 2 to 3 Medium closed and timed. Day 2: 2 Medium cold and 1 Hard capped at 40 minutes.
7. **Run the same routine on every problem.** Restate, pick a target complexity from the input size, write examples, say the brute force, name the pattern, code, dry-run, state complexity, log it. Timers and the hint ladder are on [How to practice](how-to-practice.md#the-per-problem-routine).
8. **Re-solve every miss on day 1, 3, 7 and 21.** Code it from a blank file without looking. A failed re-solve restarts at day 1. Jugal's version: "Come back to it three days later. Try again." ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
9. **Switch to unseen problems after about 75.** One LeetCode contest a week, plus random picks from your list where you name the pattern before you code. Contest times and rules are on [How to practice](how-to-practice.md#contests).
10. **Talk out loud from week 3.** Narrate every problem as if an interviewer were listening. When a screen is booked, learn the minute-by-minute plan on [The 45-minute interview](interview-framework.md) and the rubric on [Code quality](code-quality.md).
11. **Add company lists and mocks in the last 2 to 4 weeks.** Use your target's page in [Companies](../companies/index.md) and run 2 mocks a week from [Mock interviews](mock-interviews.md).

> **Tip:** Do not spend a week choosing resources. NeetCode: "So many people spend more time thinking about the best way to study than actually studying." ([NeetCode](https://github.com/neetcode-gh/lesson-data/blob/main/howToUseNeetcode.md)).

## Pick your language

Use the language you know best. Meta's guidance: "Meta engineers use all types of languages, so use the language you're most comfortable with" ([Meta careers blog](https://www.metacareers.com/blog/acing-your-software-engineering-internship-interview-at-meta/)).

| Language | Pick it if | What you get | Watch out for |
|---|---|---|---|
| Python | You are new to interviews, or you know it well | Short code. `dict`, `set`, `collections.deque`, `Counter`, `heapq`, `bisect`, `functools.cache` built in. NeetCode learned Python only for interviews and says the basics took "a few hours" ([NeetCode](https://github.com/neetcode-gh/lesson-data/blob/main/howToUseNeetcode.md)) | `heapq` is a min-heap (negate values for a max-heap). Recursion limit is about 1000 ([TIH](https://www.techinterviewhandbook.org/algorithms/recursion/)). `list.pop(0)` is O(n). `-3 // 2` is `-2`. No built-in sorted map |
| Java | It is your strongest language | `HashMap`, `ArrayDeque`, `PriorityQueue`, `TreeMap` with `floorKey` and `ceilingKey` | More typing. `int` overflow. A comparator written as `a - b` can overflow: use `Integer.compare` |
| C++ | You do competitive programming, or target systems, HFT or quant software roles | STL: `unordered_map`, ordered `map` and `set` with `lower_bound`, `priority_queue`. Quant and HFT software roles often center on C++ ([Jugal's HFT post](https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles)) | `priority_queue` is a max-heap by default. Overflow (use `long long`). Long comparators |
| JavaScript or TypeScript | You target front-end roles and know JS best | Fine for arrays, strings, maps and sets | No built-in heap or deque ([TIH heap page](https://www.techinterviewhandbook.org/algorithms/heap/)). Agree with the interviewer to assume a heap with push and pop |
| Go or C | Avoid for DSA rounds, even if you use them at work | Nothing extra for these rounds | They lack standard library data structures, per the [Tech Interview Handbook](https://www.techinterviewhandbook.org/programming-languages-for-coding-interviews/) |

Rules:

1. **Use one language for every practice problem.** Switching mid-prep resets your speed.
2. **If two languages tie, pick Python.** The [Tech Interview Handbook](https://www.techinterviewhandbook.org/programming-languages-for-coding-interviews/) author calls it his "de facto choice for algorithm coding interviews", and adds: "Most of the time, the bottleneck is in the thinking and not the writing."
3. **Every big tech loop accepts Python, Java and C++.** Amazon's prep page lists 17 language options ([Amazon SDE II prep](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)). Meta's AI-enabled round supports Python, Java, TypeScript, C++, C#, Kotlin, Swift, Rust and Go ([Meta hiring process](https://www.metacareers.com/hiring-process/)).
4. **Practice without autocomplete.** Amazon expects "syntactically correct code" and no pseudo code. Type your solutions in a plain editor at least once a week.

Templates on [Patterns](patterns.md) are in Python. The matching Java and C++ calls are on [Topics](topics.md#language-cheat-sheets).

## Weekly hour budgets

The [Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-prep/) puts the bare minimum at about 30 hours and good preparation at about 100 hours. Its recommended plan is 3 months at 11 hours a week ([study plan](https://www.techinterviewhandbook.org/coding-interview-study-plan/)). Plan about 50 minutes per new problem, timer plus review: that is how [Grind 75](https://www.techinterviewhandbook.org/grind75/) sizes its schedules.

Hours below are for coding only. Add 3 to 4 hours a week for applications, resume and behavioral ([Start here](../start-here.md#step-3-set-your-weekly-hour-budget)).

| Your situation | Coding hours a week | New problems a week | Grind 75 schedule to open |
|---|---|---|---|
| Student with full classes | 6 to 10 | 7 to 11 | [12 weeks at 6 hours: 85 problems](https://www.techinterviewhandbook.org/grind75?weeks=12&hours=6&order=all_rounded), or [12 weeks at 10 hours: 137 problems](https://www.techinterviewhandbook.org/grind75?weeks=12&hours=10&order=all_rounded) |
| Student on break or summer | 15 | 15 to 18 | [4 weeks at 15 hours: 71 problems](https://www.techinterviewhandbook.org/grind75?weeks=4&hours=15&order=all_rounded) |
| Working engineer | 5 to 10 | 6 to 10 | [12 weeks at 6 hours: 85 problems](https://www.techinterviewhandbook.org/grind75?weeks=12&hours=6&order=all_rounded), or [12 weeks at 8 hours: 111 problems](https://www.techinterviewhandbook.org/grind75?weeks=12&hours=8&order=all_rounded) |
| Interview in about 4 weeks | 10 | 12 | [4 weeks at 10 hours: 50 problems](https://www.techinterviewhandbook.org/grind75?weeks=4&hours=10&order=all_rounded) |
| Phone screen in 2 weeks | 15 | 20 | [2 weeks at 15 hours: 39 problems](https://www.techinterviewhandbook.org/grind75?weeks=2&hours=15&order=all_rounded) |

How to spend the hours:

1. **Split each session about 70/30.** 70% new problems from this week's pattern, 30% due re-solves. If more re-solves are due, cut new problems first.
2. **Keep the order Grind gives you.** The `order=all_rounded` part of each link keeps Grind's priority order. Without it, the site orders problems by difficulty, so all the Hards pile up at the end ([Grind 75 changelog](https://www.techinterviewhandbook.org/grind75/changelog)).
3. **Block the time on your calendar.** Day-by-day schedules for students, working engineers and summer breaks are on [How to practice](how-to-practice.md#weekly-schedules).

## The 12-week learning order

Coding only, about 7 to 10 hours a week, matching the 12-week plan on [Start here](../start-here.md#12-week-plan-student-with-classes). Starting from zero? Use the [16-week plan](../start-here.md#16-week-plan-starting-from-zero), which spends extra weeks on the same order.

| Week | Topics to learn ([Topics](topics.md)) | Patterns to drill ([Patterns](patterns.md)) | New problems | Done when |
|---|---|---|---|---|
| 1 | Big-O, arrays, strings, hashing | [Hashing](patterns.md#hashing) | 8 | Language cheat sheet written. Tracking sheet live |
| 2 | Two pointers, sliding window, prefix sums | [Two pointers](patterns.md#two-pointers), [Sliding window](patterns.md#sliding-window), [Prefix sums](patterns.md#prefix-sums) | 8 | You can say which of the three a problem needs from its first line |
| 3 | Stack, queue, linked list | [Stack and monotonic stack](patterns.md#stack-and-monotonic-stack), [Fast and slow pointers](patterns.md#fast-and-slow-pointers), [Linked list reversal](patterns.md#linked-list-reversal) | 8 | Linked list reversal typed from memory without a bug |
| 4 | Binary search, sorting | [Binary search](patterns.md#binary-search), [Cyclic sort](patterns.md#cyclic-sort) | 8 | One binary search template used for every variant |
| 5 | Recursion, backtracking, binary trees | [Backtracking](patterns.md#backtracking), [Tree DFS](patterns.md#tree-dfs), [Tree BFS](patterns.md#tree-bfs) | 8 | Iterative in-order traversal written once by hand |
| 6 | Binary search trees, heaps, intervals | [Tree DFS](patterns.md#tree-dfs) (BST problems), [Heaps](patterns.md#heaps), [Intervals](patterns.md#intervals) | 10 | Heap used in 3 problems without looking up the API |
| 7 | Graphs: DFS, BFS, topological sort | [Graph DFS](patterns.md#graph-dfs), [Graph BFS](patterns.md#graph-bfs), [Topological sort](patterns.md#topological-sort) | 10 | DFS and BFS each written from scratch in 20 minutes or less (a target from Jugal's [Google plan](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e)) |
| 8 | Union-find, shortest paths, tries | [Union-find](patterns.md#union-find), [Shortest paths](patterns.md#shortest-paths), [Trie](patterns.md#trie) | 9 | A Trie class written on paper in about 20 minutes (a target from Jugal's [Meta plan](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part)) |
| 9 | Dynamic programming, 1D and knapsack | [Dynamic programming](patterns.md#dynamic-programming) | 10 | State and recurrence written in words before any code |
| 10 | Dynamic programming 2D, greedy, bits | [Dynamic programming](patterns.md#dynamic-programming), [Greedy](patterns.md#greedy), [Bit manipulation](patterns.md#bit-manipulation) | 10 | You can say why a greedy choice is safe, or why it is not |
| 11 | Design a data structure, matrices, mixed practice | [Design a data structure](patterns.md#design-a-data-structure), [Matrix traversal](patterns.md#matrix-traversal) | 8 plus 1 contest | LRU Cache written from a blank file |
| 12 | Mocks and your weakest pattern | Your 2 weakest patterns from the tracking sheet | 10 | 2 mocks done. About 107 new problems in total, plus re-solves |

> **Watch out:** Do not skip ahead to dynamic programming in week 2 because it feels important. Every DP problem needs recursion, and most need arrays, hashing and trees first.

## How Jugal did it

"Everyone told me I needed at least 400 solved problems before I could even think about applying to FAANG. I had 120." In the same post: "I spent two months being very deliberate about what I practiced and why." He cleared all three loops: Amazon, Google, and Meta ([post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).

The rules he used, each from his own posts:

| Rule | In his words | Post |
|---|---|---|
| Patterns over volume | "3 LeetCode problems a day (focus on patterns, not volume)" | [The Job Hunt I Didn't Burn Out Doing](https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing) |
| Cluster by pattern | "Solve them in clusters. Spend two days doing ONLY sliding window problems." | [Your 6-Week Amazon Interview Roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the) |
| Timebox, then retry | "Set a timer. 30 minutes per medium problem. If you can't solve it in 30, look at the solution, understand it, and move on." | [Your 6-Week Amazon Interview Roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the) |
| Name the pattern | "After you solve one, note the pattern it used. Spotting the pattern quickly is the actual skill being tested." | [Want a Job in the Next 30 Days?](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use) |
| Follow the roadmap order | "Go in the roadmap's order. It's sequenced so each topic sets up the next one." | [Want a Job in the Next 30 Days?](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use) |
| Talk before you code | "Start coding only after you've talked it through." | [Your 6-Week Amazon Interview Roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the) |
| End with mocks, not new problems | "Two clean mock sessions will do more for you than 20 new problems at this stage." | [I Cleared Amazon, Google, and Meta With Only 120 LeetCode Problems](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta) |

Use his material in this order:

1. **Follow the 60-day pattern roadmap** if you want patterns instead of a list. The block-by-block table is on [Problem lists](problem-lists.md#jugals-60-day-pattern-roadmap).
2. **Use his company pattern map** in the last 1 to 2 weeks. It lists 4 patterns per company for Amazon, Google, Meta, Netflix, Uber, Airbnb, Microsoft and Apple, with problems for each, in his free [Company Wise DSA patterns](https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc) Notion page. A summary is on [Patterns](patterns.md#company-pattern-map).
3. **Run a 5-week company plan** once you have a target: [Meta](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part), [Amazon](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-7f8), [Google](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e), [Apple](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-8c8), [Netflix](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-020). Fixes for their Premium-only and renamed problems are on [Problem lists](problem-lists.md#jugals-5-week-company-plans).
4. **Watch his Amazon walkthrough** before an Amazon loop: [How I cleared Amazon Technical Interview | DSA + System Design | 4 week plan](https://www.youtube.com/watch?v=8bNRRelp7n0). The "Dry Run Trick for Debugging" chapter starts at 11:40.

## Free resources for the theory

Use these when a topic does not click from the page linked on [Topics](topics.md). Free first.

- [Tech Interview Handbook algorithm cheatsheets](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/): one page per topic with costs, techniques, corner cases and essential questions, by Yangshun Tay (author of Blind 75 and Grind 75). How to use it: read the topic page before you drill it, and copy its corner cases into your cheat sheet.
- [NeetCode Roadmap](https://neetcode.io/roadmap): the NeetCode 150 drawn as a dependency tree of 18 topics, with a free video per problem. How to use it: finish a node's Easy and Medium problems before you open the next node. Watch the video only after 20 to 30 minutes of your own attempt.
- [How I would learn Leetcode if I could start over (NeetCodeIO)](https://www.youtube.com/watch?v=aHZW7TuY_yo): the method in one video. How to use it: watch once in week 1, then stop planning and start.
- [Hello Interview: data structures and algorithms](https://www.hellointerview.com/learn/code) (freemium): visual lessons for 16 patterns. How to use it: read the overview page of a pattern before day 1 of that pattern.
- [CodeSignal Learn](https://codesignal.com/learn) (freemium): structured DSA paths with an AI tutor. How to use it: Jugal's weeks 1 to 2 pick is the "Mastering Algorithms and Data Structures" path, one module a day, asking the tutor before you look up an answer ([post](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use)).
- [Striver's A2Z DSA Sheet](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet) (free sheet, paid TUF+ extras): 495 items from beginner problems to advanced topics, with videos; the site estimates about six months. How to use it: first and second-year students learning DSA from scratch, especially for Indian campus placements.
- [Abdul Bari: Algorithms](https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O): whiteboard lectures on complexity, sorting, greedy, DP and graphs. How to use it: watch the one lecture for the topic that did not click, not the whole playlist.
- [MIT 6.006 Introduction to Algorithms (Spring 2020)](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/): the full MIT course with lectures, notes and problem sets. How to use it: watch the hashing, heaps, graphs or DP lecture when you want the theory behind a pattern.
- [William Fiset: Graph Theory](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P): animated graph algorithms. How to use it: watch the BFS, DFS, topological sort and Dijkstra videos in week 7 and 8.
- [VisuAlgo](https://visualgo.net/en): step-through animations of sorting, lists, heaps, BSTs, graphs and union-find. How to use it: step through the animation once for every new data structure.
- [Kunal Kushwaha: Java + DSA](https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ): long Java DSA course from zero. How to use it: only if Java is your language and you are new to programming.
- [Coding Interview University](https://github.com/jwasham/coding-interview-university): a full CS study plan by John Washam. How to use it: read the advice on flashcards and doing problems while you learn. Skip the full plan unless you lack CS basics.

> **Tip:** You do not need a paid course. If you pay for one thing, make it one month of [LeetCode Premium](https://leetcode.com/subscribe/) ($35 a month as of Oct 2026) 2 to 5 weeks before a scheduled interview, for company tags. Details on [Problem lists](problem-lists.md#is-leetcode-premium-worth-it).

## Checklist

- [ ] Language picked, and its cheat sheet written from [Topics](topics.md#language-cheat-sheets)
- [ ] Big-O tables learned from the [cheat sheet](topics.md#big-o-cheat-sheet)
- [ ] Tracking sheet and pattern cheat-sheet doc created
- [ ] One spine list picked on [Problem lists](problem-lists.md)
- [ ] Weekly coding hours blocked on the calendar
- [ ] First 2-day pattern cluster scheduled
- [ ] Re-solve dates set for day 1, 3, 7 and 21
- [ ] First weekly contest on the calendar
- [ ] Readiness self-test passed on [How to practice](how-to-practice.md#how-to-know-you-are-ready)

Next: [DSA topics in learning order](topics.md)
