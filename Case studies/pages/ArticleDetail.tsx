
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../constants';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  
  const article = ARTICLES.find(a => a.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!article) {
      navigate('/');
      return;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sectionElements = article.sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 300;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, navigate]);

  if (!article) return null;

  return (
    <div className="bg-zinc-950 pb-40">
      {/* Dynamic Progress Indicator */}
      <div className="fixed top-20 left-0 right-0 h-px bg-zinc-900 z-50">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Narrative Header */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={article.heroImage} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-10 reveal-on-scroll visible">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">{article.category}</span>
                    <div className="w-12 h-px bg-zinc-800" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-700">{article.readTime}</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter mb-12">
                    {article.title}
                </h1>
            </div>
          </div>
        </div>
        
        {/* Abstract Geometry */}
        <div className="absolute top-1/4 right-[-5%] w-[40vw] h-[40vw] border border-zinc-900 rounded-full opacity-20 pointer-events-none" />
      </section>

      {/* Core Insight Layout */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 space-y-16">
              <div>
                <h4 className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-600 mb-8 border-b border-zinc-900 pb-4">Logic Flow</h4>
                <nav className="space-y-6">
                  {article.sections.map(section => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] transition-all ${
                        activeSection === section.id 
                          ? 'text-white' 
                          : 'text-zinc-600 hover:text-zinc-400'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full border border-zinc-700 transition-all ${
                        activeSection === section.id ? 'bg-white border-white scale-125' : ''
                      }`} />
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="pt-10">
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-700 mb-4 italic">Deconstructed by</div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center font-bold text-xs">Y</div>
                    <div className="text-xs uppercase font-bold tracking-widest">YodaDayo Studio</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Narrative */}
          <article className="lg:col-span-7 col-span-1 space-y-40" ref={contentRef}>
            {article.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-48 reveal-on-scroll visible">
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-serif italic text-zinc-500">Section //</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">{section.title}</h2>
                </div>
                <div className="text-zinc-400 font-light leading-relaxed text-xl space-y-6">
                  {section.content}
                </div>
              </div>
            ))}
          </article>

          {/* Blueprint Summary */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-40 p-8 border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm rounded-sm">
              <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-600 mb-6">Manifesto</div>
              <p className="text-xs text-zinc-500 italic leading-relaxed mb-8">
                "Our pursuit of excellence is not a goal, but a baseline requirement for existence in the digital age."
              </p>
              <button className="w-full py-4 border border-zinc-800 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-zinc-950 transition-all">
                Implement Logic
              </button>
            </div>
          </aside>

        </div>
      </section>
      
      {/* Footer Navigation */}
      <section className="max-w-7xl mx-auto px-6 mt-60 pt-40 border-t border-zinc-900">
        <div className="flex justify-between items-center">
            <Link to="/" className="group flex items-center gap-8">
                <div className="w-16 h-[1px] bg-zinc-800 group-hover:w-32 transition-all" />
                <span className="text-xs uppercase tracking-[0.5em] font-bold">Return to archives</span>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
