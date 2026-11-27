export interface EcosystemBrand {
  id: 'ai' | 'web' | 'app' | 'skill' | 'seo' | 'ui' | 'ux' | 'digital' | 'labs';
  name: string;
  category: string;
  description: string;
  subdomainLabel: string;
  url: string;
  accentColor: string;
  deploymentVerified: boolean;
}

export interface HeroStat {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  verified: boolean;
}

export interface MissionPillar {
  id: 'build' | 'learn' | 'innovate' | 'scale';
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  tagline: string;
  popular?: boolean;
  monthly: {
    currency: string;
    amount: string;
    unit: string;
    note: string;
  };
  perProject: {
    currency: string;
    amount: string;
    unit: string;
    note: string;
  };
  features: PricingFeature[];
  ctaLabel: string;
  suggestedServiceId?: string;
}

export interface QuoteServiceOption {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
}

export interface QuoteScaleOption {
  id: string;
  name: string;
  price: number;
  subtitle: string;
}

export interface QuoteFeatureOption {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  initial: string;
  avatarGradient: string;
  verifiedClientApproval: boolean;
}

export const ZENIC_CORPORATE = {
  brand: 'Zenic Group',
  domain: 'https://zenic.in',
  domainLabel: 'zenic.in',
  portfolioUrl: 'https://portfolio.zenic.in',
  portfolioDomainLabel: 'portfolio.zenic.in',
  email: 'hello@zenic.in',
  whatsappHref: 'https://wa.me/916364858361',
  instagramHref: 'https://instagram.com/zenic.group',
  logoOfficialPng: '/assets/aistudio/ChatGPT_Image_Jul_8__2026__01_23_20_PM_c74947ef.png',
  logoMonochromePng: '/assets/aistudio/zenicgroup_logo_66d18ced.png',
} as const;

export const CAL_BOOKING_CONFIG = {
  session15: {
    id: '15' as const,
    duration: '15',
    label: 'min · Quick intro',
    url: 'https://cal.com/zenic-group-erqwvg/15min?theme=dark&hideEventTypeDetails=0&layout=month_view',
    directUrl: 'https://cal.com/zenic-group-erqwvg/15min',
  },
  session30: {
    id: '30' as const,
    duration: '30',
    label: 'min · Deep dive',
    url: 'https://cal.com/zenic-group-erqwvg/30min?theme=dark&hideEventTypeDetails=0&layout=month_view',
    directUrl: 'https://cal.com/zenic-group-erqwvg/30min',
  },
};

export const HERO_STATS: HeroStat[] = [
  {
    id: 'sub-brands',
    value: '9',
    numericTarget: 9,
    suffix: '',
    label: 'Sub-brands',
    verified: true,
  },
  {
    id: 'projects',
    value: '50+',
    numericTarget: 50,
    suffix: '+',
    label: 'Projects Delivered',
    verified: false, // Retained from legacy corporate HTML; confirm exact audited count before production
  },
  {
    id: 'countries',
    value: '12+',
    numericTarget: 12,
    suffix: '+',
    label: 'Countries Served',
    verified: false, // Retained from legacy corporate HTML; confirm exact audited count before production
  },
  {
    id: 'satisfaction',
    value: '98%',
    numericTarget: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    verified: false, // Retained from legacy corporate HTML; confirm exact audited rate before production
  },
];

// All 9 ecosystem divisions on *.zenic.in verified live (HTTP 200).
export const ECOSYSTEM_BRANDS: EcosystemBrand[] = [
  {
    id: 'ai',
    name: 'Zenic AI',
    category: 'Artificial Intelligence',
    description:
      'Practical AI agents, intelligent automation systems and cutting-edge ML tooling for forward-thinking organisations.',
    subdomainLabel: 'ai.zenic.in',
    url: 'https://ai.zenic.in',
    accentColor: '#a78bfa',
    deploymentVerified: true,
  },
  {
    id: 'web',
    name: 'Webzenic',
    category: 'Web Dev',
    description:
      'Premium web design and full-stack digital experiences — from marketing sites to enterprise-grade platforms.',
    subdomainLabel: 'web.zenic.in',
    url: 'https://web.zenic.in',
    accentColor: '#60a5fa',
    deploymentVerified: true,
  },
  {
    id: 'app',
    name: 'Appzenic',
    category: 'Mobile & SaaS',
    description:
      'Custom web apps, mobile product studio engineering and bespoke software built for performance and scale.',
    subdomainLabel: 'app.zenic.in',
    url: 'https://app.zenic.in',
    accentColor: '#fb923c',
    deploymentVerified: true,
  },
  {
    id: 'skill',
    name: 'Skillzenic',
    category: 'EdTech',
    description:
      'Practical developer education with real-world labs, live projects and expert mentorship designed for modern learners.',
    subdomainLabel: 'skill.zenic.in',
    url: 'https://skill.zenic.in',
    accentColor: '#2dd4bf',
    deploymentVerified: true,
  },
  {
    id: 'seo',
    name: 'Zenic SEO',
    category: 'Search & Organic Growth',
    description:
      'Search strategy, technical SEO architecture and organic visibility systems built for sustainable search growth.',
    subdomainLabel: 'seo.zenic.in',
    url: 'https://seo.zenic.in',
    accentColor: '#34d399',
    deploymentVerified: true,
  },
  {
    id: 'ui',
    name: 'Zenic UI',
    category: 'Interface Design',
    description:
      'Digital interface design systems, refined typography and high-contrast visual craft for modern web products.',
    subdomainLabel: 'ui.zenic.in',
    url: 'https://ui.zenic.in',
    accentColor: '#38bdf8',
    deploymentVerified: true,
  },
  {
    id: 'ux',
    name: 'Zenic UX',
    category: 'User Experience',
    description:
      'User experience research, product thinking and structured customer journeys engineered for clarity and conversion.',
    subdomainLabel: 'ux.zenic.in',
    url: 'https://ux.zenic.in',
    accentColor: '#818cf8',
    deploymentVerified: true,
  },
  {
    id: 'digital',
    name: 'Zenic Digital',
    category: 'Marketing & Growth',
    description:
      'Performance marketing, brand positioning and full-funnel digital growth campaigns for ambitious businesses.',
    subdomainLabel: 'digital.zenic.in',
    url: 'https://digital.zenic.in',
    accentColor: '#f59e0b',
    deploymentVerified: true,
  },
  {
    id: 'labs',
    name: 'Zenic Labs',
    category: 'R&D',
    description:
      'Experimental studio technology, moonshot prototypes and applied research defining the next chapter of Zenic Group.',
    subdomainLabel: 'labs.zenic.in',
    url: 'https://labs.zenic.in',
    accentColor: '#f472b6',
    deploymentVerified: true,
  },
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 'build',
    title: 'Build Faster',
    description:
      'Developer platforms and tooling designed to radically accelerate the speed of creation and deployment.',
  },
  {
    id: 'learn',
    title: 'Learn Deeper',
    description:
      'Hands-on education with real projects and mentorship that genuinely prepares developers for the real world.',
  },
  {
    id: 'innovate',
    title: 'Innovate Boldly',
    description:
      'Research and experimental tech at Zenic Labs that shapes the future products and directions of the group.',
  },
  {
    id: 'scale',
    title: 'Scale Globally',
    description:
      'Infrastructure built to serve developers and businesses across India, UK and the rest of the world.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We understand your goals, challenges and vision in a focused 30-minute strategy session.',
  },
  {
    step: '02',
    title: 'Scoping & Proposal',
    description:
      'We scope the project, define deliverables and send a clear, transparent proposal — no surprises.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description:
      'Agile sprints, regular updates and collaborative feedback loops to keep everything aligned.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'Smooth go-live, knowledge transfer and ongoing post-launch support for lasting success.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for early-stage businesses',
    monthly: {
      currency: '₹',
      amount: '14,999',
      unit: '/mo',
      note: '~£140/mo · Billed monthly',
    },
    perProject: {
      currency: '₹',
      amount: '15,000',
      unit: ' onwards',
      note: 'One-time base · Web Design scope',
    },
    features: [
      { label: '1 active project', included: true },
      { label: 'Web design & development', included: true },
      { label: 'Up to 5 pages / screens', included: true },
      { label: 'Email support (48hr response)', included: true },
      { label: '1 revision round', included: true },
      { label: 'AI integration', included: false },
      { label: 'Priority support', included: false },
    ],
    ctaLabel: 'Get Started',
    suggestedServiceId: 'web-design',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing teams and products',
    popular: true,
    monthly: {
      currency: '₹',
      amount: '39,999',
      unit: '/mo',
      note: '~£375/mo · Billed monthly',
    },
    perProject: {
      currency: '₹',
      amount: '40,000',
      unit: ' onwards',
      note: 'One-time base · Web Application scope',
    },
    features: [
      { label: '3 concurrent projects', included: true },
      { label: 'Full-stack development', included: true },
      { label: 'Unlimited pages / screens', included: true },
      { label: 'Priority support (12hr response)', included: true },
      { label: '3 revision rounds', included: true },
      { label: 'Basic AI integration', included: true },
      { label: 'Monthly strategy call', included: true },
    ],
    ctaLabel: 'Start Building',
    suggestedServiceId: 'web-app',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large-scale organisations',
    monthly: {
      currency: '',
      amount: 'Custom',
      unit: '',
      note: 'Tailored scope · Dedicated team',
    },
    perProject: {
      currency: '',
      amount: 'Custom',
      unit: '',
      note: 'Milestone-based · Enterprise architecture',
    },
    features: [
      { label: 'Unlimited projects', included: true },
      { label: 'Dedicated dev team', included: true },
      { label: 'Custom AI & automation', included: true },
      { label: '24/7 premium support', included: true },
      { label: 'Unlimited revisions', included: true },
      { label: 'Weekly strategy sessions', included: true },
      { label: 'SLA guarantee', included: true },
    ],
    ctaLabel: 'Talk to Sales',
    suggestedServiceId: 'custom',
  },
];

export const QUOTE_SERVICES: QuoteServiceOption[] = [
  { id: 'web-design', name: 'Web Design', price: 15000, priceLabel: 'from ₹15,000' },
  { id: 'web-app', name: 'Web Application', price: 40000, priceLabel: 'from ₹40,000' },
  { id: 'mobile-app', name: 'Mobile App', price: 60000, priceLabel: 'from ₹60,000' },
  { id: 'ai-automation', name: 'AI & Automation', price: 50000, priceLabel: 'from ₹50,000' },
  { id: 'ecommerce', name: 'E-Commerce', price: 35000, priceLabel: 'from ₹35,000' },
  { id: 'custom', name: 'Custom Software', price: 25000, priceLabel: 'Custom pricing (from ₹25,000)' },
];

export const QUOTE_SCALES: QuoteScaleOption[] = [
  { id: 'small', name: 'Small', price: 0, subtitle: '1–5 pages · basic features' },
  { id: 'medium', name: 'Medium', price: 20000, subtitle: '5–20 pages · moderate complexity' },
  { id: 'large', name: 'Large', price: 50000, subtitle: '20+ pages · complex system' },
  { id: 'enterprise', name: 'Enterprise', price: 120000, subtitle: 'Full-scale platform' },
];

export const QUOTE_FEATURES: QuoteFeatureOption[] = [
  { id: 'auth', name: 'User Auth', price: 8000, priceLabel: '+₹8,000' },
  { id: 'payment', name: 'Payments', price: 12000, priceLabel: '+₹12,000' },
  { id: 'dashboard', name: 'Dashboard', price: 18000, priceLabel: '+₹18,000' },
  { id: 'api', name: 'API Integration', price: 15000, priceLabel: '+₹15,000' },
  { id: 'cms', name: 'CMS', price: 10000, priceLabel: '+₹10,000' },
  { id: 'seo', name: 'SEO Setup', price: 6000, priceLabel: '+₹6,000' },
  { id: 'chat', name: 'AI Chat / Bot', price: 20000, priceLabel: '+₹20,000' },
  { id: 'analytics', name: 'Analytics', price: 8000, priceLabel: '+₹8,000' },
];

export const QUOTE_TIMELINES = [
  'ASAP (within 2 weeks)',
  '1 month',
  '2–3 months',
  'Flexible',
] as const;

export const LEGACY_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'arjun',
    quote:
      'Zenic Group completely transformed our digital presence. The web app they built is fast, beautiful and our customers love it. Exceptional team from start to finish.',
    name: 'Arjun Mehta',
    role: 'Founder, TechStart India',
    initial: 'A',
    avatarGradient: 'from-blue-500 to-violet-500',
    verifiedClientApproval: false,
  },
  {
    id: 'sarah',
    quote:
      'The AI automation pipeline Zenic built saved us 40+ hours every week. Genuinely impressive — professional, on time and exactly what we needed.',
    name: 'Sarah Collins',
    role: 'Operations Director, LogiCo UK',
    initial: 'S',
    avatarGradient: 'from-teal-400 to-blue-500',
    verifiedClientApproval: false,
  },
  {
    id: 'rania',
    quote:
      "We've worked with agencies across three countries — Zenic is head and shoulders above all of them. Attention to detail and communication is outstanding.",
    name: 'Rania Al-Hassan',
    role: 'CEO, Nova Digital Dubai',
    initial: 'R',
    avatarGradient: 'from-orange-400 to-rose-500',
    verifiedClientApproval: false,
  },
];
