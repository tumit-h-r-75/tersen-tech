import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { JOB_POSTINGS_DATA } from '../data/mockData';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Heart,
  Laptop,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredJobs = useMemo(() => {
    return JOB_POSTINGS_DATA.filter((job) => {
      const matchDept = selectedDept === 'All' || job.department === selectedDept;
      const matchLoc =
        selectedLocation === 'All' ||
        (selectedLocation === 'Remote' ? job.location.includes('Remote') : job.location.includes(selectedLocation));
      const matchType = selectedType === 'All' || job.type === selectedType;
      return matchDept && matchLoc && matchType;
    });
  }, [selectedDept, selectedLocation, selectedType]);

  return (
    <div className="min-h-screen bg-[#0E1330] text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB020]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#FFB020] bg-[#FFB020]/10 border border-[#FFB020]/30 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Full-Time Engineering &amp; Operations Careers
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Build the Technology Backbone for Enterprise Scale
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Join our core team of solutions architects, senior full-stack developers, and delivery leaders. We offer competitive salaries, equity, remote flexibility, and zero corporate bureaucracy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-roles"
              className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center gap-2"
            >
              <span>Explore Open Roles ({JOB_POSTINGS_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => navigate('/join-freelancer-network')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20"
            >
              Looking for Freelance / Contract Work?
            </button>
          </div>
        </div>
      </section>

      {/* Why Work Here / Culture Points */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-2 block">
              Life at Tersan Tech
            </span>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
              Craftsmanship, Autonomy, and Real Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Remote-First Flexibility</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work from wherever you do your finest thinking. We provide a $2,000 home office workstation stipend and async-friendly workflows.
              </p>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#22D3D8]/10 text-[#22D3D8] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Modern Technical Stacks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No legacy cobwebs or 15-year-old monoliths. We build with Go, TypeScript, Next.js, Kubernetes, Terraform, and private RAG AI pipelines.
              </p>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Comprehensive Health &amp; 401(k)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% employer-covered health, dental, and vision insurance for employees, plus 4% 401(k) matching with immediate vesting.
              </p>
            </div>

            <div className="bg-[#141A3E] border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#22D3D8]/10 text-[#22D3D8] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Continuous Learning Stipend</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                $2,500 annual budget for books, cloud certification exams, and international engineering conferences of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-2 block">
                Current Opportunities
              </span>
              <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
                Open Full-Time Positions
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 text-xs">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-[#141A3E] border border-white/15 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#FFB020]"
              >
                <option value="All">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Operations">Operations</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-[#141A3E] border border-white/15 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#FFB020]"
              >
                <option value="All">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="New York">New York (Hybrid)</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-[#141A3E] border border-white/15 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#FFB020]"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
              </select>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.slug}
                  className="bg-[#141A3E] border border-white/10 hover:border-[#FFB020]/40 rounded-xl p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300">
                        {job.experienceLevel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FFB020] transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {job.type}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">{job.salaryRange.split('+')[0]}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigate(`/careers/${job.slug}`)}
                      className="px-5 py-2.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] transition-colors flex items-center gap-1.5 shadow-md shadow-[#FFB020]/10 whitespace-nowrap"
                    >
                      <span>View &amp; Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[#141A3E] border border-white/10 rounded-xl p-12 text-center text-slate-400">
                <p>No job openings match the selected filters.</p>
                <button
                  onClick={() => {
                    setSelectedDept('All');
                    setSelectedLocation('All');
                    setSelectedType('All');
                  }}
                  className="mt-3 text-[#FFB020] text-xs font-mono underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Talent Network Callout Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#080B1D]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#141A3E] to-[#0E1330] border border-[#FFB020]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB020] mb-1 block">
              Prefer Project-Based Work?
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Join the Tersan Tech Freelancer Network
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-lg leading-relaxed">
              Maintain complete autonomy over your schedule and rates. We match vetted senior specialists to pre-scoped enterprise client builds.
            </p>
          </div>
          <button
            onClick={() => navigate('/join-freelancer-network')}
            className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] whitespace-nowrap shadow-xl shadow-[#FFB020]/20"
          >
            Apply to Freelance Network
          </button>
        </div>
      </section>
    </div>
  );
};
