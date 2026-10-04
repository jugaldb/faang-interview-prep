# Tailor your resume to each job

For every application that matters. A full pass takes 30 to 45 minutes and a quick pass 10. Either way you end with a version that uses the job's words for work you did.

## Why tailor

- Google asks for a job-specific resume and says to make it obvious you meet the minimum qualifications ([Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/)).
- Amazon recruiters say to align your accomplishments with the posting's Basic and Preferred Qualifications ([About Amazon](https://www.aboutamazon.com/news/workplace/amazon-job-application-resume-writing-tips)).
- Workday's HiredScore grades applicants A to D against the job's basic and preferred qualifications, and recruiters can sort and filter by that grade ([grades](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/reference--candidate-grades.html), [Spotlight](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/concept--spotlight.html)). It skips campus and graduate requisitions, so on many intern and new grad roles a recruiter's keyword search and your form answers do the sorting instead.
- Jugal: "The job description is the rubric" ([I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume)).
- Jugal: "If a posting says 'distributed systems' and you wrote 'large scale backend,' the software may not connect the two" ([4 Resume Templates Based on Your Country](https://jugaldb.substack.com/p/4-resume-templates-based-on-your)).

## How much to tailor

| Tier | Which roles | What you do | Time |
|---|---|---|---|
| 1 | Your top 10 to 20 roles, roles with a referral, your Google picks | The 12-step process plus Jugal's prompt chain | 30 to 45 min |
| 2 | Good-fit roles | Pick the right role-type version, reorder bullets and Skills, mirror 3 to 5 exact terms | 10 min |
| 3 | Long shots and high-volume applications | Send the matching role-type version as is | 1 min |

Jugal's two rules:

- "One tailored resume per type of role" ([Amazon is still hiring after the biggest layoffs](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
- Maximize how many applications turn into interviews, not how many you submit ([I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume)).

How many applications to send and in what order: [application strategy](../jobs/application-strategy.md).

## Build role-type versions once

1. Pick 2 to 4 role types from the table below.
2. Collect 5 real postings for each type. Paste them into ChatGPT or Claude with your resume and ask Jugal's two questions: "What skills am I missing? What should I emphasize?" ([Amazon is still hiring after the biggest layoffs](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).
3. Paste the same 5 postings into [Text Analyzer](https://www.online-utility.org/text/analyzer.jsp) and note the terms that repeat. This word-frequency shortcut comes from the [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/).
4. Duplicate your base resume (an Overleaf project copy or a Google Docs copy). Name it by type: `resume_backend`, `resume_ml`.
5. Reorder and reword each copy using the table.
6. Upload 1 to 2 versions to LinkedIn, which stores your 4 most recent resumes ([LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a510363)). More in the [LinkedIn guide](../linkedin/index.md).

> **Tip:** Tailor in batches of 5 to 10 jobs from one role family. Jugal: mixing a PM role and a backend role in one batch "gets you a resume that is vaguely fine for both and strong for neither" ([I talked to 7 FAANG recruiters](https://jugaldb.substack.com/p/i-talked-to-7-faang-recruiters-none)).

| Role type | Skills line starts with (only if true) | Lead project | Bullets to surface |
|---|---|---|---|
| Backend, distributed systems | Java, Go, or Python; SQL; a cloud | API or systems project | Latency, throughput, reliability, data modeling |
| Full-stack, frontend | TypeScript, React, Node.js | Deployed web app with users | Users, Lighthouse score, accessibility, API integration |
| ML or AI engineer | Python, PyTorch, LLM APIs, RAG | AI app with an eval set | Eval metric, dataset size, latency, cost |
| Data engineering | SQL, Python, pipeline tools you used | Pipeline project | Rows, freshness, job runtime, cost |
| SRE, infrastructure | Linux, Docker, Kubernetes, scripting | Automation or infra project | Deploy time, uptime, alerts, on-call |
| Quant developer, low latency | C++, Python, Linux | Performance-critical project | Microseconds, throughput, memory |

## The 12-step tailoring process

1. **Save the job description.** Copy the full text, the link, and today's date into a doc; postings get taken down. The Simplify list notes many SWE internships "only stay open for a few days" ([Summer 2027 Internships](https://github.com/SimplifyJobs/Summer2027-Internships)).
2. **Check the hard filters first:** sponsorship, citizenship or export control, graduation window, location, degree. Jugal's check is Ctrl+F for "export control", "US person", and "sponsorship" ([494 Summer 2027 Internships Are Already Live](https://jugaldb.substack.com/p/494-summer-2027-internships-are-already)). If you fail one, stop ([international students](../jobs/international-students.md)).
3. **Split the requirements.** Mark Minimum or Basic qualifications as Must. Mark Preferred qualifications as Nice.
4. **Pull 10 to 15 terms.** Languages, frameworks, cloud, domains (distributed systems, payments, ML), and practices (testing, CI/CD, code review, on-call).
5. **Fill the keyword map.** One row per term. Blank template and a filled example are below.
6. **Delete what you cannot back.** Jugal: "If the role asks for Kafka and you have never used Kafka, do not add Kafka."
7. **Mirror the exact words for what you have.** If the posting says "distributed systems", use that phrase. Write the full term once with the acronym: "Amazon Web Services (AWS)".
8. **Reorder.** The most relevant role, project, and Skills line go in the top third. Inside each role, the most relevant bullet goes first.
9. **Surface buried evidence.** Jugal: "if the job description talks about AWS five times and you have AWS experience buried in one bullet, that is something you should probably fix." Rewrite 3 to 5 bullets with the [X, Y, Z method](writing-bullets.md).
10. **Reorder the Skills lines** to match the posting's priority.
11. **Run the prompt chain** below for Tier 1 roles.
12. **Check, export, log.** Read every changed line against your base resume, then run the [parse test](ats.md#test-your-pdf-in-10-minutes). Keep a copy named `Firstname_Lastname_Resume_[Company].pdf` in your own folder, upload it as `Firstname_Lastname_Resume.pdf`, and log the version in your [tracker](../outreach/follow-up-and-tracking.md).

## Worked example

Sample posting (illustrative, not a real job):

```text
Software Engineer, New Grad (Backend)   [illustrative example]

Minimum qualifications
- BS in Computer Science or a related field, graduating Dec 2026 to Aug 2027
- Experience in one of Java, Go, or Python
- Coursework or experience in data structures and algorithms

Preferred qualifications
- Experience building REST APIs backed by SQL databases
- Exposure to distributed systems, caching, or message queues such as Kafka
- Experience with AWS or another public cloud
- Experience writing unit and integration tests and using CI/CD
```

Keyword map for an example student:

| JD term (exact) | Must or Nice | Example student's real evidence | Where it goes | Wording on the resume |
|---|---|---|---|---|
| graduating Dec 2026 to Aug 2027 | Must | Graduating May 2027 | Education line | "Expected May 2027" |
| Java | Must | 12-week internship on a Spring Boot service | Skills (first), Experience bullet 1 | "Java (Spring Boot)" |
| data structures and algorithms | Must | Two courses, TA for one | Coursework line, TA bullet | "Data Structures, Algorithms" |
| REST APIs | Nice | Project API with 14 endpoints | Project bullet 1 | "REST API" |
| SQL databases | Nice | PostgreSQL in the project and internship | Skills, project bullet | "PostgreSQL (SQL)" |
| distributed systems | Nice | Sharded key-value store project | Project title line and bullet | "distributed key-value store" |
| caching | Nice | Redis cache at the internship | Experience bullet 1 | "Redis cache" |
| message queues such as Kafka | Nice | None | Do not add | n/a |
| AWS | Nice | Deployed the project on AWS Lambda | Skills, project bullet | "Amazon Web Services (AWS) Lambda" |
| unit and integration tests, CI/CD | Nice | Tests and a GitHub Actions pipeline | Experience bullet 2 | "integration tests", "GitHub Actions CI/CD" |

One bullet, before and after:

```text
Base:      Built an API for a class project using Python and a database.
Tailored:  Built a REST API (Python, FastAPI) on PostgreSQL with 14 endpoints and integration
           tests in GitHub Actions CI/CD; deployed on Amazon Web Services (AWS) Lambda.
```

Blank keyword map to copy:

```text
| JD term (exact) | Must or Nice | My real evidence | Where on resume | Exact wording |
|---|---|---|---|---|
| [term] | [Must] | [project or role] | [section, bullet #] | "[phrase]" |
| [term] | [Nice] | none | do not add | n/a |
```

## Jugal's 8-step AI prompt chain

- Source: [I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume) (Aug 12, 2026).
- Jugal's result, from the post's subtitle: "I tried this workflow and landed eight interviews in 24 hours, including one at xAI."
- The post's Step 1 connects a job-matching tool to Claude. The resume work starts at Step 2 and runs in any chat model: Claude, ChatGPT, or Gemini.

Before you start:

1. Write your own draft first. Anthropic's applicant rule: create the first draft yourself, then use AI to refine it ([Anthropic candidate AI guidance](https://www.anthropic.com/candidate-ai-guidance)).
2. Remove your phone number and street address from the copy you paste into any AI tool.
3. Open one new chat per job and run every step in that chat.

**Step 2. Baseline.** Upload your resume and the complete job description, then paste:

```text
Analyze my resume against this job description.

Give me a match score out of 100 and explain the biggest reasons I would or would not get an interview.

Do not rewrite anything yet.
```

Do: write the score down as a baseline. It is the model's opinion, not an employer's score.

**Step 3. Missing keywords.**

```text
List the most important keywords, skills, technologies, and responsibilities from this job description that are missing or underrepresented on my resume.

Separate them into:

1. Things I already have experience with and should emphasize
2. Things I should not add unless I actually have that experience
```

Do: add group 1 items to your keyword map. Group 2 stays off the resume.

**Step 4. The 10-second recruiter test.**

```text
Pretend you are a senior recruiter seeing my resume for the first time.

You have 10 seconds.

What immediately stands out?

What looks weak?

What could make you reject me?

What are the 5 highest priority changes I should make?
```

Do: fix the 5 changes. Jugal's list of what this step should catch:

- Your strongest experience being buried
- Important technologies being difficult to find
- Generic bullets
- No measurable impact
- Too much irrelevant information
- A Skills section that does not match your actual experience

**Step 5. X, Y, Z rewrite.**

```text
Now tailor my resume specifically for this job.

Rewrite my experience bullets using Google's XYZ formula wherever possible:

Accomplished X, measured by Y, by doing Z.

Prioritize the experience and technologies most relevant to this job description.

Keep everything factual.

Do not invent skills, metrics, technologies, or experience.
```

Do: reject every number you did not give it.

**Step 6. Act like an ATS.**

```text
Act like an ATS system screening this resume for this exact job.

What could cause the resume to be filtered out?

Check keywords, formatting, section names, skills, dates, readability, and relevance.

Give me only the problems I should fix.
```

Do: fix only the listed problems. Jugal: watch for "skills from the job description that you genuinely have but are difficult to find on your resume."

**Step 7. Act like the hiring manager.**

```text
Now act as the hiring manager for this role.

Would you interview me based on this resume?

Answer YES, MAYBE, or NO.

Then tell me the exact reasons for your decision and the final changes you would make before applying.
```

Do: apply the final changes. A clear NO for a real reason means this role belongs in Tier 3.

**Step 8. Final version.**

```text
Apply the final changes and give me the complete finished resume.

Keep it ATS friendly, concise, and tailored specifically to this job.

Do not add anything that cannot be supported by my original resume.
```

```text
Create a clean final PDF version of this resume.
```

Do (this guide's suggestion): paste the final text back into your own template so the layout stays the one you already tested, then run the [parse test](ats.md#test-your-pdf-in-10-minutes).

Jugal's recap, in order: match score, missing keywords, 10-second recruiter test, XYZ rewrite, ATS test, hiring manager test, final resume.

His rules from the same post:

- "Do not use Claude to lie on your resume."
- Do not invent technologies, metrics, responsibilities, or projects.
- "The goal is not to trick the recruiter."

## Jugal's other resume prompts

### ATS expert and resume consultant

One prompt instead of eight. From [The New Grad and Internship prep for 2026](https://jugaldb.substack.com/p/the-new-grad-and-internship-prep), with bullet symbols changed to hyphens. A longer version is in his [Notion resume guide](https://jugaldb.notion.site/Resume-Template-How-Do-I-improve-my-resume-1a0af2117b83809ea355d5d724ea5109).

```text
I want you to act as an experienced ATS expert and resume consultant. I will provide you with a job description and my resume. Please

1. Analyze both documents and identify key technical skills, qualifications, and experience requirements from the job description
2. Compare these against my resume and identify
    - Keywords and skills that are missing
    - Experience or achievements not reflected
    - Soft skills emphasized in the job description
3. Suggest specific changes
    - Words or phrases to add
    - Skills to emphasize
    - Achievements to reframe
    - Any missing sections

Here is the job description
[Paste here]

Here is my current resume
[Paste here]
```

### Senior hiring manager

From [How I turned my resume into a job magnet](https://jugaldb.substack.com/p/how-i-turned-my-resume-into-a-job). Jugal: "Paste the JD. Paste your resume."

```text
Act as a senior hiring manager with over 20 years of experience in the [PREFERRED INDUSTRY]. You have firsthand expertise in the [DESIRED ROLE] and a deep understanding of what it takes to succeed in this position. Your task is to identify the ideal candidate based solely on their resume, ensuring they meet and exceed expectations for [JOB DESCRIPTION].
```

The prompt has no output instruction. Add this last line (added by this guide):

```text
List the gaps between my resume and this role, then rewrite my 5 weakest bullets without adding anything that is not in my resume.
```

### LinkedIn profile to resume

Turns your LinkedIn profile into a one-page LaTeX resume. Steps and the full prompt: [templates](templates.md#build-it-from-your-linkedin-profile).

### Job Search Coach (Claude skill)

Jugal's free Claude skill. Its resume modules rewrite your resume for one job description while keeping your format, and produce one tailored version per job from your master file. Download link and install steps: [I talked to 7 FAANG recruiters](https://jugaldb.substack.com/p/i-talked-to-7-faang-recruiters-none).

1. Install the skill, then say "help me tailor my resume for this role" and paste your resume and the full job description.
2. For a batch, give it 5 to 10 postings from one role family.
3. Move the fixes that show up in every version into your base resume.
4. Run [Check the AI's work](#check-the-ais-work) on every output.

## Check the AI's work

1. Diff it. Put your base resume and the AI version side by side. Check every changed number, tool, title, and date.
2. Run the interview test on each changed bullet: could you talk about it for 5 minutes?
3. Remove words you would never say out loud.
4. Run the [parse test](ats.md#test-your-pdf-in-10-minutes) on the final PDF.
5. Never add hidden text or prompts. Recruiters see them ([ATS myths](ats.md#truths-vs-myths)).

## Keyword checkers

| Tool | Cost | Use it for | Ignore |
|---|---|---|---|
| [Resume Worded scanner](https://resumeworded.com/resume-scanner) | Freemium | A second opinion on missing keywords, weak verbs, and formatting | Comparing its score with other tools. Resume Worded says to compare scores only within the same tool |
| [Teal](https://www.tealhq.com/) | Freemium. Free tier shows the top 5 job description keywords; Match Score needs Teal+ ($13 per week, $29 per month, or $79 per 90 days as of Oct 2026) | Spot-checking the top missing terms | Paying only for a match percentage |
| [Simplify resume builder](https://simplify.jobs/resume-builder) | Freemium. Build, score, and export are free; AI tailoring needs Simplify+ | Pairing with the Simplify autofill extension for internship applications | The score as a pass mark |
| [Resume Matcher](https://github.com/srbhr/Resume-Matcher) | Free, open source | Local AI tailoring when you do not want to paste your resume into a hosted tool | |
| [Text Analyzer](https://www.online-utility.org/text/analyzer.jsp) | Free | Word frequency across 3 to 5 postings | |

Jugal's routine targets a ">85% match" in Teal or Resume Worded ([How I turned my resume into a job magnet](https://jugaldb.substack.com/p/how-i-turned-my-resume-into-a-job)). Resume Worded's own page calls 85 or above a good score on its scale.

Treat that number as a lint inside one tool. Employers never see it; their systems match against their own criteria ([how ATS works](ats.md)).

## Company notes

| Company | Tailor toward | Links |
|---|---|---|
| Google | Minimum qualifications and X, Y, Z bullets. You can apply to up to three jobs every 30 days, so tailor each one | [Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/), [Google page](../companies/google.md) |
| Amazon | Basic and Preferred Qualifications. The Summer 2027 SDE intern posting lists AI-assisted development tools as a basic qualification | [About Amazon](https://www.aboutamazon.com/news/workplace/amazon-job-application-resume-writing-tips), [posting](https://www.amazon.jobs/en/jobs/10552937/software-development-engineer-intern-summer-2027-usa), [Amazon page](../companies/amazon.md), [Leadership Principles](../behavioral/amazon-leadership-principles.md) |
| Meta | No public resume guidance found (as of Oct 2026). Use the general rules | [Meta page](../companies/meta.md) |
| Anthropic | Draft yourself, refine with Claude | [Anthropic candidate AI guidance](https://www.anthropic.com/candidate-ai-guidance), [Anthropic page](../companies/anthropic.md) |
| Any company | Stay within one role family. Recruiters see every application you send in their ATS. Tech Interview Handbook: "applying for a Software Engineer and a Data Scientist role at the same company is not a good idea" | [All companies](../companies/index.md) |

Next: [How applicant tracking systems work](ats.md)
