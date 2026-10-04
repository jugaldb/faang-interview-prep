# How to practice coding problems

For anyone who has picked a list on [problem lists](problem-lists.md). When you finish this page you will have a timed routine for every problem, a re-solve schedule, a tracking sheet, and a weekly plan that fits your week.

## The daily shape

1. Do 2 to 3 new problems a day, plus every re-solve that is due. Jugal's routine during his job hunt was "3 LeetCode problems a day (focus on patterns, not volume)" ([post](https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing)).
2. Do due re-solves first. Cap them at about 30% of the session. If more are due, cut new problems, not re-solves.
3. Cluster, then mix. Jugal: "Spend two days doing ONLY sliding window problems. Then two days on binary search." ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)). Once you have covered the core patterns, switch to random problems so you practice recognizing the pattern, not just applying it.
4. Use one language for every problem. Pick it once on [the coding overview](index.md) and do not switch mid-prep.
5. Solve out loud. "Solving silently and explaining under pressure are two different skills" ([post](https://jugaldb.substack.com/p/the-job-search-tool-stack-id-actually)).

## Time limits

Target time from reading the problem to working, tested code. These match the per-problem budgets on [Grind 75](https://www.techinterviewhandbook.org/grind75?order=all_rounded) (Easy averages 18 minutes, Medium 28, Hard 38).

| Difficulty | Target time | Hard stop for this session |
|---|---|---|
| Easy | 15 to 20 min | 30 min |
| Medium | 25 to 30 min | 45 min |
| Hard | 40 min | 60 min |

Why so tight: Meta's [intern interview guide](https://www.metacareers.com/blog/acing-your-software-engineering-internship-interview-at-meta/) describes one to two coding questions in about 30 to 35 minutes of coding time. A Medium has to fit inside 30 minutes, with talking.

## The per-problem routine

One Medium, 45 minutes, timer running. Copy the [talk-first script](#talk-first-script) and say each step out loud.

1. **Minute 0 to 3: read and restate.** Write the problem in one sentence in your own words. Write the input limits next to it.
2. **Minute 3 to 4: pick a target complexity from the input size.** n up to about 20 allows exponential (backtracking, bitmask). n up to about 1,000 allows O(n²). n up to 10^5 or more needs O(n log n) or O(n). Full table: [USACO Guide](https://usaco.guide/bronze/time-comp).
3. **Minute 4 to 7: write examples.** Two normal examples by hand, then edge cases: empty input, one element, duplicates, negative numbers, all same values, cycles. Each topic page in the [Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/) lists its corner cases.
4. **Minute 7 to 10: brute force, then the pattern.** Say the brute force and its complexity. Then run the cue table on [patterns](patterns.md) and name the pattern before you write code.
5. **Minute 10 to 30: code.** Real, runnable code, not pseudocode. Descriptive names. Small helper functions. See [code quality](code-quality.md).
6. **Minute 30 to 38: dry-run, then test.** Walk one example through your code line by line and write down variable values. Then run your edge cases. Fix bugs one at a time.
7. **Minute 38 to 41: complexity.** State final time and space. Name one way to improve it.
8. **Minute 41 to 45: log it.** Fill one row of the [tracking sheet](#tracking-sheet-template) and set the re-solve date.

If you are stuck at minute 15 to 20 with no working idea, switch to the hint ladder below.

### Talk-first script

Adapted from Jugal's Amazon roadmap ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)). Say these lines out loud in practice so they come out on their own in the interview.

```text
1. "Let me restate the problem: [one sentence]. Input size is up to [n], so I am aiming for [O()]."
2. "The brute force here would be O(n²): we check every pair."
3. "That's too slow. What if we use a hash map to track what we've seen?"
4. "Now it's O(n) time, O(n) space."
5. Start coding only after you've talked it through.
6. When your mind goes blank: "Give me 30 seconds to think through this."
7. "Let me dry-run this on [example]... Edge cases: [empty], [one element], [duplicates]."
8. "Final complexity: O([time]) time, O([space]) space. With more time I would [improvement]."
```

## When to read the solution

Credible rules, side by side. They agree on the shape: struggle for 15 to 30 minutes, take a hint before the full answer, re-solve later.

| Source | Rule |
|---|---|
| [NeetCode](https://neetcode.io/courses/lessons/how-to-use-neetcode-effectively) | Look at the solution after 15 to 20 minutes with no progress. If the solution still makes no sense after 45 to 60 minutes, try an easier problem |
| [Sean Prashad](https://seanprashad.com/leetcode-patterns/), beginners | Up to 30 minutes on any idea, even brute force, then study the solution until you can explain it to someone else |
| Sean Prashad, experienced | Stuck 15 minutes: open the Helpful Tips tab, then the solution |
| Jugal ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)) | "30 minutes per medium problem. If you can't solve it in 30, look at the solution, understand it, and move on. Come back to it three days later." |
| Jugal ([post](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use)) | "Spend 20 to 30 minutes on a problem yourself before opening the solution video." |

Use this hint ladder:

1. **No progress for 15 to 20 minutes** (first 50 problems: 30 minutes). Run the stuck checklist: reread the constraints, solve a tiny example by hand the way a non-programmer would, then try each tool in turn (hash map, sort first, two pointers, stack, heap, BFS/DFS, binary search). The [Tech Interview Handbook techniques page](https://www.techinterviewhandbook.org/coding-interview-techniques/) has the full list.
2. **Still stuck 5 minutes later.** Read only the approach: the intuition paragraph of the editorial, the first minutes of the NeetCode video, or ask an AI to explain the idea without code. Try again for 10 minutes.
3. **Still stuck at about minute 30 (Medium).** Read the full solution using the steps below. Mark the row "Solution".
4. **The solution makes no sense after 45 to 60 minutes total.** Stop. Solve an easier problem from the same pattern, then return tomorrow.

> **Tip:** Reading a solution is not cheating. Reading it and never re-solving it is the real failure.

## How to read a solution so it sticks

1. Read the approach first. Close it and try once more for 10 minutes.
2. Write the key insight in one sentence in your own words. Weak: "use a heap". Strong: "keep a min-heap of size k, so the root is always the kth largest seen so far".
3. Explain it out loud as if teaching a friend. If you stumble, reread that part.
4. Close the tab. Re-code from a blank file. No copy-paste.
5. Ask: which phrase in the problem should have told me the pattern? Add that cue to your pattern cheat sheet.
6. Put the problem on the re-solve ladder (next review: tomorrow).

## Re-solve with spaced repetition (1, 3, 7, 21 days)

Day 0 is your first attempt. Re-solve from a blank file on day 1, day 3, day 7 and day 21. Each gap is about 2 to 3 times the last one. That is the same idea as Anki's default, where each successful review grows the interval about 2.5 times ([Anki manual](https://docs.ankiweb.net/deck-options.html)).

Example: first attempt Monday Oct 5, 2026. Re-solves on Tuesday Oct 6, Thursday Oct 8, Monday Oct 12, Monday Oct 26.

Rules:

1. Put a problem on the full ladder if you needed a hint, read the solution, failed, or went over the target time.
2. Solved alone and under time? One re-solve on day 7 only.
3. A re-solve counts only if you code it from a blank file, with no notes, pass all tests, and finish inside the target time.
4. Fail a re-solve: start the ladder again from day 1.
5. Pass day 21: retire it. If your confidence is still 3 or lower, add it to your final-week review list.
6. Optional: one [Anki](https://apps.ankiweb.net/) card per pattern (free on desktop and Android, paid on iOS). Front: the cue ("sorted array, find a pair"). Back: the approach and one problem. Do not mark a card known the first time you recall it.

## Tracking sheet template

Set it up once in 10 minutes. Google Sheets or Excel both work.

1. Create a new sheet. Paste the header line below into cell A1. In Google Sheets, choose Data > Split text to columns.
2. Format column A (Date) and column N (Next review) as dates.
3. Paste the Next review formula into N2 and copy it down 500 rows.
4. Paste the Due today formula into an empty cell to the right, for example U1. That cell becomes your daily to-do list.
5. In R1 to R4, type `pass`, `fail` or `skip`. On a fail, change the Date to today and clear R1 to R4.
6. For a clean first solve, type `skip` in R1 and R2 so the next review lands on day 7. After that day 7 pass, type `skip` in R4 to retire it.

Header row (19 columns, A to S):

```text
Date,Problem,Link,List,Pattern,Difficulty,Result,Minutes,Target minutes,Key insight,Mistake type,Time complexity,Space complexity,Next review,R1 day 1,R2 day 3,R3 day 7,R4 day 21,Confidence 1 to 5
```

Example row:

```text
2026-10-05,Longest Substring Without Repeating Characters,https://leetcode.com/problems/longest-substring-without-repeating-characters/,NeetCode 150,Sliding window (variable),Medium,Hint,34,30,Shrink from the left while any char count is above 1,Wrong pattern first,O(n),O(k),,,,,,3
```

Formulas:

```text
N2, Next review (Google Sheets and Excel):
=IF(A2="","",IF(O2="",A2+1,IF(P2="",A2+3,IF(Q2="",A2+7,IF(R2="",A2+21,"retired")))))

U1, Due today (Google Sheets):
=FILTER(B2:B, ISNUMBER(N2:N), N2:N<=TODAY())

U1, Due today (Excel 365):
=FILTER(B2:B1000,ISNUMBER(N2:N1000)*(N2:N1000<=TODAY()),"Nothing due")
```

Allowed values, so your Sunday filters work:

```text
Result:        Alone / Hint / Solution / Failed
Mistake type:  Wrong pattern / Missed edge case / Off-by-one / Complexity too high / Syntax or API / Ran out of time
Confidence:    1 (could not redo it) to 5 (could teach it)
```

### Problem notes template

Keep one short note per problem you did not solve alone. Paste into a notes app or a repo folder.

```text
Problem: [number. title] [link]
Pattern: [pattern]   Cue that should have told me: [phrase from the problem]
Brute force: [idea] = [complexity]
Key insight (one sentence, my words): [insight]
Complexity: time [O()], space [O()]
Edge cases I missed: [list]
Bug I made: [off-by-one / wrong init / missed visited set / overflow / other]
Result: [alone / hint / solution]   Minutes: [n]
Re-solves: day 1 [date] [pass/fail]   day 3 [date]   day 7 [date]   day 21 [date]
```

### Pattern cheat sheet template

One page per pattern. Write the template from memory, then check it against [patterns](patterns.md).

```text
Pattern: [name]
Use when: [2 to 3 cue lines]
Do not use when: [counter-cue, e.g. negative numbers break a sliding-window sum]
Template (from memory, 10 to 15 lines):
[code]
Complexity: [time], [space]
My 2 anchor problems: [title + one-line insight] / [title + one-line insight]
My usual bug: [bug]
```

## Weekly schedules

### Student with classes (about 10 to 11 hours a week)

This fits the [Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-study-plan/) benchmark of about 3 months at 11 hours a week.

| Day | Time | What to do |
|---|---|---|
| Monday to Friday | 75 min | 10 min: one due re-solve. 50 min: 1 Medium or 2 Easy from this week's pattern. 15 min: log and update the cheat sheet |
| Saturday | 2.5 h | A LeetCode contest (or a past one with a 90-minute timer), then upsolve one problem you missed |
| Sunday | 2 h | 30 to 45 min weekly review (below), all due re-solves, read next week's topic |
| Output | | About 8 to 12 new problems and 5 to 8 re-solves a week. About 100 to 140 new problems in 12 weeks |

> **Tip:** During exam weeks, drop to 30 minutes a day of re-solves only. The ladder keeps moving and nothing piles up for later.

### Working engineer (about 10 hours a week)

| Day | Time | What to do |
|---|---|---|
| Monday to Friday | 60 min, before work | 1 timed Medium (45 min), then one due re-solve (15 min) |
| Saturday | 3 h | Contest or past contest (90 min), upsolve, weekly review |
| Sunday | 2 h | One Hard (stop at 60 min) or one [mock interview](mock-interviews.md), then due re-solves |
| Output | | About 7 to 9 new problems and 5 to 7 re-solves a week |

Book the weekday block on your calendar as a recurring meeting. If you add [system design](../system-design/index.md) prep, take it from Sunday, not from the weekday coding block.

### Semester break or summer (about 3 hours a day)

| Block | Time | What to do |
|---|---|---|
| Morning | 90 min | Read the pattern overview ([Hello Interview](https://www.hellointerview.com/learn/code) or the Tech Interview Handbook topic page), then 2 problems |
| Afternoon | 60 min | 1 to 2 problems, timed |
| Evening | 30 min | Due re-solves and logging |

### Jugal's job-hunt routine

From [The Job Hunt I Didn't Burn Out Doing](https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing): 3 problems a day focused on patterns, 1 AI mock interview a day, 1 peer mock on weekends. Tool updates as of Oct 2026: Pramp sessions now run on [Aced Practice](https://www.aced.io/practice) (free monthly credits). Google's Interview Warmup page now redirects elsewhere, so treat it as retired. For a free AI mock, use the [interviewing.io AI Interviewer](https://start.interviewing.io/interview-ai). More options on [mock interviews](mock-interviews.md).

### Final 4 weeks before an onsite

1. Weeks 4 and 3 before: company-tagged top 30 to 50 ([how](problem-lists.md#company-tagged-lists-last-not-first)). One to two mocks a week.
2. Week 2 before: no new patterns. Three to five mocks. Re-solve every problem with confidence 3 or lower.
3. Final week: drill your weakest pattern. Jugal's Amazon plan: "What pattern crushed you? Spend these two days drilling ONLY that." ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
4. Last 2 days: mocks only, no new problems. One problem, 45 minutes, out loud ([60-day roadmap](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)).
5. Night before: read your cheat sheets and "my mistakes" page. Sleep.

### Sunday review (30 to 45 minutes)

1. Filter this week's rows. Count problems per pattern and per mistake type.
2. Pick the weakest pattern (most fails or slowest times). Schedule 3 problems from it for next week.
3. Do every re-solve due today or earlier.
4. Add this week's mistakes to your "my mistakes" page with the fix.
5. Check next week's contest times (table below).

## Contests

Contests train the thing interviews test: problems you have not seen, under a clock. They also train recovery after a wrong submission.

1. **Start after about 50 to 75 problems.** Earlier, contests mostly produce frustration.
2. **Join one a week.** LeetCode contests are 90 minutes, usually 4 problems. Aim to solve Q1 and Q2 every time and attempt Q3.
3. **Upsolve one problem afterward** with the solution method above, and log it.
4. **Clash with class or work?** Open a past contest from the [contest page](https://leetcode.com/contest/) and do it with a 90-minute timer.
5. **Ignore your rating.** In [interviewing.io data](https://interviewing.io/blog/how-well-do-leetcode-ratings-predict-interview-performance), contest rating showed no significant link to interview performance. Interviews are 1 to 2 problems with talking, not 4 silent ones.

LeetCode contest times (as of Oct 2026):

| Contest | UTC | India (IST) | US Eastern | US Pacific |
|---|---|---|---|---|
| Weekly (every Sunday UTC) | Sunday 02:30 | Sunday 8:00 AM | Saturday 10:30 PM | Saturday 7:30 PM |
| Biweekly (every other Saturday) | Saturday 14:30 | Saturday 8:00 PM | Saturday 10:30 AM | Saturday 7:30 AM |

US times are daylight time. From Nov 1, 2026, subtract one hour. Next on the calendar: Biweekly Contest 193 on Oct 10, 2026 and Weekly Contest 523 on Oct 11, 2026 (UTC).

Optional, mainly for quant and HFT tracks: [Codeforces](https://codeforces.com/), [CodeChef](https://www.codechef.com/contests) and [AtCoder](https://atcoder.jp/contests/). They build speed but are not required for big tech.

## Practice for AI-assisted rounds too

1. **Keep a no-AI track.** Meta's loop keeps one classic coding round without AI next to its AI-enabled round ([Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding)). Jugal: "at least one round remains assistance-free at most companies" ([post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).
2. **Once a week, solve with an assistant on purpose.** Write down what you asked for and why. Find the bug in the generated code before you run it (same post).
3. **Practice reading code you did not write.** Pick a small open-source repo, find a function, explain it, and fix one bug or edge case.
4. **Never log AI-written code as "Alone".** Use AI to explain solutions, not to produce yours.

More on these formats: [the 45-minute interview](interview-framework.md).

## How to know you are ready

Measure, do not guess. In [interviewing.io data](https://interviewing.io/blog/people-cant-gauge-their-own-interview-performance-and-that-makes-them-harder-to-hire), candidates' self-ratings matched interviewer ratings only weakly. Check these against your tracking sheet and mock feedback:

- [ ] **Unseen Mediums:** 7 of your last 10 unseen Mediums solved alone in 25 minutes or less, with working code. (NeetCode's bar: most unseen Mediums in 20 to 25 minutes.)
- [ ] **Pattern recognition:** on 10 random unseen problems, you name the right pattern within 3 minutes on at least 8.
- [ ] **Templates:** you can write the template for every core pattern on [patterns](patterns.md) from memory, each in under 5 minutes.
- [ ] **Retention:** 80% or more of your re-solves in the last 14 days passed.
- [ ] **Complexity:** you stated correct time and space on every problem in the last week without looking it up.
- [ ] **Coverage:** your core list is done, plus your target company's top 30 recent tags ([company pages](../companies/index.md)).
- [ ] **Out loud:** you recorded yourself solving 3 problems and replayed at least one.
- [ ] **Mocks:** 5 or more mocks with people who are not your friends, and your last 3 on unseen questions were passes. In [interviewing.io data](https://interviewing.io/blog/how-know-ready-interview-faang), Facebook pass rates were 71% with 5+ prior interviews vs 40% with 1 to 4.
- [ ] **Optional:** you solved Q1 and Q2 in 3 of your last 4 contests.

Missing two or more? Ask your recruiter for more time. [Postponing is usually fine](https://interviewing.io/blog/its-ok-to-postpone-your-interviews-if-youre-not-ready): recruiters rarely mind which week you interview.

## Habits that waste weeks

| Weak habit | Strong habit |
|---|---|
| Solving in silence | Say the brute force and its complexity out loud before you code |
| Reading the solution and moving on | Re-code from a blank file, then re-solve on day 1, 3, 7 and 21 |
| Memorizing solutions | Memorize cues and templates. Follow-up questions break memorized answers |
| Random problem order from day one | Two days per pattern first, then mixed problems |
| Hours stuck on one problem | Hint ladder at 15 to 20 minutes, easier problem after 45 to 60 |
| Counting problems solved | Track time vs target and re-solve pass rate |
| Trusting the difficulty label | Time yourself. Some Mediums are harder than some Hards |
| Switching languages mid-prep | One language from start to finish |
| Python list used as a queue | `collections.deque` (`list.pop(0)` is O(n)) |
| Only AI-assisted practice | Keep a weekly no-AI session with a timer |

Next: [The 45-minute interview](interview-framework.md)
