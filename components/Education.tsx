'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="education">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Formal Education */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Academic Foundation
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Education
          </h2>

          <div className="space-y-4">
            {PORTFOLIO_DATA.education.map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white">{item.degree}</h3>
                    <div className="text-sm text-cyan-400 mt-0.5">{item.institution}, {item.location}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold">
                    {item.score}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-2">{item.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Professional Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            Industry Accreditations
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Certifications
          </h2>

          <div className="space-y-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-mono font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{cert.name}</h3>
                  <div className="text-xs font-mono text-slate-400">Issued by {cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
