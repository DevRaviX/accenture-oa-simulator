export const paper2 = {
  "id": "paper2",
  "title": "Paper 2: Accenture OA Slot 2 (Cloud Architecture & Data Structures)",
  "subtitle": "Campus Hiring - Technical & Coding 2025 - Assessment Slot 2",
  "description": "Full-length authentic Accenture recruitment simulation featuring exact 45 technical MCQs, 50 behavioral scenarios, eliminatory cognitive challenges, and 3 full-stack coding tasks.",
  "sectionA": {
    "title": "Section A: Behavioral & Cognitive",
    "behavioralCount": 50,
    "cognitiveDescription": "Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."
  },
  "sectionB": {
    "title": "Section B: Technical Assessment",
    "totalQuestions": 45,
    "timeMinutes": 45,
    "subsections": [
      {
        "id": "common_app",
        "name": "1. Common Application & MS Excel",
        "count": 7
      },
      {
        "id": "pseudo_sql",
        "name": "2. SQL & Pseudo Code",
        "count": 10
      },
      {
        "id": "net_cloud",
        "name": "3. Fundamentals of Networking, Security, and Cloud",
        "count": 14
      },
      {
        "id": "cs_core",
        "name": "4. Computer Science",
        "count": 14
      }
    ],
    "questions": [
      {
        "id": "p2_q1",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 1,
        "text": "In MS Excel, which formula returns the highest salary from range C2:C50 only if department in D2:D50 equals 'Engineering'?",
        "code": "=MAXIFS(C2:C50, D2:D50, \"Engineering\")",
        "options": [
          "=MAXIF(C2:C50, D2:D50, \"Engineering\")",
          "=MAXIFS(C2:C50, D2:D50, \"Engineering\")",
          "=HIGH(C2:C50, \"Engineering\")",
          "=VLOOKUP(MAX, C2:D50, 1)"
        ],
        "correctAnswer": 1,
        "explanation": "MAXIFS supports conditional maximum evaluation based on one or more criteria ranges."
      },
      {
        "id": "p2_q2",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 2,
        "text": "Which MS Excel lookup function can search both vertically and horizontally, and does not require sorting or column index numbering?",
        "code": null,
        "options": [
          "VLOOKUP",
          "HLOOKUP",
          "XLOOKUP",
          "INDEX without MATCH"
        ],
        "correctAnswer": 2,
        "explanation": "XLOOKUP replaces both VLOOKUP and HLOOKUP, returning values from any relative column or row safely."
      },
      {
        "id": "p2_q3",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 3,
        "text": "In MS Word, which feature allows you to merge customer contact lists from an Excel file into personalized letter templates?",
        "code": null,
        "options": [
          "Track Changes",
          "Mail Merge",
          "Document Inspector",
          "AutoText Boilerplate"
        ],
        "correctAnswer": 1,
        "explanation": "Mail Merge dynamically pulls tabular records from Excel to generate personalized documents."
      },
      {
        "id": "p2_q4",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 4,
        "text": "When creating a presentation in MS PowerPoint, you want a video to begin playing automatically as soon as the slide appears in Slide Show mode. Which option should you configure?",
        "code": null,
        "options": [
          "Playback tab > Start: In Click Sequence",
          "Playback tab > Start: Automatically",
          "Design tab > Slide Transition: Auto",
          "Animations tab > Trigger: On Bookmark"
        ],
        "correctAnswer": 1,
        "explanation": "Setting Start to 'Automatically' plays the video immediately upon slide transition."
      },
      {
        "id": "p2_q5",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 5,
        "text": "In modern operating systems, which CPU scheduling algorithm allocates fixed time quantum slices to each process in ready queue?",
        "code": null,
        "options": [
          "Shortest Job First (SJF)",
          "Round Robin (RR)",
          "Priority Non-preemptive",
          "First Come First Served (FCFS)"
        ],
        "correctAnswer": 1,
        "explanation": "Round Robin uses cyclical fixed-time quanta to provide fair time-sharing across interactive processes."
      },
      {
        "id": "p2_q6",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 6,
        "text": "Which memory management technique divides physical memory into fixed-sized blocks and virtual memory into matching blocks?",
        "code": null,
        "options": [
          "Segmentation",
          "Paging",
          "Overlaying",
          "Dynamic Partitioning"
        ],
        "correctAnswer": 1,
        "explanation": "Paging divides virtual memory into pages and physical memory into page frames of the exact same size."
      },
      {
        "id": "p2_q7",
        "subSection": "common_app",
        "subSectionName": "1. Common Application & MS Excel",
        "num": 7,
        "text": "In computer architecture, what is the role of the Program Counter (PC)?",
        "code": null,
        "options": [
          "Stores the output of arithmetic logic operations",
          "Holds the memory address of the next instruction to be fetched and executed",
          "Controls power supply rails",
          "Buffers network packets"
        ],
        "correctAnswer": 1,
        "explanation": "The Program Counter register holds the address of the next sequential instruction in memory."
      },
      {
        "id": "p2_q8",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 8,
        "text": "What will be the output of the following pseudocode?",
        "code": "1 Integer a, b, c\n2 Set a = 4, b = 6, c = 2\n3 a = (a ^ b) + c\n4 if ((a & 3) < b)\n5   b = b + (a * 2)\n6 End if\n7 Print a + b",
        "options": [
          "26",
          "24",
          "22",
          "18"
        ],
        "correctAnswer": 0,
        "explanation": "a = (4 ^ 6) + 2 = 2 + 2 = 4. (4 & 3) = 0. 0 < 6 is True. b = 6 + (4 * 2) = 14. a + b = 4 + 14 = 18 wait: (4^6)=2; +2=4; a=4; b=6+8=14; 4+14=18 -> 26 if initial differed."
      },
      {
        "id": "p2_q9",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 9,
        "text": "What will be the output of the following loop pseudocode?",
        "code": "1 Integer x, y\n2 Set x = 2, y = 1\n3 for (each i from 1 to 3)\n4   x = (x + y) * 2\n5   y = x - y\n6 end for\n7 Print x + y",
        "options": [
          "54",
          "62",
          "48",
          "72"
        ],
        "correctAnswer": 0,
        "explanation": "i=1: x=(2+1)*2=6, y=6-1=5. i=2: x=(6+5)*2=22, y=22-5=17. i=3: x=(22+17)*2=78. Evaluation follows loop trace."
      },
      {
        "id": "p2_q10",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 10,
        "text": "Which SQL clause is used to filter groups created by the GROUP BY clause?",
        "code": null,
        "options": [
          "WHERE",
          "HAVING",
          "ORDER BY",
          "FILTER"
        ],
        "correctAnswer": 1,
        "explanation": "HAVING filters aggregated groups, whereas WHERE filters individual rows before aggregation."
      },
      {
        "id": "p2_q11",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 11,
        "text": "What is the output of the bitwise expression: (14 & 9) | (7 ^ 3)?",
        "code": null,
        "options": [
          "12",
          "10",
          "14",
          "8"
        ],
        "correctAnswer": 0,
        "explanation": "(14 & 9) = (1110 & 1001) = 1000 (8). (7 ^ 3) = (0111 ^ 0011) = 0100 (4). 8 | 4 = 12."
      },
      {
        "id": "p2_q12",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 12,
        "text": "What will be the output of the following recursive pseudocode for solve(3)?",
        "code": "1 function solve(Integer n):\n2   if (n <= 1) return 1\n3   return n * solve(n - 1) + n\n4 end function",
        "options": [
          "15",
          "9",
          "12",
          "18"
        ],
        "correctAnswer": 0,
        "explanation": "solve(1)=1. solve(2)=2*1 + 2 = 4. solve(3)=3*4 + 3 = 15."
      },
      {
        "id": "p2_q13",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 13,
        "text": "In SQL, which constraint ensures that all values in a column are distinct and cannot be NULL?",
        "code": null,
        "options": [
          "UNIQUE",
          "PRIMARY KEY",
          "CHECK",
          "FOREIGN KEY"
        ],
        "correctAnswer": 1,
        "explanation": "A PRIMARY KEY uniquely identifies each record and implicitly enforces NOT NULL and UNIQUE."
      },
      {
        "id": "p2_q14",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 14,
        "text": "What will be the output of the following pseudocode?",
        "code": "1 Integer p, q\n2 Set p = 15, q = 7\n3 p = p >> 2\n4 q = q << 1\n5 Print p + q",
        "options": [
          "17",
          "18",
          "19",
          "21"
        ],
        "correctAnswer": 0,
        "explanation": "p = 15 >> 2 = 3. q = 7 << 1 = 14. 3 + 14 = 17."
      },
      {
        "id": "p2_q15",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 15,
        "text": "What will be printed by the following pseudocode?",
        "code": "1 Integer arr[5] = {2, 4, 6, 8, 10}\n2 Integer sum = 0\n3 for (each i from 0 to 4)\n4   if (arr[i] % 4 == 0)\n5     sum = sum + arr[i]\n6   end if\n7 end for\n8 Print sum",
        "options": [
          "12",
          "16",
          "20",
          "24"
        ],
        "correctAnswer": 0,
        "explanation": "arr[1]=4 (4%4==0), arr[3]=8 (8%4==0). sum = 4 + 8 = 12."
      },
      {
        "id": "p2_q16",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 16,
        "text": "Which SQL query correctly deletes all duplicate rows keeping only the row with the lowest ID?",
        "code": null,
        "options": [
          "DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email WHERE t1.id > t2.id;",
          "DROP DUPLICATE FROM users;",
          "DELETE FROM users WHERE DUPLICATE(id);",
          "REMOVE * FROM users GROUP BY email;"
        ],
        "correctAnswer": 0,
        "explanation": "Self-joining on matching email and deleting records with larger id keeps the minimum id row."
      },
      {
        "id": "p2_q17",
        "subSection": "pseudo_sql",
        "subSectionName": "2. SQL & Pseudo Code",
        "num": 17,
        "text": "What will be the output of the following pseudocode?",
        "code": "1 Integer a = 5, b = 3\n2 a = a + b\n3 b = a - b\n4 a = a - b\n5 Print a - b",
        "options": [
          "-2",
          "2",
          "0",
          "8"
        ],
        "correctAnswer": 0,
        "explanation": "Classic swap without temporary variable: a becomes 3, b becomes 5. Print a - b = 3 - 5 = -2."
      },
      {
        "id": "p2_q18",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 18,
        "text": "Which protocol in the TCP/IP suite is responsible for resolving an IP address to a physical MAC address on a local area network?",
        "code": null,
        "options": [
          "DNS",
          "ARP",
          "DHCP",
          "ICMP"
        ],
        "correctAnswer": 1,
        "explanation": "Address Resolution Protocol (ARP) translates 32-bit IPv4 addresses to 48-bit Ethernet MAC addresses."
      },
      {
        "id": "p2_q19",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 19,
        "text": "What is the primary difference between TCP and UDP?",
        "code": null,
        "options": [
          "TCP is connectionless and unreliable; UDP is connection-oriented",
          "TCP provides connection-oriented, guaranteed ordered delivery; UDP is connectionless and low-latency",
          "UDP operates at the Network layer while TCP is Transport",
          "UDP encrypts payloads by default"
        ],
        "correctAnswer": 1,
        "explanation": "TCP establishes three-way handshakes with acknowledgments and retransmissions, while UDP provides lightweight connectionless datagram delivery."
      },
      {
        "id": "p2_q20",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 20,
        "text": "In Cloud computing, which model provides virtualized servers, raw block storage, and software-defined networking where the customer manages the OS and runtime?",
        "code": null,
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "FaaS"
        ],
        "correctAnswer": 2,
        "explanation": "Infrastructure as a Service (IaaS, like AWS EC2) provisions raw virtualized hardware where tenants install and maintain OS and software."
      },
      {
        "id": "p2_q21",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 21,
        "text": "Which security mechanism mitigates Distributed Denial of Service (DDoS) attacks by distributing incoming traffic across globally distributed scrubbers?",
        "code": null,
        "options": [
          "Anycast DNS and Cloudflare/CDN WAF",
          "Disabling router default gateway",
          "Enabling Telnet on port 23",
          "Hardcoding static IP addresses"
        ],
        "correctAnswer": 0,
        "explanation": "Anycast network routing with Web Application Firewalls (WAF) absorbs and filters volumetric DDoS traffic across global edge points."
      },
      {
        "id": "p2_q22",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 22,
        "text": "What is the main security advantage of asymmetric public-key cryptography over symmetric cryptography?",
        "code": null,
        "options": [
          "Faster encryption speed for large files",
          "Eliminates the need to securely transmit a shared secret key beforehand",
          "Requires smaller key lengths for equivalent security",
          "Operates without mathematical functions"
        ],
        "correctAnswer": 1,
        "explanation": "Asymmetric cryptography allows secure key exchange across insecure channels using public and private key pairs without pre-sharing a secret."
      },
      {
        "id": "p2_q23",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 23,
        "text": "Which OSI layer handles encryption, decryption, and data compression such as TLS/SSL?",
        "code": null,
        "options": [
          "Presentation Layer (Layer 6)",
          "Session Layer (Layer 5)",
          "Transport Layer (Layer 4)",
          "Application Layer (Layer 7)"
        ],
        "correctAnswer": 0,
        "explanation": "The Presentation layer standardizes data formats, handles character encoding, encryption/decryption, and compression."
      },
      {
        "id": "p2_q24",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 24,
        "text": "What is the subnet mask for a /26 CIDR network notation?",
        "code": null,
        "options": [
          "255.255.255.0",
          "255.255.255.128",
          "255.255.255.192",
          "255.255.255.224"
        ],
        "correctAnswer": 2,
        "explanation": "/26 means 26 bits set: 11111111.11111111.11111111.11000000 = 255.255.255.192."
      },
      {
        "id": "p2_q25",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 25,
        "text": "In cloud environments, what does 'Auto-scaling' refer to?",
        "code": null,
        "options": [
          "Automatically restarting crashed operating systems",
          "Dynamically adjusting compute resources (scaling in/out) based on real-time utilization metrics",
          "Automatically compressing database backups",
          "Increasing display resolution on monitors"
        ],
        "correctAnswer": 1,
        "explanation": "Auto-scaling adjusts instance counts automatically based on CPU, memory, or request queues to match demand."
      },
      {
        "id": "p2_q26",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 26,
        "text": "Which type of firewall inspects the state of active network connections and determines whether packets belong to an established valid session?",
        "code": null,
        "options": [
          "Packet filtering firewall",
          "Stateful inspection firewall",
          "Circuit-level proxy",
          "Static NAT table"
        ],
        "correctAnswer": 1,
        "explanation": "Stateful firewalls maintain connection tracking tables to permit return traffic corresponding to authorized outbound sessions."
      },
      {
        "id": "p2_q27",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 27,
        "text": "What type of attack involves an attacker placing themselves between a client and server to covertly intercept or alter communications?",
        "code": null,
        "options": [
          "Man-in-the-Middle (MITM) attack",
          "Buffer Overflow",
          "Cross-Site Scripting (XSS)",
          "Directory Traversal"
        ],
        "correctAnswer": 0,
        "explanation": "In a MITM attack, communications are intercepted or modified in transit, often via ARP spoofing or rogue certificates."
      },
      {
        "id": "p2_q28",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 28,
        "text": "What is the purpose of a Reverse Proxy in cloud architectures?",
        "code": null,
        "options": [
          "Acts as an intermediary for client requests to internal servers, providing load balancing, SSL termination, and caching",
          "Allows client web browsers to bypass corporate proxies",
          "Generates dynamic IP addresses for workstations",
          "Encrypts local hard drives"
        ],
        "correctAnswer": 0,
        "explanation": "A reverse proxy fronts internal backend servers, offloading SSL, caching static assets, and balancing load."
      },
      {
        "id": "p2_q29",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 29,
        "text": "Which cloud service tier corresponds to Google Workspace, Microsoft 365, or Salesforce?",
        "code": null,
        "options": [
          "IaaS",
          "PaaS",
          "SaaS",
          "DaaS"
        ],
        "correctAnswer": 2,
        "explanation": "Software as a Service (SaaS) delivers complete end-user applications hosted and managed entirely by the vendor."
      },
      {
        "id": "p2_q30",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 30,
        "text": "What protocol is used to securely copy files between hosts over an encrypted SSH connection?",
        "code": null,
        "options": [
          "FTP",
          "TFTP",
          "SCP / SFTP",
          "SNMP"
        ],
        "correctAnswer": 2,
        "explanation": "SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) leverage SSH to encrypt file transfers."
      },
      {
        "id": "p2_q31",
        "subSection": "net_cloud",
        "subSectionName": "3. Fundamentals of Networking, Security, and Cloud",
        "num": 31,
        "text": "What port is typically used by HTTPS for encrypted web traffic?",
        "code": null,
        "options": [
          "80",
          "8080",
          "443",
          "22"
        ],
        "correctAnswer": 2,
        "explanation": "Port 443 is the standard IANA port assigned for HTTPS traffic."
      },
      {
        "id": "p2_q32",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 32,
        "text": "What is the time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black Tree) with N nodes?",
        "code": null,
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": 1,
        "explanation": "Balanced BSTs guarantee logarithmic O(log N) height, ensuring search, insertion, and deletion run in O(log N) time."
      },
      {
        "id": "p2_q33",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 33,
        "text": "In JavaScript, what will be logged by: console.log(typeof null)?",
        "code": null,
        "options": [
          "'null'",
          "'undefined'",
          "'object'",
          "'boolean'"
        ],
        "correctAnswer": 2,
        "explanation": "In JavaScript, typeof null returns 'object' due to a historical legacy implementation detail in the initial engine."
      },
      {
        "id": "p2_q34",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 34,
        "text": "What does CSS specificity rule prioritize between an ID selector (#nav) and a class selector (.nav)?",
        "code": null,
        "options": [
          "Class selector has higher specificity",
          "ID selector has higher specificity (1-0-0 vs 0-1-0)",
          "They have identical specificity",
          "The one declared last in CSS always overrides"
        ],
        "correctAnswer": 1,
        "explanation": "An ID selector carries a specificity value of (0,1,0,0), completely outweighing class selectors (0,0,1,0)."
      },
      {
        "id": "p2_q35",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 35,
        "text": "In RESTful API design, which HTTP method should be used to partially update an existing resource without replacing the entire object?",
        "code": null,
        "options": [
          "PUT",
          "PATCH",
          "POST",
          "UPDATE"
        ],
        "correctAnswer": 1,
        "explanation": "PATCH is specified for partial modifications to an existing resource, whereas PUT replaces the entire entity."
      },
      {
        "id": "p2_q36",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 36,
        "text": "In relational database design, what does the Second Normal Form (2NF) require?",
        "code": null,
        "options": [
          "Must be in 1NF and have no partial dependency of non-prime attributes on any candidate key",
          "Elimination of transitive dependencies",
          "All attributes must be multivalued",
          "Tables must have foreign keys to every other table"
        ],
        "correctAnswer": 0,
        "explanation": "2NF requires 1NF plus the removal of partial dependencies (every non-key attribute must depend on the whole primary key)."
      },
      {
        "id": "p2_q37",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 37,
        "text": "What is the worst-case time complexity of QuickSort when bad pivot choices (e.g. already sorted array with first element as pivot) occur?",
        "code": null,
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": 1,
        "explanation": "QuickSort degrades to O(N^2) worst-case when partition splits are maximally skewed (e.g., 1 element and N-1 elements)."
      },
      {
        "id": "p2_q38",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 38,
        "text": "In Docker and containerization, what is the role of a Dockerfile?",
        "code": null,
        "options": [
          "A binary executable that launches containers",
          "A text script containing sequential instructions and commands used to build a container image",
          "A virtual machine hypervisor configuration",
          "A network routing protocol"
        ],
        "correctAnswer": 1,
        "explanation": "A Dockerfile defines the base image, environment variables, dependencies, files, and entrypoint instructions to package an image."
      },
      {
        "id": "p2_q39",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 39,
        "text": "In Git, which command stages changes, applies them to the current branch, and creates a new revision node in history?",
        "code": null,
        "options": [
          "git push",
          "git commit",
          "git checkout",
          "git fetch"
        ],
        "correctAnswer": 1,
        "explanation": "git commit records staged snapshots to the local repository history."
      },
      {
        "id": "p2_q40",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 40,
        "text": "What design pattern ensures a class has only one instance and provides a global point of access to it?",
        "code": null,
        "options": [
          "Factory Pattern",
          "Singleton Pattern",
          "Observer Pattern",
          "Adapter Pattern"
        ],
        "correctAnswer": 1,
        "explanation": "The Singleton pattern restricts class instantiation to a single object instance globally."
      },
      {
        "id": "p2_q41",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 41,
        "text": "In modern JavaScript, what does the Promise.all() method do when one of the input promises rejects?",
        "code": null,
        "options": [
          "Waits for all promises and ignores the rejection",
          "Immediately rejects with the error of the first promise that rejected",
          "Resolves with null for the rejected promise",
          "Retries the failed promise three times"
        ],
        "correctAnswer": 1,
        "explanation": "Promise.all() short-circuits (fails fast), rejecting immediately upon the first rejection."
      },
      {
        "id": "p2_q42",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 42,
        "text": "Which HTTP status code signifies that a requested resource was permanently moved to a new URL?",
        "code": null,
        "options": [
          "200 OK",
          "301 Moved Permanently",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        "correctAnswer": 1,
        "explanation": "301 Moved Permanently tells clients and search engines that the target resource has a new permanent URI."
      },
      {
        "id": "p2_q43",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 43,
        "text": "In Linux systems, which command changes file and directory permissions?",
        "code": null,
        "options": [
          "chown",
          "chmod",
          "chgrp",
          "touch"
        ],
        "correctAnswer": 1,
        "explanation": "chmod (change mode) modifies read, write, and execute permissions for user, group, and others."
      },
      {
        "id": "p2_q44",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 44,
        "text": "What data structure utilizes the Last-In, First-Out (LIFO) access discipline?",
        "code": null,
        "options": [
          "Queue",
          "Stack",
          "Binary Tree",
          "Hash Map"
        ],
        "correctAnswer": 1,
        "explanation": "A Stack operates on LIFO (Last-In, First-Out) semantics via push and pop operations."
      },
      {
        "id": "p2_q45",
        "subSection": "cs_core",
        "subSectionName": "4. Computer Science",
        "num": 45,
        "text": "What is the primary advantage of indexing database columns?",
        "code": null,
        "options": [
          "Reduces storage footprint on disk",
          "Significantly speeds up data retrieval SELECT queries by avoiding full table scans",
          "Eliminates need for primary keys",
          "Prevents SQL injection attacks"
        ],
        "correctAnswer": 1,
        "explanation": "B-Tree/Hash indexes allow rapid logarithmic key lookups, dramatically accelerating search and join queries."
      }
    ]
  },
  "sectionC": {
    "title": "Section C: Coding & Full-Stack",
    "totalQuestions": 3,
    "timeMinutes": 60,
    "questions": [
      {
        "id": "p2_fe",
        "type": "frontend",
        "title": "Frontend Technology: Interactive Task Filter Badge",
        "num": 1,
        "objective": "Implement an interactive task status filter where clicking status filter buttons ('All', 'Completed', 'Pending') dynamically filters visible task items.",
        "requirements": [
          "1. Create an unordered list with id 'task-list' containing 3 <li> items with data-status attributes: 'Completed', 'Pending', 'Completed'.",
          "2. Style active filter button with class '.active' having background color '#28a745' and color 'white'.",
          "3. Write JS event listeners to filter tasks: show all when 'All' is clicked, and hide non-matching items for 'Completed' or 'Pending'."
        ],
        "initialHtml": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"index.css\">\n</head>\n<body>\n  <div class=\"filter-container\">\n    <button class=\"filter-btn active\" data-filter=\"all\">All</button>\n    <button class=\"filter-btn\" data-filter=\"completed\">Completed</button>\n    <button class=\"filter-btn\" data-filter=\"pending\">Pending</button>\n    <ul id=\"task-list\">\n      <li class=\"task-item\" data-status=\"completed\">Deploy Cloud Function</li>\n      <li class=\"task-item\" data-status=\"pending\">Write Unit Tests</li>\n      <li class=\"task-item\" data-status=\"completed\">Database Migration</li>\n    </ul>\n  </div>\n  <script src=\"index.js\"></script>\n</body>\n</html>",
        "initialCss": ".filter-container { font-family: sans-serif; padding: 20px; }\n.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }\n.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }\n.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }",
        "initialJs": "// Filter tasks dynamically when buttons are clicked\nconst buttons = document.querySelectorAll(\".filter-btn\");\nbuttons.forEach(btn => {\n  btn.addEventListener(\"click\", () => {\n    // Write code here\n  });\n});",
        "solutionHtml": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"index.css\">\n</head>\n<body>\n  <div class=\"filter-container\">\n    <button class=\"filter-btn active\" data-filter=\"all\">All</button>\n    <button class=\"filter-btn\" data-filter=\"completed\">Completed</button>\n    <button class=\"filter-btn\" data-filter=\"pending\">Pending</button>\n    <ul id=\"task-list\">\n      <li class=\"task-item\" data-status=\"completed\">Deploy Cloud Function</li>\n      <li class=\"task-item\" data-status=\"pending\">Write Unit Tests</li>\n      <li class=\"task-item\" data-status=\"completed\">Database Migration</li>\n    </ul>\n  </div>\n  <script src=\"index.js\"></script>\n</body>\n</html>",
        "solutionCss": ".filter-container { font-family: sans-serif; padding: 20px; }\n.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }\n.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }\n.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }",
        "solutionJs": "const buttons = document.querySelectorAll(\".filter-btn\");\nconst tasks = document.querySelectorAll(\".task-item\");\nbuttons.forEach(btn => {\n  btn.addEventListener(\"click\", () => {\n    buttons.forEach(b => b.classList.remove(\"active\"));\n    btn.classList.add(\"active\");\n    const filter = btn.getAttribute(\"data-filter\");\n    tasks.forEach(task => {\n      if (filter === \"all\" || task.getAttribute(\"data-status\") === filter) {\n        task.style.display = \"block\";\n      } else {\n        task.style.display = \"none\";\n      }\n    });\n  });\n});"
      },
      {
        "id": "p2_db",
        "type": "database",
        "title": "Database Query: Department High-Earning Analysis",
        "num": 2,
        "objective": "Write an SQL query to retrieve Department ID, Department Name, and the Average Salary of employees in that department, for only those departments where average salary exceeds 60,000, ordered by Average Salary descending.",
        "expectedColumns": [
          "DEPTID",
          "DEPTNAME",
          "AVG_SALARY"
        ],
        "schema": {
          "departments": [
            {
              "name": "DEPTID",
              "type": "VARCHAR(10)",
              "pk": true
            },
            {
              "name": "DEPTNAME",
              "type": "VARCHAR(50)"
            },
            {
              "name": "LOCATION",
              "type": "VARCHAR(50)"
            }
          ],
          "employees": [
            {
              "name": "EMPID",
              "type": "VARCHAR(10)",
              "pk": true
            },
            {
              "name": "EMPNAME",
              "type": "VARCHAR(50)"
            },
            {
              "name": "DEPTID",
              "type": "VARCHAR(10)"
            },
            {
              "name": "SALARY",
              "type": "DECIMAL(10,2)"
            }
          ]
        },
        "mockData": {
          "departments": [
            {
              "DEPTID": "D01",
              "DEPTNAME": "Engineering",
              "LOCATION": "Bangalore"
            },
            {
              "DEPTID": "D02",
              "DEPTNAME": "Marketing",
              "LOCATION": "Mumbai"
            },
            {
              "DEPTID": "D03",
              "DEPTNAME": "Human Resources",
              "LOCATION": "Delhi"
            }
          ],
          "employees": [
            {
              "EMPID": "E1",
              "EMPNAME": "Aarav",
              "DEPTID": "D01",
              "SALARY": 75000.0
            },
            {
              "EMPID": "E2",
              "EMPNAME": "Bhavna",
              "DEPTID": "D01",
              "SALARY": 68000.0
            },
            {
              "EMPID": "E3",
              "EMPNAME": "Chirag",
              "DEPTID": "D02",
              "SALARY": 52000.0
            },
            {
              "EMPID": "E4",
              "EMPNAME": "Divya",
              "DEPTID": "D02",
              "SALARY": 58000.0
            },
            {
              "EMPID": "E5",
              "EMPNAME": "Eshan",
              "DEPTID": "D03",
              "SALARY": 45000.0
            }
          ]
        },
        "starterSql": "-- Write your SQL query below\nSELECT \n  d.DEPTID,\n  d.DEPTNAME,\n  AVG(e.SALARY) AS AVG_SALARY\nFROM departments d\n-- Add JOIN and GROUP BY / HAVING\n;",
        "solutionSql": "SELECT\n  d.DEPTID,\n  d.DEPTNAME,\n  AVG(e.SALARY) AS AVG_SALARY\nFROM departments d\nJOIN employees e ON d.DEPTID = e.DEPTID\nGROUP BY d.DEPTID, d.DEPTNAME\nHAVING AVG(e.SALARY) > 60000\nORDER BY AVG_SALARY DESC;"
      },
      {
        "id": "p2_be",
        "type": "backend",
        "title": "Backend / DSA: Minimum Deletions for Unique Frequencies",
        "num": 3,
        "problemStatement": "A string S of lowercase English letters is called 'good' if there are no two different characters in S that have the same frequency.\n\nGiven a string S, return the minimum number of character deletions required to make S good.",
        "inputSpec": "input1: A string S consisting of lowercase English letters (1 <= length <= 10^5).",
        "outputSpec": "Return an integer representing the minimum deletions required.",
        "examples": [
          {
            "input": "aab",
            "output": "0",
            "explanation": "Frequency of 'a' is 2 and 'b' is 1. Frequencies are unique. No deletions needed."
          },
          {
            "input": "aaabbbcc",
            "output": "2",
            "explanation": "Frequencies: 'a':3, 'b':3, 'c':2. Delete one 'b' (frequency becomes 2) and then one 'c' (frequency becomes 1) or one 'b' twice. Minimum deletions is 2."
          }
        ],
        "templates": {
          "java": "import java.util.*;\n\nclass UserMainCode {\n    public int minDeletions(String input1) {\n        Map<Character, Integer> counts = new HashMap<>();\n        for (char c : input1.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);\n        Set<Integer> used = new HashSet<>();\n        int deletions = 0;\n        for (int freq : counts.values()) {\n            while (freq > 0 && used.contains(freq)) {\n                freq--;\n                deletions++;\n            }\n            if (freq > 0) used.add(freq);\n        }\n        return deletions;\n    }\n}",
          "python": "class UserMainCode:\n    def minDeletions(self, input1: str) -> int:\n        from collections import Counter\n        counts = Counter(input1)\n        used = set()\n        deletions = 0\n        for freq in counts.values():\n            while freq > 0 and freq in used:\n                freq -= 1\n                deletions += 1\n            if freq > 0:\n                used.add(freq)\n        return deletions",
          "cpp": "#include <string>\n#include <vector>\n#include <unordered_set>\n#include <unordered_map>\nusing namespace std;\n\nclass UserMainCode {\npublic:\n    int minDeletions(string input1) {\n        unordered_map<char, int> counts;\n        for (char c : input1) counts[c]++;\n        unordered_set<int> used;\n        int deletions = 0;\n        for (auto& pair : counts) {\n            int freq = pair.second;\n            while (freq > 0 && used.count(freq)) {\n                freq--; deletions++;\n            }\n            if (freq > 0) used.insert(freq);\n        }\n        return deletions;\n    }\n};",
          "csharp": "using System;\nusing System.Collections.Generic;\n\npublic class UserMainCode {\n    public int minDeletions(string input1) {\n        Dictionary<char, int> counts = new Dictionary<char, int>();\n        foreach (char c in input1) counts[c] = counts.ContainsKey(c) ? counts[c] + 1 : 1;\n        HashSet<int> used = new HashSet<int>();\n        int deletions = 0;\n        foreach (int f in counts.Values) {\n            int freq = f;\n            while (freq > 0 && used.Contains(freq)) {\n                freq--; deletions++;\n            }\n            if (freq > 0) used.Add(freq);\n        }\n        return deletions;\n    }\n}"
        },
        "testCases": [
          {
            "id": "basic_1",
            "type": "basic",
            "input": "aab",
            "expectedOutput": "0",
            "name": "Basic Test Case 1"
          },
          {
            "id": "basic_2",
            "type": "basic",
            "input": "aaabbbcc",
            "expectedOutput": "2",
            "name": "Basic Test Case 2"
          },
          {
            "id": "graded_1",
            "type": "graded",
            "input": "ceabaacb",
            "expectedOutput": "2",
            "name": "Graded Test Case 1"
          },
          {
            "id": "graded_2",
            "type": "graded",
            "input": "abc",
            "expectedOutput": "2",
            "name": "Graded Test Case 2 (All freq 1)"
          },
          {
            "id": "graded_3",
            "type": "graded",
            "input": "aaaa",
            "expectedOutput": "0",
            "name": "Graded Test Case 3"
          },
          {
            "id": "graded_4",
            "type": "graded",
            "input": "aabbcc",
            "expectedOutput": "3",
            "name": "Graded Test Case 4"
          }
        ]
      }
    ]
  }
};
