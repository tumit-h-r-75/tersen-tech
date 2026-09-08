import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BLOG_POSTS_DATA } from '../data/mockData';
import {
  FileText,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Enterprise Cloud',
    'AI & Machine Learning',
    'Cybersecurity',
    'Engineering Leadership',
    'Talent Ecosystem',
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <FileText className="w-3.5 h-3.5" />
            Engineering Insights &amp; Technical Analysis
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            The Tersan Engineering Journal
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth architectural teardowns, production incident post-mortems, and technical management analyses authored directly by our in-house architects and vetted specialist network.
          </p>
        </div>

        {/* Filter Strip */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
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

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full bg-[#080B1D] border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => navigate(`/resources/${post.slug}`)}
              className="bg-[#141A3E] border border-white/10 hover:border-[#22D3D8]/40 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#080B1D] text-[#22D3D8] border border-[#22D3D8]/30">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#22D3D8] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#080B1D] text-[10px] font-mono text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-[#080B1D] border border-white/20 flex items-center justify-center font-bold text-[10px] text-[#22D3D8]">
                    {post.author.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-slate-300 text-xs">{post.author.name}</span>
                </div>
                <span className="text-xs text-[#22D3D8] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
