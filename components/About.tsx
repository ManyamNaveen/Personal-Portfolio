'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function About() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Professional Summary
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with a <span className="gradient-text">production mindset</span>.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Java Backend Developer with <strong className="text-white font-semibold">3.8+ years of experience</strong> building and maintaining high-throughput, enterprise-ready REST APIs with Java and Spring Boot.
            </p>
            <p>
              Recently delivered payments, collections, and AI-integrated lending platforms end-to-end: from initial PostgreSQL schema design to complex third-party partner integrations including <span className="text-cyan-300 font-mono">PhonePe</span>, <span className="text-cyan-300 font-mono">MSG91</span>, <span className="text-cyan-300 font-mono">India Post</span>, and premier US credit bureaus (CLARITY, MLA, FACTOR TRUST, EQUIFAX).
            </p>
            <p>
              Deeply skilled in Spring Security (JWT, RBAC), Redis caching strategies, AWS S3 asset pipelines, Docker, and API contract design. Experienced collaborator alongside frontend, QA, and computer vision AI teams in fast-paced production environments.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-400 font-mono block">PRIMARY FOCUS</span>
              <span className="text-sm font-semibold text-white">Fintech, Payments &amp; AI Middleware</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">CURRENT STATUS</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Open for High-Impact Roles
              </span>
            </div>
          </div>
        </div>

        {/* Right: "What I Build" Capabilities Grid */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card p-5 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-1">Backend REST APIs</h3>
              <p className="text-xs text-slate-400">Clean layered architecture, standard HTTP status handling, Swagger/OpenAPI documentation, and SOLID design.</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-1">Payment Gateways</h3>
              <p className="text-xs text-slate-400">PhonePe dynamic QR, collect calls, webhooks, refund idempotency, automatic order expiration routines.</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-1">Batch &amp; Rule Engines</h3>
              <p className="text-xs text-slate-400">Scheduled chunked batch ingestion (1,000s/chunk), DPD rule engines, automated postal and communication triggers.</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-1">AI Middleware Orchestration</h3>
              <p className="text-xs text-slate-400">Multi-tenant pipelines chaining 5 vision models, S3 dataset validation, and dynamic appraisal algorithms.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
