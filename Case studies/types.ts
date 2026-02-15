
// Fix: Import React to resolve 'Cannot find namespace React' when defining Section content type
import React from 'react';

export interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Branding' | 'Web Development' | 'Meta Ads';
  readTime: string;
  sections: Section[];
  heroImage: string;
}
