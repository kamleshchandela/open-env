import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, ServerCog } from 'lucide-react';

const ApiCard = ({ method, path, desc, code, delay, Icon, colorClass, orbColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100, damping: 20 }}
      className="relative bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 md:p-10 shadow-realistic-sm hover:shadow-realistic-lg border border-white/50 flex flex-col hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
    >
      {/* Soft Ambient Inner Glowing Orb */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 ${orbColor} rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none`} />

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-realistic-sm border border-white/80 ${colorClass}`}>
          <Icon size={24} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 text-[11px] font-black rounded-full uppercase tracking-widest ${method === 'POST' ? 'text-primary bg-primary/10' : 'text-blue-600 bg-blue-600/10'}`}>
              {method}
            </span>
          </div>
          <div className="font-mono text-xl font-bold text-dark-green mt-1 tracking-tight">
            {path}
          </div>
        </div>
      </div>
      
      <p className="text-sm md:text-base text-text-medium leading-relaxed mb-8 relative z-10 font-medium">
        {desc}
      </p>
      
      {/* Restyled Clean Code Block with seamless horizontal scrolling hidden scrollbars */}
      <div className="mt-auto relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
        {/* Soft shadow box behind the code block */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-realistic" />
        <div className="relative bg-[#1e293b]/90 backdrop-blur-md rounded-3xl p-5 shadow-inner border border-slate-700 overflow-x-auto no-scrollbar">
          <pre className="font-mono text-xs md:text-sm text-primary-light m-0 w-max pr-8">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

const ApiPreview = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/reset',
      desc: 'Initializes a fresh episode. Returns the true 0-state of the warehouse, completely deterministic based on seed.',
      code: '{ "task": "easy", "seed": 42 }',
      Icon: Sparkles,
      colorClass: 'text-primary',
      orbColor: 'bg-primary'
    },
    {
      method: 'POST',
      path: '/step',
      desc: 'Executes your RL Agent\'s action sequence. Instantly returns the mutated state, the immediate reward signal, and the horizon flag.',
      code: '{ "episode_id": "ep_001", "action": { "order_qty": 50 } }',
      Icon: Activity,
      colorClass: 'text-primary',
      orbColor: 'bg-primary-light'
    },
    {
      method: 'GET',
      path: '/state',
      desc: 'Silently peeks at the live environment state arrays without advancing the timeframe tick.',
      code: '{ "episode_id": "ep_001" }',
      Icon: ServerCog,
      colorClass: 'text-blue-600',
      orbColor: 'bg-blue-400'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-transparent z-10">
      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-realistic-sm backdrop-blur-md">Developer Experience</span>
            <h2 className="text-5xl md:text-7xl font-bold font-display text-dark-green tracking-tight leading-[1.1] mb-6">
              Radically Simple <br/><span className="text-primary/90 italic drop-shadow-sm">3-Endpoint API.</span>
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto font-medium">
              We abstracted all the complex supply-chain backend logic into 3 perfectly unified JSON calls. 
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {endpoints.map((ep, i) => (
            <ApiCard key={i} {...ep} delay={i * 0.15} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApiPreview;
