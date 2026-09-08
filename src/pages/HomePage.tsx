import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { TrustMarquee } from '../components/TrustMarquee';
import { VideoBriefingModal } from '../components/VideoBriefingModal';
import { EngineeringLabGallery } from '../components/EngineeringLabGallery';
import {
  SERVICES_DATA,
  CASE_STUDIES_DATA,
  TESTIMONIALS_DATA,
  INDUSTRIES_DATA,
  TALENT_PROFILES_DATA,
} from '../data/mockData';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';
import cloudAiMeshImg from '../assets/images/cloud_ai_mesh_1788885136538.jpg';
import engineeringTeamPodImg from '../assets/images/engineering_team_pod_1788885153209.jpg';
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
  Play,
  Terminal,
  Activity,
  Maximize2,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  // Interactive video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [heroVisualTab, setHeroVisualTab] = useState<'command' | 'ai' | 'pod'>('command');

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

  const getHeroImage = () => {
    if (heroVisualTab === 'ai') return cloudAiMeshImg;
    if (heroVisualTab === 'pod') return engineeringTeamPodImg;
    return techCommandCenterImg;
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle geometric gradient backdrop */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#22D3D8]/30 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-6 backdrop-blur-sm">
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
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-sans">
              Tersan Tech powers high-growth startups and global enterprises across cloud infrastructure, AI systems, mobile, and security—backed by an in-house architectural core and a vetted top-3% talent pipeline.
            </p>

            {/* Primary Action Buttons + 90s Video Briefing Launcher */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
              <button
                onClick={() => navigate('/book-a-call')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-xl shadow-[#22D3D8]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#141A3E] hover:bg-[#1A2250] text-white font-semibold text-xs tracking-wider border border-[#22D3D8]/40 hover:border-[#22D3D8] transition-all flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <span className="w-5 h-5 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch 90s Overview</span>
                <span className="text-[10px] font-mono text-[#22D3D8] px-1.5 py-0.5 rounded bg-[#22D3D8]/15 border border-[#22D3D8]/30">
                  HD
                </span>
              </button>

              <button
                onClick={() => navigate('/estimate')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#22D3D8]" />
                <span>Estimate Cost</span>
              </button>

              <button
                onClick={() => navigate('/join-freelancer-network')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-xl shadow-[#FFB020]/20 transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join Talent Network</span>
              </button>
            </div>
          </div>

          {/* INTERACTIVE ARCHITECTURAL COMMAND CENTER FRAME */}
          <div className="max-w-5xl mx-auto bg-[#141A3E] border border-white/15 hover:border-[#22D3D8]/50 rounded-2xl p-2 sm:p-3 shadow-2xl transition-all relative group">
            {/* View Switcher Top Bar */}
            <div className="flex flex-wrap items-center justify-between px-3 py-2 border-b border-white/10 bg-[#080B1D]/80 rounded-t-xl gap-3">
              {/* Telemetry Status Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  tersan-tech://live-architecture/telemetry-v4
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  onClick={() => setHeroVisualTab('command')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    heroVisualTab === 'command'
                      ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-md'
                      : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  01 // Command Center
                </button>
                <button
                  onClick={() => setHeroVisualTab('ai')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    heroVisualTab === 'ai'
                      ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-md'
                      : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  02 // Cloud AI Mesh
                </button>
                <button
                  onClick={() => setHeroVisualTab('pod')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    heroVisualTab === 'pod'
                      ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-md'
                      : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  03 // Engineering Pod
                </button>
              </div>
            </div>

            {/* Visual Canvas Display */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full rounded-b-xl overflow-hidden bg-[#080B1D] cursor-pointer"
                 onClick={() => setIsVideoModalOpen(true)}>
              <img
                src={getHeroImage()}
                alt="Tersan Tech Live Architecture & Engineering View"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-black/30 to-black/20 pointer-events-none"></div>

              {/* Top Live Feeds Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 bg-[#080B1D]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>
                    {heroVisualTab === 'command' && 'PRIMARY CLUSTER • 140+ ENTERPRISE DEPLOYMENTS'}
                    {heroVisualTab === 'ai' && 'AIR-GAPPED LLM ENGINE • ZERO DATA LEAKAGE'}
                    {heroVisualTab === 'pod' && 'CROSS-FUNCTIONAL POD • TOP 3% SENIOR TALENT'}
                  </span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#080B1D]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-[#22D3D8]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SOC 2 &amp; HIPAA VERIFIED</span>
                </div>
              </div>

              {/* Center Interactive Video Trigger Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-[#22D3D8]/30 animate-ping"></div>
                  <div className="w-16 h-16 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pointer-events-none">
                <div className="bg-[#080B1D]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <div className="text-[10px] font-mono text-[#22D3D8] uppercase">
                    Architectural Briefing // Click to launch 90-sec tec-spec
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {heroVisualTab === 'command' && 'Mission-Critical Cloud Infrastructure & Multi-Region Failover'}
                    {heroVisualTab === 'ai' && 'Enterprise RAG Pipelines & High-Throughput Model Inference'}
                    {heroVisualTab === 'pod' && 'Agile Sprint Velocity with Dedicated Lead Architect Oversight'}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#22D3D8]/15 border border-[#22D3D8]/40 px-3 py-2 rounded-xl text-xs font-mono text-[#22D3D8] backdrop-blur-md self-start sm:self-auto">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Interactive Walkthrough</span>
                </div>
              </div>
            </div>

            {/* Four Real-Time Metrics Badges Below Canvas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-3 pt-2 border-t border-white/10 text-left">
              <div className="p-3 rounded-xl bg-[#080B1D]/60 border border-white/5">
                <div className="font-heading font-extrabold text-xl text-white">140+</div>
                <div className="text-[10px] font-mono text-slate-400">Enterprise Builds Shipped</div>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1D]/60 border border-white/5">
                <div className="font-heading font-extrabold text-xl text-[#22D3D8]">99.8%</div>
                <div className="text-[10px] font-mono text-slate-400">SLA Milestone Compliance</div>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1D]/60 border border-white/5">
                <div className="font-heading font-extrabold text-xl text-[#FFB020]">&lt;3%</div>
                <div className="text-[10px] font-mono text-slate-400">Vetted Talent Acceptance</div>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1D]/60 border border-white/5">
                <div className="font-heading font-extrabold text-xl text-emerald-400">100%</div>
                <div className="text-[10px] font-mono text-slate-400">Day-1 Client IP Ownership</div>
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

      {/* DEDICATED ENGINEERING LAB & VISUAL FACILITY GALLERY */}
      <EngineeringLabGallery />

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
                className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1 duration-300"
              >
                {/* Case Study Image Header */}
                {cs.imageUrl && (
                  <div className="relative aspect-[16/9] w-full bg-[#080B1D] overflow-hidden">
                    <img
                      src={cs.imageUrl}
                      alt={cs.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141A3E] via-transparent to-black/40 pointer-events-none"></div>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold bg-[#080B1D]/80 text-[#22D3D8] px-2 py-0.5 rounded border border-[#22D3D8]/30 backdrop-blur-md">
                        {cs.industry}
                      </span>
                      <span className="text-[11px] font-mono text-white bg-[#080B1D]/80 px-2 py-0.5 rounded border border-white/15 backdrop-blur-md">
                        {cs.client}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {!cs.imageUrl && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] px-2 py-0.5 rounded">
                          {cs.industry}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{cs.client}</span>
                      </div>
                    )}

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#22D3D8] transition-colors mb-2.5 leading-snug">
                      {cs.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-2">
                      {cs.challenge}
                    </p>

                    {/* Top Metric Callout */}
                    <div className="p-3.5 rounded-xl bg-[#080B1D] border border-white/5 mb-5">
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
          <div className="bg-gradient-to-br from-[#141A3E] to-[#080B1D] border border-[#FFB020]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Narrative & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/40">
                  Talent Operations &amp; Staff Augmentation
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Vetted Senior Technologists. <br />
                  Ready to Embed in 48 Hours.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We accept fewer than 3% of engineer applicants. Every specialist completes rigorous technical architecture challenges, code quality benchmarks, and live systems debugging with our Lead Architects before touching client code.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-2xl font-bold text-[#FFB020]">&lt;3%</div>
                    <div className="text-xs text-slate-400 mt-1">Acceptance Rate</div>
                  </div>
                  <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-2xl font-bold text-white">4-Stage</div>
                    <div className="text-xs text-slate-400 mt-1">Screening Rubric</div>
                  </div>
                  <div className="bg-[#0E1330]/80 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-2xl font-bold text-emerald-400">14-Day</div>
                    <div className="text-xs text-slate-400 mt-1">Risk-Free Guarantee</div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-4">
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

              {/* Right Column: Vetted Talent Cards Preview */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>DEPLOYABLE SPECIALISTS NOW</span>
                  <span className="text-[#FFB020] cursor-pointer hover:underline" onClick={() => navigate('/talent')}>
                    View all 120+ →
                  </span>
                </div>

                {TALENT_PROFILES_DATA.slice(0, 3).map((prof) => (
                  <div
                    key={prof.id}
                    onClick={() => navigate('/talent')}
                    className="p-4 rounded-2xl bg-[#080B1D]/90 border border-white/10 hover:border-[#FFB020]/50 transition-all cursor-pointer flex items-center justify-between gap-4 group shadow-lg"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFB020]/40 shrink-0">
                        {prof.avatarUrl ? (
                          <img
                            src={prof.avatarUrl}
                            alt={prof.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#141A3E] flex items-center justify-center font-bold text-white">
                            {prof.name[0]}
                          </div>
                        )}
                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080B1D]"></span>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold text-sm text-white truncate group-hover:text-[#FFB020] transition-colors">
                            {prof.name}
                          </h4>
                          <span className="text-[10px] font-mono text-amber-300 flex items-center gap-0.5">
                            ★ {prof.rating}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 truncate">{prof.title}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          {prof.topSkills.slice(0, 2).map((s, i) => (
                            <span key={i} className="text-[9px] font-mono bg-white/5 text-slate-400 px-1.5 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono font-bold text-white">{prof.hourlyRate}</div>
                      <span className="text-[10px] font-mono text-emerald-400 block mt-0.5">
                        {prof.status}
                      </span>
                    </div>
                  </div>
                ))}
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

      {/* 90-SECOND VIDEO BRIEFING MODAL */}
      <VideoBriefingModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
