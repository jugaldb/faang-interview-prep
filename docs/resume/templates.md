# Resume templates and country formats

For anyone choosing a template or applying in more than one country. You will have a working template open in under 30 minutes and know what changes for the US, UK, India, and Europe.

## Pick a template in 2 minutes

| If you | Use | Cost |
|---|---|---|
| Can spend 30 minutes on LaTeX (the default for US tech) | [Jake's Resume on Overleaf](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) | Free |
| Want Jake's layout without LaTeX | [Jake's template on resume.lol](https://www.resume.lol/templates/jakes-template) | Free |
| Prefer Word or Google Docs | [Harvard bullet-point template](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) | Free |
| Want a free web builder | [Reactive Resume](https://rxresu.me/) with a single-column template | Free |
| Want your resume in Git as a text file | [RenderCV](https://github.com/rendercv/rendercv) command-line tool | Free (hosted app is paid) |
| Apply in India | [Resume Template by Anubhav](https://www.overleaf.com/latex/templates/resume-template-by-anubhav/dhmkrwtksdgy) (A4) | Free |
| Apply in the UK | Jake's layout on A4 plus a short profile, or [resume.io UK CV templates](https://resume.io/uk/cv-templates) | Free, or paid after a trial |
| Apply to an EU institution or EU-funded program | [Europass](https://europass.europa.eu/en) | Free |

Jugal's default is Jake's Resume: "the one I and half of engineering Twitter use", and "it's free, it parses cleanly, and it looks sharp" ([The job-search tool stack I'd actually use in 2026](https://jugaldb.substack.com/p/the-job-search-tool-stack-id-actually)). It is the template in the system he describes in [How I Got Interviews at Amazon, Meta & Startups](https://jugaldb.substack.com/p/how-i-got-interviews-at-amazon-meta), which opens: "In the last 30 days, I landed interviews with Amazon, Meta, Ramp, and The Trade Desk." His reason for both Jake's versions: "Clarity over creativity" and "Structure over decoration" ([The Resume Template I Recommend](https://jugaldb.substack.com/p/the-resume-template-i-recommend-and)).

Watch his walkthrough of the resume he used: [This Resume Got Me Into Amazon](https://www.youtube.com/watch?v=Z9Gcv9PByAI).

## Template catalog

| Template | Cost and license | Layout | Best for | How to use it | Watch out |
|---|---|---|---|---|---|
| [Jake's Resume](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) | Free, MIT | LaTeX, one column, US Letter | US students and new grads | Open as Template on Overleaf, edit, recompile, download | The source repo [jakegut/resume](https://github.com/jakegut/resume) is archived (last push Aug 2024); the Overleaf template still works. The sample name inside is "Jake Ryan"; the author is Jake Gutierrez |
| [Jake's template on resume.lol](https://www.resume.lol/templates/jakes-template) | Free (donations) | Web editor | Anyone avoiding LaTeX | Fill it in, export, run the [parse test](ats.md#test-your-pdf-in-10-minutes) | Jugal labels it "Easier to use (less ATS-friendly)" ([Notion resume guide](https://jugaldb.notion.site/Resume-Template-How-Do-I-improve-my-resume-1a0af2117b83809ea355d5d724ea5109)) |
| [Harvard bullet-point template](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) | Free | Word, accessible Word, Google Docs | Word or Docs users | Click "Google Docs version" to get your own copy | Delete sections you do not use. One of the three templates in Jugal's [The New Grad and Internship prep for 2026](https://jugaldb.substack.com/p/the-new-grad-and-internship-prep) |
| [FAANGPath Simple Template](https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc) | Free, CC BY 4.0 | LaTeX, one column | Students and new grads | Open as Template | Delete the Objective block for US applications |
| [Resume Template by Anubhav](https://www.overleaf.com/latex/templates/resume-template-by-anubhav/dhmkrwtksdgy) | Free, CC BY 4.0 | LaTeX, one column, A4 | India | Sections for education, skills, experience, projects, publications, awards | Keep it tight; cut empty sections |
| [sb2nov/resume](https://github.com/sb2nov/resume) | Free, MIT | LaTeX | LaTeX users | The template Jake's Resume is based on | Build locally or upload to Overleaf |
| [RenderCV](https://github.com/rendercv/rendercv) | Free CLI, MIT. Hosted app at [rendercv.com](https://rendercv.com/) is paid ($5 to $15 a month as of Oct 2026) | YAML to PDF. Themes include Classic, EngineeringResumes, Sb2nov | Keeping your resume in Git | `pip install "rendercv[full]"` (Python 3.12 or newer), pick a theme, render | Run the parse test on the output |
| [Reactive Resume](https://rxresu.me/) | Free, open source, no paid tier | Web builder, 17 templates, PDF and Word export | No-LaTeX users | Pick a single-column template, export PDF | Check the layout is one column before you fill it |
| [OpenResume builder](https://www.open-resume.com/resume-builder) | Free, open source | Web builder | A quick start | Build, then check it in [its parser](https://www.open-resume.com/resume-parser) | |
| [Awesome-CV](https://github.com/posquit0/Awesome-CV) | Free (LPPL) | LaTeX with color headings and icons | Design-heavy CVs | Use only if the parse test passes | Icons and styled headings may not parse cleanly |
| [Deedy Resume](https://github.com/deedy/Deedy-Resume) | Free | Two columns | Nothing for ATS | Listed only as a layout to avoid | Two columns break reading order |
| Canva and graphic templates | Varies | Graphic | Nothing for tech applications | Avoid | Jugal: "Fancy Canva resumes look great and confuse half of all ATS systems" (his estimate, not a measured number; [tool stack post](https://jugaldb.substack.com/p/the-job-search-tool-stack-id-actually)). Workday recommends resumes without images |
| [resume.io UK CV templates](https://resume.io/uk/cv-templates) | Paid after a trial | Web builder | UK applicants who want a ready CV | Jugal's UK picks: "Traditional" and "Prime ATS" | A free LaTeX or Docs template does the same job |
| [Europass](https://europass.europa.eu/en) | Free, run by the EU | Structured builder, 31 languages | EU institutions and EU-funded programs | Fill the fields, state language levels | Runs long; see [country formats](#country-formats) |

## Set up Jake's Resume on Overleaf

Time: 30 minutes for setup, one evening for content.

1. Create a free account at [Overleaf](https://www.overleaf.com/).
2. Open [Jake's Resume](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) and click "Open as Template".
3. Rename the project to `Firstname Lastname Resume (base)`.
4. Replace the header: name, phone, email, LinkedIn, GitHub. Rules: [the header](index.md#the-header).
5. Edit each section with the template's commands (snippet below). Keep the order from [section order by track](index.md#section-order-by-track).
6. Escape special characters: write `\&`, `\%`, `\$`, `\#`, `\_`. The template's own sample writes "Texas A\&M".
7. Keep `\input{glyphtounicode}` and `\pdfgentounicode=1` in the preamble. The template's comment says they make the PDF "machine readable/ATS parsable".
8. Click Recompile. The free plan has a 10-second compile timeout (240 seconds on paid plans), so keep images out ([Overleaf plan limits](https://docs.overleaf.com/getting-started/free-and-premium-plans/plan-limits)).
9. Download the PDF and rename it `Firstname_Lastname_Resume.pdf`.
10. Copy the project once per role type ([role-type versions](tailoring.md#build-role-type-versions-once)).
11. If LaTeX syntax blocks you, read Overleaf's [Learn LaTeX in 30 minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes). Jugal: "Yes, you're learning LaTeX. It takes 30 minutes, stop overthinking it" ([Amazon is still hiring after the biggest layoffs](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).

```text
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {[University]}{[City, ST]}
      {B.S. in Computer Science; GPA: [3.72/4.00]}{Expected [May 2027]}
  \resumeSubHeadingListEnd

\section{Experience}
  \resumeSubHeadingListStart
    \resumeSubheading
      {[Software Engineering Intern]}{[Jun 2026] -- [Aug 2026]}
      {[Company]}{[City, ST]}
      \resumeItemListStart
        \resumeItem{[Verb] [what] from [before] to [after] by [method] ([tech]).}
        \resumeItem{[Verb] [what] for [scale], [result].}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

\section{Projects}
    \resumeSubHeadingListStart
      \resumeProjectHeading
          {\textbf{[Project Name]} $|$ \emph{[Python, FastAPI, PostgreSQL]}}{[Mon Year]}
          \resumeItemListStart
            \resumeItem{[Built what, for whom, measured result].}
          \resumeItemListEnd
    \resumeSubHeadingListEnd
```

Two quick changes:

- **Font.** The preamble has commented font lines (for example `% \usepackage[default]{sourcesanspro}`). Remove the `%` from one line to switch.
- **A4 paper** for UK, EU, and India: change `\documentclass[letterpaper,11pt]{article}` to `\documentclass[a4paper,11pt]{article}`.

## Build it from your LinkedIn profile

From Jugal's [From LinkedIn to ATS Resume in 1 minute for FREE](https://jugaldb.substack.com/p/from-linkedin-to-ats-resume-in-1). Use it to get a first draft fast, then edit by hand.

1. Open your LinkedIn profile and expand every "See more".
2. Select all and copy (Cmd+A then Cmd+C, or Ctrl+A then Ctrl+C). Or use LinkedIn's Save to PDF ([LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a541963); limited to 200 downloads a month).
3. Open Claude, ChatGPT, or Gemini. Jugal recommends a model with long context (100k+ tokens).
4. Paste the prompt below, then your profile text under it.
5. In Overleaf, create a blank project, replace `main.tex` with the output, and click Recompile. Jugal: the output is "usually >90% clean".
6. Students: change the section order line (fix below).
7. Check every number and date against reality before you use it.

```text
You are a professional resume writer with LaTeX expertise.

I've pasted my entire LinkedIn profile below. Please do the following:

- Parse all relevant content (education, experience, skills, etc.).
- Use extended thinking to rewrite long bullet points to be **concise, action-oriented, and impact-driven** in an xyz format where in each point has x y and z where x is the project or the task, y is the tools and tech used and z is the impact or the metrics.
- Use a clean **LaTeX template** optimized for a one-page resume.
- Keep the formatting minimal and modern (e.g., sans serif, no borders).
- Use appropriate section ordering: Name + Contact > Summary > Experience > Education > Projects > Skills > Other.
- Return only LaTeX code, ready to copy into Overleaf.
- Assume I'm applying to software engineering / tech jobs. Adjust tone accordingly.
- Make sure it is one column format like Jake Ryan's resume template on overleaf.

Paste content below this prompt
```

Student fix (this guide's edit): replace the ordering line with:

```text
- Use appropriate section ordering: Name + Contact > Education > Experience > Projects > Skills. Do not add a summary.
```

Follow-up prompts and tweaks from the same post:

```text
Make spacing slightly more breathable between sections.
Include a 2-line personal summary under my name focused on engineering and impact.
```

- Switch fonts with `\usepackage{helvet}` or `\usepackage{sourcesanspro}`.
- Add the job title to the chat and ask it to tailor the bullets.
- Add your GitHub or portfolio link to the header.
- Use `\vspace` or the geometry package to fit one page.

> **Watch out:** The post suggests `\cvsection{}`. Jake's template does not define that command; it uses `\section{}`. And the prompt says "Jake Ryan's": that is the sample name in the template, not the author.

## Google Docs route

1. Open Harvard's [bullet-point template page](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) and click "Google Docs version" to make your own copy.
2. Keep one column. Delete sections you will not use.
3. Order sections by your track ([section order](index.md#section-order-by-track)).
4. Download with File > Download > PDF Document.
5. Run the [parse test](ats.md#test-your-pdf-in-10-minutes).

## Country formats

Jugal wrote [4 Resume Templates Based on Your Country](https://jugaldb.substack.com/p/4-resume-templates-based-on-your) after someone in India asked him whether a US resume is different. His admission in that post: "I had been through the US hiring process and cleared interviews at Google, Meta, and Amazon, but I always treated my resume as one fixed thing."

| Item | US | UK | India | Europe (EU) |
|---|---|---|---|---|
| Document name | Resume | CV | Resume or CV | CV |
| Length, students and early career | 1 page | Up to 2 A4 pages; two is normal ([Prospects](https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/how-to-write-a-cv), Jugal) | Slightly longer is accepted for freshers and campus placements (Jugal) | 1 to 2 pages for private companies; Europass runs longer |
| Paper | US Letter | A4 | A4 | A4 |
| Photo | No | No. Prospects: not unless the job is acting or modelling | Leave it out for tech applications abroad | Only where the local norm expects it (Jugal) |
| Date of birth, age, marital status | No | No. Prospects calls date of birth "irrelevant" | Leave out for international applications | Leave out unless a form asks |
| Summary at the top | No, for students | Yes, a short personal profile | Optional | Optional |
| Spelling | American | British | Pick one and stay consistent | Pick one and stay consistent |
| What recruiters weigh (Jugal) | Results and numbers near the top | Clear structure, formal tone, keyword-rich summary | Skills and projects, plus internships and certifications | Language levels; Europass fields for formal applications |
| Languages line | Optional | Optional | Optional | Yes, with levels |
| Jugal's template pick | Jake's Resume | resume.io Traditional or Prime ATS (paid). Free option: Jake's on A4 plus a profile | Anubhav's template | Europass for formal applications; a single-column UK-style CV for private startups |
| References | No | Optional (Prospects) | Not needed | Not needed |

Notes:

1. **Australia:** Jugal says the US style works with minor changes. **Ireland:** follow the UK column.
2. **Europass:** the EU's official free builder in 31 languages. A vendor guide ([ResumeFast, Jul 2026](https://www.resumefast.io/blog/europass-cv-guide)) says to use it only when an EU institution, EU-funded program, or public body asks, because it reads as generic at private companies. Private tech company: a 1 to 2 page English single-column CV; EU institution: Europass.
3. **Germany and other local conventions:** we could not verify official guidance. Follow the posting.
4. **Work authorization abroad:** see [international students](../jobs/international-students.md).

## Convert your resume for another country

### US to UK

1. Rename the file `Firstname_Lastname_CV.pdf` and call it a CV.
2. Switch to A4.
3. Add a 2 to 3 line profile at the top.
4. Switch to British spelling: optimise, organisation, analyse, programme (for non-software programs).
5. Use a second page only for real content. Stop at two A4 pages.
6. Keep photo and date of birth off.
7. Send the file type the advert asks for.

### India format to US or UK

1. Remove photo, date of birth, father's name, marital status, full address, and any "Declaration".
2. Cut to one page for the US.
3. Show CGPA on its original scale (`8.7/10`) only if it is strong.
4. Delete the "Objective" line (US) or turn it into a profile (UK).
5. Add a number to every bullet you can ([metrics](writing-bullets.md#metrics-when-you-have-none)).
6. Switch to US Letter for US applications.

### US to India campus and fresher roles

1. Switch to A4.
2. Give Projects and Skills more room.
3. Add internships and certifications ([certifications](index.md#certifications-and-courses)).
4. A slightly longer format is accepted here (Jugal).

### US to a private company in the EU

1. Keep the English one-page format and switch to A4.
2. Add a Languages line with levels.
3. Use Europass only if the posting or institution asks for it.

## Tools, free first

| Job | Tool | Cost | How to use it |
|---|---|---|---|
| Learn LaTeX | [Learn LaTeX in 30 minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) | Free | Read once before editing Jake's template |
| Parse test | [OpenResume parser](https://www.open-resume.com/resume-parser) | Free | Upload the PDF; check every field |
| Plain-text test | [Poppler](https://poppler.freedesktop.org/) (`pdftotext`) | Free | `pdftotext -layout file.pdf -` |
| Proofread | [LanguageTool](https://languagetool.org/) | Freemium | Paste the resume text; fix every flag you agree with |
| Action verbs | [MIT CAPD action verbs](https://capd.mit.edu/resources/resume-action-verbs/) | Free | Pick a different first verb per bullet |
| Keyword lint | [Resume Worded scanner](https://resumeworded.com/resume-scanner) | Freemium | Run the free scan; read flags, not the score |
| Keyword spot check | [Teal](https://www.tealhq.com/) | Freemium | The free tier shows the top 5 job description keywords |
| Local AI tailoring | [Resume Matcher](https://github.com/srbhr/Resume-Matcher) | Free | Run locally to keep your resume off hosted tools |
| Autofill | [Simplify](https://simplify.jobs/resume-builder) | Freemium | Autofill internship forms, then review every answer |
| Word frequency | [Text Analyzer](https://www.online-utility.org/text/analyzer.jsp) | Free | Paste 5 postings, read the top terms |
| Resume book | [The Tech Resume Inside Out](https://thetechresume.com/) | Paid; free [for developers without a job](https://thetechresume.com/complimentary-copy) | Read the free [sample chapters](https://thetechresume.com/samples/ats-myths-busted) first |

Every tool on the site in one table: [tools](../resources/tools.md).

Next: [Final resume checklist](checklist.md)
