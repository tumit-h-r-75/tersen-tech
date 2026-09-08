import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { TALENT_PROFILES_DATA } from '../data/mockData';
import engineeringTeamPodImg from '../assets/images/engineering_team_pod_1788885153209.jpg';
import { VideoBriefingModal } from '../components/VideoBriefingModal';
import {
  Users,
  Search,
  Filter,
  Star,
  ShieldCheck,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Play,
} from 'lucide-react';

export const TalentShowcasePage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    'All',
    'Web & App Development',
    'Cloud & Infrastructure',
    'Emerging Tech',
    'Design',
    'Quality & Security',
    'Business Systems',
  ];

  const filteredTalent = useMemo(() => {
    return TALENT_PROFILES_DATA.filter((p) => {
      const matchSpec = selectedSpecialty === 'All' || p.specialty === selectedSpecialty;
      const matchStatus =
        selectedStatus === 'All' ||
        (selectedStatus === 'Available Now' && p.status === 'Available Now') ||
        (selectedStatus === 'Accepting Bookings' && p.status === 'Accepting Bookings') ||
        (selectedStatus === 'In Project' && p.status === 'In Project');

      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.topSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchSpec && matchStatus && matchSearch;
    });
  }, [selectedSpecialty, selectedStatus, searchQuery]);

  const handleHireTalent = (talentTitle: string) => {
    navigate('/book-a-call');
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero Split */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#FFB020] bg-[#FFB020]/10 border border-[#FFB020]/30">
                <Users className="w-3.5 h-3.5" />
                Vetted Top 3% Global Engineering Network • 120+ Active Specialists
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Vetted Senior Technologists Ready to Embed
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                Browse senior engineers, cloud architects, and product designers vetted through Tersan’s rigorous 4-stage screening rubric. Embed within your sprint cycle in under 48 hours with a 14-day trial guarantee.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Vetting &amp; Screening Tour</span>
                </button>
                <button
                  onClick={() => navigate('/join-freelancer-network')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2"
                >
                  <span>Apply to Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 bg-[#141A3E] p-3 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#22D3D8] shrink-0" />
                  <span>&lt;3% Acceptance</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#141A3E] p-3 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-[#FFB020] shrink-0" />
                  <span>48h Matching</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#141A3E] p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>14-Day Trial</span>
                </span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#141A3E] shadow-2xl group cursor-pointer"
              >
                <div className="aspect-[16/11] w-full overflow-hidden bg-[#080B1D]">
                  <img
                    src={engineeringTeamPodImg}
                    alt="Tersan Vetted Engineering Pod"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-black/30 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#FFB020] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#080B1D]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#FFB020] block">TALENT SCREENING LAB</span>
                    <span className="text-xs font-semibold text-white">Live Code &amp; Systems Rubric</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#FFB020]/20 text-[#FFB020] px-2 py-1 rounded">
                    Top 3% Accepted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by specialty, name, or skill (e.g. Kubernetes, React Native, AI, Go)..."
                className="w-full bg-[#080B1D] border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
              />
            </div>

            {/* Status Selector */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Status:</span>
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFB020]"
              >
                <option value="All">All Statuses</option>
                <option value="Available Now">Available Now</option>
                <option value="Accepting Bookings">Accepting Bookings</option>
                <option value="In Project">In Project</option>
              </select>
            </div>
          </div>

          {/* Specialty Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-mono">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#FFB020] text-black font-bold shadow-md shadow-[#FFB020]/20'
                    : 'bg-[#080B1D]/60 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Talent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalent.map((profile) => (
            <div
              key={profile.id}
              className="bg-[#141A3E] border border-white/10 hover:border-[#FFB020]/40 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      {profile.avatarUrl ? (
                        <img
                          src={profile.avatarUrl}
                          alt={profile.name}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 rounded-xl object-cover border border-white/20 group-hover:border-[#FFB020] transition-colors shadow-md"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-[#080B1D] border border-white/20 group-hover:border-[#FFB020] transition-colors flex items-center justify-center font-mono font-bold text-base text-[#FFB020]">
                          {profile.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                      <span
                        className={`w-3.5 h-3.5 rounded-full border-2 border-[#141A3E] absolute -bottom-1 -right-1 ${
                          profile.status === 'Available Now'
                            ? 'bg-emerald-400'
                            : profile.status === 'Accepting Bookings'
                            ? 'bg-[#FFB020]'
                            : 'bg-slate-400'
                        }`}
                      ></span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-[#FFB020] transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">{profile.title}</p>
                      <p className="text-[11px] font-mono text-slate-400">{profile.location} • {profile.timezone}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FFB020] bg-[#FFB020]/10 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-current" />
                      {profile.rating.toFixed(2)}
                    </span>
                    <span className="block text-[10px] font-mono text-slate-400 mt-1">
                      {profile.projectsCompleted} builds
                    </span>
                  </div>
                </div>

                {/* Specialty and Experience */}
                <div className="flex items-center justify-between text-[11px] font-mono mb-3 bg-[#080B1D] p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400">{profile.yearsExperience} yrs experience</span>
                  <span className="text-[#FFB020] font-bold">{profile.hourlyRate}</span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{profile.bio}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {profile.topSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-[#080B1D] border border-white/10 text-[10px] font-mono text-[#22D3D8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Status & CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Status</span>
                  <span
                    className={`text-xs font-semibold ${
                      profile.status === 'Available Now'
                        ? 'text-emerald-400'
                        : profile.status === 'Accepting Bookings'
                        ? 'text-[#FFB020]'
                        : 'text-slate-400'
                    }`}
                  >
                    {profile.status}
                  </span>
                </div>

                <button
                  onClick={() => handleHireTalent(profile.title)}
                  className="px-4 py-2 rounded-lg bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-md shadow-[#FFB020]/10 transition-colors flex items-center gap-1"
                >
                  <span>Request Specialist</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#141A3E] border border-[#22D3D8]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#22D3D8] mb-1 block">
              Need a full pod or custom tech stack?
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              We Assemble Custom Engineering Pods in &lt;48 Hours
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-xl leading-relaxed">
              Tell us your exact architecture requirements. We'll present 3 qualified candidate profiles with code samples within 2 business days.
            </p>
          </div>
          <button
            onClick={() => navigate('/book-a-call')}
            className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-xl shadow-[#22D3D8]/20 whitespace-nowrap"
          >
            Schedule Scoping Call
          </button>
        </div>
      </div>

      <VideoBriefingModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
