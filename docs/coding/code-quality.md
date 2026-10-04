# How interviewers grade your code

For candidates who solve the problem and still get a "no hire". When you finish, you will know the rubric lines interviewers fill in, have a pre-submit checklist, and a routine for testing code by hand.

Jugal's summary from his [Anthropic Fellowship guide](https://jugaldb.substack.com/p/how-to-land-anthropics-3850week-ai): "Interviewers care about clean code and structured thinking, not just arriving at the correct answer." His [Meta prep post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part) puts it as "Production-Grade Code: Interviewers expect clear thought process, edge-case handling (e.g., null checks), and in-place optimizations."

## Passing tests is not the bar

| Evidence | What it says | Source |
|---|---|---|
| Amazon online assessment | Assesses "your approach to problem solving, and the clarity, maintainability, and efficiency of your code" | [Amazon SDE OA](https://amazon.jobs/content/en/how-we-hire/university/sde-oa) |
| Amazon onsite | A whole competency called "Logical and maintainable": "code that is easy to maintain, read, and understand" | [Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep) |
| Amazon students | "The goal is to write code that's almost ready for production." | [Amazon student SDE](https://amazon.jobs/content/en/career-programs/university/sde) |
| Microsoft | "ensure your code is clean, concise, and bug free" | [Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) |
| Tech Interview Handbook rubric | Technical competency includes "Neat coding style (proper indentation, spacing, variable naming, etc)" | [TIH rubrics](https://www.techinterviewhandbook.org/coding-interview-rubrics/) |
| interviewing.io data | Successful Python candidates defined more functions (3.29 vs 2.71) and their code ran without errors more often (64% vs 60%) | [interviewing.io, ~3,000 interviews](https://interviewing.io/blog/we-analyzed-thousands-of-technical-interviews-on-everything-from-language-to-code-style-here-s-what-we-found) |

> **Watch out:** Clean code does not rescue a wrong answer. In 100K+ interviewing.io interviews, a candidate with strong code and solving but weak communication (scores 4-4-2) passed 96% of the time, while 3-3-4 was 3 times more likely to be rejected ([interviewing.io](https://interviewing.io/blog/does-communication-matter-in-technical-interviewing-we-looked-at-100k-interviews-to-find-out)). Get to a working solution first: style and communication are a floor, and correctness decides junior rounds.

## The rubrics, source by source

### Tech Interview Handbook (cross-company)

Yangshun Tay (ex-Meta) summarizes FAANG rubrics as four dimensions. Interviewers score each (often 1 to 4) or give one overall score, and the outcome is Strong hire, Hire, No hire, or Strong no hire ([TIH rubrics](https://www.techinterviewhandbook.org/coding-interview-rubrics/)). Signals, verbatim:

| Dimension | Hire signals | Extra signals for a strong hire |
|---|---|---|
| Communication | "Asks appropriate clarifying questions"; "Communicates approach, rationale and tradeoffs"; "Constantly communicating, even while coding"; "Well organized, succinct, clear communication" | |
| Problem solving | "Understands the problem quickly by asking good clarifying questions"; "Approached the problem systematically and logically"; "Was able to come up with an optimized solution"; "Determined time and space complexity accurately"; "Did not require any major hints" | "Came up with multiple solutions"; "Explained trade-offs of each solution clearly and correctly"; "Had time to discuss follow up problems/extensions" |
| Technical competency | "Translates discussed solution into working code with minimal to no bugs"; "Clean and straightforward implementation with no syntax errors"; "Neat coding style (proper indentation, spacing, variable naming, etc)" | "Compares several coding approaches"; "Demonstrates strong knowledge of language constructs and paradigms" |
| Testing | "Came up with more typical cases and tested their code against it"; "Found and handled corner cases"; "Identified and self-corrected bugs in code"; "Able to verify correctness systematically (e.g. stepping through each line)" | |

### Google

| What Google says | Source |
|---|---|
| "Every candidate is assessed using clear rubrics. We use the same rubrics for everyone being considered for that role" | [How we hire](https://www.google.com/about/careers/applications/how-we-hire/) |
| Rubrics give reviewers "a shared understanding of what outstanding, solid, borderline, and poor response looks like" | [re:Work structured interviewing](https://rework.withgoogle.com/intl/en/guides/a-guide-to-structured-interviewing-for-better-hiring-practices) |
| Hiring attributes: role-related knowledge (RRK), problem solving ("Can they break down a problem into its component parts and propose a logical, data-driven solution?"), leadership | Same re:Work guide |
| "It's not just about giving the 'right' answer, the interviewer will be looking to see the thought process versus the answer itself." | [Interview tips](https://www.google.com/about/careers/applications/interview-tips/) |

Google does not publish its coding-specific rubric lines. interviewing.io reports a seven-point scale from Strong No-Hire to Strong Hire and that communication during coding counts more at Google than at most companies ([interviewing.io Google guide](https://interviewing.io/guides/hiring-process/google)). Jugal's note from his [Google prep post](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e): "Google expects deep edge-case reasoning, proofs of correctness, and discussing trade-offs."

### Meta

Meta's prep guides (downloadable from your Career Profile after an invite) list four areas. Wording below is quoted from the guide by Hello Interview ([Meta SWE interview](https://www.hellointerview.com/blog/the-meta-swe-interview)):

| Area | Question the interviewer answers |
|---|---|
| Problem solving | Can you "develop and weigh different solutions, employ apt data structures, and discuss space and time complexity"? |
| Coding | "Can you translate theoretical solutions into executable code fluently?" |
| Verification | "Are you contemplating various test cases or providing solid justifications for your code's correctness?" |
| Communication | "Are you proactively seeking clarity and requirements before delving into coding?" |

The AI-enabled round is graded on problem solving, code quality, verification and communication ([Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding)). Prep pages: [tech screen](https://www.metacareers.com/swe-prep-techscreen), [onsite](https://www.metacareers.com/swe-prep-onsite).

### Amazon

Amazon's SDE II page names three coding competencies ([Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)). The student SDE page asks for the same things, with code "almost ready for production".

| Competency | What Amazon says |
|---|---|
| Problem solving | "take something complex, break it down, identify a solution, and translate that solution into working code." Split your time: requirements, a first pass that covers all of them, then enhance |
| Logical and maintainable | "name variables, methods, and classes so future developers with no knowledge of the code can understand how they work." "Your test names should describe business and technical requirements" |
| Data structures and algorithms | Know runtimes and memory use of common structures. "Your interview will not be focused on rote memorization of algorithms." |

Amazon's best-practice lines, verbatim from the same page. Turn them into a checklist:

- [ ] "Ask clarifying questions to understand the requirements before you start to code."
- [ ] "Write syntactically correct code, no pseudo code. Start with a working solution and enhance as you go."
- [ ] "Make code extendable and avoid single functions that do everything."
- [ ] "Use clear and descriptive method, parameter, and variable names, and separate functionality into discrete methods/functions with clear responsibilities."
- [ ] "Translate qualifying requirements into clean written code, checking edge cases and providing usage examples."
- [ ] "Think out loud. Explain your approach before coding, and vocalize your thought process as you proceed."

### Microsoft

[Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) evaluates problem solving, design, coding, testing, and technical excellence. The testing line is the most specific of any company: "What are the security implications of the feature? How can you stress this code? What are the boundaries and error conditions? Be sure to point out your corner cases."

### interviewing.io

Interviewers score Code, Solve, and Communicate, each 1 to 4 ([interviewing.io](https://interviewing.io/blog/does-communication-matter-in-technical-interviewing-we-looked-at-100k-interviews-to-find-out)). For L3 and L4, their data says to keep communication at 2 or above and trade it for solving and coding when forced to choose.

### One map of all of them

| What you do | TIH | Google | Meta | Amazon | Microsoft |
|---|---|---|---|---|---|
| Clarify before coding | Communication, Problem solving | Problem solving | Communication | Problem solving | Problem solving |
| Brute force, optimize, complexity | Problem solving | Problem solving, RRK | Problem solving | DSA | Technical excellence |
| Working code that matches the plan | Technical competency | RRK | Coding | Problem solving | Coding |
| Names, helpers, structure | Technical competency | Reported in feedback | Coding (Code quality in AI round) | Logical and maintainable | Coding |
| Trace, edge cases, own bugs | Testing | Thought process | Verification | Edge cases, usage examples | Testing |
| Narrate the whole way | Communication | Thought process | Communication | Think out loud | Problem solving |

## Bad vs good interview code

All examples below were run on Python 3.14. The "strong" versions are what to aim for in 20 minutes, not production polish.

### 1. Names and the no-answer case

```python
# Weak: cryptic names, silently returns None when there is no answer
def f(a, t):
    d = {}
    for i in range(len(a)):
        if t - a[i] in d:
            return [d[t - a[i]], i]
        d[a[i]] = i
```

```python
# Strong: names explain intent, enumerate, explicit return for "no pair"
def two_sum(nums: list[int], target: int) -> list[int]:
    """Return indices of two numbers that add up to target, or [] if none exist."""
    index_by_value = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in index_by_value:
            return [index_by_value[complement], i]
        index_by_value[num] = i
    return []
```

What the interviewer notes: the weak version returns `None` for `([1, 2], 10)` by falling off the end. The strong version returns `[]` on purpose, and you say so out loud.

### 2. Globals and recursion depth

```python
# Weak: module-level state leaks between calls; recursive DFS on a long strip of land crashes
visited = set()
count = 0
def numIslands(grid):
    global count
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == "1" and (i, j) not in visited:
                dfs(grid, i, j)
                count += 1
    return count
def dfs(grid, i, j):
    if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == "0" or (i, j) in visited:
        return
    visited.add((i, j))
    dfs(grid, i + 1, j); dfs(grid, i - 1, j); dfs(grid, i, j + 1); dfs(grid, i, j - 1)
```

```python
# Strong: state is local, one helper with one job, iterative BFS avoids recursion limits
from collections import deque

def count_islands(grid: list[list[str]]) -> int:
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    seen = set()

    def flood_fill(start_row: int, start_col: int) -> None:
        queue = deque([(start_row, start_col)])
        seen.add((start_row, start_col))
        while queue:
            row, col = queue.popleft()
            for d_row, d_col in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                r, c = row + d_row, col + d_col
                if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in seen:
                    seen.add((r, c))
                    queue.append((r, c))

    islands = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1" and (r, c) not in seen:
                flood_fill(r, c)
                islands += 1
    return islands
```

What the interviewer notes: call the weak version twice and the second call returns the wrong count, because `count` and `visited` persist. On a 1 x 5000 strip of land it raises `RecursionError` (CPython's default limit is 1000). Problem: [200. Number of Islands](https://leetcode.com/problems/number-of-islands/).

### 3. Guard clauses instead of nesting

```python
# Weak: deep nesting, repeated branches, verbose final if/else
def isValid(s):
    st = []
    for c in s:
        if c == '(' or c == '[' or c == '{':
            st.append(c)
        else:
            if len(st) > 0:
                top = st.pop()
                if c == ')':
                    if top != '(':
                        return False
                elif c == ']':
                    if top != '[':
                        return False
                else:
                    if top != '{':
                        return False
            else:
                return False
    if len(st) == 0:
        return True
    else:
        return False
```

```python
# Strong: a lookup table replaces branches, early return on the failure case
def is_balanced(text: str) -> bool:
    opener_for = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in text:
        if ch not in opener_for:
            stack.append(ch)
            continue
        if not stack or stack.pop() != opener_for[ch]:
            return False
    return not stack
```

What the interviewer notes: both are correct on `"()[]{}"`, `"(]"`, `"([)]"`, `"{[]}"`, `""`, `"("`, `")"`. The strong one is half the length with one failure exit. Say the assumption out loud: input contains only bracket characters. Problem: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/).

### 4. Language idioms

```python
# Weak: hand-rolled counting and sorting
def top_k_frequent_manual(nums, k):
    freq = {}
    for n in nums:
        if n in freq:
            freq[n] += 1
        else:
            freq[n] = 1
    items = sorted(freq.items(), key=lambda x: x[1], reverse=True)
    res = []
    for i in range(k):
        res.append(items[i][0])
    return res
```

```python
# Strong: Counter does the counting; most_common or heapq.nlargest picks top k
from collections import Counter
import heapq

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    counts = Counter(nums)
    return [num for num, _ in counts.most_common(k)]

def top_k_frequent_heap(nums: list[int], k: int) -> list[int]:
    counts = Counter(nums)
    return heapq.nlargest(k, counts.keys(), key=counts.get)
```

What the interviewer notes: idiomatic code reads faster and leaves time for testing. Ask first whether built-ins are allowed, then state their cost: `most_common(k)` sorts, O(m log m) over m distinct values; `heapq.nlargest` is O(m log k). Problem: [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/).

### 5. Separation of concerns (the Amazon "logical and maintainable" style)

Prompt: log lines look like `user_id,timestamp,action`. Return the k users with the most actions of a given type.

```python
# Weak: parsing, filtering, counting, and ranking in one function; crashes on a bad line
def f(logs, k):
    d = {}
    for l in logs:
        p = l.split(",")
        if p[2] == "purchase":
            if p[0] in d:
                d[p[0]] += 1
            else:
                d[p[0]] = 1
    r = sorted(d.items(), key=lambda x: -x[1])
    return [x[0] for x in r[:k]]
```

```python
# Strong: one job per function, a named record type, a clear error for bad input
from collections import Counter
from typing import NamedTuple

class LogEntry(NamedTuple):
    user_id: str
    timestamp: int
    action: str

def parse_log_line(line: str) -> LogEntry:
    parts = line.strip().split(",")
    if len(parts) != 3:
        raise ValueError(f"Malformed log line: {line!r}")
    user_id, timestamp, action = parts
    return LogEntry(user_id, int(timestamp), action)

def count_actions_by_user(entries, action: str) -> Counter:
    return Counter(entry.user_id for entry in entries if entry.action == action)

def top_k_users(log_lines: list[str], action: str, k: int) -> list[str]:
    entries = (parse_log_line(line) for line in log_lines)
    counts = count_actions_by_user(entries, action)
    return [user_id for user_id, _ in counts.most_common(k)]
```

Tests named after requirements, as Amazon asks ("Your test names should describe business and technical requirements"):

```python
def test_counts_only_the_requested_action():
    logs = ["u1,100,view", "u1,101,view", "u2,102,purchase"]
    assert top_k_users(logs, "purchase", 1) == ["u2"]

def test_returns_fewer_than_k_users_when_not_enough_exist():
    assert top_k_users(["u1,100,purchase"], "purchase", 3) == ["u1"]

def test_empty_log_returns_empty_list():
    assert top_k_users([], "purchase", 2) == []

def test_malformed_line_raises_clear_error():
    try:
        top_k_users(["u1,100"], "purchase", 1)
    except ValueError as error:
        assert "Malformed" in str(error)
    else:
        raise AssertionError("expected ValueError")
```

What the interviewer notes: the weak version hard-codes `"purchase"` and dies with `IndexError` on `"u1,100"`. The strong version can take a new action type, a new input format, or a tie-break rule by changing one function. Ask how ties should break before you finish.

### 6. Over-engineering

Wrapping a 10-line two-pointer function in an abstract `Solver` base class, a factory, and a config dict reads as not knowing what matters. Google's code review guide flags code that solves "the problem that the developer speculates might need to be solved in the future" ([Google eng-practices](https://google.github.io/eng-practices/review/reviewer/looking-for.html)).

The exception is Amazon's logical-and-maintainable round and [low-level design](../system-design/low-level-design.md) prompts, where classes and separation are the point. If unsure, ask: "Do you want this structured as a class, or is a function fine?"

## Pre-submit checklist

Run this after every practice problem for two weeks, until it is automatic.

### Naming

- [ ] Variables say what they hold: `index_by_value`, `window_start`, `prefix_count`, not `d`, `a`, `t`, `x`
- [ ] Booleans read as yes/no: `is_valid`, `has_cycle`, `seen`
- [ ] Function names are verbs: `count_islands`, `parse_log_line`, `merge_intervals`
- [ ] One naming convention for the language (snake_case in Python, camelCase in Java and JavaScript)
- [ ] Short names only for tiny scopes (`i`, `r`, `c` inside a 3-line loop)

### Structure

- [ ] The main function reads like the plan you said out loud
- [ ] Repeated or fiddly logic pulled into a helper (`in_bounds`, `neighbors`, `flood_fill`)
- [ ] No module-level mutable globals; state lives inside the function or a class
- [ ] Guard clauses and early returns instead of three levels of nesting
- [ ] No dead code, commented-out attempts, or debug prints left in
- [ ] Comments only for a non-obvious "why", not for what the line does

### Edge cases

- [ ] Empty input, single element, two elements
- [ ] Duplicates, all elements equal
- [ ] Negatives, zero, very large values (overflow in Java and C++)
- [ ] No valid answer: returns the agreed value (`[]`, `-1`, `None`, `0`) on purpose
- [ ] Input not mutated unless you said so

### Testing

- [ ] Traced one normal example line by line with a variable table
- [ ] Ran each edge case in your head and said the result
- [ ] Re-traced the failing case after every fix
- [ ] Complexity stated for the code you wrote, not the code you planned

### Communication while coding

- [ ] Said the approach and complexity before typing
- [ ] Narrated intent ("this handles the empty case up front") at least every couple of minutes
- [ ] Asked before using a library function that does the core of the problem
- [ ] Said out loud any assumption the code relies on

## How to test by hand

Most big tech coding rounds do not run your code (Google, Meta standard rounds, Amazon). Your trace is the only test.

1. Read the code top to bottom once like a reviewer. CTCI calls this the conceptual test ([CTCI sheet](https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf)).
2. Check the hot spots in the table below.
3. Pick the smallest non-trivial example: 3 to 5 elements, one that reaches every branch.
4. Make a variable table in a comment block: one row per loop iteration, one column per variable that changes. CodePath calls this the watchlist ([UMPIRE](https://guides.codepath.org/compsci/UMPIRE-Interview-Strategy)).
5. Trace, writing values as you go, so the interviewer can follow.
6. Run the edge cases from the menu below in your head and say each result.
7. If a trace fails, fix the line, then re-trace only the failing case.
8. Close with time and space.

### Trace template

```text
# input: [example]   expected: [answer]
# step | [var 1] | [var 2] | [var 3] | note
# 1    |         |         |         |
# 2    |         |         |         |
# 3    |         |         |         |
# result: [value]  matches expected? [yes/no]
```

Filled example for `is_balanced("([)]")`:

```text
step | ch | stack before | action                         | stack after | result
1    | (  | []           | push                           | [(]         |
2    | [  | [(]          | push                           | [(, []      |
3    | )  | [(, []       | pop "[" != opener_for[")"]="(" | [(]         | return False
```

### Where bugs hide

| Hot spot | What to check |
|---|---|
| Loop bounds | `range(n)` vs `range(n - 1)`; `<` vs `<=` in binary search and two pointers |
| Index math | `mid = (lo + hi) // 2`; `i + 1` past the end; negative indexes in Python wrap silently |
| Empty containers | `stack[-1]`, `heap[0]`, `max([])` on an empty structure |
| Initial values | `0` vs `float("inf")` for min; seeding a map (`{0: 1}` for prefix sums) |
| Update order | Look up before insert, or insert before look up (they give different answers) |
| Mutation | Appending a list you later change (copy with `path[:]` in backtracking) |
| Null nodes | `node.left.val` when `node.left` is `None` |
| Return paths | A branch that falls off the end and returns `None` |

### Edge-case menu by input type

| Input type | Cases to try |
|---|---|
| Array | Empty, one element, all equal, sorted, reverse sorted, negatives, max size |
| String | Empty, one char, all same char, spaces, upper and lower case, non-ASCII if allowed |
| Linked list | Empty, one node, two nodes, cycle, target at head or tail |
| Tree | Empty, one node, all left (a line), all right, duplicates in a BST |
| Graph | No edges, disconnected parts, cycle, self-loop, one node |
| Intervals | Touching endpoints, fully nested, identical, unsorted input |
| Numbers | 0, negative, overflow boundary, k larger than n, k = 0 |
| Matrix | 1 x 1, 1 x n, n x 1, all same value |

## How much validation to write

1. Ask once: "Should I validate input, or assume it is well-formed?" ([TIH blog](https://www.techinterviewhandbook.org/blog/take-control-over-your-coding-interview/)).
2. In algorithm rounds, say the validation instead of writing pages of it: "In production I'd check that k is positive."
3. In Amazon's logical-and-maintainable round and in any "build a small system" prompt, write it. Amazon: "validate that no bad input can slip through" ([Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)).
4. Raise a clear error or return the agreed sentinel. Never fail silently.

## Language notes

Pick the language you know best. interviewing.io found no significant pass-rate difference by language ([interviewing.io](https://interviewing.io/blog/we-analyzed-thousands-of-technical-interviews-on-everything-from-language-to-code-style-here-s-what-we-found)). More on the choice: [Learn DSA](index.md) and [TIH language guide](https://www.techinterviewhandbook.org/programming-languages-for-coding-interviews/).

| Language | Use these | Watch for |
|---|---|---|
| Python | `enumerate`, `zip`, `collections.Counter`, `defaultdict`, `deque`, `heapq`, `bisect`, `functools.lru_cache` | `list.pop(0)` is O(n), use `deque`; `x in list` is O(n), use a set; recursion limit about 1000; string `+=` in a loop |
| Java | `HashMap.getOrDefault`, `ArrayDeque` for stacks and queues, `PriorityQueue`, `StringBuilder` | `int` overflow on sums (use `long`); comparing `Integer` objects with `==` |
| C++ | `unordered_map`, `priority_queue`, `vector`, `auto`, range-for | `map[key]` inserts a default value on lookup; `v.size() - 1` underflows when `v` is empty; `int` overflow |
| JavaScript or TypeScript | `Map`, `Set`, array methods | `sort()` without a comparator sorts numbers as strings; no built-in heap |

Python reference: [collections](https://docs.python.org/3/library/collections.html), [heapq](https://docs.python.org/3/library/heapq.html), [bisect](https://docs.python.org/3/library/bisect.html), [functools](https://docs.python.org/3/library/functools.html).

## Practice: review your own code

1. Solve the problem with a timer. Do not touch the code once the timer ends.
2. Run the pre-submit checklist above. Mark every miss.
3. Read [Google's "What to look for in a code review"](https://google.github.io/eng-practices/review/reviewer/looking-for.html). Check your code against its Naming, Complexity, and Comments sections.
4. Rewrite the solution once, from memory, fixing every miss. Time the rewrite.
5. Compare with one top-voted solution only after your rewrite. Copy one idiom you did not know into a notes file.
6. Log the misses in your tracker ([How to practice](how-to-practice.md)). The same miss three times becomes a written rule on your interview-day sheet.

For online assessments, where a human or a model may read your code after the tests run, see [OA code quality](../online-assessments/code-quality.md).

## Resources

- [Tech Interview Handbook: coding interview rubrics](https://www.techinterviewhandbook.org/coding-interview-rubrics/): the four-dimension rubric with hire and no-hire signals. How to use it: print it and score yourself after every practice problem.
- [Amazon SDE II interview prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep): the most specific public text on code quality from any big tech company. How to use it: read the four coding tabs and copy the best-practice list into your notes.
- [Amazon SDE online assessment](https://amazon.jobs/content/en/how-we-hire/university/sde-oa): OA format and rules. How to use it: read the rules before any Amazon OA.
- [Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing): five evaluation areas. How to use it: ask yourself its four testing questions before you say done.
- [Google re:Work structured interviewing](https://rework.withgoogle.com/intl/en/guides/a-guide-to-structured-interviewing-for-better-hiring-practices): how Google builds rubrics. How to use it: aim for "solid" on every attribute, not "outstanding" on one.
- [Google eng-practices: what reviewers look for](https://google.github.io/eng-practices/review/reviewer/looking-for.html): Google's code review checklist. How to use it: review your last 5 solutions against it.
- [Google Python style guide](https://google.github.io/styleguide/pyguide.html): naming and style rules. How to use it: skim the Naming section once.
- [PEP 8](https://peps.python.org/pep-0008/): the Python style guide. How to use it: snake_case, 4-space indents, spaces around operators.
- [Hello Interview: the Meta SWE interview](https://www.hellointerview.com/blog/the-meta-swe-interview): Meta's four evaluation areas, quoted from Meta's guide. How to use it: read before a Meta screen.
- [Karat: human and AI interview rubrics](https://karat.com/resource/human-ai-technical-interview-rubrics/): how rounds that allow AI are scored. How to use it: read the competencies on reviewing AI-generated code before an AI-enabled round.
- [interviewing.io: communication data](https://interviewing.io/blog/does-communication-matter-in-technical-interviewing-we-looked-at-100k-interviews-to-find-out): 100K interviews on what matters at L3 and L4. How to use it: read it if you over-practice talking and under-practice solving.

Next: [Mock interviews](mock-interviews.md)
