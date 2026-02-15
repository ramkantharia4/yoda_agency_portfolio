
import { NavItem, Project, TeamMember, Stat, Service, Article, Review } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'case-studies', label: 'Case Studies', path: '/case-studies' },
  { id: 'work', label: 'Work', path: '/' },
  { id: 'plans', label: 'Plans', path: '/plans' },
  { id: 'contact', label: 'Contact', path: '/' },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'identity-architecture',
    category: 'Brand Strategy',
    title: 'The Architecture of Modern Identity',
    excerpt: 'Deconstructing the visual DNA of high-performing brands in the digital era.',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        id: 'foundation',
        title: 'The Foundation of Visual Sovereignty',
        content: 'We believe that identity is not just a logo, but a comprehensive architecture of signals that command authority in a crowded marketplace.'
      },
      {
        id: 'signals',
        title: 'Strategic Signal Processing',
        content: 'Every color choice, typographic weight, and whitespace ratio is a calculated decision designed to trigger specific perception vectors.'
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'ecosystem-efficiency',
    category: 'Development',
    title: 'Engineering Scalable Ecosystems',
    excerpt: 'How we build full-stack platforms that maintain 99.9% performance uptime.',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        id: 'infrastructure',
        title: 'Zero-Latency Infrastructure',
        content: 'Our builds prioritize the critical rendering path, ensuring that users interact with the interface in under 800ms, regardless of complexity.'
      },
      {
        id: 'scalability',
        title: 'Horizontally Scalable Logic',
        content: 'By decoupling state from presentation, we ensure that as your user base grows, your platform remains agile and fault-tolerant.'
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'algorithmic-growth',
    category: 'Marketing',
    title: 'The Algorithmic Growth Engine',
    excerpt: 'Leveraging data-driven momentum to dominate social market share.',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        id: 'momentum',
        title: 'Calculated Market Momentum',
        content: 'We don\'t just run ads; we build growth loops that compound user attention into recurring brand revenue through algorithmic precision.'
      },
      {
        id: 'loops',
        title: 'Hyper-Targeted Feedback Loops',
        content: 'Using real-time data ingestion, we pivot creative strategies instantly to capture emerging market sentiment before competitors can react.'
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'User 1',
    role: 'CTO',
    company: 'Nexus',
    text: 'Unparalleled architectural precision.',
    color: '#7cffcb'
  },
  {
    id: '2',
    name: 'User 2',
    role: 'Director',
    company: 'Aura',
    text: 'A masterclass in organic fluidity.',
    color: '#ff8cff'
  },
  {
    id: '3',
    name: 'User 3',
    role: 'Founder',
    company: 'Orbit',
    text: 'High-performance engineering.',
    color: '#00ccff'
  },
  {
    id: '4',
    name: 'User 4',
    role: 'VP',
    company: 'Lumina',
    text: 'Seamless growth and aesthetics.',
    color: '#ffff00'
  },
  {
    id: '5',
    name: 'User 5',
    role: 'Head',
    company: 'Synthetix',
    text: 'Scalable execution.',
    color: '#ff3e3e'
  },
  {
    id: '6',
    name: 'User 6',
    role: 'Lead',
    company: 'Velvet',
    text: 'State-of-the-art brand DNA.',
    color: '#7000ff'
  },
  {
    id: '7',
    name: 'User 7',
    role: 'CEO',
    company: 'Mirai',
    text: 'Unmatched ecosystem efficiency.',
    color: '#00ffaa'
  }
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
    title: 'Volt X',
    category: 'Energy Systems',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200',
    video: '/video/volt-x.mp4',
    description: 'High-voltage digital infrastructure for sustainable energy grids.',
    year: '2024',
    details: {
      challenge: 'Visualizing complex energy flows without overwhelming the operative.',
      solution: 'Developed a high-contrast dark mode dashboard with real-time vector animations.',
      results: ['99.9% uptime', 'Interactive heatmaps', 'Zero-latency monitoring']
    }
  },
  {
    id: 2,
    title: 'Vestra AI',
    category: 'SaaS / AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    video: '/video/vestra.ai.mp4',
    description: 'Autonomous strategic engine for enterprise resource optimization.',
    year: '2023',
    details: {
      challenge: 'Demystifying neural network processes for non-technical stakeholders.',
      solution: 'Created a "Transparent Logic" UI that visualizes decision pathways in real-time.',
      results: ['40% efficiency gain', 'Intuitive node mapping', 'Recursive feedback loops']
    }
  },
  {
    id: 3,
    title: 'Arc-H',
    category: 'Physical Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    video: '/video/arc-h.mp4',
    description: 'Cinematic deconstruction of geometric structural integrity.',
    year: '2024',
    details: {
      challenge: 'Capturing the gravity of brutalist architecture in a digital medium.',
      solution: 'Used scroll-driven perspective shifts and dynamic shadows to mimic structural depth.',
      results: ['Awwwards SOTD', '1M+ reach', 'Red Dot Design Award']
    }
  },
  {
    id: 4,
    title: 'Aurelian',
    category: 'Luxury / Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    video: '/video/aurelian.mp4',
    description: 'Digital flagship for ultra-premium artisanal gold craftsmanship.',
    year: '2023',
    details: {
      challenge: 'Translating the tactile quality of gold into a purely visual digital experience.',
      solution: 'High-fidelity macro photography paired with fluid, luxury-tier motion design.',
      results: ['300% conversion spike', 'Global brand expansion', 'Bespoke booking system']
    }
  },
  {
    id: 5,
    title: 'Nomad',
    category: 'Travel / Tech',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    video: '/video/nomad.mp4',
    description: 'Decentralized ecosystem for the modern era of remote global mobility.',
    year: '2024',
    details: {
      challenge: 'Unified interface for fragmented travel and work-from-anywhere services.',
      solution: 'A modular, map-centric ecosystem that updates in real-time based on geofencing.',
      results: ['500k active users', 'Series C success', 'Industry-leading app retention']
    }
  },
  {
    id: 6,
    title: 'Bright Smile',
    category: 'Healthcare / Wellness',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200',
    video: '/video/bright-smile.mp4',
    description: 'AI-assisted dental diagnostic and patient experience platform.',
    year: '2023',
    details: {
      challenge: 'Reducing patient anxiety during complex diagnostic walkthroughs.',
      solution: 'Soft, calming color palettes combined with clear, non-threatening 3D visualizations.',
      results: ['80% anxiety reduction', 'Streamlined clinic ops', 'FDA approved UI']
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
