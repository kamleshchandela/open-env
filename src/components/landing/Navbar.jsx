import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4 pb-2 pointer-events-none flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
        className={`w-full max-w-5xl pointer-events-auto transition-all duration-500 rounded-[3rem] ${
          scrolled 
            ? 'bg-white/60 backdrop-blur-3xl shadow-realistic-lg border border-white/80 py-3 px-6' 
            : 'bg-white/30 backdrop-blur-md shadow-sm border border-white/40 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Left: Soft Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm relative overflow-hidden ${scrolled ? 'bg-white shadow-realistic-sm' : 'bg-white/80'}`}>
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <Leaf size={18} strokeWidth={2.5} className="text-primary group-hover:scale-110 transition-transform duration-300 relative z-10" />
            </div>
            <span className="font-display font-bold text-dark-green tracking-tight text-xl group-hover:text-primary transition-colors duration-300">
              OpenEnv
            </span>
          </Link>

          {/* Center: Soft Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-text-medium/80">
            <span className="hover:text-primary transition-colors cursor-pointer tracking-wide">Ecosystem</span>
            <span className="hover:text-primary transition-colors cursor-pointer tracking-wide">Documentation</span>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-dark-green tracking-wide">Supply Chain</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
          </div>

          {/* Right: Pill Actions */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:flex px-5 py-2.5 text-sm font-bold text-text-medium bg-white/50 hover:bg-white backdrop-blur-md rounded-full transition-all duration-300 shadow-sm border border-white/60">
              HuggingFace
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-dark-green rounded-full transition-all duration-500 shadow-realistic-sm hover:shadow-realistic-lg hover:-translate-y-0.5 group">
              Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
