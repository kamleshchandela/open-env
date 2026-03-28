import React from 'react';
import { motion } from 'framer-motion';
import { Package, FolderOpen, Target, Rocket } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass p-5 flex flex-col items-center justify-center min-w-[160px] group border-primary/20 hover:border-primary/40 transition-colors cursor-pointer glow-purple"
    >
      <div className="p-3 mb-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-primary" size={28} />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">{label}</div>
    </motion.div>
  );
};

const StatsBar = () => {
  const stats = [
    { icon: Package, value: '25', label: 'Files', delay: 0.1 },
    { icon: FolderOpen, value: '8', label: 'Folders', delay: 0.2 },
    { icon: Target, value: '3', label: 'Tasks', delay: 0.3 },
    { icon: Rocket, value: '1', label: 'Deployment', delay: 0.4 },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
