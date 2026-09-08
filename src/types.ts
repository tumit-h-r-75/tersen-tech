export type ServiceCategory =
  | 'Web & App Development'
  | 'Cloud & Infrastructure'
  | 'Emerging Tech'
  | 'Design'
  | 'Quality & Security'
  | 'Business Systems'
  | 'Growth'
  | 'Ongoing';

export interface ServiceDetail {
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  summary: string;
  included: string[];
  deliverables: string[];
  technologies: string[];
  processSteps: { title: string; desc: string }[];
  pricingTiers: { tier: string; startingAt: string; timeline: string; suitableFor: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudySlugs: string[];
}

export interface IndustryDetail {
  slug: string;
  name: string;
  subtitle: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  complianceSpecs: string[];
  relatedCaseStudySlugs: string[];
  stats: { metric: string; label: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceCategory: ServiceCategory;
  primaryService: string;
  technologies: string[];
  resultType: 'Speed & Scale' | 'Revenue Growth' | 'Cost Reduction' | 'AI Automation' | 'Security';
  heroMetric: string;
  heroMetricLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  teamComposition: string; // e.g. "Lead Cloud Architect (In-house) + 2 Kubernetes Specialists (Freelance Network)"
  duration: string;
  imageUrl?: string;
}

export interface JobPosting {
  slug: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Marketing' | 'Operations' | 'Product';
  location: 'Remote' | 'Hybrid (New York)' | 'Hybrid (London)' | 'On-site (San Francisco)';
  type: 'Full-time' | 'Contract-to-Hire' | 'Part-time';
  experienceLevel: 'Mid-Level' | 'Senior' | 'Staff/Principal';
  salaryRange: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  title: string;
  specialty: ServiceCategory;
  yearsExperience: number;
  location: string;
  timezone: string;
  hourlyRate: string;
  rating: number;
  projectsCompleted: number;
  topSkills: string[];
  bio: string;
  status: 'Available Now' | 'In Project' | 'Accepting Bookings';
  avatarSeed: string;
  avatarUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Enterprise Cloud' | 'AI & Machine Learning' | 'Cybersecurity' | 'Engineering Leadership' | 'Talent Ecosystem';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  publishDate: string;
  tags: string[];
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Services & Scoping' | 'Pricing & Contracts' | 'Working With Our Freelance Network' | 'Technical Standards' | 'Careers & Hiring';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  serviceUsed: string;
}

export interface ApplicationSubmission {
  id: string;
  type: 'job' | 'freelancer';
  fullName: string;
  email: string;
  phone: string;
  roleOrCategory: string;
  status: 'Under Review' | 'Shortlisted' | 'Technical Screening' | 'Offer Extended';
  submittedAt: string;
  notes?: string;
}
