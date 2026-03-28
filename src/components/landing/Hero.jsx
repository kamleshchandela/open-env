import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const springTransition = { type: 'spring', stiffness: 200, damping: 20 };

  return (
    <section className="relative bg-white pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Subtle Grid - Still keeping a faint architectural grid but less pronounced */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
          className="flex flex-col items-start"
        >
          <div className="px-3 py-1 bg-bg-mint text-primary-light text-xs font-bold rounded-full mb-6 border border-border-green flex items-center gap-2 shadow-realistic-sm">
            <span className="text-primary">✦</span> OpenEnv Compliant · v1.0.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 text-dark-green tracking-tight relative">
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
          
          <p className="text-lg md:text-xl text-text-medium mb-8 max-w-xl leading-relaxed">
            A complete, open-source reinforcement learning environment for training AI agents on real-world inventory and supply chain optimization problems. Deployable in minutes on HuggingFace Spaces.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 text-sm font-semibold text-text-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" /> OpenEnv Spec Compliant
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" /> HuggingFace Ready
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" /> Reproducible Baselines
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
              🚀 Start Building
            </button>
            <button className="btn-outline w-full sm:w-auto text-lg px-8 py-4 bg-white shadow-realistic-sm hover:shadow-realistic hover:-translate-y-0.5">
              📖 Read Documentation
            </button>
          </div>

          <p className="mt-8 text-sm text-text-light font-medium flex items-center gap-2">
            Trusted by <span className="font-bold text-primary">500+</span> AI researchers worldwide
          </p>
        </motion.div>

        {/* Right Illustration: Replacing SVG with Real Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4"
        >
          {/* Main Photorealistic Image Wrapper */}
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-realistic-lg border border-white/50 group">
             
            <img 
              src="/images/hero_warehouse.png" 
              alt="Ultra-modern smart supply chain warehouse" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 shadow-realistic-inner pointer-events-none rounded-[3rem]" />
            
            {/* Floating Organic Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-2xl px-6 py-4 rounded-[2rem] shadow-realistic border border-slate-100 flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <span className="text-primary font-bold">RL</span>
              </div>
              <div>
                <div className="text-xl font-bold text-dark-green tracking-tight">Active</div>
                <div className="text-[11px] text-text-medium font-bold uppercase tracking-widest">Training Agents</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
