import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, MousePointer2, Target, Zap, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types';
import MeshGradient from './MeshGradient';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

interface ServiceDetailProps {
  service: Service | null;
  onClose: () => void;
}

const themeIcons = {
  branding: Zap,
  web: MousePointer2,
  meta: Target,
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  const ThemeIcon = themeIcons[service.theme as keyof typeof themeIcons] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto selection:bg-white selection:text-black"
      ref={containerRef}>
      <MeshGradient />

      <div className="relative z-10">
        {/* Sticky Glass Header */}
        <nav className="sticky top-0 z-[70] flex justify-between items-center px-6 py-6 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5">
          <MagneticButton onClick={onClose}>
            <div className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold hover:text-white transition-colors">
              <div className="w-8 h-px bg-zinc-800 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
              Return_Index
            </div>
          </MagneticButton>

          <MagneticButton onClick={onClose}>
            <div className="w-12 h-12 border border-white/5 bg-zinc-900/50 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <X size={20} />
            </div>
          </MagneticButton>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <header className="pt-32 pb-32 border-b border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <ThemeIcon size={24} className="text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-500">{service.subtitle}</span>
            </motion.div>

            <TextReveal
              text={service.title}
              className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-white mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed text-justify">
                  {service.details.overview}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-wrap gap-2 justify-end">
                {service.benefits.map((benefit, i) => (
                  <span key={i} className="px-4 py-2 border border-white/5 bg-zinc-900/40 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Process Section */}
          <section className="py-32 border-b border-white/5">
            <div className="mb-20">
              <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold block mb-4">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                Logical <span className="text-zinc-800">Traversal.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {service.details.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group relative p-10 md:p-12 border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    <div className="md:col-span-2">
                      <div className="text-5xl md:text-6xl font-mono text-zinc-900 group-hover:text-white/10 transition-colors">
                        {step.step}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-2xl md:text-3xl font-light text-zinc-200 mb-6 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-base md:text-lg text-justify">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Deliverables Section */}
          <section className="py-32 border-b border-white/5">
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-4">
                <h3 className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold whitespace-nowrap">Standard Deliverables</h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <p className="text-zinc-500 text-lg">Core components engineered for maximum impact</p>
            </div>

            <div className="space-y-4">
              {service.details.included.map((deliverable, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-8 md:p-10 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <span className="text-sm font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0 mt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight">
                        {deliverable}
                      </h4>
                    </div>
                    <CheckCircle2 size={20} className="text-zinc-800 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact Analytics */}
          <section className="bg-white text-black p-12 md:p-20 lg:p-24 rounded-[3.5rem] mb-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] block mb-8">Yield Analysis</span>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-16">
                Market <br />
                <span className="italic font-light text-zinc-400 font-serif">Dominance.</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                {service.details.results.map((r, i) => (
                  <div key={i} className="p-8 md:p-10 bg-black/5 rounded-2xl">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-none break-words">
                      {r.value}
                    </div>
                    <div className="text-xs uppercase font-bold tracking-[0.3em] text-zinc-500">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="text-center pb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-800 font-bold block">Scale Your Empire</span>
              <h2 className="text-5xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.9] mb-12">
                Ready to Shift <br /> Sovereignty?
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <MagneticButton onClick={() => { onClose(); navigate('/meeting'); }}>
                  <div className="px-12 py-6 bg-white text-black font-black rounded-full uppercase tracking-widest text-[10px] flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-white/5">
                    Schedule a Meeting
                    <ArrowRight size={18} />
                  </div>
                </MagneticButton>
                <MagneticButton onClick={() => { onClose(); navigate('/start'); }}>
                  <div className="px-12 py-6 border border-white/5 bg-zinc-900 text-white font-black rounded-full uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-white hover:text-black transition-all">
                    Start Project Initiation
                  </div>
                </MagneticButton>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
