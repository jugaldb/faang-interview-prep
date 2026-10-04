# Classic system design problems and free write-ups

For anyone preparing an HLD round. Inside: a practice method, 27 classic problems with free write-ups, and the prompts candidates reported at 34 companies in 2025 and 2026.

## How to practice one problem (60 to 75 minutes)

1. Read only the problem title. Do not open the write-up.
2. Set a 45-minute timer. Talk out loud or record yourself. Fill the [whiteboard skeleton](framework.md#the-whiteboard-skeleton) in [Excalidraw](https://excalidraw.com/).
3. Stop at 45 minutes even if unfinished. Note where the time went.
4. Read the free write-up. Mark each requirement, entity, endpoint and component you missed.
5. If the write-up is from Hello Interview, read its "what is expected at each level" section and grade yourself against mid-level.
6. Write a 5-line summary: core requirement, key entity, the one hard problem, the fix you chose, the trade-off.
7. Redo the problem from a blank page 7 days later, in 30 minutes.

> **Tip:** Attempt before you read. Reading first trains you to recognize a design, not to produce one. The blank-page redo in step 7 is the step that builds recall.

## Practice order

Difficulty labels come from Hello Interview's [ranked list](https://www.hellointerview.com/learn/system-design/in-a-hurry/how-to-prepare). Do the free ones in this order. Premium ones are marked.

- [ ] **Easy:** Bitly, Dropbox, Local Delivery (Gopuff). Yelp is premium.
- [ ] **Medium:** Rate Limiter, Ticketmaster, Facebook News Feed, WhatsApp, Tinder, LeetCode, YouTube, Facebook Live Comments. Premium: Instagram, Strava, Distributed Cache, Online Auction, Job Scheduler, News Aggregator, Price Tracking, Notification System.
- [ ] **Hard:** YouTube Top K, Uber, Web Crawler, Ad Click Aggregator, Facebook Post Search. Premium: Robinhood, Google Docs, Payment System, Metrics Monitoring, Online Chess, ChatGPT, Flash Sale.

New grads with a light design round: stop after Easy plus Rate Limiter, Ticketmaster and WhatsApp. 1 to 3 years: do all the free ones.

Hello Interview also lists four Guided Practice problems with no written guide (premium): Food Review App, Game Leaderboard, Donations Website and GitHub Actions. DoorDash, Lyft and OpenAI candidates reported close variants (table below), so practice them from the prompt alone.

## The classic problems

HI = Hello Interview, BBG = ByteByteGo (free chapters), SDP = System Design Primer, KPS = Karan Pratap Singh's free course. "Reported at" lists companies where 2025 to 2026 candidates reported this prompt or a close variant; details are on each company page.

| # | Problem | What it teaches | Free write-ups | Reported at |
|---|---|---|---|---|
| 1 | URL shortener (Bitly, TinyURL, Pastebin). Easy | Short code generation (counter vs hash), read-heavy caching, 301 vs 302, a key-value data model | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly), [BBG](https://bytebytego.com/courses/system-design-interview/design-a-url-shortener), [SDP Pastebin](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md), [KPS](https://www.karanpratapsingh.com/courses/system-design/url-shortener), [systemdesign.one](https://systemdesign.one/url-shortening-system-design/) | [Adobe](../companies/adobe.md), [eBay](../companies/ebay.md), [Anduril](../companies/anduril.md) |
| 2 | Dropbox or Google Drive. Easy | Chunked upload, presigned URLs to blob storage, a metadata database, sync and conflicts | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/dropbox), [AWS presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) | [eBay](../companies/ebay.md), [Pinterest](../companies/pinterest.md) (large-file upload), [JPMorgan](../companies/jpmorgan.md) (file sharing) |
| 3 | Local delivery (Gopuff). Easy | Inventory and availability queries close to the user | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/gopuff) | [Instacart](../companies/instacart.md) (inventory) |
| 4 | Scale a web app from one server to millions. Warm-up | Load balancer, cache, replicas, shards added one step at a time | [SDP scaling on AWS](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md), [BBG](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users) | Every "how would this scale?" follow-up |
| 5 | Rate limiter. Medium | Token bucket vs sliding window, Redis counters, where the limiter sits, syncing across nodes | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/distributed-rate-limiter), [BBG](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter), [Stripe](https://stripe.com/blog/rate-limiters) | [Visa](../companies/visa.md), [Cloudflare](../companies/cloudflare.md), [Walmart](../companies/walmart.md), [Flipkart](../companies/flipkart.md) (senior), [Adobe](../companies/adobe.md) (as LLD) |
| 6 | News feed (Facebook, Twitter timeline). Medium | Fan-out on write vs read, the celebrity problem, feed caches, pagination | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed), [BBG](https://bytebytego.com/courses/system-design-interview/design-a-news-feed-system), [SDP Twitter](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md), [KPS](https://www.karanpratapsingh.com/courses/system-design/twitter) | [Goldman Sachs](../companies/goldman-sachs.md), [Pinterest](../companies/pinterest.md), [Lyft](../companies/lyft.md), [Meta](../companies/meta.md) (Instagram), [Microsoft](../companies/microsoft.md) (Instagram feed) |
| 7 | Chat (WhatsApp, Messenger). Medium | WebSockets and connection servers, presence, delivery and read receipts, offline storage, ordering | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp), [BBG](https://bytebytego.com/courses/system-design-interview/design-a-chat-system), [KPS](https://www.karanpratapsingh.com/courses/system-design/whatsapp), [Discord storage](https://discord.com/blog/how-discord-stores-trillions-of-messages), [Slack](https://slack.engineering/real-time-messaging/) | [Airbnb](../companies/airbnb.md), [Agoda](../companies/agoda.md), [Lyft](../companies/lyft.md), [Nutanix](../companies/nutanix.md) |
| 8 | Ticket or hotel booking (Ticketmaster). Medium | Contention, seat holds with a TTL, locks vs database constraints, a waiting queue, strong consistency for booking but availability for browsing | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster), [BBG hotel reservation](https://bytebytego.com/courses/system-design-interview/hotel-reservation-system), [HI In the Wild: Shopify inventory](https://www.hellointerview.com/learn/system-design/in-the-wild/shopify-inventory-reservations) | [Meta](../companies/meta.md), [Airbnb](../companies/airbnb.md), [Flipkart](../companies/flipkart.md), [Walmart](../companies/walmart.md), [ServiceNow](../companies/servicenow.md), [Expedia](../companies/expedia.md), [Rippling](../companies/rippling.md) |
| 9 | YouTube or Netflix. Medium | Upload pipeline, transcoding steps, CDN, adaptive bitrate streaming, view counts | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/youtube), [BBG](https://bytebytego.com/courses/system-design-interview/design-youtube), [KPS Netflix](https://www.karanpratapsingh.com/courses/system-design/netflix) | [Uber](../companies/uber.md) (Prime Video, TikTok) |
| 10 | Web crawler. Hard | URL frontier, politeness and robots.txt, dedup with hashes and Bloom filters, DNS caching, distributed workers | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler), [BBG](https://bytebytego.com/courses/system-design-interview/design-a-web-crawler), [SDP](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md) | [Atlassian](../companies/atlassian.md), [Uber](../companies/uber.md), [Lyft](../companies/lyft.md), [Expedia](../companies/expedia.md) |
| 11 | Typeahead or search autocomplete | Trie with top-k per prefix, precomputation, caching, sampling logs | [Meta: The life of a typeahead query](https://engineering.fb.com/2010/05/17/web/the-life-of-a-typeahead-query/) | [Pinterest](../companies/pinterest.md), [Microsoft](../companies/microsoft.md), [Adobe](../companies/adobe.md) (as LLD) |
| 12 | Uber or ride sharing. Hard | High-rate location updates, geospatial index, matching drivers with locks | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/uber), [KPS](https://www.karanpratapsingh.com/courses/system-design/uber), [HI proximity search](https://www.hellointerview.com/learn/system-design/deep-dives/proximity-search), [Uber H3](https://www.uber.com/us/en/blog/h3/) | [Morgan Stanley](../companies/morgan-stanley.md), [Lyft](../companies/lyft.md), [Flipkart](../companies/flipkart.md) (senior) |
| 13 | Top-K or leaderboard. Hard | Heaps, count-min sketch, windowed aggregation, stream processing, Redis sorted sets | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/top-k), [BBG gaming leaderboard](https://bytebytego.com/courses/system-design-interview/real-time-gaming-leaderboard), [systemdesign.one](https://systemdesign.one/leaderboard-system-design/) | [Meta](../companies/meta.md), [LinkedIn](../companies/linkedin.md), [Atlassian](../companies/atlassian.md), [Walmart](../companies/walmart.md), [PhonePe](../companies/phonepe.md) (as machine coding) |
| 14 | Distributed cache. Medium | Partitioning with consistent hashing, replication, eviction, hot keys, cache stampede | [HI Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis), [Scaling Memcache at Facebook](https://www.usenix.org/conference/nsdi13/technical-sessions/presentation/nishtala) | [Goldman Sachs](../companies/goldman-sachs.md), [Cloudflare](../companies/cloudflare.md), [Waymo](../companies/waymo.md) |
| 15 | Key-value store | Partitioning, replication, quorum (N, W, R), vector clocks, gossip, Merkle trees, hinted handoff | [BBG](https://bytebytego.com/courses/system-design-interview/design-a-key-value-store), [Dynamo paper](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf), [SDP query cache](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md) | [LinkedIn](../companies/linkedin.md), [Walmart](../companies/walmart.md) |
| 16 | Payment system. Hard | Idempotency keys, exactly-once effects, a double-entry ledger, payment provider integration, reconciliation, retries | [Stripe: Idempotency](https://stripe.com/blog/idempotency), [ByteByteGo newsletter: Payment system](https://blog.bytebytego.com/p/payment-system), [Stripe idempotent requests](https://docs.stripe.com/api/idempotent_requests) | [Capital One](../companies/capital-one.md), [JPMorgan](../companies/jpmorgan.md), [PayPal](../companies/paypal.md), [Stripe](../companies/stripe.md), [Salesforce](../companies/salesforce.md), [OpenAI](../companies/openai.md), [Coinbase](../companies/coinbase.md) |
| 17 | Notification system. Medium | Push, SMS and email channels, a queue per channel, retries, dedup, user preferences, rate limits | No complete free write-up verified. Use [HI patterns](https://www.hellointerview.com/learn/system-design/in-a-hurry/patterns), [KPS queues](https://www.karanpratapsingh.com/courses/system-design/message-queues), [KPS pub-sub](https://www.karanpratapsingh.com/courses/system-design/publish-subscribe) | [Airbnb](../companies/airbnb.md), [Coinbase](../companies/coinbase.md), [OpenAI](../companies/openai.md), [Roblox](../companies/roblox.md) |
| 18 | Job scheduler. Medium | Job table, queue, workers, at-most-once vs at-least-once runs, retries, SLAs | No complete free write-up verified. Use [HI In the Wild: Slack job queue](https://www.hellointerview.com/learn/system-design/in-the-wild/slack-job-queue), [HI patterns](https://www.hellointerview.com/learn/system-design/in-a-hurry/patterns) | [Robinhood](../companies/robinhood.md) (most repeated), [Airbnb](../companies/airbnb.md), [DoorDash](../companies/doordash.md), [Walmart](../companies/walmart.md), [PhonePe](../companies/phonepe.md) |
| 19 | Ad click aggregator. Hard | Stream processing, exactly-once counting, Flink or Kafka, analytics storage, reconciliation | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/ad-click-aggregator) | [Meta](../companies/meta.md) |
| 20 | Coding platform (LeetCode). Medium | Sandboxed code execution, queueing, contest leaderboard | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/leetcode) | [Meta](../companies/meta.md), [Flipkart](../companies/flipkart.md), [Nutanix](../companies/nutanix.md) |
| 21 | Google Docs or collaborative editing. Hard | Operational transform vs CRDTs, WebSockets, versions, cursors and presence | [Figma: multiplayer](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/), [HI In the Wild: Figma](https://www.hellointerview.com/learn/system-design/in-the-wild/figma-multiplayer), [Neil Fraser: Differential sync](https://neil.fraser.name/writing/sync/) | [Roblox](../companies/roblox.md) (shared to-do list) |
| 22 | Unique ID generator | Snowflake ID layout, clock skew, sortable IDs | [Twitter: Announcing Snowflake](https://blog.x.com/engineering/en_us/a/2010/announcing-snowflake) | Inside URL shortener and chat designs |
| 23 | Post search. Hard | Inverted index, ingestion pipeline, ranking | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-post-search), [HI Elasticsearch](https://www.hellointerview.com/learn/system-design/deep-dives/elasticsearch) | [LinkedIn](../companies/linkedin.md) (inverted index over a stream of posts) |
| 24 | Metrics and monitoring. Hard | Time-series storage, aggregation, alerting | No complete free write-up verified. Use [HI time-series databases](https://www.hellointerview.com/learn/system-design/deep-dives/time-series-databases), [Google SRE monitoring](https://sre.google/sre-book/monitoring-distributed-systems/) | [LinkedIn](../companies/linkedin.md), [TikTok](../companies/tiktok.md), [Snap](../companies/snap.md), [Palantir](../companies/palantir.md) |
| 25 | Tinder. Medium | Swipe matching consistency, geo queries | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/tinder) | Practice for matching problems |
| 26 | Live comments (Facebook Live). Medium | Real-time fan-out with SSE, pub-sub between servers | [HI](https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-live-comments) | Practice for real-time feeds |
| 27 | LLM chat service or model gateway | Request queuing and batching, routing across model providers, fallbacks on failure, rate limits, evaluation | [Chip Huyen: Building a generative AI platform](https://huyenchip.com/2024/07/25/genai-platform.html), [Eugene Yan: LLM patterns](https://eugeneyan.com/writing/llm-patterns/), [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | [Anthropic](../companies/anthropic.md), [OpenAI](../companies/openai.md), [Uber](../companies/uber.md) (Design ChatGPT) |

More solved designs from the System Design Primer: [Mint.com](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md), [social graph](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md), [Amazon sales rank](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md).

> **Tip:** For problem 27, Jugal describes routing at LiteLLM as "sending each request to the right model and handling it when a provider fails" ([post](https://jugaldb.substack.com/p/ai-engineering-101-the-once-a-day)). That sentence is a good first requirement for any model gateway design.

## Reported prompts by company (2025 to 2026)

These are candidate reports collected for the company pages, not official question lists. The exceptions are Meta's lists (from Hello Interview's E4 guide), Uber's (from Aced), and Roblox's example, which Roblox publishes. Use them to pick your last 3 to 5 practice problems before a loop.

| Company | Level | Prompts reported |
|---|---|---|
| [Meta](../companies/meta.md) | E4 Product Architecture | Instagram auction system, LeetCode, Top K songs widget for Spotify, price drop tracker (CamelCamelCamel), Instagram ([HI E4](https://www.hellointerview.com/guides/meta/e4)) |
| [Meta](../companies/meta.md) | E4 System Design | LeetCode, ticket booking, ad click aggregator, online game leaderboard, Instagram ([HI E4](https://www.hellointerview.com/guides/meta/e4)) |
| [Uber](../companies/uber.md) | Entry to mid | ChatGPT, Amazon Prime Video, TikTok, hotel booking, web crawler ([Aced](https://www.aced.io/guides/uber-software-engineer-interview)) |
| [LinkedIn](../companies/linkedin.md) | IC2 | Google Calendar, metrics collection with alerts, Top-K YouTube variant, inverted index over a stream of posts, scale a single-node key-value store to 1M QPS, posts and comments with analytics |
| [Airbnb](../companies/airbnb.md) | G8 | Booking platform that prevents double bookings plus search (hot-partition follow-up), group chat, job scheduler, notification system |
| [DoorDash](../companies/doordash.md) | E4 | Food review app, review and reward system, donations site for a 3-day charity event, real-time order tracking, job scheduler, Instagram-like stories in a food app |
| [Robinhood](../companies/robinhood.md) | L1 to L2 | Distributed job scheduler with SLAs and at-most-once runs, limit order entry without double spending, order execution with cancellation, photo management service |
| [Stripe](../companies/stripe.md) | L2 | Idempotent payment APIs, ledgers with strong consistency, retries, rate limits, reconciliation jobs |
| [Coinbase](../companies/coinbase.md) | IC4 | Crypto order placement with third-party matching engines, ledgers, idempotent payment flows, notifications |
| [Capital One](../companies/capital-one.md) | New grad and up | A banking app or card portal: multiple account types, transfers, ACID transactions, idempotency |
| [Atlassian](../companies/atlassian.md) | P40 | Tagging across Jira, Confluence and Bitbucket; top-K Confluence pages; web crawler; scorecard service |
| [OpenAI](../companies/openai.md) | 1 to 3 years | Webhook delivery with 24-hour retries, Slack MVP in two weeks, CI/CD like GitHub Actions, payment system, online chess, ChatGPT, notifications |
| [Anthropic](../companies/anthropic.md) | SWE | API for serving LLMs with request batching, queuing and GPU utilization; Claude chat service; distributing model files |
| [Roblox](../companies/roblox.md) | IC2 | Official example: let people pay other people using phone numbers as IDs. Reported: matchmaking into groups of 16, like counters at scale, shared to-do list, notification center |
| [Spotify](../companies/spotify.md) | Engineer I and up | Friends listening activity feed, playlist image upload, banner ad server, recommendation engine |
| [Cloudflare](../companies/cloudflare.md) | Mid | Edge-to-core encrypted log collection, rule-based rate limiting gateway, scheduled HTTP endpoint pinger, global caching |
| [Pinterest](../companies/pinterest.md) | IC14 | Typeahead (top 10 by popularity), home feed, merchant catalog bulk updates, large-file upload |
| [Instacart](../companies/instacart.md) | Full time | Inventory management with reservations and no overselling, product catalog, grocery ordering backend |
| [Lyft](../companies/lyft.md) | T3 to T4 | 1:1 chat, product voting, donations website, social feed, Wikipedia crawler, pagination API |
| [Walmart Global Tech](../companies/walmart.md) | SWE III | Rate limiter, ledger, ticket booking, online chess with Redis sorted-set leaderboards, key-value store, scheduler with dead-letter queues |
| [Goldman Sachs](../companies/goldman-sachs.md) | Analyst | Twitter home timeline, Datadog-style logging; LLD: parking lot with nearest spot from several entrances, distributed cache class |
| [JPMorgan Chase](../companies/jpmorgan.md) | SEP to Associate | Reliable bank payment system (SEP, 2026), property listing app, global file sharing, monolith to microservices |
| [Flipkart](../companies/flipkart.md) | SDE 2 | Uber, LeetCode-like platform, rate limiter; schema-heavy LLD: airline ticketing, meeting room booking, IRCTC search |
| [PhonePe](../companies/phonepe.md) | SDE 2 | Shazam-style audio matching, digital wallet |
| [eBay](../companies/ebay.md) | SE 2 | Food ordering with menus and real-time updates, wishlist price-drop alerts, Dropbox, TinyURL, event booking |
| [Bloomberg](../companies/bloomberg.md) | London grads | A Terminal feature, top-N news articles, real-time stock price feed with history |
| [Tesla](../companies/tesla.md) | Intern and new grad | An API to store metrics, a user table design |
| [Waymo](../companies/waymo.md) | Non-senior | Vehicle fleet map-data collection, simulation on limited compute, matchmaking service, global cache for small images |
| [Palantir](../companies/palantir.md) | Experienced | Server metrics monitor, permissions for sensitive data, multi-tenant analytics with attribute-based access |
| [TikTok](../companies/tiktok.md) | 2-1 | Monitoring and alerting, messaging app, recommendation flows |
| [Agoda](../companies/agoda.md) | Intern and up | Chat app with group chat and read receipts plus SQL schema, cinema database schema |
| [Nutanix](../companies/nutanix.md) | MTS 1 to 2 | Chat application, inventory management, Design LeetCode |
| [Adobe](../companies/adobe.md) | MTS-2 | URL shortener, design your current project |
| [Snowflake](../companies/snowflake.md) | IC2 | Infrastructure design: storage, versioning and time travel, high availability |
| [Databricks](../companies/databricks.md) | L4 | Architecture round on scalability, storage, replication, consistency and failure handling |

## Where the free write-ups live

| Source | What is free (Oct 2026) | How to use it |
|---|---|---|
| [Hello Interview problem breakdowns](https://www.hellointerview.com/learn/system-design/in-a-hurry/how-to-prepare) | 16 breakdowns: Bitly, Dropbox, Gopuff, Ticketmaster, FB News Feed, Tinder, LeetCode, WhatsApp, Rate Limiter, YouTube, FB Live Comments, Top-K, Uber, Web Crawler, Ad Click Aggregator, FB Post Search | Main practice set. Attempt first, then read, then grade yourself on its per-level section |
| [ByteByteGo System Design Interview](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users) | 13 chapters without login: scale from zero, estimation, framework, rate limiter, consistent hashing, key-value store, URL shortener, web crawler, news feed, chat, YouTube, hotel reservation, gaming leaderboard | Second explanation after Hello Interview |
| [System Design Primer solutions](https://github.com/donnemartin/system-design-primer) | 8 solved designs (Pastebin, Twitter, web crawler, Mint, social graph, query cache, sales rank, scaling on AWS) | Good for structure; many outside links in the repo are from 2010 to 2014 |
| [Karan Pratap Singh's course](https://www.karanpratapsingh.com/courses/system-design) | Free book with URL shortener, WhatsApp, Twitter, Netflix and Uber designs | Readable third opinion |
| [interviewing.io guide, part 4](https://interviewing.io/guides/system-design-interview/part-four) | 4 worked problems | Extra worked examples |
| [Hello Interview: In the Wild](https://www.hellointerview.com/learn/system-design/in-the-wild) | Short digests of real engineering posts (Discord, Figma, Shopify, Slack, Spotify, Meta) | One a week to learn real trade-offs |

## Paid write-ups and free substitutes

| Paid or login-gated | Free substitute |
|---|---|
| HI Instagram | HI Facebook News Feed plus BBG news feed |
| HI Notification System, BBG notification chapter | HI patterns overview plus KPS message queues and pub-sub |
| HI Distributed Cache | HI Redis plus the Memcache at Facebook paper |
| HI Google Docs | Figma's multiplayer post plus HI In the Wild: Figma |
| HI Payment System, BBG payment chapter | Stripe's idempotency post plus ByteByteGo's free newsletter issue on payment systems |
| HI Job Scheduler | HI In the Wild: Slack job queue plus HI patterns overview |
| HI Yelp | HI proximity search |
| HI Metrics Monitoring | HI time-series databases plus Google SRE monitoring chapter |
| BBG unique ID chapter | Twitter's Snowflake post |
| BBG autocomplete chapter | Meta's typeahead post |
| BBG Google Drive chapter | HI Dropbox |
| Grokking courses (Educative, DesignGurus) | Everything above covers the same classic set |

> **Watch out:** Some GitHub repos copy paid "Grokking" course text. Skip them; they appear to be unauthorized mirrors.

## Reverse system design: your own project

Every loop asks about your projects, and some companies run a full round on one: LinkedIn's Technical Communication round, Robinhood's project round, Airbnb's Technical Experience round, DoorDash's project discussion and Cloudflare's project retrospective (see each company page). Google's 2026 pilot adds a design conversation about past work to the behavioral round ([Jugal's post](https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer), [Aced](https://www.aced.io/blog/google-ai-coding-interview)).

1. Pick 2 projects: one you built most of yourself, and one with real users or real scale.
2. Draw the architecture in Excalidraw in 5 to 8 boxes.
3. Fill the template below. Use real numbers only.
4. Prepare answers to the follow-up questions under it.
5. Practice a 5-minute and a 15-minute version out loud, and record one.

Jugal's rule for describing a project: do not just say "I built a chatbot"; explain the user problem, the architecture, how you evaluated the output, the trade-offs, and what you would improve ([post](https://jugaldb.substack.com/p/how-to-become-an-ai-engineer-in-2026)).

```text
PROJECT: [Name] ([link])

User problem:        [who has it, what hurts, how many users]
Architecture:        [client] -> [service] -> [store]; why each piece
Scale today:         [real numbers only: users, requests a day, data size]
How I measured it:   [tests, evals, metrics, user feedback]
Trade-offs:          1. I chose [X] over [Y] because [Z]
                     2. I chose [X] over [Y] because [Z]
What broke:          [incident or bug] -> [how I found it] -> [fix]
At 10x or 100x:      [what breaks first] -> [what I would change]
What I would monitor:[metric] because [reason]
Next version:        [the one improvement I would make first]
```

Follow-up questions to rehearse:

- Why this database and not another?
- What happens when [the main dependency] goes down?
- How would you scale this to 100 times the users?
- How do you know it works? What did you measure?
- What would you do differently if you started again?
- "Okay, how would you put it in front of users?" Jugal calls this follow-up the place "where offers are won" ([post](https://jugaldb.substack.com/p/7-videos-on-shipping-ml-to-production)).

## Track your practice

Paste this header into a sheet. One row per attempt. Redo anything scored 1 or 2 within 7 days.

```text
date,type(HLD/LLD/MC/ML),problem,source,minutes,finished_in_time(y/n),missed_requirements,missed_drilldown,redo_date,self_score(1-4)
```

Next: [Low-level design and machine coding](low-level-design.md)
