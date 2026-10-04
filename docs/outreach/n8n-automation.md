# Automate outreach with n8n

For anyone comfortable with a spreadsheet. No coding needed. You leave with two working workflows: one drafts referral emails from a list of companies, one scores fresh jobs against your resume every morning.

I got tired of "networking" that meant copy-pasting the same DM to random people. What worked was short, credible emails to the right people about a specific role, with two proof points and a clear ask, so I automated the boring parts ([The Referral Engine](https://jugaldb.substack.com/p/the-referral-engine-n8n-hunter-gemini)). I also learned that a one-size-fits-all resume never wins; the callbacks started once every application was tailored ([Ultimate Job Search Workflow with n8n](https://jugaldb.substack.com/p/ultimate-job-search-workflow-with)).

> **Watch out:** Automation sends faster than you can read. This page sets every send step to Gmail drafts first. Do not schedule anything that emails real people until you have read the output of three manual runs.

## The two workflows at a glance

| | The Referral Engine | The Job Search Workflow |
|---|---|---|
| Ascend post | [The Referral Engine: n8n + Hunter + Gemini + Gmail](https://jugaldb.substack.com/p/the-referral-engine-n8n-hunter-gemini) (Oct 27, 2025) | [Ultimate Job Search Workflow with n8n](https://jugaldb.substack.com/p/ultimate-job-search-workflow-with) (Oct 12, 2025) |
| What it does | For each company in your sheet, finds up to 10 HR and IT contacts with Hunter, drafts a referral email per person with Gemini, logs them, then emails them with your resume | Pulls LinkedIn jobs posted in the last 24 hours that match your filter, scores each against your resume (0 to 100), writes a cover letter draft and a resume-edit list, then emails you |
| You give it | Company domain, job link, exact job title; your resume PDF | One filter row (keyword, location, level, remote); your resume PDF |
| You get | `Results` tab: Name, Email, Company, Subject, Email Body | `Result` tab: Title, Company, Location, Link, Score, Cover Letter, Skills, Improvements |
| Trigger | Manual (click Execute workflow) | Daily at 5 AM |
| Run time (Jugal's note in the file) | About 5 minutes per company | About 1 hour |
| Accounts | Google (Sheets, Drive, Gmail), Hunter, Google AI Studio | Google (Sheets, Drive, Gmail), Google AI Studio |
| Workflow file | [Referral Engine JSON](https://drive.google.com/file/d/1-eGRohkhK9CqmYVeLJvHQGEboG1a5IKf/view) | [Job Search JSON](https://drive.google.com/file/d/1Zm08IYPMbmgNLy4AEUoL2VjzgpQDzsN7/view), or one click from [n8n template 9602](https://n8n.io/workflows/9602-automate-job-search-with-linkedin-google-sheets-and-ai/) |
| Sheet template | [email automation n8n](https://docs.google.com/spreadsheets/d/1ep27p3BiqVLtBEH7WPp-1hjLeEyGN7IE0O6fWyNZ9aU/edit) | [Job Search N8N](https://docs.google.com/spreadsheets/d/1c1FYaZsle3jxmpQNo9kWR62aV58jeCpLn5YQPin1sUI/edit) |

Both posts are free. All facts about the files below come from reading the published JSON on Oct 4, 2026.

## Before you start

- [ ] A Google account you will send from (personal Gmail or university Google account).
- [ ] Your resume as a text-based PDF (exported from Overleaf or Word, not a scan). Extract From File reads text, not images.
- [ ] A second copy of that PDF without your phone number and home address, for the AI steps (see the privacy warning in step 4).
- [ ] A [Hunter](https://hunter.io/) account (Referral Engine only).
- [ ] Three target companies, each with its email domain (`stripe.com`), one job link, and the exact job title.
- [ ] Two hours for the first setup.

## Step 1: Choose where n8n runs

| Option | Cost (as of Oct 2026) | Google login | Runs with laptop closed | Best for |
|---|---|---|---|---|
| n8n Cloud trial | Free for 14 days, 1,000 executions, no card. Then Starter at EUR 20 a month billed yearly (2,500 executions; n8n says yearly billing saves 17%) | One click ("Sign in with Google") | Yes | Fastest start |
| Self-host with Docker | Free ([Community edition](https://docs.n8n.io/deploy/host-n8n/community-edition-features/); Docker Personal is $0) | You create your own Google OAuth app (20 minutes) | No, the machine must be awake at run time | No monthly cost |
| `npx n8n` | Free | Same as Docker | No | Not recommended in Oct 2026 |

One execution is one full run of a workflow, however many steps it has, so a daily schedule uses about 30 a month ([n8n pricing](https://n8n.io/pricing/)). Personal and learning use of the self-hosted version is allowed under n8n's license ([license FAQ](https://docs.n8n.io/n8n-community-license/community-license/license-faq/)).

### Option A: n8n Cloud

1. Start the trial from [n8n pricing](https://n8n.io/pricing/) ([trial details](https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial/)).
2. Note your instance URL (`https://[name].app.n8n.cloud`).
3. Put a calendar reminder on day 12. If you do not upgrade, the trial expires and n8n deletes the workspace.
4. Before day 14, export your workflows. After the trial ends you still have 90 days to download them from the Admin Dashboard ([download workflows](https://docs.n8n.io/deploy/use-n8n-cloud/download-workflows/)).

### Option B: Self-host with Docker

1. Install Docker Desktop ([get Docker](https://docs.docker.com/get-started/get-docker/)) and open it once.
2. Run the one-line installer from n8n ([one-line setup](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup/)). It needs Docker with the `docker compose` v2 plugin and creates an `n8n` folder.

    ```bash
    curl -fsSL https://get.n8n.io | sh
    ```

3. Open `http://localhost:5678` and create the owner account.
4. Optional: in Settings, open Usage and plan and register for the free license key. It adds folders and debugging in the editor.

Prefer a single container? This is the [Docker install](https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker/) command. Set both time zone variables to yours (for example `America/New_York`, `America/Los_Angeles`, `Asia/Kolkata`, `Europe/London`), or the 5 AM schedule fires at New York time.

```bash
docker volume create n8n_data

docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e GENERIC_TIMEZONE="Asia/Kolkata" \
 -e TZ="Asia/Kolkata" \
 -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
 -v n8n_data:/home/node/.n8n \
 n8nio/n8n
```

### Option C: npx (legacy)

```bash
# Needs Node.js 20.19 to 24.x. Works on n8n 2.x only.
npx n8n
```

> **Watch out:** As of Oct 4, 2026, n8n 3.0 is scheduled for October 2026 and will not support installs run with npm or npx ([3.0 breaking changes](https://docs.n8n.io/changelog/v30-breaking-changes/)). Use Docker unless you already have npx running.

## Step 2: Copy the two Google Sheets

1. Open each template and choose File, then Make a copy. Keep the tab names.
2. Keep your copies private. The post suggests "anyone with the link can edit", but n8n signs in with your own Google account, so you do not need it. A public editable sheet leaks your contact list and lets anyone add rows that trigger emails.
3. Do not rename any column. The workflows write to these exact names, typos included.
4. Upload your resume PDF to Google Drive. Private is fine; the Drive node downloads it with your own credential.
5. Fill one input row using the tables below.

Referral Engine sheet:

| Tab | Columns (exact) | Example row | Notes |
|---|---|---|---|
| `Sheet1` (input) | `Company Name`, `URL`, `Position` | `stripe.com`, `[link to the exact job]`, `Software Engineer, Backend` | `Company Name` must be the email domain. "Stripe" finds nothing; `stripe.com` works. The post lists the order as Company Name, Position, URL; order does not matter, names do |
| `Results` (output) | `Name`, `Email`, `Company`, `Subject`, `Email Body` | Filled by the workflow | Add a `Sent` column at the end (step 9 of the Referral Engine fixes) |

Job Search sheet:

| Tab | Columns (exact) | Example row | Notes |
|---|---|---|---|
| `Filter` (input) | `Keyword`, `Location`, `Experience Level`, `Remote`, `Easy Apply` | `Software Engineer Intern`, `United States`, `Internship`, `Hybrid`, (blank) | Only the first row is used |
| `Result` (output) | `Title`, `Company `, `Locaton`, `Link`, `Score`, `Cover Letter`, `Skills`, `Improvements` | Filled by the workflow | `Company ` has a trailing space and `Locaton` is misspelled in the template. Leave both as they are |

## Step 3: Import the workflows

1. Download both JSON files from the links in the table at the top.
2. In n8n, create a new workflow, open the three-dots menu at the top right, and choose Import from File ([import docs](https://docs.n8n.io/build/manage-workflows/export-and-import/)). Or open the JSON in a text editor, copy everything, click the empty canvas, and paste with Ctrl+V or Cmd+V.
3. For the Job Search Workflow you can instead open [template 9602](https://n8n.io/workflows/9602-automate-job-search-with-linkedin-google-sheets-and-ai/), click "Use for free", and pick your instance.
4. Expect red warning icons on the Google, Gemini, Hunter, and Gmail nodes until you attach your own credentials.

## Step 4: Connect credentials

### Google on n8n Cloud (2 minutes)

1. Open any Google Sheets node, then Credential, then Create new.
2. Click "Sign in with Google" and accept. This is n8n's managed OAuth; no Google Cloud setup needed ([Google credential docs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)).
3. Repeat for Google Drive and Gmail.

### Google on self-hosted n8n (about 20 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/library) and create a project.
2. In APIs and Services, Library, enable Google Drive API, Google Sheets API, and Gmail API ([enable APIs](https://support.google.com/googleapi/answer/6158841)). The Sheets node also needs the Drive API.
3. Open the OAuth consent screen. Set Audience to External, fill the app name and your email, and create it.
4. On the Audience page, add your own Gmail address under Test users ([manage app audience](https://support.google.com/cloud/answer/15549945)).
5. In n8n, create the Google credential and copy the "OAuth Redirect URL" it shows. On a local install it is `http://localhost:5678/rest/oauth2-credential/callback`.
6. In Google Cloud, go to Credentials, Create credentials, OAuth client ID, type Web application. Paste the redirect URL into Authorized redirect URIs, exactly.
7. Copy the Client ID and Client Secret into the n8n credential. Click Sign in with Google.
8. Google warns that the app is unverified. That is expected for your own app ([unverified apps](https://support.google.com/cloud/answer/7454865)). Continue, then Save.
9. Repeat sign-in for the Drive, Sheets, and Gmail credentials (same client ID and secret).

| Error | Cause | Fix |
|---|---|---|
| `redirect_uri_mismatch` | The URI in Google is not identical to n8n's (http vs https, port, path) | Copy it again from the n8n credential panel |
| Access denied | Your email is not a Test user | Add it on the Audience page |
| `invalid_client` | Client ID or secret copied wrong | Paste both again |
| Works, then fails a week later | Apps in Testing get refresh tokens that expire in 7 days ([Google OAuth](https://developers.google.com/identity/protocols/oauth2)) | Reconnect weekly, or use n8n Cloud's managed OAuth |

> **Watch out:** n8n's Gmail credential asks for full mailbox access. Never share your Client Secret, and never commit it to GitHub.

### Gemini API key (Google AI Studio)

1. Open [Google AI Studio API keys](https://aistudio.google.com/apikey) and click Create API key (new project). Copy it.
2. In n8n, create a "Google Gemini(PaLM) Api" credential and paste the key. Leave the host as `https://generativelanguage.googleapis.com` ([Gemini credential docs](https://docs.n8n.io/integrations/builtin/credentials/googleai/)).
3. Open every "Google Gemini Chat Model" node and pick a model from the dropdown. Imported nodes fall back to `gemini-2.5-flash`, which Google now limits to people who used it before ([deprecations](https://ai.google.dev/gemini-api/docs/deprecations)). A Gemini node you add yourself defaults to a preview model, so change that too.
4. Choose `gemini-3.5-flash-lite` (cheapest) or `gemini-3.8-flash` (stronger). Google names these two for new projects, and both show "Free of charge" in the free tier column as of Oct 2026 ([pricing](https://ai.google.dev/gemini-api/docs/pricing)).
5. Check your live limits at [AI Studio rate limits](https://aistudio.google.com/rate-limit). The Job Search Workflow makes 2 Gemini calls per job.
6. On n8n Cloud you can skip the key and use n8n's Gateway credits during the trial ([gateway credits](https://docs.n8n.io/deploy/use-n8n-cloud/gateway-credits/)).

> **Watch out:** On the free tier, Google may use your prompts to improve its products, and human reviewers may read them; Google's terms say not to send personal information ([Gemini API terms](https://ai.google.dev/gemini-api/terms)). Users in the EEA, Switzerland, and the UK get the paid-tier data terms even on free use. Both workflows send your resume text, and the Referral Engine sends recruiters' names, so feed the AI nodes the redacted PDF.

### Hunter API key (Referral Engine only)

1. Sign up at [Hunter](https://hunter.io/).
2. Open [API keys](https://hunter.io/api-keys), create a new key, and copy it.
3. In the Hunter node, create a credential and paste the key ([Hunter credential docs](https://docs.n8n.io/integrations/builtin/credentials/hunter/)).
4. Know the budget: the free plan is 50 credits a month, 1 credit per email found, and at most 10 results per search ([Hunter pricing](https://hunter.io/pricing), [API docs](https://hunter.io/api-documentation/v2)). At 10 contacts per company that is about 5 companies a month. At 3 contacts, about 16.

## Workflow 1: The Referral Engine

### How data flows

```text
Execute workflow
  -> Get row(s) in sheet (Sheet1) -> Fetch Companies -> Split Out1 -> Loop Over Items
       loop: Hunter -> Fetch Data -> Download file1 -> Extract from File
             -> AI Agent (+ Google Gemini Chat Model) -> Edit Fields
             -> Append or update row in sheet (Results) -> back to Loop Over Items
       done: Date & Time -> Merge -> Get row(s) in sheet1 (Results)
             -> Remove Duplicates -> Loop Over Items1 -> Send a message (Gmail)
```

### Node by node

| # | Node | What it does | What you set |
|---|---|---|---|
| 1 | When clicking 'Execute workflow' | Starts the run when you click | Nothing |
| 2 | Get row(s) in sheet | Reads every row of `Sheet1` | Your sheet copy, tab `Sheet1` |
| 3 | Fetch Companies | Copies `Company Name` into a field called `Company` | Nothing |
| 4 | Split Out1 | One item per company | Nothing |
| 5 | Loop Over Items | Processes companies one at a time | Nothing |
| 6 | Hunter | Domain Search on the company domain; returns up to 10 people in departments `hr` and `it` | Credential; lower Limit to 3; keep `hr`, keep `it` only if you want engineers |
| 7 | Fetch Data | Builds `Name`, `Email`, `Position`, `LinkedIn` from Hunter's result | Nothing |
| 8 | Download file1 | Downloads your resume PDF from Drive, once per contact | Paste your redacted resume's Drive URL |
| 9 | Extract from File | Turns the PDF into text | Add option Keep Source = JSON (fix 4 below) |
| 10 | AI Agent + Google Gemini Chat Model | Writes a subject and body as JSON | Credential, model, and the prompt patch below |
| 11 | Edit Fields | Strips code fences and parses the JSON; writes blanks plus an `error` field if parsing fails | Nothing |
| 12 | Append or update row in sheet | Writes Name, Email, Company, Subject, Email Body to `Results` | Your sheet copy, tab `Results`; match on `Email` |
| 13 | Date & Time, Merge | Pass-through that starts the send branch once the loop is done | Nothing |
| 14 | Get row(s) in sheet1 | Reads all rows of `Results` | Your sheet copy, tab `Results` |
| 15 | Remove Duplicates | Drops repeated emails within this run ([docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/)) | Switch mode to "Remove Items Processed in Previous Executions" |
| 16 | Loop Over Items1 | Sends one email at a time | Nothing |
| 17 | Send a message (Gmail) | Sends to `{{ $json.Email }}` with Subject and Email Body | Replace with a draft step (below) |

Jugal's tip on the dedupe node: "Keep it. It saves your domain reputation."

### Change these settings after import

Found by reading the published JSON against n8n's documentation. They are not visible in the post, so check each one.

1. **Point every Sheets node at your copy.** All three Sheets nodes point at Jugal's private copy.
2. **Lower the Hunter limit.** Set Limit to 3. Ten near-identical emails to one company look like spam, and Hunter's data favors contacting 1 to 2 people per company ([Hunter 2026](https://hunter.io/the-state-of-cold-email)). On the free plan the limit cannot go above 10.
3. **Add your resume.** Paste the Drive URL into Download file1.
4. **Pass the contact's name to the AI.** Extract from File outputs only the PDF text, so `{{ $json.Name }}` and `{{ $json.Position }}` reach the prompt blank and the model may invent a name. Fix: in Extract from File, Add option, Keep Source, JSON. Or change the two expressions to `{{ $('Fetch Data').item.json.Name }}` and `{{ $('Fetch Data').item.json.Position }}`.
5. **Stop invented personalization.** The prompt asks for "public signals" (a post, talk, repo) but the workflow never supplies any. Append the patch lines below.
6. **Match on Email, not Name.** In "Append or update row in sheet", set the column to match on to `Email`, so two people with the same name do not overwrite each other.
7. **Give the send branch a file.** The resume is downloaded only in the drafting branch, so the Gmail step has no attachment. Add a Google Drive node (Download, File By URL, your resume) between Loop Over Items1 and the Gmail node. It outputs the file as binary `data`.
8. **Finish the Gmail fields.** Type your LinkedIn URL after "LinkedIn Profile: ", set the attachment field to `data`, and leave "Append n8n attribution" off ([Gmail message docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/message-operations/)).
9. **Never email the same person twice.** The send branch reads every row of `Results` on every run. Add a `Sent` column, put a [Filter](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter/) node after Get row(s) in sheet1 that keeps rows where `Sent` is empty, and after Gmail add a Google Sheets "Update Row" step that writes today's date to `Sent`, matching on `Email`.
10. **Review before send.** Replace the Gmail send with a draft (next section).

### The AI Agent prompt (verbatim)

Copied from the workflow file. En dashes were changed to hyphens for this site; the typos and the broken `\email:` fragment are in the original and do not stop it from working. The leading `=` is how the file marks Expression mode: if you paste the prompt into the editor yourself, set the field to Expression and leave the `=` out.

```text
=Person name- {{ $json.Name }}
Person position- {{ $json.Position }}
The position I am applying for - {{ $('Get row(s) in sheet').item.json.Position }}, make sure the subject includes this role if adding, otherwise it can just be in the body, it should not be any other postion

This is the text from my resume: {{ $json.text }}

company - {{ $('Get row(s) in sheet').item.json['Company Name'] }}
Position seeking referral for link - {{ $('Get row(s) in sheet').item.json.URL }}

"output_schema": {
    "subject": "string",
    "email_body": "string",
    "anchor_topics": [
      "string"
    ]
  },
  "prompt": "You are a precise cold-outreach writer. Using the provided inputs, generate a crisp subject and a concise referral email for the specified role.\n\nGoals:\n1) Personalize to the recipient by referencing their role, company context, and one concrete anchor topic from recent work or public signals.\n2) Show 1-2 quantified proof points from my resume that align with the job requirements.\n3) Ask for a referral for the specific role, including the job title and link, while keeping the message brief and easy to say yes to.\n\nHard constraints:\n- Subject: 3-7 words, no emojis, no ALL CAPS.\email:, 2-3 short paragraphs, no bullets, no bold, no links except the single job_link provided.\n- Tone: professional; avoid fluff, clichés, and generic praise. No markdown.\n- Personalization must mention exactly one or two anchor topics derived from public signals (post, talk, repo, product launch) or, if none, a shared stack or domain from job_requirements.\n- Close with a clear referral ask and one lightweight next step.\n\nMethod:\n1) From job_requirements, extract 3-5 must-have skills and the role’s core outcomes.\n2) From my_resume, select 1-2 achievements with numbers that map directly to those outcomes.\n3) From public_signals_about_contact and company_domain_industry, derive 1-2 anchor topics (e.g., \"your post on X\", \"the Y launch\", \"open-source Z\"). If none, use a credible fallback like shared tech stack or domain problem.\n4) Draft:\n   - Subject: action + outcome or relevance, 3-7 words.\n   - Body paragraph 1 (hook): greet by name, reference the anchor topic concisely, tie to the role.\n   - Body paragraph 2 (proof + ask): 1-2 quantified resume wins aligned to JD, then ask: \"If it seems like a fit, would you be open to referring me for [job_title]? Here’s the link: [job_link]. Happy to share a 3-5 line summary or code sample.\"\n5) Keep sentences short, concrete, and skimmable. Prefer verbs like \"shipped, scaled, reduced, improved\".\n\nFormatting rules:\n- Return JSON only in the exact output_schema.\n- \"subject\" is a single line.\n- \"email_body\" uses \\n for paragraph breaks; no extra line at end; no markdown; no quotes outside normal punctuation.\n- \"anchor_topics\" is an array of 1-2 short phrases, each <= 80 characters, single line.\n\nQuality checks (must pass before returning):\n- Subject <= 7 words.\n.\n- Contains recipient name and company.\n- References at least 1 anchor topic.\n- Includes a direct referral ask mentioning job_title and job_link.\n\nReturn exactly the following keys: subject, email_body, anchor_topics."


Make sure the email body is atleast 3 paragraphs long + the CTA below 


Every email should have a CTA that I am attaching my resume and my Linkedin Profile
```

Append these lines at the end of the prompt (this site's patch, not in the original):

```text
Never invent posts, talks, repos, launches, or mutual connections. No public signals are provided, so use only the shared tech stack or domain from the job link.
Keep the body to 3 short paragraphs and under 150 words. End with: "If this isn't the right person, no worries, I won't follow up."
```

The send-block the prompt is built around, from the post:

```text
If it seems like a fit, would you be open to referring me for {{Position}}? Here's the link: {{URL}}. I'm attaching my resume and my LinkedIn for a quick skim.
```

### First test run

1. Put exactly 1 row in `Sheet1`.
2. Select the Gmail node and deactivate it, so nothing can send.
3. Click Execute workflow. Watch each node turn green.
4. Open `Results`. Check that Name and Email are filled and that the body uses the real first name.
5. Read every email. Delete any line that claims something untrue about the person or about you.
6. If a Subject or Email Body is blank, open the AI Agent output for that item. The model returned something that was not JSON; lower the temperature on the Gemini node or try the stronger model.
7. Repeat with 3 rows. Only then move on.

### Review before send: Gmail drafts

1. Delete the "Send a message" node, or deactivate it.
2. Add a Gmail node: Resource Draft, Operation Create ([draft docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/draft-operations/)).
3. Subject: `{{ $json.Subject }}`. Message: `{{ $json['Email Body'] }}`.
4. Options: To Email `{{ $json.Email }}`; Attachments field `data` (from the Drive download you added in fix 7).
5. Run the workflow. Open Gmail, then Drafts.
6. Each morning: edit the first line of each draft so it is about that person, then send 10 to 15. That is Jugal's daily pace ([The Job Hunt I Didn't Burn Out Doing](https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing)).
7. Log each sent email in your [tracker](follow-up-and-tracking.md#the-tracker-template) with a follow-up date.

### Schedule it (optional)

1. Only after three clean manual runs.
2. Replace the manual trigger with a [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/). Jugal's post suggests daily at 17:00 America/Phoenix; use your own time zone.
3. Set the time zone in the workflow settings ([workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings/)).
4. Click Publish. In n8n 2.x, Publish replaced the old Activate toggle that the 2025 posts mention ([2.0 breaking changes](https://docs.n8n.io/changelog/v20-breaking-changes/), [save and publish](https://docs.n8n.io/build/understand-workflows/save-and-publish-workflows/)).
5. Each morning, open Gmail Drafts and work through the review steps above. The schedule only drafts; you still send by hand.

## Workflow 2: The Job Search Workflow

### How data flows

```text
Schedule Trigger (5 AM)
  -> Download file (resume) -> Extract from File -> Get row(s) in sheet (Filter)
  -> LinkedIn Search URL (Code) -> Fetch jobs from LinkedIn -> HTML -> Split Out -> Loop Over Items
       loop: Wait (2 s) -> HTTP Request (job page) -> HTML1 -> Edit Fields
             -> AI Agent (+ Gemini): match score and cover letter -> Edit Fields1 (parse JSON)
             -> AI Agent1 (+ Gemini): resume edits
             -> Append or update row in sheet1 (Result) -> back to Loop Over Items
       done: Send a message (Gmail: "results are ready")
```

### Node by node

| # | Node | What it does | What you set |
|---|---|---|---|
| 1 | Schedule Trigger | Runs daily at 5 AM in the workflow's time zone | Hour, and the time zone in workflow settings |
| 2 | Download file | Downloads your resume PDF | Paste your redacted resume's Drive URL |
| 3 | Extract from File | PDF to text, used by both AI steps | Nothing |
| 4 | Get row(s) in sheet | Reads the `Filter` tab | Your sheet copy, tab `Filter` |
| 5 | LinkedIn Search URL (Code) | Builds a LinkedIn search URL for jobs posted in the last 24 hours from the first filter row | Nothing (values in the table below) |
| 6 | Fetch jobs from LinkedIn | Downloads the public search page | Nothing |
| 7 | HTML | Pulls each job link from the page | Fix the CSS selector here if LinkedIn changes its HTML |
| 8 | Split Out | One item per job link | Nothing |
| 9 | Loop Over Items | One job at a time | Nothing |
| 10 | Wait | Pauses 2 seconds before each job page | Raise to 10 seconds if you hit rate limits |
| 11 | HTTP Request + HTML1 | Downloads the job page and extracts Title, Company, Location, Description, Job ID | Nothing |
| 12 | Edit Fields | Cleans the description and builds the apply link | Nothing |
| 13 | AI Agent + Google Gemini Chat Model | Match score 0 to 100, score breakdown, gaps, 150 to 220 word cover letter, as JSON | Credential and model |
| 14 | Edit Fields1 | Parses the JSON (strips fences, fixes curly quotes, stops at `END_OF_JSON`) | Nothing |
| 15 | AI Agent1 + Google Gemini Chat Model1 | Numbered list of tagged resume edits | Credential, model, and fix 4 below |
| 16 | Append or update row in sheet1 | Writes one row per job to `Result`, matched on `Link` | Your sheet copy, tab `Result` |
| 17 | Send a message | Emails you when the loop finishes | Replace `<your e-mail address>` with yours |

### Filter values

The Code node maps these exact strings to LinkedIn's filters. Anything else is silently ignored.

| Column | Accepted values | Example | Notes |
|---|---|---|---|
| `Keyword` | Plain words | `Software Engineer Intern` | Not URL-encoded, so avoid `&`, `#`, `+` |
| `Location` | A place LinkedIn understands | `United States`, `India`, `London` | |
| `Experience Level` | `Internship`, `Entry level`, `New Grad` (comma-separated for several) | `Internship` | Case-sensitive. The template's sample `Entry Level` (capital L) does not match, so the level filter is silently skipped |
| `Remote` | `Remote`, `Hybrid`, `On-Site` (comma-separated) | `Hybrid,Remote` | |
| `Easy Apply` | Any text turns it on; blank turns it off | (blank) | |

Only the first row is read. Jugal's rule: for more searches, make a copy of both the sheet and the workflow.

### Change these settings after import

1. **Add your resume.** Paste the Drive URL into Download file.
2. **Point both Sheets nodes at your copy.** Tabs `Filter` and `Result`.
3. **Pick models.** Both Gemini nodes need your credential and a current model (Step 4). Optional: temperature 0.2 to 0.4 keeps the JSON stable.
4. **Give the resume editor its inputs.** AI Agent1's prompt is saved as fixed text, so Gemini receives the literal `{{ }}` placeholders and writes Improvements without seeing the job or your resume. Fix: open AI Agent1, switch the Prompt field from Fixed to Expression, and replace `{{ $json.Description }}` with `{{ $('Edit Fields').item.json.Description }}`. The gallery copy (template 9602) has the same setting.
5. **Set your email.** In Send a message, replace `<your e-mail address>`.
6. **Set the time zone.** Workflow settings, Timezone. Self-hosted n8n defaults to America/New_York.

### The two prompts (verbatim)

Job matching (node "AI Agent"). En dashes changed to hyphens for this site.

````text
=You are a precise job-matching assistant.

Return ONE JSON object wrapped in ```json fences, followed by the line END_OF_JSON.
No extra prose. No Markdown inside the JSON. No comments.

INPUTS
job_description: {{ $json.Description }}
my_resume: {{ $('Extract from File').item.json.text }}

TASKS
1) Parse job_description → job_analysis with keys:
   title (string), company (string), must_have_skills (string[]), nice_to_have_skills (string[]),
   responsibilities (string[]), years_of_experience (string), education_certifications (string),
   location_constraints (string), domain_industry_focus (string), tech_stack (string[]), measurable_kpis (string[])

2) Parse my_resume → resume_analysis:
   core_skills (string[]),
   tools_tech { programming_languages[], frontend_technologies[], backend_technologies[], databases_devops[] },
   years_of_experience_key_areas (object of short strings),
   accomplishments_with_metrics (string[]),
   education_certs (string[]), domains (string[]), roles_titles (string[]),
   leadership_collaboration (string[]), location_work_auth (string)

3) Scoring (integer 0-100):
   - Skills/Tools overlap: 40
   - Relevant experience & seniority: 25
   - Responsibilities alignment: 15
   - Education/Certs fit: 10
   - Domain/industry fit: 5
   - Logistics (location/work auth/availability): 5
   Allow partial credit; deduct up to 10 via red_flags. Clamp to [0,100], integer.

4) Explain the score:
   For each bucket, provide 1-3 concise evidence bullets. Cite "JD" or "Resume" and include short quoted fragments (escape quotes).

5) Gaps & Suggestions:
   List missing/weak requirements with 1-2 concrete upskilling steps per gap.

6) Cover letter:
   150-220 words (2-4 short paragraphs), tailored to the role/company.
   Concrete impacts; no greeting/signature. JSON-safe: escape all " as \", use \n for newlines.

STRICT CONTENT RULES (to prevent invalid JSON)
- Do NOT paste raw paragraphs, markdown (**bold**, lists), headings, or multi-line blocks into any array fields.
- Every array element must be a short phrase (≤ 140 characters), single line, no line breaks, no asterisks, no bullets.
- If a JD section is long, summarize into short phrases before placing into arrays.
- Do NOT include unrelated job text inside arrays or objects. Keep each value semantically atomic.
- Never invent company/title; use "" if unknown.
- No trailing commas anywhere.

STRICT OUTPUT RULES
- Output exactly the following schema (keys and types). No extra keys.

SCHEMA
```json
{
  "job_analysis": {
    "title": "",
    "company": "",
    "must_have_skills": [],
    "nice_to_have_skills": [],
    "responsibilities": [],
    "years_of_experience": "",
    "education_certifications": "",
    "location_constraints": "",
    "domain_industry_focus": "",
    "tech_stack": [],
    "measurable_kpis": []
  },
  "resume_analysis": {
    "core_skills": [],
    "tools_tech": {
      "programming_languages": [],
      "frontend_technologies": [],
      "backend_technologies": [],
      "databases_devops": []
    },
    "years_of_experience_key_areas": {},
    "accomplishments_with_metrics": [],
    "education_certs": [],
    "domains": [],
    "roles_titles": [],
    "leadership_collaboration": [],
    "location_work_auth": ""
  },
  "match_score": 0,
  "score_explanation": [
    { "category": "Skills/Tools overlap (40 points)", "score": 0, "evidence": [] },
    { "category": "Relevant experience depth & seniority (25 points)", "score": 0, "evidence": [] },
    { "category": "Responsibilities alignment (15 points)", "score": 0, "evidence": [] },
    { "category": "Education/Certs fit (10 points)", "score": 0, "evidence": [] },
    { "category": "Domain/industry fit (5 points)", "score": 0, "evidence": [] },
    { "category": "Logistics (location, work auth, availability) (5 points)", "score": 0, "evidence": [] }
  ],
  "red_flags": [],
  "gaps_and_suggestions": [
    { "gap": "", "suggestion": "" }
  ],
  "cover_letter": ""
}
````

Resume editor (node "AI Agent1"), shown with fix 4 applied. The original first input was `{{ $json.Description }}`. Set the field to Expression before pasting.

```text
You are a ruthless resume editor. Compare the inputs and output ONLY crisp, point-wise changes to improve job fit.

Inputs:
- job_description: {{ $('Edit Fields').item.json.Description }}
- my_resume: {{ $('Extract from File').item.json.text }}

Instructions:
- Output a numbered list; highest-impact first.
- One line per point; <= 14 words.
- Start each line with a tag: [ADD], [REMOVE], [REWRITE], [ORDER], [QUANTIFY], [KEYWORDS], [FORMAT], [FOCUS].
- Base every point on gaps vs. the job_description; do not invent experience.
- Prefer concrete actions: skills to add, bullets to rewrite, sections to reorder/remove.
- Include one line: 'Missing keywords: term1, term2, ...' (only if any).
- No intros, explanations, code fences, or extra text - points only.

Output: points only, exactly as specified above.
```

> **Tip:** Want to delete the hand-written JSON parser? The AI Agent has a "Require Specific Output Format" option that attaches a [Structured Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/). Paste the schema above as its JSON example.

### First test run

1. Add a [Limit](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.limit/) node between Split Out and Loop Over Items, with Max Items 3.
2. Click Execute workflow.
3. Open `Result`. Each row should have a Score, a Cover Letter, Skills, and an Improvements list that names things from that job.
4. If Gemini returns a 429 ("too many requests"): open the AI Agent node Settings, turn on Retry On Fail, Max Tries 5, Wait Between Tries 5000 ms (the highest the editor allows). For longer back-off, raise the Wait node from 2 to 10 seconds ([rate limits](https://docs.n8n.io/integrations/builtin/handle-rate-limits/)).
5. Run it two more mornings by hand. When all three runs fill `Result` cleanly, remove the Limit node.

### Schedule it

1. Open Schedule Trigger and set the hour. The file ships with 5 AM.
2. Open the workflow Settings and set Timezone to yours. Self-hosted n8n otherwise uses America/New_York ([workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings/)).
3. Click Publish. A schedule runs only on a published workflow ([Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)).
4. Self-hosted: keep the machine awake at that hour, or move to n8n Cloud.
5. Attach the error alert from [Make failures loud](#make-failures-loud).

### Use the output every morning

1. Sort `Result` by Score, highest first.
2. Open the top 5 links. Drop any that fail your sponsorship or location check.
3. For each, apply only the Improvements that are true for you. The prompt itself says "do not invent experience." See [resume tailoring](../resume/tailoring.md).
4. Treat the Cover Letter as a draft. Rewrite the first two lines in your own words.
5. Apply, then log the application and set a follow-up date in your [tracker](follow-up-and-tracking.md#the-tracker-template).
6. Pair the best 2 or 3 with a referral ask from the Referral Engine.

### Internship mode without scraping LinkedIn

> **Watch out:** LinkedIn's User Agreement prohibits scraping its services with scripts or bots ([User Agreement](https://www.linkedin.com/legal/user-agreement)). Jugal's post says to be mindful of this. Run Workflow 2 at most once a day, never with your logged-in session, or switch the source below.

Summer internships are reviewed on a rolling basis, so the first week after a posting matters more than the deadline ([494 Summer 2027 Internships Are Already Live](https://jugaldb.substack.com/p/494-summer-2027-internships-are-already)). A safer daily source is the data file behind the SimplifyJobs list:

1. Replace "Fetch jobs from LinkedIn", "HTML", and the per-job "HTTP Request" with one HTTP Request node: GET `https://raw.githubusercontent.com/SimplifyJobs/Summer2027-Internships/dev/.github/scripts/listings.json` (about 13 MB). New grads: use `https://raw.githubusercontent.com/SimplifyJobs/New-Grad-Positions/dev/.github/scripts/listings.json`; the same code works.
2. Add a Code node in "Run Once for All Items" mode with the filter below. If the HTTP node gives you one item holding the whole array, add a Split Out node first.
3. These listings have no job description, so either skip the AI scoring or fetch each company's job page before the AI Agent.

```javascript
// n8n Code node, mode "Run Once for All Items".
// Keeps active roles posted in the last 24 hours in the chosen categories.
const listings = $input.all().map(i => i.json);
const HOURS = 24;
const CATEGORIES = ['Software', 'AI/ML/Data', 'Quant'];
const BLOCKED = ['Does Not Offer Sponsorship', 'U.S. Citizenship is Required']; // international students
const cutoff = Math.floor(Date.now() / 1000) - HOURS * 3600; // date_posted is Unix seconds
return listings
  .filter(j => j.active && j.is_visible)
  .filter(j => j.date_posted >= cutoff)
  .filter(j => CATEGORIES.includes(j.category))
  .filter(j => !BLOCKED.includes(j.sponsorship))
  .map(j => ({ json: {
    Company: j.company_name,
    Title: j.title,
    Location: (j.locations || []).join('; '),
    Link: j.url,
    Posted: new Date(j.date_posted * 1000).toISOString().slice(0, 10),
    Sponsorship: j.sponsorship,
  }}));
```

This filter was tested outside n8n on Oct 4, 2026 data. Most listings mark sponsorship as "Other" (not stated), so international students still need to check each posting; see [international students](../jobs/international-students.md).

For specific companies, use their official public job APIs in an HTTP Request node:

| ATS | Endpoint | Docs |
|---|---|---|
| Greenhouse | `https://boards-api.greenhouse.io/v1/boards/[token]/jobs?content=true` (`content=true` adds descriptions) | [Greenhouse Job Board API](https://docs.greenhouse.io/job-board.html) |
| Lever | `https://api.lever.co/v0/postings/[company]?mode=json` | [Lever Postings API](https://github.com/lever/postings-api) |
| Ashby | `https://api.ashbyhq.com/posting-api/job-board/[company]` | [Ashby public job posting API](https://developers.ashbyhq.com/docs/public-job-posting-api) |

More job sources: [where to find jobs](../jobs/where-to-find-jobs.md) and [finding internships](../internships/finding-and-applying.md).

## Safety and sending limits

| Risk | Limit or rule | What to do |
|---|---|---|
| Gmail blocks you | Personal Gmail: more than 500 emails a day ([Google](https://support.google.com/mail/answer/22839)). Workspace: 2,000 a day ([Google](https://support.google.com/a/answer/166852)) | Stay at 10 to 15 a day. That is 2 to 3% of the cap |
| Spam complaints | Every Gmail sender must stay under a 0.3% spam rate ([sender guidelines](https://support.google.com/mail/answer/81126)) | Personal line in every email; stop when asked |
| Too many people per company | Hunter's data: 1 to 2 contacts per company replies best | Hunter Limit 3 at most |
| Repeat emails | The send branch rereads every row | `Sent` column plus Filter, or cross-run dedupe (fix 9) |
| Invented personalization | The prompt asks for signals it never receives | Prompt patch plus read every draft |
| Following up forever | 3 touches per person | See [follow-up and tracking](follow-up-and-tracking.md) |
| Breaking email law | CAN-SPAM requires honest headers and subjects and honoring opt-outs ([FTC](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)) | Real name, true subject, an opt-out line. Details in [cold email](cold-email.md#email-law-can-spam-uk-and-eu) |
| LinkedIn account restriction | Scraping is against the User Agreement | Internship mode or official ATS APIs |
| Your data in AI training | Free Gemini tier may be read by reviewers (outside EEA, CH, UK) | Redacted resume PDF, or a paid key |
| Leaked secrets | Exported workflow JSON contains credential names and IDs ([export docs](https://docs.n8n.io/build/manage-workflows/export-and-import/)) | Never commit keys; check JSON before sharing |
| Public sheet | Anyone with an edit link can add rows that trigger emails | Keep both sheets private |

> **Tip:** Want the resume to never leave your laptop? On self-hosted n8n, swap the Gemini Chat Model for an [Ollama Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/) running a local model. Small local models follow the long JSON prompt less reliably, so test with 3 jobs.

## Make failures loud

Expired Google tokens, a LinkedIn HTML change, and Gemini 429s all stop a scheduled run without telling you. Set up one alert workflow for both automations.

1. Create a new workflow that starts with an [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) node.
2. Add a Gmail node that sends you "Workflow failed" with the workflow name.
3. Publish it.
4. In each job-search workflow, open Settings, then Error workflow, and pick it ([workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings/)).
5. Note: error workflows only fire on automatic runs, not when you click Execute.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Sheet writes fail | Column names do not match | Restore the exact headers from Step 2 |
| Hunter returns nothing | `Company Name` is a name, not a domain | Use `stripe.com`; loosen the department filter |
| Hunter `pagination_error` | Limit above 10 on the free plan | Set Limit to 10 or lower |
| Emails say "Hi there" or use the wrong name | AI Agent is not receiving Name and Position | Fix 4 (Keep Source = JSON) |
| Gmail error about missing binary data | No file in the send branch | Fix 7 (Drive download before Gmail) |
| Same people emailed again | Send branch reads all rows | Fix 9 (`Sent` column) |
| Blank Subject or Body, or empty Result cells | Model returned non-JSON | Open the AI Agent output; lower temperature; try the stronger model |
| Gemini 404 or model error | Model not available to your key | Pick a current model from the dropdown |
| Gemini 429 | Free-tier rate limit | Retry On Fail, longer Wait, fewer jobs per run, or Flash-Lite |
| Improvements column is vague | AI Agent1 still in Fixed mode | Fix 4 of Workflow 2 |
| Experience filter ignored | `Entry Level` instead of `Entry level` | Use the exact values in the filter table |
| LinkedIn returns nothing or a login wall | Selectors changed or you were rate-limited | Stop; switch to internship mode |
| Google credential dies weekly | OAuth app in Testing (7-day tokens) | Reconnect, or use n8n Cloud |
| Schedule never fires | Not Published, wrong time zone, or the machine was asleep | Publish; set the time zone; keep the host awake |

## What it costs

| Item | Free option | Paid option (as of Oct 2026) |
|---|---|---|
| n8n | Self-host (Community edition) or the 14-day Cloud trial | Cloud Starter EUR 20 a month billed yearly |
| Hunter | 50 credits a month | Starter $49 a month, or $34 a month billed yearly |
| Gemini | Free tier on `gemini-3.5-flash-lite` and `gemini-3.8-flash` | Pay per token ([pricing](https://ai.google.dev/gemini-api/docs/pricing)) |
| Gmail, Drive, Sheets | Free | n/a |
| Docker Desktop | Personal plan $0 ([pricing](https://www.docker.com/pricing/)) | n/a |

## Resources

- [n8n docs](https://docs.n8n.io/): official documentation. How to use it: search the node name when a setting here does not match your screen.
- [n8n Academy](https://learn.n8n.io/): official courses (free registration). How to use it: take N8N101 Essentials before you edit nodes.
- [Jugal's n8n creator page](https://n8n.io/creators/jugaldb/): his gallery templates. How to use it: check for updated versions.
- [Hunter node docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hunter/): Domain Search, Email Finder, Email Verifier. How to use it: add an Email Verifier step before drafting.
- [Gemini Chat Model node docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/): model and temperature options. How to use it: set temperature low for JSON.
- [Extract From File docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile/): PDF to text. How to use it: confirm your resume PDF has selectable text.
- [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions): free scheduled runners for public repos. How to use it: only if you rebuild this as a script; keep keys in Actions secrets, never in the repo.
- [Cold email](cold-email.md): the writing rules the drafts should follow. How to use it: compare each draft against the pre-send checklist.

Next: [Career fairs and the 30-second pitch](career-fairs.md)
