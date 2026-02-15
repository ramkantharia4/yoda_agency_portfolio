
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Next.js', 'React', 'Meta', 'Tailwind', 'Node.js', 'Framer Motion', 'Figma', 'Vercel'
];

const Brand: React.FC = () => {
  return (
    <section id="brands" className="py-20 bg-black border-y border-zinc-900 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex space-x-20 items-center px-10"
        >
          {Array(2).fill(brands).flat().map((brand, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-black text-transparent hover:text-white transition-all duration-500 cursor-default tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
