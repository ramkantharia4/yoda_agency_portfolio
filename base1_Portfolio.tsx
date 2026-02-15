
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="work" ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-12">
          {/* Section Header Card */}
          <div className="w-[500px] flex-shrink-0 flex flex-col justify-center pr-12">
            <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs mb-4">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Featured <br /><span className="italic">Works</span></h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Scroll to explore our latest case studies and digital masterpieces. Click cards for full briefing.
            </p>
          </div>

          {/* Project Cards */}
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="group relative w-[70vw] md:w-[600px] h-[500px] bg-zinc-900 rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer"
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute top-6 left-6 z-20">
        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
          {project.year}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-zinc-300 text-xs font-bold uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
          {project.description}
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black"
        >
          <span className="font-bold text-xs">VIEW</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 bg-black/95 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-6xl h-full bg-zinc-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative"
      >
        <button onClick={onClose} className="absolute top-8 right-8 z-20 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 p-12 overflow-y-auto">
          <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs mb-4 block">{project.category}</span>
          <h2 className="text-5xl font-black mb-8 leading-none">{project.title}</h2>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs uppercase font-bold text-zinc-500 mb-2">The Challenge</h4>
              <p className="text-zinc-300 leading-relaxed">{project.details.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-zinc-500 mb-2">The Solution</h4>
              <p className="text-zinc-300 leading-relaxed">{project.details.solution}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-zinc-500 mb-2">Key Outcomes</h4>
              <ul className="space-y-2">
                {project.details.results.map((r, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white">
                    <ArrowUpRight size={14} className="text-zinc-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
