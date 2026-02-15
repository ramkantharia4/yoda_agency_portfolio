import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Plan: React.FC = () => {
  const navigate = useNavigate();
  const [isExpanding, setIsExpanding] = useState(false);

  const handleExpand = () => {
    setIsExpanding(true);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Choose the <span className="italic">Perfect Plan</span></h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
            Find the right plan that aligns with your goals. Explore our tailored options to see how we can elevate your brand’s digital growth.
          </p>

          {/* Button / Morphing Overlay Container */}
          <div className="relative">
            {!isExpanding ? (
              <motion.button
                layoutId="plans-transition-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExpand}
                className="flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold group"
              >
                <motion.span layoutId="plans-button-text">View Our Plans</motion.span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            ) : (
              <motion.div
                layoutId="plans-transition-button"
                className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                initial={{ borderRadius: "50px" }}
                animate={{ borderRadius: "0px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onLayoutAnimationComplete={() => navigate('/plans')}
              >
                <motion.span
                  layoutId="plans-button-text"
                  className="text-white text-3xl font-bold"
                  animate={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                >
                  View Our Plans
                </motion.span>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="w-64 h-80 bg-zinc-100 rounded-lg shadow-2xl border border-zinc-200 p-6 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-zinc-200 rounded-full blur-3xl opacity-50" />
            <div className="font-bold text-sm tracking-widest text-zinc-400">YODADAYO</div>
            <div className="text-2xl font-black leading-tight">2024<br />Capabilities<br />Review</div>
            <div className="flex justify-between items-end">
              <div className="text-[10px] text-zinc-400">v1.02</div>
              <div className="w-8 h-8 bg-black rounded-full" />
            </div>
          </div>
          {/* Shadow/Backing decoration */}
          <div className="absolute -z-10 top-4 -right-4 w-64 h-80 bg-zinc-200 rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
