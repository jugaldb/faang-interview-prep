# System design: what to learn and when

For interns, new grads and engineers with 0 to 3 years of experience. When you finish this page you will know which design round your loop has, what you can skip, and which 4 or 6 week plan to follow.

## The five kinds of design round

| Round | What you do | What you hand in | Length | Prep page |
|---|---|---|---|---|
| High-level design (HLD), usually just called "system design" | Design a large system (URL shortener, chat, news feed) that serves many users | Requirements, API, boxes and arrows, data model, trade-offs | 45 to 60 min | [Framework](framework.md), [Problems](problems.md) |
| Product architecture (Meta's name for its product-track design round) | Design a user-facing product with more focus on APIs, data models and client-server flow | Same as HLD, with more API detail and less infrastructure scale | 45 min | [Framework](framework.md#company-specific-adjustments) |
| Low-level design (LLD), also called object-oriented design (OOD) | Design the classes for a contained problem (parking lot, elevator, LRU cache) | Classes, interfaces, key methods, often some real code | 35 to 60 min | [Low-level design](low-level-design.md) |
| Machine coding | Build a working, modular program from a written spec, then defend it in a code review | Running code with a demo from a main method, no UI | 90 to 120 min plus review | [Machine coding playbook](low-level-design.md#machine-coding-round-playbook) |
| Project walkthrough ("reverse system design") | Explain the design of something you built and defend each choice | One clear diagram and the trade-offs you made | 30 to 60 min | [Your own project](problems.md#reverse-system-design-your-own-project) |

> **Watch out:** LLD and HLD are different interviews. Hello Interview's LLD guide says they have "almost nothing in common" ([source](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction)). LLD is classes and state. HLD is services, data stores and scale. Ask your recruiter which one you have.

## Who gets a design round (as of Oct 2026)

Three rules hold across most companies:

- Most entry-level SWE loops have no full system design round, "though there are plenty of exceptions" ([Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)). Interns usually get none ([Tech Interview Handbook](https://www.techinterviewhandbook.org/system-design/)).
- Design becomes common at mid-level (about 2 to 3 years) and is the main signal at senior.
- At 1 to 3 years, the design round often sets your level. A weak round can turn a Meta E4 loop into an E3 offer ([Hello Interview E4 guide](https://www.hellointerview.com/guides/meta/e4)), and Microsoft uses design to level you up or down ([Aced Microsoft guide](https://www.aced.io/guides/microsoft-software-engineer-interview)).

Level names below follow each company's ladder. For the cross-company map (L3, E3, SDE I, 59 and so on) see [What jobs to apply for](../jobs/index.md). Rows marked "reports" come from 2025 to 2026 candidate reports collected for the company pages; formats vary by team, so confirm with your recruiter.

### FAANG and large tech

| Company | Intern | New grad | 1 to 3 years | Source |
|---|---|---|---|---|
| [Google](../companies/google.md) | None | L3: none. Two 45-min onsite coding rounds; coding can include light class design | L4: a dedicated design round is rare in 2026; design may surface inside coding. Infra and AI teams may swap one coding round for a domain round | [HI L4](https://www.hellointerview.com/guides/google/l4), [Aced L3](https://www.aced.io/guides/google-software-engineer-new-grad-interview) |
| [Meta](../companies/meta.md) | None | E3: none. 2 coding (one may be AI-enabled) plus 1 behavioral | E4: one 45-min round. Infra track gets System Design, product track gets Product Architecture. Drawn in Excalidraw | [HI E3](https://www.hellointerview.com/guides/meta/e3), [HI E4](https://www.hellointerview.com/guides/meta/e4) |
| [Amazon](../companies/amazon.md) | Usually none | SDE I: one OOD round is common (parking lot, Linux `find` API, pizza billing, package dependencies). Some new grad loops report no design round | SDE II: "at least one question on software systems design" (official), 20 min of design scenarios in the OA, often an extra LLD round | [HI L4](https://www.hellointerview.com/guides/amazon/l4), [Amazon SDE II prep](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep) |
| [Microsoft](../companies/microsoft.md) | Usually none | 59 to 60: varies by team, could be HLD, LLD or none | 61 to 62: design round common, sets your level, questions tie to the team's product | [Aced](https://www.aced.io/guides/microsoft-software-engineer-interview), [interviewing.io](https://interviewing.io/guides/hiring-process/microsoft) |
| [Apple](../companies/apple.md) | Rare | ICT2: rare; some India junior loops include an LLD-flavored round | ICT3: team-specific design. Talk about reliability, privacy, on-device vs cloud | [interviewing.io](https://interviewing.io/guides/hiring-process/apple), reports |
| [Netflix](../companies/netflix.md) | n/a | Netflix mostly hires experienced engineers | Design is the most important round. Bespoke prompts, sometimes security-only or reverse system design | [interviewing.io](https://interviewing.io/guides/hiring-process/netflix) |
| [Nvidia](../companies/nvidia.md) | Final 2 to 4 interviews can mix coding with system design or domain questions (CUDA, GPU, systems) | Team-dependent | Team-dependent | [Simplify Nvidia FAQ](https://simplify.jobs/blog/nvidia-internship-faq/) |
| [Uber](../companies/uber.md) | Not reported | 1-hour design and architecture round on simple high-level systems. Backend specialized coding can be "implement a parking lot data structure". India: machine coding is the first onsite round | Same rounds, deeper. Leave the last 15 min for follow-ups | [Aced Uber](https://www.aced.io/guides/uber-software-engineer-interview), [workat.tech](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg) (dated) |
| [LinkedIn](../companies/linkedin.md) | India: none | IC2 (the usual new grad level): full 60-min "Software Design and Architecture" round, HLD with LLD depth | Same. One 2026 report says a below-average design rating alone caused a reject | Reports |
| [Salesforce](../companies/salesforce.md) | Not reported | AMTS: LLD and OOP (LRU then LFU as classes, library management) | MTS: dedicated LLD round (Splitwise, LUDO) plus HLD inside the hiring manager round | Reports |
| [Adobe](../companies/adobe.md) | Not reported | Light: a simple design plus OOP questions (India campus) | MTS-2: dedicated LLD round plus HLD inside the hiring manager round | Reports |
| [Oracle](../companies/oracle.md) | Not reported | IC1 campus: simple LLD (parking lot, library management) | IC2: full system design round (US OCI) or HLD inside the hiring manager round (India) | Reports |
| [Walmart Global Tech](../companies/walmart.md) | Not reported | SWE II (India campus): CS fundamentals instead of design | SWE III: LLD in compiling Java plus often HLD. US loops include one design round | Reports |
| [eBay](../companies/ebay.md) | Not reported | Not reported | SE 2 with 2 years: full HLD round plus a hiring-manager design round | Reports |
| [Expedia](../companies/expedia.md) | Not reported | None reported | SDE II: LLD with working code more often than HLD | Reports |
| [Intuit](../companies/intuit.md) | Not reported | No standalone HLD, but the Craft Demo probes design (schema, pagination, rate limiting) | SE2: HLD discussion (CAP, ACID) plus design grilling in the Craft Demo | Reports |
| [PayPal](../companies/paypal.md) | Usually none | Usually none; resume-based design questions possible | 2+ years: conversational HLD round with payment scenarios | Reports |
| [Visa](../companies/visa.md) | None | None; project architecture questions instead | HLD in a technical or hiring manager round (rate limiter) | Reports |
| [ServiceNow](../companies/servicenow.md) | US: short HLD discussion with CAP | IC1: one basic HLD or DB schema design | IC2: same | Reports |
| [Cisco](../companies/cisco.md) | Light LLD tied to your projects | Light LLD (design a router in Python) | Light LLD; a DSA plus system design round from about 3 years | Reports |
| [Qualcomm](../companies/qualcomm.md) | Not standard | LLD instead: LRU variants, custom malloc, circular buffer | Same; AI teams ask ML system design | Reports |
| [IBM](../companies/ibm.md) | Rare | Rare; design talk about your own projects | HLD for experienced loops | Reports |
| [Palo Alto Networks](../companies/palo-alto-networks.md) | Not reported | Can appear: design discussion inside technical rounds (US), design plus core CS (India) | Dedicated design round, networking and security flavor | Reports |

### High-growth tech

| Company | Intern | New grad | 1 to 3 years | Source |
|---|---|---|---|---|
| [Stripe](../companies/stripe.md) | Usually none | L1: usually none | L2: about 1 hour, payment-flavored (idempotent APIs, ledgers) | Reports |
| [Databricks](../companies/databricks.md) | Some loops added a design or debugging round | L3: one low-level system design round (caching file ranges, thread-safe writers) | L4: Architecture round plus a System Programming round on concurrency | Reports |
| [Snowflake](../companies/snowflake.md) | Usually none | Not reported | IC2: infrastructure and data-systems design | Reports |
| [Atlassian](../companies/atlassian.md) | Not standard | P30: Code Design round (LLD in your own IDE with tests, including an AI-enabled version) plus about 20 min of rapid design scenarios in the Karat screen | P40: one 60-min system design round where questions "ladder" up or down | [Atlassian engineering interviews](https://www.atlassian.com/company/careers/resources/interviewing/engineering) |
| [Airbnb](../companies/airbnb.md) | Not the focus | G7: light or absent | G8: 60-min design screen plus 60-min onsite design | Reports |
| [DoorDash](../companies/doordash.md) | None | E3: none (2 coding plus values) | E4: 60-min design paired with a project walkthrough | Reports |
| [Lyft](../companies/lyft.md) | Rare; one intern-level crawler prompt reported | T3: some 2025 to 2026 loops included a 60-min design; prepare basics | T4: expected | Reports |
| [Spotify](../companies/spotify.md) | Sometimes "system design basics" (US) | Engineer I: part of full-time loops | Same | Reports |
| [Pinterest](../companies/pinterest.md) | None | IC13: none | IC14: 1 to 2 design rounds | Reports |
| [Snap](../companies/snap.md) | Not reported | SWE: unconfirmed. ML new grads report ML system design | 1-hour design round | Reports |
| [TikTok](../companies/tiktok.md) | Not standard | 1-2: backend fundamentals instead (REST, WebSocket vs SSE, SQL vs NoSQL) | 2-1: full design round | Reports |
| [Coinbase](../companies/coinbase.md) | Not reported | IC3: none reported | IC4: one or two 60-min rounds on financial infrastructure | Reports |
| [Robinhood](../companies/robinhood.md) | Not reported | L1: lighter design; prepare the job scheduler | L2: backend HLD with financial correctness | Reports |
| [Instacart](../companies/instacart.md) | Not reported | Unknown; prepare inventory reservation design | One design round, used for leveling | Reports |
| [Rippling](../companies/rippling.md) | Not reported | No HLD; LLD or machine coding is the design signal | SWE II: 60-min HLD used for leveling | Reports |
| [Cloudflare](../companies/cloudflare.md) | A scaling discussion attached to pair programming | May be a design walkthrough of your own resume project | Full design round | Reports |
| [Roblox](../companies/roblox.md) | Not reported | IC1: mostly coding | IC2: design is core | Reports |
| [Palantir](../companies/palantir.md) | Not reported | Decomposition round: break an open-ended problem into components and a plan | Formal design in most experienced loops | Reports |
| [Tesla](../companies/tesla.md) | Appears even for interns (an API to store metrics, a user table) | A 2025 new grad loop had 2 design interviews | Practical API, data and UI design for the team's product | Reports |
| [Waymo](../companies/waymo.md) | None reported | Appears in non-senior onsites; domain-specific (fleet data, simulation) | Same | Reports |
| [Anduril](../companies/anduril.md) | Not reported | One 2026 new grad final round had no design | One design or OOD round in general SWE onsites | Reports |

### AI labs

| Company | Intern | New grad | 1 to 3 years | Source |
|---|---|---|---|---|
| [OpenAI](../companies/openai.md) | Project walkthrough round | 2025 new grad loop: coding plus behavioral, no design reported | 1 to 2 design rounds in Excalidraw with deep questions on how each component works inside | Reports |
| [Anthropic](../companies/anthropic.md) | Fellows: research discussion instead | No new grad SWE track | One design round, often LLM-flavored (serving LLMs with batching and queuing) | Reports |

### Finance and trading

| Company | Intern | New grad | 1 to 3 years | Source |
|---|---|---|---|---|
| [Bloomberg](../companies/bloomberg.md) | Not reported | US: usually none. London and Europe grad loops often include a full design round | Standard | Reports |
| [Goldman Sachs](../companies/goldman-sachs.md) | None reported | Analyst Superdays: a "Software Design and Architecture" round is common for some US loops (HLD plus LLD) | Same | Reports |
| [JPMorgan Chase](../companies/jpmorgan.md) | Not reported | SEP: usually none, but a design question can appear (payment system, 2026) | HLD round, sometimes LLD | Reports |
| [Capital One](../companies/capital-one.md) | Technical plus case instead | Power Day: design a banking app or card portal | Same, deeper | Reports |
| [Morgan Stanley](../companies/morgan-stanley.md) | Not reported | Little or none; OOP and LLD possible | India Associate: LLD plus HLD | Reports |
| [Citadel](../companies/citadel.md) | Not reported | Not a formal round; design-flavored coding | Latency and market-data design | Reports |
| [Two Sigma](../companies/two-sigma.md) | Not reported | Can appear as an OOD exercise (Connect-7 game) | Heavier HLD | Reports |
| [Jane Street](../companies/jane-street.md) | None | No separate round; API and class design inside coding | A design round is possible | Reports |
| [D. E. Shaw](../companies/de-shaw.md) | LLD with class diagrams | LLD with class diagrams (furniture shop, chat app) | HLD for experienced hires | Reports |
| [Hudson River Trading](../companies/hudson-river-trading.md) | Systems fundamentals (OS, networking, memory) | Systems fundamentals; some onsites add a design discussion | Low-latency design discussion | Reports |

### India and Asia product companies

| Company | Intern | New grad | 1 to 3 years | Source |
|---|---|---|---|---|
| [Flipkart](../companies/flipkart.md) | Not reported | SDE 1: usually no full design; light LLD or DB schema inside a coding round | SDE 1 lateral and SDE 2: machine coding (90 to 120 min) plus a design round that is often LLD and schema-centric | [Flipkart SDE prep doc](https://www.flipkartcareers.com/assets/flipkart_pdf/SDE.pdf), reports |
| [PhonePe](../companies/phonepe.md) | Not reported | No dedicated design round; light HLD can appear in the hiring manager round | 0 to 3 years: machine coding is the design signal. SDE 2 (3 to 5 years): HLD | Reports |
| [Agoda](../companies/agoda.md) | Appears even for interns (chat app plus SQL schema) | Platform round plus a system design round | Same | Reports |
| [Nutanix](../companies/nutanix.md) | Not reported | Campus loops can include a design concepts round | MTS 1: HLD. MTS 2: combined LLD and HLD | Reports |
| Swiggy, Ola, Cred, Razorpay | Not reported | Machine coding as the first onsite round | Same | [workat.tech](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg) (written a few years ago) |

## What you can skip

| If your loop is | Skip | Do instead |
|---|---|---|
| Any intern loop (except Tesla, Agoda, Nvidia, Databricks, ServiceNow, Cloudflare and Spotify US, which report some design) | System design prep | [Coding](../coding/index.md) and [behavioral](../behavioral/index.md). See [Intern interviews](../internships/intern-interviews.md) |
| Google L3 or Meta E3 only | Full HLD prep, papers, DDIA | Spend 2 hours on Hello Interview's [introduction](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction) and [delivery framework](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery). Prepare to explain your own project's architecture |
| Amazon SDE I | Web-scale HLD | LLD: parking lot, Amazon Locker, LRU cache. Then [Leadership Principles](../behavioral/amazon-leadership-principles.md) |
| Flipkart, PhonePe or similar SDE 1 | Distributed systems depth, papers | [Machine coding practice](low-level-design.md#machine-coding-round-playbook), patterns by name, DB schema design |
| Quant or HFT new grad | Web-scale HLD | OS, networking, memory, C++, and low-latency topics: locks, TCP vs UDP, kernel bypass ([Jugal's HFT post](https://jugaldb.substack.com/p/how-to-break-into-300k-hft-roles)) |
| Meta E4, Amazon SDE II, Microsoft 61 to 62, LinkedIn IC2, Airbnb G8, DoorDash E4 | Nothing. Design sets your level | The [6-week plan](#6-week-plan-0-to-3-years-hld-round) |

## Step 1: Find out exactly what your loop has (15 minutes)

1. Write down your target level at each company. New grad is usually Google L3, Meta E3, Amazon SDE I or Microsoft 59 to 60. One to three years is usually L4, E4, SDE II or 61 to 62 ([level map](../jobs/index.md)).
2. Look up each company in the tables above. Write one line per company: "HLD: yes/no. LLD: yes/no. Machine coding: yes/no."
3. Email your recruiter with the script below. Formats change by team and by quarter, so the recruiter's answer beats any table.
4. Pick a plan from the table in Step 2.

```text
Hi [Recruiter name],

Thanks for scheduling my interviews for [Role], [Job ID]. To prepare well, could you share
which rounds my loop includes?

1. Is there a system design, product architecture, object-oriented design or machine coding round?
2. How long is each round, and is design part of a coding round or separate?
3. Which tool will I use to draw or code (Excalidraw, CoderPad, my own IDE, a shared doc)?

Thank you,
[Your name]
```

## Step 2: Pick your plan

| Your situation | Plan | Time |
|---|---|---|
| Google or Meta new grad, no design round | 2-hour primer (skip table above) | 2 hours once |
| Amazon SDE I, Uber, Atlassian P30, Salesforce AMTS, Databricks L3, D. E. Shaw, Oracle campus | [4-week plan](#4-week-plan-new-grad-sde-i-lld-heavy-loops) | 1 to 1.5 hours a day |
| Flipkart, PhonePe, Swiggy-style SDE 1 or SDE 2, Rippling SDE-1, Walmart SWE III India | [Machine coding track](low-level-design.md#2-week-machine-coding-plan), run alongside DSA | 2 to 4 weeks |
| Meta E4, Amazon SDE II, Microsoft 61 to 62, LinkedIn IC2, Uber, Airbnb G8, DoorDash E4, Stripe L2 | [6-week plan](#6-week-plan-0-to-3-years-hld-round) | About 1.5 hours a day |
| ML engineer or AI engineer roles | Add the [ML and AI add-on](#ml-and-ai-engineer-add-on-2-weeks) to either plan | 2 extra weeks |

Run system design alongside coding, not instead of it. For the full weekly hour budget across sections, see [Start here](../start-here.md).

## 4-week plan (new grad, SDE I, LLD-heavy loops)

About 1 to 1.5 hours a day. Draw every practice design in [Excalidraw](https://excalidraw.com/), the free whiteboard Meta uses and the most popular choice at Amazon.

**Week 1: fundamentals**

- [ ] Read Hello Interview's [introduction](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction), [delivery framework](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery) and [core concepts](https://www.hellointerview.com/learn/system-design/in-a-hurry/core-concepts).
- [ ] Read ByteByteGo's free chapters [Scale from zero to millions of users](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users) and [Back-of-the-envelope estimation](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation).
- [ ] Watch the [Harvard CS75 scalability lecture](https://www.youtube.com/watch?v=-W9F__D3oY4) once.
- [ ] Copy the [latency numbers](fundamentals.md#latency-numbers-to-know) and the [estimation cheat sheet](fundamentals.md#estimation-cheat-sheet) into your notes.
- [ ] Do the fundamentals track on [System Design Lab](https://systemdesignlab.netlify.app/) and run its failure simulations.

**Week 2: key technologies and 3 easy problems**

- [ ] Read Hello Interview's [key technologies](https://www.hellointerview.com/learn/system-design/in-a-hurry/key-technologies), then its [Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis) and [Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka) pages.
- [ ] Solve [Bitly](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly), [Dropbox](https://www.hellointerview.com/learn/system-design/problem-breakdowns/dropbox) and [Local Delivery](https://www.hellointerview.com/learn/system-design/problem-breakdowns/gopuff). For each: 30 minutes on Excalidraw first, then read the breakdown, then write 3 lines on what you missed.

**Week 3: low-level design**

- [ ] Read Hello Interview's LLD [introduction](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction), [delivery](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/delivery), [design principles](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/design-principles), [OOP concepts](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/oop-concepts) and [patterns](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/patterns).
- [ ] Read [Strategy](https://refactoring.guru/design-patterns/strategy), [Observer](https://refactoring.guru/design-patterns/observer), [State](https://refactoring.guru/design-patterns/state) and [Factory Method](https://refactoring.guru/design-patterns/factory-method) on refactoring.guru.
- [ ] Solve [LRU Cache](https://leetcode.com/problems/lru-cache/) (LeetCode 146).
- [ ] Design a [parking lot](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md), an [elevator](https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/elevator) and an [Amazon Locker](https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/amazon-locker), 35 minutes each, using the [LLD framework](low-level-design.md#the-35-minute-lld-framework).

**Week 4: medium problems and mocks**

- [ ] Solve [Ticketmaster](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster), [WhatsApp](https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp) and [Facebook News Feed](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed).
- [ ] Solve the rate limiter with Hello Interview's [breakdown](https://www.hellointerview.com/learn/system-design/problem-breakdowns/distributed-rate-limiter) and ByteByteGo's [chapter](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter).
- [ ] Do 2 peer mocks on [Aced Practice](https://www.aced.io/practice) or with a friend, scored with the [mock rubric](framework.md#run-a-mock-with-this-rubric).
- [ ] Redo your weakest problem from a blank page.

## 6-week plan (0 to 3 years, HLD round)

About 1.5 hours a day. Every problem is timed at 45 minutes with the [whiteboard skeleton](framework.md#the-whiteboard-skeleton).

- [ ] **Week 1:** Do week 1 of the 4-week plan. Add five free chapters: [replication](https://www.karanpratapsingh.com/courses/system-design/database-replication) and [sharding](https://www.karanpratapsingh.com/courses/system-design/sharding) (Karan Pratap Singh), [consistent hashing](https://www.hellointerview.com/learn/system-design/core-concepts/consistent-hashing) and [CAP](https://www.hellointerview.com/learn/system-design/core-concepts/cap-theorem) (Hello Interview), and [PACELC](https://www.karanpratapsingh.com/courses/system-design/pacelc-theorem) (Karan Pratap Singh).
- [ ] **Week 2:** Read Hello Interview's [key technologies](https://www.hellointerview.com/learn/system-design/in-a-hurry/key-technologies) and its pages on [Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis), [Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka), [Cassandra](https://www.hellointerview.com/learn/system-design/deep-dives/cassandra), [DynamoDB](https://www.hellointerview.com/learn/system-design/deep-dives/dynamodb) and [Elasticsearch](https://www.hellointerview.com/learn/system-design/deep-dives/elasticsearch). Read the [patterns overview](https://www.hellointerview.com/learn/system-design/in-a-hurry/patterns). Read ByteByteGo's [consistent hashing](https://bytebytego.com/courses/system-design-interview/design-consistent-hashing) and [key-value store](https://bytebytego.com/courses/system-design-interview/design-a-key-value-store) chapters. Optional: sections 4 and 5 of the [Dynamo paper](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf).
- [ ] **Week 3:** One problem per weekday: Bitly, Dropbox, Ticketmaster, Facebook News Feed, WhatsApp (links on [Problems](problems.md#the-classic-problems)).
- [ ] **Week 4:** YouTube, rate limiter, Top-K, Uber, web crawler. Add ByteByteGo's [YouTube](https://bytebytego.com/courses/system-design-interview/design-youtube) and [gaming leaderboard](https://bytebytego.com/courses/system-design-interview/real-time-gaming-leaderboard) chapters.
- [ ] **Week 5:** Company prep. Meta: LeetCode, Ad Click Aggregator and Top-K from the [E4 list](problems.md#reported-prompts-by-company-2025-to-2026), and practice setting your own scale numbers. Amazon SDE II: 2 LLD problems, the reliability pillar of [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/), and 2-minute [LP answers](../behavioral/amazon-leadership-principles.md). Microsoft: one design tied to the team's product. Everyone else: 3 prompts from your company's [reported list](problems.md#reported-prompts-by-company-2025-to-2026).
- [ ] **Week 6:** 3 to 4 mocks. Redo 3 problems from memory. Prepare 2 [project walkthroughs](problems.md#reverse-system-design-your-own-project). Read 2 posts from the target company's [engineering blog](resources.md#engineering-blogs-by-company).

## ML and AI engineer add-on (2 weeks)

Entry-level ML roles usually exclude an ML system design round; it becomes common at mid-level ([Hello Interview ML design](https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction)). Add these weeks if your loop has one, or if you will be asked to design an LLM product.

- [ ] Read Hello Interview's [ML design introduction](https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction) and [delivery framework](https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/delivery).
- [ ] Do the three free breakdowns timed at 45 minutes: [video recommendations](https://www.hellointerview.com/learn/ml-system-design/problem-breakdowns/video-recommendations), [harmful content](https://www.hellointerview.com/learn/ml-system-design/problem-breakdowns/harmful-content), [bot detection](https://www.hellointerview.com/learn/ml-system-design/problem-breakdowns/bot-detection).
- [ ] Read Eugene Yan's [system design for recommendations and search](https://eugeneyan.com/writing/system-design-for-discovery/) and [patterns for LLM systems](https://eugeneyan.com/writing/llm-patterns/).
- [ ] Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) and learn the pattern names.
- [ ] Follow the production habit in [Jugal's AI Engineering 101 plan](https://jugaldb.substack.com/p/ai-engineering-101-the-once-a-day): one infra concept a day from [Made With ML](https://madewithml.com/) (model routing, caching, rate limiting), two lines in your own words.
- [ ] Prepare one project you can defend end to end with the README checklist from [Jugal's shipping ML post](https://jugaldb.substack.com/p/7-videos-on-shipping-ml-to-production).

More ML and LLM design resources are on [Resources](resources.md#ml-and-ai-system-design).

## What Jugal's posts say about design rounds

- **Scope for SDE I:** Jugal's Amazon roadmap gives entry-level design two days and says you are designing a parking lot or library system, not Netflix ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)). His focus list: break the problem down, ask "What's the scale? How many users?" first, keep the architecture to client, server and database, and understand load balancing, caching and sharding as concepts.
- **What to know for that round:** client-server architecture, SQL vs NoSQL, caching (Redis, Memcached), load balancing, REST API design and message queues (same post). His video walks through the plan: [How I cleared Amazon Technical Interview, DSA + System Design, 4 week plan](https://www.youtube.com/watch?v=8bNRRelp7n0).
- **Where people freeze:** his 30-day plan puts [System Design Lab](https://systemdesignlab.netlify.app/) in week 3 "if your role needs it" with three rules: start with the fundamentals track, actually run the simulations, and practice saying your reasoning out loud ([post](https://jugaldb.substack.com/p/want-a-job-in-the-next-30-days-use)).
- **Startups test practical trade-offs:** be able to say why you would pick S3 over GCS, or when to use a queue like SQS ([post](https://jugaldb.substack.com/p/how-i-got-my-first-startup-offer)).
- **Defend your own architecture:** Jugal reports that Google's behavioral round in its 2026 pilot includes a design conversation about your past work ([post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer)). Google has not published this, but every company asks about your projects, so prepare it anyway.
- **Explain a project properly:** "explain the user problem, the architecture, how you evaluated the output, what tradeoffs you made, and what you would improve in the next version" ([post](https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026)).

## Myths that waste prep time

| Myth | Reality |
|---|---|
| "New grads never get design rounds." | True for Google L3 and Meta E3. False for Amazon SDE I (OOD), Uber, Atlassian (Code Design), LinkedIn IC2 and Indian product companies (machine coding). |
| "I need to read DDIA cover to cover first." | The [2nd edition](https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html) (March 2026) is 670 pages. Read only the chapter that fixes a gap, and read the rest after you land the job. |
| "Hello Interview is all free." | As of Oct 2026, numbers-to-know, DB indexing, all 7 pattern pages and 16 problem breakdowns are premium. The free set is still enough for this plan. |
| "The System Design Primer is by Alex Xu." | It is by Donne Martin ([repo](https://github.com/donnemartin/system-design-primer)). Alex Xu wrote the ByteByteGo books. |
| "More boxes look more senior." | Hello Interview says the most common reason mid-level candidates fail is not delivering a working system. Build simple first, then add caches and queues. |
| "Memorize the leaked questions." | interviewing.io says Google retires leaked questions ([guide](https://interviewing.io/guides/hiring-process/google)). Learn the method on [Framework](framework.md). |

## Checklist

- [ ] I know which design rounds each of my target companies runs at my level.
- [ ] I emailed my recruiter and got the format in writing.
- [ ] I picked a plan and put it in my calendar.
- [ ] I set up Excalidraw and drew one practice design in it.
- [ ] I can explain one of my own projects with a diagram and two trade-offs.

Next: [System design fundamentals](fundamentals.md)
