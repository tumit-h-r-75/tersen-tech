import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { JOB_POSTINGS_DATA } from '../data/mockData';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Upload,
  ShieldCheck,
  DollarSign,
} from 'lucide-react';

interface JobDetailPageProps {
  slug: string;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ slug }) => {
  const { submitApplication, showToast, navigate } = useNavigation();

  const job = JOB_POSTINGS_DATA.find((j) => j.slug === slug) || JOB_POSTINGS_DATA[0];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFileName, setResumeFileName] = useState('Senior_Resume.pdf');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
      showToast(`Resume "${e.target.files[0].name}" attached`);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const newId = submitApplication({
      type: 'job',
      fullName,
      email,
      phone,
      roleOrCategory: job.title,
      notes: `Applied for ${job.title} (${job.department}) with resume ${resumeFileName}.`,
    });

    setSubmittedId(newId);
    showToast(`Application submitted! Reference ID: ${newId}`);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => navigate('/careers')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Open Careers</span>
        </button>

        {/* Job Header */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30">
              {job.department}
            </span>
            <span className="px-3 py-1 rounded text-xs font-mono bg-white/10 text-slate-300">
              {job.experienceLevel}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFB020]" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFB020]" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <DollarSign className="w-4 h-4" />
              <span>{job.salaryRange}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Job Details + Sticky Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-8 text-slate-300 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-bold font-heading text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                About the Role
              </h2>
              <p className="text-slate-300">{job.overview}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold font-heading text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                Key Responsibilities
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold font-heading text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                Required Qualifications
              </h2>
              <ul className="space-y-2">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold font-heading text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Benefits &amp; Perks
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#141A3E]/60 border border-white/10 text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#141A3E] border border-white/15 rounded-2xl p-6 shadow-2xl">
              {submittedId ? (
                <div className="text-center space-y-4 py-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#FFB020]/20 text-[#FFB020] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Application Received!</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Thank you, {fullName}. Your application has been logged under reference:
                  </p>
                  <div className="p-3 bg-[#080B1D] rounded-lg font-mono text-sm text-[#FFB020] font-bold border border-[#FFB020]/30">
                    {submittedId}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    A confirmation email was sent to {email}. You can track this application in our transparency tracker.
                  </p>
                  <button
                    onClick={() => navigate('/status')}
                    className="w-full py-2.5 rounded-lg bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15]"
                  >
                    Check Status Now
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="font-heading font-bold text-base text-white">Apply for this Position</h3>
                    <p className="text-xs text-slate-400">Fast review — response guaranteed in 3 days.</p>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Wright"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">LinkedIn / Portfolio URL</label>
                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/alex"
                      className="w-full bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    />
                  </div>

                  {/* Resume Upload mock */}
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Resume / CV (PDF, DOCX)</label>
                    <div className="border border-dashed border-white/20 rounded-lg p-3 text-center bg-[#080B1D]/50">
                      <Upload className="w-5 h-5 text-[#FFB020] mx-auto mb-1" />
                      <span className="text-[11px] text-slate-300 block font-mono">
                        {resumeFileName}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="job-resume-upload"
                      />
                      <label
                        htmlFor="job-resume-upload"
                        className="inline-block mt-2 px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white cursor-pointer"
                      >
                        Change File
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Brief Note or Relevant Accomplishment
                    </label>
                    <textarea
                      rows={3}
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Highlight a relevant project, tech stack, or why you're interested..."
                      className="w-full bg-[#080B1D] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB020]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#FFB020] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E59B15] shadow-lg shadow-[#FFB020]/20 flex items-center justify-center gap-1.5"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Equal opportunity employer • Confidential</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
