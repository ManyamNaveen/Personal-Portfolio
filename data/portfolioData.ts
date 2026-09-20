export interface ProjectItem {
  id: string;
  modalId?: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  duration: string;
  role: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  hasCaseStudy: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  projects?: {
    name: string;
    period: string;
    tech: string;
    points: string[];
  }[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; isCore?: boolean }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  skills: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Manyam Naveen",
    title: "Java Backend Developer",
    subtitle: "Specializing in Spring Boot 3, REST APIs, PostgreSQL & Scalable Cloud Microservices. Delivering resilient distributed backends, rule engines, and payment integrations.",
    experienceYears: "3.8+",
    location: "Palwancha, India 507115",
    phone: "+91 9398365948",
    email: "naveenmanyam12@gmail.com",
    linkedin: "https://linkedin.com/in/naveenmanyam",
    github: "https://github.com/naveenmanyam",
    resumeUrl: "/resume/Manyam_Naveen_Resume_latest.pdf",
    availability: "Available for opportunities",
  },
  stats: [
    { value: "3.8+", label: "Years Experience", desc: "Backend Production Systems" },
    { value: "90%", label: "Manual Effort Cut", desc: "Automated Bureau Decisioning" },
    { value: "40%", label: "Latency Reduced", desc: "SQL & JPA Index Optimization" },
    { value: "0", label: "Post-Release Bugs", desc: "25+ Prod Hotfixes Delivered" },
  ],
  experiences: [
    {
      company: "FinxBridge / ArcLend",
      role: "Java Backend Developer",
      period: "Aug 2025 – Present",
      location: "Remote / Hybrid, India",
      summary: "Leading backend engineering for mission-critical fintech platforms covering digital payments, automated debt collections, and multi-tenant AI ornament valuation.",
      projects: [
        {
          name: "Collections Platform",
          period: "Dec 2025 – Present",
          tech: "Java 21, Spring Boot 3, PostgreSQL, Redis, AWS S3, Swagger, MSG91, India Post",
          points: [
            "Sole backend developer: architected database schema and all REST APIs end to end for a loan-collections platform handling overdue case lifecycle, telecalling, PTP, and OTS.",
            "Engineered rule-based strategy engine on Spring Scheduler evaluating DPD, geography, overdue amount, and active triggers.",
            "Implemented asynchronous batch processing ingesting bulk CSVs in chunks of 1,000 records, syncing with LOS.",
            "Integrated MSG91 omnichannel communication (WhatsApp, SMS, IVR, OTP) and India Post API for automatic legal notice tracking.",
            "Processes ~14,000 cases monthly with high reliability and zero downtime."
          ]
        },
        {
          name: "Payments Bridge",
          period: "Aug 2025 – Dec 2025",
          tech: "Java 21, Spring Boot 3, PostgreSQL, React, JWT, PhonePe APIs",
          points: [
            "Architected fintech payments middleware between enterprise merchants and PhonePe end to end: schema, secure APIs, and merchant dashboard.",
            "Integrated PhonePe offline flows (Dynamic QR, Payment Link, Collect Call) and online flows (Payment Gateway, Paylinks, Autopay).",
            "Built robust webhook processing, automated payment status verification, refunds, and auto-cancellation for expired sessions.",
            "Implemented multi-merchant isolation with JWT-based role-based access control (RBAC)."
          ]
        },
        {
          name: "Gold AI Valuation Platform",
          period: "Jul 2026 – Present",
          tech: "Java 21, Spring Boot 3, PostgreSQL, AWS S3, JWT, Multi-tenant Architecture",
          points: [
            "Designed backend schema and API gateway orchestrating 5 dedicated AI valuation models (clarity check, ornament detection, fraud check, weight detection, stone segmentation).",
            "Engineered asynchronous S3 image ingestion pipeline and loan amount valuation computation engine based on AI model confidence scores.",
            "Maintained fraud reference dataset in AWS S3 for cross-verification and implemented strict per-tenant RBAC configuration."
          ]
        }
      ],
      achievements: [
        "Delivered 3 end-to-end fintech products currently active in production.",
        "Built robust strategy scheduler driving 14,000 automated loan collection workflows monthly."
      ]
    },
    {
      company: "Virinchi Limited",
      role: "Java Developer",
      period: "Jun 2022 – Mar 2025",
      location: "Hyderabad, India",
      summary: "Engineered scalable backend RESTful micro-modules for 'Lendly', a flagship loan management platform covering underwriting, decision engines, and verification lifecycles.",
      projects: [
        {
          name: "Lendly Loan Decision Engine & Bureau Integrations",
          period: "Jun 2022 – Mar 2025",
          tech: "Java 8, Spring Boot, Spring Security, Spring Data JPA, Oracle, SQL Server, Postman",
          points: [
            "Built backend RESTful services for full loan lifecycles: underwriting, validation, applicant user management, and loan scheduling.",
            "Integrated third-party underwriting services (CLARITY, MLA, FACTOR TRUST, EQUIFAX) over REST with dynamic YAML configuration.",
            "Constructed decision-engine inquiry rules (SSN validation, DOB, bankruptcy triggers), slashing manual loan verification effort by 90%.",
            "Optimized complex SQL queries and relational indexing in Oracle/SQL Server, cutting query response times by over 40%.",
            "Implemented Spring Security (JWT, RBAC), centralized exception handling (@ControllerAdvice), and consistent API error envelope contracts.",
            "Awarded Employee of the Month within 3 months of joining for rapid ownership and zero-defect delivery."
          ]
        }
      ],
      achievements: [
        "Awarded 'Employee of the Month' within 3 months of joining.",
        "Resolved 25+ production issues with zero post-release regressions.",
        "Mentored junior engineers on SOLID principles, clean code, and RESTful API standards."
      ]
    }
  ],
  projects: [
    {
      id: "collections",
      modalId: "modal-collections",
      badge: "Production Active",
      badgeColor: "emerald",
      title: "Loan Collections Platform & Strategy Engine",
      tagline: "End-to-end debt collection engine handling 14K+ monthly cases with automated scheduling & multi-channel outreach.",
      duration: "Dec 2025 – Present",
      role: "Sole Backend Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Spring Scheduler", "AWS S3", "MSG91", "India Post"],
      metrics: [
        { label: "Monthly Cases", value: "14,000+" },
        { label: "Batch Ingestion", value: "1K/chunk" },
        { label: "Notice Tracking", value: "Real-time" }
      ],
      bulletPoints: [
        "Sole backend developer: built complete PostgreSQL relational schema and Spring Boot 3 REST APIs end to end.",
        "Rule-based strategy engine evaluating DPD, overdue balances, and regional parameters with automated cron scheduling.",
        "Asynchronous CSV batch ingestion processing large borrower uploads in 1,000-record chunks without thread starvation.",
        "Integrated MSG91 (WhatsApp, SMS, IVR, OTP) and India Post API for registered legal notice tracking."
      ],
      hasCaseStudy: true
    },
    {
      id: "payments",
      modalId: "modal-payments",
      badge: "Production Active",
      badgeColor: "cyan",
      title: "Fintech Payments Bridge (PhonePe)",
      tagline: "Unified merchant payment gateway middleware handling online and offline checkout flows, webhooks, and auto-refunds.",
      duration: "Aug 2025 – Dec 2025",
      role: "Backend Architect & Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "PhonePe APIs", "JWT", "Spring Security", "React"],
      metrics: [
        { label: "Success Rate", value: "99.9%" },
        { label: "Reconciliation", value: "Automated" },
        { label: "Isolation", value: "Multi-tenant" }
      ],
      bulletPoints: [
        "Implemented full PhonePe suite: Dynamic QR, Payment Links, Collect Calls, Autopay, and Gateway checkout.",
        "Built resilient webhook ingestion pipeline verifying HMAC signatures and updating internal payment state machines.",
        "Automated cancellation for expired payment requests and orchestrated one-click merchant refund processing.",
        "Configured multi-merchant onboarding with JWT-based role isolation and transaction audit logs."
      ],
      hasCaseStudy: true
    },
    {
      id: "gold-ai",
      modalId: undefined,
      badge: "Production Active",
      badgeColor: "amber",
      title: "Gold AI Valuation & Lending Middleware",
      tagline: "High-concurrency microservice orchestrating 5 computer vision AI models for automated collateral assessment.",
      duration: "Jul 2026 – Present",
      role: "Lead Backend Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "AWS S3", "JWT RBAC", "Computer Vision AI"],
      metrics: [
        { label: "AI Models", value: "5 Pipeline" },
        { label: "Valuation", value: "Automated" },
        { label: "Security", value: "Tenant RBAC" }
      ],
      bulletPoints: [
        "Orchestrated 5 deep-learning models: clarity check, ornament detection, fraud check, weight detection, and stone segmentation.",
        "Streamlined asset image uploads to Amazon S3 with pre-signed URLs and parallelized asynchronous AI inference calls.",
        "Built loan value computation engine factoring in real-time gold market rates, purity coefficients, and stone deductions.",
        "Maintained reference fraud dataset in AWS S3 for cross-comparison with incoming collateral submissions."
      ],
      hasCaseStudy: false
    },
    {
      id: "lendly",
      modalId: "modal-lendly",
      badge: "Core Enterprise",
      badgeColor: "indigo",
      title: "Lendly Loan Management & Underwriting Engine",
      tagline: "Enterprise loan lifecycle engine integrating multi-bureau credit decisioning and identity verification.",
      duration: "Jun 2022 – Mar 2025",
      role: "Java Backend Engineer",
      techStack: ["Java 8", "Spring Boot", "Spring Data JPA", "Oracle DB", "SQL Server", "Equifax API", "Clarity API"],
      metrics: [
        { label: "Manual Effort", value: "-90%" },
        { label: "Query Latency", value: "-40%" },
        { label: "Post-release Bugs", value: "Zero" }
      ],
      bulletPoints: [
        "Built mission-critical backend REST APIs powering loan origination, validation, customer KYC, and repayment schedules.",
        "Integrated credit and fraud underwriting bureaus (CLARITY, MLA, FACTOR TRUST, EQUIFAX) via flexible YAML configurations.",
        "Engineered automatic rule evaluator checking SSN, date of birth, income eligibility, and bankruptcy history.",
        "Tuned high-volume SQL queries and JPA execution plans, dropping database query latency by over 40%."
      ],
      hasCaseStudy: true
    }
  ],
  skills: [
    {
      title: "Languages & Core",
      icon: "code",
      skills: [
        { name: "Java 21", level: "Advanced", isCore: true },
        { name: "Java 8", level: "Advanced", isCore: true },
        { name: "SQL", level: "Advanced", isCore: true },
        { name: "Multithreading & Concurrency", level: "Advanced", isCore: true },
        { name: "Streams & Lambdas", level: "Advanced" },
        { name: "OOP & SOLID Principles", level: "Expert", isCore: true }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: "layers",
      skills: [
        { name: "Spring Boot 3", level: "Expert", isCore: true },
        { name: "Spring MVC", level: "Advanced" },
        { name: "Spring Security (JWT, RBAC)", level: "Advanced", isCore: true },
        { name: "Spring Data JPA & Hibernate", level: "Advanced", isCore: true },
        { name: "Spring Scheduler", level: "Advanced" },
        { name: "RESTful Web Services", level: "Expert", isCore: true }
      ]
    },
    {
      title: "Databases & Caching",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: "Advanced", isCore: true },
        { name: "Redis", level: "Advanced", isCore: true },
        { name: "Oracle DB", level: "Intermediate" },
        { name: "SQL Server", level: "Intermediate" },
        { name: "Schema & Index Optimization", level: "Advanced" },
        { name: "Batch Data Ingestion", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud",
      skills: [
        { name: "AWS S3 & EC2", level: "Intermediate", isCore: true },
        { name: "AWS IAM, SNS, SQS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate", isCore: true },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Maven", level: "Advanced" },
        { name: "Postman & Swagger / OpenAPI", level: "Expert", isCore: true }
      ]
    },
    {
      title: "API & Integrations",
      icon: "cpu",
      skills: [
        { name: "PhonePe Payments API", level: "Production", isCore: true },
        { name: "MSG91 Omnichannel (WhatsApp/SMS)", level: "Production", isCore: true },
        { name: "India Post Legal Tracking", level: "Production" },
        { name: "Credit Bureau APIs (Equifax/Clarity)", level: "Production" },
        { name: "Webhook State Machines", level: "Advanced" },
        { name: "SOAP & XML Services", level: "Intermediate" }
      ]
    },
    {
      title: "Architecture & Design",
      icon: "git-merge",
      skills: [
        { name: "Low-Level Design (LLD)", level: "Advanced", isCore: true },
        { name: "Design Patterns (Factory, Singleton)", level: "Advanced" },
        { name: "Multi-Tenant Architecture", level: "Advanced", isCore: true },
        { name: "Async & Batch Processing", level: "Advanced" },
        { name: "Microservices & Distributed Systems", level: "Intermediate" },
        { name: "Frontend Integration (React)", level: "Intermediate" }
      ]
    }
  ],
  engineeringApproach: [
    {
      title: "Clean Code & Low-Level Design",
      desc: "Strict adherence to SOLID principles, Factory, and Singleton patterns ensuring service-layer maintainability and decoupling from vendor APIs."
    },
    {
      title: "Resilient Distributed Systems",
      desc: "Idempotent payment webhooks, database transaction isolation, Redis caching, and automated retry mechanisms for zero data loss."
    },
    {
      title: "High Throughput & Batch Processing",
      desc: "Non-blocking chunked batch execution (1,000 records/chunk) and cron strategy engines capable of processing tens of thousands of loan accounts."
    },
    {
      title: "Defense-in-Depth Security",
      desc: "Spring Security filter chains with stateless JWT validation, fine-grained Role-Based Access Control (RBAC), and strict multi-tenant data boundaries."
    }
  ],
  education: [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Vijaya Engineering College",
      location: "Khammam, India",
      period: "Sep 2017 – Sep 2020",
      score: "75% Aggregated",
      highlights: [
        "Strong foundation in algorithmic logic, circuit architecture, and mathematics.",
        "Transitioned directly into core software engineering and object-oriented backend programming."
      ]
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institution: "Mother Teresa Institute of Science & Technology",
      location: "Sathupally, India",
      period: "Oct 2014 – Apr 2017",
      score: "83% Distinction",
      highlights: [
        "Distinction grade with emphasis on technical problem solving and systems design."
      ]
    }
  ],
  certifications: [
    {
      name: "Spring Boot (Essential Skills)",
      issuer: "Scaler",
      skills: "Spring Boot 3, Dependency Injection, REST APIs, JPA, Actuator",
      badge: "Framework Mastery",
      badgeColor: "emerald"
    },
    {
      name: "Master Java Concurrency & Multithreading",
      issuer: "Scaler",
      skills: "Thread Pools, Synchronizers, CompletableFuture, Concurrent Collections",
      badge: "Core Engineering",
      badgeColor: "cyan",
      image: "/certificates/java-concurrency-multithreading.png",
      pdfUrl: "/Certificate_Master Java Concurrency & Multithreading.pdf"
    },
    {
      name: "SQL Using AI",
      issuer: "AI for Techies",
      skills: "Advanced Query Optimization, Analytical Functions, Index Strategy",
      badge: "AI & Databases",
      badgeColor: "violet",
      image: "/certificates/sql-with-ai.png",
      pdfUrl: "/SQL_With_AI_Certificate.pdf"
    }
  ]
};
