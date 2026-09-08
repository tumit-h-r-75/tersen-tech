import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES_DATA, CASE_STUDIES_DATA } from '../data/mockData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  FileCode2,
  Calendar,
  Briefcase,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { navigate } = useNavigation();

  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];
  const relatedCaseStudy = CASE_STUDIES_DATA.find((cs) =>
    service.relatedCaseStudySlugs?.includes(cs.slug)
  );

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const isStaffing = service.category.includes('Business Systems') || service.category.includes('Ongoing');

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        {/* Header Hero */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider ${
                isStaffing
                  ? 'bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/40'
                  : 'bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/30'
              }`}
            >
              {service.category}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
              Timeline: {service.pricingTiers[0]?.timeline || '4-8 weeks'}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {service.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            {service.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => navigate('/book-a-call')}
              className={`px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                isStaffing
                  ? 'bg-[#FFB020] text-black hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20'
                  : 'bg-[#22D3D8] text-[#0E1330] hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20'
              }`}
            >
              <span>Book Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/estimate')}
              className="px-6 py-3.5 rounded-xl bg-[#080B1D] border border-white/15 text-white hover:border-[#22D3D8] text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Configure Instant Estimate
            </button>
          </div>
        </div>

        {/* 2-Column Specs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Included */}
            <div className="bg-[#141A3E]/70 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-heading text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#22D3D8]" />
                Scope &amp; Engineering Specifications
              </h2>
              <ul className="space-y-3">
                {service.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3D8] mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-[#141A3E]/70 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-heading text-white mb-4 flex items-center gap-2">
                <FileCode2 className="w-5 h-5 text-emerald-400" />
                Tangible Production Deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#080B1D] border border-white/5 text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Delivery Process */}
            <div className="bg-[#141A3E]/70 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#22D3D8]" />
                How We Deliver This Service
              </h2>
              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#080B1D] border border-white/10 text-xs font-mono font-bold text-[#22D3D8] flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{step.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Tech Stack */}
            <div className="bg-[#141A3E]/70 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#FFB020]" />
                Production Technology &amp; Tooling
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#080B1D] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Case Study (if exists) */}
            {relatedCaseStudy && (
              <div className="bg-gradient-to-br from-[#141A3E] to-[#0E1330] border border-[#22D3D8]/30 rounded-2xl p-6 sm:p-8">
                <span className="text-xs font-mono text-[#22D3D8] uppercase tracking-wider block mb-1">
                  Validated In Production
                </span>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Case Study: {relatedCaseStudy.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {relatedCaseStudy.challenge}
                </p>
                <div className="bg-[#080B1D] p-4 rounded-xl border border-white/5 mb-4 flex items-center gap-4">
                  <div className="font-heading font-bold text-2xl text-[#22D3D8]">
                    {relatedCaseStudy.heroMetric}
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    {relatedCaseStudy.heroMetricLabel}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/case-studies/${relatedCaseStudy.slug}`)}
                  className="text-xs font-semibold text-[#22D3D8] hover:underline flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar: Pricing Tiers & SLA */}
          <div className="space-y-6">
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-base text-white mb-4">
                Available Engagement Tiers
              </h3>
              <div className="space-y-3">
                {service.pricingTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#080B1D] border border-white/5 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white font-heading">{tier.tier}</span>
                      <span className="font-mono text-[#22D3D8] font-bold">{tier.startingAt}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">Timeline: {tier.timeline}</div>
                    <div className="text-[11px] text-slate-300">{tier.suitableFor}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-xs text-slate-300 space-y-3">
              <h3 className="font-heading font-bold text-base text-white">Delivery Guarantees</h3>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Client IP Ownership on milestone handover.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>In-house Technical Lead review on every single line of code.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero vendor lock-in; standard open-source enterprise stacks.</span>
              </div>
            </div>

            {/* Join as Freelancer Callout */}
            <div className="bg-[#080B1D] border border-[#FFB020]/40 rounded-2xl p-6">
              <span className="text-[10px] font-mono uppercase text-[#FFB020] block mb-1">
                Are you an expert in {service.title}?
              </span>
              <h4 className="font-heading font-bold text-sm text-white mb-2">
                Join Our Specialist Network
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                We place top-tier engineers, designers, and cloud architects into high-paying enterprise contracts.
              </p>
              <button
                onClick={() => navigate('/join-freelancer-network')}
                className="w-full py-2.5 rounded-lg bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15]"
              >
                Apply as Specialist
              </button>
            </div>
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 mb-12">
            <h2 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#22D3D8]" />
              Frequently Asked Questions: {service.title}
            </h2>
            <div className="space-y-3">
              {service.faqs.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-xl overflow-hidden bg-[#080B1D]/70 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-medium text-sm text-white">{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#22D3D8] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
