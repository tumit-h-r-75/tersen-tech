import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Users,
} from 'lucide-react';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';

interface VideoBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoBriefingModal: React.FC<VideoBriefingModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28);
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    { id: 0, title: '01. In-House Architectural Core', time: '0:00 - 0:24', progress: 0 },
    { id: 1, title: '02. Vetted Top-3% Talent Pods', time: '0:25 - 0:48', progress: 28 },
    { id: 2, title: '03. Zero-Downtime Multi-Cloud Delivery', time: '0:49 - 1:12', progress: 56 },
    { id: 3, title: '04. SOC 2 & Client IP Protection', time: '1:13 - 1:30', progress: 82 },
  ];

  useEffect(() => {
    if (!isOpen) return;

    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          const next = prev + 1;
          if (next < 25) setActiveChapter(0);
          else if (next < 55) setActiveChapter(1);
          else if (next < 80) setActiveChapter(2);
          else setActiveChapter(3);
          return next;
        });
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0E1330] preserve-dark-bg border border-[#22D3D8]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141A3E] preserve-dark-bg">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22D3D8] animate-pulse"></span>
            <div>
              <h3 className="font-heading font-bold text-sm text-white preserve-light-text flex items-center gap-2">
                <span>Tersan Tech Architectural Briefing</span>
                <span className="text-[10px] font-mono uppercase bg-[#22D3D8]/10 text-[#22D3D8] px-2 py-0.5 rounded border border-[#22D3D8]/30">
                  90-Second Briefing
                </span>
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                System Overview: Hybrid Delivery Model &amp; Guaranteed Production SLA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-[#080B1D] overflow-hidden group">
          <img
            src={techCommandCenterImg}
            alt="Tersan Tech Command Center Video Stream"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />

          {/* Animated Waveform & HUD Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B1D] via-transparent to-[#080B1D]/40 pointer-events-none"></div>

          {/* Top Live Telemetry Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none">
            <div className="flex items-center gap-2 bg-[#080B1D]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>FEED: SECURE-POD-PRIMARY [LIVE 4K]</span>
            </div>
            <div className="flex items-center gap-2 bg-[#080B1D]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[#22D3D8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SOC 2 TYPE II COMPLIANT</span>
            </div>
          </div>

          {/* Center Play Button Overlay if paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-[#22D3D8] text-[#0E1330] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
          )}

          {/* Active Chapter Callout */}
          <div className="absolute bottom-16 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div className="bg-[#0E1330]/90 border border-white/15 p-3.5 rounded-xl backdrop-blur-md max-w-md">
              <div className="text-[10px] font-mono uppercase text-[#22D3D8] mb-1">
                Active Topic // {chapters[activeChapter].time}
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                {chapters[activeChapter].title}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {activeChapter === 0 && 'In-house Principal Architects direct technical discovery, data schemas, and zero-trust security postures.'}
                {activeChapter === 1 && 'Top-3% vetted domain specialists embed within your Jira/GitHub workflows within 48 hours.'}
                {activeChapter === 2 && 'Continuous deployment pipelines with blue/green cutovers, multi-cloud redundancy, and 99.99% uptime.'}
                {activeChapter === 3 && '100% intellectual property ownership assigned day one with comprehensive SOC 2 & HIPAA audit trails.'}
              </p>
            </div>

            {/* Audio equalizer visualization */}
            <div className="hidden sm:flex items-center gap-1 bg-[#080B1D]/80 px-3 py-2 rounded-xl border border-white/10">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#22D3D8] rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${(h * (isPlaying ? Math.random() * 0.6 + 0.4 : 0.2)).toFixed(0)}px` : '4px',
                    maxHeight: '28px',
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono text-slate-300">
                0:{String(Math.floor((progress / 100) * 90)).padStart(2, '0')} / 1:30
              </span>
            </div>

            {/* Progress Scrubber */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.round((clickX / rect.width) * 100);
                setProgress(newProgress);
              }}
              className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
            >
              <div
                className="h-full bg-gradient-to-r from-[#22D3D8] to-[#FFB020] rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button
              onClick={() => {}}
              className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chapter Selectors */}
        <div className="p-4 bg-[#141A3E] preserve-dark-bg border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {chapters.map((chap) => (
            <button
              key={chap.id}
              onClick={() => {
                setActiveChapter(chap.id);
                setProgress(chap.progress);
                setIsPlaying(true);
              }}
              className={`p-2.5 rounded-xl text-left transition-all border ${
                activeChapter === chap.id
                  ? 'bg-[#080B1D] preserve-dark-bg border-[#22D3D8] text-white preserve-light-text shadow-lg'
                  : 'bg-[#0E1330]/50 preserve-dark-bg border-white/5 text-slate-400 hover:text-white hover:border-white/15'
              }`}
            >
              <div className="text-[10px] font-mono text-[#22D3D8]">{chap.time}</div>
              <div className="text-xs font-semibold truncate mt-0.5">{chap.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
