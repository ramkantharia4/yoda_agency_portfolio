import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    { year: '2025', title: 'The Foundation', desc: 'Mastering the craft. 20+ projects delivered with technical precision.' },
    { year: '2026', title: 'The Empire', desc: 'Scaling expertise into impact. Launching global identities from the ground up.' },
  ];

  return (
    <section ref={containerRef} id="story" className="py-40 px-6 lg:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="overflow-hidden mb-6">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs block"
              >
                Our Evolution
              </motion.span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              Experience is the <br />
              <span className="text-zinc-600 italic">foundation</span>. <br />
              Vision is the <br />
              <span className="text-white relative">
                skyscraper.
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-2 left-0 h-2 bg-blue-500/20 -z-10"
                />
              </span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed mb-16 font-light max-w-xl">
              At YodaDayo, we don’t just build websites; we <span className="text-white">architect digital legacies</span> that resonate and perform for modern industries.
            </p>

            <div className="space-y-12 relative pl-12">
              {/* Animated Path */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-zinc-900 overflow-hidden">
                <motion.div
                  style={{ height: pathHeight }}
                  className="w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              </div>

              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 0.8 }}
                  className="flex flex-col gap-2 items-start group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, backgroundColor: "#3b82f6", borderColor: "#3b82f6" }}
                    className="absolute -left-[57px] top-0 w-10 h-10 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500 group-hover:text-white transition-all duration-300 z-10"
                  >
                    {i + 1}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {m.title}
                      <span className="text-zinc-600 font-medium text-sm ml-3 tabular-nums">[{m.year}]</span>
                    </h3>
                    <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-light">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "brightness(0)" }}
            whileInView={{ opacity: 1, filter: "brightness(1)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] relative group border border-white/5">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="The Architectural Process"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="absolute -bottom-12 -right-12 w-56 h-56 bg-zinc-950 border border-white/10 p-10 rounded-[3rem] flex flex-col justify-end shadow-2xl backdrop-blur-xl"
            >
              <div className="text-5xl font-bold text-blue-500 tracking-tighter">20+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mt-3 leading-tight">
                Assets <br /> Architected
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
