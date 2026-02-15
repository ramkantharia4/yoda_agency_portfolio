
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('visible');
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <Link 
      ref={cardRef}
      to={`/article/${article.slug}`}
      className="reveal-on-scroll light-sweep group relative flex flex-col h-full bg-zinc-950 border border-zinc-900 p-8 rounded-sm transition-all duration-700 hover:border-zinc-700 hover:bg-zinc-900/40"
    >
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px] border border-zinc-700 rotate-45 transition-transform duration-1000 group-hover:scale-150" />
      </div>

      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-8 group-hover:text-zinc-400 transition-colors">
        {article.category}
      </div>
      
      <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-[1.1] group-hover:text-white transition-colors">
        {article.title}
      </h3>
      
      <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-light line-clamp-3">
        {article.excerpt}
      </p>
      
      <div className="mt-auto pt-8 border-t border-zinc-900 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Duration</span>
          <span className="text-xs text-zinc-400 font-mono">{article.readTime}</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-zinc-950">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* Blueprint lines */}
      <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-zinc-800 group-hover:w-8 transition-all" />
      <div className="absolute bottom-4 right-4 h-4 w-[1px] bg-zinc-800 group-hover:h-8 transition-all" />
    </Link>
  );
};

export default ArticleCard;
