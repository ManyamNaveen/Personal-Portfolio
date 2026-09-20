'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ProjectsProps {
  onOpenModal: (modalId: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="projects">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Highlighted Systems
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Selected Engineering Case Studies
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Detailed breakdown of challenges, architecture, and production impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Case Study Card 1: Collections Platform */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs font-medium">
                High Throughput
              </span>
              <span className="font-mono text-xs text-slate-500">Dec 2025 – Present</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Collections Platform
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
              Sole backend architect for end-to-end delinquent loan collection: batch CSV ingestion in 1,000s, automated DPD strategy scheduler, and MSG91 + India Post multi-channel delivery.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Java 21', 'Spring Scheduler', 'Redis', 'AWS S3', 'PostgreSQL'].map((tech, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-cyan-400"
              type="button"
              onClick={() => onOpenModal('modal-collections')}
            >
              View Case Study Details →
            </button>
          </div>
        </div>

        {/* Case Study Card 2: Payments Bridge */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-medium">
                Fintech / Gateway
              </span>
              <span className="font-mono text-xs text-slate-500">Aug 2025 – Dec 2025</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Payments Bridge
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
              Full-lifecycle PhonePe middleware supporting Dynamic QR, Payment Links, Collect Calls, Autopay, webhook reconciliation, and automated cancellation for multi-merchant accounts.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Java 21', 'Spring Boot 3', 'PostgreSQL', 'PhonePe API', 'JWT'].map((tech, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-cyan-400"
              type="button"
              onClick={() => onOpenModal('modal-payments')}
            >
              View Case Study Details →
            </button>
          </div>
        </div>

        {/* Case Study Card 3: Lendly Decision Engine */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium">
                Underwriting &amp; LLD
              </span>
              <span className="font-mono text-xs text-slate-500">Jun 2022 – Mar 2025</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Lendly Decision Engine
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
              Automated loan underwriting engine consuming Clarity, MLA, Factor Trust, and Equifax. Slashed manual underwriting effort by 90% and optimized SQL queries by 40%.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Java 8', 'Hibernate', 'Oracle', 'SQL Server', 'Equifax API'].map((tech, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-cyan-400"
              type="button"
              onClick={() => onOpenModal('modal-lendly')}
            >
              View Case Study Details →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
