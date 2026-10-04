# System design fundamentals cheat sheet

For anyone with an HLD round, and useful for LLD too. You end with 51 concepts in your own words, the latency numbers, and an estimation sheet you can redo from memory.

## How to use this page

1. Work through one table per sitting. For each row, open the free link and read only the section on that concept.
2. Close the tab and write the one-line meaning in your own words. If you cannot, read it again.
3. Turn rows into flashcards, or import the System Design Primer's ready-made [Anki decks](https://github.com/donnemartin/system-design-primer#anki-flashcards). Review 10 minutes a day.
4. Copy the [latency numbers](#latency-numbers-to-know) and the [estimation cheat sheet](#estimation-cheat-sheet) onto one page of notes.
5. Before every mock, re-read the [trade-off table](#trade-offs-you-will-be-asked-to-defend).

> **Tip:** A new grad loop does not need all 51. If your loop is LLD-only, read the caching, rate limiting, idempotency and isolation-level rows, then move to [Low-level design](low-level-design.md).

## Scale and performance

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| Vertical vs horizontal scaling | Vertical is a bigger machine. Horizontal is more machines behind a load balancer, which needs stateless servers. | [ByteByteGo: Scale from zero](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users) | The first growth step in every design |
| Latency vs throughput | Latency is time per request. Throughput is requests per second. Aim for the most throughput at an acceptable latency. | [System Design Primer](https://github.com/donnemartin/system-design-primer#latency-vs-throughput) | Writing non-functional requirements |
| Availability and the nines | The share of time the system works. 99.99% allows about 52.6 minutes down a year. Parts in series lower it; parts in parallel raise it. | [ByteByteGo: Estimation](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation) | Non-functional requirements, replicas |
| SLI, SLO, SLA | SLI is what you measure (p99 latency). SLO is your target for it. SLA is the promise to customers, with penalties. | [Karan Pratap Singh: SLA, SLO, SLI](https://www.karanpratapsingh.com/courses/system-design/sla-slo-sli) | Wrap-up, monitoring |
| Back-of-the-envelope estimation | Rough QPS, storage and bandwidth to decide if one machine is enough. | [ByteByteGo: Estimation](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation) | Only when it changes a decision |

## Networking and APIs

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| DNS | Turns names into IP addresses. Can also route by geography or weight. | [Cloudflare: What is DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) | CDNs, multi-region |
| TCP vs UDP | TCP gives ordered, reliable delivery over a connection. UDP sends packets with no delivery guarantee and less overhead. | [Karan Pratap Singh: TCP and UDP](https://www.karanpratapsingh.com/courses/system-design/tcp-and-udp) | Video calls, games, trading systems |
| HTTP | A stateless request and response protocol: methods, status codes, headers. | [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) | API design |
| Load balancer | Spreads traffic across servers. L4 routes by IP and port, L7 by HTTP content. Algorithms: round robin, least connections, hashing. | [Hello Interview: Networking essentials](https://www.hellointerview.com/learn/system-design/core-concepts/networking-essentials) | Every design |
| Reverse proxy and API gateway | A front door that handles TLS, auth, routing and rate limits before your services. | [Hello Interview: API gateway](https://www.hellointerview.com/learn/system-design/deep-dives/api-gateway) | Microservice entry point |
| CDN | Edge servers cache static content close to users. Push CDNs get files uploaded; pull CDNs fetch on first request. | [Cloudflare: What is a CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) | Images, video, static files |
| REST, gRPC, GraphQL | REST for public resources. gRPC for fast internal service calls. GraphQL when clients need flexible fields. Paginate with cursors. | [Hello Interview: API design](https://www.hellointerview.com/learn/system-design/core-concepts/api-design) | The API step of every design |
| Long polling, SSE, WebSockets | Long polling holds a request open. SSE pushes from server to client over HTTP. WebSockets are two-way. Pick the simplest that meets the need. | [Hello Interview: Networking essentials](https://www.hellointerview.com/learn/system-design/core-concepts/networking-essentials) | Chat, live comments, notifications |
| TLS and mTLS | TLS encrypts traffic. mTLS also proves the client's identity, often between services. | [Karan Pratap Singh: SSL, TLS, mTLS](https://www.karanpratapsingh.com/courses/system-design/ssl-tls-mtls) | Security requirements |
| OAuth 2.0 and OpenID Connect | OAuth gives an app limited access with a token. OIDC adds login identity on top. | [Karan Pratap Singh: OAuth 2.0 and OIDC](https://www.karanpratapsingh.com/courses/system-design/oauth2-and-openid-connect) | "Sign in with Google", third-party APIs |

## Data storage

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| SQL vs NoSQL | Relational stores give joins and transactions. Key-value, document, wide-column and graph stores give flexible schemas and easier horizontal scale. Default to Postgres unless you have a reason. | [Hello Interview: Key technologies](https://www.hellointerview.com/learn/system-design/in-a-hurry/key-technologies) | Choosing the database |
| Data modeling | Pick entities, keys and access patterns first, then the schema. Denormalize read-heavy paths. | [Hello Interview: Data modeling](https://www.hellointerview.com/learn/system-design/core-concepts/data-modeling) | Every design |
| Indexing | B-tree and hash indexes turn full scans into lookups. Writes get slower. Column order in a composite index matters. | [Use The Index, Luke](https://use-the-index-luke.com/) | "This query is slow" follow-ups |
| ACID vs BASE | ACID: all-or-nothing, consistent, isolated, durable. BASE: basically available, eventually consistent. | [Karan Pratap Singh: ACID and BASE](https://www.karanpratapsingh.com/courses/system-design/acid-and-base-consistency-models) | Booking, payments, inventory |
| Isolation levels | Decide which anomalies concurrent transactions may see (dirty reads, non-repeatable reads, phantoms). | [PostgreSQL: Transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html) | Two users booking the same seat |
| Replication | Copies of data for availability and read scale: leader-follower, multi-leader, leaderless. The cost is replication lag. | [Karan Pratap Singh: Replication](https://www.karanpratapsingh.com/courses/system-design/database-replication) | Read-heavy systems, failover |
| Sharding (partitioning) | Split data across machines by key, by range or by hash. Watch for hot keys and cross-shard queries. | [Hello Interview: Sharding](https://www.hellointerview.com/learn/system-design/core-concepts/sharding) | Write scale, huge tables |
| Consistent hashing | Servers and keys sit on a ring, so adding a node moves only about 1/N of the keys. Virtual nodes even out the load. | [Hello Interview: Consistent hashing](https://www.hellointerview.com/learn/system-design/core-concepts/consistent-hashing) | Caches, key-value stores |
| Federation | Split databases by function (users, orders, products) instead of by row. | [Karan Pratap Singh: Federation](https://www.karanpratapsingh.com/courses/system-design/database-federation) | An early scaling step |
| Blob storage | Keep large files in object storage (S3) and metadata in a database. Clients upload and download directly with presigned URLs. | [AWS: Presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) | Dropbox, YouTube, image upload |
| Search (inverted index) | Maps each word to the documents that contain it (Elasticsearch). Keep it in sync from the main database through change data capture or a queue. | [Hello Interview: Elasticsearch](https://www.hellointerview.com/learn/system-design/deep-dives/elasticsearch) | Post search, product search |
| Geospatial index | Geohash, quadtree or H3 to find nearby drivers or places fast. | [Hello Interview: Proximity search](https://www.hellointerview.com/learn/system-design/deep-dives/proximity-search) | Uber, Yelp, delivery |

## Caching

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| Caching strategies | Cache-aside, write-through, write-behind, refresh-ahead. Caches can sit at the client, CDN, server or database. Main risks: stale data and a thundering herd on expiry. | [Hello Interview: Caching](https://www.hellointerview.com/learn/system-design/core-concepts/caching) | Any read-heavy path |
| Cache eviction | What to drop when memory is full: LRU, LFU, TTL, random. | [Redis: Eviction policies](https://redis.io/docs/latest/develop/reference/eviction/) | Cache sizing, the LRU LLD question |

## Async processing and messaging

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| Message queue | Decouples producers from consumers, absorbs spikes and retries failed work (SQS, RabbitMQ). | [AWS: Message queues](https://aws.amazon.com/message-queue/) | Notifications, background jobs, uploads |
| Publish-subscribe | One message goes to every subscriber of a topic. | [Karan Pratap Singh: Pub-sub](https://www.karanpratapsingh.com/courses/system-design/publish-subscribe) | Notifications, feed fan-out |
| Streams (Kafka) | An append-only, partitioned log. Consumers track offsets, so you get replay and order within a partition. | [Hello Interview: Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka) | Analytics, click aggregation |
| Event sourcing and CQRS | Store every change as an event; keep separate models for writes and reads. Rarely needed in a 45-minute round. | [Karan Pratap Singh: Event sourcing](https://www.karanpratapsingh.com/courses/system-design/event-sourcing), [CQRS](https://www.karanpratapsingh.com/courses/system-design/command-and-query-responsibility-segregation) | Ledgers, audit trails |

## Consistency and distributed systems

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| CAP theorem | During a network partition you choose consistency or availability. Partition tolerance is not optional. | [Hello Interview: CAP](https://www.hellointerview.com/learn/system-design/core-concepts/cap-theorem) | Non-functional requirements, per feature |
| PACELC | If there is a Partition, pick A or C. Else, pick Latency or Consistency. | [Karan Pratap Singh: PACELC](https://www.karanpratapsingh.com/courses/system-design/pacelc-theorem) | Why eventually consistent stores are fast |
| Consistency models | Strong (linearizable), sequential, causal, read-your-writes, eventual: what a reader may see after a write. | [Jepsen: Consistency models](https://jepsen.io/consistency/models) | Feeds vs bank balances |
| Consensus (Raft) | How replicas agree on one leader and one log despite failures. | [Raft](https://raft.github.io/) and its [visual walkthrough](https://thesecretlivesofdata.com/raft/) | Leader election, config stores |
| Quorum (N, W, R) | With N replicas, if writes wait for W and reads ask R, and W + R > N, every read overlaps the latest write. | [ByteByteGo: Key-value store](https://bytebytego.com/courses/system-design-interview/design-a-key-value-store) | Key-value stores |
| Distributed transactions | Two-phase commit locks every participant until a coordinator commits. A saga runs local transactions and undoes them with compensating steps on failure. | [Karan Pratap Singh: Distributed transactions](https://www.karanpratapsingh.com/courses/system-design/distributed-transactions), [microservices.io: Saga](https://microservices.io/patterns/data/saga.html) | Orders and payments across services |
| Idempotency | Repeating a request has the same effect as doing it once. The client sends an idempotency key; the server stores the result. | [Stripe: Idempotency](https://stripe.com/blog/idempotency) | Payments, any retry |
| Unique ID generation | Options: database auto-increment, UUID, ticket server, Snowflake (timestamp plus machine ID plus sequence, a sortable 64-bit ID). | [Twitter: Announcing Snowflake](https://blog.x.com/engineering/en_us/a/2010/announcing-snowflake) | URL shortener, messages |
| Write-ahead log | Write each change to an append-only log before applying it, so you can recover after a crash. | [Wikipedia: Write-ahead logging](https://en.wikipedia.org/wiki/Write-ahead_logging) | Durability questions |

## Reliability and operations

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| Rate limiting | Caps requests per client. Algorithms: token bucket, leaking bucket, fixed window, sliding window log or counter. | [ByteByteGo: Rate limiter](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter) | API gateways, abuse |
| Retries with backoff and jitter | Wait longer after each failed try and add randomness, so clients do not retry in lockstep. | [AWS: Exponential backoff and jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/) | Any external call |
| Circuit breaker | Stop calling a failing dependency and fail fast; probe again later. | [Karan Pratap Singh: Circuit breaker](https://www.karanpratapsingh.com/courses/system-design/circuit-breaker) | Payment providers, third-party APIs |
| Service discovery | How services find healthy instances of each other (a registry or DNS). | [Karan Pratap Singh: Service discovery](https://www.karanpratapsingh.com/courses/system-design/service-discovery) | Microservices |
| Observability | Metrics, logs and traces. Watch the four golden signals: latency, traffic, errors, saturation. | [Google SRE: Monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) | Wrap-up of every design |
| Disaster recovery | Backups and failover plans. RTO is how long recovery may take; RPO is how much data you can afford to lose. | [Karan Pratap Singh: Disaster recovery](https://www.karanpratapsingh.com/courses/system-design/disaster-recovery) | Multi-region, durability |
| Monolith vs microservices | Separate deployable services trade simplicity for team and scaling independence. Default to fewer services in an interview. | [Martin Fowler: Microservices](https://martinfowler.com/articles/microservices.html) | "Why not one service?" |

## Probabilistic data structures

| Concept | What it means | Best free link | Where it comes up |
|---|---|---|---|
| Bloom filter | Answers "definitely not seen" or "maybe seen" in very little memory. No false negatives. | [Wikipedia: Bloom filter](https://en.wikipedia.org/wiki/Bloom_filter) | Web crawler URL dedup |
| Count-min sketch | Approximate counts for items in a stream in fixed memory. It can overcount, never undercount. | [Wikipedia: Count-min sketch](https://en.wikipedia.org/wiki/Count%E2%80%93min_sketch) | Top-K, heavy hitters |

## Building blocks to name in an interview

Name a real technology only if you can explain how it works inside. OpenAI interviewers in particular drill into internals ([company page](../companies/openai.md)).

| Technology | Reach for it when | Free link |
|---|---|---|
| PostgreSQL | You need transactions, joins and constraints. The default choice. | [Isolation levels](https://www.postgresql.org/docs/current/transaction-iso.html) |
| Redis | You need a cache, counters, rate limiting, leaderboards (sorted sets) or short-lived locks. | [Hello Interview: Redis](https://www.hellointerview.com/learn/system-design/deep-dives/redis), [sorted sets](https://redis.io/docs/latest/develop/data-types/sorted-sets/) |
| Kafka | You need a durable event log with replay, many consumers, and order per key. | [Hello Interview: Kafka](https://www.hellointerview.com/learn/system-design/deep-dives/kafka), [Kafka intro](https://kafka.apache.org/intro) |
| Cassandra | Very high write volume with a known query pattern per table. | [Hello Interview: Cassandra](https://www.hellointerview.com/learn/system-design/deep-dives/cassandra) |
| DynamoDB | A managed key-value store with predictable latency on AWS. | [Hello Interview: DynamoDB](https://www.hellointerview.com/learn/system-design/deep-dives/dynamodb) |
| Elasticsearch | Full-text search, filters and relevance ranking. | [Hello Interview: Elasticsearch](https://www.hellointerview.com/learn/system-design/deep-dives/elasticsearch) |
| S3 (object storage) | Files, images, video, backups. | [AWS: S3 user guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) |
| SQS or RabbitMQ | A work queue where each message is handled once by one worker. | [AWS: Message queues](https://aws.amazon.com/message-queue/) |
| API gateway | Auth, rate limits and routing in one place. | [Hello Interview: API gateway](https://www.hellointerview.com/learn/system-design/deep-dives/api-gateway) |

## Trade-offs you will be asked to defend

| Decision | Pick the first when | Pick the second when |
|---|---|---|
| SQL vs NoSQL | You need transactions, joins or strict constraints (payments, bookings) | You need huge write scale on a simple, known access pattern |
| Cache-aside vs write-through | Reads dominate and slightly stale data is fine | Reads must see the latest write right after it happens |
| Queue (SQS) vs stream (Kafka) | Each job is done once by one worker | Many consumers need the same events, or you need replay |
| Fan-out on write vs on read (feeds) | Most users have few followers: precompute each feed | Celebrity accounts: merge their posts at read time |
| Long polling vs SSE vs WebSockets | Rare updates, simplest client | Server-to-client updates only / two-way, low-latency messages |
| Strong vs eventual consistency | Money, inventory, seat holds | Likes, view counts, feeds |
| Hash vs range sharding | Even spread of load | Range scans (time ranges, sorted IDs) |
| REST vs gRPC | Public or browser-facing APIs | Internal service-to-service calls |
| Monolith vs microservices | Small team, early product, interview default | Teams that must deploy and scale parts independently |
| Retry vs fail fast | The call is idempotent and the failure looks temporary | The dependency is down: open the circuit breaker |

For a URL shortener, know why Hello Interview's [breakdown](https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly) picks a 302 redirect over a 301. Browsers cache a 301, so later clicks skip your server. A 302 sends every click through you, so you can count clicks and change or expire links.

## Latency numbers to know

From the [System Design Primer](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know). Its sources include Jeff Dean's [2009 talk](https://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf). Hardware is faster now; this [interactive chart](https://colin-scott.github.io/personal_website/research/interactive_latency.html) shows the numbers by year. Learn the orders of magnitude, not the exact values.

| Operation | Time | What it tells you |
|---|---|---|
| L1 cache reference | 0.5 ns | |
| L2 cache reference | 7 ns | |
| Main memory reference | 100 ns | Memory is fast: cache hot data in RAM |
| Compress 1 KB with Zippy | 10 us | Compress before sending over the network |
| Send 1 KB over a 1 Gbps network | 10 us | |
| Read 4 KB randomly from SSD | 150 us | |
| Read 1 MB sequentially from memory | 250 us | |
| Round trip within one datacenter | 500 us | Each extra service hop costs real time |
| Read 1 MB sequentially from SSD | 1 ms | |
| HDD seek | 10 ms | Avoid random disk reads |
| Read 1 MB over a 1 Gbps network | 10 ms | |
| Read 1 MB sequentially from HDD | 30 ms | Read sequentially, not randomly |
| Packet California to Netherlands and back | 150 ms | Put servers and CDNs near users |

Handy throughput figures from the same table: HDD 30 MB/s, 1 Gbps Ethernet 100 MB/s, SSD 1 GB/s, main memory 4 GB/s. You get about 2,000 round trips a second inside one datacenter and 6 to 7 round trips a second across the world.

## Estimation cheat sheet

Estimate only when the number changes a decision, for example whether a top-K heap fits on one machine. Hello Interview recommends this, and Meta interviewers may withhold numbers so you have to set your own. Say which one you are doing out loud.

**Powers of two**

| Power | Approximate value | Size |
|---|---|---|
| 2^10 | 1 thousand | 1 KB |
| 2^20 | 1 million | 1 MB |
| 2^30 | 1 billion | 1 GB |
| 2^40 | 1 trillion | 1 TB |
| 2^50 | 1 quadrillion | 1 PB |

**Time and traffic conversions** (arithmetic)

| Per day | Average per second |
|---|---|
| 1 day | 86,400 seconds, call it 10^5 |
| 1 million requests a day | about 12 QPS |
| 10 million requests a day | about 120 QPS |
| 100 million requests a day | about 1,200 QPS |
| 1 billion requests a day | about 12,000 QPS |

One month is about 2.6 million seconds and one year about 31.5 million seconds. ByteByteGo's worked example uses peak QPS = 2 x average.

**Availability budget** (arithmetic)

| Availability | Downtime per year | Downtime per month |
|---|---|---|
| 99% | 3.65 days | 7.3 hours |
| 99.9% | 8.8 hours | 43.8 minutes |
| 99.99% | 52.6 minutes | 4.4 minutes |
| 99.999% | 5.26 minutes | 26 seconds |

**Formulas**

- Storage per day = writes per day x size per item. Multiply by 365, by years kept, and by the number of replicas.
- Bandwidth = QPS x bytes per request (do reads and writes separately).
- Servers = peak QPS / QPS one server handles. State your per-server number as an assumption.
- Cache size = hot items x item size. A common assumption is that a small share of items gets most reads; say the share you assume.

**ByteByteGo's worked example** (illustrative numbers, not real Twitter data): 300 million monthly users, 50% daily, so 150 million daily users posting 2 tweets a day. Tweet QPS = 150M x 2 / 86,400, about 3,500, with peak about 7,000. If 10% of tweets carry 1 MB of media, that is 30 TB a day, about 55 PB over 5 years ([chapter](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation)).

Copy this template into your notes and fill it for every practice problem:

```text
ASSUMPTIONS (say each one out loud)
  Daily active users:            [ ]
  Actions per user per day:      [ ] writes, [ ] reads
  Size per item:                 [ ] bytes
  Retention:                     [ ] years, replicas: [ ]

TRAFFIC
  Write QPS = DAU x writes / 86,400   = [ ]   peak (x2) = [ ]
  Read QPS  = DAU x reads  / 86,400   = [ ]   peak (x2) = [ ]
  Read:write ratio                    = [ ]

STORAGE
  Per day  = writes per day x size    = [ ]
  Total    = per day x 365 x years x replicas = [ ]

DECISION THIS CHANGES
  [ ] fits on one machine? [ ] needs sharding? [ ] cache worth it?
```

Rules that keep estimation short:

1. Round hard: 86,400 becomes 100,000 and 2.6 million becomes 2.5 million.
2. Write every assumption on the board with units.
3. Stop as soon as you have the number that drives the decision.

## Week 1 checklist

- [ ] I can explain each concept in the scale, networking and data storage tables in one sentence.
- [ ] I can draw cache-aside and explain when the cache goes stale.
- [ ] I can explain sharding vs replication and consistent hashing on a whiteboard.
- [ ] I can recite the latency orders of magnitude (memory, SSD, datacenter round trip, cross-continent).
- [ ] I can convert requests a day to QPS and estimate storage for 5 years without a calculator.
- [ ] I can defend each row of the trade-off table with one example.

Next: [System design interview framework](framework.md)
