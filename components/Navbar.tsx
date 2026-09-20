'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_LINKS = [
  { href: '#home', label: 'Home', num: '00' },
  { href: '#about', label: 'About', num: '01' },
  { href: '#experience', label: 'Experience', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#skills', label: 'Skills', num: '04' },
  { href: '#education', label: 'Education', num: '05' },
  { href: '#contact', label: 'Contact', num: '06' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.querySelector(NAV_LINKS[i].href);
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActiveNav(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveNav(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#080C14]/80 border-b border-white/10" id="main-header">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left spacer so navigation links in middle are centered */}
        <div className="hidden lg:flex flex-1 items-center"></div>

        {/* Middle: Desktop Navigation Links (Styled with Poppins matching mockup) */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center justify-center gap-8 font-poppins text-[15px] tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={link.href}
                className={`transition-colors py-1 ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white font-normal'
                }`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Action Buttons & Socials */}
        <div className="hidden sm:flex flex-1 items-center justify-end gap-3">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle Light/Dark Theme"
            className="theme-toggle-btn p-2.5 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-300 transition-all bg-slate-900/40 focus:outline-none flex items-center justify-center"
            type="button"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="1" y2="3"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="21" y2="23"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="1" x2="3" y1="12" y2="12"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="23" y1="12" y2="12"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            )}
          </button>

          {/* LinkedIn */}
          <a
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 transition-all bg-slate-900/40"
            href={PORTFOLIO_DATA.personal.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61s.72 1.61 1.61 1.61 1.61-.72 1.61-1.61-.72-1.61-1.61-1.61Z"></path>
            </svg>
          </a>

          {/* GitHub */}
          <a
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 transition-all bg-slate-900/40"
            href={PORTFOLIO_DATA.personal.github}
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
            </svg>
          </a>

          {/* Resume Download Button */}
          <a
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 rounded-lg bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            download=""
            href={PORTFOLIO_DATA.personal.resumeUrl}
          >
            <svg className="w-4 h-4 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center lg:hidden gap-1">
          <button
            aria-label="Toggle Light/Dark Theme"
            className="theme-toggle-btn p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 focus:outline-none flex items-center justify-center"
            type="button"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="1" y2="3"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="21" y2="23"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="1" x2="3" y1="12" y2="12"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="23" y1="12" y2="12"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            )}
          </button>
          
          <button
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-t border-slate-800 bg-[#080C14]/95 space-y-2 font-poppins text-sm" id="mobile-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="block py-2 text-slate-300 hover:text-amber-400"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.num}. {link.label}
            </a>
          ))}
          <div className="pt-3 flex gap-3">
            <a
              className="flex-1 text-center py-2.5 bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold uppercase tracking-wider"
              download=""
              href={PORTFOLIO_DATA.personal.resumeUrl}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
