# Expedia Group interview guide

Travel platform (Expedia, Hotels.com, Vrbo, B2B). Known for 3-question HackerRank OAs, runnable-code DSA rounds, travel-domain LLD, and behaviors-based STAR interviews. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | SDE Intern / Software Development Engineer Intern (8 to 14 weeks, May or June start). |
| **New grad level** | Software Development Engineer I (Levels.fyi level J, 'Software Engineer I', entry level); Graduate Program in some regions. |
| **0 to 3 years** | SDE I (J) for 0 to 2 yrs; SDE II (K) for roughly 2 to 4 yrs in 2025 to 2026 India posts; SDE III (L) above. |
| **Online assessment** | HackerRank (coding challenge); emerging-talent applicants also take strength-based and skills assessments (official). : 3 coding questions, 90 min (one Apr 2025 report: 105 min; one Jun 2026 SDE-2 report: 2 questions); typically 1 easy + 2 medium, sometimes medium-hard graph or DP. Examples: running discount by previous minimum price, maximum palindromes after swaps, minimum team window covering all talents, group deactivation, simple cipher, area of triangle, connected groups, min partitions, shopping-cart billing with discount tags. |
| **Coding rounds** | 2 DSA rounds for SDE I/II in India (2 problems each, 45 to 60 min); a 60-min technical screen for experienced hires (confirmed for US SDE-2 in 2026). |
| **Behavioral** | Expedia Group Behaviors: Traveler First, Think Big, Operate with Excellence, Ownership Mindset, Succeed Together. The official interview guide includes a 'cultural assessment in relation to our Behaviors' and models behavioral questions on 'The Star Technique' (Situation, Task, Action, Result). |
| **Timeline** | OA link about 2 weeks after applying (Aug 2025 post); HR call about 1 week after the OA (Apr 2025). Many candidates who solved every OA question report no response, and portal status changes to 'Not Selected'. A hiring drive ran in the third week of Feb 2025 (location not stated), and a Gurugram SDE-2 offer is dated Feb 2025. Graduate Program starts January or August; internships start May or June (official). No hiring committee or team-match stage reported. |
| **New grad pay** | US (Levels.fyi, as of Oct 4, 2026): Software Engineer I (level J, entry) median total comp about $125K (base $118K, stock $4.4K/yr, bonus $2.5K); Software Engineer II (K) about $168K. India (Levels.fyi Greater Bengaluru): J median about Rs 19.1 lakh, K about Rs 37.5 lakh. Reported India 2026 new grad SDE 1 offer: Rs 18 lakh base, $15K stock over 3 years (34/33/33), $5K relocation, first-year about Rs 28.7 lakh (Jul 2026). India on-campus intern stipend: Rs 40K/month plus hotel stay (Oct 2025). India SDE-2 (Feb 2025, 2.5 YOE): Rs 23 lakh + PF, Rs 2 lakh sign-on over 2 years, $11K stock over 4 years (40/30/20/10). |
| **Official links** | [Careers](https://careers.expediagroup.com/), [Students](https://careers.expediagroup.com/emerging-talent-and-careers/), [Official interview prep](https://careers.expediagroup.com/interview-guide/), [Values](https://careers.expediagroup.com/life/) |

## Interview process

### New grad

1. **Application + assessments.** Official Emerging Talent process: apply via the website or career fairs and complete strength-based and skills assessments. Max 5 applications per 45 days (FAQ). Reported OA: HackerRank, 3 questions in 90 min (one report: 105 min), easy to medium-hard, wordy implementation problems.
2. **Two virtual interviews.** Official Emerging Talent step 2: two virtual interviews covering specialized (technical) and behavioral competencies, anchored on the five Behaviors. Reported technical rounds use a HackerRank compiler and expect complete code run against test cases.
3. **Offer.** Recruiter notifies you with next steps (official). India new grad 2026 SDE 1 offers reported in July 2026; India campus interns received PPOs about a month after the internship.

### Intern

1. **Apply.** Official: internships last 8 to 14 weeks, start in May or June, in Montreal, Bangalore, Gurgaon, London, Austin, Chicago and Seattle. Over 280 interns in summer 2026 (careers blog, Sep 21, 2026; the seven featured interns were in London, San Jose, Bangalore, Gurgaon and Seattle). A Workday search on Oct 4, 2026 found no 2027 SDE intern posting yet.
2. **Assessment.** Strength-based and skills assessments (official). HackerRank coding OA historically: a Summer 2023 intern OA included a 'binary game' counting good binary strings (matches LC 2533 Number of Good Binary Strings, premium), reported as hard.
3. **Interviews.** Two virtual interviews, specialized + behavioral (official). India on-campus intern offers reported Oct 2025 (Gurgaon).
4. **Conversion.** India on-campus interns report PPOs about one month after the internship ended (Dec 2024 and Oct 2025 posts).

### With 1 to 3 years of experience

India SDE II (2 to 4 yrs) loop, 2025 to 2026: HackerRank OA (3 questions, 90 min) then 4 rounds, usually 2 on one day and 2 later: R1 and R2 DSA (2 problems each, write full code and run tests in HackerRank; medium to hard: Capacity To Ship Packages, Best Time to Buy and Sell Stock IV, Kosaraju-type graph), R3 LLD with working code (OTP notification, password manager, Spotify, 2-day delivery API, hotel search) or HLD (web crawler, hotel search with prices), R4 hiring manager (in-depth project discussion, STAR scenarios). One recruiter said no HLD for SDE-2 (Sep 2025); other SDE-2 loops had HLD, including an Oct 2026 candidate who cleared earlier rounds and was waiting on HLD + HM, so ask. Experienced hires (US and senior roles): recruiter call, a 60-minute technical screen with an engineer (2 problems run against test cases; a Mar 2026 senior post, location not stated), then a loop; a Jun 2026 post confirms a US SDE-2 technical screen. SDE III screens use harder problems (Maximum Frequency Stack, Sliding Window Maximum).

## Online assessment

- **Platform:** HackerRank (coding challenge); emerging-talent applicants also take strength-based and skills assessments (official).
- **Format:** 3 coding questions, 90 min (one Apr 2025 report: 105 min; one Jun 2026 SDE-2 report: 2 questions); typically 1 easy + 2 medium, sometimes medium-hard graph or DP. Examples: running discount by previous minimum price, maximum palindromes after swaps, minimum team window covering all talents, group deactivation, simple cipher, area of triangle, connected groups, min partitions, shopping-cart billing with discount tags.
- **Notes:** Solving everything does not guarantee a call: an Aug 2025 applicant solved all 3 in 30 min and the portal later showed 'Not Selected'. In live technical screens, partial passes failed: a Mar 2026 SDE3 candidate passed 12/15 tests with brute force on a sliding-window-maximum variant and was rejected. Problem statements are long; read constraints (n up to 10^6).

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** 2 DSA rounds for SDE I/II in India (2 problems each, 45 to 60 min); a 60-min technical screen for experienced hires (confirmed for US SDE-2 in 2026).
- **Style:** LeetCode medium with some hard; implementation-heavy problems with travel data (hotel availability windows, reviews matched to preferred words).
- **Environment:** HackerRank-based compiler; you write complete code and run it on test cases. Technical screens also run tests (a Mar 2026 senior candidate passed 2 of 3 cases and still advanced).
- **Graded on:** Working code that passes tests, coding speed, clean structure, and complexity. One Oct 2025 SDE-2 candidate got 'no hire' in DSA for slow typing and too much discussion despite a correct approach, with hire in design and HM.
- **Reported focus topics:** Intervals and greedy scheduling: merge intervals, events, job scheduling, Sliding window and deque: talents window, sliding window maximum, Binary search on the answer: capacity to ship, Hashing and strings: anagrams, palindromes, consecutive sequence, Stacks and monotonic stacks, parentheses, Linked lists and trees: reorder list, delete nodes and return forest, DP: stock problems, rod cutting variants, Caches and frequency structures: LRU, LFU, max frequency stack, LLD with working code: notification, password manager, delivery API, Travel-domain HLD: hotel search, pricing, availability

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **16** distinct problems tagged to Expedia Group in the last 6 months (1 in the last 30 days, 2 in the last 3 months, 69 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 69%, Hard 19%, Easy 12%

**Most tagged topics (share of problems):** Array 62%, Hash Table 38%, String 25%, Stack 19%, Design 19%, Greedy 12%, Linked List 12%, Doubly-Linked List 12%, Sorting 12%, Heap (Priority Queue) 12%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Using a Robot to Print the Lexicographically Smallest String](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) | Medium | 30 days | Hash Table, String, Stack, Greedy |
| 2 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | Hard | 3 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 3 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 6 months | Array, Hash Table, String, Sorting |
| 4 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | 6 months | Array, Sorting, Quicksort |
| 5 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 6 months | Array, Hash Table |
| 6 | [Count and Say](https://leetcode.com/problems/count-and-say/) | Medium | 6 months | String |
| 7 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | Medium | 6 months | Array, Greedy, Heap (Priority Queue) |
| 8 | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | Easy | 6 months | Array, Prefix Sum |
| 9 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 10 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | 6 months | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 11 | [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) | Medium | 6 months | Math, String, Stack |
| 12 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Medium | 6 months | Array, Binary Search |
| 13 | [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) | Hard | 6 months | Hash Table, Stack, Design, Ordered Set |
| 14 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | 6 months | Array, Dynamic Programming |
| 15 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | 6 months | Array, Binary Search |
| 16 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |

### Signature problems

Problems where Expedia Group accounts for a large share of all recent tags across companies. These are the most Expedia Group-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Using a Robot to Print the Lexicographically Smallest String](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) | Medium | 30 days | Hash Table, String, Stack, Greedy |
| 2 | [Count and Say](https://leetcode.com/problems/count-and-say/) | Medium | 6 months | String |
| 3 | [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) | Medium | 6 months | Array, Greedy, Heap (Priority Queue) |
| 4 | [Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) | Hard | 6 months | Hash Table, Stack, Design, Ordered Set |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| OA: total cost when each item is discounted by the minimum previous price (floored at 0), n up to 10^6 | Software Engineer 2 (OA) | 2026-03 | [post](https://leetcode.com/discuss/post/7632660/expedia-software-engineer-12-online-asse-7ure/) |
| [OA: maximum number of palindromes after swapping letters across strings](https://leetcode.com/problems/maximum-palindromes-after-operations/) | Software Engineer 2 (OA) | 2026-03 | [post](https://leetcode.com/discuss/post/7632660/expedia-software-engineer-12-online-asse-7ure/) |
| OA: for every start index, minimum consecutive students covering all talent types (sliding window); also seen in Aug 2025 OA | Software Engineer 2 (OA) | 2026-03 | [post](https://leetcode.com/discuss/post/7632660/expedia-software-engineer-12-online-asse-7ure/) |
| OA: deactivate at least ceil(n/2) transformers by whole groups, minimize groups; min prefix of s forming a permutation of each query string | SWE II (OA, 3 questions, 90 min) | 2025-08 | [post](https://leetcode.com/discuss/post/7138563/expedia-swe-ii-oa-solved-all-no-response-23ne/) |
| [OA (HackerRank, 105 min): Area of Triangle, Simple Cipher, Connected Groups (same idea as Number of Provinces)](https://leetcode.com/problems/number-of-provinces/) | SDE (coding challenge) | 2025-04 | [post](https://leetcode.com/discuss/post/6687648/expedia-group-sde-coding-challenge-by-an-u82q/) |
| [Longest Consecutive Sequence, then Reorder List](https://leetcode.com/problems/longest-consecutive-sequence/) | SDE-2 (Bangalore) | 2025-10 | [post](https://leetcode.com/discuss/post/7289927/expedia-interview-experience-bangalore-s-g1wu/) |
| [Find Minimum in Rotated Sorted Array (same round: longest substring with distinct characters)](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | SDE-2 (Bangalore) | 2025-10 | [post](https://leetcode.com/discuss/post/7289927/expedia-interview-experience-bangalore-s-g1wu/) |
| LLD: API that decides whether a product can be delivered within 2 days for a pincode (data model, extensibility, failure handling) | SDE-2 (Bangalore) | 2025-10 | [post](https://leetcode.com/discuss/post/7289927/expedia-interview-experience-bangalore-s-g1wu/) |
| [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | SDE-2 | 2026-03 | [post](https://leetcode.com/discuss/post/7724675/expedia-sde-2-by-anonymous_user-lxcn/) |
| [Capacity To Ship Packages Within D Days, then Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | SDE-2 | 2026-03 | [post](https://leetcode.com/discuss/post/7724675/expedia-sde-2-by-anonymous_user-lxcn/) |
| [Subarray Sum Equals K (full code run on test cases in HackerRank); second problem similar to Letter Combinations of a Phone Number](https://leetcode.com/problems/subarray-sum-equals-k/) | SDE-II, 3+ YOE (offer) | 2025-04 | [post](https://leetcode.com/discuss/post/6646444/expedia-interview-experience-sde2-2025-b-spty/) |
| [Sort Colors, then an extension of Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) | SDE-II, 3+ YOE (offer) | 2025-04 | [post](https://leetcode.com/discuss/post/6646444/expedia-interview-experience-sde2-2025-b-spty/) |
| LLD: OTP-based notification system with interfaces, service classes and code, then pattern-based changes | SDE-II, 3+ YOE (offer) | 2025-04 | [post](https://leetcode.com/discuss/post/6646444/expedia-interview-experience-sde2-2025-b-spty/) |
| HLD then LLD: hotel search showing prices for check-in/check-out with tax/base breakdown and currency formatting; coding: hotels with continuous availability and their prices | SDE-2 (Gurugram) | 2025-10 | [post](https://leetcode.com/discuss/post/7297578/expedia-sde-2-interview-experience-rejec-objl/) |
| LLD: password management system (create, edit, forgot password via token, password policies) | SDE-2, 3 YOE (Bengaluru) | 2025-09 | [post](https://leetcode.com/discuss/post/7225501/expedia-sde-2-bengaluru-by-anonymous_use-l8b6/) |
| [Fruit Into Baskets and Valid Parentheses; next round Generate Parentheses; LLD music streaming (Spotify)](https://leetcode.com/problems/fruit-into-baskets/) | SDE-2 (offer) | 2025-06 | [post](https://leetcode.com/discuss/post/6817178/oracleic2ic3-and-expediasde2-interview-e-vlse/) |
| [Minimum operations to make all elements unique while minimizing sum (close to Minimum Increment to Make Array Unique) and a monotonic stack problem; HLD web crawler](https://leetcode.com/problems/minimum-increment-to-make-array-unique/) | SDE-2, about 4 YOE (Gurgaon) | 2025-11 | [post](https://leetcode.com/discuss/post/7382261/expedia-sde-2-gurgaon-by-anonymous_user-v0hy/) |
| [US technical screen: Merge Intervals, then max profit from non-overlapping trades (buy, sell, profit) (weighted interval scheduling)](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | Senior Software Engineer (technical screen, location not stated) | 2026-03 | [post](https://leetcode.com/discuss/post/7620822/expedia-senior-software-engineer-technic-wr9t/) |
| Maximize workshop productivity within a labour budget using binary search; design round: Selenium web scraper comparing Expedia and Booking | SDE 1 (web scraping), 2 yr 8 mo YOE (Gurugram) | 2025-01 | [post](https://leetcode.com/discuss/post/7662397/expedia-sde-1-interview-experience-jan-2-wyeb/) |
| [Valid Parentheses; return hotel IDs whose reviews contain the most preferred words; design a notification service](https://leetcode.com/problems/valid-parentheses/) | SDE2 (hiring drive) | 2025-02 | [post](https://leetcode.com/discuss/post/6637666/expedia-sde2-reject-by-anonymous_user-hh88/) |

## Beyond LeetCode

Travel-domain implementation rounds (filter hotels with continuous availability for check-in/check-out and compute prices; rank hotels by preferred words in reviews). LLD rounds require runnable code with patterns. One SDE 1 design round required Selenium automation code. Official skills assessments may include a business case or work sample for some roles.

## System design

Early career gets LLD more often than HLD: SDE-2 loops (2 to 4 yrs) asked LLD with working code (OTP-based notification service, password management with token-based reset, Spotify, API deciding 2-day delivery by pincode) and travel-flavored HLD + LLD (hotel search with tax/base price breakdown and currency formatting; web crawler). SDE 1 (2.8 yrs) had a design round to build a Selenium web scraper comparing Expedia and Booking. New grads: no design round reported; the official 2 virtual interviews are technical + behavioral.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** Expedia Group Behaviors: Traveler First, Think Big, Operate with Excellence, Ownership Mindset, Succeed Together. The official interview guide includes a 'cultural assessment in relation to our Behaviors' and models behavioral questions on 'The Star Technique' (Situation, Task, Action, Result). ([official page](https://careers.expediagroup.com/life/))

**What they look for:**

- How your skills and experience fit the role (official guide)
- Compatibility with and addition to the culture (official guide)
- How you behave and think, shown through STAR examples (official guide)
- Ownership of past projects: every component and tech choice gets questioned (HM rounds)
- Candor and collaboration: debate, disagree, then commit (Succeed Together)

**Questions to prepare:**

- How do you handle conflicts with teammates?
- Why are you leaving your current organization?
- What will be your reaction if you don't get promoted to SDE3?
- Tell me about your most challenging project.
- Walk me through a day at work.
- Describe the most difficult production issue you solved.
- Tell me about a time you showed leadership.

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Read Expedia's official interview guide and prepare 2 STAR stories per Behavior (Traveler First, Think Big, Operate with Excellence, Ownership Mindset, Succeed Together).
- For the HackerRank OA, practice long-statement implementation problems under time: 3 questions in 90 min. Even a full solve can end in 'Not Selected', so apply to several roles within the 5-per-45-days cap.
- In DSA rounds type fast and run your code against tests: a 2025 SDE-2 got 'no hire' in DSA for slow typing and too much talking despite a correct approach.
- Prepare travel-domain designs: hotel search with price breakdown and currency, availability windows, notifications, 2-day delivery API.
- For LLD, write runnable classes and interfaces with Strategy, Observer and Singleton where they fit; interviewers asked for code after the class design.
- Apply selectively: Expedia's FAQ caps candidates at 5 applications in 45 days.
- Indian students: on-campus SDE internships in Gurgaon have converted to PPOs about a month after the internship.
- Drill intervals and heaps: Merge Intervals and weighted interval scheduling appeared in a Mar 2026 senior technical screen, and Merge Intervals is a top Expedia-tagged problem.

## 4-week plan for Expedia Group

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the Expedia Group Behaviors: Traveler First, Think Big, Operate with Excellence, Ownership Mindset, Succeed Together. The official interview guide includes a 'cultural assessment in relation to our Behaviors' and models behavioral questions on 'The Star Technique' (Situation, Task, Action, Result). round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://careers.expediagroup.com/ [VERIFIED]>
- <https://careers.expediagroup.com/emerging-talent-and-careers/ [VERIFIED: internship, graduate, apprenticeship programs and 3-step process]>
- <https://careers.expediagroup.com/interview-guide/ [VERIFIED: official interview guide; skills assessment, cultural assessment against Behaviors, 'The Star Technique']>
- <https://careers.expediagroup.com/life/ [VERIFIED: five Behaviors listed 1 to 5]>
- <https://careers.expediagroup.com/faq/ [VERIFIED: 'You can apply for up to 5 opportunities with us in 45 days']>
- <https://careers.expediagroup.com/technology/ [VERIFIED]>
- <https://careers.expediagroup.com/blog/how-7-expedia-group-interns-helped-shape-the-future-of-travel/ [VERIFIED: published Sep 21, 2026; 'over 280 Expedia Group interns' this summer]>
- <https://expedia.wd108.myworkdayjobs.com/search/job/Canada---British-Columbia---Vancouver/Software-Development-Engineer-I_R-109478 [VERIFIED via Workday CXS API: SDE I, Vancouver, posted Oct 2, 2026; page renders client-side]>
- <https://www.levels.fyi/companies/expedia-group/salaries/software-engineer [VERIFIED]>
- <https://www.levels.fyi/companies/expedia-group/salaries/software-engineer/locations/greater-bengaluru [VERIFIED]>
- <https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Expedia [VERIFIED: liquidslr/leetcode-company-wise-problems, 31,050 stars as of Oct 4, 2026, last data update Aug 16, 2026]>
- <https://leetcode.com/discuss/post/7632660/expedia-software-engineer-12-online-asse-7ure/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7138563/expedia-swe-ii-oa-solved-all-no-response-23ne/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6687648/expedia-group-sde-coding-challenge-by-an-u82q/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6511995/expedia-oa-by-anonymous_user-ku8m/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7289927/expedia-interview-experience-bangalore-s-g1wu/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7724675/expedia-sde-2-by-anonymous_user-lxcn/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6646444/expedia-interview-experience-sde2-2025-b-spty/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7297578/expedia-sde-2-interview-experience-rejec-objl/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7225501/expedia-sde-2-bengaluru-by-anonymous_use-l8b6/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/6817178/oracleic2ic3-and-expediasde2-interview-e-vlse/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7620822/expedia-senior-software-engineer-technic-wr9t/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7653628/expedia-sde3-technical-screen-reject-by-q95l1/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7643048/expedia-sde3-technical-screen-reject-by-bu1yg/ [VERIFIED via LeetCode API]>
- <https://leetcode.com/discuss/post/7662397/expedia-sde-1-interview-experience-jan-2-wyeb/ [VERIFIED via LeetCode API]>

> **Watch out:** 2025 to 2026 reports are mostly India SDE-2 (Bengaluru, Gurgaon); US new grad and intern loop details are thin (US-tagged data: a Jun 2026 post confirming a US SDE-2 technical screen and an Oct 2022 Summer 2023 intern OA; the Mar 2026 senior screen does not state its location), so the US early-career flow leans on the official Emerging Talent page (assessments + 2 virtual interviews). Whether SDE-2 includes HLD varies by team and recruiter. OA length is usually 90 min but one report says 105 min. Expedia has an official interview guide but it is general, with no coding specifics. Reddit, Glassdoor and Blind could not be fetched in this session. LeetCode Discuss pages were read through LeetCode's GraphQL API because the HTML pages block automated fetches. Fact-check Oct 4, 2026: all LeetCode Discuss sources re-read via the GraphQL API; the '8/15 or 10/15 tests rejected' claim had no source and was replaced with the sourced 12/15 SDE3 screen; US and Gurgaon labels removed where posts did not state a location; careers URLs given their canonical trailing-slash form.

Next: [All companies](index.md)
