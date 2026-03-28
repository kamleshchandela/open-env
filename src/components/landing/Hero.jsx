import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const springTransition = { type: 'spring', stiffness: 200, damping: 20 };

  return (
    <section className="relative bg-transparent pt-24 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Subtle Grid - Now floating softly behind the glass layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-[-1]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
          className="flex flex-col items-start"
        >
          <div className="px-3 py-1 bg-white/60 backdrop-blur-2xl text-primary font-bold text-xs rounded-full mb-8 border border-white/80 flex items-center gap-2 shadow-realistic-sm">
            <span className="text-primary animate-pulse-subtle">✦</span> OpenEnv Compliant · v1.0.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 text-dark-green tracking-tight relative drop-shadow-sm">
            Build <span className="text-primary inline-block relative">
              Smarter
              {/* Hand-drawn underline SVG */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span><br />
            Supply Chain<br />
            <span className="text-primary">AI Agents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-medium mb-10 max-w-xl leading-relaxed font-medium">
            A complete, open-source reinforcement learning environment for training AI agents on real-world inventory and supply chain optimization problems. Deployable in minutes on HuggingFace Spaces.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12 text-sm font-bold text-text-medium">
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
              <CheckCircle2 size={16} className="text-primary" /> OpenEnv Spec
            </div>
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
              <CheckCircle2 size={16} className="text-primary" /> HuggingFace Ready
            </div>
          </div>

          {/* Heavy Glassmorphism Pill Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="group relative overflow-hidden bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] px-8 py-5 flex items-center justify-center gap-3 text-lg font-bold text-dark-green shadow-[0_20px_40px_-15px_rgba(22,163,74,0.3)] hover:shadow-[0_25px_50px_-15px_rgba(22,163,74,0.5)] hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-primary group-hover:scale-125 transition-transform duration-300">✦</span> 
              <span className="relative z-10">Start Building</span>
            </button>
            <button className="group bg-white/20 backdrop-blur-xl border border-white/40 rounded-[3rem] px-8 py-5 flex items-center justify-center gap-2 text-lg font-bold text-text-medium hover:bg-white/40 hover:text-dark-green hover:shadow-realistic hover:-translate-y-1 transition-all duration-500">
              Read Documentation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="mt-10 text-sm text-text-light font-medium flex items-center gap-2">
            Trusted by <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">500+</span> AI researchers
          </p>
        </motion.div>

        {/* Right Illustration: Huge Rounded Window + Isolated Overflow for Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8"
        >
          {/* Main Container - NO overflow hidden so the child box can spill out */}
          <div className="relative w-full aspect-square md:aspect-[4/3] group">
             
             {/* Actual Image Clipping Mask */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-realistic-lg border border-white/60">
              <img 
                src="/images/hero_warehouse.png" 
                alt="Ultra-modern smart supply chain warehouse" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 shadow-realistic-inner pointer-events-none rounded-[3rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Floating Organic Element - Now free completely from overflow-hidden clipping! */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white/70 backdrop-blur-3xl px-8 py-5 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(22,163,74,0.3)] border border-white flex items-center gap-5 hover:scale-105 transition-transform duration-500 z-20"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center relative shadow-sm">
                <div className="absolute inset-0 rounded-full border-[3px] border-primary border-t-transparent animate-spin" />
                <span className="text-primary font-bold text-lg">RL</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-green tracking-tight leading-none mb-1">Active</div>
                <div className="text-[10px] text-text-medium font-bold uppercase tracking-widest leading-none">Training Agents</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
