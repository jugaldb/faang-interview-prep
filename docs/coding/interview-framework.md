# The 45-minute coding interview

For anyone with a coding screen or onsite coming up. When you finish, you will have a minute-by-minute plan, the exact lines to say at each step, a routine for getting stuck, and one problem worked end to end.

> **Tip:** Interviewers grade how you reach the answer as well as the answer. The rubric lines behind every step below are on [Code quality](code-quality.md).

## What the interviewer is scoring

Every big tech company publishes roughly the same expectations. Read them once in their own words.

| Company | What they say (verbatim) | Source |
|---|---|---|
| Google | "the interviewer will be looking to see the thought process versus the answer itself. Expect some follow-up questions." | [Google interview tips](https://www.google.com/about/careers/applications/interview-tips/) |
| Meta | Interviews "evaluate the problem-solving, coding, debugging, and collaboration skills that are essential for SWEs at Meta." | [Meta hiring process](https://www.metacareers.com/hiring-process/) |
| Amazon | "Think out loud. Explain your approach before coding, and vocalize your thought process as you proceed." | [Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep) |
| Microsoft | "Ask clarifying questions for any ambiguities and come up with a plan before you implement a solution. Managing your time is important, given the short 45-minute interview round." | [Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) |

Same message four times: clarify, plan out loud, write real code, test it before you say done.

## The time boxes

| Clock | Step | What you do | Move on when |
|---|---|---|---|
| 0:00 to 0:02 | Intro | One line on who you are, one recent project | The interviewer starts the problem |
| 0:02 to 0:06 | Clarify | Restate the problem. Ask about input size, types, edge cases, output | The interviewer confirms your restatement |
| 0:06 to 0:09 | Examples | Work one normal and one tricky example by hand | You both agree on the expected outputs |
| 0:09 to 0:16 | Approach | Brute force with complexity, then optimize, then final complexity | The interviewer says "go ahead" |
| 0:16 to 0:35 | Code | Real, compilable code, top-down, narrating intent | The agreed approach is fully written |
| 0:35 to 0:41 | Test | Read-through, line-by-line trace, edge cases, fix bugs out loud | Example and edge cases pass by hand |
| 0:41 to 0:43 | Complexity | Time and space for the code you actually wrote, one improvement | The interviewer moves on |
| 0:43 to 0:45 | Your questions | One or two specific questions | Time is up |

These boxes are a synthesis of the [Tech Interview Handbook checklist](https://www.techinterviewhandbook.org/coding-interview-cheatsheet/), Gayle McDowell's [7-step sheet](https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf), and [an interviewer with 600+ interviews](https://interviewing.io/blog/ive-conducted-over-600-technical-interviews-on-interviewing-io-here-are-5-common-problem-areas-ive-seen). No company publishes an official minute plan.

Planning time is not wasted time. In interviewing.io data, successful candidates first ran their code later in the session (27% of the way in vs 23.9%) and wrote more functions ([interviewing.io, ~3,000 interviews](https://interviewing.io/blog/we-analyzed-thousands-of-technical-interviews-on-everything-from-language-to-code-style-here-s-what-we-found)).

### Checkpoints when you fall behind

1. At 0:10 with no agreed example: state your assumptions out loud and move on ("I'll assume the input fits in memory and has no nulls").
2. At 0:20 and not coding: code the brute force now. Amazon says "Start with a working solution and enhance as you go" ([Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)).
3. At 0:35 and not finished: say what is left, write it as a clearly named helper stub, and test what exists.
4. At 0:40: stop writing new code. Testing is scored; unfinished polish is not.
5. Unsure of the time: ask. Google says "You're always welcome to do a time check with your interviewer" ([Google interview tips](https://www.google.com/about/careers/applications/interview-tips/)).

### How the clock changes by format

| Format | What is different | Adjust like this | Source |
|---|---|---|---|
| Google screen or onsite | 45 minutes, usually one main problem plus follow-ups, shared doc, code does not run | Keep the plan above. Spend spare minutes on follow-ups | [interviewing.io Google guide](https://interviewing.io/guides/hiring-process/google) |
| Meta screen and standard coding | About two problems in 35 to 40 minutes of coding, execution off | Per problem: 3 min clarify plus example, 3 min approach, 8 to 10 min code, 3 min trace. If problem 1 passes 0:22, name the open bug and ask to move on | [interviewing.io Meta guide](https://interviewing.io/guides/hiring-process/meta-facebook), [companies/meta](../companies/meta.md) |
| Meta AI-enabled round | About 60 minutes, one multi-file problem in phases, AI chat panel, code runs | See [AI-enabled rounds](#ai-enabled-rounds-how-to-run-them) below | [Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding) |
| Amazon onsite round | About 1 hour; commonly about 15 minutes of Leadership Principle questions first, then the technical part | Have 2 stories ready per round. Run the plan in the remaining time | [companies/amazon](../companies/amazon.md), [LPs](../behavioral/amazon-leadership-principles.md) |
| Microsoft | 45 minutes, "a third-party coding tool where you can run and compile your code" | Still trace by hand first, then run | [Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) |
| Intern rounds | Often shorter, one or two problems | See the per-company table | [Intern interviews](../internships/intern-interviews.md) |

## Step by step, with what to say

### Step 1: set the norms (first minute)

1. Give a 30 to 60 second intro: name, school or team, one project, one line on what you build.
2. Tell the interviewer how you will work. Silent thinking is fine once they know it is coming.
3. Ask whether they want production-style code or algorithm focus ([Tech Interview Handbook](https://www.techinterviewhandbook.org/blog/take-control-over-your-coding-interview/)).

```text
"I'll think quietly for a minute, share my notes for your input, then code and explain as I go."
"Do you want production-style code with validation, or should I focus on the algorithm?"
```

The first line is from Ian Douglas's list of common candidate mistakes ([interviewing.io](https://interviewing.io/blog/ive-conducted-over-600-technical-interviews-on-interviewing-io-here-are-5-common-problem-areas-ive-seen)).

### Step 2: clarify (0:02 to 0:06)

1. Restate the problem in one sentence and wait for a yes.
2. Ask about size, because size picks your target complexity.
3. Ask the edge-case questions below. Write the answers as a comment at the top of the editor.
4. At Amazon, expect a deliberately vague prompt: "These questions will most likely have an ambiguous problem statement" ([Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)). Asking is part of the score.

```text
[ ] "Let me restate it: given [input], return [output]. Is that right?"
[ ] "How large can n get? That tells me whether O(n^2) is acceptable."
[ ] "Can values be negative, zero, very large, or floats?"
[ ] "Can the input be empty? Can it have one element? Duplicates?"
[ ] "Is the input sorted? Am I allowed to modify it in place?"
[ ] "What should I return if there is no valid answer?"
[ ] "If there are several valid answers, do you want any one, or a specific one?"
```

### Step 3: examples (0:06 to 0:09)

1. Write one normal example (4 to 6 elements). Small examples hide bugs: "Most examples are too small or are special cases" ([CTCI sheet](https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf)).
2. Write one tricky example that hits the edge you just clarified (negatives, duplicates, empty).
3. Solve both by hand, the way a non-programmer would ([TIH techniques](https://www.techinterviewhandbook.org/coding-interview-techniques/)). Watch what your hand does. That is often the algorithm.

```text
"Let me try a normal case: [3, 4, 7, 2] with target 7 should give [answer]. Does that match?"
"And a tricky one: an empty array should return [answer]."
```

### Step 4: approach (0:09 to 0:16)

1. Say the brute force in one or two sentences with its time and space. Do not code it yet.
2. Find the bottleneck. Use BUD from the [CTCI sheet](https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf): Bottlenecks, Unnecessary work, Duplicated work.
3. Walk the data-structure list until one removes the bottleneck: hash map, set, sorting, two pointers, sliding window, stack, heap, binary search, BFS/DFS, union find, trie ([TIH techniques](https://www.techinterviewhandbook.org/coding-interview-techniques/)). Pattern details: [Patterns](patterns.md).
4. Check the target against the input size. Rough rule from the [USACO Guide](https://usaco.guide/bronze/time-comp) (about 10^8 simple operations per second):

| n up to | Target complexity |
|---|---|
| 20 | O(2^n * n), backtracking or bitmask |
| 400 | O(n^3) |
| 7,500 | O(n^2) |
| 500,000 | O(n log n) |
| 5,000,000 | O(n) |

5. State the final time and space.
6. Get sign-off before typing. Gayle McDowell's sheet says to wait for the interviewer's "sign off" before you write code.

This is the sequence Jugal uses, from his [6-week Amazon roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the):

```text
"The brute force here would be O(n^2): we check every pair."
"That's too slow. What if we use a hash map to track what we've seen?"
"Now it's O(n) time, O(n) space."
"I'd like to code the hash map approach. Does that sound good, or should I explore something else first?"
```

> **Watch out:** Do not hide the brute force because it looks weak. CTCI says to state it "as soon as possible", and the Tech Interview Handbook rubric rewards approaching the problem "systematically and logically" ([rubric](https://www.techinterviewhandbook.org/coding-interview-rubrics/)).

### Step 5: code (0:16 to 0:35)

1. Write real, syntactically correct code. Amazon: "no pseudo code". Microsoft: "Don't use pseudocode."
2. Write top-down. Main function first, calling helpers with clear names. Fill the helpers after.
3. Handle the edge cases you agreed on at the top, with early returns.
4. Narrate intent, not keystrokes. Say why a line exists, not the characters you type.
5. Ask before using a library shortcut that does the core of the problem ([TIH checklist](https://www.techinterviewhandbook.org/coding-interview-cheatsheet/)).
6. Use the names and structure rules on [Code quality](code-quality.md). They cost seconds.

```text
"I'll write the main loop first and call a helper, in_bounds(row, col), which I'll fill in after."
"I'm handling the empty input up front so the loop can assume at least one element."
"Is it OK if I use heapq here instead of writing my own heap?"
"In production I'd validate that k is positive. Here I'll assume valid input unless you want the check."
```

### Step 6: test (0:35 to 0:41)

1. Do not say "done". Microsoft: "don't forget to test it before you say 'done!'" ([Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)).
2. Read the code top to bottom once like a reviewer. Look for off-by-one, `<` vs `<=`, wrong variable, missing return.
3. Trace your normal example line by line with a variable table in a comment block.
4. Run the edge cases in your head: empty, one element, duplicates, negatives, largest size.
5. When you find a bug, say it, fix it, re-trace only the failing case. "Identified and self-corrected bugs in code" is a positive signal ([TIH rubric](https://www.techinterviewhandbook.org/coding-interview-rubrics/)).

The full hand-testing routine with a trace template is on [Code quality: how to test by hand](code-quality.md#how-to-test-by-hand).

```text
"Before I call it done, let me trace the example line by line."
"Edge cases I want to check: empty input, one element, all duplicates, negatives."
"I see a bug: this loop should stop at n - 1, not n. Fixing it and re-tracing that case."
```

### Step 7: complexity and follow-ups (0:41 to 0:43)

1. Restate time and space for the code on the screen, not the code you planned.
2. Name one improvement you would make with more time.
3. Expect a changed constraint. Interviewers now ask more "why" and change constraints to catch memorized answers ([interviewing.io survey, Sep 2025](https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot)).

| Follow-up you will hear | Where to start your answer |
|---|---|
| "What if the input doesn't fit in memory?" | Stream it in chunks, sort externally, or shard by key |
| "What if the data arrives as a stream?" | Keep running state (counts, heap of size k, prefix sums) instead of the full array |
| "What if we call this a million times?" | Precompute once, cache, or build an index |
| "Can you do it with O(1) extra space?" | Sort in place, two pointers, or reuse the input array |
| "What if values can be negative now?" | Check every assumption that relied on positives (sliding window often breaks) |
| "Make it thread-safe" | Name the shared state, then lock it or make it immutable |

```text
"Time is O(n) because each element is visited once. Space is O(n) for the hash map."
"With more time I'd add input validation and unit tests for the empty and all-negative cases."
```

### Step 8: your questions (0:43 to 0:45)

1. Ask one question about their work, not about the outcome of the interview.
2. Keep a list of 5 in your notes and pick by interviewer.

```text
"What does a new grad's first project usually look like on your team?"
"What's something your team changed in how it ships code in the last year?"
"How do you use AI tools day to day on your team?"
```

## Stuck, hints, and bugs

### When you are stuck

1. Buy time honestly: "Give me 30 seconds to think through this." Then think on paper. Jugal's rule from his [Amazon roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the): "The interviewer wants to help you. Let them."
2. Say where you are: what you know, what you tried, why it fails.
3. Run the routine: draw it, solve it by hand, try a smaller input, write the brute force, walk the data-structure list ([TIH techniques](https://www.techinterviewhandbook.org/coding-interview-techniques/)).
4. Reason about the floor: "I have to look at every element once, so O(n) is the best possible" ([Interview Cake](https://www.interviewcake.com/coding-interview-tips)).
5. Ask for help after about 3 to 5 minutes of no progress. One small hint costs less than 10 minutes of silence. "Did not require any major hints" is a rubric line, so take small hints early, not big ones late.

```text
"Give me 30 seconds to think through this."
"I considered [X], but given [constraint Y], [Z] seems better. What do you think?"
"I'm not sure, but I'd guess [thing], because [reason]."
"Here's what I know so far: [facts]. I'm stuck on [specific part]. Am I heading the right way?"
```

### When you get a hint

1. Stop and listen. Do not talk over it.
2. Repeat it back in your own words.
3. Connect it to your example right away.

```text
"That helps. So if I sort first, two pointers can move inward. Let me check on [example]."
```

### When you find a bug, or the interviewer points at a line

1. Thank them, trace the line on a small input, then fix. Do not argue ([TIH checklist](https://www.techinterviewhandbook.org/coding-interview-cheatsheet/)).
2. If you believe the line is right, show it with a trace, calmly.
3. A question like "What happens if the input is [X]?" is a hint. Trace exactly that input.

### Weak vs strong moments

| Moment | Weak | Strong |
|---|---|---|
| Problem read out | Starts typing in 30 seconds | Restates, asks 3 to 5 questions |
| Thinking | Silent for 4 minutes | "Give me 30 seconds", then shares notes |
| Half-thought | "Hmm, maybe a heap... no" | "A heap gives O(n log k), but sorting is simpler at this size, so I'll sort" |
| Approach | Codes the optimal idea without saying it | Brute force, bottleneck, better idea, complexity, sign-off |
| Hint | Talks over it, then ignores it | Repeats it, applies it to the example |
| Finished code | "Done." | "Let me trace it before I call it done." |
| Bug found by interviewer | Defends the line | Traces the input they named, fixes it |

## Worked example: Subarray Sum Equals K

Problem: [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) (Medium). Given an integer array and an integer k, count the contiguous subarrays whose sum equals k. It is a good teaching problem because one clarifying question (negatives) changes the right approach.

### 0:02 to 0:06, clarify

```text
You:  "So I count every contiguous, non-empty subarray whose elements add up to k. Right?"
Them: "Yes."
You:  "How long can the array be?"
Them: "Up to 20,000."
You:  "Can numbers be negative or zero? Can k be zero or negative?"
Them: "All of those."
You:  "Negatives matter: a sliding window can't shrink safely if sums can go down.
       I'll keep that in mind. If nothing matches, I return 0?"
Them: "Yes."
```

### 0:06 to 0:09, examples

| Input | k | Expected | Why |
|---|---|---|---|
| `[1, 2, 3]` | 3 | 2 | `[1, 2]` and `[3]` |
| `[1, -1, 0]` | 0 | 3 | `[1, -1]`, `[0]`, `[1, -1, 0]` |
| `[]` | 0 | 0 | No non-empty subarray |

### 0:09 to 0:16, approach

```text
You: "Brute force: for every start index, extend to every end index with a running sum
      and count when it equals k. O(n^2) time, O(1) space. At n = 20,000 that is about
      200 million steps, too slow.
      Sliding window is out because of negatives: on [1, -1, 0] with k = 0 it misses answers.
      Better: prefix sums. The sum of nums[i..j] is prefix[j+1] - prefix[i].
      So at each position I need to know how many earlier prefixes equal (current prefix - k).
      A hash map from prefix sum to how many times I've seen it answers that in O(1).
      One pass: O(n) time, O(n) space. One detail: I seed the map with {0: 1}
      so a subarray that starts at index 0 is counted. Shall I code it?"
Them: "Go ahead."
```

### 0:16 to 0:30, code

```python
def subarray_sum(nums: list[int], k: int) -> int:
    """Count contiguous subarrays whose sum equals k."""
    prefix_count = {0: 1}  # empty prefix: lets a subarray that starts at index 0 match
    prefix_sum = 0
    matches = 0
    for num in nums:
        prefix_sum += num
        matches += prefix_count.get(prefix_sum - k, 0)
        prefix_count[prefix_sum] = prefix_count.get(prefix_sum, 0) + 1
    return matches
```

Java has the same shape: `HashMap<Integer, Integer>` with `getOrDefault`.

### 0:30 to 0:38, test

Trace `[1, 2, 3]`, k = 3, in a comment block:

```text
step | num | prefix_sum | need = prefix_sum - k | prefix_count before | add | matches
1    | 1   | 1          | -2                    | {0:1}               | 0   | 0
2    | 2   | 3          | 0                     | {0:1, 1:1}          | 1   | 1
3    | 3   | 6          | 3                     | {0:1, 1:1, 3:1}     | 1   | 2   -> returns 2, correct
```

Then the edge cases, out loud:

| Case | Result | Note |
|---|---|---|
| `[]`, k = 0 | 0 | Loop never runs |
| `[5]`, k = 5 | 1 | Matches through the seeded `{0: 1}` |
| `[1]`, k = 0 | 0 | Lookup happens before the insert, so the empty subarray is never counted |
| `[1, -1, 0]`, k = 0 | 3 | Negatives handled, unlike a sliding window (which returns 1 here) |

Two real bugs this trace catches, both checked by running them:

| Bug | Symptom |
|---|---|
| Forgot to seed `{0: 1}` | `[1, 2, 3]`, k = 3 returns 1, missing `[1, 2]` |
| Inserted the current prefix before the lookup | `[1]`, k = 0 returns 1, counting an empty subarray |

### 0:38 to 0:43, complexity and follow-ups

```text
You: "O(n) time: one pass with O(1) map operations on average. O(n) space for the map
      in the worst case, when every prefix sum is different."
Them: "What if every number were positive?"
You: "Then a sliding window works with O(1) extra space, because the sum only grows
      as the window extends and only shrinks as it contracts."
Them: "What if I wanted the subarrays themselves?"
You: "I'd store a list of indices per prefix sum instead of a count.
      Output can be O(n^2) in size, so time becomes proportional to the output."
```

Practice the same idea on its sibling: [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/).

## Virtual interview setup

Most screens, and many loops, are still on video. Official guidance from [Google](https://www.google.com/about/careers/applications/interview-tips/), [Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/virtual-interviewing) and [Amazon](https://amazon.jobs/content/en/how-we-hire/remote-interview), turned into checklists.

### The day before

- [ ] Install the platform's desktop app (Teams, Chime or Zoom, per your invite) and run its audio and video test.
- [ ] Open the editor you will use. If it is CoderPad, practice in the free [CoderPad sandbox](https://app.coderpad.io/sandbox): set font size, turn autocomplete off, pick your language.
- [ ] If Meta sent a practice environment link, spend 30+ minutes in it. Ask for one if it did not come ([Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding)).
- [ ] Confirm the time zone in the invite. Sign any NDA in the candidate portal.
- [ ] Put pen, paper, water, and a charger on the desk. Google: "sometimes it's easier to scribble than type."
- [ ] Quit every AI tool, overlay, and "copilot" app. Google: "AI tools are not permitted to be used during your interviews" ([How we hire](https://www.google.com/about/careers/applications/how-we-hire/)).

### 30 minutes before

- [ ] Quiet, well-lit room. Camera at eye level. Plain background, no blur or virtual background.
- [ ] Wired internet or sit near the router. Close bandwidth-heavy apps.
- [ ] One monitor. Phone on silent, within reach for the recruiter.
- [ ] Recruiter's email and the dial-in number open in a tab.

### During

- [ ] Camera on. Look at the camera when you speak, not off to the side. Interviewers watch for eyes moving sideways as a cheating tell ([CNBC](https://www.cnbc.com/2025/03/09/google-ai-interview-coder-cheat.html)).
- [ ] Share your entire screen if asked. Meta interviewers report requiring full-screen share with filters and blur off ([interviewing.io survey](https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot)).
- [ ] Expect identity checks. Some employers now ask candidates to pan the camera around the room or wave a hand in front of the face ([Allwork.Space, Sep 2026](https://allwork.space/2026/09/employers-are-changing-job-interviews-to-catch-ai-cheating-from-camera-pans-to-hand-wave-tests/)).
- [ ] Hold paper drawings up to the camera (Amazon allows this).
- [ ] Narrate. Long silences feel longer on video.

### If something breaks

1. Leave and rejoin the call.
2. Dial in with the phone number in the invite.
3. Email or call the recruiter. Both Microsoft and Amazon list this order.

### Where you will write code

| Company and round | Editor | Does code run? | Source |
|---|---|---|---|
| Google screen and onsite | Shared Google doc or internal editor; in-person rounds reported on a Google Chromebook with the same doc | No | [interviewing.io Google guide](https://interviewing.io/guides/hiring-process/google), [companies/google](../companies/google.md) |
| Meta screen and standard coding | CoderPad, execution off | No | [interviewing.io Meta guide](https://interviewing.io/guides/hiring-process/meta-facebook) |
| Meta AI-enabled round | CoderPad multi-file project, terminal, tests, AI panel | Yes | [Meta hiring process](https://www.metacareers.com/hiring-process/) |
| Amazon onsite | Shared online editor (LiveCode) over Chime or Zoom; in person: laptop, whiteboard or paper | No | [Amazon SDE II prep](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep), [interviewing.io Amazon guide](https://interviewing.io/guides/hiring-process/amazon) |
| Microsoft | Third-party coding tool | Yes | [Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) |
| Other CoderPad interviews | CoderPad | Interviewer decides | [CoderPad candidate guide](https://coderpad.io/resources/docs/for-candidates/interview-preparation-guide/) |

> **Tip:** If the code will not run, practice with execution off. Amazon recommends "practicing coding outside of an integrated development environment" ([Amazon topics](https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics)).

## In-person and whiteboard rounds

In-person rounds are back for some roles. Google's own page says "We've reintroduced in-person interviews for some roles. In many cases, you'll complete initial interviews virtually before coming onsite" ([Google interview tips](https://www.google.com/about/careers/applications/interview-tips/)). Ask your recruiter which rounds are in person and what you will write on: whiteboard, paper, or a laptop.

### Whiteboard technique

1. Split the board. Left third: constraints, examples, and the plan. Right two-thirds: code.
2. Write the function signature first, top left of the code area.
3. Write smaller than feels natural and leave a blank line between blocks, so you can insert a line later without rewriting.
4. Keep the example on the board. Trace on it with a second color or tick marks.
5. Use full names for the variables that matter (`prefix_count`, `left`, `right`). Short loop indexes are fine.
6. Turn and face the interviewer to explain. Do not talk to the board.
7. Ask before erasing anything the interviewer might still be reading.

### How to practice for it

1. Once a week, solve one problem on paper or a whiteboard in 30 minutes, no IDE. Then type it and run it to see what you got wrong.
2. Do your hand trace on paper too. On a whiteboard there is no undo.
3. Practice one problem in a plain Google Doc for the Google style: no highlighting, no autocomplete.

## What changed in 2025 and 2026

| When | What changed | Source |
|---|---|---|
| Mar 2025 | Amazon says candidates must acknowledge they won't use unauthorized tools during interviews or assessments | [CNBC](https://www.cnbc.com/2025/03/09/google-ai-interview-coder-cheat.html), [TechCrunch](https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/) |
| Jun 2025 | Sundar Pichai: Google will "introduce at least one round of in-person interviews for people just to make sure the fundamentals are there" | [Lex Fridman #471 transcript](https://lexfridman.com/sundar-pichai-transcript/) |
| Jun 2025 | Canva expects candidates to use AI tools in backend, ML and frontend interviews | [Canva engineering blog](https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/) |
| Jul 2025 | Anthropic: live interviews are "all you, no AI assistance unless we indicate otherwise" | [Anthropic candidate AI guidance](https://www.anthropic.com/candidate-ai-guidance) |
| Jul 2025 | Meta tells employees it will let some candidates use AI in coding interviews | [404 Media](https://www.404media.co/meta-is-going-to-let-job-candidates-use-ai-during-coding-tests/) |
| Aug 2025 | WSJ reports Google, Cisco and McKinsey adding in-person steps; one recruiting firm says about 1 in 3 clients now ask for in-person vs about 5% a year earlier | [heise summary](https://www.heise.de/en/news/Cheating-with-AI-US-companies-return-to-face-to-face-interviews-10530833.html) |
| Sep 2025 | Survey of 52 FAANG interviewers: 0 said their company dropped algorithmic questions; 58% changed the kind of questions they ask | [interviewing.io](https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot) |
| Oct 2025 | Meta's AI-enabled coding round goes live on CoderPad, replacing one onsite coding round | [CoderPad blog](https://coderpad.io/blog/hiring-developers/ai-in-the-interview-is-not-cheating-it-is-the-job-according-to-meta/), [Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding) |
| May 2026 | Reported: Google pilots a "code comprehension" round where some junior and mid-level candidates on select US teams may use Gemini. Not on Google's own pages | [Entrepreneur, citing Business Insider](https://www.entrepreneur.com/business-news/google-is-testing-a-new-rule-transform-job-interviews) |
| Sep 2026 | Amazon's Summer 2027 SDE intern posting lists "Experience using AI-assisted development tools" as a basic qualification | [Amazon job posting](https://www.amazon.jobs/en/jobs/10552937/software-development-engineer-intern-summer-2027-usa) |
| As of Oct 2026 | Meta: "Select roles now include an authorized AI assistant within CoderPad" and "Candidates are expected to use this AI assistant." Google: AI tools "are not permitted." Microsoft: no outside assistance "unless explicitly permitted" | [Meta](https://www.metacareers.com/hiring-process/), [Google](https://www.google.com/about/careers/applications/how-we-hire/), [Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips.html) |

What this means for your prep:

1. Keep classic DSA. At least one round stays assistance-free at most companies ([How to Prepare for FAANG AI Engineer Internship Season](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).
2. Explain every line. Interviewers now ask "why" and "what does this line do" to catch copied answers.
3. Add whiteboard and paper reps. Typing fluency does not transfer to a marker.
4. Add code reading. AI rounds and Google's reported pilot hand you code you did not write.
5. Default to no AI. Use it only when the recruiter or interviewer says so, and only the built-in tool. Meta: "No outside AI tools or assistance are authorized."
6. Never run hidden assistants. CoderPad, HackerRank and CodeSignal log pastes, tab switches, and similarity ([CoderPad](https://coderpad.io/use-case/fraud-cheating-detection/), [HackerRank](https://www.hackerrank.com/features/plagiarism-detection), [CodeSignal](https://codesignal.com/cheating-and-fraud/)). The Interview Coder founder's case ended in university discipline ([TechCrunch](https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/)).

### AI-enabled rounds: how to run them

Meta's format, as reported by candidates: about 60 minutes in CoderPad with a file explorer, editor and AI chat; the AI can read the files but you write or paste the code; one extended problem in phases. Meta grades it on problem solving, code quality, verification and communication ([Hello Interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding)). Which levels get it varies by report, so ask your recruiter.

| Phase | Reported time | What to do |
|---|---|---|
| Orientation | About 5 minutes | Read entry point, data models, tests before you prompt anything |
| Bug fix | About 15 to 20 minutes | Find it yourself; some interviewers ask for no AI here |
| Core implementation | About 20 to 30 minutes | Decide the algorithm yourself, prompt for bounded pieces, review every diff |
| Optimization | About 10 to 20 minutes | Larger inputs; explain the complexity change. Candidates who did not finish this phase still got offers |

1. Email the recruiter the questions in the template below.
2. Practice in the real environment: Meta's CoderPad practice link, or [Hello Interview's practice sandbox](https://www.hellointerview.com/learn/ai-coding/overview/how-to-prepare).
3. Name the algorithm before your first prompt. The fastest reported candidate had identified it before coding.
4. Prompt for small, scoped tasks: one function, a test case, "explain this function and list edge cases". Never "solve the problem."
5. Read every suggestion. Accept, edit, or reject it out loud, with the reason ([interviewing.io](https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples)).
6. Run tests after every change. Write your own edge-case tests.
7. Fix one-character bugs by hand. Shopify's VP of engineering marks down candidates who prompt instead ([The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-ai-is-changing-software-engineering)).
8. Practice once with the AI weak or off. Candidates report the in-interview assistant is less helpful than in practice.

```text
Orientation:
"Before I prompt anything, I'll read the code: entry point, data models, tests."
"The data model is [X]. The tests cover [Y]. The bug looks related to [Z]."

Before each prompt:
"My plan is [algorithm] because [reason]. I'll ask the AI for only the [function] for [subtask], then review it."

After each output:
"It generated [summary]. This line does [A]. I disagree with [B] because [reason], so I'm changing it."
"Running the tests before moving on."

When the AI is wrong:
"This answer is wrong because [why]. Faster to write this part myself."

Short on time:
"I won't finish this phase. I'd [approach] because the large input has [property]. Complexity goes from [old] to [new]."
```

Recruiter email, adapted from [Hello Interview's question list](https://www.hellointerview.com/learn/ai-coding/overview/interview-formats):

```text
Hi [Recruiter name],

Thank you for scheduling my [onsite / technical screen] for [Role]. To prepare well, could you confirm a few details?

1. Which rounds allow AI tools, and which do not?
2. For any AI-enabled round: is it in a provided environment (for example CoderPad) or my own IDE with screen share?
3. Is there starter code, or do I build from scratch?
4. Is there a practice environment I can use beforehand?
5. Which rounds are in person, and will I code on a whiteboard, paper, or a laptop?

Thanks,
[Your name]
```

Company detail: [Meta](../companies/meta.md), [Google](../companies/google.md), [Amazon](../companies/amazon.md), [LinkedIn](../companies/linkedin.md), [Anthropic](../companies/anthropic.md), [OpenAI](../companies/openai.md).

## Drill the framework in 2 weeks

1. Day 1: watch [How to: Work at Google, Example Coding/Engineering Interview](https://www.youtube.com/watch?v=XKu_SEDAykw). Pause after each phase and write down the exact phrase the candidate used.
2. Day 2: watch [Google India Engineers in a Mock Coding Interview](https://www.youtube.com/watch?v=21pmwl0hrME) and score the candidate with the rubric on [Code quality](code-quality.md).
3. Days 3 to 7: solve one Medium a day with a 45-minute timer, out loud, following the eight steps. Record audio. Use [How to practice](how-to-practice.md) for problem picking.
4. Days 8 to 10: listen to two recordings. Count silences over 1 minute and every "um". Jugal's advice: "Notice how you went silent for 3 minutes? Never do that again." ([Amazon roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
5. Days 11 to 14: two [mock interviews](mock-interviews.md), one as interviewer and one as candidate.

### Interview-day checklist

- [ ] Phrase bank from this page open on paper, not on screen
- [ ] Restated the problem and got a yes
- [ ] Asked about size, empties, duplicates, negatives, output on no answer
- [ ] Agreed a normal and a tricky example
- [ ] Said brute force with complexity before coding
- [ ] Got sign-off before typing
- [ ] Coded top-down with named helpers
- [ ] Traced an example line by line before saying done
- [ ] Checked empty, one element, duplicates, negatives
- [ ] Stated final time and space for the code written
- [ ] Asked one real question at the end

## Resources

- [Tech Interview Handbook: coding interview checklist](https://www.techinterviewhandbook.org/coding-interview-cheatsheet/): before, during and after steps. How to use it: read it the morning of every interview.
- [Tech Interview Handbook: techniques](https://www.techinterviewhandbook.org/coding-interview-techniques/): what to try when stuck. How to use it: copy the data-structure list into your stuck routine.
- [CodePath UMPIRE](https://guides.codepath.org/compsci/UMPIRE-Interview-Strategy): Understand, Match, Plan, Implement, Review, Evaluate. How to use it: write U-M-P-I-R-E down the margin at the start of each mock.
- [Cracking the Coding Skills sheet (Gayle McDowell)](https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf): one-page 7-step flowchart with BUD. How to use it: keep it beside you for your first 30 practice problems.
- [Interview Cake: coding interview tips](https://www.interviewcake.com/coding-interview-tips): what to say and how to get unstuck (free article, paid course). How to use it: reuse the "I'm not sure, but I'd guess..., because..." phrase.
- [interviewing.io: 5 common problem areas](https://interviewing.io/blog/ive-conducted-over-600-technical-interviews-on-interviewing-io-here-are-5-common-problem-areas-ive-seen): an interviewer's list of mistakes. How to use it: check your recordings against the five.
- [Prepare for Your Google Interview: Coding](https://www.youtube.com/watch?v=6ZZX9iIgFoo): official Google video. How to use it: watch before your first Google screen.
- [How I cleared Amazon Technical Interview (Jugal Bhatt)](https://www.youtube.com/watch?v=8bNRRelp7n0): Jugal's 4-week Amazon plan. How to use it: follow it if Amazon is your first loop.
- [Hello Interview: Meta's AI-enabled coding interview](https://www.hellointerview.com/blog/meta-ai-enabled-coding): the most detailed public write-up of the format. How to use it: read before any Meta onsite.
- [USACO Guide: time complexity](https://usaco.guide/bronze/time-comp): input size to target complexity table. How to use it: check constraints before you choose an approach.
- [interviewing.io: it's OK to postpone](https://interviewing.io/blog/its-ok-to-postpone-your-interviews-if-youre-not-ready): why recruiters usually agree to a later date. How to use it: use the script on [Mock interviews](mock-interviews.md#how-many-mocks-and-when) if you are not ready.

Next: [How interviewers grade your code](code-quality.md)
