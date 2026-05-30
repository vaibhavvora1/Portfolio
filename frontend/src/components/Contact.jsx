import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Sparkles, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-subheading">Get In Touch</p>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[1.1]">
              Let's <span className="text-gold">Connect.</span>
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-md transition-colors duration-500">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#111113] border border-black/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 font-bold">Email</div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">vrvora11@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#111113] border border-black/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 font-bold">Location</div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Bhavnagar, India</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#111113] border border-black/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 font-bold">Phone</div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">+91 81538 75076</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              {[FaGithub, FaLinkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-14 h-14 rounded-full bg-white dark:bg-[#111113] border border-black/5 dark:border-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-gold hover:border-gold/50 transition-all duration-500"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="p-10 md:p-14 bg-white dark:bg-[#111113] rounded-[3rem] border border-black/5 dark:border-white/5 shadow-2xl shadow-black/[0.03] dark:shadow-none"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 pl-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full px-6 py-5 bg-[#fafafa] dark:bg-[#151517] border border-black/5 dark:border-white/10 rounded-2xl focus:outline-none focus:border-gold/30 dark:focus:border-gold/40 focus:bg-white dark:focus:bg-[#151517] transition-all duration-500 font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 pl-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full px-6 py-5 bg-[#fafafa] dark:bg-[#151517] border border-black/5 dark:border-white/10 rounded-2xl focus:outline-none focus:border-gold/30 dark:focus:border-gold/40 focus:bg-white dark:focus:bg-[#151517] transition-all duration-500 font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 pl-1">Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can I help you?" 
                  className="w-full px-6 py-5 bg-[#fafafa] dark:bg-[#151517] border border-black/5 dark:border-white/10 rounded-2xl focus:outline-none focus:border-gold/30 dark:focus:border-gold/40 focus:bg-white dark:focus:bg-[#151517] transition-all duration-500 font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-6 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-black dark:hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-black/10 dark:shadow-none"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && <Sparkles size={16} className="text-gold" />}
              </button>

              {status === 'success' && <p className="text-green-500 text-center font-medium animate-pulse">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-center font-medium">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
