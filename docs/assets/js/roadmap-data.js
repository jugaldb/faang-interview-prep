// Data for the interactive roadmap (docs/roadmap.md). Rendered by roadmap.js.
// Internal hrefs are site paths (directory URLs). Regenerate the static checklist in roadmap.md
// with: python3 scripts/build_roadmap_static.py
window.ROADMAP_DATA = {
  "version": 1,
  "updated": "2026-10-04",
  "tracks": [
    {
      "id": "intern",
      "label": "Intern"
    },
    {
      "id": "newgrad",
      "label": "New grad"
    },
    {
      "id": "experienced",
      "label": "Experienced (0 to 3 yrs)"
    }
  ],
  "timelines": [
    4,
    8,
    12,
    16
  ],
  "phases": [
    {
      "id": "setup",
      "title": "Setup",
      "summary": "Pick a plan, a role and a language. Set up your logs."
    },
    {
      "id": "foundations",
      "title": "Foundations",
      "summary": "Resume v1, LinkedIn, a job list and DSA basics."
    },
    {
      "id": "core-dsa",
      "title": "Core DSA",
      "summary": "One main problem list, pattern by pattern."
    },
    {
      "id": "applications-and-outreach",
      "title": "Applications and outreach",
      "summary": "Tailored applications, referrals, recruiters, cold email and a tracker."
    },
    {
      "id": "online-assessments",
      "title": "Online assessments",
      "summary": "Formats, platforms and timed practice."
    },
    {
      "id": "interview-prep",
      "title": "Interview prep",
      "summary": "Mocks, company lists, your story bank and design rounds."
    },
    {
      "id": "interview-loop",
      "title": "Interview loop",
      "summary": "Day-of routine, notes, thank-you and follow-up."
    },
    {
      "id": "offer-and-negotiation",
      "title": "Offer and negotiation",
      "summary": "Comp basics, scripts and comparing offers."
    }
  ],
  "tags": {
    "planning": "Planning",
    "resume": "Resume",
    "linkedin": "LinkedIn",
    "internships": "Internships",
    "visa": "Visa",
    "coding": "Coding",
    "applications": "Applications",
    "outreach": "Outreach",
    "automation": "Automation",
    "oa": "Online assessments",
    "behavioral": "Behavioral",
    "system-design": "System design",
    "interview": "Interview day",
    "negotiation": "Negotiation",
    "company": "Company"
  },
  "tasks": [
    {
      "id": "setup-start-here",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read Start here and pick a 4, 8, 12 or 16 week plan",
      "detail": "Choose the plan that fits your free hours per week. Each plan says what to do in which week.",
      "links": [
        {
          "label": "Start here",
          "href": "start-here/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "planning"
      ]
    },
    {
      "id": "setup-plan-post",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read one complete job search plan before you start",
      "detail": "Interns and new grads: read the internship and new grad prep post. Experienced: read the 6-week roadmap.",
      "links": [
        {
          "label": "Ascend: The New Grad and Internship prep for 2026",
          "href": "https://jugaldb.substack.com/p/the-new-grad-and-internship-prep"
        },
        {
          "label": "Ascend: The 6-week job search roadmap",
          "href": "https://jugaldb.substack.com/p/the-only-6-week-job-search-roadmap"
        }
      ],
      "hours": 1,
      "tags": [
        "planning"
      ]
    },
    {
      "id": "setup-role-level",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Write down your target role and level at each company",
      "detail": "Pick one role family (SWE, AI engineer, SRE, data, quant dev) and the matching level, for example L3 at Google or SDE I at Amazon.",
      "links": [
        {
          "label": "What jobs to apply for",
          "href": "jobs/"
        }
      ],
      "hours": 1,
      "tags": [
        "planning"
      ]
    },
    {
      "id": "setup-intern-timeline",
      "phase": "setup",
      "tracks": [
        "intern"
      ],
      "title": "Put the Summer 2027 recruiting dates in your calendar",
      "detail": "Internships are reviewed on a rolling basis and many open in late summer. Copy the months into your calendar with reminders.",
      "links": [
        {
          "label": "How internship recruiting works",
          "href": "internships/"
        },
        {
          "label": "Simplify: Summer 2027 internship timeline",
          "href": "https://simplify.jobs/blog/summer-2027-internship-timeline"
        },
        {
          "label": "Ascend: 494 Summer 2027 internships are already live",
          "href": "https://jugaldb.substack.com/p/494-summer-2027-internships-are-already"
        }
      ],
      "hours": 0.5,
      "tags": [
        "internships",
        "planning"
      ]
    },
    {
      "id": "setup-visa",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Check your visa options if you need sponsorship",
      "detail": "Learn what CPT, OPT and STEM OPT allow. Check a company's H-1B history before you spend time tailoring for it.",
      "links": [
        {
          "label": "International students",
          "href": "jobs/international-students/"
        },
        {
          "label": "Ascend: How to check if a company sponsors H-1B visas",
          "href": "https://jugaldb.substack.com/p/how-to-check-if-a-company-sponsors"
        },
        {
          "label": "USCIS H-1B Employer Data Hub",
          "href": "https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub"
        }
      ],
      "hours": 1,
      "tags": [
        "visa"
      ]
    },
    {
      "id": "setup-calendar",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Block a fixed daily study slot for the whole timeline",
      "detail": "The same slot every day beats long weekend sessions. Size it from the weekly hours in your plan.",
      "links": [
        {
          "label": "Start here",
          "href": "start-here/"
        }
      ],
      "hours": 0.25,
      "tags": [
        "planning"
      ]
    },
    {
      "id": "setup-language",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Pick one coding language for every interview",
      "detail": "Use the language you write fastest. Learn its built-in lists, maps, sets, heaps and sorting cold.",
      "links": [
        {
          "label": "How to learn DSA",
          "href": "coding/"
        },
        {
          "label": "NeetCode: Python for coding interviews",
          "href": "https://neetcode.io/courses/lessons/python-for-coding-interviews"
        }
      ],
      "hours": 1,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "setup-problem-log",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Create LeetCode and NeetCode accounts and a problem log",
      "detail": "Log every problem: date, pattern, minutes taken, whether you needed help, and a date to redo it.",
      "links": [
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        },
        {
          "label": "NeetCode roadmap",
          "href": "https://neetcode.io/roadmap"
        },
        {
          "label": "LeetCode study plans",
          "href": "https://leetcode.com/studyplan/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "setup-index",
      "phase": "setup",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Bookmark the Ascend post index and the tools list",
      "detail": "Every Ascend post is mapped to the section it supports. Use both when a task needs more depth.",
      "links": [
        {
          "label": "Ascend posts by topic",
          "href": "resources/substack/"
        },
        {
          "label": "Tools list",
          "href": "resources/tools/"
        },
        {
          "label": "Ascend newsletter",
          "href": "https://jugaldb.substack.com"
        }
      ],
      "hours": 0.25,
      "tags": [
        "planning"
      ]
    },
    {
      "id": "found-resume-rules",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read the resume rules and the section order for your level",
      "detail": "One page. Education goes first while you are a student, experience first once you have a full-time role.",
      "links": [
        {
          "label": "Resume rules",
          "href": "resume/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-template",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Pick a resume template for your target country",
      "detail": "US: Jake's Resume. The UK, India and Europe have different norms, so use the country table.",
      "links": [
        {
          "label": "Resume templates",
          "href": "resume/templates/"
        },
        {
          "label": "Jake's Resume on Overleaf",
          "href": "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs"
        },
        {
          "label": "Ascend: 4 resume templates based on your country",
          "href": "https://jugaldb.substack.com/p/4-resume-templates-based-on-your"
        }
      ],
      "hours": 0.5,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-draft",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Draft resume v1 in one sitting",
      "detail": "Fill every section, then cut to one page. To start fast, turn your LinkedIn profile into a LaTeX resume with the prompt in the post.",
      "links": [
        {
          "label": "Resume rules",
          "href": "resume/"
        },
        {
          "label": "Ascend: From LinkedIn to ATS resume in 1 minute",
          "href": "https://jugaldb.substack.com/p/from-linkedin-to-ats-resume-in-1"
        }
      ],
      "hours": 3,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-bullets",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Rewrite every bullet with the XYZ formula",
      "detail": "Accomplished X, measured by Y, by doing Z. No metric? Use users, scale, speed or time saved.",
      "links": [
        {
          "label": "Writing bullets",
          "href": "resume/writing-bullets/"
        },
        {
          "label": "Ascend: The resume template I recommend",
          "href": "https://jugaldb.substack.com/p/the-resume-template-i-recommend-and"
        }
      ],
      "hours": 2,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-projects",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Add 2 projects with a link and a result each",
      "detail": "Pick projects you can talk about for 10 minutes. Link the repo or demo and say what it does in one line.",
      "links": [
        {
          "label": "Writing bullets",
          "href": "resume/writing-bullets/"
        },
        {
          "label": "Ascend: How to become an AI engineer in 2026",
          "href": "https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026"
        }
      ],
      "hours": 3,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-ats",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Check that your resume parses in an ATS",
      "detail": "Copy the text out of your PDF into a plain editor and confirm it reads in order. Remove tables, columns and icons that break it.",
      "links": [
        {
          "label": "How ATS works",
          "href": "resume/ats/"
        }
      ],
      "hours": 1,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-checklist",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Run the final resume checklist and save v1 as a PDF",
      "detail": "Name the file Firstname-Lastname-Resume.pdf. Keep the source file so each tailored version takes minutes.",
      "links": [
        {
          "label": "Resume checklist",
          "href": "resume/checklist/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-resume-review",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Get 2 people in tech to review your resume",
      "detail": "Ask a senior engineer and a recent hire. Ask what they would cut, not whether it looks good.",
      "links": [
        {
          "label": "Resume checklist",
          "href": "resume/checklist/"
        },
        {
          "label": "Ascend: How I turned my resume into a job magnet",
          "href": "https://jugaldb.substack.com/p/how-i-turned-my-resume-into-a-job"
        }
      ],
      "hours": 1,
      "tags": [
        "resume"
      ]
    },
    {
      "id": "found-li-photo",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Set a clear LinkedIn photo and banner",
      "detail": "Face visible, plain background, good light. An AI headshot made from your own photo is fine if it still looks like you.",
      "links": [
        {
          "label": "LinkedIn profile steps",
          "href": "linkedin/"
        },
        {
          "label": "Ascend: A professional LinkedIn photo with AI",
          "href": "https://jugaldb.substack.com/p/ai-tool-gave-me-professional-linkedin"
        }
      ],
      "hours": 0.5,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "found-li-headline",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Rewrite your LinkedIn headline and About section",
      "detail": "Put your target title and core skills in the headline, because recruiters search by keyword. Follow the About structure in the post.",
      "links": [
        {
          "label": "LinkedIn profile steps",
          "href": "linkedin/"
        },
        {
          "label": "Ascend: The LinkedIn profile playbook",
          "href": "https://jugaldb.substack.com/p/the-linkedin-profile-playbook-how"
        },
        {
          "label": "Ascend: How I got 47 recruiter messages within a month",
          "href": "https://jugaldb.substack.com/p/how-i-got-47-recruiter-messages-within"
        }
      ],
      "hours": 1.5,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "found-li-experience",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Copy your resume bullets into LinkedIn experience",
      "detail": "Add the skills your target job descriptions ask for. Set a custom profile URL with your name.",
      "links": [
        {
          "label": "LinkedIn profile steps",
          "href": "linkedin/"
        },
        {
          "label": "LinkedIn Step By Step (Jugal's Notion guide)",
          "href": "https://jugaldb.notion.site/LinkedIn-Step-By-Step-by-Jugal-Bhatt-265af2117b838071a066e4db145acf57"
        }
      ],
      "hours": 1,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "found-li-otw",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Turn on Open to Work for recruiters only",
      "detail": "Fill every field: titles, locations, workplace types and start date. Recruiters only keeps the green frame off your photo.",
      "links": [
        {
          "label": "Open to Work settings",
          "href": "linkedin/#step-15-open-to-work-recruiters-only"
        },
        {
          "label": "How recruiters search",
          "href": "linkedin/recruiter-search/"
        }
      ],
      "hours": 0.25,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "found-intern-list",
      "phase": "foundations",
      "tracks": [
        "intern"
      ],
      "title": "Watch the Summer 2027 internships list on GitHub",
      "detail": "Watch the repo or turn on email alerts. If you need sponsorship, skip rows marked no sponsorship or US citizenship required.",
      "links": [
        {
          "label": "Finding and applying",
          "href": "internships/finding-and-applying/"
        },
        {
          "label": "SimplifyJobs Summer 2027 Internships",
          "href": "https://github.com/SimplifyJobs/Summer2027-Internships"
        },
        {
          "label": "SWEList email alerts",
          "href": "https://swelist.com/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "internships",
        "applications"
      ]
    },
    {
      "id": "found-newgrad-list",
      "phase": "foundations",
      "tracks": [
        "newgrad"
      ],
      "title": "Watch the New Grad Positions list on GitHub",
      "detail": "Watch the repo or turn on email alerts. If you need sponsorship, skip rows marked no sponsorship or US citizenship required.",
      "links": [
        {
          "label": "Where to find jobs",
          "href": "jobs/where-to-find-jobs/"
        },
        {
          "label": "SimplifyJobs New Grad Positions",
          "href": "https://github.com/SimplifyJobs/New-Grad-Positions"
        },
        {
          "label": "SWEList email alerts",
          "href": "https://swelist.com/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "found-job-alerts",
      "phase": "foundations",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Set job alerts on 3 sources and check them daily",
      "detail": "Use company career pages, one job board and LinkedIn alerts. Daily checks let you apply in the first days a role is live.",
      "links": [
        {
          "label": "Where to find jobs",
          "href": "jobs/where-to-find-jobs/"
        },
        {
          "label": "Ascend: Stop applying to ghost jobs",
          "href": "https://jugaldb.substack.com/p/stop-applying-to-ghost-jobs"
        }
      ],
      "hours": 1,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "found-targets",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Build a target list of 30 companies in 3 tiers",
      "detail": "Tier 1: dream companies. Tier 2: strong fits. Tier 3: companies likely to say yes, including ones outside big tech.",
      "links": [
        {
          "label": "Company guides",
          "href": "companies/"
        },
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        }
      ],
      "hours": 1.5,
      "tags": [
        "applications",
        "planning"
      ]
    },
    {
      "id": "found-programs",
      "phase": "foundations",
      "tracks": [
        "intern"
      ],
      "title": "Check early-career programs you qualify for",
      "detail": "Some programs target first and second-year students or specific groups. Put each deadline in your tracker.",
      "links": [
        {
          "label": "Programs by company",
          "href": "internships/programs/"
        }
      ],
      "hours": 1,
      "tags": [
        "internships"
      ]
    },
    {
      "id": "found-dsa-method",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read how to learn DSA and set a daily problem count",
      "detail": "Pick a number of problems per day you can keep for the whole timeline. Learn a topic, then practice it the same day.",
      "links": [
        {
          "label": "How to learn DSA",
          "href": "coding/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "found-dsa-bigo",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn Big-O well enough to state the cost of any solution",
      "detail": "Know the time and space cost of common operations on arrays, hash maps, heaps and trees.",
      "links": [
        {
          "label": "Topics and complexity",
          "href": "coding/topics/"
        },
        {
          "label": "Tech Interview Handbook: study cheatsheet",
          "href": "https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/"
        }
      ],
      "hours": 2,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "found-dsa-arrays",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Learn arrays, strings and hash maps",
      "detail": "Learn the operations and their costs. Then solve 5 easy problems on each.",
      "links": [
        {
          "label": "Topics and complexity",
          "href": "coding/topics/"
        },
        {
          "label": "Tech Interview Handbook: Array",
          "href": "https://www.techinterviewhandbook.org/algorithms/array/"
        },
        {
          "label": "Tech Interview Handbook: Hash table",
          "href": "https://www.techinterviewhandbook.org/algorithms/hash-table/"
        }
      ],
      "hours": 6,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "found-dsa-lists",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Learn linked lists, stacks and queues",
      "detail": "Implement each one yourself once. Then solve 3 easy problems on each.",
      "links": [
        {
          "label": "Topics and complexity",
          "href": "coding/topics/"
        },
        {
          "label": "Tech Interview Handbook: Linked list",
          "href": "https://www.techinterviewhandbook.org/algorithms/linked-list/"
        },
        {
          "label": "Tech Interview Handbook: Stack",
          "href": "https://www.techinterviewhandbook.org/algorithms/stack/"
        }
      ],
      "hours": 4,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "found-dsa-trees",
      "phase": "foundations",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Learn recursion, trees and binary search",
      "detail": "Trace recursive calls on paper until they feel normal. Then write tree traversals from memory.",
      "links": [
        {
          "label": "Topics and complexity",
          "href": "coding/topics/"
        },
        {
          "label": "Tech Interview Handbook: Recursion",
          "href": "https://www.techinterviewhandbook.org/algorithms/recursion/"
        },
        {
          "label": "Tech Interview Handbook: Tree",
          "href": "https://www.techinterviewhandbook.org/algorithms/tree/"
        },
        {
          "label": "VisuAlgo: BST",
          "href": "https://visualgo.net/en/bst"
        }
      ],
      "hours": 6,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "found-dsa-refresh",
      "phase": "foundations",
      "tracks": [
        "experienced"
      ],
      "title": "Refresh the basics with one easy problem per data structure",
      "detail": "Arrays, hash maps, linked lists, stacks, queues and trees. If one feels slow, redo that topic in full.",
      "links": [
        {
          "label": "Topics and complexity",
          "href": "coding/topics/"
        },
        {
          "label": "LeetCode 75 study plan",
          "href": "https://leetcode.com/studyplan/leetcode-75/"
        }
      ],
      "hours": 4,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-pick-list",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Pick one main problem list and finish it in order",
      "detail": "For example Grind 75 or NeetCode 150. Switching lists halfway costs you time.",
      "links": [
        {
          "label": "Problem lists",
          "href": "coding/problem-lists/"
        },
        {
          "label": "Grind 75",
          "href": "https://www.techinterviewhandbook.org/grind75/"
        },
        {
          "label": "NeetCode roadmap",
          "href": "https://neetcode.io/roadmap"
        }
      ],
      "hours": 0.5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-process",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Use a fixed per-problem process with a time limit",
      "detail": "Give each problem 20 to 30 minutes before you open a solution. Write the pattern in your log.",
      "links": [
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        },
        {
          "label": "Ascend: I cleared Amazon, Google and Meta with only 120 LeetCode problems",
          "href": "https://jugaldb.substack.com/p/i-cleared-amazon-google-and-meta"
        }
      ],
      "hours": 0.5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-patterns-read",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read the core patterns page once",
      "detail": "Learn the signal that points to each pattern. Come back to it after every problem.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        },
        {
          "label": "Sean Prashad's LeetCode Patterns",
          "href": "https://seanprashad.com/leetcode-patterns/"
        }
      ],
      "hours": 1,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-two-pointers",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the two pointers and sliding window problems",
      "detail": "Sorted input, pairs, or a contiguous subarray with a condition point here. Do every one on your main list.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 8,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-binary-search",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the binary search problems",
      "detail": "Include binary search on the answer: the smallest speed, capacity or time that works.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        },
        {
          "label": "LeetCode Binary Search study plan",
          "href": "https://leetcode.com/studyplan/binary-search/"
        }
      ],
      "hours": 5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-stack-list",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the stack and linked list problems",
      "detail": "Matching brackets, next greater element, fast and slow pointers, reversal and merge.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 6,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-trees",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the tree BFS and DFS problems",
      "detail": "BFS for levels, DFS for paths and subtrees, and BST order for search.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 8,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-heaps",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the heap and top K problems",
      "detail": "Top K elements, K-way merge and running median.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 4,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-graphs",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the graph problems: BFS, DFS, topological sort",
      "detail": "Treat grids as graphs. Add union-find for connectivity questions.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        },
        {
          "label": "LeetCode Graph Theory study plan",
          "href": "https://leetcode.com/studyplan/graph-theory/"
        }
      ],
      "hours": 10,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-backtracking",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the backtracking problems",
      "detail": "Subsets, permutations and combinations. Draw the decision tree before you code.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-dp",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the dynamic programming problems, 1D then 2D",
      "detail": "Start with climbing stairs and house robber, then grids and two-string problems.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        },
        {
          "label": "LeetCode Dynamic Programming study plan",
          "href": "https://leetcode.com/studyplan/dynamic-programming/"
        }
      ],
      "hours": 12,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-intervals-greedy",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Solve the intervals and greedy problems",
      "detail": "Sort by start or end time, then sweep once.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        }
      ],
      "hours": 4,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-tries-bits",
      "phase": "core-dsa",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Solve the trie and bit manipulation problems",
      "detail": "Tries for prefix search and autocomplete. Bit tricks for single number and subset questions.",
      "links": [
        {
          "label": "Coding patterns",
          "href": "coding/patterns/"
        },
        {
          "label": "Tech Interview Handbook: Trie",
          "href": "https://www.techinterviewhandbook.org/algorithms/trie/"
        }
      ],
      "hours": 3,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-redo",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Redo 10 problems from your log without notes",
      "detail": "Pick the ones you needed help on. If you get stuck again, schedule it for next week.",
      "links": [
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        }
      ],
      "hours": 5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-timed",
      "phase": "core-dsa",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Solve 10 medium problems in under 25 minutes each",
      "detail": "Time yourself and talk out loud as if an interviewer is listening.",
      "links": [
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        }
      ],
      "hours": 5,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "dsa-code-quality",
      "phase": "core-dsa",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn what interviewers grade in your code",
      "detail": "Clear names, small helpers and your own test cases are graded too. A passing answer is not enough.",
      "links": [
        {
          "label": "Code quality",
          "href": "coding/code-quality/"
        }
      ],
      "hours": 1,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "app-strategy",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read the funnel math and the referral-first order",
      "detail": "A referral beats recruiter outreach, which beats a cold application. Plan each week around that order.",
      "links": [
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        },
        {
          "label": "Ascend: How I increase my chances of getting interview callbacks",
          "href": "https://jugaldb.substack.com/p/how-i-increase-my-chances-of-getting"
        }
      ],
      "hours": 0.5,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "app-tracker",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Set up your application and outreach tracker",
      "detail": "One row per application: company, role, link, date, referral, status and next follow-up date.",
      "links": [
        {
          "label": "Follow-up and tracking",
          "href": "outreach/follow-up-and-tracking/"
        }
      ],
      "hours": 1,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "app-tailor-learn",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn the tailoring routine for one job description",
      "detail": "Map the job's keywords to your bullets, then rewrite the top third of the page. The post has the exact prompts.",
      "links": [
        {
          "label": "Resume tailoring",
          "href": "resume/tailoring/"
        },
        {
          "label": "Ascend: I asked Claude to make my resume unrejectable",
          "href": "https://jugaldb.substack.com/p/i-asked-claude-to-make-my-resume"
        }
      ],
      "hours": 1,
      "tags": [
        "resume",
        "applications"
      ]
    },
    {
      "id": "app-fresh-jobs",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Find roles posted in the last 24 hours with Google search",
      "detail": "Search ATS domains with site: and a date filter every weekday morning.",
      "links": [
        {
          "label": "Where to find jobs",
          "href": "jobs/where-to-find-jobs/"
        },
        {
          "label": "Ascend: Stop applying to ghost jobs",
          "href": "https://jugaldb.substack.com/p/stop-applying-to-ghost-jobs"
        }
      ],
      "hours": 1,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "app-intern-week-one",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern"
      ],
      "title": "Apply to each new internship within 48 hours of posting",
      "detail": "Many SWE internships stay open only a few days. Keep a ready resume so each application takes minutes.",
      "links": [
        {
          "label": "Finding and applying",
          "href": "internships/finding-and-applying/"
        },
        {
          "label": "Ascend: 494 Summer 2027 internships are already live",
          "href": "https://jugaldb.substack.com/p/494-summer-2027-internships-are-already"
        }
      ],
      "hours": 6,
      "tags": [
        "internships",
        "applications"
      ]
    },
    {
      "id": "app-first-batch",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Tailor and send your first 10 applications",
      "detail": "Start with tier 2 and tier 3 companies so you get practice before your top picks.",
      "links": [
        {
          "label": "Resume tailoring",
          "href": "resume/tailoring/"
        },
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        }
      ],
      "hours": 5,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "app-weekly",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Send a tailored batch of applications every week",
      "detail": "Pick a fixed weekly number and log each one. Tick this when the weekly habit is running.",
      "links": [
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        },
        {
          "label": "Ascend: 7 videos to run your entire job search with AI",
          "href": "https://jugaldb.substack.com/p/7-videos-to-run-your-entire-job-search"
        }
      ],
      "hours": 10,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "app-find-people",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Find a recruiter and 2 engineers at each tier 1 company",
      "detail": "Use LinkedIn search filters and your alumni network. Save names and profile links in the tracker.",
      "links": [
        {
          "label": "Finding people and emails",
          "href": "outreach/finding-people/"
        },
        {
          "label": "The Holy Grail of Networking (Jugal's Notion guide)",
          "href": "https://jugaldb.notion.site/The-Holy-Grail-of-Networking-A-Z-with-templates-1a0af2117b838027aa5cd47911f2a20f"
        }
      ],
      "hours": 3,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-emails",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Find and verify work emails for your contacts",
      "detail": "Use an email finder, then verify each address before you send. Free tiers cover a small weekly list.",
      "links": [
        {
          "label": "Finding people and emails",
          "href": "outreach/finding-people/"
        },
        {
          "label": "Hunter (freemium)",
          "href": "https://hunter.io/"
        }
      ],
      "hours": 1,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-connect",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Send 10 LinkedIn connection notes a week",
      "detail": "Short, specific notes to alumni and engineers on teams you want. Ask for a 15-minute chat, not a job.",
      "links": [
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        },
        {
          "label": "Ascend: 7 videos on networking your way to offers",
          "href": "https://jugaldb.substack.com/p/7-videos-on-networking-your-way-to"
        }
      ],
      "hours": 2,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-referrals",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Ask for referrals after a real conversation",
      "detail": "Send the job link, your resume and 2 lines on why you fit. Make it easy for the referrer to submit.",
      "links": [
        {
          "label": "Referrals",
          "href": "outreach/referrals/"
        },
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        },
        {
          "label": "Ascend: The job hunt I didn't burn out doing",
          "href": "https://jugaldb.substack.com/p/the-job-hunt-i-didnt-burn-out-doing"
        }
      ],
      "hours": 2,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-recruiters",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Message recruiters at your tier 1 and tier 2 companies",
      "detail": "One short message per recruiter with the role ID and your strongest proof point.",
      "links": [
        {
          "label": "Outreach strategy",
          "href": "outreach/"
        },
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        }
      ],
      "hours": 2,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-cold-email",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Send cold emails to hiring managers",
      "detail": "Use the subject lines and send times on the cold email page. Log every reply.",
      "links": [
        {
          "label": "Cold email",
          "href": "outreach/cold-email/"
        },
        {
          "label": "Ascend: The one skill that can unlock every opportunity",
          "href": "https://jugaldb.substack.com/p/the-one-skill-that-can-unlock-every"
        }
      ],
      "hours": 3,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-follow-up",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Follow up after 5 to 7 business days, at most twice",
      "detail": "Add something new in each follow-up: a project, a result or a question. Then stop.",
      "links": [
        {
          "label": "Follow-up and tracking",
          "href": "outreach/follow-up-and-tracking/"
        }
      ],
      "hours": 1,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-n8n-referral",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Automate referral emails with the n8n Referral Engine (optional)",
      "detail": "It reads contacts from a sheet, finds emails with Hunter, drafts with Gemini and sends through Gmail. Read every draft first.",
      "links": [
        {
          "label": "n8n automation",
          "href": "outreach/n8n-automation/"
        },
        {
          "label": "Ascend: The Referral Engine (n8n, Hunter, Gemini, Gmail)",
          "href": "https://jugaldb.substack.com/p/the-referral-engine-n8n-hunter-gemini"
        }
      ],
      "hours": 4,
      "tags": [
        "outreach",
        "automation"
      ]
    },
    {
      "id": "app-n8n-search",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Set up the n8n job search workflow (optional)",
      "detail": "A daily run pulls fresh roles, scores each against your resume and writes them to a Google Sheet.",
      "links": [
        {
          "label": "n8n automation",
          "href": "outreach/n8n-automation/"
        },
        {
          "label": "Ascend: Ultimate Job Search Workflow with n8n",
          "href": "https://jugaldb.substack.com/p/ultimate-job-search-workflow-with"
        }
      ],
      "hours": 3,
      "tags": [
        "applications",
        "automation"
      ]
    },
    {
      "id": "app-pitch",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Write and rehearse a 30-second pitch",
      "detail": "Hook, who you are, what you built, why this company, then the ask. Practice until it sounds like talking.",
      "links": [
        {
          "label": "Career fairs",
          "href": "outreach/career-fairs/"
        },
        {
          "label": "Ascend: Craft the elevator pitch that gets you hired",
          "href": "https://jugaldb.substack.com/p/craft-the-elevator-pitch-that-gets"
        }
      ],
      "hours": 1.5,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-fair",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad"
      ],
      "title": "Attend one career fair or tech event and follow up in 24 hours",
      "detail": "Bring your pitch and resume. Write down each recruiter's name and email for the follow-up.",
      "links": [
        {
          "label": "Career fairs",
          "href": "outreach/career-fairs/"
        }
      ],
      "hours": 3,
      "tags": [
        "outreach"
      ]
    },
    {
      "id": "app-li-search",
      "phase": "applications-and-outreach",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Add the keywords recruiters search for to your profile",
      "detail": "Recruiters filter by title, skills and location. Use the same words as your target job descriptions.",
      "links": [
        {
          "label": "How recruiters search",
          "href": "linkedin/recruiter-search/"
        }
      ],
      "hours": 1,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "app-li-content",
      "phase": "applications-and-outreach",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Post on LinkedIn once a week (optional)",
      "detail": "Share what you built or learned. Comment on posts by engineers at your target companies.",
      "links": [
        {
          "label": "Posting for inbound",
          "href": "linkedin/content/"
        },
        {
          "label": "Ascend: How I got 47 recruiter messages within a month",
          "href": "https://jugaldb.substack.com/p/how-i-got-47-recruiter-messages-within"
        }
      ],
      "hours": 2,
      "tags": [
        "linkedin"
      ]
    },
    {
      "id": "app-startups",
      "phase": "applications-and-outreach",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Add a few startups to your list for faster processes",
      "detail": "Early startups still read applications and can move in weeks. Jugal got his first startup offer in 17 days.",
      "links": [
        {
          "label": "Ascend: How I got my first startup offer in 17 days",
          "href": "https://jugaldb.substack.com/p/how-i-got-my-first-startup-offer"
        },
        {
          "label": "Wellfound jobs",
          "href": "https://wellfound.com/jobs"
        }
      ],
      "hours": 1,
      "tags": [
        "applications"
      ]
    },
    {
      "id": "oa-basics",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn how online assessments are scored",
      "detail": "Most score hidden test cases within a time limit. Some also review your code and check for plagiarism.",
      "links": [
        {
          "label": "How OAs work",
          "href": "online-assessments/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "oa-formats",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Look up the OA format for each tier 1 company",
      "detail": "Platform, number of questions, time limit and extra sections such as work-style surveys.",
      "links": [
        {
          "label": "OA formats by company",
          "href": "online-assessments/company-oa-formats/"
        },
        {
          "label": "Company guides",
          "href": "companies/"
        }
      ],
      "hours": 1,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "oa-platform",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Practice on the platform your target companies use",
      "detail": "Get used to the editor, the input format and running your own tests.",
      "links": [
        {
          "label": "OA platforms",
          "href": "online-assessments/platforms/"
        },
        {
          "label": "HackerRank Interview Preparation Kit",
          "href": "https://www.hackerrank.com/interview/interview-preparation-kit"
        },
        {
          "label": "CodeSignal Learn (freemium)",
          "href": "https://codesignal.com/learn"
        }
      ],
      "hours": 2,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "oa-timed",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Take 3 timed practice OAs, one sitting each",
      "detail": "Same time limit, no notes, camera on if the real one needs it. Review every failed test case after.",
      "links": [
        {
          "label": "How to pass OAs",
          "href": "online-assessments/strategy/"
        }
      ],
      "hours": 5,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "oa-day",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare your OA day: quiet room, charger, rules read",
      "detail": "Read the integrity rules first. A partial solution that passes some tests beats an empty one.",
      "links": [
        {
          "label": "How to pass OAs",
          "href": "online-assessments/strategy/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "oa-quality",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Write OA code that a reviewer can read",
      "detail": "Some companies read your OA code after the tests pass. Use clear names and delete dead code.",
      "links": [
        {
          "label": "Code quality in OAs",
          "href": "online-assessments/code-quality/"
        }
      ],
      "hours": 1,
      "tags": [
        "oa",
        "coding"
      ]
    },
    {
      "id": "oa-nontech",
      "phase": "online-assessments",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Practice the non-coding OA sections",
      "detail": "Work-style surveys, work simulations and game-based tests. Answer consistently and honestly.",
      "links": [
        {
          "label": "OA platforms",
          "href": "online-assessments/platforms/"
        },
        {
          "label": "Amazon: SDE online assessment",
          "href": "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa"
        }
      ],
      "hours": 1,
      "tags": [
        "oa"
      ]
    },
    {
      "id": "prep-framework",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Practice the 45-minute coding interview framework out loud",
      "detail": "Clarify, examples, approach, code, test, complexity. Say each step before you do it.",
      "links": [
        {
          "label": "The 45-minute interview",
          "href": "coding/interview-framework/"
        }
      ],
      "hours": 3,
      "tags": [
        "coding",
        "interview"
      ]
    },
    {
      "id": "prep-company-pick",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Open the guides for your top 3 companies",
      "detail": "Note what each guide says about the online assessment, the rounds and the values they test.",
      "links": [
        {
          "label": "Company guides",
          "href": "companies/"
        },
        {
          "label": "Company-wise DSA patterns (Jugal's Notion guide)",
          "href": "https://jugaldb.notion.site/Company-Wise-DSA-patterns-26caf2117b83808eb7b2efae6afd15dc"
        },
        {
          "label": "Company-wise LeetCode lists (GitHub)",
          "href": "https://github.com/liquidslr/leetcode-company-wise-problems"
        }
      ],
      "hours": 0.5,
      "tags": [
        "company"
      ]
    },
    {
      "id": "prep-company-series",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read Jugal's prep post for each FAANG company you target",
      "detail": "Each post lists the topics that company favors and a 5-week plan.",
      "links": [
        {
          "label": "Ascend: Meta (Part 1)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part"
        },
        {
          "label": "Ascend: Amazon (Part 2)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-7f8"
        },
        {
          "label": "Ascend: Google (Part 3)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e"
        },
        {
          "label": "Ascend: Apple (Part 4)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-8c8"
        },
        {
          "label": "Ascend: Netflix (Part 5)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-020"
        }
      ],
      "hours": 1,
      "tags": [
        "company",
        "coding"
      ]
    },
    {
      "id": "prep-mock-peer",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Do 3 peer mock interviews",
      "detail": "Swap interviewer and candidate roles. Ask for feedback on how you communicate as well as on correctness.",
      "links": [
        {
          "label": "Mock interviews",
          "href": "coding/mock-interviews/"
        },
        {
          "label": "Aced practice (free peer mocks)",
          "href": "https://www.aced.io/practice"
        }
      ],
      "hours": 4.5,
      "tags": [
        "coding",
        "interview"
      ]
    },
    {
      "id": "prep-mock-ai",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Do 1 AI mock interview and review the transcript",
      "detail": "Look for long silences, skipped clarifying questions and missing complexity analysis.",
      "links": [
        {
          "label": "Mock interviews",
          "href": "coding/mock-interviews/"
        },
        {
          "label": "interviewing.io (free AI interviewer)",
          "href": "https://interviewing.io/"
        }
      ],
      "hours": 1,
      "tags": [
        "coding",
        "interview"
      ]
    },
    {
      "id": "prep-ai-rounds",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare for coding rounds that use an AI assistant",
      "detail": "Some loops now let you code with AI. Practice reading, testing and explaining code you did not write.",
      "links": [
        {
          "label": "Ascend: How to prepare for FAANG AI engineer internship season",
          "href": "https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer"
        },
        {
          "label": "Aced: Google AI coding interview",
          "href": "https://www.aced.io/blog/google-ai-coding-interview"
        }
      ],
      "hours": 1.5,
      "tags": [
        "coding",
        "interview"
      ]
    },
    {
      "id": "prep-behavioral-learn",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn how behavioral rounds are scored",
      "detail": "Answer with STAR: situation, task, action, result. Most of the answer should be your actions.",
      "links": [
        {
          "label": "Behavioral interviews",
          "href": "behavioral/"
        },
        {
          "label": "Tech Interview Handbook: Behavioral interview",
          "href": "https://www.techinterviewhandbook.org/behavioral-interview/"
        }
      ],
      "hours": 1,
      "tags": [
        "behavioral"
      ]
    },
    {
      "id": "prep-story-bank",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Write a story bank of 8 to 10 stories",
      "detail": "Conflict, failure, ambiguity, ownership, a tight deadline, helping a teammate. Interns can use projects, clubs and part-time jobs.",
      "links": [
        {
          "label": "Story bank",
          "href": "behavioral/story-bank/"
        },
        {
          "label": "Ascend: How to prepare for behavioral interviews",
          "href": "https://jugaldb.substack.com/p/how-to-prepare-for-behavioral-interviews"
        }
      ],
      "hours": 4,
      "tags": [
        "behavioral"
      ]
    },
    {
      "id": "prep-story-map",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Map each story to the most common questions",
      "detail": "Every common question should point to at least one story. Write a new story for each gap.",
      "links": [
        {
          "label": "Story bank",
          "href": "behavioral/story-bank/"
        }
      ],
      "hours": 2,
      "tags": [
        "behavioral"
      ]
    },
    {
      "id": "prep-story-rehearse",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Rehearse each story out loud in about 2 minutes",
      "detail": "Record yourself once. Cut the background and end on a result with a number.",
      "links": [
        {
          "label": "Behavioral interviews",
          "href": "behavioral/"
        }
      ],
      "hours": 2,
      "tags": [
        "behavioral"
      ]
    },
    {
      "id": "prep-why",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Write a why-this-company answer for each tier 1 company",
      "detail": "3 sentences: the product, the problem you want to work on, and proof you can help.",
      "links": [
        {
          "label": "Story bank",
          "href": "behavioral/story-bank/"
        }
      ],
      "hours": 1,
      "tags": [
        "behavioral",
        "company"
      ]
    },
    {
      "id": "prep-resume-explain",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare to explain every line on your resume",
      "detail": "For each project: the problem, your design choices, what broke and what you would change.",
      "links": [
        {
          "label": "Resume rules",
          "href": "resume/"
        }
      ],
      "hours": 1.5,
      "tags": [
        "behavioral",
        "resume"
      ]
    },
    {
      "id": "prep-intern-format",
      "phase": "interview-prep",
      "tracks": [
        "intern"
      ],
      "title": "Read what intern interviews look like",
      "detail": "Intern loops are usually shorter than new grad loops. Check the format at each target company.",
      "links": [
        {
          "label": "Intern interviews",
          "href": "internships/intern-interviews/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "internships"
      ]
    },
    {
      "id": "prep-sd-check",
      "phase": "interview-prep",
      "tracks": [
        "newgrad"
      ],
      "title": "Check if your target loops include system design",
      "detail": "Most new grad loops do not. Some include a low-level design round instead.",
      "links": [
        {
          "label": "System design: who gets it",
          "href": "system-design/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "system-design"
      ]
    },
    {
      "id": "prep-lld",
      "phase": "interview-prep",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Practice 5 low-level design problems",
      "detail": "Parking lot, LRU cache, rate limiter, elevator, vending machine. Classes, interfaces and one design pattern each.",
      "links": [
        {
          "label": "Low-level design",
          "href": "system-design/low-level-design/"
        },
        {
          "label": "Awesome Low-Level Design (GitHub)",
          "href": "https://github.com/ashishps1/awesome-low-level-design"
        }
      ],
      "hours": 6,
      "tags": [
        "system-design"
      ]
    },
    {
      "id": "prep-sd-fundamentals",
      "phase": "interview-prep",
      "tracks": [
        "experienced"
      ],
      "title": "Learn the system design fundamentals",
      "detail": "Caching, databases, sharding, queues, consistency and load balancing, one at a time.",
      "links": [
        {
          "label": "System design fundamentals",
          "href": "system-design/fundamentals/"
        },
        {
          "label": "System Design Primer (GitHub)",
          "href": "https://github.com/donnemartin/system-design-primer"
        },
        {
          "label": "Hello Interview: System design in a hurry",
          "href": "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
        }
      ],
      "hours": 10,
      "tags": [
        "system-design"
      ]
    },
    {
      "id": "prep-sd-framework",
      "phase": "interview-prep",
      "tracks": [
        "experienced"
      ],
      "title": "Learn the system design interview framework",
      "detail": "Requirements, estimates, API, data model, high-level design, deep dives. Practice the time boxes.",
      "links": [
        {
          "label": "System design framework",
          "href": "system-design/framework/"
        }
      ],
      "hours": 2,
      "tags": [
        "system-design"
      ]
    },
    {
      "id": "prep-sd-problems",
      "phase": "interview-prep",
      "tracks": [
        "experienced"
      ],
      "title": "Design 6 classic systems out loud",
      "detail": "URL shortener, rate limiter, news feed, chat, file storage, and one product from your target company.",
      "links": [
        {
          "label": "Classic design problems",
          "href": "system-design/problems/"
        },
        {
          "label": "Hello Interview: Bitly breakdown",
          "href": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly"
        }
      ],
      "hours": 12,
      "tags": [
        "system-design"
      ]
    },
    {
      "id": "prep-sd-mocks",
      "phase": "interview-prep",
      "tracks": [
        "experienced"
      ],
      "title": "Do 2 system design mock interviews",
      "detail": "Ask the mock interviewer to push on scale and failure cases.",
      "links": [
        {
          "label": "Mock interviews",
          "href": "coding/mock-interviews/"
        },
        {
          "label": "System design resources",
          "href": "system-design/resources/"
        }
      ],
      "hours": 3,
      "tags": [
        "system-design",
        "interview"
      ]
    },
    {
      "id": "prep-why-fail",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Check the common reasons strong candidates fail",
      "detail": "Compare the list with your mock feedback and fix the top 2 gaps.",
      "links": [
        {
          "label": "Ascend: Why smart candidates still fail FAANG interviews",
          "href": "https://jugaldb.substack.com/p/why-smart-candidates-still-fail-faang"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "prep-final-review",
      "phase": "interview-prep",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Redo 15 problems you marked as weak",
      "detail": "Do this in the last week before your first onsite. Start no new topics that week.",
      "links": [
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        }
      ],
      "hours": 6,
      "tags": [
        "coding"
      ]
    },
    {
      "id": "loop-schedule",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Schedule rounds with a few days of buffer",
      "detail": "Ask the recruiter what each round covers and pick dates that leave you time to review.",
      "links": [
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-setup",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Test your camera, mic, editor and internet the day before",
      "detail": "Use the exact tool the invite names. Keep a phone hotspot as a backup.",
      "links": [
        {
          "label": "The 45-minute interview",
          "href": "coding/interview-framework/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-day-before",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Review your story bank and 10 marked problems the day before",
      "detail": "Read the stories out loud once. Re-read your notes on each problem; do not start new ones.",
      "links": [
        {
          "label": "Story bank",
          "href": "behavioral/story-bank/"
        },
        {
          "label": "How to practice",
          "href": "coding/how-to-practice/"
        }
      ],
      "hours": 2,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-day-of",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Warm up with one easy problem on interview day",
      "detail": "Then stop studying. Keep water and a notepad within reach.",
      "links": [
        {
          "label": "The 45-minute interview",
          "href": "coding/interview-framework/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-questions",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare 2 questions to ask each interviewer",
      "detail": "Ask about the team's current work, how success is measured and what new hires find hard.",
      "links": [
        {
          "label": "Behavioral interviews",
          "href": "behavioral/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-notes",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Write notes within an hour of each round",
      "detail": "Questions asked, what went well, what to fix. Use them before the next round or loop.",
      "links": [
        {
          "label": "Follow-up and tracking",
          "href": "outreach/follow-up-and-tracking/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-thank-you",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Send thank-you notes within 24 hours",
      "detail": "Keep it short and mention one specific detail. Send it through the recruiter if you lack interviewer emails.",
      "links": [
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview",
        "outreach"
      ]
    },
    {
      "id": "loop-follow-up",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Follow up with the recruiter if the reply date passes",
      "detail": "One polite email asking for an update. Keep your other processes moving meanwhile.",
      "links": [
        {
          "label": "Follow-up and tracking",
          "href": "outreach/follow-up-and-tracking/"
        },
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        }
      ],
      "hours": 0.25,
      "tags": [
        "interview",
        "outreach"
      ]
    },
    {
      "id": "loop-team-match",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare for team matching calls",
      "detail": "Some companies, such as Google and Meta, match you to a team after you pass the interviews. Prepare questions and say what you want to build.",
      "links": [
        {
          "label": "Google guide",
          "href": "companies/google/"
        },
        {
          "label": "Meta guide",
          "href": "companies/meta/"
        }
      ],
      "hours": 1,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "loop-rejection",
      "phase": "interview-loop",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "If rejected, ask for feedback and the reapply window",
      "detail": "Log what to fix, then go back to the phase that covers it.",
      "links": [
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "interview"
      ]
    },
    {
      "id": "off-process",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Read the offer process from recruiter call to signature",
      "detail": "Know every step before the first recruiter call, because the salary question can come early.",
      "links": [
        {
          "label": "Negotiation process",
          "href": "negotiation/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-deflect",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Prepare your answer to the salary expectations question",
      "detail": "Avoid naming a number before you have an offer. Use the script word for word.",
      "links": [
        {
          "label": "Negotiation scripts",
          "href": "negotiation/scripts/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-comp",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Learn base, bonus, stock, vesting and sign-on",
      "detail": "Interns: compare hourly pay, housing and relocation instead.",
      "links": [
        {
          "label": "Comp basics",
          "href": "negotiation/comp-basics/"
        }
      ],
      "hours": 1,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-data",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Look up real pay data for your level and city",
      "detail": "Compare by level, not title. Save 3 data points to use on the call.",
      "links": [
        {
          "label": "Levels.fyi",
          "href": "https://www.levels.fyi/"
        },
        {
          "label": "Negotiation resources",
          "href": "negotiation/resources/"
        }
      ],
      "hours": 1,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-parallel",
      "phase": "offer-and-negotiation",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Line up other processes so offers land close together",
      "detail": "Ask each recruiter for their timeline. Tell slower companies when you have an offer deadline.",
      "links": [
        {
          "label": "Negotiation process",
          "href": "negotiation/"
        },
        {
          "label": "Application strategy",
          "href": "jobs/application-strategy/"
        }
      ],
      "hours": 1,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-ask",
      "phase": "offer-and-negotiation",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Ask for more with the negotiation email script",
      "detail": "Thank them, state a number with a reason, and ask what is possible.",
      "links": [
        {
          "label": "Negotiation scripts",
          "href": "negotiation/scripts/"
        },
        {
          "label": "Haseeb Qureshi: Ten rules for negotiating a job offer",
          "href": "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/"
        }
      ],
      "hours": 1,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-extension",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Ask for an extension if a deadline is too short",
      "detail": "Ask early and propose a date. Short deadlines can often be moved.",
      "links": [
        {
          "label": "Negotiation scripts",
          "href": "negotiation/scripts/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-compare",
      "phase": "offer-and-negotiation",
      "tracks": [
        "newgrad",
        "experienced"
      ],
      "title": "Compare offers on total pay over 4 years",
      "detail": "Include the vesting schedule, sign-on, refreshers if known, and cost of living.",
      "links": [
        {
          "label": "Comp basics",
          "href": "negotiation/comp-basics/"
        }
      ],
      "hours": 1,
      "tags": [
        "negotiation"
      ]
    },
    {
      "id": "off-visa",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Confirm sponsorship, start date and location in writing",
      "detail": "International students: confirm the company supports STEM OPT and will file for H-1B before you sign.",
      "links": [
        {
          "label": "International students",
          "href": "jobs/international-students/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "visa",
        "negotiation"
      ]
    },
    {
      "id": "off-return",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern"
      ],
      "title": "Plan for a return offer from your first week",
      "detail": "Set goals with your manager in week one and ask for feedback at the midpoint.",
      "links": [
        {
          "label": "How internship recruiting works",
          "href": "internships/"
        },
        {
          "label": "Simplify: How to get a return offer",
          "href": "https://simplify.jobs/blog/how-to-get-a-return-offer-during-your-internship/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "internships"
      ]
    },
    {
      "id": "off-close",
      "phase": "offer-and-negotiation",
      "tracks": [
        "intern",
        "newgrad",
        "experienced"
      ],
      "title": "Sign, withdraw elsewhere and thank everyone who helped",
      "detail": "Tell the other companies politely. Send referrers and mentors a short thank-you.",
      "links": [
        {
          "label": "Message templates",
          "href": "outreach/templates/"
        }
      ],
      "hours": 0.5,
      "tags": [
        "negotiation",
        "outreach"
      ]
    }
  ],
  "companies": [
    {
      "slug": "google",
      "name": "Google",
      "framework": "Googleyness and Leadership",
      "behavioralLabel": "Googleyness and Leadership",
      "behavioral": "behavioral/google-googleyness/",
      "posts": [
        {
          "label": "Ascend: How to crack FAANG interviews, Google (Part 3)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-e6e"
        }
      ]
    },
    {
      "slug": "meta",
      "name": "Meta",
      "framework": "Meta focus-area",
      "behavioralLabel": "Meta behavioral round",
      "behavioral": "behavioral/meta/",
      "posts": [
        {
          "label": "Ascend: How to crack FAANG interviews, Meta (Part 1)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part"
        },
        {
          "label": "Ascend: The definitive guide for Meta and Amazon interviews",
          "href": "https://jugaldb.substack.com/p/the-definitive-guide-for-meta-and"
        }
      ]
    },
    {
      "slug": "amazon",
      "name": "Amazon",
      "framework": "Leadership Principles",
      "behavioralLabel": "Amazon Leadership Principles",
      "behavioral": "behavioral/amazon-leadership-principles/",
      "posts": [
        {
          "label": "Ascend: How to crack FAANG interviews, Amazon (Part 2)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-7f8"
        },
        {
          "label": "Ascend: Your 6-week Amazon interview roadmap",
          "href": "https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the"
        }
      ],
      "valuesLink": {
        "label": "Amazon Leadership Principles (official)",
        "href": "https://www.amazon.jobs/content/en/our-workplace/leadership-principles"
      }
    },
    {
      "slug": "apple",
      "name": "Apple",
      "framework": "why-Apple and team-fit",
      "behavioralLabel": "Apple behavioral round",
      "behavioral": "behavioral/apple/",
      "posts": [
        {
          "label": "Ascend: How to crack FAANG interviews, Apple (Part 4)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-8c8"
        }
      ]
    },
    {
      "slug": "netflix",
      "name": "Netflix",
      "framework": "Netflix culture",
      "behavioralLabel": "Netflix culture round",
      "behavioral": "behavioral/netflix/",
      "posts": [
        {
          "label": "Ascend: How to crack FAANG interviews, Netflix (Part 5)",
          "href": "https://jugaldb.substack.com/p/how-to-crack-faang-interviews-part-020"
        }
      ]
    },
    {
      "slug": "microsoft",
      "name": "Microsoft",
      "framework": "Microsoft values",
      "behavioralLabel": "Microsoft behavioral round",
      "behavioral": "behavioral/microsoft/"
    },
    {
      "slug": "nvidia",
      "name": "Nvidia",
      "framework": "why-Nvidia and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "uber",
      "name": "Uber",
      "framework": "why-Uber and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "linkedin",
      "name": "LinkedIn",
      "framework": "LinkedIn values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "salesforce",
      "name": "Salesforce",
      "framework": "Salesforce values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "adobe",
      "name": "Adobe",
      "framework": "Adobe values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "oracle",
      "name": "Oracle",
      "framework": "why-Oracle and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "airbnb",
      "name": "Airbnb",
      "framework": "Airbnb core values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "intuit",
      "name": "Intuit",
      "framework": "Intuit values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "paypal",
      "name": "PayPal",
      "framework": "PayPal leadership principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "visa",
      "name": "Visa",
      "framework": "Visa leadership principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "ibm",
      "name": "IBM",
      "framework": "IBM STAR",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "cisco",
      "name": "Cisco",
      "framework": "Cisco STAR",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "qualcomm",
      "name": "Qualcomm",
      "framework": "why-Qualcomm and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "tesla",
      "name": "Tesla",
      "framework": "why-Tesla and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "walmart",
      "name": "Walmart Global Tech",
      "framework": "Walmart values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "ebay",
      "name": "eBay",
      "framework": "eBay values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "expedia",
      "name": "Expedia",
      "framework": "Expedia Group behaviors",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "servicenow",
      "name": "ServiceNow",
      "framework": "ServiceNow values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "palo-alto-networks",
      "name": "Palo Alto Networks",
      "framework": "Palo Alto Networks values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "stripe",
      "name": "Stripe",
      "framework": "Stripe operating principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "databricks",
      "name": "Databricks",
      "framework": "Databricks culture principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "snowflake",
      "name": "Snowflake",
      "framework": "Snowflake values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "atlassian",
      "name": "Atlassian",
      "framework": "Atlassian values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "spotify",
      "name": "Spotify",
      "framework": "Spotify values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "doordash",
      "name": "DoorDash",
      "framework": "DoorDash operating principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "lyft",
      "name": "Lyft",
      "framework": "why-Lyft and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "pinterest",
      "name": "Pinterest",
      "framework": "Pinterest values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "snap",
      "name": "Snap",
      "framework": "Snap values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "tiktok",
      "name": "TikTok (ByteDance)",
      "framework": "ByteStyle",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "coinbase",
      "name": "Coinbase",
      "framework": "Coinbase cultural tenets",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "robinhood",
      "name": "Robinhood",
      "framework": "Robinhood values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "palantir",
      "name": "Palantir",
      "framework": "Palantir principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "roblox",
      "name": "Roblox",
      "framework": "Roblox values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "instacart",
      "name": "Instacart",
      "framework": "why-Instacart and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "rippling",
      "name": "Rippling",
      "framework": "Rippling leadership principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "cloudflare",
      "name": "Cloudflare",
      "framework": "Cloudflare capabilities",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "waymo",
      "name": "Waymo",
      "framework": "Waymo values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "anduril",
      "name": "Anduril",
      "framework": "Anduril How We Work",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "openai",
      "name": "OpenAI",
      "framework": "OpenAI values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "anthropic",
      "name": "Anthropic",
      "framework": "Anthropic values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "bloomberg",
      "name": "Bloomberg",
      "framework": "why-Bloomberg and values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "goldman-sachs",
      "name": "Goldman Sachs",
      "framework": "Goldman Sachs values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "jpmorgan",
      "name": "JPMorgan Chase",
      "framework": "JPMorgan Chase business principles",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "capital-one",
      "name": "Capital One",
      "framework": "Capital One values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "morgan-stanley",
      "name": "Morgan Stanley",
      "framework": "Morgan Stanley core values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "citadel",
      "name": "Citadel",
      "framework": "Citadel values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/",
      "posts": [
        {
          "label": "Ascend: How to break into $300K+ HFT roles",
          "href": "https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles"
        }
      ]
    },
    {
      "slug": "two-sigma",
      "name": "Two Sigma",
      "framework": "why-Two Sigma and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/",
      "posts": [
        {
          "label": "Ascend: How to break into $300K+ HFT roles",
          "href": "https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles"
        }
      ]
    },
    {
      "slug": "jane-street",
      "name": "Jane Street",
      "framework": "why-Jane Street and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/",
      "posts": [
        {
          "label": "Ascend: How to break into $300K+ HFT roles",
          "href": "https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles"
        }
      ]
    },
    {
      "slug": "de-shaw",
      "name": "D. E. Shaw",
      "framework": "why-D. E. Shaw and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/",
      "posts": [
        {
          "label": "Ascend: How to break into $300K+ HFT roles",
          "href": "https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles"
        }
      ]
    },
    {
      "slug": "hudson-river-trading",
      "name": "Hudson River Trading",
      "framework": "why-Hudson River Trading and team-fit",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/",
      "posts": [
        {
          "label": "Ascend: How to break into $300K+ HFT roles",
          "href": "https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles"
        }
      ]
    },
    {
      "slug": "flipkart",
      "name": "Flipkart",
      "framework": "Flipkart values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "phonepe",
      "name": "PhonePe",
      "framework": "PhonePe values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "agoda",
      "name": "Agoda",
      "framework": "Agoda values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    },
    {
      "slug": "nutanix",
      "name": "Nutanix",
      "framework": "Nutanix values",
      "behavioralLabel": "Values at other companies",
      "behavioral": "behavioral/other-companies/"
    }
  ],
  "companyTasks": [
    {
      "key": "process",
      "phase": "applications-and-outreach",
      "after": "app-strategy",
      "title": "Read the {name} process",
      "detail": "Read the {name} guide: online assessment, rounds and timeline. Note anything that differs from this plan.",
      "hours": 1,
      "tags": [
        "company"
      ],
      "links": [
        {
          "label": "{name} guide",
          "href": "companies/{slug}/"
        }
      ]
    },
    {
      "key": "top20",
      "phase": "interview-prep",
      "after": "prep-company-series",
      "title": "Solve the top 20 {name} problems",
      "detail": "Work down the most frequent problems list, or all of it if it is shorter than 20. Give each problem 20 to 30 minutes before you open a solution.",
      "hours": 15,
      "tags": [
        "company",
        "coding"
      ],
      "links": [
        {
          "label": "{name} most frequent problems",
          "href": "companies/{slug}/#most-frequent-problems"
        }
      ]
    },
    {
      "key": "stories",
      "phase": "interview-prep",
      "after": "prep-story-map",
      "title": "Prepare {framework} stories",
      "detail": "Map your story bank to what {name} looks for. Rehearse each answer out loud.",
      "hours": 3,
      "tags": [
        "company",
        "behavioral"
      ],
      "links": [
        {
          "label": "{behavioralLabel}",
          "href": "{behavioral}"
        }
      ]
    }
  ]
};
