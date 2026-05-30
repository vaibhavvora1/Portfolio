import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bhavnagar University',
    location: 'Bhavnagar, Gujarat',
    period: '2023 - 2026',
    description: 'Focused on software engineering, web development, and database management systems. Graduated with a strong foundation in computer science principles.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-[#09090b] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">Educational Background</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white transition-colors duration-500">Academic <span className="text-gold">Journey</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 border-l-2 border-slate-200 dark:border-white/10 last:border-l-0"
            >
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-[#09090b] border-4 border-gold shadow-sm" />
              
              <div className="p-8 bg-white dark:bg-[#111113] rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold font-playfair text-slate-900 dark:text-white group-hover:text-gold transition-colors">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-1">
                      <GraduationCap size={16} />
                      <span className="text-sm font-medium">{edu.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gold font-bold text-sm bg-gold/10 dark:bg-gold/20 px-4 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light transition-colors duration-500">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
