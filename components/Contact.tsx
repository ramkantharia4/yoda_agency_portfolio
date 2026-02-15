
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-900/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs mb-4 block">Inaugurate Your Project</span>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">Let’s <span className="italic text-zinc-700">Build</span> Your Empire.</h2>
          <div className="space-y-6 mt-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Email Address</p>
              <p className="text-lg text-zinc-300 underline decoration-zinc-800 underline-offset-4">yodadayorp@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 p-12 md:p-16 rounded-[3rem] border border-zinc-800 relative overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
            <Sparkles size={28} className="text-zinc-400 group-hover:text-white transition-colors" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to launch <br /> your vision?</h3>
          <p className="text-zinc-500 mb-10 text-lg max-w-sm">
            Skip the small talk. Let's start building your premium digital identity today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/start')}
            className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all"
          >
            Get In Touch
            <ArrowRight size={22} />
          </motion.button>

          <p className="mt-8 text-xs font-bold text-zinc-700 uppercase tracking-widest">
            Estimated response: &lt; 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
