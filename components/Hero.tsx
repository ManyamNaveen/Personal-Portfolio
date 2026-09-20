'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import BackgroundParticles from '@/components/BackgroundParticles';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const phrases = ['MANYAM NAVEEN', 'NAVEEN MANYAM', 'MANYAM NAVEEN'];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 45 : 95;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 3500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 min-h-[min(calc(100vh-5rem),850px)] flex items-center justify-center py-6 sm:py-8 lg:py-10 overflow-hidden"
      id="home"
    >
      {/* Confined Hero-Only Particle Field */}
      <BackgroundParticles />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/90 via-[#080C14]/60 to-[#080C14]/85 dark:block hidden pointer-events-none -z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">

        {/* Left Column: Bio, Typewriter, CTA, and Integrated Stats */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="space-y-2">
            <p className="text-slate-400 font-medium text-sm sm:text-base tracking-wide">Hi I am</p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight min-h-[1.25em] flex items-center flex-wrap" id="typewriter-container">
              <span className="name-glow-text" id="typewriter-text">{displayText || 'MANYAM NAVEEN'}</span>
              <span aria-hidden="true" className="type-cursor" id="typewriter-cursor"></span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-amber-500">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
              Specializing in <span className="text-white font-medium">Spring Boot 3, REST APIs, PostgreSQL &amp; Scalable Cloud Microservices</span>. Delivering resilient distributed backends, rule engines, and payment integrations.
            </p>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-3 pt-0.5">
            <a
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white dark:bg-transparent glass-card border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-sm transition-all"
              href={PORTFOLIO_DATA.personal.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61s.72 1.61 1.61 1.61 1.61-.72 1.61-1.61-.72-1.61-1.61-1.61Z"></path>
              </svg>
            </a>

            <a
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white dark:bg-transparent glass-card border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-sm transition-all"
              href={PORTFOLIO_DATA.personal.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
              </svg>
            </a>

            <a
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-white dark:bg-transparent glass-card border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-sm transition-all"
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
              </svg>
            </a>

            <a
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-white dark:bg-transparent glass-card border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-sm transition-all"
              href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
              </svg>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              href="#projects"
            >
              <span>Hire Me / Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>

            <a
              className="px-5 py-2.5 rounded-xl glass-card border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-400/50 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              download=""
              href={PORTFOLIO_DATA.personal.resumeUrl}
            >
              <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Sleek Integrated Metrics (No heavy box-in-box look) */}
          <div className="pt-2">
            <div className="glass-card px-5 py-3 rounded-2xl border border-slate-300 dark:border-white/10 flex items-center gap-6 max-w-xs shadow-sm">
              <div className="pr-5 border-r border-slate-200 dark:border-white/10">
                <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">3.8+</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Experiences</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">10+</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Projects Done</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Portrait with Clean Circular Bezel (Zero Square Edges) */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-4 lg:py-0" data-purpose="hero-portrait">
          <div className="relative w-64 sm:w-80 lg:w-[400px] xl:w-[440px] aspect-square flex items-center justify-center">

            {/* Ambient Multi-color Aura Glows */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/25 via-amber-500/20 to-violet-600/25 blur-3xl opacity-75 animate-pulse pointer-events-none"></div>

            {/* Outer Slow-Spinning Dashed Cyan Ring */}
            <div className="absolute -inset-3 rounded-full border border-cyan-400/30 border-dashed animate-spin-slow pointer-events-none"></div>

            {/* Ambient Cyan Halo Ring */}
            <div className="absolute -inset-1 rounded-full border border-cyan-500/20 pointer-events-none"></div>

            {/* Seamless Circular Avatar Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-gradient-to-b from-[#0e1626] to-[#080C14]">
              <img
                alt="Manyam Naveen - Java Backend Developer"
                className="w-full h-full object-cover object-top filter drop-shadow-2xl scale-[1.03]"
                src="/Portfolio_Profile.png"
              />
              {/* Subtle Bottom Ambient Gradient so photo seamlessly merges into the circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#080C14]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge 1: Spring Boot 3 */}
            <div className="absolute -top-3 -left-4 sm:-left-8 z-20 px-3 py-1.5 rounded-xl glass-card border border-cyan-400/50 text-cyan-300 font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] animate-float backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-semibold tracking-wide">Spring Boot 3</span>
            </div>

            {/* Floating Badge 2: Java 21 */}
            <div className="absolute top-1/4 -right-3 sm:-right-6 z-20 px-3 py-1.5 rounded-xl glass-card border border-amber-400/50 text-amber-300 font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.25)] animate-float backdrop-blur-md" style={{ animationDelay: '1.8s' }}>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="font-semibold tracking-wide">Java 21</span>
            </div>

            {/* Floating Badge 3: REST APIs */}
            <div className="absolute top-2/3 -right-2 sm:-right-5 z-20 px-2.5 py-1.5 rounded-xl glass-card border border-violet-400/40 text-violet-300 font-mono text-[11px] flex items-center gap-1.5 shadow-lg animate-float backdrop-blur-md" style={{ animationDelay: '3s' }}>
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              <span className="font-medium">REST APIs</span>
            </div>

            {/* Floating Badge 4: 99.99% Uptime */}
            <div className="absolute bottom-12 -left-3 sm:-left-6 z-20 px-3 py-1.5 rounded-xl glass-card border border-emerald-400/50 text-emerald-300 font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] animate-float backdrop-blur-md" style={{ animationDelay: '2.4s' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide">99.99% Uptime</span>
            </div>

            {/* Floating Badge 5: PostgreSQL & Redis */}
            <div className="absolute -bottom-2.5 left-1/4 z-20 px-3 py-1.5 rounded-xl glass-card border border-cyan-500/30 text-slate-300 font-mono text-[11px] flex items-center gap-1.5 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              PostgreSQL &amp; Redis
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
