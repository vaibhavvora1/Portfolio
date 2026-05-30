import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] dark:bg-[#09090b] text-white py-24 relative overflow-hidden transition-colors duration-500 border-t border-transparent dark:border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/5 pb-20">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold tracking-tighter mb-8 italic">VAIBHAV<span className="text-gold">.</span></h2>
            <p className="text-slate-400 font-light leading-relaxed text-lg">
              Crafting premium digital experiences through innovative engineering and artistic design. 
              Let's build something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Navigation</h3>
              <div className="flex flex-col gap-4 text-slate-400 text-sm">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Social</h3>
              <div className="flex flex-col gap-4 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
          <p className="text-slate-500 text-sm font-light">
            © {currentYear} VAIBHAV VORA. DEVELOPED WITH PASSION.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-500"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
      
      {/* Ambient Gradient */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
