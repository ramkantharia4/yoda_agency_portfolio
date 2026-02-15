import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import { TEAM } from '../constants';

const TeamMemberCard: React.FC<{ member: any; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group w-full md:w-1/3"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-10 bg-zinc-900 border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
        />

        {/* Social Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3">
            {member.socials.instagram && (
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                href={member.socials.instagram}
                target="_blank"
                className="p-3 bg-black/50 backdrop-blur-md text-white rounded-2xl border border-white/10"
              >
                <Instagram size={18} />
              </motion.a>
            )}
            {member.socials.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                href={member.socials.linkedin}
                target="_blank"
                className="p-3 bg-black/50 backdrop-blur-md text-white rounded-2xl border border-white/10"
              >
                <Linkedin size={18} />
              </motion.a>
            )}
          </div>

          {member.socials.portfolio && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={member.socials.portfolio}
              target="_blank"
              className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <ArrowUpRight size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
          className="text-4xl font-black mb-2 text-white"
        >
          {member.name}
        </motion.h3>
      </div>

      <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">{member.role}</p>

      <p className="text-zinc-500 text-lg leading-relaxed max-w-sm font-light">
        {member.bio}
      </p>
    </motion.div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-40 px-6 lg:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              The Visionaries
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black leading-none text-white tracking-tighter">
              The <span className="italic text-zinc-600">Architects</span> <br />
              of Momentum.
            </h2>
          </div>
          <p className="text-zinc-500 text-xl max-w-sm font-light leading-relaxed border-l border-zinc-900 pl-10">
            Founded by engineers dedicated to elevating digital culture through strategic design and raw technical power.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-start gap-20">
          {TEAM.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
