# Anthropic interview guide

Builds Claude; no internships and few new-grad roles, so juniors enter via Fellows; interviews favor practical Python coding, concurrency and a values round. Updated October 2026.

| | |
|---|---|
| **Category** | AI lab |
| **Intern level** | None. Official careers FAQ (Oct 2026): 'We don't currently offer internships.' Closest option: the Anthropic Fellows Program (4 months, paid weekly stipend). |
| **New grad level** | No dedicated new grad SWE track. Levels.fyi's entry title is 'Software Engineer' (median 1 YOE, only 3 data points). Early-career exception on the Oct 2026 board: Associate Applied AI, Rotational Program, London (0 to 2 years; a customer-facing applied AI role, not core SWE). |
| **0 to 3 years** | Software Engineer (Levels.fyi ladder: Software Engineer, Senior, Lead, Staff, Senior Staff). Most SWE postings on the Oct 2026 board ask for 5+ years. |
| **Online assessment** | CodeSignal (progressive, multi-level workspace) : One project spec in 4 levels over 90 minutes; unit tests must pass to open the next level; scored out of 600. Some 2026 Fellows OAs instead give a mid-sized existing codebase with 5 parts. |
| **Coding rounds** | 1 screen (async 90 min or live 55 to 60 min) plus 1 to 2 onsite coding rounds |
| **Behavioral** | Anthropic values: Act for the global good; Hold light and shade; Be good to our users; Ignite a race to the top on safety; Do the simple thing that works; Be helpful, honest, and harmless; Put the mission first. |
| **Timeline** | interviewing.io: about 3 to 4 weeks and moves fast with competing offers. IGotAnOffer (updated Jun 9, 2026): 4 weeks to 3+ months depending on team matching and references; CodeSignal link usually sent within days of the recruiter call with 5 to 7 days to complete. Official: you can re-apply after 12 months; take your time deciding on an offer. Fellows: rolling reviews, several cohorts a year (official JD); the next cohort is expected to start January 2027 (apply by Oct 18 per the alignment blog); an Aug 2026 Reddit OA report referred to a November cohort. A Sep 2026 SWE candidate scored 580/600 on CodeSignal and was still rejected before interviews, with a note to re-apply in about a year. |
| **New grad pay** | Levels.fyi (checked Oct 4, 2026, US): entry 'Software Engineer' averages about $366.7K total comp from only 3 data points (median 1 YOE; one SF 2026 entry with 2 YOE: $250K base plus $125K stock); Senior SWE averages about $591K. Official figures: Fellows stipend 3,850 USD / 2,310 GBP / 4,300 CAD per week for 4 months plus about $15K/month compute; Associate Applied AI Rotational Program (London, 0 to 2 years, 6-month rotation) £115,000 OTE (on-target earnings: base plus sales commission/bonus target, per the JD). Posted US SWE base ranges on the Oct 2026 board start around $280K to $320K for roles asking 5+ years. There is no new grad salary benchmark because there is no new grad track. |
| **Official links** | [Careers](https://www.anthropic.com/careers/jobs), [Students](https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/), [Official interview prep](https://www.anthropic.com/careers), [Values](https://www.anthropic.com/company) |

## Interview process

### New grad

1. **Route for students and new grads: Anthropic Fellows Program.** 4 months full time, mentored AI safety or ML systems research with external infrastructure. Stipend 3,850 USD / 2,310 GBP / 4,300 CAD per week plus about $15K/month compute (official JD). Workstreams on the Oct 2026 board: AI Safety & Security; ML Systems & Reinforcement Learning; Anthropic Institute (Economics & Policy). Next cohort expected January 2027; the official alignment blog says apply by October 18 for the January cohort; reviews are rolling. You must have work authorization in the US, UK or Canada and be located there during the program; the official JD says Anthropic is not currently able to sponsor visas for fellows (Jugal's post says the same). Official JD: in previous cohorts 25 to 50% of fellows received a full-time offer; the alignment blog says over 35% of past fellows joined Anthropic full time.
2. **Application.** Resume, statement of interest, research interests, technical projects, GitHub or code samples, references (Jugal's post). Anthropic's careers page says to put independent research, a thoughtful blog post or open-source work at the top of your resume.
3. **CodeSignal assessment.** About 90 minutes (Jugal's post). Scored out of 600; a Sep 2025 Fellows candidate quoted the email saying 480/600 or higher is generally enough to advance. 2026 Fellows reports describe a mid-sized existing codebase to extend (a vLLM-like inference server with cache and prefill, 5 parts) where undocumented APIs and an unclear README were the hard part; one candidate with 4 years of experience scored 0/600 (Aug 2026).
4. **Live technical interview.** Live coding with an Anthropic engineer, usually building a small application or system from scratch while explaining your approach (Jugal's post).
5. **Possible prompt engineering / Claude stage.** May include Claude API, tool use, prompt optimization, hallucination handling, few-shot vs zero-shot prompting (Jugal's post).
6. **Research discussion, references, project matching.** Discuss AI safety problems and how you would approach open-ended research questions; references checked; fellows go through project selection and mentor matching (official JD).

### Intern

1. **No SWE internship program.** Official careers FAQ: 'We don't currently offer internships.' Students should target the Fellows Program (if they meet the US/UK/Canada work authorization rule) or build public evidence (open source, research, blog posts) that Anthropic says it weighs.

### With 1 to 3 years of experience

Standard SWE loop (what you face with 1 to 3+ years). (1) Recruiter call, 30 min: why Anthropic specifically, mission and values; interviewing.io says this call is not a formality and you can fail it. (2) Coding screen: either a 90-min CodeSignal progressive assessment (one spec, 4 levels, tests must pass to open the next level; examples: banking system with multiple transaction types, in-memory database, cloud storage/file system with history and merges) or a 55 to 60 min live technical screen on CodeSignal or Colab (practical: web crawler with a multithreading follow-up, stack trace processing, image transformation pipeline with Pillow from JSON). Referrals may skip the async test. (3) Hiring manager call, about 1 hour: in-depth project walkthrough; some include reading code in several languages. (4) Virtual onsite of about 4 to 5 sessions, around 55 minutes each, on Google Meet: coding (CodeSignal, Python), a second role-specific coding round, system design (shared Google Doc), a company values round, and the hiring manager call if not done earlier. (5) Reference checks (taken seriously; reportedly probe conflict and ethical friction) and team matching after the onsite. Decisions are by consensus with the hiring manager as tiebreaker (interviewing.io).

## Online assessment

- **Platform:** CodeSignal (progressive, multi-level workspace)
- **Format:** One project spec in 4 levels over 90 minutes; unit tests must pass to open the next level; scored out of 600. Some 2026 Fellows OAs instead give a mid-sized existing codebase with 5 parts.
- **Notes:** No AI unless the instructions allow it (official candidate AI guidance, updated Jul 10, 2025). Practice extending a small in-memory system while keeping old behavior working, and test history/state edge cases (580/600 candidate's advice). A larger monitor helps (interviewing.io).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 1 screen (async 90 min or live 55 to 60 min) plus 1 to 2 onsite coding rounds
- **Style:** Practical, incremental and first-principles rather than LeetCode puzzles: build, then extend under changing requirements; defend complexity and edge cases; concurrency follow-ups (thread pools, asyncio) are common. LeetCode-style questions still appear occasionally (one 2025 candidate got a LeetCode-style onsite question).
- **Environment:** Google Meet plus CodeSignal or Google Colab. Official careers page: 'You can look things up' but be comfortable with basic syntax and standard libraries. Python is the norm per interviewing.io. Official candidate AI guidance (updated Jul 10, 2025): no AI in take-home assessments or live interviews unless Anthropic says otherwise; Claude is encouraged for interview prep and for polishing your own first-draft application.
- **Graded on:** Correct, working code that passes tests; clean, extensible structure; reasoning about complexity, edge cases and concurrency; clear communication. Values round and references weigh heavily.
- **Reported focus topics:** Python fluency: standard library, collections, classes, typing, Concurrency: threading, concurrent.futures, asyncio, Incremental system builds with tests (bank, in-memory DB, file storage, history and TTL), Reading unfamiliar code and specs quickly, Graph traversal (web crawler BFS), Parsing and data transformation (stack traces, JSON), Hash maps, arrays, strings, sorting, System design for LLM serving (experienced roles), AI safety literacy and Anthropic's published views

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **0** distinct problems tagged to Anthropic in the last 6 months (0 in the last 30 days, 0 in the last 3 months, 4 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Web Crawler Multithreaded](https://leetcode.com/problems/web-crawler-multithreaded/) | Medium | Older | Depth-First Search, Breadth-First Search, Concurrency |
| 2 | [Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/) | Medium | Older | Array, Stack |
| 3 | [Find Duplicate File in System](https://leetcode.com/problems/find-duplicate-file-in-system/) | Medium | Older | Array, Hash Table, String |
| 4 | [Web Crawler](https://leetcode.com/problems/web-crawler/) | Medium | Older | String, Depth-First Search, Breadth-First Search, Interactive |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| [Web crawler (BFS) with a multithreading follow-up using thread pool executors and asyncio](https://leetcode.com/problems/web-crawler-multithreaded/) | ML infrastructure SWE phone screen (5 YOE) | 2026-01 | [post](https://leetcode.com/discuss/post/7530004/anthropic-phone-screen-experience-5-yoe-5ub66/) |
| [Build a web crawler (phone screen)](https://leetcode.com/problems/web-crawler/) | Infrastructure SWE phone screen | 2025-05 | [post](https://leetcode.com/discuss/post/6705883/do-you-know-any-anthropic-software-engin-sxrr/) |
| Stack trace processing problem | SWE phone screen (after CodeSignal OA) | 2026-02 | [post](https://leetcode.com/discuss/post/7559983/anthropic-phone-screen-easy-pass-small-q-8dhg/) |
| Progressive in-memory system on CodeSignal; hardest part was merged entities and historical state | SWE online assessment (90 min) | 2026-09 | [post](https://www.reddit.com/r/leetcode/comments/1wn5hpu/my_anthropic_codesignal_experience_580600_and/) |
| Transform images in a pipeline based on JSON data using Pillow (question chosen based on resume) | SWE 55-min technical interview | 2026-02 | [post](https://www.reddit.com/r/leetcode/comments/1qx0hyj/anthropic_technical_interview_55_min_codesignal/) |
| Banking system or in-memory database across 4 levels of increasing complexity | SWE online assessment (90 min) | 2026-02 | [post](https://www.reddit.com/r/leetcode/comments/1qx0hyj/anthropic_technical_interview_55_min_codesignal/) |
| Implement a bank with multiple transaction types (progressive spec, black-box tests) | SWE coding challenge | 2026-04 | [post](https://interviewing.io/anthropic-interview-questions) |
| Fellows OA: extend a vLLM-like inference server codebase (cache, prefill), 5 parts | Anthropic Fellows online assessment | 2026-08 | [post](https://www.reddit.com/r/InterviewDB/comments/1vm1ooz/anthropic_fellow_program_assessment_questions/) |
| Design an API for serving large language models efficiently (batching, queuing, GPU utilization under variable load) | SWE system design | 2026-04 | [post](https://interviewing.io/anthropic-interview-questions) |
| Design a Claude chat service | SWE system design | 2026-04 | [post](https://interviewing.io/anthropic-interview-questions) |
| Design a system that lets a model handle multiple questions in a single thread | SWE system design | 2026-04 | [post](https://interviewing.io/anthropic-interview-questions) |
| [Find duplicate files](https://leetcode.com/problems/find-duplicate-file-in-system/) | SWE live coding (Hello Interview guide, published Sep 2026) | 2026-09 | [post](https://www.hellointerview.com/guides/anthropic/swe) |
| Values round: give honest feedback on Anthropic's mission; describe a time you pushed back or changed your mind | SWE company values round | 2026-04 | [post](https://interviewing.io/anthropic-interview-questions) |

## Beyond LeetCode

Progressive CodeSignal build (4 levels). Live practical coding: web crawler then concurrency; stack trace or profiler sample processing; image pipeline with Pillow from JSON; JSON data handling; finding duplicate files. Company values interview (non-technical, reflective, personal). In-depth project walkthrough. Fellows: codebase-reading OA, research discussion, and possibly a prompt engineering / Claude API exercise.

## System design

Not relevant for students (no new grad track); Fellows have a research discussion instead. For SWE loops: 1 system design round (sometimes as the phone screen) in a shared Google Doc, often LLM-flavored: an API for serving LLMs with request batching, queuing and GPU utilization under variable load; a Claude chat service; handling multiple questions in one thread; a banking app (all from interviewing.io, Apr 2026). Hello Interview's guide lists a chat/messaging system as the most common Anthropic design question.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Anthropic values: Act for the global good; Hold light and shade; Be good to our users; Ignite a race to the top on safety; Do the simple thing that works; Be helpful, honest, and harmless; Put the mission first. ([official page](https://www.anthropic.com/company))

**What they look for:**

- Specific reasons for Anthropic, not just 'AI is exciting'; mission alignment is tested in the recruiter call and the values round
- Honest, independent views, including skepticism or disagreement with Anthropic, rather than fandom
- Real situations where your values were tested, and how you felt then and now
- Willingness to change your mind
- Low ego; direct and kind communication (official values)
- Preference for the simple thing that works (official values)
- References that speak to how you handle conflict and ethical friction

**Questions to prepare:**

- Why Anthropic specifically, rather than another AI lab?
- What is your view on AI safety? Are you more optimistic or pessimistic?
- Tell me about a time your values were tested at work. How did you feel?
- Tell me about something you changed your mind about.
- Give us your honest feedback on Anthropic's mission or approach.
- Walk me through a past project in depth: your decisions, tradeoffs, what you would do differently.
- A hypothetical ethical dilemma with no clean answer, for example accepting a financial loss for the sake of the mission.

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- If you are a student, aim for the Anthropic Fellows Program, not a SWE internship: Anthropic says it does not offer internships. Check the US/UK/Canada work authorization rule before applying.
- Practice 90-minute progressive builds in Python: write level 1 of a banking or in-memory DB spec, then add TTL, history and merges. Design data structures for extension from level 1.
- Read the README and provided classes before writing code. 2026 Fellows candidates lost time to unclear interfaces, not to the algorithm.
- Drill concurrency: write a BFS web crawler, then parallelize it with ThreadPoolExecutor and with asyncio, handling dedupe and failures.
- Read Core Views on AI Safety and Machines of Loving Grace, then form your own opinions, including where you disagree.
- Prepare 3 to 4 stories with real ethical or values stakes and be ready to say how you felt; interviewing.io says the values/culture round is where most candidates fail, per Anthropic recruiters.
- Line up references before you start; Anthropic checks them in detail.
- Follow the candidate AI guidance exactly: write your first draft yourself, no AI in assessments or live interviews unless told. Jugal's post suggests building and publishing a small Claude-powered project and doing Anthropic's free courses.

## 4-week plan for Anthropic

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve problems 41 to 50 and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Anthropic values: Act for the global good; Hold light and shade; Be good to our users; Ignite a race to the top on safety; Do the simple thing that works; Be helpful, honest, and harmless; Put the mission first. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.anthropic.com/careers>
- <https://www.anthropic.com/careers/jobs>
- <https://www.anthropic.com/company>
- <https://www.anthropic.com/candidate-ai-guidance>
- <https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/>
- <https://job-boards.greenhouse.io/anthropic/jobs/5183051008>
- <https://job-boards.greenhouse.io/anthropic/jobs/5183044008>
- <https://job-boards.greenhouse.io/anthropic/jobs/5183053008>
- <https://job-boards.greenhouse.io/anthropic/jobs/5425724008>
- <https://jugaldb.substack.com/p/how-to-land-anthropics-3850week-ai>
- <https://www.anthropic.com/news/core-views-on-ai-safety>
- <https://www.darioamodei.com/essay/machines-of-loving-grace>
- <https://www.anthropic.com/research>
- <https://github.com/anthropics/prompt-eng-interactive-tutorial>
- <https://interviewing.io/anthropic-interview-questions>
- <https://www.hellointerview.com/guides/anthropic/swe>
- <https://igotanoffer.com/en/advice/anthropic-interview-process>
- <https://www.levels.fyi/companies/anthropic/salaries/software-engineer>
- <https://www.levels.fyi/companies/anthropic/salaries/software-engineer/levels/software-engineer>
- <https://leetcode.com/discuss/post/7530004/anthropic-phone-screen-experience-5-yoe-5ub66/>
- <https://leetcode.com/discuss/post/6705883/do-you-know-any-anthropic-software-engin-sxrr/>
- <https://leetcode.com/discuss/post/7559983/anthropic-phone-screen-easy-pass-small-q-8dhg/>
- <https://leetcode.com/discuss/post/7478554/usa-anthropic-technical-phone-screen-by-0ghfn/>
- <https://www.reddit.com/r/leetcode/comments/1wn5hpu/my_anthropic_codesignal_experience_580600_and/>
- <https://www.reddit.com/r/leetcode/comments/1qx0hyj/anthropic_technical_interview_55_min_codesignal/>

> **Watch out:** Re-verified Oct 4, 2026 by an adversarial fact-check pass [VERIFIED]: anthropic.com careers (FAQ 'We don't currently offer internships', 're-apply after 12 months', Google Meet plus Colab/CodeSignal, 'You can look things up'), company page (all 7 values), candidate AI guidance (updated Jul 10, 2025), alignment blog (apply by Oct 18 for January cohort, over 35% joined Anthropic, ~15K USD/month compute) fetched directly; Fellows and Associate Applied AI JDs via the Greenhouse public API (stipend, no visa sponsorship, January 2027 cohort, 25 to 50% offer rate, £115K OTE); Levels.fyi titles and samples parsed from the pages; interviewing.io (published Apr 7, 2026, modified May 13, 2026) and Hello Interview (published Sep 7, 2026) pages fetched; IGotAnOffer (updated Jun 9, 2026) via browser; LeetCode posts via GraphQL; Reddit posts and comments via the Arctic Shift archive (Pillow image pipeline and 4-level banking/in-memory DB details are in comments on post 1qx0hyj). Corrections made in this pass: removed 'distributing model files' (not found in any cited source); 'including autocomplete' removed (not in the official AI guidance); IGotAnOffer date fixed (Jun 2026, not Oct 2025); removed an unsupported 'July 2026 cohort' claim; visa rule now cited to the official JD; £115K marked as OTE. Discrepancies: alignment blog says over 35% of past fellows joined Anthropic full time, the JD says 25 to 50% received a full-time offer, Jugal's Jun 2026 post says more than 40% of the first cohort joined; prefer the official figures. Jugal's post links https://www.anthropic.com/news/anthropic-fellows-program, which returned 404 on Oct 4, 2026 [UNVERIFIED, broken]; use the alignment blog link instead. The 480/600 cutoff is one Sep 2025 Fellows candidate quoting an email; treat it as indicative. The Fellows OA format appears to have changed in 2026 (existing codebase rather than a from-scratch build); r/InterviewDB promotes a question site, so treat that post as a single report. The LeetCode post 7559983 links a paid question site. Several linked LeetCode problems are Premium-only (Web Crawler, Web Crawler Multithreaded). Levels.fyi has only 3 entry-level data points. Most SWE loop data is from candidates with several years of experience, since Anthropic rarely hires new grads (a Sep 2025 Reddit thread title reports its CPO saying so; the underlying interview was not checked [UNVERIFIED]).

Next: [All companies](index.md)
