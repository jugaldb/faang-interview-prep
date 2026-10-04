# Find internships and apply in week one

For anyone applying to Summer 2027 or Summer 2028 internships. When you finish this page you will have alerts running, a tracker, a 30-minute daily routine, and referral messages ready to send.

Start with Jugal's [494 Summer 2027 Internships Are Already Live](https://jugaldb.substack.com/p/494-summer-2027-internships-are-already) post. It explains why the posted deadline is almost never the real one, and it ends with the rule this page is built on: pick five links and submit five applications before you close your laptop.

## The live lists

Counts are from Oct 4, 2026.

| List | What it covers | How to use it |
|---|---|---|
| [SimplifyJobs Summer 2027 Internships](https://github.com/SimplifyJobs/Summer2027-Internships) | 1,854 open roles (SWE 617, Data Science/AI/ML 675, Hardware 315, PM 149, Quant 98). Simplify scrapes career pages every hour. Closed roles move to a separate inactive file | Star and watch the repo. Check it every morning. Read the legend first: passport-control symbol = no sponsorship, US flag = US citizenship required, lock = closed, fire = FAANG+, graduation cap = advanced degree required |
| [Simplify Off-Season list](https://github.com/SimplifyJobs/Summer2027-Internships/blob/dev/README-Off-Season.md) | 1,329 Fall 2026, Winter 2027 and Spring 2027 roles (US, Canada, remote) | Use if your school allows co-op or a semester off. Less competition than summer |
| [SWEList](https://swelist.com/) | Email alerts for new rows in the Simplify lists, made by a community member | Turn on daily alerts so you see new roles the day they post |
| [speedyapply 2027 SWE College Jobs](https://github.com/speedyapply/2027-SWE-College-Jobs) | 881 US and 618 international internships, with a salary column | Outside the US: open the international internships file. Check weekly |
| [speedyapply 2027 AI College Jobs](https://github.com/speedyapply/2027-AI-College-Jobs) | AI and ML internships and new grad roles | Second source if you target AI/ML roles, which now outnumber SWE roles in the Simplify list |
| [zapplyjobs Internships 2027](https://github.com/zapplyjobs/Internships-2027) | Another daily list | Cross-check once a week for roles Simplify missed |
| [NUFT 2027 Quant Internships](https://github.com/northwesternfintech/2027QuantInternships) | Quant intern list by Northwestern FinTech. Last update Jul 30, 2026 | Use it as a company list, then check each firm's own careers page |
| [vanshb03 Summer 2027 Internships](https://github.com/vanshb03/Summer2027-Internships) | Community list. No commits from Aug 23 to Oct 4, 2026 | Cross-check only. Do not rely on it |
| [Intern List](https://www.intern-list.com/) | Aggregated US and Canada internships by field, run by Jobright | Use for data and non-SWE roles. Ignore the openings counter on the page. It did not look live when checked on Oct 4, 2026 |
| [LinkedIn saved search](https://www.linkedin.com/jobs/search/?keywords=software%20engineer%20intern%202027) | 6,000+ "software engineer intern 2027" results in the US on Oct 4 | Save the search, turn on daily alerts, sort by most recent |
| [Handshake](https://joinhandshake.com/) | School-linked jobs, internships and employer events | Finish your profile in the first week of the semester. Jugal: applicant pools are a fraction of LinkedIn's, and many OPT-friendly early-career roles show up there first ([tool stack post](https://jugaldb.substack.com/p/the-job-search-tool-stack-id-actually)) |
| [Google Careers intern search](https://www.google.com/about/careers/applications/jobs/results/?q=Software%20Engineering%20Intern&employment_type=INTERN) | Every live Google intern posting worldwide | Create a job alert. Google windows can be 4 days long |
| Company student pages | Each company's own early-career page | Open the [company guide](../companies/index.md) for each target. Join each company's talent community or job alert |

More sources (job boards, ghost jobs, freshness) are on [where to find jobs](../jobs/where-to-find-jobs.md).

> **Tip:** Watching 10 to 20 specific companies? Many publish their open roles as JSON. Greenhouse boards: `https://boards-api.greenhouse.io/v1/boards/<company>/jobs`. Ashby boards: `https://api.ashbyhq.com/posting-api/job-board/<company>`. Jugal's [n8n workflows](../outreach/n8n-automation.md) can check feeds like these on a schedule.

## Set up once (one evening)

1. Make one folder with: your resume as `Firstname-Lastname-Resume.pdf`, an English transcript PDF (Google asks interns for one), links to GitHub and LinkedIn, and a notes file.
2. Finish a one-page resume. For interns, put Education first with your expected graduation month and year (NVIDIA and Google EMEA postings ask for it on the resume). Template: [Jake's Resume on Overleaf](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs). Rules: [resume](../resume/index.md), [templates](../resume/templates.md).
3. Copy the tracker columns from the template at the bottom of this page into a Google Sheet.
4. Build a target list of 40 to 60 companies in three tiers: about 15 reach (FAANG+, quant), 25 core (mid-size tech, banks' tech arms), 10 to 20 likely (startups, non-tech companies with tech teams). Strategy: [application strategy](../jobs/application-strategy.md).
5. Turn on alerts: SWEList, the LinkedIn saved search, Google Careers, Handshake.
6. If you are on a visa, apply the filter in [international students](#international-students-filter-before-you-apply) before anything else.
7. For your top 10 companies, find 2 people each (alumni first) using LinkedIn's alumni search. Put their names in the tracker. Method: [finding people](../outreach/finding-people.md).

## The daily 30-minute routine (August to November)

| Minutes | Do this |
|---|---|
| 0 to 5 | Open the Simplify list and your SWEList email. Note every new role that fits you |
| 5 to 20 | Apply to up to 5 new roles. Tailor the skills line and top 3 bullets to each posting's exact words |
| 20 to 25 | Log each application in the tracker with today's date and the posting's open date |
| 25 to 30 | Send one referral ask or one follow-up for a top-10 company |

Weekly additions:

- [ ] Monday: check 5 target companies' career pages directly. Lists miss roles.
- [ ] First week of every month from August to February: check Microsoft's SWE intern postings (they open in the first week of each month).
- [ ] Friday: review the tracker. Any OA invite older than 3 days gets done this weekend.
- [ ] Sunday: run the full tailoring prompts for the top 3 roles of the coming week.

Jugal's rule from the [494 post](https://jugaldb.substack.com/p/494-summer-2027-internships-are-already): in a rolling system, your own submission dates are the only feedback loop you have. Log every one.

## Quality or volume

Both, in this order.

1. Tailor fully for your top 20 roles. Use Jugal's Claude prompt sequence from [I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume): match score, missing keywords, 10-second recruiter test, XYZ rewrite, ATS check, hiring manager check. Steps on [tailoring](../resume/tailoring.md).
2. For everything else, tailor the skills line and the top 3 bullets only, then apply the same day.
3. Do not add a skill you cannot defend. Jugal: if the role asks for Kafka and you have never used Kafka, do not add Kafka.
4. Fix your resume before you speed up. Jugal's caveat in the 494 post: a resume with no projects on it will not be saved by good timing.

## Company rules that change your plan

| Company | Rule | Source |
|---|---|---|
| Google | Up to 3 applications in a rolling 30-day window. Interns and new grads upload a transcript. If not selected, Google typically asks you to wait about a year before reapplying for the same type of role. Spend your 3 slots on best-fit roles | [Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/) |
| Microsoft | SWE intern postings take applications in the first week of each month, August to February (the CoreAI posting is rolling, September to April). Microsoft will not expedite review for a competing offer deadline | [Microsoft university internship FAQ](https://careers.microsoft.com/v2/global/en/universityinternship) |
| Microsoft | Get the referral in before you apply. Simplify reports the system cannot attach a referral after you apply as a general applicant | [Simplify 2027 prep roadmap](https://simplify.jobs/blog/swe-interview-prep-roadmap-2027) |
| Amazon | One application is considered for all US intern locations. Basic qualification includes experience with AI-assisted development tools. You can add a Winter or Fall 2027 preference | [Amazon SDE intern posting](https://www.amazon.jobs/en/jobs/10552937/software-development-engineer-intern-summer-2027-usa) |
| NVIDIA | One umbrella SWE intern requisition, rolling. Recruiters match you to teams. Put your graduation month and year on the resume. NVIDIA says it uses AI tools in recruiting | [NVIDIA 2027 SWE intern posting](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| Waymo | Postings ask you to apply to each role individually and only to your top 3 | [Waymo](../companies/waymo.md) |
| Palantir | Regular Summer 2027 US internships require graduating in 2028 and must be your final internship before graduation. Year at Palantir is separate and open to all years | [Palantir](../companies/palantir.md) |
| TikTok | Two application periods a year, at most two positions | [TikTok](../companies/tiktok.md) |
| Airbnb | Short fixed windows. For Summer 2026 they were Dec 8 to 17, 2025 and Jan 12 to 21, 2026 | [Airbnb](../companies/airbnb.md) |

## Referrals for interns

A referral mostly buys you one thing: a human actually reading your resume. You still have to earn the interview (Jugal, [7 videos on networking](https://jugaldb.substack.com/p/7-videos-on-networking-your-way-to)).

1. Apply first (except Microsoft, where the referral should come first).
2. Within 48 hours, find 2 engineers at the company. Start with alumni from your school.
3. Send a 2 to 3 line connection note (template A).
4. If they accept, ask for a 15-minute chat, or if the role is closing fast, send the referral ask (template B) with the job ID.
5. Make the referral take them 60 seconds: job title, job ID, resume, and a 3-line summary they can paste.
6. Follow up once after 5 to 7 business days. Then stop.

How referral systems work at each company, and more templates: [referrals](../outreach/referrals.md), [templates](../outreach/templates.md), [cold email](../outreach/cold-email.md), [follow-up and tracking](../outreach/follow-up-and-tracking.md).

```text
A. LinkedIn connection note (from Jugal's networking post; keep it to 2 or 3 lines)

Hi [Name], I'm a [year] [major] student at [School] targeting [role] internships. Your [post on X / move from A to B at Company] is exactly the path I'm trying to take. Would love to connect.
```

```text
B. Referral ask to an engineer (intern version)

Subject: [Your school] student applying to the [Company] Summer 2027 SWE internship

Hi [Name],

I'm a [year] [major] student at [School]. I saw your work on [specific project or post] and [one sentence on why it caught your attention].

I just applied to [Role, Job ID] ([link]). Recently I [one project with one number, e.g. built X used by Y people / cut Z by N%].

Would you be open to referring me, or to a 15-minute chat about your team? My resume is attached and here is a 3-line summary you can paste into the referral form:
[Line 1: who you are and graduation date]
[Line 2: strongest project or internship with a number]
[Line 3: skills that match the posting]

Thanks for your time,
[Name] | [LinkedIn] | [GitHub]
```

```text
C. Cold message for an internship (adapted from Jugal's "How I Landed My Internship" post; follow up in 7 to 10 days)

Subject: Internship opportunity at [Company]

Hello [Name],

Hope you are doing well. I'm a [skills and experience in 1 to 2 lines]. I feel I would be a strong fit at [Company], which focuses on [what the team or company works on]. Please let me know if you'd be open to giving me an opportunity to interview or to providing a referral. I appreciate your support.

Link to the role: [link]
Resume attached

Thank you for your time,
[Name]
```

## Career fairs and events

Jugal's first internship came from an event. In his second year he signed up for a virtual career fair, sent the speaker a thank-you message on LinkedIn afterwards, got a reply, then a call, then an introduction, and three months later had his first internship ([The One Skill That Can Unlock Every Opportunity](https://jugaldb.substack.com/p/the-one-skill-that-can-unlock-every)).

1. Before the fair, list the 5 companies you will visit and one product or team at each.
2. Practice the pitch below out loud 10 times. Structure from Jugal's [elevator pitch post](https://jugaldb.substack.com/p/craft-the-elevator-pitch-that-gets).
3. Ask each recruiter: "Are you hiring Summer 2027 interns for that team, and who is the best person to follow up with?"
4. Within 24 hours, send each person a thank-you note that names one thing they said.
5. Log every contact in your tracker.

More on [career fairs](../outreach/career-fairs.md).

```text
30-second pitch

Hi, I'm [Name], a [year] [major] student at [School], focused on [area].
Recently I [one project or result with a number].
I noticed your team is working on [specific product or problem], and I'd love to [contribute X / learn about Y].
Are you hiring Summer 2027 interns for that team, and who is the best person to follow up with?
```

```text
Thank-you note (send within 24 hours)

Hi [Name], thank you for speaking at [event] yesterday. Your point about [specific thing] changed how I'm approaching [topic]. I'm applying to [Company]'s Summer 2027 [role] internship and would love to stay in touch.
```

## Zero experience: build proof in 6 weeks

No internship yet is normal. Recruiters need one thing: evidence you can build and finish. Jugal's own first-internship tactics were small: he cloned a startup's landing page and sent it with his application, made one open source pull request that got noticed fast, and documented everything on GitHub with a short portfolio page ([How I Landed My Internship](https://jugaldb.substack.com/p/how-i-landed-my-internship-before)).

| Week | Do this | Proof you end with |
|---|---|---|
| 1 | Pick one problem you or your friends actually have. Write a one-paragraph spec | A README with the problem and the plan |
| 2 to 3 | Build the smallest version that works end to end. Deploy it on a free tier | A live link |
| 3 | Find a "good first issue" in a tool you already use on [Good First Issue](https://goodfirstissue.dev/) or [Up For Grabs](https://up-for-grabs.net/). Read the [GitHub first contribution guide](https://github.com/readme/guides/first-oss-contribution) first | An open pull request |
| 4 | Get 5 to 10 real people to use your project. Fix what they hit | One number: users, latency, accuracy or time saved |
| 5 | Enter one hackathon from the [MLH 2027 season](https://www.mlh.com/seasons/2027/events) or [Devpost](https://devpost.com/hackathons). Finish a demo | A demo video and a team project |
| 6 | Write 3 resume bullets: what you built, how, and the number. Use [writing bullets](../resume/writing-bullets.md) | A resume with a Projects section |

What to build, from Jugal's [FAANG AI internship prep post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer):

- [ ] A retrieval-augmented (RAG) system where you can explain how you measured retrieval quality.
- [ ] Something with real users, however few.
- [ ] A meaningful contribution to an open source library that practitioners use.

Resume layout with no experience: Education, Projects, Skills, then Activities (hackathons, clubs, teaching). Courses and certificates go in their own clearly labeled section, never under Experience. Jugal's [Borrowed Logo post](https://jugaldb.substack.com/p/the-borrowed-logo-strategy-how-to) lists free certificates from big-name providers and the honesty rule that goes with them.

> **Watch out:** Never let an AI tool invent a metric. If someone asks about the number in an interview, you need to explain it.

## International students: filter before you apply

Jugal's rule from the [494 post](https://jugaldb.substack.com/p/494-summer-2027-internships-are-already): thirty seconds of Ctrl+F saves you three weeks.

1. On the Simplify lists, skip rows with the passport-control symbol (no sponsorship) and the US flag (citizenship required).
2. On every posting, Ctrl+F for "export control", "US person" and "sponsorship". Also search "citizen", "ITAR" and "clearance".
3. Expect defense and aerospace (SpaceX, Anduril, RTX, Northrop Grumman, most Palantir defense roles) to require US citizenship or permanent residency. SpaceX's ITAR text also allows refugees, asylees, and people eligible for Department of State export authorization.
4. For any company you are unsure about, check its H-1B history in the USCIS Data Hub. Steps in Jugal's [How to Check if a Company Sponsors H-1B Visas](https://jugaldb.substack.com/p/how-to-check-if-a-company-sponsors).
5. Answer the work authorization questions truthfully. Scripts are on [international students](../jobs/international-students.md).
6. Confirm CPT or OPT with your DSO before you accept. Steps on [internships overview](index.md#international-students-check-work-authorization-first).
7. Jugal's [3-month internship search roadmap for international students](https://github.com/jugaldb/resources_abroad/blob/master/internship-roadmap.md) on GitHub lists week-by-week networking and content actions. Use it alongside this page.

## India, UK and Europe sources

### India

| Source | What it is | How to use it |
|---|---|---|
| [Internshala (CS internships)](https://internshala.com/internships/computer-science-internship/) | India internship board with 511+ computer science listings on Oct 4, 2026 | Use for startup and early internships. Ignore paid "placement" courses |
| [Unstop](https://unstop.com/) | Hackathons and hiring challenges | Register for Amazon ML Challenge (September) and HackOn With Amazon (May). Details on [programs](programs.md#hiring-challenges-with-interview-offers-india) |
| [Cutshort](https://cutshort.io/) | AI-matched India tech jobs where companies invite you | Upload your resume and answer invites within a day |
| [Naukri](https://www.naukri.com/) | India's largest job board | Keep your profile current. Recruiters search it |
| [Microsoft India SWE intern](https://apply.careers.microsoft.com/careers/job/1970393556911730) | Posted Sep 17 to 18, 2026, open a minimum of 5 days. Needs at least one term remaining after the internship | Watch Microsoft India postings each month |
| Google India | On Oct 4, 2026 only PhD intern roles were open in India. The 2026 ASDI program was for second-year BE/BTech students | Set a Google Careers alert with location India |
| [speedyapply international internships](https://github.com/speedyapply/2027-SWE-College-Jobs) | Includes India roles at global companies | Check weekly |

India resume format: slightly longer is accepted for campus placements, and skills and projects carry the most weight ([4 Resume Templates Based on Your Country](https://jugaldb.substack.com/p/4-resume-templates-based-on-your)).

### UK

| Source | What it is | How to use it |
|---|---|---|
| [Higherin](https://higherin.com/) | UK internships, placements, insight and vacation schemes (formerly RateMyPlacement) | Search Internships plus Insights and Vacation Schemes |
| [Bright Network](https://www.brightnetwork.co.uk/) | Graduate and intern board with an application calendar, 1,500,000+ members | Register and attend its virtual experiences |
| [Gradcracker](https://www.gradcracker.com/) | STEM graduate jobs, placements and degree apprenticeships | Filter for software and computing |
| [The Trackr](https://the-trackr.com/) | Tracks open and close dates for UK internships and grad roles | Use it to see which programs are open this week |
| [Prospects](https://www.prospects.ac.uk/) | UK graduate jobs and advice | Browse IT and tech schemes |
| [TARGETjobs](https://targetjobs.co.uk/) | UK graduate schemes and internships | Browse the IT sector pages |
| [Google London SWE/SRE intern](https://www.google.com/about/careers/applications/jobs/results/100028133205254854) | 13 to 17 weeks. For students enrolled in EMEA. No visa sponsorship | Apply before Oct 23, 2026 |

UK format: a CV, two pages is normal, a short summary on top, British spelling ([Jugal's country templates](https://jugaldb.substack.com/p/4-resume-templates-based-on-your)).

### Europe

| Source | What it is | How to use it |
|---|---|---|
| Google EMEA SWE/SRE intern reqs | [Zurich, Munich, Paris, Dublin, Stockholm](https://www.google.com/about/careers/applications/jobs/results/142747733357142726), [Warsaw, Krakow](https://www.google.com/about/careers/applications/jobs/results/121543376737575622), [Bucharest](https://www.google.com/about/careers/applications/jobs/results/83199557986329286). EMEA enrollment required, no sponsorship | Apply before Oct 23, 2026. Each one counts toward Google's 3-per-30-days limit |
| [speedyapply international internships](https://github.com/speedyapply/2027-SWE-College-Jobs) | Big tech and startup internships outside the US | Check weekly |
| [EuroTechJobs](https://www.eurotechjobs.com/) | Tech jobs across Europe for international candidates | Search by country |
| [Arbeitnow](https://www.arbeitnow.com/) | Germany jobs with English-speaking and visa filters | Turn on both filters |
| [Europass](https://europass.europa.eu/en) | Official EU CV builder | Use for formal EU applications. State your language levels |

### Canada

- [Amazon SDE Intern, Summer 2027 (Canada)](https://www.amazon.jobs/en/jobs/10553947/software-development-engineer-intern-summer-2027-can): posted Sep 18, 2026.
- [Mitacs Globalink](https://www.mitacs.ca/our-programs/globalink-research-internship-students/): funded research internships in Canada for international undergrads. Details on [programs](programs.md#research-internships).

## Spot internship scams

Students and visa holders are frequent targets.

- [ ] Never pay for an internship, training, equipment or "placement". The FTC says if someone asks you to pay to get a job, that's a scam ([FTC job scams](https://consumer.ftc.gov/articles/job-scams)).
- [ ] Find the posting on the company's own careers site before you share documents.
- [ ] Real offers come after real interviews.
- [ ] Google interview requests only come from @google.com or @xwf.google.com addresses ([Google scam help](https://support.google.com/faqs/answer/10122524)).
- [ ] Never deposit a check from an "employer" and send part of it back.

## Templates

```text
Application tracker (one row per application)

Company | Role | Link | Job ID | Open date | Deadline | Deadline type (Fixed / Priority / Rolling / Unstated) | Date applied | Resume version | Status (Applied / OA / Screen / Final / Offer / Reject) | Contact | Referral asked (Y/N, date) | Follow-up date | Notes (sponsorship, citizenship, location)
```

```text
"Why this company" note (write once per company, reuse in forms and chats)

[Company] builds [product] for [users].
I want to work on [team or problem] because [one reason tied to your project or course].
I can contribute [skill] from [project or internship with a number].
```

```text
Follow-up after a referral

Hi [Name], thank you again for referring me for [Role, Job ID]. I received [an OA / a recruiter email] on [date]. I'll keep you posted, and I'm happy to return the favor anytime.
```

Next: [Intern interviews by company](intern-interviews.md)
