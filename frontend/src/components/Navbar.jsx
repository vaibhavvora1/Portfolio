import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Skills', href: '/#skills' },
  { name: 'AI Tools', href: '/#ai-tools' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

/* ── Animated pill-style theme toggle ── */
const ThemeToggle = ({ theme, onToggle, mobile = false }) => {
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={onToggle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      aria-label="Toggle theme"
      style={{
        width: mobile ? 44 : 52,
        height: mobile ? 24 : 28,
        borderRadius: 999,
        padding: 3,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        flexShrink: 0,
        background: isDark
          ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
          : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        boxShadow: isDark
          ? '0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 3px rgba(0,0,0,0.4)'
          : '0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 3px rgba(0,0,0,0.1)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Track icons */}
      <span style={{
        position: 'absolute',
        left: 5,
        fontSize: mobile ? 9 : 10,
        opacity: isDark ? 1 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>🌙</span>
      <span style={{
        position: 'absolute',
        right: 5,
        fontSize: mobile ? 9 : 10,
        opacity: isDark ? 0 : 1,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>☀️</span>

      {/* Thumb */}
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          width: mobile ? 18 : 22,
          height: mobile ? 18 : 22,
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: isDark ? 'auto' : 0,
          flexShrink: 0,
        }}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 30, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: mobile ? 9 : 11, lineHeight: 1 }}
        >
          {isDark ? '🌙' : '☀️'}
        </motion.span>
      </motion.span>
    </motion.button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fix: correct operator precedence for initial theme detection
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply dark class immediately on mount and whenever theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled || !isHome ? 'py-4 bg-[#fafafa]/80 dark:bg-[#0a0a0c]/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-1"
          >
            <span className="relative z-10">VAIBHAV</span>
            <span className="text-gold relative z-10">.</span>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {isHome ? (
              navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  className="relative text-[13px] font-medium uppercase tracking-[0.1em] text-[#1a1a1a]/70 dark:text-white/70 hover:text-[#1a1a1a] dark:hover:text-white transition-all duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500" />
                </motion.a>
              ))
            ) : (
              <Link to="/" className="text-[13px] font-medium uppercase tracking-[0.1em] text-slate-900 dark:text-white hover:text-gold transition-colors">
                Back to Home
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-6 pl-6 border-l border-black/5 dark:border-white/10">

            {/* Animated Theme Toggle */}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-full text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-black dark:hover:bg-slate-200 transition-all shadow-lg shadow-black/5 flex items-center gap-2"
            >
              Hire Me <Sparkles size={14} className="text-gold" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} mobile />

          <button 
            className="p-2 text-slate-900 dark:text-white hover:rotate-90 transition-transform duration-500" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-[#0a0a0c] z-[99] flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-8 right-8 p-4 text-slate-900 dark:text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-bold tracking-tighter text-[#1a1a1a] dark:text-white hover:text-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
