import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CASE_STUDIES_DATA } from '../data/mockData';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Layers,
  Clock,
  Users,
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug }) => {
  const { navigate } = useNavigation();

  const caseStudy = CASE_STUDIES_DATA.find((cs) => cs.slug === slug) || CASE_STUDIES_DATA[0];

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/case-studies')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </button>

        {/* Hero Section */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/30">
              {caseStudy.industry}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
              Client: {caseStudy.client}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
              Duration: {caseStudy.duration}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            {caseStudy.title}
          </h1>

          {/* Hero Metric Banner */}
          <div className="p-6 rounded-xl bg-[#080B1D] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#22D3D8] tracking-tight">
                {caseStudy.heroMetric}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-mono">{caseStudy.heroMetricLabel}</div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Primary Service Domain</span>
              <span className="text-sm font-semibold text-white">{caseStudy.primaryService}</span>
            </div>
          </div>
        </div>

        {/* Content Body: Challenge, Solution & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Detailed Narrative */}
          <div className="lg:col-span-2 space-y-8 text-slate-300 leading-relaxed text-sm">
            {/* The Challenge */}
            <div className="bg-[#141A3E]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading font-bold text-xl text-rose-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                The Challenge
              </h2>
              <p>{caseStudy.challenge}</p>
            </div>

            {/* The Solution */}
            <div className="bg-[#141A3E]/60 border border-[#22D3D8]/30 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading font-bold text-xl text-[#22D3D8] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22D3D8]"></span>
                The Solution &amp; Architectural Decisions
              </h2>
              <p>{caseStudy.solution}</p>
            </div>

            {/* Hard Results & Deliverables */}
            <div className="bg-[#141A3E]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading font-bold text-xl text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Key Deliverables &amp; Verified Outcomes
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Specs Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-base text-white mb-3">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#080B1D] text-slate-200 text-xs font-mono border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-white">Project Metadata</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Client Domain</span>
                  <span className="text-white">{caseStudy.industry}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-white">{caseStudy.duration}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Governance</span>
                  <span className="text-[#22D3D8]">In-House Lead Architect</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 space-y-3 text-xs">
              <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FFB020]" />
                Pod Architecture
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {caseStudy.teamComposition}
              </p>
            </div>

            <div className="bg-[#080B1D] border border-[#22D3D8]/30 rounded-2xl p-6 space-y-3">
              <h4 className="font-heading font-bold text-sm text-white">
                Have a similar challenge?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Talk directly with an in-house engineering director to explore architecture options.
              </p>
              <button
                onClick={() => navigate('/book-a-call')}
                className="w-full py-2.5 rounded-lg bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC]"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
