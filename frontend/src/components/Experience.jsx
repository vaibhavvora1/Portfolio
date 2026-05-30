import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Video, Sparkles } from 'lucide-react';

const softSkills = [
  'Team Working', 'Problem Solving', 'Communication', 'Critical Thinking', 
  'Debugging', 'Fast Learning', 'Project Planning', 'Collaboration'
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-[#0a0a0c] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <p className="section-subheading">Soft Skills & Expertise</p>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Professional <span className="text-gold">Attributes</span></h3>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 p-12 bg-[#1a1a1a] dark:bg-[#111113] rounded-[3rem] text-white relative overflow-hidden group shadow-2xl shadow-black/20 dark:shadow-none border border-transparent dark:border-white/5"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-10 group-hover:scale-110 transition-transform duration-700">
                <Video size={32} />
              </div>
              <h4 className="text-3xl font-bold tracking-tight mb-6">Additional Skills</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Beyond development, I have a creative edge in <span className="text-white font-medium">Video Editing</span>, 
                allowing me to craft compelling visual stories and high-quality digital content.
              </p>
              
              <div className="flex items-center gap-3 text-gold/80 text-sm font-semibold uppercase tracking-[0.2em]">
                <Sparkles size={16} /> 
                <span>Creative Mindset</span>
              </div>
            </div>
            
            {/* Ambient Background Gradient */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-all duration-1000" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-all duration-1000" />
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 bg-[#fafafa] dark:bg-[#111113] border border-black/5 dark:border-white/5 rounded-3xl flex items-center gap-5 hover:border-gold/30 hover:bg-white dark:hover:bg-[#151517] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-none transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1c] border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/20 transition-colors duration-500">
                  <CheckCircle2 className="text-gold/40 group-hover:text-gold transition-colors duration-500" size={20} />
                </div>
                <span className="text-lg font-medium text-slate-700 dark:text-slate-200 tracking-tight transition-colors duration-500">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
