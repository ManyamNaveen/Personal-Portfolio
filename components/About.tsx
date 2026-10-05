'use client';

import React from 'react';
import { BrainCircuit, CreditCard, Server, Workflow, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';

const STATS = [
  { value: '3.8+', label: 'Years experience' },
  { value: '14K+', label: 'Loans handled a month' },
  { value: '90%', label: 'Less manual work' },
  { value: '40%', label: 'Faster queries' },
];

const CAPABILITIES: { icon: LucideIcon; title: string; text: string; tint: string }[] = [
  {
    icon: Server,
    title: 'Backend APIs',
    text: 'Fast, clean APIs for apps and websites.',
    tint: 'bg-cyan-50 text-cyan-700',
  },
  {
    icon: CreditCard,
    title: 'Online payments',
    text: 'PhonePe QR, links, autopay and refunds.',
    tint: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Workflow,
    title: 'Automation',
    text: 'Scheduled jobs, file imports and reminders.',
    tint: 'bg-violet-50 text-violet-700',
  },
  {
    icon: BrainCircuit,
    title: 'AI integration',
    text: 'Several AI models working as one step.',
    tint: 'bg-amber-50 text-amber-700',
  },
];

export default function About() {
  return (
    <section className="border-t border-slate-200" id="about">
      <div className="page-container py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeading
            eyebrow="About me"
            title="I build software you can rely on."
            gradientWord="rely on."
          />

          <Reveal className="mt-6 space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-600" delay={0.1}>
            <p>
              I&apos;m a Java backend developer with <strong className="font-semibold text-slate-900">3.8+ years</strong> of
              experience, building the systems behind payment, loan and AI products.
            </p>
          </Reveal>

          <Reveal className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200" delay={0.2}>
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-5">
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-6" delay={0.3}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to high-impact backend roles
            </span>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-10">
          {CAPABILITIES.map(({ icon: Icon, title, text, tint }) => (
            <RevealItem key={title} className="h-full">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)]">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tint}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
