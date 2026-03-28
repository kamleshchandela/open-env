import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Rocket Icon */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <div className="p-5 rounded-full bg-primary/20 glow-purple border border-primary/30">
          <Rocket size={48} className="text-secondary" />
        </div>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-center tracking-tight mb-4"
      >
        <span className="gradient-text">Supply Chain OpenEnv</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl font-light"
      >
        A Real-World Reinforcement Learning Environment for Global Logistics
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <span className="px-4 py-1.5 rounded-full glass text-sm font-medium border-primary/30 text-primary-light">
          OpenEnv Compliant
        </span>
        <span className="px-4 py-1.5 rounded-full glass text-sm font-medium border-secondary/30 text-secondary">
          HuggingFace Ready
        </span>
        <span className="px-4 py-1.5 rounded-full glass text-sm font-medium border-white/20 text-slate-300">
          8 Parts
        </span>
      </motion.div>

      {/* Glowing Divider */}
      <div className="w-full max-w-4xl mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
    </section>
  );
};

export default Hero;
