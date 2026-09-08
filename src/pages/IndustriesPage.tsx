import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { INDUSTRIES_DATA, CASE_STUDIES_DATA } from '../data/mockData';
import {
  Building2,
  Lock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState(INDUSTRIES_DATA[0].slug);

  const activeIndustry = INDUSTRIES_DATA.find((i) => i.slug === activeTab) || INDUSTRIES_DATA[0];
  const relatedCaseStudies = CASE_STUDIES_DATA.filter((cs) =>
    activeIndustry.relatedCaseStudySlugs.includes(cs.slug)
  );

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Specialized Domain Knowledge
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering for Highly Regulated &amp; Complex Verticals
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Enterprise software cannot rely on generic templates. We build with deep compliance mastery across FinTech, HealthTech, Supply Chain, and Mission-Critical SaaS.
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar text-xs font-mono">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setActiveTab(ind.slug)}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                activeTab === ind.slug
                  ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-lg shadow-[#22D3D8]/20'
                  : 'bg-[#141A3E] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#22D3D8] uppercase tracking-wider block mb-1">
                {activeIndustry.subtitle}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
                {activeIndustry.name}
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                {activeIndustry.overview}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Regulatory &amp; Compliance Standards Handled
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeIndustry.complianceSpecs.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#080B1D] border border-white/15 text-xs font-mono text-[#22D3D8] font-semibold flex items-center gap-1"
                  >
                    <Lock className="w-3 h-3" />
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics / Stats */}
          {activeIndustry.stats && activeIndustry.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeIndustry.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#080B1D] border border-white/5 rounded-xl p-4">
                  <div className="font-heading font-bold text-2xl text-[#22D3D8] mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-xs font-mono text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* 2-Column: Unique Challenges vs Tersan Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg text-rose-300 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-400" />
                Industry Specific Obstacles
              </h3>
              <div className="space-y-4">
                {activeIndustry.challenges.map((c, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold font-mono text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed pl-3.5">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg text-emerald-300 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-400" />
                How Tersan Solves Them
              </h3>
              <div className="space-y-4">
                {activeIndustry.solutions.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold font-mono text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed pl-3.5">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies in this Industry */}
          {relatedCaseStudies.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-xl text-white">
                  Validated Client Deliverables in {activeIndustry.name}
                </h3>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-xs font-mono text-[#22D3D8] hover:underline flex items-center gap-1"
                >
                  View All Portfolio <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCaseStudies.map((cs) => (
                  <div
                    key={cs.slug}
                    className="bg-[#080B1D] border border-white/10 hover:border-[#22D3D8]/40 rounded-xl p-6 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#22D3D8]">{cs.client}</span>
                      <span className="text-[11px] font-mono text-slate-400">{cs.duration}</span>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#22D3D8] transition-colors mb-2">
                      {cs.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-4">{cs.challenge}</p>
                    <div className="bg-[#141A3E] p-3 rounded-lg flex items-center justify-between mb-4">
                      <div>
                        <div className="font-bold text-xl text-[#22D3D8] font-heading">{cs.heroMetric}</div>
                        <div className="text-[10px] font-mono text-slate-400">{cs.heroMetricLabel}</div>
                      </div>
                      <span className="text-xs font-mono text-slate-300 bg-[#080B1D] px-2.5 py-1 rounded">
                        {cs.primaryService}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate(`/case-studies/${cs.slug}`)}
                      className="text-xs font-semibold text-[#22D3D8] hover:underline flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need technical advisory tailored to your exact regulatory framework?
            </div>
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-6 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-1.5"
            >
              <span>Schedule {activeIndustry.name} Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
