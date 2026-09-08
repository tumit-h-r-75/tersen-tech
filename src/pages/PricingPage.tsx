import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Briefcase,
  Clock,
  DollarSign,
  Calculator,
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { navigate } = useNavigation();

  const models = [
    {
      id: 'fixed-scope',
      name: 'Fixed-Scope Project',
      tagline: 'Predictable budget & guaranteed milestones for well-scoped builds.',
      startingRate: 'From $15,000 / build',
      idealFor: 'Greenfield MVPs, full redesigns, cloud migrations, and compliance readiness.',
      commitment: 'Single project milestone contract',
      onboardingSpeed: 'Kickoff within 5-7 business days',
      teamStructure: '1 Lead Architect + 2-3 Dedicated Full-Stack/DevOps Engineers',
      ipOwnership: '100% Client Intellectual Property (Day 1)',
      deliverables: [
        'Detailed Architectural Specification & PRD',
        'Fixed milestone delivery deadlines',
        'Pre-launch security & performance audits',
        '30-day post-launch warranty & bug-fix coverage',
      ],
      isPopular: false,
      ctaLabel: 'Scope a Fixed Project',
      accent: 'cyan',
    },
    {
      id: 'dedicated-pod',
      name: 'Dedicated Hybrid Pod',
      tagline: 'An integrated cross-functional team overseen by an in-house Technical Lead.',
      startingRate: '$18,500 – $34,000 / month',
      idealFor: 'High-growth startups, multi-quarter roadmaps, and continuous feature expansion.',
      commitment: 'Monthly rolling agreement (cancel with 30-day notice)',
      onboardingSpeed: 'Team assembled & live in 7 business days',
      teamStructure: 'In-House Technical Lead + 2-4 Vetted Senior Specialists',
      ipOwnership: '100% Client Intellectual Property',
      deliverables: [
        'Dedicated full-time sprint velocity (160h/person)',
        'Direct Slack/Teams integration with your product owner',
        'Weekly architectural reviews & CI/CD governance',
        'Full flexible stack adjustments on 14 days notice',
      ],
      isPopular: true,
      ctaLabel: 'Assemble a Hybrid Pod',
      accent: 'cyan',
    },
    {
      id: 'staff-augmentation',
      name: 'Staff Augmentation',
      tagline: 'Vetted senior specialists embedded directly into your engineering sprints.',
      startingRate: '$75 – $140 / hour',
      idealFor: 'Plugging critical skill gaps (Kubernetes, RAG AI, Go, React Native) immediately.',
      commitment: 'Flexible hourly or monthly contract (min. 20h/week)',
      onboardingSpeed: 'Candidate interviews in 24h, live in <48h',
      teamStructure: 'Individual Vetted Senior Engineer(s) + Tersan Ops Support',
      ipOwnership: '100% Client Intellectual Property',
      deliverables: [
        'Top 3% vetted talent with verified production history',
        '14-day risk-free talent replacement guarantee',
        'Zero recruiting fees, payroll overhead, or benefits drag',
        'Direct standup participation and repo contribution',
      ],
      isPopular: false,
      ctaLabel: 'Hire Specialist Talent',
      accent: 'amber',
    },
    {
      id: 'fractional-cto',
      name: 'Fractional CTO & Advisory',
      tagline: 'Executive technical leadership, architecture roadmaps, and board advisory.',
      startingRate: '$6,000 – $14,000 / month',
      idealFor: 'Non-technical founders, pre-Series A startups, and enterprise legacy modernizations.',
      commitment: 'Monthly advisory retainer (10-30 hours/month)',
      onboardingSpeed: 'Immediate technical audit kickoff',
      teamStructure: 'Principal Partner / Enterprise Solutions Architect',
      ipOwnership: '100% Client Intellectual Property',
      deliverables: [
        'Quarterly architecture & tech stack roadmaps',
        'Vendor, cloud bill, and security audit sign-offs',
        'Technical due diligence for fundraising/M&A',
        'Engineering hiring pipeline oversight & interviewer support',
      ],
      isPopular: false,
      ctaLabel: 'Retain Technical Advisor',
      accent: 'cyan',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            Transparent Enterprise Pricing
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Engagement Models Engineered for Flexibility
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            No opaque lock-ins or ambiguous consulting invoices. Choose the engagement structure that aligns with your timeline, budget, and engineering autonomy.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate('/estimate')}
              className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Use Free Project Cost Estimator</span>
            </button>
          </div>
        </div>

        {/* 4 Models Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {models.map((m) => {
            const isAmber = m.accent === 'amber';

            return (
              <div
                key={m.id}
                className={`rounded-2xl p-6 transition-all flex flex-col justify-between relative shadow-xl ${
                  m.isPopular
                    ? 'bg-[#141A3E] border-2 border-[#22D3D8] shadow-[#22D3D8]/10'
                    : isAmber
                    ? 'bg-[#141A3E] border border-[#FFB020]/30 hover:border-[#FFB020]'
                    : 'bg-[#141A3E] border border-white/10 hover:border-white/20'
                }`}
              >
                {m.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#22D3D8] text-[#0E1330] uppercase tracking-wider shadow">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="mb-3">
                    <h3 className="font-heading font-bold text-lg text-white mb-1">{m.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{m.tagline}</p>
                  </div>

                  {/* Starting Rate */}
                  <div className="p-3.5 rounded-xl bg-[#080B1D] border border-white/5 mb-5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Typical Investment
                    </span>
                    <span
                      className={`text-base font-bold font-heading ${
                        isAmber ? 'text-[#FFB020]' : 'text-[#22D3D8]'
                      }`}
                    >
                      {m.startingRate}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Included Delivery
                    </span>
                    {m.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isAmber ? 'text-[#FFB020]' : 'text-[#22D3D8]'
                          }`}
                        />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">Speed:</span> {m.onboardingSpeed}
                  </div>
                  <button
                    onClick={() => navigate(isAmber ? '/talent' : '/book-a-call')}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      isAmber
                        ? 'bg-[#FFB020] text-black hover:bg-[#E59B15]'
                        : m.isPopular
                        ? 'bg-[#22D3D8] text-[#0E1330] hover:bg-[#1AB8BC]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{m.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-x-auto mb-16">
          <h2 className="font-heading font-bold text-2xl text-white mb-6">
            Detailed Comparison Matrix
          </h2>

          <table className="w-full text-left text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 font-mono text-slate-400 uppercase tracking-wider">
                <th className="pb-4 pr-4">Criteria</th>
                <th className="pb-4 pr-4">Fixed-Scope Project</th>
                <th className="pb-4 pr-4">Dedicated Hybrid Pod</th>
                <th className="pb-4 pr-4 text-[#FFB020]">Staff Augmentation</th>
                <th className="pb-4">Fractional CTO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-4 font-semibold text-white">Ideal For</td>
                <td className="py-4 pr-4">MVPs, discrete redesigns, cloud migrations</td>
                <td className="py-4 pr-4">Multi-quarter roadmaps &amp; ongoing scaling</td>
                <td className="py-4 pr-4">Targeted skill shortages in existing sprints</td>
                <td className="py-4">Architecture, hiring audits, M&amp;A tech DD</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">Commitment</td>
                <td className="py-4 pr-4">Milestone-based contract</td>
                <td className="py-4 pr-4">Monthly rolling (30-day notice)</td>
                <td className="py-4 pr-4">Flexible hourly / monthly</td>
                <td className="py-4">Monthly advisory retainer</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">Pricing Anchor</td>
                <td className="py-4 pr-4">Fixed budget quoted upfront</td>
                <td className="py-4 pr-4">Fixed monthly pod fee</td>
                <td className="py-4 pr-4 text-[#FFB020] font-mono">$75–$140 / hr</td>
                <td className="py-4 font-mono">$6,000–$14,000 / mo</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">Team Lead</td>
                <td className="py-4 pr-4">In-House Solutions Architect</td>
                <td className="py-4 pr-4">In-House Technical Lead</td>
                <td className="py-4 pr-4">Your internal Engineering Manager</td>
                <td className="py-4">Principal Partner</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">Onboarding Time</td>
                <td className="py-4 pr-4">5–7 business days</td>
                <td className="py-4 pr-4">7 business days</td>
                <td className="py-4 pr-4 text-emerald-400 font-bold">&lt;48 hours</td>
                <td className="py-4">Immediate</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-white">IP Ownership</td>
                <td className="py-4 pr-4 text-emerald-400 font-bold">100% Client Owned</td>
                <td className="py-4 pr-4 text-emerald-400 font-bold">100% Client Owned</td>
                <td className="py-4 pr-4 text-emerald-400 font-bold">100% Client Owned</td>
                <td className="py-4 text-emerald-400 font-bold">100% Client Owned</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Guarantees Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6 text-left">
            <ShieldCheck className="w-6 h-6 text-[#22D3D8] mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">100% IP &amp; Code Ownership</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All code, architecture diagrams, configurations, and assets belong exclusively to you from day one under a clear US-governed contract.
            </p>
          </div>
          <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6 text-left">
            <Clock className="w-6 h-6 text-[#FFB020] mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">14-Day Risk-Free Trial</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              If an augmented specialist or pod is not performing to your standards within the first 14 days, you owe nothing or receive an immediate replacement.
            </p>
          </div>
          <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6 text-left">
            <Zap className="w-6 h-6 text-[#22D3D8] mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">SLA-Backed Delivery</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fixed-scope deliverables are backed by enforceable timeline and quality service level agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
