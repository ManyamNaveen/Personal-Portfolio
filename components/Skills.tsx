'use client';

import React from 'react';

const SKILL_GROUPS = [
  {
    num: '01',
    title: 'Languages & Core',
    skills: [
      { name: 'Java 21', highlight: false },
      { name: 'Java 8', highlight: false },
      { name: 'SQL (Advanced)', highlight: false },
      { name: 'Multithreading & Concurrency', highlight: false },
      { name: 'Streams & Lambdas', highlight: false },
      { name: 'OOP & SOLID Principles', highlight: false },
    ],
  },
  {
    num: '02',
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot 3', highlight: true },
      { name: 'Spring MVC', highlight: false },
      { name: 'Spring Security (JWT, RBAC)', highlight: false },
      { name: 'Spring Data JPA', highlight: false },
      { name: 'Hibernate', highlight: false },
      { name: 'Spring Scheduler', highlight: false },
    ],
  },
  {
    num: '03',
    title: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL', highlight: false },
      { name: 'Oracle', highlight: false },
      { name: 'SQL Server', highlight: false },
      { name: 'Redis', highlight: true },
      { name: 'AWS S3', highlight: false },
    ],
  },
  {
    num: '04',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, IAM)', highlight: false },
      { name: 'SNS / SQS', highlight: false },
      { name: 'Elastic Beanstalk', highlight: false },
      { name: 'ECR', highlight: false },
      { name: 'Docker', highlight: false },
      { name: 'Git / Maven', highlight: false },
      { name: 'JIRA / Postman', highlight: false },
      { name: 'Swagger / OpenAPI', highlight: false },
    ],
  },
  {
    num: '05',
    title: 'APIs & Integrations',
    skills: [
      { name: 'RESTful APIs', highlight: true },
      { name: 'SOAP Services', highlight: false },
      { name: 'JSON / XML / YAML', highlight: false },
      { name: 'PhonePe Gateway', highlight: false },
      { name: 'MSG91 (WhatsApp, SMS)', highlight: false },
      { name: 'India Post APIs', highlight: false },
      { name: 'Credit & Underwriting APIs', highlight: false },
    ],
  },
  {
    num: '06',
    title: 'Concepts & Frontend',
    skills: [
      { name: 'OOP & SOLID', highlight: false },
      { name: 'Low-Level Design (LLD)', highlight: false },
      { name: 'Singleton & Factory', highlight: false },
      { name: 'Multi-tenant Architecture', highlight: false },
      { name: 'Async & Batch Processing', highlight: false },
      { name: 'Multithreading', highlight: false },
      { name: 'Streams & Lambdas', highlight: false },
      { name: 'Frontend: React / AngularJS', highlight: false },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 border-t border-white/5" id="skills">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Technical Proficiencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Technical Skills &amp; Core Tooling
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Categorized expertise derived from 3.8+ years of production engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                {group.num}
              </div>
              <h3 className="text-white font-bold text-base">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    skill.highlight
                      ? 'bg-slate-900 border border-cyan-500/30 text-cyan-300'
                      : 'bg-slate-900 border border-slate-700 text-slate-200 hover:border-slate-500'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
