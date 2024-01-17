const courses = [
    {
      coursename: "Software Engineering",
      coursecode: "CSEN3201",
      coursetype: "mandatory theory",
      creditpoints: 4,
      courseoutcomes: [
        "Propose a software life cycle model for the given requirements and compile software requirement specifications as per IEEE guidelines.",
        "Develop function-oriented design and/or object-oriented design for software systems using industry standard techniques.",
        "Apply the knowledge of different coding standards and/or guidelines and propose test cases for sample software system modules in different testing methods.",
        "Compare and contrast among different types of software maintenance and decide on the maintenance models to be employed depending on the situation.",
        "Apply different project management strategies for project planning, such as estimating project size, duration, and cost.",
        "Apply the ideas of different project monitoring and control techniques such as WBS, Activity Network, PERT chart, Critical path, etc., to efficiently monitor and control the project. They will be able to identify different software project risks and determine their mitigation approaches.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "Introduction to Software Engineering",
                text: "Software Engineering – objectives and definitions, Software Life Cycle – different phases, Lifecycle Models - Waterfall, Relaxed Waterfall, RAD, Prototyping, Incremental, Spiral.",
              },
              {
                subtopic: "Modern Software Engineering Practices",
                text: "Agile: Values and Principles, Philosophy, Agile vs. Waterfall, Methods and Practices of Agile, Pitfalls of Agile methodology, Scrum: Roles, Workflow: Sprint, Daily Scrum, Sprint review, etc., Limitations of Scrum, Extreme Programming: Principles, Guidelines, Activities, Values, Practices, Introduction to DevOps and SEMAT.",
              },
              {
                subtopic: "Requirements Analysis and Specification Phase",
                text: "Requirements Collection and Analysis, Requirement Specifications – General Structure of Software Requirement Specifications (SRS), Functional and Non-functional Requirements, Representing Requirements as Use Cases with examples.",
              },
              {
                subtopic: "Structured Analysis Modeling Techniques",
                text: "Process Model using Context Diagrams (CD) and Data Flow Diagram (DFD) with examples, Data Dictionary, Decision Tree, Decision Table with examples, Data Model using Entity Relationship Diagram (ERD) with examples.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Design Phase Overview",
                text: "Comparison between Requirement Analysis and Design, Attributes of Good Design, Design Approaches – Functional and Object-Oriented Design approaches, Design Aspects – Top-Down and Bottom-Up, Structured Design – Module Design (or High-Level Design), Detail Design (or Low-Level Design), Functional Decomposition – Abstraction, Structure Chart, Structured English, Design Issues – Cohesion, Coupling.",
              },
              {
                subtopic: "Object Oriented Analysis and Design",
                text: "OOAD Basic Concepts, Unified Modeling Language (UML) – different types of diagrams for different views of the system, User View – Use Case Diagram with examples, Structural Views – Class Diagram with examples, Behavioral View – Sequence, Collaboration, Activity and State Chart Diagrams with examples.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "Coding or Programming",
                text: "Programming Principles and Guidelines – Structured Programming, Code Re-use, Coding Standards / Guidelines, Coding Process – Incremental Coding, Test Driven Development, Pair Programming / Extreme Programming Source Code Version Control, Build, Code Refactoring.",
              },
              {
                subtopic: "Review and Testing",
                text: "Self Review / Peer Review, Testing Overview-- Objective, Definition, Static and Dynamic Testing, Functional vs. Non-functional Testing, Testing Artifacts – Test Cases and Test Suites, Traceability Matrix, Test Data, Stub and Driver, Testing Process – Test Case Design, Test Case Execution, Test Result, Defect Logging and Tracking, Testing Methods -- White Box Testing with Test Coverage using Control Flow Graph (CFG) and Cyclomatic Complexity, Black Box Testing with Equivalence Class Partitioning and Boundary Value Analysis, Testing Level – Unit Testing, Integration Testing, System Testing, (User) Acceptance Testing, Regression Testing, Performance Testing, Usability Testing, Non-functional Testing.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Software Maintenance",
                text: "Types of Maintenance – Corrective, Preventive, Adaptive Change Management and Maintenance Process models, Estimation of maintenance cost.",
              },
              {
                subtopic: "Software Estimation",
                text: "Overview of Software Estimation – Size, Effort, Duration and Cost. Size Estimation Methods – Lines of Code (LOC) and Function Points (FP) Estimation of Effort and Duration based on Size and Productivity, Constructive Cost Model (COCOMO) – Basic COCOMO, Intermediate COCOMO (COCOMO 81), Detailed COCOMO (COCOMO II).",
              },
              {
                subtopic: "Project Management",
                text: "Project Management Overview - Planning, Staffing, Execution, Monitoring and Control Responsibilities of Project Manager, Project Scheduling – Work Breakdown Structure (WBS) and Activity network, Gantt Charts, PERT chart, Determining the Critical Path.",
              },
              {
                subtopic: "Configuration Management",
                text: "Overview of Configuration Management, Software Configuration Management tasks: Identification, Change Control, Version Control, Auditing, Concept of Baseline, Versioning of Configurable Items (CI).",
              },
            ],
          },
        },
      ],
      textbooks: [
        "Software Engineering: A Practitioners Approach, 5th Ed, R. S. Pressman, McGraw-Hill, 2001.",
        "Software Engineering, 7th Ed, Sommerville, Addison-Wesley, 2005.",
      ],
      referencebooks: [
        "Software Engineering: A Precise Approach, 3rd Edition, Pankaj Jalote, 2013.",
        "Fundamentals of Software Engineering, 3rd Edition, Rajib Mall, 2013.",
        "Fundamentals of Software Engineering, 2nd Ed, C. Ghezzi, M. Jazayeri and D. Mandrioli, Prentice Hall of India, 2003.",
      ],
    },
    {
      coursename: "Computer Networks",
      coursecode: "CSEN3202",
      coursetype: "mandatory theory",
      creditpoints: 4,
      courseoutcomes: [
        "Learn the terminology and concepts of the OSI reference model, TCP‐IP reference model and the need for the layered architecture.",
        "Understand the concepts of protocols, network interfaces, and design/performance issues in local area networks and wide area networks.",
        "Analyze the requirements for a given organizational structure and select the most appropriate networking architecture and technologies.",
        "Demonstrate various types of routing techniques.",
        "Defend and argue the various quality of service measures to improve network throughput.",
        "Synthesize the strength and shortcomings of the underlying protocols, and then go on to hypothesize new and better application layer protocols.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "Introduction",
                text: "Direction of data flow (simplex, half duplex, full duplex), Network topology, categories of network (LAN, MAN, WAN).",
              },
              {
                subtopic: "Protocols and Standards",
                text: "Reference models: OSI reference model, TCP/IP reference model, their comparative study. Physical Layer: Digital signal coding, Modulation (Digital and Analog), Multiplexing, Switching, Telephone Networks, Transmission Media and its properties.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Data Link Layer",
                text: "Framing / Stuffing, Error detection and correction. Flow Control Protocols: Stop-and-Wait / Go-Back-N / Selective Repeat; HDLC, PPP. MAC sub-layer: Ethernet (IEEE 802.3): ALOHA / CSMA-CD / Collision Resolution, Controlled Access and Channelization methods. Devices: Transparent Bridges / Source-Route Bridges / Ethernet Switches; Backward Learning Algorithm; Construction of Spanning Trees; Routers.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "IPv4",
                text: "Packet format; Classful addressing / sub-netting / subnet mask; CIDR / super-netting / masks. IPv6: address format / packet format / differences with IP (v4). Protocols: IP, ICMP, ARP. Routing algorithm: concept of static and dynamic routing, Distance vector / Link state algorithm. Protocols: OSPF, BGP.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Transport Layer",
                text: "Process to process delivery / multiplexing and other services of transport layer. Transport Layer protocols: TCP: Three-way handshaking, Window management, Flow and congestion control with slow start, additive increase, multiplicative decrease; UDP; Difference between UDP and TCP. General Congestion control algorithm: open and closed loop; Techniques to improve: QoS Leaky bucket / Token bucket.",
              },
              {
                subtopic: "Modern Topics",
                text: "Introduction to wireless LAN and Bluetooth, Mobile IP, Mobile TCP.",
              },
            ],
          },
        },
      ],
      textbooks: [
        "Computer Networks, Andrew S. Tanenbaum, Pearson Education, Fourth edition.",
        "Data and Computer Communication, William Stallings, Prentice Hall, Seventh edition.",
        "High-speed Networks and Internets, William Stallings, Pearson education, Second edition.",
      ],
      referencebooks: [
        "Cryptography and Network security, William Stallings, PHI, Third edition.",
        "ISDN and Broadband ISDN with Frame Relay and ATM, William Stallings.",
        "Computer Networking: A Top-Down Approach, 5th Ed., Kurose & Ross.",
      ],
    },
    {
      coursename: "Economics for Engineers",
      coursecode: "HMTS3201",
      coursetype: "mandatory theory",
      creditpoints: 3,
      courseoutcomes: [
        "Evaluate a project and estimate the total cost of the project.",
        "Apply financial analytical methodologies to prepare a report regarding the financial performance of an organization.",
        "Participate actively in an organization’s capital budgeting process.",
        "Provide vital inputs regarding the pricing of a product.",
        "Apply the knowledge of the interplay of various economic variables and indicators in the workplace.",
        "Provide insight about different accounting concepts and apply broader concepts like costs, revenues, assets, liabilities, capital, profit, investment, and interest.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "Market",
                text: "Meaning of Market, Types of Market, Perfect Competition, Monopoly, Monopolistic and Oligopoly market. The basic concept of economics – needs, wants, utility. National Income-GDP, GNP. Demand & Supply, Law of demand, Role of demand and supply in price determination, Price Elasticity.",
              },
              {
                subtopic: "Inflation",
                text: "Meaning, reasons, etc.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Business",
                text: "Types of business, Proprietorship, Partnership, Joint-stock company, and cooperative society – their characteristics. Banking: role of commercial banks; credit and its importance in industrial functioning. Role of central bank: Reserve Bank of India. International Business or Trade Environment.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "Financial Accounting",
                text: "Journals, Ledgers, Trial Balance, Profit & Loss Account, Balance Sheet. Financial Statement Analysis (Ratio and Cash Flow analysis). Cost Accounting- Terminology, Fixed, Variable and Semi-variable costs. Break Even Analysis. Cost Sheet. Budgeting and Variance Analysis. Marginal Cost based decisions.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Time Value of Money",
                text: "Present and Future Value, Annuity, Perpetuity. Equity and Debt, Cost of Capital. Capital Budgeting: Methods of project appraisal - average rate of return - payback period - discounted cash flow method: net present value, benefit cost ratio, internal rate of return. Depreciation and its types, Replacement Analysis, Sensitivity Analysis.",
              },
            ],
          },
        },
      ],
      referencebooks: [
        "Financial Accounting- A Managerial Perspective, R. Narayanswami, Prentice-Hall of India Private Limited. New Delhi",
        "Fundamentals of Financial Management, Horne, James C Van, Prentice-Hall of India Private Limited, New Delhi",
        "Modern Economic Theory, H. L. Ahuja., S. Chand. New Delhi.",
        "Engineering Economic Analysis, Newman, Donald G., Eschenbach, Ted G., and Lavelle, Jerome P., New York: Oxford University Press. 2012.",
      ],
    },
    {
      coursename: "Distributed Databases",
      coursecode: "CSEN3231",
      coursetype: "Professional Elective II",
      creditpoints: 3,
      courseoutcomes: [
        "Understand the basic concepts of database, communication network, and distributed database.",
        "Identify the concepts of creating and maintaining databases in a distributed environment. Understand and use the various core module.",
        "Learn to design a distributed database using horizontal and vertical fragmentation.",
        "Learn to manage distributed transactions and concurrency control.",
        "Design all types of distributed queries using query optimization techniques.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "Definition of Distributed Database (DDB)",
                text: "DDB features, comparison with centralized databases, Distributed Database Management Systems (DDBMSs), Review of Relational algebra and SQL, Review of basic concepts of computer networks. Reference architecture of DDB, Distribution Transparency (for Read-only and Update applications), Integrity constraints in DDB.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Framework for Distributed Database Design",
                text: "Types of Data Fragmentation, Design of Database Fragmentation, Allocation of Fragments. Equivalence Transformations for Queries, Operator Graph, Transforming Global Queries into Fragment Queries, Distributed Grouping and Aggregate Function Evaluation.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "Framework for Transaction Management",
                text: "Supporting Atomicity of Distributed Transactions, Concurrency Control for Distributed Transactions, Commit protocols. Foundations of Distributed Concurrency Control, Distributed Deadlocks. Basic concepts of Reliability, Non-blocking Commitment protocols, Reliability, and Concurrency control.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Framework for Distributed Query Processing",
                text: "Framework for Distributed Database administration – Catalog Management, Authorization, and Protection. The basic concept of Parallel Databases.",
              },
            ],
          },
        },
      ],
      textbooks: [
        "Stefano Ceri and Giuseppe Pelagatti: Distributed Databases – Principles and Systems, 1st Edition, Tata McGraw-Hill.",
        "M Tamer Ozsu and Patrick Valduriez, Principles of Distributed Database Systems, 2nd Edition, Pearson Education.",
      ],
      referencebooks: [
        "Silberschatz, Korth and Sudarshan: Database System Concepts, TMH.",
        "Ramakrishnan and Gehrke: Database Management Systems, TMH.",
        "Elmasri and Navathe: Fundamentals of Database Systems, Pearson.",
      ],
    },
    {
      coursename: "Enterprise Application in Java EE",
      coursecode: "CSEN3232",
      coursetype: "Professional Elective II",
      creditpoints: 3,
      courseoutcomes: [
        "Identify the basic needs and application of server-based technology like JEE.",
        "Understand the various components available in JEE and their applicability in the MVC pattern.",
        "Handle RDBMS using JDBC and JPA in JEE.",
        "Understand various data interchange formats and use XML for data exchange.",
        "Understand and use JEE components in a distributed environment.",
        "Develop an enterprise-wide web application using components of JEE.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "Client & server-side programming",
                text: "Enterprise architecture styles: Single tier, 2-tier, 3-tier, n-tier; Relative comparison of the different layers of architectures. MVC Architecture: Explanation, Need, Drawbacks. Overview of JEE, Different components & containers. Overview of Java servlets, Servlet process flow/ Architecture, Understanding Servlet life cycle, Other important objects and methods in Servlet API, Servlet Vs CGI, Developing servlet using IDE. Short introduction to JSP, Comparison between JSP & servlet. XML Overview, Different types of XML Parsing, XML Schema, How To use XSD, Namespace, Declaring and Applying Namespaces.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Java Server Faces",
                text: "Introduction, Benefits of Java Server Faces, Design goals and Features of JSF, JSF Application Structure, Understanding the JSF Request Processing Lifecycle. Getting started JSF application using IDE (NetBeans), The key pieces of the JSF pie, Managed beans, JSF User Interface Component Model, Usages of JSF UI Components/tags (form, outputText, inputText, commandButton, inputSecret, commandLink, graphicImage, message, messages, dataTable, column, panelGrid, panelGroup, selectOneListbox, selectBooleanCheckbox, selectOneRadio etc.), Exploring the JSF expression language, Standard and custom validation and converter, Value Binding, Method Binding, FacesContext, FacesMessage, Event Handling. Navigation model example, Introduction to Facelets, Creating Facelets Views and Mapping Faces Servlet, Facelets Templates, JSF Composite Components, JSF Web Resources, Using HTML5-Friendly Markup in JSF.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "EJB",
                text: "Introduction, Comparison of EJB & Java Beans, Applications, Drawbacks, Different types of enterprise beans, Services provided by EJB container. JDBC: Introduction, Database driver, Different approaches to connect an application to a database server, Establishing a database connection and executing SQL statements, JDBC prepared statements, JDBC dataSources, Developing CRUD operation in JSF application and plain Java Application using JDBC.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Java Persistence API",
                text: "Overview, Important terms and annotations related to JPA, Java Persistence Query Language, Creating Queries in JPQL, JPQL Static and Dynamic Query Example, JPA JPQL Bulk Data Operations, Using JPA from Web application using JSF, Using JPA in a Java application. Introduction to Web Services and RESTful Web Services, Differences, Advantages and Disadvantages, RESTful Key Elements, Important annotation of JAX-RS, Developing RESTful Web Services with JAX-RS, Database access using JPA and RESTful Service, Accessing RESTful Service from Java application and Web application using JSF.",
              },
            ],
          },
        },
      ],
      textbooks: [
        "Professional JAVA Server Programming, Allamaraju and Buest, SPD Publication.",
        "Beginning J2EE 1.4 Ivor Horton, SPD Publication.",
        "Advanced Programming for JAVA 2 Platform Austin and Pawlan, Pearson.",
      ],
      referencebooks: [
        "Internet & Java Programming, Krishnamoorthy & S. Prabhu, New Age Publication.",
        "Online resources from reputed sites like Oracle Doc, TutorialsPoint, Guru 99, Java Code.",
        "Geek, Vogella.com etc.",
      ],
    },
    {
      coursename: "Machine Learning",
      coursecode: "CSEN3233",
      coursetype: "Professional Elective II",
      creditpoints: 3,
      courseoutcomes: [
        "Learn and understand the basics of machine learning approaches and paradigm.",
        "Understand and describe various machine learning algorithms.",
        "Understand the complexity of Machine Learning algorithms and their limitations.",
        "Mathematically analyze various machine learning approaches and paradigms.",
        "Analyze various machine learning techniques to get insight into when to apply a particular machine learning approach.",
        "Apply common Machine Learning algorithms in practice and implement their own using real-world data.",
      ],
      modules: [
        {
          module1: {
            subtopics: [
              {
                subtopic: "The learning Problem",
                text: "Example of learning, Components of learning, A simple model, Types of learning; The Linear Model I: Input Representation, Linear Classification, Linear and Logistic Regression, Nonlinear Transformation.",
              },
            ],
          },
        },
        {
          module2: {
            subtopics: [
              {
                subtopic: "Error and Noise; Training vs Testing",
                text: "From Training to Testing, Dichotomies, Growth Function, key notion: Break Points; The VC Dimension: The definition, VC Dimension of Perceptrons, Interpreting the VC Dimension, Utility of VC Dimension. Bias-Variance Tradeoff: Bias and Variance, Learning Curves.",
              },
            ],
          },
        },
        {
          module3: {
            subtopics: [
              {
                subtopic: "The linear Model II",
                text: "Logistic Regression, Nonlinear Transformation, Likelihood measure, Gradient Descent; Neural Networks: Neural Network Model, Backpropagation algorithm; Introduction to Radial Basis Function, Recurrent Neural Network, Convolution Neural Network and Deep Neural Network.",
              },
            ],
          },
        },
        {
          module4: {
            subtopics: [
              {
                subtopic: "Support Vector Machines (SVM)",
                text: "The Margin, Maximizing the Margin, The solution, Support Vectors, Nonlinear Transform; Kernel Methods: The Kernel methods, Soft-margin SVM; Overfitting: What is overfitting? Dealing with overfitting; Regularization: Regularization - informal, Regularization – formal, Weight decay, Choosing a regularizer.",
              },
            ],
          },
        },
      ],
      textbooks: [
        "Learning from Data - A short Course, Y. S. Abu-Mostafa, M. Magdon-Ismail, H. T. Lin, AMLbook.com.",
        "Computational Intelligence Principles, Techniques and Applications, Konar, Springer, 2012.",
        "Machine Learning, First Edition, T. Mitchell, McGraw-Hill, 1997.",
      ],
      referencebooks: [
        "Neural Networks and Learning Machines, Third Edition, S. Haykin, PHI Learning, 2009.",
        "Pattern Recognition and Machine Learning, Christopher M. Bishop, Springer, 2010.",
        "Deep Learning, Ian Goodfellow, Yoshua Bengio, Aaron Courville, Francis Bach, MIT Press, 2017.",
      ],
    },
  ];
  
  module.exports = courses;