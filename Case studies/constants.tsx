
import React from 'react';
import { Article } from './types';
import { 
  BrandingDiagram, 
  WebDevFlow, 
  MetaFunnel 
} from './components/Visuals';

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
