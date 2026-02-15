
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
  <div className="w-full bg-zinc-950 border border-zinc-900 rounded-lg p-6 md:p-12 relative overflow-hidden">
    {/* Technical Background Grid */}
    <div className="absolute inset-0 opacity-[0.05]" style={{
      backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }} />

    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
      {[
        {
          title: 'Architecture',
          desc: 'Structural Integrity',
          icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
          coord: 'LAT_40.7128'
        },
        {
          title: 'Logic',
          desc: 'Neural Pathways',
          icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
          coord: 'LON_74.0060'
        },
        {
          title: 'Interface',
          desc: 'Visual Harmony',
          icon: 'M12 3v19M5 8h14M5 16h14',
          coord: 'REF_99.1234'
        },
        {
          title: 'Optimization',
          desc: 'Maximum Inertia',
          icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
          coord: 'SPD_100.000'
        }
      ].map((step, i) => (
        <div key={step.title} className="group relative p-6 bg-zinc-900/40 border border-white/5 rounded-sm hover:border-white/10 transition-all duration-500 flex flex-col items-start overflow-hidden">
          {/* Technical Corner Markers */}
          <div className="absolute top-2 right-2 p-2 text-[7px] font-mono text-zinc-700 opacity-60 group-hover:opacity-100 transition-opacity">
            {step.coord}
          </div>

          <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors">
              <path d={step.icon} />
            </svg>
          </div>

          <div className="space-y-2 w-full">
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic flex items-center gap-2">
              <span className="w-4 h-px bg-zinc-800" />
              PROTOCOL_0{i + 1}
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-zinc-200 group-hover:text-white transition-colors tracking-tight truncate">{step.title}</h4>
            <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">{step.desc}</div>
          </div>

          {/* Connector Line (Decorative) */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      ))}
    </div>

    {/* Technical Sidebar Decoration */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block">
      <div className="flex flex-col gap-4 items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
        <div className="text-[8px] font-mono text-zinc-800 rotate-90 uppercase tracking-[.5em]">System_Diagnostics</div>
        <div className="w-px h-24 bg-gradient-to-b from-zinc-800 via-zinc-800 to-transparent" />
      </div>
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
