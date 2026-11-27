export type ProjectGroup = 'all' | 'services' | 'hospitality' | 'spaces';

export interface ShowcaseProject {
  id: string;
  index: string;
  name: string;
  brandTitle: string;
  domainLabel: string;
  url: string;
  category: string;
  filterGroup: Exclude<ProjectGroup, 'all'>;
  description: string;
  highlights: string[];
  techStack: string[];
  accentColor: string;
  gridSpan: 'wide' | 'compact' | 'full';
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName:
    | 'heart-pulse'
    | 'utensils'
    | 'dumbbell'
    | 'compass'
    | 'paw-print'
    | 'graduation-cap'
    | 'scale'
    | 'globe'
    | 'hard-hat'
    | 'package'
    | 'building'
    | 'code';
  demoUrl?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export const ZENIC_CONTACT = {
  brand: 'Zenic Group',
  domain: 'https://zenic.in',
  domainLabel: 'zenic.in',
  email: 'hello@zenic.in',
  whatsappHref: 'https://wa.me/916364858361',
  instagramHref: 'https://instagram.com/zenic.group',
} as const;

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'restro',
    index: '01',
    name: 'Restro',
    brandTitle: 'The Olive Table',
    domainLabel: 'restro.zenic.in',
    url: 'https://restro.zenic.in/',
    category: 'Restaurant & Hospitality',
    filterGroup: 'hospitality',
    description:
      'A modern restaurant website featuring food presentation, menu discovery, restaurant information and customer engagement.',
    highlights: [
      'Editorial culinary presentation with curated menu discovery',
      'Table reservation and dining hours prominence',
      'Warm atmospheric palette crafted for contemporary dining',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    accentColor: '#eab308',
    gridSpan: 'wide',
  },
  {
    id: 'hospital',
    index: '02',
    name: 'Hospital',
    brandTitle: 'Madies Healthcare',
    domainLabel: 'hospital.zenic.in',
    url: 'https://hospital.zenic.in/',
    category: 'Healthcare & Medical',
    filterGroup: 'hospitality',
    description:
      'A professional healthcare website designed to communicate medical services, facilities, departments and patient information.',
    highlights: [
      'Structured medical departments and specialist directory',
      'Clear patient appointment and emergency access paths',
      'Calm clinical contrast prioritizing readability and trust',
    ],
    techStack: ['React', 'TypeScript', 'Responsive UI'],
    accentColor: '#2dd4bf',
    gridSpan: 'compact',
  },
  {
    id: 'gym',
    index: '03',
    name: 'Gym',
    brandTitle: 'Forge Athletics',
    domainLabel: 'gym.zenic.in',
    url: 'https://gym.zenic.in/',
    category: 'Fitness & Wellness',
    filterGroup: 'services',
    description:
      'A high-energy fitness website showcasing gym facilities, training programmes, memberships and fitness services.',
    highlights: [
      'High-impact athletic typography and bold visual contrast',
      'Structured training programmes and membership comparison',
      'Conversion-ready trial session and enquiry callouts',
    ],
    techStack: ['React', 'Tailwind CSS', 'Motion'],
    accentColor: '#f43f5e',
    gridSpan: 'compact',
  },
  {
    id: 'interior',
    index: '04',
    name: 'Interior Design',
    brandTitle: 'Sorel Spaces',
    domainLabel: 'interior.zenic.in',
    url: 'https://interior.zenic.in/',
    category: 'Architecture & Interior Design',
    filterGroup: 'spaces',
    description:
      'An elegant visual portfolio for interior design businesses, showcasing spaces, design projects and creative expertise.',
    highlights: [
      'Gallery-style spatial storytelling and material focus',
      'Curated residential and commercial project showcase',
      'Refined architectural grid with restrained editorial pacing',
    ],
    techStack: ['React', 'TypeScript', 'Editorial Grid'],
    accentColor: '#d6b48a',
    gridSpan: 'wide',
  },
  {
    id: 'pets',
    index: '05',
    name: 'Pet Care',
    brandTitle: 'Clover & Paws',
    domainLabel: 'pets.zenic.in',
    url: 'https://pets.zenic.in/',
    category: 'Pet Care & Grooming',
    filterGroup: 'spaces',
    description:
      'A friendly yet professional pet business website showcasing pet care, grooming services, products and customer enquiries.',
    highlights: [
      'Approachable service navigation for grooming and vet care',
      'Clear presentation of pet essentials and booking flows',
      'Balanced friendly aesthetic built for pet owners',
    ],
    techStack: ['React', 'Tailwind CSS', 'Web Design'],
    accentColor: '#34d399',
    gridSpan: 'wide',
  },
  {
    id: 'itcareer',
    index: '06',
    name: 'ITCareer.Co',
    brandTitle: 'ITCareer.Co',
    domainLabel: 'itcareer.co',
    url: 'https://itcareer.co/',
    category: 'IT Careers & Tech Education',
    filterGroup: 'services',
    description:
      'A dedicated IT careers and tech workforce platform built to showcase career pathways, skill tracks, and placement guidance.',
    highlights: [
      'Structured technology career tracks and role roadmaps',
      'Clear mentorship, upskilling, and job-readiness pathways',
      'Modern digital platform layout focused on learner conversion',
    ],
    techStack: ['React', 'Vite', 'Modern Web Platform'],
    accentColor: '#818cf8',
    gridSpan: 'compact',
  },
  {
    id: 'hic',
    index: '07',
    name: 'HIC Infrastructure',
    brandTitle: 'HIC Infrastructure',
    domainLabel: 'www.hicinfrastructure.com',
    url: 'https://www.hicinfrastructure.com',
    category: 'Real Estate & Infrastructure',
    filterGroup: 'spaces',
    description:
      'A high-trust real estate and infrastructure website highlighting structural engineering, facade solutions, and landmark developments.',
    highlights: [
      'Architectural project showcase for commercial and real estate developments',
      'Core capabilities across facade systems, structural design, and interiors',
      'Strong industrial editorial typography built for developer confidence',
    ],
    techStack: ['HTML5', 'CSS3', 'Bootstrap Architecture'],
    accentColor: '#f59e0b',
    gridSpan: 'wide',
  },
  {
    id: 'relaxrestro',
    index: '08',
    name: 'Relax Restro Inn',
    brandTitle: 'Relax Restro Inn',
    domainLabel: 'relaxrestro.zenic.in',
    url: 'https://relaxrestro.zenic.in',
    category: 'Hotel Management & Billing',
    filterGroup: 'hospitality',
    description:
      'A professional hotel front-desk management system built for streamlined room check-in/out, GST tax invoicing, and real-time guest billing.',
    highlights: [
      'Front-desk guest check-in, check-out, and room occupancy workflows',
      'Automated GST tax invoicing and itemized guest billing ledger',
      'Real-time cloud persistence engineered for daily hospitality operations',
    ],
    techStack: ['React', 'Firebase', 'GST Billing System'],
    accentColor: '#d97706',
    gridSpan: 'compact',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Hospitals',
    description: 'Patient-first medical portals detailing departments, specialists, and appointments.',
    iconName: 'heart-pulse',
    demoUrl: 'https://hospital.zenic.in/',
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    description: 'Menu-forward hospitality experiences built to drive reservations and footfall.',
    iconName: 'utensils',
    demoUrl: 'https://restro.zenic.in/',
  },
  {
    id: 'fitness',
    name: 'Fitness & Gyms',
    description: 'Energetic membership showcases highlighting coaching, facilities, and schedules.',
    iconName: 'dumbbell',
    demoUrl: 'https://gym.zenic.in/',
  },
  {
    id: 'interior-design',
    name: 'Interior Design & Architecture',
    description: 'Visual spatial monographs tailored for design studios, architects, and ateliers.',
    iconName: 'compass',
    demoUrl: 'https://interior.zenic.in/',
  },
  {
    id: 'pet-care',
    name: 'Pet Care & Veterinary',
    description: 'Warm, accessible websites for clinics, grooming studios, and pet retail.',
    iconName: 'paw-print',
    demoUrl: 'https://pets.zenic.in/',
  },
  {
    id: 'logistics',
    name: 'Logistics & Courier Services',
    description: 'Dependable freight and international shipping platforms focused on service clarity.',
    iconName: 'package',
  },
  {
    id: 'education',
    name: 'Education & Schools',
    description: 'Structured academic sites presenting curricula, admissions, and campus life.',
    iconName: 'graduation-cap',
  },
  {
    id: 'legal',
    name: 'Law Firms & Legal Services',
    description: 'Authoritative practice profiles communicating expertise, partners, and consultations.',
    iconName: 'scale',
  },
  {
    id: 'study-abroad',
    name: 'Study Abroad & Education Consultancy',
    description: 'Guided advisory websites connecting students with university pathways and counselling.',
    iconName: 'globe',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Construction',
    description: 'Project-led corporate sites showcasing engineering capability, safety, and scale.',
    iconName: 'hard-hat',
    demoUrl: 'https://www.hicinfrastructure.com',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    description: 'Property showcases crafted around architectural visuals, floorplans, and enquiries.',
    iconName: 'building',
    demoUrl: 'https://www.hicinfrastructure.com',
  },
  {
    id: 'it-careers',
    name: 'IT Careers & Tech Training',
    description: 'Career-focused technology platforms presenting role roadmaps, courses, and hiring support.',
    iconName: 'code',
    demoUrl: 'https://itcareer.co/',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the business, audience and requirements.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create a professional, industry-focused visual experience.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build responsive, performance-focused websites.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploy the website and help establish the business online.',
  },
];
