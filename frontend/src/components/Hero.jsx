import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium Text Reveal
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".reveal-text-line", {
        y: 100,
        rotateX: -20,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        delay: 0.5
      })
      .from(".hero-image-container", {
        scale: 1.1,
        opacity: 0,
        filter: "blur(20px)",
        duration: 2,
      }, "-=1.2")
      .from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 1
      }, "-=0.5");

      // Parallax & Mask Scroll Effect
      gsap.to(".hero-mask", {
        scale: 1.2,
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(".parallax-content", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, heroRef);

  
    return () => {
      
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-500"
    >
      {/* Subtle Background Texture/Depth */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 parallax-content">
        <div ref={textRef}>
          <div className="overflow-hidden mb-2">
            <p className="reveal-text-line text-gold font-medium tracking-[0.3em] uppercase text-xs">
              Full Stack Developer & Designer
            </p>
          </div>
          
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              <div className="overflow-hidden h-fit py-1">
                <span className="reveal-text-line block">Vaibhav</span>
              </div>
              <div className="overflow-hidden h-fit py-1">
                <span className="reveal-text-line block text-gold">Vora</span>
              </div>
            </h1>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="reveal-text-line text-lg text-slate-500 dark:text-slate-400 max-w-md font-light leading-relaxed">
              Building Scalable, Premium Digital Experiences with modern technologies and artistic precision.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center reveal-text-line">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-500 ease-out group shadow-xl shadow-black/10 dark:shadow-white/5"
            >
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/Vaibhav_Vora_Resume (2).pdf"
              download="Vaibhav_Vora_Resume.pdf"
              className="px-8 py-4 border border-slate-200 dark:border-white/10 rounded-full flex items-center gap-2 hover:bg-white dark:hover:bg-white/5 hover:border-gold/50 transition-all duration-500"
            >
              Resume <Download size={18} />
            </a>
          </div>
        </div>

        <div className="relative hero-image-container">
          <div className="relative w-full aspect-[4/5] max-w-[450px] mx-auto group">
            {/* The Mask Effect Container */}
            <div className="absolute inset-0 bg-gold/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out" />
            
            <div 
              ref={imageRef}
              className="hero-mask relative w-full h-full rounded-2xl shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            >
              <img
                src="/photo.jpeg"
                alt="Vaibhav Vora"
                className="shrey-mask-target h-full w-full object-cover"
              />
              {/* Overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[0.5px] border-gold/20 rounded-full animate-pulse pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 font-medium">Explore</span>
        <div className="w-[1px] h-16 bg-slate-200 dark:bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gold"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
