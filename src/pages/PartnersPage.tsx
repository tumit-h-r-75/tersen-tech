import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PARTNERS_DATA } from '../data/mockData';
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Award className="w-3.5 h-3.5" />
            Global Technology Ecosystem
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Premier Cloud &amp; Platform Partnerships
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We partner closely with premier hyperscale cloud platforms, data infrastructure leaders, and developer toolchains to secure top-tier architecture support and co-funded migration credits for our clients.
          </p>

          {/* Ecosystem Metrics */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-300">
            <span className="bg-[#141A3E] px-4 py-2 rounded-xl border border-white/10">
              <strong className="text-[#22D3D8]">45+</strong> Certified Cloud Engineers &amp; Architects
            </span>
            <span className="bg-[#141A3E] px-4 py-2 rounded-xl border border-white/10">
              <strong className="text-[#FFB020]">$250k+</strong> Direct Cloud Migration Credits Unlocked for Clients
            </span>
            <span className="bg-[#141A3E] px-4 py-2 rounded-xl border border-white/10">
              <strong className="text-emerald-400">Zero</strong> Vendor Lock-in Mandate
            </span>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PARTNERS_DATA.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-8 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#080B1D] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#22D3D8]">
                    {p.name.slice(0, 3).toUpperCase()}
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/20">
                    {p.tier}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#22D3D8] transition-colors mb-2">
                  {p.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Partner Category */}
                <div className="mb-6 p-3 rounded-xl bg-[#080B1D] border border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">Category</span>
                  <span className="font-bold text-[#22D3D8]">{p.category}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Tier: <strong className="text-white">{p.tier}</strong>
                </span>
                <button
                  onClick={() => navigate('/book-a-call')}
                  className="text-xs font-semibold text-[#22D3D8] hover:underline flex items-center gap-1"
                >
                  <span>Build on {p.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Application */}
        <div className="bg-[#080B1D] border border-white/10 rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] block">
            Technology Providers &amp; ISVs
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Interested in Joining the Tersan Tech Ecosystem?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We actively evaluate modern developer tools, cloud infrastructure components, and specialized SaaS platforms for integration into client builds.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20"
            >
              Inquire About Ecosystem Alliance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
