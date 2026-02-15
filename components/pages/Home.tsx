
import React, { useEffect, useRef } from 'react';
import { ARTICLES } from '../../constants';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CaseStudiesHome: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Subtle Cover Text */}
      <div className="fixed top-0 right-0 h-full flex items-center pointer-events-none select-none z-0">
        <h1 className="text-[25vw] font-black text-white/[0.02] rotate-90 leading-none tracking-tighter origin-center translate-x-1/4">
          LOGIC
        </h1>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-40">
        {/* Minimal Entry Signal */}
        <div className="mb-40 flex items-center gap-10 opacity-30">
          <div className="w-12 h-px bg-white" />
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold">Case Study Index // 2026</span>
        </div>

        {/* Editorial Listing */}
        <div className="space-y-px border-t border-white/5">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/case-studies/${article.slug}`)}
              className="group relative py-12 border-b border-white/5 cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="md:col-span-1 text-[10px] font-mono text-zinc-700">0{idx + 1}</div>
              <div className="md:col-span-2 text-[10px] uppercase tracking-widest text-zinc-500">{article.category}</div>
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-4xl font-light text-zinc-400 group-hover:text-white transition-colors tracking-tight">
                  {article.title}
                </h3>
              </div>
              <div className="md:col-span-2 text-right hidden md:block">
                <span className="text-[10px] font-mono text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  {article.readTime} // VIEW_EXPLORATION
                </span>
              </div>

              {/* Hover Line Expansion */}
              <motion.div
                className="absolute bottom-[-1px] left-0 h-px bg-white z-20 w-0 group-hover:w-full transition-all duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

        {/* Technical Footer Marquee Replacement */}
        <div className="mt-60 flex justify-between items-end border-t border-white/5 pt-12 opacity-20">
          <div className="text-[8px] uppercase tracking-[0.4em] leading-relaxed">
            Data Architecture<br />
            Systemic Integrity<br />
            Aesthetic Variance
          </div>
          <div className="text-[8px] font-mono">
            BUILD_STATE: STABLE<br />
            VERSION: 2.0.4
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesHome;
