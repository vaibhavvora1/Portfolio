import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const aiTools = [
  { name: 'ChatGPT', description: 'Advanced reasoning and logic generation.', impact: '3x Productivity' },
  { name: 'GitHub Copilot', description: 'Real-time pair programming and autocomplete.', impact: '40% Faster Coding' },
  { name: 'Claude', description: 'Context-aware documentation and refactoring.', impact: 'Deep Understanding' },
  { name: 'Cursor', description: 'The AI-first IDE that understands entire codebase.', impact: 'Seamless Workflow' },
  { name: 'Gemini', description: 'Multi-modal reasoning for complex integrations.', impact: 'Scalable Insights' },
  { name: 'v0 / Bolt.new', description: 'Instant UI generation and full-stack scaffolding.', impact: 'Rapid Prototyping' },
  { name : 'AntiGravity', description : "A modern and visually immersive web project featuring smooth animations, futuristic UI, and interactive user experience.", impact:' A responsive and user-friendly platform focused on clean design, performance, and seamless functionality.'}
];

const AITools = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.ai-card');
    
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth
      }
    });
  }, []);

  return (
    <section id="ai-tools" ref={containerRef} className="h-screen bg-pastel-pink dark:bg-[#09090b] overflow-hidden flex flex-col justify-between pt-28 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-20 flex-shrink-0">
        <h2 className="text-sm uppercase tracking-[0.3em] text-pastel-accent font-semibold mb-3 flex items-center gap-2">
          <Sparkles size={16} /> AI-Powered Development
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white transition-colors duration-500">
          The <span className="text-pastel-accent">AI Tools</span> I Leverage
        </h3>
      </div>

      <div className="flex gap-8 px-6 md:px-20 overflow-visible flex-grow items-center">
        {aiTools.map((tool, idx) => (
          <div 
            key={idx}
            className="ai-card flex-shrink-0 w-[380px] p-8 bg-pastel-yellow dark:bg-[#111113] border border-yellow-100 dark:border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-white dark:bg-[#151517] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
                <Zap className="text-pastel-accent" size={32} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/5 px-3 py-1 rounded-full">
                AI Tech
              </span>
            </div>
            
            <h4 className="text-2xl font-bold font-playfair mb-3 text-[#1a1a1a] dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors duration-500">{tool.name}</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-base transition-colors duration-500">
              {tool.description}
            </p>
            
            <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-3">
              <Cpu size={18} className="text-gold" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-300 transition-colors duration-500">{tool.impact}</span>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AITools;
