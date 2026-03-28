import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { FileText, FolderTree, Target, Rocket } from 'lucide-react';

const useCountUp = (end, duration = 1200) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16); // 16ms per frame
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return { count, ref };
};

const StatItem = ({ num, label, icon: Icon, delay }) => {
  const { count, ref } = useCountUp(num, 1200);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-white rounded-2xl border border-border-green shadow-sm shadow-primary/5 hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-bg-mint via-primary-light to-bg-mint opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="w-12 h-12 rounded-full bg-bg-pale flex items-center justify-center text-primary mb-4 border border-border-green group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-display font-bold text-dark-green mb-1 tabular-nums">
        {count}
      </div>
      <div className="text-sm font-semibold text-text-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { num: 25, label: "Total Files", icon: FileText },
    { num: 8, label: "Project Parts", icon: FolderTree },
    { num: 3, label: "RL Tasks", icon: Target },
    { num: 1, label: "Live Deployment", icon: Rocket },
  ];

  return (
    <section className="bg-bg-pale py-16 border-y border-border-green relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
