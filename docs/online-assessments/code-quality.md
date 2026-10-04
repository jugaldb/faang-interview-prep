# Code quality in online assessments

For anyone whose OA code passes tests but reads like scratch work. You leave with weak and strong solutions side by side in Python and Java, a structure for progressive tasks, a 5-minute pre-submit checklist, and the signals reviewers and detection tools check.

## Who reads your OA code

Passing hidden tests gets you a score. Several companies then open the code itself.

| Who | What they look at | Source |
|---|---|---|
| Amazon | "the clarity, maintainability, and efficiency of your code" in the coding section | [Amazon OA prep](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa) |
| Companies on Codility | Some tasks score style, and your "testing team may manually review your submitted code" | [Codility candidate FAQ](https://app.codility.com/candidate-faq/) |
| Companies on HackerRank | A keystroke replay of how you wrote it, plus the AI chat if an assistant was on | [AI plagiarism detection](https://support.hackerrank.com/articles/8000786908-ai-plagiarism-detection), [AI assistant in tests](https://candidatesupport.hackerrank.com/articles/7634558376-ai-assistant-in-tests) |
| CodeSignal ICA | Later levels force you to "reuse, encapsulate, and refactor earlier code", so messy level 1 code costs you at level 3 | [ICA rules](https://support.codesignal.com/hc/en-us/articles/19116922232983-What-are-the-Industry-Coding-Assessment-ICA-rules) |
| Stripe, Palantir (reports) | A Stripe new grad stressed clean, modular, readable code. Palantir's 2026 new grad OA asked for production-quality code | [Stripe](../companies/stripe.md), [Palantir](../companies/palantir.md) |
| Anthropic Fellows | "Interviewers care about clean code and structured thinking, not just arriving at the correct answer." | [Jugal's Fellows post](https://jugaldb.substack.com/p/how-to-land-anthropics-3850week-ai) |
| OpenAI | "well-designed solutions to the challenge, high-quality code, optimal performance, and good test coverage" | [OpenAI interview guide](https://openai.com/interview-guide/) |
| Goldman Sachs Diagnostics | Use the built-in assistant "while applying your own engineering judgment to evaluate, refine, and validate the final solution" | [Goldman Sachs HackerRank guide](https://www.goldmansachs.com/careers/blog/guide-to-hackerrank) |

Correctness still comes first. Karat says "The most important thing we are evaluating is how successfully your code solves the problem" ([Karat](https://karat.com/candidate-experience/)). A community OA guide with 2,500+ GitHub stars says most OA code is never read, and working messy code beats clean broken code ([Leader-board guide](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md)).

So: **correct first, clean second.** Good names and a one-line complexity comment take under a minute once they are a habit.

## The five things a reader notices

1. **Names.** `accepted`, `dropped`, `window_start` tell the reader what the value is. `c`, `res`, `l`, `tmp` make them reverse-engineer it.
2. **Structure.** One function, one job. No module-level mutable state. Amazon's interview guide says "avoid single functions that do everything" ([Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)).
3. **Edge cases inside the constraints.** Handle empty input, one element, duplicates and the largest values. Do not add checks for input the task says cannot happen; Codility says not to validate input assumptions.
4. **Comments that explain why.** One line for the approach and complexity at the top. Short notes where the logic is not obvious. No commented-out old versions and no debug prints at submit time.
5. **Complexity that matches the constraints, stated in the code.** A reviewer should not have to work it out.

## Side by side: Python

The problem (a common OA shape, written for this page):

```text
A rate limiter receives requests at the given timestamps (seconds, sorted ascending, may repeat).
A request at time t is accepted if fewer than `limit` requests were accepted in the window
(t - window, t]. Otherwise it is dropped. Return the number of dropped requests.
Constraints: 0 <= n <= 2 * 10^5.
Example: timestamps = [1, 1, 1, 2, 3, 11], limit = 2, window = 10  ->  3
```

### Weak version

```python
res = []

def solve(a, k, w):
    c = 0
    for i in range(len(a)):
        cnt = 0
        for j in res:
            if a[i] - j < w:
                cnt += 1
        print(cnt)
        if cnt < k:
            res.append(a[i])
        else:
            c += 1
    return c
```

### Strong version

```python
from collections import deque


def count_dropped_requests(timestamps: list[int], limit: int, window: int) -> int:
    """Return how many requests a sliding-window rate limiter drops.

    A request at time t is accepted if fewer than `limit` requests were
    accepted in the window (t - window, t]. Timestamps arrive sorted.
    Time O(n): each timestamp enters and leaves the deque at most once.
    Space O(min(n, limit)): the deque never holds more than `limit` items.
    """
    if limit <= 0:
        return len(timestamps)  # nothing can ever be accepted

    accepted = deque()  # times of accepted requests still inside the window
    dropped = 0
    for t in timestamps:
        while accepted and accepted[0] <= t - window:
            accepted.popleft()  # expired: fell out of (t - window, t]
        if len(accepted) < limit:
            accepted.append(t)
        else:
            dropped += 1
    return dropped
```

### What we measured

Both versions were run on Python 3.14 (timings from one laptop):

| Check | Weak | Strong |
|---|---|---|
| Example input, first call | 3 (correct) | 3 (correct) |
| Same input, second call in the same run | 5 (wrong: `res` kept the first call's data) | 3 |
| Extra lines printed to stdout on the example | 6 | 0 |
| 20,000 timestamps with a large limit | about 4 seconds | under 1 millisecond |
| 2,000 random small inputs, fresh state each time | Matches strong | Matches weak |

The weak version passes the samples. It fails hidden tests three ways: on time (quadratic), on output (debug prints on an exact-match grader), and on state (the global list survives between calls).

### What changed and why it matters

| Change | Weak | Strong | Why a reviewer cares |
|---|---|---|---|
| Names | `a`, `k`, `w`, `c`, `cnt`, `res` | `timestamps`, `limit`, `window`, `dropped`, `accepted` | The reader understands each line without decoding |
| State | Module-level `res` | Local `accepted` | No leaks between test calls |
| Algorithm | Recounts every accepted request, O(n^2) | Sliding window over a deque, O(n) | Matches n up to 2 x 10^5 |
| Edge cases | `limit <= 0` handled by luck | Explicit early return with a reason | Shows you thought about it |
| Window boundary | `a[i] - j < w`, meaning unexplained | `<= t - window` with the interval written in the docstring | Off-by-one is the bug reviewers look for first |
| Output | `print(cnt)` left in | No prints | Exact-match graders compare stdout |
| Complexity | Not stated | Time and space in the docstring, with the reason | The reviewer does not have to derive it |

## Side by side: Java

Same problem. Java adds two traps: shared `static` state and integer overflow.

### Weak version

```java
import java.util.*;

public class Weak {
    static List<Integer> l = new ArrayList<>();

    public static int solve(int[] a, int k, int w) {
        int c = 0;
        for (int i = 0; i < a.length; i++) {
            int cnt = 0;
            for (int j = 0; j < l.size(); j++) if (a[i] - l.get(j) < w) cnt++;
            System.out.println(cnt);
            if (cnt < k) l.add(a[i]); else c++;
        }
        return c;
    }
}
```

### Strong version

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class RateLimiter {

    /**
     * Returns how many requests a sliding-window rate limiter drops.
     * A request at time t is accepted if fewer than {@code limit} requests
     * were accepted in the window (t - window, t]. Timestamps arrive sorted.
     * Time O(n): each timestamp enters and leaves the deque at most once.
     * Space O(min(n, limit)): the deque never holds more than limit items.
     */
    public static int countDroppedRequests(long[] timestamps, int limit, long window) {
        if (limit <= 0) {
            return timestamps.length; // nothing can ever be accepted
        }
        Deque<Long> accepted = new ArrayDeque<>(); // accepted times still inside the window
        int dropped = 0;
        for (long t : timestamps) {
            while (!accepted.isEmpty() && accepted.peekFirst() <= t - window) {
                accepted.pollFirst(); // expired: fell out of (t - window, t]
            }
            if (accepted.size() < limit) {
                accepted.addLast(t);
            } else {
                dropped++;
            }
        }
        return dropped;
    }
}
```

Compiled and run on Java 21: the strong version passes all checks, including timestamps above 4 x 10^9. The weak version returns 3 on the first call and 5 on the second, because the `static` list keeps old data.

| Java-specific point | Weak | Strong |
|---|---|---|
| Shared state | `static List<Integer> l` survives between calls | Local `Deque` |
| Overflow | `int` timestamps break once values pass about 2.1 x 10^9 (millisecond times do) | `long` timestamps and window |
| Queue type | `ArrayList` scanned in full every time | `ArrayDeque`: O(1) at both ends |
| Braces | One-line `if` and `else` on a single line | Braces on every block: easier to read and to extend |
| Imports | `java.util.*` | The two classes used |
| Debug | `System.out.println` | None. Use `System.err` while testing, then delete |

Java and C++ have one more classic: `int mid = (low + high) / 2` overflows for large indexes. Write `low + (high - low) / 2` by habit ([Google Research](https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/)).

## Progressive tasks: structure that survives level 4

CodeSignal ICA-style tasks (Airbnb, Anthropic, Coinbase, eBay, some Meta roles) grow one codebase across 4 levels. Level 1 code that is hard to extend costs you the minutes you need for level 3. A typical level 1 and 2 spec, written for this page:

```text
Level 1: create_account(timestamp, account_id) -> bool          (False if it already exists)
         deposit(timestamp, account_id, amount) -> int | None    (new balance, None if no account)
         transfer(timestamp, source_id, target_id, amount) -> int | None
             (source balance after; None if either account is missing, if source == target,
              or if the source has too little money)
Level 2: top_spenders(timestamp, n) -> list[str]
             ("id(total_sent)" for the n accounts that sent the most; ties by account id)
```

### Weak level 1 and 2

```python
accounts = {}


class Bank:
    def create_account(self, ts, id):
        if id in accounts: return False
        accounts[id] = [0, 0]
        return True

    def deposit(self, ts, id, amt):
        if id not in accounts: return None
        accounts[id][0] += amt
        return accounts[id][0]

    def transfer(self, ts, a, b, amt):
        if a not in accounts or b not in accounts: return None
        if accounts[a][0] < amt: return None
        accounts[a][0] -= amt
        accounts[b][0] += amt
        accounts[a][1] += amt
        return accounts[a][0]

    def top_spenders(self, ts, n):
        l = sorted(accounts.items(), key=lambda x: -x[1][1])
        return [k + "(" + str(v[1]) + ")" for k, v in l][:n]
```

### Strong level 1 and 2

```python
from dataclasses import dataclass


@dataclass
class Account:
    balance: int = 0
    outgoing: int = 0  # total sent by transfers; ranks top_spenders


class Bank:
    def __init__(self) -> None:
        self._accounts: dict[str, Account] = {}

    def create_account(self, timestamp: int, account_id: str) -> bool:
        if account_id in self._accounts:
            return False
        self._accounts[account_id] = Account()
        return True

    def deposit(self, timestamp: int, account_id: str, amount: int) -> int | None:
        account = self._accounts.get(account_id)
        if account is None:
            return None
        account.balance += amount
        return account.balance

    def transfer(self, timestamp: int, source_id: str, target_id: str, amount: int) -> int | None:
        if source_id == target_id:
            return None  # the spec forbids transfers to the same account
        source = self._accounts.get(source_id)
        target = self._accounts.get(target_id)
        if source is None or target is None or source.balance < amount:
            return None
        source.balance -= amount
        source.outgoing += amount
        target.balance += amount
        return source.balance

    def top_spenders(self, timestamp: int, n: int) -> list[str]:
        # Highest outgoing first, ties broken by account id (as the spec asks).
        ranked = sorted(self._accounts.items(), key=lambda item: (-item[1].outgoing, item[0]))
        return [f"{account_id}({account.outgoing})" for account_id, account in ranked[:n]]
```

We ran this 11-call scenario on both versions (Python 3.14):

```text
create_account(1, "bob")  create_account(2, "amy")  create_account(3, "bob")
deposit(4, "bob", 100)    deposit(5, "amy", 50)     deposit(6, "zed", 10)
transfer(7, "bob", "amy", 30)    transfer(8, "amy", "bob", 30)
transfer(9, "amy", "amy", 10)    transfer(10, "amy", "bob", 500)
top_spenders(11, 2)       expected: ["amy(30)", "bob(30)"]
```

| Run | Strong | Weak |
|---|---|---|
| First `Bank()` | 11 of 11 correct | 9 of 11. It accepted the same-account transfer (call 9) and counted it as spending, so call 11 returned `amy(40)` |
| Second `Bank()` in the same process | 11 of 11 correct | 3 of 11. The module-level `accounts` dictionary kept the first run's data, so `create_account` returned `False` and balances doubled |
| Without call 9 | `["amy(30)", "bob(30)"]` | `["bob(30)", "amy(30)"]`: creation order, because the sort has no tie-break |

Test harnesses often create a new object per test. That is where shared state fails hidden tests.

Why the strong version is faster at level 3:

1. Level 3 usually adds time-based behavior, such as scheduled payments. In the strong version, you add one private method (for example `_process_due(timestamp)`) and call it at the top of each public method. In the weak version, you edit every `[0]` and `[1]` and hope you remember which is which.
2. A new field (cashback, account history) is one line in `Account`. In the weak version, it is a third list index.
3. `self._accounts.get(...)` with one `None` check replaces repeated `in` checks, so every method handles missing accounts the same way.

Practice the pattern on free LeetCode design problems: [Simple Bank System](https://leetcode.com/problems/simple-bank-system/), [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/), [Design Underground System](https://leetcode.com/problems/design-underground-system/), [Snapshot Array](https://leetcode.com/problems/snapshot-array/), [Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/). Then do the full [mock ICA](https://github.com/PaulLockett/CodeSignal_Practice_Industry_Coding_Framework) in 90 minutes.

## Comments and complexity notes

Use one header comment and a few "why" comments. Copy these shapes:

```python
# Approach: sliding window; a deque holds accepted times inside (t - window, t].
# Time O(n), space O(min(n, limit)). Assumes timestamps are sorted (per constraints).
```

```java
// Approach: sort by start, then merge overlapping intervals in one pass.
// Time O(n log n) for the sort, space O(n) for the output.
```

| Weak comment | Strong comment |
|---|---|
| `# loop through array` | No comment needed: the loop says that |
| `# increment i` | No comment needed |
| `# fix` | `# start at 1: index 0 is the sentinel added above` |
| `# old version` above 20 commented-out lines | Delete the old version once the new one passes |
| None at all on a tricky boundary | `# <= because the window (t - window, t] excludes its left edge` |

Google's code review guide says comments should explain why code exists, and warns against solving problems you only guess you might have later ([Google eng-practices: what reviewers look for](https://google.github.io/eng-practices/review/reviewer/looking-for.html)). In a 20-line OA function, that means no extra classes, factories or config. In a progressive task, it means classes where the spec has entities.

## What reviewers and detection tools look for

| Signal | Platform | What it means for you |
|---|---|---|
| Similarity to other submissions | HackerRank MOSS is on by default and tokenizes code, so renaming variables does not hide copying. High = 90%+ similar ([MOSS](https://support.hackerrank.com/articles/2106056073-plagiarism-detection-using-moss-(measure-of-software-similarity))). CodeSignal compares solutions too | Write your own solution from your own outline |
| Paste events | HackerRank records pastes and shows them in reports. CodeSignal scores paste size, count and timing after inactivity ([Suspicion Score](https://support.codesignal.com/hc/en-us/articles/16957476906135-Using-Suspicion-Score)) | Type your code, templates included |
| Copied problem text | CodeSignal flags "Description Copy" events | Read on screen; do not copy the statement into the editor |
| Writing pattern and time taken | HackerRank's AI model uses code-writing patterns, time taken, pastes and tab switches. Proctor Mode flags type-and-delete patterns ([Proctor Mode](https://support.hackerrank.com/articles/5663779659-proctor-mode)) | Normal edits and deletions are fine. A full solution appearing in one burst is not normal |
| Line-by-line, top-down code | Karat interviewers flag code written in an unusual "top-down or line-by-line manner" ([Karat FAQ](https://karat.com/customer-faq)) | Build in steps: signature, plan comment, brute force, run, refine |
| Keystroke replay | HackerRank reviewers can replay your session | Your replay should show the steps above |
| AI chat transcript | HackerRank and CodeSignal show it to the employer when an assistant is enabled. Karat's published rubric for AI-allowed rounds scores "Recognizing when AI output is incomplete, incorrect, or misleading" and "Running or testing generated code" ([Karat rubrics](https://karat.com/resource/human-ai-technical-interview-rubrics/)) | Ask focused questions. Never paste the whole problem in and ask for the answer. Test what it gives you |
| Tab and focus changes | HackerRank logs how often and how long you leave | Stay in the window |

HackerRank itself recommends that companies have a person review flags "so a false positive doesn't disqualify an honest candidate" ([HackerRank](https://www.hackerrank.com/blog/how-plagiarism-detection-works-at-hackerrank/)). Write in a way that makes that review easy: a plan comment, sensible names, visible steps.

### Prompts a reviewer would rather see

When an AI assistant is allowed, the transcript is part of what they read. Contrast:

```text
Weak:   "Solve this problem: [entire problem statement pasted]"
Weak:   "fix my code"

Strong: "Where is the DELETE /movies/{id} route handled in this project?"
Strong: "What does this Spring error mean: 'No qualifying bean of type MovieRepository'?"
Strong: "Is there a built-in way in Django REST framework to return a 404 when an object is missing?"
```

Then check what it says. Run the tests after every change.

## Five-minute pre-submit review

Run this on every question before the final submit.

- [ ] Every path returns the right type (no missing return, no `None` where an int is expected).
- [ ] No debug prints to stdout. Debug lines go to stderr, and are deleted now.
- [ ] No module-level or `static` mutable state.
- [ ] Names describe values. No single letters except loop indexes and well-known math (`n`, `i`, `j`).
- [ ] A one-line approach and complexity comment at the top.
- [ ] Edge cases inside the constraints are handled: empty, one element, duplicates, largest values.
- [ ] Sums and products use 64-bit integers in Java and C++.
- [ ] The function signature is unchanged from the stub.
- [ ] Python: no mutable default arguments (`def f(seen=[])`), no grids built as `[[0] * m] * n`, no recursion deeper than about 1,000 calls ([Python FAQ](https://docs.python.org/3/faq/programming.html)).
- [ ] Dead code is gone: old commented-out versions, unused helpers, unused imports.
- [ ] It compiles in the language selected in the dropdown.

## Build the habit before the OA

1. After every practice problem for 2 weeks, run the checklist above before you look at the editorial.
2. Once a day, rewrite one old accepted solution with better names and a complexity comment. It takes 5 minutes.
3. Read Google's [what reviewers look for](https://google.github.io/eng-practices/review/reviewer/looking-for.html) once. In Python, skim [PEP 8](https://peps.python.org/pep-0008/) for naming.
4. Learn your language's idioms so clean code is also short code. In Python: `enumerate`, `zip`, `Counter`, `defaultdict`, `deque`, `heapq`, `bisect` ([collections docs](https://docs.python.org/3/library/collections.html)). Know their costs: `list.pop(0)` is O(n), `deque.popleft()` is O(1) ([Python TimeComplexity wiki](https://wiki.python.org/moin/TimeComplexity)).
5. Do one mock where someone else reads your code cold and tells you the first thing they could not follow.

## From Jugal's Substack

- [How to Crack FAANG Interviews (Part 1)](https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part): "Production-Grade Code: Interviewers expect clear thought process, edge-case handling (e.g., null checks), and in-place optimizations."
- [How to Land Anthropic's $3,850/Week AI Fellowship in 2026](https://jugaldb.substack.com/p/how-to-land-anthropics-3850week-ai): the 90-minute assessment covers OOP, building small systems and "Extending existing code as requirements evolve", which is the progressive-task skill above.

Next: [Code quality in coding interviews](../coding/code-quality.md)
