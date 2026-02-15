
import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { ARTICLES } from '../constants';

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-40">
      <Hero />
      
      <section id="articles-grid" className="max-w-7xl mx-auto px-6 py-40">
        <div ref={sectionRef} className="reveal-on-scroll flex flex-col md:flex-row items-end justify-between mb-24 gap-12 border-b border-zinc-900 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight italic">
              Knowledge is the <br /> primary asset.
            </h2>
            <p className="text-zinc-500 font-light text-lg max-w-lg leading-relaxed">
              We deconstruct our most complex workflows into architectural case studies. No client data, just pure strategic methodology.
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <div className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold mb-2">
              ARCHIVE VOL. 24
            </div>
            <div className="w-32 h-[1px] bg-zinc-800" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
          {ARTICLES.map((article, idx) => (
            <div key={article.id} className="bg-zinc-950">
              <ArticleCard article={article} index={idx} />
            </div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-400 transition-colors">Request a Specific Methodology Deep-Dive</span>
                <div className="w-px h-20 bg-gradient-to-b from-zinc-800 to-transparent group-hover:h-32 transition-all duration-700" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
