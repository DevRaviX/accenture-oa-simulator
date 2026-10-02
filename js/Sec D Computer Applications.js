const computerScienceQuestions = [
  {
    "id": 1,
    "question": "You are configuring Jest to run tests with specific command-line options for coverage reporting and test execution. Which Jest command line option would you use to generate a coverage report in HTML format?",
    "options": [
      "--coverageReporters text, html",
      "--collectCoverage true --coverageReporters text,html",
      "--coverage --coverageReporters=text,html",
      "--collectCoverageFrom=src --coverageReporters=text,html"
    ],
    "correctAnswer": "--coverage --coverageReporters=text,html",
    "explanation": "To generate a coverage report in Jest and specify the output formats (like text and html), you must use the '--coverage' flag along with '--coverageReporters=text,html' in the command line interface."
  },
  {
    "id": 2,
    "question": "What will be the output of the given code when the user clicks the button? (JavaScript code featuring document.createElement(\"div\"), newElem.innerHTML = \"sample text\", newElem.style.color = \"red\", and appending it to the container)",
    "options": [
      "Sample text",
      "Nothing will happen",
      "Displays sample text in red color",
      "Error"
    ],
    "correctAnswer": "Displays sample text in red color",
    "explanation": "The JavaScript function dynamically creates a new 'div' element, sets its internal HTML to 'sample text', applies inline CSS to make the text color red, and appends it to the existing container in the DOM."
  },
  {
    "id": 3,
    "question": "What does the following line in the given canvas tag indicate? <canvas id=\"myCanvas\"> </canvas>",
    "options": [
      "HTML5 Canvas not supported.",
      "A comment for the user",
      "A comment for incompatible browsers",
      "A comment for Internet Explorer and Opera",
      "All of the given options"
    ],
    "correctAnswer": "A comment for incompatible browsers",
    "explanation": "Any text or HTML placed between the opening <canvas> and closing </canvas> tags is used as fallback content and is only displayed by browsers that do not support the HTML5 canvas element."
  },
  {
    "id": 4,
    "question": "You want to create a block that changes its shape to a circular block when you move your mouse over it, and reverts back to a rectangular block when you move your mouse away from it with a slow-fast-slow animation speed. How will you achieve this goal?",
    "options": [
      ".rect:hover { border-radius: 40px; transition: 0.5s; }",
      ".rect:hover { border-radius: 50px; transition: 0.5s; }",
      ".rect:hover { border-radius: 30px; transition: 0.5s; }",
      ".rect:hover { border-radius: 20px; transition: 0.5s; }"
    ],
    "correctAnswer": ".rect:hover { border-radius: 50px; transition: 0.5s; }",
    "explanation": "To make a square block fully circular, the border-radius needs to be set to 50% (or an equivalent high pixel value like 50px depending on the element's size). The 'transition' property handles the smooth animated effect when hovering."
  },
  {
    "id": 5,
    "question": "What will be the output of the following code? (Python class Tech_Modules with name=\"Django\" and a __str__ method that assigns name=\"Numpy\" and returns it)",
    "options": [
      "100",
      "Numpy",
      "Django",
      "Pandas",
      "None"
    ],
    "correctAnswer": "Numpy",
    "explanation": "When 'print(t)' is called, Python executes the __str__ method of the Tech_Modules instance. Inside this method, the variable 'name' is reassigned to \"Numpy\" and returned, overriding any class-level or init-level attributes for the string representation."
  },
  {
    "id": 6,
    "question": "Which of the following criteria for choosing a patch management system from a vendor is incorrect?",
    "options": [
      "A complex product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.",
      "The deployment and maintenance cost of the patch management system should be low.",
      "The vendor should have high response rates to vulnerabilities by providing patches and updates.",
      "The system administrators should be in a position to keep track of the system and the status of the patches."
    ],
    "correctAnswer": "A complex product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.",
    "explanation": "It is incorrect to assume a complex product is inherently better or that a simple, mature product lacks functionality. Mature products are often more stable, reliable, and easier to implement effectively than overly complex alternatives."
  },
  {
    "id": 7,
    "question": "What should be the output of the below pseudocode? (Parent class with get() printing 'Parent', Child class extending Parent and overriding get() printing 'Child'. Main executes: Parent p = new Child(); p.get();)",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Child Parent"
    ],
    "correctAnswer": "Child",
    "explanation": "Due to runtime polymorphism (method overriding) in object-oriented programming, the method executed is determined by the actual object type instantiated ('new Child()'), not the reference type ('Parent p'). Therefore, it prints 'Child'."
  },
  {
    "id": 8,
    "question": "What will be the output of the code? (Java code where Parent has a public final void flipper() printing 'Parent', and Children has a private final void flipper() printing 'Children'. Main executes: new Parent().flipper();)",
    "options": [
      "Children",
      "Parent",
      "Parent Children",
      "Error"
    ],
    "correctAnswer": "Parent",
    "explanation": "The main method explicitly instantiates a new Parent object ('new Parent()') and calls its flipper() method. Therefore, the output will simply be 'Parent'. The Children class method is never invoked."
  },
  {
    "id": 9,
    "question": "Assume a mobile application needs to retrieve a list of all available restaurants from a food delivery service's API. The application should only read the data and not make any changes to the server's resources. Which common HTTP method is most appropriate for this type of data retrieval?",
    "options": [
      "POST",
      "PUT",
      "DELETE",
      "GET"
    ],
    "correctAnswer": "GET",
    "explanation": "In RESTful API design, the HTTP GET method is strictly used for retrieving or reading data from a server. It is considered \"safe\" and \"idempotent\" because it does not modify any resources on the server."
  },
  {
    "id": 10,
    "question": "Assume a development team is designing a new RESTful API to manage a product catalog for their e-commerce platform. They need to create an endpoint that will retrieve detailed information about a specific product using its unique product ID. Which HTTP method and URL structure best aligns with RESTful principles for this operation?",
    "options": [
      "POST /products/{id}/details",
      "GET /product_details?id={id}",
      "PUT /products/{id}/fetch",
      "GET /products/{id}"
    ],
    "correctAnswer": "GET /products/{id}",
    "explanation": "According to standard RESTful conventions, retrieving a specific resource should use the GET method, and the resource's unique identifier should be included directly in the URI path hierarchy (e.g., /resource/{id})."
  },
  {
    "id": 11,
    "question": "An e-commerce company updates its website weekly by adding new features and fixing bugs using an Agile development approach. After each update, the new version is automatically deployed to the live environment. Which key DevOps practice is being implemented to ensure rapid and frequent releases?",
    "options": [
      "The practice involves automating the process of releasing software to production frequently and reliably.",
      "Continuous Integration focuses on merging code changes regularly to prevent integration issues.",
      "Continuous Testing ensures that automated tests are run continuously to validate the code quality.",
      "Monitoring involves tracking the application's performance and user activity after deployment."
    ],
    "correctAnswer": "The practice involves automating the process of releasing software to production frequently and reliably.",
    "explanation": "The scenario describes Continuous Deployment/Continuous Delivery (CD), which is the specific DevOps practice of automating the release pipeline so that updates can be deployed to the live production environment rapidly and reliably."
  },
  {
    "id": 12,
    "question": "Assume a university database has two tables: Students(StudentID, Name, DepartmentID), Departments(DepartmentID, DepartmentName). The admin wants to list each student along with their department name. Which type of SQL join should be used in this case?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    "correctAnswer": "INNER JOIN",
    "explanation": "An INNER JOIN is used to return only the records that have matching values in both tables. In this case, it will match the DepartmentID in the Students table with the DepartmentID in the Departments table to show the respective department name for each student."
  },
  {
    "id": 13,
    "question": "Consider that two transactions run concurrently... Both succeed, but the final stock shows only the result of one update instead of both. Which concurrency issue is this?",
    "options": [
      "Phantom Read",
      "Lost Update",
      "Non-repeatable Read",
      "Deadlock"
    ],
    "correctAnswer": "Lost Update",
    "explanation": "A 'Lost Update' anomaly occurs when two concurrent transactions read the same data and then update it based on the initial read. The second transaction overwrites the result of the first, effectively losing the first transaction's update."
  },
  {
    "id": 14,
    "question": "Consider that a team wants to improve deployment speed and reduce downtime when updating their containerized application. Which practice should the team adopt in this scenario?",
    "options": [
      "Use rolling updates with health checks",
      "Increase the number of replicas",
      "Disable the health checks",
      "Use a larger base image"
    ],
    "correctAnswer": "Use rolling updates with health checks",
    "explanation": "Rolling updates progressively replace old instances of an application with new ones without taking the entire service down. Combined with health checks, it ensures the new containers are completely ready before traffic is routed to them, eliminating downtime."
  }
];