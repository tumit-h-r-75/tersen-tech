import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast, navigate } = useNavigation();

  const [inquiryType, setInquiryType] = useState('Client Project Inquiry');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    showToast(`Message received! We'll respond to ${email} within 4 hours.`);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Mail className="w-3.5 h-3.5" />
            Direct Technical Engagement
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Connect With Tersan Tech
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Reach our solutions architects, executive leadership, or talent operations team directly. We do not use automated bots or outsourced call centers.
          </p>
        </div>

        {/* 2-Column Grid: Form + Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Message Dispatched to Technical Desk
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Your inquiry has been routed to our{' '}
                  <span className="text-[#22D3D8] font-mono">{inquiryType}</span> team. Expect an in-depth response at{' '}
                  <span className="text-white font-mono">{email}</span> within 4 business hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="px-5 py-2.5 rounded-lg bg-[#22D3D8] text-[#0E1330] text-xs font-bold uppercase tracking-wider hover:bg-[#1AB8BC]"
                  >
                    Explore Services
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                    Inquiry Intent
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      'Client Project Inquiry',
                      'Join Freelancer Network',
                      'Full-Time Career Question',
                      'Ecosystem Partnership',
                      'Press & Media',
                      'General Advisory',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                          inquiryType === type
                            ? 'bg-[#0E1330] border-[#22D3D8] text-white shadow'
                            : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Company / Organization Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Global Technologies"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Detailed Message / Scope Brief *</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current tech stack, key obstacles, target deliverables, or partnership proposal..."
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Protected by mutual confidentiality &amp; non-disclosure</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Sidebar: Hubs & Dedicated Contacts */}
          <div className="space-y-6">
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-white">Direct Department Desks</h3>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Enterprise Inquiries</span>
                  <a href="mailto:enterprise@tersantech.com" className="text-[#22D3D8] hover:underline">
                    enterprise@tersantech.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Talent &amp; Freelancers</span>
                  <a href="mailto:talent@tersantech.com" className="text-[#FFB020] hover:underline">
                    talent@tersantech.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Technology Partnerships</span>
                  <a href="mailto:ecosystem@tersantech.com" className="text-white hover:underline">
                    ecosystem@tersantech.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Direct Phone Line</span>
                  <span className="text-slate-200">+1 (800) 419-7382 (Toll Free US)</span>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-white">Global Offices</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#22D3D8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">New York Headquarters</strong>
                    <span className="text-slate-400">One World Trade Center, Suite 8500, New York, NY 10007</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#22D3D8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">San Francisco Architecture Lab</strong>
                    <span className="text-slate-400">500 Howard St, Floor 4, San Francisco, CA 94105</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#22D3D8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">London EMEA Hub</strong>
                    <span className="text-slate-400">30 St Mary Axe, City of London, EC3A 8EP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="bg-[#080B1D] border border-[#22D3D8]/30 rounded-2xl p-6 text-center space-y-3">
              <h4 className="font-heading font-bold text-sm text-white">Prefer a live video call?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pick a slot on our Principal Architect's live calendar.
              </p>
              <button
                onClick={() => navigate('/book-a-call')}
                className="w-full py-2.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC]"
              >
                Book Video Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
