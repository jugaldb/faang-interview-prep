# Nutanix interview guide

San Jose hybrid multicloud and storage infrastructure company with large Bengaluru and Pune engineering. Interviews: graph-heavy DSA, systems fundamentals, debugging real codebases. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Internships in R&D (Software Engineering) and other teams. India: Summer, Monsoon and Winter interns hired through partner-college campus drives. Also commonly offered in Australia, France, Serbia, Spain, UK, US and Mexico (official FAQ). Paid (US postings list pay ranges); most internships do not sponsor visas. Official FAQ: many employees start as interns and full-time conversion is discussed with your manager during the internship. Nutanix lists a 2025 and 2026 Vault Best Internship award on its culture page. |
| **New grad level** | MTS 1 (Member of Technical Staff 1); Levels.fyi MTS1 data has a median of 1 YOE in India and 0 YOE in the US. Some new grads (e.g. Pune storage team, Jun 2025) were offered MTS 2. |
| **0 to 3 years** | MTS 1 for 0 to about 2 yrs (a 1.5 YOE hire and a 1.25 YOE hire were both MTS 1, Dec 2025); MTS 2 for roughly 2 to 4 yrs; MTS 3 above. Ladder: MTS1, MTS2, MTS3, MTS4, Senior MTS, Staff, Senior Staff, Principal. |
| **Online assessment** | HackerRank (OA) and HackerRank CodePair (live rounds) : New grad/MTS 1: 2 medium coding problems plus CS-fundamentals MCQs (SQL, Linux, DSA). MTS 2: 2 coding problems. Senior (IC4/5): 3 problems in 2 hours (Jump Game VI, Min Cost to Connect All Points, a meet-in-the-middle knapsack). |
| **Coding rounds** | New grad: 1 to 2 DSA rounds. MTS 1 lateral: 1 DSA round plus a debugging/codebase round. MTS 2: 1 DSA round plus design. |
| **Behavioral** | Nutanix core values: 'Hungry, Humble, and Honest with Heart' (culture page; the FAQ writes 'Hungry, Humble, Honest, and with Heart'). The official FAQ adds working as one team, customer obsession, integrity and ownership, growth mindset, long-term thinking. |
| **Timeline** | India campus: June to December/January (official). US: internship and new grad postings appear on the careers site; no 2025 to 2026 US timeline data found. Lateral India: hiring drives with rounds on one day or over 2 to 3 weeks; HR silence after round 1 and roles closing internally are reported (Jun 2025, Dec 2025). Official: 1 to 2 rounds with hiring leaders after the Talent Advisor conversation (engineering loops in practice have 2 to 4 technical rounds). No hiring committee or separate team match is described; you interview for a specific team (DevEx, NDB, Data Platform, AOS storage). |
| **New grad pay** | Levels.fyi per-level figures (read 2026-10-04): US MTS1 total comp about $155K/yr, MTS2 about $180K, MTS3 about $223K; India MTS1 about INR 30.7 lakh/yr, MTS2 about INR 37.7 lakh (site rate INR 94.53 per USD). LeetCode offers (India): 2026 new grad MTS-1 Bengaluru (Tier-1 IIT): base INR 23 lakh + INR 1.5 lakh signing + INR 1 lakh relocation + $28K stock over 4 years; the poster's 'INR 52 lakh total' counts the full 4-year stock grant (about INR 26.5 lakh), so first-year value is closer to INR 32 lakh (Sep 2026); MTS-1 with 1.25 YOE: base INR 25 lakh + ~10% bonus + $18K stock over 4 years (Dec 2025); 2025 new grad MTS-2 Pune: base INR 27 lakh + INR 2.5 lakh joining + INR 1 lakh relocation + about INR 6 lakh/yr stock (Jun 2025). A 2025 on-campus post title says '56 LPA' (candidate claim). |
| **Official links** | [Careers](https://careers.nutanix.com/en/), [Students](https://careers.nutanix.com/en/student-programs/), [Official interview prep](https://careers.nutanix.com/en/how-we-hire-faqs/), [Values](https://careers.nutanix.com/en/life-at-nutanix/culture/) |

## Interview process

### New grad

1. **Campus eligibility and OA (India).** Nutanix partners with select colleges; check your career center. Hiring runs about June to December/January (official FAQ). OA on HackerRank; one Tier-1 NIT drive admitted only circuit-branch students with CGPA 8.0 or above. Reported OA format for MTS-1: 2 medium coding problems plus MCQs on CS fundamentals (SQL, Linux, DSA) (Jul 2025).
2. **DSA round.** 2 problems, one hard and one medium-hard (graph plus DP reported). At one NIT, 20 students were interviewed and 10 advanced (Jul 2025).
3. **System design concepts round.** Query optimization, caching, indexing, API design, then design a system. At the same NIT, 5 of 10 were selected; a planned 4-round loop was cut to 2 rounds for time (Jul 2025).
4. **Off-campus MTS 1 alternative.** Talent Advisor call, then HackerRank OA (2 medium problems + CS MCQs), then a Zoom technical round on HackerRank CodePair: OS, memory management, Linux and computer networks questions, one LeetCode-medium matrix problem with follow-ups, and project discussion (MTS-1 DevEx, Jul 2025).
5. **Later rounds (lateral MTS 1, 1 to 2 YOE).** DSA (2 hard graph problems: Alien Dictionary, Word Ladder II), a problem-solving and debugging round inside an open-source codebase, an HLD round (chat application), and a hiring manager round (Kafka and messaging, role fit, open-source interest) (Dec 2025).
6. **Decision.** Talent Advisor debriefs with the hiring team and shares next steps (official FAQ). Positions can close or go to internal candidates mid-loop (Dec 2025 report).

### Intern

1. **Campus drive (India).** Summer, Monsoon and Winter internships are hired through the partner-college campus program, June to December/January (official FAQ). Expect the same HackerRank OA and DSA-first interviews as new grads; no detailed 2025 to 2026 intern write-up was found on LeetCode Discuss.
2. **Outside India.** Apply to listed internships on careers.nutanix.com/en/jobs; US postings list pay ranges. Most internships do not sponsor visas (official FAQ).

### With 1 to 3 years of experience

For 1 to 3 yrs (MTS 1 lateral, MTS 2): HackerRank OA (2 problems, e.g. a priority-queue problem and Dijkstra), then 2 to 4 interviews: DSA (often 2 problems in 60 minutes; Longest Increasing Path in a Matrix, Minimum Window Substring, Group Anagrams, LRU Cache, Remove Duplicate Letters, aggressive-cows style binary search, LCS and Sqrt(x)), LLD+HLD combined (inventory management, Design LeetCode with focus on DB entities), and a hiring manager round. Team-specific rounds are common: a 'system coding' round implementing an in-memory sparse file class with concurrency and optimization (C++/Golang MTS 2 hiring drive, May 2025); a command-line archive utility like a basic tar without compression libraries, then a function-call graph with longest chain and longest cycle (MTS, 2 YOE, May 2025); Python internals (decorators, context managers, Flask middleware, SQL, FastAPI pagination) for Python roles (Mar 2026); JavaScript currying in an SDE 2 round (Feb 2026); a frontend-heavy full-stack loop with DSA, a JavaScript/React machine coding round and then system design (Apr 2026). Hiring drives run face to face (MTS 2 NDB, 3 rounds, April 2026) or as a 2-round drive scheduled the night before (May 2025). Code quality is graded: an MTS 2 who solved both problems was rejected for code quality (Aug 2026).

## Online assessment

- **Platform:** HackerRank (OA) and HackerRank CodePair (live rounds)
- **Format:** New grad/MTS 1: 2 medium coding problems plus CS-fundamentals MCQs (SQL, Linux, DSA). MTS 2: 2 coding problems. Senior (IC4/5): 3 problems in 2 hours (Jump Game VI, Min Cost to Connect All Points, a meet-in-the-middle knapsack).
- **Notes:** HackerRank hidden tests are strict; one candidate warns that correct logic can still fail cases on input handling. Campus OAs may apply CGPA and branch cutoffs before the test.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** New grad: 1 to 2 DSA rounds. MTS 1 lateral: 1 DSA round plus a debugging/codebase round. MTS 2: 1 DSA round plus design.
- **Style:** LeetCode medium to hard with a strong graph bias (Alien Dictionary, Word Ladder II, Dijkstra) plus DP, sliding window and binary search. Systems-flavored coding for storage and platform teams.
- **Environment:** HackerRank CodePair over Zoom; you write and run code. Role JDs name Java, Python, Golang or C++; a 2026 candidate asked whether C++ is allowed when the JD lists Golang/Python/Java (unanswered), so confirm language with your Talent Advisor.
- **Graded on:** Correct, optimal and running code with edge cases; clean, production-quality code (explicit rejection reason at MTS 2); explaining intuition and complexity; handling follow-ups.
- **Reported focus topics:** Graphs: topological sort, BFS shortest paths, Dijkstra, word-ladder style BFS with path reconstruction, Dynamic programming (graph + DP combos, LIS on matrix), Sliding window and monotonic stack, Binary search on answer, Design-style data structures (LRU cache), OS: processes, threads, memory management, concurrency, Linux and computer networking basics, SQL, Reading and debugging large unfamiliar codebases, Distributed systems and storage concepts (caching, indexing, Kafka)

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **5** distinct problems tagged to Nutanix in the last 6 months (1 in the last 30 days, 2 in the last 3 months, 69 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 80%, Hard 20%

**Most tagged topics (share of problems):** Array 60%, Simulation 40%, Greedy 20%, Heap (Priority Queue) 20%, Stack 20%, Hash Table 20%, Linked List 20%, Design 20%, Doubly-Linked List 20%, Dynamic Programming 20%

> **Watch out:** Nutanix has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Minimum Operations to Halve Array Sum](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/) | Medium | 30 days | Array, Greedy, Heap (Priority Queue) |
| 2 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | Medium | 3 months | Array, Stack, Simulation |
| 3 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 4 | [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) | Hard | 6 months | Dynamic Programming, Tree, Depth-First Search, Binary Tree |
| 5 | [Find the Winner of the Circular Game](https://leetcode.com/problems/find-the-winner-of-the-circular-game/) | Medium | 6 months | Array, Math, Recursion, Queue |

### Signature problems

Problems where Nutanix accounts for a large share of all recent tags across companies. These are the most Nutanix-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Minimum Operations to Halve Array Sum](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/) | Medium | 30 days | Array, Greedy, Heap (Priority Queue) |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | MTS 1 (1.5 YOE) | 2025-12 | [post](https://leetcode.com/discuss/post/7429281/nutanix-interview-experience-mts-1-15-yo-o4ln/) |
| [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) | MTS 1 (1.5 YOE) | 2025-12 | [post](https://leetcode.com/discuss/post/7429281/nutanix-interview-experience-mts-1-15-yo-o4ln/) |
| Debugging round: navigate an open-source DB driver and database codebase to locate pooling, config, indexing and execution logic | MTS 1 (1.5 YOE) | 2025-12 | [post](https://leetcode.com/discuss/post/7429281/nutanix-interview-experience-mts-1-15-yo-o4ln/) |
| HLD: design a chat application | MTS 1 (1.5 YOE) | 2025-12 | [post](https://leetcode.com/discuss/post/7429281/nutanix-interview-experience-mts-1-15-yo-o4ln/) |
| [OA: modified Asteroid Collision plus a sliding window problem and CS MCQs (SQL, Linux, DSA)](https://leetcode.com/problems/asteroid-collision/) | MTS 1 (DevEx) | 2025-07 | [post](https://leetcode.com/discuss/post/6951560/nutanix-interview-experience-mts-1-devex-qany/) |
| CodePair round: OS, memory management, Linux and networking questions, then a matrix LeetCode-medium problem with optimization follow-ups | MTS 1 (DevEx) | 2025-07 | [post](https://leetcode.com/discuss/post/6951560/nutanix-interview-experience-mts-1-devex-qany/) |
| Code pair round: two graph problems, then resume questions | MTS 1 (Data Platform) | 2025-10 | [post](https://leetcode.com/discuss/post/7314239/my-nutanix-mts-1-interview-experience-an-iqqg/) |
| Campus DSA round: one hard graph plus DP problem and one medium-hard problem; next round on query optimization, caching, indexing, API design and a system design | SDE new grad (on campus, NIT) | 2025-07 | [post](https://leetcode.com/discuss/post/6997230/nutanix-sde-interview-experience-56-lpa-jagsc/) |
| [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | MTS 2 (DevEx) | 2026-08 | [post](https://leetcode.com/discuss/post/8493262/nutanix-mts-2-devex-interview-experience-o1sl/) |
| [LRU Cache (solved, rejected for code quality)](https://leetcode.com/problems/lru-cache/) | MTS 2 (DevEx) | 2026-08 | [post](https://leetcode.com/discuss/post/8493262/nutanix-mts-2-devex-interview-experience-o1sl/) |
| [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | MTS 2 | 2026-06 | [post](https://leetcode.com/discuss/post/8315354/mts-2-interview-experience-nutanix-by-an-31jc/) |
| [Minimum Window Substring; then LLD+HLD: design an inventory management system](https://leetcode.com/problems/minimum-window-substring/) | MTS 2 | 2026-06 | [post](https://leetcode.com/discuss/post/8315354/mts-2-interview-experience-nutanix-by-an-31jc/) |
| Transform array a (length n) into b (length n+1) with minimum increments, decrements and one copy-to-end operation | MTS 2 | 2026-06 | [post](https://leetcode.com/discuss/post/8314146/nutanix-mts-2-interview-experience-by-cg-hvhy/) |
| [Book Allocation (equivalent to Split Array Largest Sum); then Design LeetCode focusing on DB entities](https://leetcode.com/problems/split-array-largest-sum/) | MTS 2 | 2026-06 | [post](https://leetcode.com/discuss/post/8314146/nutanix-mts-2-interview-experience-by-cg-hvhy/) |
| [Python round: SQL for the 5th highest salary (Nth Highest Salary), timing decorator on a recursive string reverse, custom context manager, Trie top-3 prefix matches](https://leetcode.com/problems/nth-highest-salary/) | MTS 2 (Python), India | 2026-03 | [post](https://leetcode.com/discuss/post/7650412/india-nutanix-mts-2-python-interview-exp-k3m7/) |
| [Find the Winner of the Circular Game; implement multiply(3)(4)() and infinite currying multiply(1)(2)...(n)() in JavaScript](https://leetcode.com/problems/find-the-winner-of-the-circular-game/) | SDE 2 (MTS 2) | 2026-02 | [post](https://leetcode.com/discuss/post/7552936/nutanix-sde-2-interview-experience-by-an-rf0k/) |
| [Remove Duplicate Letters; maximize the minimum distance placement (aggressive cows, similar to Magnetic Force Between Two Balls)](https://leetcode.com/problems/remove-duplicate-letters/) | MTS 2 (C++/Golang) hiring drive | 2025-05 | [post](https://leetcode.com/discuss/post/6723679/nutanix-mts-2-cgolang-interview-by-anony-o3qd/) |
| System coding: implement a memory-based sparse file class (3 functions) with discussion of storage, concurrency and optimization | MTS 2 (C++/Golang) hiring drive | 2025-05 | [post](https://leetcode.com/discuss/post/6723679/nutanix-mts-2-cgolang-interview-by-anony-o3qd/) |
| [Increasing Triplet Subsequence (brute force to O(n), running code tested on edge cases)](https://leetcode.com/problems/increasing-triplet-subsequence/) | MTS 2 | 2025-06 | [post](https://leetcode.com/discuss/post/6817116/nutanix-mts-2-interview-experience-june-qsxar/) |
| [Maximum Product Subarray; Trapping Rain Water](https://leetcode.com/problems/maximum-product-subarray/) | MTS 2 | 2025-01 | [post](https://leetcode.com/discuss/post/6331933/nutanix-interview-mts-2-by-anonymous_use-0g7c/) |
| Systems coding: command-line archive utility like a basic tar (create, extract, list, extract one file, verbose) without zip/zlib libraries | MTS (2 YOE) | 2025-05 | [post](https://leetcode.com/discuss/post/6779511/nutanix-mts-by-anonymous_user-c0mm/) |
| Parse function definitions into a call graph, then find the longest call chain and the longest cycle | MTS (2 YOE) | 2025-05 | [post](https://leetcode.com/discuss/post/6779511/nutanix-mts-by-anonymous_user-c0mm/) |
| From an unsorted access log, return the resource with the most accesses in any 5 minute window and its count | Not stated (first DSA round) | 2025-05 | [post](https://leetcode.com/discuss/post/6742289/nutanix-by-anonymous_user-mwts/) |
| [Longest Common Subsequence; Sqrt(x)](https://leetcode.com/problems/longest-common-subsequence/) | MTS 2 | 2025-08 | [post](https://leetcode.com/discuss/post/7032276/nutanix-interview-dsa-by-anonymous_user-9zds/) |

## Beyond LeetCode

Debugging and codebase-navigation round: clone an open-source database driver and the database itself, then show where connection pooling, configuration, indexing and query execution are implemented (MTS 1, Dec 2025). Systems coding: implement an in-memory sparse file class and discuss storage layout, concurrency and compression (MTS 2 C++/Golang, May 2025); build a command-line archive tool (create, extract, list, extract-file, --verbose) with your own archive format and no compression libraries (MTS, 2 YOE, May 2025). Language-internals rounds for Python roles: timing decorator on a recursive function, custom context manager, Flask middleware, nth-highest salary SQL, top-3 prefix matches with a Trie, paginated FastAPI endpoint (Mar 2026). JavaScript/React machine coding for a frontend-heavy full-stack role (Apr 2026). OS, memory management, Linux and networking questions in MTS 1 technical rounds.

## System design

New grad campus loops can include a system design concepts round (caching, indexing, query optimization, API design, then a small design). MTS 1 laterals report an HLD round (chat application). MTS 2 gets combined LLD+HLD (inventory management, Design LeetCode with emphasis on database entities and their interactions). Storage/platform teams may replace design with systems coding (sparse file class, concurrency).

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Nutanix core values: 'Hungry, Humble, and Honest with Heart' (culture page; the FAQ writes 'Hungry, Humble, Honest, and with Heart'). The official FAQ adds working as one team, customer obsession, integrity and ownership, growth mindset, long-term thinking. ([official page](https://careers.nutanix.com/en/life-at-nutanix/culture/))

**What they look for:**

- Clear reasons for wanting the role and Nutanix (official prep FAQ)
- A career vision and what an ideal opportunity looks like for you (official)
- How your background maps to the role, and what sets you apart (official)
- Knowledge of Nutanix: corporate overview, customers, impact report, financials (official)
- Interest in core infrastructure, open source and messaging systems (HM round report, Dec 2025)
- For students (official FAQ): curiosity, preparation, initiative, critical thinking; know what Nutanix does and why it excites you; talk about projects, problem-solving approach and how you collaborate; 'mindset as much as skillset'

**Questions to prepare:**

- What attracted you to this role and to Nutanix?
- What is your career vision?
- How does your experience relate to this role?
- What sets you apart from other candidates?
- Tell me about your open-source work and the core technologies you want to work on.
- Explain how Kafka or your messaging system works in your current project.

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Make hard graph problems routine: topological sort, Dijkstra and BFS with path reconstruction appear from OA to MTS 2.
- Write clean, production-quality code in one pass (good names, small functions, edge cases); an MTS 2 was rejected for code quality after solving both problems.
- Practice the debugging round: clone a mid-size open-source project (a database driver works well) and time yourself finding where pooling, config and query execution live.
- Revise OS memory management, threads and concurrency, Linux commands and networking; they show up in MTS 1 CodePair rounds and campus MCQs.
- For language-specific roles, prepare internals: Python decorators, context managers and generators; Go/C++ concurrency; JS closures and currying.
- Indian students: Nutanix recruits only at partner colleges from June to December/January; ask your placement cell early and keep CGPA above common cutoffs (8.0 at one NIT).
- Prepare the official FAQ answers: why Nutanix and this role, your career vision, how your background fits, what sets you apart; learn the values (Hungry, Humble, and Honest with Heart).
- Outside India, assume internships do not sponsor visas unless the posting says so (official FAQ).
- Storage and platform teams may skip LeetCode for systems coding: practice building a small file-format tool (archive, sparse file) with only the standard library, and explain concurrency and storage layout choices.

## 4-week plan for Nutanix

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Nutanix core values: 'Hungry, Humble, and Honest with Heart' (culture page; the FAQ writes 'Hungry, Humble, Honest, and with Heart'). The official FAQ adds working as one team, customer obsession, integrity and ownership, growth mindset, long-term thinking. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://careers.nutanix.com/en/>
- <https://careers.nutanix.com/en/student-programs/>
- <https://careers.nutanix.com/en/how-we-hire-faqs/>
- <https://careers.nutanix.com/en/life-at-nutanix/culture/>
- <https://www.levels.fyi/companies/nutanix/salaries/software-engineer>
- <https://www.levels.fyi/companies/nutanix/salaries/software-engineer/locations/united-states>
- <https://leetcode.com/discuss/post/8515566/nutanix-mts-1-by-its_rishavrajput-r85n/>
- <https://leetcode.com/discuss/post/7457871/nutanix-mts-1-bengaluru-by-anonymous_use-rvca/>
- <https://leetcode.com/discuss/post/7429281/nutanix-interview-experience-mts-1-15-yo-o4ln/>
- <https://leetcode.com/discuss/post/7314239/my-nutanix-mts-1-interview-experience-an-iqqg/>
- <https://leetcode.com/discuss/post/6951560/nutanix-interview-experience-mts-1-devex-qany/>
- <https://leetcode.com/discuss/post/6997230/nutanix-sde-interview-experience-56-lpa-jagsc/>
- <https://leetcode.com/discuss/post/6868500/microsoft-vs-nutanix-new-graduate-offer-0cywe/>
- <https://leetcode.com/discuss/post/8493262/nutanix-mts-2-devex-interview-experience-o1sl/>
- <https://leetcode.com/discuss/post/8315354/mts-2-interview-experience-nutanix-by-an-31jc/>
- <https://leetcode.com/discuss/post/8314146/nutanix-mts-2-interview-experience-by-cg-hvhy/>
- <https://leetcode.com/discuss/post/8097538/mts-2-nutanix-f2f-drive-on-22nd-april-by-6b9j/>
- <https://leetcode.com/discuss/post/8097444/mts-2-nutanix-by-anonymous_user-xwom/>
- <https://leetcode.com/discuss/post/7650412/india-nutanix-mts-2-python-interview-exp-k3m7/>
- <https://leetcode.com/discuss/post/7552936/nutanix-sde-2-interview-experience-by-an-rf0k/>
- <https://leetcode.com/discuss/post/7551367/nutanix-hacker-rank-assesment-by-anonymo-f54c/>
- <https://leetcode.com/discuss/post/7032276/nutanix-interview-dsa-by-anonymous_user-9zds/>
- <https://leetcode.com/discuss/post/6817116/nutanix-mts-2-interview-experience-june-qsxar/>
- <https://leetcode.com/discuss/post/6723679/nutanix-mts-2-cgolang-interview-by-anony-o3qd/>
- <https://leetcode.com/discuss/post/6331933/nutanix-interview-mts-2-by-anonymous_use-0g7c/>

> **Watch out:** Fact-checked 2026-10-04: every URL was re-fetched. careers.nutanix.com returns 403 to scripts, so it was read in a browser; LeetCode posts were read through LeetCode's public GraphQL API (slugs matched to IDs) and problem slugs checked through the GraphQL question API (Alien Dictionary is premium). Official pages confirmed: How We Hire FAQ (1 to 2 rounds with hiring leaders after the Talent Advisor, India campus June to December/January, partner colleges only, intern countries, most internships no visa sponsorship), culture page (values), Student Programs page (student FAQ). Corrections made: values nickname "the 4 H's" removed (not on official pages); Levels.fyi MTS1 YOE restated as a median; the May 2025 hiring drive is no longer described as virtual (post does not say); JS currying reattributed to an SDE 2 round, not 'full-stack'; the Sep 2026 MTS-1 '52 lakh' figure explained as counting the full 4-year stock grant. Almost all 2025 to 2026 interview data is from India (Bengaluru, Pune); no 2025 to 2026 US intern or new grad write-up was found, so US loops (San Jose, Durham) are not described. No detailed intern interview write-up from 2025 to 2026 was found. Category set to Big Tech (US-headquartered public company) although most early-career hiring evidence is India campus hiring. Rounds vary heavily by team (DevEx, NDB, Data Platform, AOS storage, Python automation). The new grad MTS 2 offer (Jun 2025) may reflect a master's graduate. Levels.fyi values are all-experience per-level figures, not new-grad-only. Web search budget was exhausted, so Glassdoor, Reddit, Blind or YouTube were not checked; LeetCode Discuss search was used instead.

Next: [All companies](index.md)
