
import React, { useEffect, useRef } from 'react';

const useObserver = (ref: React.RefObject<SVGSVGElement | null>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const paths = entry.target.querySelectorAll('path, line, circle, rect');
        paths.forEach((p, i) => {
          (p as SVGElement).classList.add('animate-draw');
          (p as SVGElement).style.animationDelay = `${i * 0.1}s`;
        });
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
};

export const BrandingDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  useObserver(svgRef);

  return (
    <div className="w-full aspect-[21/9] bg-zinc-900/30 rounded-sm border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <svg ref={svgRef} width="100%" height="80%" viewBox="0 0 800 300" fill="none" className="max-w-3xl">
        <circle cx="400" cy="150" r="100" stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="400" cy="150" r="40" stroke="white" strokeWidth="1" />
        <text x="400" y="154" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" className="tracking-widest uppercase">DNA</text>
        
        <path d="M400,50 L400,110 M400,190 L400,250 M300,150 L360,150 M440,150 L500,150" stroke="#71717a" strokeWidth="0.5" />
        
        <g className="text-zinc-600">
            <rect x="350" y="10" width="100" height="24" rx="2" stroke="#3f3f46" strokeWidth="0.5" />
            <text x="400" y="26" textAnchor="middle" fill="#52525b" fontSize="8" className="uppercase tracking-[0.2em]">Strategy</text>
            
            <rect x="350" y="266" width="100" height="24" rx="2" stroke="#3f3f46" strokeWidth="0.5" />
            <text x="400" y="282" textAnchor="middle" fill="#52525b" fontSize="8" className="uppercase tracking-[0.2em]">Assets</text>
            
            <rect x="520" y="138" width="100" height="24" rx="2" stroke="#3f3f46" strokeWidth="0.5" />
            <text x="570" y="154" textAnchor="middle" fill="#52525b" fontSize="8" className="uppercase tracking-[0.2em]">Psychology</text>
            
            <rect x="180" y="138" width="100" height="24" rx="2" stroke="#3f3f46" strokeWidth="0.5" />
            <text x="230" y="154" textAnchor="middle" fill="#52525b" fontSize="8" className="uppercase tracking-[0.2em]">Expression</text>
        </g>
      </svg>
    </div>
  );
};

export const WebDevFlow: React.FC = () => (
  <div className="w-full aspect-[16/9] bg-zinc-950 border border-zinc-900 rounded-sm p-12 flex items-center justify-center">
    <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl">
      {['Architecture', 'Logic', 'Interface', 'Optimization'].map((step, i) => (
        <React.Fragment key={step}>
          <div className="flex-1 w-full text-center p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm transition-all hover:border-zinc-500 group relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700" />
            <div className="text-[9px] text-zinc-600 mb-2 font-mono tracking-tighter italic">PROTOCOL_0{i+1}</div>
            <div className="font-serif text-xl text-zinc-100 group-hover:scale-110 transition-transform">{step}</div>
          </div>
          {i < 3 && <div className="hidden md:block w-12 h-[1px] bg-zinc-800" />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const MetaFunnel: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    useObserver(svgRef);

    return (
        <div className="w-full aspect-[21/9] bg-zinc-950 border border-zinc-900 rounded-sm flex items-center justify-center p-8">
            <svg ref={svgRef} width="600" height="200" viewBox="0 0 600 200" className="opacity-80">
                <path d="M50,10 L550,10 L450,190 L150,190 Z" fill="none" stroke="#27272a" strokeWidth="0.5" />
                
                <path d="M100,60 L500,60" stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M140,130 L460,130" stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="4 4" />
                
                <text x="300" y="40" textAnchor="middle" fill="#71717a" fontSize="10" className="uppercase tracking-[0.5em] font-bold">Awareness</text>
                <text x="300" y="105" textAnchor="middle" fill="#a1a1aa" fontSize="10" className="uppercase tracking-[0.5em] font-bold">Engagement</text>
                <text x="300" y="170" textAnchor="middle" fill="#f4f4f5" fontSize="10" className="uppercase tracking-[0.5em] font-bold">Conversion</text>
                
                <circle cx="300" cy="190" r="4" fill="white" />
            </svg>
        </div>
    );
};
