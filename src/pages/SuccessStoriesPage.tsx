import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { TESTIMONIALS_DATA, CASE_STUDIES_DATA } from '../data/mockData';
import {
  Quote,
  Star,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Building,
} from 'lucide-react';

export const SuccessStoriesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = [
    'All',
    'Finance & FinTech',
    'Healthcare & Life Sciences',
    'Logistics & Supply Chain',
    'E-commerce & Retail',
  ];

  const filteredTestimonials = TESTIMONIALS_DATA.filter((t) => {
    if (selectedIndustry === 'All') return true;
    return t.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Quote className="w-3.5 h-3.5" />
            Verified Client Testimonials &amp; Reviews
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Trusted by Leaders Who Cannot Afford Software Failures
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From Series A tech disruptors to established enterprise infrastructure operators. Read what founders, CTOs, and VPs of Engineering say about partnering with Tersan Tech.
          </p>

          {/* Social Proof Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 bg-[#141A3E] px-4 py-2 rounded-xl border border-white/10">
              <Star className="w-4 h-4 text-[#FFB020] fill-current" />
              <span>4.9 / 5.0 Average Enterprise Score</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#141A3E] px-4 py-2 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Client Retention on Multi-Quarter Pods</span>
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar text-xs font-mono">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                selectedIndustry === ind
                  ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-lg shadow-[#22D3D8]/20'
                  : 'bg-[#141A3E] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-8 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFB020]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-[#080B1D] px-2.5 py-0.5 rounded">
                    {t.industry}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#080B1D] border border-white/5 mb-4 text-xs font-mono text-[#22D3D8]">
                  {t.highlightMetric}
                </div>

                <p className="text-sm text-slate-200 italic leading-relaxed mb-6">
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

        {/* Deep-Dive Teaser: Case Studies */}
        <div className="bg-[#080B1D] border border-white/10 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] block mb-1">
                Engineering Depth Behind The Reviews
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Detailed Technical Case Studies
              </h3>
            </div>
            <button
              onClick={() => navigate('/case-studies')}
              className="text-xs font-semibold text-[#22D3D8] hover:underline flex items-center gap-1.5"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES_DATA.slice(0, 2).map((cs) => (
              <div
                key={cs.slug}
                onClick={() => navigate(`/case-studies/${cs.slug}`)}
                className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-xl p-6 cursor-pointer transition-all group"
              >
                <div className="text-xs font-mono text-[#22D3D8] mb-2">{cs.industry}</div>
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#22D3D8] mb-2">
                  {cs.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{cs.challenge}</p>
                <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                  <span>Top Metric: {cs.heroMetric} {cs.heroMetricLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#22D3D8]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#141A3E] border border-[#22D3D8]/30 rounded-2xl p-8 sm:p-12 space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Ready to become our next success story?
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Book an introductory technical review with a Solutions Architect. We evaluate your goals and timeline under mutual NDA.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20"
            >
              Book Technical Consultation
            </button>
            <button
              onClick={() => navigate('/estimate')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
            >
              Estimate Project Timeline &amp; Cost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
