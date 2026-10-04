# How applicant tracking systems work

For anyone who has heard "the ATS will reject you". You will know what the software does, what it does not do, and how to test your PDF in 10 minutes.

## What an ATS is

An applicant tracking system (ATS) is a database plus a workflow tool. Recruiters open applications inside it, move candidates between stages, and search it. Parsing turns your file into fields that recruiters can filter and search ([The Tech Resume Inside Out: ATS myths busted](https://thetechresume.com/samples/ats-myths-busted)).

Three things can remove you before a person reads your resume:

1. **Knockout questions on the form.** Work authorization, location, graduation date, degree. Oracle's Taleo docs say a disqualification question means a candidate "can be instantly exited from the application process" ([Oracle Taleo prescreening](https://docs.oracle.com/en/cloud/saas/taleo-enterprise/20b/otrec/candidate-prescreening.html)).
2. **Recruiter searches and AI grades.** Recruiters search full resume text ([Greenhouse](https://support.greenhouse.io/hc/en-us/articles/115004600186-Search-resumes-for-keywords)). AI tools grade fit against the job's qualifications ([Workday HiredScore](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/reference--candidate-grades.html)). On a 2026 call with Jugal, one recruiter said her req had 1,400 applicants and she "saw maybe 40 resumes" ([I talked to 7 FAANG recruiters](https://jugaldb.substack.com/p/i-talked-to-7-faang-recruiters-none)). One account, not a rule, but it shows why ranking matters.
3. **Volume and timing.** Roles fill while you wait. In a 2025 vendor survey of 25 US recruiters, 52% said applying early improves your chances, and one admitted to reviewing "first-come, first-served" ([Enhancv](https://enhancv.com/blog/does-ats-reject-resumes/)). Apply in the first week a role opens ([internship timing](../internships/index.md)).

Fonts and design rarely reject you on their own. They can scramble parsing, and a scrambled profile does badly in search and in front of a human.

## The pipeline

| Step | What happens | Your move |
|---|---|---|
| 1. Apply | You upload a file and answer form questions | Answer truthfully. Match every date to your resume |
| 2. Knockout | An answer that fails a required criterion can exit you instantly (Taleo) | Read each question slowly. Never guess on work authorization |
| 3. Parse | Text becomes fields: name, contact, jobs, dates, education | One column, standard headings, a text PDF |
| 4. Autofill | Parsed fields pre-fill the form. Workday does not auto-fill Skills | Fix every field by hand before you submit |
| 5. Rank or grade | AI match where the employer has it: Workday HiredScore A to D (not on campus or graduate requisitions), Greenhouse Talent Matching, iCIMS Role Fit | Make each basic qualification visible in the job's words |
| 6. Search | Recruiters run keyword searches across resumes | Use exact terms for tools you used |
| 7. Human review | A recruiter skims. Median 31 seconds in a 2024 study ([interviewing.io](https://interviewing.io/blog/are-recruiters-better-than-a-coin-flip-at-judging-resumes)) | Strongest evidence in the top third |

## What the big systems do

Look at the apply URL to see which system a company uses. Examples checked Oct 2026. To search these domains for fresh postings, use the Google `site:` query in [where to find jobs](../jobs/where-to-find-jobs.md#google-search-across-ats-sites), built on Jugal's [Stop Applying to Ghost Jobs](https://jugaldb.substack.com/p/stop-applying-to-ghost-jobs).

| System | Apply URL contains (examples) | What it does with your resume | What to do |
|---|---|---|---|
| Workday | `myworkdayjobs.com` (NVIDIA, Salesforce, Adobe) | Parses your file to fill candidate fields, but not Languages or Skills. "Resume parsing results can vary based on resume format and order of words." Recommends resumes without images ([Workday doc](https://doc.workday.com/admin-guide/en-us/human-capital-management/recruiting/candidates/set-up-prospects-and-candidates/hdc1552497830785.html)) | After autofill, check every field and type Skills in by hand |
| Workday HiredScore (AI grading, where the employer uses it) | Same | Grades A (all basic and most preferred qualifications), B (all basic), C (most but not all basic), D (does not meet most basic) ([grades](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/reference--candidate-grades.html)). Recruiters sort and filter by grade. No grade for campus or graduate requisitions, a missing resume, or an unsupported file format ([Spotlight](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/concept--spotlight.html)) | State each basic qualification you meet in the job's words. Always attach a resume, in the format the posting asks for |
| Greenhouse | `job-boards.greenhouse.io` or `boards.greenhouse.io` (Anthropic, Stripe, Databricks) | Recruiters search resumes with a Full Text Search toggle ([Greenhouse help](https://support.greenhouse.io/hc/en-us/articles/115004600186-Search-resumes-for-keywords)). Talent Matching sorts candidates into Strong, Good, Partial, or Limited match, or Needs manual review. It "does not automatically advance or reject candidates" ([Talent Matching](https://support.greenhouse.io/hc/en-us/articles/41396009937307-Talent-Matching)) | Use the job's exact terms for skills you have |
| Lever | `jobs.lever.co` (Palantir, Spotify) | Parses Word, PDF, RTF, WordPerfect, HTML, and OpenOffice files. Cannot parse images such as JPG or PNG. Lever's test: if you cannot highlight the text, it is likely not parseable ([Lever help](https://help.lever.co/s/article/Understanding-Resume-Parsing)) | Never upload a scanned or image-only PDF |
| iCIMS | `icims.com` | "Candidate Ranking using Role Fit" matches resume skills and experience to the job. iCIMS treats it as an automated employment decision tool under New York City's Local Law 144, with bias audits ([iCIMS](https://www.icims.com/blog/how-icims-supports-the-nyc-automated-employment-decision-tools-law/)) | Mirror the requirements you meet |
| Oracle Taleo | `taleo.net` | Prescreening criteria are Required or Asset. Candidates are grouped as ACE (all Required plus some Asset), Minimally qualified (all Required, no Asset), or Other ([Oracle docs](https://docs.oracle.com/en/cloud/saas/taleo-enterprise/20b/otrec/candidate-prescreening.html)) | Treat the form questions as the real filter |
| Ashby | `jobs.ashbyhq.com` (OpenAI, Notion, Snowflake) | No public parsing doc found | Same rules: text PDF, exact terms |
| Company portals | `google.com/about/careers`, `amazon.jobs`, `metacareers.com`, `careers.microsoft.com` | You cannot see the system behind them | Same rules. Google: make it obvious you meet the minimum qualifications ([how we hire](https://www.google.com/about/careers/applications/how-we-hire/)) |

## Truths vs myths

| Claim | Verdict | What is actually true | Source |
|---|---|---|---|
| "75% of resumes are rejected by ATS before a human sees them." | Myth | The figure traces to a 2012 sales claim by Preptel, a resume-optimization vendor that closed in 2013 and never published a method | [The Interview Guys](https://blog.theinterviewguys.com/ats-resume-rejection-myth/), [ResumeVera](https://resumevera.com/guides/ats-rejection-myth-origin) |
| "The ATS auto-rejects you for fonts or design." | Mostly myth | Recruiters review inside the ATS. In a survey of 25 US recruiters, 92% said their ATS does not auto-reject on formatting, content, or design (small sample, vendor source) | [The Tech Resume Inside Out](https://thetechresume.com/samples/ats-myths-busted), [Enhancv](https://enhancv.com/blog/does-ats-reject-resumes/) |
| "Nothing filters you automatically." | Myth | Knockout questions do. In the same survey, all 25 recruiters used them. In a 2021 Harvard Business School and Accenture study, 88% of employers agreed qualified high-skills candidates get vetted out for not matching the exact criteria in the job description | [Oracle Taleo](https://docs.oracle.com/en/cloud/saas/taleo-enterprise/20b/otrec/candidate-prescreening.html), [HBS Hidden Workers](https://www.hbs.edu/managing-the-future-of-work/research/hidden-workers-untapped-talent) |
| "AI ranks applicants now." | True, where the employer turned it on | Workday HiredScore grades A to D (not on campus or graduate requisitions). Greenhouse Talent Matching sorts by match strength. iCIMS Role Fit ranks by fit | Docs in the table above |
| "There is one ATS score, and you need 80% or more." | Myth | Each system matches against that job's own criteria. Resume Worded says to compare its scores only within the same tool | [Resume Worded](https://resumeworded.com/resume-scanner) |
| "Exact wording from the job description matters." | True | Recruiters search text, and HiredScore grades against the stated qualifications. Jugal: "If a posting says 'distributed systems' and you wrote 'large scale backend,' the software may not connect the two" | [4 Resume Templates Based on Your Country](https://jugaldb.substack.com/p/4-resume-templates-based-on-your) |
| "Repeat keywords many times to rank higher." | Unproven | The Tech Interview Handbook says some ATS weigh keyword frequency. No vendor doc we found says so, and a human reads the result. Use each term once or twice, in context | [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/) |
| "PDFs break the ATS. Send Word." | Myth for text PDFs | Lever parses PDF. The real problems are image-only PDFs and postings that ask for .docx | [Lever help](https://help.lever.co/s/article/Understanding-Resume-Parsing), [The Tech Resume Inside Out](https://thetechresume.com/samples/ats-myths-busted) |
| "Two-column templates are fine." | Risky | OpenResume's parser is "designed to parse single column resume". Workday says results vary with format and word order. Multi-column layouts are harder for humans to scan too | [OpenResume](https://www.open-resume.com/resume-parser), [The Tech Resume Inside Out](https://thetechresume.com/samples/common-mistakes) |
| "Hidden white-text keywords or AI prompts get you through." | Myth, and harmful | Parsers strip formatting, so hidden text shows up in plain view. Greenhouse estimated about 1% of resumes contain hidden text, and recruiters "almost always eliminate" those candidates. A May 2026 Duke-led study of nearly 200,000 resumes found about 1% with hidden prompt injections, and employers now scan for them | [Built In](https://builtin.com/articles/hidden-ai-prompts-in-resume), [Business Insider](https://www.businessinsider.com/resume-ai-prompt-injection-applicants-job-search-2026-9) |
| "You must build your resume in Word or Google Docs." | Myth | The Tech Interview Handbook says so, but LaTeX templates such as Jake's Resume set `\pdfgentounicode=1` to produce machine-readable text. Test the PDF instead of trusting the tool | [Jake's Resume](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) |
| "Autofill gets your details right." | False | Workday parsing varies by format and does not auto-fill Skills | [Workday doc](https://doc.workday.com/admin-guide/en-us/human-capital-management/recruiting/candidates/set-up-prospects-and-candidates/hdc1552497830785.html) |
| "Apply to every role at a company to raise your odds." | Usually false | Recruiters see every application you send in their ATS. Google caps you at three jobs every 30 days | [Tech Interview Handbook](https://www.techinterviewhandbook.org/resume/), [Google: how we hire](https://www.google.com/about/careers/applications/how-we-hire/) |

> **Watch out:** Jugal's [country templates post](https://jugaldb.substack.com/p/4-resume-templates-based-on-your) repeats the 75% figure. Use the rest of that post; skip that number.

## Formatting that parses

| Do | Why |
|---|---|
| Use one column | Parsers read top to bottom. OpenResume's parser supports single column only |
| Use standard headings: Education, Experience, Projects, Skills | Parsers map them to fields; recruiters look for them |
| Export a text PDF | Lever cannot parse images. You should be able to highlight every word |
| Use 10 to 12 pt and a common font | Tech Interview Handbook: at least 10 pt, fonts such as Arial, Calibri, Garamond. Georgia Tech: 10 to 12 pt |
| Keep margins at 0.5 to 1 inch | Tech Interview Handbook uses 0.5 inch; Georgia Tech uses 1 inch |
| Put contact details in the body | Tech Interview Handbook: no headers or footers |
| Use one date format everywhere | `Jun 2025 to Aug 2025` or `06/2025 to 08/2025`, so each date attaches to the right job |
| Show link text in full | `github.com/handle` still reads correctly if the hyperlink is stripped |
| Spell out each acronym once | "Amazon Web Services (AWS)" (Tech Interview Handbook) |

| Avoid | Use instead |
|---|---|
| Two columns or a sidebar | One column |
| Tables or text boxes for layout | Plain lines and tab stops |
| Icons for phone, email, LinkedIn | The words themselves |
| Photos, logos, charts, skill bars | Nothing |
| Creative headings such as "Things I've Built" | "Projects" |
| A certificate listed under Experience, which reads as a job you never had | A Certifications section, one line each. Jugal: "Never put 'Google' or 'Microsoft' in your Experience section unless you actually worked there" ([The "Borrowed Logo" Strategy](https://jugaldb.substack.com/p/the-borrowed-logo-strategy-how-to); format in [certifications](index.md#certifications-and-courses)) |
| A scanned PDF or an image export from a design tool | A PDF exported from LaTeX, Word, or Google Docs |
| Contact details in the page header or footer | The first lines of the page body |

## Test your PDF in 10 minutes

1. **Highlight test (30 seconds).** Open the PDF and drag across the text. If you cannot select it, the file is an image: re-export from the source.
2. **Plain-text test (2 minutes).** This is the Tech Interview Handbook's test. Select all, copy, and paste into a plain text editor (Notepad, or TextEdit after Format > Make Plain Text). Check that the order runs top to bottom, every bullet is there, no odd characters replace "fi" or "ff", each date sits next to its job, and your name and email are intact.
3. **Command-line test (1 minute).** Install [Poppler](https://poppler.freedesktop.org/) and print the text the way a parser sees it:

    ```text
    # macOS
    brew install poppler
    # Ubuntu or Debian
    sudo apt install poppler-utils

    pdftotext -layout Firstname_Lastname_Resume.pdf -
    ```

4. **Parser test (3 minutes).** Upload the PDF to the [OpenResume parser](https://www.open-resume.com/resume-parser); "File data is used locally and never leaves your browser." Check name, email, phone, school, degree, each job title, company, and dates. Every field it misses is a risk.
5. **Lint (optional, 3 minutes).** Run a free [Resume Worded scan](https://resumeworded.com/resume-scanner), or paste Jugal's "Act like an ATS" prompt with the job description into any chat model ([Step 6 of his prompt chain](tailoring.md#jugals-8-step-ai-prompt-chain), from [I Asked Claude to Make My Resume Unrejectable](https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume)). Fix the flags you agree with and ignore any score.
6. **Real form check.** The first time you apply on a Workday site, use the resume autofill and watch where each field lands. Fix every field before you submit.

| Symptom | Likely cause | Fix |
|---|---|---|
| Text comes out in the wrong order | Columns or layout tables | Switch to one column |
| Bullets or sections missing | Text boxes, header or footer content | Move everything into the page body |
| "fi" or "ff" turns into an odd symbol | Font ligatures without Unicode mapping | In LaTeX keep `\input{glyphtounicode}` and `\pdfgentounicode=1` in the preamble (Jake's template has both) |
| Dates detached from jobs | Dates placed in a separate column or table cell | Put dates on the same line as the job title |
| Name or email not detected | Name in a header, an image, or decorative font | Plain text at the top of the page |
| Nothing copies at all | Scanned or image-only PDF | Re-export from the source document |

## The application form is the real filter

1. Answer every question truthfully and completely. Automatic rejection lives in these answers, not in your fonts (Taleo prescreening docs).
2. Make the form match the resume: graduation date, degree, school, employers, dates, location.
3. Never misstate work authorization or sponsorship needs; a wrong "No" to sponsorship can cost you the offer later. Recruiters using HiredScore can filter applicants by visa or sponsorship needs ([Workday doc](https://doc.workday.com/hiredscore/en-us/workday-hiredscore/recruiter-productivity-/concept--spotlight-filters.html)). Details: [international students](../jobs/international-students.md).
4. Write the same graduation date in both places, because intern and new grad roles filter on graduation windows. Example: "Expected May 2027" on the resume, May 2027 in the form.
5. Answer location and relocation questions honestly.
6. Upload the tailored version, not your base resume. LinkedIn Easy Apply reuses stored resumes, so check which file it picked.

## File type, name, and size

| Item | Rule | Source |
|---|---|---|
| Format | PDF, unless the posting asks for .docx | Georgia Tech, Tech Interview Handbook. [Prospects](https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/how-to-write-a-cv): not every ATS supports every format, so follow the advert |
| File name | `Firstname_Lastname_Resume.pdf`. Never `resume_final_v7.pdf` | Georgia Tech asks for your name in the file name |
| Size | Under 2 MB | LinkedIn recommends under 2 MB and accepts Word or PDF ([LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a510363)) |
| Word files | Only when asked. Word files can lose formatting across versions and operating systems | [The Tech Resume Inside Out](https://thetechresume.com/samples/ats-myths-busted) |
| Protection | No password, no edit lock | A parser cannot read a file it cannot open |

## AI screening in 2026

1. Expect a match grade. Workday HiredScore, Greenhouse Talent Matching, and iCIMS Role Fit all compare your resume with the job's stated qualifications (docs linked above).
2. Expect humans to decide. Greenhouse calls Talent Matching "assistive AI, not automated-decision-making."
3. Expect scrutiny. In Mobley v. Workday, a federal court in May 2025 let a nationwide collective action proceed, alleging Workday's AI screening disadvantaged applicants over 40; there was no ruling on the merits as of Oct 2026 ([Holland & Knight](https://www.hklaw.com/en/insights/publications/2025/05/federal-court-allows-collective-action-lawsuit-over-alleged)).
4. Respond with substance, not tricks. List each basic qualification you meet in the job's words, keep structured fields correct, and tailor with the [12-step process](tailoring.md).

Next: [Resume templates and country formats](templates.md)
