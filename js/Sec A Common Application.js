// Questions and answers extracted from Accenture data.pdf[cite: 8, 9, 11, 12, 13, 15, 16, 43]
const commonApplicationQuestions = [
  {
    "id": 1,
    "question": "Consider you are a software developer working on a new application for a large corporation. Your application is expected to run on a variety of different computers with varying hardware specifications and operating systems. You have to ensure compatibility and smooth operation on all of these different systems. Which property of an operating system is most important for you to consider?",
    "options": [
      "User interface",
      "Security",
      "Device management",
      "Resource allocation"
    ],
    "correctAnswer": "Resource allocation",
    "explanation": "Resource allocation is the OS property responsible for distributing CPU time, memory, and hardware access. Ensuring efficient resource allocation is what allows an application to run smoothly across vastly different hardware specifications and configurations."
  },
  {
    "id": 2,
    "question": "Your marketing lead requests a list of employees from the South region for an internal campaign. Which formula allows you to generate this list dynamically from the dataset?",
    "options": [
      "=FILTER(B2:B9, H2:H9=\"South\")",
      "=XLOOKUP(\"South\", H2:H9, B2:B9)",
      "=INDEX(B2:B9, MATCH(\"South\", H2:H9, 0))"
    ],
    "correctAnswer": "=FILTER(B2:B9, H2:H9=\"South\")",
    "explanation": "The FILTER function dynamically extracts an array of records that meet specific criteria (e.g., all rows where the region equals 'South'). XLOOKUP and INDEX/MATCH are designed to return only the first matching single record, not a dynamic list."
  },
  {
    "id": 3,
    "question": "In MS Word, John wants to quickly fix inconsistent headings in a long document. What should he update?",
    "options": [
      "Font",
      "Find",
      "Table of Contents",
      "Styles"
    ],
    "correctAnswer": "Styles",
    "explanation": "In Microsoft Word, 'Styles' manage the global formatting of text elements. Modifying a specific Heading Style will automatically and instantly apply consistent formatting to all text assigned that style throughout the entire document."
  },
  {
    "id": 4,
    "question": "Jane wants to create a slide that illustrates a progression over time using icons, text, and lines. She aims for it to appear visually dynamic without manually animating each step. Which MS PowerPoint feature can help speed up this process?",
    "options": [
      "Use Slide Zoom feature to create dynamic slides quickly.",
      "Use SmartArt Process layout and apply \"By Paragraph\" animation.",
      "Apply the Morph transition across duplicated slides for smooth effect.",
      "Create a custom layout with background images and animation triggers."
    ],
    "correctAnswer": "Apply the Morph transition across duplicated slides for smooth effect.",
    "explanation": "The Morph transition automatically calculates the difference between duplicated slides and animates the smooth movement, resizing, or transformation of shared elements (like icons and lines) without requiring manual motion path animations."
  },
  {
    "id": 5,
    "question": "Assume a developer writes a program that needs to create a new process and run a different executable file. Which pair of system calls in a UNIX-like OS fulfill this requirement?",
    "options": [
      "create() and run()",
      "fork() and exec()",
      "fork() and wait()",
      "spawn() and terminate()"
    ],
    "correctAnswer": "fork() and exec()",
    "explanation": "In UNIX-like operating systems, process creation is handled by 'fork()', which creates a duplicate child process. The 'exec()' system call is then used by the child process to replace its current memory space with a completely new executable program."
  },
  {
    "id": 6,
    "question": "Suppose you want to implement a bus where the input-output devices are attached to the computer by wires. In this the data transfer on a bus is carried out by electronic processes. Then the host controller sends messages to the device controller, and the device controller performs the operations. Which device will you choose if these device controllers consist of a built-in cache so that data transfer occurs faster?",
    "options": [
      "Enhanced interior drive electronics",
      "Enhanced integrated drive electronics",
      "Enhanced interior driver electronics",
      "Enhanced integrated hard driver"
    ],
    "correctAnswer": "Enhanced integrated drive electronics",
    "explanation": "Enhanced Integrated Drive Electronics (EIDE) is an upgraded standard interface connecting computers to mass storage devices. It features integrated controllers and built-in cache capabilities that facilitate significantly faster data transfer rates between the disk and the CPU."
  },
  {
    "id": 7,
    "question": "Assume that you are a computer architect designing a new computer system. You have to decide how the data will be transferred between registers in the CPU. Which among the following options is the correct way of performing register transfers as per the above scenario?",
    "options": [
      "Register transfer is the process of transferring data between registers in a computer system.",
      "Register transfer is a technique used to transfer data between different computer systems.",
      "Register transfer is a type of bus used in computer systems.",
      "Register transfer is a type of instruction used in assembly language programming."
    ],
    "correctAnswer": "Register transfer is the process of transferring data between registers in a computer system.",
    "explanation": "In computer architecture, a register transfer specifically describes the micro-architectural level process of moving binary data directly from one CPU register to another during instruction execution cycles."
  }
];