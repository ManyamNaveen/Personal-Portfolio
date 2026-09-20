'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeBanner() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12" id="resume-cta">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        
        <div className="space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
            Available for immediate hire
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Want the complete production story?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Download the comprehensive resume detailing all schema designs, third-party underwriting configurations, and production performance records.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
            download=""
            href={PORTFOLIO_DATA.personal.resumeUrl}
          >
            Download Resume (PDF)
          </a>

          <a
            className="px-5 py-3.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}
