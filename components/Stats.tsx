'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Stats() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10" id="stats">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1.5 font-medium">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
