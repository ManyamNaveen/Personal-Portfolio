'use client';

import React from 'react';

const PRINCIPLES = [
  {
    num: '01',
    color: 'text-cyan-400/70',
    title: 'Design for Production',
    desc: 'Every endpoint must assume network flakiness, rate limits, and malformed inputs. Structured global exception handlers and strict response envelopes are non-negotiable.',
    footer: 'Zero Unhandled 500s',
    footerColor: 'text-cyan-400'
  },
  {
    num: '02',
    color: 'text-indigo-400/70',
    title: 'Practical Architecture',
    desc: 'Resist premature over-engineering. Monoliths and modular services with clear domain boundaries outperform poorly maintained microservices every single time.',
    footer: 'Business-First LLD',
    footerColor: 'text-indigo-400'
  },
  {
    num: '03',
    color: 'text-violet-400/70',
    title: 'Optimize Deliberately',
    desc: 'Target database indexes, remove N+1 queries via Spring Data JPA specifications, and introduce Redis caching where high reads occur. Profiling before guessing.',
    footer: '40%+ Latency Cut',
    footerColor: 'text-violet-400'
  },
  {
    num: '04',
    color: 'text-emerald-400/70',
    title: 'Secure by Default',
    desc: 'Never trust client inputs. Implement strict JWT validation, stateless session tracking, granular RBAC filters, and clean DTO sanitization on all tiers.',
    footer: 'JWT & RBAC First',
    footerColor: 'text-emerald-400'
  },
  {
    num: '05',
    color: 'text-amber-400/70',
    title: 'Build for Integrations',
    desc: 'External webhooks will fail or send duplicate events. Design idempotent webhook receivers, background retries, and comprehensive audit logs.',
    footer: 'Idempotency & Retries',
    footerColor: 'text-amber-400'
  },
];

export default function Approach() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 border-t border-white/5" id="approach">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Mental Models &amp; Standards
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          How I Approach Engineering
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Five foundational tenets that ensure production reliability and fast recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {PRINCIPLES.map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className={`text-2xl font-black font-mono ${item.color}`}>{item.num}</span>
              <h3 className="text-white font-bold text-sm mt-2 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
            <div className={`mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono ${item.footerColor}`}>
              {item.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
