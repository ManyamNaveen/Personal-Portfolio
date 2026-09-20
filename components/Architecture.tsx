'use client';

import React from 'react';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

export default function Architecture() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="architecture"
    >
      <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto stagger-item stagger-1">
        <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
          System Architecture Map
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <span>🌐</span>
          <TypewriterText text="Enterprise Integration Topology" />
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Interactive overview of how Spring Boot core coordinates external bureaus, storage, caching, and payment ecosystems.
        </p>
      </div>

      {/* Topology Card with Living Network Aesthetic */}
      <div className="glass-card gradient-beam-top p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden stagger-item stagger-2 shadow-2xl">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Central Architecture Visual Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
          
          {/* Column 1: Ingestion & Clients */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center md:text-left flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Inputs &amp; Client Ingestion</span>
            </div>
            
            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>💻</span> React / Angular SPA
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">HTTP/REST</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">Client Web Portal (JWT Bearer Token)</div>
            </div>

            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>⏱️</span> LOS Scheduled Syncs
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">Batch 1K</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">Chunked Case Intake (1,000s/run)</div>
            </div>

            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>🔔</span> Payment Webhooks
                </span>
                <span className="text-[10px] font-mono text-violet-400 bg-violet-950 px-2 py-0.5 rounded border border-violet-500/30">Async SSL</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">PhonePe Asynchronous Callbacks</div>
            </div>
          </div>

          {/* Column 2: Core Spring Boot Engine Hub */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/60 via-slate-900 to-indigo-950/60 border-2 border-cyan-500/50 text-center shadow-[0_0_50px_rgba(6,182,212,0.2)] interactive-card">
            {/* Pulsing Active Status Beacon */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">LIVE</span>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-3 font-mono font-extrabold text-2xl border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              🍃
            </div>

            <h3 className="text-white font-extrabold text-lg sm:text-xl">Spring Boot 3 Core Hub</h3>
            <p className="text-xs text-cyan-200/90 font-mono mt-1 mb-5">Java 21 • Spring Security • Spring Data JPA</p>

            <div className="space-y-2.5 text-left text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors">
                <span className="text-slate-200 flex items-center gap-1.5">
                  <span>🧠</span> Underwriting Decision Engine
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors">
                <span className="text-slate-200 flex items-center gap-1.5">
                  <span>⏱️</span> Spring Scheduler Engine
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Cron
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors">
                <span className="text-slate-200 flex items-center gap-1.5">
                  <span>🔒</span> Multi-tenant Auth &amp; RBAC
                </span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> JWT
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Storage, Services & External APIs */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center md:text-left flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              <span>Target DBs &amp; External Gateways</span>
            </div>

            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>🐘</span> PostgreSQL / Oracle
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">ACID</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">Optimized Relational Schema &amp; Indexes</div>
            </div>

            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>🔴</span> Redis &amp; AWS S3
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">Sub-10ms</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">Cached Templates, Receipts, Document Storage</div>
            </div>

            <div className="interactive-card p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/60 transition-all shadow-sm">
              <div className="text-white font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>🌐</span> External Gateways
                </span>
                <span className="text-[10px] font-mono text-violet-400 bg-violet-950 px-2 py-0.5 rounded border border-violet-500/30">REST/SSL</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">PhonePe, MSG91, India Post, 5 AI Models</div>
            </div>
          </div>

        </div>

        {/* Dynamic Architectural Highlights Footer with Icons */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Security: Stateless JWT Bearer + Role-Based Access Control (RBAC)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📊</span>
            <span>Observability: Spring Actuators + Centralized Structured Logging</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🛡️</span>
            <span>Fault Tolerance: Idempotent Payment Webhooks &amp; Safe Retries</span>
          </div>
        </div>

      </div>
    </section>
  );
}
