import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { FAQS_DATA } from '../data/mockData';
import {
  HelpCircle,
  ChevronDown,
  Search,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS_DATA[0]?.question || null);

  const categories = [
    'All',
    'General & Governance',
    'Client Engagements & Pricing',
    'Talent & Freelancer Network',
    'Technical Standards & Stacks',
    'Security & Compliance',
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0E1330] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#22D3D8] bg-[#22D3D8]/10 border border-[#22D3D8]/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers on Delivery &amp; Talent
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our hybrid delivery framework, IP protection, billing, and vetted talent onboarding.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-[#141A3E] border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. IP ownership, trial period, rates)..."
              className="w-full bg-[#080B1D] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#22D3D8]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#22D3D8] text-[#0E1330] font-bold shadow-sm'
                    : 'bg-[#080B1D]/60 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openQuestion === faq.question;

              return (
                <div
                  key={idx}
                  className="bg-[#141A3E] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3D8] block mb-1">
                        {faq.category}
                      </span>
                      <span className="font-heading font-bold text-base text-white">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#22D3D8] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-[#141A3E] p-12 text-center rounded-xl text-slate-400">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#080B1D] border border-white/10 rounded-2xl p-8 text-center space-y-3">
          <MessageSquare className="w-8 h-8 text-[#22D3D8] mx-auto" />
          <h3 className="font-heading font-bold text-xl text-white">Still have a specific question?</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Our technical leadership team responds directly to inquiries within 4 business hours.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-xl bg-[#22D3D8] text-[#0E1330] font-bold text-xs uppercase tracking-wider hover:bg-[#1AB8BC]"
            >
              Contact Us Directly
            </button>
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider"
            >
              Book 15-Min Scoping Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
