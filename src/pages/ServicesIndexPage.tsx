import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES_DATA } from '../data/mockData';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';
import cloudAiMeshImg from '../assets/images/cloud_ai_mesh_1788885136538.jpg';
import { VideoBriefingModal } from '../components/VideoBriefingModal';
import {
  Layers,
  Cloud,
  Cpu,
  ShieldCheck,
  Users,
  Search,
  ArrowRight,
  Calculator,
  Sparkles,
  CheckCircle2,
  Play,
  Terminal,
  Activity,
} from 'lucide-react';

export const ServicesIndexPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Web & App Development',
    'Cloud & Infrastructure',
    'Emerging Tech & AI',
    'Security & Quality Assurance',
    'Design & Product Experience',
    'IT Consulting & Staff Augmentation',
    'Growth & Technical SEO',
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => {
      const matchCat = selectedCategory === 'All' || s.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30">
                <Layers className="w-3.5 h-3.5" />
                Full-Spectrum Technology Capabilities • 8 Practice Areas
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Engineering Across the Entire Digital Lifecycle
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                From modern web applications and mission-critical cloud migrations to enterprise AI pipelines and vetted staff augmentation. We deliver with architectural rigor and guaranteed SLAs.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Service Architecture Tour</span>
                </button>
                <button
                  onClick={() => navigate('/estimate')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-[#22D3D8]" />
                  <span>Cost Estimator</span>
                </button>
              </div>
            </div>

            {/* Visual Hero Feature Banner */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#141A3E] shadow-2xl group cursor-pointer"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#080B1D]">
                  <img
                    src={cloudAiMeshImg}
                    alt="Enterprise AI & Infrastructure Mesh"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-black/30 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#080B1D]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#22D3D8] block">ENTERPRISE BLUEPRINT</span>
                    <span className="text-xs font-semibold text-white">Full-Stack Cloud &amp; AI Stack</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#22D3D8]/20 text-[#22D3D8] px-2 py-1 rounded">
                    SLA 99.8%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or tech stacks (e.g. Next.js, AWS, RAG, SOC 2)..."
                className="w-full bg-[#080B1D] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
              />
            </div>

            <div className="text-xs font-mono text-slate-400">
              Showing <span className="text-[#22D3D8] font-bold">{filteredServices.length}</span> Capabilities
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-md shadow-[#22D3D8]/20'
                    : 'bg-[#080B1D]/60 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (20+ services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isStaffing = service.category.includes('Staff Augmentation');

            return (
              <div
                key={service.slug}
                className={`rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-xl border ${
                  isStaffing
                    ? 'bg-[#141A3E] border-[#FFB020]/30 hover:border-[#FFB020]'
                    : 'bg-[#141A3E] border-white/10 hover:border-[#22D3D8]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isStaffing
                          ? 'bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30'
                          : 'bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/20'
                      }`}
                    >
                      {service.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {service.pricingTiers[0]?.timeline || '4-8 weeks'}
                    </span>
                  </div>

                  <h3
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className={`font-heading font-bold text-xl mb-2.5 transition-colors cursor-pointer ${
                      isStaffing ? 'group-hover:text-[#FFB020]' : 'group-hover:text-[#22D3D8]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{service.summary}</p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isStaffing ? 'text-[#FFB020]' : 'text-[#22D3D8]'
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#080B1D] text-slate-300 text-[10px] font-mono border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.pricingTiers[0]?.tier || 'Fixed-Scope Pod'}
                  </span>
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                      isStaffing
                        ? 'text-[#FFB020] hover:text-white'
                        : 'text-[#22D3D8] hover:text-white'
                    }`}
                  >
                    <span>View Service Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#141A3E] via-[#0E1330] to-[#141A3E] border border-white/10 rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Have a custom cross-functional requirement?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Many enterprise initiatives require combinations of cloud re-platforming, mobile interfaces, and AI automation simultaneously. Use our project estimate tool to configure a multi-disciplinary pod.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/estimate')}
              className="px-6 py-3.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20"
            >
              Configure Custom Scope
            </button>
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
            >
              Speak with a Solutions Architect
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
