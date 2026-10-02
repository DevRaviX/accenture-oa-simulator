// Questions, options, and answers extracted from Section 3: Fundamentals of Networking, Security & Cloud[cite: 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 57]
const fundamentalsOfNetworkingSecurityAndCloud = [
  {
    "id": 1,
    "question": "Assume that a developer is tasked with configuring a high-security Wi-Fi environment for a sensitive government project using Android devices. He/she must implement a solution that leverages both WPA3-Enterprise security and the highest available encryption settings to ensure compliance with stringent security requirements. Refer to the given code snippet used to configure wpa_supplicant: 1 CONFIG_SAE=y, 2 CONFIG_SUITEB=y, 3 CONFIG_SUITEB192=y. In the given scenario, which is the incorrect configuration line that might potentially weaken the desired security level? Select the correct option from the given choices.",
    "options": [
      "CONFIG_SAE=y is unnecessary since WPA3-Enterprise does not require SAE",
      "CONFIG_SUITEB=y is required to enable basic Suite B cryptography",
      "CONFIG_SUITEB192=y enables the highest level of security, Suite B at 192-bit",
      "CONFIG_SUITEB=y is redundant when CONFIG_SUITEB192=y is also specified"
    ],
    "correctAnswer": "CONFIG_SAE=y is unnecessary since WPA3-Enterprise does not require SAE",
    "explanation": "WPA3-Enterprise relies on 802.1X/EAP for authentication, whereas SAE (Simultaneous Authentication of Equals) is specifically used for WPA3-Personal networks. Including it is unnecessary and incorrect for an Enterprise setup."
  },
  {
    "id": 2,
    "question": "Assume that a security engineer is setting up a secure IPSec connection using ESP with authentication. The system must ensure data confidentiality, integrity, and proper packet sequencing with minimal performance overhead. Which configuration best meets these requirements? Analyze the given choices and select the correct answer.",
    "options": [
      "Use AES encryption with SPI tracking, sequence numbering, and optional authentication in ESP.",
      "Implement Triple DES with AH only, handling packet sequencing manually.",
      "Apply DES encryption with AH and ESP, using SPI for tracking and padding for confidentiality.",
      "Use AES with ESP authentication, sequence numbering, and padding to ensure data integrity."
    ],
    "correctAnswer": "Use AES with ESP authentication, sequence numbering, and padding to ensure data integrity.",
    "explanation": "AES provides strong encryption with minimal overhead, while ESP authentication and sequence numbering natively handle integrity and anti-replay protections without needing the extra overhead of AH (Authentication Header)."
  },
  {
    "id": 3,
    "question": "Assume that a company migrates its application to a cloud computing environment. The cloud provider handles infrastructure services, while the customer develops and deploys their application. How does the concept of 'shared responsibility' impact security management in this scenario? Select the correct answer from the given choices.",
    "options": [
      "The cloud provider handles all security measures.",
      "Security is managed by third-party auditors.",
      "Both the cloud provider and the customer share security responsibilities.",
      "The customer is solely responsible for security."
    ],
    "correctAnswer": "Both the cloud provider and the customer share security responsibilities.",
    "explanation": "In a shared responsibility model, the cloud provider secures the underlying infrastructure (security of the cloud), while the customer secures their data, applications, and configurations (security in the cloud)."
  },
  {
    "id": 4,
    "question": "Assume that a company's goal is to leverage both private and public clouds to optimize resource utilization and manage dynamic workloads effectively. To achieve this the company needs a strategy that ensures secure data handling seamless integration with existing systems, and cost efficiency. Which approach should the company implement to achieve optimal performance in its hybrid cloud environment? Analyze the given choices and select the correct answer.",
    "options": [
      "Utilize containerization for portability and efficient resource use across both private and public clouds.",
      "Adopt a multi-cloud strategy to distribute workloads across several public cloud providers for enhanced resilience and cost management.",
      "Implement a serverless architecture to dynamically allocate cloud resources based on real-time demand, reducing infrastructure management overhead.",
      "Rely solely on dedicated on-premises infrastructure for all critical operations while using the public cloud for non-sensitive tasks."
    ],
    "correctAnswer": "Implement a serverless architecture to dynamically allocate cloud resources based on real-time demand, reducing infrastructure management overhead.",
    "explanation": "Serverless computing enables hybrid environments to dynamically auto-scale resources exactly when required, effectively optimizing costs and drastically reducing manual infrastructure management."
  },
  {
    "id": 5,
    "question": "Consider that as part of the data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with the next generation storage solutions. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing? Select the correct answer form the given choices.",
    "options": [
      "By eliminating the need for server virtualization",
      "By minimizing financial and contractual commitments",
      "By ensuring a global-scale, reliable, and resilient storage solution",
      "By optimizing capacity for executing code and running instances"
    ],
    "correctAnswer": "By optimizing capacity for executing code and running instances",
    "explanation": "Resource pooling aggregates disparate storage resources into a unified virtual pool, allowing the cloud environment to elastically and dynamically assign optimal storage capacity exactly where instances require it."
  },
  {
    "id": 6,
    "question": "Consider that a multinational corporation is migrating its sensitive data to the cloud for storage and processing. During the migration process, the IT team is concerned about maintaining data confidentiality and preventing unauthorized access. Which cloud storage security measure should the team prioritize to address these concerns? Select the correct option from the given choices.",
    "options": [
      "Implementing robust access controls",
      "Enforcing data encryption at rest",
      "Utilizing strong authentication mechanisms",
      "Regularly auditing access logs"
    ],
    "correctAnswer": "Enforcing data encryption at rest",
    "explanation": "Encrypting data at rest guarantees that even if unauthorized entities breach physical storage media or logical volumes, the sensitive data remains unreadable and secure."
  },
  {
    "id": 7,
    "question": "Assume that a company is migrating its legacy data sources to a new cloud-based platform while maintaining operations without downtime. During the migration, they need to ensure that data from both the old and new systems can be accessed simultaneously for real-time reporting and analytics, with data being logically integrated without physical movement. Considering the requirements, which architectural layer would best handle the logical integration and seamless access to data from both environments, ensuring minimal disruption and secure data access? Analyze the given choices and select the correct answer.",
    "options": [
      "Connection layer using direct database access protocols",
      "Consumption layer utilizing middleware with abstracted APIs",
      "Abstraction layer that logically unifies disparate data sources.",
      "Data caching layer storing temporary data replicas"
    ],
    "correctAnswer": "Abstraction layer that logically unifies disparate data sources.",
    "explanation": "A data abstraction (or virtualization) layer connects and logically integrates multiple disparate data stores, presenting them as a single unified view without requiring physical data movement."
  },
  {
    "id": 8,
    "question": "Assume that in a cloud based application where scalability is crucial, which cloud storage option allows for dynamic scaling without the need for manual intervention? Analyze the given choices and select the correct answer.",
    "options": [
      "Block Storage",
      "File Storage",
      "Object Storage",
      "Tape Storage"
    ],
    "correctAnswer": "Object Storage",
    "explanation": "Object storage utilizes a flat namespace architecture that scales virtually infinitely and dynamically, bypassing the capacity planning and manual volume resizing required by traditional block or file storage."
  },
  {
    "id": 9,
    "question": "Hackers attempt to intercept and manipulate data packets traveling across a network by inserting malicious routing information, allowing them to redirect traffic through their own systems. This method enables them to eavesdrop or alter data without detection. What type of attack is this called?",
    "options": [
      "Packet Sniffing",
      "IP Spoofing",
      "Routing Table Poisoning",
      "DNS Spoofing"
    ],
    "correctAnswer": "Routing Table Poisoning",
    "explanation": "Routing Table Poisoning (or Route Poisoning) involves injecting false routing data into a network's routing tables, causing routers to maliciously redirect traffic through attacker-controlled paths."
  },
  {
    "id": 10,
    "question": "During a video call, consider that data packets are sent from one device to another across different networks. To ensure the data arrives correctly and in order, which layer of the OSI model is responsible for error checking and reliable delivery? Select the correct option from the given choices.",
    "options": [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Network Layer"
    ],
    "correctAnswer": "Transport Layer",
    "explanation": "The Transport Layer (Layer 4) is responsible for host-to-host communication, segmenting data, and providing error-checking, sequencing, and reliable delivery (e.g., via TCP)."
  },
  {
    "id": 11,
    "question": "A network engineer is inspecting a network connection that follows the OSI model. He/she is looking into a layer that has broken down the data to be sent into numbered segments. He/she finds that this layer identifies other peers using port numbers. Which layer is the engineer looking into?",
    "options": [
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
      "Network Layer"
    ],
    "correctAnswer": "Transport Layer",
    "explanation": "Data segmentation and the utilization of source and destination port numbers to multiplex applications are core functions explicitly defined in the OSI Transport Layer."
  },
  {
    "id": 12,
    "question": "Assume that an employee at a multinational organization is working from home due to some reason and needs to access the company's internal network to retrieve some files. Which type of Virtual Private Network (VPN) will be best suitable for this case? Select the correct answer from the given choices.",
    "options": [
      "Remote-access VPN",
      "Site-to-site VPN",
      "MPLS VPN",
      "PPTP VPN"
    ],
    "correctAnswer": "Remote-access VPN",
    "explanation": "A Remote-access VPN is designed specifically to allow individual remote users to establish secure, encrypted point-to-point connections to a corporate network over the public internet."
  },
  {
    "id": 13,
    "question": "Consider that an organization has two geographically separate offices, Office A and Office B, and needs to allow all the users in Office A to securely access resources in Office B, and vice versa, as if they were on the same local network. Which VPN topology is most appropriate for this scenario? Select the correct option from the given choices.",
    "options": [
      "Remote Access VPN",
      "Client-to-Site VPN",
      "Site-to-Site VPN",
      "SSL VPN"
    ],
    "correctAnswer": "Site-to-Site VPN",
    "explanation": "A Site-to-Site VPN creates a continuous encrypted link between gateway routers at two distinct geographic locations, making it transparent to the users on both local networks."
  },
  {
    "id": 14,
    "question": "What is the primary function of a firewall in network security? Analyze the given choices and select the correct answer.",
    "options": [
      "Speed up internet connections",
      "Encrypt data",
      "Block unauthorized access",
      "Allocate IP addresses"
    ],
    "correctAnswer": "Block unauthorized access",
    "explanation": "A firewall acts as a defensive barrier between a trusted internal network and external untrusted networks, inspecting traffic and blocking unauthorized access based on defined security rules."
  }
];