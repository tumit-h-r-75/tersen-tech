import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Lock,
  CheckCircle2,
  Clock,
  DollarSign,
  Briefcase,
  GitPullRequest,
  Users,
  FileText,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Star,
} from 'lucide-react';

export const ClientPortalPage: React.FC = () => {
  const { navigate, showToast } = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('enterprise@finvault.io');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Authenticated into FinVault Capital Client Workspace');
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-[#141A3E] border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#22D3D8]/10 text-[#22D3D8] flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-white">Client Project Portal</h1>
              <p className="text-xs text-slate-400 mt-1">
                Access your active sprint velocity, deliverables, and assigned pod.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Corporate Client Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#22D3D8]"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">Passcode / SSO Token</label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#22D3D8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20"
              >
                Log In to Workspace (Demo)
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Top Workspace Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141A3E] border border-white/10 p-6 rounded-2xl">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-xs text-[#22D3D8] uppercase">Active Engagement</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">FinVault Capital: Core Engine V2</h2>
                <p className="text-xs text-slate-400">Pod: 1 In-House Lead Architect + 3 Dedicated Specialists</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Sprint 14 Status</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">94% Target Velocity</div>
                <div className="text-xs text-slate-400 mt-0.5">3 days remaining in current milestone</div>
              </div>
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Automated Test Passes</span>
                <div className="text-xl font-bold text-white mt-1">100% Passing</div>
                <div className="text-xs text-slate-400 mt-0.5">342 unit &amp; 48 Playwright E2E suites</div>
              </div>
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">SOC 2 Audit Telemetry</span>
                <div className="text-xl font-bold text-[#22D3D8] mt-1">Zero Findings</div>
                <div className="text-xs text-slate-400 mt-0.5">Continuous automated compliance scan</div>
              </div>
            </div>

            {/* Sprint Deliverables Table */}
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-base text-white mb-4">Milestone Deliverables &amp; PRs</h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B1D] border border-white/5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white">PR #128: Implement zero-copy transaction pipeline (Go)</span>
                  </div>
                  <span className="text-emerald-400">Merged &amp; Deployed to Staging</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B1D] border border-white/5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#FFB020]" />
                    <span className="text-white">Task #130: Snowflake multi-cluster warehouse cost optimization</span>
                  </div>
                  <span className="text-[#FFB020]">In Code Review</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B1D] border border-white/5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white">Security Audit: PCI-DSS Level 1 network segmentation</span>
                  </div>
                  <span className="text-emerald-400">Signed-off by Chief Security Officer</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const TeamPortalPage: React.FC = () => {
  const { navigate, showToast } = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('tariq.specialist@network.dev');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Authenticated into Freelancer Talent Workspace');
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-[#141A3E] border border-[#FFB020]/30 rounded-2xl p-8 shadow-2xl space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-white">Talent &amp; Freelancer Portal</h1>
              <p className="text-xs text-slate-400 mt-1">
                View project matches, active contract hours, and milestone payouts.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Network Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FFB020]"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FFB020]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20"
              >
                Log In as Specialist (Demo)
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141A3E] border border-[#FFB020]/30 p-6 rounded-2xl">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB020]"></span>
                  <span className="font-mono text-xs text-[#FFB020] uppercase font-bold">
                    Vetted Senior Specialist
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">Welcome back, Tariq K.</h2>
                <p className="text-xs text-slate-400">Current Assignment: Cloud Architect Pod (Strata Freight)</p>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto"
              >
                Sign Out
              </button>
            </div>

            {/* Payout & Hours Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Upcoming Net-15 Payout</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">$9,600.00</div>
                <div className="text-xs text-slate-400 mt-0.5">Direct ACH scheduled for Friday</div>
              </div>
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Logged Hours this Month</span>
                <div className="text-2xl font-bold text-white mt-1">72.5 / 80 hrs</div>
                <div className="text-xs text-slate-400 mt-0.5">Rate: $135/hr agreed contract</div>
              </div>
              <div className="bg-[#141A3E] border border-white/10 p-5 rounded-xl">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Client Quality Rating</span>
                <div className="text-2xl font-bold text-[#FFB020] mt-1 flex items-center gap-1.5">
                  <span>5.0</span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-xs text-slate-400 mt-0.5">100% on-time milestone delivery</div>
              </div>
            </div>

            {/* New Matched Enterprise Project Invites */}
            <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-base text-white">
                  New Pre-Scoped Project Matches Available
                </h3>
                <span className="text-xs font-mono text-[#FFB020]">2 Matched to Your Stack</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#080B1D] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-white">Kubernetes Multi-Region Mesh Migration</h4>
                    <p className="text-xs text-slate-400">Client: Series B FinTech • Duration: 8 weeks • $135–$145/hr</p>
                  </div>
                  <button
                    onClick={() => showToast('Interest expressed! Lead Architect will review.')}
                    className="px-4 py-2 rounded-lg bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] whitespace-nowrap"
                  >
                    Express Interest
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
