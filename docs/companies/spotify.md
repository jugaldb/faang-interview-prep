# Spotify interview guide

Audio streaming platform; loops pair a project-plus-trivia tech screen with coding, Spotify-feature system design, a production-debugging case study, and values interviews. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Global Summer Internship Program: 10 weeks, June to August, office-based in London, Stockholm or NYC only. |
| **New grad level** | Associate Engineer or Engineer I (Levels.fyi ladder: Associate Engineer, Engineer I, Engineer II, Senior Engineer, Staff Engineer). Graduated P&T interns can join the 8-month Emerging Talent Program. |
| **0 to 3 years** | Engineer I for about 0 to 3 yrs, Engineer II for roughly 3 to 6 yrs (job titles look like 'Backend Engineer II'). Level is set after the loop and can be reduced (a 2025 MLE was moved from Senior to MLE II). |
| **Online assessment** | Not standardized; when used, the platform is not named in reviews. Live screens use CoderPad (official) or HackerRank. : Reported OA: LeetCode easy-medium plus a logic puzzle (NYC SWE, 2025); LeetCode medium-hard (US SWE intern, Oct 2025). Data engineering screens add SQL (window functions). |
| **Coding rounds** | Interns: 1 to 2 technical interviews. Full-time: 1 technical screen (60 to 75 min) plus 1 onsite coding round (some loops have 2 DSA rounds). |
| **Behavioral** | Spotify's careers site (Oct 2026) lists 3 values called 'The Bassline': One Team, Human Judgment, Make It Happen. Older guides (e.g. interviewing.io) still list five values: Innovative, Collaborative, Sincere, Passionate, Playful. Prepare stories for the current three. |
| **Timeline** | Official: interview rounds are recruiter screen, second interview with one or two team members, then a final round with multiple people; reply targeted within a few days after the final. Reported: 3 weeks (London backend offer, 2025) to 3 to 4 weeks (Mar 2026 review); London 2.5 months (Jun 2025) and another 2.5 months with repeated reschedules (Dec 2025); NYC up to 3 months; long silences between rounds and some candidates ghosted. Internships: 10 weeks June to August; 2027 recruitment details not yet published as of Oct 2026. CHANGE: Spotify moved to co-CEOs (Alex Norstrom and Gustav Soderstrom) with Daniel Ek as executive chairman (Wikipedia), and its careers site now lists three values instead of the older five. |
| **New grad pay** | Levels.fyi (read 2026-10-04): US Associate Engineer average total comp $137,729 (21 data points, none in the last 12 months, mostly 2022 to 2023), US Engineer I average $161,823 (2 points in the last 12 months), US Engineer II average $226,620; Spotify pay is base-heavy with small stock. UK Associate Engineer average about GBP 57k; Sweden Engineer I average about SEK 637k (stale). Treat US and Sweden entry-level numbers as low-confidence. |
| **Official links** | [Careers](https://www.lifeatspotify.com/), [Students](https://www.lifeatspotify.com/start-your-journey/students), [Official interview prep](https://www.lifeatspotify.com/start-your-journey), [Values](https://www.lifeatspotify.com/the-way-we-play) |

## Interview process

### New grad

1. **Entry route.** Spotify had no standing new grad SWE program posting on 2026-10-04; the official early-career path is the Global Summer Internship Program plus the 8-month Emerging Talent Program (fixed term) for graduated Product and Technology interns. Engineer I roles follow the standard engineering process below.
2. **Recruiter screen.** Official: video or phone call with a recruiter about your background and the role (Google Meet). Candidates report 15 to 30 min with 'why Spotify', expected level, salary expectations and work authorization or visa status (a NYC 2026 candidate says Spotify does sponsor but wants it flagged early).
3. **Technical screen (60 to 75 min).** With one or two engineers: discuss a past or side project, answer domain or CS trivia (Java garbage collection, threads, TCP vs UDP, CAP, eventual consistency), then 1 to 2 LeetCode easy-medium problems on CoderPad or HackerRank. A Feb 2026 LeetCode post, a Jul 2025 review and an Amsterdam May 2026 review all describe a 75-min screen.
4. **Final loop (about 4 x 60 min, virtual).** Coding (LeetCode medium, sometimes hard, e.g. Find Median from Data Stream), system design of a Spotify-style feature, a case study (debug a failing production service as the on-call engineer using logs and Linux commands), and a values (behavioral) interview. Official: one interviewer leads while others observe. Mobile and web roles swap in an IDE build round or a frontend task.
5. **Decision.** Official: Spotify aims to reply within a few days of the final interview. Candidates report weeks between rounds and 3 weeks to 3 months overall.

### Intern

1. **Application.** Students in their graduating or penultimate year (Associates, Bachelor's, Master's, PhD, or bootcamp). Apply only through Spotify's jobs site; no late applications accepted; referrals not required. On 2026-10-04 the page said 'Information regarding our 2027 internship opportunities coming soon.'
2. **Recruiter call (15 to 30 min).** CV walkthrough, why Spotify, what music means to you, logistics.
3. **Online assessment (some candidates).** An intern (Oct 2025 review, location not stated) and a NYC SWE hire (Feb 2025 review) report an OA with LeetCode easy to hard problems (the NYC hire's OA also had a logic puzzle). Not reported in most UK or Sweden intern reviews.
4. **Technical interview.** One technical with one or two engineers: LeetCode easy-medium (e.g. Kth largest element; a string medium in 25 min; two problems in Stockholm) plus domain or CS questions (what is a thread) and resume discussion. One 2025 intern loop (location not stated) had two technicals: one on data structures, one on system design basics.
5. **Values / hiring manager interview.** Culture and values or hiring manager conversation, sometimes the same day as the technical (London 2025).

### With 1 to 3 years of experience

For 1 to 3 yrs (Engineer I/II) the loop is the same shape as above with higher bars: the tech screen leans more on domain trivia for your stack (Java/JVM, Kotlin, JavaScript), the onsite coding may be LeetCode hard, system design is a full Spotify feature (friends activity feed, playlist images, ad server, recommendations, Spotify Wrapped for data roles), and the case study simulates an incident or latency investigation. Mobile loops include an IDE round (build an Android view or parse data into a table) and a feature design round. A Stockholm candidate (2026) was required to code in Kotlin, a language listed in the posting but not their strongest.

## Online assessment

- **Platform:** Not standardized; when used, the platform is not named in reviews. Live screens use CoderPad (official) or HackerRank.
- **Format:** Reported OA: LeetCode easy-medium plus a logic puzzle (NYC SWE, 2025); LeetCode medium-hard (US SWE intern, Oct 2025). Data engineering screens add SQL (window functions).
- **Notes:** Most Spotify candidates go straight from recruiter call to a live technical screen; do not expect an OA by default.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** Interns: 1 to 2 technical interviews. Full-time: 1 technical screen (60 to 75 min) plus 1 onsite coding round (some loops have 2 DSA rounds).
- **Style:** LeetCode easy to medium in screens, medium to hard onsite (heaps, BFS on graphs, backtracking such as Combination Sum II, strings and hash maps), often themed on music: playlists, songs, listening counts. Screens mix in quiz-style CS questions.
- **Environment:** CoderPad (named on Spotify's FAQ) or HackerRank for coding; Google Meet or Zoom for video; Mural for design whiteboarding; mobile roles use a real IDE.
- **Graded on:** Working solution and complexity, clear communication, collaboration with the interviewer (a 2025 London candidate was rejected as 'not being collaborative enough'), plus depth on your own project.
- **Reported focus topics:** Heaps and order statistics (median stream, kth largest), Backtracking (combination sums over song durations), Strings and hash maps (play counts, visit patterns), Graphs and trees (BFS, LCA in org charts), CS fundamentals trivia: GC, threads, stack vs heap, TCP vs UDP, CAP, Production debugging with logs, metrics and Linux commands, System design of Spotify features (feeds, images, ads, recommendations), Behavioral mapped to One Team, Human Judgment, Make It Happen

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **5** distinct problems tagged to Spotify in the last 6 months (0 in the last 30 days, 5 in the last 3 months, 12 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 60%, Easy 20%, Hard 20%

**Most tagged topics (share of problems):** Array 60%, Sorting 60%, Hash Table 40%, String 40%, Design 40%, Data Stream 40%, Heap (Priority Queue) 40%, Sliding Window 20%, Queue 20%, Divide and Conquer 20%

> **Watch out:** Spotify has thin LeetCode data. Weight the reported questions and the format notes above more than this list.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 3 months | Hash Table, String, Sliding Window |
| 2 | [Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/) | Easy | 3 months | Array, Design, Queue, Data Stream |
| 3 | [Analyze User Website Visit Pattern](https://leetcode.com/problems/analyze-user-website-visit-pattern/) | Medium | 3 months | Array, Hash Table, String, Sorting |
| 4 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | 3 months | Array, Divide and Conquer, Sorting, Heap (Priority Queue) |
| 5 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | 3 months | Two Pointers, Design, Sorting, Heap (Priority Queue) |

### Signature problems

Problems where Spotify accounts for a large share of all recent tags across companies. These are the most Spotify-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/) | Easy | 3 months | Array, Design, Queue, Data Stream |
| 2 | [Analyze User Website Visit Pattern](https://leetcode.com/problems/analyze-user-website-visit-pattern/) | Medium | 3 months | Array, Hash Table, String, Sorting |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Given song durations and a target playlist length, find all combinations that sum to the target | Software Engineer Intern (location not stated) | 2025-10 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW100602309.htm) |
| LeetCode string-manipulation medium in 25 minutes, then resume discussion | Software Engineering Intern, NYC (offer) | 2026-03 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW103174315.htm) |
| [Kth largest element in an array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Software Engineer Intern (offer; location not stated) | 2025-04 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW96910282.htm) |
| Two LeetCode problems plus 'What is a thread?' | Software Engineer Intern, Stockholm | 2025-04 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW96956964.htm) |
| Domain questions, a LeetCode problem and culture fit in one day | Software Engineer Intern, London | 2025-11 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW101157796.htm) |
| [Find median from a data stream (onsite coding, LeetCode hard)](https://leetcode.com/problems/find-median-from-data-stream/) | Software Engineer, London | 2025-06 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW100421213.htm) |
| Design a Spotify friends activity feed | Software Engineer, London | 2025-06 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW100421213.htm) |
| Case study: debug a production system with logs and Linux commands | Software Engineer (location not stated) | 2025-12 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW101955969.htm) |
| Case study: observe a latency issue and troubleshoot it | Software Engineer, London | 2025-12 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW104071071.htm) |
| Case study: debug a failing service like an on-call engineer | Software Engineer (offer; location not stated) | 2025-02 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW95380213.htm) |
| Design a recommendation engine for a music streaming service | Software Engineer, NYC (offer) | 2025-02 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW95367822.htm) |
| [Combination Sum II variation (each candidate used once, unique combinations)](https://leetcode.com/problems/combination-sum-ii/) | Android Engineer onsite, NYC | 2025-05 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW97688504.htm) |
| How does Java garbage collection work? | Software Engineer, Amsterdam | 2026-05 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW104376512.htm) |
| What is eventual consistency? Explain the CAP theorem. | Data Engineer tech screen (location not stated) | 2025-12 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW101758375.htm) |
| Simulate traffic lights using plain HTML, JS and CSS | Software Engineer (frontend), NYC | 2025-02 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW100011645.htm) |
| Most played songs: build a playlist of a user's most frequently played songs | Mid-level (Hello Interview; Spotify report, other reports are Amazon) | 2025-09 | [post](https://www.hellointerview.com/community/questions/most-played-songs/cm6jwvyod0093ui4bebdi8pk9) |
| [Second largest digit in a string](https://leetcode.com/problems/second-largest-digit-in-a-string/) | Mid-level (Hello Interview) | 2025-03 | [post](https://www.hellointerview.com/community/questions/second-largest-digit/cm5eguhaf03ea838oa7tt4usi) |
| [Analyze user website visit pattern (LC 1152 is Premium)](https://leetcode.com/problems/analyze-user-website-visit-pattern/) | Mid-level (Hello Interview; Spotify reports May and Jul 2026) | 2026-07 | [post](https://www.hellointerview.com/community/questions/user-website-pattern/cm5eguhad02we838owbmwozki) |
| Design a playlist image service (upload and manage custom playlist images) | Mid-level (Hello Interview) | 2026-06 | [post](https://www.hellointerview.com/community/questions/playlist-image-service/cmra055cb0ode08adcrfjwizr) |
| Design a low-latency ad banner delivery system for the Spotify desktop app | Mid-level (Hello Interview) | 2026-05 | [post](https://www.hellointerview.com/community/questions/ad-banner-delivery/cmp8oauw90pu809adsxkkbiuh) |
| Difference between TCP and UDP (domain question in the tech screen) | Backend Engineer, London (offer) | 2025-04 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW97855846.htm) |
| Find the two largest elements (LeetCode task in a 75-min tech screen, after project discussion and technical questions) | Software Engineer, Amsterdam | 2026-05 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW104376512.htm) |
| Merge two playlists together (LeetCode style) | Senior iOS Engineer, London | 2026-05 | [post](https://www.glassdoor.com/Interview/Spotify-Interview-E408251-RVW104384909.htm) |
| Lowest common parent of a list of employees in an org chart; expected to build the graph on your local machine and run the code | Senior (Hello Interview; 3 reports, Spotify Jan and Sep 2026) | 2026-09 | [post](https://www.hellointerview.com/community/questions/lowest-common-parent/cmb7t78sd019wad08emkjhdco) |

## Beyond LeetCode

Case study: live production troubleshooting or on-call role play (debug a failing service using logs and Linux commands; investigate a latency issue). Domain trivia in the tech screen (Java GC, threads, stack vs heap, TCP vs UDP, CAP). Mobile IDE rounds (build an Android app or view from scratch; parse data into a table view). Frontend tasks (simulate traffic lights in plain HTML, JS and CSS). Data engineering: SQL window functions, Spotify Wrapped design.

## System design

Part of full-time loops including Engineer I/II (Glassdoor 2025 to 2026), and one 2025 intern report mentions a 'system design basics' round. Prompts are Spotify product features: friends listening activity feed, playlist image upload and generation service, banner ad server rotating ads every 30 seconds on desktop, music recommendation engine, appointment booking backend, Spotify Wrapped (data engineering). Expect follow-ups on scale and trade-offs. Mobile loops use a lighter feature/screen design round.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Spotify's careers site (Oct 2026) lists 3 values called 'The Bassline': One Team, Human Judgment, Make It Happen. Older guides (e.g. interviewing.io) still list five values: Innovative, Collaborative, Sincere, Passionate, Playful. Prepare stories for the current three. ([official page](https://www.lifeatspotify.com/the-way-we-play))

**What they look for:**

- Values alignment, ownership and pride in your work, adaptability and collaboration, drive (official interview tips)
- One Team: sharing context, breaking silos, winning together
- Human Judgment: thoughtful risk-taking, learning from mistakes
- Make It Happen: bias to action, execution and urgency
- Framing achievements as team wins rather than solo heroics
- How you use and promote AI tools in your work (2026 reports)

**Questions to prepare:**

- Why Spotify? What does music mean to you? (SWE Intern, NYC, 2026)
- Tell me about yourself and why Spotify. (SWE Intern recruiter call, London, offer, Mar 2026)
- Describe an architectural decision you made. What would you have done differently? (SWE, Jun 2025)
- Introduce a side project you worked on. (SWE tech screen, Jul 2025)
- What was the most complicated project at your previous company? (SWE recruiter call, NYC, May 2026)
- Tell me about work you are proud of. (SWE, Mar 2026)
- Tell me about a new process you welcomed and why. (Hello Interview, senior, 2026-01)
- How have you promoted AI usage in your team? (Hello Interview, mid-level, 2026-06)
- What do you think of diversity and inclusivity? (Hello Interview, 2025-01)

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Prepare for 10 to 15 minutes of CS trivia in the tech screen in your main language: garbage collection, threads vs processes, stack vs heap, TCP vs UDP, CAP and eventual consistency.
- Pick one project you can discuss for 15 minutes; screens open with it and interviewers ask what you would change.
- Practice an on-call case study: from an alert and some logs, narrow the cause with Linux commands, mitigate first, then find the root cause and explain the fix.
- Practice designing Spotify features (friends activity, playlist images, ad rotation, recommendations, Wrapped) end to end with APIs and data models.
- Map 6 to 8 stories to the current three values (One Team, Human Judgment, Make It Happen); older five-value lists are outdated.
- Talk through your thinking and invite input during coding and design; candidates report rejections for not being collaborative enough.
- Internships are only in London, Stockholm and NYC and late applications are rejected; check the students page for 2027 dates.
- Expect slow replies; follow up politely with your recruiter and keep other interviews going.
- International candidates: recruiter calls ask about work authorization; a NYC 2026 candidate reports Spotify sponsors visas but wants it raised early, so state your status in the first call.

## 4-week plan for Spotify

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Spotify's careers site (Oct 2026) lists 3 values called 'The Bassline': One Team, Human Judgment, Make It Happen. Older guides (e.g. interviewing.io) still list five values: Innovative, Collaborative, Sincere, Passionate, Playful. Prepare stories for the current three. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).

> **Watch out:** Strong: official process stages, tools (Google Meet, CoderPad, Mural), internship rules (10 weeks, London/Stockholm/NYC, eligibility, no late applications), and the new three-value 'Bassline' (verified on lifeatspotify.com; the change date is not stated). Medium: loop composition varies by team and office (some loops have 2 DSA rounds, some have the case study, mobile/web loops differ); OA use is occasional. Weak: entry-level compensation (US and Sweden Levels.fyi data is old and sparse) and the exact new grad level name (Associate Engineer vs Engineer I). LeetCode discuss has very few 2025 to 2026 Spotify SWE posts, so most questions come from Glassdoor (permalinks confirmed in a browser) and Hello Interview community reports. Spotify 2027 internship dates were not published as of 2026-10-04. Reddit and Blind were not covered because the web search budget ran out. FACT-CHECK (2026-10-04, second agent): all URLs re-fetched (lifeatspotify.com, Levels.fyi and Lever via curl; LeetCode via GraphQL; Glassdoor permalinks and Hello Interview timelines rendered in a browser). Fixed: many Glassdoor reviews do not state a location, so 'US', 'UK', 'UAE', 'Canada' and 'Sweden' labels were removed; several Hello Interview dates were off by a month (playlist image service Jun 2026, ad server May 2025, process-change Jan 2026, diversity Jan 2025); behavioral questions that had no source now cite Glassdoor permalinks; LC 1152 is Premium.

Next: [All companies](index.md)
