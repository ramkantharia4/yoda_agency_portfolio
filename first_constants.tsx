
import { NavItem, Project, TeamMember, Stat, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'work', label: 'Work', path: '/' },
  { id: 'plans', label: 'Plans', path: '/plans' },
  { id: 'contact', label: 'Contact', path: '/' },
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Brand Identity',
    subtitle: 'Visual Sovereignty',
    description: 'We craft logo systems and brand DNA that command instant authority.',
    icon: 'palette',
    theme: 'branding',
    benefits: ['Logo Design', 'Color Theory', 'Brand Guidelines'],
    details: {
      overview: 'Visual sovereignty is about owning your market space through distinct identity architecture.',
      included: ['Logo Design', 'Color Theory', 'Brand Guidelines', 'Typography System', 'Visual Assets'],
      process: [
        { step: '01', title: 'Conceptualize', desc: 'Abstracting ideas into core visual symbols.' },
        { step: '02', title: 'Refine', desc: 'Polishing the aesthetic to a premium shine.' },
        { step: '03', title: 'Deploy', desc: 'Integrating identity across every touchpoint.' }
      ],
      results: [{ label: 'Instant Authority', value: 'High' }, { label: 'Market Distinction', value: 'Unique' }]
    }
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Digital Engineering',
    description: 'High-speed, full-stack ecosystems built for maximum conversion.',
    icon: 'code',
    theme: 'web',
    benefits: ['Next.js', 'Custom Backends', 'SEO Mastery'],
    details: {
      overview: 'We engineer digital platforms that are optimized for speed and results.',
      included: ['Next.js', 'Custom Backends', 'SEO Mastery', 'API Architecture', 'Responsive UI'],
      process: [
        { step: '01', title: 'Wireframe', desc: 'Architecting the user journey for max efficiency.' },
        { step: '02', title: 'Build', desc: 'Writing clean, scalable code that delivers speed.' },
        { step: '03', title: 'Launch', desc: 'Optimizing for every device and screen size.' }
      ],
      results: [{ label: 'Load Time', value: '0.8s' }, { label: 'Conversion', value: 'Maximum' }]
    }
  },
  {
    id: 'meta-ads',
    title: 'Growth & Meta Ads',
    subtitle: 'Targeted Momentum',
    description: 'Data-driven campaign architectures that turn attention into scalable revenue.',
    icon: 'trending-up',
    theme: 'meta',
    benefits: ['Meta Strategy', 'Creative Direction', 'ROI Scaling'],
    details: {
      overview: 'Leveraging algorithmic precision to dominate social market share.',
      included: ['Meta Strategy', 'Creative Direction', 'ROI Scaling', 'A/B Testing', 'Growth Loops'],
      process: [
        { step: '01', title: 'Target', desc: 'Identifying your highest-value audience segments.' },
        { step: '02', title: 'Hook', desc: 'Creating content that stops the scroll instantly.' },
        { step: '03', title: 'Scale', desc: 'Pumping results through iterative testing.' }
      ],
      results: [{ label: 'Optimized ROAS', value: 'High' }, { label: 'Scalable Traffic', value: 'Constant' }]
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Aura Bloom',
    category: 'Digital Branding',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Transforming sustainable luxury through a cohesive digital identity.',
    year: '2024',
    details: {
      challenge: 'Aura Bloom needed to transition from a local boutique to a global luxury brand.',
      solution: 'Developed a minimalist visual language and a custom e-commerce experience.',
      results: ['300% sales increase', 'Vogue Featured', '10k+ Social Followers']
    }
  },
  {
    id: 2,
    title: 'Nexus Stream',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    description: 'A revolutionary data visualization suite for next-gen enterprises.',
    year: '2023',
    details: {
      challenge: 'Complexity was hindering user adoption.',
      solution: 'UX overhaul focusing on intuitive dashboards and real-time animation.',
      results: ['45% Churn reduction', '60% Faster onboarding', 'Series B success']
    }
  },
  {
    id: 3,
    title: 'Orbit Pay',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1550565118-3d1428df732f?auto=format&fit=crop&q=80&w=1200',
    description: 'Simplifying global transactions with lightning-fast blockchain architecture.',
    year: '2024',
    details: {
      challenge: 'Establishing trust in a volatile fintech market.',
      solution: 'Used bold, professional branding combined with high-security visual indicators and smooth payment flows.',
      results: ['$2M daily volume', '0% downtime since launch', 'Voted Top 10 Fintech UI']
    }
  },
  {
    id: 4,
    title: 'Lumina Arch',
    category: 'Architectural Visuals',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Capturing the essence of modern living through photorealistic rendering.',
    year: '2023',
    details: {
      challenge: 'Traditional renders felt static and uninviting for luxury developers.',
      solution: 'Created interactive 3D walkthroughs and atmospheric lighting studies that brought spaces to life.',
      results: ['Sold 80% of units pre-construction', 'Awarded Design Innovation 2023', 'Expanded to Dubai market']
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Ram Kantharia',
    role: 'Creative Director',
    image: '/ram_kantharia.jpg',
    bio: 'Leading the vision. Specializing in brand architecture and cinematic digital experiences.',
    socials: {
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/',
      portfolio: 'https://ram.design'
    }
  },
  {
    id: 2,
    name: 'Prapti Sharma',
    role: 'Lead Strategist',
    image: '/prapti_sharma.jpg',
    bio: 'The engine of execution. Bridging the gap between client goals and technical impact.',
    socials: {
      instagram: 'https://instagram.com/',
      linkedin: 'https://www.linkedin.com/in/prapti-sharma-7121532a6',
      portfolio: 'https://prapti.vision'
    }
  }
];

export const STATS: Stat[] = [
  { label: 'Speed', value: 100, suffix: '%' },
  { label: 'Security', value: 100, suffix: '%' },
  { label: 'Retention', value: 95, suffix: '%' },
  { label: 'Scalability', value: 100, suffix: '%' }
];
