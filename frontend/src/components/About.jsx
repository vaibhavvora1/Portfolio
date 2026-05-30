import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '5+', icon: <Rocket size={20} className="text-gold" /> },
  { label: 'Technologies Learned', value: '15+', icon: <Code2 size={20} className="text-gold" /> },
  { label: 'Problem Solving', value: '100+', icon: <Brain size={20} className="text-gold" /> },
  { label: 'Team Collaboration', value: '100%', icon: <Users size={20} className="text-gold" /> },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-32 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="section-subheading">About Me</motion.p>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1]">
              Passionate Full Stack Developer Building the <span className="text-gold">Future.</span>
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6 text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed mb-12">
              <p>
                I am a passionate Full Stack Developer with a strong interest in AI/ML and building scalable products. 
                My journey in tech is driven by a deep curiosity for how frontend and backend architectures work together 
                to create seamless user experiences.
              </p>
              <p>
                With a solid understanding of system design and a problem-solving mindset, I enjoy tackling complex 
                challenges. I believe in team collaboration and continuous learning to stay ahead in this 
                ever-evolving digital landscape.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="mb-4 p-3 w-fit bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-gold/10 dark:group-hover:bg-gold/20 transition-colors duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-gold transition-colors duration-500">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative sticky top-32"
          >
            <div className="aspect-[4/5] bg-black/5 rounded-3xl overflow-hidden relative z-10 group">
               <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Minimal Decorative Frame */}
            <div className="absolute -inset-4 border border-black/5 dark:border-white/5 rounded-[2.5rem] -z-10 group-hover:border-gold/20 transition-colors duration-700" />
            
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full blur-[100px] -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
