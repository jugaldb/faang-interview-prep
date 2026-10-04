# Nvidia interview guide

GPUs, CUDA and AI infrastructure. Interviews mix LeetCode-medium coding with C/C++, OS, concurrency and team-specific domain depth; full-time offers need an in-person onsite. Updated October 2026.

| | |
|---|---|
| **Category** | Big Tech |
| **Intern level** | Intern (unleveled, minimum 12 weeks, BS/MS/PhD, year-round). Ignite: 12-week summer pre-internship for current freshmen and sophomores. |
| **New grad level** | IC1 (title Software Engineer) for most bachelor's new college grads, including Sep 2026 return offers; IC2 is also reported for new grads (an Apr 2026 Deep Learning Algorithms new grad offer), and an MS/PhD NCG posting quotes base ranges for 'Level 2' and 'Level 3'. |
| **0 to 3 years** | IC1 to IC2 for 0 to about 2 yrs (Levels.fyi lists typical experience of 1 to 2 years for both); IC3 'Senior' from about 3 to 4 yrs. |
| **Online assessment** | HackerRank (official 'How we hire' page; India campus and US automation roles report HackerRank) : Team-dependent. Many US SWE candidates skip a standalone OA and go straight to recruiter and technical screens. When used: Aced reports a 75-minute HackerRank test with at least two DSA questions plus multiple-choice questions; India campus OAs are about 60 minutes with aptitude, C/C++ output and OS or computer architecture MCQs plus 2 coding questions. |
| **Coding rounds** | New grad: 1 technical screen plus 1 to 3 coding rounds in the final loop. Intern: 1 to 3 interviews, often on one day. |
| **Behavioral** | NVIDIA core values (Code of Conduct): Innovation; Intellectual Honesty; Speed and Agility; Excellence and Determination (the 'Speed-of-Light' test); One Team. Behavioral content is usually folded into the hiring manager round rather than a separate structured round. |
| **Timeline** | Interns: postings open mid to late August (2027 umbrella requisition opened Aug 19, 2026); Simplify says applying in November or December significantly lowers your chances and decisions take 4 to 8 weeks. Ignite opens later in the fall with a short window. Full-time: 'a matter of weeks from their first interview' (official). Reports: 1 to 5 weeks end to end; senior India loop about 1.5 months then silence (Sep 2026). India campus: placements run from Dec 1 at IITs with a single 90 minute technical round plus HR on the day. |
| **New grad pay** | Levels.fyi US software engineer data (page read Oct 4, 2026): IC1 about $169K total comp (base $142K, stock $18.7K/yr, bonus $8.5K); IC2 about $240K (base $176K, stock $60.6K/yr); IC3 about $323K. India (Levels.fyi USD figures at the site rate of about 94.5 INR/USD): IC1 about 28.5 lakh INR, IC2 about 36.5 lakh. Official NCG posting (Systems Software Engineer, New College Grad 2026, MS or PhD): base $124,000 to $195,500 for Level 2 and $152,000 to $241,500 for Level 3, plus equity. Interns (official 2027 posting): $20 to $71 per hour; Simplify reports undergrad roles at about $50 to $70 per hour and PhD research up to $94 per hour. India NCG IC1 (2025 report): base 18.25 lakh INR with 24 lakh INR of equity vesting 40/30/20/10 over 4 years. |
| **Official links** | [Careers](https://www.nvidia.com/en-us/about-nvidia/careers/), [Students](https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/), [Official interview prep](https://www.nvidia.com/en-us/about-nvidia/careers/how-we-hire/), [Values](https://images.nvidia.com/aem-dam/en-zz/Solutions/about-us/NVIDIA-Code-of-Conduct-External.pdf) |

## Interview process

### New grad

1. **Apply.** Apply on Workday (jobs.nvidia.com) to role-specific requisitions titled '... - New College Grad 2026' or '2027'. Official advice: limit applications to your top three to five roles. The official university page calls the intern program the primary pipeline for new college grad hiring. Postings note that NVIDIA uses AI tools in its recruiting processes.
2. **Recruiter or hiring manager screen.** Phone or video. Often the first round is the hiring manager: resume and detailed project discussion, sometimes ending with a short coding task (spiral matrix in the last 15 minutes, Jun 2025 report).
3. **Technical screen.** About 1 hour with a team engineer: 1 to 2 LeetCode medium problems plus team-specific questions (CUDA, inference engines, Kubernetes, C++). Official: technical roles may include coding exercises via HackerRank. Some roles add a 45 minute discussion round (for example AI efficiency and large-scale systems for a 2026 new grad performance role).
4. **Onsite (in person for full-time).** Official: an onsite, in-person interview at an NVIDIA office before you can be considered for an offer. Interviews are 30 to 60 minutes each, one-on-one, small group or panel; 3 to 5 rounds mixing coding, C/C++ and OS fundamentals, domain depth, design and a hiring manager conversation. Optional 15 minute 'Insider Chat' with a Community Resource Group member.
5. **Decision.** Official: most decisions arrive within weeks of the first interview. Candidate reports range from about 1 week to 5+ weeks, with some silence after loops.

### Intern

1. **Apply to the umbrella posting.** 'NVIDIA 2027 Internships: Software Engineering' opened Aug 19, 2026; resumes are reviewed on an ongoing basis and a recruiter reaches out if you fit one of many internships. Your anticipated graduation month and year must be on the resume.
2. **Recruiter outreach.** Many US candidates get no OA: a recruiter reaches out directly (Sep 2026 System Software intern report). Others report OAs for some 2027 roles (Aug 2026 Reddit thread).
3. **Technical interviews.** Official: interns typically have phone interviews only. Simplify: one coding technical screen at LeetCode medium level, then 2 to 4 final rounds mixing coding and system design or domain questions. Sep 2026 System Software intern (cloud and infrastructure): three one-hour interviews on the same day.
4. **India campus intern (SSE).** OA of about 60 minutes with aptitude, C/C++ and OS MCQs and 2 coding questions (one DP, one greedy), then usually 1 technical interview (sometimes two panelists, 55 to 60 minutes): pointers, memory management, C++ output questions, OS synchronization, 1 to 2 DSA questions, 'Why NVIDIA?'
5. **Ignite (first and second years).** Simplify: application screening, an initial call (behavioral plus basic technical), then a small technical interview with LeetCode easy to medium problems. Jugal (citing Extern) reports Ignite had a 13-day application window in the 2026 cycle.

### With 1 to 3 years of experience

For 1 to 3 years (IC2 or IC3), the loop is longer and more team-specific: a hiring manager round, a coding screen, then 3 to 5 interviews often on one day, including C or C++ without the STL (implement a hashmap, malloc, printf, string functions), code review rounds where you find bugs in Python code (2026 reports), LLD (parking lot, syncing user data across third-party apps), system or architecture discussion tied to the team's product, and detailed discussions on Kubernetes, Linux drivers, networking or CUDA depending on the role. Compensation and motivation can come up repeatedly in experienced India loops.

## Online assessment

- **Platform:** HackerRank (official 'How we hire' page; India campus and US automation roles report HackerRank)
- **Format:** Team-dependent. Many US SWE candidates skip a standalone OA and go straight to recruiter and technical screens. When used: Aced reports a 75-minute HackerRank test with at least two DSA questions plus multiple-choice questions; India campus OAs are about 60 minutes with aptitude, C/C++ output and OS or computer architecture MCQs plus 2 coding questions.
- **Notes:** India campus OAs are easy to pass but shortlists are small (one 2025 report: 5 students cleared). Pointers and C questions dominate MCQs. Official policy: using unapproved outside tools such as ChatGPT during interviews leads to disqualification.

Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).

## Coding rounds

- **Rounds:** New grad: 1 technical screen plus 1 to 3 coding rounds in the final loop. Intern: 1 to 3 interviews, often on one day.
- **Style:** Mostly LeetCode easy to medium with occasional hards, plus low-level implementation: data structures written from scratch (linked list, hashmap without STL, malloc), pointer arithmetic, bit manipulation and endianness, C++ output prediction. Interviewers care about complexity and clean code more than syntax. interviewing.io: no internal question bank, so interviewers choose freely and questions are 'more practical'.
- **Environment:** HackerRank live editor (official mention) or shared editor over video for screens; in-person onsite for full-time offers. C++ matters for systems, CUDA and driver roles; Python is common for cloud, tools and ML teams; confirm the language with the recruiter.
- **Graded on:** Correct and efficient solutions with complexity analysis, depth of low-level understanding (memory, concurrency, OS), clean code, and how well you know every line of your own projects.
- **Reported focus topics:** C and C++: pointers, memory layout, stack vs heap, virtual functions, writing malloc, free and printf, Operating systems: paging, thrashing, context switching, scheduling, user vs kernel mode, Concurrency: threads, mutexes, semaphores, spinlocks, race conditions, lock granularity, Linked lists, trees (views, LCA, serialization), arrays and strings, Graphs and shortest paths; binary search on the answer, Bit manipulation and endianness, Domain depth for the team: CUDA and GPU architecture, inference (TensorRT, vLLM), Kubernetes, Linux drivers, networking, Nvidia-tagged LeetCode, last 6 months (snehasishroy repo, July 2026 snapshot): LRU Cache, Merge k Sorted Lists, Longest Substring Without Repeating Characters, Restore IP Addresses, Sliding Window Maximum, House Robber, Longest Consecutive Sequence, Min Stack, Koko Eating Bananas, Network Delay Time, Design Circular Queue, Copy List with Random Pointer, Group Anagrams

Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).

## What they ask (data)

Based on **27** distinct problems tagged to Nvidia in the last 6 months (1 in the last 30 days, 7 in the last 3 months, 142 all-time) across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.

**Difficulty mix (last 6 months):** Medium 63%, Easy 22%, Hard 15%

**Most tagged topics (share of problems):** Array 52%, Hash Table 33%, String 26%, Linked List 22%, Stack 19%, Sorting 15%, Heap (Priority Queue) 15%, Dynamic Programming 11%, Two Pointers 11%, Design 11%

### Most frequent problems

Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | 30 days | Array, Binary Search |
| 2 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | 3 months | String, Backtracking |
| 3 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | 3 months | Array, Dynamic Programming |
| 4 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | 3 months | Array, Hash Table, String, Sorting |
| 5 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | 3 months | Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm |
| 6 | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | Medium | 3 months | Array, Linked List, Design, Queue |
| 7 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue) |
| 8 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | 6 months | Hash Table, String, Sliding Window |
| 9 | [Special Binary String](https://leetcode.com/problems/special-binary-string/) | Hard | 6 months | String, Divide and Conquer, Sorting |
| 10 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | 6 months | Hash Table, Linked List, Design, Doubly-Linked List |
| 11 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | 6 months | Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort |
| 12 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | 6 months | Array, Hash Table, Union-Find |
| 13 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | 6 months | Array, Depth-First Search, Breadth-First Search, Union-Find |
| 14 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | 6 months | Array, Hash Table |
| 15 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | 6 months | String, Stack, Bracket Sequences |
| 16 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | 6 months | Array, Two Pointers, Dynamic Programming, Stack |
| 17 | [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/) | Medium | 6 months | String, Greedy |
| 18 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | 6 months | Hash Table, Linked List |
| 19 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | 6 months | Array, Hash Table, Divide and Conquer, Sorting |
| 20 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | 6 months | Array, Queue, Sliding Window, Heap (Priority Queue) |
| 21 | [Minimum Absolute Difference](https://leetcode.com/problems/minimum-absolute-difference/) | Easy | 6 months | Array, Sorting |
| 22 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Easy | 6 months | Linked List, Two Pointers, Stack, Recursion |
| 23 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | 6 months | Array, Dynamic Programming |
| 24 | [Decode String](https://leetcode.com/problems/decode-string/) | Medium | 6 months | String, Stack, Recursion |
| 25 | [Min Stack](https://leetcode.com/problems/min-stack/) | Medium | 6 months | Stack, Design |
| 26 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | Medium | 6 months | Array, Hash Table, Sliding Window, Prefix Sum |
| 27 | [Count Primes](https://leetcode.com/problems/count-primes/) | Medium | 6 months | Array, Math, Enumeration, Number Theory |

### Signature problems

Problems where Nvidia accounts for a large share of all recent tags across companies. These are the most Nvidia-specific questions in the data.

| # | Problem | Difficulty | Last seen | Topics |
|---|---|---|---|---|
| 1 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | 3 months | String, Backtracking |
| 2 | [Special Binary String](https://leetcode.com/problems/special-binary-string/) | Hard | 6 months | String, Divide and Conquer, Sorting |
| 3 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | 3 months | Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue) |
| 4 | [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/) | Medium | 6 months | String, Greedy |

### Reported in 2025 to 2026 interviews

Questions candidates said they got, each linked to the post where it was reported.

| Question | Role | When | Source |
|---|---|---|---|
| Start with A = 1; apply an ordered subset of operations (+x, -x, *x, /x only if divisible, negate) to maximize A (track max and min DP) | SWE1 (IC1), India | 2026-03 | [post](https://leetcode.com/discuss/post/7645559/nvidia-swe1-dsa-interview-question-685-l-8vhi/) |
| Best sorting algorithm for 100 numbers in range 0 to 9 (counting sort), then code it | New grad, IIT on-campus (90 minute technical round) | 2025-12 | [post](https://leetcode.com/discuss/post/7392214/on-campus-placements-iit-interview-exper-199m/) |
| Write a custom free() that fills memory with zeros instead of releasing it | New grad, IIT on-campus | 2025-12 | [post](https://leetcode.com/discuss/post/7392214/on-campus-placements-iit-interview-exper-199m/) |
| Why can global or heap memory hold larger allocations than the stack? Thrashing; static vs dynamic linking | New grad, IIT on-campus | 2025-12 | [post](https://leetcode.com/discuss/post/7392214/on-campus-placements-iit-interview-exper-199m/) |
| 10 threads share multiple pointers: how do you manage access (key-level vs whole-map locking)? | New grad, IIT on-campus | 2025-12 | [post](https://leetcode.com/discuss/post/7392214/on-campus-placements-iit-interview-exper-199m/) |
| [Serialize and Deserialize Binary Tree, after detailed questions on CUDA and vLLM experience](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Deep Learning Software Engineer, Inference (phone screen with hiring manager) | 2025-06 | [post](https://leetcode.com/discuss/post/6809037/nvidia-interview-experiencerejection-by-v0hgv/) |
| [Print a matrix in spiral order (end of hiring manager round)](https://leetcode.com/problems/spiral-matrix/) | System Software Engineer, India (experienced) | 2025-06 | [post](https://leetcode.com/discuss/post/6814900/nvidia-strange-sse-interview-experience-78oju/) |
| [Top N most frequent elements, then all permutations of a string, in 45 minutes](https://leetcode.com/problems/top-k-frequent-elements/) | System Software Engineer, India (experienced) | 2025-06 | [post](https://leetcode.com/discuss/post/6814900/nvidia-strange-sse-interview-experience-78oju/) |
| Binary tree DSA question plus C++ output-based and pointer questions; OS questions | SSE intern, India on-campus (single interview) | 2025-06 | [post](https://leetcode.com/discuss/post/6860289/nvidia-sse-intern-on-campus-by-anonymous-q1iq/) |
| [Print both the left view and right view of a binary tree in one API](https://leetcode.com/problems/binary-tree-right-side-view/) | System Software Engineer, India (about 3 YOE) | 2025-01 | [post](https://leetcode.com/discuss/post/6349997/nvidia-siemens-eda-avalara-rejected-by-a-fxk0/) |
| [Reverse a linked list in groups of k, writing the list from scratch](https://leetcode.com/problems/reverse-nodes-in-k-group/) | System Software Engineer, India (about 3 YOE) | 2025-01 | [post](https://leetcode.com/discuss/post/6349997/nvidia-siemens-eda-avalara-rejected-by-a-fxk0/) |
| [Minimum turns to move between two tree nodes; write LCA, then print the path from the LCA to a node](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | System Software Engineer, India (about 3 YOE) | 2025-01 | [post](https://leetcode.com/discuss/post/6349997/nvidia-siemens-eda-avalara-rejected-by-a-fxk0/) |
| [Design a simple hashmap without any STL; easy to medium string manipulation in C/C++ with no STL](https://leetcode.com/problems/design-hashmap/) | Senior Software Engineer | 2026-02 | [post](https://leetcode.com/discuss/post/7542688/nvidia-interview-experience-for-senior-s-v2mi/) |
| Code review: read Python code and identify the problems (tech screen and onsite) | Senior Software Engineer | 2026-04 | [post](https://leetcode.com/discuss/post/7820756/senior-software-engineer-interview-onsit-y95s/) |
| [Implement malloc and printf; check endianness with an array; middle node of a linked list; explain and implement ping](https://leetcode.com/problems/middle-of-the-linked-list/) | Senior System Software Engineer, PCIe team, India | 2026-09 | [post](https://leetcode.com/discuss/post/8510550/nvidia-interview-experience-senior-syste-vr87/) |
| How would you debug a Kubernetes pod that is not reachable? Operators, reconciliation, CRD rollout and rollback, race conditions | System Software Engineer (cloud), India | 2025-10 | [post](https://leetcode.com/discuss/post/7313633/nvidia-sse-by-anonymous_user-5ime/) |
| Second round: 45 minute discussion on AI efficiency and large-scale GPU systems | AI Performance and Efficiency Engineer, New Grad 2026, Santa Clara | 2026-05 | [post](https://www.reddit.com/r/csMajors/comments/1t13xze/nvidia_new_grad_2026_ai_performance_efficiency/) |

## Beyond LeetCode

C and C++ fundamentals viva (pointers, static, volatile, const, storage classes, virtual functions, constructors, operator overloading); OS and concurrency (paging, thrashing, context switching, mutexes, semaphores, spinlocks, race conditions, ISR handling); networking (how ping works, OSI layers); code review round (find the bugs in Python code); domain detailed discussions (CUDA kernels and optimizations, vLLM or TensorRT inference, GPU and CPU architecture, Kubernetes operators, PCIe and Linux drivers); 45 minute discussion rounds on AI efficiency for some 2026 new grad roles; optional Insider Chat.

## System design

Not a fixed round for interns or new grads; it depends on the team. Systems roles probe OS, memory and concurrency design (thread-safe shared pointers, locking granularity). Cloud and infrastructure roles probe distributed systems, Kubernetes internals and debugging (unreachable pod, operator reconciliation). Deep learning roles probe CUDA kernels, inference serving and large-scale GPU efficiency. Experienced loops can include LLD (parking lot, data sync to Slack and email) and HLD (file scanner). Aced lists senior prompts such as designing distributed training for a trillion-parameter model.

Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).

## Behavioral

**Framework:** NVIDIA core values (Code of Conduct): Innovation; Intellectual Honesty; Speed and Agility; Excellence and Determination (the 'Speed-of-Light' test); One Team. Behavioral content is usually folded into the hiring manager round rather than a separate structured round. ([official page](https://images.nvidia.com/aem-dam/en-zz/Solutions/about-us/NVIDIA-Code-of-Conduct-External.pdf))

**What they look for:**

- Intellectual honesty: admit what you do not know and how you learn from mistakes
- Fast learning and willingness to ramp up on new stacks (CUDA, drivers, Kubernetes)
- Exact personal contribution and decisions on past projects
- Genuine interest in GPUs, accelerated computing or AI infrastructure
- One Team behavior: disagree openly, focus on substance
- Ownership and determination on long, hard problems

**Questions to prepare:**

- Why NVIDIA? Why this role? Why should we take you? (SSE intern, 2025)
- What were your exact contributions to the projects on your resume? (DL Inference screen, 2025)
- What technical skills do you want to pick up next? (DL Inference screen, 2025)
- Walk us through your internship project in detail (30 minutes of detailed questions, campus NG 2025)
- Tell me about a conflict and how you resolved it
- How do you prioritize when everything is urgent?
- Tell me about negative feedback you received and what you changed

Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/other-companies.md).

## Tips

- Apply in the first days a requisition opens and keep it to your best 3 to 5 roles (official advice); the 2027 SWE intern requisition opened Aug 19, 2026 and reviews resumes on an ongoing basis.
- Put your anticipated graduation month and year on your resume; the 2027 intern posting says it must be clearly indicated to be considered.
- If you are a master's student, filter for roles with 'Master's' or advanced-degree tracks first; Jugal notes NVIDIA runs separate advanced-degree tracks with smaller applicant pools.
- Revise C/C++ and OS fundamentals as hard as DSA: pointers, memory management, synchronization and C++ output questions appear in intern, new grad and experienced reports.
- Know every line of your projects; panels spend 30 minutes or more grilling internship and resume projects.
- Read the team's posting and prepare its domain (CUDA, Kubernetes, drivers, inference); interviewers describe the process as very team dependent.
- Never use ChatGPT or other unapproved tools during an interview; NVIDIA's hiring page says it results in disqualification.
- For AI and deep learning roles, Jugal recommends the NVIDIA Certified Associate: Generative AI and LLMs as the one certification to prioritize, because it forces you to learn transformer internals, inference and evaluation.

## 4-week plan for Nvidia

Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).

- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.
- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.
- [ ] Week 3: Solve the signature problems and every reported question above. Do 2 timed mock interviews.
- [ ] Week 4: Write 8 stories for the NVIDIA core values (Code of Conduct): Innovation; Intellectual Honesty; Speed and Agility; Excellence and Determination (the 'Speed-of-Light' test); One Team. Behavioral content is usually folded into the hiring manager round rather than a separate structured round. round. Do 2 full mock loops. Review the online assessment and system design notes above.

## Sources

- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and [snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by [scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).
- <https://www.nvidia.com/en-us/about-nvidia/careers/>
- <https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/>
- <https://www.nvidia.com/en-us/about-nvidia/careers/how-we-hire/>
- <https://www.nvidia.com/en-us/about-nvidia/careers/life-at-nvidia/>
- <https://www.nvidia.com/en-eu/about-nvidia/culture-at-nvidia/>
- <https://images.nvidia.com/aem-dam/en-zz/Solutions/about-us/NVIDIA-Code-of-Conduct-External.pdf>
- <https://jobs.nvidia.com/careers>
- <https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495>
- <https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-OR-Hillsboro/Systems-Software-Engineer---New-College-Grad-2026_JR2017083>
- <https://www.levels.fyi/companies/nvidia/salaries/software-engineer>
- <https://www.levels.fyi/companies/nvidia/salaries/software-engineer/locations/india>
- <https://interviewing.io/nvidia-interview-questions>
- <https://www.aced.io/blog/nvidia-interview-process>
- <https://simplify.jobs/blog/nvidia-internship-faq/>
- <https://www.hellointerview.com/community/questions/company/NVIDIA>
- <https://github.com/snehasishroy/leetcode-companywise-interview-questions>
- <https://jugaldb.substack.com/p/494-summer-2027-internships-are-already>
- <https://jugaldb.substack.com/p/how-to-prepare-for-faang-ai-engineer>
- <https://jugaldb.substack.com/p/top-30-ai-certifications-you-need>
- <https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/>
- <https://leetcode.com/discuss/post/7645559/nvidia-swe1-dsa-interview-question-685-l-8vhi/>
- <https://leetcode.com/discuss/post/7392214/on-campus-placements-iit-interview-exper-199m/>
- <https://leetcode.com/discuss/post/7054739/nvidia-sse-internship-role-2026-accepted-agc9/>
- <https://leetcode.com/discuss/post/6860289/nvidia-sse-intern-on-campus-by-anonymous-q1iq/>
- <https://leetcode.com/discuss/post/6809037/nvidia-interview-experiencerejection-by-v0hgv/>

> **Watch out:** NVIDIA's process is decentralized and very team dependent; there is no standard question bank (interviewing.io). Most detailed public reports are India campus and experienced India loops; US new grad SWE reports are sparse, so the US new grad flow combines the official How We Hire page, Simplify, Aced and a few 2026 Reddit threads. Level placement for new grads (IC1 vs IC2) varies by degree and role; a BS return offer at IC1 (Sep 2026) and MS/PhD postings quoting Level 2 and 3 are the only direct evidence. Whether an OA is used varies: some 2026 interns got none, others report OAs. Ignite's 13-day window comes from Jugal citing Extern; the Extern source itself was not verified. The 'Level 1/2/3' base ranges come from one MS/PhD posting and differ by role. [UNVERIFIED] Glassdoor snippets seen only in search results: HackerRank live editor with hidden test cases; arrays, strings and graph problems of medium to high difficulty; a 'sort two colors of balls' question; processes taking 1 to 5 weeks. LeetCode Discuss URLs were confirmed through LeetCode's GraphQL API; Reddit threads were read through Reddit's RSS feeds.

Next: [All companies](index.md)
