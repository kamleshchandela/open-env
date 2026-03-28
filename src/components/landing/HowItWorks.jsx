import React from 'react';
import { motion } from 'framer-motion';

const StepCard = ({ num, title, desc, delay, imageUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, type: 'spring', stiffness: 100, damping: 20 }}
      className="group relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-start w-full cursor-pointer h-[500px]"
    >
      {/* Hyper-realistic background image */}
      <div className="absolute inset-0 bg-slate-100 z-0 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
        />
      </div>

      {/* Glossy gradient overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/20 to-transparent z-10 transition-opacity duration-700 opacity-80 group-hover:opacity-100" />
      
      {/* Big Number Accent */}
      <div className="absolute top-8 right-8 text-white/50 font-display font-black text-6xl md:text-8xl z-20 mix-blend-overlay">
        0{num}
      </div>
      
      {/* Frosted Glass Content Panel at Bottom */}
      <div className="relative z-30 mt-auto p-8 md:p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border-t border-white/20 -z-10 rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-3 drop-shadow-sm">{title}</h3>
        <p className="text-white/90 leading-relaxed font-medium text-sm md:text-base max-w-sm drop-shadow-sm">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: 1, title: 'Build OpenEnv', desc: 'Define your state space, actions, and task progression strictly within the canonical openenv.yaml contract.', imageUrl: '/images/step_build.png' },
    { num: 2, title: 'Verify Agents', desc: 'Validate everything against deterministic baselines ensuring environmental parity before sending to rigorous training.', imageUrl: '/images/step_test.png' },
    { num: 3, title: 'Deploy Global', desc: 'Push seamlessly into HuggingFace Spaces. Open the API endpoints globally, enabling instant reinforcement learning.', imageUrl: '/images/step_deploy.png' },
  ];

  return (
    <section className="py-32 overflow-hidden relative border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-realistic-sm backdrop-blur-md">Workflow</span>
            <h2 className="text-5xl md:text-7xl font-bold font-display text-dark-green tracking-tight leading-[1.1]">
              From Concept to <br/><span className="text-primary/90 italic drop-shadow-sm">Deployed Reality</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <StepCard key={step.num} {...step} delay={i * 0.15} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
