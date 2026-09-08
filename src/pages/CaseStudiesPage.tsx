import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CASE_STUDIES_DATA } from '../data/mockData';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';
import { VideoBriefingModal } from '../components/VideoBriefingModal';
import {
  TrendingUp,
  ArrowRight,
  Filter,
  Users,
  CheckCircle2,
  Play,
  ShieldCheck,
} from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
    <div className="min-h-screen bg-[#0E1330] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30">
                <TrendingUp className="w-3.5 h-3.5" />
                Proven Deliverables &amp; Hard Metrics • 140+ Shipped
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Case Studies &amp; Production Outcomes
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                Real architectural solutions deployed for high-growth startups and Fortune 500 enterprises. Review technical decisions, engineering pod structures, and verified business ROI.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Case Study Breakdown</span>
                </button>
                <button
                  onClick={() => navigate('/book-a-call')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2"
                >
                  <span>Request Technical Teardown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#141A3E] shadow-2xl group cursor-pointer"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#080B1D]">
                  <img
                    src={techCommandCenterImg}
                    alt="Production Systems Verification"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-black/30 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#080B1D]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#22D3D8] block">ENTERPRISE AUDIT</span>
                    <span className="text-xs font-semibold text-white">99.99% Production Uptime</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
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
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl overflow-hidden transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Image Banner */}
              {cs.imageUrl && (
                <div
                  className="relative aspect-[16/9] w-full bg-[#080B1D] overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/case-studies/${cs.slug}`)}
                >
                  <img
                    src={cs.imageUrl}
                    alt={cs.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141A3E] via-transparent to-black/30 pointer-events-none"></div>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#080B1D]/80 text-[#22D3D8] border border-[#22D3D8]/30 backdrop-blur-md">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-white bg-[#080B1D]/80 px-2 py-0.5 rounded border border-white/15 backdrop-blur-md">
                      {cs.client}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {!cs.imageUrl && (
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/20">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{cs.client}</span>
                    </div>
                  )}

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

      <VideoBriefingModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
