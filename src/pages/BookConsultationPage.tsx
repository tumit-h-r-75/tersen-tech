import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle2,
  ShieldCheck,
  User,
  Mail,
  Building,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const BookConsultationPage: React.FC = () => {
  const { showToast, navigate } = useNavigation();

  const [selectedDate, setSelectedDate] = useState<string>('2026-09-15');
  const [selectedTime, setSelectedTime] = useState<string>('14:00 EST');
  const [serviceFocus, setServiceFocus] = useState<string>('Web & App Development');
  const [engagementType, setEngagementType] = useState<string>('New Project Build');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const availableDates = [
    { date: '2026-09-15', label: 'Tuesday, Sep 15' },
    { date: '2026-09-16', label: 'Wednesday, Sep 16' },
    { date: '2026-09-17', label: 'Thursday, Sep 17' },
    { date: '2026-09-18', label: 'Friday, Sep 18' },
    { date: '2026-09-21', label: 'Monday, Sep 21' },
    { date: '2026-09-22', label: 'Tuesday, Sep 22' },
  ];

  const timeSlots = [
    '09:30 EST',
    '11:00 EST',
    '13:30 EST',
    '14:00 EST',
    '15:30 EST',
    '16:30 EST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsBooked(true);
    showToast(`Consultation confirmed for ${fullName}! Calendar invite sent.`);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <Video className="w-3.5 h-3.5" />
            Direct Architectural Consultation
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Book a Technical Consultation
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Meet directly with one of our in-house Principal Solutions Architects. We will evaluate your technical feasibility, estimate timelines, and discuss team composition.
          </p>
        </div>

        {isBooked ? (
          <div className="bg-[#141A3E] border border-[#22D3D8]/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#22D3D8]/20 border border-[#22D3D8] flex items-center justify-center mx-auto text-[#22D3D8]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#22D3D8]">
                Consultation Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                We look forward to speaking with you, {fullName}
              </h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
                A calendar invitation with private Google Meet video conferencing details has been dispatched to{' '}
                <span className="text-white font-medium">{email}</span>.
              </p>
            </div>

            {/* Appointment Card */}
            <div className="bg-[#080B1D] border border-white/10 rounded-xl p-6 max-w-md mx-auto text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Date &amp; Time</span>
                <span className="text-[#22D3D8] font-bold">
                  {availableDates.find((d) => d.date === selectedDate)?.label || selectedDate} @ {selectedTime}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Company</span>
                <span className="text-white">{company || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Capability Focus</span>
                <span className="text-white">{serviceFocus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Attendee Host</span>
                <span className="text-white">Principal Solutions Architect</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/services')}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Explore Services Meanwhile
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] text-xs font-bold uppercase tracking-wider hover:bg-[#1AB8BC]"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Step 1: Date & Time selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
                <CalendarIcon className="w-4 h-4 text-[#22D3D8]" />
                <span>1. Select Date</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {availableDates.map((item) => (
                  <button
                    key={item.date}
                    type="button"
                    onClick={() => setSelectedDate(item.date)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedDate === item.date
                        ? 'bg-[#0E1330] border-[#22D3D8] text-white shadow-md shadow-[#22D3D8]/10 ring-1 ring-[#22D3D8]'
                        : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[11px] font-mono text-slate-400">{item.label.split(',')[0]}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{item.label.split(',')[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#22D3D8]" />
                <span>2. Select Time Slot</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-2 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedTime === time
                        ? 'bg-[#22D3D8] border-[#22D3D8] text-[#0E1330] font-bold shadow-md shadow-[#22D3D8]/20'
                        : 'bg-[#080B1D]/60 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope Category */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
                3. Primary Technical Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {[
                  'Web & App Development',
                  'Cloud Architecture & Migration',
                  'Emerging Tech & AI',
                  'Quality & Cybersecurity',
                  'Dedicated Staff Augmentation',
                  'General Advisory & Scoping',
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setServiceFocus(s)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      serviceFocus === s
                        ? 'bg-[#0E1330] border-[#22D3D8] text-white'
                        : 'bg-[#080B1D]/60 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
                4. Your Contact Details
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Engagement Type</label>
                  <select
                    value={engagementType}
                    onChange={(e) => setEngagementType(e.target.value)}
                    className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22D3D8]"
                  >
                    <option value="New Project Build">New Project Build</option>
                    <option value="Staff Augmentation / Specialist">Staff Augmentation / Specialist</option>
                    <option value="Cloud Migration / DevOps">Cloud Migration / DevOps</option>
                    <option value="Security / SOC 2 Audit">Security / SOC 2 Audit</option>
                    <option value="Rescue / Code Audit">Rescue / Code Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Brief Overview of Objectives (Optional)
                </label>
                <textarea
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Share any context regarding stack, current blockers, or target launch dates..."
                  className="w-full bg-[#080B1D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
                ></textarea>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA protected • Direct architect consultation • No sales reps</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] shadow-xl shadow-[#22D3D8]/20 flex items-center justify-center gap-2"
              >
                <span>Confirm Video Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
