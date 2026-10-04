# How to prepare for and pass an OA

For anyone with an OA due in the next 3 to 30 days. When you finish, you will have a day-by-day plan, a time budget for test day, partial-credit tactics, input templates in three languages, and the integrity rules that get people disqualified.

## Pick your plan

| Time until your deadline | Plan | Daily time |
|---|---|---|
| 3 days or less | [72-hour plan](#72-hour-plan) | 2 to 3 hours |
| 1 to 2 weeks | [2-week plan](#2-week-plan) | 1.5 to 2 hours |
| 3 weeks or more, or a whole season of OAs | [4-week plan](#4-week-plan), then one timed set per week | 1 to 2 hours |

If the deadline is too close and you have exams, ask for more time today with the [extension template](#templates). Amazon says to ask through the contact in your OA email ([Amazon OA prep](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa)).

## Set up once

Do these before any plan. They take one evening.

1. **Pick one language and stay with it.** Python is fastest to type. Use Java or C++ only if you are much stronger in it. Codility and Amazon both tell you to use the language you know best.
2. **Learn input and output in that language.** Copy the [templates below](#reading-input-stdin-templates) and run them once.
3. **Learn the standard library cold.** Python: `Counter`, `defaultdict`, `deque`, `heapq`, `bisect`. Java: `HashMap`, `ArrayDeque`, `PriorityQueue`, `TreeMap`. C++: `unordered_map`, `priority_queue`, `set` and `map` with `lower_bound`.
4. **Bookmark the official docs.** Amazon allows public docs like the JDK and STL during its OA. Keep these three open in one window before you start: [Python collections](https://docs.python.org/3/library/collections.html), [Java java.util](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/package-summary.html), [C++ containers](https://en.cppreference.com/w/cpp/container).
5. **Take every free official practice test once.** [Amazon practice test](https://hr.gs/TheAmazonCodingDemo), [Goldman Sachs practice test](https://www.hackerrank.com/test-v2/6nohqkbcq0d), [CodeSignal practice area](https://app.codesignal.com/assessments/practice), [Codility demo](https://app.codility.com/demo/take-sample-test/). The goal is the editor, not the problems: where Run is, where Submit is, how custom input works.

## 72-hour plan

- [ ] Hour 1: Read the invite. Read the platform section on [OA platforms](platforms.md). Take that platform's practice test.
- [ ] Day 1: Solve the top 6 problems on your [company page](company-oa-formats.md) with a 30-minute timer each.
- [ ] Day 2: One full mock in the exact format. For a GCA, that is 4 problems in 70 minutes. For a 2-problem HackerRank OA, 2 mediums in 70 minutes.
- [ ] Day 3 morning: Re-solve every problem you missed, without notes. Run the [day-of checklist](#day-before-and-day-of-checklist). Take the OA.

## 2-week plan

Week 1: platform and fundamentals.

- [ ] Day 1: Look up your company's format. Take the official practice test. Run the input template in your language.
- [ ] Days 2 to 4: Do the [HackerRank 1 Week kit](https://www.hackerrank.com/interview/preparation-kits) (21 challenges, about 7 a day). Arrays, hash maps, strings and sorting first.
- [ ] Day 5: One GCA-style set, timed at 70 minutes: an easy array problem, a string problem, [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/), and [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/).
- [ ] Day 6: Re-solve every miss from days 2 to 5 without notes. Write the pattern for each on one line.
- [ ] Day 7: Read [code quality in OAs](code-quality.md). Run its checklist on three of your old solutions.

Week 2: company and format.

- [ ] Days 8 to 10: 5 problems a day from your company page. Use Jugal's timer rule: "Set a timer. 30 minutes per medium problem. If you can't solve it in 30, look at the solution, understand it, and move on. Come back to it three days later." ([Your 6-Week Amazon Interview Roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the))
- [ ] Day 11: Drill your format's special part. Progressive: [ICA playbook](#progressive-ica-tasks). Repo: [repo playbook](#ai-assisted-repo-tasks). MCQs: OS, DBMS, networks, OOP and aptitude.
- [ ] Day 12: Full mock under real conditions. Webcam on, one tab, no notes, timer running.
- [ ] Day 13: Fix your weakest pattern. If it is Amazon, read the [Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles) for the Workstyles section.
- [ ] Day 14: [Day-of checklist](#day-before-and-day-of-checklist). Sleep. Take the OA.

## 4-week plan

Week 1: fundamentals and platforms.

- [ ] Take all four free official practice tests from [set up once](#set-up-once).
- [ ] Do one module a day of a CodeSignal Learn algorithms path. Jugal's instructions: "Take the 'Mastering Algorithms and Data Structures' path in whatever language you'll actually interview in (Python, Java, or C++)." "When you're stuck, ask Cosmo before you look up the answer." ([Want a Job in the Next 30 Days?](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use))
- [ ] Do 3 problems a day. Jugal's routine is "3 LeetCode problems a day (focus on patterns, not volume)" ([The Job Hunt I Didn't Burn Out Doing](https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing)).

Week 2: timed GCA-style sets.

- [ ] Three timed sets of 4 problems in 70 minutes, using the per-question budgets in [time allocation](#time-allocation-during-the-test).
- [ ] Question 3 practice (implementation-heavy): [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/), [Rotate Image](https://leetcode.com/problems/rotate-image/), [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/), [Text Justification](https://leetcode.com/problems/text-justification/).
- [ ] Question 4 practice (hash map optimization): [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/), [4Sum II](https://leetcode.com/problems/4sum-ii/), [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/), [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/). Both lists come from the [Leader-board OA guide](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md).
- [ ] One LeetCode weekly or biweekly [contest](https://leetcode.com/contest/) as a mock. Four problems, 90 minutes, no hints.

Week 3: company-specific.

- [ ] 15 problems from each of your top 3 company pages. Free company-tagged lists: [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions).
- [ ] One more contest as a mock.
- [ ] Start the [stress-test habit](#test-your-code-like-the-hidden-tests-will) on every problem you get wrong.

Week 4: your format, then full mocks.

- [ ] Progressive (CodeSignal ICA at Airbnb, Anthropic, Coinbase, eBay, some Meta roles): do the [mock ICA](https://github.com/PaulLockett/CodeSignal_Practice_Industry_Coding_Framework) in 90 minutes.
- [ ] Repo task (Amazon 2026 reports, Goldman Sachs Diagnostics, Walmart, IBM India): run the [repo drill](#ai-assisted-repo-tasks) twice.
- [ ] India campus MCQs: one [SHL practice test](https://www.shl.com/shldirect/en/practice-tests/) plus 30 OS, DBMS, networks and OOP questions.
- [ ] Amazon: read the 16 Leadership Principles and do the [full-time OA prep course](https://d36nnaydmp89fp.cloudfront.net/index.html) (it covers the Work Simulation) or the [intern course](https://d1fkqbr9gy4tb4.cloudfront.net/index.html).
- [ ] Two full mocks under real conditions.

> **Tip:** Volume is not the goal. "I cleared Amazon, Google, and Meta with only 120 LeetCode problems" ([Jugal's post](https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta)). His plan ends with timed problems per pattern, because the timer is what simulates real conditions. Pattern lists are on [coding patterns](../coding/patterns.md).

## Time allocation during the test

### Rules for any OA

1. Read every question first. Spend 2 to 3 minutes. Codility recommends it, and you need it to choose the order.
2. Solve the easiest question first. Points are points.
3. Stuck for 10 minutes with no new idea? Submit what compiles and move on. Amazon's page says "If you get stuck on a problem, move to the next one."
4. Keep the last 5 minutes for checks: every answer compiles, is submitted, and has no debug prints.

### Budgets by format

```text
CodeSignal GCA (4 questions, 70 min). CodeSignal's framework says about 10, 15, 20 and 30 min
(75 in total), so trim to fit:
  Read all four ............... 2 min
  Q1 basic coding ............. 10 min
  Q2 data manipulation ........ 13 min
  Q3 implementation ........... 20 min
  Q4 problem solving .......... 25 min   (brute force first if stuck)

Amazon, official format (2 coding problems, about 70 min):
  Read both ................... 3 min
  Easier problem .............. 25 min
  Harder problem .............. 35 min
  Edge cases and resubmit ..... 7 min

Amazon, 2026 reported format:
  DSA problem ................. about 40 min
  AI-assisted repo task ....... 40 to 60 min (dependency install can eat time; start it early)

Goldman Sachs (official, Aug 2026):
  Software Fundamentals ....... 30 min
  Software Diagnostics ........ 45 min
  Math (Quant Strats only) .... 22 min

CodeSignal ICA (1 problem, 4 levels, 90 min):
  Levels 1 and 2 .............. aim for 30 min total
  Levels 3 and 4 .............. the remaining 60 min

Stripe-style multi-part (1 problem, 60 min):
  Read the whole spec ......... 5 min
  Parts 1 and 2 ............... 25 min
  Later parts ................. 25 min
  Final run and submit ........ 5 min

MCQ plus coding (India campus):
  Follow each section's own timer. Do the MCQs fast and save minutes for code.
```

The Goldman minutes are official, and the GCA split is trimmed from CodeSignal's official module times. The rest are starting points built from candidate reports. One Amazon candidate said switching between the file tree, editor and AI panel ate most of their time ([LeetCode post](https://leetcode.com/discuss/post/8279707/amazon-oa-sde-1-assessment-experience-ne-becb/)). Another lost 40 of 60 minutes to dependency installs ([Amazon page](../companies/amazon.md)).

## Read the constraints first

The input limits tell you the complexity the hidden tests expect. Read them before you design anything.

| Largest n | Target complexity | Usual techniques |
|---|---|---|
| up to about 20 | O(2^n) | Subsets, bitmasks, backtracking |
| up to a few hundred | O(n^3) | Triple loops, interval DP |
| up to a few thousand | O(n^2) | Double loops, 2D DP |
| up to about 10^5 to 5 x 10^5 | O(n log n) | Sorting, heaps, binary search |
| 10^6 and above | O(n) | Hash maps, two pointers, prefix sums, fast input |
| values up to 10^18 | O(log n) | Binary search on the answer, math |

A safe estimate is about 10^8 simple operations per second ([USACO Guide](https://usaco.guide/bronze/time-comp)). OAs rarely publish time limits, so leave margin, especially in Python.

## During the test, step by step

1. Read all questions. Note the constraints for each.
2. Start with the easiest.
3. Write the brute force if the optimal idea is not clear within 5 minutes. Submit it. It collects the small tests.
4. Run the samples. Then add your own inputs: empty, one element, all equal, duplicates, negatives, the largest values.
5. Improve toward the target complexity. Keep the working version until the new one passes.
6. Debug with prints to stderr, never stdout: `print(x, file=sys.stderr)`, `System.err.println(x)`, `cerr << x`. Exact-match graders compare stdout.
7. Stuck 10 minutes: move on and come back.
8. Last 5 minutes: everything compiles and is submitted.
9. Never open ChatGPT, a second device, or a solution site. Use docs only if the rules allow it.

## Partial credit tactics

| Platform | How partial credit works | Your move |
|---|---|---|
| HackerRank | Points per hidden test case, exact output | Submit a correct brute force early, then optimize |
| Codility | Percent of tests passed. Code that does not compile scores 0. Submit is final; timeout auto-submits the editor | Keep the editor compiling at all times. Press Submit only when done with that task |
| CodeSignal GCA | Your highest-scoring submission per question counts, even if a later one breaks | Submit after every improvement |
| CodeSignal ICA | Points per level. The next level opens when the current one passes | Pass level N fully before you start level N+1 |
| Multi-part (Stripe style) | All parts graded by hidden tests | Finish parts 1 and 2 cleanly before part 3 |

Tactics that pick up points:

1. **Brute force first.** A correct O(n^2) solution often passes half the tests. A wrong O(n) one passes none.
2. **Handle small inputs separately if you must.** If you cannot find the full solution, use brute force when n is small and your best heuristic when it is large. Say so in a comment.
3. **Return the right type on every path.** A stub that returns nothing fails every test.
4. **Use 64-bit integers for sums and products.** In Java and C++, a sum of 10^5 values up to 10^9 overflows `int`.
5. **Never leave a section blank.** SQL, Bash and MCQ sections are scored ([Intuit](../companies/intuit.md) reports).
6. **Do the guessing math on negative-marked MCQs.** Expected value of a blind guess = (chance right x points) minus (chance wrong x penalty). With 4 options at +2 and -0.5, that is 0.5 - 0.375 = +0.125, so a guess pays. Eliminating one option makes it better. If the result is negative, skip.

## Test your code like the hidden tests will

Hidden tests target the same edge cases every time. Check each one before you submit.

- [ ] Empty input, or the smallest allowed (n = 1)
- [ ] All elements equal, or all distinct
- [ ] Duplicates
- [ ] Negative numbers and zero
- [ ] Already sorted, and reverse sorted
- [ ] The largest n (does it finish in time?)
- [ ] The largest values (does it overflow?)
- [ ] No valid answer (return what the spec says: `-1`, `[]`, an empty string)

When a problem keeps failing hidden tests, compare your fast solution against a slow one that is obviously correct on thousands of random small inputs. This takes 3 minutes to write and finds bugs your examples miss:

```python
import random


def max_subarray_brute(nums: list[int]) -> int:
    # Obviously correct, O(n^2). Never submit this one.
    return max(sum(nums[i:j + 1]) for i in range(len(nums)) for j in range(i, len(nums)))


def max_subarray_fast(nums: list[int]) -> int:
    # The solution you plan to submit (Kadane, O(n)).
    best = current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)
    return best


random.seed(1)
for trial in range(3000):
    nums = [random.randint(-5, 5) for _ in range(random.randint(1, 8))]
    expected, got = max_subarray_brute(nums), max_subarray_fast(nums)
    if expected != got:
        print("MISMATCH on", nums, "expected", expected, "got", got)
        break
else:
    print("3000 random tests passed")
```

Use this only where the platform lets you run custom code, and type it yourself. Do not paste it in.

## Reading input (stdin templates)

Most HackerRank and Codility questions give you a function stub, so you only fill in the function. Some questions say "read from STDIN" and give you an empty editor. Flipkart's story problems and some Cloudflare and OpenAI tests are like this. These templates read every token regardless of line breaks, which survives odd spacing in test files.

The example input is a number of test cases, then for each case `n` and `n` integers:

```text
3
4
5 1 9 2
1
7
3
-1 -1 -1
```

### Python

```python
import sys


def solve(nums: list[int]) -> int:
    # Replace with your logic. Example: range of the array.
    return max(nums) - min(nums) if nums else 0


def main() -> None:
    tokens = sys.stdin.buffer.read().split()  # every token, across all lines
    pos = 0

    def next_int() -> int:
        nonlocal pos
        pos += 1
        return int(tokens[pos - 1])

    test_cases = next_int()  # delete this loop if the input has one test case
    answers = []
    for _ in range(test_cases):
        n = next_int()
        nums = [next_int() for _ in range(n)]
        answers.append(str(solve(nums)))
        # print("debug", nums, file=sys.stderr)  # stderr never reaches the grader
    sys.stdout.write("\n".join(answers) + "\n")


if __name__ == "__main__":
    main()
```

When lines matter (a grid, or names with spaces), read lines instead of tokens:

```python
import sys

lines = sys.stdin.read().splitlines()
rows, cols = map(int, lines[0].split())          # "3 4"
grid = [list(lines[1 + r]) for r in range(rows)]  # each row is a string like "#..#"
q = int(lines[1 + rows])
queries = lines[2 + rows: 2 + rows + q]          # whole lines, spaces kept
```

### Java

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {

    private static long solve(long[] nums) {
        // Replace with your logic. Example: range of the array.
        if (nums.length == 0) {
            return 0;
        }
        long min = nums[0];
        long max = nums[0];
        for (long x : nums) {
            min = Math.min(min, x);
            max = Math.max(max, x);
        }
        return max - min;
    }

    public static void main(String[] args) throws IOException {
        FastReader in = new FastReader(System.in);
        StringBuilder out = new StringBuilder();
        int testCases = in.nextInt(); // delete this loop if the input has one test case
        for (int tc = 0; tc < testCases; tc++) {
            int n = in.nextInt();
            long[] nums = new long[n];
            for (int i = 0; i < n; i++) {
                nums[i] = in.nextLong();
            }
            out.append(solve(nums)).append('\n');
            // System.err.println(java.util.Arrays.toString(nums)); // debug goes to stderr
        }
        System.out.print(out); // one print at the end is much faster than one per line
    }

    /** Reads whitespace-separated tokens across any number of lines. */
    private static final class FastReader {
        private final BufferedReader reader;
        private StringTokenizer tokens;

        FastReader(InputStream stream) {
            reader = new BufferedReader(new InputStreamReader(stream));
        }

        String next() throws IOException {
            while (tokens == null || !tokens.hasMoreTokens()) {
                String line = reader.readLine();
                if (line == null) {
                    return null; // end of input
                }
                tokens = new StringTokenizer(line);
            }
            return tokens.nextToken();
        }

        int nextInt() throws IOException {
            return Integer.parseInt(next());
        }

        long nextLong() throws IOException {
            return Long.parseLong(next());
        }

        /** Whole line with spaces kept. Call it only at a line boundary. */
        String nextLine() throws IOException {
            tokens = null;
            return reader.readLine();
        }
    }
}
```

### C++

```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

long long solve(const vector<long long>& nums) {
    // Replace with your logic. Example: range of the array.
    if (nums.empty()) return 0;
    auto [lo, hi] = minmax_element(nums.begin(), nums.end());
    return *hi - *lo;
}

int main() {
    ios::sync_with_stdio(false);  // fast I/O; do not mix with scanf/printf after this
    cin.tie(nullptr);

    int testCases;
    if (!(cin >> testCases)) return 0;  // delete this loop if the input has one test case
    while (testCases--) {
        int n;
        cin >> n;
        vector<long long> nums(n);
        for (auto& x : nums) cin >> x;
        cout << solve(nums) << '\n';  // '\n' not endl: endl flushes on every line
        // cerr << "n=" << n << '\n';  // debug goes to stderr
    }

    // Whole lines with spaces (names, sentences): skip leftover whitespace first.
    // string line;
    // getline(cin >> ws, line);
    return 0;
}
```

All three were run on the sample input above and print `8`, `0`, `0`.

### Input traps

| Trap | What happens | Fix |
|---|---|---|
| Python `input()` in a loop over 10^5+ lines | Slow, can time out | Read everything with `sys.stdin.buffer.read()` |
| Java `Scanner` on large input | Slow | `BufferedReader` with `StringTokenizer`, as above |
| Java `StreamTokenizer` | Parses numbers as `double`, losing precision above about 2^53 | Use the reader above for big integers |
| C++ `endl` in a loop | Flushes every line, slow | Use `'\n'` |
| C++ `<bits/stdc++.h>` | Works on GCC only | Include the headers you use |
| Debug print to stdout | Breaks exact-match output | Print to stderr, remove before submit |
| `int` sums in Java or C++ | Overflow on large inputs | `long` or `long long` |

## AI-assisted repo tasks

Seen in Amazon OAs (2026 reports), Goldman Sachs Software Diagnostics (official), Walmart's 2026 HackerRank test, and an IBM India second round. You fix bugs or add a feature in a small web app (Django, Node/Express or Spring Boot), sometimes with a built-in assistant.

1. Read the README and the names of the failing tests first. List the bugs you suspect.
2. Find the route or controller for the broken feature. Trace it down to the service and data layer.
3. Use the assistant for "where is X handled" and "what does this error mean". Goldman's assistant "will not provide the full solution but can help with UI navigation, syntax, or problem statement clarity" ([Goldman Sachs guide](https://www.goldmansachs.com/careers/blog/guide-to-hackerrank)).
4. Make the smallest correct change. Match the existing style.
5. Add the missing pieces these tasks usually test: input validation and correct HTTP status codes. One reported Amazon intern task needed missing save and delete calls, 400 and 404 checks, and a rate limit returning 429 ([LeetCode post](https://leetcode.com/discuss/post/8495014/amazon-sde-intern-oa-by-qoyvkzgtpy-qpms/)).
6. Run the provided tests after every fix.
7. Assume a person reads your AI chat. HackerRank shows the transcript to the evaluator ([AI assistant in tests](https://candidatesupport.hackerrank.com/articles/7634558376-ai-assistant-in-tests)). Ask short, specific questions and check every answer.

**Practice drill (45 minutes):** clone any small open-source Spring Boot, Django or Express sample app. Break three things (remove a save call, return the wrong status code, delete a validation). Then fix them against the clock with an assistant used only for navigation and syntax.

## Progressive (ICA) tasks

1. Only level 1 is visible at first. Read it fully.
2. Build a clean data model in level 1: one class per entity, small methods, a dictionary keyed by id. Handle missing ids and duplicates, because level 1 tests them.
3. Finish levels 1 and 2 fast to leave time for 3 and 4. A reply on a Meta OA thread suggests about 10 minutes for both ([Blind thread](https://www.teamblind.com/post/meta-online-assessment-kh1yd3s8)). Treat that as one person's pace.
4. When level 3 changes old behavior, refactor the shared helper. Do not copy and paste. CodeSignal says you "must reuse, encapsulate, and refactor earlier code".
5. Re-run earlier levels' tests after each change. A failing test can come from an earlier level's data handling ([Airbnb page](../companies/airbnb.md)).

See a weak and a strong level 1 side by side on [code quality](code-quality.md#progressive-tasks-structure-that-survives-level-4).

## Work style, work simulation, and video sections

**Amazon Workstyles** (about 15 minutes): "built around Amazon's Leadership Principles". Amazon says "There is no practice needed" ([Amazon OA prep](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa)).

1. Read the 16 Leadership Principles once.
2. Answer as your real working self.
3. Stay consistent. These questionnaires repeat ideas in different words.
4. Do not overthink. It is short.

**Amazon Work Simulation** (full-time): emails, videos and instant messages from a virtual team. You rate 4 to 5 responses or pick the best one, with wikis, code snippets and roadmaps provided. Average 60 minutes; the page also says "You are provided 120 minutes". Prepare with the [full-time prep course](https://d36nnaydmp89fp.cloudfront.net/index.html) and the [Leadership Principles page](../behavioral/amazon-leadership-principles.md). Jugal's advice: "Prepare Amazon's behavioral component separately" ([FAANG AI engineer internship post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).

**Google Hiring Assessment:** workstyle statements before interviews. Answer consistently. Details on [platforms](platforms.md#game-based-and-psychometric-tests).

**Recorded video (HireVue and similar):** use the practice question, then the answer shape on [platforms](platforms.md#hirevue-recorded-video).

## Day-before and day-of checklist

The day before:

- [ ] Read the invite: platform, question count, time limit, deadline, proctoring, AI rule.
- [ ] Run the platform's system check: webcam, mic, screen share, browser. Codility screen sharing needs Chrome 131+, Edge 130+ or Opera 114+. Mettl has its own [mock test](https://mettl.com/test-taker-guide/guide-for-test-taker/).
- [ ] Have your ID ready. Amazon (North America) asks for a student or government ID. CodeSignal proctored tests need a government photo ID.
- [ ] Use a laptop or desktop, one monitor, at least 1024 x 768 (Amazon's minimum).
- [ ] Plug in power. Use wired internet or strong wifi. HackerRank calls 10 Mbps good.
- [ ] If the link redirects to a login page, turn off pop-up and ad blockers for the test site (Amazon's troubleshooting advice).
- [ ] Quit every AI tool, copilot, overlay, screen recorder and notification app.
- [ ] Keep the allowed docs bookmarked in one window.
- [ ] Sleep.

Thirty minutes before:

- [ ] Quiet room, door closed. Phone in another room. HackerRank Proctor Mode flags phones even partly in view.
- [ ] Water nearby. Check the rules page before using scratch paper.
- [ ] Close every app and tab except the test.
- [ ] Bathroom now. Codility says its timer cannot be paused once you start. Assume the same everywhere.
- [ ] Block 2 hours for Amazon full-time, 90 minutes for Amazon intern, 70 to 90 minutes for CodeSignal.

After you submit:

- [ ] Amazon: complete the feedback survey; it is part of the OA. The confirmation page should appear within 2 minutes, and two-part OAs send a completion email within 24 hours. Check spam.
- [ ] Write down, for yourself only, what slowed you down. Do not post the questions. CodeSignal says it monitors LeetCode and Stack Overflow for leaked questions and files takedowns ([CodeSignal cheating and fraud](https://codesignal.com/cheating-and-fraud/)).
- [ ] Technical failure during the test: email the recruiter (and support@codesignal.com for CodeSignal) the same day with the [template below](#templates).

## Integrity rules

### What is allowed

| Source | Allowed | Not allowed |
|---|---|---|
| Amazon OA (official) | Public docs such as the JDK or STL | Sites that need a login, private repos, print screen (ends the session), copy-paste ("We expect this to be your own code") |
| CodeSignal GCA (official) | Syntax-only web searches (for example, C++ queue methods) | Pages that explain how to build the thing; any AI, "including syntax search" |
| HackerRank Proctor Mode (official) | What your test's instructions allow | External AI coding assistants, answer-sharing sites, GitHub, phones in view, extra monitors |
| Meta CodeSignal OA (reported) | Reference docs | AI, searching for solutions |
| Hudson River Trading (official 2021 blog) | Books and the internet as a language reference | AI tools (2026 postings) |
| Goldman Sachs Diagnostics (official) | The built-in "limited" AI assistant | Outside AI |
| Karat (official) | A built-in AI assistant in modules that include one | Outside help, pasting the question into a search engine or a GPT |

### Company AI rules (official, as of Oct 2026)

| Company | Rule |
|---|---|
| Microsoft | Use AI to prepare. "During assessments and interviews, candidates should demonstrate their own skills without outside assistance unless explicitly permitted" ([source](https://careers.microsoft.com/v2/global/en/hiring-tips.html)) |
| Google | "AI tools are not permitted to be used during your interviews" ([source](https://www.google.com/about/careers/applications/how-we-hire/)) |
| Amazon | Candidates must acknowledge they will not use unauthorized tools, per an Amazon spokesperson ([CNBC](https://www.cnbc.com/2025/03/09/google-ai-interview-coder-cheat.html)) |
| Anthropic | Take-homes "without Claude unless we indicate otherwise". Live interviews: "This is all you, no AI assistance unless we indicate otherwise" ([source](https://www.anthropic.com/candidate-ai-guidance)) |
| IBM | AI "should not be used: To complete assessments, technical tests, or coding challenges" ([source](https://www.ibm.com/careers/application-process)) |
| Cisco | Fine for preparation. Poor use includes "Generating the solution to a coding problem or design question in real time" ([source](https://careers.cisco.com/global/en/genai-practices)) |
| Waymo | "the use of AI tools or LLMs is not permitted" unless the instructions say so ([source](https://careers.withwaymo.com/how-we-hire)) |
| Instacart | In take-homes, AI may help organize thoughts or proofread, not complete the task ([source](https://www.instacart.careers/ai-usage-guide)) |
| Qualcomm | No AI tools, bots or LLMs in assessments or interviews unless Qualcomm asks ([source](https://www.qualcomm.com/site/privacy/qualcomm-interview-policy)) |
| Two Sigma, Snowflake, ServiceNow, HRT | Ban AI in assessments unless told otherwise. See each company page: [Two Sigma](../companies/two-sigma.md), [Snowflake](../companies/snowflake.md), [ServiceNow](../companies/servicenow.md), [HRT](../companies/hudson-river-trading.md) |

If your invite does not mention AI, assume none is allowed. If unsure, ask the recruiter in writing.

### What gets flagged

| Behavior | Who flags it | How to avoid an innocent flag |
|---|---|---|
| Pasting code | HackerRank records pastes and shows them in reports. CodeSignal scores paste size, count and timing | Type your code, including your templates |
| Copying the problem text | CodeSignal "Description Copy" events, especially early or near the end ([Suspicion Score](https://support.codesignal.com/hc/en-us/articles/16957476906135-Using-Suspicion-Score)) | Read it on screen. Type the numbers you need |
| Leaving the tab | HackerRank logs how often and how long you leave the window | Stay in the test window unless docs are allowed |
| A phone or second face in view, looking away often | HackerRank Proctor Mode, image proctoring | Clear desk, phone in another room, look at your screen |
| Code that appears all at once, or line by line top-down | HackerRank AI plagiarism model; Karat interviewers | Write the way you normally do: outline, brute force, refine |
| High similarity to other submissions | HackerRank MOSS (renaming variables does not hide it); CodeSignal similarity diffs | Write your own solution |
| Switching language plus pastes | CodeSignal Suspicion Score | Pick your language before you start |

Detection tools make mistakes too. HackerRank recommends a human review "so a false positive doesn't disqualify an honest candidate" ([HackerRank](https://www.hackerrank.com/blog/how-plagiarism-detection-works-at-hackerrank/)). If you were flagged and did nothing wrong, ask the recruiter whether a person reviewed it.

### What happens to people who cheat

1. CodeSignal shows companies "Proctoring Rejected" and the reason ([source](https://support.codesignal.com/hc/en-us/articles/4409230511767-Viewing-the-reason-for-a-test-taker-s-non-verified-results)).
2. CodeSignal reports flagging 35% of proctored assessments in 2025 ([CodeSignal blog](https://codesignal.com/blog/prevent-and-detect-cheating-in-recruiting/)).
3. Hudson River Trading postings say it may end the interview, disqualify you, or rescind an offer ([HRT page](../companies/hudson-river-trading.md)).
4. The student who built a tool to cheat in technical interviews faced disciplinary proceedings at Columbia ([CNBC](https://www.cnbc.com/2025/03/09/google-ai-interview-coder-cheat.html)).
5. A pass you did not earn leads to a live round you cannot pass. Follow-up questions are built to catch it.

## Retakes and cooldowns

| Company or platform | Rule | Source |
|---|---|---|
| CodeSignal GCA | 3 certified attempts per 180 days, at most 2 within 30 days. One score is shared with every company that asks | [CodeSignal](https://support.codesignal.com/hc/en-us/articles/11635510785047-What-is-a-cooldown-period-and-how-does-it-impact-my-ability-to-take-an-assessment) |
| CodeSignal ICA | 2 attempts per rolling 180 days, each with a new invite | [CodeSignal](https://support.codesignal.com/hc/en-us/articles/19116922232983-What-are-the-Industry-Coding-Assessment-ICA-rules) |
| Amazon SDE II | Not selected after the OA: "re-apply in six months". A passed OA may carry over to another SDE II role | [Amazon](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-oa-prep) |
| Amazon university OA | No retake rule published. Finish before the deadline; Amazon hires on a rolling basis | [Amazon](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa) |
| Google | After a no, "wait at least a year" for the same type of role. At most 3 applications every 30 days | [Google](https://www.google.com/about/careers/applications/how-we-hire/) |
| JPMorgan | Many assessments "may not be retaken for a designated timeframe". Apply to at most 3 summer programs | [JPMorgan](https://www.jpmorganchase.com/careers/how-we-hire/faqs) |
| Expedia | Up to 5 applications per 45 days | [Expedia](https://careers.expediagroup.com/faq/) |
| Capital One | At most 5 active US applications | [Capital One page](../companies/capital-one.md) |

> **Tip:** Plan your CodeSignal attempts. Take the GCA for your top company when you are ready, then reshare that score. Do not spend an attempt on a company you would not join.

## Templates

### Extension request

```text
Subject: OA extension request: [Your Name], [Job ID]

Hi [Recruiter name or Recruiting team],

I received the online assessment for [Role, Job ID] on [date], with a deadline of [date].
Because of [one honest line: university exams on these dates / a medical issue / travel without reliable internet],
could I complete it by [a specific date, 3 to 5 days later]?

I want to give the assessment my full attention. Thank you for considering this.

Best,
[Name]
[Email] | [Phone]
```

### Accommodation request

```text
Subject: Assessment accommodation request: [Your Name], [Role]

Hi [Recruiter name],

I am scheduled to take the [platform] assessment for [Role]. I have [a documented condition /
an accommodation I receive at university] and would like to request [extra time of X% /
screen reader support / an alternative to the game-based section].
I can share documentation with your accommodations team if needed.

Thank you,
[Name]
```

Send it before you start the test. Amazon's route is its [accommodations page](https://www.amazon.jobs/content/en/how-we-hire/accommodations).

### Technical failure report

```text
Subject: Technical issue during OA: [Your Name], [Job ID]

Hi [Recruiter name],

During my [platform] assessment for [Role, Job ID] on [date] at [time, time zone],
[what happened: the page froze on question 3 / my connection dropped for 6 minutes].
I [what you did: refreshed, rejoined, contacted support at (email) with ticket (number)].

Could I have a new link or a note added to my result? I am happy to retake it today or tomorrow.

Thank you,
[Name]
```

## After the OA

1. Goldman Sachs says to expect an update within three weeks. Other companies vary; waits of 1 to 3 weeks are normal in candidate reports.
2. Do not read silence as a no for 2 to 3 weeks. Keep applying in the meantime. See [application strategy](../jobs/application-strategy.md).
3. If you pass, the next round is usually a live coding screen. Start [the 45-minute coding interview](../coding/interview-framework.md) the same day.

Next: [Code quality in OAs](code-quality.md)
