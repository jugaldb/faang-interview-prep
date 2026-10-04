# Snap interview guide

Snapchat, Specs and AR; live HackerRank coding at LeetCode medium/hard where speed and running code matter, plus values-based (Kind, Smart, Creative) behavioral scoring. Updated October 2026.

| Snap at a glance | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Software Engineering Intern (Summer @ Snap, 13 weeks), not leveled |
| **New grad level** | L3 (Software Engineer, entry level) |
| **0 to 3 years** | L3 to L4 |
| **Online assessment** | Not consistently reported for SWE interns and new grads in 2025 to 2026 : Most 2025 to 2026 reports start with a live technical screen rather than an async OA. |
| **Coding rounds** | Phone screen 1; onsite 2 to 4 coding rounds (experienced loops report 4). |
| **Behavioral** | Snap values Kind, Smart, Creative, assessed through competency-based interviewing and answered in the S.A.I.L. format (Situation, Action, Impact, Learning) |
| **Timeline** | Extern (secondary): Summer 2027 intern postings expected late Aug to early Sep 2026, priority applications by mid-October, interviews Oct 2026 to Jan 2027, decision 1 to 2 weeks after the final round. LeetCode reports: rejection emails can arrive within 2 hours to 2 days after a screen. No official Snap timeline page found. |
| **New grad pay** | Levels.fyi (Oct 4, 2026, US): L3 Software Engineer (entry) median total comp $194K/yr (base $138K, stock $54.5K/yr, bonus $1.9K), range $180K to $218K+; L4 median $374K. Intern pay: Extern reports $50 to $68/hr plus housing stipend (secondary, not from a Snap posting). |
| **Official links** | [Careers](https://careers.snap.com/), [Students](https://careers.snap.com/internships), [Official interview prep](https://careers.snap.com/how-we-interview), [Values](https://careers.snap.com/how-we-interview) |

## Interview process

### New grad

1. **Application.** The old Emerging Talent URL now redirects to careers.snap.com/internships, which covers Summer @ Snap only (no new grad section as of Oct 4, 2026); its 'Explore Open Roles' button goes to Snap's RippleMatch page. Snap's own job feed (careers.snap.com/api/jobs, 193 roles on Oct 4, 2026) had no SWE new grad posting and one intern role (Verification Engineer Intern, Eindhoven). Watch RippleMatch and careers.snap.com/jobs.
2. **Recruiter call.** Recruiter call (interviewing.io lists it as 1 hour): background, motivation, and product familiarity; recruiters may ask about your use of the app. Snap's own page says you do not need to be a Snapchat user.
3. **Technical phone screen.** About 60 minutes of live DSA, usually on HackerRank, often after 10 to 15 minutes of background talk. Expect one medium/hard problem worded in product terms (graphs, grids, binary search on answer) and to run your code.
4. **Virtual onsite.** Several back-to-back coding rounds with emphasis on speed and correctness (interviewing.io: four algorithm interviews in experienced loops), plus behavioral questions scored against Kind, Smart, Creative using the S.A.I.L. format. A Mar 2026 SWE onsite report had three coding rounds (count timestamp events in a window; double-sided cards to form a string plus merge N sorted lists; an ambiguous third problem) and a news aggregator system design round. System design is reported for experienced loops; new grad inclusion is unconfirmed.
5. **Decision.** Interviewers include trained 'Deciders' (interviewing.io compares them to Amazon Bar Raisers) who score against Snap's values. interviewing.io says team matching starts after you accept the offer.

### Intern

1. **Application.** Apply via RippleMatch from careers.snap.com/emerging-talent as soon as roles open (Extern expects late Aug to early Sep postings, priority by mid-October). Summer @ Snap is 13 weeks across engineering, advanced technology and Specs teams.
2. **Recruiter screen.** 20 to 30 minutes (Extern, unverified).
3. **Technical screens.** 1 to 2 live coding rounds of 45 to 60 minutes (Extern says CoderPad; candidate reports for other Snap roles say HackerRank). Values questions may be mixed in.
4. **Final round and decision.** Extern describes a final multi-round session with coding and behavioral and a decision within 1 to 2 weeks; this is secondary and unconfirmed by Snap.

### With 1 to 3 years of experience

Mid and senior SWE: recruiter call, 1-hour HackerRank phone screen, then an onsite of about 6 hours: four coding rounds, one system design round tied to product features (chat, stories, metrics, news aggregator, ad server), and a non-evaluative hiring manager Q&A (interviewing.io). Staff phone screens can be math or implementation heavy (implement sin(x) with a Taylor series). Down-leveling after the screen is reported (Oct 2025 staff screen: passed to onsite but down-leveled). An Aug 2026 senior phone screen opened with behavioral questions before an LRU cache problem with a thread-safety follow-up. ML Engineer loops mix ML fundamentals (activations, loss, metrics) with a 20 to 25 minute coding problem.

## Online assessment

- **Platform:** Not consistently reported for SWE interns and new grads in 2025 to 2026
- **Format:** Most 2025 to 2026 reports start with a live technical screen rather than an async OA.
- **Notes:** Do not assume a CodeSignal or HackerRank OA; ask your recruiter. Live screens are reported on HackerRank.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Phone screen 1; onsite 2 to 4 coding rounds (experienced loops report 4).
- **Style:** LeetCode medium to hard, product-flavored wording, speed matters. Reported: graph components, binary search on answer, BFS on grids, union-find, prefix sums, heaps, tries.
- **Environment:** HackerRank live coding over video; camera must stay on; no external resources or AI unless explicitly allowed (official).
- **Graded on:** Correct, running code within the time, asking clarifying questions about inputs, complexity analysis, and values signals (Kind, Smart, Creative) observed across rounds.
- **Reported focus topics:** Graphs: connected components, union-find, BFS on grids, Binary search on the answer, Heaps and k-way merge, Prefix sums and 2D subarray sums, Monotonic stack (subarray min/max sums), Hash maps and string matching, Product system design for experienced roles (stories, metrics, feeds, chat)

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **8** distinct problems tagged to Snap in the last 6 months (3 in the last 30 days, 3 in the last 3 months, 86 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 62%, Hard 38%

**Most tagged topics (share of problems):** Array 75%, Heap (Priority Queue) 38%, Binary Search 38%, Greedy 25%, Sorting 25%, Prefix Sum 25%, Linked List 25%, Divide and Conquer 25%, Hash Table 25%, Design 25%

> **Watch out:** Snap has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | 30 days | Array, Two Pointers, Greedy, Sorting |
| 2 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | 30 days | Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort |
| 3 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Hard | 30 days | Array, Binary Search, Dynamic Programming, Greedy |
| 4 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 5 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 6 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Sorting |
| 7 | [Escape the Spreading Fire](https://leetcode.com/problems/escape-the-spreading-fire/) | Hard | 6 months | Array, Binary Search, Breadth-First Search, Matrix |
| 8 | [Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) | Medium | 6 months | Array, Binary Search, Design, Queue |

### Signature problems

Problems where Snap accounts for a large share of all recent tags across companies. These are the most Snap-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Escape the Spreading Fire](https://leetcode.com/problems/escape-the-spreading-fire/) | Hard | 6 months | Array, Binary Search, Breadth-First Search, Matrix |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Nearest k restaurants from a start cell in a grid with walls (BFS), live on HackerRank | Software Engineer (live coding screen) | 2026-04 | [post](https://leetcode.com/discuss/post/7782615/snap-inc-coding-interview-by-sri_vaeshna-7z44/) |
| [Seat k people in rooms of given sizes to maximize the minimum distance (binary search on answer; rooms separate in one report, back-to-back in another)](https://leetcode.com/problems/magnetic-force-between-two-balls/) | Phone screen | 2025-10 | [post](https://leetcode.com/discuss/post/7291488/snap-inc-phone-screen-by-anonymous_user-gx23/) |
| [Same rooms problem with rooms back-to-back as one continuous row of seats](https://leetcode.com/problems/magnetic-force-between-two-balls/) | Interview (round not stated) | 2025-11 | [post](https://leetcode.com/discuss/post/7321324/snapchat-by-anonymous_user-td07/) |
| [Count pairs of people who do not like each other (Count Unreachable Pairs of Nodes)](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) | SWE phone screen | 2025-04 | [post](https://leetcode.com/discuss/post/6693501/snapchat-phone-screen-by-anonymous_user-jhj1/) |
| [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Software Engineer (phone screen) | 2026-08 | [post](https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-two-bugs-no-time-and-a-rejection) |
| Count events inside a time window (HH:MM:SS, sort plus binary search) | Software Engineer (onsite coding) | 2026-03 | [post](https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-failed-on-the-onsites-third-round) |
| Form a target string from double-sided cards (bipartite matching) | Software Engineer (onsite coding) | 2026-03 | [post](https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-failed-on-the-onsites-third-round) |
| [Merge N sorted lists with a min-heap](https://leetcode.com/problems/merge-k-sorted-lists/) | Software Engineer (onsite coding) | 2026-03 | [post](https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-failed-on-the-onsites-third-round) |
| [Image region with target sum in a 2D array](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) | L5 phone screen | 2025-01 | [post](https://leetcode.com/discuss/post/6312888/snap-phone-screen-l5-reject-by-anonymous-ts8v/) |
| Implement sin(x) via Taylor series (termination and precision) | Staff SWE phone screen | 2025-10 | [post](https://leetcode.com/discuss/post/7272258/snapusstaff-swe-phone-screen-interview-b-3obs/) |
| [Do two sentences mean the same given synonym groups](https://leetcode.com/problems/sentence-similarity-ii/) | ML Engineer coding | 2025-02 | [post](https://leetcode.com/discuss/post/6411204/snap-coding-questions-mle-role-by-anonym-7zrl/) |
| [Probability of being at vertex k after s random steps on a tree](https://leetcode.com/problems/frog-position-after-t-seconds/) | ML Engineer coding | 2025-02 | [post](https://leetcode.com/discuss/post/6411204/snap-coding-questions-mle-role-by-anonym-7zrl/) |
| [Sum of the max element over all contiguous subarrays (mirror of Sum of Subarray Minimums, monotonic stack)](https://leetcode.com/problems/sum-of-subarray-minimums/) | L5 MLE phone screen | 2025-05 | [post](https://leetcode.com/discuss/post/6764645/snap-l5-mle-phone-screen-by-anonymous_us-3mfi/) |
| Design a metrics system | Software Engineer (onsite system design) | 2026-08 | [post](https://prachub.com/interview-questions/design-a-metrics-system) |
| Design an Instagram Stories feature | Software Engineer (technical screen, system design) | 2026-02 | [post](https://prachub.com/interview-questions/design-an-instagram-stories-feature) |
| Design a news aggregator where sources have no RSS, so you poll source APIs | Software Engineer (onsite system design) | 2026-03 | [post](https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-failed-on-the-onsites-third-round) |
| [Design and implement a thread-safe LRU cache](https://leetcode.com/problems/lru-cache/) | Senior Software Engineer (technical screen) | 2026-08 | [post](https://prachub.com/interview-experiences/snapchat-senior-software-engineer-interview-experience-lru-cache-and-thread-safety) |

## Beyond LeetCode

Mostly LeetCode-style. Staff and some senior screens include numeric implementation (Taylor series sin(x)); ML roles add ML fundamentals Q&A and ML system design; C++ roles have reported language internals (smart pointers, map vs unordered_map) in older reports.

## System design

Reported in experienced SWE onsites (1 hour): design a metrics system, an Instagram Stories-style feature, a news aggregator, chat or photo sharing. ML new grad loops have reported ML system design (product tagging pipeline). For SWE new grads it is unconfirmed; prepare basic product design anyway.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Snap values Kind, Smart, Creative, assessed through competency-based interviewing and answered in the S.A.I.L. format (Situation, Action, Impact, Learning) ([official page](https://careers.snap.com/how-we-interview))

**What they look for:**

- Kind: courage, empathy, instills trust
- Smart: action oriented, decision quality, strategic mind
- Creative: manages ambiguity, cultivates innovation, insatiable learning
- Craft competencies for the role, shown through past behavior or live skill demos
- A Learning step at the end of every story (the L in S.A.I.L.)
- Genuine interest in Snap products (checked at recruiter stage per interviewing.io)

**Questions to prepare:**

- Why Snap? (recruiter stage, product familiarity)
- Walk me through your background and recent backend or ML work (asked before a 2026 coding screen)
- Tell me about your favorite project and the hardest technical problem in it
- Short past-behavior stories at the start of a technical screen (an Aug 2026 senior phone screen opened with behavioral questions; the candidate heard answer quality carries weight)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice finishing a medium in 25 to 30 minutes with running code; reports stress speed and candidates who fixed bugs late were rejected.
- Ask clarifying questions about input shape and whether every node appears in an edge before you code (a 2025 reject came from skipped clarifications plus an arithmetic slip).
- Learn binary search on the answer: the rooms and seats problem appeared twice in late 2025.
- Rehearse on HackerRank's editor so running and debugging there feels normal.
- Prepare 6 to 8 stories in S.A.I.L. form and always end with what you learned.
- Expect behavioral questions inside technical screens too; Snap scores values in every interview rather than in one dedicated behavioral round (interviewing.io).
- Map stories to Kind (trust, empathy), Smart (decisions under ambiguity) and Creative (new ideas, learning).
- Keep your camera on and do not use AI or notes unless the interviewer allows it (official policy).
- Use Snapchat and Spectacles before the recruiter call so you can talk about the product.

## 4-week plan for Snap

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Snap values Kind, Smart, Creative, assessed through competency-based interviewing and answered in the S.A.I.L. format (Situation, Action, Impact, Learning) round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://careers.snap.com/>
- <https://careers.snap.com/internships>
- <https://careers.snap.com/how-we-interview>
- <https://app.ripplematch.com/v2/public/company/snap-inc>
- <https://www.levels.fyi/companies/snap/salaries/software-engineer>
- <https://www.levels.fyi/companies/snap/salaries/software-engineer/levels/l3>
- <https://interviewing.io/snap-interview-questions>
- <https://www.extern.com/post/snap-internship-guide>
- <https://prachub.com/companies/snapchat>
- <https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-two-bugs-no-time-and-a-rejection>
- <https://prachub.com/coding-questions/solve-three-algorithmic-tasks>
- <https://prachub.com/interview-questions/design-a-metrics-system>
- <https://prachub.com/interview-questions/design-an-instagram-stories-feature>
- <https://prachub.com/interview-questions/design-a-news-aggregator>
- <https://prachub.com/interview-questions/design-and-implement-a-thread-safe-lru-cache>
- <https://leetcode.com/discuss/post/7782615/snap-inc-coding-interview-by-sri_vaeshna-7z44/>
- <https://leetcode.com/discuss/post/7291488/snap-inc-phone-screen-by-anonymous_user-gx23/>
- <https://leetcode.com/discuss/post/7321324/snapchat-by-anonymous_user-td07/>
- <https://leetcode.com/discuss/post/7272258/snapusstaff-swe-phone-screen-interview-b-3obs/>
- <https://leetcode.com/discuss/post/6693501/snapchat-phone-screen-by-anonymous_user-jhj1/>
- <https://leetcode.com/discuss/post/6312888/snap-phone-screen-l5-reject-by-anonymous-ts8v/>
- <https://leetcode.com/discuss/post/6411204/snap-coding-questions-mle-role-by-anonym-7zrl/>
- <https://leetcode.com/discuss/post/6764645/snap-l5-mle-phone-screen-by-anonymous_us-3mfi/>
- <https://careers.snap.com/api/jobs>
- <https://prachub.com/interview-experiences/snapchat-software-engineer-interview-experience-failed-on-the-onsites-third-round>

> **Watch out:** Sparsest of the four companies for intern and new grad data. Re-verified Oct 4, 2026 (fact-check pass): Snap How We Interview page, careers.snap.com/internships (the emerging-talent URL redirects there), Snap's job feed, Levels.fyi, interviewing.io, Extern and every PracHub page. Corrections made: Snap's value competencies were mis-mapped (Snap lists Smart = Action Oriented, Decision Quality, Strategic Mind; Creative = Manages Ambiguity, Cultivates Innovation, Insatiable Learning); the 'three algorithmic tasks' onsite was a Mar 2026 interview spread across rounds, not an Apr 2026 single session; two PracHub items were Aug 2026, not Sep 2026. LeetCode Discuss URLs confirmed via LeetCode's public GraphQL API (HTML blocks bots). No 2025 to 2026 SWE intern or new grad experience post was found on LeetCode Discuss or PracHub, so new grad and intern stages are inferred from Snap's policy page, experienced-candidate reports and Extern (secondary; its 'SnapFest' final round, CoderPad claim, intern pay and acceptance rate are not confirmed by Snap). interviewing.io says there is no dedicated behavioral round and behavioral evaluation is spread across interviews; Snap's own page describes competency-based questions in S.A.I.L. form. Whether new grads get system design is unconfirmed. Snap's main job feed had no SWE intern or new grad posting on Oct 4, 2026; RippleMatch renders client-side so its role list could not be read.

Next: [All companies](index.md)
