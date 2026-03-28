import React from 'react';
import { motion } from 'framer-motion';

const ApiCard = ({ method, path, desc, code, delay }) => {
  const isPost = method === 'POST';
  const colorClass = isPost ? 'text-primary bg-primary/10 border-primary' : 'text-blue-600 bg-blue-100 border-blue-600';
  const leftBorderClass = isPost ? 'border-l-primary' : 'border-l-blue-600';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl p-6 shadow-sm border-y border-r border-[#e2e8f0] border-l-[4px] ${leftBorderClass} hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-2.5 py-1 text-[11px] font-bold rounded-md uppercase tracking-wide ${colorClass}`}>
          {method}
        </span>
        <span className="font-mono text-dark-green font-bold bg-slate-50 px-2 py-1 rounded">
          {path}
        </span>
      </div>
      <p className="text-sm text-text-medium mb-5">{desc}</p>
      
      <div className="bg-[#1e293b] rounded-xl p-4 overflow-x-auto shadow-inner border border-slate-700">
        <pre className="font-mono text-xs text-primary-light m-0">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const ApiPreview = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/reset',
      desc: 'Start a new episode. Returns initial warehouse state and episode ID.',
      code: '{ "task": "easy", "seed": 42 }'
    },
    {
      method: 'POST',
      path: '/step',
      desc: 'Send agent action. Returns new state, reward, and done flag.',
      code: '{ "episode_id": "ep_001", "action": { "order_qty": 50 } }'
    },
    {
      method: 'GET',
      path: '/state',
      desc: 'Get current environment state without advancing time.',
      code: '{ "episode_id": "ep_001" }'
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-4">API Preview</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-green tracking-tight mb-4">
            Simple 3-Endpoint API
          </h2>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            Any AI agent can interact with just three standardized calls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {endpoints.map((ep, i) => (
            <ApiCard key={i} {...ep} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApiPreview;
