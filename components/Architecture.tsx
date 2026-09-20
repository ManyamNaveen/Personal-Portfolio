'use client';

import React from 'react';

export default function Architecture() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="architecture">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          System Architecture Map
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Enterprise Integration Topology
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Interactive overview of how Spring Boot core coordinates external bureaus, storage, caching, and payment ecosystems.
        </p>
      </div>

      {/* Topology Card */}
      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
        
        {/* Central Architecture Visual Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Column 1: Ingestion & Clients */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center md:text-left">
              Inputs &amp; Clients
            </div>
            
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 transition-colors">
              <div className="text-white font-bold text-sm">React / Angular SPA</div>
              <div className="text-xs text-slate-400">Client Web Portal (JWT Bearer)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 transition-colors">
              <div className="text-white font-bold text-sm">LOS Scheduled Syncs</div>
              <div className="text-xs text-slate-400">Chunked Batch Case Intake (1,000s)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 transition-colors">
              <div className="text-white font-bold text-sm">Payment Webhooks</div>
              <div className="text-xs text-slate-400">PhonePe Asynchronous Callbacks</div>
            </div>
          </div>

          {/* Column 2: Core Spring Boot Engine Hub */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/50 via-slate-900 to-indigo-950/50 border-2 border-cyan-500/40 text-center shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 absolute top-4 right-4"></span>
            
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-lg border border-cyan-400/40">
              SB3
            </div>

            <h3 className="text-white font-extrabold text-lg sm:text-xl">Spring Boot 3 Core Hub</h3>
            <p className="text-xs text-cyan-200/80 font-mono mt-1 mb-4">Java 21 • Spring Security • Spring Data JPA</p>

            <div className="space-y-2 text-left text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span>Underwriting Decision Engine</span>
                <span className="text-emerald-400">Active</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span>Spring Scheduler Engine</span>
                <span className="text-emerald-400">Cron</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span>Multi-tenant Auth &amp; RBAC</span>
                <span className="text-cyan-400">JWT</span>
              </div>
            </div>
          </div>

          {/* Column 3: Storage, Services & External APIs */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center md:text-left">
              Target Services &amp; DBs
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/50 transition-colors">
              <div className="text-white font-bold text-sm">PostgreSQL / Oracle</div>
              <div className="text-xs text-slate-400">Optimized Relational Schema &amp; Indexes</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/50 transition-colors">
              <div className="text-white font-bold text-sm">Redis &amp; AWS S3</div>
              <div className="text-xs text-slate-400">Cached Templates, Receipts, Notice Storage</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-400/50 transition-colors">
              <div className="text-white font-bold text-sm">External Gateways</div>
              <div className="text-xs text-slate-400">PhonePe, MSG91, India Post, 5 AI Models</div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span className="text-white font-bold">Standard:</span> RESTful JSON Contracts &amp; YAML Configurations
          </div>
          <div>
            <span className="text-white font-bold">Resilience:</span> Circuit Breakers, Retry Logic &amp; Monitored Async Queues
          </div>
        </div>

      </div>
    </section>
  );
}
