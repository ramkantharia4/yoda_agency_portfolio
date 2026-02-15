
import React from 'react';
import { NavItem, Project, TeamMember, Stat, Service, Article, Review } from './types';
import {
  BrandingDiagram,
  WebDevFlow,
  MetaFunnel
} from './components/components_casestudy/Visuals';

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
    id: '1',
    slug: 'anatomy-of-unforgettable-brand',
    category: 'Branding',
    title: 'The Anatomy of an Unforgettable Brand Identity',
    excerpt: 'A deep-dive into our neuro-aesthetic approach to visual identity, blending ancient archetypes with modern digital sovereignty.',
    readTime: '14 min read',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    sections: [
      {
        id: 'dna',
        title: 'Beyond the Logo: The Science of Brand DNA',
        content: (
          <div className="space-y-6">
            <p>Branding is often mistaken for decoration. At YodaDayo, we view it as the <strong>architectural skeleton</strong> of a business. Our methodology begins with "Archetypal Mining"—a process of excavating the primal narratives that a brand serves. Are you the Sage, providing wisdom? Or the Outlaw, disrupting the status quo?</p>
            <div className="my-12">
              <BrandingDiagram />
              <p className="text-[10px] text-zinc-500 mt-4 text-center uppercase tracking-widest font-bold">Protocol 01: Value Extraction & Archetype Mapping</p>
            </div>
            <p>Once the archetype is identified, we translate these abstract values into a "Visual Constitution." This document dictates not just what the brand looks like, but how it behaves in 3D space, how it responds to user interaction, and how it ages over decades.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                <h4 className="text-xl mb-4 font-serif">Structural Integrity</h4>
                <p className="text-sm text-zinc-500">We design identities that maintain clarity at 16px favicons and 60ft billboards alike. This requires mathematical precision in geometric construction.</p>
              </div>
              <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                <h4 className="text-xl mb-4 font-serif">Emotional Resonance</h4>
                <p className="text-sm text-zinc-500">Neuro-aesthetics guides our curve selection. Sharp angles for precision; soft radii for approachability. Every pixel is a psychological trigger.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'psychology',
        title: 'Color Psychology: The Spectrum of Influence',
        content: (
          <div className="space-y-6">
            <p>Color is the fastest form of communication. It bypasses the logical brain and hits the limbic system instantly. Our selection process involves cultural cross-referencing and accessibility stress-testing.</p>
            <div className="bg-zinc-900 p-8 border border-zinc-800 rounded-sm italic text-zinc-300 border-l-4 border-l-white">
              "We don't pick colors because they look good. We pick colors because they feel true to the brand's fundamental promise."
            </div>
            <p>In the digital landscape, we also consider "Luminous Ergonomics"—how colors behave on OLED vs LCD screens, and how they contribute to eye fatigue during long browsing sessions.</p>
          </div>
        )
      },
      {
        id: 'typography',
        title: 'Typography as Voice: The Sound of the Written Word',
        content: (
          <div className="space-y-6">
            <p>Typography is the silent narrator of your brand story. We often custom-license or modify typefaces to ensure a unique "sonic profile" for the written word. A high-contrast serif speaks of heritage and craftsmanship, while a wide-track mono-sans screams technical innovation.</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-white font-bold">01.</span>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-1">Optical Sizing</h5>
                  <p className="text-sm">Varying stroke weights based on display size to preserve legibility and elegance at all scales.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">02.</span>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-1">Micro-Typography</h5>
                  <p className="text-sm">Obsessive attention to kerning, tracking, and line-height to ensure a smooth, "fluid" reading experience.</p>
                </div>
              </li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: '2',
    slug: 'engineering-performance-ecosystems',
    category: 'Web Development',
    title: 'Engineering High-Performance Digital Ecosystems',
    excerpt: 'Moving beyond "websites" to build resilient, scalable digital architectures that dominate search rankings and user retention.',
    readTime: '18 min read',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    sections: [
      {
        id: 'nextjs',
        title: 'The Next.js Advantage: Atomic Scaling',
        content: (
          <div className="space-y-6">
            <p>Performance is a feature, not an afterthought. Our tech stack is centered around Next.js for its hybrid rendering capabilities. By leveraging Static Site Generation (SSG) for content and Incremental Static Regeneration (ISR) for updates, we achieve sub-second load times globally.</p>
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 my-8">
              <div className="bg-zinc-800 px-4 py-2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <pre className="p-6 text-xs text-zinc-400 overflow-x-auto">
                <code>{`// YodaDayo Standard: Performance-First Component
export const ArchitecturalSection = ({ children, priority = false }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Lazy loading logic with Intersection Observer */}
      <Suspense fallback={<SkeletonLoader />}>
        <div className="reveal-animation">
          {children}
        </div>
      </Suspense>
    </section>
  );
};`}</code>
              </pre>
            </div>
          </div>
        )
      },
      {
        id: 'userflow',
        title: 'User Flow Mastery: The Path of Least Resistance',
        content: (
          <div className="space-y-6">
            <p>We approach user journeys as a "digital concierge" service. The interface should anticipate the user's next question and provide the answer before they even think to ask it. This requires deep heat-map analysis and iterative A/B testing of micro-copy and button placements.</p>
            <div className="my-12">
              <WebDevFlow />
              <p className="text-[10px] text-zinc-500 mt-4 text-center uppercase tracking-widest font-bold">User Flow Protocol: Qualification to Conversion</p>
            </div>
            <p>Our conversion architecture is built on the principle of "Progressive Disclosure." We don't overwhelm users with information; we provide exactly what is needed for the current stage of the journey.</p>
          </div>
        )
      },
      {
        id: 'optimization',
        title: 'Optimization: The Pursuit of the Perfect Score',
        content: (
          <div className="space-y-6">
            <p>100/100 on Google Lighthouse isn't just for bragging rights—it's a critical SEO signal. We optimize every image into AVIF formats, minimize third-party scripts, and use CSS-only solutions wherever possible to keep the main thread lean.</p>
            <div className="p-8 bg-white text-zinc-950 flex flex-col md:flex-row justify-around items-center gap-8 rounded-sm">
              <div className="text-center">
                <div className="text-5xl font-serif">100</div>
                <div className="text-[10px] uppercase font-bold tracking-tighter">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif">100</div>
                <div className="text-[10px] uppercase font-bold tracking-tighter">Accessibility</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif">100</div>
                <div className="text-[10px] uppercase font-bold tracking-tighter">Best Practices</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif">100</div>
                <div className="text-[10px] uppercase font-bold tracking-tighter">SEO</div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: '3',
    slug: 'unlocking-scalable-growth-meta-ads',
    category: 'Meta Ads',
    title: 'Unlocking Scalable Growth with Precision Meta Ads',
    excerpt: 'The methodology behind converting social attention into high-intent acquisition through data-driven creative and algorithmic alignment.',
    readTime: '15 min read',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
    sections: [
      {
        id: 'architecture',
        title: 'Audience Architecture: Beyond Demographics',
        content: (
          <div className="space-y-6">
            <p>Standard targeting is dead. We build "Algorithmic Mirroring" audiences. Instead of targeting "Males 25-34," we target the behavioral clusters that mirror your highest-LTV customers. We feed Meta's pixel with rich, offline data events to ensure the algorithm hunts for buyers, not browsers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="border border-zinc-800 p-4">
                <h5 className="text-xs font-bold uppercase mb-2">Phase 1</h5>
                <p className="text-xs text-zinc-500">Seed Data Extraction: Analyzing 1st-party CRM data for pattern recognition.</p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h5 className="text-xs font-bold uppercase mb-2">Phase 2</h5>
                <p className="text-xs text-zinc-500">Lookalike Layering: Scaling seed patterns across global demographics.</p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h5 className="text-xs font-bold uppercase mb-2">Phase 3</h5>
                <p className="text-xs text-zinc-500">Intent Refinement: Retargeting based on specific engagement duration.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'alchemy',
        title: 'Creative Alchemy: Disrupting the Dopamine Loop',
        content: (
          <div className="space-y-6">
            <p>Our creative team operates on a "3-Second Hook" protocol. If the thumb hasn't stopped in three seconds, the ad has failed. We use high-fidelity, architectural visuals that stand out against the "junk" typical of social feeds.</p>
            <p>We test creative variants across four key axes:</p>
            <ul className="list-disc list-inside text-sm space-y-2 text-zinc-400">
              <li>Visual Hook: Is it disruptive?</li>
              <li>Value Proposition: Is the benefit immediate?</li>
              <li>Social Proof: Why should I trust this?</li>
              <li>Call to Action: Is the friction removed?</li>
            </ul>
          </div>
        )
      },
      {
        id: 'funnel',
        title: 'The Full-Funnel Ecosystem',
        content: (
          <div className="space-y-6">
            <p>Growth is not a single event; it is a sequence. Our Meta Ads ecosystem ensures that a user's first interaction builds awareness, their second interaction deepens trust, and their third interaction drives the transaction.</p>
            <div className="my-12">
              <MetaFunnel />
              <p className="text-[10px] text-zinc-500 mt-4 text-center uppercase tracking-widest font-bold">Protocol 03: Multi-Touch Conversion Architecture</p>
            </div>
          </div>
        )
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Alex G.',
    role: 'Founder',
    company: 'Tech Startup',
    text: 'Our old site was basically a digital paperweight. They rebuilt it to actually capture leads, and the marketing spend is finally seeing a return. Great communication throughout.',
    color: '#7cffcb'
  },
  {
    id: '2',
    name: 'Jamie K.',
    role: 'Ops Manager',
    company: 'SaaS Company',
    text: 'They didn\'t just give us a template. The integration with our CRM was seamless, and the site speed improved drastically. Definitely know their stuff on the technical side.',
    color: '#ff8cff'
  },
  {
    id: '3',
    name: 'Sarah M.',
    role: 'Agent',
    company: 'Real Estate',
    text: 'The team is super responsive. We had a few tweaks on the ad copy mid-campaign, and they handled it within the hour. It\'s rare to find an agency that\'s this \'on it\'.',
    color: '#00ccff'
  },
  {
    id: '4',
    name: 'Tom B.',
    role: 'Owner',
    company: 'Small Business',
    text: 'Direct and effective. They fixed our tracking issues and cleaned up our landing pages. We\'re seeing much higher quality traffic than we were getting last year.',
    color: '#ffff00'
  },
  {
    id: '5',
    name: 'Riley V.',
    role: 'Founder',
    company: 'E-commerce',
    text: 'I appreciated that they were honest about what wouldn\'t work for our niche. The marketing strategy felt tailored, not copied and pasted. Solid results so far.',
    color: '#ff3e3e'
  },
  {
    id: '6',
    name: 'Leo H.',
    role: 'Marketing Lead',
    company: 'Digital Agency',
    text: 'Finally, a team that understands how web design and SEO actually work together. The transition to the new site was smooth and our rankings didn\'t dip.',
    color: '#7000ff'
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
        {
          step: '01',
          title: 'Archetypal Mining',
          desc: 'We go beyond superficial aesthetics to excavate the primal narratives of your brand. This involves deep psychological mapping to identify the core archetype—be it the Visionary, the Ruler, or the Explorer—that will anchor your visual sovereignty.'
        },
        {
          step: '02',
          title: 'Visual Constitution',
          desc: 'Drafting a rigorous framework for your brand\'s behavior. This isn\'t just a style guide; it\'s a set of mathematical axioms for geometry, color interaction, and kinetic motion that ensures your brand remains consistent across all digital and physical dimensions.'
        },
        {
          step: '03',
          title: 'Systemic Deployment',
          desc: 'Integrating the new identity across every conceivable touchpoint. We build atomic design systems that allow your brand to scale infinitely, ensuring that every pixel and every billboard reinforces your core message with surgical precision.'
        }
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
        {
          step: '01',
          title: 'Architecture Blueprinting',
          desc: 'Defining the structural integrity of your digital ecosystem. We map out data flows, API integrations, and server-side rendering strategies to ensure your site is built on a foundation of pure performance and infinite scalability.'
        },
        {
          step: '02',
          title: 'Atomic Implementation',
          desc: 'Writing clean, high-fidelity code using React and Next.js. We focus on "Performance as a Feature," optimizing for sub-second load times and flawless interaction states. Every component is an isolated logic hub, rigorously tested for stability.'
        },
        {
          step: '03',
          title: 'Conversion Optimization',
          desc: 'The final shift from "live" to "dominant." We run comprehensive stress tests, SEO synchronization, and accessibility audits to ensure your platform isn\'t just functional—it\'s a high-converting machine that leads the market in performance metrics.'
        }
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
        {
          step: '01',
          title: 'Algorithmic Alignment',
          desc: 'We stop guessing and start calculating. By analyzing deep behavioral data and CRM signals, we align your campaign architecture with Meta\'s internal auction logic. We hunt for high-intent clusters that mirror your most valuable customers.'
        },
        {
          step: '02',
          title: 'Creative Disruption',
          desc: 'Developing high-end visual hooks that bypass the dopamine scroll-loop. Our creative team produces cinematic, deconstructed assets that command attention and force the user to interact with your value proposition within the first 3 seconds.'
        },
        {
          step: '03',
          title: 'Yield Optimization',
          desc: 'Aggressive scaling through iterative testing loops. We monitor real-time yield and ROAS, shifting budget dynamically to the highest-performing creative-audience combinations while maintaining a constant feedback loop with your backend conversion metrics.'
        }
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
    video: '/video/aurelian.mp4',
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
    title: 'Futrex',
    category: 'Animated Website',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    video: '/video/arc-h.mp4',
    description: 'Futuristic web experience with cutting-edge animations and immersive interactions.',
    year: '2023',
    details: {
      challenge: 'Creating a next-generation web interface that pushes the boundaries of digital design.',
      solution: 'Advanced motion graphics, 3D transitions, and fluid animations powered by modern web technologies.',
      results: ['Award-winning design', 'Seamless user experience', 'Industry-leading performance']
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
      instagram: 'https://www.instagram.com/ramisalwayskidding?igsh=ejZheDhzOHlrYXVt',
      linkedin: 'https://www.linkedin.com/in/ram-kantharia-940209389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      portfolio: 'https://ramkantharia.vercel.app'
    }
  },
  {
    id: 2,
    name: 'Prapti Sharma',
    role: 'Lead Strategist',
    image: '/prapti_sharma.jpg',
    bio: 'The engine of execution. Bridging the gap between client goals and technical impact.',
    socials: {
      instagram: 'https://www.instagram.com/prapti_sharma_38?igsh=eG1hcXd0enVmeGh2',
      linkedin: 'https://www.linkedin.com/in/prapti-sharma-7121532a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      portfolio: 'https://praptiisharma.vercel.app'
    }
  }
];

export const STATS: Stat[] = [
  { label: 'Speed', value: 100, suffix: '%' },
  { label: 'Security', value: 100, suffix: '%' },
  { label: 'Retention', value: 95, suffix: '%' },
  { label: 'Scalability', value: 100, suffix: '%' }
];
