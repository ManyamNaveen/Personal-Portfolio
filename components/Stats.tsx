'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';

const STAT_ICONS = [
  // Experience
  <svg key="exp" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // Projects
  <svg key="proj" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  // Reliability / Uptime
  <svg key="uptime" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // High-Throughput Monthly Volume
  <svg key="vol" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

const STAT_ACCENTS = [
  'from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  'from-indigo-500/20 to-violet-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  'from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  'from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
];

export default function Stats() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef} 
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6" 
      id="stats"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`glass-card interactive-card gradient-beam-top p-4 sm:p-5 rounded-2xl text-center group stagger-item stagger-${idx + 1} border border-slate-200 dark:border-white/10`}
          >
            {/* Ambient Icon Badge */}
            <div className={`w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gradient-to-br ${STAT_ACCENTS[idx % STAT_ACCENTS.length]} border flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
              {STAT_ICONS[idx % STAT_ICONS.length]}
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono tracking-tight group-hover:scale-105 transition-transform stat-number">
              {stat.value}
            </div>
            
            <div className="text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 font-bold mt-1.5 stat-label">
              {stat.label}
            </div>
            
            <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono font-medium stat-desc">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
