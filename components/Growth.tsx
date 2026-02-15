import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { STATS } from '../constants';

const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2500;
    let timer: any;

    const updateCount = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Dynamic easing for a more premium feel
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * (end - 0) + 0));
      if (progress < 1) {
        timer = requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

const StatCard: React.FC<{ stat: any; index: number }> = ({ stat, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 overflow-hidden transition-colors hover:border-blue-500/30"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-white group-hover:text-blue-500 transition-colors tabular-nums">
          <Counter target={stat.value} suffix={stat.suffix} />
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {stat.label} Metric
        </div>
        <p className="mt-6 text-zinc-600 text-sm font-medium leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Engineered for maximum platform stability and growth.
        </p>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500"
              />
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                WE REFUSE <br />
                <span className="text-zinc-800 italic">AVERAGE.</span>
              </h3>
              <p className="text-zinc-400 text-2xl font-light leading-relaxed max-w-xl">
                At YodaDayo, mediocrity is the only failure. Every project we touch is an obsession with <span className="text-white">technical perfection</span> and aesthetic supremacy.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 pt-12 border-t border-zinc-900">
              {[
                { id: "01", text: "Performance is our religion. If it isn't lightning fast, it isn't finished." },
                { id: "02", text: "Every pixel is an investment. We build digital assets that compound in value." },
                { id: "03", text: "Building empires, not just websites. We scale with your ambition." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-8 items-start group"
                >
                  <span className="text-blue-500 font-black text-2xl leading-none tabular-nums group-hover:scale-125 transition-transform">{item.id}</span>
                  <p className="text-zinc-300 font-light text-xl leading-snug group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {STATS.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
