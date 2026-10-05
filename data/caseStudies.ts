export interface CaseStudyData {
  id: string;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  impact: string[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "modal-collections": {
    id: "modal-collections",
    badge: "Loan collections",
    title: "Loan Collections Platform",
    problem: "Lenders were chasing overdue loans by hand. Large customer files slowed the old system down, and there was no single place to send SMS, calls and legal notices.",
    solution: "I built a system that imports customer files in batches of 1,000 and a rules engine that decides who to contact, when, and how, based on how late the payment is, the amount owed and the location.",
    impact: [
      "Handles about 14,000 overdue loan cases every month in production.",
      "Large file uploads no longer slow down the rest of the app.",
      "Legal notices sent through India Post are tracked automatically."
    ]
  },
  "modal-payments": {
    id: "modal-payments",
    badge: "Payments",
    title: "PhonePe Payments Bridge",
    problem: "Several businesses needed one simple way to accept PhonePe payments, by QR code, payment link or online checkout, and to know instantly when a payment went through.",
    solution: "I built a secure service between the businesses and PhonePe. It receives PhonePe's payment updates, confirms each payment, handles refunds, and keeps every business's data separate with role-based logins.",
    impact: [
      "No payment is ever recorded twice, even when PhonePe sends the same update again.",
      "Plugged straight into the Collections platform so borrowers can repay online.",
      "Supports QR codes, payment links, collect requests, autopay and online checkout."
    ]
  },
  "modal-lendly": {
    id: "modal-lendly",
    badge: "Loan approvals",
    title: "Lendly Loan Management",
    problem: "Staff were checking every loan application by hand against several US credit bureaus, which made approvals slow and expensive.",
    solution: "I built automatic checks that call the credit bureaus (Clarity, MLA, Factor Trust and Equifax) and apply the approval rules, and I sped up the slowest database queries.",
    impact: [
      "Cut manual review work by 90%.",
      "Made key database queries over 40% faster.",
      "Fixed 25+ production issues with no new bugs, and earned Employee of the Month within 3 months."
    ]
  },
  "modal-gold-ai": {
    id: "modal-gold-ai",
    badge: "AI valuation",
    title: "Gold AI Loan Valuation",
    problem: "To give a gold loan, an expert had to inspect the jewellery in person. That was slow, results varied from person to person, and fakes could slip through.",
    solution: "I built a service that sends photos of the jewellery to 5 AI models at the same time: quality, item type, fraud, weight and stones. It then combines their answers with the current gold price to work out the loan amount.",
    impact: [
      "Gets results from all 5 AI models in under 2.5 seconds.",
      "Loan values are calculated automatically, with no manual maths.",
      "Each photo is compared against known fraud cases, and each client's data is kept separate."
    ]
  }
};
