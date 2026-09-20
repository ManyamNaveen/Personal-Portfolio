'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left: Narrative */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 stagger-item stagger-1">
          <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
            Professional Summary
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight flex items-center gap-2.5">
            <span>⚡</span>
            <TypewriterText 
              text="Engineering with a production mindset." 
              gradientWord="production mindset." 
            />
          </h2>

          <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Java Backend Developer with <strong className="text-slate-900 dark:text-white font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">3.8+ years of production experience</strong> building resilient, high-throughput REST APIs and distributed microservices with Java and Spring Boot.
            </p>
            <p>
              Delivered mission-critical fintech payments, collections, and AI-integrated lending platforms end-to-end: from initial PostgreSQL relational schemas to complex partner ecosystems including <span className="text-cyan-900 dark:text-cyan-300 font-mono bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/30 inline-flex items-center gap-1 font-medium">📱 PhonePe</span>, <span className="text-cyan-900 dark:text-cyan-300 font-mono bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/30 inline-flex items-center gap-1 font-medium">✉️ MSG91</span>, <span className="text-cyan-900 dark:text-cyan-300 font-mono bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/30 inline-flex items-center gap-1 font-medium">📮 India Post</span>, and premier US credit bureaus (<span className="text-slate-900 dark:text-white font-semibold">CLARITY, MLA, FACTOR TRUST, EQUIFAX</span>).
            </p>
            <p>
              Deeply skilled in Spring Security (JWT, RBAC), low-latency Redis caching, AWS S3 pipelines, Docker containerization, and clean API contract design. Experienced collaborator alongside frontend, QA, and computer vision AI teams in high-velocity production environments.
            </p>
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <div className="glass-card px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 flex items-center gap-3 shadow-sm">
              <span className="text-xl">🎯</span>
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block uppercase tracking-wider font-semibold">PRIMARY FOCUS</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Fintech, Payments &amp; AI Middleware</span>
              </div>
            </div>
            <div className="glass-card px-4 py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-3 shadow-sm">
              <span className="text-xl">🟢</span>
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block uppercase tracking-wider font-semibold">CURRENT STATUS</span>
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 radar-beacon-green"></span>
                  Open for High-Impact Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: "What I Build" Capabilities Grid with Rich Icons & Symbols */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* Card 1: Backend REST APIs */}
            <div className="glass-card interactive-card gradient-beam-top p-4 sm:p-5 rounded-2xl group stagger-item stagger-2 border border-slate-300 dark:border-white/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] text-xl">
                ⚡
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                <span>Backend REST APIs</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Clean layered architecture, standard HTTP status handling, Swagger/OpenAPI documentation, and SOLID design patterns.
              </p>
            </div>

            {/* Card 2: Payment Gateways */}
            <div className="glass-card interactive-card interactive-card-emerald gradient-beam-top p-4 sm:p-5 rounded-2xl group stagger-item stagger-3 border border-slate-300 dark:border-white/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] text-xl">
                💳
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                <span>Payment Gateways</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                PhonePe dynamic QR, collect calls, webhooks, refund idempotency, and automatic order cancellation routines.
              </p>
            </div>

            {/* Card 3: Batch & Rule Engines */}
            <div className="glass-card interactive-card interactive-card-violet gradient-beam-top p-4 sm:p-5 rounded-2xl group stagger-item stagger-4 border border-slate-300 dark:border-white/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] text-xl">
                ⏱️
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors flex items-center gap-2">
                <span>Batch &amp; Rule Engines</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Scheduled chunked batch ingestion (1,000s/chunk), DPD rule engines, automated postal and omnichannel triggers.
              </p>
            </div>

            {/* Card 4: AI Middleware Orchestration */}
            <div className="glass-card interactive-card interactive-card-amber gradient-beam-top p-4 sm:p-5 rounded-2xl group stagger-item stagger-5 border border-slate-300 dark:border-white/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] text-xl">
                🤖
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>AI Middleware Orchestration</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Multi-tenant pipelines chaining 5 vision models, S3 dataset validation, and dynamic appraisal algorithms.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
