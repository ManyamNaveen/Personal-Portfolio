export interface CaseStudyData {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  problem: string;
  solution: string;
  impact: string[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "modal-collections": {
    id: "modal-collections",
    badge: "FINTECH RECOVERY",
    badgeColor: "violet",
    title: "Collections Platform Architecture",
    problem: "Lenders struggled with manual, uncoordinated outreach to delinquent borrowers. High volume ingestion from the primary LOS choked previous systems, and there was no unified rule mechanism to trigger SMS, IVR calls, and physical India Post notices simultaneously.",
    solution: "As the sole backend developer, Naveen architected an asynchronous chunked batch ingestion pipeline processing 1,000 records per transaction chunk. Implemented a dynamic rule strategy engine backed by Spring Scheduler allowing collections managers to formulate automated recovery workflows by DPD, location, and balance tier.",
    impact: [
      "Successfully processes ~14,000 delinquent cases per month in live production.",
      "Zero system degradation during batch CSV uploads and simultaneous telecalling triggers.",
      "Automated physical postal notices tracking via India Post API integration."
    ]
  },
  "modal-payments": {
    id: "modal-payments",
    badge: "PAYMENTS MIDDLEWARE",
    badgeColor: "emerald",
    title: "PhonePe Payments Bridge",
    problem: "Multiple partner merchants required unified settlement and real-time payment reconciliation across disparate retail channels (Dynamic QR, Collect Calls, and online checkouts) without exposing core database credentials.",
    solution: "Engineered a multi-tenant middleware using Spring Boot 3 and Java 21. Created an idempotent webhook receiver to process PhonePe transaction callbacks, automated refund verification routines, and built a tokenized merchant onboarding system protected with JWT and RBAC.",
    impact: [
      "Zero duplicate settlement issues recorded through idempotent webhook handling.",
      "Seamless integration directly into the Collections Platform for automated loan repayments.",
      "Support for full PhonePe suite (Dynamic QR, Payment Links, Collect Calls, Autopay, Payment Gateway)."
    ]
  },
  "modal-lendly": {
    id: "modal-lendly",
    badge: "ENTERPRISE LOANS",
    badgeColor: "cyan",
    title: "Lendly Underwriting Decision Engine",
    problem: "Manual loan underwriting and manual cross-referencing of credit bureaus resulted in slow customer approvals and high operational costs for US lending applications.",
    solution: "Constructed an automated Decision-Engine & Inquiry module integrating CLARITY, MLA, FACTOR TRUST, and EQUIFAX. Optimized database indexing, query joins, and implemented Factory patterns to abstract bureau-specific API calls.",
    impact: [
      "Reduced manual verification overhead by 90%.",
      "Reduced SQL query latency across complex user queries by over 40%.",
      "Resolved 25+ production issues with zero post-release regressions; earned Employee of the Month honors within 3 months."
    ]
  }
};
