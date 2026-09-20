'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useScrollReveal } from '@/components/useScrollReveal';

export default function ResumeBanner() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6" 
      id="resume-cta"
    >
      <div className="glass-card interactive-card gradient-beam-top rounded-3xl p-6 sm:p-10 border border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-indigo-950/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_50px_rgba(6,182,212,0.2)]">
        
        <div className="space-y-2 stagger-item stagger-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-800 dark:text-cyan-300 tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 radar-beacon-green"></span>
            Available for immediate hire
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Want the complete production story?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Download the comprehensive resume detailing all schema designs, third-party underwriting configurations, and production performance records.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 stagger-item stagger-2">
          <a
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center gap-2"
            download=""
            href={PORTFOLIO_DATA.personal.resumeUrl}
          >
            <span>Download Resume (PDF)</span>
            <span>↓</span>
          </a>

          <a
            className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800/90 text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/90 text-xs font-bold uppercase tracking-wider transition-all border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-slate-500 shadow-sm"
            href="#contact"
          >
            Contact Me →
          </a>
        </div>

      </div>
    </section>
  );
}
