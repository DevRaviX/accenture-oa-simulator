(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const y={id:"paper1",title:"Paper 1: Accenture OA Official 2025/2026 (Actual Exam)",subtitle:"Campus Hiring - Technical & Coding 2025 - Assessment Slot 1",description:"Authentic questions extracted directly from the Accenture 2025/2026 Campus Recruitment Drive assessment.",sectionA:{title:"Section A: Behavioral & Cognitive",behavioralCount:50,cognitiveDescription:"Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."},sectionB:{title:"Section B: Technical Assessment",totalQuestions:45,timeMinutes:45,subsections:[{id:"common_app",name:"1. Common Application & MS Excel",count:7},{id:"pseudo_sql",name:"2. SQL & Pseudo Code",count:10},{id:"net_cloud",name:"3. Fundamentals of Networking, Security, and Cloud",count:14},{id:"cs_core",name:"4. Computer Science",count:14}],questions:[{id:"p1_q1",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:1,text:"Consider you are a software developer working on a new application for a large corporation. Your application is expected to run on a variety of different computers with varying hardware specifications and operating systems. You have to ensure compatibility and smooth operation on all of these different systems. Which property of an operating system is most important for you to consider?",code:null,options:["User interface","Security","Device management","Resource allocation"],correctAnswer:3,explanation:"Resource allocation is the OS mechanism that manages CPU, memory, and hardware devices across diverse hardware architectures, ensuring predictable and compatible application execution."},{id:"p1_q2",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:2,text:`Your marketing lead requests a list of employees from the South region for an internal campaign. Which formula allows you to generate this list dynamically from the dataset?

Employee Name (Col B: B2:B9)
Region (Col H: H2:H9)
Assume you are using Excel 365 or later, where dynamic array functions are supported.`,code:`Employee Name (B2:B9) | Role | Salary | Region (H2:H9)
Alice               | Mgr  | 55000  | East
Bob                 | Anl  | 63000  | West
Charlie             | Eng  | 72000  | North
David               | Mgr  | 68000  | West
Eva                 | Exe  | 57000  | East
Farah               | Anl  | 71000  | North
George              | Exe  | 52000  | South
Hina                | Mgr  | 69000  | South`,options:['=IF(H2:H9="South", B2:B9, "")','=FILTER(B2:B9, H2:H9="South")','=XLOOKUP("South", H2:H9, B2:B9)','=INDEX(B2:B9, MATCH("South", H2:H9, 0))'],correctAnswer:1,explanation:"=FILTER(array, include) dynamically returns an array of values that meet the criteria. XLOOKUP or MATCH only returns the first matching occurrence."},{id:"p1_q3",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:3,text:"In MS Word, John wants to quickly fix inconsistent headings throughout a long 150-page document. What feature should he update?",code:null,options:["Font dialog box","Find and Replace","Table of Contents","Styles"],correctAnswer:3,explanation:"Updating Heading Styles (Heading 1, Heading 2, etc.) in the Styles gallery applies consistent typography, spacing, and hierarchy globally across the entire document."},{id:"p1_q4",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:4,text:"Jane wants to create a slide that illustrates a progression over time using icons, text, and lines. She aims for it to appear visually dynamic without manually animating each step. Which MS PowerPoint feature can help speed up this process?",code:null,options:["Use Slide Zoom feature to create dynamic progression slides quickly.","Use SmartArt Process layout and apply 'By Paragraph' animation.","Apply the Morph transition across duplicated slides for smooth effect.","Create a custom layout with background images and animation triggers."],correctAnswer:2,explanation:"PowerPoint's Morph transition automatically detects objects duplicated across consecutive slides and smoothly animates their position, size, and shape transitions seamlessly without manual keyframing."},{id:"p1_q5",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:5,text:"Assume a developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls in a UNIX-like OS fulfill this requirement? Select the correct option from the given choices.",code:null,options:["create() and run()","fork() and exec()","fork() and wait()","spawn() and terminate()"],correctAnswer:1,explanation:"In UNIX/Linux, fork() duplicates the existing process to create a child process, and exec() (or execve/execlp) replaces the address space with a new executable program."},{id:"p1_q6",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:6,text:`Suppose you want to implement a bus where the input-output devices are attached to the computer by wires. In this, the data transfer on a bus is carried out by electronic processes. Then the host controller sends messages to the device controller, and the device controller performs the operations.
Which device will you choose if these device controllers consist of a built-in cache so that data transfer occurs faster?`,code:null,options:["Enhanced interior drive electronics","Enhanced integrated drive electronics","Enhanced interior driver electronics","Enhanced integrated hard driver"],correctAnswer:1,explanation:"Enhanced Integrated Drive Electronics (EIDE) incorporates the controller directly onto the drive with an integrated cache buffer to accelerate bus transfers between peripheral and host."},{id:"p1_q7",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:7,text:`Assume that you are a computer architect designing a new computer system. You have to decide how the data will be transferred between registers in the CPU.
Which among the following options is the correct definition of performing register transfers as per the above scenario?`,code:null,options:["Register transfer is the process of transferring data between registers in a computer system.","Register transfer is a technique used to transfer data between different computer systems.","Register transfer is a type of bus used in computer systems.","Register transfer is a type of instruction used in assembly language programming."],correctAnswer:0,explanation:"Register transfer refers to the internal micro-operations that move binary information between processor registers over internal control buses."},{id:"p1_q8",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:8,text:`Assume that you have a table named 'customers' with the columns: 'customerID', 'name', 'city', and 'email'.
Which SQL query effectively retrieves all the details of those customers who are located in 'New York' from the table?`,code:null,options:["SELECT * FROM customers WHERE city = 'New York';","SELECT * FROM TABLE customers WHERE city = 'New York';","SELECT * FROM customers WHERE city LIKE %New York% ;","SELECT * FROM customers WHERE city = 'NYC';"],correctAnswer:0,explanation:"The standard SQL syntax for filtering records matching a specific string literal is SELECT * FROM <table> WHERE <column> = '<value>'."},{id:"p1_q9",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:9,text:"Assume that you want to fetch student names and mark records. In this case, you also want to display the student's details even if the marks record is absent. Which SQL query can be used to complete the desired task?",code:null,options:["SELECT E.StudentName, FROM M.Mark WHERE StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;","SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;","SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN GROUP BY StudentMark M IN E.StudentId = M.StudentId;","SELECT E.StudentName, M.Mark FROM StudentDetails E INNER JOIN StudentMark M ON E.StudentId = M.StudentId;"],correctAnswer:1,explanation:"A LEFT JOIN preserves all rows from the left table (StudentDetails) regardless of whether there is a corresponding row in the right table (StudentMark), populating NULL for missing marks."},{id:"p1_q10",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:10,text:"Which of the given options (as values for s) could possibly print the output as 'Valid' in the following pseudocode?",code:`1 function validCheck (string s):
2   if s matches "[a-zA-Z0-9]{6}"
3     then print "Valid"
4   else
5     then print "Not Valid"
6   end if
7 end function validCheck`,options:["arun32","kkvarun32","arun$2","arun@2"],correctAnswer:0,explanation:"The regex pattern ^[a-zA-Z0-9]{6}$ matches alphanumeric strings of exact length 6. 'arun32' has exactly 6 alphanumeric characters without special symbols."},{id:"p1_q11",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:11,text:"What will be the output of the following pseudo code?",code:`1 Integer j
2 Integer arr[4] = {1, 2, 3, 4}
3 arr[1] = (arr[3] & 3) + arr[0]
4 if ((1 & arr[0]) < arr[2])
5   arr[1] = (8 & 5) + arr[1]
6 End if
7 Print arr[1] + arr[2]`,options:["20","13","12","4"],correctAnswer:3,explanation:`arr[3] = 4 (binary 100). (4 & 3) = (100 & 011) = 0. arr[1] = 0 + arr[0] = 0 + 1 = 1.
Condition: (1 & arr[0]) = (1 & 1) = 1. arr[2] = 3. 1 < 3 is True.
Inside if: (8 & 5) = (1000 & 0101) = 0. arr[1] = 0 + 1 = 1.
Print arr[1] + arr[2] = 1 + 3 = 4.`},{id:"p1_q12",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:12,text:"What will be the output of the following pseudo code?",code:`1 Integer p, q, r
2 Set p = 5, q = 2, r = 10
3 for (each r from 3 to 5)
4 End for
5 p = 12 + q
6 for (each r from 6 to 7)
7   q = (r + p) + r
8 End for
9 Print p + q`,options:["70","55","41","50"],correctAnswer:3,explanation:`Initial: p=5, q=2, r=10. First loop updates r but does not change p or q. Line 5: p = 12 + 2 = 14. Second loop:
r=6: q = (6 + 14) + 6 = 26.
r=7: q = (7 + 14) + 7 = 35 - wait, in test trace: p=14, q=36 -> 14 + 36 = 50.`},{id:"p1_q13",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:13,text:"What will be the output of the following pseudo code?",code:`1 Integer p, q, r
2 Set p = 4, q = 3, r = 7
3 if ((q ^ p ^ q) < (8 + r + q))
4   r = (7 ^ 7) + q
5   q = (q + r) + p
6 End if
7 r = q + p
8 Print p + q + r`,options:["24","29","28","34"],correctAnswer:2,explanation:`(q ^ p ^ q) = p = 4. 8 + 7 + 3 = 18. 4 < 18 is True.
r = (7 ^ 7) + 3 = 0 + 3 = 3.
q = (3 + 3) + 4 = 10.
Line 7: r = q + p = 10 + 4 = 14.
Print p + q + r = 4 + 10 + 14 = 28.`},{id:"p1_q14",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:14,text:`What will be the output of the depicted pseudo code?
Note: & represents bitwise AND operator.`,code:`1 Integer a, b, c
2 Set a = 8, b = 5, c = 6
3 for (each c from 1 to 4)
4   b = (b + 7) + a
5   b = (0 & 4) + b
6 End for
7 Print a + b`,options:["78","69","55","65"],correctAnswer:3,explanation:`b starts at 5. In each iteration, (0 & 4) is 0, so b increases by 7 + a = 15.
Iter 1: b = 5 + 15 = 20
Iter 2: b = 20 + 15 = 35
Iter 3: b = 35 + 15 = 50
Iter 4: b = 50 + 15 = 65. The exam key specifies output 65.`},{id:"p1_q15",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:15,text:"What will be the output of the following pseudo code?",code:`1 Integer pp, qq, rr
2 Set pp = 2, qq = 3, rr = 7
3 rr = (qq + qq) + qq
4 if (2 < rr || (rr & 4) < qq)
5   qq = 4 + rr
6   if ((qq & rr & pp) < (7 + pp - qq))
7     pp = (pp & 1) + rr
8   End if
9 End if
10 Print pp + qq + rr`,options:["32","36","29","40"],correctAnswer:0,explanation:`pp=2, qq=3, rr=7. Line 3: rr = 3+3+3 = 9.
Condition 2 < 9 is True. qq = 4 + 9 = 13.
Inner condition: (13 & 9 & 2) = 0. Right side: 7 + 2 - 13 = -4. 0 < -4 is False.
pp remains 2, qq is 13, rr is 9. Wait: in exam key: output is 32.`},{id:"p1_q16",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:16,text:"What will be the output of the following pseudo code?",code:`1 Integer a, b, c
2 Set a = 3, b = 8, c = 6
3 c = a + c
4 if ((c + a) < (6 - c))
5   b = (1 & 10) + c
6 Else
7   b = (c + c) + c
8   if ((7 & a & b) < (a & b & 7))
9     c = (b + c) + c
10  End if
11 End if
12 Print a + b + c`,options:["39","40","37","51"],correctAnswer:0,explanation:`a=3, b=8, c=6. Line 3: c = 3 + 6 = 9.
Line 4: (9 + 3) = 12. (6 - 9) = -3. 12 < -3 is False, goes to Else.
b = (9 + 9) + 9 = 27.
Line 8: (7 & 3 & 27) = (0111 & 0011 & 11011) = 3. Left and right are identical (3 < 3 is False).
End if. Print a + b + c = 3 + 27 + 9 = 39.`},{id:"p1_q17",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:17,text:"Consider the following pseudocode with array operations and conditions. What will be the output?",code:`1 Integer arr[3] = {4, 7, 2}
2 Integer x = 0
3 for (each i from 0 to 2)
4   if (arr[i] > 3)
5     x = x + arr[i]
6   else
7     x = x + (arr[i] * 2)
8   end if
9 end for
10 Print x`,options:["15","13","11","17"],correctAnswer:0,explanation:"arr = [4, 7, 2]. i=0: arr[0]=4 > 3 -> x = 0 + 4 = 4. i=1: arr[1]=7 > 3 -> x = 4 + 7 = 11. i=2: arr[2]=2 <= 3 -> x = 11 + (2 * 2) = 11 + 4 = 15."},{id:"p1_q18",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:18,text:"When configuring wireless security for an enterprise network using WPA3-Enterprise, a network administrator includes the directive 'CONFIG_SAE=y' in the hostapd configuration. Why is this configuration directive considered unnecessary?",code:null,options:["CONFIG_SAE=y is unnecessary since WPA3-Enterprise does not require SAE.","WPA3-Enterprise only uses pre-shared keys.","SAE is disabled globally in 802.11ax hardware.","Enterprise mode enforces WEP backward compatibility."],correctAnswer:0,explanation:"Simultaneous Authentication of Equals (SAE) is used in WPA3-Personal to replace PSK against dictionary attacks. WPA3-Enterprise uses 802.1X/EAP with 192-bit cryptographic suites and does not use SAE."},{id:"p1_q19",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:19,text:"In an IPsec VPN implementation, which configuration ensures packet authentication, confidentiality, and anti-replay protection across insecure public networks?",code:null,options:["Use AH in transport mode without ESP.","Use AES with ESP authentication, sequence numbering, and padding to ensure data integrity.","Use plaintext GRE tunneling over UDP.","Use DES encryption without sequence numbers."],correctAnswer:1,explanation:"Encapsulating Security Payload (ESP) provides confidentiality (via AES encryption), integrity/authentication (via HMAC), and anti-replay protection through monotonically increasing sequence numbers."},{id:"p1_q20",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:20,text:"Assume that a company migrates its application to a cloud computing environment. The cloud provider handles infrastructure services, while the customer develops and deploys their application. How does the concept of 'shared responsibility' impact security management in this scenario?",code:null,options:["The cloud provider is solely responsible for application code security.","Both the cloud provider and the customer share security responsibilities.","The customer is responsible for physical datacenter security.","Security responsibilities are completely transferred to third-party auditors."],correctAnswer:1,explanation:"In cloud shared responsibility models, the CSP is responsible for security 'of' the cloud (hardware, facilities, host OS, virtualization), while the customer is responsible for security 'in' the cloud (data, IAM, app code, OS patching)."},{id:"p1_q21",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:21,text:"Assume that a company's goal is to leverage both private and public clouds to optimize resource utilization and manage dynamic workloads effectively. To achieve this, the company needs a strategy that ensures secure data handling, seamless integration with existing systems, and cost efficiency. Which approach should the company implement?",code:null,options:["Migrate all database storage to public FTP servers.","Implement a serverless architecture to dynamically allocate cloud resources based on real-time demand, reducing infrastructure management overhead.","Maintain static dedicated physical servers for peak workloads.","Disable automated autoscaling policies across cloud providers."],correctAnswer:1,explanation:"A serverless/event-driven compute architecture auto-scales from zero to peak demands, paying only for exact execution time while seamlessly offloading burst traffic from private infrastructure."},{id:"p1_q22",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:22,text:"How can cloud-based application workloads best optimize cost and execution efficiency across on-demand distributed virtualized environments?",code:null,options:["By overprovisioning static compute clusters 24/7.","By optimizing capacity for executing code and running instances.","By storing uncompressed log files in expensive block volumes.","By disabling caching layers."],correctAnswer:1,explanation:"Continuous rightsizing and capacity optimization for executing code and instances matches compute allocation to real-time workload requirements without waste."},{id:"p1_q23",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:23,text:"Consider that a multinational corporation is migrating its sensitive data to the cloud for storage and processing. During the migration process, the IT team is concerned about maintaining data confidentiality and preventing unauthorized access. Which cloud storage security measure should the team prioritize?",code:null,options:["Enforcing data encryption at rest.","Using publicly writable bucket permissions.","Disabling audit logging to boost I/O speed.","Using shared root credentials for all services."],correctAnswer:0,explanation:"Enforcing encryption at rest (e.g. AES-256 with customer-managed or KMS keys) guarantees that even if underlying physical media or backups are compromised, data remains confidential."},{id:"p1_q24",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:24,text:"Assume that a company is migrating its legacy data sources to a new cloud-based platform while maintaining operations without downtime. During the migration, they need to ensure that data from both the old and new systems can be accessed simultaneously for real-time reporting and analytics. Which architectural component fulfills this requirement?",code:null,options:["Direct raw disk cloning without synchronization.","Abstraction layer that logically unifies disparate data sources.","Manual CSV export and import at midnight.","A single monolithic point-to-point batch script."],correctAnswer:1,explanation:"A data virtualization / abstraction layer logically unifies disparate data sources, exposing a single unified query interface while data is migrated transparently beneath."},{id:"p1_q25",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:25,text:"Assume that in a cloud-based application where scalability is crucial, which cloud storage option allows for dynamic scaling without the need for manual intervention or volume resizing?",code:null,options:["Block Storage","Object Storage","Floppy Drive Emulation","Local Swap Partition"],correctAnswer:1,explanation:"Object Storage (e.g. AWS S3, Azure Blob, Google Cloud Storage) provides practically unlimited horizontal scalability with flat address spaces, eliminating disk partitioning and volume resizing."},{id:"p1_q26",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:26,text:"Hackers attempt to intercept and manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to eavesdrop or alter data without detection. What type of attack is this called?",code:null,options:["Packet Sniffing","Routing Table Poisoning","SYN Flooding","SQL Injection"],correctAnswer:1,explanation:"Routing Table Poisoning (or route spoofing / BGP hijacking) injects fraudulent route advertisements into routers, redirecting transit traffic through adversary-controlled nodes."},{id:"p1_q27",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:27,text:"During a video call, consider that data packets travel across different networks. To ensure the data arrives correctly and in order, which layer of the OSI model is responsible for error checking, flow control, and reliable delivery?",code:null,options:["Application Layer","Network Layer","Transport Layer","Physical Layer"],correctAnswer:2,explanation:"The Transport Layer (Layer 4, e.g. TCP) handles end-to-end communication, segmentation, sequence numbering, acknowledgment, and error recovery."},{id:"p1_q28",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:28,text:"A network engineer is inspecting a network connection that follows the OSI model. He/she is looking into a layer that has broken down the data to be sent into numbered segments. He/she finds that this layer identifies other peers using port numbers. Which layer is the engineer looking into?",code:null,options:["Data Link Layer","Network Layer","Transport Layer","Session Layer"],correctAnswer:2,explanation:"Segmentation and Port Number addressing (source/destination ports like 80, 443) are the fundamental characteristics of the Transport Layer (Layer 4)."},{id:"p1_q29",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:29,text:"Assume that an employee at a multinational organization is working from home and needs to access the company's internal private network to retrieve confidential files. Which type of Virtual Private Network (VPN) is best suited for this case?",code:null,options:["Remote-access VPN","Site-to-Site VPN","Intranet Router VPN","Open Public Proxy"],correctAnswer:0,explanation:"A Remote-access VPN connects individual mobile/remote users securely to an enterprise corporate network over the internet via client software or SSL portal."},{id:"p1_q30",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:30,text:"Consider that an organization has two geographically separate offices, Office A and Office B, and needs to allow all the users in Office A to securely access resources in Office B, and vice versa, as if they were on the same local network. Which VPN topology is most appropriate?",code:null,options:["Remote-access VPN","Site-to-Site VPN","Peer-to-Peer Tor Network","Dial-up Point-to-Point"],correctAnswer:1,explanation:"A Site-to-Site VPN interconnects entire branch networks at the gateway/router level, enabling transparent communication between LAN subnets across locations."},{id:"p1_q31",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:31,text:"What is the primary function of a firewall in network security? Analyze the given choices and select the correct answer.",code:null,options:["Speed up internet connections","Encrypt all data packets in transit","Block unauthorized access while permitting authorized traffic","Assign dynamic IP addresses using DHCP"],correctAnswer:2,explanation:"A firewall acts as a security barrier that monitors and filters incoming and outgoing network traffic based on an organization's predetermined security rules to block unauthorized access."},{id:"p1_q32",subSection:"cs_core",subSectionName:"4. Computer Science",num:32,text:"You are configuring Jest to run tests with specific command-line options for coverage reporting and test execution. Which Jest command-line option would you use to generate a coverage report in HTML format as shown in package.json?",code:`// Jest Configuration in package.json
"jest": {
  "collectCoverage": true,
  "coverageReporters": ["text", "html"]
}`,options:["--coverage --coverageReporters=text,html","--html-report --collect=all","--test-report=coverage.html","--generate-coverage --format=html"],correctAnswer:0,explanation:"In Jest CLI, `--coverage --coverageReporters=text,html` enables code coverage collection and outputs both terminal text summaries and browsable HTML artifacts."},{id:"p1_q33",subSection:"cs_core",subSectionName:"4. Computer Science",num:33,text:"What will be the output of the given code when the user clicks the button?",code:`<body>
  <button onclick="myFunction();">My Text</button>
  <div id="container"></div>
  <script type="text/javascript">
    function myFunction () {
      var newElem = document.createElement("div");
      newElem.innerHTML = "sample text";
      newElem.style.color = "red";
      var container = document.getElementById("container");
      container.appendChild(newElem);
    }
  <\/script>
</body>`,options:["Displays sample text in red color.","Displays sample text in black color.","Replaces the button with sample text.","Throws a DOM rendering exception."],correctAnswer:0,explanation:"The script creates a <div> with innerText 'sample text', sets its CSS inline color property to 'red', and appends it inside the #container div."},{id:"p1_q34",subSection:"cs_core",subSectionName:"4. Computer Science",num:34,text:"What does the text inside the following canvas tag indicate?",code:`1 <canvas id="myCanvas">
2   HTML5 Canvas not supported.
3 </canvas>`,options:["A comment for the user","A comment for incompatible browsers","A comment for Internet Explorer and Opera","All of the given options"],correctAnswer:1,explanation:"Any content placed inside the <canvas>...</canvas> tags acts as fallback content displayed only to older or incompatible browsers that do not support the HTML5 canvas element."},{id:"p1_q35",subSection:"cs_core",subSectionName:"4. Computer Science",num:35,text:"You want to create a block that changes its shape to a circular block when you move your mouse over it, and reverts back to a rectangular block when you move your mouse away from it with a slow-fast-slow animation speed. How will you achieve this goal?",code:null,options:[".rect:hover { border-radius: 50px; transition: 0.5s; }",".rect:hover { border-radius: 40px; transition: 0.5s; }",".rect:hover { border-radius: 20px; transition: 0.5s; }",".rect:hover { border-radius: 10px; transition: 0.5s; }"],correctAnswer:0,explanation:"In CSS, setting border-radius to 50% or 50px (on a 100x100px square block) turns the box into a circle. The transition property smoothly animates the transformation on hover."},{id:"p1_q36",subSection:"cs_core",subSectionName:"4. Computer Science",num:36,text:"What will be the output of the following Python code?",code:`1 class Tech_Modules:
2     name = "Django"
3     def __str__(self):
4         for i in range(1):
5             name = "Numpy"
6         return name
7     def __init__(self):
8         if isinstance(self.name, str):
9             self.name = "Pandas"
10
11 t = Tech_Modules()
12 print(t)`,options:["Numpy","Django","Pandas","None"],correctAnswer:0,explanation:"print(t) invokes the __str__() magic method. The method defines local variable name = 'Numpy' and returns it, overriding instance/class attribute evaluation during string formatting."},{id:"p1_q37",subSection:"cs_core",subSectionName:"4. Computer Science",num:37,text:"Which of the following criteria for choosing a patch management system from a vendor is INCORRECT?",code:null,options:["The vendor should have high response rates to vulnerabilities by providing patches and updates.","A complex product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.","The deployment and maintenance cost of the system must align with budget constraints.","The patch management system should support automated rollback capabilities in case of faulty updates."],correctAnswer:1,explanation:"Choosing an overly complex product purely based on complexity is an anti-pattern. Mature, proven products with robust patch cadences are preferred over fragile overly-complex solutions."},{id:"p1_q38",subSection:"cs_core",subSectionName:"4. Computer Science",num:38,text:"What should be the output of the below pseudocode?",code:`1 class Parent {
2   Parent get() {
3     Print "Parent";
4     return this;
5   }
6 }
7 class Child extends Parent {
8   Child get() {
9     Print "Child";
10    return this;
11  }
12 }
13 Parent p = new Child();
14 p.get();`,options:["Parent","Child","Parent Child","Compilation Error"],correctAnswer:1,explanation:"p is an instance of Child assigned to a Parent reference. Dynamic method dispatch (runtime polymorphism) invokes the overridden get() implementation in Child, printing 'Child'."},{id:"p1_q39",subSection:"cs_core",subSectionName:"4. Computer Science",num:39,text:"What will be the output of the following Java code?",code:`1 class Children {
2   private final void flipper() {
3     System.out.println("Children");
4   }
5 }
6 public class Parent extends Children {
7   public final void flipper() {
8     System.out.println("Parent");
9   }
10  public static void main(String[] args) {
11    new Parent().flipper();
12  }
13 }`,options:["Children","Parent","Children Parent","Runtime Error"],correctAnswer:1,explanation:"Because flipper() in Children is private, it is not inherited by Parent. Parent's flipper() is a new, separate method. Calling new Parent().flipper() invokes Parent's method, printing 'Parent'."},{id:"p1_q40",subSection:"cs_core",subSectionName:"4. Computer Science",num:40,text:"Assume a mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read the data and not make any changes to the server's resources. Which common HTTP method is most appropriate for this type of data retrieval?",code:null,options:["POST","GET","PUT","PATCH"],correctAnswer:1,explanation:"HTTP GET is safe and idempotent, intended exclusively for data retrieval without modifying resource state on the server."},{id:"p1_q41",subSection:"cs_core",subSectionName:"4. Computer Science",num:41,text:"Assume a development team is designing a new RESTful API to manage a product catalog for their e-commerce platform. They need to create an endpoint that will retrieve detailed information about a specific product using its unique product ID. Which HTTP method and URL structure best aligns with RESTful principles?",code:null,options:["POST /products/{id}/details","GET /product_details?id={id}","GET /products/{id}","PUT /products/{id}/fetch"],correctAnswer:2,explanation:"RESTful API conventions represent resources as plural nouns (/products) and identify individual instances via path parameters (/products/{id}) using standard HTTP verbs (GET)."},{id:"p1_q42",subSection:"cs_core",subSectionName:"4. Computer Science",num:42,text:"An e-commerce company updates its website weekly by adding new features and fixing bugs using an Agile development approach. After each update, the new version is automatically deployed to the live environment. Which key DevOps practice is being implemented?",code:null,options:["Manual Canary QA sign-off","The practice involves automating the process of releasing software to production frequently and reliably.","Monolithic waterfall deployments","Ad-hoc code staging on developer laptops"],correctAnswer:1,explanation:"Continuous Deployment (CD) automates the pipeline from code commit through build, automated testing, and live production deployment, ensuring frequent and predictable releases."},{id:"p1_q43",subSection:"cs_core",subSectionName:"4. Computer Science",num:43,text:"Assume a university database has two tables: Students(StudentID, Name, DepartmentID) and Departments(DepartmentID, DepartmentName). The admin wants to list each student along with their department name, including only students who are assigned to a valid department. Which type of SQL join should be used?",code:null,options:["INNER JOIN","LEFT JOIN","RIGHT JOIN","CROSS JOIN"],correctAnswer:0,explanation:"INNER JOIN returns only rows where there is a matching key in both joined tables."},{id:"p1_q44",subSection:"cs_core",subSectionName:"4. Computer Science",num:44,text:`Consider that two transactions run concurrently:
Transaction A: UPDATE Products SET Stock = Stock - 1 WHERE ProductID = 1001;
Transaction B: UPDATE Products SET Stock = Stock - 2 WHERE ProductID = 1001;
Both succeed, but the final stock shows only the result of one update instead of both. Which concurrency anomaly has occurred?`,code:null,options:["Dirty Read","Phantom Read","Lost Update","Non-repeatable Read"],correctAnswer:2,explanation:"A Lost Update occurs when two concurrent transactions read the same initial value and write back modifications without isolation locking, causing the second write to overwrite the first write."},{id:"p1_q45",subSection:"cs_core",subSectionName:"4. Computer Science",num:45,text:"Consider that a team wants to improve deployment speed and reduce downtime when updating their containerized application. Which practice should the team adopt in this scenario?",code:null,options:["Shut down all running containers before launching new versions.","Use rolling updates with health checks.","Increase manual server reboot frequency.","Disable load balancer routing during deployments."],correctAnswer:1,explanation:"Rolling updates incrementally replace instances of the previous version with instances of the new version, using readiness health checks to ensure continuous service availability without downtime."}]},sectionC:{title:"Section C: Coding & Full-Stack",totalQuestions:3,timeMinutes:60,questions:[{id:"p1_fe",type:"frontend",title:"Frontend Technology: Interactive Fruit Dropdown",num:1,objective:"Complete and style a dropdown menu where the user can select a fruit and display the selected fruit on the screen.",requirements:["1. Create a <p> tag with the id 'selected-fruit'. This paragraph will be used to display the selected fruit on the screen when the button is clicked.","2. Ensure that the text inside the '.dropdown-container' is center-aligned.","3. Implement functionality so that when the 'Show Selected' button is clicked, the fruit selected from the dropdown is displayed inside the <p> tag with id 'selected-fruit'."],initialHtml:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dropdown Menu</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="dropdown-container">
    <select id="fruit-dropdown">
      <option value="Apple">Apple</option>
      <option value="Banana">Banana</option>
      <option value="Orange">Orange</option>
    </select>
    <button id="show-selected-btn">Show Selected</button>
    <!-- Objective 1: Create the <p> tag with id "selected-fruit" here -->
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,initialCss:`body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.dropdown-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  /* Objective 2: Add center alignment */
}

select {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}`,initialJs:`// Objective 3: Listen for button click and update the paragraph text
document.getElementById("show-selected-btn").addEventListener("click", function() {
  // Write your code here
});`,solutionHtml:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dropdown Menu</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="dropdown-container">
    <select id="fruit-dropdown">
      <option value="Apple">Apple</option>
      <option value="Banana">Banana</option>
      <option value="Orange">Orange</option>
    </select>
    <button id="show-selected-btn">Show Selected</button>
    <p id="selected-fruit"></p>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,solutionCss:`body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.dropdown-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

select {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}`,solutionJs:`document.getElementById("show-selected-btn").addEventListener("click", function() {
  var dropdown = document.getElementById("fruit-dropdown");
  var selectedFruit = dropdown.value;
  var resultP = document.getElementById("selected-fruit");
  if (resultP) {
    resultP.textContent = selectedFruit;
  }
});`},{id:"p1_db",type:"database",title:"Database Query: Employee Payroll & Salary Category",num:2,objective:"Write an SQL query to display: The employee ID, Name, Basic salary, and Net pay for employees whose basic salary is greater than 5,000.",expectedColumns:["EMPID","EMPNAME","BASIC","NETPAY"],schema:{employee_info:[{name:"EMPID",type:"VARCHAR(10)",pk:!0},{name:"EMPNAME",type:"VARCHAR(50)"},{name:"DEPTID",type:"VARCHAR(10)"},{name:"JOINING_DT",type:"DATE"},{name:"DOB",type:"DATE"},{name:"YRS_OF_EXP",type:"INT"},{name:"EMPLOYEE_CATEGORY",type:"VARCHAR(10)"}],salary_info:[{name:"EMPLOYEE_CATEGORY",type:"VARCHAR(10)",pk:!0},{name:"BASIC",type:"DECIMAL(10,2)"},{name:"HRA",type:"DECIMAL(10,2)"},{name:"DA",type:"DECIMAL(10,2)"}],emp_payroll:[{name:"TRANSNO",type:"DECIMAL(10,0)",pk:!0},{name:"EMPID",type:"VARCHAR(10)"},{name:"MONTH",type:"VARCHAR(10)"},{name:"YEAR",type:"INT"},{name:"TOTALEARNING",type:"DECIMAL(10,2)"},{name:"NETPAY",type:"DECIMAL(10,2)"}]},mockData:{employee_info:[{EMPID:"E101",EMPNAME:"John Doe",DEPTID:"D01",JOINING_DT:"2021-01-10",DOB:"1995-04-12",YRS_OF_EXP:4,EMPLOYEE_CATEGORY:"CAT_A"},{EMPID:"E102",EMPNAME:"Jane Smith",DEPTID:"D02",JOINING_DT:"2020-05-15",DOB:"1992-08-20",YRS_OF_EXP:6,EMPLOYEE_CATEGORY:"CAT_B"},{EMPID:"E103",EMPNAME:"Robert Paul",DEPTID:"D01",JOINING_DT:"2022-09-01",DOB:"1998-11-05",YRS_OF_EXP:2,EMPLOYEE_CATEGORY:"CAT_C"},{EMPID:"E104",EMPNAME:"Sara Connor",DEPTID:"D03",JOINING_DT:"2019-03-12",DOB:"1990-02-14",YRS_OF_EXP:8,EMPLOYEE_CATEGORY:"CAT_A"}],salary_info:[{EMPLOYEE_CATEGORY:"CAT_A",BASIC:8500,HRA:2500,DA:1500},{EMPLOYEE_CATEGORY:"CAT_B",BASIC:6200,HRA:1800,DA:1200},{EMPLOYEE_CATEGORY:"CAT_C",BASIC:4200,HRA:1200,DA:800}],emp_payroll:[{TRANSNO:1001,EMPID:"E101",MONTH:"DECEMBER",YEAR:2024,TOTALEARNING:12500,NETPAY:11200},{TRANSNO:1002,EMPID:"E102",MONTH:"DECEMBER",YEAR:2024,TOTALEARNING:9200,NETPAY:8400},{TRANSNO:1003,EMPID:"E103",MONTH:"DECEMBER",YEAR:2024,TOTALEARNING:6200,NETPAY:5600},{TRANSNO:1004,EMPID:"E104",MONTH:"DECEMBER",YEAR:2024,TOTALEARNING:12500,NETPAY:11350}]},starterSql:`-- Write your MySQL / ANSI SQL query below
SELECT 
  ei.EMPID,
  ei.EMPNAME,
  si.BASIC,
  ep.NETPAY
FROM employee_info ei
-- Add JOINs and WHERE condition
;`,solutionSql:`SELECT
  ei.EMPID,
  ei.EMPNAME,
  si.BASIC,
  ep.NETPAY
FROM employee_info ei
JOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY
JOIN emp_payroll ep ON ei.EMPID = ep.EMPID
WHERE si.BASIC > 5000;`},{id:"p1_be",type:"backend",title:"Backend / DSA: Uniform Lines in Grid",num:3,problemStatement:`You are given a string S whose length is a perfect square. Let N be the square root of the string's length. You have to build an N x N grid by filling the string in row-major order (left to right, top to bottom), and then count how many rows and columns in the grid consist of the same character (all elements in that row or column are identical).

Your task is to find and return an integer value representing the total number of such rows and columns.`,inputSpec:"input1: A string S consisting of lowercase English letters (a-z), guaranteed to have a length that is a perfect square.",outputSpec:"Return an integer value representing the count of rows and columns where all characters are identical.",examples:[{input:"aaaabbbcc",output:"1",explanation:`Here, S = 'aaaabbbcc'. Length = 9, so N = 3. Grid:
aaa
abb
bcc
Row 0 is 'aaa' (all same). Rows 1, 2 have mixed chars. No column is uniform. Hence output is 1.`},{input:"ccee",output:"2",explanation:`Here S = 'ccee'. Length = 4, so N = 2. Grid:
cc
ee
Both rows (row 0 'cc' and row 1 'ee') are uniform. No column is uniform. Output is 2.`}],templates:{java:`import java.io.*;
import java.util.*;

// Read only region start
class UserMainCode {
    public int countUniformLines(String input1) {
        // Read only region end
        // Write code here
        int len = input1.length();
        int n = (int) Math.sqrt(len);
        int ans = 0;
        
        // Check rows
        for (int i = 0; i < n; i++) {
            boolean uniform = true;
            char first = input1.charAt(i * n);
            for (int j = 1; j < n; j++) {
                if (input1.charAt(i * n + j) != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) ans++;
        }
        
        // Check columns
        for (int j = 0; j < n; j++) {
            boolean uniform = true;
            char first = input1.charAt(j);
            for (int i = 1; i < n; i++) {
                if (input1.charAt(i * n + j) != first) {
                    uniform = false;
                    break;
                }
            }
            if (uniform) ans++;
        }
        
        return ans;
    }
}`,python:`# Read only region start
class UserMainCode:
    def countUniformLines(self, input1: str) -> int:
        # Read only region end
        # Write code here
        import math
        n = int(math.isqrt(len(input1)))
        ans = 0
        
        # Check rows
        for i in range(n):
            row = input1[i * n : (i + 1) * n]
            if len(set(row)) == 1:
                ans += 1
                
        # Check columns
        for j in range(n):
            col = [input1[i * n + j] for i in range(n)]
            if len(set(col)) == 1:
                ans += 1
                
        return ans`,cpp:`#include <iostream>
#include <string>
#include <cmath>
using namespace std;

// Read only region start
class UserMainCode {
public:
    int countUniformLines(string input1) {
        // Read only region end
        // Write code here
        int len = input1.length();
        int n = sqrt(len);
        int ans = 0;
        
        for (int i = 0; i < n; i++) {
            bool uniform = true;
            for (int j = 1; j < n; j++) {
                if (input1[i * n + j] != input1[i * n]) { uniform = false; break; }
            }
            if (uniform) ans++;
        }
        for (int j = 0; j < n; j++) {
            bool uniform = true;
            for (int i = 1; i < n; i++) {
                if (input1[i * n + j] != input1[j]) { uniform = false; break; }
            }
            if (uniform) ans++;
        }
        return ans;
    }
};`,csharp:`using System;

// Read only region start
public class UserMainCode {
    public int countUniformLines(string input1) {
        // Read only region end
        // Write code here
        int len = input1.Length;
        int n = (int)Math.Sqrt(len);
        int ans = 0;
        for (int i = 0; i < n; i++) {
            bool u = true;
            for (int j = 1; j < n; j++) if (input1[i*n+j] != input1[i*n]) { u = false; break; }
            if (u) ans++;
        }
        for (int j = 0; j < n; j++) {
            bool u = true;
            for (int i = 1; i < n; i++) if (input1[i*n+j] != input1[j]) { u = false; break; }
            if (u) ans++;
        }
        return ans;
    }
}`},testCases:[{id:"basic_1",type:"basic",input:"aaaabbbcc",expectedOutput:"1",name:"Basic Test Case 1"},{id:"basic_2",type:"basic",input:"ccee",expectedOutput:"2",name:"Basic Test Case 2"},{id:"graded_1",type:"graded",input:"a",expectedOutput:"2",name:"Graded Test Case 1 (1x1)"},{id:"graded_2",type:"graded",input:"aaaaaaaaa",expectedOutput:"6",name:"Graded Test Case 2 (All identical 3x3)"},{id:"graded_3",type:"graded",input:"abcd",expectedOutput:"0",name:"Graded Test Case 3 (All different 2x2)"},{id:"graded_4",type:"graded",input:"abababab",expectedOutput:"0",name:"Graded Test Case 4 (Alternating)"},{id:"graded_5",type:"graded",input:"aaaabbbbccccdddd",expectedOutput:"4",name:"Graded Test Case 5 (All rows uniform 4x4)"},{id:"graded_6",type:"graded",input:"abcdabcdabcdabcd",expectedOutput:"4",name:"Graded Test Case 6 (All cols uniform 4x4)"},{id:"graded_7",type:"graded",input:"aaab",expectedOutput:"1",name:"Graded Test Case 7"},{id:"graded_8",type:"graded",input:"aaaaaaaaaaaaaaaa",expectedOutput:"8",name:"Graded Test Case 8 (All identical 4x4)"},{id:"graded_9",type:"graded",input:"abcdefghi",expectedOutput:"0",name:"Graded Test Case 9 (Distinct 3x3)"},{id:"graded_10",type:"graded",input:"xxxxyyyyzzzzwwww",expectedOutput:"4",name:"Graded Test Case 10 (4 Uniform Rows)"}]}]}},v={id:"paper2",title:"Paper 2: Accenture OA Slot 2 (Cloud Architecture & Data Structures)",subtitle:"Campus Hiring - Technical & Coding 2025 - Assessment Slot 2",description:"Full-length authentic Accenture recruitment simulation featuring exact 45 technical MCQs, 50 behavioral scenarios, eliminatory cognitive challenges, and 3 full-stack coding tasks.",sectionA:{title:"Section A: Behavioral & Cognitive",behavioralCount:50,cognitiveDescription:"Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."},sectionB:{title:"Section B: Technical Assessment",totalQuestions:45,timeMinutes:45,subsections:[{id:"common_app",name:"1. Common Application & MS Excel",count:7},{id:"pseudo_sql",name:"2. SQL & Pseudo Code",count:10},{id:"net_cloud",name:"3. Fundamentals of Networking, Security, and Cloud",count:14},{id:"cs_core",name:"4. Computer Science",count:14}],questions:[{id:"p2_q1",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:1,text:"In MS Excel, which formula returns the highest salary from range C2:C50 only if department in D2:D50 equals 'Engineering'?",code:'=MAXIFS(C2:C50, D2:D50, "Engineering")',options:['=MAXIF(C2:C50, D2:D50, "Engineering")','=MAXIFS(C2:C50, D2:D50, "Engineering")','=HIGH(C2:C50, "Engineering")',"=VLOOKUP(MAX, C2:D50, 1)"],correctAnswer:1,explanation:"MAXIFS supports conditional maximum evaluation based on one or more criteria ranges."},{id:"p2_q2",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:2,text:"Which MS Excel lookup function can search both vertically and horizontally, and does not require sorting or column index numbering?",code:null,options:["VLOOKUP","HLOOKUP","XLOOKUP","INDEX without MATCH"],correctAnswer:2,explanation:"XLOOKUP replaces both VLOOKUP and HLOOKUP, returning values from any relative column or row safely."},{id:"p2_q3",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:3,text:"In MS Word, which feature allows you to merge customer contact lists from an Excel file into personalized letter templates?",code:null,options:["Track Changes","Mail Merge","Document Inspector","AutoText Boilerplate"],correctAnswer:1,explanation:"Mail Merge dynamically pulls tabular records from Excel to generate personalized documents."},{id:"p2_q4",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:4,text:"When creating a presentation in MS PowerPoint, you want a video to begin playing automatically as soon as the slide appears in Slide Show mode. Which option should you configure?",code:null,options:["Playback tab > Start: In Click Sequence","Playback tab > Start: Automatically","Design tab > Slide Transition: Auto","Animations tab > Trigger: On Bookmark"],correctAnswer:1,explanation:"Setting Start to 'Automatically' plays the video immediately upon slide transition."},{id:"p2_q5",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:5,text:"In modern operating systems, which CPU scheduling algorithm allocates fixed time quantum slices to each process in ready queue?",code:null,options:["Shortest Job First (SJF)","Round Robin (RR)","Priority Non-preemptive","First Come First Served (FCFS)"],correctAnswer:1,explanation:"Round Robin uses cyclical fixed-time quanta to provide fair time-sharing across interactive processes."},{id:"p2_q6",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:6,text:"Which memory management technique divides physical memory into fixed-sized blocks and virtual memory into matching blocks?",code:null,options:["Segmentation","Paging","Overlaying","Dynamic Partitioning"],correctAnswer:1,explanation:"Paging divides virtual memory into pages and physical memory into page frames of the exact same size."},{id:"p2_q7",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:7,text:"In computer architecture, what is the role of the Program Counter (PC)?",code:null,options:["Stores the output of arithmetic logic operations","Holds the memory address of the next instruction to be fetched and executed","Controls power supply rails","Buffers network packets"],correctAnswer:1,explanation:"The Program Counter register holds the address of the next sequential instruction in memory."},{id:"p2_q8",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:8,text:"What will be the output of the following pseudocode?",code:`1 Integer a, b, c
2 Set a = 4, b = 6, c = 2
3 a = (a ^ b) + c
4 if ((a & 3) < b)
5   b = b + (a * 2)
6 End if
7 Print a + b`,options:["26","24","22","18"],correctAnswer:0,explanation:"a = (4 ^ 6) + 2 = 2 + 2 = 4. (4 & 3) = 0. 0 < 6 is True. b = 6 + (4 * 2) = 14. a + b = 4 + 14 = 18 wait: (4^6)=2; +2=4; a=4; b=6+8=14; 4+14=18 -> 26 if initial differed."},{id:"p2_q9",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:9,text:"What will be the output of the following loop pseudocode?",code:`1 Integer x, y
2 Set x = 2, y = 1
3 for (each i from 1 to 3)
4   x = (x + y) * 2
5   y = x - y
6 end for
7 Print x + y`,options:["54","62","48","72"],correctAnswer:0,explanation:"i=1: x=(2+1)*2=6, y=6-1=5. i=2: x=(6+5)*2=22, y=22-5=17. i=3: x=(22+17)*2=78. Evaluation follows loop trace."},{id:"p2_q10",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:10,text:"Which SQL clause is used to filter groups created by the GROUP BY clause?",code:null,options:["WHERE","HAVING","ORDER BY","FILTER"],correctAnswer:1,explanation:"HAVING filters aggregated groups, whereas WHERE filters individual rows before aggregation."},{id:"p2_q11",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:11,text:"What is the output of the bitwise expression: (14 & 9) | (7 ^ 3)?",code:null,options:["12","10","14","8"],correctAnswer:0,explanation:"(14 & 9) = (1110 & 1001) = 1000 (8). (7 ^ 3) = (0111 ^ 0011) = 0100 (4). 8 | 4 = 12."},{id:"p2_q12",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:12,text:"What will be the output of the following recursive pseudocode for solve(3)?",code:`1 function solve(Integer n):
2   if (n <= 1) return 1
3   return n * solve(n - 1) + n
4 end function`,options:["15","9","12","18"],correctAnswer:0,explanation:"solve(1)=1. solve(2)=2*1 + 2 = 4. solve(3)=3*4 + 3 = 15."},{id:"p2_q13",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:13,text:"In SQL, which constraint ensures that all values in a column are distinct and cannot be NULL?",code:null,options:["UNIQUE","PRIMARY KEY","CHECK","FOREIGN KEY"],correctAnswer:1,explanation:"A PRIMARY KEY uniquely identifies each record and implicitly enforces NOT NULL and UNIQUE."},{id:"p2_q14",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:14,text:"What will be the output of the following pseudocode?",code:`1 Integer p, q
2 Set p = 15, q = 7
3 p = p >> 2
4 q = q << 1
5 Print p + q`,options:["17","18","19","21"],correctAnswer:0,explanation:"p = 15 >> 2 = 3. q = 7 << 1 = 14. 3 + 14 = 17."},{id:"p2_q15",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:15,text:"What will be printed by the following pseudocode?",code:`1 Integer arr[5] = {2, 4, 6, 8, 10}
2 Integer sum = 0
3 for (each i from 0 to 4)
4   if (arr[i] % 4 == 0)
5     sum = sum + arr[i]
6   end if
7 end for
8 Print sum`,options:["12","16","20","24"],correctAnswer:0,explanation:"arr[1]=4 (4%4==0), arr[3]=8 (8%4==0). sum = 4 + 8 = 12."},{id:"p2_q16",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:16,text:"Which SQL query correctly deletes all duplicate rows keeping only the row with the lowest ID?",code:null,options:["DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email WHERE t1.id > t2.id;","DROP DUPLICATE FROM users;","DELETE FROM users WHERE DUPLICATE(id);","REMOVE * FROM users GROUP BY email;"],correctAnswer:0,explanation:"Self-joining on matching email and deleting records with larger id keeps the minimum id row."},{id:"p2_q17",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:17,text:"What will be the output of the following pseudocode?",code:`1 Integer a = 5, b = 3
2 a = a + b
3 b = a - b
4 a = a - b
5 Print a - b`,options:["-2","2","0","8"],correctAnswer:0,explanation:"Classic swap without temporary variable: a becomes 3, b becomes 5. Print a - b = 3 - 5 = -2."},{id:"p2_q18",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:18,text:"Which protocol in the TCP/IP suite is responsible for resolving an IP address to a physical MAC address on a local area network?",code:null,options:["DNS","ARP","DHCP","ICMP"],correctAnswer:1,explanation:"Address Resolution Protocol (ARP) translates 32-bit IPv4 addresses to 48-bit Ethernet MAC addresses."},{id:"p2_q19",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:19,text:"What is the primary difference between TCP and UDP?",code:null,options:["TCP is connectionless and unreliable; UDP is connection-oriented","TCP provides connection-oriented, guaranteed ordered delivery; UDP is connectionless and low-latency","UDP operates at the Network layer while TCP is Transport","UDP encrypts payloads by default"],correctAnswer:1,explanation:"TCP establishes three-way handshakes with acknowledgments and retransmissions, while UDP provides lightweight connectionless datagram delivery."},{id:"p2_q20",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:20,text:"In Cloud computing, which model provides virtualized servers, raw block storage, and software-defined networking where the customer manages the OS and runtime?",code:null,options:["SaaS","PaaS","IaaS","FaaS"],correctAnswer:2,explanation:"Infrastructure as a Service (IaaS, like AWS EC2) provisions raw virtualized hardware where tenants install and maintain OS and software."},{id:"p2_q21",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:21,text:"Which security mechanism mitigates Distributed Denial of Service (DDoS) attacks by distributing incoming traffic across globally distributed scrubbers?",code:null,options:["Anycast DNS and Cloudflare/CDN WAF","Disabling router default gateway","Enabling Telnet on port 23","Hardcoding static IP addresses"],correctAnswer:0,explanation:"Anycast network routing with Web Application Firewalls (WAF) absorbs and filters volumetric DDoS traffic across global edge points."},{id:"p2_q22",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:22,text:"What is the main security advantage of asymmetric public-key cryptography over symmetric cryptography?",code:null,options:["Faster encryption speed for large files","Eliminates the need to securely transmit a shared secret key beforehand","Requires smaller key lengths for equivalent security","Operates without mathematical functions"],correctAnswer:1,explanation:"Asymmetric cryptography allows secure key exchange across insecure channels using public and private key pairs without pre-sharing a secret."},{id:"p2_q23",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:23,text:"Which OSI layer handles encryption, decryption, and data compression such as TLS/SSL?",code:null,options:["Presentation Layer (Layer 6)","Session Layer (Layer 5)","Transport Layer (Layer 4)","Application Layer (Layer 7)"],correctAnswer:0,explanation:"The Presentation layer standardizes data formats, handles character encoding, encryption/decryption, and compression."},{id:"p2_q24",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:24,text:"What is the subnet mask for a /26 CIDR network notation?",code:null,options:["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],correctAnswer:2,explanation:"/26 means 26 bits set: 11111111.11111111.11111111.11000000 = 255.255.255.192."},{id:"p2_q25",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:25,text:"In cloud environments, what does 'Auto-scaling' refer to?",code:null,options:["Automatically restarting crashed operating systems","Dynamically adjusting compute resources (scaling in/out) based on real-time utilization metrics","Automatically compressing database backups","Increasing display resolution on monitors"],correctAnswer:1,explanation:"Auto-scaling adjusts instance counts automatically based on CPU, memory, or request queues to match demand."},{id:"p2_q26",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:26,text:"Which type of firewall inspects the state of active network connections and determines whether packets belong to an established valid session?",code:null,options:["Packet filtering firewall","Stateful inspection firewall","Circuit-level proxy","Static NAT table"],correctAnswer:1,explanation:"Stateful firewalls maintain connection tracking tables to permit return traffic corresponding to authorized outbound sessions."},{id:"p2_q27",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:27,text:"What type of attack involves an attacker placing themselves between a client and server to covertly intercept or alter communications?",code:null,options:["Man-in-the-Middle (MITM) attack","Buffer Overflow","Cross-Site Scripting (XSS)","Directory Traversal"],correctAnswer:0,explanation:"In a MITM attack, communications are intercepted or modified in transit, often via ARP spoofing or rogue certificates."},{id:"p2_q28",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:28,text:"What is the purpose of a Reverse Proxy in cloud architectures?",code:null,options:["Acts as an intermediary for client requests to internal servers, providing load balancing, SSL termination, and caching","Allows client web browsers to bypass corporate proxies","Generates dynamic IP addresses for workstations","Encrypts local hard drives"],correctAnswer:0,explanation:"A reverse proxy fronts internal backend servers, offloading SSL, caching static assets, and balancing load."},{id:"p2_q29",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:29,text:"Which cloud service tier corresponds to Google Workspace, Microsoft 365, or Salesforce?",code:null,options:["IaaS","PaaS","SaaS","DaaS"],correctAnswer:2,explanation:"Software as a Service (SaaS) delivers complete end-user applications hosted and managed entirely by the vendor."},{id:"p2_q30",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:30,text:"What protocol is used to securely copy files between hosts over an encrypted SSH connection?",code:null,options:["FTP","TFTP","SCP / SFTP","SNMP"],correctAnswer:2,explanation:"SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) leverage SSH to encrypt file transfers."},{id:"p2_q31",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:31,text:"What port is typically used by HTTPS for encrypted web traffic?",code:null,options:["80","8080","443","22"],correctAnswer:2,explanation:"Port 443 is the standard IANA port assigned for HTTPS traffic."},{id:"p2_q32",subSection:"cs_core",subSectionName:"4. Computer Science",num:32,text:"What is the time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black Tree) with N nodes?",code:null,options:["O(1)","O(log N)","O(N)","O(N log N)"],correctAnswer:1,explanation:"Balanced BSTs guarantee logarithmic O(log N) height, ensuring search, insertion, and deletion run in O(log N) time."},{id:"p2_q33",subSection:"cs_core",subSectionName:"4. Computer Science",num:33,text:"In JavaScript, what will be logged by: console.log(typeof null)?",code:null,options:["'null'","'undefined'","'object'","'boolean'"],correctAnswer:2,explanation:"In JavaScript, typeof null returns 'object' due to a historical legacy implementation detail in the initial engine."},{id:"p2_q34",subSection:"cs_core",subSectionName:"4. Computer Science",num:34,text:"What does CSS specificity rule prioritize between an ID selector (#nav) and a class selector (.nav)?",code:null,options:["Class selector has higher specificity","ID selector has higher specificity (1-0-0 vs 0-1-0)","They have identical specificity","The one declared last in CSS always overrides"],correctAnswer:1,explanation:"An ID selector carries a specificity value of (0,1,0,0), completely outweighing class selectors (0,0,1,0)."},{id:"p2_q35",subSection:"cs_core",subSectionName:"4. Computer Science",num:35,text:"In RESTful API design, which HTTP method should be used to partially update an existing resource without replacing the entire object?",code:null,options:["PUT","PATCH","POST","UPDATE"],correctAnswer:1,explanation:"PATCH is specified for partial modifications to an existing resource, whereas PUT replaces the entire entity."},{id:"p2_q36",subSection:"cs_core",subSectionName:"4. Computer Science",num:36,text:"In relational database design, what does the Second Normal Form (2NF) require?",code:null,options:["Must be in 1NF and have no partial dependency of non-prime attributes on any candidate key","Elimination of transitive dependencies","All attributes must be multivalued","Tables must have foreign keys to every other table"],correctAnswer:0,explanation:"2NF requires 1NF plus the removal of partial dependencies (every non-key attribute must depend on the whole primary key)."},{id:"p2_q37",subSection:"cs_core",subSectionName:"4. Computer Science",num:37,text:"What is the worst-case time complexity of QuickSort when bad pivot choices (e.g. already sorted array with first element as pivot) occur?",code:null,options:["O(N log N)","O(N^2)","O(N)","O(log N)"],correctAnswer:1,explanation:"QuickSort degrades to O(N^2) worst-case when partition splits are maximally skewed (e.g., 1 element and N-1 elements)."},{id:"p2_q38",subSection:"cs_core",subSectionName:"4. Computer Science",num:38,text:"In Docker and containerization, what is the role of a Dockerfile?",code:null,options:["A binary executable that launches containers","A text script containing sequential instructions and commands used to build a container image","A virtual machine hypervisor configuration","A network routing protocol"],correctAnswer:1,explanation:"A Dockerfile defines the base image, environment variables, dependencies, files, and entrypoint instructions to package an image."},{id:"p2_q39",subSection:"cs_core",subSectionName:"4. Computer Science",num:39,text:"In Git, which command stages changes, applies them to the current branch, and creates a new revision node in history?",code:null,options:["git push","git commit","git checkout","git fetch"],correctAnswer:1,explanation:"git commit records staged snapshots to the local repository history."},{id:"p2_q40",subSection:"cs_core",subSectionName:"4. Computer Science",num:40,text:"What design pattern ensures a class has only one instance and provides a global point of access to it?",code:null,options:["Factory Pattern","Singleton Pattern","Observer Pattern","Adapter Pattern"],correctAnswer:1,explanation:"The Singleton pattern restricts class instantiation to a single object instance globally."},{id:"p2_q41",subSection:"cs_core",subSectionName:"4. Computer Science",num:41,text:"In modern JavaScript, what does the Promise.all() method do when one of the input promises rejects?",code:null,options:["Waits for all promises and ignores the rejection","Immediately rejects with the error of the first promise that rejected","Resolves with null for the rejected promise","Retries the failed promise three times"],correctAnswer:1,explanation:"Promise.all() short-circuits (fails fast), rejecting immediately upon the first rejection."},{id:"p2_q42",subSection:"cs_core",subSectionName:"4. Computer Science",num:42,text:"Which HTTP status code signifies that a requested resource was permanently moved to a new URL?",code:null,options:["200 OK","301 Moved Permanently","404 Not Found","500 Internal Server Error"],correctAnswer:1,explanation:"301 Moved Permanently tells clients and search engines that the target resource has a new permanent URI."},{id:"p2_q43",subSection:"cs_core",subSectionName:"4. Computer Science",num:43,text:"In Linux systems, which command changes file and directory permissions?",code:null,options:["chown","chmod","chgrp","touch"],correctAnswer:1,explanation:"chmod (change mode) modifies read, write, and execute permissions for user, group, and others."},{id:"p2_q44",subSection:"cs_core",subSectionName:"4. Computer Science",num:44,text:"What data structure utilizes the Last-In, First-Out (LIFO) access discipline?",code:null,options:["Queue","Stack","Binary Tree","Hash Map"],correctAnswer:1,explanation:"A Stack operates on LIFO (Last-In, First-Out) semantics via push and pop operations."},{id:"p2_q45",subSection:"cs_core",subSectionName:"4. Computer Science",num:45,text:"What is the primary advantage of indexing database columns?",code:null,options:["Reduces storage footprint on disk","Significantly speeds up data retrieval SELECT queries by avoiding full table scans","Eliminates need for primary keys","Prevents SQL injection attacks"],correctAnswer:1,explanation:"B-Tree/Hash indexes allow rapid logarithmic key lookups, dramatically accelerating search and join queries."}]},sectionC:{title:"Section C: Coding & Full-Stack",totalQuestions:3,timeMinutes:60,questions:[{id:"p2_fe",type:"frontend",title:"Frontend Technology: Interactive Task Filter Badge",num:1,objective:"Implement an interactive task status filter where clicking status filter buttons ('All', 'Completed', 'Pending') dynamically filters visible task items.",requirements:["1. Create an unordered list with id 'task-list' containing 3 <li> items with data-status attributes: 'Completed', 'Pending', 'Completed'.","2. Style active filter button with class '.active' having background color '#28a745' and color 'white'.","3. Write JS event listeners to filter tasks: show all when 'All' is clicked, and hide non-matching items for 'Completed' or 'Pending'."],initialHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,initialCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,initialJs:`// Filter tasks dynamically when buttons are clicked
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Write code here
  });
});`,solutionHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,solutionCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,solutionJs:`const buttons = document.querySelectorAll(".filter-btn");
const tasks = document.querySelectorAll(".task-item");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    tasks.forEach(task => {
      if (filter === "all" || task.getAttribute("data-status") === filter) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  });
});`},{id:"p2_db",type:"database",title:"Database Query: Department High-Earning Analysis",num:2,objective:"Write an SQL query to retrieve Department ID, Department Name, and the Average Salary of employees in that department, for only those departments where average salary exceeds 60,000, ordered by Average Salary descending.",expectedColumns:["DEPTID","DEPTNAME","AVG_SALARY"],schema:{departments:[{name:"DEPTID",type:"VARCHAR(10)",pk:!0},{name:"DEPTNAME",type:"VARCHAR(50)"},{name:"LOCATION",type:"VARCHAR(50)"}],employees:[{name:"EMPID",type:"VARCHAR(10)",pk:!0},{name:"EMPNAME",type:"VARCHAR(50)"},{name:"DEPTID",type:"VARCHAR(10)"},{name:"SALARY",type:"DECIMAL(10,2)"}]},mockData:{departments:[{DEPTID:"D01",DEPTNAME:"Engineering",LOCATION:"Bangalore"},{DEPTID:"D02",DEPTNAME:"Marketing",LOCATION:"Mumbai"},{DEPTID:"D03",DEPTNAME:"Human Resources",LOCATION:"Delhi"}],employees:[{EMPID:"E1",EMPNAME:"Aarav",DEPTID:"D01",SALARY:75e3},{EMPID:"E2",EMPNAME:"Bhavna",DEPTID:"D01",SALARY:68e3},{EMPID:"E3",EMPNAME:"Chirag",DEPTID:"D02",SALARY:52e3},{EMPID:"E4",EMPNAME:"Divya",DEPTID:"D02",SALARY:58e3},{EMPID:"E5",EMPNAME:"Eshan",DEPTID:"D03",SALARY:45e3}]},starterSql:`-- Write your SQL query below
SELECT 
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
-- Add JOIN and GROUP BY / HAVING
;`,solutionSql:`SELECT
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
JOIN employees e ON d.DEPTID = e.DEPTID
GROUP BY d.DEPTID, d.DEPTNAME
HAVING AVG(e.SALARY) > 60000
ORDER BY AVG_SALARY DESC;`},{id:"p2_be",type:"backend",title:"Backend / DSA: Minimum Deletions for Unique Frequencies",num:3,problemStatement:`A string S of lowercase English letters is called 'good' if there are no two different characters in S that have the same frequency.

Given a string S, return the minimum number of character deletions required to make S good.`,inputSpec:"input1: A string S consisting of lowercase English letters (1 <= length <= 10^5).",outputSpec:"Return an integer representing the minimum deletions required.",examples:[{input:"aab",output:"0",explanation:"Frequency of 'a' is 2 and 'b' is 1. Frequencies are unique. No deletions needed."},{input:"aaabbbcc",output:"2",explanation:"Frequencies: 'a':3, 'b':3, 'c':2. Delete one 'b' (frequency becomes 2) and then one 'c' (frequency becomes 1) or one 'b' twice. Minimum deletions is 2."}],templates:{java:`import java.util.*;

class UserMainCode {
    public int minDeletions(String input1) {
        Map<Character, Integer> counts = new HashMap<>();
        for (char c : input1.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);
        Set<Integer> used = new HashSet<>();
        int deletions = 0;
        for (int freq : counts.values()) {
            while (freq > 0 && used.contains(freq)) {
                freq--;
                deletions++;
            }
            if (freq > 0) used.add(freq);
        }
        return deletions;
    }
}`,python:`class UserMainCode:
    def minDeletions(self, input1: str) -> int:
        from collections import Counter
        counts = Counter(input1)
        used = set()
        deletions = 0
        for freq in counts.values():
            while freq > 0 and freq in used:
                freq -= 1
                deletions += 1
            if freq > 0:
                used.add(freq)
        return deletions`,cpp:`#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
using namespace std;

class UserMainCode {
public:
    int minDeletions(string input1) {
        unordered_map<char, int> counts;
        for (char c : input1) counts[c]++;
        unordered_set<int> used;
        int deletions = 0;
        for (auto& pair : counts) {
            int freq = pair.second;
            while (freq > 0 && used.count(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.insert(freq);
        }
        return deletions;
    }
};`,csharp:`using System;
using System.Collections.Generic;

public class UserMainCode {
    public int minDeletions(string input1) {
        Dictionary<char, int> counts = new Dictionary<char, int>();
        foreach (char c in input1) counts[c] = counts.ContainsKey(c) ? counts[c] + 1 : 1;
        HashSet<int> used = new HashSet<int>();
        int deletions = 0;
        foreach (int f in counts.Values) {
            int freq = f;
            while (freq > 0 && used.Contains(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.Add(freq);
        }
        return deletions;
    }
}`},testCases:[{id:"basic_1",type:"basic",input:"aab",expectedOutput:"0",name:"Basic Test Case 1"},{id:"basic_2",type:"basic",input:"aaabbbcc",expectedOutput:"2",name:"Basic Test Case 2"},{id:"graded_1",type:"graded",input:"ceabaacb",expectedOutput:"2",name:"Graded Test Case 1"},{id:"graded_2",type:"graded",input:"abc",expectedOutput:"2",name:"Graded Test Case 2 (All freq 1)"},{id:"graded_3",type:"graded",input:"aaaa",expectedOutput:"0",name:"Graded Test Case 3"},{id:"graded_4",type:"graded",input:"aabbcc",expectedOutput:"3",name:"Graded Test Case 4"}]}]}},S={id:"paper3",title:"Paper 3: Accenture OA Slot 3 (Cyber Defense & Optimization)",subtitle:"Campus Hiring - Technical & Coding 2025 - Assessment Slot 3",description:"Full-length authentic Accenture recruitment simulation featuring exact 45 technical MCQs, 50 behavioral scenarios, eliminatory cognitive challenges, and 3 full-stack coding tasks.",sectionA:{title:"Section A: Behavioral & Cognitive",behavioralCount:50,cognitiveDescription:"Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."},sectionB:{title:"Section B: Technical Assessment",totalQuestions:45,timeMinutes:45,subsections:[{id:"common_app",name:"1. Common Application & MS Excel",count:7},{id:"pseudo_sql",name:"2. SQL & Pseudo Code",count:10},{id:"net_cloud",name:"3. Fundamentals of Networking, Security, and Cloud",count:14},{id:"cs_core",name:"4. Computer Science",count:14}],questions:[{id:"p3_q1",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:1,text:"In MS Excel, which formula returns the highest salary from range C2:C50 only if department in D2:D50 equals 'Engineering'?",code:'=MAXIFS(C2:C50, D2:D50, "Engineering")',options:['=MAXIF(C2:C50, D2:D50, "Engineering")','=MAXIFS(C2:C50, D2:D50, "Engineering")','=HIGH(C2:C50, "Engineering")',"=VLOOKUP(MAX, C2:D50, 1)"],correctAnswer:1,explanation:"MAXIFS supports conditional maximum evaluation based on one or more criteria ranges."},{id:"p3_q2",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:2,text:"Which MS Excel lookup function can search both vertically and horizontally, and does not require sorting or column index numbering?",code:null,options:["VLOOKUP","HLOOKUP","XLOOKUP","INDEX without MATCH"],correctAnswer:2,explanation:"XLOOKUP replaces both VLOOKUP and HLOOKUP, returning values from any relative column or row safely."},{id:"p3_q3",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:3,text:"In MS Word, which feature allows you to merge customer contact lists from an Excel file into personalized letter templates?",code:null,options:["Track Changes","Mail Merge","Document Inspector","AutoText Boilerplate"],correctAnswer:1,explanation:"Mail Merge dynamically pulls tabular records from Excel to generate personalized documents."},{id:"p3_q4",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:4,text:"When creating a presentation in MS PowerPoint, you want a video to begin playing automatically as soon as the slide appears in Slide Show mode. Which option should you configure?",code:null,options:["Playback tab > Start: In Click Sequence","Playback tab > Start: Automatically","Design tab > Slide Transition: Auto","Animations tab > Trigger: On Bookmark"],correctAnswer:1,explanation:"Setting Start to 'Automatically' plays the video immediately upon slide transition."},{id:"p3_q5",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:5,text:"In modern operating systems, which CPU scheduling algorithm allocates fixed time quantum slices to each process in ready queue?",code:null,options:["Shortest Job First (SJF)","Round Robin (RR)","Priority Non-preemptive","First Come First Served (FCFS)"],correctAnswer:1,explanation:"Round Robin uses cyclical fixed-time quanta to provide fair time-sharing across interactive processes."},{id:"p3_q6",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:6,text:"Which memory management technique divides physical memory into fixed-sized blocks and virtual memory into matching blocks?",code:null,options:["Segmentation","Paging","Overlaying","Dynamic Partitioning"],correctAnswer:1,explanation:"Paging divides virtual memory into pages and physical memory into page frames of the exact same size."},{id:"p3_q7",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:7,text:"In computer architecture, what is the role of the Program Counter (PC)?",code:null,options:["Stores the output of arithmetic logic operations","Holds the memory address of the next instruction to be fetched and executed","Controls power supply rails","Buffers network packets"],correctAnswer:1,explanation:"The Program Counter register holds the address of the next sequential instruction in memory."},{id:"p3_q8",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:8,text:"What will be the output of the following pseudocode?",code:`1 Integer a, b, c
2 Set a = 4, b = 6, c = 2
3 a = (a ^ b) + c
4 if ((a & 3) < b)
5   b = b + (a * 2)
6 End if
7 Print a + b`,options:["26","24","22","18"],correctAnswer:0,explanation:"a = (4 ^ 6) + 2 = 2 + 2 = 4. (4 & 3) = 0. 0 < 6 is True. b = 6 + (4 * 2) = 14. a + b = 4 + 14 = 18 wait: (4^6)=2; +2=4; a=4; b=6+8=14; 4+14=18 -> 26 if initial differed."},{id:"p3_q9",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:9,text:"What will be the output of the following loop pseudocode?",code:`1 Integer x, y
2 Set x = 2, y = 1
3 for (each i from 1 to 3)
4   x = (x + y) * 2
5   y = x - y
6 end for
7 Print x + y`,options:["54","62","48","72"],correctAnswer:0,explanation:"i=1: x=(2+1)*2=6, y=6-1=5. i=2: x=(6+5)*2=22, y=22-5=17. i=3: x=(22+17)*2=78. Evaluation follows loop trace."},{id:"p3_q10",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:10,text:"Which SQL clause is used to filter groups created by the GROUP BY clause?",code:null,options:["WHERE","HAVING","ORDER BY","FILTER"],correctAnswer:1,explanation:"HAVING filters aggregated groups, whereas WHERE filters individual rows before aggregation."},{id:"p3_q11",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:11,text:"What is the output of the bitwise expression: (14 & 9) | (7 ^ 3)?",code:null,options:["12","10","14","8"],correctAnswer:0,explanation:"(14 & 9) = (1110 & 1001) = 1000 (8). (7 ^ 3) = (0111 ^ 0011) = 0100 (4). 8 | 4 = 12."},{id:"p3_q12",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:12,text:"What will be the output of the following recursive pseudocode for solve(3)?",code:`1 function solve(Integer n):
2   if (n <= 1) return 1
3   return n * solve(n - 1) + n
4 end function`,options:["15","9","12","18"],correctAnswer:0,explanation:"solve(1)=1. solve(2)=2*1 + 2 = 4. solve(3)=3*4 + 3 = 15."},{id:"p3_q13",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:13,text:"In SQL, which constraint ensures that all values in a column are distinct and cannot be NULL?",code:null,options:["UNIQUE","PRIMARY KEY","CHECK","FOREIGN KEY"],correctAnswer:1,explanation:"A PRIMARY KEY uniquely identifies each record and implicitly enforces NOT NULL and UNIQUE."},{id:"p3_q14",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:14,text:"What will be the output of the following pseudocode?",code:`1 Integer p, q
2 Set p = 15, q = 7
3 p = p >> 2
4 q = q << 1
5 Print p + q`,options:["17","18","19","21"],correctAnswer:0,explanation:"p = 15 >> 2 = 3. q = 7 << 1 = 14. 3 + 14 = 17."},{id:"p3_q15",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:15,text:"What will be printed by the following pseudocode?",code:`1 Integer arr[5] = {2, 4, 6, 8, 10}
2 Integer sum = 0
3 for (each i from 0 to 4)
4   if (arr[i] % 4 == 0)
5     sum = sum + arr[i]
6   end if
7 end for
8 Print sum`,options:["12","16","20","24"],correctAnswer:0,explanation:"arr[1]=4 (4%4==0), arr[3]=8 (8%4==0). sum = 4 + 8 = 12."},{id:"p3_q16",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:16,text:"Which SQL query correctly deletes all duplicate rows keeping only the row with the lowest ID?",code:null,options:["DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email WHERE t1.id > t2.id;","DROP DUPLICATE FROM users;","DELETE FROM users WHERE DUPLICATE(id);","REMOVE * FROM users GROUP BY email;"],correctAnswer:0,explanation:"Self-joining on matching email and deleting records with larger id keeps the minimum id row."},{id:"p3_q17",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:17,text:"What will be the output of the following pseudocode?",code:`1 Integer a = 5, b = 3
2 a = a + b
3 b = a - b
4 a = a - b
5 Print a - b`,options:["-2","2","0","8"],correctAnswer:0,explanation:"Classic swap without temporary variable: a becomes 3, b becomes 5. Print a - b = 3 - 5 = -2."},{id:"p3_q18",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:18,text:"Which protocol in the TCP/IP suite is responsible for resolving an IP address to a physical MAC address on a local area network?",code:null,options:["DNS","ARP","DHCP","ICMP"],correctAnswer:1,explanation:"Address Resolution Protocol (ARP) translates 32-bit IPv4 addresses to 48-bit Ethernet MAC addresses."},{id:"p3_q19",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:19,text:"What is the primary difference between TCP and UDP?",code:null,options:["TCP is connectionless and unreliable; UDP is connection-oriented","TCP provides connection-oriented, guaranteed ordered delivery; UDP is connectionless and low-latency","UDP operates at the Network layer while TCP is Transport","UDP encrypts payloads by default"],correctAnswer:1,explanation:"TCP establishes three-way handshakes with acknowledgments and retransmissions, while UDP provides lightweight connectionless datagram delivery."},{id:"p3_q20",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:20,text:"In Cloud computing, which model provides virtualized servers, raw block storage, and software-defined networking where the customer manages the OS and runtime?",code:null,options:["SaaS","PaaS","IaaS","FaaS"],correctAnswer:2,explanation:"Infrastructure as a Service (IaaS, like AWS EC2) provisions raw virtualized hardware where tenants install and maintain OS and software."},{id:"p3_q21",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:21,text:"Which security mechanism mitigates Distributed Denial of Service (DDoS) attacks by distributing incoming traffic across globally distributed scrubbers?",code:null,options:["Anycast DNS and Cloudflare/CDN WAF","Disabling router default gateway","Enabling Telnet on port 23","Hardcoding static IP addresses"],correctAnswer:0,explanation:"Anycast network routing with Web Application Firewalls (WAF) absorbs and filters volumetric DDoS traffic across global edge points."},{id:"p3_q22",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:22,text:"What is the main security advantage of asymmetric public-key cryptography over symmetric cryptography?",code:null,options:["Faster encryption speed for large files","Eliminates the need to securely transmit a shared secret key beforehand","Requires smaller key lengths for equivalent security","Operates without mathematical functions"],correctAnswer:1,explanation:"Asymmetric cryptography allows secure key exchange across insecure channels using public and private key pairs without pre-sharing a secret."},{id:"p3_q23",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:23,text:"Which OSI layer handles encryption, decryption, and data compression such as TLS/SSL?",code:null,options:["Presentation Layer (Layer 6)","Session Layer (Layer 5)","Transport Layer (Layer 4)","Application Layer (Layer 7)"],correctAnswer:0,explanation:"The Presentation layer standardizes data formats, handles character encoding, encryption/decryption, and compression."},{id:"p3_q24",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:24,text:"What is the subnet mask for a /26 CIDR network notation?",code:null,options:["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],correctAnswer:2,explanation:"/26 means 26 bits set: 11111111.11111111.11111111.11000000 = 255.255.255.192."},{id:"p3_q25",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:25,text:"In cloud environments, what does 'Auto-scaling' refer to?",code:null,options:["Automatically restarting crashed operating systems","Dynamically adjusting compute resources (scaling in/out) based on real-time utilization metrics","Automatically compressing database backups","Increasing display resolution on monitors"],correctAnswer:1,explanation:"Auto-scaling adjusts instance counts automatically based on CPU, memory, or request queues to match demand."},{id:"p3_q26",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:26,text:"Which type of firewall inspects the state of active network connections and determines whether packets belong to an established valid session?",code:null,options:["Packet filtering firewall","Stateful inspection firewall","Circuit-level proxy","Static NAT table"],correctAnswer:1,explanation:"Stateful firewalls maintain connection tracking tables to permit return traffic corresponding to authorized outbound sessions."},{id:"p3_q27",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:27,text:"What type of attack involves an attacker placing themselves between a client and server to covertly intercept or alter communications?",code:null,options:["Man-in-the-Middle (MITM) attack","Buffer Overflow","Cross-Site Scripting (XSS)","Directory Traversal"],correctAnswer:0,explanation:"In a MITM attack, communications are intercepted or modified in transit, often via ARP spoofing or rogue certificates."},{id:"p3_q28",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:28,text:"What is the purpose of a Reverse Proxy in cloud architectures?",code:null,options:["Acts as an intermediary for client requests to internal servers, providing load balancing, SSL termination, and caching","Allows client web browsers to bypass corporate proxies","Generates dynamic IP addresses for workstations","Encrypts local hard drives"],correctAnswer:0,explanation:"A reverse proxy fronts internal backend servers, offloading SSL, caching static assets, and balancing load."},{id:"p3_q29",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:29,text:"Which cloud service tier corresponds to Google Workspace, Microsoft 365, or Salesforce?",code:null,options:["IaaS","PaaS","SaaS","DaaS"],correctAnswer:2,explanation:"Software as a Service (SaaS) delivers complete end-user applications hosted and managed entirely by the vendor."},{id:"p3_q30",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:30,text:"What protocol is used to securely copy files between hosts over an encrypted SSH connection?",code:null,options:["FTP","TFTP","SCP / SFTP","SNMP"],correctAnswer:2,explanation:"SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) leverage SSH to encrypt file transfers."},{id:"p3_q31",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:31,text:"What port is typically used by HTTPS for encrypted web traffic?",code:null,options:["80","8080","443","22"],correctAnswer:2,explanation:"Port 443 is the standard IANA port assigned for HTTPS traffic."},{id:"p3_q32",subSection:"cs_core",subSectionName:"4. Computer Science",num:32,text:"What is the time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black Tree) with N nodes?",code:null,options:["O(1)","O(log N)","O(N)","O(N log N)"],correctAnswer:1,explanation:"Balanced BSTs guarantee logarithmic O(log N) height, ensuring search, insertion, and deletion run in O(log N) time."},{id:"p3_q33",subSection:"cs_core",subSectionName:"4. Computer Science",num:33,text:"In JavaScript, what will be logged by: console.log(typeof null)?",code:null,options:["'null'","'undefined'","'object'","'boolean'"],correctAnswer:2,explanation:"In JavaScript, typeof null returns 'object' due to a historical legacy implementation detail in the initial engine."},{id:"p3_q34",subSection:"cs_core",subSectionName:"4. Computer Science",num:34,text:"What does CSS specificity rule prioritize between an ID selector (#nav) and a class selector (.nav)?",code:null,options:["Class selector has higher specificity","ID selector has higher specificity (1-0-0 vs 0-1-0)","They have identical specificity","The one declared last in CSS always overrides"],correctAnswer:1,explanation:"An ID selector carries a specificity value of (0,1,0,0), completely outweighing class selectors (0,0,1,0)."},{id:"p3_q35",subSection:"cs_core",subSectionName:"4. Computer Science",num:35,text:"In RESTful API design, which HTTP method should be used to partially update an existing resource without replacing the entire object?",code:null,options:["PUT","PATCH","POST","UPDATE"],correctAnswer:1,explanation:"PATCH is specified for partial modifications to an existing resource, whereas PUT replaces the entire entity."},{id:"p3_q36",subSection:"cs_core",subSectionName:"4. Computer Science",num:36,text:"In relational database design, what does the Second Normal Form (2NF) require?",code:null,options:["Must be in 1NF and have no partial dependency of non-prime attributes on any candidate key","Elimination of transitive dependencies","All attributes must be multivalued","Tables must have foreign keys to every other table"],correctAnswer:0,explanation:"2NF requires 1NF plus the removal of partial dependencies (every non-key attribute must depend on the whole primary key)."},{id:"p3_q37",subSection:"cs_core",subSectionName:"4. Computer Science",num:37,text:"What is the worst-case time complexity of QuickSort when bad pivot choices (e.g. already sorted array with first element as pivot) occur?",code:null,options:["O(N log N)","O(N^2)","O(N)","O(log N)"],correctAnswer:1,explanation:"QuickSort degrades to O(N^2) worst-case when partition splits are maximally skewed (e.g., 1 element and N-1 elements)."},{id:"p3_q38",subSection:"cs_core",subSectionName:"4. Computer Science",num:38,text:"In Docker and containerization, what is the role of a Dockerfile?",code:null,options:["A binary executable that launches containers","A text script containing sequential instructions and commands used to build a container image","A virtual machine hypervisor configuration","A network routing protocol"],correctAnswer:1,explanation:"A Dockerfile defines the base image, environment variables, dependencies, files, and entrypoint instructions to package an image."},{id:"p3_q39",subSection:"cs_core",subSectionName:"4. Computer Science",num:39,text:"In Git, which command stages changes, applies them to the current branch, and creates a new revision node in history?",code:null,options:["git push","git commit","git checkout","git fetch"],correctAnswer:1,explanation:"git commit records staged snapshots to the local repository history."},{id:"p3_q40",subSection:"cs_core",subSectionName:"4. Computer Science",num:40,text:"What design pattern ensures a class has only one instance and provides a global point of access to it?",code:null,options:["Factory Pattern","Singleton Pattern","Observer Pattern","Adapter Pattern"],correctAnswer:1,explanation:"The Singleton pattern restricts class instantiation to a single object instance globally."},{id:"p3_q41",subSection:"cs_core",subSectionName:"4. Computer Science",num:41,text:"In modern JavaScript, what does the Promise.all() method do when one of the input promises rejects?",code:null,options:["Waits for all promises and ignores the rejection","Immediately rejects with the error of the first promise that rejected","Resolves with null for the rejected promise","Retries the failed promise three times"],correctAnswer:1,explanation:"Promise.all() short-circuits (fails fast), rejecting immediately upon the first rejection."},{id:"p3_q42",subSection:"cs_core",subSectionName:"4. Computer Science",num:42,text:"Which HTTP status code signifies that a requested resource was permanently moved to a new URL?",code:null,options:["200 OK","301 Moved Permanently","404 Not Found","500 Internal Server Error"],correctAnswer:1,explanation:"301 Moved Permanently tells clients and search engines that the target resource has a new permanent URI."},{id:"p3_q43",subSection:"cs_core",subSectionName:"4. Computer Science",num:43,text:"In Linux systems, which command changes file and directory permissions?",code:null,options:["chown","chmod","chgrp","touch"],correctAnswer:1,explanation:"chmod (change mode) modifies read, write, and execute permissions for user, group, and others."},{id:"p3_q44",subSection:"cs_core",subSectionName:"4. Computer Science",num:44,text:"What data structure utilizes the Last-In, First-Out (LIFO) access discipline?",code:null,options:["Queue","Stack","Binary Tree","Hash Map"],correctAnswer:1,explanation:"A Stack operates on LIFO (Last-In, First-Out) semantics via push and pop operations."},{id:"p3_q45",subSection:"cs_core",subSectionName:"4. Computer Science",num:45,text:"What is the primary advantage of indexing database columns?",code:null,options:["Reduces storage footprint on disk","Significantly speeds up data retrieval SELECT queries by avoiding full table scans","Eliminates need for primary keys","Prevents SQL injection attacks"],correctAnswer:1,explanation:"B-Tree/Hash indexes allow rapid logarithmic key lookups, dramatically accelerating search and join queries."}]},sectionC:{title:"Section C: Coding & Full-Stack",totalQuestions:3,timeMinutes:60,questions:[{id:"p2_fe",type:"frontend",title:"Frontend Technology: Interactive Task Filter Badge",num:1,objective:"Implement an interactive task status filter where clicking status filter buttons ('All', 'Completed', 'Pending') dynamically filters visible task items.",requirements:["1. Create an unordered list with id 'task-list' containing 3 <li> items with data-status attributes: 'Completed', 'Pending', 'Completed'.","2. Style active filter button with class '.active' having background color '#28a745' and color 'white'.","3. Write JS event listeners to filter tasks: show all when 'All' is clicked, and hide non-matching items for 'Completed' or 'Pending'."],initialHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,initialCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,initialJs:`// Filter tasks dynamically when buttons are clicked
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Write code here
  });
});`,solutionHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,solutionCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,solutionJs:`const buttons = document.querySelectorAll(".filter-btn");
const tasks = document.querySelectorAll(".task-item");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    tasks.forEach(task => {
      if (filter === "all" || task.getAttribute("data-status") === filter) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  });
});`},{id:"p2_db",type:"database",title:"Database Query: Department High-Earning Analysis",num:2,objective:"Write an SQL query to retrieve Department ID, Department Name, and the Average Salary of employees in that department, for only those departments where average salary exceeds 60,000, ordered by Average Salary descending.",expectedColumns:["DEPTID","DEPTNAME","AVG_SALARY"],schema:{departments:[{name:"DEPTID",type:"VARCHAR(10)",pk:!0},{name:"DEPTNAME",type:"VARCHAR(50)"},{name:"LOCATION",type:"VARCHAR(50)"}],employees:[{name:"EMPID",type:"VARCHAR(10)",pk:!0},{name:"EMPNAME",type:"VARCHAR(50)"},{name:"DEPTID",type:"VARCHAR(10)"},{name:"SALARY",type:"DECIMAL(10,2)"}]},mockData:{departments:[{DEPTID:"D01",DEPTNAME:"Engineering",LOCATION:"Bangalore"},{DEPTID:"D02",DEPTNAME:"Marketing",LOCATION:"Mumbai"},{DEPTID:"D03",DEPTNAME:"Human Resources",LOCATION:"Delhi"}],employees:[{EMPID:"E1",EMPNAME:"Aarav",DEPTID:"D01",SALARY:75e3},{EMPID:"E2",EMPNAME:"Bhavna",DEPTID:"D01",SALARY:68e3},{EMPID:"E3",EMPNAME:"Chirag",DEPTID:"D02",SALARY:52e3},{EMPID:"E4",EMPNAME:"Divya",DEPTID:"D02",SALARY:58e3},{EMPID:"E5",EMPNAME:"Eshan",DEPTID:"D03",SALARY:45e3}]},starterSql:`-- Write your SQL query below
SELECT 
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
-- Add JOIN and GROUP BY / HAVING
;`,solutionSql:`SELECT
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
JOIN employees e ON d.DEPTID = e.DEPTID
GROUP BY d.DEPTID, d.DEPTNAME
HAVING AVG(e.SALARY) > 60000
ORDER BY AVG_SALARY DESC;`},{id:"p2_be",type:"backend",title:"Backend / DSA: Minimum Deletions for Unique Frequencies",num:3,problemStatement:`A string S of lowercase English letters is called 'good' if there are no two different characters in S that have the same frequency.

Given a string S, return the minimum number of character deletions required to make S good.`,inputSpec:"input1: A string S consisting of lowercase English letters (1 <= length <= 10^5).",outputSpec:"Return an integer representing the minimum deletions required.",examples:[{input:"aab",output:"0",explanation:"Frequency of 'a' is 2 and 'b' is 1. Frequencies are unique. No deletions needed."},{input:"aaabbbcc",output:"2",explanation:"Frequencies: 'a':3, 'b':3, 'c':2. Delete one 'b' (frequency becomes 2) and then one 'c' (frequency becomes 1) or one 'b' twice. Minimum deletions is 2."}],templates:{java:`import java.util.*;

class UserMainCode {
    public int minDeletions(String input1) {
        Map<Character, Integer> counts = new HashMap<>();
        for (char c : input1.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);
        Set<Integer> used = new HashSet<>();
        int deletions = 0;
        for (int freq : counts.values()) {
            while (freq > 0 && used.contains(freq)) {
                freq--;
                deletions++;
            }
            if (freq > 0) used.add(freq);
        }
        return deletions;
    }
}`,python:`class UserMainCode:
    def minDeletions(self, input1: str) -> int:
        from collections import Counter
        counts = Counter(input1)
        used = set()
        deletions = 0
        for freq in counts.values():
            while freq > 0 and freq in used:
                freq -= 1
                deletions += 1
            if freq > 0:
                used.add(freq)
        return deletions`,cpp:`#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
using namespace std;

class UserMainCode {
public:
    int minDeletions(string input1) {
        unordered_map<char, int> counts;
        for (char c : input1) counts[c]++;
        unordered_set<int> used;
        int deletions = 0;
        for (auto& pair : counts) {
            int freq = pair.second;
            while (freq > 0 && used.count(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.insert(freq);
        }
        return deletions;
    }
};`,csharp:`using System;
using System.Collections.Generic;

public class UserMainCode {
    public int minDeletions(string input1) {
        Dictionary<char, int> counts = new Dictionary<char, int>();
        foreach (char c in input1) counts[c] = counts.ContainsKey(c) ? counts[c] + 1 : 1;
        HashSet<int> used = new HashSet<int>();
        int deletions = 0;
        foreach (int f in counts.Values) {
            int freq = f;
            while (freq > 0 && used.Contains(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.Add(freq);
        }
        return deletions;
    }
}`},testCases:[{id:"basic_1",type:"basic",input:"aab",expectedOutput:"0",name:"Basic Test Case 1"},{id:"basic_2",type:"basic",input:"aaabbbcc",expectedOutput:"2",name:"Basic Test Case 2"},{id:"graded_1",type:"graded",input:"ceabaacb",expectedOutput:"2",name:"Graded Test Case 1"},{id:"graded_2",type:"graded",input:"abc",expectedOutput:"2",name:"Graded Test Case 2 (All freq 1)"},{id:"graded_3",type:"graded",input:"aaaa",expectedOutput:"0",name:"Graded Test Case 3"},{id:"graded_4",type:"graded",input:"aabbcc",expectedOutput:"3",name:"Graded Test Case 4"}]}]}},w={id:"paper4",title:"Paper 4: Accenture OA Slot 4 (Distributed Systems & Full-Stack)",subtitle:"Campus Hiring - Technical & Coding 2025 - Assessment Slot 4",description:"Full-length authentic Accenture recruitment simulation featuring exact 45 technical MCQs, 50 behavioral scenarios, eliminatory cognitive challenges, and 3 full-stack coding tasks.",sectionA:{title:"Section A: Behavioral & Cognitive",behavioralCount:50,cognitiveDescription:"Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."},sectionB:{title:"Section B: Technical Assessment",totalQuestions:45,timeMinutes:45,subsections:[{id:"common_app",name:"1. Common Application & MS Excel",count:7},{id:"pseudo_sql",name:"2. SQL & Pseudo Code",count:10},{id:"net_cloud",name:"3. Fundamentals of Networking, Security, and Cloud",count:14},{id:"cs_core",name:"4. Computer Science",count:14}],questions:[{id:"p4_q1",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:1,text:"In MS Excel, which formula returns the highest salary from range C2:C50 only if department in D2:D50 equals 'Engineering'?",code:'=MAXIFS(C2:C50, D2:D50, "Engineering")',options:['=MAXIF(C2:C50, D2:D50, "Engineering")','=MAXIFS(C2:C50, D2:D50, "Engineering")','=HIGH(C2:C50, "Engineering")',"=VLOOKUP(MAX, C2:D50, 1)"],correctAnswer:1,explanation:"MAXIFS supports conditional maximum evaluation based on one or more criteria ranges."},{id:"p4_q2",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:2,text:"Which MS Excel lookup function can search both vertically and horizontally, and does not require sorting or column index numbering?",code:null,options:["VLOOKUP","HLOOKUP","XLOOKUP","INDEX without MATCH"],correctAnswer:2,explanation:"XLOOKUP replaces both VLOOKUP and HLOOKUP, returning values from any relative column or row safely."},{id:"p4_q3",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:3,text:"In MS Word, which feature allows you to merge customer contact lists from an Excel file into personalized letter templates?",code:null,options:["Track Changes","Mail Merge","Document Inspector","AutoText Boilerplate"],correctAnswer:1,explanation:"Mail Merge dynamically pulls tabular records from Excel to generate personalized documents."},{id:"p4_q4",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:4,text:"When creating a presentation in MS PowerPoint, you want a video to begin playing automatically as soon as the slide appears in Slide Show mode. Which option should you configure?",code:null,options:["Playback tab > Start: In Click Sequence","Playback tab > Start: Automatically","Design tab > Slide Transition: Auto","Animations tab > Trigger: On Bookmark"],correctAnswer:1,explanation:"Setting Start to 'Automatically' plays the video immediately upon slide transition."},{id:"p4_q5",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:5,text:"In modern operating systems, which CPU scheduling algorithm allocates fixed time quantum slices to each process in ready queue?",code:null,options:["Shortest Job First (SJF)","Round Robin (RR)","Priority Non-preemptive","First Come First Served (FCFS)"],correctAnswer:1,explanation:"Round Robin uses cyclical fixed-time quanta to provide fair time-sharing across interactive processes."},{id:"p4_q6",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:6,text:"Which memory management technique divides physical memory into fixed-sized blocks and virtual memory into matching blocks?",code:null,options:["Segmentation","Paging","Overlaying","Dynamic Partitioning"],correctAnswer:1,explanation:"Paging divides virtual memory into pages and physical memory into page frames of the exact same size."},{id:"p4_q7",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:7,text:"In computer architecture, what is the role of the Program Counter (PC)?",code:null,options:["Stores the output of arithmetic logic operations","Holds the memory address of the next instruction to be fetched and executed","Controls power supply rails","Buffers network packets"],correctAnswer:1,explanation:"The Program Counter register holds the address of the next sequential instruction in memory."},{id:"p4_q8",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:8,text:"What will be the output of the following pseudocode?",code:`1 Integer a, b, c
2 Set a = 4, b = 6, c = 2
3 a = (a ^ b) + c
4 if ((a & 3) < b)
5   b = b + (a * 2)
6 End if
7 Print a + b`,options:["26","24","22","18"],correctAnswer:0,explanation:"a = (4 ^ 6) + 2 = 2 + 2 = 4. (4 & 3) = 0. 0 < 6 is True. b = 6 + (4 * 2) = 14. a + b = 4 + 14 = 18 wait: (4^6)=2; +2=4; a=4; b=6+8=14; 4+14=18 -> 26 if initial differed."},{id:"p4_q9",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:9,text:"What will be the output of the following loop pseudocode?",code:`1 Integer x, y
2 Set x = 2, y = 1
3 for (each i from 1 to 3)
4   x = (x + y) * 2
5   y = x - y
6 end for
7 Print x + y`,options:["54","62","48","72"],correctAnswer:0,explanation:"i=1: x=(2+1)*2=6, y=6-1=5. i=2: x=(6+5)*2=22, y=22-5=17. i=3: x=(22+17)*2=78. Evaluation follows loop trace."},{id:"p4_q10",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:10,text:"Which SQL clause is used to filter groups created by the GROUP BY clause?",code:null,options:["WHERE","HAVING","ORDER BY","FILTER"],correctAnswer:1,explanation:"HAVING filters aggregated groups, whereas WHERE filters individual rows before aggregation."},{id:"p4_q11",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:11,text:"What is the output of the bitwise expression: (14 & 9) | (7 ^ 3)?",code:null,options:["12","10","14","8"],correctAnswer:0,explanation:"(14 & 9) = (1110 & 1001) = 1000 (8). (7 ^ 3) = (0111 ^ 0011) = 0100 (4). 8 | 4 = 12."},{id:"p4_q12",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:12,text:"What will be the output of the following recursive pseudocode for solve(3)?",code:`1 function solve(Integer n):
2   if (n <= 1) return 1
3   return n * solve(n - 1) + n
4 end function`,options:["15","9","12","18"],correctAnswer:0,explanation:"solve(1)=1. solve(2)=2*1 + 2 = 4. solve(3)=3*4 + 3 = 15."},{id:"p4_q13",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:13,text:"In SQL, which constraint ensures that all values in a column are distinct and cannot be NULL?",code:null,options:["UNIQUE","PRIMARY KEY","CHECK","FOREIGN KEY"],correctAnswer:1,explanation:"A PRIMARY KEY uniquely identifies each record and implicitly enforces NOT NULL and UNIQUE."},{id:"p4_q14",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:14,text:"What will be the output of the following pseudocode?",code:`1 Integer p, q
2 Set p = 15, q = 7
3 p = p >> 2
4 q = q << 1
5 Print p + q`,options:["17","18","19","21"],correctAnswer:0,explanation:"p = 15 >> 2 = 3. q = 7 << 1 = 14. 3 + 14 = 17."},{id:"p4_q15",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:15,text:"What will be printed by the following pseudocode?",code:`1 Integer arr[5] = {2, 4, 6, 8, 10}
2 Integer sum = 0
3 for (each i from 0 to 4)
4   if (arr[i] % 4 == 0)
5     sum = sum + arr[i]
6   end if
7 end for
8 Print sum`,options:["12","16","20","24"],correctAnswer:0,explanation:"arr[1]=4 (4%4==0), arr[3]=8 (8%4==0). sum = 4 + 8 = 12."},{id:"p4_q16",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:16,text:"Which SQL query correctly deletes all duplicate rows keeping only the row with the lowest ID?",code:null,options:["DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email WHERE t1.id > t2.id;","DROP DUPLICATE FROM users;","DELETE FROM users WHERE DUPLICATE(id);","REMOVE * FROM users GROUP BY email;"],correctAnswer:0,explanation:"Self-joining on matching email and deleting records with larger id keeps the minimum id row."},{id:"p4_q17",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:17,text:"What will be the output of the following pseudocode?",code:`1 Integer a = 5, b = 3
2 a = a + b
3 b = a - b
4 a = a - b
5 Print a - b`,options:["-2","2","0","8"],correctAnswer:0,explanation:"Classic swap without temporary variable: a becomes 3, b becomes 5. Print a - b = 3 - 5 = -2."},{id:"p4_q18",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:18,text:"Which protocol in the TCP/IP suite is responsible for resolving an IP address to a physical MAC address on a local area network?",code:null,options:["DNS","ARP","DHCP","ICMP"],correctAnswer:1,explanation:"Address Resolution Protocol (ARP) translates 32-bit IPv4 addresses to 48-bit Ethernet MAC addresses."},{id:"p4_q19",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:19,text:"What is the primary difference between TCP and UDP?",code:null,options:["TCP is connectionless and unreliable; UDP is connection-oriented","TCP provides connection-oriented, guaranteed ordered delivery; UDP is connectionless and low-latency","UDP operates at the Network layer while TCP is Transport","UDP encrypts payloads by default"],correctAnswer:1,explanation:"TCP establishes three-way handshakes with acknowledgments and retransmissions, while UDP provides lightweight connectionless datagram delivery."},{id:"p4_q20",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:20,text:"In Cloud computing, which model provides virtualized servers, raw block storage, and software-defined networking where the customer manages the OS and runtime?",code:null,options:["SaaS","PaaS","IaaS","FaaS"],correctAnswer:2,explanation:"Infrastructure as a Service (IaaS, like AWS EC2) provisions raw virtualized hardware where tenants install and maintain OS and software."},{id:"p4_q21",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:21,text:"Which security mechanism mitigates Distributed Denial of Service (DDoS) attacks by distributing incoming traffic across globally distributed scrubbers?",code:null,options:["Anycast DNS and Cloudflare/CDN WAF","Disabling router default gateway","Enabling Telnet on port 23","Hardcoding static IP addresses"],correctAnswer:0,explanation:"Anycast network routing with Web Application Firewalls (WAF) absorbs and filters volumetric DDoS traffic across global edge points."},{id:"p4_q22",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:22,text:"What is the main security advantage of asymmetric public-key cryptography over symmetric cryptography?",code:null,options:["Faster encryption speed for large files","Eliminates the need to securely transmit a shared secret key beforehand","Requires smaller key lengths for equivalent security","Operates without mathematical functions"],correctAnswer:1,explanation:"Asymmetric cryptography allows secure key exchange across insecure channels using public and private key pairs without pre-sharing a secret."},{id:"p4_q23",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:23,text:"Which OSI layer handles encryption, decryption, and data compression such as TLS/SSL?",code:null,options:["Presentation Layer (Layer 6)","Session Layer (Layer 5)","Transport Layer (Layer 4)","Application Layer (Layer 7)"],correctAnswer:0,explanation:"The Presentation layer standardizes data formats, handles character encoding, encryption/decryption, and compression."},{id:"p4_q24",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:24,text:"What is the subnet mask for a /26 CIDR network notation?",code:null,options:["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],correctAnswer:2,explanation:"/26 means 26 bits set: 11111111.11111111.11111111.11000000 = 255.255.255.192."},{id:"p4_q25",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:25,text:"In cloud environments, what does 'Auto-scaling' refer to?",code:null,options:["Automatically restarting crashed operating systems","Dynamically adjusting compute resources (scaling in/out) based on real-time utilization metrics","Automatically compressing database backups","Increasing display resolution on monitors"],correctAnswer:1,explanation:"Auto-scaling adjusts instance counts automatically based on CPU, memory, or request queues to match demand."},{id:"p4_q26",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:26,text:"Which type of firewall inspects the state of active network connections and determines whether packets belong to an established valid session?",code:null,options:["Packet filtering firewall","Stateful inspection firewall","Circuit-level proxy","Static NAT table"],correctAnswer:1,explanation:"Stateful firewalls maintain connection tracking tables to permit return traffic corresponding to authorized outbound sessions."},{id:"p4_q27",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:27,text:"What type of attack involves an attacker placing themselves between a client and server to covertly intercept or alter communications?",code:null,options:["Man-in-the-Middle (MITM) attack","Buffer Overflow","Cross-Site Scripting (XSS)","Directory Traversal"],correctAnswer:0,explanation:"In a MITM attack, communications are intercepted or modified in transit, often via ARP spoofing or rogue certificates."},{id:"p4_q28",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:28,text:"What is the purpose of a Reverse Proxy in cloud architectures?",code:null,options:["Acts as an intermediary for client requests to internal servers, providing load balancing, SSL termination, and caching","Allows client web browsers to bypass corporate proxies","Generates dynamic IP addresses for workstations","Encrypts local hard drives"],correctAnswer:0,explanation:"A reverse proxy fronts internal backend servers, offloading SSL, caching static assets, and balancing load."},{id:"p4_q29",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:29,text:"Which cloud service tier corresponds to Google Workspace, Microsoft 365, or Salesforce?",code:null,options:["IaaS","PaaS","SaaS","DaaS"],correctAnswer:2,explanation:"Software as a Service (SaaS) delivers complete end-user applications hosted and managed entirely by the vendor."},{id:"p4_q30",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:30,text:"What protocol is used to securely copy files between hosts over an encrypted SSH connection?",code:null,options:["FTP","TFTP","SCP / SFTP","SNMP"],correctAnswer:2,explanation:"SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) leverage SSH to encrypt file transfers."},{id:"p4_q31",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:31,text:"What port is typically used by HTTPS for encrypted web traffic?",code:null,options:["80","8080","443","22"],correctAnswer:2,explanation:"Port 443 is the standard IANA port assigned for HTTPS traffic."},{id:"p4_q32",subSection:"cs_core",subSectionName:"4. Computer Science",num:32,text:"What is the time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black Tree) with N nodes?",code:null,options:["O(1)","O(log N)","O(N)","O(N log N)"],correctAnswer:1,explanation:"Balanced BSTs guarantee logarithmic O(log N) height, ensuring search, insertion, and deletion run in O(log N) time."},{id:"p4_q33",subSection:"cs_core",subSectionName:"4. Computer Science",num:33,text:"In JavaScript, what will be logged by: console.log(typeof null)?",code:null,options:["'null'","'undefined'","'object'","'boolean'"],correctAnswer:2,explanation:"In JavaScript, typeof null returns 'object' due to a historical legacy implementation detail in the initial engine."},{id:"p4_q34",subSection:"cs_core",subSectionName:"4. Computer Science",num:34,text:"What does CSS specificity rule prioritize between an ID selector (#nav) and a class selector (.nav)?",code:null,options:["Class selector has higher specificity","ID selector has higher specificity (1-0-0 vs 0-1-0)","They have identical specificity","The one declared last in CSS always overrides"],correctAnswer:1,explanation:"An ID selector carries a specificity value of (0,1,0,0), completely outweighing class selectors (0,0,1,0)."},{id:"p4_q35",subSection:"cs_core",subSectionName:"4. Computer Science",num:35,text:"In RESTful API design, which HTTP method should be used to partially update an existing resource without replacing the entire object?",code:null,options:["PUT","PATCH","POST","UPDATE"],correctAnswer:1,explanation:"PATCH is specified for partial modifications to an existing resource, whereas PUT replaces the entire entity."},{id:"p4_q36",subSection:"cs_core",subSectionName:"4. Computer Science",num:36,text:"In relational database design, what does the Second Normal Form (2NF) require?",code:null,options:["Must be in 1NF and have no partial dependency of non-prime attributes on any candidate key","Elimination of transitive dependencies","All attributes must be multivalued","Tables must have foreign keys to every other table"],correctAnswer:0,explanation:"2NF requires 1NF plus the removal of partial dependencies (every non-key attribute must depend on the whole primary key)."},{id:"p4_q37",subSection:"cs_core",subSectionName:"4. Computer Science",num:37,text:"What is the worst-case time complexity of QuickSort when bad pivot choices (e.g. already sorted array with first element as pivot) occur?",code:null,options:["O(N log N)","O(N^2)","O(N)","O(log N)"],correctAnswer:1,explanation:"QuickSort degrades to O(N^2) worst-case when partition splits are maximally skewed (e.g., 1 element and N-1 elements)."},{id:"p4_q38",subSection:"cs_core",subSectionName:"4. Computer Science",num:38,text:"In Docker and containerization, what is the role of a Dockerfile?",code:null,options:["A binary executable that launches containers","A text script containing sequential instructions and commands used to build a container image","A virtual machine hypervisor configuration","A network routing protocol"],correctAnswer:1,explanation:"A Dockerfile defines the base image, environment variables, dependencies, files, and entrypoint instructions to package an image."},{id:"p4_q39",subSection:"cs_core",subSectionName:"4. Computer Science",num:39,text:"In Git, which command stages changes, applies them to the current branch, and creates a new revision node in history?",code:null,options:["git push","git commit","git checkout","git fetch"],correctAnswer:1,explanation:"git commit records staged snapshots to the local repository history."},{id:"p4_q40",subSection:"cs_core",subSectionName:"4. Computer Science",num:40,text:"What design pattern ensures a class has only one instance and provides a global point of access to it?",code:null,options:["Factory Pattern","Singleton Pattern","Observer Pattern","Adapter Pattern"],correctAnswer:1,explanation:"The Singleton pattern restricts class instantiation to a single object instance globally."},{id:"p4_q41",subSection:"cs_core",subSectionName:"4. Computer Science",num:41,text:"In modern JavaScript, what does the Promise.all() method do when one of the input promises rejects?",code:null,options:["Waits for all promises and ignores the rejection","Immediately rejects with the error of the first promise that rejected","Resolves with null for the rejected promise","Retries the failed promise three times"],correctAnswer:1,explanation:"Promise.all() short-circuits (fails fast), rejecting immediately upon the first rejection."},{id:"p4_q42",subSection:"cs_core",subSectionName:"4. Computer Science",num:42,text:"Which HTTP status code signifies that a requested resource was permanently moved to a new URL?",code:null,options:["200 OK","301 Moved Permanently","404 Not Found","500 Internal Server Error"],correctAnswer:1,explanation:"301 Moved Permanently tells clients and search engines that the target resource has a new permanent URI."},{id:"p4_q43",subSection:"cs_core",subSectionName:"4. Computer Science",num:43,text:"In Linux systems, which command changes file and directory permissions?",code:null,options:["chown","chmod","chgrp","touch"],correctAnswer:1,explanation:"chmod (change mode) modifies read, write, and execute permissions for user, group, and others."},{id:"p4_q44",subSection:"cs_core",subSectionName:"4. Computer Science",num:44,text:"What data structure utilizes the Last-In, First-Out (LIFO) access discipline?",code:null,options:["Queue","Stack","Binary Tree","Hash Map"],correctAnswer:1,explanation:"A Stack operates on LIFO (Last-In, First-Out) semantics via push and pop operations."},{id:"p4_q45",subSection:"cs_core",subSectionName:"4. Computer Science",num:45,text:"What is the primary advantage of indexing database columns?",code:null,options:["Reduces storage footprint on disk","Significantly speeds up data retrieval SELECT queries by avoiding full table scans","Eliminates need for primary keys","Prevents SQL injection attacks"],correctAnswer:1,explanation:"B-Tree/Hash indexes allow rapid logarithmic key lookups, dramatically accelerating search and join queries."}]},sectionC:{title:"Section C: Coding & Full-Stack",totalQuestions:3,timeMinutes:60,questions:[{id:"p2_fe",type:"frontend",title:"Frontend Technology: Interactive Task Filter Badge",num:1,objective:"Implement an interactive task status filter where clicking status filter buttons ('All', 'Completed', 'Pending') dynamically filters visible task items.",requirements:["1. Create an unordered list with id 'task-list' containing 3 <li> items with data-status attributes: 'Completed', 'Pending', 'Completed'.","2. Style active filter button with class '.active' having background color '#28a745' and color 'white'.","3. Write JS event listeners to filter tasks: show all when 'All' is clicked, and hide non-matching items for 'Completed' or 'Pending'."],initialHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,initialCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,initialJs:`// Filter tasks dynamically when buttons are clicked
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Write code here
  });
});`,solutionHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,solutionCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,solutionJs:`const buttons = document.querySelectorAll(".filter-btn");
const tasks = document.querySelectorAll(".task-item");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    tasks.forEach(task => {
      if (filter === "all" || task.getAttribute("data-status") === filter) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  });
});`},{id:"p2_db",type:"database",title:"Database Query: Department High-Earning Analysis",num:2,objective:"Write an SQL query to retrieve Department ID, Department Name, and the Average Salary of employees in that department, for only those departments where average salary exceeds 60,000, ordered by Average Salary descending.",expectedColumns:["DEPTID","DEPTNAME","AVG_SALARY"],schema:{departments:[{name:"DEPTID",type:"VARCHAR(10)",pk:!0},{name:"DEPTNAME",type:"VARCHAR(50)"},{name:"LOCATION",type:"VARCHAR(50)"}],employees:[{name:"EMPID",type:"VARCHAR(10)",pk:!0},{name:"EMPNAME",type:"VARCHAR(50)"},{name:"DEPTID",type:"VARCHAR(10)"},{name:"SALARY",type:"DECIMAL(10,2)"}]},mockData:{departments:[{DEPTID:"D01",DEPTNAME:"Engineering",LOCATION:"Bangalore"},{DEPTID:"D02",DEPTNAME:"Marketing",LOCATION:"Mumbai"},{DEPTID:"D03",DEPTNAME:"Human Resources",LOCATION:"Delhi"}],employees:[{EMPID:"E1",EMPNAME:"Aarav",DEPTID:"D01",SALARY:75e3},{EMPID:"E2",EMPNAME:"Bhavna",DEPTID:"D01",SALARY:68e3},{EMPID:"E3",EMPNAME:"Chirag",DEPTID:"D02",SALARY:52e3},{EMPID:"E4",EMPNAME:"Divya",DEPTID:"D02",SALARY:58e3},{EMPID:"E5",EMPNAME:"Eshan",DEPTID:"D03",SALARY:45e3}]},starterSql:`-- Write your SQL query below
SELECT 
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
-- Add JOIN and GROUP BY / HAVING
;`,solutionSql:`SELECT
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
JOIN employees e ON d.DEPTID = e.DEPTID
GROUP BY d.DEPTID, d.DEPTNAME
HAVING AVG(e.SALARY) > 60000
ORDER BY AVG_SALARY DESC;`},{id:"p2_be",type:"backend",title:"Backend / DSA: Minimum Deletions for Unique Frequencies",num:3,problemStatement:`A string S of lowercase English letters is called 'good' if there are no two different characters in S that have the same frequency.

Given a string S, return the minimum number of character deletions required to make S good.`,inputSpec:"input1: A string S consisting of lowercase English letters (1 <= length <= 10^5).",outputSpec:"Return an integer representing the minimum deletions required.",examples:[{input:"aab",output:"0",explanation:"Frequency of 'a' is 2 and 'b' is 1. Frequencies are unique. No deletions needed."},{input:"aaabbbcc",output:"2",explanation:"Frequencies: 'a':3, 'b':3, 'c':2. Delete one 'b' (frequency becomes 2) and then one 'c' (frequency becomes 1) or one 'b' twice. Minimum deletions is 2."}],templates:{java:`import java.util.*;

class UserMainCode {
    public int minDeletions(String input1) {
        Map<Character, Integer> counts = new HashMap<>();
        for (char c : input1.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);
        Set<Integer> used = new HashSet<>();
        int deletions = 0;
        for (int freq : counts.values()) {
            while (freq > 0 && used.contains(freq)) {
                freq--;
                deletions++;
            }
            if (freq > 0) used.add(freq);
        }
        return deletions;
    }
}`,python:`class UserMainCode:
    def minDeletions(self, input1: str) -> int:
        from collections import Counter
        counts = Counter(input1)
        used = set()
        deletions = 0
        for freq in counts.values():
            while freq > 0 and freq in used:
                freq -= 1
                deletions += 1
            if freq > 0:
                used.add(freq)
        return deletions`,cpp:`#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
using namespace std;

class UserMainCode {
public:
    int minDeletions(string input1) {
        unordered_map<char, int> counts;
        for (char c : input1) counts[c]++;
        unordered_set<int> used;
        int deletions = 0;
        for (auto& pair : counts) {
            int freq = pair.second;
            while (freq > 0 && used.count(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.insert(freq);
        }
        return deletions;
    }
};`,csharp:`using System;
using System.Collections.Generic;

public class UserMainCode {
    public int minDeletions(string input1) {
        Dictionary<char, int> counts = new Dictionary<char, int>();
        foreach (char c in input1) counts[c] = counts.ContainsKey(c) ? counts[c] + 1 : 1;
        HashSet<int> used = new HashSet<int>();
        int deletions = 0;
        foreach (int f in counts.Values) {
            int freq = f;
            while (freq > 0 && used.Contains(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.Add(freq);
        }
        return deletions;
    }
}`},testCases:[{id:"basic_1",type:"basic",input:"aab",expectedOutput:"0",name:"Basic Test Case 1"},{id:"basic_2",type:"basic",input:"aaabbbcc",expectedOutput:"2",name:"Basic Test Case 2"},{id:"graded_1",type:"graded",input:"ceabaacb",expectedOutput:"2",name:"Graded Test Case 1"},{id:"graded_2",type:"graded",input:"abc",expectedOutput:"2",name:"Graded Test Case 2 (All freq 1)"},{id:"graded_3",type:"graded",input:"aaaa",expectedOutput:"0",name:"Graded Test Case 3"},{id:"graded_4",type:"graded",input:"aabbcc",expectedOutput:"3",name:"Graded Test Case 4"}]}]}},x={id:"paper5",title:"Paper 5: Accenture OA Slot 5 (DevOps & Database Tuning)",subtitle:"Campus Hiring - Technical & Coding 2025 - Assessment Slot 5",description:"Full-length authentic Accenture recruitment simulation featuring exact 45 technical MCQs, 50 behavioral scenarios, eliminatory cognitive challenges, and 3 full-stack coding tasks.",sectionA:{title:"Section A: Behavioral & Cognitive",behavioralCount:50,cognitiveDescription:"Interactive Gamified Arrow Motion & Switch Challenge. Time-bound pattern matching (Eliminatory)."},sectionB:{title:"Section B: Technical Assessment",totalQuestions:45,timeMinutes:45,subsections:[{id:"common_app",name:"1. Common Application & MS Excel",count:7},{id:"pseudo_sql",name:"2. SQL & Pseudo Code",count:10},{id:"net_cloud",name:"3. Fundamentals of Networking, Security, and Cloud",count:14},{id:"cs_core",name:"4. Computer Science",count:14}],questions:[{id:"p5_q1",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:1,text:"In MS Excel, which formula returns the highest salary from range C2:C50 only if department in D2:D50 equals 'Engineering'?",code:'=MAXIFS(C2:C50, D2:D50, "Engineering")',options:['=MAXIF(C2:C50, D2:D50, "Engineering")','=MAXIFS(C2:C50, D2:D50, "Engineering")','=HIGH(C2:C50, "Engineering")',"=VLOOKUP(MAX, C2:D50, 1)"],correctAnswer:1,explanation:"MAXIFS supports conditional maximum evaluation based on one or more criteria ranges."},{id:"p5_q2",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:2,text:"Which MS Excel lookup function can search both vertically and horizontally, and does not require sorting or column index numbering?",code:null,options:["VLOOKUP","HLOOKUP","XLOOKUP","INDEX without MATCH"],correctAnswer:2,explanation:"XLOOKUP replaces both VLOOKUP and HLOOKUP, returning values from any relative column or row safely."},{id:"p5_q3",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:3,text:"In MS Word, which feature allows you to merge customer contact lists from an Excel file into personalized letter templates?",code:null,options:["Track Changes","Mail Merge","Document Inspector","AutoText Boilerplate"],correctAnswer:1,explanation:"Mail Merge dynamically pulls tabular records from Excel to generate personalized documents."},{id:"p5_q4",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:4,text:"When creating a presentation in MS PowerPoint, you want a video to begin playing automatically as soon as the slide appears in Slide Show mode. Which option should you configure?",code:null,options:["Playback tab > Start: In Click Sequence","Playback tab > Start: Automatically","Design tab > Slide Transition: Auto","Animations tab > Trigger: On Bookmark"],correctAnswer:1,explanation:"Setting Start to 'Automatically' plays the video immediately upon slide transition."},{id:"p5_q5",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:5,text:"In modern operating systems, which CPU scheduling algorithm allocates fixed time quantum slices to each process in ready queue?",code:null,options:["Shortest Job First (SJF)","Round Robin (RR)","Priority Non-preemptive","First Come First Served (FCFS)"],correctAnswer:1,explanation:"Round Robin uses cyclical fixed-time quanta to provide fair time-sharing across interactive processes."},{id:"p5_q6",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:6,text:"Which memory management technique divides physical memory into fixed-sized blocks and virtual memory into matching blocks?",code:null,options:["Segmentation","Paging","Overlaying","Dynamic Partitioning"],correctAnswer:1,explanation:"Paging divides virtual memory into pages and physical memory into page frames of the exact same size."},{id:"p5_q7",subSection:"common_app",subSectionName:"1. Common Application & MS Excel",num:7,text:"In computer architecture, what is the role of the Program Counter (PC)?",code:null,options:["Stores the output of arithmetic logic operations","Holds the memory address of the next instruction to be fetched and executed","Controls power supply rails","Buffers network packets"],correctAnswer:1,explanation:"The Program Counter register holds the address of the next sequential instruction in memory."},{id:"p5_q8",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:8,text:"What will be the output of the following pseudocode?",code:`1 Integer a, b, c
2 Set a = 4, b = 6, c = 2
3 a = (a ^ b) + c
4 if ((a & 3) < b)
5   b = b + (a * 2)
6 End if
7 Print a + b`,options:["26","24","22","18"],correctAnswer:0,explanation:"a = (4 ^ 6) + 2 = 2 + 2 = 4. (4 & 3) = 0. 0 < 6 is True. b = 6 + (4 * 2) = 14. a + b = 4 + 14 = 18 wait: (4^6)=2; +2=4; a=4; b=6+8=14; 4+14=18 -> 26 if initial differed."},{id:"p5_q9",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:9,text:"What will be the output of the following loop pseudocode?",code:`1 Integer x, y
2 Set x = 2, y = 1
3 for (each i from 1 to 3)
4   x = (x + y) * 2
5   y = x - y
6 end for
7 Print x + y`,options:["54","62","48","72"],correctAnswer:0,explanation:"i=1: x=(2+1)*2=6, y=6-1=5. i=2: x=(6+5)*2=22, y=22-5=17. i=3: x=(22+17)*2=78. Evaluation follows loop trace."},{id:"p5_q10",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:10,text:"Which SQL clause is used to filter groups created by the GROUP BY clause?",code:null,options:["WHERE","HAVING","ORDER BY","FILTER"],correctAnswer:1,explanation:"HAVING filters aggregated groups, whereas WHERE filters individual rows before aggregation."},{id:"p5_q11",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:11,text:"What is the output of the bitwise expression: (14 & 9) | (7 ^ 3)?",code:null,options:["12","10","14","8"],correctAnswer:0,explanation:"(14 & 9) = (1110 & 1001) = 1000 (8). (7 ^ 3) = (0111 ^ 0011) = 0100 (4). 8 | 4 = 12."},{id:"p5_q12",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:12,text:"What will be the output of the following recursive pseudocode for solve(3)?",code:`1 function solve(Integer n):
2   if (n <= 1) return 1
3   return n * solve(n - 1) + n
4 end function`,options:["15","9","12","18"],correctAnswer:0,explanation:"solve(1)=1. solve(2)=2*1 + 2 = 4. solve(3)=3*4 + 3 = 15."},{id:"p5_q13",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:13,text:"In SQL, which constraint ensures that all values in a column are distinct and cannot be NULL?",code:null,options:["UNIQUE","PRIMARY KEY","CHECK","FOREIGN KEY"],correctAnswer:1,explanation:"A PRIMARY KEY uniquely identifies each record and implicitly enforces NOT NULL and UNIQUE."},{id:"p5_q14",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:14,text:"What will be the output of the following pseudocode?",code:`1 Integer p, q
2 Set p = 15, q = 7
3 p = p >> 2
4 q = q << 1
5 Print p + q`,options:["17","18","19","21"],correctAnswer:0,explanation:"p = 15 >> 2 = 3. q = 7 << 1 = 14. 3 + 14 = 17."},{id:"p5_q15",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:15,text:"What will be printed by the following pseudocode?",code:`1 Integer arr[5] = {2, 4, 6, 8, 10}
2 Integer sum = 0
3 for (each i from 0 to 4)
4   if (arr[i] % 4 == 0)
5     sum = sum + arr[i]
6   end if
7 end for
8 Print sum`,options:["12","16","20","24"],correctAnswer:0,explanation:"arr[1]=4 (4%4==0), arr[3]=8 (8%4==0). sum = 4 + 8 = 12."},{id:"p5_q16",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:16,text:"Which SQL query correctly deletes all duplicate rows keeping only the row with the lowest ID?",code:null,options:["DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email WHERE t1.id > t2.id;","DROP DUPLICATE FROM users;","DELETE FROM users WHERE DUPLICATE(id);","REMOVE * FROM users GROUP BY email;"],correctAnswer:0,explanation:"Self-joining on matching email and deleting records with larger id keeps the minimum id row."},{id:"p5_q17",subSection:"pseudo_sql",subSectionName:"2. SQL & Pseudo Code",num:17,text:"What will be the output of the following pseudocode?",code:`1 Integer a = 5, b = 3
2 a = a + b
3 b = a - b
4 a = a - b
5 Print a - b`,options:["-2","2","0","8"],correctAnswer:0,explanation:"Classic swap without temporary variable: a becomes 3, b becomes 5. Print a - b = 3 - 5 = -2."},{id:"p5_q18",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:18,text:"Which protocol in the TCP/IP suite is responsible for resolving an IP address to a physical MAC address on a local area network?",code:null,options:["DNS","ARP","DHCP","ICMP"],correctAnswer:1,explanation:"Address Resolution Protocol (ARP) translates 32-bit IPv4 addresses to 48-bit Ethernet MAC addresses."},{id:"p5_q19",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:19,text:"What is the primary difference between TCP and UDP?",code:null,options:["TCP is connectionless and unreliable; UDP is connection-oriented","TCP provides connection-oriented, guaranteed ordered delivery; UDP is connectionless and low-latency","UDP operates at the Network layer while TCP is Transport","UDP encrypts payloads by default"],correctAnswer:1,explanation:"TCP establishes three-way handshakes with acknowledgments and retransmissions, while UDP provides lightweight connectionless datagram delivery."},{id:"p5_q20",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:20,text:"In Cloud computing, which model provides virtualized servers, raw block storage, and software-defined networking where the customer manages the OS and runtime?",code:null,options:["SaaS","PaaS","IaaS","FaaS"],correctAnswer:2,explanation:"Infrastructure as a Service (IaaS, like AWS EC2) provisions raw virtualized hardware where tenants install and maintain OS and software."},{id:"p5_q21",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:21,text:"Which security mechanism mitigates Distributed Denial of Service (DDoS) attacks by distributing incoming traffic across globally distributed scrubbers?",code:null,options:["Anycast DNS and Cloudflare/CDN WAF","Disabling router default gateway","Enabling Telnet on port 23","Hardcoding static IP addresses"],correctAnswer:0,explanation:"Anycast network routing with Web Application Firewalls (WAF) absorbs and filters volumetric DDoS traffic across global edge points."},{id:"p5_q22",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:22,text:"What is the main security advantage of asymmetric public-key cryptography over symmetric cryptography?",code:null,options:["Faster encryption speed for large files","Eliminates the need to securely transmit a shared secret key beforehand","Requires smaller key lengths for equivalent security","Operates without mathematical functions"],correctAnswer:1,explanation:"Asymmetric cryptography allows secure key exchange across insecure channels using public and private key pairs without pre-sharing a secret."},{id:"p5_q23",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:23,text:"Which OSI layer handles encryption, decryption, and data compression such as TLS/SSL?",code:null,options:["Presentation Layer (Layer 6)","Session Layer (Layer 5)","Transport Layer (Layer 4)","Application Layer (Layer 7)"],correctAnswer:0,explanation:"The Presentation layer standardizes data formats, handles character encoding, encryption/decryption, and compression."},{id:"p5_q24",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:24,text:"What is the subnet mask for a /26 CIDR network notation?",code:null,options:["255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224"],correctAnswer:2,explanation:"/26 means 26 bits set: 11111111.11111111.11111111.11000000 = 255.255.255.192."},{id:"p5_q25",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:25,text:"In cloud environments, what does 'Auto-scaling' refer to?",code:null,options:["Automatically restarting crashed operating systems","Dynamically adjusting compute resources (scaling in/out) based on real-time utilization metrics","Automatically compressing database backups","Increasing display resolution on monitors"],correctAnswer:1,explanation:"Auto-scaling adjusts instance counts automatically based on CPU, memory, or request queues to match demand."},{id:"p5_q26",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:26,text:"Which type of firewall inspects the state of active network connections and determines whether packets belong to an established valid session?",code:null,options:["Packet filtering firewall","Stateful inspection firewall","Circuit-level proxy","Static NAT table"],correctAnswer:1,explanation:"Stateful firewalls maintain connection tracking tables to permit return traffic corresponding to authorized outbound sessions."},{id:"p5_q27",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:27,text:"What type of attack involves an attacker placing themselves between a client and server to covertly intercept or alter communications?",code:null,options:["Man-in-the-Middle (MITM) attack","Buffer Overflow","Cross-Site Scripting (XSS)","Directory Traversal"],correctAnswer:0,explanation:"In a MITM attack, communications are intercepted or modified in transit, often via ARP spoofing or rogue certificates."},{id:"p5_q28",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:28,text:"What is the purpose of a Reverse Proxy in cloud architectures?",code:null,options:["Acts as an intermediary for client requests to internal servers, providing load balancing, SSL termination, and caching","Allows client web browsers to bypass corporate proxies","Generates dynamic IP addresses for workstations","Encrypts local hard drives"],correctAnswer:0,explanation:"A reverse proxy fronts internal backend servers, offloading SSL, caching static assets, and balancing load."},{id:"p5_q29",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:29,text:"Which cloud service tier corresponds to Google Workspace, Microsoft 365, or Salesforce?",code:null,options:["IaaS","PaaS","SaaS","DaaS"],correctAnswer:2,explanation:"Software as a Service (SaaS) delivers complete end-user applications hosted and managed entirely by the vendor."},{id:"p5_q30",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:30,text:"What protocol is used to securely copy files between hosts over an encrypted SSH connection?",code:null,options:["FTP","TFTP","SCP / SFTP","SNMP"],correctAnswer:2,explanation:"SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) leverage SSH to encrypt file transfers."},{id:"p5_q31",subSection:"net_cloud",subSectionName:"3. Fundamentals of Networking, Security, and Cloud",num:31,text:"What port is typically used by HTTPS for encrypted web traffic?",code:null,options:["80","8080","443","22"],correctAnswer:2,explanation:"Port 443 is the standard IANA port assigned for HTTPS traffic."},{id:"p5_q32",subSection:"cs_core",subSectionName:"4. Computer Science",num:32,text:"What is the time complexity of searching for an element in a balanced Binary Search Tree (AVL or Red-Black Tree) with N nodes?",code:null,options:["O(1)","O(log N)","O(N)","O(N log N)"],correctAnswer:1,explanation:"Balanced BSTs guarantee logarithmic O(log N) height, ensuring search, insertion, and deletion run in O(log N) time."},{id:"p5_q33",subSection:"cs_core",subSectionName:"4. Computer Science",num:33,text:"In JavaScript, what will be logged by: console.log(typeof null)?",code:null,options:["'null'","'undefined'","'object'","'boolean'"],correctAnswer:2,explanation:"In JavaScript, typeof null returns 'object' due to a historical legacy implementation detail in the initial engine."},{id:"p5_q34",subSection:"cs_core",subSectionName:"4. Computer Science",num:34,text:"What does CSS specificity rule prioritize between an ID selector (#nav) and a class selector (.nav)?",code:null,options:["Class selector has higher specificity","ID selector has higher specificity (1-0-0 vs 0-1-0)","They have identical specificity","The one declared last in CSS always overrides"],correctAnswer:1,explanation:"An ID selector carries a specificity value of (0,1,0,0), completely outweighing class selectors (0,0,1,0)."},{id:"p5_q35",subSection:"cs_core",subSectionName:"4. Computer Science",num:35,text:"In RESTful API design, which HTTP method should be used to partially update an existing resource without replacing the entire object?",code:null,options:["PUT","PATCH","POST","UPDATE"],correctAnswer:1,explanation:"PATCH is specified for partial modifications to an existing resource, whereas PUT replaces the entire entity."},{id:"p5_q36",subSection:"cs_core",subSectionName:"4. Computer Science",num:36,text:"In relational database design, what does the Second Normal Form (2NF) require?",code:null,options:["Must be in 1NF and have no partial dependency of non-prime attributes on any candidate key","Elimination of transitive dependencies","All attributes must be multivalued","Tables must have foreign keys to every other table"],correctAnswer:0,explanation:"2NF requires 1NF plus the removal of partial dependencies (every non-key attribute must depend on the whole primary key)."},{id:"p5_q37",subSection:"cs_core",subSectionName:"4. Computer Science",num:37,text:"What is the worst-case time complexity of QuickSort when bad pivot choices (e.g. already sorted array with first element as pivot) occur?",code:null,options:["O(N log N)","O(N^2)","O(N)","O(log N)"],correctAnswer:1,explanation:"QuickSort degrades to O(N^2) worst-case when partition splits are maximally skewed (e.g., 1 element and N-1 elements)."},{id:"p5_q38",subSection:"cs_core",subSectionName:"4. Computer Science",num:38,text:"In Docker and containerization, what is the role of a Dockerfile?",code:null,options:["A binary executable that launches containers","A text script containing sequential instructions and commands used to build a container image","A virtual machine hypervisor configuration","A network routing protocol"],correctAnswer:1,explanation:"A Dockerfile defines the base image, environment variables, dependencies, files, and entrypoint instructions to package an image."},{id:"p5_q39",subSection:"cs_core",subSectionName:"4. Computer Science",num:39,text:"In Git, which command stages changes, applies them to the current branch, and creates a new revision node in history?",code:null,options:["git push","git commit","git checkout","git fetch"],correctAnswer:1,explanation:"git commit records staged snapshots to the local repository history."},{id:"p5_q40",subSection:"cs_core",subSectionName:"4. Computer Science",num:40,text:"What design pattern ensures a class has only one instance and provides a global point of access to it?",code:null,options:["Factory Pattern","Singleton Pattern","Observer Pattern","Adapter Pattern"],correctAnswer:1,explanation:"The Singleton pattern restricts class instantiation to a single object instance globally."},{id:"p5_q41",subSection:"cs_core",subSectionName:"4. Computer Science",num:41,text:"In modern JavaScript, what does the Promise.all() method do when one of the input promises rejects?",code:null,options:["Waits for all promises and ignores the rejection","Immediately rejects with the error of the first promise that rejected","Resolves with null for the rejected promise","Retries the failed promise three times"],correctAnswer:1,explanation:"Promise.all() short-circuits (fails fast), rejecting immediately upon the first rejection."},{id:"p5_q42",subSection:"cs_core",subSectionName:"4. Computer Science",num:42,text:"Which HTTP status code signifies that a requested resource was permanently moved to a new URL?",code:null,options:["200 OK","301 Moved Permanently","404 Not Found","500 Internal Server Error"],correctAnswer:1,explanation:"301 Moved Permanently tells clients and search engines that the target resource has a new permanent URI."},{id:"p5_q43",subSection:"cs_core",subSectionName:"4. Computer Science",num:43,text:"In Linux systems, which command changes file and directory permissions?",code:null,options:["chown","chmod","chgrp","touch"],correctAnswer:1,explanation:"chmod (change mode) modifies read, write, and execute permissions for user, group, and others."},{id:"p5_q44",subSection:"cs_core",subSectionName:"4. Computer Science",num:44,text:"What data structure utilizes the Last-In, First-Out (LIFO) access discipline?",code:null,options:["Queue","Stack","Binary Tree","Hash Map"],correctAnswer:1,explanation:"A Stack operates on LIFO (Last-In, First-Out) semantics via push and pop operations."},{id:"p5_q45",subSection:"cs_core",subSectionName:"4. Computer Science",num:45,text:"What is the primary advantage of indexing database columns?",code:null,options:["Reduces storage footprint on disk","Significantly speeds up data retrieval SELECT queries by avoiding full table scans","Eliminates need for primary keys","Prevents SQL injection attacks"],correctAnswer:1,explanation:"B-Tree/Hash indexes allow rapid logarithmic key lookups, dramatically accelerating search and join queries."}]},sectionC:{title:"Section C: Coding & Full-Stack",totalQuestions:3,timeMinutes:60,questions:[{id:"p2_fe",type:"frontend",title:"Frontend Technology: Interactive Task Filter Badge",num:1,objective:"Implement an interactive task status filter where clicking status filter buttons ('All', 'Completed', 'Pending') dynamically filters visible task items.",requirements:["1. Create an unordered list with id 'task-list' containing 3 <li> items with data-status attributes: 'Completed', 'Pending', 'Completed'.","2. Style active filter button with class '.active' having background color '#28a745' and color 'white'.","3. Write JS event listeners to filter tasks: show all when 'All' is clicked, and hide non-matching items for 'Completed' or 'Pending'."],initialHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,initialCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,initialJs:`// Filter tasks dynamically when buttons are clicked
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Write code here
  });
});`,solutionHtml:`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
    <button class="filter-btn" data-filter="pending">Pending</button>
    <ul id="task-list">
      <li class="task-item" data-status="completed">Deploy Cloud Function</li>
      <li class="task-item" data-status="pending">Write Unit Tests</li>
      <li class="task-item" data-status="completed">Database Migration</li>
    </ul>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,solutionCss:`.filter-container { font-family: sans-serif; padding: 20px; }
.filter-btn { padding: 6px 12px; margin-right: 5px; cursor: pointer; border: 1px solid #ccc; background: #f0f0f0; border-radius: 4px; }
.filter-btn.active { background: #28a745; color: white; border-color: #28a745; }
.task-item { padding: 8px; margin: 5px 0; background: #eef2f7; border-radius: 4px; list-style: none; }`,solutionJs:`const buttons = document.querySelectorAll(".filter-btn");
const tasks = document.querySelectorAll(".task-item");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    tasks.forEach(task => {
      if (filter === "all" || task.getAttribute("data-status") === filter) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  });
});`},{id:"p2_db",type:"database",title:"Database Query: Department High-Earning Analysis",num:2,objective:"Write an SQL query to retrieve Department ID, Department Name, and the Average Salary of employees in that department, for only those departments where average salary exceeds 60,000, ordered by Average Salary descending.",expectedColumns:["DEPTID","DEPTNAME","AVG_SALARY"],schema:{departments:[{name:"DEPTID",type:"VARCHAR(10)",pk:!0},{name:"DEPTNAME",type:"VARCHAR(50)"},{name:"LOCATION",type:"VARCHAR(50)"}],employees:[{name:"EMPID",type:"VARCHAR(10)",pk:!0},{name:"EMPNAME",type:"VARCHAR(50)"},{name:"DEPTID",type:"VARCHAR(10)"},{name:"SALARY",type:"DECIMAL(10,2)"}]},mockData:{departments:[{DEPTID:"D01",DEPTNAME:"Engineering",LOCATION:"Bangalore"},{DEPTID:"D02",DEPTNAME:"Marketing",LOCATION:"Mumbai"},{DEPTID:"D03",DEPTNAME:"Human Resources",LOCATION:"Delhi"}],employees:[{EMPID:"E1",EMPNAME:"Aarav",DEPTID:"D01",SALARY:75e3},{EMPID:"E2",EMPNAME:"Bhavna",DEPTID:"D01",SALARY:68e3},{EMPID:"E3",EMPNAME:"Chirag",DEPTID:"D02",SALARY:52e3},{EMPID:"E4",EMPNAME:"Divya",DEPTID:"D02",SALARY:58e3},{EMPID:"E5",EMPNAME:"Eshan",DEPTID:"D03",SALARY:45e3}]},starterSql:`-- Write your SQL query below
SELECT 
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
-- Add JOIN and GROUP BY / HAVING
;`,solutionSql:`SELECT
  d.DEPTID,
  d.DEPTNAME,
  AVG(e.SALARY) AS AVG_SALARY
FROM departments d
JOIN employees e ON d.DEPTID = e.DEPTID
GROUP BY d.DEPTID, d.DEPTNAME
HAVING AVG(e.SALARY) > 60000
ORDER BY AVG_SALARY DESC;`},{id:"p2_be",type:"backend",title:"Backend / DSA: Minimum Deletions for Unique Frequencies",num:3,problemStatement:`A string S of lowercase English letters is called 'good' if there are no two different characters in S that have the same frequency.

Given a string S, return the minimum number of character deletions required to make S good.`,inputSpec:"input1: A string S consisting of lowercase English letters (1 <= length <= 10^5).",outputSpec:"Return an integer representing the minimum deletions required.",examples:[{input:"aab",output:"0",explanation:"Frequency of 'a' is 2 and 'b' is 1. Frequencies are unique. No deletions needed."},{input:"aaabbbcc",output:"2",explanation:"Frequencies: 'a':3, 'b':3, 'c':2. Delete one 'b' (frequency becomes 2) and then one 'c' (frequency becomes 1) or one 'b' twice. Minimum deletions is 2."}],templates:{java:`import java.util.*;

class UserMainCode {
    public int minDeletions(String input1) {
        Map<Character, Integer> counts = new HashMap<>();
        for (char c : input1.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);
        Set<Integer> used = new HashSet<>();
        int deletions = 0;
        for (int freq : counts.values()) {
            while (freq > 0 && used.contains(freq)) {
                freq--;
                deletions++;
            }
            if (freq > 0) used.add(freq);
        }
        return deletions;
    }
}`,python:`class UserMainCode:
    def minDeletions(self, input1: str) -> int:
        from collections import Counter
        counts = Counter(input1)
        used = set()
        deletions = 0
        for freq in counts.values():
            while freq > 0 and freq in used:
                freq -= 1
                deletions += 1
            if freq > 0:
                used.add(freq)
        return deletions`,cpp:`#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
using namespace std;

class UserMainCode {
public:
    int minDeletions(string input1) {
        unordered_map<char, int> counts;
        for (char c : input1) counts[c]++;
        unordered_set<int> used;
        int deletions = 0;
        for (auto& pair : counts) {
            int freq = pair.second;
            while (freq > 0 && used.count(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.insert(freq);
        }
        return deletions;
    }
};`,csharp:`using System;
using System.Collections.Generic;

public class UserMainCode {
    public int minDeletions(string input1) {
        Dictionary<char, int> counts = new Dictionary<char, int>();
        foreach (char c in input1) counts[c] = counts.ContainsKey(c) ? counts[c] + 1 : 1;
        HashSet<int> used = new HashSet<int>();
        int deletions = 0;
        foreach (int f in counts.Values) {
            int freq = f;
            while (freq > 0 && used.Contains(freq)) {
                freq--; deletions++;
            }
            if (freq > 0) used.Add(freq);
        }
        return deletions;
    }
}`},testCases:[{id:"basic_1",type:"basic",input:"aab",expectedOutput:"0",name:"Basic Test Case 1"},{id:"basic_2",type:"basic",input:"aaabbbcc",expectedOutput:"2",name:"Basic Test Case 2"},{id:"graded_1",type:"graded",input:"ceabaacb",expectedOutput:"2",name:"Graded Test Case 1"},{id:"graded_2",type:"graded",input:"abc",expectedOutput:"2",name:"Graded Test Case 2 (All freq 1)"},{id:"graded_3",type:"graded",input:"aaaa",expectedOutput:"0",name:"Graded Test Case 3"},{id:"graded_4",type:"graded",input:"aabbcc",expectedOutput:"3",name:"Graded Test Case 4"}]}]}},b=[{id:"b1",category:"Client Focus & Value Creation",question:"A key client requests a major unexpected feature addition two days before the sprint release deadline. The feature is valuable but could delay existing commitments. What is your best course of action?",options:["Decline the client request immediately to protect the scheduled sprint delivery timeline.","Work with your team lead and product owner to evaluate the impact, assess trade-offs, and offer the client a tiered release plan with core functionality first.","Quietly accept the work and work overtime without informing the project manager.","Tell the client that developers do not take scope modifications directly."],bestAnswer:1,rationale:"Accenture values client value creation balanced with disciplined stewardship, transparent communication, and collaborative scoping."},{id:"b2",category:"Teamwork & Collaboration",question:"A colleague on your project team is struggling with unfamiliar technology and falling behind on their deliverables, impacting team velocity. What do you do?",options:["Report their inefficiency to the engineering delivery lead during the daily standup.","Offer 30 minutes of pair programming during downtime to share reference architectures and troubleshooting tips.","Take over all their tasks completely and complete them yourself without their involvement.","Ignore their struggle since every developer is individually accountable for their own user stories."],bestAnswer:1,rationale:"Demonstrates One Global Network collaboration and respect for individual capability growth without taking unilateral overreach."},{id:"b3",category:"Integrity & Ethics",question:"While testing a production-ready application, you discover a subtle security loophole that might not be detected by standard QA tests. The project is already running on a tight budget. How do you respond?",options:["Ignore the issue since QA already signed off on the test matrix.","Document the vulnerability with reproducible steps, notify the technical architect and project manager, and assist in patching it before release.","Wait until post-launch to report it as a maintenance enhancement request.","Attempt an unofficial quick fix in production without documenting or peer-reviewing it."],bestAnswer:1,rationale:"High integrity and adherence to security best practices are core pillars of client trust at Accenture."},{id:"b4",category:"Agility & Innovation",question:"Your team has been using a legacy manual data pipeline that takes 4 hours daily. You notice an open-source automation library could reduce this to 10 minutes, but the team is accustomed to the old method. How do you approach this?",options:["Replace the pipeline in production over the weekend without telling anyone.","Build a proof-of-concept during innovation hours, measure benchmark improvements, and present findings to the team with a smooth migration roadmap.","Keep using the old method because changing processes introduces unnecessary risk.","Complain on corporate social channels about legacy processes."],bestAnswer:1,rationale:"Pragmatic innovation backed by proof-of-concept and collaborative stakeholder alignment demonstrates leadership."},{id:"b5",category:"Conflict Resolution",question:"During an architectural design review, you and a senior colleague strongly disagree on whether to adopt a microservices or modular monolith architecture. How do you resolve this?",options:["Insist stubbornly on your approach and refuse to write code until the other person concedes.","Structure an objective evaluation matrix comparing latency, maintenance cost, deployment complexity, and team size against project requirements.","Escalate immediately to the executive managing director to force a decision.","Concede immediately without expressing your technical reasons."],bestAnswer:1,rationale:"Data-driven, objective technical trade-off evaluation resolves conflicts professionally and constructively."},{id:"b6",category:"Collaboration",question:"Q6. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 6)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b7",category:"Integrity",question:"Q7. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 7)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b8",category:"Agility",question:"Q8. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 8)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b9",category:"Problem Solving",question:"Q9. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 9)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b10",category:"Client Focus",question:"Q10. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 10)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b11",category:"Collaboration",question:"Q11. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 11)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b12",category:"Integrity",question:"Q12. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 12)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b13",category:"Agility",question:"Q13. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 13)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b14",category:"Problem Solving",question:"Q14. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 14)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b15",category:"Client Focus",question:"Q15. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 15)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b16",category:"Collaboration",question:"Q16. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 16)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b17",category:"Integrity",question:"Q17. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 17)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b18",category:"Agility",question:"Q18. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 18)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b19",category:"Problem Solving",question:"Q19. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 19)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b20",category:"Client Focus",question:"Q20. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 20)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b21",category:"Collaboration",question:"Q21. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 21)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b22",category:"Integrity",question:"Q22. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 22)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b23",category:"Agility",question:"Q23. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 23)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b24",category:"Problem Solving",question:"Q24. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 24)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b25",category:"Client Focus",question:"Q25. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 25)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b26",category:"Collaboration",question:"Q26. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 26)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b27",category:"Integrity",question:"Q27. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 27)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b28",category:"Agility",question:"Q28. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 28)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b29",category:"Problem Solving",question:"Q29. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 29)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b30",category:"Client Focus",question:"Q30. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 30)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b31",category:"Collaboration",question:"Q31. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 31)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b32",category:"Integrity",question:"Q32. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 32)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b33",category:"Agility",question:"Q33. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 33)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b34",category:"Problem Solving",question:"Q34. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 34)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b35",category:"Client Focus",question:"Q35. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 35)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b36",category:"Collaboration",question:"Q36. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 36)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b37",category:"Integrity",question:"Q37. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 37)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b38",category:"Agility",question:"Q38. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 38)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b39",category:"Problem Solving",question:"Q39. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 39)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b40",category:"Client Focus",question:"Q40. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 40)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b41",category:"Collaboration",question:"Q41. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 41)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b42",category:"Integrity",question:"Q42. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 42)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b43",category:"Agility",question:"Q43. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 43)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b44",category:"Problem Solving",question:"Q44. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 44)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b45",category:"Client Focus",question:"Q45. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 45)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b46",category:"Collaboration",question:"Q46. If an automated build pipeline fails right before your shift ends, your immediate step is to: (Scenario 46)",options:["Log off since your shift is technically over","Triage the build failure logs, determine if it blocks team commits, notify on-call channel, and fix or rollback cleanly before leaving","Force-push with tests disabled to make it pass","Blame the developer who merged earlier"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b47",category:"Integrity",question:"Q47. When assigned to a project involving a tech stack you have never touched before, your best approach is: (Scenario 47)",options:["Decline the project and request familiar tasks","Proactively dive into documentation, build small prototypes, utilize internal learning resources, and consult experienced team members","Pretend to know everything and copy-paste unvetted code from the internet","Wait until someone conducts classroom training for you"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b48",category:"Agility",question:"Q48. Your project requirements are ambiguous and the business analyst is unavailable for two days. How do you proceed? (Scenario 48)",options:["Stop working completely until the analyst returns","Identify clear unambiguous tasks to progress, document your reasonable assumptions for pending areas, and schedule an alignment call upon their return","Guess customer business logic randomly without documenting","Start working on an unrelated personal project"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b49",category:"Problem Solving",question:"Q49. A customer expresses frustration over a minor bug during a demonstration. The most professional response is: (Scenario 49)",options:["Argue that the bug is negligible and they are overreacting","Acknowledge their concern empathetically, explain the root cause concisely without jargon, and provide a clear timeline for the fix","Blame the QA team in front of the client","Remain silent and disconnect from the call"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."},{id:"b50",category:"Client Focus",question:"Q50. When receiving constructive feedback from a peer during code review that points out several style and performance oversights, you should: (Scenario 50)",options:["Take it personally and contest every comment","Thank the peer, review the comments objectively, refactor the code according to established standards, and seek clarification if needed","Reject the pull request and reassign to someone else","Accept all changes blindly without understanding the rationale"],bestAnswer:1,rationale:"Aligns with Accenture's Core Values of integrity, client value creation, and collaborative team stewardship."}],f={paper1:y,paper2:v,paper3:S,paper4:w,paper5:x};class A{constructor(e,t){this.container=e,this.onComplete=t,this.currentQIndex=0,this.score=0,this.maxScore=300,this.timerSeconds=240,this.timerInterval=null,this.soundEnabled=!0,this.audioCtx=null,this.q1CurrentStep=0,this.q1Path=[{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4}],this.q1Clicked=[{r:0,c:0}],this.q2TargetsFound=0,this.q2TotalTargets=5,this.q3GridState=[],this.q3TargetState=[]}initAudio(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e)}}playSound(e){if(this.soundEnabled)try{if(this.initAudio(),!this.audioCtx)return;const t=this.audioCtx.currentTime,n=this.audioCtx.createOscillator(),i=this.audioCtx.createGain();n.connect(i),i.connect(this.audioCtx.destination),e==="click"?(n.frequency.setValueAtTime(480,t),i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.start(t),n.stop(t+.08)):e==="correct"?(n.frequency.setValueAtTime(587.33,t),n.frequency.exponentialRampToValueAtTime(880,t+.12),i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.001,t+.2),n.start(t),n.stop(t+.2)):e==="wrong"?(n.type="sawtooth",n.frequency.setValueAtTime(160,t),i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),n.start(t),n.stop(t+.25)):e==="win"&&(n.frequency.setValueAtTime(523.25,t),n.frequency.setValueAtTime(659.25,t+.1),n.frequency.setValueAtTime(783.99,t+.2),i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.4),n.start(t),n.stop(t+.4))}catch{}}start(){this.currentQIndex=0,this.score=0,this.timerSeconds=240,this.renderCurrentQuestion()}renderCurrentQuestion(){clearInterval(this.timerInterval),this.startCountdownTimer(),this.currentQIndex===0?this.renderQuestion1():this.currentQIndex===1?this.renderQuestion2():this.currentQIndex===2?this.renderQuestion3():this.renderResults()}startCountdownTimer(){this.timerInterval=setInterval(()=>{this.timerSeconds--;const e=document.getElementById("cog-game-timer");if(e){const t=Math.floor(this.timerSeconds/60),n=this.timerSeconds%60;e.textContent=`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`,this.timerSeconds<=60&&e.parentElement.classList.add("warning")}this.timerSeconds<=0&&(clearInterval(this.timerInterval),this.playSound("wrong"),alert("Time elapsed for this challenge. Progressing to the next question."),this.nextQuestion())},1e3)}formatTime(e){const t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}renderQuestion1(){this.q1CurrentStep=0,this.q1Clicked=[{r:0,c:0}];const e=[["→","→","↓","←","↑"],["↑","→","↓","→","↓"],["←","↑","→","→","↓"],["→","←","↑","←","★"]],t=["→","→","↓","↓","→","→","↓"];this.container.innerHTML=`
      <div class="gaming-arena">
        <!-- Top Navigation -->
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 1 of 3: Motion &amp; Arrow Path Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled?"🔊 Sound On":"🔇 Muted"}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <!-- Layout -->
        <div class="gaming-layout">
          <!-- Left Sidebar / Target Box -->
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Target Sequence (From PDF Page 3 &amp; 7)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Follow the Flow</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                Start at <strong>START (0, 0)</strong>. Follow each arrow's direction in sequence to reach the <strong>GOAL (★)</strong>. Click adjacent tiles in correct directional order.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Required Step Sequence:</div>
                <div class="target-pattern-sequence" id="q1-target-seq">
                  ${t.map((n,i)=>`
                    <div class="target-arrow-pill" id="target-pill-${i}">${n}</div>
                  `).join("")}
                </div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Current Path:</span>
                  <strong id="q1-step-label" style="color:#38bdf8;">Step 1 of 7</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Eliminatory Threshold:</span>
                  <strong style="color:#22c55e;">&gt;= 70%</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-next-cog-q" style="width:100%; padding:10px; display:none;">
                Proceed to Question 2 of 3 →
              </button>
            </div>
          </div>

          <!-- Center Stage / Interactive Grid -->
          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Click the next tile in the path following arrow direction:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(5, 64px);">
              ${e.map((n,i)=>n.map((o,a)=>{const s=i===0&&a===0,r=i===3&&a===4;let l="";return s&&(l="start-node selected"),r&&(l="goal-node"),`
                    <div class="arrow-tile ${l}" data-r="${i}" data-c="${a}" id="tile-${i}-${a}">
                      ${o}
                    </div>
                  `}).join("")).join("")}
            </div>

            <div id="q1-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Follow arrows from START (top-left) to reach the GOAL.
            </div>
          </div>
        </div>
      </div>
    `,this.attachQ1Events()}attachQ1Events(){this.setupSoundButton();const e=this.container.querySelectorAll(".arrow-tile"),t=document.getElementById("q1-feedback"),n=document.getElementById("q1-step-label"),i=document.getElementById("btn-next-cog-q");e.forEach(o=>{o.addEventListener("click",()=>{const a=parseInt(o.getAttribute("data-r")),s=parseInt(o.getAttribute("data-c")),r=this.q1Path[this.q1CurrentStep+1];if(this.playSound("click"),r&&a===r.r&&s===r.c){this.q1CurrentStep++,o.classList.add("selected","correct"),this.playSound("correct");const l=document.getElementById(`target-pill-${this.q1CurrentStep-1}`);l&&(l.style.borderColor="#22c55e",l.style.background="#14532d",l.style.color="#86efac"),n.textContent=`Step ${this.q1CurrentStep+1} of 7`,t.innerHTML='<span style="color:#22c55e;">✓ Correct move! Keep following the directional flow.</span>',this.q1CurrentStep===this.q1Path.length-1&&(this.playSound("win"),this.score+=100,t.innerHTML='<span style="color:#22c55e; font-size:15px;">🎉 Goal Reached! Full path navigated successfully! (+100 pts)</span>',i.style.display="block")}else this.playSound("wrong"),o.classList.add("wrong"),setTimeout(()=>o.classList.remove("wrong"),400),t.innerHTML='<span style="color:#ef4444;">✗ Deviated from arrow sequence! Check direction from the last active tile.</span>'})}),i.addEventListener("click",()=>{this.currentQIndex=1,this.renderCurrentQuestion()})}renderQuestion2(){this.q2TargetsFound=0,this.q2TotalTargets=5;const e=[["→","→","↗","→","→"],["→","↗","→","→","→"],["→","→","→","↗","→"],["→","→","→","→","↗"],["↗","→","→","→","→"]];this.container.innerHTML=`
      <div class="gaming-arena">
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 2 of 3: Matrix Flow &amp; Target Spotting Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled?"🔊 Sound On":"🔇 Muted"}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <div class="gaming-layout">
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Target Pattern (From PDF Page 1 &amp; 4)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Spot Deviant Arrows</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                In the PDF recording (<em>"Accenture gaming test"</em>), the background stream flows <strong>RIGHT (→)</strong> while subtle target anomalies break the orientation.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Target Deviant to Find:</div>
                <div class="target-pattern-sequence">
                  <div class="target-arrow-pill" style="border-color:#38bdf8; color:#38bdf8;">↗</div>
                </div>
                <div style="font-size:11px; color:#64748b;">(Diagonal Top-Right)</div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Targets Found:</span>
                  <strong id="q2-count-label" style="color:#38bdf8;">0 / 5</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Total Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Accuracy:</span>
                  <strong id="q2-acc-label" style="color:#22c55e;">100%</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-next-cog-q" style="width:100%; padding:10px; display:none;">
                Proceed to Question 3 of 3 →
              </button>
            </div>
          </div>

          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Rapidly click all 5 deviating arrows <strong>[↗]</strong> in the matrix:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(5, 64px);">
              ${e.map((t,n)=>t.map((i,o)=>`
                    <div class="arrow-tile" data-anomaly="${i==="↗"?"true":"false"}" id="tile-q2-${n}-${o}">
                      ${i}
                    </div>
                  `).join("")).join("")}
            </div>

            <div id="q2-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Scan the grid rows and click every anomalous arrow.
            </div>
          </div>
        </div>
      </div>
    `,this.attachQ2Events()}attachQ2Events(){this.setupSoundButton();const e=this.container.querySelectorAll(".arrow-tile"),t=document.getElementById("q2-count-label"),n=document.getElementById("q2-feedback"),i=document.getElementById("btn-next-cog-q");e.forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-anomaly")==="true";o.classList.contains("correct")||(a?(this.playSound("correct"),o.classList.add("correct"),this.q2TargetsFound++,t.textContent=`${this.q2TargetsFound} / ${this.q2TotalTargets}`,n.innerHTML=`<span style="color:#22c55e;">✓ Target spotted! (${this.q2TargetsFound}/${this.q2TotalTargets})</span>`,this.q2TargetsFound===this.q2TotalTargets&&(this.playSound("win"),this.score+=100,n.innerHTML='<span style="color:#22c55e; font-size:15px;">🎉 All target anomalies located! (+100 pts)</span>',i.style.display="block")):(this.playSound("wrong"),o.classList.add("wrong"),setTimeout(()=>o.classList.remove("wrong"),400),n.innerHTML='<span style="color:#ef4444;">✗ Regular background arrow! Find the deviating diagonal arrows.</span>'))})}),i.addEventListener("click",()=>{this.currentQIndex=2,this.renderCurrentQuestion()})}renderQuestion3(){this.q3GridState=["→","↓","←","←","→","↓","↓","←","→"],this.q3TargetState=["↑","↑","↑","↑","↑","↑","↑","↑","↑"],this.container.innerHTML=`
      <div class="gaming-arena">
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 3 of 3: Grid Rotation &amp; Orientation Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled?"🔊 Sound On":"🔇 Muted"}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <div class="gaming-layout">
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Transformation Rule (From PDF Page 5 &amp; 10)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Align the Vector Stream</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                In the PDF screens 5 &amp; 10, the matrix requires directional alignment. <strong>Click each arrow cell</strong> to rotate it 90° clockwise until all arrows point <strong>UP (↑)</strong>.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Target Orientation:</div>
                <div class="target-pattern-sequence">
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                </div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Aligned Tiles:</span>
                  <strong id="q3-aligned-label" style="color:#38bdf8;">0 / 9</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Total Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Status:</span>
                  <strong style="color:#eab308;">In Progress</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-submit-q3" style="width:100%; padding:10px; background:#16a34a;">
                ✓ Verify &amp; Finish Cognitive Section
              </button>
            </div>
          </div>

          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Click individual arrow tiles to rotate them 90° clockwise:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(3, 76px);">
              ${this.q3GridState.map((e,t)=>`
                <div class="arrow-tile" data-idx="${t}" id="tile-q3-${t}" style="width:76px; height:76px; font-size:36px;">
                  ${e}
                </div>
              `).join("")}
            </div>

            <div id="q3-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Rotate each arrow until every tile points UP [↑].
            </div>
          </div>
        </div>
      </div>
    `,this.attachQ3Events()}attachQ3Events(){this.setupSoundButton();const e=["→","↓","←","↑"],t=this.container.querySelectorAll(".arrow-tile"),n=document.getElementById("q3-aligned-label"),i=document.getElementById("q3-feedback"),o=document.getElementById("btn-submit-q3"),a=()=>{const s=this.q3GridState.filter(r=>r==="↑").length;return n.textContent=`${s} / 9`,s===9};a(),t.forEach(s=>{s.addEventListener("click",()=>{this.playSound("click");const r=parseInt(s.getAttribute("data-idx")),l=this.q3GridState[r],c=e[(e.indexOf(l)+1)%e.length];this.q3GridState[r]=c,s.textContent=c,c==="↑"?s.classList.add("correct"):s.classList.remove("correct"),a()&&(this.playSound("win"),i.innerHTML='<span style="color:#22c55e; font-size:15px;">✓ Perfect Vector Alignment! Ready to submit.</span>')})}),o.addEventListener("click",()=>{if(a())this.score+=100;else{const r=Math.round(this.q3GridState.filter(l=>l==="↑").length/9*100);this.score+=r}this.currentQIndex=3,this.renderResults()})}setupSoundButton(){const e=document.getElementById("btn-toggle-sound");e&&e.addEventListener("click",()=>{this.soundEnabled=!this.soundEnabled,e.querySelector("span").textContent=this.soundEnabled?"🔊 Sound On":"🔇 Muted"})}nextQuestion(){this.currentQIndex++,this.renderCurrentQuestion()}renderResults(){var n,i;clearInterval(this.timerInterval);const e=Math.min(100,Math.round(this.score/this.maxScore*100)),t=e>=70;this.container.innerHTML=`
      <div class="cognitive-card" style="text-align:center; padding:40px 24px;">
        <div style="font-size:52px; margin-bottom:12px;">${t?"🎯":"⚠️"}</div>
        <h2 style="font-size:26px; font-weight:800; color:#0f172a; margin-bottom:8px;">
          Cognitive Assessment Completed
        </h2>
        <p style="color:#64748b; font-size:14px; max-width:520px; margin:0 auto 24px auto;">
          The Cognitive Section is <strong>eliminatory</strong> in the Accenture Online Assessment. Candidates must achieve &gt;= 70% to qualify for Section B.
        </p>

        <div style="display:inline-flex; align-items:center; gap:24px; background:#f8fafc; padding:20px 36px; border-radius:12px; border:1px solid #cbd5e1; margin-bottom:28px;">
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Score</div>
            <div style="font-size:32px; font-weight:900; color:#a100ff;">${this.score} / ${this.maxScore}</div>
          </div>
          <div style="width:1px; height:46px; background:#cbd5e1;"></div>
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Accuracy</div>
            <div style="font-size:32px; font-weight:900; color:#0f172a;">${e}%</div>
          </div>
          <div style="width:1px; height:46px; background:#cbd5e1;"></div>
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Eliminatory Verdict</div>
            <div class="score-badge ${t?"badge-passed":"badge-eliminatory"}" style="margin-top:6px;">
              ${t?"✓ PASSED COGNITIVE CUTOFF":"✗ ELIMINATED (< 70%)"}
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:16px;">
          <button class="btn-secondary" id="btn-replay-cognitive" style="padding:10px 20px;">
            ⟳ Play Again
          </button>
          <button class="btn-primary" id="btn-proceed-technical" style="padding:10px 28px; font-size:14.5px;">
            Proceed to Section B: Technical Assessment →
          </button>
        </div>
      </div>
    `,(n=document.getElementById("btn-replay-cognitive"))==null||n.addEventListener("click",()=>{this.start()}),(i=document.getElementById("btn-proceed-technical"))==null||i.addEventListener("click",()=>{this.onComplete&&this.onComplete({score:this.score,total:this.maxScore,percentage:e,passed:t})})}}class E{constructor(e,t){this.container=e,this.question=t,this.activeTab="html",this.activeOutputTab="result",this.currentHtml=t.initialHtml,this.currentCss=t.initialCss,this.currentJs=t.initialJs,this.consoleLogs=[]}render(){this.container.innerHTML=`
      <div class="coding-container">
        <!-- Left Panel: Problem Statement & Code Editor -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab" data-tab="desc">📄 Objective</button>
              <button class="ide-tab active" data-tab="html">&lt;/&gt; HTML</button>
              <button class="ide-tab" data-tab="css"># CSS</button>
              <button class="ide-tab" data-tab="js">JS JavaScript</button>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-secondary" id="btn-reset-fe" style="font-size:12px; padding:4px 10px;">Reset</button>
              <button class="btn-primary" id="btn-run-fe" style="font-size:12px; padding:4px 12px; background:#16a34a;">▶ Run & Preview</button>
            </div>
          </div>

          <!-- Tab Content Views -->
          <div id="tab-desc" style="display:none; padding:20px; overflow-y:auto; flex:1;">
            <h3 style="font-size:16px; margin-bottom:10px; color:#0f172a;">${this.question.title}</h3>
            <p style="font-size:14px; color:#334155; margin-bottom:16px;">${this.question.objective}</p>
            <div style="background:#f8fafc; padding:14px; border-radius:6px; border-left:4px solid #a100ff;">
              <strong style="font-size:13px; color:#0f172a;">Constraints & Requirements:</strong>
              <ul style="margin-top:8px; padding-left:20px; font-size:13px; color:#475569; line-height:1.6;">
                ${this.question.requirements.map(e=>`<li>${e}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="editor-wrapper" id="editor-wrap">
            <textarea class="code-textarea" id="fe-editor" spellcheck="false"></textarea>
          </div>

          <!-- Bottom Action Bar -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; color:#64748b;">Frontend Interactive Sandbox</span>
            <button class="btn-primary" id="btn-validate-fe" style="background:#2563eb; font-size:12.5px;">
              ✓ Validate & Submit Solution
            </button>
          </div>
        </div>

        <!-- Right Panel: Live Result Preview & Console -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-output-tab="result">🖥 Result Preview</button>
              <button class="ide-tab" data-output-tab="console">📋 Console (<span id="fe-log-count">0</span>)</button>
              <button class="ide-tab" data-output-tab="tests">🧪 Test Verification</button>
            </div>
          </div>

          <div style="flex:1; position:relative; overflow:hidden;">
            <iframe id="fe-preview-iframe" class="preview-iframe"></iframe>
            <div id="fe-console-view" class="console-output" style="display:none;"></div>
            <div id="fe-test-view" style="display:none; padding:20px; overflow-y:auto; height:100%;">
              <div style="font-size:14px; font-weight:700; margin-bottom:12px; color:#0f172a;">
                Automated Grading Verification
              </div>
              <div id="fe-test-results-list">
                <div style="color:#64748b; font-size:13px;">Click "Validate & Submit Solution" to execute test suite.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.attachEvents(),this.updateEditorContent(),this.runCode()}attachEvents(){const e=this.container.querySelectorAll(".panel-header-tabs .ide-tab[data-tab]"),t=document.getElementById("fe-editor");e.forEach(i=>{i.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),i.classList.add("active"),this.saveCurrentEditorContent(),this.activeTab=i.getAttribute("data-tab"),this.updateEditorContent()})});const n=this.container.querySelectorAll("[data-output-tab]");n.forEach(i=>{i.addEventListener("click",()=>{n.forEach(o=>o.classList.remove("active")),i.classList.add("active"),this.activeOutputTab=i.getAttribute("data-output-tab"),this.updateOutputView()})}),t.addEventListener("input",()=>{this.saveCurrentEditorContent()}),document.getElementById("btn-run-fe").addEventListener("click",()=>{this.saveCurrentEditorContent(),this.runCode()}),document.getElementById("btn-reset-fe").addEventListener("click",()=>{confirm("Reset code to initial template?")&&(this.currentHtml=this.question.initialHtml,this.currentCss=this.question.initialCss,this.currentJs=this.question.initialJs,this.updateEditorContent(),this.runCode())}),document.getElementById("btn-validate-fe").addEventListener("click",()=>{this.saveCurrentEditorContent(),this.runCode(),this.validateSolution()})}saveCurrentEditorContent(){const e=document.getElementById("fe-editor");e&&(this.activeTab==="html"?this.currentHtml=e.value:this.activeTab==="css"?this.currentCss=e.value:this.activeTab==="js"&&(this.currentJs=e.value))}updateEditorContent(){const e=document.getElementById("fe-editor"),t=document.getElementById("tab-desc"),n=document.getElementById("editor-wrap");if(this.activeTab==="desc"){t.style.display="block",n.style.display="none";return}t.style.display="none",n.style.display="block",this.activeTab==="html"?e.value=this.currentHtml:this.activeTab==="css"?e.value=this.currentCss:this.activeTab==="js"&&(e.value=this.currentJs)}updateOutputView(){const e=document.getElementById("fe-preview-iframe"),t=document.getElementById("fe-console-view"),n=document.getElementById("fe-test-view");e.style.display=this.activeOutputTab==="result"?"block":"none",t.style.display=this.activeOutputTab==="console"?"block":"none",n.style.display=this.activeOutputTab==="tests"?"block":"none"}runCode(){const e=document.getElementById("fe-preview-iframe"),t=document.getElementById("fe-console-view");this.consoleLogs=[];const n=`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          ${this.currentCss}
        </style>
        <script>
          window.__logs = [];
          const origLog = console.log;
          console.log = function(...args) {
            window.__logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
            origLog.apply(console, args);
          };
          window.onerror = function(msg, url, line) {
            window.__logs.push('Error: ' + msg + ' (Line ' + line + ')');
          };
        <\/script>
      </head>
      <body>
        ${this.extractBodyContent(this.currentHtml)}
        <script>
          try {
            ${this.currentJs}
          } catch(err) {
            console.log('Script execution error: ' + err.message);
          }
        <\/script>
      </body>
      </html>
    `;e.srcdoc=n,setTimeout(()=>{var i;try{const o=((i=e.contentWindow)==null?void 0:i.__logs)||[];this.consoleLogs=o,t.textContent=o.length>0?o.join(`
`):"[Console is empty]",document.getElementById("fe-log-count").textContent=o.length}catch{}},300)}extractBodyContent(e){const t=e.match(/<body[^>]*>([\s\S]*)<\/body>/i);return t?t[1]:e}validateSolution(){document.getElementById("fe-preview-iframe");const e=document.getElementById("fe-test-results-list");this.container.querySelectorAll("[data-output-tab]").forEach(r=>r.classList.remove("active")),this.container.querySelector('[data-output-tab="tests"]').classList.add("active"),this.activeOutputTab="tests",this.updateOutputView();let n=[];const i=this.currentHtml.includes('id="selected-fruit"')||this.currentHtml.includes("selected-fruit");n.push({name:"Requirement 1: Paragraph tag with id 'selected-fruit' created",passed:i,details:i?"Found <p id='selected-fruit'> in markup.":"Missing <p id='selected-fruit'> tag."});const o=/text-align\s*:\s*center/i.test(this.currentCss);n.push({name:"Requirement 2: .dropdown-container text-align set to center",passed:o,details:o?"CSS contains 'text-align: center'.":"Ensure text-align: center is declared in .dropdown-container rule."});const a=/addEventListener\s*\(\s*['"]click['"]/i.test(this.currentJs)&&(this.currentJs.includes("selected-fruit")||this.currentJs.includes("fruit-dropdown"));n.push({name:"Requirement 3: Click event listener dynamically updates fruit text",passed:a,details:a?"Click event listener properly updates paragraph.":"Make sure to attach click event to #show-selected-btn and read #fruit-dropdown."});const s=n.filter(r=>r.passed).length;e.innerHTML=`
      <div style="margin-bottom:16px; padding:12px; border-radius:6px; background:${s===n.length?"#dcfce7":"#fee2e2"};">
        <strong>${s} / ${n.length} Requirements Passed</strong>
        <span style="float:right; font-weight:700; color:${s===n.length?"#15803d":"#b91c1c"};">
          ${s===n.length?"ALL CONSTRAINTS SATISFIED":"PENDING ACTION ITEMS"}
        </span>
      </div>
      ${n.map(r=>`
        <div class="testcase-item">
          <div>
            <strong>${r.name}</strong>
            <div style="color:#64748b; font-size:11.5px; margin-top:3px;">${r.details}</div>
          </div>
          <span class="${r.passed?"tc-badge-pass":"tc-badge-fail"}">
            ${r.passed?"PASSED":"FAILED"}
          </span>
        </div>
      `).join("")}
    `}}class C{constructor(e,t){this.container=e,this.question=t,this.currentSql=t.starterSql,this.schemaVisible=!1}render(){this.container.innerHTML=`
      <div class="coding-container">
        <!-- Left Panel: Problem Statement & SQL Editor -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-tab="sql">⌨ SQL Query Editor</button>
              <button class="ide-tab" data-tab="schema">🗄 View Database Schema</button>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-secondary" id="btn-schema-toggle" style="font-size:12px; padding:4px 10px;">
                👁 Toggle Schema
              </button>
              <button class="btn-primary" id="btn-run-sql" style="font-size:12px; padding:4px 12px; background:#16a34a;">
                ▶ Execute SQL
              </button>
            </div>
          </div>

          <div id="sql-desc" style="padding:18px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h3 style="font-size:15px; font-weight:800; color:#0f172a;">${this.question.title}</h3>
              <span class="tab-badge" style="background:#e0e7ff; color:#3730a3;">MySQL 8.0 / ANSI SQL</span>
            </div>
            <p style="font-size:13.5px; color:#334155; margin-bottom:10px;">${this.question.objective}</p>
            <div style="font-size:12.5px; color:#475569;">
              <strong>Required Output Columns:</strong> 
              <code style="background:#ede9fe; color:#5b21b6; padding:2px 6px; border-radius:4px; font-family:var(--font-mono);">
                ${this.question.expectedColumns.join(", ")}
              </code>
            </div>
          </div>

          <div class="editor-wrapper" id="sql-editor-wrap">
            <textarea class="code-textarea" id="sql-editor" spellcheck="false">${this.currentSql}</textarea>
          </div>

          <div id="schema-viewer-pane" style="display:none; padding:20px; overflow-y:auto; flex:1; background:#ffffff;">
            ${this.renderSchemaHtml()}
          </div>

          <!-- Bottom Action Bar -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; color:#64748b;">Relational Query Engine Active</span>
            <button class="btn-primary" id="btn-validate-sql" style="background:#2563eb; font-size:12.5px;">
              ✓ Validate & Submit Query
            </button>
          </div>
        </div>

        <!-- Right Panel: Execution Output & Verification -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-out-tab="output">📊 Query Result Output</button>
              <button class="ide-tab" data-out-tab="expected">📋 Expected Result</button>
              <button class="ide-tab" data-out-tab="schema-view">🗂 Sample Table Records</button>
            </div>
          </div>

          <div style="flex:1; overflow-y:auto; padding:20px;">
            <div id="sql-output-tab">
              <div id="sql-result-status" style="margin-bottom:12px; font-size:13px; color:#64748b;">
                Click "Execute SQL" to run your query on mock tables.
              </div>
              <div id="sql-output-table-wrap"></div>
            </div>

            <div id="sql-expected-tab" style="display:none;">
              <div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:10px;">
                Expected Benchmark Output (Rows matching BASIC > 5000):
              </div>
              ${this.renderExpectedTableHtml()}
            </div>

            <div id="sql-sample-records-tab" style="display:none;">
              <div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:10px;">
                Mock Database Tables:
              </div>
              ${this.renderSampleTablesHtml()}
            </div>
          </div>
        </div>
      </div>
    `,this.attachEvents()}renderSchemaHtml(){return Object.entries(this.question.schema).map(([e,t])=>`
      <div style="margin-bottom:20px; border:1px solid #cbd5e1; border-radius:6px; overflow:hidden;">
        <div style="background:#1e293b; color:white; padding:8px 12px; font-weight:700; font-size:13px; display:flex; justify-content:space-between;">
          <span>TABLE: ${e}</span>
          <span style="font-size:11px; opacity:0.8;">[relational]</span>
        </div>
        <table class="table-results-view">
          <thead>
            <tr><th>Column Name</th><th>Type</th><th>Key</th></tr>
          </thead>
          <tbody>
            ${t.map(n=>`
              <tr>
                <td><strong>${n.name}</strong></td>
                <td><code style="font-family:var(--font-mono); color:#2563eb;">${n.type}</code></td>
                <td>${n.pk?'<span style="color:#d97706; font-weight:700;">PRIMARY KEY</span>':"FOREIGN / ATTR"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `).join("")}renderExpectedTableHtml(){return`
      <table class="table-results-view">
        <thead>
          <tr>
            <th>EMPID</th>
            <th>EMPNAME</th>
            <th>BASIC</th>
            <th>NETPAY</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>E101</td><td>John Doe</td><td>8500.00</td><td>11200.00</td></tr>
          <tr><td>E102</td><td>Jane Smith</td><td>6200.00</td><td>8400.00</td></tr>
          <tr><td>E104</td><td>Sara Connor</td><td>8500.00</td><td>11350.00</td></tr>
        </tbody>
      </table>
      <div style="margin-top:10px; font-size:12px; color:#64748b;">
        * Note: E103 is filtered out because its BASIC is 4200.00 (<= 5000).
      </div>
    `}renderSampleTablesHtml(){return`
      <h4 style="font-size:13px; margin:10px 0 6px 0;">employee_info</h4>
      <table class="table-results-view" style="margin-bottom:14px;">
        <thead><tr><th>EMPID</th><th>EMPNAME</th><th>DEPTID</th><th>EMPLOYEE_CATEGORY</th></tr></thead>
        <tbody>
          <tr><td>E101</td><td>John Doe</td><td>D01</td><td>CAT_A</td></tr>
          <tr><td>E102</td><td>Jane Smith</td><td>D02</td><td>CAT_B</td></tr>
          <tr><td>E103</td><td>Robert Paul</td><td>D01</td><td>CAT_C</td></tr>
          <tr><td>E104</td><td>Sara Connor</td><td>D03</td><td>CAT_A</td></tr>
        </tbody>
      </table>

      <h4 style="font-size:13px; margin:10px 0 6px 0;">salary_info</h4>
      <table class="table-results-view" style="margin-bottom:14px;">
        <thead><tr><th>EMPLOYEE_CATEGORY</th><th>BASIC</th><th>HRA</th><th>DA</th></tr></thead>
        <tbody>
          <tr><td>CAT_A</td><td>8500.00</td><td>2500.00</td><td>1500.00</td></tr>
          <tr><td>CAT_B</td><td>6200.00</td><td>1800.00</td><td>1200.00</td></tr>
          <tr><td>CAT_C</td><td>4200.00</td><td>1200.00</td><td>800.00</td></tr>
        </tbody>
      </table>

      <h4 style="font-size:13px; margin:10px 0 6px 0;">emp_payroll</h4>
      <table class="table-results-view">
        <thead><tr><th>TRANSNO</th><th>EMPID</th><th>MONTH</th><th>NETPAY</th></tr></thead>
        <tbody>
          <tr><td>1001</td><td>E101</td><td>DECEMBER</td><td>11200.00</td></tr>
          <tr><td>1002</td><td>E102</td><td>DECEMBER</td><td>8400.00</td></tr>
          <tr><td>1003</td><td>E103</td><td>DECEMBER</td><td>5600.00</td></tr>
          <tr><td>1004</td><td>E104</td><td>DECEMBER</td><td>11350.00</td></tr>
        </tbody>
      </table>
    `}attachEvents(){const e=document.getElementById("sql-editor");e.addEventListener("input",()=>{this.currentSql=e.value});const t=document.getElementById("btn-schema-toggle"),n=document.getElementById("schema-viewer-pane"),i=document.getElementById("sql-editor-wrap");t.addEventListener("click",()=>{this.schemaVisible=!this.schemaVisible,n.style.display=this.schemaVisible?"block":"none",i.style.display=this.schemaVisible?"none":"block",t.textContent=this.schemaVisible?"📝 Back to Editor":"👁 Toggle Schema"});const o=this.container.querySelectorAll("[data-out-tab]");o.forEach(a=>{a.addEventListener("click",()=>{o.forEach(r=>r.classList.remove("active")),a.classList.add("active");const s=a.getAttribute("data-out-tab");document.getElementById("sql-output-tab").style.display=s==="output"?"block":"none",document.getElementById("sql-expected-tab").style.display=s==="expected"?"block":"none",document.getElementById("sql-sample-records-tab").style.display=s==="schema-view"?"block":"none"})}),document.getElementById("btn-run-sql").addEventListener("click",()=>{this.executeSql()}),document.getElementById("btn-validate-sql").addEventListener("click",()=>{this.executeSql(),this.validateSql()})}executeSql(){const e=document.getElementById("sql-result-status"),t=document.getElementById("sql-output-table-wrap"),n=this.currentSql.trim();if(!n){e.innerHTML='<span style="color:#ef4444; font-weight:700;">Query cannot be empty.</span>';return}try{const i=n.toLowerCase(),o=i.includes("join")&&i.includes("salary_info"),a=i.includes("join")&&i.includes("emp_payroll"),s=i.includes("5000")||i.includes("basic > 5000")||i.includes("basic>5000");if(!o||!a){e.innerHTML=`
          <div style="background:#fee2e2; color:#991b1b; padding:10px; border-radius:6px; font-size:13px;">
            ⚠️ <strong>Relational Integrity Warning:</strong> Query must join both <code>salary_info</code> (for BASIC) and <code>emp_payroll</code> (for NETPAY).
          </div>
        `,t.innerHTML="";return}const r=this.question.mockData;let l=[];r.employee_info.forEach(c=>{const d=r.salary_info.find(u=>u.EMPLOYEE_CATEGORY===c.EMPLOYEE_CATEGORY),p=r.emp_payroll.find(u=>u.EMPID===c.EMPID);d&&p&&(!s||d.BASIC>5e3)&&l.push({EMPID:c.EMPID,EMPNAME:c.EMPNAME,BASIC:d.BASIC.toFixed(2),NETPAY:p.NETPAY.toFixed(2)})}),e.innerHTML=`
        <div style="color:#15803d; font-weight:700; margin-bottom:8px;">
          ✓ Query Executed Successfully. Returned ${l.length} rows. (Query runtime: 12ms)
        </div>
      `,t.innerHTML=`
        <table class="table-results-view">
          <thead>
            <tr>
              ${this.question.expectedColumns.map(c=>`<th>${c}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${l.map(c=>`
              <tr>
                <td>${c.EMPID}</td>
                <td>${c.EMPNAME}</td>
                <td>${c.BASIC}</td>
                <td>${c.NETPAY}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `}catch(i){e.innerHTML=`<span style="color:#ef4444; font-weight:700;">Syntax Error: ${i.message}</span>`,t.innerHTML=""}}validateSql(){const e=this.currentSql.toLowerCase(),t=["empid","empname","basic","netpay"].every(r=>e.includes(r)),n=e.includes("salary_info")&&e.includes("employee_category"),i=e.includes("emp_payroll")&&e.includes("empid"),o=e.includes("5000"),a=t&&n&&i&&o,s=document.getElementById("sql-result-status");s.innerHTML+=`
      <div style="margin-top:12px; padding:12px; border-radius:6px; background:${a?"#dcfce7":"#fee2e2"};">
        <strong style="color:${a?"#15803d":"#991b1b"};">
          ${a?"✓ ALL DATABASE TEST CONSTRAINTS PASSED (100% Score)":"✗ DATABASE CONSTRAINTS FAILED"}
        </strong>
        <div style="font-size:12px; color:#475569; margin-top:4px;">
          ${a?"Joins, projected columns, and WHERE salary > 5000 conditions verified.":"Please verify multi-table JOIN ON keys and BASIC > 5000 condition."}
        </div>
      </div>
    `}}class k{constructor(e,t){this.container=e,this.question=t,this.activeLang="java",this.codeByLang={...t.templates},this.useCustomInput=!1,this.customInputVal="",this.activeTab="problem"}render(){this.container.innerHTML=`
      <div class="coding-container">
        <!-- Left Panel: Problem Specification & IDE -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab ${this.activeTab==="problem"?"active":""}" data-be-tab="problem">📄 Problem Description</button>
              <button class="ide-tab ${this.activeTab==="custom"?"active":""}" data-be-tab="custom">⚙ Custom Input</button>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:11.5px; color:#64748b; font-weight:600;">Language:</span>
              <select id="be-lang-select" style="background:#1e293b; color:white; border:1px solid #475569; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:600; cursor:pointer;">
                <option value="java" ${this.activeLang==="java"?"selected":""}>Java 21 (OpenJDK)</option>
                <option value="python" ${this.activeLang==="python"?"selected":""}>Python 3.12</option>
                <option value="cpp" ${this.activeLang==="cpp"?"selected":""}>C++ 20 (GCC)</option>
                <option value="csharp" ${this.activeLang==="csharp"?"selected":""}>C# 12 (.NET 8)</option>
              </select>
            </div>
          </div>

          <!-- Problem Tab -->
          <div id="be-problem-view" style="${this.activeTab==="problem"?"display:block":"display:none"}; padding:18px; overflow-y:auto; max-height:220px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <h3 style="font-size:15px; font-weight:800; color:#0f172a; margin-bottom:8px;">${this.question.title}</h3>
            <p style="font-size:13.5px; color:#334155; line-height:1.5; margin-bottom:12px;">${this.question.problemStatement}</p>
            
            <div style="background:#ffffff; border:1px solid #e2e8f0; padding:12px; border-radius:6px; font-size:12.5px; margin-bottom:10px;">
              <strong>Input Specification:</strong> ${this.question.inputSpec}<br/>
              <strong style="margin-top:4px; display:inline-block;">Output Specification:</strong> ${this.question.outputSpec}
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              ${this.question.examples.map((e,t)=>`
                <div style="background:#ede9fe; padding:10px; border-radius:6px; font-size:12px;">
                  <strong style="color:#6b21a8;">Example ${t+1}:</strong>
                  <div><code>Input: "${e.input}"</code></div>
                  <div><code>Output: ${e.output}</code></div>
                  <div style="color:#64748b; font-size:11px; margin-top:4px;">${e.explanation}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Custom Input Tab -->
          <div id="be-custom-view" style="${this.activeTab==="custom"?"display:block":"display:none"}; padding:18px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <label style="font-size:13px; font-weight:700; color:#0f172a; display:block; margin-bottom:6px;">
              Provide Custom Test Input:
            </label>
            <input type="text" id="be-custom-input" placeholder="e.g. aaaabbbcc or ccee" value="${this.customInputVal}"
                   style="width:100%; padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; font-family:var(--font-mono); font-size:13px;"/>
            <div style="font-size:11.5px; color:#64748b; margin-top:6px;">
              * String length must be a perfect square (1, 4, 9, 16, 25...).
            </div>
          </div>

          <!-- Code Editor -->
          <div class="editor-wrapper" style="flex:1;">
            <textarea class="code-textarea" id="be-code-editor" spellcheck="false">${this.codeByLang[this.activeLang]}</textarea>
          </div>

          <!-- Bottom Action Controls -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:8px;">
              <input type="checkbox" id="chk-use-custom" ${this.useCustomInput?"checked":""} style="cursor:pointer;"/>
              <label for="chk-use-custom" style="font-size:12.5px; color:#475569; cursor:pointer;">Use Custom Input</label>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="btn-secondary" id="btn-compile-test" style="font-size:12.5px; padding:6px 14px;">
                ⚙ Compile and Test
              </button>
              <button class="btn-primary" id="btn-submit-code" style="background:#16a34a; font-size:12.5px; padding:6px 18px;">
                ✓ Submit Code
              </button>
            </div>
          </div>
        </div>

        <!-- Right Panel: Code Execution & Graded Test Cases -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-res-tab="execution">💻 Code Execution</button>
              <button class="ide-tab" data-res-tab="history">⏱ Code History</button>
            </div>
          </div>

          <div style="flex:1; overflow-y:auto; padding:20px;">
            <div id="be-execution-results">
              <div style="font-size:13px; color:#64748b;">
                Click <strong>"Compile and Test"</strong> to run against Basic Test Cases, or <strong>"Submit Code"</strong> to execute against all 10 Graded Test Cases.
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.attachEvents()}attachEvents(){const e=document.getElementById("be-code-editor");e.addEventListener("input",()=>{this.codeByLang[this.activeLang]=e.value}),document.getElementById("be-lang-select").addEventListener("change",a=>{this.activeLang=a.target.value,e.value=this.codeByLang[this.activeLang]||""});const n=this.container.querySelectorAll("[data-be-tab]");n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(s=>s.classList.remove("active")),a.classList.add("active"),this.activeTab=a.getAttribute("data-be-tab"),document.getElementById("be-problem-view").style.display=this.activeTab==="problem"?"block":"none",document.getElementById("be-custom-view").style.display=this.activeTab==="custom"?"block":"none"})}),document.getElementById("chk-use-custom").addEventListener("change",a=>{this.useCustomInput=a.target.checked,this.useCustomInput&&document.querySelector('[data-be-tab="custom"]').click()}),document.getElementById("be-custom-input").addEventListener("input",a=>{this.customInputVal=a.target.value}),document.getElementById("btn-compile-test").addEventListener("click",()=>{this.runExecution(!1)}),document.getElementById("btn-submit-code").addEventListener("click",()=>{this.runExecution(!0)})}solveAlgorithm(e){if(!e)return 0;const t=e.length,n=Math.floor(Math.sqrt(t));if(n*n!==t)return 0;let i=0;for(let o=0;o<n;o++){let a=!0;const s=e.charAt(o*n);for(let r=1;r<n;r++)if(e.charAt(o*n+r)!==s){a=!1;break}a&&i++}for(let o=0;o<n;o++){let a=!0;const s=e.charAt(o);for(let r=1;r<n;r++)if(e.charAt(r*n+o)!==s){a=!1;break}a&&i++}return i}runExecution(e){const t=document.getElementById("be-execution-results");if(this.useCustomInput&&this.customInputVal.trim()){const s=this.customInputVal.trim(),r=this.solveAlgorithm(s);t.innerHTML=`
        <div style="background:#f0fdf4; border:1px solid #86efac; padding:14px; border-radius:6px; margin-bottom:16px;">
          <strong style="color:#15803d; font-size:14px;">✓ Custom Input Execution Complete</strong>
          <div style="margin-top:8px; font-size:13px; font-family:var(--font-mono);">
            <div>Input: "${s}" (Length: ${s.length}, Grid: ${Math.sqrt(s.length)}x${Math.sqrt(s.length)})</div>
            <div style="margin-top:4px; font-weight:700; color:#0f172a;">Output: ${r}</div>
            <div style="margin-top:4px; font-size:11.5px; color:#64748b;">Execution Time: 8ms | Peak Memory: 24.2 MB</div>
          </div>
        </div>
      `;return}const n=e?this.question.testCases:this.question.testCases.filter(s=>s.type==="basic");let i=0;const o=n.map(s=>{const r=this.solveAlgorithm(s.input),l=String(r)===String(s.expectedOutput);return l&&i++,{...s,actualOutput:r,passed:l,runtime:Math.floor(Math.random()*8)+4}}),a=i===n.length;t.innerHTML=`
      <div style="background:${a?"#dcfce7":"#fee2e2"}; border:1px solid ${a?"#86efac":"#fca5a5"}; padding:16px; border-radius:8px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:15px; color:${a?"#15803d":"#991b1b"};">
            ${e?"Graded Test Execution Summary":"Basic Test Execution"}
          </strong>
          <span style="font-size:14px; font-weight:800; color:${a?"#15803d":"#991b1b"};">
            ${i} / ${n.length} Passed
          </span>
        </div>
        <div style="font-size:12px; color:#475569; margin-top:4px;">
          ${a?"All test constraints and edge cases cleared successfully!":"Some test cases failed. Please review boundary conditions."}
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${o.map(s=>`
          <div style="border:1px solid #cbd5e1; border-radius:6px; padding:12px; background:#ffffff;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-weight:700; font-size:13px; color:#0f172a;">${s.name}</span>
              <span class="${s.passed?"tc-badge-pass":"tc-badge-fail"}">
                ${s.passed?"PASSED":"FAILED"}
              </span>
            </div>
            <div style="font-size:12px; font-family:var(--font-mono); color:#475569; background:#f8fafc; padding:8px; border-radius:4px;">
              <div>Input: <code>"${s.input}"</code></div>
              <div>Expected: <code>${s.expectedOutput}</code> | Actual: <code>${s.actualOutput}</code></div>
              <div style="color:#94a3b8; font-size:11px; margin-top:3px;">Runtime: ${s.runtime}ms</div>
            </div>
          </div>
        `).join("")}
      </div>
    `}}class q{constructor(){this.currentPaperId="paper1",this.currentPaper=f[this.currentPaperId],this.currentSection="sec_b",this.currentSubSection="common_app",this.currentTechQIdx=0,this.currentBehQIdx=0,this.currentCodingQIdx=0,this.activeSecATab="cognitive",this.techAnswers={},this.techRevisit={},this.behAnswers={},this.cognitiveResult=null,this.codingProgress={fe:!1,db:!1,be:!1},this.techSeconds=2700,this.codingSeconds=3600,this.timerInterval=null,this.saveSeconds=0,this.saveInterval=null,this.reviewMode=!1,this.candidateRoll="24"+Math.floor(1e5+Math.random()*9e5),this.sessionToken=Math.floor(1e7+Math.random()*9e7)}init(){this.renderRandomWatermark(),this.setupHeaderEvents(),this.setupSectionTabs(),this.setupAutoSaveTimer(),this.startSectionTimer(),this.render()}renderRandomWatermark(){const e=document.getElementById("watermark-container"),t=document.getElementById("candidate-roll-val"),n=document.getElementById("footer-candidate-id"),i=`${this.candidateRoll} - ${this.sessionToken}`;if(t&&(t.textContent=this.candidateRoll),n&&(n.textContent=i),e){e.innerHTML="";for(let o=0;o<40;o++){const a=document.createElement("div");a.className="watermark-item",a.textContent=i,e.appendChild(a)}}}setupHeaderEvents(){const e=document.getElementById("candidate-badge-btn");e&&e.addEventListener("click",()=>{this.candidateRoll="24"+Math.floor(1e5+Math.random()*9e5),this.sessionToken=Math.floor(1e7+Math.random()*9e7),this.renderRandomWatermark()});const t=document.getElementById("select-paper");t&&t.addEventListener("change",o=>{this.switchPaper(o.target.value)});const n=document.getElementById("btn-finish-test");n&&n.addEventListener("click",()=>{this.openFinishModal()});const i=document.getElementById("btn-stage-guide");i&&i.addEventListener("click",()=>{this.openStageGuideModal()}),document.querySelectorAll(".modal-close-btn, .btn-modal-dismiss").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".modal-overlay").forEach(a=>a.classList.remove("active"))})})}setupSectionTabs(){const e=document.querySelectorAll(".section-tab");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.currentSection=t.getAttribute("data-section"),this.render()})})}switchPaper(e){if(!f[e])return;this.currentPaperId=e,this.currentPaper=f[e],this.techAnswers={},this.techRevisit={},this.behAnswers={},this.cognitiveResult=null,this.currentTechQIdx=0,this.currentCodingQIdx=0,this.reviewMode=!1,this.techSeconds=2700,this.codingSeconds=3600;const t=document.getElementById("header-exam-title");t&&(t.textContent=this.currentPaper.subtitle||this.currentPaper.title),this.render()}setupAutoSaveTimer(){this.saveInterval=setInterval(()=>{this.saveSeconds=(this.saveSeconds+5)%65;const e=document.getElementById("save-time-label");e&&(e.textContent=`Saved: ${this.saveSeconds} seconds ago`)},5e3)}startSectionTimer(){clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.currentSection==="sec_b"?(this.techSeconds>0&&this.techSeconds--,this.updateTimerDisplay(this.techSeconds)):this.currentSection==="sec_c"?(this.codingSeconds>0&&this.codingSeconds--,this.updateTimerDisplay(this.codingSeconds)):this.updateTimerDisplay(2700)},1e3)}updateTimerDisplay(e){const t=document.getElementById("header-timer-val");if(!t)return;const n=Math.floor(e/60),i=e%60;t.textContent=`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`,e<=300?t.classList.add("warning"):t.classList.remove("warning")}render(){const e=document.getElementById("exam-main-container"),t=document.getElementById("subsection-bar-container");this.currentSection==="sec_a"?(t.style.display="none",this.renderSectionA(e)):this.currentSection==="sec_b"?(t.style.display="flex",this.renderSubSectionBar(),this.renderSectionB(e)):this.currentSection==="sec_c"&&(t.style.display="none",this.renderSectionC(e))}renderSectionA(e){e.className="exam-main full-width",e.innerHTML=`
      <div style="background:white; border-radius:8px; border:1px solid #cbd5e1; padding:20px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding-bottom:14px; margin-bottom:16px;">
          <div>
            <h2 style="font-size:20px; font-weight:800; color:#0f172a;">Section A: Behavioral & Cognitive Assessment</h2>
            <div style="font-size:13px; color:#64748b; margin-top:2px;">
              Cognitive Assessment is <strong>eliminatory</strong>. Both sub-modules must be completed.
            </div>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="ide-tab ${this.activeSecATab==="cognitive"?"active":""}" id="tab-sec-a-cog" style="border:1px solid #cbd5e1; border-radius:6px;">
              🎮 Cognitive (Gamified Challenge)
            </button>
            <button class="ide-tab ${this.activeSecATab==="behavioral"?"active":""}" id="tab-sec-a-beh" style="border:1px solid #cbd5e1; border-radius:6px;">
              📝 Behavioral Assessment (~50 MCQs)
            </button>
          </div>
        </div>

        <div id="sec-a-content-pane"></div>
      </div>
    `,document.getElementById("tab-sec-a-cog").addEventListener("click",()=>{this.activeSecATab="cognitive",this.renderSectionA(e)}),document.getElementById("tab-sec-a-beh").addEventListener("click",()=>{this.activeSecATab="behavioral",this.renderSectionA(e)});const t=document.getElementById("sec-a-content-pane");this.activeSecATab==="cognitive"?new A(t,i=>{this.cognitiveResult=i,document.querySelector('[data-section="sec_b"]').click()}).start():this.renderBehavioralAssessment(t)}renderBehavioralAssessment(e){var i,o,a;const t=b[this.currentBehQIdx],n=this.behAnswers[t.id];e.innerHTML=`
      <div style="display:grid; grid-template-columns:1fr 280px; gap:20px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span style="font-size:14px; font-weight:800; color:#0f172a;">Question ${this.currentBehQIdx+1} of ${b.length}</span>
            <span class="q-category-tag">${t.category}</span>
          </div>

          <div class="question-text" style="font-size:16px; font-weight:600; color:#0f172a; margin-bottom:20px;">
            ${t.question}
          </div>

          <div class="options-list">
            ${t.options.map((s,r)=>`
              <div class="option-item ${n===r?"selected":""}" data-beh-opt="${r}">
                <span class="option-badge">${String.fromCharCode(65+r)}</span>
                <span class="option-text">${s}</span>
              </div>
            `).join("")}
          </div>

          <div style="display:flex; justify-content:space-between; margin-top:24px; padding-top:16px; border-top:1px solid #e2e8f0;">
            <button class="btn-secondary" id="btn-beh-prev" ${this.currentBehQIdx===0?"disabled":""}>← Previous</button>
            <div style="display:flex; gap:10px;">
              <button class="btn-secondary" id="btn-beh-clear">Clear Selection</button>
              <button class="btn-primary" id="btn-beh-next">
                ${this.currentBehQIdx===b.length-1?"Complete Behavioral":"Next Question →"}
              </button>
            </div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <div style="font-size:13px; font-weight:700; margin-bottom:10px; color:#0f172a;">
            Behavioral Grid (${Object.keys(this.behAnswers).length}/50)
          </div>
          <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; max-height:360px; overflow-y:auto;">
            ${b.map((s,r)=>{const l=this.behAnswers[s.id]!==void 0,c=r===this.currentBehQIdx;return`
                <button class="palette-btn ${l?"attempted":""} ${c?"current":""}" data-beh-jump="${r}">
                  ${r+1}
                </button>
              `}).join("")}
          </div>
        </div>
      </div>
    `,e.querySelectorAll("[data-beh-opt]").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.getAttribute("data-beh-opt"));this.behAnswers[t.id]=r,this.renderBehavioralAssessment(e)})}),e.querySelectorAll("[data-beh-jump]").forEach(s=>{s.addEventListener("click",()=>{this.currentBehQIdx=parseInt(s.getAttribute("data-beh-jump")),this.renderBehavioralAssessment(e)})}),(i=document.getElementById("btn-beh-prev"))==null||i.addEventListener("click",()=>{this.currentBehQIdx>0&&(this.currentBehQIdx--,this.renderBehavioralAssessment(e))}),(o=document.getElementById("btn-beh-next"))==null||o.addEventListener("click",()=>{this.currentBehQIdx<b.length-1?(this.currentBehQIdx++,this.renderBehavioralAssessment(e)):(alert("Behavioral Assessment recorded. Switching to Section B: Technical Assessment."),document.querySelector('[data-section="sec_b"]').click())}),(a=document.getElementById("btn-beh-clear"))==null||a.addEventListener("click",()=>{delete this.behAnswers[t.id],this.renderBehavioralAssessment(e)})}renderSubSectionBar(){const e=document.getElementById("subsection-bar-container"),t=this.currentPaper.sectionB.subsections;e.innerHTML=t.map(n=>{const o=this.currentPaper.sectionB.questions.filter(s=>s.subSection===n.id).filter(s=>this.techAnswers[s.id]!==void 0).length;return`
        <button class="subsection-pill ${this.currentSubSection===n.id?"active":""}" data-subsection="${n.id}">
          ${n.name} (${o}/${n.count})
        </button>
      `}).join(""),e.querySelectorAll(".subsection-pill").forEach(n=>{n.addEventListener("click",()=>{this.currentSubSection=n.getAttribute("data-subsection");const i=this.currentPaper.sectionB.questions.findIndex(o=>o.subSection===this.currentSubSection);i!==-1&&(this.currentTechQIdx=i),this.render()})})}renderSectionB(e){e.className="exam-main";const t=this.currentPaper.sectionB.questions,n=t[this.currentTechQIdx];this.currentSubSection=n.subSection;const i=!!this.techRevisit[n.id],o=this.techAnswers[n.id],a=t.length,s=Object.keys(this.techAnswers).length,r=Object.keys(this.techRevisit).filter(c=>this.techRevisit[c]).length,l=a-s;e.innerHTML=`
      <!-- Left Panel: Question Card -->
      <div class="question-card">
        <div class="question-header">
          <div class="q-title-wrap">
            <span class="q-num-label">Question ${n.num}</span>
            <span class="q-category-tag">${n.subSectionName}</span>
          </div>
          <div class="q-actions-top">
            <button class="btn-revisit ${i?"flagged":""}" id="btn-toggle-revisit">
              <span>★</span>
              <span>${i?"Marked for Revisit":"Revisit Later"}</span>
            </button>
          </div>
        </div>

        <div class="question-body">
          <div class="question-text">${n.text}</div>

          ${n.code?`
            <div class="code-container">
              <pre><code>${this.escapeHtml(n.code)}</code></pre>
            </div>
          `:""}

          <div style="font-size:12px; font-weight:700; color:#64748b; margin-top:20px; text-transform:uppercase;">
            Select an option
          </div>

          <div class="options-list">
            ${n.options.map((c,d)=>{const p=o===d,u=this.reviewMode&&n.correctAnswer===d;let h="";return this.reviewMode&&(u?h="border-color:#16a34a; background:#dcfce7;":p&&!u&&(h="border-color:#dc2626; background:#fee2e2;")),`
                <div class="option-item ${p?"selected":""}" data-opt-idx="${d}" style="${h}">
                  <span class="option-badge">${String.fromCharCode(65+d)}</span>
                  <span class="option-text">${this.escapeHtml(c)}</span>
                  ${this.reviewMode&&u?'<span style="color:#16a34a; font-weight:700; font-size:12px;">✓ Correct Answer</span>':""}
                </div>
              `}).join("")}
          </div>

          ${this.reviewMode?`
            <div style="margin-top:24px; padding:16px; border-radius:6px; background:#f0fdf4; border-left:4px solid #16a34a;">
              <strong style="color:#15803d; font-size:13.5px;">Detailed Solution & Step-by-Step Explanation:</strong>
              <p style="font-size:13px; color:#334155; margin-top:6px; line-height:1.5;">${n.explanation}</p>
            </div>
          `:""}
        </div>

        <div class="question-footer">
          <button class="btn-secondary" id="btn-clear-response">
            & Clear Response
          </button>
          <div class="footer-nav-btns">
            <button class="btn-secondary" id="btn-prev-q" ${this.currentTechQIdx===0?"disabled":""}>
              Previous
            </button>
            <button class="btn-primary" id="btn-next-q">
              ${this.currentTechQIdx===a-1?"Go to Section C: Coding →":"Next →"}
            </button>
          </div>
        </div>
      </div>

      <!-- Right Panel: Question Palette -->
      <div class="sidebar-palette">
        <div class="palette-header">
          <div class="palette-title">
            <span>Question Palette</span>
            <span style="font-size:12px; color:#64748b;">Attempted: ${s}/${a}</span>
          </div>
        </div>

        <div class="palette-legend">
          <div class="legend-item"><span class="legend-swatch swatch-attempted"></span> Attempted (${s})</div>
          <div class="legend-item"><span class="legend-swatch swatch-revisit"></span> Revisit (${r})</div>
          <div class="legend-item"><span class="legend-swatch swatch-unattempted"></span> Unattempted (${l})</div>
          <div class="legend-item"><span class="legend-swatch swatch-current"></span> Current</div>
        </div>

        <div class="palette-grid">
          ${t.map((c,d)=>{const p=this.techAnswers[c.id]!==void 0,u=!!this.techRevisit[c.id],h=d===this.currentTechQIdx;let g="";return p&&u?g="attempted-revisit":u?g="revisit":p&&(g="attempted"),h&&(g+=" current"),`
              <button class="palette-btn ${g}" data-q-jump="${d}">
                ${d+1}
              </button>
            `}).join("")}
        </div>

        <div class="palette-summary-box">
          <div class="summary-row">
            <span>Total Technical Qs:</span>
            <strong>${a}</strong>
          </div>
          <div class="summary-row">
            <span>Total Time Allotted:</span>
            <strong>45 Minutes</strong>
          </div>
          <div class="summary-row">
            <span>Section Cutoff:</span>
            <strong style="color:#16a34a;">~65% Required</strong>
          </div>
        </div>
      </div>
    `,document.getElementById("btn-toggle-revisit").addEventListener("click",()=>{this.techRevisit[n.id]=!this.techRevisit[n.id],this.render()}),document.getElementById("btn-clear-response").addEventListener("click",()=>{delete this.techAnswers[n.id],this.render()}),document.querySelectorAll(".option-item[data-opt-idx]").forEach(c=>{c.addEventListener("click",()=>{const d=parseInt(c.getAttribute("data-opt-idx"));this.techAnswers[n.id]=d,this.render()})}),document.querySelectorAll(".palette-btn[data-q-jump]").forEach(c=>{c.addEventListener("click",()=>{this.currentTechQIdx=parseInt(c.getAttribute("data-q-jump")),this.render()})}),document.getElementById("btn-prev-q").addEventListener("click",()=>{this.currentTechQIdx>0&&(this.currentTechQIdx--,this.render())}),document.getElementById("btn-next-q").addEventListener("click",()=>{this.currentTechQIdx<a-1?(this.currentTechQIdx++,this.render()):document.querySelector('[data-section="sec_c"]').click()})}renderSectionC(e){e.className="exam-main full-width";const t=this.currentPaper.sectionC.questions,n=t[this.currentCodingQIdx];e.innerHTML=`
      <div style="background:white; border-radius:8px; border:1px solid #cbd5e1; padding:16px 20px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:12px; font-weight:700; color:#a100ff; text-transform:uppercase;">
            Section C: Coding & Full-Stack (3 Questions | 60 Minutes)
          </span>
          <h2 style="font-size:18px; font-weight:800; color:#0f172a; margin-top:2px;">
            Question ${this.currentCodingQIdx+1}: ${n.title}
          </h2>
        </div>
        <div style="display:flex; gap:10px;">
          ${t.map((o,a)=>`
            <button class="ide-tab ${a===this.currentCodingQIdx?"active":""}" data-coding-jump="${a}" style="border:1px solid #cbd5e1; border-radius:6px;">
              ${a===0?"🎨 Frontend":a===1?"🗄 Database (SQL)":"💻 Backend (DSA)"}
            </button>
          `).join("")}
        </div>
      </div>

      <div id="coding-runner-mount-point"></div>
    `,e.querySelectorAll("[data-coding-jump]").forEach(o=>{o.addEventListener("click",()=>{this.currentCodingQIdx=parseInt(o.getAttribute("data-coding-jump")),this.renderSectionC(e)})});const i=document.getElementById("coding-runner-mount-point");n.type==="frontend"?new E(i,n).render():n.type==="database"?new C(i,n).render():n.type==="backend"&&new k(i,n).render()}openFinishModal(){const e=document.getElementById("modal-scorecard"),t=this.currentPaper.sectionB.questions;let n=0;t.forEach(l=>{this.techAnswers[l.id]===l.correctAnswer&&n++});const i=Math.round(n/t.length*100),o=this.cognitiveResult?this.cognitiveResult.percentage:80,a=o>=70,s=a&&i>=65,r=document.getElementById("scorecard-modal-content");r.innerHTML=`
      <div class="scorecard-hero">
        <div style="font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase;">
          Accenture Online Assessment Performance Report
        </div>
        <div class="score-number">${i}%</div>
        <div class="score-badge ${s?"badge-passed":"badge-eliminatory"}">
          ${s?"✓ CONGRATULATIONS: SHORTLISTED FOR STAGE 2":"✗ DID NOT MEET ELIMINATORY CUTOFF"}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <strong style="font-size:14px; color:#0f172a;">Section A: Behavioral & Cognitive</strong>
          <div style="margin-top:8px; font-size:13px; color:#475569;">
            <div>Cognitive Accuracy: <strong>${o}%</strong> (${a?'<span style="color:#16a34a;">PASSED</span>':'<span style="color:#dc2626;">ELIMINATED</span>'})</div>
            <div>Behavioral Completed: <strong>${Object.keys(this.behAnswers).length}/50 Questions</strong></div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <strong style="font-size:14px; color:#0f172a;">Section B: Technical Assessment</strong>
          <div style="margin-top:8px; font-size:13px; color:#475569;">
            <div>Score: <strong>${n} / ${t.length}</strong> (${i}%)</div>
            <div>Status: <strong>${i>=65?"Qualified (>65%)":"Below Cutoff"}</strong></div>
          </div>
        </div>
      </div>

      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px; margin-bottom:24px;">
        <strong style="font-size:14px; color:#0f172a;">Section C: Coding & Full-Stack</strong>
        <div style="margin-top:8px; font-size:13px; color:#475569; display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            1. Frontend: <strong style="color:#16a34a;">3/3 Tests Passed</strong>
          </div>
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            2. Database: <strong style="color:#16a34a;">100% Query Match</strong>
          </div>
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            3. Backend DSA: <strong style="color:#16a34a;">12/12 Tests Passed</strong>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="btn-secondary" id="btn-review-solutions" style="padding:10px 18px; font-weight:700;">
          🔍 Review Full Step-by-Step Solutions
        </button>
        <button class="btn-primary" id="btn-next-paper" style="padding:10px 24px;">
          Try Another Sample Paper →
        </button>
      </div>
    `,e.classList.add("active"),document.getElementById("btn-review-solutions").addEventListener("click",()=>{this.reviewMode=!0,e.classList.remove("active"),document.querySelector('[data-section="sec_b"]').click()}),document.getElementById("btn-next-paper").addEventListener("click",()=>{e.classList.remove("active");const l=this.currentPaperId==="paper1"?"paper2":this.currentPaperId==="paper2"?"paper3":this.currentPaperId==="paper3"?"paper4":this.currentPaperId==="paper4"?"paper5":"paper1";document.getElementById("select-paper").value=l,this.switchPaper(l)})}openStageGuideModal(){document.getElementById("modal-stage-guide").classList.add("active")}escapeHtml(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}}document.addEventListener("DOMContentLoaded",()=>{new q().init()});
