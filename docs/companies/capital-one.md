# Capital One interview guide

US bank and card issuer with a large tech org. Known for a 4-question CodeSignal OA and a Power Day: banking-system coding, design, case, behavioral. Updated October 2026.

| Capital One at a glance | |
|---|---|
| **Category** | Finance and quant |
| **Intern level** | Technology Internship Program (TIP) intern, 10 weeks, paid; Early Internship Program for second-year undergrads (McLean, VA) |
| **New grad level** | Associate Software Engineer in the Technology Development Program (TDP, two rotations) |
| **0 to 3 years** | Associate Software Engineer (0 to 1 yrs on Levels.fyi), then Software Engineer (Senior Associate). Senior Software Engineer = Principal Associate. |
| **Online assessment** | CodeSignal : 4 questions, 70 minutes, proctored. Typically 2 easier implementation/simulation questions, 1 matrix or string simulation, 1 harder algorithmic or design problem. |
| **Coding rounds** | 1 coding round in the Power Day (plus the OA). Some experienced loops use a pair programming interview. |
| **Behavioral** | Capital One values: Excellence and Do the Right Thing; behavioral 'Tell me about a time when...' and job fit interviews |
| **Timeline** | Recruiting runs early: the Summer 2027 Master's Data Science internship was posted by Aug 2026 (Ascend), Summer 2027 SWE intern pay entries already appear on Levels.fyi, and new grad OAs were going out in Sept 2026. TIP Power Days were reported for Feb 2026 (Summer 2026). TechPrep (secondary) says most candidates go from application to offer in under a month; techinterview.org says 4 to 6 weeks. interviewing.io lists team matching after the Power Day; TDP associates then rotate across two teams. |
| **New grad pay** | US new grad (Associate Software Engineer): Levels.fyi median total comp $152,430 (typical 0 to 1 yrs, as of Oct 2026). Sept 2026 entries: NYC $152K base + $12,250 bonus = $164,250; McLean $140K to $147K base, $143K to $160,250 TC; Chicago $124.8K to $127K base. No stock at entry level. US SWE interns (Levels.fyi internship data): Summer 2026 $59.13/hr (Plano, Dallas, Chicago) to $71.15/hr (NYC) with $5,000 housing or $8,000 NYC housing; Summer 2027 entries $67.30/hr McLean and $73.08/hr NYC (verified entry). India new grad (Bengaluru, Dec 2025): Rs 26 LPA base, Rs 36.5 LPA first-year total. |
| **Official links** | [Careers](https://www.capitalonecareers.com/), [Students](https://www.capitalonecareers.com/students), [Official interview prep](https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101), [Values](https://www.capitalonecareers.com/culture) |

## Interview process

### New grad

1. **Apply and screening.** Official 4 steps on the full-time and internship program pages: Screening, Assessments, Interviews, Decision (some programs require an online assessment). TDP eligibility (as of Oct 2026): bachelor's degree by August 2027. Max 5 active US applications at once or later ones are auto-declined (official FAQ). The official 'What to expect' interview guide (written for all candidates, not only students) also lists a recruiter phone screen, an hour-long virtual exam for some positions, and a 30-minute hiring manager phone interview.
2. **CodeSignal online assessment.** 4 questions in 70 minutes, consistent across 2025 and 2026 reports (new grad Sept 2026, interns, India associates, senior roles). Mix of easy array/string simulation, matrix command simulation (swap rows/cols, rotate 90), and 1 to 2 harder problems (DP, graph, data structure design). Scores reported out of 600 (some India reports 1200); several candidates with perfect scores were still rejected, so resume screening continues after the OA.
3. **Power Day (virtual final round).** Back-to-back interviews on Zoom; video is required for all virtual interviews (official). 2025 to 2026 reports: (1) coding: progressive OOP banking system (create account, deposit, withdraw/transfer, top-K most active accounts), interviewer focused on correct output; (2) system design: design a banking app or credit card portal (multiple account types, internal/external transfers, ACID, idempotency, data store trade-offs); (3) technical case: given rules tables for virtual credit card numbers, decide valid transactions, debug provided code, then implement new rules; (4) behavioral 'Tell me about a time' questions. Official guide: every candidate does one or two job fit interviews during the Power Day, behavioral interviews are used for most positions, and campus roles typically get a case or mini-case (about 30 minutes).
4. **Decision and TDP.** Recruiter delivers the decision. TDP associates do two positions on two teams (official examples: Card Tech ML platforms, Retail Bank Technology with Java/Snowflake/AWS, Shopping Platforms Tech) using Java/Spring, Python, Go, Swift; Tech College learning platform supports AWS certification.

### Intern

1. **Apply.** Internship eligibility (as of Oct 2026): bachelor's degree by August 2028 (Summer 2027 interns). 10-week paid program. Early Internship Program targets second-year undergrads: 10 weeks (June to August), paid, in person in McLean with corporate housing; the program listed is the Analyst Early Internship Program (no tech-specific early program listed as of Oct 2026). Separate Master's and PhD internship tracks exist (e.g., Master's Data Science Internship, Summer 2027).
2. **CodeSignal OA.** Same 4 questions in 70 minutes format. Jan 2025 Toronto backend intern OA: easy array, easy strings/arrays, medium matrix operations (reverse, rotate 90 counterclockwise, swap rows/cols), medium trie-style prefix matching.
3. **Power Day.** TIP candidates report a final round with a technical interview and a case interview (Jan 2026 post: final round on Feb 11, 2026); the official student page also lists job fit and behavioral interviews. The candidate expected the case interview to involve reading and reasoning about code rather than writing a full solution (not confirmed officially).

### With 1 to 3 years of experience

For 1 to 3+ yrs and senior roles: recruiter screen, hiring manager screen (past experience, tech stack, behavioral), CodeSignal OA (Lead role July 2026: 2 easy arrays, 1 medium string, 1 hard DP similar to LIS; Senior March 2026: Number of Islands, Distribute Elements Into Two Arrays II, a matrix command question, Restore the Array From Adjacent Pairs), then Power Day with coding, system design (recruiter email Oct 2026: system design centered on 'a specific working problem' using Zoom's whiteboard, plus core programming skills, design philosophy, risk factors, coding standards), technical case and behavioral. A Nov 2025 post and a June 2026 Senior SWE report describe a lighter loop for some roles: system design + pair programming interview instead of a full Power Day. A July 2026 Lead SDE says the Power Day was word for word the same as earlier posts: system design, case and behavioral matched a Sept 2025 post, and the coding round matched a Sept 2024 Technical Lead post (operations-driven banking system with CREATE_ACCOUNT, DEPOSIT, TRANSFER, TOP_ACTIVITY).

## Online assessment

- **Platform:** CodeSignal
- **Format:** 4 questions, 70 minutes, proctored. Typically 2 easier implementation/simulation questions, 1 matrix or string simulation, 1 harder algorithmic or design problem.
- **Notes:** Reports from 2025 to 2026 converge on 4 questions / 70 minutes; interviewing.io's older page describes 3 questions in 1.5 hours, which looks outdated. A perfect score does not guarantee a Power Day: an Aug 2025 candidate scored 600/600 and was rejected citing assessment results; in July 2025 a 600/600 candidate had heard nothing while friends at 500 to 600 were rejected; India associate OAs are scored out of 1200. Matrix-command simulation (swap rows, swap columns, reverse, rotate) recurs across intern, new grad and senior OAs. The Power Day coding task is a multi-part banking-system simulation driven by a list of operations (2024 and 2025 posts).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 coding round in the Power Day (plus the OA). Some experienced loops use a pair programming interview.
- **Style:** Practical, implementation-heavy: progressive OOP class design (banking system with accounts, deposits, transfers, top-K activity) and simulation; LeetCode easy to medium patterns. Interviewers have been reported to care most about producing the right output.
- **Environment:** Virtual on Zoom with video on; interviewing.io (older) says you screen-share your preferred environment; a July 2026 candidate said Java input parsing cost time, so pick a concise language.
- **Graded on:** Working, correct code that handles each new requirement; clean OOP structure; communication; edge cases (non-existent accounts, insufficient funds, same-account transfers, tie-breaking).
- **Reported focus topics:** array and string simulation, matrix manipulation (rotate, swap, reverse), hash maps and counting, BFS/DFS on grids, graphs and DAG traversal, heaps / top-K, OOP class design with incremental requirements (banking system), system design of banking and card systems (ACID, idempotency, consistency), reading and debugging business-rule code, STAR behavioral stories

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **22** distinct problems tagged to Capital One in the last 6 months (4 in the last 30 days, 9 in the last 3 months, 65 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 68%, Hard 18%, Easy 14%

**Most tagged topics (share of problems):** Array 82%, String 32%, Simulation 27%, Hash Table 23%, Matrix 18%, Binary Search 14%, Depth-First Search 14%, Binary Indexed Tree 9%, Segment Tree 9%, Ordered Set 9%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Block Placement Queries](https://leetcode.com/problems/block-placement-queries/) | Hard | 30 days | Array, Binary Search, Binary Indexed Tree, Segment Tree |
| 2 | [Minimize Result by Adding Parentheses to Expression](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/) | Medium | 30 days | String, Enumeration |
| 3 | [Design Memory Allocator](https://leetcode.com/problems/design-memory-allocator/) | Medium | 30 days | Array, Hash Table, Design, Simulation |
| 4 | [Simple Bank System](https://leetcode.com/problems/simple-bank-system/) | Medium | 30 days | Array, Hash Table, Design, Simulation |
| 5 | [Text Justification](https://leetcode.com/problems/text-justification/) | Hard | 3 months | Array, String, Simulation |
| 6 | [Find the Length of the Longest Common Prefix](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/) | Medium | 3 months | Array, Hash Table, String, Trie |
| 7 | [Number of Adjacent Elements With the Same Color](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/) | Medium | 3 months | Array |
| 8 | [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) | Easy | 3 months | String, Backtracking, Tree, Depth-First Search |
| 9 | [Alternating Groups II](https://leetcode.com/problems/alternating-groups-ii/) | Medium | 3 months | Array, Sliding Window |
| 10 | [Restore the Array From Adjacent Pairs](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/) | Medium | 6 months | Array, Hash Table, Depth-First Search |
| 11 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | 6 months | Array, Matrix, Simulation |
| 12 | [Candy Crush](https://leetcode.com/problems/candy-crush/) | Medium | 6 months | Array, Two Pointers, Matrix, Simulation |
| 13 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | 6 months | Array, Math, Matrix |
| 14 | [Minimum Absolute Difference Between Elements With Constraint](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/) | Medium | 6 months | Array, Binary Search, Ordered Set |
| 15 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 16 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 6 months | Array, Sorting, Quicksort |
| 17 | [Monotonic Array](https://leetcode.com/problems/monotonic-array/) | Easy | 6 months | Array |
| 18 | [Distribute Elements Into Two Arrays II](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/) | Hard | 6 months | Array, Binary Indexed Tree, Segment Tree, Simulation |
| 19 | [Number of Changing Keys](https://leetcode.com/problems/number-of-changing-keys/) | Easy | 6 months | String |
| 20 | [Number of Pairs of Strings With Concatenation Equal to Target](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/) | Medium | 6 months | Array, Hash Table, String, Counting |
| 21 | [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/) | Hard | 6 months | Array, Binary Search, Greedy, Sorting |
| 22 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | Medium | 6 months | Two Pointers, String, Dynamic Programming |

### Signature problems

Problems where Capital One accounts for a large share of all recent tags across companies. These are the most Capital One-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Block Placement Queries](https://leetcode.com/problems/block-placement-queries/) | Hard | 30 days | Array, Binary Search, Binary Indexed Tree, Segment Tree |
| 2 | [Simple Bank System](https://leetcode.com/problems/simple-bank-system/) | Medium | 30 days | Array, Hash Table, Design, Simulation |
| 3 | [Minimize Result by Adding Parentheses to Expression](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/) | Medium | 30 days | String, Enumeration |
| 4 | [Find the Length of the Longest Common Prefix](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/) | Medium | 3 months | Array, Hash Table, String, Trie |
| 5 | [Number of Adjacent Elements With the Same Color](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/) | Medium | 3 months | Array |
| 6 | [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) | Easy | 3 months | String, Backtracking, Tree, Depth-First Search |
| 7 | [Restore the Array From Adjacent Pairs](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/) | Medium | 6 months | Array, Hash Table, Depth-First Search |
| 8 | [Minimum Absolute Difference Between Elements With Constraint](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/) | Medium | 6 months | Array, Binary Search, Ordered Set |
| 9 | [Monotonic Array](https://leetcode.com/problems/monotonic-array/) | Easy | 6 months | Array |
| 10 | [Distribute Elements Into Two Arrays II](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/) | Hard | 6 months | Array, Binary Indexed Tree, Segment Tree, Simulation |
| 11 | [Number of Changing Keys](https://leetcode.com/problems/number-of-changing-keys/) | Easy | 6 months | String |
| 12 | [Number of Pairs of Strings With Concatenation Equal to Target](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/) | Medium | 6 months | Array, Hash Table, String, Counting |
| 13 | [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/) | Hard | 6 months | Array, Binary Search, Greedy, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| OA: Sort each adjacent pair of the array in place (indices 0 and 1, 2 and 3, ...); if the length is odd leave the last element ((5,4,2,3,7) gives (4,5,2,3,7)) | New Grad SWE OA | 2026-09 | [post](https://leetcode.com/discuss/post/8532231/capitalone-oa-for-new-grad-september-202-9rij/) |
| [OA: Number of Subarrays That Match a Pattern I](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/) | New Grad SWE OA | 2026-09 | [post](https://leetcode.com/discuss/post/8532231/capitalone-oa-for-new-grad-september-202-9rij/) |
| [OA: Brightest Position on Street (LeetCode premium)](https://leetcode.com/problems/brightest-position-on-street/) | New Grad SWE OA | 2026-09 | [post](https://leetcode.com/discuss/post/8532231/capitalone-oa-for-new-grad-september-202-9rij/) |
| OA: Robot on a grid, lasers attack whole rows/columns; max safe cells reachable from start | SWE OA (role not stated) | 2026-06 | [post](https://leetcode.com/discuss/post/8355096/capitalone-oa-by-anonymous_user-g7t7/) |
| OA: Count length-3 substrings whose first and third letters are equal | SWE OA (role not stated) | 2026-02 | [post](https://leetcode.com/discuss/post/7555669/capital-one-oa-interview-experience-by-a-7cff/) |
| OA: Power boosters on a number line, maximum distance travelled to the finish | SWE OA (role not stated) | 2026-02 | [post](https://leetcode.com/discuss/post/7555669/capital-one-oa-interview-experience-by-a-7cff/) |
| OA: Apply matrix commands (swapRows, swapCols, rotate90) to a matrix | SWE OA (role not stated) | 2026-02 | [post](https://leetcode.com/discuss/post/7555669/capital-one-oa-interview-experience-by-a-7cff/) |
| OA: Print any path between endpoints in a directed acyclic graph | SWE OA (role not stated) | 2026-02 | [post](https://leetcode.com/discuss/post/7555669/capital-one-oa-interview-experience-by-a-7cff/) |
| [OA: Number of Islands](https://leetcode.com/problems/number-of-islands/) | Senior SWE OA | 2026-03 | [post](https://leetcode.com/discuss/post/7654380/capital-one-online-assessment-by-anonymo-3e10/) |
| [OA: Distribute Elements Into Two Arrays II](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/) | Senior SWE OA | 2026-03 | [post](https://leetcode.com/discuss/post/7654380/capital-one-online-assessment-by-anonymo-3e10/) |
| [OA: Restore the Array From Adjacent Pairs](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/) | Senior SWE OA | 2026-03 | [post](https://leetcode.com/discuss/post/7654380/capital-one-online-assessment-by-anonymo-3e10/) |
| [OA: Paint slots by queries and count adjacent pairs with the same color after each query](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/) | SWE OA (role not stated) | 2025-05 | [post](https://leetcode.com/discuss/post/6762117/capital-one-oa-may-2025-by-anonymous_use-x81z/) |
| OA: Candy Crush style grid, pop diagonal same-color cells then apply gravity | SWE OA (role not stated) | 2025-05 | [post](https://leetcode.com/discuss/post/6762117/capital-one-oa-may-2025-by-anonymous_use-x81z/) |
| OA: Bird collects sticks alternating right and left until total height reaches 100; return pickup indices | SWE OA (role not stated) | 2025-05 | [post](https://leetcode.com/discuss/post/6762117/capital-one-oa-may-2025-by-anonymous_use-x81z/) |
| OA: Matrix operations (reverse rows/cols, rotate 90 counterclockwise, swap) and trie-style prefix matching | Backend Intern OA, Toronto | 2025-01 | [post](https://leetcode.com/discuss/post/6316874/capital-one-online-assessment-for-backen-nfd9/) |
| Power Day coding: bank class with create account and deposit, then withdrawals and transfers, then topK most active accounts (closest LeetCode practice: 2043 Simple Bank System; the post does not name it) | Power Day (SWE, level not stated) | 2025-09 | [post](https://leetcode.com/discuss/post/7203408/read-this-if-youre-taking-capital-one-po-4miw/) |
| Power Day system design: design a banking app like Capital One (multiple accounts, internal and external transfers, security, ACID, idempotency) | Power Day (SWE, level not stated) | 2025-09 | [post](https://leetcode.com/discuss/post/7203408/read-this-if-youre-taking-capital-one-po-4miw/) |
| Power Day technical case: validate virtual credit card transactions against digit rules, fix buggy rule code, add new rules | Power Day (SWE, level not stated) | 2025-09 | [post](https://leetcode.com/discuss/post/7203408/read-this-if-youre-taking-capital-one-po-4miw/) |
| Power Day repeated word for word from earlier posts (design, case, behavioral as Sept 2025; coding as the 2024 banking system); OA was 2 easy array, 1 medium string, 1 hard DP similar to LIS | Lead Software Engineer, McLean VA | 2026-07 | [post](https://leetcode.com/discuss/post/8429221/lead-sde-capital-one-interview-experienc-pzox/) |
| Power Day (as researched by a candidate): OOP banking system, design a credit card portal, fix provided code, behavioral | Software Engineer Power Day (secondhand summary by a candidate preparing, not a first-hand report) | 2026-02 | [post](https://leetcode.com/discuss/post/7577237/capital-one-power-day-software-engineer-02zch/) |
| [Power Day coding: operations list CREATE_ACCOUNT, DEPOSIT, TRANSFER (fail on missing account, same account, insufficient funds), TOP_ACTIVITY(n) sorted by activity then accountId; reused word for word in a July 2026 Lead SDE loop](https://leetcode.com/problems/simple-bank-system/) | Technical Lead Software Engineer, virtual onsite (Power Day) | 2024-09 | [post](https://leetcode.com/discuss/post/5802074/capital-one-interview-full-virtual-onsit-qqes/) |

## Beyond LeetCode

Technical case study: rules tables for virtual credit card numbers and transaction numbers (digit positions mean Visa vs Mastercard, online-only, amount thresholds), decide which transactions are valid, debug provided rule code in your language, then add new rules (Sept 2025, repeated July 2026). Business case interview for some roles (official: no single right answer, explain reasoning, defend with data, explain in non-technical terms). Progressive OOP banking-system coding. Virtual Job Tryout (VJT) assessment for some roles (official FAQ: 20 to 45 minutes, modules like Work Your Business Case and Describe Your Approach). Data Science Challenge take-home for data roles (official).

## System design

Appears in new grad and experienced Power Days in 2025 to 2026 reports: design a banking app like Capital One or a credit card portal. Expected depth: multiple account types, deposits and internal/external transfers (Zelle, other banks), security, ACID transactions, idempotency, and trade-offs (DynamoDB vs MySQL, CDN, Redis). Senior loops use Zoom's whiteboard on one 'working problem' and ask about risk factors and coding standards. Intern (TIP) reports focus on technical + case instead.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Capital One values: Excellence and Do the Right Thing; behavioral 'Tell me about a time when...' and job fit interviews ([official page](https://www.capitalonecareers.com/culture))

**What they look for:**

- Excellence: raising the bar and chasing the questions that matter most (official culture page)
- Do the Right Thing: positive impact and how you show up for others (official)
- Problem solving and results focus in behavioral answers (official interview page)
- Aptitude for the role, team and Capital One culture in the job fit interview (official)
- Clear, non-technical explanation of your reasoning and defending answers with data in case interviews (official case tips)
- Initiative when interviewers give little guidance (case round reports)

**Questions to prepare:**

- Tell me about a time you changed the status quo. (Power Day, Sept 2025)
- Tell me about a time you accomplished something your team thought was impossible. (Power Day, Sept 2025)
- Tell me about a time you had to alter or enhance a project's development to meet a deadline. (Power Day, Sept 2025)
- Tell me about a time when... (official format for the behavioral interview)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Drill CodeSignal-style speed: 4 problems in 70 minutes means about 10 minutes each for the first two; practice matrix simulation until it is mechanical.
- Build a banking system class in your interview language from scratch (create, deposit, withdraw, transfer, top-K by activity with alphabetical tie-break) and time yourself.
- Use a language with fast input handling; a July 2026 candidate lost time parsing input in Java.
- For system design, prepare one banking design end to end: account types, transfers to external banks, idempotency keys, ACID boundaries, and a database choice you can defend.
- For the technical case, read every rule table carefully and state assumptions out loud; one interviewer only replied that 'the prompt itself should have the answer'.
- Write 3 STAR stories for status quo change, impossible-seeming goals and deadline trade-offs; these exact prompts were reported in 2025.
- Keep at most 5 active US applications (official cap) and target the Master's or PhD tracks if eligible; Ascend notes advanced-degree tracks have much smaller applicant pools.
- Filter postings by the sponsorship statement before applying: the official FAQ says no sponsorship statement means no sponsorship.

## 4-week plan for Capital One

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Capital One values: Excellence and Do the Right Thing; behavioral 'Tell me about a time when...' and job fit interviews round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.capitalonecareers.com/>
- <https://www.capitalonecareers.com/students>
- <https://www.capitalonecareers.com/internship-programs>
- <https://www.capitalonecareers.com/full-time-programs>
- <https://www.capitalonecareers.com/early-internships-program>
- <https://www.capitalonecareers.com/elevate-your-tech-career-with-the-tdp-students-tech>
- <https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101>
- <https://www.capitalonecareers.com/4-tips-to-ace-your-capital-one-case-interview-101-students>
- <https://www.capitalonecareers.com/faq>
- <https://www.capitalonecareers.com/culture>
- <https://www.levels.fyi/companies/capital-one/salaries/software-engineer>
- <https://www.levels.fyi/companies/capital-one/salaries/software-engineer/locations/united-states>
- <https://www.levels.fyi/internships/>
- <https://jugaldb.substack.com/p/494-summer-2027-internships-are-already>
- <https://interviewing.io/capital-one-interview-questions>
- <https://www.techprep.app/blog/capital-one-interview-process>
- <https://www.techinterview.org/companies/capital-one-interview-guide/>
- <https://leetcode.com/discuss/post/8552676/powerday-at-capitalone-by-pallavijoshi02-by03/>
- <https://leetcode.com/discuss/post/8532231/capitalone-oa-for-new-grad-september-202-9rij/>
- <https://leetcode.com/discuss/post/8355096/capitalone-oa-by-anonymous_user-g7t7/>
- <https://leetcode.com/discuss/post/7654380/capital-one-online-assessment-by-anonymo-3e10/>
- <https://leetcode.com/discuss/post/7555669/capital-one-oa-interview-experience-by-a-7cff/>
- <https://leetcode.com/discuss/post/7577237/capital-one-power-day-software-engineer-02zch/>
- <https://leetcode.com/discuss/post/7533380/capital-one-tip-powerday-by-dnickedruv-hd4v/>
- <https://leetcode.com/discuss/post/7427178/capital-one-offer-new-grad26-by-anonymou-r7ra/>

> **Watch out:** All sources fetched 2026-10-04 (LeetCode Discuss via its public GraphQL API; Levels.fyi via page data). Glassdoor and Reddit were not reachable, so most first-hand Power Day detail comes from LeetCode posts; the Sept 2025 Power Day post (7203408) does not state the level, and the July 2026 Lead SDE confirms the same questions at a senior level, so the exact new grad mix (whether system design is always included) may differ. TIP (intern) Power Day content is the least documented: one Jan 2026 post confirms a technical interview and a case interview. Official pages describe interviews only generically (job fit, behavioral, case) and do not mention CodeSignal or coding rounds by name. interviewing.io's page (titled 2024) says the OA is 3 questions in 1.5 hours, which conflicts with 2025 to 2026 candidate reports of 4 questions in 70 minutes; techinterview.org (secondary, looks auto-generated) describes a 60-minute coding phone screen not seen in candidate posts. The 2024 Technical Lead post (5802074) is included only as background for the recurring banking-system question. Reports of a shift from Power Day to pair programming are for experienced roles and are not confirmed for new grads. Fact-check pass 2026-10-04: all URLs re-fetched (official Capital One pages, Levels.fyi page data and internship JSON, all LeetCode posts via GraphQL with slug match, all problem slugs). Corrected: Sept 2026 new grad OA Q1 sorts each pair (it does not swap); the 'Aug 2029 to Aug 2030' early-internship grad window is not on the official page and was removed; the 30-minute HM screen and job fit details come from the general 'What to expect' guide, not the student page; the July 2026 Lead SDE coding round matched the 2024 post, not the Sept 2025 one. Added the 2024 banking-system operations prompt because a July 2026 candidate confirmed it is still used.

Next: [All companies](index.md)
