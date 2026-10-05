'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const MOBILE_PRIMARY_LINKS = NAV_LINKS.slice(0, 3);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveNav('#home');
        return;
      }

      // Last section whose top has passed ~45% of the viewport wins, so unlisted
      // sections (like the resume banner) keep the preceding link active
      let currentSection = '#home';
      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          currentSection = link.href;
        }
      }
      setActiveNav(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveNav(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass = (href: string, extra = '') => {
    const tone =
      activeNav === href ? 'bg-ink text-white font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-black/5';
    return `rounded-full transition-colors duration-200 select-none ${tone} ${extra}`;
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-none" id="main-header">
      <nav
        aria-label="Main Navigation"
        className="nav-pill-light pointer-events-auto rounded-full p-1.5 flex items-center gap-1"
      >
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClass(link.href, 'px-4 py-1.5 text-sm font-medium')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-1">
          {MOBILE_PRIMARY_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClass(link.href, 'px-3.5 py-1.5 text-[13px] font-medium')}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-700 transition-colors hover:bg-black/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="nav-pill-light pointer-events-auto md:hidden mt-2 w-[90vw] max-w-[340px] mx-auto rounded-2xl p-2.5 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClass(link.href, 'block px-4 py-2 text-sm font-medium !rounded-xl')}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
