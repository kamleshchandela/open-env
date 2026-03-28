import React from 'react';
import { motion, useInView } from 'framer-motion';

const RadialProgress = ({ percentage, score, label, agent, delay }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/60 backdrop-blur-xl p-8 rounded-[3rem] shadow-realistic-sm border border-white/50 flex flex-col items-center flex-1 max-w-sm hover:shadow-realistic-lg hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative flex items-center justify-center w-32 h-32 mb-6" ref={ref}>
        {/* Background Circle */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            strokeWidth="10"
            stroke="#f0fdf4"
            fill="transparent"
          />
          {/* Animated Foreground Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            strokeWidth="10"
            stroke="#16a34a"
            fill="transparent"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <span className="text-3xl font-display font-black text-dark-green z-10">{score}</span>
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-bold text-dark-green mb-1">{label}</h3>
        <span className="text-xs font-semibold text-text-medium px-3 py-1 bg-bg-pale rounded-full border border-border-green mt-2 inline-block">
          {agent}
        </span>
      </div>
    </motion.div>
  );
};

const BaselineResults = () => {
  return (
    <section className="py-24 bg-off-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-4">Baseline Results</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-green tracking-tight mb-4">
            Reproducible Scores
          </h2>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            Run our deterministic agent. Get these exact scores every time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-16">
          <RadialProgress percentage={72} score="0.72" label="Single Product Inventory" agent="Reorder Point Heuristic" delay={0.1} />
          <RadialProgress percentage={58} score="0.58" label="Multi-Product Suppliers" agent="Reorder Point Heuristic" delay={0.2} />
          <RadialProgress percentage={41} score="0.41" label="Full Supply Chain" agent="Reorder Point Heuristic" delay={0.3} />
        </div>

        {/* Command Runner */}
        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="w-full bg-[#1e293b] rounded-2xl p-6 shadow-lg border border-slate-700 flex flex-col items-center group relative overflow-hidden">
            <span className="absolute top-0 right-0 py-1 flex px-3 bg-slate-800 text-slate-400 text-xs font-mono rounded-bl-lg">bash</span>
            <code className="text-primary-light font-mono text-sm md:text-base mt-2">
              python baseline/baseline_inference.py --seed 42
            </code>
          </div>
          <p className="mt-4 text-sm text-text-medium italic flex items-center gap-2">
            <span className="text-primary text-lg">*</span> These scores are deterministic. Same seed always produces identical results.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BaselineResults;
