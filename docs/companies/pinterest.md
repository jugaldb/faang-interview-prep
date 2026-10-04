# Pinterest interview guide

Visual discovery and shopping platform; lean intern loop (CodeSignal, one live round), multi-part practical coding, and a new AI-assisted coding round. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Software Engineering Intern (Pintern), not leveled |
| **New grad level** | IC13 (Software Engineer I), also called L3 |
| **0 to 3 years** | IC13 (0 to 2 yrs) to IC14 (Software Engineer II, about 2 to 5 yrs) |
| **Online assessment** | CodeSignal (General Coding Assessment) : CodeSignal GCA, async from home. Standard GCA format is 4 questions in 70 minutes scored up to 600; Pinterest-specific reports confirm the GCA and scores (550, 600) but not the question count, and Extern describes 'one or two' DSA problems. |
| **Coding rounds** | Intern: 1 live round. New grad: 4 live rounds. Experienced: phone screen plus 2 to 3 coding rounds and a new AI-assisted coding round. |
| **Behavioral** | Pinterest values: Put Pinners first, Aim for extraordinary, Create belonging, Act as one, Win or learn |
| **Timeline** | University roles typically open August or September (official); peak season runs August to April and all applicants are notified by the end of the season (official). Summer 2027 SWE intern and University Grad SWE postings went live Oct 1, 2026 (Greenhouse); Extern says CodeSignal invites usually arrive within a couple of weeks of applying. Third-party guides estimate 3 to 5 weeks from screen to decision; an ML intern hired for summer 2025 (post dated Oct 2024) reported about 1.5 months end to end and an offer one week after the last round. Hiring committee decides for interns and new grads; experienced hires team-match after the onsite. |
| **New grad pay** | Levels.fyi (Oct 4, 2026, US): IC13 Software Engineer I median total comp $224K/yr (base $163K, stock $49K/yr, bonus $12.7K), range $171K to $241K+; IC14 median $313K. Official 2027 University Grad SWE (USA) base range $129,022 to $174,283 plus equity. Official 2027 SWE intern pay $8,250 to $11,000 per month. |
| **Official links** | [Careers](https://www.pinterestcareers.com/), [Students](https://www.pinterestcareers.com/early-career/university-recruiting/), [Official interview prep](https://www.pinterestcareers.com/life-at-pinterest-blog/interviewing/interview-process-general-software-engineering-interns-and-new-grads/), [Values](https://www.pinterestcareers.com/life-at-pinterest-blog/pinterest-life/inspired-to-evolve-pinterest-s-values-reimagined/) |

## Interview process

### New grad

1. **Resume review.** Apply to University Grad Software Engineer 2027 (USA), posted Oct 1, 2026 on Greenhouse. Requires BS/MS by June 2027, start Jan to Sep 2027, 1+ yr programming experience, SWE internship strongly preferred. Hybrid (1 to 2 days/week) or remote US.
2. **CodeSignal assessment.** Async CodeSignal General Coding Assessment (GCA). Official: 'If you receive a passing score, the recruiter will reach out and schedule a 30-minute phone screen.' CodeSignal's standard GCA is 4 questions in 70 minutes, scored up to 600 (TikTok's Dec 2025 CodeSignal OA matched this exactly); Pinterest-specific posts confirm only the GCA and a score of 550, and Extern says the Pinterest GCA is scored out of 600 but describes 'one or two' DSA problems, so confirm the format in your invite. An ML intern who signed a summer 2025 offer advanced with 550. LeetCode Discuss threads from Jan and Feb 2026 confirm the GCA for both new grad and intern roles.
3. **Recruiter phone screen.** 30 minutes: your interests, role expectations, and what the technical interview covers. Reported questions: why Pinterest, what are your interests.
4. **Technical interview 1.** 60 minutes live coding with one engineer. Must pass to continue.
5. **Technical interviews 2 to 4.** Three more 60-minute technical interviews (3 hours total). Expect DSA plus possibly an AI-collaboration segment: 2027 postings say interviews 'explore your foundational skills and how you collaborate with AI'.
6. **Hiring committee review.** Committee makes the final offer decision (official).

### Intern

1. **Resume review.** Software Engineer Intern 2027 (USA) posted Oct 1, 2026. BS or MS student on track to graduate by June 2029. Two 12-week cohorts: May 17 to Aug 6, 2027 or Jun 14 to Sep 3, 2027. Hybrid or remote. Separate 2027 Software Engineering Intern postings exist for Dublin, Toronto and Zurich (Greenhouse, Oct 2, 2026).
2. **CodeSignal assessment.** Same GCA as new grads; passing score required.
3. **Recruiter phone screen.** 30 minutes, basic behavioral (why Pinterest, interests) and logistics.
4. **Technical interview.** One 60-minute live coding interview with an engineer (official). A Dublin intern candidate (Nov 2024, Google Meet) reported two questions: hashmaps and arrays, then graphs and BFS.
5. **Hiring committee review.** Final offer decision. Official page says you hear back by the end of the season.

### With 1 to 3 years of experience

For IC14 (SWE II) and above: recruiter screen, then a 60-minute technical phone screen (often one multi-part problem with escalating follow-ups), then a virtual onsite. A June 2025 SWE II candidate was told 5 parts: 3 coding, 1 system architecture, 1 hiring manager. Aug to Sep 2026 reports show 2 coding rounds, 1 to 2 system design rounds (typeahead, merchant catalog updates), 1 behavioral, plus a newly added AI-assisted coding round (implement a read-through cache in a provided project repo using AI; one candidate was rejected on that round for weak problem comprehension before prompting). Team matching happens after a passing onsite. Third-party guides say experienced phone screens may use CoderPad or Karat.

## Online assessment

- **Platform:** CodeSignal (General Coding Assessment)
- **Format:** CodeSignal GCA, async from home. Standard GCA format is 4 questions in 70 minutes scored up to 600; Pinterest-specific reports confirm the GCA and scores (550, 600) but not the question count, and Extern describes 'one or two' DSA problems.
- **Notes:** Official process requires a passing score before the recruiter call. A perfect 600 does not guarantee an offer (Extern quotes a candidate who scored 600 and was rejected). Live interview questions assume no AI unless the interviewer says AI is allowed (official AI-in-hiring page).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Intern: 1 live round. New grad: 4 live rounds. Experienced: phone screen plus 2 to 3 coding rounds and a new AI-assisted coding round.
- **Style:** LeetCode medium to hard, often wrapped in Pinterest product context (pins, boards, policy violation logs, elevators) and delivered in 3 to 5 escalating parts. Pinterest-tagged LeetCode problems skew Hard. Graphs and BFS appear repeatedly.
- **Environment:** Video call (Google Meet reported) with a shared coding pad where you run test cases; AI-assisted round uses a provided project repository with AI tools allowed.
- **Graded on:** Working code that passes your own test cases, how far you get through follow-up parts, clean readable code, communication, and in the AI round, understanding the problem before prompting and owning every line ('Copilot, not Autopilot').
- **Reported focus topics:** Graphs and BFS (pins and boards as a bipartite graph), Multi-part hash map and sorting problems on event logs, Sweep line and intervals over timestamps, Backtracking and DFS, Tries and typeahead, Design data structures (LFU, O(1) updates), System design for IC14+: feeds, typeahead, catalog pipelines, AI-assisted coding in an existing codebase

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **15** distinct problems tagged to Pinterest in the last 6 months (7 in the last 30 days, 9 in the last 3 months, 45 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 60%, Hard 40%

**Most tagged topics (share of problems):** Array 60%, String 33%, Sorting 33%, Greedy 27%, Depth-First Search 20%, Dynamic Programming 20%, Math 20%, Hash Table 20%, Breadth-First Search 20%, Heap (Priority Queue) 13%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | Hard | 30 days | Array, String, Depth-First Search, Graph Theory |
| 2 | [Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing/) | Hard | 30 days | Array, Dynamic Programming, Backtracking, Bit Manipulation |
| 3 | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | Hard | 30 days | Math, String, Backtracking |
| 4 | [Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string/) | Medium | 30 days | Two Pointers, String, Binary Search, Greedy |
| 5 | [Bus Routes](https://leetcode.com/problems/bus-routes/) | Hard | 30 days | Array, Hash Table, Breadth-First Search |
| 6 | [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) | Medium | 30 days | Linked List, Math, Stack |
| 7 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Hard | 30 days | Array, Binary Search, Dynamic Programming, Greedy |
| 8 | [Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/) | Medium | 3 months | Array, Greedy, Sorting |
| 9 | [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) | Hard | 3 months | String, Depth-First Search, Design, Trie |
| 10 | [Design A Leaderboard](https://leetcode.com/problems/design-a-leaderboard/) | Medium | 6 months | Hash Table, Design, Sorting |
| 11 | [Coin Change](https://leetcode.com/problems/coin-change/) | Medium | 6 months | Array, Dynamic Programming, Breadth-First Search, Knapsack Problem |
| 12 | [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) | Medium | 6 months | Array, Hash Table, Tree, Depth-First Search |
| 13 | [Put Boxes Into the Warehouse II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/) | Medium | 6 months | Array, Greedy, Sorting |
| 14 | [Multiply Strings](https://leetcode.com/problems/multiply-strings/) | Medium | 6 months | Math, String, Simulation |
| 15 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | 6 months | Array, Breadth-First Search, Matrix |

### Signature problems

Problems where Pinterest accounts for a large share of all recent tags across companies. These are the most Pinterest-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | Hard | 30 days | Array, String, Depth-First Search, Graph Theory |
| 2 | [Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing/) | Hard | 30 days | Array, Dynamic Programming, Backtracking, Bit Manipulation |
| 3 | [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | Hard | 30 days | Math, String, Backtracking |
| 4 | [Bus Routes](https://leetcode.com/problems/bus-routes/) | Hard | 30 days | Array, Hash Table, Breadth-First Search |
| 5 | [Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string/) | Medium | 30 days | Two Pointers, String, Binary Search, Greedy |
| 6 | [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/) | Medium | 30 days | Linked List, Math, Stack |
| 7 | [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) | Hard | 3 months | String, Depth-First Search, Design, Trie |
| 8 | [Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/) | Medium | 3 months | Array, Greedy, Sorting |
| 9 | [Design A Leaderboard](https://leetcode.com/problems/design-a-leaderboard/) | Medium | 6 months | Hash Table, Design, Sorting |
| 10 | [Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) | Medium | 6 months | Array, Hash Table, Tree, Depth-First Search |
| 11 | [Put Boxes Into the Warehouse II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/) | Medium | 6 months | Array, Greedy, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Shortest Way to Form String (two-part, recursion then two pointers)](https://leetcode.com/problems/shortest-way-to-form-string/) | Software Engineer (phone screen) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-full-loop-rejected-on-the-newly-added-ai-coding-round) |
| Escape room: incrementRoom() must be O(1) | Software Engineer (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-full-loop-rejected-on-the-newly-added-ai-coding-round) |
| AI-assisted coding: add a read-through cache for a Product GET API in an existing repo | Software Engineer (onsite AI round) | 2026-09 | [post](https://prachub.com/interview-questions/ai-assisted-coding-add-a-read-through-cache-for-a-product-get-api-in-an-existing-repo) |
| Policy violation log queries: 5 query types over (postId, policy, timestamp) logs | Software Engineer (phone screen and onsite) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-three-parts-passed-before-time-ran-out) |
| [Pin-board graph: fewest board hops from a start pin to a destination pin (BFS)](https://leetcode.com/problems/bus-routes/) | Software Engineer (phone screen) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-pin-board-bfs-phone-screen-all-tests-passed-still-rejected) |
| Elevator dispatch: n elevators from floor 1, return which elevator takes the last call | Software Engineer (phone screen) | 2026-08 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-the-classic-elevator-question-two-system-design-rounds-and-on-to-team-matching) |
| [Insert operators between numbers to reach a target, then respect precedence](https://leetcode.com/problems/expression-add-operators/) | Software Engineer (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-onsite-with-two-system-design-rounds-and-escalating-follow-ups) |
| Count distinct active pins per time segment from overlapping interaction logs (sweep line) | Software Engineer (onsite coding) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-onsite-with-two-system-design-rounds-and-escalating-follow-ups) |
| [Design search typeahead with top-10 popularity-ranked suggestions](https://leetcode.com/problems/design-search-autocomplete-system/) | Software Engineer (onsite system design) | 2026-09 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-onsite-with-two-system-design-rounds-and-escalating-follow-ups) |
| Design merchant catalog updates (single and batch) with image uploads | Software Engineer (onsite system design) | 2026-08 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-the-classic-elevator-question-two-system-design-rounds-and-on-to-team-matching) |
| Design a service that updates a merchant's profile fields (address, social follower counts, start year, country from Wikipedia) at any time | Software Engineer (onsite system design 2) | 2026-08 | [post](https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-the-classic-elevator-question-two-system-design-rounds-and-on-to-team-matching) |
| Remove a node and its descendants from a parent-index forest | Phone screen (same post lists ML theory questions, so likely an ML role; PracHub logged a SWE variant in Aug 2026) | 2025-09 | [post](https://leetcode.com/discuss/post/7236152/pinterest-phone-screening-by-javadyaali-846c/) |
| [Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/) | Phone screen | 2025-05 | [post](https://leetcode.com/discuss/post/6772883/pinterest-phone-screen-by-2237323298-5elc/) |
| [Bus Routes](https://leetcode.com/problems/bus-routes/) | Onsite coding | 2025-04 | [post](https://leetcode.com/discuss/post/6665072/pinterest-onsite-by-lutov17-i1kd/) |
| [Count Subarrays With Score Less Than K](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/) | Onsite coding | 2025-04 | [post](https://leetcode.com/discuss/post/6665072/pinterest-onsite-by-lutov17-i1kd/) |
| [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | Onsite coding | 2025-04 | [post](https://leetcode.com/discuss/post/6665072/pinterest-onsite-by-lutov17-i1kd/) |
| Design the Pinterest feed | Onsite system design | 2025-04 | [post](https://leetcode.com/discuss/post/6665072/pinterest-onsite-by-lutov17-i1kd/) |
| [Similar pins via shared boards (union-find), then distance between two pins (BFS)](https://leetcode.com/problems/accounts-merge/) | Senior MLE (onsite coding) | 2026-07 | [post](https://leetcode.com/discuss/post/8383089/senior-mle-pinterest-by-anonymous_user-2qq6/) |
| [Game leaderboard, a variation of LFU cache](https://leetcode.com/problems/lfu-cache/) | Senior MLE (onsite coding) | 2026-07 | [post](https://leetcode.com/discuss/post/8383089/senior-mle-pinterest-by-anonymous_user-2qq6/) |
| Behavioral round: owned project and its success metrics, a fast decision, feedback, conflict, strongest team environment | Software Engineer (onsite behavioral) | 2026-09 | [post](https://prachub.com/interview-questions/behavioral-deep-dive-owned-project-metrics-fast-decisions-feedback-and-conflict) |

## Beyond LeetCode

AI-assisted coding round (new in 2026, reported for experienced SWE): add a read-through cache to a ProductRepository GET API inside an existing repo, AI tools allowed and judged. Pinterest's AI hiring page says some interview sections explicitly invite AI to show judgment and prompt craft, while live questions assume no AI unless stated. Multi-part 'product' problems (policy violation log queries, elevator dispatch, escape room with O(1) updates).

## System design

Not part of the official intern or new grad loop. Appears for IC14+ as 1 to 2 rounds: typeahead/autocomplete (top-10 by popularity), Pinterest home feed, merchant catalog bulk updates with image processing, large-file upload. Interviewers have asked candidates to start at low scale before sharding.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Pinterest values: Put Pinners first, Aim for extraordinary, Create belonging, Act as one, Win or learn ([official page](https://www.pinterestcareers.com/life-at-pinterest-blog/pinterest-life/inspired-to-evolve-pinterest-s-values-reimagined/))

**What they look for:**

- User-first decisions (Put Pinners first)
- Ownership of a project with clear success metrics
- Collaboration and helping teammates succeed (Act as one)
- Learning from failures (Win or learn)
- AI fluency with judgment: postings ask for using AI as an iterative coding partner while knowing when to ask for help
- Passion for Pinterest and comfort with ambiguity (listed in 2027 postings)

**Questions to prepare:**

- Why Pinterest?
- What are your interests / what area do you want to work on?
- Walk me through a project you owned. How did you measure success?
- Tell me about a decision you made quickly under pressure.
- Tell me about feedback you received and what you changed.
- Tell me about a conflict with a teammate.
- How did you handle an underperforming teammate?
- How do you use AI tools in your work?

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Score as high as you can on the CodeSignal GCA; it gates the recruiter call for interns and new grads.
- Interns get only one live technical round, so one strong 60-minute interview decides the offer. Practice finishing a medium plus a follow-up in under 45 minutes.
- Practice multi-part problems: Pinterest rounds often have 3 to 5 escalating parts and candidates who stop at part 3 report rejections.
- Drill BFS on bipartite-style graphs (Bus Routes is the closest LeetCode match to the pins and boards question).
- Run and narrate 3 to 4 test cases yourself, including empty inputs; a candidate who passed all tests silently was still rejected.
- Prepare for an AI-assisted round: read the repo and restate the task before you prompt, then review and explain every generated line.
- Read Pinterest's AI in hiring page before your loop: no AI in live questions unless the interviewer says so.
- Map 1 to 2 stories to each of the 5 values, and have a sharp answer to 'Why Pinterest?'

## 4-week plan for Pinterest

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Pinterest values: Put Pinners first, Aim for extraordinary, Create belonging, Act as one, Win or learn round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.pinterestcareers.com/>
- <https://www.pinterestcareers.com/early-career/university-recruiting/>
- <https://www.pinterestcareers.com/life-at-pinterest-blog/interviewing/interview-process-general-software-engineering-interns-and-new-grads/>
- <https://www.pinterestcareers.com/life-at-pinterest-blog/interviewing/interview-process-machine-learning-and-data-science-interns-and-new-grads/>
- <https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/>
- <https://www.pinterestcareers.com/life-at-pinterest-blog/pinterest-life/inspired-to-evolve-pinterest-s-values-reimagined/>
- <https://www.pinterestcareers.com/jobs/?gh_jid=7838577>
- <https://www.pinterestcareers.com/jobs/?gh_jid=7838591>
- <https://boards-api.greenhouse.io/v1/boards/pinterest/jobs>
- <https://www.levels.fyi/companies/pinterest/salaries/software-engineer>
- <https://www.levels.fyi/companies/pinterest/salaries/software-engineer/levels/ic13>
- <https://prachub.com/companies/pinterest>
- <https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-full-loop-rejected-on-the-newly-added-ai-coding-round>
- <https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-three-parts-passed-before-time-ran-out>
- <https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-pin-board-bfs-phone-screen-all-tests-passed-still-rejected>
- <https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-the-classic-elevator-question-two-system-design-rounds-and-on-to-team-matching>
- <https://prachub.com/interview-experiences/pinterest-software-engineer-interview-experience-onsite-with-two-system-design-rounds-and-escalating-follow-ups>
- <https://prachub.com/interview-questions/ai-assisted-coding-add-a-read-through-cache-for-a-product-get-api-in-an-existing-repo>
- <https://prachub.com/interview-questions/behavioral-deep-dive-owned-project-metrics-fast-decisions-feedback-and-conflict>
- <https://leetcode.com/discuss/post/7594567/pinterest-swe-gca-by-danielmathewkurien-2ws2/>
- <https://leetcode.com/discuss/post/7498335/pinterest-swe-internship-gca-by-heerp201-vqvb/>
- <https://leetcode.com/discuss/post/7236152/pinterest-phone-screening-by-javadyaali-846c/>
- <https://leetcode.com/discuss/post/6903744/pinterest-software-engineer-ii-june-2025-0es2/>
- <https://leetcode.com/discuss/post/6772883/pinterest-phone-screen-by-2237323298-5elc/>
- <https://leetcode.com/discuss/post/6738846/pinterest-l3-phone-screen-by-lowgnator-qf2k/>

> **Watch out:** Re-verified Oct 4, 2026 (fact-check pass): official Pinterest pages fetched (process page dated Apr 1, 2024; values page dated Apr 18, 2022; AI-in-hiring page; university recruiting FAQ), Greenhouse postings via the public Greenhouse API (intern and new grad postings first published Oct 1, 2026), Levels.fyi IC13/IC14 figures, and every PracHub page. LeetCode Discuss posts confirmed via LeetCode's public GraphQL API (the HTML blocks bots); the old /discuss/interview-experience/5987638/ link was replaced with its canonical /discuss/post/ URL. The official intern/new grad process page may lag 2026 changes (AI-collaboration language now in every 2027 posting). GCA format: CodeSignal's standard 4 questions in 70 minutes is not stated by Pinterest, and Extern describes 'one or two' problems; treat the question count as unconfirmed for Pinterest. Most 2026 PracHub reports are for experienced 'Software Engineer' roles (likely IC14), not new grads; the AI-assisted onsite round is reported only for experienced loops so far (Sep 2026). Two PracHub reports were dated Sep 2026 in the earlier draft but were Aug 2026 interviews (elevator, merchant catalog); fixed. Levels naming: Levels.fyi uses IC13/IC14; candidates also say L3/L4. Pinterest-tagged LeetCode list is premium. Extern figures (just over 110 Pinterns in the largest class, about 85 percent return offers 'in strong years, unofficial') are secondary. Glassdoor (blocked) not used.

Next: [All companies](index.md)
