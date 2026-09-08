import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { TrustMarquee } from '../components/TrustMarquee';
import {
  SERVICES_DATA,
  CASE_STUDIES_DATA,
  TESTIMONIALS_DATA,
  INDUSTRIES_DATA,
} from '../data/mockData';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Cloud,
  Cpu,
  Lock,
  Database,
  Smartphone,
  CheckCircle2,
  Briefcase,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  Calculator,
  Layers,
  Building2,
  Star,
  Quote,
  Clock,
  DollarSign,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  // Interactive Quick Estimator Teaser state
  const [teaserScope, setTeaserScope] = useState('Full-Stack Web App');
  const [teaserTimeline, setTeaserTimeline] = useState('3-6 Months');

  const getTeaserBudget = () => {
    if (teaserScope === 'Full-Stack Web App') return '$25,000 – $55,000';
    if (teaserScope === 'Cloud Migration & DevOps') return '$20,000 – $40,000';
    if (teaserScope === 'AI/ML Engineering') return '$35,000 – $75,000';
    if (teaserScope === 'Mobile Application') return '$30,000 – $60,000';
    return '$25,000 – $50,000';
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle geometric gradient backdrop */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#22D3D8]/30 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#22D3D8] animate-pulse"></span>
              Full-Spectrum Enterprise Engineering &amp; Vetted Talent
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Architecting Mission-Critical Software. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3D8] via-white to-[#FFB020]">
                Scaling Elite Engineering Pods.
              </span>
            </h1>

            {/* Subhead for Three Audiences */}
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-sans">
              Tersan Tech powers high-growth startups and global enterprises across cloud infrastructure, AI systems, mobile, and security—backed by an in-house architectural core and a vetted top-3% talent pipeline.
            </p>

            {/* Dual CTAs (Cyan for Client, Amber for Talent) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <button
                onClick={() => navigate('/book-a-call')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-xl shadow-[#22D3D8]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/estimate')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#22D3D8]" />
                <span>Calculate Project Cost</span>
              </button>

              <button
                onClick={() => navigate('/join-freelancer-network')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-xl shadow-[#FFB020]/20 transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join Talent Network</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-[#141A3E]/60 border border-white/5 backdrop-blur-sm">
                <div className="font-heading font-extrabold text-2xl text-white">140+</div>
                <div className="text-[11px] font-mono text-slate-400">Enterprise Builds Shipped</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A3E]/60 border border-white/5 backdrop-blur-sm">
                <div className="font-heading font-extrabold text-2xl text-[#22D3D8]">99.8%</div>
                <div className="text-[11px] font-mono text-slate-400">SLA Milestone Compliance</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A3E]/60 border border-white/5 backdrop-blur-sm">
                <div className="font-heading font-extrabold text-2xl text-[#FFB020]">120+</div>
                <div className="text-[11px] font-mono text-slate-400">Vetted Senior Specialists</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A3E]/60 border border-white/5 backdrop-blur-sm">
                <div className="font-heading font-extrabold text-2xl text-emerald-400">100%</div>
                <div className="text-[11px] font-mono text-slate-400">Client IP Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <TrustMarquee />

      {/* 2. THREE-AUDIENCE TRIAGE ROW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0F26] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Engagement Paths
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Designed for Three Audiences at Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Enterprise Clients */}
            <div className="bg-[#141A3E] border border-[#22D3D8]/30 rounded-2xl p-8 hover:border-[#22D3D8] transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-[#22D3D8] uppercase tracking-wider block mb-2">
                  01 // For Enterprises &amp; Fast-Growing Startups
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-[#22D3D8] transition-colors">
                  Hire Tersan Tech
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Accelerate your product roadmap with dedicated engineering pods or fixed-scope builds. Guaranteed by in-house Principal Architects and SOC 2 / HIPAA compliance rigor.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => navigate('/services')}
                  className="text-xs font-bold text-[#22D3D8] flex items-center gap-1.5 uppercase tracking-wider hover:underline"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/estimate')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>Cost Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#22D3D8]" />
                </button>
              </div>
            </div>

            {/* Card 2: Full-Time Candidates */}
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  02 // For Full-Time Engineers &amp; Leaders
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-white transition-colors">
                  Join the Core Team
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Become a permanent salaried architect or engineering leader at Tersan. Work on deep, multi-cloud architectures without bureaucracy or generic marketing fluff.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => navigate('/careers')}
                  className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wider hover:text-[#22D3D8]"
                >
                  <span>View 6 Open Roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Senior Freelancers */}
            <div className="bg-[#141A3E] border border-[#FFB020]/30 rounded-2xl p-8 hover:border-[#FFB020] transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-[#FFB020] uppercase tracking-wider block mb-2">
                  03 // For Senior Freelance Technologists
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-[#FFB020] transition-colors">
                  Join the Talent Network
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Get matched directly with pre-scoped enterprise contracts. No bidding contests, no chasing late invoices, and guaranteed Net-15 direct deposit payouts.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => navigate('/join-freelancer-network')}
                  className="text-xs font-bold text-[#FFB020] flex items-center gap-1.5 uppercase tracking-wider hover:underline"
                >
                  <span>Apply as Specialist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/talent')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>View Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
                Comprehensive Technical Practice Areas
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Full-Spectrum Services for Modern Tech Stacks
              </h2>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="text-xs font-mono text-[#22D3D8] hover:underline flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All 8 Core Practices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 8).map((srv) => {
              const isStaffing = srv.category.includes('Staff Augmentation');

              return (
                <div
                  key={srv.slug}
                  onClick={() => navigate(`/services/${srv.slug}`)}
                  className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-6 transition-all cursor-pointer flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          isStaffing
                            ? 'bg-[#FFB020]/15 text-[#FFB020]'
                            : 'bg-[#22D3D8]/10 text-[#22D3D8]'
                        }`}
                      >
                        {srv.category.split('&')[0]}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {srv.pricingTiers[0]?.timeline || '4-8 wks'}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#22D3D8] transition-colors mb-2">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {srv.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {srv.technologies.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded bg-[#080B1D] text-[10px] font-mono text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#22D3D8] font-semibold">
                      <span>Explore Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "WHY TERSAN TECH" / HYBRID MODEL COMPARISON */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F26] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-2 block">
              Architectural Governance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              The Hybrid Delivery Model: Why It Wins
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Traditional consultancies bill for expensive bench warmers and junior generalists. Pure freelancer platforms offer zero architectural governance or accountability. Tersan bridges both worlds.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-x-auto mb-12">
            <table className="w-full text-left text-xs min-w-[650px]">
              <thead>
                <tr className="border-b border-white/10 font-mono uppercase text-slate-400">
                  <th className="pb-4 pr-4">Delivery Attribute</th>
                  <th className="pb-4 pr-4 text-slate-500">Traditional Agency</th>
                  <th className="pb-4 pr-4 text-[#22D3D8] font-bold">Tersan Tech Hybrid</th>
                  <th className="pb-4 text-slate-500">Freelance Marketplace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-4 font-semibold text-white">Technical Governance</td>
                  <td className="py-4 pr-4 text-slate-400">Intermediary Account Execs</td>
                  <td className="py-4 pr-4 text-[#22D3D8] font-bold">In-House Principal Architect</td>
                  <td className="py-4 text-slate-400">None (DIY oversight)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">Talent Seniority</td>
                  <td className="py-4 pr-4 text-slate-400">Junior/Mid bench generalists</td>
                  <td className="py-4 pr-4 text-white font-bold">Vetted Top 3% Senior Specialists</td>
                  <td className="py-4 text-slate-400">Wildly unverified variance</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">Onboarding Speed</td>
                  <td className="py-4 pr-4 text-slate-400">4–8 Weeks (RFPs &amp; staffing)</td>
                  <td className="py-4 pr-4 text-emerald-400 font-bold">&lt;7 Business Days</td>
                  <td className="py-4 text-slate-400">Weeks of manual interviews</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">Code &amp; IP Ownership</td>
                  <td className="py-4 pr-4 text-slate-400">Locked behind final invoices</td>
                  <td className="py-4 pr-4 text-emerald-400 font-bold">100% Client Owned (Day 1)</td>
                  <td className="py-4 text-slate-400">Vague contractual assignments</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">Replacement SLA</td>
                  <td className="py-4 pr-4 text-slate-400">Lengthy re-negotiations</td>
                  <td className="py-4 pr-4 text-[#FFB020] font-bold">14-Day Free Replacement Guarantee</td>
                  <td className="py-4 text-slate-400">Start over completely</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/how-we-deliver')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3D8] hover:underline"
            >
              <span>Learn more about our 5-phase delivery process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES / PROVEN WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
                Validated Production Impact
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Featured Case Studies
              </h2>
            </div>
            <button
              onClick={() => navigate('/case-studies')}
              className="text-xs font-mono text-[#22D3D8] hover:underline flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Browse All Published Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES_DATA.slice(0, 3).map((cs) => (
              <div
                key={cs.slug}
                onClick={() => navigate(`/case-studies/${cs.slug}`)}
                className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] px-2 py-0.5 rounded">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{cs.client}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#22D3D8] transition-colors mb-3 leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {cs.challenge}
                  </p>

                  {/* Top Metric Callout */}
                  <div className="p-4 rounded-xl bg-[#080B1D] border border-white/5 mb-6">
                    <div className="font-heading font-extrabold text-2xl text-emerald-400">
                      {cs.heroMetric}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{cs.heroMetricLabel}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#22D3D8] font-semibold">
                  <span>Read Full Teardown</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY VERTICALS PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F26] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Domain Expertise
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Regulated &amp; Complex Verticals
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Our architects design systems compliant with SOC 2, HIPAA, PCI-DSS, and ISO 27001 from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.slug}
                onClick={() => navigate('/industries')}
                className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 p-5 rounded-xl text-center cursor-pointer transition-all group"
              >
                <Building2 className="w-6 h-6 text-[#22D3D8] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading font-bold text-xs text-white group-hover:text-[#22D3D8] transition-colors leading-tight">
                  {ind.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VETTED TALENT PIPELINE SPOTLIGHT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#141A3E] to-[#080B1D] border border-[#FFB020]/30 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/40">
                Talent Operations
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Vetted Senior Technologists. <br />
                Ready to Embed in 48 Hours.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We accept fewer than 3% of engineer applicants. Every specialist completes technical architecture challenges, code quality benchmarks, and live systems debugging with our Lead Architects before touching client code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xl font-bold text-[#FFB020]">&lt;3%</div>
                  <div className="text-xs text-slate-400 mt-1">Acceptance Rate</div>
                </div>
                <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xl font-bold text-white">4-Stage</div>
                  <div className="text-xs text-slate-400 mt-1">Screening Rubric</div>
                </div>
                <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xl font-bold text-emerald-400">14-Day</div>
                  <div className="text-xs text-slate-400 mt-1">Risk-Free Guarantee</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/talent')}
                  className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center gap-2"
                >
                  <span>Browse Specialist Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/join-freelancer-network')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20"
                >
                  Apply to Join Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT ESTIMATOR QUICK TEASER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F26] border-y border-white/5">
        <div className="max-w-4xl mx-auto bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase text-[#22D3D8] block mb-1">
              Transparent Cost Estimator
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Instant Project Scope &amp; Budget Teaser
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Select your project parameters to preview benchmark industry rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">Project Domain</label>
              <select
                value={teaserScope}
                onChange={(e) => setTeaserScope(e.target.value)}
                className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#22D3D8]"
              >
                <option value="Full-Stack Web App">Full-Stack Web App</option>
                <option value="Cloud Migration & DevOps">Cloud Migration &amp; DevOps</option>
                <option value="AI/ML Engineering">AI/ML Engineering</option>
                <option value="Mobile Application">Mobile Application (iOS/Android)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">Delivery Speed</label>
              <select
                value={teaserTimeline}
                onChange={(e) => setTeaserTimeline(e.target.value)}
                className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#22D3D8]"
              >
                <option value="Accelerated (<2 Months)">Accelerated (&lt;2 Months)</option>
                <option value="3-6 Months">Standard (3–6 Months)</option>
                <option value="Continuous Pod">Continuous Dedicated Pod</option>
              </select>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#080B1D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase">Estimated Budget Range</span>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-[#22D3D8]">
                {getTeaserBudget()}
              </div>
            </div>
            <button
              onClick={() => navigate('/estimate')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center justify-center gap-2"
            >
              <span>Launch 4-Step Interactive Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / SOCIAL PROOF */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Executive Endorsements
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              What Leaders Say About Tersan Tech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex text-[#FFB020] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#080B1D] border border-white/20 flex items-center justify-center font-bold font-mono text-xs text-[#22D3D8]">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">{t.author}</h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL DUAL-CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E1330] to-[#080B1D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left CTA: Client Path (Cyan) */}
            <div className="bg-[#141A3E] border border-[#22D3D8]/40 rounded-3xl p-8 sm:p-12 text-left space-y-4 relative overflow-hidden shadow-2xl">
              <span className="text-xs font-mono uppercase text-[#22D3D8] tracking-wider block">
                For B2B Enterprise Clients
              </span>
              <h3 className="font-heading text-3xl font-bold text-white tracking-tight">
                Ready to Accelerate Your Engineering Roadmap?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Book a 30-minute scoping call with a Principal Solutions Architect. Receive a concrete technical delivery plan under mutual NDA.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/book-a-call')}
                  className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/estimate')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
                >
                  Calculate Cost
                </button>
              </div>
            </div>

            {/* Right CTA: Talent Path (Amber) */}
            <div className="bg-[#141A3E] border border-[#FFB020]/40 rounded-3xl p-8 sm:p-12 text-left space-y-4 relative overflow-hidden shadow-2xl">
              <span className="text-xs font-mono uppercase text-[#FFB020] tracking-wider block">
                For Senior Technologists
              </span>
              <h3 className="font-heading text-3xl font-bold text-white tracking-tight">
                Join Our Elite Vetted Talent Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Work on pre-scoped enterprise challenges with guaranteed Net-15 direct deposit payouts and full rate autonomy.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/join-freelancer-network')}
                  className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center gap-2"
                >
                  <span>Apply to Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/careers')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
                >
                  View Full-Time Roles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
