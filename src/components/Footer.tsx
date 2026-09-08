import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, showToast } = useNavigation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    showToast('Subscribed to Tersan Tech Engineering & Talent Briefings');
  };

  return (
    <footer className="bg-[#080B1D] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Assurance Banner */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-8 mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Enterprise Engineering Briefing
            </span>
            <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
              Stay ahead on cloud architecture, AI workflows, and technical leadership.
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Bi-weekly technical analyses written by our in-house architects and vetted specialist network. Zero promotional noise.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-4 py-3 rounded-lg text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>You're subscribed! We sent a confirmation to your inbox.</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your corporate email..."
                    className="w-full bg-[#0E1330] border border-white/15 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-[#22D3D8] text-[#0E1330] font-semibold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 4-Column Grid with explicit Client vs. Talent Separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-sm">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#22D3D8] flex items-center justify-center font-mono font-bold text-black text-base">
                TT
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                TERSAN <span className="text-[#22D3D8] font-mono text-base">TECH</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              A full-spectrum technology services company and vetted talent network. We engineer enterprise software, cloud estates, and AI solutions while running a proprietary talent pipeline of elite specialists.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                SOC 2 Type II Certified
              </span>
              <span>•</span>
              <span className="text-slate-300">ISO 27001 Aligned</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <a href="#github" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Client Capabilities (Cyan Cues) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22D3D8]"></span>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#22D3D8] font-semibold">
                Client Capabilities
              </h4>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">
                  All Services (20+)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/industries')} className="hover:text-white transition-colors">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/case-studies')} className="hover:text-white transition-colors">
                  Case Studies &amp; Results
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/pricing')} className="hover:text-white transition-colors">
                  Engagement Models &amp; Pricing
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/process')} className="hover:text-white transition-colors">
                  Hybrid Delivery Process
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/estimate')} className="text-[#22D3D8] hover:underline font-medium">
                  Free Project Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/book-a-call')} className="hover:text-white transition-colors">
                  Book a Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Talent & Careers (Amber Cues) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#FFB020] font-semibold">
                Talent &amp; Freelancers
              </h4>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => navigate('/careers')} className="hover:text-white transition-colors flex items-center justify-between w-full">
                  <span>Open Careers</span>
                  <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-slate-300">
                    Hiring
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/join-freelancer-network')}
                  className="text-[#FFB020] hover:underline font-medium"
                >
                  Join Freelancer Network
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/talent')} className="hover:text-white transition-colors">
                  Meet Our Talent Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/status')}
                  className="text-amber-200/80 hover:text-white flex items-center gap-1.5"
                >
                  <span>Track Application Status</span>
                  <ArrowRight className="w-3 h-3 text-[#FFB020]" />
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/portal/team')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#FFB020]" />
                  <span>Freelancer Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Company &amp; Resources
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  About Us &amp; Mission
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/success-stories')} className="hover:text-white transition-colors">
                  Client Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/partners')} className="hover:text-white transition-colors">
                  Technology Ecosystem
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/resources')} className="hover:text-white transition-colors">
                  Engineering Insights
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
                  Direct Contact
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/portal/client')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#22D3D8]" />
                  <span>Client Project Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Tersan Tech Inc. All rights reserved.</span>
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-white">
              Privacy Policy
            </button>
            <button onClick={() => navigate('/terms')} className="hover:text-white">
              Terms of Service
            </button>
          </div>
          <div className="font-mono text-slate-400 flex items-center gap-2">
            <span>New York</span>
            <span>•</span>
            <span>San Francisco</span>
            <span>•</span>
            <span>London</span>
            <span>•</span>
            <span>Remote Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
