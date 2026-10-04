# System design interview framework

For your 45 to 60 minute HLD round. Use it as a minute-by-minute script: what to say, what to draw, when to move on.

## What you are graded on

Company rubrics share four themes: problem navigation, solution design, technical excellence, and communication and collaboration ([Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)). Meta's E4 design rubric uses the same four ([Hello Interview E4 guide](https://www.hellointerview.com/guides/meta/e4)).

| Signal | Strong | Weak |
|---|---|---|
| Problem navigation | Asks focused questions, picks the top 3 features, puts numbers on non-functional requirements ("feed renders in under 200 ms") | Lists 10 features, or starts drawing in minute one |
| Solution design | A simple design that serves every API call end to end, then improvements | Kafka and sharding before a single request works |
| Technical excellence | Picks each component for a stated reason, names the trade-off, goes deep on 2 bottlenecks | Name-drops technologies and cannot explain how they work |
| Communication | Thinks out loud, checks in, lets the interviewer steer | Silent for minutes, or talks over the interviewer |

**Who drives depends on level.** At mid-level and below, the interviewer drives and talking too much can hurt you ([interviewing.io](https://interviewing.io/guides/system-design-interview)). Junior candidates can expect the interviewer to point at what to improve; seniors are expected to find it ([Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery)).

**What "good" means for you.** On a URL shortener, Hello Interview expects a mid-level candidate to deliver a working design for shortening and redirecting, a uniqueness approach (hash or counter), a reason for using a 302 redirect, and basic indexing ([breakdown](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly)). Deep caching and invalidation discussion is the senior bar.

## The 45-minute plan

Based on Hello Interview's [delivery framework](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery).

| Time | Step | What you say | What you write or draw |
|---|---|---|---|
| 0:00 to 0:05 | Requirements | "I'd like to spend about five minutes on requirements first." | Top 3 functional requirements, 3 to 5 non-functional with numbers, out-of-scope list |
| 0:05 to 0:07 | Core entities | "The core entities are..." | A list of nouns: User, Url, Click |
| 0:07 to 0:12 | API | "Here is the interface the client uses." | 2 to 5 endpoints with inputs and outputs |
| Optional, 5 min | Data flow | Only for pipeline systems such as a web crawler | Numbered stages from input to output |
| 0:12 to 0:27 | High-level design | "I'll walk through each endpoint and add only what it needs." | Boxes and arrows, one endpoint at a time; database choice and keys beside each store |
| 0:27 to 0:42 | Go deep | "The hardest part is X. Here are two options and why I pick one." | 2 to 3 drill-downs tied to your non-functional requirements |
| 0:42 to 0:45 | Wrap up | "Here is how it fails and how we'd know." | Failure modes, monitoring, next steps |

**Other formats**

| Format | Change |
|---|---|
| 60-minute round (Uber, Atlassian, LinkedIn, Airbnb) | Same steps. Spend the extra time going deeper and leave the last 10 to 15 minutes for follow-ups ([Aced Uber](https://www.aced.io/guides/uber-software-engineer-interview)). Atlassian's questions "ladder" up or down based on how you do ([Atlassian](https://www.atlassian.com/company/careers/resources/interviewing/engineering)). |
| ByteByteGo's 4 steps | Understand the problem and scope (3 to 10 min), high-level design and buy-in (10 to 15), design in depth (10 to 25), wrap up (3 to 5) ([chapter](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews)). Same idea, wider time ranges. |
| LLD or OOD round | A 35-minute class-design version: see [the LLD framework](low-level-design.md#the-35-minute-lld-framework). |
| ML system design | Problem framing 5 to 7 min, high-level design 2 to 3, data and features 10, modeling 10, inference and evaluation 7, then depth ([Hello Interview ML](https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/delivery)). |
| Mobile system design | Introductions 2 to 5 min, requirements 5, high-level design 10, detailed discussion 20 to 30, your questions 5. Scope is usually the client plus its API ([mobile-system-design](https://github.com/weeeBox/mobile-system-design)). |
| Front-end system design | Same flow, but the boxes are UI components, client state and the API contract. Use the [GreatFrontEnd playbook](https://www.greatfrontend.com/front-end-system-design-playbook) framework pages (most solved questions are premium). |

## Step 1: Requirements (0:00 to 0:05)

1. Say your plan in one sentence (opening script below), so the interviewer knows where you are going.
2. Ask 3 to 5 clarifying questions from the bank below. At Google, ask more than usual: interviewers plant "linchpin" details in the prompt ([interviewing.io](https://interviewing.io/guides/hiring-process/google)).
3. Write the top 3 functional requirements as "Users should be able to...". Say the rest out loud as out of scope.
4. Write 3 to 5 non-functional requirements with numbers. Use the checklist below.
5. Decide on estimation. Do the math only if it changes the design, and say so either way.

Weak vs strong, for "Design a URL shortener":

```text
WEAK
  - Shorten URLs
  - It should be scalable, fast and reliable

STRONG
  Functional
    1. Users can create a short link for a long URL (optional custom alias, optional expiry)
    2. Users who open a short link are redirected to the long URL
  Out of scope: analytics dashboard, user accounts beyond auth
  Non-functional (numbers I'm choosing, say them out loud)
    - Redirect latency under 100 ms at p99
    - Read-heavy: about 100 redirects per link created
    - Short codes must be unique; availability over consistency for redirects
    - Scale: 100M new links a year, kept for 5 years
```

Clarifying question bank:

```text
USERS AND SCOPE
- Who are the users and roughly how many? (daily active, peak concurrent)
- Which 3 features matter most for this interview? What can we skip?
- Mobile, web, or both? Any regions or offline needs?

DATA AND TRAFFIC
- Read-heavy or write-heavy? Rough read:write ratio?
- How big is one item? How long do we keep data?
- Any bursty events (sales, live events, New Year)?

CORRECTNESS
- Is slightly stale data OK? Where is it NOT OK?
- Can a user ever be double-charged or double-booked? (if no: strong consistency + idempotency)
- Do we need ordering? Exactly-once or at-least-once processing?

CONSTRAINTS
- Latency target for the main path?
- Compliance (personal data, payments, data residency)?
- Infrastructure we must use (for example AWS at Amazon)?
```

Non-functional checklist (from Hello Interview's list):

```text
[ ] CAP: consistency or availability, decided per feature
[ ] Environment constraints (mobile battery, low bandwidth, memory)
[ ] Scalability (bursts, read vs write scaling)
[ ] Latency (which path, what number)
[ ] Durability (can we lose data?)
[ ] Security (auth, access control, data protection)
[ ] Fault tolerance (redundancy, failover, recovery)
[ ] Compliance (legal, regulatory)
```

## Step 2: Core entities (0:05 to 0:07)

1. List the nouns the API will move around: for a URL shortener, User, Url (short code, long URL, expiry), and maybe Click.
2. Do not write the full schema yet. Add fields when an endpoint needs them.

## Step 3: API (0:07 to 0:12)

Rules from Hello Interview's [API design page](https://www.hellointerview.com/learn/system-design/core-concepts/api-design) and [delivery framework](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery):

1. Use REST by default with plural resource names.
2. Take the user from the auth token, never from the request body.
3. Use GraphQL only when many client types need different fields. Use gRPC for internal service calls.
4. Use WebSockets or SSE only when the requirement is real-time.
5. Paginate lists with a cursor. Put an idempotency key on any request that moves money or books something ([Stripe](https://stripe.com/blog/idempotency)).

```text
WEAK
  POST /createShortUrl?userId=123&url=...

STRONG
  POST /v1/urls            body: { long_url, custom_alias?, expires_at? }  -> { short_code }
  GET  /{short_code}                                                      -> 302 redirect to long_url
  (user comes from the auth token)

TEMPLATE
  POST /v1/[resources]                body: { ... }               -> [Resource]
  GET  /v1/[resources]/{id}                                       -> [Resource]
  GET  /v1/[resources]?cursor=[ ]&limit=[ ]                       -> { items: [Resource][], next_cursor }
  Header for payments or bookings: Idempotency-Key: [uuid]
```

## Step 4: High-level design (0:12 to 0:27)

1. Take the first endpoint. Draw client, then load balancer or API gateway, then a service, then a data store. Trace one request out loud.
2. Write the store and its key beside the box, for example `Postgres: urls(short_code PK, long_url, user_id, expires_at)`.
3. Take the next endpoint. Reuse boxes. Add only what this endpoint needs.
4. Park extras. Say "A cache will help here, I'll note it and come back," and write it in a "Later" list at the side of the board.
5. When every endpoint works, say so, then ask "Which part would you like me to go deeper on?"

Drawing rules that keep the board readable:

| Rule | Why |
|---|---|
| Flow left to right: clients, edge, services, stores | The interviewer can follow a request without asking |
| Label each arrow with the call (`POST /v1/urls`, `enqueue`) | Shows you know what moves where |
| Number the steps of each request flow | Makes "walk me through a read" easy |
| Write the database type and key next to each store | Data modeling is graded |
| Keep the first version to 5 to 8 boxes | A small design that works scores higher than a big one you never finish |

Practice in the tool you will use. Meta uses [Excalidraw](https://excalidraw.com/) for both design round types, and it is the most popular choice at Amazon ([interviewing.io Amazon](https://interviewing.io/guides/hiring-process/amazon)).

## Step 5: Go deep (0:27 to 0:42)

1. Pick 2 to 3 drill-downs that map to your non-functional requirements. "Redirects under 100 ms" leads to caching; "no double booking" leads to locking.
2. For each, say the bottleneck, give two options, pick one, and name the cost.
3. If the interviewer points somewhere else, follow them. At your level they often will.

Drill-down menu (bottleneck, standard fix, trade-off to say out loud):

| Bottleneck | Standard fix | Trade-off to name |
|---|---|---|
| Reads too slow, database overloaded | Cache-aside with Redis, read replicas, CDN for static content | Stale data, invalidation work |
| Too many writes for one database | Shard by a key, batch writes, queue plus async workers | Cross-shard queries, hot keys |
| Hot key or celebrity user | Replicate hot items; fan-out on read for celebrities | More work at read time |
| Spiky traffic | Queue to absorb bursts, autoscale workers, rate limit at the gateway | Added latency for queued work |
| Double booking or double charge | Database constraint or conditional write, short hold with a TTL, idempotency key on every write API | Lower availability on that path |
| Large files | Presigned URL upload straight to blob storage, chunked uploads | More client logic |
| Real-time updates | SSE (server to client) or WebSockets (two-way), pub-sub between connection servers | Stateful connections, reconnect handling |
| Text search | Inverted index (Elasticsearch) fed by change data capture or a queue | Index lag, one more system to run |
| Nearby queries | Geohash, quadtree or H3 index | Precision vs cell size |
| Long-running jobs | Job table plus queue plus workers plus status polling | Eventual completion; retries need idempotency |
| Single point of failure | Replicas across zones, health checks, failover | Cost, consistency during failover |

Concepts behind each fix are on [Fundamentals](fundamentals.md).

## Step 6: Wrap up (0:42 to 0:45)

1. Name 2 failure modes and what happens in each (a cache node dies, a region goes down).
2. Say what you would monitor: latency, traffic, errors and saturation, the four golden signals ([Google SRE](https://sre.google/sre-book/monitoring-distributed-systems/)).
3. Say what you would build next with more time.
4. Do not assume you are done until the interviewer says so ([ByteByteGo](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews)).

## Scripts you can say word for word

```text
OPENING
"Before I design anything, I'd like to spend about five minutes on requirements,
then list the core entities and the API, then draw a simple design that works,
and use the remaining time to go deep on the hardest parts. Does that work for you?"

SCOPING
"There are many features here. I'll focus on [A], [B], and [C]. I'll treat [D] as
out of scope unless you'd like me to include it."

ESTIMATION
"I'll skip detailed math for now and only estimate where it changes a decision,
for example whether [data structure] fits on one machine."

SETTING YOUR OWN NUMBERS (when the interviewer won't give them)
"I'll assume [N] daily users and a read:write ratio of [R]. Tell me if you'd like different numbers."

PARKING AN IDEA
"A cache will probably help here. I'll note it and come back after the basic flow works."

TRADE-OFF
"Option 1 is [X], which gives [benefit] but costs [cost]. Option 2 is [Y].
Because our requirement is [requirement], I'd pick [choice]."

WHEN STUCK
"Let me think out loud for a moment. The constraint that worries me is [Z]..."

INVITING THE INTERVIEWER
"That's the core flow. Which part would you like me to go deeper on?"
```

## The whiteboard skeleton

Paste this into Excalidraw (or a doc) at the start of every practice session and fill it in as you talk.

```text
[0:00 to 0:05] REQUIREMENTS
  Functional (top 3 only):
    1. Users should be able to [ ]
    2. Users should be able to [ ]
    3. Users should be able to [ ]
  Out of scope: [ ]
  Non-functional (top 3 to 5, with numbers):
    - Availability vs consistency: [prefer A for browsing / C for booking or payments]
    - Scale: [daily users], read:write ratio [ ]
    - Latency: [p99 < ___ ms for ___]
    - Durability / security / compliance: [ ]
  Estimation: only if it changes the design (say so out loud)

[0:05 to 0:07] CORE ENTITIES
  [Entity1], [Entity2], [Entity3]

[0:07 to 0:12] API
  POST /v1/[resources]        body: { ... }    -> [Resource]
  GET  /v1/[resources]/{id}                    -> [Resource]
  GET  /v1/[list]?cursor=[ ]&limit=[ ]         -> [Resource][]
  (user comes from the auth token, never from the body)

[0:12 to 0:27] HIGH-LEVEL DESIGN (one endpoint at a time)
  Client -> API gateway / load balancer -> [Service A] -> [Store: which one, why, key]
  Later list: cache, queue, CDN, search index

[0:27 to 0:42] GO DEEP (2 to 3, each tied to a non-functional requirement)
  1. [Bottleneck] -> [fix] -> [trade-off]
  2. [Bottleneck] -> [fix] -> [trade-off]

[0:42 to 0:45] WRAP UP
  Failure modes, monitoring (latency, traffic, errors, saturation), what I'd do next
```

## Company-specific adjustments

| Company | What changes | Source |
|---|---|---|
| [Meta](../companies/meta.md) | E4 and up only. 45 minutes, either System Design (scale, distributed systems) or Product Architecture (API design, data models, client-server). Sources disagree on who picks, so ask your recruiter which type you get and state a preference. Excalidraw. Meta's own guide says to practice each question on paper in about 30 minutes. Interviewers may withhold scale numbers, so set your own. Candidates report depth questions on quadtrees, geohashing and SQL. Some interviewers only say "what else", so be ready to drive. | [Meta prep page](https://www.metacareers.com/swe-prep-onsite/) (Full Loop guide PDF), [HI E4](https://www.hellointerview.com/guides/meta/e4), [Aced](https://www.aced.io/guides/meta-software-engineer-interview), [interviewing.io](https://interviewing.io/guides/hiring-process/meta-facebook) |
| [Amazon](../companies/amazon.md) | Expect 1 to 2 Leadership Principle questions inside the design round; keep each answer to about 2 minutes. Prompts are often a piece of the team's own system. If stuck, talk about performance. SDE II design is judged on practicality, accuracy, efficiency, reliability, optimization and scalability. If the recruiter says Bluescape, do one practice design in it first ([Bluescape guide](https://community.bluescape.com/t/preparing-for-your-job-interview-in-bluescape/778)). | [interviewing.io](https://interviewing.io/guides/hiring-process/amazon), [Amazon SDE II prep](https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep) |
| [Google](../companies/google.md) | No dedicated design round before L5. Ask more clarifying questions than usual: interviewers plant "linchpin" details. Leaked questions get retired, so learn the method. In the 2026 pilot, be ready to defend the design of a past project in the behavioral round. | [interviewing.io](https://interviewing.io/guides/hiring-process/google), [HI L4](https://www.hellointerview.com/guides/google/l4), [Aced](https://www.aced.io/blog/google-ai-coding-interview) |
| [Microsoft](../companies/microsoft.md) | The round sets your level; Aced warns a lack of domain knowledge can mean a down-level. There is no question bank: prompts come from the team's use cases (example: "Design a chat feature for users of Microsoft Azure"). Compliance topics are common. Sometimes run by the hiring manager. Tools: Codility Canvas or Excalidraw. | [interviewing.io](https://interviewing.io/guides/hiring-process/microsoft), [Aced](https://www.aced.io/guides/microsoft-software-engineer-interview) |
| [Uber](../companies/uber.md) | One hour. Entry-level candidates get simpler high-level systems. Leave the last 15 minutes for follow-ups. Ask at the start whether they want LLD (classes) or HLD (schema, services); one SDE-1 candidate wrote classes when the interviewers wanted a schema. | [Aced](https://www.aced.io/guides/uber-software-engineer-interview), reports |
| [Atlassian](../companies/atlassian.md) | 60 minutes, questions ladder up or down. Ask clarifying questions even when the answer seems obvious; one 2026 candidate was down-leveled for skipping them. | [Atlassian](https://www.atlassian.com/company/careers/resources/interviewing/engineering), reports |
| [Netflix](../companies/netflix.md) | Design is the most important round. Expect bespoke prompts, security-only design, and reverse system design. | [interviewing.io](https://interviewing.io/guides/hiring-process/netflix) |
| [Apple](../companies/apple.md) | Not standardized by team. Talk about reliability. | [interviewing.io](https://interviewing.io/guides/hiring-process/apple) |
| [OpenAI](../companies/openai.md) | Excalidraw, with heavy questions on how queues, caches, load balancers and databases work inside. Do not name a technology you cannot explain. | Reports |
| [Stripe](../companies/stripe.md) | About 1 hour on a whiteboarding tool. Payment-flavored: idempotent APIs, ledgers, retries, reconciliation. | Reports |
| [Coinbase](../companies/coinbase.md) | Coinbase's own interview blog advises: keep it general, name a technology you know, say what you do not know. | [Company page](../companies/coinbase.md) |
| [Walmart Global Tech](../companies/walmart.md) | Drive the round and keep it simple. One 2026 candidate lost an HLD round by over-engineering scale in the last 10 minutes. | Reports |
| [Pinterest](../companies/pinterest.md), [Instacart](../companies/instacart.md), [Robinhood](../companies/robinhood.md) | Start at low scale before sharding (Pinterest). Favor correctness and consistency over caching for inventory (Instacart). Expect follow-ups on failure modes, idempotency and deduplication (Robinhood). | Reports |

## Mistakes that fail the round

| Mistake | Fix | Source |
|---|---|---|
| Drawing before clarifying | Spend the first 5 minutes on requirements, out loud | [ByteByteGo](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews) |
| Listing 10 features | Top 3 functional requirements; the rest out of scope | [Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery) |
| Adding caches and queues before anything works | Simple working design first, then improve in the drill-downs | [Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery) |
| Going deep on one box first | Cover every endpoint, then go deep | [ByteByteGo](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews) |
| Thinking in silence | Narrate. Jugal's mock review checks "Did I talk enough?" ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)) | [ByteByteGo](https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews) |
| Talking over the interviewer | At your level they drive. Pause after each section | [interviewing.io](https://interviewing.io/guides/system-design-interview) |
| Name-dropping technology | Pick tools you can explain inside and out | [Building blocks](fundamentals.md#building-blocks-to-name-in-an-interview) |
| Microservices for everything | Fewer services unless a requirement needs more | [Martin Fowler](https://martinfowler.com/articles/microservices.html) |
| Long Leadership Principle answers at Amazon | About 2 minutes each, then back to the design | [Hello Interview L5](https://www.hellointerview.com/guides/amazon/l5) |
| Treating "estimate everything" as mandatory | Estimate only where it changes a decision | [Hello Interview](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery) |

## Run a mock with this rubric

1. The interviewer picks a problem the candidate has not seen, from [Problems](problems.md).
2. The interviewer reads the write-up for 10 minutes and notes 2 drill-down questions.
3. Run 45 minutes. The interviewer answers questions but does not offer scale numbers.
4. Spend 10 minutes on feedback with the rubric below. Swap roles next session.
5. Record yourself and replay it. Jugal's four self-check questions: "Did I talk enough?", "Was my solution clear before I coded?", "Did I sound like I knew what I was doing, or was I guessing?", "Would you hire me based on this interview?" ([post](https://jugaldb.substack.com/p/amazon-is-still-hiring-after-the)).

```text
Score each 1 to 4

Problem navigation   : asked good questions, scoped to the top 3 features, set numbers for non-functional reqs
Solution design      : working end-to-end design that serves every API call
Technical excellence : components chosen for stated reasons; correct trade-offs; depth in drill-downs
Communication        : thought out loud, checked in, let the interviewer steer, no long silences
Time management      : requirements done by 0:07, high-level design by about 0:27, at least 2 drill-downs

One thing to fix next time: [ ]
```

Free ways to get a partner: [Aced Practice](https://www.aced.io/practice) (where Pramp sessions moved), the [interviewing.io AI Interviewer](https://start.interviewing.io/interview-ai), classmates, or Discord groups. Hello Interview's live mocks ended May 31, 2026 ([notice](https://www.hellointerview.com/mock-sunset)). More options are on [Mock interviews](../coding/mock-interviews.md).

## Day-before checklist

- [ ] I practiced in the exact tool I was told (Excalidraw, Codility Canvas, CoderPad, a shared doc).
- [ ] I re-read my [estimation sheet](fundamentals.md#estimation-cheat-sheet) and my 5-line summaries from practice.
- [ ] I have 2 short behavioral stories ready, because Amazon and Microsoft mix behavioral questions into design rounds ([story bank](../behavioral/story-bank.md)).
- [ ] I can say the opening script without reading it.
- [ ] I have water, a charged laptop, and a quiet room.

Next: [Classic system design problems](problems.md)
