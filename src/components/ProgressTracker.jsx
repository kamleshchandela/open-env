import React from 'react';
import { motion } from 'framer-motion';

const ProgressTracker = () => {
  const totalParts = 8;
  const completedParts = 8; // All parts ready for this demo
  const progress = (completedParts / totalParts) * 100;

  const scrollToPart = (partNumber) => {
    const element = document.getElementById(`part-${partNumber}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Project Progress</h2>
        <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 glow-purple">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        <p className="mt-4 text-sm font-medium text-slate-400">
          {completedParts} of {totalParts} Parts Complete
        </p>
      </div>

      <div className="flex justify-between items-center max-w-2xl mx-auto relative px-4">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />

        {Array.from({ length: totalParts }).map((_, index) => {
          const partNum = index + 1;
          const isCompleted = partNum <= completedParts;

          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToPart(partNum)}
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2
                ${isCompleted
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:glow-cyan hover:border-secondary'
                  : 'bg-background border-white/20 text-slate-500 hover:border-primary/50'
                }`}
            >
              {partNum}
              {isCompleted && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background" />
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default ProgressTracker;
