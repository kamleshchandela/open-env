import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const springVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

const WhySection = () => {
  return (
    <section className="py-24 bg-white px-6 relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-4">Why Supply Chain OpenEnv</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-green max-w-3xl mx-auto tracking-tight relative z-10">
            The Real-World RL Benchmark You've Been Waiting For
          </h2>
          {/* Organic Shape Highlight Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-bg-mint/0 via-bg-mint/40 to-bg-mint/0 rounded-full blur-2xl -z-10" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Card 1: Large Visual Focus */}
          <motion.div 
            variants={springVariants}
            className="group relative bg-white/60 backdrop-blur-lg rounded-[3rem] shadow-realistic-sm hover:shadow-realistic-lg transition-all duration-500 overflow-hidden border border-white/50 flex flex-col h-full cursor-pointer"
          >
            <div className="h-64 w-full relative overflow-hidden bg-bg-pale">
              <img 
                src="/images/smart_delivery.png" 
                alt="Smart Delivery Logistics Optimization" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold font-display text-white drop-shadow-md">Solves Real Problems</h3>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <p className="text-text-medium leading-relaxed mb-8 font-medium">
                Not toy games or abstract puzzles. Train agents on actual inventory decisions, routing optimizations, and supply/demand forecasting that cost global enterprises millions annually.
              </p>
              <div className="flex items-center text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                Learn more about our real-world scenarios <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="flex flex-col gap-10">
            {/* Card 2: AI Researcher */}
            <motion.div 
              variants={springVariants}
              className="group flex flex-col sm:flex-row bg-white/60 backdrop-blur-lg rounded-[3rem] shadow-realistic-sm hover:shadow-realistic-lg transition-all duration-500 overflow-hidden border border-white/50 h-full cursor-pointer"
            >
              <div className="w-full sm:w-2/5 relative overflow-hidden bg-bg-pale max-h-48 sm:max-h-none">
                <img 
                  src="/images/ai_researcher.png" 
                  alt="AI Researcher at modern desk" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold font-display text-dark-green mb-3">Fully Reproducible</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  Seed-based determinism guarantees identical results every run. Publish results with confidence.
                </p>
                <div className="flex items-center text-sm font-bold text-primary group-hover:text-primary-light transition-colors mt-auto">
                  View baselines <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Text Heavy/Progressive Difficulty */}
            <motion.div 
              variants={springVariants}
              className="group bg-white/60 backdrop-blur-lg rounded-[3rem] shadow-realistic-sm hover:shadow-realistic-lg transition-all duration-500 border border-white/50 p-8 md:p-10 h-full flex flex-col justify-center cursor-pointer relative overflow-hidden"
            >
              <h3 className="text-xl font-bold font-display text-dark-green mb-3">3 Progressive Difficulty Levels</h3>
              <p className="text-sm text-text-medium leading-relaxed mb-6">
                Easy to Hard progression. Agents learn single-node fundamentals first, then tackle complex multi-supplier networks with random disruption scenarios mimicking the real world.
              </p>
              <div className="flex items-center gap-2">
                {['Easy', 'Medium', 'Hard'].map((diff, i) => (
                  <span key={i} className="px-3 py-1 bg-bg-pale text-primary border border-border-green rounded-full text-xs font-bold uppercase tracking-wider">
                    {diff}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
