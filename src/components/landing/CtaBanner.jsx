import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CtaBanner = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], ['0%', '20%']); // Subtle parallax effect

  return (
    <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center border-t border-white/50">
      
      {/* Soft AI Liquid Gradient Background deeply blurred */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a] via-[#10b981] to-[#047857] opacity-90 mix-blend-multiply" />
        <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[150%] bg-white/20 rounded-[100%] blur-[120px] mix-blend-overlay rotate-12" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-300/30 rounded-[100%] blur-[80px] mix-blend-color-dodge" />
        {/* Abstract Ambient Image Fill */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="relative z-10 w-full max-w-4xl"
      >
        {/* Soft Frosted Glass Container */}
        <div className="bg-white/10 backdrop-blur-3xl p-12 md:p-16 rounded-[3rem] border border-white/30 shadow-[0_20px_50px_rgba(4,120,87,0.3)] flex flex-col items-center text-center overflow-hidden">
          
          {/* Inner ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/30 blur-[60px] rounded-full z-0 pointer-events-none" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-8 relative z-10 shadow-realistic-sm text-white">
            <Sparkles size={28} />
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-md tracking-tight relative z-10">
            Train Intelligence. <br/><span className="text-bg-mint font-light italic">Start Here.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-medium leading-relaxed drop-shadow-sm relative z-10">
            OpenEnv removes the friction of orchestration so you can focus entirely on your reinforcement learning objectives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-10">
            <button 
              onClick={() => navigate('/part-1')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-dark-green font-bold rounded-full hover:bg-bg-pale transition-all duration-300 shadow-realistic-lg hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] group flex items-center justify-center text-lg hover:scale-105"
            >
              Enter Part 1 <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/50 bg-white/5 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 hover:border-white/80 transition-all duration-300 flex items-center justify-center text-lg">
              HuggingFace Space
            </button>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default CtaBanner;
