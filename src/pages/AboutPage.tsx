import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Building,
  ShieldCheck,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

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

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Building className="w-3.5 h-3.5" />
            About Tersan Tech
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Building the Next Generation of Enterprise Technology &amp; Talent
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Founded by veteran enterprise architects, Tersan Tech bridges the gap between high-overhead IT consultancies and unreliable freelance boards through an architect-led hybrid delivery model.
          </p>
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
    </div>
  );
};
