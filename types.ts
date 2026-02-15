export interface NavItem {
  id: string;
  label: string;
  path?: string;
  isExternal?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  heroImage: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string;
  description: string;
  year: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  theme: 'branding' | 'web' | 'meta';
  benefits: string[];
  details: {
    overview: string;
    included: string[];
    process: { step: string; title: string; desc: string }[];
    results: { label: string; value: string }[];
  };
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
