'use client';

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Reveal } from '@/components/Reveal';

export default function ResumeBanner() {
  return (
    <section className="page-container py-8" id="resume-cta">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-12 sm:px-14 sm:py-14 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"
          />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Want the full story?</h2>
              <p className="mt-3 text-base text-slate-400">
                Download my resume for the complete details of my work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                download
                href={PORTFOLIO_DATA.personal.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact me
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
