'use client';

import React, { useState } from 'react';
import { Check, LoaderCircle, Mail, MapPin, Phone, Send, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import SectionHeading from '@/components/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import { LinkedinIcon, WhatsappIcon } from '@/components/BrandIcons';

const { personal } = PORTFOLIO_DATA;
const WHATSAPP_NUMBER = personal.phone.replace(/\D/g, '');

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };
type FormState = typeof EMPTY_FORM;

function whatsappUrl(form: FormState, fallbackMessage: string) {
  const text = `Hi Manyam Naveen,\n\nName: ${form.name || 'Not specified'}\nEmail: ${form.email || 'Not specified'}\nTopic: ${
    form.subject || 'Portfolio Inquiry'
  }\n\nMessage:\n${form.message || fallbackMessage}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const CHANNELS = [
  { icon: <Mail className="h-5 w-5" strokeWidth={1.8} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <Phone className="h-5 w-5" strokeWidth={1.8} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, '')}` },
  {
    icon: <WhatsappIcon className="h-5 w-5" />,
    label: 'WhatsApp',
    value: personal.phone,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Manyam Naveen, I saw your portfolio and would like to connect!")}`,
    external: true,
  },
  { icon: <LinkedinIcon className="h-5 w-5" />, label: 'LinkedIn', value: 'linkedin.com/in/naveenmanyam', href: personal.linkedin, external: true },
  { icon: <MapPin className="h-5 w-5" strokeWidth={1.8} />, label: 'Location', value: personal.location },
];

const inputClass =
  'w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition';

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you for reaching out! Manyam Naveen will respond promptly.');
        setFormData(EMPTY_FORM);
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Something went wrong. Please try emailing directly.');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage(`Failed to connect to the server. Please email directly at ${personal.email}.`);
    }
  };

  return (
    <section className="border-t border-slate-200" id="contact">
      <div className="page-container py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something reliable."
            gradientWord="reliable."
            description="Hiring, or have a project in mind? Send me a message and I'll get back to you."
          />

          <RevealGroup className="mt-10 divide-y divide-slate-100 rounded-3xl border border-slate-200 bg-white">
            {CHANNELS.map((c) => {
              const body = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{c.label}</span>
                    <span className="block truncate text-sm font-semibold text-slate-900">{c.value}</span>
                  </span>
                </>
              );
              return (
                <RevealItem key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 px-5 py-4">{body}</div>
                  )}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <Reveal className="lg:col-span-7 lg:pt-6" delay={0.15}>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)]">
            <h3 className="font-display text-xl font-bold text-slate-900">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500">It goes straight to my personal inbox.</p>

            {status === 'success' && (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="flex items-center gap-2 font-medium">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  {feedbackMessage}
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
                  href={whatsappUrl(formData, 'I sent an inquiry via your portfolio.')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Need a faster reply? Open WhatsApp
                </a>
              </div>
            )}

            {status === 'error' && (
              <p className="mt-6 flex items-center gap-2 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700">
                <X className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                {feedbackMessage}
              </p>
            )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">Name</span>
                  <input required className={inputClass} name="name" placeholder="John Doe" type="text" value={formData.name} onChange={handleChange} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
                  <input required className={inputClass} name="email" placeholder="john@company.com" type="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Subject</span>
                <input className={inputClass} name="subject" placeholder="Backend role / Spring Boot project" type="text" value={formData.subject} onChange={handleChange} />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  required
                  className={inputClass}
                  name="message"
                  placeholder="Tell me about your team, timeline or challenge..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:opacity-60"
                  disabled={status === 'loading'}
                  type="submit"
                >
                  {status === 'loading' ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" strokeWidth={2} />
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>

                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  href={whatsappUrl(formData, 'I would like to discuss an opportunity.')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
