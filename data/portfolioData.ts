export interface ProjectItem {
  id: string;
  modalId?: string;
  badge: string;
  title: string;
  tagline: string;
  duration: string;
  role: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  hasCaseStudy: boolean;
  videoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  note?: string;
  projects?: {
    name: string;
    period: string;
    tech: string;
    highlight?: string;
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
  badge: string;
  image?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
}

export const PORTFOLIO_DATA: {
  personal: Record<'name' | 'title' | 'location' | 'phone' | 'email' | 'linkedin' | 'github' | 'resumeUrl', string>;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
} = {
  personal: {
    name: "Manyam Naveen",
    title: "Java Backend Developer",
    location: "Palwancha, India 507115",
    phone: "+91 9398365948",
    email: "naveenmanyam12@gmail.com",
    linkedin: "https://linkedin.com/in/naveenmanyam",
    github: "https://github.com/naveenmanyam",
    resumeUrl: "/resume/Manyam_Naveen_Resume_latest.pdf",
  },
  experiences: [
    {
      company: "FinxBridge / ArcLend",
      role: "Java Backend Developer",
      period: "Aug 2025 – Present",
      location: "Remote / Hybrid, India",
      note: "FinxBridge: Aug 2025 – Jul 2026 · ArcLend: Aug 2026 – Present",
      projects: [
        {
          name: "Collections Platform",
          period: "Dec 2025 – Present",
          tech: "Java 21, Spring Boot 3, PostgreSQL, Redis, AWS S3, Swagger, MSG91, India Post",
          highlight: "Handles about 14,000 loan cases every month",
          points: [
            "Built the backend end to end: the database and every API.",
            "Rules engine that decides when to follow up on each overdue loan.",
            "Reminders by WhatsApp, SMS and calls, plus India Post legal notices."
          ]
        },
        {
          name: "Payments Bridge",
          period: "Aug 2025 – Dec 2025",
          tech: "Java 21, Spring Boot 3, PostgreSQL, React, JWT, PhonePe APIs",
          highlight: "Live and powering repayments in the Collections platform",
          points: [
            "Customers pay by PhonePe QR code, payment link or autopay.",
            "Payments, refunds and expired requests are handled automatically."
          ]
        },
        {
          name: "Gold AI Valuation Platform",
          period: "Jul 2026 – Present",
          tech: "Java 21, Spring Boot 3, PostgreSQL, AWS S3, JWT, Multi-tenant Architecture",
          highlight: "Coordinates 5 AI models in one flow",
          points: [
            "Runs jewellery photos through 5 AI checks, from quality to fraud.",
            "Turns the results into a loan amount automatically."
          ]
        }
      ],
      achievements: [
        "3 fintech products live today."
      ]
    },
    {
      company: "Virinchi Limited",
      role: "Java Developer",
      period: "Jun 2022 – Mar 2025",
      location: "Hyderabad, India",
      projects: [
        {
          name: "Lendly Loan Management App",
          period: "Jun 2022 – Mar 2025",
          tech: "Java 8, Spring Boot, Spring Security, Spring Data JPA, Oracle, SQL Server, Postman",
          highlight: "Employee of the Month within 3 months",
          points: [
            "APIs for the full loan journey, from application to repayment.",
            "Automated US credit bureau checks: 90% less manual work.",
            "Made slow database queries over 40% faster."
          ]
        }
      ],
      achievements: [
        "Fixed 25+ production issues with no new bugs.",
        "Mentored junior developers."
      ]
    }
  ],
  projects: [
    {
      id: "collections",
      modalId: "modal-collections",
      badge: "Live",
      title: "Loan Collections Platform",
      tagline: "Helps lenders follow up on overdue loans automatically, with reminders by WhatsApp, SMS, calls and post.",
      duration: "Dec 2025 – Present",
      role: "Backend Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Spring Scheduler", "AWS S3", "MSG91", "India Post"],
      metrics: [
        { label: "Cases a month", value: "14,000+" },
        { label: "Records per batch", value: "1,000" },
        { label: "Legal notices", value: "Tracked live" }
      ],
      hasCaseStudy: true,
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
    },
    {
      id: "payments",
      modalId: "modal-payments",
      badge: "Live",
      title: "PhonePe Payments Bridge",
      tagline: "Lets businesses accept PhonePe payments by QR code, link or autopay, with refunds handled automatically.",
      duration: "Aug 2025 – Dec 2025",
      role: "Backend Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "PhonePe APIs", "JWT", "Spring Security", "React"],
      metrics: [
        { label: "Payment success", value: "99.9%" },
        { label: "Refunds", value: "Automatic" },
        { label: "Businesses", value: "Many" }
      ],
      hasCaseStudy: true,
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_131516_eca35265-ea66-4fbd-8d52-22aae6e1a503.mp4"
    },
    {
      id: "gold-ai",
      modalId: "modal-gold-ai",
      badge: "Live",
      title: "Gold AI Loan Valuation",
      tagline: "Values gold jewellery from photos using 5 AI models, so loans can be approved in minutes.",
      duration: "Jul 2026 – Present",
      role: "Backend Developer",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "AWS S3", "JWT RBAC", "Computer Vision AI"],
      metrics: [
        { label: "AI models", value: "5" },
        { label: "Gold valuation", value: "Automatic" },
        { label: "Fraud checks", value: "Built in" }
      ],
      hasCaseStudy: true,
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4"
    },
    {
      id: "lendly",
      modalId: "modal-lendly",
      badge: "Enterprise",
      title: "Lendly Loan Management",
      tagline: "A loan app for US lenders that checks credit and identity automatically before approving a loan.",
      duration: "Jun 2022 – Mar 2025",
      role: "Java Backend Developer",
      techStack: ["Java 8", "Spring Boot", "Spring Data JPA", "Oracle DB", "SQL Server", "Equifax API", "Clarity API"],
      metrics: [
        { label: "Less manual work", value: "90%" },
        { label: "Faster queries", value: "40%" },
        { label: "Bugs after release", value: "Zero" }
      ],
      hasCaseStudy: true,
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_154629_a31a2372-bd54-4f7e-ac9b-21246141a664.mp4"
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
      badge: "Framework Mastery"
    },
    {
      name: "Master Java Concurrency & Multithreading",
      issuer: "Scaler",
      skills: "Thread Pools, Synchronizers, CompletableFuture, Concurrent Collections",
      badge: "Core Engineering",
      image: "/certificates/java-concurrency-multithreading.png"
    },
    {
      name: "SQL Using AI",
      issuer: "AI for Techies",
      skills: "Advanced Query Optimization, Analytical Functions, Index Strategy",
      badge: "AI & Databases",
      image: "/certificates/sql-with-ai.png"
    }
  ]
};
