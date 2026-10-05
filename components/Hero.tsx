'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Download, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import DrawText from '@/components/DrawText';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';

const { personal } = PORTFOLIO_DATA;

const ICON = 'w-5 h-5 lg:w-[22px] lg:h-[22px]';

const SOCIALS = [
  { label: 'LinkedIn', href: personal.linkedin, icon: <LinkedinIcon className={ICON} />, external: true },
  { label: 'GitHub', href: personal.github, icon: <GithubIcon className={ICON} />, external: true },
  { label: 'Email', href: `mailto:${personal.email}`, icon: <Mail className={ICON} strokeWidth={1.8} /> },
  { label: 'Phone', href: `tel:${personal.phone.replace(/\s+/g, '')}`, icon: <Phone className={ICON} strokeWidth={1.8} /> },
];

export default function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // As the hero scrolls away the copy drifts up and fades, the video slowly zooms
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section ref={stageRef} className="cinematic-stage" id="home">
      <motion.div className="plate" aria-hidden="true" style={{ scale: videoScale }}>
        <video className="plate-video" autoPlay muted loop playsInline preload="auto">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <h1 className="sr-only">{personal.name}, {personal.title}</h1>

        {/* width/top/height = real Manrope & Space Grotesk metrics at these sizes */}
        <DrawText
          text="NAVEEN MANYAM"
          width={1229}
          top={-158}
          height={202}
          fontSize={148}
          fontWeight={800}
          fontFamily="var(--font-manrope, system-ui), sans-serif"
          letterSpacing={-2}
          strokeColor="#0a0d14"
          fillColor="#0a0d14"
          strokeWidth={1.6}
          className="w-full"
        />

        <DrawText
          text="DEVELOPER"
          width={265.5}
          top={-35}
          height={46}
          fontSize={36}
          fontWeight={700}
          fontFamily="var(--font-grotesk, system-ui), sans-serif"
          letterSpacing={8}
          strokeColor="#a1a1aa"
          fillColor="#71717a"
          strokeWidth={1.2}
          delay={0.3}
          drawDuration={0.9}
          stagger={0.04}
          className="mt-2 w-[62%] max-w-[420px]"
        />

        {/* CSS (not JS) animations so the copy shows from first paint, before hydration */}
        <p className="hero-sub hero-rise" style={{ animationDelay: '0.4s' }}>
          I build the backend systems behind{' '}
          <span className="text-slate-900 font-medium">payments, loan collections and AI lending apps</span>, using
          Java and Spring Boot.
        </p>

        <div className="flex items-center gap-3 lg:gap-4 pt-6 lg:pt-8 hero-rise" style={{ animationDelay: '0.55s' }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              aria-label={s.label}
              title={s.label}
              href={s.href}
              {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="w-11 h-11 lg:w-[54px] lg:h-[54px] rounded-full border border-slate-300 bg-white/70 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-400 hover:-translate-y-0.5 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="hero-actions hero-rise" style={{ animationDelay: '0.7s' }}>
          <a className="pill-cta-btn" href="#projects">
            View Projects
          </a>
          <a className="ghost-cta-btn" download href={personal.resumeUrl}>
            Download CV
            <Download className="w-[1.1em] h-[1.1em]" strokeWidth={2} />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
