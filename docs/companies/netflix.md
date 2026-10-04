# Netflix interview guide

Streaming, ads and games at global scale. Small team-run loops: CodeSignal take-home, practical coding, design-heavy rounds, and a strong culture-memo filter. Updated October 2026.

| | |
|---|---|
| **Category** | FAANG |
| **Intern level** | Intern (12-week summer program; US, India, Poland and Japan; bachelor's, master's or PhD students) |
| **New grad level** | L3 (Engineer). Netflix added an explicit engineering ladder in 2024 and launched a formal New Grad Program with it; Simplify calls the entry rung E1/L3. |
| **0 to 3 years** | L3 Engineer for 0 to about 2 yrs; L4 Engineer II for roughly 2 to 5 yrs; L5 Senior Engineer after that. New grad roles are US only. |
| **Online assessment** | CodeSignal (2025 to 2026 student reports; Aced). Official pages call this step a 'take-home assessment'. : Summer 2026 SWE intern: 4 LeetCode-style questions in 70 minutes plus an AI-assisted General Coding Assessment scored separately. ML/AI intern versions lean on ML-flavored tasks. Netflix has not published the format. |
| **Coding rounds** | Intern: 1 coding round plus 1 design round (2 to 3 total). New grad: within 2 rounds total. L4: phone screen plus 1 to 2 coding rounds onsite. |
| **Behavioral** | Netflix Culture Memo: The Dream Team, People over Process, Uncomfortably Exciting, Great and Always Better; values of selflessness, judgment, candor, creativity, courage, inclusion, curiosity and resilience; the keeper test; context not control; highly aligned, loosely coupled; freedom and responsibility. |
| **Timeline** | New grad: postings late September to October; final round to decision can exceed 3 weeks (Mar 2026). Interns: postings mid-August to early September (Summer 2026 posting appeared in early October 2025); OA in October; first interview about a month after the OA; Round 2 within weeks; team matching January to April. Aced reports some candidates finish the full loop in about 3 weeks. Candidates can interview with multiple teams at once (interviewing.io). |
| **New grad pay** | Levels.fyi US software engineer data (page read Oct 4, 2026): L3 about $214K total comp (base $204K, stock $6.8K/yr, bonus $3.3K); L4 about $325K, all base salary; L5 about $507K. Netflix pays mostly cash and lets engineers choose a cash vs stock option mix (Simplify). Simplify reports an official L3 new grad band of $100K to $300K and self-reported offers clustered near $205K base. Europe example: L4 in Warsaw at about 425K PLN total (Mar 2025 report). |
| **Official links** | [Careers](https://jobs.netflix.com/), [Students](https://jobs.netflix.com/careers/new-grads), [Values](https://jobs.netflix.com/culture) |

## Interview process

### New grad

1. **Apply.** Official: new grad roles are typically posted in late September or October, US only, and availability varies by year. Postings say the job is open for no less than 7 days and is removed when filled. After applying, Simplify reports a separate Airtable form sent by email.
2. **Take-home assessment.** Official first step. Netflix has not published the format (Simplify). 2025 to 2026 student reports describe CodeSignal: a timed coding test plus a separate AI-assisted General Coding Assessment.
3. **Recruiter screen.** 30 to 45 minutes, culture-focused (Simplify); Aced says recruiters discuss background, motivation and the culture memo.
4. **Two interview rounds.** Official: two rounds that evaluate technical, role-specific and behavioral skills, with advancement based on feedback at each stage. Expect live coding (CodeSignal or CoderPad) with practical framing plus culture questions; round content varies by team.
5. **Team match and offer.** Decisions come from live post-interview discussions (interviewing.io). A 2026 new grad candidate heard nothing 3 weeks after the final round; recruiters may go quiet during matching.

### Intern

1. **Apply.** Official: internship roles post mid-August to early September, recruiting runs late summer through March, rolling review. The Summer 2026 SWE intern posting (Los Gatos) went up around Oct 6, 2025 with a 'no less than 7 days' window.
2. **Online assessment (CodeSignal).** Oct 2025 reports: 4 LeetCode-style coding questions in 70 minutes, then a separate AI-assisted General Coding Assessment where an AI assistant is available inside CodeSignal. ML/AI intern OAs (2026) are more ML-flavored.
3. **Round 1.** Coding plus behavioral; one candidate waited 30 to 35 days from OA to interview (Dec 2025 thread).
4. **Round 2.** System design, even for SWE interns (Nov 2025 report). Official: about 2 to 3 interview rounds in total.
5. **Team matching.** Can be long: a candidate was in team matching from January to April 2026 with recruiters no longer responding. Official: interns join a 12-week summer program.

### With 1 to 3 years of experience

For L4 (Engineer II): recruiter call(s), a 30 minute hiring manager screen, a 45 to 60 minute technical phone screen (often practical rather than classic LeetCode; a Data Platform recruiter said it would not be typical LeetCode), then a virtual onsite of 4 to 5 rounds (Aced) covering coding, system design, sometimes data modeling, and behavioral. interviewing.io describes senior onsites of roughly 8 interviews, weighted toward system design, plus a 'Dream Team' culture interview with a director. An EMEA L4 loop in Jan 2026 had 3 interviews, and candidates believe Netflix expects every coding question fully implemented.

## Online assessment

- **Platform:** CodeSignal (2025 to 2026 student reports; Aced). Official pages call this step a 'take-home assessment'.
- **Format:** Summer 2026 SWE intern: 4 LeetCode-style questions in 70 minutes plus an AI-assisted General Coding Assessment scored separately. ML/AI intern versions lean on ML-flavored tasks. Netflix has not published the format.
- **Notes:** Students in the Fall 2025 cycle found the AI-assisted part hard to prepare for; reported AI-assisted GCA scores were 534, 554 and 773. Treat the AI assistant as a pair: plan, verify its code, and keep moving.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Intern: 1 coding round plus 1 design round (2 to 3 total). New grad: within 2 rounds total. L4: phone screen plus 1 to 2 coding rounds onsite.
- **Style:** Medium difficulty with a practical, Netflix-flavored twist; some teams avoid LeetCode entirely (interviewing.io). Two-part questions are common: solve, then apply it to a real system. Recent examples: JSON path lookup with wildcards, minimum time for parallel processes to notify N devices (binary search on time), frontend tasks (flatten an object, implement test matchers with currying, async error handling). Netflix-tagged LeetCode leans on caches and scheduling: Cache With Time Limit, Time Based Key-Value Store, LRU Cache, Course Schedule II.
- **Environment:** CodeSignal or CoderPad live coding (Aced); video call. Some system design rounds have no drawing tool, so you explain verbally.
- **Graded on:** Complete, working code; clarifying requirements; trade-offs and complexity; edge cases; responsiveness to hints; candid communication. Decisions are binary pass or fail from a live post-onsite discussion (interviewing.io).
- **Reported focus topics:** Caches with expiry (TTL cache, LRU, time-based key-value store), Binary search on the answer and scheduling problems, Graphs and topological sort (Course Schedule II, Parallel Courses), Parsing and traversing nested data (JSON, objects), Concurrency and async error handling for frontend roles, System design basics even for interns: APIs, data modeling, caching, Netflix-tagged LeetCode, last 6 months (snehasishroy repo, July 2026 snapshot): Cache With Time Limit, Longest Substring Without Repeating Characters, Time Based Key-Value Store, Course Schedule II, Parallel Courses, String to Integer (atoi), Contains Duplicate III, LRU Cache, Culture memo stories: candor, judgment, ownership, dissent

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

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

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Given a JSON-like Map<String, Object>, extract a value by a jq-style path (.contacts.cell), then support '*' wildcard matches | L4 Software Engineer, phone screen | 2025-06 | [post](https://leetcode.com/discuss/post/6821729/netflix-l4-phone-screen-by-hellcat123-ltfw/) |
| [Processes with time(i) per notification work in parallel; minimum time to notify totalDevices (binary search on time)](https://leetcode.com/problems/minimum-time-to-complete-trips/) | Software Engineer screening round, remote | 2026-03 | [post](https://leetcode.com/discuss/post/7654072/interview-question-asked-for-netflix-scr-pnr5/) |
| Write a flatten function that converts a nested object into an array (DFS) | Frontend L4/L5, Poland, online screening | 2025-12 | [post](https://leetcode.com/discuss/post/7421643/netflix-online-screening-round-1-poland-bfsh1/) |
| Implement expect, toBe and greaterThan so expect(add(1,2)).toBe(greaterThan(1)) works (currying) | Frontend L4/L5, Poland, online screening | 2025-12 | [post](https://leetcode.com/discuss/post/7421643/netflix-online-screening-round-1-poland-bfsh1/) |
| showVideosWithLikes(): call getVideos() and getLikes(); show an error if videos fail but still show videos if likes fail (Promise.all vs allSettled) | Frontend L4/L5, Poland, online screening | 2025-12 | [post](https://leetcode.com/discuss/post/7421643/netflix-online-screening-round-1-poland-bfsh1/) |
| OA: 4 LeetCode-style coding questions in 70 minutes, then an AI-assisted General Coding Assessment | SWE intern, Summer 2026 (US) | 2025-10 | [post](https://www.reddit.com/r/csMajors/comments/1o99rz2/codesignal_assessment_with_netflix_tips/) |
| Round 2 for SWE interns was a system design interview (no specific prompt shared) | SWE intern, Summer 2026 (US) | 2025-11 | [post](https://www.reddit.com/r/csMajors/comments/1p9adla/netflix_swe_intern_r2_advice/) |
| Design the data models that let ad operations and business teams traffic direct-sold demand for the ad-supported plan | Senior Software Engineer, data modeling round | 2025-10 | [post](https://leetcode.com/discuss/post/7291543/netflix-data-modeling-round-senior-softw-8j2q/) |

## Beyond LeetCode

CodeSignal AI-assisted coding assessment; practical coding tied to the team's domain (JSON path queries, TTL caches, async UI data fetching with partial failure); data modeling rounds (ad-supported plan trafficking); reverse system design of your own past projects; 'Dream Team' culture interview with a director at senior levels; ML intern OAs with ML-flavored tasks.

## System design

Interns: a dedicated system design round was reported for 2026 SWE interns, so learn APIs, data modeling and caching basics. New grads: format varies by team within two rounds. L4 and above: system design is the heaviest-weighted round; questions are practical and tied to the team's real systems (payment pipeline, frequency capping, ad data models), may include 'reverse system design' of your past work, and stress scale, availability and security. interviewing.io says product-style prompts like 'Design Spotify' are unlikely.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Netflix Culture Memo: The Dream Team, People over Process, Uncomfortably Exciting, Great and Always Better; values of selflessness, judgment, candor, creativity, courage, inclusion, curiosity and resilience; the keeper test; context not control; highly aligned, loosely coupled; freedom and responsibility. ([official page](https://jobs.netflix.com/culture))

**What they look for:**

- Extraordinary candor: giving and receiving direct feedback
- Judgment and ownership with little oversight (context, not control)
- Curiosity and product-mindedness
- Impact told with metrics, including failures and what you learned
- Willingness to disagree and then commit ('farming for dissent')
- Real familiarity with the culture memo; interviewing.io says candidates fail on culture fit alone

**Questions to prepare:**

- Tell me about critical feedback you received and how you applied it
- Tell me about a time you disagreed with a decision. What did you do?
- Describe a cross-functional collaboration that was difficult
- Tell me about a risk you took and how it turned out
- Which part of the culture memo resonates with you, and which would be hardest for you?
- Why Netflix, and why this team?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/netflix.md).

## Tips

- Watch jobs.netflix.com from mid-August (interns) and late September (new grads); postings can close soon after the 7-day minimum.
- Fill out the Airtable form Netflix emails after you apply; Simplify says it is a separate required step.
- Practice with an AI assistant inside a timed editor before the CodeSignal AI-assisted assessment; review every line it writes.
- Finish implementations fully; candidates report Netflix expects complete, working solutions, not just the right idea.
- Prepare a basic system design story even as an intern: one Netflix SWE intern loop had a dedicated design round.
- Read the culture memo and map 2 stories to each value (candor, judgment, courage, curiosity); a Reddit commenter from Formation (which says it partners with Netflix) advised reflecting it in your resume and recruiter outreach.
- Research the specific team's systems before the loop; interviewers ask practical questions tied to their own stack.
- Keep other offers moving: team matching for interns ran from January to April 2026 for some candidates.

## 4-week plan for Netflix

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Netflix Culture Memo: The Dream Team, People over Process, Uncomfortably Exciting, Great and Always Better; values of selflessness, judgment, candor, creativity, courage, inclusion, curiosity and resilience; the keeper test; context not control; highly aligned, loosely coupled; freedom and responsibility. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://jobs.netflix.com/>
- <https://explore.jobs.netflix.net/careers>
- <https://jobs.netflix.com/careers/new-grads>
- <https://jobs.netflix.com/careers/internships>
- <https://jobs.netflix.com/careers/engineering>
- <https://jobs.netflix.com/culture>
- <https://jobs.netflix.com/work-life-philosophy>
- <https://www.levels.fyi/companies/netflix/salaries/software-engineer>
- <https://simplify.jobs/blog/netflix-new-grad-software-engineer-guide>
- <https://interviewing.io/netflix-interview-questions>
- <https://www.aced.io/guides/netflix-software-engineer-interview>
- <https://engineeringenablement.substack.com/p/the-netflix-software-engineering>
- <https://www.hellointerview.com/community/questions/company/Netflix>
- <https://github.com/snehasishroy/leetcode-companywise-interview-questions>
- <https://leetcode.com/discuss/post/6821729/netflix-l4-phone-screen-by-hellcat123-ltfw/>
- <https://leetcode.com/discuss/post/7654072/interview-question-asked-for-netflix-scr-pnr5/>
- <https://leetcode.com/discuss/post/7421643/netflix-online-screening-round-1-poland-bfsh1/>
- <https://leetcode.com/discuss/post/7476229/netflix-interview-potential-reject-by-he-h5bl/>
- <https://leetcode.com/discuss/post/7217916/netflix-l4-swe-data-platform-phone-scree-07ne/>
- <https://leetcode.com/discuss/post/7291543/netflix-data-modeling-round-senior-softw-8j2q/>
- <https://leetcode.com/discuss/post/6650844/netflix-l4-warsaw-2025-rejected-by-bayma-t874/>
- <https://www.reddit.com/r/csMajors/comments/1o99rz2/codesignal_assessment_with_netflix_tips/>
- <https://www.reddit.com/r/csMajors/comments/1ohtvb1/netflix_aiassisted_gca_score/>
- <https://www.reddit.com/r/csMajors/comments/1pg1s5e/netflix_swe_intern_round_1_interview/>
- <https://www.reddit.com/r/csMajors/comments/1p9adla/netflix_swe_intern_r2_advice/>

> **Watch out:** Netflix publishes the shape of the student process (take-home, then two rounds for new grads or two to three for interns) but not the content; details here come from a small number of 2025 to 2026 Reddit and LeetCode reports and secondary guides (Simplify, Aced, interviewing.io), and vary heavily by team. There is no official interview prep page beyond the process notes on the new-grads and internships pages. Whether Netflix hired 2026 new grads beyond intern conversion is disputed in an Oct 2025 Reddit thread, though a Mar 2026 thread describes a completed new grad final round. The AI-assisted CodeSignal format and its scoring scale are not documented by Netflix. Simplify's L3 band ($100K to $300K) was not checked against a Netflix posting. Netflix's culture memo has no visible last-updated date on the page; Aced says it was updated in June 2024. Very few early-career questions are public, so most reported questions are L4, frontend or senior. LeetCode Discuss URLs were confirmed through LeetCode's GraphQL API; Reddit threads were read through Reddit's RSS feeds.

Next: [All companies](index.md)
