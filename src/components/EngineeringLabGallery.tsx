import React, { useState } from 'react';
import {
  Layers,
  ZoomIn,
  ShieldCheck,
  Cpu,
  Server,
  Activity,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
} from 'lucide-react';
import techCommandCenterImg from '../assets/images/tech_command_center_1788885108454.jpg';
import cloudAiMeshImg from '../assets/images/cloud_ai_mesh_1788885136538.jpg';
import engineeringTeamPodImg from '../assets/images/engineering_team_pod_1788885153209.jpg';

interface LabItem {
  id: string;
  title: string;
  category: 'Command & Ops' | 'Cloud & AI' | 'Engineering Pods' | 'Security & QA';
  image: string;
  badge: string;
  caption: string;
  specs: { label: string; value: string }[];
  tags: string[];
}

export const EngineeringLabGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<LabItem | null>(null);

  const labItems: LabItem[] = [
    {
      id: 'lab-1',
      title: 'Architectural Command Center & Live Telemetry',
      category: 'Command & Ops',
      image: techCommandCenterImg,
      badge: 'Mission-Critical Control',
      caption: 'Continuous 24/7 telemetry monitoring across AWS, GCP, and Kubernetes clusters powering 140+ enterprise deployments.',
      specs: [
        { label: 'Ingress Throughput', value: '1.2M req/sec' },
        { label: 'Median P99 Latency', value: '2.4 milliseconds' },
        { label: 'Uptime SLA Target', value: '99.999% Fault-Tolerant' },
      ],
      tags: ['Kafka', 'Kubernetes', 'Prometheus', 'Datadog', 'AWS Multi-Region'],
    },
    {
      id: 'lab-2',
      title: 'Enterprise Cloud AI & Neural Mesh Sandbox',
      category: 'Cloud & AI',
      image: cloudAiMeshImg,
      badge: 'Private LLM / RAG Pipelines',
      caption: 'Air-gapped enterprise machine learning infrastructure running inside private client VPCs with zero data leakage guarantees.',
      specs: [
        { label: 'Model Context Window', value: '1M+ Tokens' },
        { label: 'Vector Index Scale', value: '250M Embeddings' },
        { label: 'Data Leakage Risk', value: '0.00% Air-Gapped' },
      ],
      tags: ['PyTorch', 'Pinecone', 'vLLM', 'LangChain', 'Custom Fine-Tuning'],
    },
    {
      id: 'lab-3',
      title: 'Cross-Functional Engineering Pods in Action',
      category: 'Engineering Pods',
      image: engineeringTeamPodImg,
      badge: 'Collaborative Sprint Floor',
      caption: 'In-house Lead Architects pairing directly with vetted senior specialists during high-velocity 2-week agile delivery sprints.',
      specs: [
        { label: 'Talent Acceptance Rate', value: '<3% Vetted Specialists' },
        { label: 'Time to First PR', value: '<72 Hours' },
        { label: 'Code Review Cadence', value: '100% Peer + Lead Signed' },
      ],
      tags: ['TypeScript', 'React', 'Go', 'Figma Tokens', 'GitHub Actions'],
    },
    {
      id: 'lab-4',
      title: 'SOC 2 Type II Multi-Cloud Server Infrastructure',
      category: 'Security & QA',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      badge: 'Bank-Grade Hardening',
      caption: 'Automated Terraform Infrastructure-as-Code definitions enforcing zero-trust IAM, KMS envelope encryption, and immutable audit logs.',
      specs: [
        { label: 'Compliance Standards', value: 'SOC 2 Type II, HIPAA, PCI' },
        { label: 'Encryption Standard', value: 'AES-256-GCM / TLS 1.3' },
        { label: 'Disaster Recovery RTO', value: '<15 Minutes' },
      ],
      tags: ['Terraform IaC', 'AWS KMS', 'HashiCorp Vault', 'Zero-Trust IAM'],
    },
    {
      id: 'lab-5',
      title: 'High-Throughput Financial & IoT Telemetry Terminal',
      category: 'Command & Ops',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      badge: 'Real-Time Event Streams',
      caption: 'Stream processing architectures ingesting sensor data, automated trade executions, and GPS fleet telemetry with sub-second accuracy.',
      specs: [
        { label: 'Peak Data Rate', value: '85,000 events/sec' },
        { label: 'Data Retention', value: '7 Years Immutable' },
        { label: 'Failover Window', value: 'Active-Active Multi-AZ' },
      ],
      tags: ['Apache Kafka', 'Redis Cluster', 'ClickHouse', 'WebSocket Engine'],
    },
    {
      id: 'lab-6',
      title: 'Mobile, Tablet & IoT Device Verification Lab',
      category: 'Security & QA',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      badge: 'Hardware Rigor',
      caption: 'Automated end-to-end device matrix testing ensuring 120Hz fluid frame rates, offline-first sync consistency, and zero battery drain regressions.',
      specs: [
        { label: 'Target Device Matrix', value: '140+ iOS & Android Models' },
        { label: 'Automated E2E Suite', value: 'Playwright & Maestro' },
        { label: 'Crash-Free Sessions', value: '99.98% Monitored' },
      ],
      tags: ['React Native', 'Swift', 'Kotlin', 'Offline SQLite', 'Maestro E2E'],
    },
  ];

  const categories = ['All', 'Command & Ops', 'Cloud & AI', 'Engineering Pods', 'Security & QA'];

  const filteredItems = activeFilter === 'All'
    ? labItems
    : labItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F26] border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#22D3D8]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
              <Layers className="w-3.5 h-3.5" />
              Inside the Engineering Lab
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Where Mission-Critical Code Is Born
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Explore our physical and virtual infrastructure: from private multi-cloud command centers and AI compute clusters to collaborative engineering pods delivering enterprise resilience.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all border ${
                  activeFilter === cat
                    ? 'bg-[#22D3D8] text-[#0E1330] font-bold border-[#22D3D8] shadow-lg shadow-[#22D3D8]/20'
                    : 'bg-[#141A3E] text-slate-300 hover:text-white border-white/10 hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/50 rounded-2xl overflow-hidden cursor-pointer transition-all group flex flex-col justify-between shadow-2xl hover:-translate-y-1 duration-300"
            >
              {/* Image Banner with Zoom Indicator */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#080B1D]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141A3E] via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#080B1D]/80 text-[#22D3D8] border border-[#22D3D8]/30 backdrop-blur-md">
                    {item.badge}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#080B1D]/80 border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <ZoomIn className="w-3.5 h-3.5 text-[#22D3D8]" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3.5">
                  <span className="text-[11px] font-mono text-slate-300 bg-[#080B1D]/90 px-2 py-0.5 rounded border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#22D3D8] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {/* Micro Specs Bar */}
                <div>
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#080B1D] border border-white/5 mb-4">
                    {item.specs.slice(0, 2).map((s, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono text-slate-400">{s.label}</div>
                        <div className="text-xs font-bold text-emerald-400 font-heading truncate">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.tags.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-500">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Detail Lightbox / Spec Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#0E1330] border border-[#22D3D8]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141A3E]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-[#22D3D8]/10 text-[#22D3D8] px-2.5 py-0.5 rounded border border-[#22D3D8]/30">
                  {selectedItem.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Facility Spec // {selectedItem.badge}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-6">
              {/* Full Image */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#080B1D]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedItem.specs.map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#141A3E] border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">{spec.label}</div>
                    <div className="text-base font-bold font-heading text-[#22D3D8]">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                  Deployed Tooling &amp; Infrastructure
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#141A3E] text-xs font-mono text-white border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
