import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js', 'Zustand', 'Axios']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'JWT', 'MVC Architecture', 'Validation']
  },
  {
    title: 'Advanced',
    skills: ['API Optimization', 'Pagination', 'Database Optimization', 'Secure APIs', 'Docker', 'Redis', 'Nginx', 'AWS']
  },
  {
    title: 'Core Concepts',
    skills: ['DNS', 'HTTP/HTTPS', 'Browser Rendering', 'Server Architecture', 'CDN Basics', 'Request Lifecycle']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            My Expertise
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Technical <span className="text-gold">Stack</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 rounded-[2.5rem] bg-white dark:bg-[#111113] border border-black/5 dark:border-white/5 hover:border-gold/20 dark:hover:border-gold/30 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-700 group"
            >
              <h4 className="text-xl font-bold mb-8 tracking-tight group-hover:text-gold transition-colors duration-500">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-4">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors duration-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
