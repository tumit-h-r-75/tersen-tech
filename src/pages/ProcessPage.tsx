import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Cpu,
  Users,
  MessageSquare,
  FileCode,
  Zap,
} from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const { navigate } = useNavigation();

  const phases = [
    {
      number: '01',
      title: 'Discovery & Architectural Specification',
      duration: 'Week 1–2',
      summary:
        'We unpack your technical requirements, define non-functional requirements (latency, uptime, concurrency), map data flows, and establish the technical design document (TDD).',
      deliverables: [
        'Architecture Diagram & Cloud Infrastructure Schema',
        'Data Model & API Contract Specification',
        'Milestone Delivery Plan with Fixed Acceptance Criteria',
        'Pre-Screened Specialist Pod Assignments',
      ],
    },
    {
      number: '02',
      title: 'Agile Sprints & Rapid Prototyping',
      duration: 'Weeks 3–8+',
      summary:
        'Bi-weekly sprints governed by an in-house Technical Lead. Automated CI/CD pipelines provide continuous staging deployments so your stakeholders can test working software every Friday.',
      deliverables: [
        'Live Preview Environment Updated Every Commit',
        'Sprint Demos & Bi-Weekly Backlog Grooming',
        'Strict PR Review Standards (Linting, TypeScript, SonarQube)',
        'Async Standup Summaries via Dedicated Slack Channel',
      ],
    },
    {
      number: '03',
      title: 'Quality Assurance & Security Hardening',
      duration: 'Ongoing & Pre-Launch',
      summary:
        'Comprehensive Playwright E2E suites, automated unit coverage thresholds (>85%), static vulnerability scanning (Snyk/Trivy), and SOC 2 / HIPAA compliance verification.',
      deliverables: [
        'End-to-End Automated Regression Test Suite',
        'Penetration Testing & Dependency Vulnerability Audit',
        'Lighthouse 95+ Performance & WCAG AA Accessibility Score',
        'Disaster Recovery & Backup Failover Drill',
      ],
    },
    {
      number: '04',
      title: 'Deployment & Zero-Downtime Rollout',
      duration: 'Launch Week',
      summary:
        'Blue/Green or Canary deployments on Kubernetes or serverless cloud infrastructure. Real-time telemetry monitoring, error rate alarms, and 24/7 hypercare coverage.',
      deliverables: [
        'Production Release Runbook & Rollback Protocol',
        'Automated Datadog/Grafana Monitoring Dashboards',
        'Full Source Code & Infrastructure-as-Code Handoff',
        'Engineering Team Knowledge Transfer Sessions',
      ],
    },
    {
      number: '05',
      title: 'Ongoing Evolution & Pod Scaling',
      duration: 'Continuous',
      summary:
        'Post-launch warranty bug fixing, infrastructure cost optimization (FinOps), and on-demand pod scaling as new feature roadmaps emerge.',
      deliverables: [
        '30-Day Post-Launch Zero-Cost Warranty',
        'Monthly Cloud Cost Audit & Optimization Report',
        'Flexible Pod Down-Scaling or Expansion in 14 Days',
        '24/7 SRE Uptime & Security Patching Support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            Engineering Delivery Framework
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            How We Deliver Enterprise Technology
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A disciplined, transparent delivery framework combining in-house architectural governance with vetted specialist talent. Zero black-box handoffs.
          </p>
        </div>

        {/* Phase Timeline Breakdown */}
        <div className="space-y-8 mb-20">
          {phases.map((p, idx) => (
            <div
              key={p.number}
              className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row gap-8 items-start relative group hover:border-[#22D3D8]/40 transition-all"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 shrink-0">
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#22D3D8]/40 group-hover:text-[#22D3D8] transition-colors">
                  {p.number}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-[#080B1D] px-2.5 py-1 rounded border border-white/10">
                  {p.duration}
                </span>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#22D3D8] transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{p.summary}</p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Phase Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs text-slate-200 bg-[#080B1D]/60 p-2.5 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3D8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Hybrid Model Deep Dive */}
        <div className="bg-[#080B1D] border border-white/10 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-2 block">
              The Tersan Advantage
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Why the "Hybrid Delivery Model" Outperforms Traditional Agencies
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Traditional agencies suffer from bloated bench overhead and mismatched junior generalists. Pure freelance marketplaces lack accountability, code reviews, and architecture leadership. Tersan Tech unifies the best of both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#22D3D8]/10 text-[#22D3D8] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base text-white">In-House Architectural Accountability</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your primary point of contact is a permanent, salaried Principal Solutions Architect. They write the technical spec, enforce code standards, and guarantee milestone delivery.
              </p>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base text-white">Vetted Specialist Network Scale</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instead of forcing your project onto whoever happens to be sitting on a bench, we match vetted senior specialists with exact 5+ year experience in your specific niche stack.
              </p>
            </div>
          </div>
        </div>

        {/* Communication & QA Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
            <MessageSquare className="w-6 h-6 text-[#22D3D8] mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">Direct Slack / Teams Integration</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No ticket queues or intermediary account managers. You speak directly with the engineers building your software.
            </p>
          </div>

          <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">Mandatory Branch Protection</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every pull request requires minimum 2 approving reviews, automated test suite passes, and security scan clearance before merge.
            </p>
          </div>

          <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
            <Zap className="w-6 h-6 text-[#FFB020] mb-3" />
            <h4 className="font-bold text-sm text-white mb-1">Continuous Staging Deploys</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Test features in an ephemeral staging cloud environment identical to production at every step of development.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#141A3E] border border-[#22D3D8]/30 rounded-2xl p-8 sm:p-12 space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Experience our delivery process on your next build
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Book a 30-minute discovery call with a Solutions Architect. We'll outline a preliminary delivery plan for your initiative.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20"
            >
              Book Scoping Call
            </button>
            <button
              onClick={() => navigate('/estimate')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
            >
              Get Project Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
