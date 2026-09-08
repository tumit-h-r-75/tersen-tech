import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ShieldCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  ArrowLeft,
  Users,
  DollarSign,
  Clock,
  Briefcase,
  FileCode,
  Globe,
  Sparkles,
} from 'lucide-react';

export const JoinFreelancerPage: React.FC = () => {
  const { submitApplication, showToast, navigate } = useNavigation();

  const [currentStep, setCurrentStep] = useState(1);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    phone: '',
    location: '',
    timezone: 'EST (UTC-5)',
    // Step 2: Skill Categories
    selectedCategories: ['Web & App Development'],
    primarySpecialty: 'Full-Stack React & Go',
    // Step 3: Experience & Portfolio
    yearsExperience: '5-7 years',
    portfolioUrl: '',
    githubUrl: '',
    resumeFileName: 'Resume_CV_Specialist.pdf',
    // Step 4: Availability & Rates
    weeklyHours: '20-30 hrs/week',
    engagementType: 'Project-based Milestones',
    hourlyRate: '$120',
    // Step 5: Vetting Question
    technicalChallengeAnswer: '',
  });

  const categoryList = [
    'Web & App Development',
    'Cloud Architecture & Infrastructure',
    'Emerging Tech & AI / ML',
    'UI/UX & Product Design',
    'Quality Assurance & Pen-Testing',
    'Enterprise ERP & Business Systems',
    'Technical SEO & Growth',
    'Blockchain & Cryptography',
  ];

  const handleCategoryToggle = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.selectedCategories.includes(cat);
      const updated = exists
        ? prev.selectedCategories.filter((c) => c !== cat)
        : [...prev.selectedCategories, cat];
      return {
        ...prev,
        selectedCategories: updated.length > 0 ? updated : [cat],
      };
    });
  };

  const handleResumeFileMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resumeFileName: e.target.files![0].name,
      }));
      showToast(`Uploaded ${e.target.files[0].name}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    const newId = submitApplication({
      type: 'freelancer',
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || '+1 (555) 000-0000',
      roleOrCategory: formData.selectedCategories.join(', '),
      notes: `Applied with rate expectation ${formData.hourlyRate}/hr. Initial screening triggered.`,
    });

    setSubmittedId(newId);
    showToast(`Application ${newId} submitted successfully!`);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#FFB020] bg-[#FFB020]/10 border border-[#FFB020]/30 mb-4">
            <Users className="w-3.5 h-3.5" />
            Join the Tersan Tech Talent Network
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Elite Projects. Zero Platform Fees. Prompt Payouts.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We partner with senior freelance engineers, architects, and designers to deliver high-impact enterprise B2B projects. Retain your autonomy while working with a supportive in-house technical team.
          </p>
        </div>

        {/* Benefits Strip (Amber accents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#141A3E]/70 border border-[#FFB020]/20 rounded-xl p-5 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mb-3">
              <DollarSign className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Set Your Own Rates</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We bill clients transparently. You receive 100% of your agreed hourly or milestone rate with guaranteed net-15 payouts.
            </p>
          </div>
          <div className="bg-[#141A3E]/70 border border-[#FFB020]/20 rounded-xl p-5 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mb-3">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Pre-Scoped Enterprise Work</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No scope-creep nightmares. Every project is architected, specified, and protected by our in-house Technical Leads.
            </p>
          </div>
          <div className="bg-[#141A3E]/70 border border-[#FFB020]/20 rounded-xl p-5 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Peer Respect &amp; Community</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Work alongside senior engineers who respect your expertise. Participate in invite-only technical teardowns and summits.
            </p>
          </div>
        </div>

        {/* Multi-Step Application Form Card */}
        {submittedId ? (
          <div className="bg-[#141A3E] border border-[#FFB020]/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FFB020]/20 border border-[#FFB020] flex items-center justify-center mx-auto text-[#FFB020]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFB020]">
                Application Successfully Received
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                Welcome to the Talent Network Evaluation Pipeline
              </h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
                Your application has been registered with reference ID{' '}
                <span className="font-mono text-[#FFB020] font-bold">{submittedId}</span>. A confirmation notification has been sent to{' '}
                <span className="text-white font-semibold">{formData.email}</span>.
              </p>
            </div>

            {/* Next Steps Card */}
            <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6 max-w-md mx-auto text-left space-y-3 text-xs">
              <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px] mb-2 text-[#FFB020]">
                Next Steps &amp; Review Schedule
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFB020]/20 text-[#FFB020] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <span className="text-slate-300">
                  Our Talent Operations team will review your portfolio and code links within <strong>2 business days</strong>.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFB020]/20 text-[#FFB020] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <span className="text-slate-300">
                  Qualified applicants receive an invitation to a 90-minute live architectural discussion with one of our in-house Technical Leads.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFB020]/20 text-[#FFB020] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <span className="text-slate-300">
                  Once verified, your profile enters our active project matching engine for relevant B2B enterprise client mandates.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/status')}
                className="px-6 py-3 rounded-xl bg-[#FFB020] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E59B15] flex items-center justify-center gap-2"
              >
                <span>Track Application Status</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/talent')}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider"
              >
                View Talent Showcase
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#141A3E] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="text-[#FFB020] font-semibold">Step {currentStep} of 6</span>
                <span>
                  {currentStep === 1 && '1. Basic Information'}
                  {currentStep === 2 && '2. Skill Categories'}
                  {currentStep === 3 && '3. Experience & Portfolio'}
                  {currentStep === 4 && '4. Availability & Rates'}
                  {currentStep === 5 && '5. Technical Vetting Sample'}
                  {currentStep === 6 && '6. Review & Submit'}
                </span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFB020] transition-all duration-300"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* STEP 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    1. Basic Contact Information
                  </h3>
                  <p className="text-xs text-slate-400">
                    Let us know who you are and where you're based.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@engineer.dev"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Location &amp; Primary Timezone *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Toronto, Canada (EST)"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                </div>

                <div className="pt-6 flex justify-end border-t border-white/10">
                  <button
                    type="button"
                    disabled={!formData.fullName || !formData.email}
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <span>Next: Select Skills</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Skill Category Selection */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    2. Select Your Core Skill Categories
                  </h3>
                  <p className="text-xs text-slate-400">
                    Choose one or more categories that reflect your deepest production mastery.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categoryList.map((cat) => {
                    const isChecked = formData.selectedCategories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategoryToggle(cat)}
                        className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#0E1330] border-[#FFB020] text-white shadow-md shadow-[#FFB020]/10'
                            : 'bg-[#080B1D]/60 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs font-semibold">{cat}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-[#FFB020] border-[#FFB020] text-black' : 'border-slate-500'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Primary Specialty Summary</label>
                  <input
                    type="text"
                    value={formData.primarySpecialty}
                    onChange={(e) => setFormData({ ...formData, primarySpecialty: e.target.value })}
                    placeholder="e.g. Lead Kubernetes Architect & Terraform Specialist"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                  />
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] flex items-center gap-2"
                  >
                    <span>Next: Portfolio &amp; Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Experience & Portfolio */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    3. Experience, Portfolio &amp; Code Repositories
                  </h3>
                  <p className="text-xs text-slate-400">
                    We evaluate concrete past work rather than buzzwords.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Years of Senior Experience *</label>
                    <select
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFB020]"
                    >
                      <option value="3-5 years">3–5 years</option>
                      <option value="5-7 years">5–7 years (Senior)</option>
                      <option value="8-10 years">8–10 years (Lead)</option>
                      <option value="10+ years">10+ years (Principal / Architect)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Portfolio or Personal Website URL</label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://yourportfolio.dev"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    GitHub / GitLab / Behance / Dribbble Profile Link
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://github.com/username or https://dribbble.com/username"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                  />
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Resume / CV Upload (PDF, DOCX)</label>
                  <div className="border-2 border-dashed border-white/20 hover:border-[#FFB020]/50 rounded-xl p-6 text-center bg-[#080B1D]/40 transition-colors">
                    <Upload className="w-8 h-8 text-[#FFB020] mx-auto mb-2" />
                    <span className="text-xs text-slate-300 font-medium block">
                      {formData.resumeFileName ? (
                        <span className="text-[#FFB020] font-mono">{formData.resumeFileName} (Attached)</span>
                      ) : (
                        'Click to upload or drag & drop your resume file'
                      )}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">PDF or DOCX up to 10MB</span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={handleResumeFileMock}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="inline-block mt-3 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold cursor-pointer text-white"
                    >
                      Choose File
                    </label>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] flex items-center gap-2"
                  >
                    <span>Next: Availability &amp; Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Availability & Rates */}
            {currentStep === 4 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    4. Availability &amp; Rate Expectations
                  </h3>
                  <p className="text-xs text-slate-400">
                    Transparent expectations make project matching fast and friction-free.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Weekly Bandwidth Available *</label>
                    <select
                      value={formData.weeklyHours}
                      onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFB020]"
                    >
                      <option value="10-15 hrs/week">10–15 hrs/week (Nights &amp; Weekends)</option>
                      <option value="20-30 hrs/week">20–30 hrs/week (Part-Time Contract)</option>
                      <option value="35-40 hrs/week">35–40 hrs/week (Full-Time Dedicated)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Hourly Target Rate (USD/hr) *</label>
                    <input
                      type="text"
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                      placeholder="$120/hr"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Preferred Engagement Types</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Project-based Milestones', 'Dedicated Monthly Retainer', 'Ad-hoc Advisory'].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, engagementType: type })}
                          className={`p-3 rounded-xl border text-xs text-left font-medium transition-all ${
                            formData.engagementType === type
                              ? 'bg-[#0E1330] border-[#FFB020] text-white ring-1 ring-[#FFB020]'
                              : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="px-6 py-3 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] flex items-center gap-2"
                  >
                    <span>Next: Vetting Sample</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Vetting Question */}
            {currentStep === 5 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    5. Technical Thought-Process Sample
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Briefly describe a challenging architectural problem or technical failure you diagnosed and resolved in production.
                  </p>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Your Case Study or Technical Response (2-4 paragraphs)
                  </label>
                  <textarea
                    rows={5}
                    value={formData.technicalChallengeAnswer}
                    onChange={(e) => setFormData({ ...formData, technicalChallengeAnswer: e.target.value })}
                    placeholder="e.g. Diagnosed a Postgres connection pool starvation under peak traffic. Implemented PgBouncer, optimized composite indexes, and added read-replica query routing..."
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                  ></textarea>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(6)}
                    className="px-6 py-3 rounded-xl bg-[#FFB020] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E59B15] flex items-center gap-2"
                  >
                    <span>Review &amp; Submit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 6: Review & Submit */}
            {currentStep === 6 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    6. Final Review &amp; Confirmation
                  </h3>
                  <p className="text-xs text-slate-400">
                    Verify your application details before dispatching to our Talent Operations team.
                  </p>
                </div>

                {/* Summary Table */}
                <div className="bg-[#080B1D] border border-white/10 rounded-xl p-5 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Candidate Name</span>
                    <span className="text-white font-bold">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Contact Email</span>
                    <span className="text-[#FFB020]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Categories</span>
                    <span className="text-white">{formData.selectedCategories.join(', ')}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Target Rate</span>
                    <span className="text-emerald-400 font-bold">{formData.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Resume Attached</span>
                    <span className="text-slate-200">{formData.resumeFileName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB020]" />
                  <span>
                    By submitting, you agree to our standard mutual NDA and terms for freelance network members.
                  </span>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold uppercase text-slate-300 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center gap-2"
                  >
                    <span>Submit Network Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
