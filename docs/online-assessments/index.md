# How online assessments work

For anyone with an OA link in their inbox, or one on the way. When you finish this page, you will know how OAs are scored, what gets people cut, and what to do in the next 10 minutes.

> **Tip:** Passing the hidden tests gets you counted. How you wrote the code decides what a human thinks when they open it. Both matter, and this section covers both: [strategy](strategy.md) for the score, [code quality](code-quality.md) for the read.

## What an OA is

An online assessment (OA) is a timed test a company sends after you apply. A platform such as HackerRank or CodeSignal grades it automatically, often before a recruiter has read your resume closely. Pass, and your application moves forward. Fail, and most companies close it without a call.

### The OA types you will meet

| Type | What you do | Typical time | Seen at (examples, as of Oct 2026) |
|---|---|---|---|
| Algorithmic coding | Solve 2 to 4 LeetCode-style problems against hidden test cases | 60 to 120 min | [Amazon](../companies/amazon.md), [Microsoft](../companies/microsoft.md), [Capital One](../companies/capital-one.md), [Cisco](../companies/cisco.md), [IBM](../companies/ibm.md), [JPMorgan](../companies/jpmorgan.md) |
| Progressive build | One spec in 4 levels. Each level extends the code you already wrote | 90 min | [Airbnb](../companies/airbnb.md), [Anthropic](../companies/anthropic.md), [Coinbase](../companies/coinbase.md), [eBay](../companies/ebay.md), [Meta](../companies/meta.md) (some roles) |
| Multi-part practical | One long, real-world problem split into 3 to 6 parts | 60 min | [Stripe](../companies/stripe.md), [Palantir](../companies/palantir.md) (FDE intern) |
| AI-assisted repo task | Fix bugs or add a feature in a small web app, with a built-in AI assistant | 40 to 60 min | [Amazon](../companies/amazon.md) (2026 reports), [Goldman Sachs](../companies/goldman-sachs.md) (official), [Walmart](../companies/walmart.md) (2026 reports) |
| MCQ plus coding | CS fundamentals or aptitude multiple choice, then 2 to 3 coding problems | 60 to 120 min | India campus drives at [Cisco](../companies/cisco.md), [Oracle](../companies/oracle.md), [D. E. Shaw](../companies/de-shaw.md), [Morgan Stanley](../companies/morgan-stanley.md) |
| Work-style questionnaire | Pick or rate statements about how you work | 15 to 60 min | Amazon Workstyles, Google Hiring Assessment, [Coinbase](../companies/coinbase.md) |
| Work simulation | React to emails, chats and videos from a virtual team | about 60 min | Amazon full-time SDE |
| Recorded video | Answer behavioral prompts on camera, no live person | under 30 min | [JPMorgan](../companies/jpmorgan.md), [Palo Alto Networks](../companies/palo-alto-networks.md), [Goldman Sachs](../companies/goldman-sachs.md) campus |
| Games | Short puzzle or reaction games | under 20 min for HireVue games; longer at Roblox | [Roblox](../companies/roblox.md), employers using HireVue games |
| Live third-party screen | A 60-minute interview run by another company's engineer | 60 min | Karat at [PayPal](../companies/paypal.md) and [Walmart](../companies/walmart.md) (US) |

Every row has its own playbook. Platforms are on [OA platforms](platforms.md). Each company's format is on [OA format by company](company-oa-formats.md).

## Where the OA sits in the process

1. You apply. Many companies email the OA within hours or days. Some send it to every applicant automatically ([Cisco](../companies/cisco.md) US, [Airbnb](../companies/airbnb.md) in 2026 reports, [Snowflake](../companies/snowflake.md) interns).
2. You get a window, usually about a week or two. IBM links are valid 7 days. Amazon's SDE II OA gives 7 days ([Amazon SDE II OA prep](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-oa-prep)).
3. The platform scores your code. Some companies use a pass bar. Others rank you against everyone who took it.
4. A recruiter looks at the score together with your resume. At [Cisco](../companies/cisco.md), candidates report the resume review happens after the OA.
5. You hear back in 1 to 3 weeks, or not at all. Goldman Sachs says "within three weeks" ([Goldman Sachs HackerRank guide](https://www.goldmansachs.com/careers/blog/guide-to-hackerrank)).

## How OAs are scored

| Platform | What earns points | Partial credit | What else the company can see | Source |
|---|---|---|---|---|
| HackerRank | Each hidden test case your output matches exactly | Yes, per test case | Keystroke replay, pastes, tab switches, AI chat if enabled | [Evaluation method](https://candidatesupport.hackerrank.com/articles/4513323466-evaluation-method-of-coding-questions), [AI plagiarism detection](https://support.hackerrank.com/articles/8000786908-ai-plagiarism-detection) |
| CodeSignal GCA | 4 questions, Assessment Score from 200 to 600 | Yes | Suspicion Score: pastes, copied problem text, similarity to other solutions | [GCA structure](https://support.codesignal.com/hc/en-us/articles/360040370853-What-should-I-expect-when-I-take-the-General-Coding-Assessment-GCA-and-how-is-it-structured), [Suspicion Score](https://support.codesignal.com/hc/en-us/articles/16957476906135-Using-Suspicion-Score) |
| CodeSignal ICA | 4 progressive levels, 200 to 600 | Yes. You are not expected to finish | Same as GCA | [ICA rules](https://support.codesignal.com/hc/en-us/articles/19116922232983-What-are-the-Industry-Coding-Assessment-ICA-rules) |
| Codility | Percent of test cases passed. Fail 4 of 10 and you score 60% | Yes, but code that does not compile scores 0 | Your code, which the company may review by hand | [Automated scoring](https://support.codility.com/hc/en-us/articles/360043318374-Automated-Scoring-Principles), [Candidate FAQ](https://app.codility.com/candidate-faq/) |
| Karat | An interviewer's write-up. "The most important thing we are evaluating is how successfully your code solves the problem." | n/a | The full video recording plus a summary | [Karat candidate experience](https://karat.com/candidate-experience/) |
| Amazon (on HackerRank) | Test cases, plus "the clarity, maintainability, and efficiency of your code" | Yes | Webcam photo, logged browser usage | [Amazon OA prep](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa) |

Three rules follow from this table:

1. Every hidden test case is a point. A brute force that passes 8 of 15 tests beats a clever idea that never compiles.
2. Hidden tests include large inputs. Your time complexity decides the last third of the points. See [constraints to complexity](strategy.md#read-the-constraints-first).
3. HackerRank compares output exactly. A stray debug `print` can fail a correct answer.

## What gets you cut

| Reason | What it looks like | Fix |
|---|---|---|
| Brute force on large hidden tests | Passes the samples, fails half the hidden tests on time | Read the constraints before coding. [Strategy: constraints](strategy.md#read-the-constraints-first) |
| Output format | Correct logic, zero points | Print exactly what is asked. Debug to stderr. [Strategy: reading input](strategy.md#reading-input-stdin-templates) |
| Code that does not compile at the end | Codility scores it 0 | Keep a compiling version at all times. [Strategy: partial credit](strategy.md#partial-credit-tactics) |
| One question eats the clock | 50 minutes on Q3, Q4 blank | Time boxes and the 10-minute stuck rule. [Strategy: time](strategy.md#time-allocation-during-the-test) |
| Integrity flags | CodeSignal shows companies "Proctoring Rejected" and the reason ([source](https://support.codesignal.com/hc/en-us/articles/4409230511767-Viewing-the-reason-for-a-test-taker-s-non-verified-results)) | Follow the rules exactly. [Strategy: integrity](strategy.md#integrity-rules) |
| Missing the deadline | The link expires. Amazon hires "on a rolling basis" | Take it early in the window, or ask for an extension. [Template](strategy.md#templates) |
| Skipping a non-coding section | SQL and Bash parts left blank at [Intuit](../companies/intuit.md). Back-end applicants surprised by a front-end section at [Walmart](../companies/walmart.md) | Read every section title before you start |
| Code no one can read | Amazon grades clarity. Codility customers may review by hand | [Code quality in OAs](code-quality.md) |
| Burned retakes | CodeSignal limits certified attempts per 180 days | [Platforms: CodeSignal cooldowns](platforms.md#reuse-cooldowns-and-retakes) |

### What you cannot control

A perfect score buys a review, not an interview. A TikTok graduate candidate scored 600/600 and got no interview ([LeetCode post](https://leetcode.com/discuss/post/7123217/graduate-backend-software-engineer-tikto-pcg1/)). Capital One candidates report the same at 600/600 ([LeetCode post](https://leetcode.com/discuss/post/6957033/capitalone-codesignal-assessment-results-sze8/)).

The reasons are headcount, your resume, location, and the size of the pool. TikTok's own FAQ says many candidates pass while interviewer slots are limited (see [TikTok](../companies/tiktok.md)). Keep applying while you wait.

## How much is enough

No big tech company publishes an OA cutoff. These are single reports, not rules. Use them to calibrate, nothing more.

| Company | Reported result | Outcome | Source |
|---|---|---|---|
| Amazon SDE I (May 2026) | About 50% on the DSA problem, strong repo task | Advanced | [LeetCode post](https://leetcode.com/discuss/post/8279707/amazon-oa-sde-1-assessment-experience-ne-becb/) |
| Amazon intern (2026) | Full DSA solution, 2 of 6 repo tests | Shortlisted | [Amazon page](../companies/amazon.md) |
| Meta E5 (Oct 2025) | 2 of 4 progressive levels | Replies said it was enough for them | [Blind thread](https://www.teamblind.com/post/meta-online-assessment-kh1yd3s8) |
| Anthropic Fellows (Sep 2025) | Recruiter email said 480/600 or higher is generally enough to advance | n/a | [Anthropic page](../companies/anthropic.md) |
| Stripe intern (Nov 2025) | 15 of 17 hidden tests | Interview | [Stripe page](../companies/stripe.md) |
| Two Sigma intern (Feb 2025) | Solved 1 of 2 | Reached three technical rounds | [Two Sigma page](../companies/two-sigma.md) |
| Visa (Dec 2025) | 567/600 | Rejected | [Visa page](../companies/visa.md) |
| Expedia | 8 of 15 and 10 of 15 hidden tests | Rejected | [Expedia page](../companies/expedia.md) |

Your target: full marks on the easier questions, then as many test cases as you can on the hardest one.

## Myths

| Myth | Reality |
|---|---|
| "Nobody reads OA code." | Amazon grades "the clarity, maintainability, and efficiency of your code" ([Amazon OA prep](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa)). Codility says your "testing team may manually review your submitted code" ([Codility FAQ](https://app.codility.com/candidate-faq/)). HackerRank reviewers get a keystroke replay. |
| "Partial means zero." | HackerRank, Codility and CodeSignal all give credit per test case. |
| "Amazon's intern OA has a Work Simulation." | The official intern page lists coding, Workstyles and a survey only. The Work Simulation is listed for full-time. Some 2026 intern reports mention one, so it varies. |
| "CodeSignal switched to a 200 to 600 scale in 2026." | It switched in 2023 ("Coding Score 2023"). The score is now called the Assessment Score ([CodeSignal](https://support.codesignal.com/hc/en-us/articles/13260678794775-Converting-Historical-Coding-Score-Thresholds-to-Assessment-Score)). |
| "You can retake CodeSignal every 2 weeks." | Not since 2023. GCA allows 3 certified attempts per 180 days, at most 2 in 30 days. |
| "Google has no OA." | Google's own page lists the Google Hiring Assessment (workstyle) and sometimes a coding exercise ([Google how we hire](https://www.google.com/about/careers/applications/how-we-hire/)). |
| "Run returned OK on Codility, so I solved it." | "Run" only means it compiled and passed the example ([Codility FAQ](https://app.codility.com/candidate-faq/)). |
| "A phone with ChatGPT next to the laptop is invisible." | HackerRank Proctor Mode flags phones even partly in view, eye movement and external AI tools ([Proctor Mode](https://support.hackerrank.com/articles/5663779659-proctor-mode)). |

## Do this in the next 10 minutes

1. Open the invite. Write down: platform, number of questions, time limit, deadline, proctoring (webcam, screen share, ID), and whether any AI assistant is allowed.
2. Find the company on [OA format by company](company-oa-formats.md).
3. If the platform is CodeSignal, check whether you already hold a recent certified score and how many attempts you have left. See [CodeSignal cooldowns](platforms.md#reuse-cooldowns-and-retakes).
4. Take that platform's free practice test once today. Links are on [OA platforms](platforms.md).
5. Pick the 72-hour, 2-week or 4-week plan on [strategy](strategy.md#pick-your-plan).
6. Block the time in your calendar. Amazon says to "set aside up to two hours" for the full-time OA. Codility says its timer cannot be paused once you start.
7. If the deadline clashes with exams, ask for an extension today. Use the [extension template](strategy.md#templates).

## Pages in this section

| Page | Read it when |
|---|---|
| [OA platforms](platforms.md) | You know the platform and want its scoring rules, proctoring and free practice |
| [OA format by company](company-oa-formats.md) | You want the exact format for 60 companies |
| [Strategy](strategy.md) | You need a prep plan, a time budget, input templates and the integrity rules |
| [Code quality in OAs](code-quality.md) | Your code passes tests but you want it to survive a human read |

## From Jugal's Substack

- [How to Prepare for FAANG AI Engineer Internship Season Before Applications Open](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer): "Apply to Amazon early. Often the earliest to post, sometimes in July, with an online assessment preceding interviews."
- [Want a Job in the Next 30 Days? Use these 5 websites](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use): weeks 1 to 2 use CodeSignal Learn for fundamentals. The steps are in the [4-week plan](strategy.md#4-week-plan).
- [How to Land Anthropic's $3,850/Week AI Fellowship in 2026](https://jugaldb.substack.com/p/how-to-land-anthropics-3850week-ai): a 90-minute coding assessment where "Interviewers care about clean code and structured thinking, not just arriving at the correct answer."
- [Your 6-Week Amazon Interview Roadmap](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the): the timer rule used in the prep plans.

Next: [OA platforms: what each one tests](platforms.md)
