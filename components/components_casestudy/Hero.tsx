
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById('articles-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-radial-gradient from-zinc-900/20 to-transparent opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-full h-full border border-zinc-900 rotate-[15deg] opacity-20" />
      </div>
      
      <div className="max-w-5xl text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <div className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-bold">
                Knowledge Transfer Protocol
            </div>
            <div className="w-12 h-[1px] bg-zinc-800" />
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 leading-[0.9] tracking-tighter italic">
            Architecting <br /> <span className="not-italic text-white">Insights.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            A repository of strategic methodologies, deconstructed from <br className="hidden md:block" /> 
            our highest-performing digital ecosystems.
        </p>
        
        <button 
          onClick={scrollToContent}
          className="group relative inline-flex flex-col items-center gap-6 transition-all"
        >
            <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-all duration-500 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500 group-hover:text-white transition-colors">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-bold group-hover:text-zinc-400">Begin Deconstruction</span>
        </button>
      </div>
      
      {/* Corner Metadata */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="text-[9px] text-zinc-700 font-mono space-y-1">
            <p>LAT: 37.7749° N</p>
            <p>LNG: 122.4194° W</p>
            <p>SYS: ZINC_STABLE_V4</p>
        </div>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
        <div className="rotate-90 text-[9px] text-zinc-700 font-mono tracking-[1em] uppercase">
            Scrolling for Knowledge
        </div>
      </div>
    </section>
  );
};

export default Hero;
