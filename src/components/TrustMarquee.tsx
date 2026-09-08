import React from 'react';

export const TrustMarquee: React.FC = () => {
  const partners = [
    { name: 'Amazon Web Services', tag: 'Cloud Partner', code: 'AWS' },
    { name: 'Google Cloud Platform', tag: 'Premier Partner', code: 'GCP' },
    { name: 'Microsoft Azure', tag: 'Solutions Partner', code: 'AZURE' },
    { name: 'FinVault Capital', tag: 'Client ($350M AUM)', code: 'FINVAULT' },
    { name: 'Strata Freight', tag: '50k+ Fleet Assets', code: 'STRATA' },
    { name: 'OmniHealth Clinics', tag: 'Healthcare Network', code: 'OMNIHEALTH' },
    { name: 'Velox Luxury', tag: 'Next.js Flagship', code: 'VELOX' },
    { name: 'Snowflake Data Cloud', tag: 'Partner', code: 'SNOWFLAKE' },
    { name: 'Stripe Payments', tag: 'Verified Partner', code: 'STRIPE' },
    { name: 'Kubernetes Foundation', tag: 'Certified', code: 'K8S' },
    { name: 'Terraform HashiCorp', tag: 'Partner', code: 'TERRAFORM' },
  ];

  return (
    <div className="py-8 bg-[#080B1D] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Trusted by enterprise leaders &amp; powered by world-class cloud platforms
        </span>
      </div>

      <div className="flex space-x-8 animate-marquee whitespace-nowrap overflow-x-auto no-scrollbar py-2 px-4 justify-start sm:justify-center flex-wrap gap-y-3">
        {partners.map((p, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#141A3E]/60 border border-white/10 hover:border-[#22D3D8]/40 transition-colors"
          >
            <span className="font-mono text-xs font-bold text-[#22D3D8] bg-[#0E1330] px-2 py-0.5 rounded border border-[#22D3D8]/20">
              {p.code}
            </span>
            <span className="text-xs font-semibold text-slate-200">{p.name}</span>
            <span className="text-[10px] font-mono text-slate-400 hidden md:inline">({p.tag})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
