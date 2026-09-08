import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Sparkles,
  Download,
  Mail,
} from 'lucide-react';

interface EstimateSelection {
  primaryCategory: string;
  subCapabilities: string[];
  projectStage: string;
  timeline: string;
  compliance: string[];
  engagementModel: string;
  email: string;
  companyName: string;
}

export const EstimatePage: React.FC = () => {
  const { navigate, showToast } = useNavigation();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<EstimateSelection>({
    primaryCategory: 'Web & App Development',
    subCapabilities: ['Full-Stack Web Applications'],
    projectStage: 'MVP from Scratch (Greenfield)',
    timeline: 'Standard (8-12 weeks)',
    compliance: [],
    engagementModel: 'Fixed-Scope Project',
    email: '',
    companyName: '',
  });

  const [submittedEmail, setSubmittedEmail] = useState(false);

  const CATEGORY_OPTIONS: { [key: string]: { label: string; desc: string; icon: string; subOptions: string[] } } = {
    'Web & App Development': {
      label: 'Web & App Development',
      desc: 'Next.js web platforms, React Native mobile apps, headless e-commerce, and PWAs.',
      icon: 'Layers',
      subOptions: [
        'Full-Stack Web Applications',
        'Mobile App Development (iOS/Android)',
        'Headless E-commerce (Shopify/Medusa)',
        'Progressive Web Apps (Offline-first)',
        'Modern Web Flagship Redesign',
      ],
    },
    'Cloud & Infrastructure': {
      label: 'Cloud & Infrastructure',
      desc: 'AWS/GCP/Azure migrations, Kubernetes GitOps, Terraform IaC, and 24/7 SRE monitoring.',
      icon: 'Cloud',
      subOptions: [
        'Zero-Downtime Cloud Migration',
        'Kubernetes & GitOps CI/CD Setup',
        'FinOps Cloud Cost Optimization',
        '24/7 SRE Infrastructure Management',
        'Disaster Recovery Architecture',
      ],
    },
    'Emerging Tech & AI': {
      label: 'Emerging Tech & AI',
      desc: 'Private VPC RAG pipelines, fine-tuned domain models, vector search, and business intelligence.',
      icon: 'Cpu',
      subOptions: [
        'Private Enterprise RAG Architecture',
        'Fine-Tuned Domain LLM Implementation',
        'Automated AI Agentic Workflows',
        'Data Warehouse & Modern BI Stack (Snowflake/dbt)',
        'Smart Contracts & Audited Web3 Protocols',
      ],
    },
    'Design & Product Experience': {
      label: 'Design & Product Experience',
      desc: 'Enterprise UI/UX design systems, clickable prototypes, user research, and branding.',
      icon: 'Sparkles',
      subOptions: [
        'Comprehensive UI/UX Design System (Figma)',
        '0-to-1 Product Discovery & PRD Spec',
        'Enterprise Visual Identity & Rebranding',
        'Usability Research & WCAG AA Accessibility Audit',
      ],
    },
    'Quality & Cybersecurity': {
      label: 'Quality & Cybersecurity',
      desc: 'Penetration testing, SOC 2 / HIPAA compliance audits, and automated Playwright E2E suites.',
      icon: 'ShieldCheck',
      subOptions: [
        'SOC 2 Type II Readiness & Audit Prep',
        'Application & Cloud Penetration Testing',
        'Automated E2E Testing Suite (Playwright)',
        'HIPAA & Healthcare Data Hardening',
      ],
    },
    'IT Consulting & Staff Augmentation': {
      label: 'IT Consulting & Staff Augmentation',
      desc: 'Dedicated pods and senior specialists plugged into your engineering sprints in 48 hours.',
      icon: 'Users',
      subOptions: [
        'Dedicated Senior Full-Stack Engineer (160h/mo)',
        'Fractional Principal Solutions Architect',
        'Specialist Pod (Tech Lead + 2 Developers)',
        'Urgent Codebase Modernization Support',
      ],
    },
  };

  const handleSubToggle = (sub: string) => {
    setForm((prev) => {
      const exists = prev.subCapabilities.includes(sub);
      const updated = exists
        ? prev.subCapabilities.filter((s) => s !== sub)
        : [...prev.subCapabilities, sub];
      return { ...prev, subCapabilities: updated.length > 0 ? updated : [sub] };
    });
  };

  const handleComplianceToggle = (c: string) => {
    setForm((prev) => {
      const exists = prev.compliance.includes(c);
      return {
        ...prev,
        compliance: exists ? prev.compliance.filter((item) => item !== c) : [...prev.compliance, c],
      };
    });
  };

  // Calculation Logic based on service range and complexity
  const calculation = useMemo(() => {
    let baseMin = 18000;
    let baseMax = 32000;
    let weeksMin = 6;
    let weeksMax = 10;
    let recommendedTeam = 'Lead Solutions Architect (In-House) + 2 Full-Stack Developers (Hybrid Pod)';

    // Category weighting
    if (form.primaryCategory === 'Web & App Development') {
      baseMin = 22000;
      baseMax = 45000;
      weeksMin = 7;
      weeksMax = 12;
      recommendedTeam = 'Principal Engineer (In-House) + Senior React Engineer + Mobile Specialist';
    } else if (form.primaryCategory === 'Cloud & Infrastructure') {
      baseMin = 25000;
      baseMax = 55000;
      weeksMin = 6;
      weeksMax = 10;
      recommendedTeam = 'Lead Cloud Architect (In-House) + SRE Specialist + Kubernetes Network Engineer';
    } else if (form.primaryCategory === 'Emerging Tech & AI') {
      baseMin = 30000;
      baseMax = 65000;
      weeksMin = 8;
      weeksMax = 14;
      recommendedTeam = 'Senior AI/ML Architect (In-House) + Python Vector Pipeline Engineer + Data Analyst';
    } else if (form.primaryCategory === 'Design & Product Experience') {
      baseMin = 12000;
      baseMax = 26000;
      weeksMin = 4;
      weeksMax = 8;
      recommendedTeam = 'Design Director (In-House) + Senior UI/UX Specialist';
    } else if (form.primaryCategory === 'Quality & Cybersecurity') {
      baseMin = 16000;
      baseMax = 38000;
      weeksMin = 4;
      weeksMax = 8;
      recommendedTeam = 'Chief Security Officer (In-House) + Certified Pen-Tester (OSCP/CISSP)';
    } else if (form.primaryCategory === 'IT Consulting & Staff Augmentation') {
      baseMin = 8500;
      baseMax = 24000;
      weeksMin = 1;
      weeksMax = 2; // Placement time
      recommendedTeam = 'Dedicated Senior Specialist or 3-Engineer Cross-Functional Pod';
    }

    // Adjust for subcapabilities count
    const subCount = form.subCapabilities.length;
    if (subCount > 1) {
      baseMin += (subCount - 1) * 6000;
      baseMax += (subCount - 1) * 11000;
      weeksMin += (subCount - 1) * 1;
      weeksMax += (subCount - 1) * 2;
    }

    // Adjust for stage
    if (form.projectStage === 'Complex Legacy Re-Architecture') {
      baseMin = Math.round(baseMin * 1.35);
      baseMax = Math.round(baseMax * 1.45);
      weeksMax += 3;
    } else if (form.projectStage === 'Audit & Technical Advisory') {
      baseMin = Math.round(baseMin * 0.6);
      baseMax = Math.round(baseMax * 0.7);
      weeksMin = 2;
      weeksMax = 4;
    }

    // Compliance modifier
    if (form.compliance.length > 0) {
      baseMin += form.compliance.length * 4500;
      baseMax += form.compliance.length * 8000;
    }

    return {
      min: baseMin,
      max: baseMax,
      weeksMin,
      weeksMax,
      recommendedTeam,
    };
  }, [form]);

  const handleSendEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmittedEmail(true);
    showToast(`Estimate PDF & breakdown sent to ${form.email}`);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Engineering Scope Tool</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Free Project Estimate Calculator
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get an instant, data-backed budget range and staffing timeline tailored across our 20+ service disciplines. Zero sales pressure.
          </p>
        </div>

        {/* Wizard Stepper Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span>Step {step} of 4</span>
            <span>
              {step === 1 && 'Primary Need'}
              {step === 2 && 'Specific Capabilities'}
              {step === 3 && 'Project Context & Constraints'}
              {step === 4 && 'Estimate & Team Recommendation'}
            </span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#22D3D8] to-[#FFB020] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-[#141A3E] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* STEP 1: What do you need? */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  1. What is your primary technology requirement?
                </h3>
                <p className="text-xs text-slate-400">
                  Select the core domain you want to address. You can configure granular capabilities next.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(CATEGORY_OPTIONS).map((catKey) => {
                  const item = CATEGORY_OPTIONS[catKey];
                  const isSelected = form.primaryCategory === catKey;

                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          primaryCategory: catKey,
                          subCapabilities: [item.subOptions[0]],
                        }));
                      }}
                      className={`text-left p-5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-[#0E1330] border-[#22D3D8] shadow-lg shadow-[#22D3D8]/10 ring-1 ring-[#22D3D8]'
                          : 'bg-[#080B1D]/70 border-white/10 hover:border-white/20 hover:bg-[#080B1D]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading font-bold text-sm text-white">{item.label}</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#22D3D8] bg-[#22D3D8]' : 'border-slate-500'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#0E1330]"></div>}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-semibold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] flex items-center gap-2"
                >
                  <span>Continue to Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Sub-Capabilities */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  2. Select specific capabilities under {form.primaryCategory}
                </h3>
                <p className="text-xs text-slate-400">
                  Select all that apply to refine your estimate accurately.
                </p>
              </div>

              <div className="space-y-3">
                {CATEGORY_OPTIONS[form.primaryCategory]?.subOptions.map((sub) => {
                  const isChecked = form.subCapabilities.includes(sub);
                  return (
                    <label
                      key={sub}
                      onClick={() => handleSubToggle(sub)}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#0E1330] border-[#22D3D8]/80 text-white'
                          : 'bg-[#080B1D]/60 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-sm font-medium">{sub}</span>
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-[#22D3D8] border-[#22D3D8] text-[#0E1330]' : 'border-slate-500'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-semibold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] flex items-center gap-2"
                >
                  <span>Project Constraints</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Project Context & Constraints */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  3. Project stage, timeline &amp; compliance requirements
                </h3>
                <p className="text-xs text-slate-400">
                  These factors influence architectural complexity and team seniority.
                </p>
              </div>

              {/* Stage */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 block">Current Software Stage</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'MVP from Scratch (Greenfield)',
                    'Scaling Existing Product',
                    'Complex Legacy Re-Architecture',
                  ].map((stage) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setForm({ ...form, projectStage: stage })}
                      className={`p-3.5 rounded-xl text-left border text-xs font-medium transition-all ${
                        form.projectStage === stage
                          ? 'bg-[#0E1330] border-[#22D3D8] text-white'
                          : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 block">Target Launch Window</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Urgent / Fast-Track (<6 weeks)', 'Standard (8-12 weeks)', 'Flexible / Long-term'].map(
                    (time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setForm({ ...form, timeline: time })}
                        className={`p-3.5 rounded-xl text-left border text-xs font-medium transition-all ${
                          form.timeline === time
                            ? 'bg-[#0E1330] border-[#22D3D8] text-white'
                            : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Compliance Multi-select */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 block">
                  Regulatory / Compliance Specifications (Optional)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['SOC 2 Type II', 'HIPAA Healthcare', 'PCI-DSS Payments', 'GDPR / CCPA'].map((comp) => {
                    const active = form.compliance.includes(comp);
                    return (
                      <button
                        key={comp}
                        type="button"
                        onClick={() => handleComplianceToggle(comp)}
                        className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                          active
                            ? 'bg-[#22D3D8]/10 border-[#22D3D8] text-[#22D3D8] font-bold'
                            : 'bg-[#080B1D] border-white/10 text-slate-400'
                        }`}
                      >
                        {comp}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Engagement Model */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 block">
                  Preferred Engagement Structure
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Fixed-Scope Project',
                    'Monthly Dedicated Retainer',
                    'Dedicated Staff Augmentation',
                  ].map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setForm({ ...form, engagementModel: model })}
                      className={`p-3.5 rounded-xl text-left border text-xs font-medium transition-all ${
                        form.engagementModel === model
                          ? 'bg-[#0E1330] border-[#22D3D8] text-white'
                          : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#22D3D8] to-[#1AB8BC] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
                >
                  <span>Generate Detailed Estimate</span>
                  <Calculator className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Estimate Breakdown & Consultation Booking */}
          {step === 4 && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-[#080B1D] border border-[#22D3D8]/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3D8]/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-[#22D3D8] uppercase tracking-wider block mb-1">
                      Estimated Investment Range
                    </span>
                    <div className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${calculation.min.toLocaleString()} – ${calculation.max.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Based on {form.subCapabilities.length} core capability requirements &amp; {form.projectStage}
                    </p>
                  </div>

                  <div className="bg-[#141A3E] border border-white/10 rounded-xl p-4 text-left">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Target Timeframe
                    </span>
                    <div className="text-2xl font-bold font-heading text-white">
                      {calculation.weeksMin} – {calculation.weeksMax} Weeks
                    </div>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      SLA Guaranteed Delivery
                    </span>
                  </div>
                </div>

                {/* Team Pod Composition Recommendation */}
                <div className="pt-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FFB020] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Recommended Delivery Team Composition</span>
                  </div>
                  <div className="bg-[#141A3E]/80 border border-[#FFB020]/20 rounded-xl p-4 text-xs sm:text-sm text-slate-200">
                    <p className="font-medium text-white mb-1">{calculation.recommendedTeam}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Every project is governed directly by an in-house Technical Lead, augmented by vetted specialists from our 120+ network who match your exact technology stack.
                    </p>
                  </div>
                </div>

                {/* Selected Scope Summary Badges */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
                    Category: {form.primaryCategory}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
                    Model: {form.engagementModel}
                  </span>
                  {form.compliance.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded bg-[#22D3D8]/10 border border-[#22D3D8]/30 text-[11px] text-[#22D3D8] font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action 1: Email Breakdown */}
              <div className="bg-[#080B1D]/60 border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#22D3D8]" />
                  Receive Detailed Scope Breakdown &amp; PDF via Email
                </h4>
                {submittedEmail ? (
                  <div className="text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-3.5 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Estimate sent to {form.email}. Our team will follow up within 4 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendEstimate} className="flex flex-col sm:flex-row gap-3 mt-3">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="corporate.email@company.com"
                      className="flex-1 bg-[#141A3E] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                    />
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      placeholder="Company Name (Optional)"
                      className="w-full sm:w-48 bg-[#141A3E] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
                    >
                      Email Report
                    </button>
                  </form>
                )}
              </div>

              {/* Action 2: Direct Consultation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Adjust Parameters</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => navigate('/book-a-call')}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center justify-center gap-2"
                  >
                    <span>Book Scoping Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
