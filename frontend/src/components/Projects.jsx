import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fallback demo data
  const demoProjects = [
    {
      _id: '1',
      title: 'SCATCH Ecommerce',
      description: 'Premium Ecommerce Platform with full authentication, cart management, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      liveLink: 'https://scatch-snowy.vercel.app/',
      githubLink: 'https://github.com/vaibhavvora1/Scatch.git',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    },
    {
      _id: '2',
      title: 'Chess.com Clone',
      description: 'Real-time multiplayer chess game with move validation and premium UI/UX.',
      techStack: ['React', 'Socket.io', 'Express', 'Tailwind'],
      liveLink: 'https://chess-mocha-three.vercel.app/',
      githubLink: 'https://github.com/vaibhavvora1/chess-game-.git',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  useEffect(() => {
    setProjects(demoProjects);
    setTotalPages(1);
    setLoading(false);
  }, [page]);

  return (
    <section id="projects" className="py-32 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="section-subheading">Selected Works</p>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Featured <span className="text-gold">Projects</span>
            </h3>
          </div>
          <div className="flex gap-4 mb-2">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-14 h-14 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 disabled:opacity-20 text-slate-800 dark:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-14 h-14 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 disabled:opacity-20 text-slate-800 dark:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          <AnimatePresence mode="wait">
            {loading ? (
              <div key="loader" className="grid md:grid-cols-2 gap-12 col-span-2">
                {[1, 2].map(i => (
                  <div key={i} className="animate-pulse bg-black/5 dark:bg-white/5 aspect-[16/10] rounded-3xl" />
                ))}
              </div>
            ) : (
              projects.map((project, idx) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/5 dark:bg-white/5 mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center gap-6 backdrop-blur-[2px]">
                      <div className="flex gap-4">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-16 h-16 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <ExternalLink size={24} />
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-16 h-16 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <FaGithub size={24} />
                        </a>
                      </div>
                    </div>

                    {/* View Details Float */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                       <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black shadow-xl">
                          Project View <ArrowUpRight size={14} />
                       </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-3xl font-bold tracking-tight text-[#1a1a1a] dark:text-white mb-4 group-hover:text-gold transition-colors duration-500">{project.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-lg mb-8 line-clamp-2 transition-colors duration-500">
                      {project.description}
                    </p>
                    
                    <div className="h-[1px] w-full bg-black/5 dark:bg-white/5 group-hover:bg-gold/30 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
