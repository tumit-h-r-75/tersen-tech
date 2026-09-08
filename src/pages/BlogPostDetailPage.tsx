import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BLOG_POSTS_DATA } from '../data/mockData';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
} from 'lucide-react';

interface BlogPostDetailPageProps {
  slug: string;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({ slug }) => {
  const { navigate, showToast } = useNavigation();

  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Article URL copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => navigate('/resources')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Engineering Journal</span>
        </button>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#22D3D8]/10 text-[#22D3D8] border border-[#22D3D8]/30">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <div className="w-9 h-9 rounded-full bg-[#141A3E] border border-white/20 flex items-center justify-center font-bold text-[#22D3D8]">
                {post.author.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <span className="font-bold text-white block">{post.author.name}</span>
                <span className="text-[11px] text-slate-400">{post.author.role}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141A3E] border border-white/10 hover:border-[#22D3D8] text-xs font-mono text-slate-300 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-slate-300 text-base leading-relaxed mb-10">
          <p className="text-lg font-medium text-white border-l-4 border-[#22D3D8] pl-4 italic">
            "{post.excerpt}"
          </p>

          {post.content && post.content.length > 0 ? (
            post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p>
              When engineering distributed systems at enterprise scale, teams frequently confront architectural trade-offs between speed-of-delivery and long-term maintainability. In this technical analysis, we dissect the core considerations that dictate whether an organization should adopt dedicated in-house pods or augmented specialist cohorts.
            </p>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#080B1D] border border-white/10 text-xs font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#080B1D] border border-[#22D3D8]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-white">Need architecture advisory on this topic?</h4>
            <p className="text-xs text-slate-400 mt-1">
              Book a 30-minute deep-dive with our Principal Solutions Architects.
            </p>
          </div>
          <button
            onClick={() => navigate('/book-a-call')}
            className="px-6 py-3 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC] whitespace-nowrap"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
