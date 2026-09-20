'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="experience">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Career History
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
        <p className="text-slate-400 text-sm mt-1">Direct production contributions and engineering responsibilities.</p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative border-l border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-16">
        
        {/* Experience Item 1: FinxBridge / ArcLend */}
        <div className="relative group">
          {/* Timeline Pin */}
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#080C14] group-hover:scale-125 transition-transform"></div>
          
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Java Backend Developer</h3>
              <div className="text-cyan-400 font-semibold text-base">FinxBridge / ArcLend</div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
              Aug 2025 – Present
            </span>
          </div>

          <p className="text-xs font-mono text-slate-400 mb-6">
            (FinxBridge: Aug 2025 – Jul 2026; ArcLend: Aug 2026 – Present)
          </p>

          {/* Nested Sub-Projects */}
          <div className="space-y-6">
            
            {/* Sub-Project 1: Payments Bridge */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Payments Bridge
                  <span className="font-mono text-xs font-normal text-slate-400">(Aug 2025 – Dec 2025)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan-300">
                  {['Java 21', 'Spring Boot 3', 'PostgreSQL', 'React', 'JWT'].map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">{tech}</span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 list-disc list-outside ml-4">
                <li>Designed and built a payments middleware between merchants and PhonePe end to end: backend APIs, PostgreSQL schema, and React frontend (built with AI-assisted development).</li>
                <li>Integrated PhonePe offline flows (Dynamic QR, Payment Link, Collect Call) and online flows (Payment Gateway, Paylinks, Autopay).</li>
                <li>Implemented webhooks, refunds, payment status checks, and automatic cancellation or expiry of unpaid payments, following PhonePe guidelines.</li>
                <li>Built a multi-merchant-ready architecture with merchant onboarding and JWT-based role-based access control.</li>
                <li>Live in production and integrated with the Collections platform for real-time repayments.</li>
              </ul>

              {/* Architecture Flow Diagram */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">Payments Integration Flow</div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-200">Merchant Client</div>
                  <div className="p-2 rounded bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-semibold">Payments Bridge (JWT)</div>
                  <div className="p-2 rounded bg-indigo-950/70 border border-indigo-500/40 text-indigo-300">PhonePe Gateway</div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 text-emerald-400">Webhook Listener</div>
                </div>
              </div>
            </div>

            {/* Sub-Project 2: Collections Platform */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Collections Platform
                  <span className="font-mono text-xs font-normal text-slate-400">(Dec 2025 – Present)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan-300">
                  {['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'AWS S3', 'Swagger'].map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                ⚡ Processes ~14,000 cases a month in production
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 list-disc list-outside ml-4">
                <li><strong className="text-white">Sole backend developer:</strong> designed the database schema and all backend APIs end to end for a loan-collections platform covering overdue case management, campaigns, telecalling, repayments, reminders, OTS (One Time Settlement) and PTP (Promise to Pay).</li>
                <li>Built case intake from the Loan Origination System (LOS) through scheduled API syncs, and bulk CSV ingestion using asynchronous batch processing in chunks of 1,000 records.</li>
                <li>Built a rule-based strategy engine on Spring Scheduler with rules on days past due (DPD), region (state, city, ZIP), overdue amount, execution time and active/inactive status, triggered automatically or manually.</li>
                <li>Built campaign management: upload a CSV, select a template with placeholders and trigger campaigns manually.</li>
                <li>Integrated MSG91 (WhatsApp, SMS, email, IVR, click-to-call, OTP) and India Post APIs for booking legal notices and tracking them to delivery; repayments run through the in-house Payments Bridge.</li>
                <li>Used Redis for caching and AWS S3 for receipts, notices, documents and templates. Secured APIs with JWT and RBAC and documented them with Swagger.</li>
                <li>Provides ongoing production support and client change request turnarounds.</li>
              </ul>
            </div>

            {/* Sub-Project 3: Gold AI Valuation Platform */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Gold AI Valuation Platform
                  <span className="font-mono text-xs font-normal text-slate-400">(Jul 2026 – Present)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan-300">
                  {['Java 21', 'Spring Boot 3', 'PostgreSQL', 'AWS S3', 'JWT'].map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">{tech}</span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 list-disc list-outside ml-4">
                <li>Designed the schema and backend APIs for a multi-tenant gold-ornament valuation middleware between the client frontend and five AI models: clarity check, ornament detection, fraud check, weight detection and stone segmentation.</li>
                <li>Uploaded ornament images to S3 and orchestrated the AI model calls, returning consolidated results to the frontend.</li>
                <li>Maintained the fraud reference dataset in S3 for cross-verification by the fraud model, and implemented loan amount calculation from the AI outputs.</li>
                <li>Implemented per-tenant configuration, JWT authentication, and RBAC.</li>
              </ul>

              {/* AI Orchestration Visual Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">Multi-Model AI Orchestration Pipeline</div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[11px] font-mono">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">Client Image</span>
                  <span className="text-cyan-400">→</span>
                  <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">AWS S3 Upload</span>
                  <span className="text-cyan-400">→</span>
                  <span className="px-2 py-1 rounded bg-violet-950/80 border border-violet-500/30 text-violet-300">5 AI Models Ensemble</span>
                  <span className="text-cyan-400">→</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">Valuation &amp; Loan Calc</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Experience Item 2: Virinchi Limited */}
        <div className="relative group">
          {/* Timeline Pin */}
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#080C14] group-hover:scale-125 transition-transform"></div>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Java Developer</h3>
              <div className="text-violet-400 font-semibold text-base">Virinchi Limited, Hyderabad, India</div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
              Jun 2022 – Mar 2025
            </span>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-bold text-base text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Lendly — Loan Management Application
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan-300">
                {['Java 8', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Oracle', 'SQL Server', 'React', 'Postman'].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">{tech}</span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              ★ Awarded Employee of the Month within 3 months of joining
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 list-disc list-outside ml-4">
              <li>Built and maintained backend RESTful APIs for <strong className="text-white">Lendly</strong>, a loan management application covering the full loan lifecycle (user management, loan validation, scheduling workflows), using Spring Boot and Spring Data JPA in a monolithic architecture for a React frontend team.</li>
              <li>Integrated third-party underwriting and validation services (<strong className="text-white">CLARITY, MLA, FACTOR TRUST, EQUIFAX</strong>) over REST for credit, employment and income checks, managed via YAML configuration.</li>
              <li>Built internal underwriting logic (SSN, DOB, bankruptcy checks) in the Decision-Engine &amp; Inquiry module, <strong className="text-cyan-300">reducing manual loan verification effort by 90%</strong>.</li>
              <li>Optimized SQL queries and database indexing, <strong className="text-cyan-300">reducing query latency by over 40%</strong>.</li>
              <li>Implemented Spring Security with role-based access control, input validation, exception handling and standardized response structures.</li>
              <li>Applied Java 8 features (Streams, Lambdas), SOLID principles, and Low-Level Design patterns (Singleton, Factory) to build reusable service-layer logic.</li>
              <li>Resolved 25+ production issues with zero post-release bugs; took full ownership of backend modules and delivered under tight deadlines.</li>
              <li>Mentored junior developers on clean code, SOLID, LLD patterns, REST API design and debugging; supported QA and frontend teams with Postman collections and response contracts.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
