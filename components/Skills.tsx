'use client';

import React from 'react';
import { useScrollReveal } from '@/components/useScrollReveal';
import TypewriterText from '@/components/TypewriterText';

const SKILL_GROUPS = [
  {
    num: '01',
    title: 'Languages & Core',
    iconSymbol: '☕',
    iconColor: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
    skills: [
      { name: 'Java 21', symbol: '☕', highlight: true },
      { name: 'Java 8', symbol: '☕', highlight: false },
      { name: 'SQL (Advanced)', symbol: '💾', highlight: true },
      { name: 'Multithreading & Concurrency', symbol: '⚡', highlight: true },
      { name: 'Streams & Lambdas', symbol: '🔄', highlight: false },
      { name: 'OOP & SOLID Principles', symbol: '🏛️', highlight: false },
    ],
  },
  {
    num: '02',
    title: 'Frameworks & Libraries',
    iconSymbol: '🍃',
    iconColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    skills: [
      { name: 'Spring Boot 3', symbol: '🍃', highlight: true },
      { name: 'Spring MVC', symbol: '🌐', highlight: false },
      { name: 'Spring Security (JWT, RBAC)', symbol: '🔒', highlight: true },
      { name: 'Spring Data JPA', symbol: '🗄️', highlight: false },
      { name: 'Hibernate', symbol: '📦', highlight: false },
      { name: 'Spring Scheduler', symbol: '⏱️', highlight: false },
    ],
  },
  {
    num: '03',
    title: 'Databases & Caching',
    iconSymbol: '🐘',
    iconColor: 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30',
    skills: [
      { name: 'PostgreSQL', symbol: '🐘', highlight: true },
      { name: 'Redis', symbol: '🔴', highlight: true },
      { name: 'Oracle DB', symbol: '🏛️', highlight: false },
      { name: 'SQL Server', symbol: '🗃️', highlight: false },
      { name: 'AWS S3 Storage', symbol: '☁️', highlight: false },
    ],
  },
  {
    num: '04',
    title: 'Cloud & DevOps',
    iconSymbol: '☁️',
    iconColor: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30',
    skills: [
      { name: 'AWS (EC2, S3, IAM)', symbol: '☁️', highlight: false },
      { name: 'Docker', symbol: '🐳', highlight: true },
      { name: 'Git & GitHub', symbol: '🐙', highlight: false },
      { name: 'Maven', symbol: '📦', highlight: false },
      { name: 'Postman', symbol: '📮', highlight: false },
      { name: 'Swagger / OpenAPI', symbol: '📑', highlight: true },
      { name: 'SNS / SQS', symbol: '📨', highlight: false },
    ],
  },
  {
    num: '05',
    title: 'APIs & Integrations',
    iconSymbol: '🔌',
    iconColor: 'from-cyan-500/20 to-emerald-500/20 text-cyan-300 border-cyan-500/30',
    skills: [
      { name: 'RESTful Web Services', symbol: '⚡', highlight: true },
      { name: 'PhonePe Gateway', symbol: '💳', highlight: true },
      { name: 'MSG91 (WhatsApp/SMS/IVR)', symbol: '📱', highlight: true },
      { name: 'India Post Tracking', symbol: '📮', highlight: false },
      { name: 'Credit Bureaus (Equifax/Clarity)', symbol: '🏦', highlight: true },
      { name: 'SOAP & XML', symbol: '📜', highlight: false },
    ],
  },
  {
    num: '06',
    title: 'Architecture & Patterns',
    iconSymbol: '📐',
    iconColor: 'from-indigo-500/20 to-cyan-500/20 text-indigo-300 border-indigo-500/30',
    skills: [
      { name: 'Low-Level Design (LLD)', symbol: '📐', highlight: true },
      { name: 'Factory & Singleton Patterns', symbol: '🏭', highlight: false },
      { name: 'Multi-Tenant Architecture', symbol: '🏢', highlight: true },
      { name: 'Async Batch Processing', symbol: '⏱️', highlight: true },
      { name: 'Clean Layered Architecture', symbol: '🏛️', highlight: false },
      { name: 'React Frontend Integration', symbol: '⚛️', highlight: false },
    ],
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="reveal-section max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-7 border-t border-slate-200 dark:border-white/5" 
      id="skills"
    >
      <div className="mb-6 sm:mb-8 stagger-item stagger-1">
        <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 radar-beacon-cyan"></span>
          Technical Proficiencies
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span>🛠️</span>
          <TypewriterText text="Technical Skills & Core Tooling" />
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Categorized expertise derived from 3.8+ years of production engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, idx) => (
          <div 
            key={idx} 
            className={`glass-card interactive-card gradient-beam-top p-6 rounded-2xl border border-white/10 stagger-item stagger-${idx + 1}`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.iconColor} border flex items-center justify-center font-bold text-base shadow-sm`}>
                  {group.iconSymbol}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base tracking-tight">{group.title}</h3>
                  <span className="text-[10px] font-mono text-slate-400">Category {group.num}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`tech-tag-interactive px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 shadow-sm ${
                    skill.highlight
                      ? 'bg-slate-900 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.12)]'
                      : 'bg-slate-900 border border-slate-700/80 text-slate-200'
                  }`}
                >
                  <span className="text-[13px]">{skill.symbol}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
