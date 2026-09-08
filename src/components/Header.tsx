import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import {
  Layers,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Briefcase,
  Users,
  ShieldCheck,
  Cpu,
  Calculator,
  Calendar,
  Lock,
  Sun,
  Moon,
  Code2,
  Cloud,
  Brain,
  Shield,
  Building2,
  Award,
  BookOpen,
  HelpCircle,
  Mail,
  Sparkles,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [talentOpen, setTalentOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const talentRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        talentRef.current &&
        !talentRef.current.contains(event.target as Node) &&
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setTalentOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setTalentOpen(false);
    setCompanyOpen(false);
  }, [currentPath]);

  const isClientActive =
    currentPath.startsWith('/services') ||
    currentPath.startsWith('/industries') ||
    currentPath.startsWith('/case-studies') ||
    currentPath.startsWith('/pricing') ||
    currentPath.startsWith('/process') ||
    currentPath.startsWith('/estimate') ||
    currentPath.startsWith('/book-a-call');

  const isTalentActive =
    currentPath.startsWith('/careers') ||
    currentPath.startsWith('/join-freelancer-network') ||
    currentPath.startsWith('/talent') ||
    currentPath.startsWith('/application-status') ||
    currentPath.startsWith('/portal/team');

  return (
    <header className="sticky top-0 z-50 bg-[#0E1330]/95 backdrop-blur-md border-b border-white/10 transition-colors duration-200">
      {/* Top Utility Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-8 py-2 bg-[#080B1D] text-xs text-slate-400 border-b border-white/5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22D3D8] animate-pulse"></span>
            <span className="font-mono text-slate-300">Enterprise Engineering &amp; Vetted Talent Ecosystem</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOC 2 Type II Certified &bull; 14-Day Risk-Free Trial</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate('/estimate')}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#22D3D8] transition-colors"
          >
            <Calculator className="w-3.5 h-3.5 text-[#22D3D8]" />
            <span>Interactive Estimator</span>
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={() => navigate('/application-status')}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#FFB020] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020]"></span>
            <span>Application Status Tracker</span>
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={() => navigate('/portal/client')}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <Lock className="w-3 h-3 text-[#22D3D8]" />
            <span>Client Portal</span>
          </button>
          <button
            onClick={() => navigate('/portal/team')}
            className="flex items-center gap-1 text-slate-400 hover:text-[#FFB020] transition-colors"
          >
            <Lock className="w-3 h-3 text-[#FFB020]" />
            <span>Team Portal</span>
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22D3D8] via-[#0E1330] to-[#FFB020] p-[1.5px] shadow-lg shadow-[#22D3D8]/10 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0E1330] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-[#22D3D8]">T</span>
              <span className="font-mono font-bold text-xs text-[#FFB020] ml-0.5">T</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-[#22D3D8] transition-colors">
                TERSAN
              </span>
              <span className="font-mono font-bold text-sm tracking-widest text-[#22D3D8]">TECH</span>
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
              Enterprise Engineering
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setTalentOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all text-xs font-semibold tracking-wide uppercase ${
                currentPath.startsWith('/services')
                  ? 'text-[#22D3D8] bg-[#141A3E]'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[420px] bg-[#141A3E] border border-white/15 rounded-2xl shadow-2xl p-4 grid grid-cols-1 gap-2 z-50 backdrop-blur-xl">
                <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#22D3D8] uppercase tracking-wider font-bold">
                    Full-Spectrum Technical Practice
                  </span>
                  <button
                    onClick={() => {
                      setServicesOpen(false);
                      navigate('/services');
                    }}
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-mono"
                  >
                    All Services <ArrowRight className="w-3 h-3 text-[#22D3D8]" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    setServicesOpen(false);
                    navigate('/services/web-design-development');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#080B1D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#22D3D8]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-[#22D3D8] text-sm flex items-center gap-2">
                      <span>Web &amp; Mobile Engineering</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Next.js, React, React Native apps &amp; high-throughput APIs</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServicesOpen(false);
                    navigate('/services/cloud-architecture-migration');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#080B1D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#22D3D8]">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-[#22D3D8] text-sm">
                      Cloud &amp; DevOps Infrastructure
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">AWS/GCP/Azure migrations, Kubernetes, and GitOps CI/CD</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServicesOpen(false);
                    navigate('/services/ai-ml-integration');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#080B1D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#22D3D8]">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-[#22D3D8] text-sm">
                      Emerging Tech &amp; AI Systems
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Private VPC RAG pipelines, fine-tuned LLMs &amp; agentic workflows</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServicesOpen(false);
                    navigate('/services/cybersecurity-audits-hardening');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#080B1D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#22D3D8]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-[#22D3D8] text-sm">
                      Cybersecurity &amp; Compliance
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">SOC 2 / HIPAA compliance audits, penetration testing &amp; QA</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServicesOpen(false);
                    navigate('/services/it-consulting-staff-augmentation');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/30 hover:bg-[#FFB020]/20 transition-all group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#080B1D] border border-[#FFB020]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#FFB020]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#FFB020] font-medium text-sm flex items-center justify-between">
                      <span>Staff Augmentation &amp; Pods</span>
                      <span className="text-[10px] font-mono bg-[#FFB020] text-black px-1.5 py-0.5 rounded font-bold">
                        HYBRID
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">Deploy vetted senior specialists within 48 business hours</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Industries */}
          <button
            onClick={() => navigate('/industries')}
            className={`px-3.5 py-2 rounded-lg transition-all text-xs font-semibold tracking-wide uppercase ${
              currentPath.startsWith('/industries')
                ? 'text-[#22D3D8] bg-[#141A3E]'
                : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Industries
          </button>

          {/* Case Studies */}
          <button
            onClick={() => navigate('/case-studies')}
            className={`px-3.5 py-2 rounded-lg transition-all text-xs font-semibold tracking-wide uppercase ${
              currentPath.startsWith('/case-studies')
                ? 'text-[#22D3D8] bg-[#141A3E]'
                : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Case Studies
          </button>

          {/* Engagement Models & Pricing */}
          <button
            onClick={() => navigate('/pricing')}
            className={`px-3.5 py-2 rounded-lg transition-all text-xs font-semibold tracking-wide uppercase ${
              currentPath.startsWith('/pricing')
                ? 'text-[#22D3D8] bg-[#141A3E]'
                : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Pricing &amp; Models
          </button>

          {/* Our Process */}
          <button
            onClick={() => navigate('/how-we-deliver')}
            className={`px-3.5 py-2 rounded-lg transition-all text-xs font-semibold tracking-wide uppercase ${
              currentPath.startsWith('/how-we-deliver')
                ? 'text-[#22D3D8] bg-[#141A3E]'
                : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Process
          </button>

          {/* Talent & Careers Dropdown (Amber Highlight) */}
          <div className="relative" ref={talentRef}>
            <button
              onClick={() => {
                setTalentOpen(!talentOpen);
                setServicesOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all text-xs font-semibold tracking-wide uppercase border ${
                isTalentActive
                  ? 'text-[#FFB020] bg-[#FFB020]/15 border-[#FFB020]/50 shadow-md shadow-[#FFB020]/10'
                  : 'text-amber-200/90 border-amber-500/30 hover:bg-[#FFB020]/10 hover:border-[#FFB020]/50'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>Talent</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${talentOpen ? 'rotate-180' : ''}`} />
            </button>

            {talentOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-[#141A3E] border border-[#FFB020]/35 rounded-2xl shadow-2xl p-3.5 grid grid-cols-1 gap-1.5 z-50 backdrop-blur-xl">
                <div className="px-3 py-1.5 border-b border-white/10 text-xs font-mono text-[#FFB020] uppercase tracking-wider font-bold">
                  Work With Tersan Tech
                </div>

                <button
                  onClick={() => {
                    setTalentOpen(false);
                    navigate('/careers');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group flex items-start gap-3"
                >
                  <Briefcase className="w-4 h-4 text-slate-300 group-hover:text-[#FFB020] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-[#FFB020] text-sm flex items-center justify-between">
                      <span>Full-Time Careers</span>
                      <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-1.5 py-0.5 rounded">
                        5 Openings
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Salaried engineering &amp; principal architect roles</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setTalentOpen(false);
                    navigate('/join-freelancer-network');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/30 hover:bg-[#FFB020]/20 transition-colors group flex items-start gap-3"
                >
                  <Sparkles className="w-4 h-4 text-[#FFB020] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="text-[#FFB020] font-medium text-sm flex items-center justify-between">
                      <span>Join Freelancer Network</span>
                      <span className="text-[10px] font-mono bg-[#FFB020] text-black px-1.5 py-0.5 rounded font-bold">
                        APPLY
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">Vetted project matches &amp; transparent client rates</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setTalentOpen(false);
                    navigate('/talent');
                  }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group flex items-start gap-3"
                >
                  <Eye className="w-4 h-4 text-slate-300 group-hover:text-[#22D3D8] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-medium group-hover:text-[#22D3D8] text-sm">
                      Talent Showcase
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Browse verified profiles of vetted specialists</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setTalentOpen(false);
                    navigate('/application-status');
                  }}
                  className="text-left px-3 py-2 rounded-xl hover:bg-white/5 transition-colors border-t border-white/5 text-xs text-slate-300 hover:text-white flex items-center gap-2 mt-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                  <span>Check Application Status Tracker</span>
                </button>
              </div>
            )}
          </div>

          {/* More Company Links */}
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => {
                setCompanyOpen(!companyOpen);
                setServicesOpen(false);
                setTalentOpen(false);
              }}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 flex items-center gap-1 transition-all text-xs font-semibold tracking-wide uppercase"
            >
              <span>More</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
            </button>

            {companyOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#141A3E] border border-white/15 rounded-2xl shadow-2xl p-2.5 grid grid-cols-1 gap-1 z-50 backdrop-blur-xl">
                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/about');
                  }}
                  className="text-left px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2.5"
                >
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>About Tersan Tech</span>
                </button>

                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/success-stories');
                  }}
                  className="text-left px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2.5"
                >
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Client Success Stories</span>
                </button>

                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/partners');
                  }}
                  className="text-left px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2.5"
                >
                  <Layers className="w-4 h-4 text-slate-400" />
                  <span>Technology Ecosystem</span>
                </button>

                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/resources');
                  }}
                  className="text-left px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2.5"
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Engineering Journal</span>
                </button>

                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/faqs');
                  }}
                  className="text-left px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2.5"
                >
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>Frequently Asked Questions</span>
                </button>

                <button
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate('/contact');
                  }}
                  className="text-left px-3 py-2 text-sm text-[#22D3D8] hover:bg-[#22D3D8]/10 rounded-lg font-medium flex items-center gap-2.5 mt-1 border-t border-white/5 pt-2"
                >
                  <Mail className="w-4 h-4 text-[#22D3D8]" />
                  <span>Direct Contact</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right Header Actions: Theme Toggle & Dual CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2.5 rounded-xl border border-white/10 hover:border-[#22D3D8]/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center focus:outline-none"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFB020]" />
            ) : (
              <Moon className="w-4 h-4 text-[#0E1330]" />
            )}
          </button>

          <button
            onClick={() => navigate('/join-freelancer-network')}
            className="px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl border border-[#FFB020] text-[#FFB020] hover:bg-[#FFB020] hover:text-black transition-all"
          >
            Join Talent Network
          </button>

          <button
            onClick={() => navigate('/book-a-call')}
            className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-[#22D3D8] text-[#0E1330] hover:bg-[#1AB8BC] shadow-lg shadow-[#22D3D8]/20 transition-all flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu and toggle trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFB020]" />
            ) : (
              <Moon className="w-4 h-4 text-[#0E1330]" />
            )}
          </button>

          <button
            onClick={() => navigate('/book-a-call')}
            className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#22D3D8] text-[#0E1330]"
          >
            Consult
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080B1D] border-b border-white/10 px-5 py-6 max-h-[85vh] overflow-y-auto space-y-5">
          {/* Dual CTAs in mobile */}
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-white/10">
            <button
              onClick={() => navigate('/book-a-call')}
              className="w-full py-2.5 text-xs font-bold text-center bg-[#22D3D8] text-[#0E1330] rounded-xl flex items-center justify-center gap-1.5"
            >
              <span>Book Call</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => navigate('/join-freelancer-network')}
              className="w-full py-2.5 text-xs font-bold text-center bg-[#FFB020] text-black rounded-xl"
            >
              Join Talent Network
            </button>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider px-2 py-1">
              Client Solutions
            </div>
            <button
              onClick={() => navigate('/services')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg flex items-center justify-between"
            >
              <span>All Engineering Practices</span>
              <ArrowRight className="w-4 h-4 text-[#22D3D8]" />
            </button>
            <button
              onClick={() => navigate('/industries')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Regulated Industries
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Case Studies &amp; Outcomes
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Pricing &amp; Engagement Models
            </button>
            <button
              onClick={() => navigate('/how-we-deliver')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Our Delivery Process
            </button>
            <button
              onClick={() => navigate('/estimate')}
              className="w-full text-left px-3 py-2 text-sm text-[#22D3D8] hover:bg-white/5 rounded-lg font-medium flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Interactive Cost Estimator</span>
            </button>
          </div>

          <div className="space-y-1 pt-3 border-t border-white/10">
            <div className="text-xs font-mono text-[#FFB020] uppercase tracking-wider px-2 py-1">
              Talent Ecosystem
            </div>
            <button
              onClick={() => navigate('/careers')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Full-Time Careers
            </button>
            <button
              onClick={() => navigate('/join-freelancer-network')}
              className="w-full text-left px-3 py-2 text-sm text-[#FFB020] font-medium hover:bg-white/5 rounded-lg flex items-center justify-between"
            >
              <span>Join Freelancer Network</span>
              <span className="text-[10px] font-mono bg-[#FFB020] text-black px-1.5 py-0.5 rounded font-bold">
                APPLY
              </span>
            </button>
            <button
              onClick={() => navigate('/talent')}
              className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-lg"
            >
              Talent Showcase Profiles
            </button>
            <button
              onClick={() => navigate('/application-status')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 rounded-lg"
            >
              Application Status Tracker
            </button>
          </div>

          <div className="space-y-1 pt-3 border-t border-white/10">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider px-2 py-1">Company</div>
            <button
              onClick={() => navigate('/about')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              About Tersan Tech
            </button>
            <button
              onClick={() => navigate('/success-stories')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Client Success Stories
            </button>
            <button
              onClick={() => navigate('/partners')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Partners &amp; Ecosystem
            </button>
            <button
              onClick={() => navigate('/resources')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Engineering Journal
            </button>
            <button
              onClick={() => navigate('/faqs')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              FAQ
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <button onClick={() => navigate('/portal/client')} className="hover:text-white">
              Client Portal
            </button>
            <button onClick={() => navigate('/portal/team')} className="text-[#FFB020] hover:underline">
              Team Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
