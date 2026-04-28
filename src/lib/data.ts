import { Achievement, ContactInfo, Education, Experience, PersonalInfo, Project, Skill } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Phan Tai Nguyen",
    title: "AI Engineer",
    tagline: "Building AI-Powered Solutions for Real-World Impact",
    bio: `Software engineer with 5+ years of experience in fullstack development, DevOps, and cloud-native solutions. 
        MSc in Information Technology from Carnegie Mellon University Africa. Currently conducting research on 
        Large Language Models at the Upanzi Network, specializing in LLM-powered policy and healthcare data analysis. 
        Passionate about architecting scalable applications, building CI/CD pipelines, and applying AI to solve 
        complex problems in healthcare and policy domains.`,
    profileImage: "/images/brhane-giday.jpg",
    resumeUrl: "/documents/AIEngineerIntern__PhanTaiNguyen_EN_Resumé.pdf",
    cvUrl: "/documents/AIEngineerIntern__PhanTaiNguyen_EN_Resumé.pdf",
};

export const contactInfo: ContactInfo = {
    email: "nguyenphan201203@gmail.com",
    phone: "+84939104390",
    location: "District 8, HCMC, Vietnam",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/nguyenfan20",
            username: "nguyenfan20",
            icon: "github",
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/nguyen-fan/",
            username: "nguyen-fan",
            icon: "linkedin",
        },
        // {
        //     platform: "YouTube",
        //     url: "https://youtube.com/@bashandbeyond",
        //     username: "Bash & Beyond",
        //     icon: "youtube",
        // },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/t.ngywn",
            username: "t.ngywn",
            icon: "instagram",
        },
    ],
};

export const experiences: Experience[] = [
    {
        id: "1",
        title: "AI Engineer Intern",
        company: "Anh Minh Technology Trading Co., Ltd.",
        location: "Ho Chi Minh City, Vietnam",
        startDate: "2025-06",
        endDate: "2025-08",
        description:
            "Identified and automated repetitive manual workflows across multiple departments by integrating AI tools, reducing time spent on routine tasks and measurably improving employee productivity.",
        achievements: [
            "Identified and automated repetitive manual workflows across multiple departments by integrating AI tools, reducing time spent on routine tasks and measurably improving employee productivity",
            "Designed and fine-tuned prompt engineering strategies tailored to each department's use cases, enabling non-technical staff to interact effectively with AI tools without prior ML experience",
            "Conducted internal training sessions to guide employees on effective prompting techniques, accelerating AI adoption and ensuring consistent, high-quality outputs across teams",
        ],
        technologies: ["AI Tools", "Prompt Engineering", "Workflow Automation", "AI Integration", "Employee Training"],
        type: "internship",
    },
    // {
    //     id: "2",
    //     title: "Frontend Engineer",
    //     company: "Better Mobile Security",
    //     location: "Remote, USA",
    //     startDate: "2022-09",
    //     endDate: "2024-08",
    //     description:
    //         "Led frontend development teams for large-scale security applications using modern web technologies. Developed secure dashboards, optimized performance for thousands of users, and mentored junior engineers while integrating CI/CD workflows.",
    //     achievements: [
    //         "Led frontend team for large-scale security applications serving thousands of users",
    //         "Developed secure dashboards with advanced security features and user management",
    //         "Optimized application performance achieving significant load time improvements",
    //         "Integrated comprehensive CI/CD workflows and established development best practices",
    //         "Mentored junior engineers and conducted extensive code reviews",
    //         "Built scalable React applications with TypeScript and Next.js",
    //     ],
    //     technologies: ["React", "Next.js", "TypeScript", "Security Dashboards", "CI/CD", "Performance Optimization"],
    //     type: "full-time",
    // },
    // {
    //     id: "3",
    //     title: "Frontend Engineer",
    //     company: "DoubleDice",
    //     location: "Remote, Belgium",
    //     startDate: "2022-03",
    //     endDate: "2022-09",
    //     description:
    //         "Built Web3-enabled interfaces with advanced wallet integrations and blockchain connectivity. Focused on improving scalability and optimizing user experience for decentralized applications.",
    //     achievements: [
    //         "Built Web3-enabled interfaces with Next.js and Redux architecture",
    //         "Implemented secure wallet integrations for cryptocurrency transactions",
    //         "Improved application scalability and performance optimization",
    //         "Enhanced user experience for decentralized application interactions",
    //         "Developed responsive interfaces with modern design patterns",
    //     ],
    //     technologies: ["Next.js", "Redux", "Web3.js", "Wallet Integration", "Blockchain", "DeFi"],
    //     type: "contract",
    // },
    // {
    //     id: "4",
    //     title: "Frontend Developer & UI/UX Designer",
    //     company: "MAD Technologies",
    //     location: "Ethiopia",
    //     startDate: "2020-09",
    //     endDate: "2021-10",
    //     description:
    //         "Delivered client websites combining WordPress with custom React components. Designed intuitive user interfaces using Figma and Adobe XD, focusing on user experience and modern design principles.",
    //     achievements: [
    //         "Delivered multiple client websites using WordPress with custom React components",
    //         "Designed intuitive user interfaces in Figma and Adobe XD",
    //         "Implemented responsive designs with modern UI/UX principles",
    //         "Collaborated with clients to understand requirements and deliver solutions",
    //         "Built custom React components for WordPress integration",
    //     ],
    //     technologies: ["WordPress", "React", "Figma", "Adobe XD", "UI/UX Design", "Custom Components"],
    //     type: "full-time",
    // },
    // {
    //     id: "5",
    //     title: "Team Lead & Frontend Engineer",
    //     company: "North Computing Group",
    //     location: "Ethiopia",
    //     startDate: "2019-11",
    //     endDate: "2020-08",
    //     description:
    //         "Led a small engineering team to deliver enterprise web solutions. Focused on building scalable, responsive, and user-friendly applications while managing team coordination and project delivery.",
    //     achievements: [
    //         "Led small engineering team for enterprise web solution delivery",
    //         "Focused on scalability, responsiveness, and usability in UI development",
    //         "Managed project timelines and team coordination effectively",
    //         "Delivered enterprise-grade web applications for business clients",
    //         "Established development workflows and quality standards",
    //     ],
    //     technologies: ["JavaScript", "React", "Team Leadership", "Enterprise Solutions", "Project Management"],
    //     type: "full-time",
    // },
];

export const education: Education[] = [
    {
        id: "1",
        degree: "Bachelor of Science",
        field: "Information Technology",
        institution: "SaiGon University",
        location: "Ho Chi Minh City, Vietnam",
        startDate: "2021-09",
        endDate: "2026-06",
        relevantCoursework: [
            "Machine Learning",
            "Artificial Intelligence",
            "Data Structures & Algorithms",
            "Natural Language Processing",
            "Deep Learning",
        ],
        description:
            "Currently pursuing Bachelor of Science in Information Technology with focus on AI and Machine Learning. Relevant coursework includes Machine Learning, Artificial Intelligence, and Data Structures & Algorithms.",
    },
];

export const projects: Project[] = [
    {
        id: "0",
        title: "SGU-Agent — Personalized Academic Recommendation System",
        description:
            "Flask-based web application that recommends academic resources tailored to students' profiles and queries using semantic search and explainable AI.",
        longDescription:
            "**The Challenge:** Students need personalized academic resource recommendations that consider their profiles and learning goals.\n\n**My Solution:** Built an end-to-end Flask web app that recommends academic resources by fusing semantic search (Sentence-BERT + FAISS HNSWFlat) with Collaborative Filtering (Jaccard similarity) for hybrid, personalized retrieval.\n\n**Technical Innovation:** Integrated VietAI/vit5-base to generate natural language explanations per recommendation, making AI decisions transparent to students. Implemented cold-start handling for new users via profile-based content filtering (major, academic year).\n\n**Solo Project:** Independently designed architecture, built all modules, and deployed the full-stack application.",
        technologies: ["Flask", "Sentence-BERT", "FAISS", "Collaborative Filtering", "T5 Vietnamese", "SQLite"],
        category: "AI/ML Application",
        features: [
            "Semantic Search with Sentence-BERT + FAISS",
            "Collaborative Filtering",
            "AI-Generated Explanations",
            "Cold-Start Handling",
            "Profile-Based Filtering",
            "Full-Stack Deployment",
        ],
        status: "completed",
        startDate: "Feb 2025",
        endDate: "Apr 2025",
        highlights: [
            "Hybrid recommendation system combining semantic search and collaborative filtering",
            "Explainable AI with natural language explanations using T5",
            "Cold-start solution for new users",
            "Solo project with independent architecture design",
        ],
        imageUrl: undefined,
        liveUrl: "#",
        githubUrl: "https://github.com/nguyenfan20/SGU-Agent",
    },
    {
        id: "1",
        title: "Traffic SGU — Vietnamese Traffic Law Q&A System (RAG)",
        description:
            "Tkinter-based app with AI chatbot featuring RAG pipeline for managing student attendance and providing accurate traffic law information.",
        longDescription:
            "**The Challenge:** Vietnamese traffic regulation documents are complex and students need quick, accurate Q&A about traffic laws without extensive manual searching.\n\n**My Solution:** Designed a full RAG pipeline over Vietnamese traffic regulation documents (Nghị định 168/2024/NĐ-CP), combining semantic chunking, FAISS vector retrieval, and a 4-bit quantized LLM (zephyr-7b-beta) for accurate, citation-grounded answers.\n\n**Technical Excellence:** Deployed a domain-specific Vietnamese embedding model (AITeamVN/Vietnamese_Embedding) for high-quality passage retrieval, achieving Excellent ratings in Correctness, Relevance, and Completeness. Built an interactive Gradio chatbot UI with bilingual (Vietnamese/English) prompt routing via language detection.\n\n**Team Collaboration:** Team size: 3 members, served as Project Lead & Architecture Designer.",
        technologies: ["LangChain", "FAISS", "Vietnamese Embedding", "Zephyr-7B", "Gradio", "Python"],
        category: "AI/ML Application",
        features: [
            "Full RAG Pipeline Implementation",
            "Semantic Chunking",
            "FAISS Vector Retrieval",
            "4-bit Quantized LLM",
            "Domain-Specific Embeddings",
            "Bilingual Chatbot UI",
            "Citation-Grounded Answers",
        ],
        status: "completed",
        startDate: "Feb 2025",
        endDate: "Apr 2025",
        highlights: [
            "RAG pipeline for Vietnamese traffic regulations",
            "Domain-specific embedding model for high-quality retrieval",
            "Excellent ratings in Correctness, Relevance, and Completeness",
            "Bilingual Gradio UI with language detection",
            "Project Lead for 3-person team",
        ],
        imageUrl: undefined,
        liveUrl: "#",
        githubUrl: "https://github.com/nguyenfan20/Traffic_SGU",
    },
    // {
    //     id: "2",
    //     title: "Nabayt — Professional Storytelling Platform",
    //     description:
    //         "A platform for authentic storytelling where real voices thrive. Features AI-powered content moderation that scans every post in under 10 seconds, instant publishing, and a safe community for writers and readers.",
    //     longDescription:
    //         "**The Challenge:** Existing content platforms often lack safe, respectful spaces for authentic storytelling. Writers face noise, judgment, and slow moderation processes that stifle meaningful expression.\n\n**My Role:** As AI/Software Engineer, I built the AI moderation pipeline, backend services, and contributed to the full-stack architecture powering the platform.\n\n**Technical Innovation:** Developed an advanced AI moderation system that scans every post in under 10 seconds, flagging inappropriate content for human review while automatically approving 99% of submissions. Built scalable backend services with NestJS and PostgreSQL, ensuring reliable performance as the community grows.\n\n**Impact:** Nabayt provides a calm, respectful space where storytellers can share experiences without pressure or judgment, supported by responsible AI moderation that keeps the community safe and welcoming.",
    //     technologies: ["Next.js", "NestJS", "PostgreSQL", "AI Moderation", "TypeScript", "Telegram Bot", "REST APIs"],
    //     category: "Full-Stack Development",
    //     features: [
    //         "AI-Powered Content Moderation",
    //         "Instant Publishing (99% auto-approved)",
    //         "Anonymous Storytelling",
    //         "Community Safety & Guidelines",
    //         "Responsive Web Platform",
    //         "Telegram Bot Integration",
    //     ],
    //     status: "completed",
    //     startDate: "Oct 2024",
    //     endDate: "Present",
    //     highlights: [
    //         "AI moderation scans posts in under 10 seconds",
    //         "99% of content approved automatically",
    //         "Built with modern full-stack architecture",
    //         "Focus on community safety and authentic expression",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "https://www.nabayt.com",
    //     githubUrl: "#",
    // },
    // {
    //     id: "3",
    //     title: "Curricula - AI-Powered Academic Advisor",
    //     description:
    //         "AI-powered platform helping students plan academic paths aligned with career goals using LLM-based recommendation engine.",
    //     longDescription:
    //         "**The Challenge:** Students spend countless hours trying to navigate complex university catalogs and prerequisite chains, often making suboptimal course selections that delay graduation or don't align with career goals.\n\n**My Solution:** Architected a comprehensive AI platform leveraging Large Language Models to parse university catalogs and provide personalized academic recommendations. Built both frontend and backend systems with CI/CD pipelines for seamless deployment.\n\n**Technical Innovation:** Designed recommendation engine using advanced NLP techniques to understand course relationships and career alignment. Implemented scalable architecture with Next.js frontend, Node.js backend, and MongoDB for data persistence.\n\n**Recognition:** Platform was successfully incubated at CMU-Africa's Industry Innovation Lab, demonstrating its potential for real-world impact in educational technology.",
    //     technologies: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "LLMs", "CI/CD", "Academic Analytics"],
    //     category: "AI/ML Application",
    //     features: [
    //         "AI-Powered Course Recommendations",
    //         "University Catalog Parsing",
    //         "Academic Path Planning",
    //         "Career Goal Alignment",
    //         "Student and Faculty Workflows",
    //         "Scalable Microservices Architecture",
    //     ],
    //     status: "completed",
    //     startDate: "Jan 2024",
    //     endDate: "Jun 2024",
    //     highlights: [
    //         "Successfully incubated at CMU-Africa's Industry Innovation Lab",
    //         "AI-driven recommendations using Large Language Models",
    //         "Full-stack development with modern web technologies",
    //         "Comprehensive CI/CD pipeline implementation",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "4",
    //     title: "AI-Powered Policy Analyzer for Africa",
    //     description:
    //         "AI chatbot with LLM integration making complex African policies accessible through interactive Q&A and analysis.",
    //     longDescription:
    //         "**The Challenge:** African policy documents are often complex, fragmented, and difficult for citizens, researchers, and policymakers to navigate effectively, creating barriers to informed decision-making.\n\n**My Solution:** Developed a sophisticated AI-powered platform with a sleek, professional UI that makes complex policies accessible to all stakeholders. Integrated advanced LLM chatbot for interactive policy Q&A sessions.\n\n**Technical Excellence:** Built responsive design with smooth API integration, ensuring optimal user experience across devices. Implemented advanced natural language processing for accurate policy interpretation and contextual responses.",
    //     technologies: [
    //         "React",
    //         "Next.js",
    //         "LLMs",
    //         "OpenAI API",
    //         "Policy Analysis",
    //         "Conversational AI",
    //         "Responsive Design",
    //     ],
    //     category: "AI/ML Application",
    //     features: [
    //         "Interactive Policy Q&A Chatbot",
    //         "Professional UI for Complex Data",
    //         "LLM Integration for Policy Analysis",
    //         "Responsive Design",
    //         "API Integration",
    //         "Multi-stakeholder Access",
    //     ],
    //     status: "completed",
    //     startDate: "Mar 2024",
    //     endDate: "May 2024",
    //     highlights: [
    //         "Sleek, professional UI making complex policies accessible",
    //         "AI chatbot powered by Large Language Models",
    //         "Responsive design ensuring cross-device compatibility",
    //         "Smooth API integration for seamless user experience",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "5",
    //     title: "LLM-Based Healthcare Data Harmonization",
    //     description:
    //         "AI system using LLMs to harmonize fragmented healthcare datasets across Africa for better research and policy making.",
    //     longDescription:
    //         "**The Challenge:** Healthcare datasets across Africa are fragmented with inconsistent terminology, formats, and missing data, making it difficult for researchers and policymakers to conduct comprehensive analysis.\n\n**My Solution:** Built a comprehensive system using Large Language Models to automatically harmonize healthcare datasets, unifying terminology and formats while handling missing data intelligently.\n\n**Technical Innovation:** Developed robust pipelines for data processing, terminology mapping, and quality assurance. Created both frontend visualization tools and backend APIs for scalable data access.",
    //     technologies: [
    //         "Python",
    //         "LLMs",
    //         "Healthcare APIs",
    //         "Data Processing",
    //         "FastAPI",
    //         "Data Visualization",
    //         "ETL Pipelines",
    //     ],
    //     category: "AI/ML Application",
    //     features: [
    //         "Automated Data Harmonization",
    //         "Terminology Unification",
    //         "Missing Data Handling",
    //         "Frontend Visualization Tools",
    //         "Scalable Backend APIs",
    //         "Healthcare Data Standards",
    //     ],
    //     status: "completed",
    //     startDate: "Feb 2024",
    //     endDate: "Apr 2024",
    //     highlights: [
    //         "LLM-powered healthcare data harmonization system",
    //         "Unified terminology and format standardization",
    //         "Frontend tools for easy data visualization",
    //         "Scalable backend APIs for data access",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "6",
    //     title: "StayHub - Property Booking Platform",
    //     description:
    //         "Full-featured property booking platform with advanced booking management, secure payments, and comprehensive property listings similar to Airbnb.",
    //     longDescription:
    //         "Architected and developed a comprehensive end-to-end property rental platform with modern web technologies. Implemented advanced booking system, secure payment processing, and intuitive user interface for both property owners and renters.",
    //     technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "CI/CD", "Docker", "Payment Integration"],
    //     category: "Full-Stack Development",
    //     features: [
    //         "Property Listing Management",
    //         "Advanced Booking System",
    //         "Secure Payment Processing",
    //         "User Authentication",
    //         "Responsive Design",
    //         "Admin Dashboard",
    //     ],
    //     status: "completed",
    //     startDate: "Jun 2023",
    //     endDate: "Oct 2023",
    //     highlights: [
    //         "End-to-end platform development",
    //         "Docker containerization and deployment",
    //         "Comprehensive CI/CD pipeline",
    //         "Modern web technologies integration",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "7",
    //     title: "Customer Support AI Chatbot for Ethiopian Airlines",
    //     description:
    //         "AI chatbot with RAG pipelines providing real-time customer support using airline-specific knowledge.",
    //     longDescription:
    //         "**The Challenge:** Ethiopian Airlines faced increasing customer service demands with traditional support creating bottlenecks and long wait times for customers.\n\n**My Solution:** Developed an intelligent AI chatbot using RAG (Retrieval-Augmented Generation) pipelines to provide instant, accurate responses to customer queries using airline-specific datasets including fares, schedules, and policies.\n\n**Technical Excellence:** Built scalable web application with Next.js frontend and Node.js backend, implementing secure APIs for data access and chat functionality.",
    //     technologies: [
    //         "Next.js",
    //         "Node.js",
    //         "RAG Pipelines",
    //         "LLMs",
    //         "Airline APIs",
    //         "Customer Support",
    //         "Real-time Chat",
    //     ],
    //     category: "AI/ML Application",
    //     features: [
    //         "Real-time Customer Support",
    //         "RAG Pipeline Integration",
    //         "Airline-specific Knowledge Base",
    //         "Secure API Implementation",
    //         "Scalable Web Application",
    //         "Multi-language Support",
    //     ],
    //     status: "completed",
    //     startDate: "Jan 2024",
    //     endDate: "Mar 2024",
    //     highlights: [
    //         "RAG pipelines for accurate, context-aware responses",
    //         "Integration with airline-specific datasets",
    //         "Scalable web application architecture",
    //         "Real-time customer query processing",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "8",
    //     title: "Role-Based Event Management System",
    //     description:
    //         "Comprehensive event management platform with multi-role user management, event creation, booking workflows, and administrative features.",
    //     longDescription:
    //         "Built a full-featured event management system supporting multiple user roles including admins, event coordinators, and participants. Implemented comprehensive event creation, booking management, and real-time features.",
    //     technologies: [
    //         "React",
    //         "Material-UI",
    //         "Tailwind CSS",
    //         "Role-Based Access",
    //         "Event Management",
    //         "Responsive Design",
    //     ],
    //     category: "Full-Stack Development",
    //     features: [
    //         "Multi-role User Management",
    //         "Event Creation and Management",
    //         "Booking System",
    //         "Real-time Updates",
    //         "Administrative Dashboard",
    //         "Responsive Interface",
    //     ],
    //     status: "completed",
    //     startDate: "Aug 2023",
    //     endDate: "Dec 2023",
    //     highlights: [
    //         "Role-based access control implementation",
    //         "Reusable React components with Material-UI",
    //         "Smooth API integrations",
    //         "Responsive design for all device types",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "9",
    //     title: "Open Data Portal",
    //     description:
    //         "Platform for researchers to upload, manage, and share datasets with advanced search capabilities, data validation, and collaboration features.",
    //     longDescription:
    //         "Designed and built a comprehensive data sharing platform enabling researchers and organizations to publish, discover, and collaborate on datasets. Features include advanced search, metadata management, and data visualization tools.",
    //     technologies: ["React", "Next.js", "TypeScript", "Data Management", "Search", "Accessibility"],
    //     category: "Frontend Engineering",
    //     features: [
    //         "Dataset Upload and Management",
    //         "Advanced Search Functionality",
    //         "Metadata Entry and Validation",
    //         "Data Preview Tools",
    //         "Collaboration Features",
    //         "Accessibility Compliance",
    //     ],
    //     status: "completed",
    //     startDate: "Apr 2023",
    //     endDate: "Jul 2023",
    //     highlights: [
    //         "Comprehensive data management platform",
    //         "Advanced search and filtering capabilities",
    //         "Dataset validation and preview tools",
    //         "Focus on accessibility and performance",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
    // {
    //     id: "10",
    //     title: "Salon Management System",
    //     description:
    //         "Complete salon management solution with booking system, staff management, and operational workflows for salon businesses.",
    //     longDescription:
    //         "Designed and implemented a comprehensive salon management system featuring intuitive UI/UX for booking management, staff coordination, and salon operations. Built with modern React and TypeScript architecture.",
    //     technologies: ["React", "TypeScript", "Booking System", "Staff Management", "API Integration"],
    //     category: "Frontend Engineering",
    //     features: [
    //         "Appointment Booking System",
    //         "Staff Management",
    //         "Service Management",
    //         "Customer Database",
    //         "Payment Integration",
    //         "Reporting Dashboard",
    //     ],
    //     status: "completed",
    //     startDate: "Jan 2023",
    //     endDate: "Mar 2023",
    //     highlights: [
    //         "Intuitive UI/UX design and implementation",
    //         "Comprehensive booking and scheduling system",
    //         "Staff management and coordination tools",
    //         "API integration for payments and scheduling",
    //     ],
    //     imageUrl: undefined,
    //     liveUrl: "#",
    //     githubUrl: "#",
    // },
];

export const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Programming Languages", proficiency: "expert", yearsOfExperience: 2 },
    { name: "C", category: "Programming Languages", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "C++", category: "Programming Languages", proficiency: "intermediate", yearsOfExperience: 1 },

    // Frameworks & Libraries - AI/ML
    { name: "PyTorch", category: "Frameworks & Libraries", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "TensorFlow Lite", category: "Frameworks & Libraries", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "Flask", category: "Frameworks & Libraries", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "LangChain", category: "Frameworks & Libraries", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "FAISS", category: "Frameworks & Libraries", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Gradio", category: "Frameworks & Libraries", proficiency: "advanced", yearsOfExperience: 1 },

    // AI & Machine Learning
    { name: "RAG Pipelines", category: "AI/ML", proficiency: "expert", yearsOfExperience: 1 },
    { name: "BERT", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Sentence-BERT", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "T5 Vietnamese", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "LLM Fine-tuning", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Semantic Search", category: "AI/ML", proficiency: "expert", yearsOfExperience: 1 },
    { name: "Collaborative Filtering", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Sentence Transformers", category: "AI/ML", proficiency: "advanced", yearsOfExperience: 1 },

    // Developer Tools
    { name: "Git", category: "Developer Tools", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "VS Code", category: "Developer Tools", proficiency: "expert", yearsOfExperience: 2 },
    { name: "Google Colab", category: "Developer Tools", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Jupyter Notebook", category: "Developer Tools", proficiency: "advanced", yearsOfExperience: 1 },

    // Research & Specialization
    { name: "AI Tool Evaluation", category: "Research", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Performance Analysis", category: "Research", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "Indoor Positioning Systems", category: "Research", proficiency: "intermediate", yearsOfExperience: 1 },

    // Database
    { name: "MongoDB", category: "Database", proficiency: "advanced", yearsOfExperience: 4 },
    { name: "PostgreSQL", category: "Database", proficiency: "advanced", yearsOfExperience: 3 },
    { name: "MySQL", category: "Database", proficiency: "advanced", yearsOfExperience: 3 },

    // // Commented out - Not in CV
    // { name: "React", category: "Frontend", proficiency: "expert", yearsOfExperience: 5 },
    // { name: "Next.js", category: "Frontend", proficiency: "expert", yearsOfExperience: 4 },
    // { name: "TypeScript", category: "Frontend", proficiency: "expert", yearsOfExperience: 4 },
    // { name: "JavaScript", category: "Frontend", proficiency: "expert", yearsOfExperience: 5 },
    // { name: "Tailwind CSS", category: "Frontend", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Material-UI", category: "Frontend", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Redux", category: "Frontend", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "GraphQL", category: "Frontend", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Node.js", category: "Backend", proficiency: "expert", yearsOfExperience: 4 },
    // { name: "Express.js", category: "Backend", proficiency: "expert", yearsOfExperience: 4 },
    // { name: "FastAPI", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },
    // { name: "Java", category: "Backend", proficiency: "intermediate", yearsOfExperience: 2 },
    // { name: "MongoDB", category: "Database", proficiency: "advanced", yearsOfExperience: 4 },
    // { name: "PostgreSQL", category: "Database", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "MySQL", category: "Database", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "AWS", category: "Cloud/DevOps", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Docker", category: "Cloud/DevOps", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Kubernetes", category: "Cloud/DevOps", proficiency: "intermediate", yearsOfExperience: 2 },
    // { name: "Terraform", category: "Cloud/DevOps", proficiency: "intermediate", yearsOfExperience: 2 },
    // { name: "GitHub Actions", category: "Cloud/DevOps", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "CI/CD Pipelines", category: "Cloud/DevOps", proficiency: "advanced", yearsOfExperience: 3 },
    // { name: "Linux", category: "Cloud/DevOps", proficiency: "advanced", yearsOfExperience: 4 },
    // { name: "Fullstack Engineering", category: "Core", proficiency: "expert", yearsOfExperience: 5 },
    // { name: "Software Architecture", category: "Core", proficiency: "advanced", yearsOfExperience: 4 },
    // { name: "DevOps Automation", category: "Core", proficiency: "advanced", yearsOfExperience: 3 },
];

// export const achievements: Achievement[] = [
//     {
//         id: "1",
//         title: "AWS Certified Cloud Practitioner",
//         description: "Certified in cloud computing fundamentals and AWS services",
//         date: "2024",
//         category: "certification",
//     },
//     {
//         id: "2",
//         title: "CompTIA Linux+ Certified",
//         description: "Advanced Linux system administration and DevOps skills certification",
//         date: "2024",
//         category: "certification",
//     },
//     {
//         id: "3",
//         title: "Bash & Beyond YouTube Channel Founder",
//         description: "Founded educational YouTube channel teaching Linux & DevOps through real-world scenarios",
//         date: "2023",
//         category: "content-creation",
//     },
//     {
//         id: "4",
//         title: "CMU-Africa Industry Innovation Lab Incubation",
//         description: "Curricula platform successfully incubated at Carnegie Mellon University Africa's Innovation Lab",
//         date: "2024",
//         category: "award",
//     },
//     {
//         id: "5",
//         title: "Research Leadership in AI Healthcare Applications",
//         description: "Leading research on LLM-powered healthcare data analysis at Upanzi Network",
//         date: "2025",
//         category: "research",
//     },
// ];

// Navigation configuration
export const navSections = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
];

// SEO configuration
export const seoConfig = {
    title: "Phan Tai Nguyen - AI Engineer",
    description:
        "AI Engineer specializing in RAG pipelines, Large Language Models, and semantic search. Experienced in building intelligent recommendation systems and AI-powered applications. Proficient in Python, PyTorch, TensorFlow Lite, and modern AI frameworks.",
    keywords: [
        "AI Engineer",
        "Machine Learning",
        "RAG Pipeline",
        "Large Language Models",
        "Semantic Search",
        "PyTorch",
        "TensorFlow",
        "Python",
        "LLM Fine-tuning",
        "Collaborative Filtering",
        "Vietnamese Embeddings",
        "Flask",
        "LangChain",
        "FAISS",
        "Recommendation System",
    ],
    ogImage: "/images/og.png",
    canonicalUrl: "https://phantainguyen-portfolio.vercel.app",
};

// Statistics for hero section
export const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Delivered", value: "2+" },
    { label: "AI Systems Built", value: "2+" },
    { label: "Collaboration", value: "3+" },
];

// Featured technologies for hero animation
export const featuredTechnologies = ["Python", "PyTorch", "RAG Pipeline", "LangChain", "FAISS", "Semantic Search", "Flask", "Machine Learning"];

// Interests and Focus Areas
export const interests = [
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Semantic Search & Embeddings",
    "Machine Learning Applications",
    "AI for Education",
    "Recommendation Systems",
    "Natural Language Processing",
    "AI Research & Development",
];

// Featured project IDs for homepage
export const featuredProjectIds = ["0", "1"];

// Skills grouped by category for display
export const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {} as Record<string, Skill[]>);

// Recent projects (last 2 years)
export const recentProjects = projects
    .filter((project) => {
        const startYear = parseInt(project.startDate.split(" ")[1]);
        return startYear >= 2023;
    })
    .sort((a, b) => {
        const yearA = parseInt(a.startDate.split(" ")[1]);
        const yearB = parseInt(b.startDate.split(" ")[1]);
        return yearB - yearA;
    });

// Helper functions
export const getProjectsByCategory = (category: string) => projects.filter((project) => project.category === category);

export const getSkillsByProficiency = (proficiency: string) =>
    skills.filter((skill) => skill.proficiency === proficiency);

export const getFeaturedProjects = () => projects.filter((project) => featuredProjectIds.includes(project.id));

export const getCurrentExperience = () => experiences.find((exp) => !exp.endDate);

export const getCompletedProjects = () => projects.filter((project) => project.status === "completed");

export const getExpertSkills = () => skills.filter((skill) => skill.proficiency === "expert");

// export const getRecentAchievements = () => achievements.sort((a, b) => parseInt(b.date) - parseInt(a.date)).slice(0, 3);

// Animation variants for Framer Motion
export const animationVariants = {
    fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    slideIn: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
    },
};
