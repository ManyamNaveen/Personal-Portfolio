'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const { personal } = PORTFOLIO_DATA;

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-sm text-slate-500">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {personal.name} · {personal.title}
        </p>

        <div className="flex items-center gap-6">
          <a className="hover:text-slate-900 transition-colors" href={personal.github} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <a className="hover:text-slate-900 transition-colors" href={personal.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="hover:text-slate-900 transition-colors" download href={personal.resumeUrl}>
            Resume
          </a>
          <a className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors" href="#home" onClick={scrollToTop}>
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
