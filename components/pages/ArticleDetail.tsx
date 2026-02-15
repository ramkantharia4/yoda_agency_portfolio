
import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ARTICLES } from '../../constants';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = ARTICLES.find(a => a.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!article) {
      navigate('/case-studies');
      return;
    }
    window.scrollTo(0, 0);
  }, [article, navigate]);

  if (!article) return null;

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Immersive Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
      />

      {/* Fixed Cancel Button */}
      <Link
        to="/case-studies"
        className="fixed top-24 left-6 z-[70] w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-white/10 border border-white/10 rounded-full transition-all group backdrop-blur-xl"
        title="Return to Index"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Link>

      {/* Refined Minimal Header */}

      <header className="max-w-7xl mx-auto px-6 pt-32 pb-20 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 opacity-40">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold">{article.category}</span>
              <div className="w-8 h-px bg-white" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold">{article.readTime}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light tracking-tight text-white leading-[0.9]">
              {article.title}
            </h1>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono leading-relaxed">
            Exploration_Set: {article.id.split('-')[0].toUpperCase()}<br />
            Status: Documented_Case
          </div>
        </div>
      </header>

      {/* Editorial Content Flow */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {article.sections.map((section, idx) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse text-right'
                }`}
            >
              {/* Vertical Index Marker */}
              <div className={`md:col-span-2 hidden md:flex flex-col justify-between py-2 border-l border-white/10 pl-6 ${idx % 2 === 0 ? '' : 'md:border-l-0 md:border-r md:pr-6 text-right items-end'
                }`}>
                <span className="text-[10px] font-mono text-zinc-800">SECTION_0{idx + 1}</span>
                <span className="text-[10px] font-mono text-zinc-600 rotate-180 [writing-mode:vertical-lr]">
                  {section.id.toUpperCase()}
                </span>
              </div>

              {/* Main Content Pane */}
              <div className={`md:col-span-8 flex flex-col ${idx % 2 === 0 ? '' : 'md:items-end'}`}>
                <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-zinc-300 italic serif">
                  {section.title}
                </h2>
                <div className={`text-zinc-500 font-light leading-relaxed text-xl space-y-10 max-w-2xl prose-invert prose-p:mb-8 text-justify ${idx % 2 === 0 ? '' : 'md:text-right'
                  }`}>
                  {section.content}
                </div>
              </div>

              {/* Contextual Side Element */}
              <div className="md:col-span-2 flex flex-col justify-center gap-10 opacity-10 grayscale hover:opacity-100 transition-opacity duration-700 pointer-events-none md:pointer-events-auto">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="text-[8px] uppercase tracking-widest leading-loose text-zinc-400">
                  Observation_<br />
                  Data_Nexus_<br />
                  Execution_V1
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer Navigation: Next Logic */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-end gap-12">

          <div className="flex gap-4">
            <span className="text-[9px] uppercase tracking-widest text-zinc-800 opacity-20">YodaDayo Digital Studio // 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
