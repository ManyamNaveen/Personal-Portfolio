'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="experience"
    >
      <div className="mb-6 sm:mb-8 stagger-item stagger-1">
        <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
          Career History
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span>💼</span>
          <TypewriterText text="Work Experience" />
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Direct production contributions, microservice architecture, and engineering impact.</p>
      </div>

      {/* Experience Timeline Container with Living Gradient Stem */}
      <div className="relative ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
        
        {/* Animated Vertical Timeline Stem */}
        <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full timeline-stem-gradient"></div>

        {/* Experience Item 1: FinxBridge / ArcLend */}
        <div className="relative group stagger-item stagger-2">
          {/* Animated Timeline Pin with Radar Pulse */}
          <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 flex items-center justify-center">
            <span className="absolute w-6 h-6 rounded-full bg-cyan-400/30 radar-beacon-cyan"></span>
            <span className="relative w-4 h-4 rounded-full bg-cyan-500 border-2 border-white dark:border-[#080C14] shadow-[0_0_10px_#06b6d4]"></span>
          </div>
          
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>Java Backend Developer</span>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span> Active
                </span>
              </h3>
              <div className="text-cyan-700 dark:text-cyan-400 font-semibold text-base flex items-center gap-1.5 mt-0.5">
                <span>🏢</span>
                <span>FinxBridge / ArcLend</span>
              </div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 shadow-sm flex items-center gap-1">
              <span>🗓️</span> Aug 2025 – Present
            </span>
          </div>

          <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-4 sm:mb-5">
            (FinxBridge: Aug 2025 – Jul 2026; ArcLend: Aug 2026 – Present)
          </p>

          {/* Nested Sub-Projects */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Sub-Project 1: Payments Bridge */}
            <div className="glass-card interactive-card gradient-beam-top p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="text-lg">💳</span>
                  <span>Payments Bridge</span>
                  <span className="font-mono text-xs font-normal text-slate-400">(Aug 2025 – Dec 2025)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {[
                    { name: 'Java 21', s: '☕' },
                    { name: 'Spring Boot 3', s: '🍃' },
                    { name: 'PostgreSQL', s: '🐘' },
                    { name: 'PhonePe API', s: '📱' },
                    { name: 'JWT Auth', s: '🔑' },
                  ].map((tech, i) => (
                    <span key={i} className="tech-tag-interactive px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                      <span>{tech.s}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-sm shrink-0">⚙️</span>
                  <span><strong className="text-white">End-to-End Architecture:</strong> Designed and built payments middleware between merchants and PhonePe: backend APIs, PostgreSQL schema, and React frontend (built with AI-assisted development).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-sm shrink-0">💳</span>
                  <span><strong className="text-white">PhonePe Omnichannel Integration:</strong> Integrated offline checkout flows (Dynamic QR, Payment Link, Collect Call) and online flows (Payment Gateway, Paylinks, Autopay).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-violet-400 font-bold text-sm shrink-0">🔄</span>
                  <span><strong className="text-white">Webhook Reconciliation:</strong> Built automated webhooks, refund processing, live payment status checks, and automatic order cancellation/expiry following PhonePe guidelines.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold text-sm shrink-0">🏢</span>
                  <span><strong className="text-white">Multi-Merchant Isolation:</strong> Architected multi-merchant onboarding with JWT role-based access control (RBAC).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-sm shrink-0">🚀</span>
                  <span><strong className="text-white">Production Delivery:</strong> Live in production and integrated with the Collections platform for real-time customer repayments.</span>
                </div>
              </div>

              {/* Dynamic Architecture Flow Diagram */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Payments Integration Pipeline
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                    <span>🛡️</span> Zero-Downtime Webhooks
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 shadow-sm flex items-center justify-center gap-1">
                    <span>💻</span> Merchant Client
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center gap-1">
                    <span>⚡</span> Payments Bridge (JWT)
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 flex items-center justify-center gap-1">
                    <span>📱</span> PhonePe Gateway
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 font-medium flex items-center justify-center gap-1">
                    <span>🔔</span> Webhook Listener
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Project 2: Collections Platform */}
            <div className="glass-card interactive-card interactive-card-violet gradient-beam-top p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span>Collections Platform</span>
                  <span className="font-mono text-xs font-normal text-slate-400">(Dec 2025 – Present)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {[
                    { name: 'Java 21', s: '☕' },
                    { name: 'Spring Boot 3', s: '🍃' },
                    { name: 'PostgreSQL', s: '🐘' },
                    { name: 'Redis', s: '🔴' },
                    { name: 'AWS S3', s: '☁️' },
                    { name: 'Swagger', s: '📑' },
                  ].map((tech, i) => (
                    <span key={i} className="tech-tag-interactive px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                      <span>{tech.s}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-violet-400 radar-beacon-cyan"></span>
                <span>⚡ Processes ~14,000 delinquent cases a month in production</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-violet-400 font-bold text-sm shrink-0">👨‍💻</span>
                  <span><strong className="text-white">Sole Backend Architect:</strong> Designed complete PostgreSQL schema and all backend APIs end-to-end for delinquent loan recovery: case allocations, campaigns, telecalling, repayments, reminders, OTS (One Time Settlement), and PTP (Promise to Pay).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-sm shrink-0">⏱️</span>
                  <span><strong className="text-white">Scheduled Batch Ingestion:</strong> Built scheduled ingestion processing loan cases in chunks of 1,000s from CSV and external LOS platforms, preserving audit history across allocations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-sm shrink-0">🎯</span>
                  <span><strong className="text-white">DPD Rule Strategy Engine:</strong> Implemented automated Days Past Due (DPD) rule engine shifting cases between risk buckets and triggering automated legal and calling strategies.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold text-sm shrink-0">📢</span>
                  <span><strong className="text-white">Omnichannel Outreach:</strong> Built multi-channel campaign engine sending notices via WhatsApp, SMS, IVR, click-to-call, and postal delivery with dynamic template engines.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-sm shrink-0">📮</span>
                  <span><strong className="text-white">Postal &amp; Messaging APIs:</strong> Integrated MSG91 APIs and India Post API for registered legal notice booking and real-time delivery tracking.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-violet-400 font-bold text-sm shrink-0">🔴</span>
                  <span><strong className="text-white">Sub-10ms Redis Caching:</strong> Used Redis for template and case caching, AWS S3 for legal notices and receipts, and secured all endpoints with JWT RBAC.</span>
                </div>
              </div>
            </div>

            {/* Sub-Project 3: Gold AI Valuation Platform */}
            <div className="glass-card interactive-card interactive-card-amber gradient-beam-top p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-base text-white flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <span>Gold AI Valuation Platform</span>
                  <span className="font-mono text-xs font-normal text-slate-400">(Jul 2026 – Present)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {[
                    { name: 'Java 21', s: '☕' },
                    { name: 'Spring Boot 3', s: '🍃' },
                    { name: 'PostgreSQL', s: '🐘' },
                    { name: 'AWS S3', s: '☁️' },
                    { name: 'JWT Auth', s: '🔑' },
                  ].map((tech, i) => (
                    <span key={i} className="tech-tag-interactive px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                      <span>{tech.s}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold text-sm shrink-0">🧠</span>
                  <span><strong className="text-white">5-Model AI Ensemble:</strong> Architected valuation middleware chaining five computer vision models: clarity check, ornament detection, fraud check, weight detection, and stone segmentation.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-sm shrink-0">☁️</span>
                  <span><strong className="text-white">S3 Ingestion &amp; Pipeline:</strong> Streamlined image uploads to Amazon S3 and orchestrated parallel inference calls, returning consolidated appraisals to clients.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-sm shrink-0">💎</span>
                  <span><strong className="text-white">Dynamic Appraisal Algorithms:</strong> Implemented loan value calculation factoring in real-time gold market rates, purity coefficients, and stone deductions against reference fraud datasets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-violet-400 font-bold text-sm shrink-0">🔒</span>
                  <span><strong className="text-white">Multi-tenant Security:</strong> Implemented per-tenant isolation, JWT authentication, and fine-grained RBAC.</span>
                </div>
              </div>

              {/* Dynamic AI Orchestration Visual Card with Animated Stream */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Multi-Model AI Orchestration Pipeline
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
                    <span>✨</span> 5 Vision Models
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[11px] font-mono">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-1">
                    <span>📷</span> Client Image
                  </span>
                  <span className="text-cyan-400 font-bold">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center gap-1">
                    <span>☁️</span> S3 Upload
                  </span>
                  <span className="text-cyan-400 font-bold">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-violet-950/80 border border-violet-500/30 text-violet-300 flex items-center gap-1">
                    <span>🤖</span> 5 AI Models
                  </span>
                  <span className="text-cyan-400 font-bold">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center gap-1">
                    <span>💰</span> Loan Calc
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Experience Item 2: Virinchi Limited */}
        <div className="relative group stagger-item stagger-3">
          {/* Animated Timeline Pin */}
          <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 flex items-center justify-center">
            <span className="absolute w-6 h-6 rounded-full bg-violet-400/30 radar-beacon-cyan"></span>
            <span className="relative w-4 h-4 rounded-full bg-violet-500 border-2 border-[#080C14] shadow-[0_0_10px_#8b5cf6]"></span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Java Developer</span>
              </h3>
              <div className="text-violet-400 font-semibold text-base flex items-center gap-1.5 mt-0.5">
                <span>🏛️</span>
                <span>Virinchi Limited, Hyderabad, India</span>
              </div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 shadow-sm flex items-center gap-1">
              <span>🗓️</span> Jun 2022 – Mar 2025
            </span>
          </div>

          <div className="glass-card interactive-card gradient-beam-top p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-bold text-base text-white flex items-center gap-2">
                <span className="text-lg">🏦</span>
                <span>Lendly — Loan Management Application</span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                {[
                  { name: 'Java 8', s: '☕' },
                  { name: 'Spring Boot', s: '🍃' },
                  { name: 'Spring Data JPA', s: '🗄️' },
                  { name: 'Hibernate', s: '📦' },
                  { name: 'Oracle DB', s: '🏛️' },
                  { name: 'SQL Server', s: '🗃️' },
                  { name: 'React', s: '⚛️' },
                  { name: 'Postman', s: '📮' },
                ].map((tech, i) => (
                  <span key={i} className="tech-tag-interactive px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                    <span>{tech.s}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium shadow-sm">
              <span className="text-amber-400 text-sm">★</span>
              <span>Awarded <strong>Employee of the Month</strong> within 3 months of joining</span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-sm shrink-0">⚙️</span>
                <span><strong className="text-white">Full Loan Lifecycle APIs:</strong> Built backend RESTful APIs for <strong className="text-white">Lendly</strong> covering loan validation, applicant management, and repayment scheduling using Spring Boot and Spring Data JPA.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-violet-400 font-bold text-sm shrink-0">🏦</span>
                <span><strong className="text-white">US Credit Bureau Integrations:</strong> Integrated underwriting services (<strong className="text-white">CLARITY, MLA, FACTOR TRUST, EQUIFAX</strong>) over REST for credit and employment verification via flexible YAML configuration.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-sm shrink-0">⚡</span>
                <span><strong className="text-emerald-400">90% Verification Automation:</strong> Built automated underwriting logic (SSN validation, DOB verification, bankruptcy triggers) in Decision-Engine &amp; Inquiry modules, slashing manual verification by 90%.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-sm shrink-0">🚀</span>
                <span><strong className="text-cyan-300">40% Query Latency Cut:</strong> Optimized complex SQL joins and database indexing in Oracle and SQL Server, reducing query execution times by over 40%.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold text-sm shrink-0">🔒</span>
                <span><strong className="text-white">Spring Security &amp; RBAC:</strong> Implemented role-based access control, input sanitization, centralized exception handling (@ControllerAdvice), and consistent API error contracts.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold text-sm shrink-0">📐</span>
                <span><strong className="text-white">LLD &amp; Design Patterns:</strong> Applied SOLID principles, Singleton, and Factory patterns with Java 8 Streams and Lambdas to build reusable service layers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-sm shrink-0">🛡️</span>
                <span><strong className="text-white">Production Reliability:</strong> Resolved 25+ production issues with zero regressions, consistently delivering on tight deadlines.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-sm shrink-0">👥</span>
                <span><strong className="text-white">Mentorship &amp; Team Leadership:</strong> Mentored junior engineers on clean code, REST design, and debugging; created Postman collections for QA and frontend teams.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
