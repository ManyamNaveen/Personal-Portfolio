'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06090F] py-8 font-mono text-xs text-slate-500">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name} • Java Backend Developer &amp; Systems Engineer
        </div>
        
        <div className="flex items-center gap-6">
          <a
            className="hover:text-cyan-400 transition-colors cursor-pointer"
            href="#home"
            onClick={scrollToTop}
          >
            Back to Top ↑
          </a>
          <a
            className="hover:text-cyan-400 transition-colors"
            href={PORTFOLIO_DATA.personal.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-cyan-400 transition-colors"
            href={PORTFOLIO_DATA.personal.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-cyan-400 transition-colors"
            download=""
            href={PORTFOLIO_DATA.personal.resumeUrl}
          >
            CV Download
          </a>
        </div>
      </div>
    </footer>
  );
}
