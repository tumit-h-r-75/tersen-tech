import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import engineeringTeamPodImg from '../assets/images/engineering_team_pod_1788885153209.jpg';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';
import cloudAiMeshImg from '../assets/images/cloud_ai_mesh_1788885136538.jpg';
import { VideoBriefingModal } from '../components/VideoBriefingModal';
import {
  Building,
  ShieldCheck,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Play,
  Terminal,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const leaders = [
    {
      name: 'Marcus Vance',
      role: 'Chief Executive Officer & Co-Founder',
      bio: 'Former VP of Engineering at a Fortune 100 cloud infrastructure provider. 18+ years leading distributed systems delivery across North America and Europe.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      bio: 'Ex-Principal Systems Architect and Kubernetes contributor. Specializes in multi-cloud zero-trust architectures and large-scale data stream pipelines.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Head of Talent Operations',
      bio: 'Pioneered global vetted engineering pipelines for fast-scaling B2B tech organizations. Manages Tersan’s 120+ specialist network and rigorous vetting rubrics.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const values = [
    {
      title: 'Architectural Rigor Over Quick Hacks',
      desc: 'We refuse to ship brittle code or superficial MVPs that crumble under production traffic. Every system is engineered to scale from day one.',
    },
    {
      title: 'Radical Transparency',
      desc: 'No hidden markups, no gatekept client communications, and no surprise invoices. Clients and engineers communicate directly in shared channels.',
    },
    {
      title: 'Deep Respect for Specialist Craft',
      desc: 'Great engineering is an intellectual craft. We treat our full-time staff and vetted freelance network with parity, competitive pay, and intellectual autonomy.',
    },
    {
      title: 'Total Client IP Protection',
      desc: 'We never retain code rights or hold software hostage. 100% of code, schemas, and configurations belong to the client from the first commit.',
    },
  ];

  const workplaceImages = [
    {
      title: 'Engineering Command & NOC Hub',
      subtitle: 'Austin, TX • 24/7 Cluster Reliability Monitoring',
      img: techCommandCenterImg,
    },
    {
      title: 'Applied AI & RAG Evaluation Pod',
      subtitle: 'San Francisco, CA • Air-gapped Model Validation',
      img: cloudAiMeshImg,
    },
    {
      title: 'Agile Systems Design War Room',
      subtitle: 'London, UK • Principal Architect Sprints',
      img: engineeringTeamPodImg,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30">
              <Building className="w-3.5 h-3.5" />
              About Tersan Tech • Founded 2019
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building the Next Generation of Enterprise Technology &amp; Talent
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              Founded by veteran enterprise architects, Tersan Tech bridges the gap between high-overhead IT consultancies and unpredictable talent boards through our architect-led hybrid delivery model.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Story &amp; Delivery Model</span>
              </button>

              <button
                onClick={() => navigate('/book-a-call')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2"
              >
                <span>Book Leadership Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#141A3E] shadow-2xl group cursor-pointer"
                 onClick={() => setIsVideoModalOpen(true)}>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={engineeringTeamPodImg}
                  alt="Tersan Tech Engineering Pod"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-black/30 to-transparent pointer-events-none"></div>

              {/* Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080B1D]/80 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <div className="text-[10px] font-mono text-[#22D3D8] uppercase tracking-wider">
                  Inside Tersan Tech
                </div>
                <div className="text-xs font-semibold text-white">
                  Cross-functional architectural war rooms with 24/7 follow-the-sun sprints
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-center">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#22D3D8]">140+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
              Enterprise Projects Delivered
            </div>
          </div>
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-center">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFB020]">120+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
              Vetted Senior Specialists
            </div>
          </div>
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-center">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">99.8%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
              SLA Delivery Compliance
            </div>
          </div>
          <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-center">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white">4.9 / 5</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
              Average Client Rating
            </div>
          </div>
        </div>

        {/* Engineering Lab & Infrastructure Facilities (Image Section) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Physical &amp; Cloud Infrastructure
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Where Mission-Critical Engineering Happens
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Our teams work across certified security labs, distributed cloud NOC centers, and dedicated client architecture pods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workplaceImages.map((wp, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 overflow-hidden shadow-xl transition-all"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#080B1D]">
                  <img
                    src={wp.img}
                    alt={wp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#22D3D8] transition-colors">
                    {wp.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {wp.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-2 block">
              Guiding Principles
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              How We Operate Every Single Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-[#141A3E] border border-white/10 rounded-xl p-8 space-y-3">
                <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22D3D8]" />
                  {v.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-2 block">
              Architectural Governance
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 text-left group hover:border-[#22D3D8]/40 transition-all shadow-xl"
              >
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-2xl object-cover mb-4 border border-white/20 group-hover:border-[#22D3D8] transition-colors"
                />
                <h3 className="font-heading font-bold text-lg text-white mb-1">{leader.name}</h3>
                <p className="text-xs font-mono text-[#22D3D8] mb-3">{leader.role}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs */}
        <div className="bg-[#080B1D] border border-white/10 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Global Engineering Presence</h3>
            <p className="text-xs text-slate-400">
              Distributed across global timezones to support 24/7 enterprise operations and follow-the-sun sprints.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141A3E]">
              <div className="text-white font-bold text-sm mb-1">New York</div>
              <div className="text-slate-400 text-[11px]">Headquarters (EST)</div>
            </div>
            <div className="p-4 rounded-xl bg-[#141A3E]">
              <div className="text-white font-bold text-sm mb-1">San Francisco</div>
              <div className="text-slate-400 text-[11px]">Architecture Lab (PST)</div>
            </div>
            <div className="p-4 rounded-xl bg-[#141A3E]">
              <div className="text-white font-bold text-sm mb-1">London</div>
              <div className="text-slate-400 text-[11px]">EMEA Hub (GMT)</div>
            </div>
            <div className="p-4 rounded-xl bg-[#141A3E]">
              <div className="text-white font-bold text-sm mb-1">Remote Worldwide</div>
              <div className="text-[#FFB020] text-[11px]">Top 3% Talent Network</div>
            </div>
          </div>
        </div>

        {/* Dual Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#141A3E] border border-[#22D3D8]/30 rounded-2xl p-8 text-left space-y-4">
            <span className="text-xs font-mono uppercase text-[#22D3D8] block">For B2B Enterprise Clients</span>
            <h3 className="font-heading text-2xl font-bold text-white">Have an Upcoming Project?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Speak directly with our Chief Technology Officer or a Principal Solutions Architect.
            </p>
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-5 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] flex items-center gap-1.5"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#141A3E] border border-[#FFB020]/30 rounded-2xl p-8 text-left space-y-4">
            <span className="text-xs font-mono uppercase text-[#FFB020] block">For Senior Technologists</span>
            <h3 className="font-heading text-2xl font-bold text-white">Join Our Specialist Network</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Work on pre-scoped enterprise builds with transparent payouts and set your own rates.
            </p>
            <button
              onClick={() => navigate('/join-freelancer-network')}
              className="px-5 py-3 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] flex items-center gap-1.5"
            >
              <span>Apply to Talent Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
