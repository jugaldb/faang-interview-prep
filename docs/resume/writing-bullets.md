# Write resume bullets that show impact

For anyone writing or fixing resume bullets. You will finish with every bullet in X, Y, Z form, a number on most of them, and 2 to 4 projects worth listing.

## The X, Y, Z formula

Google's careers site says to use the formula "accomplished [X] as measured by [Y], by doing [Z]" ([Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/)). It comes from Laszlo Bock's 2014 LinkedIn post "My Personal Formula for a Winning Resume". The original post is gone; Cal State LA keeps a copy ([Bock's post, docx](https://www.calstatela.edu/sites/default/files/formula_for_a_winning_resume.docx)).

Bock's instruction: start with an active verb, measure what you accomplished with a number, give a baseline for comparison, and say what you did to get there.

| Part | Question it answers | Example |
|---|---|---|
| X: what you accomplished | What changed because of you? | Cut p99 latency of the refund-status API |
| Y: how it was measured | By how much, against what baseline? | from 1.2 s to 300 ms |
| Z: what you did | How, with which technology? | by adding a Redis cache and batching database reads (Java, Spring Boot) |

Together: "Cut p99 latency of the refund-status API from [1.2 s] to [300 ms] by adding a Redis cache and batching database reads (Java, Spring Boot)."

### Three orders, same ingredients

| Version | Order | Source |
|---|---|---|
| Google | Accomplished X, as measured by Y, by doing Z | [Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/) |
| Jugal | X = the task, Y = the tools and tech, Z = the impact | [The Resume Template I Recommend](https://jugaldb.substack.com/p/the-resume-template-i-recommend-and), [From LinkedIn to ATS Resume](https://jugaldb.substack.com/p/from-linkedin-to-ats-resume-in-1) |
| Tech Interview Handbook | [Accomplishment summary]: [Action] that resulted in [quantifiable outcome] | [Tech Interview Handbook: Resume](https://www.techinterviewhandbook.org/resume/) |

Use any order, but keep all three parts. Jugal's two notes from [The Resume Template I Recommend](https://jugaldb.substack.com/p/the-resume-template-i-recommend-and):

- On the tools part: "it's frequently the most important to recruiters and ATS systems, especially for technical roles."
- On outcomes: "If a bullet doesn't have a Z, it usually doesn't belong on your resume, or it needs to be rewritten until it does."

A software engineering example from the same post:

```text
Migrated legacy authentication system (X) to OAuth 2.0 using Node.js and Auth0 (Y),
eliminating 12 recurring security tickets per quarter and cutting login failures by 38% (Z).
```

### Copy-paste bullet patterns

```text
[Verb] [what you built or changed] for [who or what scale], [result with a number and a baseline], using [2 to 3 technologies].
[Verb] [metric] from [before] to [after] by [method] ([tech]).
Built [thing] with [tech] that [does what]; used by [N] [users or teams] / processes [N] [records] per [day].
[Verb] [N] [things] ([tech]), [outcome] for [team or users].
```

### Real before and after examples

| Source | Before | After |
|---|---|---|
| Bock, Google (2014), [post copy](https://www.calstatela.edu/sites/default/files/formula_for_a_winning_resume.docx) | "Studied financial performance of companies and made investment recommendations" | "Improved portfolio performance by 12% ($1.2M) over one year by refining cost of capital calculations for information-poor markets and re-weighting portfolio based on resulting valuations" |
| Jugal, [Amazon is still hiring after the biggest layoffs](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the) | "Designed a service for the checkout system." | "Redesigned the checkout adapter using Java and SIP protocol, reducing dropped calls by 20% across 60% of the client base." |
| Jugal, [I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume) | "Developed backend APIs using Golang." | "Built Golang APIs processing 1M+ requests per day, reducing request latency by 25%." He adds: "But only if those numbers are actually true." |
| Jugal, [The LinkedIn Profile Playbook](https://jugaldb.substack.com/p/the-linkedin-profile-playbook-how) | "Led a team and improved system performance." | "Led 6 engineers to cut API latency by 40%, shipping 2 weeks ahead of schedule." |
| Amazon recruiter Bhavishya Lingam ([About Amazon](https://www.aboutamazon.com/news/workplace/amazon-job-application-resume-writing-tips)) | "Responsible for introducing new tech stack into our organization" | Led the rollout of new efficiency software that cut errors by 25% and customer complaints by 37% year over year (paraphrased; the original opens with "Successfully") |

Bock's "($1.2M)" is the baseline: it tells the reader whether 12% is a big deal. In the Amazon example, cut "Successfully"; the numbers already say it.

## Write one bullet in 5 minutes

1. Start with a strong verb: past tense for past roles, present tense for your current role. Never "Responsible for", "Worked on", or "Helped".
2. Name what you built or changed in words a recruiter understands. Drop internal code names ([The Tech Resume Inside Out](https://thetechresume.com/samples/common-mistakes)).
3. Add the number, with a baseline or a scale. No number yet? Use [metrics when you have none](#metrics-when-you-have-none).
4. Add the 1 to 3 technologies or methods that matter for your target job. This is where keywords live.
5. Cut to 1 to 2 lines, the length Gayle Laakmann McDowell recommends ([Fortune](https://fortune.com/2014/10/02/how-can-i-get-my-resume-shortlisted-by-google-for-a-software-engineer-job/)). Delete "successfully", "various", "etc.", and "in order to".
6. Run the interview test: could an engineer probe this number for 5 minutes without your answer falling apart? If not, use a number you can defend. Jugal: "If somebody asks you about that number in an interview, you need to be able to explain it" ([I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume)).

## Action verbs

| Category | Verbs |
|---|---|
| Build | Built, Developed, Engineered, Implemented, Coded, Shipped, Launched, Prototyped |
| Design | Designed, Architected, Modeled, Devised |
| Improve | Optimized, Reduced, Cut, Accelerated, Refactored, Streamlined, Debugged |
| Automate | Automated, Scripted, Integrated, Migrated, Deployed |
| Analyze | Analyzed, Measured, Benchmarked, Evaluated, Profiled |
| Lead | Led, Mentored, Organized, Initiated, Coordinated, Taught |
| Collaborate | Partnered, Collaborated, Presented, Documented |
| Results | Increased, Decreased, Achieved, Improved, Grew |
| Never start with | Responsible for, Worked on, Helped, Assisted with, Participated in |

Sources: [Georgia Tech CS Resume Guide](https://www.cc.gatech.edu/sites/default/files/documents/2026/GT%20CS%20Resume%20Guide%20compressed_1.pdf) verb list, [MIT CAPD action verbs](https://capd.mit.edu/resources/resume-action-verbs/). Jugal's rule: if "Responsible for" appears anywhere on your resume, delete it ([How I turned my resume into a job magnet](https://jugaldb.substack.com/p/how-i-turned-my-resume-into-a-job)).

1. Use a different first verb for each bullet inside one role.
2. Use present tense for your current role and past tense for everything else ([The New Grad and Internship prep for 2026](https://jugaldb.substack.com/p/the-new-grad-and-internship-prep)).
3. Back "Led" with scope. Google asks you to give team size and scope if you led something ([how we hire](https://www.google.com/about/careers/applications/how-we-hire/)).

## 18 weak vs strong bullets for students

Numbers and names in brackets are placeholders. Replace them with your true numbers, or with a scope fact.

| # | Situation | Weak | Strong |
|---|---|---|---|
| 1 | Course project, web app | Made a to-do app using React. | Built a task manager with React, Node.js, and PostgreSQL (JWT auth); deployed on [host] and used by [40] classmates for a semester-long course. |
| 2 | Personal project, ML | Worked on a machine learning project for spam detection. | Trained a TF-IDF and logistic regression spam classifier on [5,500] SMS messages, reaching [97]% precision; served it with FastAPI at [80] ms p95 latency. |
| 3 | Systems project | Implemented a key-value store in C++. | Implemented a persistent key-value store in C++ with a write-ahead log and compaction; sustained [50k] writes/sec in local benchmarks and lost zero records across [100] forced-crash tests. |
| 4 | AI project, RAG | Built a chatbot using LLMs. | Built a PDF question-answering app with citations (Python, embeddings, pgvector); raised answer accuracy from [62]% to [81]% on a [50]-question eval set by adding reranking. |
| 5 | Mobile app | Created an Android app for my college. | Shipped a Kotlin Android app for campus shuttle times with [1,200] installs; cut crash rate from [3.1]% to [0.4]% after adding offline caching. |
| 6 | Data project | Did data analysis on bike-share data. | Analyzed [2.4M] bike-share trips with Python and SQL; found [3] stations causing [18]% of shortages and published a dashboard used by [a student transit group]. |
| 7 | Internship, backend performance | Responsible for APIs for the payments team. | Cut p99 latency of the refund-status API from [1.2 s] to [300 ms] by adding a Redis cache and batching database reads (Java, Spring Boot). |
| 8 | Internship, developer tooling | Helped with testing and CI. | Reduced CI time from [25] to [9] minutes by sharding [1,200] integration tests across [6] parallel GitHub Actions runners; adopted by [3] teams. |
| 9 | Internship, automation | Created reports for the ops team. | Automated the weekly operations report with Python and SQL, removing [4] hours of manual spreadsheet work per week. |
| 10 | Internship, frontend | Worked on the company website. | Rebuilt the pricing page in React and TypeScript, raising the Lighthouse performance score from [54] to [92] and cutting page weight by [60]%. |
| 11 | Internship, data migration | Assisted with database migration. | Migrated [14] tables from MySQL to PostgreSQL with zero downtime using dual writes and a backfill script; verified [30M] rows with checksum comparisons. |
| 12 | Teaching assistant | Teaching assistant for Data Structures. | Led weekly sections for [30] students in Data Structures (Java) and wrote [12] JUnit autograder suites that graded [400+] submissions per assignment. |
| 13 | Grader or tutor | Tutored students in programming. | Tutored [25] first-year students in Python each week; wrote a bank of [60] practice problems reused by [4] tutors. |
| 14 | Hackathon | Participated in a hackathon. | Placed [2nd of 60] teams at [Hackathon] by building a real-time campus bus tracker (Flutter, Firebase) in 36 hours; owned the backend and API integration. |
| 15 | Research assistant | Research assistant in an NLP lab. | Built a PyTorch evaluation harness comparing [3] retrieval models on [10k] queries; results used in the lab's [workshop paper]. |
| 16 | Open source | Contributed to open source. | Merged [4] pull requests into [project] ([12k] GitHub stars), including a fix for a memory leak in the CSV parser reported in [issue #]. |
| 17 | Club leadership | President of the coding club. | Grew the coding club from [25] to [120] members by running [10] weekly interview-prep sessions and [2] company tech talks. |
| 18 | Non-tech campus job | Worked at the campus IT help desk. | Resolved [40] support tickets a week at the campus IT help desk; wrote a PowerShell script that cut laptop setup time from [45] to [10] minutes. |

Competitive programming and contests go in Awards as one line each:

```text
AWARDS
[Contest name], rank [12] of [85] teams, [Year]
[Platform] rating [1,700] ([title]), [Year]
[Scholarship name], 1 of [230] selected, [Year]
```

## Metrics when you have none

| Category | What to count | Example phrase |
|---|---|---|
| Scale | Users, requests per day, rows, GB, files, endpoints, services | "for [3,000] daily users" |
| Speed | Latency before and after (p50, p95, p99), build or CI time, query time, page load | "from [2.1 s] to [400 ms]" |
| Time saved | Hours of manual work removed per week, steps removed | "removing [4] hours of manual work a week" |
| Quality | Test coverage, bugs fixed, error rate, accuracy, precision, recall, eval score vs baseline | "raising test coverage from [41]% to [85]%" |
| Adoption | Stars, forks, downloads, installs, teams or classmates using it, PRs merged | "adopted by [3] teams" |
| Cost | Cloud spend, instances removed, storage saved | "cut monthly cloud cost by [$300]" |
| Selectivity | Rank, placement, "1 of N selected" | "Selected as one of 230 participants nationwide" (Bock's student example) |
| Teaching | Students taught, sections led, submissions graded | "graded [400+] submissions per assignment" |
| Scope | Components owned, people coordinated, integrations | "across [12] services" |

Bock: "there is almost always something you can point to" ([post copy](https://www.calstatela.edu/sites/default/files/formula_for_a_winning_resume.docx)). Gayle: "Did you optimize something? Okay, then tell me by how much" ([Fortune](https://fortune.com/2014/10/02/how-can-i-get-my-resume-shortlisted-by-google-for-a-software-engineer-job/)).

### Get a real number this week

1. Benchmark it, before and after your change:
    - APIs: load-test with [k6](https://grafana.com/docs/k6/latest/) or [Locust](https://locust.io/).
    - Scripts and CLIs: time them with [hyperfine](https://github.com/sharkdp/hyperfine).
    - Python functions: use [pytest-benchmark](https://github.com/ionelmc/pytest-benchmark).
2. Measure web performance. Run [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) or [PageSpeed Insights](https://pagespeed.web.dev/) on the old and the new version.
3. Read adoption data. On GitHub, open Insights, then Traffic: it shows views and clones for the past 14 days only, so screenshot it monthly ([GitHub docs](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)). For a Python package, check [pypistats.org](https://pypistats.org/).
4. Read history. Count merged PRs, issues closed, and releases.
5. Count users honestly. Check your hosting dashboard or analytics, or run a sign-up sheet or a quick poll.
6. Build an eval set for AI or ML work. Write 30 to 50 cases with expected answers, run them before and after one change, and report both numbers. Jugal: "Ten lazy test cases will give you a confident, wrong score. Write cases that actually try to break your system" ([AI Engineering 101](https://jugaldb.substack.com/p/ai-engineering-101-the-once-a-day)).
7. State scope when nothing is measurable: "for 3 teams", "across 12 services", "in 36 hours".

Rules for numbers:

1. Never invent one. Jugal: "Do not let Claude make up metrics just because they sound impressive" ([I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume)).
2. Give a baseline. "Cut latency 40%" is weaker than "from 500 ms to 300 ms".
3. Avoid claims that cannot be true, like "reduced downtime by 99.9%". A reviewer reads that as careless.
4. Skip lines of code as an achievement. It measures effort, not outcome.
5. Round down. Write "2,000+" only if the number is above 2,000.

## Choose your projects

1. List 2 to 4 projects. Tech Interview Handbook: "Include at least 2 projects", each linked to GitHub.
2. Cover different skills: one backend or full-stack, one systems or data, one AI or ML if you target AI roles.
3. Put the project closest to your target job first.
4. Prefer deployed over notebook. Jugal: "A notebook that fine-tunes a model on a public dataset demonstrates coursework completion. A deployed system with an evaluation harness, monitoring, and a documented failure analysis demonstrates engineering" ([How to Prepare for FAANG AI Engineer Internship Season](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).
5. Prefer real users, however few. Jugal: usage data and feedback "are evidence pure side projects never generate" ([How to Prepare for FAANG AI Engineer Internship Season](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).
6. Prefer one finished project over three started ones. Jugal: "A polished project with clear documentation will stand out much more than ten unfinished experiments" ([How to become an AI engineer in 2026](https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026)).
7. Include course projects if they are substantial. Gayle: "Don't worry about whether or not something is 'resume appropriate.'"
8. On team projects, name your part: "owned the backend and API integration".
9. Extend a tutorial before you list it: add your own feature, tests, deployment, and a measurement.

| Project type | What it signals | Where to start |
|---|---|---|
| Deployed full-stack app with users | End-to-end product work | A problem you, your club, or your campus actually has |
| Rebuild of a real system (Git, Redis, a database, an interpreter) | Systems depth | [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) |
| AI app with an eval set | AI engineering | Jugal's three: an AI resume reviewer, a PDF chatbot with citations, a research agent ([How to become an AI engineer in 2026](https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026)) |
| Business-problem AI project (for forward deployed engineer roles) | You can find a business problem, build, deploy, and explain the value | Jugal's ideas: customer support automation, internal document assistant, invoice processing. Publish it as a case study with measured impact ([The Hidden AI Career](https://jugaldb.substack.com/p/the-hidden-ai-career-paying-up-to)) |
| Open-source pull requests | Working in a real codebase, code review | [Good First Issue](https://goodfirstissue.dev/), [Up For Grabs](https://up-for-grabs.net/) |
| Selective open-source program | Selectivity plus an Experience line | [Google Summer of Code](https://summerofcode.withgoogle.com/), [MLH Fellowship](https://fellowship.mlh.com/), [LFX Mentorship](https://mentorship.lfx.linuxfoundation.org/) |
| Hackathon build | Speed, teamwork, scope control | Your campus and online hackathons. More programs: [internship programs](../internships/programs.md) |

> **Watch out:** [Hacktoberfest](https://hacktoberfest.com/) 2026 no longer counts pull requests toward rewards. It now centers on open-source AI. For real PRs, use Good First Issue.

### Project README checklist

From Jugal's [How to become an AI engineer in 2026](https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026). Recruiters and interviewers click the link; this is what they should find.

- [ ] A clear README
- [ ] A demo video
- [ ] Screenshots
- [ ] An architecture diagram
- [ ] A deployment link
- [ ] The problem it solves
- [ ] How the system works
- [ ] What you would improve next
- [ ] How you measured quality, with numbers (added by this guide)

For a deployed ML project, Jugal's six README lines from [7 videos on shipping ML to production](https://jugaldb.substack.com/p/7-videos-on-shipping-ml-to-production): live endpoint URL, run locally in 3 commands or fewer, a Dockerfile in the repo root, MLFlow screenshots comparing at least 2 model runs, one paragraph on what breaks at scale, and what you would monitor. His line: "A repo with these six things says 'engineer.' A notebook alone says 'student.'"

### Project entry template

```text
[Project Name] | [Python, FastAPI, PostgreSQL, Docker]                       [Mon Year]
- Built [what] that [does what] for [who]; [deployed at link / used by N people].
- [Hardest technical part] using [technique], [measured result vs baseline].
- [How you tested or evaluated it], [number].
```

Jake's Resume puts the stack after the project name, like this. Link the project name to GitHub or the live demo.

## AI and ML bullets

1. Name the evaluation: dataset size, metric, and baseline. Jugal's bar: you "can articulate how you measured retrieval quality rather than asserting it worked" ([How to Prepare for FAANG AI Engineer Internship Season](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)).
2. Name the pattern once: RAG, tool calling, structured output, fine-tuning.
3. Add production facts: latency, cost per request, users.
4. Show AI-assisted development honestly, and say what you verified. Amazon's Summer 2027 SDE intern posting lists "Experience using AI-assisted development tools" as a basic qualification ([posting](https://www.amazon.jobs/en/jobs/10552937/software-development-engineer-intern-summer-2027-usa)).

| Weak | Strong |
|---|---|
| Built a RAG chatbot with LangChain and OpenAI. | Built a course-notes Q&A app with citations (Python, embeddings, pgvector); measured recall@5 of [0.71] on a [60]-question eval set and raised it to [0.86] with a reranker. |
| Fine-tuned a model. | Fine-tuned [a small open model] with LoRA on [8k] support tickets; raised category accuracy from [74]% to [88]% over the prompt-only baseline. |
| Built an AI agent. | Built a research agent that calls [3] tools (search, PDF reader, calculator) with human approval before sending email; completed [41 of 50] scripted tasks in evaluation. |
| Used Copilot to write code. | Used an AI coding assistant to scaffold a FastAPI service, then wrote [35] tests that caught [4] bugs in the generated code before merge. |

More on AI engineer roles: [roles to target](../jobs/index.md).

## Common bullet mistakes

| Mistake | Example | Fix |
|---|---|---|
| Duty, not result | "Responsible for maintaining APIs" | Say what changed |
| No number | "Improved performance" | Add before and after |
| Number with no baseline | "Improved speed by 40%" | "from 500 ms to 300 ms" |
| Tech list as a bullet | "Used Python, Docker, AWS" | Put the tech inside a result |
| Team credit, no ownership | "We built a dashboard" | "Built the data layer for the team dashboard" |
| Internal jargon | "Shipped ORCA v2 to PRJ-7" | Plain words a recruiter knows |
| Three lines long | A full paragraph | Split it or cut to 2 lines |
| Same verb repeated | "Developed... Developed..." | Vary the first verb |
| Inflated scope | "Led the migration" when you wrote one script | "Wrote the backfill script for the migration" |
| Adjectives instead of numbers | "Highly scalable, world-class service" | Replace with requests per second, users, latency |

Jugal's version of the ownership rule: "'Our club hosted a workshop' hides you. 'I cold-messaged 12 professors and 3 said yes' shows you" ([OpenAI Will Pay You to Lead AI on Your Campus](https://jugaldb.substack.com/p/openai-will-pay-you-to-lead-ai-on)).

## Length and count

| Item | Target | Source |
|---|---|---|
| Bullet length | 1 to 2 lines | Gayle |
| Most relevant role | 4 to 6 bullets | Georgia Tech |
| Less relevant role | 1 to 2 bullets | Georgia Tech |
| Each project | 2 to 3 bullets | Practical limit for one page |
| Bullets with a number | At least half | Target used by this guide |

Practice: rewrite your 3 weakest bullets today with the 5-minute method, then show them to one engineer. Behavioral stories reuse these bullets, so keep notes for your [story bank](../behavioral/story-bank.md).

Next: [Tailor your resume to each job](tailoring.md)
