import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'VS Code', icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmESvWFqgy6FNrwzWSIu2lzePyWSz8zg09RAX43OFexidzEE3_7l3auaKk4w9ktJdqg-&format=source' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/c5a059' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/c5a059' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/c5a059' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/c5a059' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/c5a059' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/1a1a1a' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify/c5a059' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/c5a059' },
  { name: 'npm', icon: 'https://cdn.simpleicons.org/npm/c5a059' },
  { name: 'Yarn', icon: 'https://cdn.simpleicons.org/yarn/c5a059' },
];

const Tools = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#tools-section",
        start: "top top",
        end: () => `+=${scrollContainer.scrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="tools-section" className="h-screen bg-pastel-blue dark:bg-[#09090b] overflow-hidden flex flex-col justify-between pt-28 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-20 flex-shrink-0">
        <h2 className="text-sm uppercase tracking-[0.3em] text-pastel-accent font-semibold mb-3">My Toolbox</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white transition-colors duration-500">
          The <span className="text-pastel-accent">Tools</span> I Use
        </h3>
      </div>
      
      <div ref={scrollRef} className="flex gap-12 px-6 md:px-20 whitespace-nowrap overflow-visible flex-grow items-center">
        {tools.map((tool, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-64 h-80 bg-pastel-pink dark:bg-[#111113] border border-pink-100 dark:border-white/5 rounded-3xl flex flex-col items-center justify-center gap-6 group hover:border-pastel-accent/50 dark:hover:border-pastel-accent/30 transition-all duration-500"
          >
            <div className="w-24 h-24 flex items-center justify-center bg-white dark:bg-[#151517] rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-pink-200/20 dark:shadow-none">
              <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
            </div>
            <span className="text-slate-700 dark:text-slate-200 font-bold text-xl font-playfair tracking-wider uppercase transition-colors duration-500">
              {tool.name}
            </span>
            <div className="absolute inset-0 bg-pastel-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
