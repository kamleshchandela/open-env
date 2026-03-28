import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

const ProgressTracker = () => {
  // In a real app this would be pulled from a global state or DB
  const completedParts = [1];
  const currentPart = 2; // Next part to build
  const totalParts = 8;
  const progressRatio = completedParts.length / totalParts;

  const scrollToPart = (partNumber) => {
    const element = document.getElementById(`part-${partNumber}`);
    if (element) {
      const yOffset = -100; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 px-6 border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-dark-green tracking-tight">
            Project Completion Tracker
          </h2>
        </div>

        {/* Progress Bar Container */}
        <div className="mb-12 relative">
          <div className="flex justify-between items-end mb-3">
            <span className="text-sm font-semibold text-text-medium tracking-wide">
              Overall Progress
            </span>
            <span className="text-sm font-bold text-primary">
              {completedParts.length} of {totalParts} Parts Complete
            </span>
          </div>
          
          <div className="h-4 w-full bg-bg-mint rounded-full overflow-hidden shadow-inner flex">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressRatio * 100}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>

        {/* Stepper Nodes */}
        <div className="relative flex justify-between items-center w-full">
          
          {/* Connecting Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
          
          {/* Connecting Line Foreground (Completed) */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentPart - 1) / (totalParts - 1)) * 100}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />

          {Array.from({ length: totalParts }).map((_, i) => {
            const partNum = i + 1;
            const isCompleted = completedParts.includes(partNum);
            const isCurrent = partNum === currentPart;
            
            return (
              <div 
                key={partNum} 
                className="relative z-10 flex flex-col items-center group cursor-pointer"
                onClick={() => scrollToPart(partNum)}
              >
                <div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 hover:scale-110' 
                      : isCurrent 
                        ? 'bg-white border-primary text-primary shadow-lg shadow-primary/10 hover:bg-bg-pale' 
                        : 'bg-white border-slate-300 text-slate-400 hover:border-slate-400'
                  }`}
                >
                  {isCompleted ? <Check strokeWidth={3} className="w-5 h-5 md:w-6 md:h-6" /> : partNum}
                </div>
                
                {/* Floating Tooltip */}
                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-green text-white text-[10px] font-bold px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg select-none pointer-events-none">
                  Part {partNum}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProgressTracker;
