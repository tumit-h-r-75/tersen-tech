import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CASE_STUDIES_DATA } from '../data/mockData';
import {
  TrendingUp,
  ArrowRight,
  Filter,
  Users,
  CheckCircle2,
} from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedResultType, setSelectedResultType] = useState('All');

  const industries = [
    'All',
    'Finance & FinTech',
    'Healthcare & Life Sciences',
    'Logistics & Supply Chain',
    'Enterprise SaaS',
    'E-commerce & Retail',
  ];

  const resultTypes = [
    'All',
    'Speed & Scale',
    'Revenue Growth',
    'Cost Reduction',
    'AI Automation',
    'Security',
  ];

  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES_DATA.filter((cs) => {
      const matchInd = selectedIndustry === 'All' || cs.industry === selectedIndustry;
      const matchRes = selectedResultType === 'All' || cs.resultType === selectedResultType;
      return matchInd && matchRes;
    });
  }, [selectedIndustry, selectedResultType]);

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Deliverables &amp; Hard Metrics
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Case Studies &amp; Engineering Outcomes
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real architectural solutions deployed for high-growth startups and Fortune 500 enterprises. Review technical decisions, team structures, and tangible business ROI.
          </p>
        </div>

        {/* Filters Strip */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#22D3D8]"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono">Outcome Metric:</span>
              <select
                value={selectedResultType}
                onChange={(e) => setSelectedResultType(e.target.value)}
                className="bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#22D3D8]"
              >
                {resultTypes.map((res) => (
                  <option key={res} value={res}>
                    {res}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Showing <span className="text-[#22D3D8] font-bold">{filteredCaseStudies.length}</span> Published Studies
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/20">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.client}</span>
                </div>

                <h3
                  onClick={() => navigate(`/case-studies/${cs.slug}`)}
                  className="font-heading font-bold text-2xl text-white group-hover:text-[#22D3D8] transition-colors mb-3 cursor-pointer"
                >
                  {cs.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {cs.challenge}
                </p>

                {/* Metrics Highlight Box */}
                <div className="p-4 rounded-xl bg-[#080B1D] border border-white/5 mb-6 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-extrabold text-2xl text-[#22D3D8] tracking-tight">
                      {cs.heroMetric}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">{cs.heroMetricLabel}</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-[#141A3E] px-2.5 py-1 rounded">
                    {cs.duration}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cs.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{cs.primaryService}</span>
                <button
                  onClick={() => navigate(`/case-studies/${cs.slug}`)}
                  className="text-xs font-semibold text-[#22D3D8] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scope CTA */}
        <div className="mt-16 bg-[#080B1D] border border-white/10 rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Ready to achieve comparable technical benchmarks?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our principal solutions architects evaluate your codebase and infrastructure under NDA. Receive a concrete technical delivery roadmap within 5 business days.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-8 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-xl shadow-[#22D3D8]/20"
            >
              Request Technical Assessment
            </button>
            <button
              onClick={() => navigate('/estimate')}
              className="px-8 py-3.5 rounded-xl bg-[#141A3E] border border-white/15 text-white hover:border-[#22D3D8] text-xs font-mono uppercase tracking-wider"
            >
              Interactive Project Estimator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
