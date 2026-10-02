export const actualSectionB = [
  {
    "domain": "Common Application / Technical",
    "question": "Consider you are a software developer working on a new application for a large corporation. Your application is expected to run on a variety of different computers with varying hardware specifications and operating systems. You have to ensure compatibility and smooth operation on all of these different systems. Which property of an operating system is most important for you to consider?",
    "options": [
      "User interface",
      "Security",
      "Device management",
      "Resource allocation"
    ],
    "answer": "Resource allocation",
    "id": "actual_b_sec_1"
  },
  {
    "domain": "Common Application / Technical",
    "question": "Your marketing lead requests a list of employees from the South region for an internal campaign. Which formula allows you to generate this list dynamically from the dataset?",
    "options": [
      "=FILTER(B2:B9, H2:H9=\"South\")",
      "=XLOOKUP(\"South\", H2:H9, B2:B9)",
      "=INDEX(B2:B9, MATCH(\"South\", H2:H9, 0))"
    ],
    "answer": "=FILTER(B2:B9, H2:H9=\"South\")",
    "id": "actual_b_sec_2"
  },
  {
    "domain": "Common Application / Technical",
    "question": "In MS Word, John wants to quickly fix inconsistent headings in a long document. What should he update?",
    "options": [
      "Font",
      "Find",
      "Table of Contents",
      "Styles"
    ],
    "answer": "Styles",
    "id": "actual_b_sec_3"
  },
  {
    "domain": "Common Application / Technical",
    "question": "Jane wants to create a slide that illustrates a progression over time using icons, text, and lines. She aims for it to appear visually dynamic without manually animating each step. Which MS PowerPoint feature can help speed up this process?",
    "options": [
      "Use Slide Zoom feature to create dynamic slides quickly.",
      "Use SmartArt Process layout and apply \"By Paragraph\" animation.",
      "Apply the Morph transition across duplicated slides for smooth effect.",
      "Create a custom layout with background images and animation triggers."
    ],
    "answer": "Apply the Morph transition across duplicated slides for smooth effect.",
    "id": "actual_b_sec_4"
  },
  {
    "domain": "Common Application / Technical",
    "question": "Assume a developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls in a UNIX-like OS fulfill this requirement?",
    "options": [
      "create() and run()",
      "fork() and exec()",
      "fork() and wait()",
      "spawn() and terminate()"
    ],
    "answer": "fork() and exec()",
    "id": "actual_b_sec_5"
  },
  {
    "domain": "Common Application / Technical",
    "question": "Suppose you want to implement a bus where the input-output devices are attached to the computer by wires. In this the data transfer on a bus is carried out by electronic processes. Then the host controller sends messages to the device controller, and the device controller performs the operations. Which device will you choose if these device controllers consist of a built-in cache so that data transfer occurs faster?",
    "options": [
      "Enhanced interior drive electronics",
      "Enhanced integrated drive electronics",
      "Enhanced interior driver electronics",
      "Enhanced integrated hard driver"
    ],
    "answer": "Enhanced integrated drive electronics",
    "id": "actual_b_sec_6"
  },
  {
    "domain": "Common Application / Technical",
    "question": "Assume that you are a computer architect designing a new computer system. You have to decide how the data will be transferred between registers in the CPU. Which among the following options is the correct way of performing register transfers as per the above scenario?",
    "options": [
      "Register transfer is the process of transferring data between registers in a computer system.",
      "Register transfer is a technique used to transfer data between different computer systems.",
      "Register transfer is a type of bus used in computer systems.",
      "Register transfer is a type of instruction used in assembly language programming."
    ],
    "answer": "Register transfer is the process of transferring data between registers in a computer system.",
    "id": "actual_b_sec_7"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "Which SQL query effectively retrieves all the details of those customers who are located in New York from the table?",
    "options": [
      "SELECT * FROM customers WHERE city = 'New York';",
      "SELECT * FROM TABLE customers WHERE city = 'NY';",
      "SELECT * FROM customers WHERE city LIKE 'New York%';",
      "SELECT * FROM customers WHERE city = 'NYC';"
    ],
    "answer": "SELECT * FROM customers WHERE city = 'New York';",
    "id": "actual_b_sec_8"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "Assume that you want to fetch student names and mark records. In this case, you also want to display the student's details even if the marks record is absent. Which SQL query can be used to complete the desired task?",
    "options": [
      "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;",
      "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN GROUP BY StudentMark M IN E.StudentId = M.StudentId;"
    ],
    "answer": "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;",
    "id": "actual_b_sec_9"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "Which of the given options (as values for s) could possibly print the output as \"Valid\" in the following pseudocode: if s matches \"[a-zA-Z0-9]{6}\"?",
    "options": [
      "arun32",
      "kkvarun32",
      "arun$2",
      "arun@2"
    ],
    "answer": "arun32",
    "id": "actual_b_sec_10"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code?\nInteger arr[4] = {1, 2, 3, 4}\narr[1]=(arr[3]&3)+arr[0]\nif((1&arr[0])<arr[2])\n  arr[1]=(8&5)+arr[1]\nEnd if\nPrint arr[1]+arr[2]",
    "options": [
      "20",
      "13",
      "-12",
      "4"
    ],
    "answer": "4",
    "id": "actual_b_sec_11"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code?\nInteger p,q,r\nSet p=5, q=2, r=10\nfor(each from 3 to 5)\n  q=4^q\nEnd for\np=12+q\nfor(each from 4 to 7)\n  q=(r+p)+r\nEnd for\nPrint p+q",
    "options": [
      "70",
      "55",
      "41",
      "50"
    ],
    "answer": "50",
    "id": "actual_b_sec_12"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code?\nSet p=4, q=3, r=7\nif((q^p^9)<(8+r+q))\n  r=(7^7)+q\n  q=(q+r)+p\nEnd if\nr=q+p\nPrint p+q+r",
    "options": [
      "24",
      "29",
      "28",
      "34"
    ],
    "answer": "28",
    "id": "actual_b_sec_13"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the depicted pseudo code?\nSet b=5, c=8\nfor each from 3 to 4\n  c=(b+7)-c\n  b=(b&c)+b\nEnd for\nPrint b+c",
    "options": [
      "78",
      "69",
      "55",
      "65"
    ],
    "answer": "65",
    "id": "actual_b_sec_14"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code?\nSet pp=2, qq=3, rr=7\nrr=(rr+qq)+qq\nif((2<rr) | (rr&4)<qq)\n  qq=4+rr\n  if((qq&rr&pp)<(7+pp-qq))\n    pp=(pp&1)+rr\n  End if\nEnd if\nPrint pp+qq+rr",
    "options": [
      "32",
      "36",
      "29",
      "40"
    ],
    "answer": "32",
    "id": "actual_b_sec_15"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code?\nSet a=3, b=8, c=6\nc=a+c\nif((c+a)<(b-c))\n  b=(18^c)+c\nElse\n  b=(c+c)+c\n  if((7&a&b)<(a&b&7))\n    c=(b+c)+c\n  End if\nEnd if\nPrint a+b+c",
    "options": [
      "39",
      "40",
      "37",
      "51"
    ],
    "answer": "39",
    "id": "actual_b_sec_16"
  },
  {
    "domain": "SQL & Pseudocode",
    "question": "What will be the output of the following pseudo code for a=1, b=2, c=10?\nif((a+b)+(b+c)>(a+b+c))\n  if(a>b)\n    b=b+c\n    if((c+a+b)<(a+b+c))\n      c=(b+c)+c\n    End if\n  End if\nEnd if\nPrint a+b+c",
    "options": [
      "9",
      "15",
      "13",
      "19"
    ],
    "answer": "13",
    "id": "actual_b_sec_17"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that a developer is tasked with configuring a high-security Wi-Fi environment for a sensitive government project using Android devices. He/she must implement a solution that leverages both WPA3-Enterprise security and the highest available encryption settings to ensure compliance with stringent security requirements. Refer to the given code snippet used to configure wpa_supplicant: 1 CONFIG_SAE=y, 2 CONFIG_SUITEB=y, 3 CONFIG_SUITEB192=y. In the given scenario, which is the incorrect configuration line that might potentially weaken the desired security level? Select the correct option from the given choices.",
    "options": [
      "CONFIG_SAE=y is unnecessary since WPA3-Enterprise does not require SAE",
      "CONFIG_SUITEB=y is required to enable basic Suite B cryptography",
      "CONFIG_SUITEB192=y enables the highest level of security, Suite B at 192-bit",
      "CONFIG_SUITEB=y is redundant when CONFIG_SUITEB192=y is also specified"
    ],
    "answer": "CONFIG_SAE=y is unnecessary since WPA3-Enterprise does not require SAE",
    "id": "actual_b_sec_18"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that a security engineer is setting up a secure IPSec connection using ESP with authentication. The system must ensure data confidentiality, integrity, and proper packet sequencing with minimal performance overhead. Which configuration best meets these requirements? Analyze the given choices and select the correct answer.",
    "options": [
      "Use AES encryption with SPI tracking, sequence numbering, and optional authentication in ESP.",
      "Implement Triple DES with AH only, handling packet sequencing manually.",
      "Apply DES encryption with AH and ESP, using SPI for tracking and padding for confidentiality.",
      "Use AES with ESP authentication, sequence numbering, and padding to ensure data integrity."
    ],
    "answer": "Use AES with ESP authentication, sequence numbering, and padding to ensure data integrity.",
    "id": "actual_b_sec_19"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that a company migrates its application to a cloud computing environment. The cloud provider handles infrastructure services, while the customer develops and deploys their application. How does the concept of 'shared responsibility' impact security management in this scenario? Select the correct answer from the given choices.",
    "options": [
      "The cloud provider handles all security measures.",
      "Security is managed by third-party auditors.",
      "Both the cloud provider and the customer share security responsibilities.",
      "The customer is solely responsible for security."
    ],
    "answer": "Both the cloud provider and the customer share security responsibilities.",
    "id": "actual_b_sec_20"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that a company's goal is to leverage both private and public clouds to optimize resource utilization and manage dynamic workloads effectively. To achieve this the company needs a strategy that ensures secure data handling seamless integration with existing systems, and cost efficiency. Which approach should the company implement to achieve optimal performance in its hybrid cloud environment? Analyze the given choices and select the correct answer.",
    "options": [
      "Utilize containerization for portability and efficient resource use across both private and public clouds.",
      "Adopt a multi-cloud strategy to distribute workloads across several public cloud providers for enhanced resilience and cost management.",
      "Implement a serverless architecture to dynamically allocate cloud resources based on real-time demand, reducing infrastructure management overhead.",
      "Rely solely on dedicated on-premises infrastructure for all critical operations while using the public cloud for non-sensitive tasks."
    ],
    "answer": "Implement a serverless architecture to dynamically allocate cloud resources based on real-time demand, reducing infrastructure management overhead.",
    "id": "actual_b_sec_21"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Consider that as part of the data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with the next generation storage solutions. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing? Select the correct answer form the given choices.",
    "options": [
      "By eliminating the need for server virtualization",
      "By minimizing financial and contractual commitments",
      "By ensuring a global-scale, reliable, and resilient storage solution",
      "By optimizing capacity for executing code and running instances"
    ],
    "answer": "By optimizing capacity for executing code and running instances",
    "id": "actual_b_sec_22"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Consider that a multinational corporation is migrating its sensitive data to the cloud for storage and processing. During the migration process, the IT team is concerned about maintaining data confidentiality and preventing unauthorized access. Which cloud storage security measure should the team prioritize to address these concerns? Select the correct option from the given choices.",
    "options": [
      "Implementing robust access controls",
      "Enforcing data encryption at rest",
      "Utilizing strong authentication mechanisms",
      "Regularly auditing access logs"
    ],
    "answer": "Enforcing data encryption at rest",
    "id": "actual_b_sec_23"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that a company is migrating its legacy data sources to a new cloud-based platform while maintaining operations without downtime. During the migration, they need to ensure that data from both the old and new systems can be accessed simultaneously for real-time reporting and analytics, with data being logically integrated without physical movement. Considering the requirements, which architectural layer would best handle the logical integration and seamless access to data from both environments, ensuring minimal disruption and secure data access? Analyze the given choices and select the correct answer.",
    "options": [
      "Connection layer using direct database access protocols",
      "Consumption layer utilizing middleware with abstracted APIs",
      "Abstraction layer that logically unifies disparate data sources.",
      "Data caching layer storing temporary data replicas"
    ],
    "answer": "Abstraction layer that logically unifies disparate data sources.",
    "id": "actual_b_sec_24"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that in a cloud based application where scalability is crucial, which cloud storage option allows for dynamic scaling without the need for manual intervention? Analyze the given choices and select the correct answer.",
    "options": [
      "Block Storage",
      "File Storage",
      "Object Storage",
      "Tape Storage"
    ],
    "answer": "Object Storage",
    "id": "actual_b_sec_25"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Hackers attempt to intercept and manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to eavesdrop or alter data without detection. What type of attack is this called?",
    "options": [
      "Packet Sniffing",
      "IP Spoofing",
      "Routing Table Poisoning",
      "DNS Spoofing"
    ],
    "answer": "Routing Table Poisoning",
    "id": "actual_b_sec_26"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "During a video call, consider that data packets are sent from one device to another across different networks. To ensure the data arrives correctly and in order, which layer of the OSI model is responsible for error checking and reliable delivery? Select the correct option from the given choices.",
    "options": [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Network Layer"
    ],
    "answer": "Transport Layer",
    "id": "actual_b_sec_27"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "A network engineer is inspecting a network connection that follows the OSI model. He/she is looking into a layer that has broken down the data to be sent into numbered segments. He/she finds that this layer identifies other peers using port numbers. Which layer is the engineer looking into?",
    "options": [
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
      "Network Layer"
    ],
    "answer": "Transport Layer",
    "id": "actual_b_sec_28"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Assume that an employee at a multinational organization is working from home due to some reason and needs to access the company's internal network to retrieve some files. Which type of Virtual Private Network (VPN) will be best suitable for this case? Select the correct answer from the given choices.",
    "options": [
      "Remote-access VPN",
      "Site-to-site VPN",
      "MPLS VPN",
      "PPTP VPN"
    ],
    "answer": "Remote-access VPN",
    "id": "actual_b_sec_29"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "Consider that an organization has two geographically separate offices, Office A and Office B, and needs to allow all the users in Office A to securely access resources in Office B, and vice versa, as if they were on the same local network. Which VPN topology is most appropriate for this scenario? Select the correct option from the given choices.",
    "options": [
      "Remote Access VPN",
      "Client-to-Site VPN",
      "Site-to-Site VPN",
      "SSL VPN"
    ],
    "answer": "Site-to-Site VPN",
    "id": "actual_b_sec_30"
  },
  {
    "domain": "Fundamentals of Networking, Security & Cloud",
    "question": "What is the primary function of a firewall in network security? Analyze the given choices and select the correct answer.",
    "options": [
      "Speed up internet connections",
      "Encrypt data",
      "Block unauthorized access",
      "Allocate IP addresses"
    ],
    "answer": "Block unauthorized access",
    "id": "actual_b_sec_31"
  },
  {
    "domain": "Computer Science",
    "question": "You are configuring Jest to run tests with specific command-line options for coverage reporting and test execution. Which Jest command line option would you use to generate a coverage report in HTML format?",
    "options": [
      "--coverageReporters text, html",
      "--collectCoverage true --coverageReporters text,html",
      "--coverage --coverageReporters=text,html",
      "--collectCoverageFrom=src --coverageReporters=text,html"
    ],
    "answer": "--coverage --coverageReporters=text,html",
    "id": "actual_b_sec_32"
  },
  {
    "domain": "Computer Science",
    "question": "What will be the output of the given code when the user clicks the button? (JavaScript code featuring document.createElement(\"div\"), newElem.innerHTML = \"sample text\", newElem.style.color = \"red\", and appending it to the container)",
    "options": [
      "Sample text",
      "Nothing will happen",
      "Displays sample text in red color",
      "Error"
    ],
    "answer": "Displays sample text in red color",
    "id": "actual_b_sec_33"
  },
  {
    "domain": "Computer Science",
    "question": "What does the following line in the given canvas tag indicate? <canvas id=\"myCanvas\"> </canvas>",
    "options": [
      "HTML5 Canvas not supported.",
      "A comment for the user",
      "A comment for incompatible browsers",
      "A comment for Internet Explorer and Opera",
      "All of the given options"
    ],
    "answer": "A comment for incompatible browsers",
    "id": "actual_b_sec_34"
  },
  {
    "domain": "Computer Science",
    "question": "You want to create a block that changes its shape to a circular block when you move your mouse over it, and reverts back to a rectangular block when you move your mouse away from it with a slow-fast-slow animation speed. How will you achieve this goal?",
    "options": [
      ".rect:hover { border-radius: 40px; transition: 0.5s; }",
      ".rect:hover { border-radius: 50px; transition: 0.5s; }",
      ".rect:hover { border-radius: 30px; transition: 0.5s; }",
      ".rect:hover { border-radius: 20px; transition: 0.5s; }"
    ],
    "answer": ".rect:hover { border-radius: 50px; transition: 0.5s; }",
    "id": "actual_b_sec_35"
  },
  {
    "domain": "Computer Science",
    "question": "What will be the output of the following code? (Python class Tech_Modules with name=\"Django\" and a __str__ method that assigns name=\"Numpy\" and returns it)",
    "options": [
      "100",
      "Numpy",
      "Django",
      "Pandas",
      "None"
    ],
    "answer": "Numpy",
    "id": "actual_b_sec_36"
  },
  {
    "domain": "Computer Science",
    "question": "Which of the following criteria for choosing a patch management system from a vendor is incorrect?",
    "options": [
      "A complex product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.",
      "The deployment and maintenance cost of the patch management system should be low.",
      "The vendor should have high response rates to vulnerabilities by providing patches and updates.",
      "The system administrators should be in a position to keep track of the system and the status of the patches."
    ],
    "answer": "A complex product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.",
    "id": "actual_b_sec_37"
  },
  {
    "domain": "Computer Science",
    "question": "What should be the output of the below pseudocode? (Parent class with get() printing 'Parent', Child class extending Parent and overriding get() printing 'Child'. Main executes: Parent p = new Child(); p.get();)",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Child Parent"
    ],
    "answer": "Child",
    "id": "actual_b_sec_38"
  },
  {
    "domain": "Computer Science",
    "question": "What will be the output of the code? (Java code where Parent has a public final void flipper() printing 'Parent', and Children has a private final void flipper() printing 'Children'. Main executes: new Parent().flipper();)",
    "options": [
      "Children",
      "Parent",
      "Parent Children",
      "Error"
    ],
    "answer": "Parent",
    "id": "actual_b_sec_39"
  },
  {
    "domain": "Computer Science",
    "question": "Assume a mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read the data and not make any changes to the server's resources. Which common HTTP method is most appropriate for this type of data retrieval?",
    "options": [
      "POST",
      "PUT",
      "DELETE",
      "GET"
    ],
    "answer": "GET",
    "id": "actual_b_sec_40"
  },
  {
    "domain": "Computer Science",
    "question": "Assume a development team is designing a new RESTful API to manage a product catalog for their e-commerce platform. They need to create an endpoint that will retrieve detailed information about a specific product using its unique product ID. Which HTTP method and URL structure best aligns with RESTful principles for this operation?",
    "options": [
      "POST /products/{id}/details",
      "GET /product_details?id={id}",
      "PUT /products/{id}/fetch",
      "GET /products/{id}"
    ],
    "answer": "GET /products/{id}",
    "id": "actual_b_sec_41"
  },
  {
    "domain": "Computer Science",
    "question": "An e-commerce company updates its website weekly by adding new features and fixing bugs using an Agile development approach. After each update, the new version is automatically deployed to the live environment. Which key DevOps practice is being implemented to ensure rapid and frequent releases?",
    "options": [
      "The practice involves automating the process of releasing software to production frequently and reliably.",
      "Continuous Integration focuses on merging code changes regularly to prevent integration issues.",
      "Continuous Testing ensures that automated tests are run continuously to validate the code quality.",
      "Monitoring involves tracking the application's performance and user activity after deployment."
    ],
    "answer": "The practice involves automating the process of releasing software to production frequently and reliably.",
    "id": "actual_b_sec_42"
  },
  {
    "domain": "Computer Science",
    "question": "Assume a university database has two tables: Students(StudentID, Name, DepartmentID), Departments(DepartmentID, DepartmentName). The admin wants to list each student along with their department name. Which type of SQL join should be used in this case?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    "answer": "INNER JOIN",
    "id": "actual_b_sec_43"
  },
  {
    "domain": "Computer Science",
    "question": "Consider that two transactions run concurrently... Both succeed, but the final stock shows only the result of one update instead of both. Which concurrency issue is this?",
    "options": [
      "Phantom Read",
      "Lost Update",
      "Non-repeatable Read",
      "Deadlock"
    ],
    "answer": "Lost Update",
    "id": "actual_b_sec_44"
  },
  {
    "domain": "Computer Science",
    "question": "Consider that a team wants to improve deployment speed and reduce downtime when updating their containerized application. Which practice should the team adopt in this scenario?",
    "options": [
      "Use rolling updates with health checks",
      "Increase the number of replicas",
      "Disable the health checks",
      "Use a larger base image"
    ],
    "answer": "Use rolling updates with health checks",
    "id": "actual_b_sec_45"
  }
];

export const actualSectionC = [
  {
    title: "Frontend/UI: Dropdown Interactive Logic",
    objective: "You are tasked with completing and styling a dropdown menu where the user can select a fruit and display the selected fruit on the screen.\\n\\nObjective(s):\\n1. Create a <p> tag with the id selected-fruit.\\n2. Ensure the text inside .dropdown-container is center-aligned.\\n3. Implement functionality so that when the Show Selected button is clicked, the fruit selected is displayed inside the <p> tag.",
    initialHtml: "<!-- index.html -->\\n<div class=\"dropdown-container\">\\n  <select id=\"fruit-dropdown\">\\n    <option value=\"Apple\">Apple</option>\\n    <option value=\"Banana\">Banana</option>\\n    <option value=\"Orange\">Orange</option>\\n  </select>\\n  <button id=\"show-selected-btn\">Show Selected</button>\\n  <!-- Create a paragraph with id selected-fruit here -->\\n</div>\\n\\n<!-- index.css -->\\n.dropdown-container {\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 10px;\\n  /* Add text alignment here */\\n}\\n\\n<!-- index.js -->\\ndocument.getElementById('show-selected-btn').addEventListener('click', function() {\\n  // Write JS here\\n});"
  },
  {
    title: "Database Query: Employee Salary",
    objective: "Write an SQL query to display the employee ID, Name, Basic salary, and Net pay for employees whose basic salary is greater than 5,000.\\n\\nOutput columns: EMPID | EMPNAME | BASIC | NETPAY",
    initialCode: "SELECT ei.EMPID, ei.EMPNAME, si.BASIC, ep.NETPAY\\nFROM employee_info ei\\nJOIN salary_info si ON ei.EMPLOYEE_CATEGORY = si.EMPLOYEE_CATEGORY\\nJOIN emp_payroll ep ON ei.EMPID = ep.EMPID\\nWHERE si.BASIC > 5000;"
  },
  {
    title: "Backend/DSA: Uniform Lines Count",
    objective: "You are given a string S whose length is a perfect square. Let N be the square root of the string's length, you have to build an N x N grid by filling the string in row-major order and then count how many rows and columns in the grid consist of the same character.",
    initialCode: "public int countUniformLines(String input1) {\n  int n = (int) Math.sqrt(input1.length());\n  int ans = 0;\n  for(int i=0; i<n; i++) {\n    boolean rowSame = true, colSame = true;\n    char rowChar = input1.charAt(i*n);\n    char colChar = input1.charAt(i);\n    for(int j=0; j<n; j++) {\n      if(input1.charAt(i*n + j) != rowChar) rowSame = false;\n      if(input1.charAt(j*n + i) != colChar) colSame = false;\n    }\n    if(rowSame) ans++;\n    if(colSame) ans++;\n  }\n  return ans;\n}"
  }
];
