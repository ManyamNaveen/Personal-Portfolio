'use client';

import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumePage() {
  const { personal, experiences, projects, education, certifications, skills } = PORTFOLIO_DATA;
  const personalProjects = projects.filter((project) => project.demoUrl);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-8 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto mb-5 flex max-w-[210mm] items-center justify-between print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          <Download className="h-4 w-4" /> Save as PDF
        </button>
      </div>

      <article className="resume-sheet mx-auto max-w-[210mm] bg-white p-6 shadow-xl sm:p-10 print:max-w-none print:p-0 print:shadow-none">
        <header className="border-b border-slate-300 pb-4">
          <p className="text-[32px] font-bold leading-tight tracking-tight text-slate-950">{personal.name}</p>
          <p className="mt-1 text-[15px] font-semibold text-slate-700">{personal.title}</p>
          <p className="mt-3 flex flex-wrap gap-x-2 text-[10px] leading-relaxed text-slate-700">
            <span>{personal.location}</span><span>|</span><span>{personal.phone}</span><span>|</span><a href={`mailto:${personal.email}`}>{personal.email}</a>
          </p>
          <p className="flex flex-wrap gap-x-2 text-[10px] leading-relaxed text-slate-700">
            <a href={personal.linkedin}>linkedin.com/in/naveenmanyam</a><span>|</span><a href={personal.github}>github.com/ManyamNaveen</a><span>|</span><a href={personal.website}>www.naveenmanyam.in</a>
          </p>
        </header>

        <section className="resume-section mt-4">
          <Heading>Professional summary</Heading>
          <p className="mt-2 text-[12px] leading-[1.55] text-slate-700">
            Java Backend Developer with 4 years of experience building production APIs and fintech systems. Delivered payments, loan collections, and AI-integrated lending platforms, from PostgreSQL data models to third-party integrations. Strong in Java, Spring Boot, API design, security, and reliable integrations.
          </p>
        </section>

        <section className="resume-section mt-5">
          <Heading>Professional Experience</Heading>
          <div className="mt-2 space-y-3">
            {experiences.map((experience) => (
              <section key={experience.company}>
                <div className="resume-entry">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-[14px] font-bold text-slate-950">{experience.role} <span className="font-medium text-slate-500">| {experience.company}</span></h3>
                    <span className="text-[10px] font-semibold text-slate-700">{experience.period.replace('–', '-')}</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-slate-500">{experience.location}</p>
                </div>
                {experience.projects?.map((project) => (
                  <div key={project.name} className="resume-entry mt-2.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="text-[12px] font-bold text-slate-800">{project.name}</h4>
                      <span className="text-[10px] text-slate-500">{project.period.replace('–', '-')}</span>
                    </div>
                    <p className="mt-0.5 text-[9px] leading-snug text-slate-500">{project.tech}</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] leading-[1.4] text-slate-700">
                      {project.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    {project.highlight && <p className="mt-0.5 text-[10px] font-semibold text-slate-700">{project.highlight}</p>}
                  </div>
                ))}
                {experience.achievements.length > 0 && (
                  <ul className="mt-1.5 list-disc space-y-0.5 pl-4 text-[11px] leading-[1.4] text-slate-700">
                    {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="resume-section resume-projects mt-5">
          <Heading>Personal Projects</Heading>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 print:grid-cols-1">
            {personalProjects.map((project) => (
              <article key={project.id} className="break-inside-avoid border-b border-slate-200 py-2 first:pt-0 last:border-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-[12px] font-bold text-slate-950">{project.title}</h3>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="break-all text-[10px] font-medium text-slate-600">
                      {project.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  )}
                </div>
                <p className="mt-1 text-[10px] leading-[1.4] text-slate-600">{project.tagline}</p>
                <p className="mt-1.5 text-[10px] font-medium text-slate-500">{project.techStack.join(' | ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section mt-5">
          <Heading>Technical skills</Heading>
          <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 print:grid-cols-2">
            {skills.slice(0, 6).map((category) => (
              <div key={category.title} className="break-inside-avoid text-[10px] leading-[1.4] text-slate-800">
                <strong>{category.title}: </strong>
                <span>{category.skills.map((skill) => skill.name).join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section mt-5 grid grid-cols-1 gap-5 border-t border-slate-200 pt-3 sm:grid-cols-2 print:grid-cols-2">
          <div>
            <Heading>Education</Heading>
            <div className="mt-2 space-y-2">
              {education.map((item) => (
                <div key={item.degree} className="break-inside-avoid">
                  <h3 className="text-[11px] font-bold text-slate-900">{item.degree}</h3>
                  <p className="mt-0.5 text-[10px] text-slate-600">{item.institution} | {item.location}</p>
                  <p className="text-[10px] text-slate-500">{item.period.replace('–', '-')} | {item.score}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Heading>Certifications</Heading>
            <ul className="mt-2 space-y-1.5 text-[10px] leading-snug text-slate-700">
              {certifications.map((item) => <li key={item.name} className="break-inside-avoid"><strong>{item.name}</strong> | {item.issuer}</li>)}
            </ul>
          </div>
        </section>
      </article>

      <style jsx global>{`
        @page { size: A4; margin: 14mm 15mm; }
        @media print {
          html, body { background: #fff !important; }
          body { font-family: var(--font-inter), Arial, Helvetica, sans-serif !important; color: #111827 !important; }
          .resume-sheet { width: 100%; margin: 0 auto; }
          .resume-section { break-inside: auto; page-break-inside: auto; }
          .resume-projects { break-inside: avoid; page-break-inside: avoid; }
          .resume-section > h2 { break-after: avoid; page-break-after: avoid; }
          .resume-entry { break-inside: avoid; page-break-inside: avoid; }
          a, h3, h4 { overflow-wrap: anywhere; }
          a { color: inherit !important; text-decoration: none !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </main>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-slate-300 pb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-900">{children}</h2>
  );
}
