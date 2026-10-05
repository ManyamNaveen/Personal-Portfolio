'use client';

import React from 'react';
import { Cloud, CodeXml, Cpu, Database, GitMerge, Layers, type LucideIcon } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import SectionHeading from '@/components/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  code: CodeXml,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
  'git-merge': GitMerge,
};

const LOGOS = [
  { name: 'Spring Boot', src: '/logos/springboot.svg' },
  { name: 'Java 21', src: '/logos/java.svg' },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  { name: 'Redis', src: '/logos/redis.svg' },
  { name: 'Docker', src: '/logos/docker.svg' },
  { name: 'Apache Kafka', src: '/logos/kafka.svg' },
  { name: 'JWT Auth', src: '/logos/jwt_icon.svg' },
  { name: 'PhonePe', src: '/logos/phonepe_icon.svg' },
  { name: 'MSG91', src: '/logos/msg91_icon.svg' },
  { name: 'India Post', src: '/logos/indiapost_icon.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-16 sm:py-24 overflow-hidden">
      <div className="page-container">
        <SectionHeading
          eyebrow="Tech stack"
          title="Skills"
          description="The languages and tools I work with."
        />

        {/* Core stack banner */}
        <Reveal className="mt-12 sm:mt-16">
          <div className="relative h-[300px] sm:h-[380px] overflow-hidden rounded-[32px] border border-slate-200 bg-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-center px-8 sm:px-14 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Core stack</span>
              <h3 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Java 21 &amp;
                <br />
                Spring Boot 3
              </h3>
              <p className="mt-4 text-base text-slate-600">
                My main tools for building fast, secure backend systems.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Logo marquee */}
      <Reveal className="mt-10 mask-fade-x" y={24}>
        <div className="animate-marquee gap-3 py-2">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              aria-hidden={index >= LOGOS.length}
              className="shrink-0 flex items-center gap-2.5 h-12 px-5 rounded-full bg-white border border-slate-200 select-none"
            >
              <img src={logo.src} alt="" className="h-5 w-5 object-contain" />
              <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Skill categories */}
      <div className="page-container">
        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.skills.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon] ?? CodeXml;
            return (
              <RevealItem key={category.title} className="h-full">
                <div className="group h-full rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_45px_-20px_rgba(8,145,178,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className={`rounded-full px-3 py-1 text-[13px] ${
                          skill.isCore
                            ? 'bg-cyan-50 text-cyan-900 font-medium ring-1 ring-inset ring-cyan-200'
                            : 'bg-slate-50 text-slate-600'
                        }`}
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <Reveal className="mt-6 flex items-center gap-2 text-sm text-slate-500" y={16}>
          <span className="h-3 w-3 rounded-full bg-cyan-100 ring-1 ring-cyan-300" /> Highlighted: the skills I use most
        </Reveal>
      </div>
    </section>
  );
}
