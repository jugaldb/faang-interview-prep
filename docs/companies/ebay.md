# eBay interview guide

Global online marketplace (search, payments, ads, eBay Live). Known for CodeSignal assessments (project-style ICA or GCA) and optimal-only DSA plus HLD/LLD loops. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Software Engineer Intern (NA, EMEA, APAC programs; NA applications via RippleMatch). |
| **New grad level** | SE 1 / Software Engineer 1 (Levels.fyi entry level). India entry roles also posted as 'Java Engineer' for 0 to 2 yrs (Jul 2025). |
| **0 to 3 years** | SE 1 (0 to 2 yrs), SE 2 (India posts: T23, about 2 to 3 yrs), SE 3 (India posts: about 3 to 5 yrs; 3 to 4.8 YOE reported); MTS 1 and MTS 2 above. Downleveling from SE 3 to SE 2 after the loop is reported for a 3 YOE candidate (Nov 2025). |
| **Online assessment** | CodeSignal (GCA or ICA). One 2026 SE-III report said HackerRank for an LLD-style API task, so some teams differ. : ICA: one codebase, implement classes/methods so each of 4 levels' tests pass; levels open in order (examples: in-memory database with TTL and look-back; banking system with top spenders, scheduled payments, account merges; cloud storage with quotas and compression). Scored out of 600 (reported scores 480, 500, 510 and 520; 500 and 520 led to drive invites in 2026). Another 2026 ICA task: design an ATM with add-on features in later levels. GCA: 4 independent questions (easy, easy, medium, medium), 70 min. |
| **Coding rounds** | 1 to 2 live DSA rounds (60 min, usually 2 problems); some loops add a third problem if time remains. |
| **Behavioral** | eBay culture values ('DNA'): Empower Our Community, Innovate Boldly, Be For Everyone, Deliver With Impact, Act With Integrity. |
| **Timeline** | Internships post September through March (official). Experienced India loops: OA, then drive within about 2 to 4 weeks (Mar 31, 2026 virtual R1, then Apr 10 drive); offer needs director approval and document verification (one loop on Aug 25, 2026 had documents requested Sep 11). Positions can close mid-process (Jun 2026: closed after 3 virtual rounds, candidate sent a new OA for another req). No hiring committee or team-match stage reported: hiring is per team. |
| **New grad pay** | US (Levels.fyi, as of Oct 4, 2026): SE 1 (entry) median total comp about $135K (base $113K, stock $10K/yr, bonus $11.5K); SE 2 about $180K; RSUs vest over 4 years. India (Levels.fyi Greater Bengaluru): SE 1 median about Rs 21.4 lakh, SE 2 about Rs 34.9 lakh. Reported India SE-2 offers 2026: Rs 25 lakh base + 10% bonus + about $24K to $25K RSUs over 4 years + Rs 2 lakh joining bonus (first-year about Rs 33 to 35 lakh), described as the band maximum in one post. No 2025 to 2026 US new grad or intern pay data point found on LeetCode. |
| **Official links** | [Careers](https://careers.ebayinc.com/), [Students](https://careers.ebayinc.com/student-opportunities/), [Official interview prep](https://careers.ebayinc.com/how-we-hire/), [Values](https://careers.ebayinc.com/our-culture/) |

## Interview process

### New grad

1. **Apply.** North America students apply through eBay's RippleMatch page; others via jobs.ebayinc.com. Official 'How we hire': apply via careers site, job board, recruiter or referral.
2. **Coding assessment.** Official: 'For engineering roles, you may complete a coding assessment.' Reported platform is CodeSignal: either the General Coding Assessment (GCA: 4 questions, easy/easy/medium/medium, 70 min, Jul 2026) or the Industry Coding Assessment (ICA: one project-style task in 4 sequential levels, scored out of 600). A 2022 new grad applicant reported a CodeSignal OA score of 847 (older 850 scale).
3. **Virtual interviews.** Official: Zoom meetings with a recruiter, the hiring manager and teammates; BrightHire may record/transcribe with consent and you can opt out; keep your camera on in virtual interviews (official). Reported technical rounds: live coding on CodeSignal with 2 problems in 60 min where the optimal solution is expected; interviewers dry-run code by hand.
4. **Design + hiring manager.** For early-career hires (2 YOE), loops still included an HLD round (LunchDrop corporate food ordering) and a hiring manager round that turned into another design round (a dashboard). HM questions: why eBay, why leaving, on-call, testing frameworks.
5. **Decision and offer.** Official: teams review structured feedback (a hiring panel or debrief for some roles), then a verbal offer and an offer letter. Reported: director approval stage and document checks (last 3 payslips, current offer letter) before the written offer.

### Intern

1. **Apply.** Official: internships posted September through March in North America (US, Canada), EMEA and APAC; NA applicants use RippleMatch, EMEA applicants use the Emerging Talent page. eBay was named in Yello/WayUp's Top 100 Internship Programs for 2026.
2. **Online assessment.** CodeSignal. The most recent intern-specific report is old (Dec 2022): 70 min, 3 questions (easy sort, long matrix-manipulation implementation, Merge Intervals variant). Expect GCA or ICA today [no 2025 to 2026 intern OA report found].
3. **Interviews.** Virtual Zoom interviews with recruiter, hiring manager and team (official). No 2025 to 2026 intern interview write-up found on LeetCode; use the early-career loop as the model: DSA medium with optimal solution, projects, behavioral against eBay values.

### With 1 to 3 years of experience

India SE 2, SE 3 and MTS 1 hiring (most 2025 to 2026 data) runs as: recruiter outreach or referral, CodeSignal ICA or GCA, sometimes a virtual first round, then an in-person hiring drive in Bengaluru (reported drives: Sep 12 to 14, 2025; Nov 7 to 10, 2025; Apr 10, 2026; Jul 10 to 12, 2026; Jul 26, 2026) with 3 to 5 rounds: 1 to 2 DSA rounds (2 problems each, optimal expected, some hard problems such as Reverse Pairs, N-Queens, Binary Tree Cameras), HLD (Dropbox, TinyURL, distributed event booking, notification systems, an eBay chat app, a storage service for millions of ad-click events built without an off-the-shelf DB), LLD (in-memory filesystem, discount system, in-memory DB), HM (STAR questions: why leave, why eBay, a time you helped a peer, simplified something for a customer, took critical feedback) and sometimes a Director round. Coding prompts are often long stories hiding a classic problem (remove nth node from end, unique permutations), and an Apr 2026 DSA round also discussed how you use AI at work (MCP, trusting AI-written code). In June 2026 a candidate was told the last round would be a new-policy 'face to face AI driven/coding round' with no format shared. US senior loops (Oct 2025) included a 1-hour debugging/refactoring code-review round and a 1-hour API design round.

## Online assessment

- **Platform:** CodeSignal (GCA or ICA). One 2026 SE-III report said HackerRank for an LLD-style API task, so some teams differ.
- **Format:** ICA: one codebase, implement classes/methods so each of 4 levels' tests pass; levels open in order (examples: in-memory database with TTL and look-back; banking system with top spenders, scheduled payments, account merges; cloud storage with quotas and compression). Scored out of 600 (reported scores 480, 500, 510 and 520; 500 and 520 led to drive invites in 2026). Another 2026 ICA task: design an ATM with add-on features in later levels. GCA: 4 independent questions (easy, easy, medium, medium), 70 min.
- **Notes:** Recruiters may let you reuse an existing CodeSignal score instead of retaking. Passing the OA did not guarantee a drive invite (Oct 2025, Jan 2026 posts). Level 4 of ICA often needs efficient state design; one May 2026 write-up (which the poster says was reconstructed with Gemini) warns that naive deep copies for backups can fail hidden performance tests.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 to 2 live DSA rounds (60 min, usually 2 problems); some loops add a third problem if time remains.
- **Style:** LeetCode medium to hard; optimal solution expected (a Jul 2026 candidate passed the visible tests but was rejected because neither answer was optimal: a heap before switching to per-array pointers, and a two-step pivot search instead of single-pass binary search). Mix of arrays/two pointers, binary search, heaps, graphs, and occasional hard problems.
- **Environment:** CodeSignal live coding pad with visible test cases; some India drives are in-person.
- **Graded on:** Optimality, correctness under manual dry run, edge cases (overflow-safe mid, early return), clean code, and explaining brute force to optimal.
- **Reported focus topics:** Arrays and two pointers: 3Sum, container with most water, Monotonic stack: daily temperatures, Binary search: rotated arrays, Heaps and k-way merge, top K, Graphs and grids: islands, topological sort (recipes), Hard divide and conquer / backtracking: reverse pairs, N-Queens, LRU cache and design-style DS, OOP implementation under evolving requirements (ICA levels), HLD: notifications, URL shortener, booking, food ordering, LLD: filesystem, discount system

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **13** distinct problems tagged to eBay in the last 6 months (2 in the last 30 days, 6 in the last 3 months, 66 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 62%, Hard 23%, Easy 15%

**Most tagged topics (share of problems):** Array 62%, String 23%, Divide and Conquer 23%, Sorting 23%, Hash Table 23%, Dynamic Programming 15%, Binary Search 15%, Two Pointers 15%, Enumeration 8%, Matrix 8%

> **Watch out:** eBay has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Minimize Result by Adding Parentheses to Expression](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/) | Medium | 30 days | String, Enumeration |
| 2 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | Medium | 30 days | Array, Dynamic Programming, Matrix |
| 3 | [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) | Hard | 3 months | Array, Binary Search, Divide and Conquer, Binary Indexed Tree |
| 4 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 3 months | Array, Sorting, Quicksort |
| 5 | [Alternating Groups II](https://leetcode.com/problems/alternating-groups-ii/) | Medium | 3 months | Array, Sliding Window |
| 6 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | 3 months | Array, Binary Search, Divide and Conquer |
| 7 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 8 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 6 months | Array, Hash Table |
| 9 | [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) | Hard | 6 months | Dynamic Programming, Tree, Depth-First Search, Binary Tree |
| 10 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Sorting |
| 11 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | 6 months | Array, Two Pointers, Sorting |
| 12 | [Decode String](https://leetcode.com/problems/decode-string/) | Medium | 6 months | String, Stack, Recursion |
| 13 | [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | Easy | 6 months | Two Pointers, String, Greedy |

### Signature problems

Problems where eBay accounts for a large share of all recent tags across companies. These are the most eBay-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | Medium | 30 days | Array, Dynamic Programming, Matrix |
| 2 | [Minimize Result by Adding Parentheses to Expression](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/) | Medium | 30 days | String, Enumeration |
| 3 | [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) | Hard | 3 months | Array, Binary Search, Divide and Conquer, Binary Indexed Tree |
| 4 | [Alternating Groups II](https://leetcode.com/problems/alternating-groups-ii/) | Medium | 3 months | Array, Sliding Window |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| CodeSignal ICA: in-memory database with set/get/compareAndSet/compareAndDelete, scan and scanByPrefix, TTL, and look-back reads at a past timestamp | MTS 1 (India) | 2025-10 | [post](https://leetcode.com/discuss/post/7316549/ebay-codesignal-oa-industry-coding-asses-8qbn/) |
| CodeSignal ICA variant: SET_OR_INC/GET/DELETE records, FETCH with sorted formatted output, TTL, BACKUP/RESTORE snapshots (scored 510/600; poster says the description was reconstructed with Gemini) | SWE (OA) | 2026-05 | [post](https://leetcode.com/discuss/post/8122064/ebay-swe-assessment-industry-coding-asse-acmd/) |
| CodeSignal ICA: banking system with createAccount, deposit, transfer, topSpenders, schedulePayment with cashback, mergeAccounts | MTS 1 (India) | 2025-10 | [post](https://leetcode.com/discuss/post/7302772/ebay-codesignal-oa-industry-coding-asses-wxiv/) |
| CodeSignal ICA: in-memory cloud storage with addFile/copyFile/getFileSize, prefix/suffix search, per-user quotas, file compression | MTS 1 (India) | 2025-09 | [post](https://leetcode.com/discuss/post/7156557/ebay-assessment-industry-coding-assessme-yw79/) |
| [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | SDE-2, 2 YOE (Bengaluru, virtual) | 2026-08 | [post](https://leetcode.com/discuss/post/8467010/ebay-sde-2-interview-experience-virtual-h2rgv/) |
| [Daily Temperatures (walk through an example after coding)](https://leetcode.com/problems/daily-temperatures/) | SDE-2, 2 YOE (Bengaluru, virtual) | 2026-08 | [post](https://leetcode.com/discuss/post/8467010/ebay-sde-2-interview-experience-virtual-h2rgv/) |
| HLD: LunchDrop, corporate lunch ordering with daily rotating restaurants, item customization, menu changes during ordering, caching | SDE-2, 2 YOE (Bengaluru, virtual) | 2026-08 | [post](https://leetcode.com/discuss/post/8467010/ebay-sde-2-interview-experience-virtual-h2rgv/) |
| [K smallest elements across multiple sorted arrays (min-heap accepted but pointer-per-array optimum expected; related to Merge k Sorted Lists)](https://leetcode.com/problems/merge-k-sorted-lists/) | Software Engineer (round 1, CodeSignal) | 2026-07 | [post](https://leetcode.com/discuss/post/8427643/ebay-interview-experience-rejected-round-b9ft/) |
| [Search in Rotated Sorted Array, single-pass binary search required](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Software Engineer (round 1, CodeSignal) | 2026-07 | [post](https://leetcode.com/discuss/post/8427643/ebay-interview-experience-rejected-round-b9ft/) |
| [Shortest Unsorted Continuous Subarray (after resume questions)](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) | Software Engineer, MTS 1 (virtual round 1) | 2025-04 | [post](https://leetcode.com/discuss/post/6677822/ebay-virtual-1st-round-interview-softwar-65pw/) |
| [Reverse Pairs (30-minute offline round, one problem)](https://leetcode.com/problems/reverse-pairs/) | Software Engineer | 2026-03 | [post](https://leetcode.com/discuss/post/7649313/ebay-interview-question-by-anonymous_use-cf82/) |
| [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | Software Engineer, 4 YOE (offer) | 2026-04 | [post](https://leetcode.com/discuss/post/8353908/ebay-interview-experience-apr-may-2026-o-wcre/) |
| [Maximum Population Year, then Top K Frequent Elements](https://leetcode.com/problems/maximum-population-year/) | Software Engineer, 4 YOE (offer) | 2026-04 | [post](https://leetcode.com/discuss/post/8353908/ebay-interview-experience-apr-may-2026-o-wcre/) |
| [HLD: wishlist price-drop alerts (notify when price drops more than 5% below the wishlist price); LLD: in-memory filesystem with addDirectory/addFile/goToDirectory/ls (similar to LC 588, premium)](https://leetcode.com/problems/design-in-memory-file-system/) | Software Engineer, 4 YOE (offer) | 2026-05 | [post](https://leetcode.com/discuss/post/8353908/ebay-interview-experience-apr-may-2026-o-wcre/) |
| [3Sum, after drawing your past project's architecture](https://leetcode.com/problems/3sum/) | SWE III, 3.6 YOE incl. internship (Bangalore) | 2025-11 | [post](https://leetcode.com/discuss/post/7363986/ebay-swe3-interview-experience-bangalore-gj9y/) |
| [Implement TinyURL: why Base64, corner cases, scalability](https://leetcode.com/problems/encode-and-decode-tinyurl/) | SWE III, 3.6 YOE incl. internship (Bangalore) | 2025-11 | [post](https://leetcode.com/discuss/post/7363986/ebay-swe3-interview-experience-bangalore-gj9y/) |
| [N-Queens (with behavioral questions in the same round)](https://leetcode.com/problems/n-queens/) | SWE III, 3.6 YOE incl. internship (Bangalore) | 2025-11 | [post](https://leetcode.com/discuss/post/7363986/ebay-swe3-interview-experience-bangalore-gj9y/) |
| [Max Area of Island variation (full code, complexity, edge cases) and a Trie-based word search over a set of strings; HLD: distributed event booking](https://leetcode.com/problems/max-area-of-island/) | SE-III, 4.8 YOE | 2026-03 | [post](https://leetcode.com/discuss/post/7684383/suggestion-on-ebay-interview-process-by-khf9i/) |
| Print all bottom-to-top diagonals of a jagged 2D matrix; elements common to all sorted arrays without extra space; LLD discount system | Software Engineer (onsite, 3 rounds) | 2025-06 | [post](https://leetcode.com/discuss/post/6914615/ebay-interview-experience-june-2025-by-p-risl/) |
| US loop format: 1-hour debugging/refactoring interview (code review style) and 1-hour API design interview | Senior Software Engineer (US) | 2025-10 | [post](https://leetcode.com/discuss/post/7254936/ebay-sse-loop-us-what-to-expect-by-anony-9wof/) |
| CodeSignal ICA: design an ATM, with add-on features unlocked in later levels (scored 520/600, then invited to the Apr 10 drive) | SE 3, about 3 YOE (Bengaluru) | 2026-04 | [post](https://leetcode.com/discuss/post/7990573/ebay-se3-interview-experience-by-anonymo-h41y/) |
| [Long story that reduces to Remove Nth Node From End of List; second story reduces to unique permutations of digits (Permutations II); then a discussion on AI at work (MCP, trusting AI code)](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | SE 3, about 3 YOE (Bengaluru drive) | 2026-04 | [post](https://leetcode.com/discuss/post/7990573/ebay-se3-interview-experience-by-anonymo-h41y/) |
| [Append-only transaction log, remove the fraudulent entry in one pass (Remove Nth Node From End of List); parse nested HTML/XML into an n-ary tree with addNode/deleteNode/updateData (approach only)](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | MTS 1, 6.8 YOE (virtual R1, Bengaluru) | 2026-03 | [post](https://leetcode.com/discuss/post/7869599/ebay-blr-mts1-by-debmalyapan53-27k2/) |
| HLD: persistent storage for millions of ad-click events queried by adId and userId, as a SaaS product, without using an existing database | MTS 1, 6.8 YOE (Bengaluru drive) | 2026-04 | [post](https://leetcode.com/discuss/post/7869599/ebay-blr-mts1-by-debmalyapan53-27k2/) |
| [Palindrome Linked List; Kth Smallest Element in a BST; most frequent word in an array; HLD: eBay chat app (1-1 chat, online status, in-app notifications)](https://leetcode.com/problems/palindrome-linked-list/) | SDE 3, 5+ YOE (F2F) | 2026-07 | [post](https://leetcode.com/discuss/post/8393866/ebay-sde-3-interview-experience-f2f-5-yo-0ae2/) |

## Beyond LeetCode

CodeSignal Industry Coding Assessment (4-level project implementation). US loops: 1-hour debugging/refactoring in code-review style and 1-hour API design (senior, Oct 2025). A repo task: read a JSON file, deserialize to objects, call an HTTP endpoint and process the response (2024 to 2026 compilation). New 'AI driven/coding' face-to-face round reported in June 2026 for SWE3 with no public format. Official policy: no AI to generate answers in interviews or assessments.

## System design

Appears early. SDE-2 candidates with 2 YOE had a full HLD round (LunchDrop food ordering: menus, customization, caching, real-time updates) and an HM-led design round (dashboard). 4 YOE loops had HLD (wishlist price-drop alerts at more than 5% drop) and LLD (in-memory filesystem with addDirectory/addFile/goToDirectory/ls). Other reported designs: Dropbox, TinyURL (why Base64), distributed event booking, aggregator over services with different latencies, discount system with one-to-many and many-to-many relations. The ICA OA itself is an LLD/OOP exercise.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** eBay culture values ('DNA'): Empower Our Community, Innovate Boldly, Be For Everyone, Deliver With Impact, Act With Integrity. ([official page](https://careers.ebayinc.com/our-culture/))

**What they look for:**

- Connection to eBay's mission (official How we hire)
- Real examples of problem-solving and collaboration with measurable impact (official)
- Authenticity: genuine personality alongside technical competency (official)
- Past project stories in STAR with numbers (2026 compilation post)
- Production ownership: on-call, testing frameworks, production scope (HM round, 2026)
- STAR answers in HM rounds about peers, customers, impact and feedback (Apr 2026 SE3 and MTS1 posts)

**Questions to prepare:**

- Why eBay?
- Why are you leaving your current company?
- Walk through the architecture of a past project and your design decisions.
- Tell me about your on-call rotations and how you handle production issues.
- Which testing frameworks do you use and how do you test your services?
- Tell me about a time you helped a peer. Why and how did you help?
- Tell me about a time you simplified something for a customer.
- Tell me about a time you received critical feedback from your manager.
- What feedback on improvement would your current manager give you?
- Why should I hire you, and why should I not hire you?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Practice CodeSignal ICA-style builds: one class that grows across 4 levels (CRUD, filtered and sorted output, TTL, history or snapshots). Design level 1 so level 4 does not need a rewrite.
- Learn the two CodeSignal formats: GCA is 4 standalone questions in 70 min; ICA is a project-style task scored out of 600. Ask your recruiter which one you are getting and whether an existing score can be shared.
- In live rounds go for the optimal solution and dry-run it aloud: a Jul 2026 candidate was rejected in round 1 for passing tests with a non-optimal approach.
- Expect design even at 2 YOE: SDE-2 loops had a full HLD and an HM-led design round. Prepare notification systems, food ordering, TinyURL and an in-memory filesystem.
- Build stories for the five eBay values (Empower Our Community, Innovate Boldly, Be For Everyone, Deliver With Impact, Act With Integrity); a 2026 compilation lists 'eBay values, examples around same' as the behavioral focus.
- Do not use AI during interviews or assessments: the official How we hire page says you can't use AI to generate answers or complete assessments; AI is fine for preparation.
- North America students: apply on eBay's RippleMatch page between September and March, when intern roles post.
- Confirm the level before the loop: a 3 YOE SDE3 candidate was downleveled to SDE2 after the interviews.

## 4-week plan for eBay

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the eBay culture values ('DNA'): Empower Our Community, Innovate Boldly, Be For Everyone, Deliver With Impact, Act With Integrity. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://careers.ebayinc.com/ [VERIFIED]>
- <https://careers.ebayinc.com/student-opportunities/ [VERIFIED: internships posted Sep through Mar; RippleMatch for NA; Yello/WayUp Top 100 Internship Programs 2026]>
- <https://careers.ebayinc.com/how-we-hire/ [VERIFIED: coding assessment, BrightHire, no-AI rule, camera on, verbal offer before letter]>
- <https://careers.ebayinc.com/our-culture/ [VERIFIED: five DNA headings Empower Our Community, Innovate Boldly, Be for Everyone, Deliver With Impact, Act With Integrity]>
- <https://app.ripplematch.com/t/b8c45472 [VERIFIED: the link on eBay's Student Opportunities page; redirects to eBay's RippleMatch page, listings render client-side]>
- <https://jobs.ebayinc.com/us/en/emerging-talent-europe-middleeast-asia [VERIFIED]>
- <https://www.levels.fyi/companies/ebay/salaries/software-engineer [VERIFIED]>
- <https://www.levels.fyi/companies/ebay/salaries/software-engineer/locations/greater-bengaluru [VERIFIED]>
- <https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/eBay [VERIFIED: liquidslr/leetcode-company-wise-problems, 31,050 stars as of Oct 4, 2026, last data update Aug 16, 2026]>
- <https://codesignal.com/resource/industry-coding-framework/ [VERIFIED: CodeSignal Industry Coding Framework landing page]>
- <https://codesignal.com/resource/general-coding-assessment-framework/ [VERIFIED: CodeSignal General Coding Framework landing page]>
- <https://leetcode.com/discuss/post/7316549/ebay-codesignal-oa-industry-coding-asses-8qbn/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/8122064/ebay-swe-assessment-industry-coding-asse-acmd/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7302772/ebay-codesignal-oa-industry-coding-asses-wxiv/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7156557/ebay-assessment-industry-coding-assessme-yw79/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/8467010/ebay-sde-2-interview-experience-virtual-h2rgv/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/8473980/ebay-sde2-bengaluru-by-anonymous_user-c5yc/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/8427643/ebay-interview-experience-rejected-round-b9ft/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6677822/ebay-virtual-1st-round-interview-softwar-65pw/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7649313/ebay-interview-question-by-anonymous_use-cf82/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/8353908/ebay-interview-experience-apr-may-2026-o-wcre/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7363986/ebay-swe3-interview-experience-bangalore-gj9y/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7684383/suggestion-on-ebay-interview-process-by-khf9i/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6914615/ebay-interview-experience-june-2025-by-p-risl/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7254936/ebay-sse-loop-us-what-to-expect-by-anony-9wof/ [VERIFIED via LeetCode API]>

> **Watch out:** Nearly all 2025 to 2026 interview reports are India (Bengaluru) SE 2 / SE 3 / MTS hires; no 2025 to 2026 US intern or new grad loop write-up was found, so intern/new grad stages combine the official pages with older CodeSignal reports (2022) and should be presented as 'expect', not 'will'. eBay has no technical prep page beyond 'How we hire'. The level code T23 = SE 2 comes from one candidate post, not an official source; no source for an SE 3 code was found, so none is given. The June 2026 'AI driven/coding' round is a single report with no format details. Reddit, Glassdoor and Blind could not be fetched in this session. LeetCode Discuss pages were read through LeetCode's GraphQL API because the HTML pages block automated fetches. Fact-check Oct 4, 2026: all LeetCode Discuss sources re-read via the GraphQL API; drive dates corrected (the earlier Jul 10 to 12, 2026 claim had no cited source and now does); one ICA write-up flagged as AI-reconstructed by its poster; an unsourced behavioral question removed and replaced with sourced HM questions.

Next: [All companies](index.md)
