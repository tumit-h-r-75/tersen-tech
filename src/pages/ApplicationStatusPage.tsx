import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ApplicationSubmission } from '../types';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  User,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const ApplicationStatusPage: React.FC = () => {
  const { applications, navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedApp, setMatchedApp] = useState<ApplicationSubmission | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setMatchedApp(null);
      return;
    }

    const found = applications.find(
      (app) => app.email.toLowerCase() === q || app.id.toLowerCase() === q
    );
    setMatchedApp(found || null);
  };

  const getStatusStep = (status: ApplicationSubmission['status']) => {
    switch (status) {
      case 'Under Review':
        return 1;
      case 'Technical Screening':
        return 2;
      case 'Shortlisted':
        return 3;
      case 'Offer Extended':
        return 4;
      default:
        return 1;
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#FFB020] bg-[#FFB020]/10 border border-[#FFB020]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Talent &amp; Career Transparency
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Track Your Application Status
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We respect your time. Whether you applied for an in-house engineering role or our vetted Freelancer Talent Network, check real-time pipeline status below.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
              Enter Your Application Email or Reference ID
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. alex.wright@example.com or APP-7029"
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] transition-colors whitespace-nowrap shadow-lg shadow-[#FFB020]/20"
              >
                Check Status
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
              <span>Demo emails available: alex.wright@example.com | sophia.r@designcraft.io</span>
            </div>
          </form>
        </div>

        {/* Search Result Display */}
        {hasSearched && matchedApp && (
          <div className="bg-[#141A3E] border border-[#FFB020]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#FFB020] font-bold bg-[#FFB020]/10 px-2.5 py-0.5 rounded border border-[#FFB020]/30">
                    {matchedApp.id}
                  </span>
                  <span className="text-xs uppercase font-mono text-slate-400">
                    {matchedApp.type === 'job' ? 'Full-Time Job Application' : 'Freelancer Network Profile'}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white">{matchedApp.fullName}</h3>
                <p className="text-xs text-slate-400">{matchedApp.roleOrCategory}</p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-[#FFB020] border border-[#FFB020]/40">
                  {matchedApp.status}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Submitted: {matchedApp.submittedAt}</p>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="py-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Evaluation Milestones
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Submitted', desc: 'Received in queue' },
                  { label: 'Under Review', desc: 'Portfolio evaluation' },
                  { label: 'Technical Screening', desc: 'Live technical chat' },
                  { label: 'Decision / Offer', desc: 'Final resolution' },
                ].map((step, idx) => {
                  const currentStepIdx = getStatusStep(matchedApp.status);
                  const isCompleted = idx + 1 <= currentStepIdx;
                  const isCurrent = idx + 1 === currentStepIdx;

                  return (
                    <div key={idx} className="relative">
                      <div
                        className={`h-2 rounded-full mb-2 ${
                          isCompleted
                            ? 'bg-[#FFB020]'
                            : 'bg-white/10'
                        }`}
                      ></div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1">
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB020]" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        <span className={isCurrent ? 'text-[#FFB020]' : 'text-slate-300'}>{step.label}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">{step.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Talent Ops Notes */}
            {matchedApp.notes && (
              <div className="bg-[#080B1D] border border-white/10 rounded-xl p-4 text-xs text-slate-300">
                <span className="font-mono text-[10px] uppercase text-[#FFB020] block mb-1">
                  Talent Operations Review Update
                </span>
                {matchedApp.notes}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
              <span>Have additional materials or updated rates to submit?</span>
              <button
                onClick={() => navigate('/contact')}
                className="text-[#22D3D8] hover:underline flex items-center gap-1"
              >
                <span>Contact Hiring Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {hasSearched && !matchedApp && (
          <div className="bg-[#141A3E] border border-rose-500/30 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
            <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Application Found for "{searchQuery}"</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Please double check the email address you entered or submit a new application through our careers portal or freelancer network form.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => navigate('/careers')}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                View Careers
              </button>
              <button
                onClick={() => navigate('/join-freelancer-network')}
                className="px-4 py-2 rounded-lg bg-[#FFB020] text-black text-xs font-semibold"
              >
                Apply as Freelancer
              </button>
            </div>
          </div>
        )}

        {/* Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-[#141A3E]/60 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
              Freelancer Vetting Timeline
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Freelancer applications undergo initial review within 48 business hours. Shortlisted specialists receive an invitation for a 90-minute technical evaluation.
            </p>
          </div>
          <div className="bg-[#141A3E]/60 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22D3D8]"></span>
              Full-Time Hiring Process
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our in-house hiring process consists of 3 steps: initial screening, a technical collaboration session, and team culture meetups. Feedback is always provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
