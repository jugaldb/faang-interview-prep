# Low-level design and machine coding

For SDE I, SDE 2 and India product company candidates. When you finish you will know which LLD format your loop uses, how it is graded, which patterns matter, and you will have 28 practice problems and a machine coding routine.

## Four formats, one skill

| Format | Length | What you hand in | Real code? | Who runs it |
|---|---|---|---|---|
| OOD or LLD round (whiteboard or doc) | 35 to 60 min | Classes, interfaces, key methods, 2 to 3 methods implemented | Partly. US big tech expects some real code; India and Asia often accept structured pseudocode ([Hello Interview](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction)) | Amazon SDE I, Salesforce, Goldman Sachs, D. E. Shaw, Oracle |
| Multi-part class problem inside a coding round | 45 to 90 min | A class that grows over 2 to 4 parts, with tests | Yes, runnable | Atlassian Code Design, Jane Street, Two Sigma, Bloomberg, Lyft's 90-min Laptop round |
| Machine coding | 90 to 120 min plus a review | A working, modular program with a demo from a main method, no UI | Yes, runnable and extensible | Flipkart, PhonePe, Uber India, Rippling, Swiggy-style companies |
| Progressive build in the online assessment | Varies | A small system built level by level (bank, file storage, key-value store) | Yes, graded by tests | Airbnb, Coinbase, Anthropic, eBay, Meta (see [OA formats](../online-assessments/company-oa-formats.md)) |

Some companies call it OOD, some LLD: "They're the same interview, just a different name" ([Hello Interview](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction)).

## Which companies ask it (as of Oct 2026)

Rows marked "reports" come from 2025 to 2026 candidate reports collected for the company pages. Formats vary by team; confirm with your recruiter using the [script on the overview page](index.md#step-1-find-out-exactly-what-your-loop-has-15-minutes).

| Company | Level | Format | Reported prompts | Source |
|---|---|---|---|---|
| [Amazon](../companies/amazon.md) | SDE I | One OOD round. Discuss classes, relationships and key methods without full code, then handle "curveball" extensions | Linux `find` command API, parking lot, pizza billing, package system with dependencies, file search; also rate limiter, AWS billing for one user, train fare calculator with a weekend cap | [HI L4](https://www.hellointerview.com/guides/amazon/l4), reports |
| [Flipkart](../companies/flipkart.md) | SDE 1 lateral, SDE 2 | Machine coding, then a code-review viva where you extend your code live and sketch a UML class diagram. Design rounds in a Google Doc: entities, full schema, APIs, service classes | BNPL, quick commerce, food ordering, distributed task scheduler, conference room booking, restaurant ordering, gym management | [Flipkart SDE prep doc](https://www.flipkartcareers.com/assets/flipkart_pdf/SDE.pdf), reports |
| [PhonePe](../companies/phonepe.md) | 0 to 3 years | Machine coding assignment with a later review that focuses on concurrency | Customer issue resolution system, fitness class booking (tiers, waitlist, thread safety), leaderboard with concurrent score submissions, email and SMS provider layer, app version rollout, logger library with sinks | Reports |
| [Uber](../companies/uber.md) | Entry level | US backend: specialized coding such as "implement a parking lot data structure". India: machine coding as the first onsite round | Parking lot | [Aced](https://www.aced.io/guides/uber-software-engineer-interview), [workat.tech](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg) (dated) |
| Swiggy, Ola, Cred, Razorpay, Udaan, Gojek | SDE 1, SDE 2 | Machine coding | See the workat.tech practice list below | [workat.tech](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg) (written a few years ago) |
| [Atlassian](../companies/atlassian.md) | P30 and up | Code Design in your own IDE with tests, plus an AI-enabled Code Design round on an existing repo | Snake game, middleware router, tennis court booking, rating systems | [Atlassian](https://www.atlassian.com/company/careers/resources/interviewing/engineering), reports |
| [Salesforce](../companies/salesforce.md) | AMTS, MTS | LLD graded as "production-ready" OOP | LRU then LFU as classes, library management; MTS: Splitwise, LUDO, inventory reservation (reserve, confirm, release) | Reports |
| [Walmart Global Tech](../companies/walmart.md) | SWE III | LLD in compiling Java | Strategy, Observer, Factory, Singleton, SOLID, ThreadPoolExecutor, LRU, BookMyShow with database locking and isolation levels | Reports |
| [Adobe](../companies/adobe.md) | MTS-2 | Dedicated LLD round | In-memory file system, configuration management service, warehouse allocation, autocomplete top-K, rate limiter, LRU with pluggable eviction | Reports |
| [Goldman Sachs](../companies/goldman-sachs.md) | Analyst | LLD inside "Software Design and Architecture" | Parking lot with nearest spot from several entrances, distributed cache class | Reports |
| [Morgan Stanley](../companies/morgan-stanley.md) | India Associate | LLD on paper | Snake and Ladder, Controller-Service-DAO-Entity layering, SOLID | Reports |
| [D. E. Shaw](../companies/de-shaw.md) | Intern and new grad | Class design plus a class diagram, sometimes concurrency | Furniture shop, Google Classroom, Stack Overflow, chat app | Reports |
| [Two Sigma](../companies/two-sigma.md) | New grad | OOD exercise | Connect-7 game | Reports |
| [Jane Street](../companies/jane-street.md) | Intern and new grad | Practical builds where classes evolve over several parts | Key-value store class, order book with APIs, memoization with FIFO then LRU eviction | Reports |
| [Databricks](../companies/databricks.md) | New grad (L3) | Low-level system design | Cached file over a remote storage client, thread-safe event writer with fsync, a map with load-measurement methods | Reports |
| [Rippling](../companies/rippling.md) | SDE-1 | LLD or machine coding | Employee access management, resource manager, rules engine | Reports |
| [Lyft](../companies/lyft.md) | T3 and up | 90-min Laptop round: practical OOP with your own tests, extended for new requirements | Varies | Reports |
| [Expedia](../companies/expedia.md) | SDE II | LLD with runnable code and patterns | OTP notification service, token-based password reset, delivery-date API by pincode | Reports |
| [eBay](../companies/ebay.md) | About 4 years | LLD; the CodeSignal assessment itself is an OOP exercise | In-memory file system with addDirectory, addFile, goToDirectory, ls | Reports |
| [Oracle](../companies/oracle.md) | Campus IC1, IC2 | Simple LLD at IC1; design-and-code at IC2 (US) | Parking lot, library management (IC1); file system (IC2) | Reports |
| [Qualcomm](../companies/qualcomm.md) | New grad | Systems-flavored LLD | LRU variants, custom malloc, smart pointers, circular buffer | Reports |
| [Bloomberg](../companies/bloomberg.md) | New grad | Design-a-class problems | Wordle checker, O(1) lottery, hit counter | Reports |

## How LLD is graded

| Source | What they score |
|---|---|
| [Hello Interview LLD](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction) | Problem analysis, class design, code quality, extensibility and maintainability, communication |
| [Amazon OOD round](https://www.hellointerview.com/guides/amazon/l4) | Design problem analysis, object-oriented design skills, clarity of communication, adaptability and depth. Do not get lost drawing perfect UML |
| [Machine coding](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg) | Working, demonstrable code; functionally correct; modular and readable with separation of concerns; takes new requirements with minimal changes; a main method to run it; no UI. Then a code review, where workat.tech says most people get eliminated |

Regional differences, per Hello Interview: US big tech expects partial real code; India and Asia expect structured pseudocode; mid-size companies in India and Asia ask about design patterns more directly and give vaguer requirements.

## The 35-minute LLD framework

Based on Hello Interview's [LLD delivery framework](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/delivery).

| Time | Step | What you say or do |
|---|---|---|
| About 5 min | Requirements | "Let me confirm what the system must do." List must-haves, out of scope (persistence, UI, concurrency), and edge cases |
| About 3 min | Entities and relationships | Nouns become classes; note "has many" and "uses" links |
| 10 to 15 min | Class design | Fields and method signatures for each class; enums for states; interfaces for anything that varies |
| About 10 min | Implementation | Happy path of the core method first, then edge cases, then trace one example for 1 to 2 minutes |
| About 5 min | Extensibility | "To add [new type], I add one class that implements [interface]. Nothing else changes." |

Template to fill on the board:

```text
1) REQUIREMENTS (about 5 min)
   Must: [ ] [ ] [ ]
   Out of scope: [persistence? UI? concurrency?]
   Ask: how many [types]? what happens when [edge case]? one instance or many?

2) ENTITIES AND RELATIONSHIPS (about 3 min)
   [Entity] has many [Entity]; [Entity] uses [Strategy]

3) CLASS DESIGN (10 to 15 min)
   class [Name]:
     state:    [field: type], [field: type]
     behavior: [method(args) -> return]
   enum [State] { ... }
   interface [Strategy] { [method] }

4) IMPLEMENTATION (about 10 min)
   Happy path for [core method]
   Edge cases: invalid input, illegal state, capacity full, concurrent calls
   Trace one example step by step (1 to 2 min)

5) EXTENSIBILITY (about 5 min)
   "To add [new type], I add one class implementing [interface]; nothing else changes."
```

Example outline for a parking lot (pseudocode, the level of detail most rounds want before you code):

```text
enum SpotSize { SMALL, MEDIUM, LARGE }
enum VehicleType { BIKE, CAR, TRUCK }

class Vehicle      { plate: str; type: VehicleType }
class Spot         { id: str; size: SpotSize; floor: int; vehicle: Vehicle | None
                     fits(v: Vehicle) -> bool }
class Ticket       { id: str; spot: Spot; vehicle: Vehicle; entry_time: datetime }

interface SpotAllocationStrategy { find_spot(floors, vehicle) -> Spot | None }
class NearestFirstStrategy implements SpotAllocationStrategy

interface PricingStrategy { price(ticket, exit_time) -> Money }
class HourlyPricing implements PricingStrategy

class ParkingLot {
  floors: list[Floor]; allocator: SpotAllocationStrategy; pricing: PricingStrategy
  active: dict[ticket_id, Ticket]
  park(vehicle) -> Ticket        # find spot, mark occupied, issue ticket; raise LotFullError
  unpark(ticket_id) -> Money     # free spot, compute price, remove ticket
}
Extension: weekend pricing = new PricingStrategy class. EV spots = new SpotSize + fits() rule.
```

## OOP and SOLID in one place

Read Hello Interview's [OOP concepts](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/oop-concepts) and [design principles](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/design-principles) pages, then use this table to check yourself.

| Principle | One line | Smell when you break it | Where it shows up |
|---|---|---|---|
| Encapsulation | Keep state private; change it only through methods | Other classes edit your fields directly | `Account.balance` changed outside `deposit()` |
| Abstraction | Expose what an object does, hide how | Callers depend on internal details | `PaymentGateway.charge()` hides the provider |
| Inheritance | Share behavior through an "is-a" relationship | Deep class trees for small differences | `Car` and `Truck` extend `Vehicle` |
| Polymorphism | One interface, many implementations | Long if/else chains on a type field | `PricingStrategy.price()` with several classes |
| Single responsibility (S) | A class has one reason to change | A `ParkingLot` class that also prints receipts and sends emails | Split into `ParkingLot`, `ReceiptPrinter`, `Notifier` |
| Open/closed (O) | Add behavior by adding code, not editing old code | Every new type edits the same switch statement | New split type in Splitwise = new class |
| Liskov substitution (L) | A subclass must work anywhere its parent works | A subclass throws "not supported" for a parent method | A `Penguin` that cannot `fly()` |
| Interface segregation (I) | Small, focused interfaces | Classes implement methods they do not need | Separate `Printable` and `Scannable` |
| Dependency inversion (D) | Depend on interfaces, inject the implementation | Services create their own concrete repositories | `OrderService(repo: OrderRepository)` |
| DRY, KISS, YAGNI | Do not repeat logic; keep it simple; do not build what nobody asked for | Speculative abstractions, copy-pasted code | Hello Interview lists all three |
| Composition over inheritance | Build behavior from parts you hold, not parents you extend | Subclass explosion (`CheesePizzaWithOlives`) | Decorator for pizza toppings |

Free reading: [DigitalOcean: SOLID](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design), [AlgoMaster: SOLID with code](https://blog.algomaster.io/p/solid-principles-explained-with-code), and Robert C. Martin's [original principles](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod).

## Design patterns that come up

Hello Interview argues most of the 23 classic patterns no longer matter and teaches 8: Factory Method, Builder, Singleton, Decorator, Facade, Strategy, Observer and State ([patterns page](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/patterns)). Learn those first. Add the rest if you target India product companies, which ask about patterns by name.

| Pattern | Use it when the prompt says | Example problem | Free link |
|---|---|---|---|
| Strategy | "Support several pricing, allocation or split algorithms" | Parking lot pricing, Splitwise splits, rate limiter algorithms | [refactoring.guru](https://refactoring.guru/design-patterns/strategy) |
| Observer | "Notify users or displays when something changes" | Pub-sub, stock price alerts, waitlists | [refactoring.guru](https://refactoring.guru/design-patterns/observer) |
| State | "It behaves differently in each state" | Vending machine, elevator, order lifecycle | [refactoring.guru](https://refactoring.guru/design-patterns/state) |
| Factory Method | "Different notification, payment or vehicle types" | Notification service, vehicle creation | [refactoring.guru](https://refactoring.guru/design-patterns/factory-method) |
| Builder | "Objects with many optional fields" | Building a complex order or query | [refactoring.guru](https://refactoring.guru/design-patterns/builder) |
| Singleton | "Exactly one shared instance" (use sparingly; it is hard to test) | Logger, configuration | [refactoring.guru](https://refactoring.guru/design-patterns/singleton) |
| Decorator | "Add features without a subclass for every combination" | Pizza billing with toppings, adding retries or logging | [refactoring.guru](https://refactoring.guru/design-patterns/decorator) |
| Facade | "A simple API over a complex subsystem" | Booking facade over seats, payment and email | [refactoring.guru](https://refactoring.guru/design-patterns/facade) |
| Command | "Undo, queue or log operations" | Text editor undo, job queue | [refactoring.guru](https://refactoring.guru/design-patterns/command) |
| Chain of Responsibility | "Pass a request through a series of handlers" | ATM cash dispensing, log levels, approvals | [refactoring.guru](https://refactoring.guru/design-patterns/chain-of-responsibility) |
| Adapter | "Integrate a third-party API with a different interface" | Payment providers, SMS providers | [refactoring.guru](https://refactoring.guru/design-patterns/adapter) |
| Composite | "Treat a group the same as a single item" | In-memory file system (files and folders) | [refactoring.guru](https://refactoring.guru/design-patterns/composite) |
| Template Method | "Same steps, one step varies" | Game turn loop, report generation | [refactoring.guru](https://refactoring.guru/design-patterns/template-method) |
| Iterator | "Walk a collection without exposing its structure" | Playlist, paginated results | [refactoring.guru](https://refactoring.guru/design-patterns/iterator) |

> **Watch out:** Forcing a pattern where the problem does not need one reads as over-engineering. Say the requirement first, then the pattern that serves it.

## Concurrency for LLD

Concurrency comes up in booking and counter problems: Flipkart seat booking, the PhonePe machine coding review, Databricks thread-safe writers, Walmart's BookMyShow and Salesforce trending counts (company pages). Learn this list:

- [ ] Race condition and critical section: two threads read-modify-write the same data.
- [ ] Locks: `synchronized` or `ReentrantLock` in Java, `threading.Lock` in Python. Lock per resource (per show, per account), not one global lock.
- [ ] Thread-safe collections and atomics: `ConcurrentHashMap`, `AtomicInteger`.
- [ ] Read-write locks when reads far outnumber writes.
- [ ] Producer-consumer with a blocking queue.
- [ ] Deadlock: always take locks in the same order.
- [ ] Database side: optimistic locking with a version column vs pessimistic row locks, and what each [isolation level](https://www.postgresql.org/docs/current/transaction-iso.html) allows.
- [ ] Idempotent operations so retries are safe.

Free reading: Hello Interview's [LLD concurrency intro](https://www.hellointerview.com/learn/low-level-design/concurrency/intro), the [Java concurrency tutorial](https://docs.oracle.com/javase/tutorial/essential/concurrency/), and Python's [threading docs](https://docs.python.org/3/library/threading.html).

Line to have ready: "`book()` checks and reserves the seat while holding the lock for that show, so two users can never get the same seat. Other shows are not blocked."

## Practice problems

AL = [awesome-low-level-design](https://github.com/ashishps1/awesome-low-level-design) (solutions in several languages), WT = [workat.tech machine coding](https://workat.tech/machine-coding/practice), HI = Hello Interview LLD, SDP = System Design Primer notebooks. Level labels for workat.tech prompts are its own.

| # | Problem | Level | What it teaches | Free write-ups | Reported at |
|---|---|---|---|---|---|
| 1 | Parking lot | SDE I | Entities, spot allocation strategy, pricing strategy, enums | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md), [WT](https://workat.tech/machine-coding/practice/design-parking-lot-qm6hwq4wkhp8), [SDP](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.ipynb), [LeetCode 1603](https://leetcode.com/problems/design-parking-system/) | [Amazon](../companies/amazon.md), [Goldman Sachs](../companies/goldman-sachs.md), [Oracle](../companies/oracle.md), [Uber](../companies/uber.md) |
| 2 | Elevator | SDE I to II | State machine, scheduling strategy, request queues, concurrency | [HI](https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/elevator), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/elevator-system.md) | [Pinterest](../companies/pinterest.md), [Roblox](../companies/roblox.md) |
| 3 | LRU cache | SDE I | Hash map plus doubly linked list for O(1) get and put; thread safety as the follow-up | [LeetCode 146](https://leetcode.com/problems/lru-cache/), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/lru-cache.md), [SDP](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.ipynb), then [LFU, LeetCode 460](https://leetcode.com/problems/lfu-cache/) | [Salesforce](../companies/salesforce.md), [Walmart](../companies/walmart.md), [Adobe](../companies/adobe.md), [Qualcomm](../companies/qualcomm.md), [Jane Street](../companies/jane-street.md) |
| 4 | Rate limiter (classes) | SDE I to II | Strategy for each algorithm, per-client state, thread safety | [BBG rate limiter](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter) for the algorithms | [Amazon](../companies/amazon.md), [Adobe](../companies/adobe.md) |
| 5 | Splitwise | SDE I to II | Split strategies (equal, exact, percent), balance graph, simplifying debts | [WT](https://workat.tech/machine-coding/practice/splitwise-problem-0kp2yneec2q2), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/splitwise.md) | [Salesforce](../companies/salesforce.md) |
| 6 | Snake and ladder | SDE I | Board, dice, players, turn loop, input parsing | [WT](https://workat.tech/machine-coding/practice/snake-and-ladder-problem-zgtac9lxwntg), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/snake-and-ladder.md) | [Morgan Stanley](../companies/morgan-stanley.md) |
| 7 | Library management | SDE I | Book vs BookItem, members, checkout and returns, fines, search | [WT](https://workat.tech/machine-coding/practice/design-library-management-system-jgjrv8q8b136), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/library-management-system.md) | [Salesforce](../companies/salesforce.md), [Oracle](../companies/oracle.md), [PhonePe](../companies/phonepe.md) |
| 8 | Tic-tac-toe or Connect Four | SDE I | Board representation, win detection, N x N extension | [HI Connect Four](https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/connect-four), [WT](https://workat.tech/machine-coding/practice/design-tic-tac-toe-smyfi9x064ry), [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/tic-tac-toe.md) | [Two Sigma](../companies/two-sigma.md) (Connect-7) |
| 9 | Amazon Locker | SDE I | Locker sizes, assignment, pickup codes, expiry | [HI](https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/amazon-locker) | [Amazon](../companies/amazon.md) |
| 10 | Vending machine | SDE I | State pattern (idle, has money, dispensing), inventory, change | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/vending-machine.md), [AL coffee machine](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/coffee-vending-machine.md) | |
| 11 | ATM | SDE I | State, Chain of Responsibility for cash dispensing | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/atm.md) | |
| 12 | Traffic signal | SDE I | State pattern, timers | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/traffic-signal.md) | |
| 13 | In-memory key-value store | SDE II to III | Data model, secondary search by attribute, type validation, thread safety | [WT](https://workat.tech/machine-coding/practice/design-key-value-store-6gz6cq124k65), [LeetCode 981](https://leetcode.com/problems/time-based-key-value-store/) | [Jane Street](../companies/jane-street.md), [Coinbase](../companies/coinbase.md), [LinkedIn](../companies/linkedin.md) |
| 14 | In-memory file system | SDE II | Composite pattern, path parsing, mkdir and ls | [refactoring.guru Composite](https://refactoring.guru/design-patterns/composite) (LeetCode 588 is Premium) | [Adobe](../companies/adobe.md), [eBay](../companies/ebay.md), [Oracle](../companies/oracle.md) |
| 15 | Logging framework | SDE II | Chain of Responsibility for levels, sinks as Strategy, thread safety | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md) | [PhonePe](../companies/phonepe.md) (logger with sinks) |
| 16 | Pub-sub system | SDE II | Observer, topics, subscribers, delivery | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/pub-sub-system.md) | [Adobe](../companies/adobe.md) |
| 17 | Movie ticket booking (BookMyShow) | SDE II | Seat locking, concurrency, booking and payment states | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/movie-ticket-booking-system.md), [AL concerts](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/concert-ticket-booking-system.md) | [Walmart](../companies/walmart.md), [Flipkart](../companies/flipkart.md) |
| 18 | Hotel management | SDE II | Rooms, reservations, booking states, payments | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/hotel-management-system.md) | [Expedia](../companies/expedia.md) |
| 19 | Food delivery | SDE II | Orders, restaurants, delivery assignment strategy | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md) | [Flipkart](../companies/flipkart.md) |
| 20 | Restaurant management | SDE II | Tables, orders, kitchen queue | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/restaurant-management-system.md) | [Flipkart](../companies/flipkart.md) |
| 21 | Ride sharing | SDE II | Matching strategy, trip states, pricing | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/ride-sharing-service.md) | [Lyft](../companies/lyft.md) |
| 22 | Digital wallet | SDE II | Balances, transfers, transaction history, idempotency | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/digital-wallet-service.md) | [PhonePe](../companies/phonepe.md) |
| 23 | Online auction | SDE II | Bids, auction states, concurrent bids | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-auction-system.md) | [Meta](../companies/meta.md) (as HLD) |
| 24 | Stack Overflow | SDE II | Users, questions, answers, votes, reputation | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/stack-overflow.md) | [D. E. Shaw](../companies/de-shaw.md) |
| 25 | Chess | SDE II | Piece rules through polymorphism, board validation, turns | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/chess-game.md) | |
| 26 | Task management (Trello-like) | SDE II | Boards, lists, cards, assignment, status changes | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/task-management-system.md) | |
| 27 | Car rental | SDE II | Inventory, reservations, availability windows | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/car-rental-system.md) | |
| 28 | Online shopping | SDE II | Catalog, cart, orders, payments | [AL](https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-shopping-service.md) | |

The full [awesome-low-level-design problem list](https://github.com/ashishps1/awesome-low-level-design) also covers airline management, course registration, music streaming, LinkedIn, Cricinfo and a stock brokerage.

## LeetCode design problems as warm-ups

These train the same skill in 20 to 40 minutes: pick the right data structures behind a class API.

| Free | Difficulty |
|---|---|
| [146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium |
| [460 LFU Cache](https://leetcode.com/problems/lfu-cache/) | Hard |
| [1603 Design Parking System](https://leetcode.com/problems/design-parking-system/) | Easy |
| [706 Design HashMap](https://leetcode.com/problems/design-hashmap/) | Easy |
| [155 Min Stack](https://leetcode.com/problems/min-stack/) | Medium |
| [622 Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | Medium |
| [208 Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium |
| [211 Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium |
| [380 Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | Medium |
| [355 Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium |
| [1396 Design Underground System](https://leetcode.com/problems/design-underground-system/) | Medium |
| [1472 Design Browser History](https://leetcode.com/problems/design-browser-history/) | Medium |
| [981 Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium |
| [1146 Snapshot Array](https://leetcode.com/problems/snapshot-array/) | Medium |
| [2353 Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/) | Medium |
| [1797 Design Authentication Manager](https://leetcode.com/problems/design-authentication-manager/) | Medium |
| [432 All O'one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) | Hard |

Premium only (checked Oct 2026): 362 Design Hit Counter, 359 Logger Rate Limiter, 348 Design Tic-Tac-Toe, 1166 Design File System, 588 Design In-Memory File System, 1244 Design A Leaderboard. Buy a month of Premium only if your target company tags them. More on lists in [Problem lists](../coding/problem-lists.md).

## Machine coding round playbook

### What the round looks like

- You get a written problem and 90 to 120 minutes. Flipkart's official prep doc describes a 120-minute block; 2025 to 2026 candidates report 90 minutes.
- You must hand in working, demonstrable code: modular, readable, with separation of concerns, a main method or simple command line to run it, and no UI ([workat.tech](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg)).
- A code review follows. Reviewers ask you to extend the code live, justify classes and patterns, explain concurrency, and sometimes draw the class diagram (Flipkart and PhonePe reports).

### Time plan

From workat.tech's [how to ace the round](https://workat.tech/machine-coding/article/how-to-ace-machine-coding-round-hi8lnpp8tlmo):

| Phase | Time | What to do |
|---|---|---|
| Read the problem | 5 to 10 min | Read carefully, list assumptions, ask clarifying questions |
| Design the solution | 10 to 15 min | Design for extension, estimate coding time, rank mandatory over optional requirements |
| Code | 60 to 75 min | Working code first, handle exceptions, clear names, use an IDE you know |
| Demo | The rest | Give a short overview, run sample inputs, offer to test more cases |

### Set up a starter project before the day

Build this once in your interview language and reuse it every practice session, so minute one goes to the problem, not to setup.

```text
JAVA
src/main/java/com/[you]/[app]/
  Main.java                 driver: builds objects, runs demo commands
  model/                    plain entities: User, Order, Slot
  repository/               interfaces + InMemory[Name]Repository (HashMap inside)
  service/                  business logic: BookingService, PaymentService
  strategy/                 swappable rules: PricingStrategy, AllocationStrategy
  exception/                custom exceptions: SlotUnavailableException
src/test/java/...           one JUnit test file per service

PYTHON
[app]/
  main.py                   driver
  models.py                 dataclasses
  repositories.py           abstract base class + in-memory dict implementation
  services.py
  strategies.py
  exceptions.py
tests/test_services.py      pytest
```

### During the round

1. Read the whole statement twice. Mark each requirement mandatory or optional.
2. Write your assumptions at the top of `Main` and ask the clarifying questions you have (input format, concurrency, persistence).
3. List entities and relationships, then decide which services own which operations.
4. Code models first, then repositories behind interfaces, then services, then the driver.
5. Get the first mandatory feature running end to end before you start the second. Run it.
6. Implement the remaining mandatory features in the order listed. PhonePe's instructions rank them by importance and say a partial solution on time beats a late one (reports).
7. Throw custom exceptions for invalid input so the demo never crashes.
8. Add optional features or thread safety only after every mandatory feature works.
9. Stop coding 10 minutes before the end. Prepare demo input and walk through it.

### The review: questions to expect

- "Why is this its own class?" and "Why this pattern here?"
- "Add [new rule or type] now." Count how many files you touch. Fewer is better.
- "What happens if two users call `book()` at the same time?"
- "Draw the class diagram."
- "How would you persist this, and what changes?"

> **Watch out:** Do not add features or methods nobody asked for. One 2026 PhonePe candidate was rejected for an extra sink-specific method on a logger API that leaked implementation details (reports).

### Self-review checklist

Run this after every practice session. Based on workat.tech's expectations.

- [ ] The code runs and I can demo it from a main method or simple command line.
- [ ] Every mandatory requirement works; optional ones came after.
- [ ] Models, services and repositories are separate.
- [ ] Names are clear; no god class; no 200-line method.
- [ ] I added one new requirement just now and it touched few files.
- [ ] Invalid input raises a clear exception instead of crashing.
- [ ] Storage sits behind an interface so it can be swapped later.
- [ ] I have sample input ready to show.
- [ ] I can name each pattern I used and say why.

### Company tips

| Company | Tip |
|---|---|
| [Flipkart](../companies/flipkart.md) | Practice 5 to 6 problems end to end at 90 minutes each (BNPL, quick commerce, food ordering, task scheduler, meeting room booking). Finish every P0 feature with running code before bonus items. In design rounds, write the complete schema; one candidate lost marks for a missing payments table |
| [PhonePe](../companies/phonepe.md) | Implement functions in the listed order and submit on time. Expect the review to focus on how `assign` and `book` behave under concurrent calls |
| [Atlassian](../companies/atlassian.md) | Open a blank project with a test framework (JUnit or pytest) before the round; you write, run and test on screen share. Finish part 1 fast and keep classes open for parts 2 and 3 |
| [Walmart Global Tech](../companies/walmart.md) | Reports say LLD rounds expect compiling Java code, not class diagrams alone: LRU with generics, ThreadPoolExecutor, BookMyShow with locking |
| [Salesforce](../companies/salesforce.md) | Write LRU and then LFU as clean classes with clear responsibilities; "production-ready" OOP is graded |

### 2-week machine coding plan

Run this alongside DSA. Each session is 90 to 120 minutes with runnable code.

- [ ] Day 1: Read workat.tech's [what is a machine coding round](https://workat.tech/machine-coding/article/what-is-a-machine-coding-round-omfn1w54ojlg), [how to practice](https://workat.tech/machine-coding/article/how-to-practice-for-machine-coding-kp0oj3sw2jca) and [how to ace it](https://workat.tech/machine-coding/article/how-to-ace-machine-coding-round-hi8lnpp8tlmo). Build your starter project.
- [ ] Day 2: [Snake and Ladder](https://workat.tech/machine-coding/practice/snake-and-ladder-problem-zgtac9lxwntg).
- [ ] Day 3: Self-review Day 2 against the checklist and rewrite the worst class.
- [ ] Day 4: [Tic-Tac-Toe](https://workat.tech/machine-coding/practice/design-tic-tac-toe-smyfi9x064ry).
- [ ] Day 5: [Parking Lot](https://workat.tech/machine-coding/practice/design-parking-lot-qm6hwq4wkhp8).
- [ ] Day 6: [Splitwise](https://workat.tech/machine-coding/practice/splitwise-problem-0kp2yneec2q2).
- [ ] Day 7: Review the patterns you used; read the three you did not ([pattern table](#design-patterns-that-come-up)).
- [ ] Day 8: [Library Management](https://workat.tech/machine-coding/practice/design-library-management-system-jgjrv8q8b136).
- [ ] Day 9: [In-memory key-value store](https://workat.tech/machine-coding/practice/design-key-value-store-6gz6cq124k65).
- [ ] Day 10: One reported prompt from your target company (table above), written from the description alone.
- [ ] Day 11: Make your booking solution thread-safe and write a test that runs two threads against it.
- [ ] Days 12 and 13: Two timed sessions with a friend who adds a new requirement at minute 60. Extend without rewriting.
- [ ] Day 14: Redo your weakest problem from scratch and practice naming every pattern out loud.

## LLD resources (free first)

| Resource | What it is | How to use it |
|---|---|---|
| [awesome-low-level-design](https://github.com/ashishps1/awesome-low-level-design) | OOP, SOLID, all classic patterns, UML, concurrency, and a problem list with solutions in several languages | Use its problem list as your practice queue after the 28 above |
| [Hello Interview: LLD in a Hurry](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction) (freemium) | Free: intro, delivery, principles, OOP, patterns, concurrency intro, and the Amazon Locker, Connect Four and Elevator breakdowns. Premium: parking lot, rate limiter, BookMyShow, file system, inventory, logging | Read every free page in week 3 of the [4-week plan](index.md#4-week-plan-new-grad-sde-i-lld-heavy-loops) |
| [refactoring.guru: Design patterns](https://refactoring.guru/design-patterns) (free, paid ebook) | Illustrated explanation of each pattern with code in many languages | Read one pattern a day with its code in your language |
| [AlgoMaster LLD](https://algomaster.io/learn/lld) (freemium) | Articles per pattern and concept, including [class diagrams](https://algomaster.io/learn/lld/class-diagram) | Learn enough UML to sketch a class diagram in the review |
| [AlgoMaster: How to answer an LLD problem](https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem) | A step-by-step answer structure | Read before your first timed LLD |
| [System Design Primer: OOD notebooks](https://github.com/donnemartin/system-design-primer#object-oriented-design-interview-questions-with-solutions) | Python notebooks: hash map, LRU cache, call center, deck of cards, parking lot, online chat | Read the LRU and parking lot notebooks after you attempt them |
| [iluwatar/java-design-patterns](https://github.com/iluwatar/java-design-patterns) | Every pattern implemented in Java | Java users: read the implementation of each pattern you learn |
| [faif/python-patterns](https://github.com/faif/python-patterns) | Patterns and idioms in Python | Python users: same use |
| [workat.tech machine coding](https://workat.tech/machine-coding/practice) | Real prompts labeled by level; the articles say they were written a few years ago | Your machine coding practice set |
| [kumaransg/LLD](https://github.com/kumaransg/LLD) | Collection of LLD questions and implementations | Extra problems; code quality varies |
| [Concept&Coding on YouTube](https://www.youtube.com/@ConceptandCoding) | LLD and HLD channel widely used by India candidates | Watch a problem video only after you attempt it |
| [Hello Interview Premium](https://www.hellointerview.com/pricing) (paid) | Premium LLD breakdowns and guided practice | Only after the free set is done |

> **Watch out:** GitHub repos that copy the paid "Grokking the Object Oriented Design Interview" text appear to be unauthorized mirrors. Skip them.

Next: [System design resources](resources.md)
