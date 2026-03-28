import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-white border-b border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-bg-mint flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Leaf size={18} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-dark-green tracking-tight text-xl">OpenEnv</span>
        </Link>

        {/* Center: Breadcrumbs (Hidden on Mobile) */}
        <div className="hidden md:flex items-center text-sm font-medium text-text-medium">
          <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
          <span className="mx-2 text-slate-300">/</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Projects</span>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-text-dark font-semibold">Supply Chain</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:flex px-4 py-2 text-sm font-semibold text-primary border border-primary/30 rounded-lg hover:bg-bg-pale transition-colors">
            View on HuggingFace
          </a>
          <a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors shadow-sm shadow-primary/20">
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
