'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

interface ProjectsProps {
  onOpenModal: (modalId: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="projects"
    >
      <div className="mb-6 sm:mb-8 stagger-item stagger-1">
        <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
          Highlighted Systems
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span>🚀</span>
          <TypewriterText text="Selected Engineering Case Studies" />
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Detailed breakdown of architecture, high-throughput scaling challenges, and production results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Case Study Card 1: Collections Platform */}
        <div className="glass-card interactive-card interactive-card-violet gradient-beam-top rounded-2xl p-6 sm:p-7 flex flex-col justify-between group stagger-item stagger-2 border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 radar-beacon-cyan"></span>
                <span>⚡ High Throughput</span>
              </span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                <span>🗓️</span> Dec 2025 – Present
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span>📊</span>
              <span>Collections Platform</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
              Sole backend architect for end-to-end delinquent loan collection: batch CSV ingestion in 1,000s, automated DPD strategy scheduler, and MSG91 + India Post multi-channel delivery.
            </p>

            {/* Production Metric Highlight Pill */}
            <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-violet-500/20 text-violet-200 text-xs font-mono flex items-center gap-2 shadow-inner">
              <span className="text-violet-400 font-bold text-sm">⚡</span>
              <span>Processes <strong>~14,000 cases / month</strong></span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                { name: 'Java 21', s: '☕' },
                { name: 'Spring Scheduler', s: '⏱️' },
                { name: 'Redis', s: '🔴' },
                { name: 'AWS S3', s: '☁️' },
                { name: 'PostgreSQL', s: '🐘' },
              ].map((tech, i) => (
                <span key={i} className="tech-tag-interactive text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-200 flex items-center gap-1 shadow-sm">
                  <span>{tech.s}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-cyan-400 flex items-center justify-center gap-2 shadow-sm"
              type="button"
              onClick={() => onOpenModal('modal-collections')}
            >
              <span>View Interactive Case Study</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Case Study Card 2: Payments Bridge */}
        <div className="glass-card interactive-card interactive-card-emerald gradient-beam-top rounded-2xl p-6 sm:p-7 flex flex-col justify-between group stagger-item stagger-3 border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 radar-beacon-green"></span>
                <span>🔒 Fintech / Gateway</span>
              </span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                <span>🗓️</span> Aug 2025 – Dec 2025
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
              <span>💳</span>
              <span>Payments Bridge</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
              Full-lifecycle PhonePe middleware supporting Dynamic QR, Payment Links, Collect Calls, Autopay, webhook reconciliation, and automated cancellation for multi-merchant accounts.
            </p>

            {/* Production Metric Highlight Pill */}
            <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/20 text-emerald-200 text-xs font-mono flex items-center gap-2 shadow-inner">
              <span className="text-emerald-400 font-bold text-sm">🔒</span>
              <span>Idempotent Webhooks &amp; Auto-Expiry</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                { name: 'Java 21', s: '☕' },
                { name: 'Spring Boot 3', s: '🍃' },
                { name: 'PostgreSQL', s: '🐘' },
                { name: 'PhonePe API', s: '📱' },
                { name: 'JWT Auth', s: '🔑' },
              ].map((tech, i) => (
                <span key={i} className="tech-tag-interactive text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-200 flex items-center gap-1 shadow-sm">
                  <span>{tech.s}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-emerald-400 flex items-center justify-center gap-2 shadow-sm"
              type="button"
              onClick={() => onOpenModal('modal-payments')}
            >
              <span>View Interactive Case Study</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Case Study Card 3: Lendly Decision Engine */}
        <div className="glass-card interactive-card gradient-beam-top rounded-2xl p-6 sm:p-7 flex flex-col justify-between group stagger-item stagger-4 border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 radar-beacon-cyan"></span>
                <span>🎯 Underwriting &amp; LLD</span>
              </span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                <span>🗓️</span> Jun 2022 – Mar 2025
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span>🏦</span>
              <span>Lendly Decision Engine</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
              Automated loan underwriting engine consuming Clarity, MLA, Factor Trust, and Equifax. Slashed manual underwriting effort by 90% and optimized SQL queries by 40%.
            </p>

            {/* Production Metric Highlight Pill */}
            <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-cyan-200 text-xs font-mono flex items-center gap-2 shadow-inner">
              <span className="text-cyan-400 font-bold text-sm">⚡</span>
              <span><strong>90% Manual Verification</strong> Reduced</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                { name: 'Java 8', s: '☕' },
                { name: 'Hibernate', s: '📦' },
                { name: 'Oracle DB', s: '🏛️' },
                { name: 'SQL Server', s: '🗃️' },
                { name: 'Equifax API', s: '🏦' },
              ].map((tech, i) => (
                <span key={i} className="tech-tag-interactive text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-200 flex items-center gap-1 shadow-sm">
                  <span>{tech.s}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all modal-trigger hover:border-cyan-400 flex items-center justify-center gap-2 shadow-sm"
              type="button"
              onClick={() => onOpenModal('modal-lendly')}
            >
              <span>View Interactive Case Study</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
