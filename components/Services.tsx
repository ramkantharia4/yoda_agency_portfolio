
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, TrendingUp, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const iconMap = {
  palette: Palette,
  code: Code,
  'trending-up': TrendingUp,
};

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  // Slow continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative py-48 px-6 lg:px-12 bg-black overflow-hidden min-h-screen flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#222_0%,_transparent_70%)]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            Digital Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            Our <span className="italic text-zinc-500">Core</span> Services
          </motion.h2>
        </div>

        {/* The Orbital Map */}
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          {/* Central Anchor */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative z-20 w-32 h-32 md:w-48 md:h-48 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/40 transition-colors" />
            <Sparkles size={40} className="text-white group-hover:scale-125 transition-transform" />
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite]" />
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {SERVICES.map((s, i) => {
              const angle = (i * (360 / SERVICES.length) + rotation) * (Math.PI / 180);
              const radius = window.innerWidth > 768 ? 250 : 150;
              const x2 = 300 + Math.cos(angle) * radius;
              const y2 = 300 + Math.sin(angle) * radius;

              return (
                <motion.line
                  key={`line-${s.id}`}
                  x1="50%" y1="50%"
                  x2={`${(x2 / 600) * 100}%`} y2={`${(y2 / 600) * 100}%`}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{
                    stroke: hoveredId === s.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.05)",
                    strokeWidth: hoveredId === s.id ? 2 : 1
                  }}
                />
              );
            })}
          </svg>

          {/* Orbital Services */}
          {SERVICES.map((service, i) => (
            <OrbitalCard
              key={service.id}
              service={service}
              index={i}
              total={SERVICES.length}
              rotation={rotation}
              onHover={setHoveredId}
              onClick={() => onSelectService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface OrbitalCardProps {
  service: Service;
  index: number;
  total: number;
  rotation: number;
  onHover: (id: string | null) => void;
  onClick: () => void;
}

const OrbitalCard: React.FC<OrbitalCardProps> = ({ service, index, total, rotation, onHover, onClick }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const angle = (index * (360 / total) + rotation) * (Math.PI / 180);
  const radius = typeof window !== 'undefined' && window.innerWidth > 768 ? 250 : 150;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      style={{ x, y }}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onHover(null)}
      onClick={onClick}
      className="absolute z-30 group cursor-pointer"
    >
      <div className="relative">
        {/* Animated Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 bg-zinc-900/40 backdrop-blur-xl rounded-full border border-zinc-800 group-hover:border-white/30 transition-all duration-500" />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-44 md:h-44 border border-dashed border-white/5 rounded-full"
        />

        <div className="relative flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 text-center p-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="mb-2 text-zinc-400 group-hover:text-white transition-colors"
          >
            <Icon size={32} />
          </motion.div>

          <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors whitespace-nowrap">
            {service.title.split(' ')[0]}
          </h3>

          {/* Detailed Info (Revealed on Hover) */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 text-center">
            <p className="text-[10px] text-zinc-500 italic mb-2">{service.subtitle}</p>
            <div className="flex justify-center gap-1">
              {service.benefits.slice(0, 2).map((b, idx) => (
                <span key={idx} className="text-[8px] bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-400 uppercase font-bold">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
