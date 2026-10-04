# OA platforms: what each one tests

For anyone who knows which platform their OA runs on. Each section gives the scoring rules, the traps, what is proctored, and the free official practice.

> **Watch out:** Your invite and the test's instructions page override everything here. Companies switch platform features on or off (webcam, AI assistant, copy-paste, time limit). Read the instructions screen fully before you press start.

## Quick comparison

| Platform | Common format | How it scores | The trap | Free practice |
|---|---|---|---|---|
| HackerRank | 2 to 4 coding problems in a function stub. Sometimes MCQ, SQL or a code repository task | Each hidden test case, exact output match | Output format. Edits after Submit are lost unless you Run and Submit again | [Sample Test](https://www.hackerrank.com/test/eddldk1453s/7d2771d1c6c0b8818096707450905dac), [Interview Preparation Kit](https://www.hackerrank.com/interview/interview-preparation-kit) |
| CodeSignal GCA | 4 problems, 70 min, any order | Assessment Score 200 to 600 | Spending 40 minutes on question 3 | [Practice area](https://app.codesignal.com/assessments/practice) (login) |
| CodeSignal ICA | 1 project in 4 levels, 90 min | 200 to 600 | Messy level 1 code slows levels 3 and 4 | [Mock ICA repo](https://github.com/PaulLockett/CodeSignal_Practice_Industry_Coding_Framework) |
| Codility | 1 to 3 tasks, 30 min to 2 hours | Percent of tests passed, correctness plus performance | Pressing Submit is final. Code that does not compile scores 0 | [Demo test](https://app.codility.com/demo/take-sample-test/) |
| HackerEarth | Coding plus MCQ, common in India | Hidden test cases for code, plus MCQ marks | Browser lockdown and webcam checks | [HackerEarth practice](https://www.hackerearth.com/practice/) |
| Karat | Live 60-minute interview with a Karat engineer | Interviewer write-up plus recording | It is a live interview, not a solo test | [Karat candidate page](https://karat.com/candidate-experience/) |
| HireVue | Recorded video answers, sometimes games | Competency ratings | Answers with no structure. Use the shape below | [HireVue candidate FAQ](https://www.hirevue.com/candidates/faq) |

## HackerRank

Used by Amazon, Goldman Sachs, JPMorgan, Microsoft (most 2025 to 2026 reports), Citadel, Two Sigma, Stripe, IBM, Salesforce, Cisco, Expedia, OpenAI, Palantir, Rippling and many more. See [OA format by company](company-oa-formats.md#by-platform).

### What the test looks like

1. Most questions give you a function stub. You fill in the function and return a value. Some questions make you read STDIN and print to STDOUT yourself ([answer coding questions](https://candidatesupport.hackerrank.com/articles/9623161883-answer-coding-questions)).
2. Sample test cases show the input, your output and the expected output. Hidden test cases cover the edge cases and large inputs ([sample test cases](https://candidatesupport.hackerrank.com/articles/1258064241-sample-test-cases)).
3. Custom Input runs your code on input you type, without running the question's tests. Debug prints are fine while testing. Remove them before the final submit ([debug with custom input](https://candidatesupport.hackerrank.com/articles/2715283041-debug-using-custom-input-values)).
4. HackerRank supports 61 languages. Switching language resets the editor, so pick before you type.
5. The plain "C++" option compiles as C++11 with G++ 8.3.0. For newer syntax, pick "C++20" or "C++23" in the dropdown ([execution environment](https://candidatesupport.hackerrank.com/articles/2201684846-execution-environment)).
6. Network: HackerRank rates 10 Mbps "Good" and 1 Mbps "Average". The login page offers a Sample Test before the real one ([introduction to HackerRank tests](https://candidatesupport.hackerrank.com/articles/9881337709-getting-familiar-with-hackerrank-tests)).
7. Browser: use Chrome, Firefox or Edge. "The Brave browser is not supported" ([browser recommendations](https://candidatesupport.hackerrank.com/articles/3310749702-browser-recommendations-for-hackerrank-tests)).

### Submission rules that cost people points

From [modifying code submissions](https://candidatesupport.hackerrank.com/articles/5994519354-modifying-the-code-submissions-in-a-test):

| What you did before time ran out | What HackerRank grades |
|---|---|
| Typed code, never clicked Run Code or Submit | The last auto-saved version |
| Clicked Run Code, never clicked Submit | The latest compiled version |
| Submitted, then edited without running or submitting again | The earlier submitted code, not your edits |

Your move: after every real fix, click Run Code, then Submit. You can resubmit any number of times before the test ends.

### Time and memory limits

Per run, as of Oct 2026 ([execution environment](https://candidatesupport.hackerrank.com/articles/2201684846-execution-environment)):

| Language | Time limit | Memory |
|---|---|---|
| C, C++ | 2 s | 512 MB |
| Java 8 | 4 s | 512 MB |
| Java 17, Java 21 | 4 s | 2048 MB |
| Python 3 | 10 s | 512 MB |
| PyPy 3 | 4 s | 512 MB |

Python gets more time because it runs slower. The hidden tests still expect the right complexity. Code size is capped at 50 KB.

### How it scores

Points come from the number of test cases you pass. Your output must match the expected output exactly, so a correct solution can still fail on format. Each question ends with a full, partial, or zero score ([evaluation method](https://candidatesupport.hackerrank.com/articles/4513323466-evaluation-method-of-coding-questions)).

### Question types besides algorithms

| Type | What you do | Seen at |
|---|---|---|
| MCQ | CS fundamentals, language, aptitude | India campus drives, PayPal, Rippling US intern |
| SQL | Write queries against given tables | Snowflake (some), ServiceNow QA intern |
| REST API | Call a paginated JSON endpoint, aggregate the result | IBM, Agoda, Palantir (2026 reports) |
| Code repository | Work inside a real repo with install, run and test commands. Scored by the repo's tests ([code repository questions](https://support.hackerrank.com/articles/1900882930-code-repository-questions)) | Amazon (2026 reports), Goldman Sachs Software Diagnostics |

For the REST API type, practice this loop once: fetch page 1, read `total_pages`, fetch every page, then aggregate the `data` arrays. A Python version (add any extra query parameters the task gives you):

```python
import json
import urllib.request


def fetch_all(base_url: str) -> list[dict]:
    """Return the `data` items from every page of a paginated JSON endpoint."""
    items: list[dict] = []
    page, total_pages = 1, 1
    while page <= total_pages:
        with urllib.request.urlopen(f"{base_url}?page={page}") as response:
            body = json.load(response)
        total_pages = body["total_pages"]  # read it from page 1, never hard-code it
        items.extend(body["data"])
        page += 1
    return items
```

### AI-assisted tests

Some companies enable an AI assistant inside the test ([AI-assisted tests](https://support.hackerrank.com/articles/1152916770-ai-assisted-tests)).

- **Guarded mode** (the default): helps with syntax, navigation and concepts. It will not write the full solution.
- **Unguarded mode**: adds Plan, Ask and Agent modes, inline completion, and a choice of several frontier models.
- Your chat is recorded and shown to the evaluator. HackerRank says it is "not used for automatic scoring" ([AI assistant in tests](https://candidatesupport.hackerrank.com/articles/7634558376-ai-assistant-in-tests)). A person can still read every prompt you typed.

### What is proctored

| Feature | What it does | Source |
|---|---|---|
| Secure Mode | Forces full screen, blocks copy-paste and extra monitors, alerts on tab switches | [Proctoring overview](https://support.hackerrank.com/articles/1079706165-proctoring-hackerrank-tests) |
| Proctor Mode (tests created after the July 2025 release) | Flags no face or extra faces, phones or tablets even partly in view, tab switches, new monitors, answer-sharing sites and GitHub, "External AI coding assistants", type-and-delete patterns, repeated looking away | [Proctor Mode](https://support.hackerrank.com/articles/5663779659-proctor-mode) |
| Desktop App Mode | A native app you install. Blocks other apps (it names Cluely, video calls, messaging and LLM apps), screen sharing, screenshots and remote access. Will not run in a virtual machine | [Desktop App Mode](https://support.hackerrank.com/articles/5973590014-hackerrank-desktop-app-mode) |
| Image proctoring | Webcam snapshots at intervals, checked for extra faces or a photo instead of a face. Off unless the company turns it on | [Impersonation detection](https://support.hackerrank.com/articles/7825915809-impersonation-detection) |
| MOSS plagiarism check | On by default. Tokenizes code, so renaming variables does not hide copying. High = 90%+ similar | [MOSS](https://support.hackerrank.com/articles/2106056073-plagiarism-detection-using-moss-(measure-of-software-similarity)) |
| AI plagiarism model | Uses writing patterns, time taken, pastes and tab switches. Reviewers get a keystroke replay | [AI plagiarism detection](https://support.hackerrank.com/articles/8000786908-ai-plagiarism-detection) |

### Practice

- [HackerRank Sample Test](https://www.hackerrank.com/test/eddldk1453s/7d2771d1c6c0b8818096707450905dac): a 1-question test in the real test interface, linked from HackerRank's candidate guide. How to use it: take it once to find Run Code, Submit, Custom Input and the language dropdown.
- [HackerRank Interview Preparation Kit](https://www.hackerrank.com/interview/interview-preparation-kit): challenges grouped by topic. How to use it: do arrays, hash maps, strings and sorting first, in the language you will test in.
- [HackerRank preparation kits](https://www.hackerrank.com/interview/preparation-kits): 1 week (21 challenges), 1 month (54), 3 months (104). How to use it: pick the kit that matches the days left before your deadline.
- [Amazon OA practice test](https://hr.gs/TheAmazonCodingDemo): two unscored practice questions on HackerRank. How to use it: take it a week before your Amazon OA, in the same language.
- [Goldman Sachs practice assessment](https://www.hackerrank.com/test-v2/6nohqkbcq0d): linked from Goldman's own guide. How to use it: take it before your Goldman OA to learn the layout.
- [HackerRank candidate support](https://candidatesupport.hackerrank.com/): the official help center. How to use it: read the submission, execution environment and AI assistant articles linked above once.

## CodeSignal

Used by Capital One, Visa, Pinterest, TikTok, Airbnb, Anthropic, Coinbase, eBay, Robinhood, Instacart, PhonePe, Meta (some roles) and Netflix (intern reports). See [OA format by company](company-oa-formats.md#by-platform).

### General Coding Assessment (GCA)

4 questions, 70 minutes, unless the company set a different duration. All four are visible at once and you can answer in any order. You code inside CodeSignal's IDE only ([GCA structure](https://support.codesignal.com/hc/en-us/articles/360040370853-What-should-I-expect-when-I-take-the-General-Coding-Assessment-GCA-and-how-is-it-structured)).

CodeSignal publishes what each question tests ([General Coding Framework PDF](https://discover.codesignal.com/rs/659-AFH-023/images/General-Coding-Skills-Evaluation-Framework-CodeSignal-Skills-Evaluation-Lab-Short.pdf)):

| Question | Module | Size | Target time | Not included |
|---|---|---|---|---|
| 1 | Basic coding | 5 to 10 lines | about 10 min | |
| 2 | Data manipulation | 10 to 20 lines | about 15 min | |
| 3 | Implementation efficiency (matrices, simulation) | 25 to 40 lines | about 20 min | graphs, number theory, dynamic programming |
| 4 | Problem solving (greedy, two pointers, hash maps) | 25 to 35 lines | about 30 min | Dijkstra, Kruskal, FFT, brain teasers |

Rules that matter ([GCA rules and setup](https://support.codesignal.com/hc/en-us/articles/360051960134-General-Coding-Assessment-GCA-Rules-and-Setup)):

1. Submit as many times as you want. The highest-scoring submission for each question counts, even if a later one has a syntax error.
2. Submit before you leave a task. Unsubmitted code is not saved.
3. Syntax-only web searches are allowed. Looking up C++ queue methods is fine. A page that explains how to build a deque is not.
4. "the use of AI is not allowed, including syntax search."

### Industry Coding Assessment (ICA)

One project-style question in 4 levels, at most 90 minutes. You are not expected to finish all four ([ICA rules](https://support.codesignal.com/hc/en-us/articles/19116922232983-What-are-the-Industry-Coding-Assessment-ICA-rules)).

| Level | What it adds |
|---|---|
| 1 | Basic operations plus corner cases (missing ids, duplicates) |
| 2 | Data processing: calculations, rankings, exports |
| 3 | Advanced features that change earlier behavior |
| 4 | A further extension. You "must reuse, encapsulate, and refactor earlier code" |

Candidates report that the next level opens only when the current level's tests pass ([Airbnb](../companies/airbnb.md), [Anthropic](../companies/anthropic.md)). Reported tasks: a banking system, an in-memory database with TTL, cloud file storage with quotas, a task manager. The structure that survives level 4 is on [code quality](code-quality.md#progressive-tasks-structure-that-survives-level-4).

### The score scale (as of Oct 2026)

1. The score is now called the **Assessment Score**. It runs from 200 to 600 for every certified assessment. On the ICA, only people who submit nothing get 200.
2. Each skill area gets a label: Expert (100% of points), Advanced (67 to 99%), Intermediate (34 to 66%), Developing (0 to 33%). CodeSignal says the labels are "not meant to be used to make hiring decisions" ([Assessment Score](https://support.codesignal.com/hc/en-us/articles/1500001320521-What-is-an-Assessment-Score-and-how-do-I-interpret-a-test-taker-s-GCA-Assessment-Score)).
3. The scale changed in 2023 ("Coding Score 2023"), so old posts quote cutoffs out of 850. CodeSignal's [conversion table](https://support.codesignal.com/hc/en-us/articles/13260678794775-Converting-Historical-Coding-Score-Thresholds-to-Assessment-Score) maps old company cut scores to new ones. It is not for converting one person's score; the platform does that itself.

| Old GCA cut score | Share of test-takers at or below | New cut score |
|---|---|---|
| 700 | 34% | 389 |
| 800 | 86% | 532 |
| 850 | 100% | 600 |

No company publishes a cutoff. Ignore "you need 820" claims from old threads.

### Reuse, cooldowns, and retakes

1. One certified score can be shared with several companies. If a company asks while you are in cooldown, you reshare your existing score.
2. Since July 2026, you can reshare only if the new request uses the same AI-assistance setting ([product updates July 2026](https://support.codesignal.com/hc/en-us/articles/43346994129047-Product-Updates-July-2026)).
3. Companies can refuse old scores. The default is "Accept only recent results" within 6 months, adjustable from 6 months to 3 years ([age limits](https://support.codesignal.com/hc/en-us/articles/1500001964122-Setting-age-limits-for-Assessments-results)). If your score is too old for a company, you get a new attempt even in cooldown.
4. Certified attempts are limited ([cooldown article](https://support.codesignal.com/hc/en-us/articles/11635510785047-What-is-a-cooldown-period-and-how-does-it-impact-my-ability-to-take-an-assessment)):

| Assessment | Limit |
|---|---|
| GCA | 3 attempts per 180 days, at most 2 within 30 days |
| ICA | 2 attempts per rolling 180 days |
| Other certified tests | 1 per 180 days, 2 per 180 days, or the GCA rule, set per assessment |

5. Worked example: attempts on Jan 1, Jan 8 and Feb 1 mean no new GCA attempt until Jul 1.
6. Each new attempt needs a new invitation. New attempts are granted automatically for verified technical problems, when a company needs a proctored result and you only have unproctored ones, or when your score is older than the company accepts.
7. Using a second account to dodge a cooldown is not permitted.
8. Need more time? Ask the recruiter who sent the invite for a new invitation. CodeSignal says "New invitation requests are not guaranteed" ([more time](https://support.codesignal.com/hc/en-us/articles/360040372833-I-don-t-have-time-to-complete-this-assessment-this-week-May-I-have-more-time-to-complete-it)).
9. Technical failure mid-test: email support@codesignal.com the same day ([can I redo it](https://support.codesignal.com/hc/en-us/articles/360040382593-I-didn-t-do-my-best-on-this-assessment-Can-I-re-do-it)).
10. Accessibility: session time can be extended, and the IDE works with JAWS and Dolphin screen readers. Request it through the recruiter ([accessibility](https://support.codesignal.com/hc/en-us/articles/360060783994-Is-CodeSignal-an-accessible-platform)).

> **Tip:** Spend your attempts in priority order. Take the GCA for your top company only after at least two timed 4-problem sets. Any company that asks during your cooldown gets that same score.

### What is proctored

1. You share camera, microphone and screen for the whole test, and show a government photo ID. You may cover everything except the photo, full name and expiry date ([proctoring](https://support.codesignal.com/hc/en-us/articles/360039872174-What-is-proctoring-and-how-does-it-work)).
2. A human verification team reviews the recording. CodeSignal says proctoring does not change your score, and your ID and video are deleted within 15 days and not shared with the company.
3. The company does see "Proctoring Rejected" and the reason.
4. Companies also see a **Suspicion Score** built from paste events (size, count, timing after inactivity), copying the problem text, similarity to other solutions, and language switches combined with pastes ([Suspicion Score](https://support.codesignal.com/hc/en-us/articles/16957476906135-Using-Suspicion-Score)).

### AI-assisted assessments

Since May 2025, companies can turn on an assistant called Cosmo inside the IDE, in a full co-pilot mode or a guided mode. The employer gets the full chat transcript and a session replay ([CodeSignal announcement](https://codesignal.com/blog/introducing-ai-assisted-coding-assessments-interviews/)). Netflix intern candidates in Oct 2025 reported a separate AI-assisted GCA after the regular one (see [Netflix](../companies/netflix.md)). If your invite says nothing about AI, assume none is allowed.

### Practice

- [CodeSignal practice area](https://app.codesignal.com/assessments/practice) (free, login): one question per question type, a 1-hour timer per question that you can reset, code resets every 2 weeks, and companies cannot see it. How to use it: do the GCA-type and the progressive-type question once each in the real IDE.
- [General Coding Framework PDF](https://discover.codesignal.com/rs/659-AFH-023/images/General-Coding-Skills-Evaluation-Framework-CodeSignal-Skills-Evaluation-Lab-Short.pdf) and [Industry Coding Framework PDF](https://discover.codesignal.com/rs/659-AFH-023/images/Industry-Coding-Skills-Evaluation-Framework-CodeSignal-Skills-Evaluation-Lab-Short.pdf): the official specs. How to use them: copy the per-question minutes into your time plan.
- [PaulLockett/CodeSignal_Practice_Industry_Coding_Framework](https://github.com/PaulLockett/CodeSignal_Practice_Industry_Coding_Framework): a 4-level mock ICA with tests (Python). How to use it: do it once in 90 minutes with a timer before any ICA.
- [Leader-board/OA-and-Interviews](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md): a community guide with LeetCode lists that match GCA questions 3 and 4. How to use it: drill the question 3 and question 4 lists in week 2 of the [4-week plan](strategy.md#4-week-plan).
- [CodeSignal Learn](https://codesignal.com/learn) (freemium): structured DSA paths with an AI tutor. How to use it: start the [Python algorithms path](https://codesignal.com/learn/paths/mastering-algorithms-data-structures-and-interview-problems-in-python) (or the same path in your language) and follow Jugal's steps in the [4-week plan](strategy.md#4-week-plan).
- [CodeSignal coding assessment checklist](https://codesignal.com/blog/coding-assessment-checklist/): an 8-step checklist. How to use it: read it the day before.

## Codility

Used by Palo Alto Networks (US new grad 2025, Israel), Microsoft (earlier cycles), Hudson River Trading (HackerRank or Codility per its 2021 blog) and some Google off-campus OAs. See [OA format by company](company-oa-formats.md#by-platform).

### Rules from Codility's own FAQ

All of these are from the [Codility candidate FAQ](https://app.codility.com/candidate-faq/) and [automated scoring principles](https://support.codility.com/hc/en-us/articles/360043318374-Automated-Scoring-Principles).

1. You can open the link to see the task count, languages and time limit without starting the clock, as long as you start within the testing window.
2. Every task has at least 6 test cases. Your score is the percent you pass. The example test shown to you does not count.
3. All tasks get correctness tests. Algorithmic tasks also get performance tests, so complexity matters.
4. Code must compile to earn any points. "A partially correct solution that compiles is better than a perfect solution that doesn't."
5. Pressing Submit on a task is final. When time runs out, whatever is in the editor is submitted automatically.
6. Time taken does not affect the automated score.
7. "Run" returning OK means it compiled and passed the example. Nothing more.
8. Keep the function signature exactly as given. Do not add checks for input the task says cannot happen.
9. Most answers are 10 to 20 lines. Tests last 30 minutes to 2 hours and cannot be paused.
10. Before trying a riskier idea, comment out the working version so you can restore it.
11. Style is usually not auto-scored, but some tasks score it, and "your testing team may manually review your submitted code."
12. Some bug-fix tasks limit how much of the starting code you may change and reward the fewest edits. Fix the bug, do not rewrite.
13. You may write and test in your own editor. Phones and tablets are not supported. Accessibility Mode supports screen readers, keyboard navigation and up to 400% zoom.

### What is proctored

Monitoring depends on the company: screen sharing, camera, or neither. Screen sharing needs Chrome 131+, Edge 130+ or Opera 114+. The FAQ says "Cheating and plagiarism are easy to discover."

### Practice

- [Codility demo test](https://app.codility.com/demo/take-sample-test/): unlimited demo assessment. How to use it: take it twice, once to learn the layout and once timed.
- [Codility Lessons](https://app.codility.com/programmers/): lessons and tasks graded on correctness and performance. How to use it: do one lesson a day and read the performance report on every task you fail.

## HackerEarth and India campus platforms

[HackerEarth](https://help.hackerearth.com/assessments-candidates) tests can include programming, MCQs, SQL, data science and project questions. Expect a locked "Smart Browser", webcam monitoring, ID checks, and a practice test before the real one.

| Platform | Seen at | What to expect | Free prep |
|---|---|---|---|
| HackerEarth | [Flipkart](../companies/flipkart.md) lateral SDE, [Walmart](../companies/walmart.md) India campus (2024) | Coding plus MCQ | [HackerEarth practice](https://www.hackerearth.com/practice/) |
| Unstop | Earlier [Flipkart](../companies/flipkart.md) GRiD editions, [Adobe](../companies/adobe.md) India Hackathon, a [Stripe](../companies/stripe.md) India intern drive (Sep 2026) | Challenge rounds with coding and MCQ | GRiD 8.0 registration ran on Flipkart's own [GRiD 8.0 page](https://mycareernet.co/events/flipkart-earlycareers-grid-8-0/) |
| SHL / AMCAT | [Morgan Stanley](../companies/morgan-stanley.md) India campus (debugging, interactive aptitude, coding), [IBM](../companies/ibm.md) India English test | Sections with separate timers. Some aptitude items are interactive | [SHL practice tests](https://www.shl.com/shldirect/en/practice-tests/) |
| Mercer Mettl | Various campus drives | System check and mock test first. Webcam-proctored tests may need firewall ports open | [Mettl test-taker guide](https://mettl.com/test-taker-guide/guide-for-test-taker/) |
| iMocha | Various | Camera and mic, a reference photo, sometimes a Safe Assessment Browser and ID check, separate section timers | [iMocha guide](https://imocha-support.bolddesk.com/kb/article/251/how-to-take-a-test-on-imocha) |
| Glider.ai | [Intuit](../companies/intuit.md) India campus | 4 DSA problems in 90 min, proctored | None public |
| HirePro | [Walmart](../companies/walmart.md) India campus (2024) | MCQs then 2 coding problems | None public |

> **Watch out:** Some campus tests use negative marking: +2 and -0.5 at D. E. Shaw India, +1 and -0.25 at Qualcomm India (reported). Do the guessing math on [strategy](strategy.md#partial-credit-tactics) before you guess.

## Karat

Karat runs first-round technical interviews for other companies. It is live, not a solo test.

1. Format: one hour. A brief intro, about 10 minutes of discussion questions, then about 40 minutes of programming ([Karat candidate experience](https://karat.com/candidate-experience/)).
2. What counts most: "The most important thing we are evaluating is how successfully your code solves the problem."
3. The recruiter gets the recording and a written summary. Audio and code playback are recorded even with your camera off ([Karat FAQ](https://karat.com/customer-faq)).
4. You can book evenings and weekends. Karat says 60% of interviews happen outside core business hours. Book the slot when you think most clearly.
5. Integrity rules: no outside help, no code that is not your own (except from a provided AI assistant), no pasting the question into a search engine or a GPT.
6. What gets flagged: typing outside the window, looking between monitors, and code that appears in an unusual "top-down or line-by-line manner". A second interviewer then rewatches the whole interview.
7. AI: some modules include a built-in assistant, some allow outside tools, and others allow none. Ask the recruiter which one you have.

What companies ask through Karat (from candidate reports):

| Company | Reported format |
|---|---|
| [PayPal](../companies/paypal.md) (US) | About 5 min intro, 10 to 20 min reviewing or debugging code snippets, 30 to 45 min of 1 to 2 practical DSA problems |
| [Walmart](../companies/walmart.md) (US) | Pick 2 topics from OOP, production troubleshooting, REST APIs, testing, databases and web development, then a coding problem with fully runnable code |
| [Instacart](../companies/instacart.md) | Some phone screens. Instacart's AI guide allows AI in the Senior Software Engineer process only in the "Karat Next Gen interview" ([Instacart AI usage guide](https://www.instacart.careers/ai-usage-guide)) |
| [Lyft](../companies/lyft.md) | Byteboard: read a design doc, comment on it, then implement related features. byteboard.dev now redirects to karat.com |

How to prepare: do two mock interviews where you talk while you type and run your code before saying you are done. The steps are on [the 45-minute coding interview](../coding/interview-framework.md) and [mock interviews](../coding/mock-interviews.md).

## HireVue (recorded video)

1. On-demand video: usually 5 to 8 questions, a few minutes per answer, under 20 to 30 minutes in total. Set aside 45 minutes, as HireVue advises ([HireVue candidate FAQ](https://www.hirevue.com/candidates/faq)).
2. It rates job competencies plus communication, conscientiousness, problem solving, team orientation and initiative. It is a first cut before human interviews.
3. If your connection drops, reopen the same link and continue where you left off.
4. Use the practice questions first. HireVue's tips also say you can keep notes next to you, put light in front of you, and use the strongest wifi you can ([HireVue interview tips](https://www.hirevue.com/candidates/interview-tips)).
5. Neurodivergent candidates and candidates with disabilities can ask the recruiter for accommodations. HireVue says this can include the questions in advance.

Seen at: [Goldman Sachs](../companies/goldman-sachs.md) campus (after the OA, per reports), [Palo Alto Networks](../companies/palo-alto-networks.md) US new grad (2025). [JPMorgan](../companies/jpmorgan.md) lists an on-demand recorded video interview without naming the vendor ([JPMorgan hiring FAQ](https://www.jpmorganchase.com/careers/how-we-hire/faqs)). [IBM](../companies/ibm.md) uses a recorded video assessment for some roles (reported: 1 minute to prepare, 1 minute to answer, no retakes).

Answer shape for a 1 to 2 minute recorded answer:

```text
[10 sec]  Situation: "In my [course / internship / project], we had [problem]."
[10 sec]  Task: "I was responsible for [your part]."
[50 sec]  Action: "I [did X], then [did Y], because [reason]."
[20 sec]  Result: "[Number or outcome]. Next time I would [one change]."
```

Build the stories first on [behavioral interviews](../behavioral/index.md) and the [story bank](../behavioral/story-bank.md).

## Game-based and psychometric tests

These measure how you think and work, not how you code.

| Test | Where you may see it | What it is | How to prepare |
|---|---|---|---|
| HireVue games | Employers using HireVue | Games under 20 minutes, randomized and adaptive, measuring work style, working with people, working with information ([HireVue games](https://www.hirevue.com/platform/assessment-software/game-based-assessments)) | Read the page once. Take them rested, in a quiet room |
| SHL (including G+) | Optiver and Barclays per a community guide, [Morgan Stanley](../companies/morgan-stanley.md) India campus | Numerical, verbal, inductive and deductive reasoning. G+ has a 30-question MCQ version and a 24-question interactive version, both 36 minutes ([Leader-board guide](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md)) | Do each [SHL practice test](https://www.shl.com/shldirect/en/practice-tests/) once |
| Roblox assessment | [Roblox](../companies/roblox.md) early career | Problem-solving games built on Roblox (Robots, Factory, Outpost: Mars), about 23 workplace scenarios, and a coding section. You can split it over a week | Play the untimed practice games Kaiju Cats and Coding Cookies first |
| Google Hiring Assessment | Most [Google](../companies/google.md) applicants | Agree or disagree with workplace statements. Aced reports 50 to 75 items | Answer consistently. On policy scenarios, follow the policy |
| Amazon Workstyles | Every Amazon SDE OA | Pick statements that match your work style, built on the Leadership Principles, about 15 minutes | Read the [16 Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles) once |
| Coinbase assessments | [Coinbase](../companies/coinbase.md) engineering roles | Official: about 30 minutes on cognitive ability and culture alignment. Reports: about 50 aptitude questions in 15 minutes and a 100 to 200 item personality survey | Answer consistently. Items repeat |
| Plum | Certain [Bloomberg](../companies/bloomberg.md) entry-level roles (official) | A work-style assessment | The recruiter tells you if it applies |
| Strength-based and skills assessments | [Expedia](../companies/expedia.md) Emerging Talent (official) | Work-style and skills questions | Answer as your real working self |
| pymetrics, Arctic Shores | Banks and UK graduate schemes. JPMorgan used pymetrics historically (not confirmed for 2026) | Short games with no coding or math | The [Leader-board guide](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md) covers both. There is little to practice |

Four rules for all of these:

1. Answer as yourself, consistently. Questionnaires repeat ideas in different words.
2. Situational judgment tests do have better and worse answers, even when employers say otherwise ([Leader-board guide](https://github.com/Leader-board/OA-and-Interviews/blob/main/Online%20Assessments.md)). For Amazon, when two options both feel true, pick the one closer to customer impact, ownership and delivering results, if that honestly describes you.
3. Take games rested. Speed and attention count.
4. If you are neurodivergent or have a documented condition, ask for an accommodation before you start. Amazon, Codility, CodeSignal, Karat and HireVue all describe a route; Amazon's is its [accommodations page](https://www.amazon.jobs/content/en/how-we-hire/accommodations). Use the [accommodation request](strategy.md#templates) template.

## Live coding pads

CoderPad and HackerRank CodePair host live screens, not OAs. An engineer watches you code. Practice in the [CoderPad sandbox](https://app.coderpad.io/sandbox) with autocomplete off, then follow [the 45-minute coding interview](../coding/interview-framework.md).

Next: [OA format by company](company-oa-formats.md)
