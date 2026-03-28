import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

const FileChip = ({ name }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-md border border-white font-medium text-[11px] md:text-[12px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm cursor-default">
    <FileText size={12} className="text-primary" />
    <span className="text-dark-green font-mono">{name}</span>
  </div>
);

const PartsCard = ({ part, name, desc, files, status, delay }) => {
  const navigate = useNavigate();
  const isReady = status === 'ready';

  const handleClick = () => {
    if (part === '1') navigate('/part-1');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100, damping: 20 }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className={`group relative bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/80 flex flex-col h-full shadow-realistic-sm hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.15)] transition-all duration-500 overflow-hidden ${part === '1' ? 'cursor-pointer' : ''}`}
      id={`part-${part}`}
    >
      {/* Soft Ambient Inner Glow */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-700 delay-100" />

      <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="px-4 py-2 rounded-full bg-white/80 border border-white shadow-sm flex items-center gap-2">
            <span className="text-[10px] font-black tracking-widest uppercase text-primary">
              PART {part.padStart(2, '0')}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md rounded-full border border-white/50">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isReady ? 'text-primary' : 'text-slate-400'}`}>
              {isReady ? 'Ready' : 'Upcoming'}
            </span>
            <div className={`w-2 h-2 rounded-full ${isReady ? 'bg-success animate-pulse-subtle' : 'bg-slate-300'}`} />
          </div>
        </div>

        {/* Body */}
        <h3 className="text-3xl font-bold font-display text-dark-green mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">{name}</h3>
        <p className="text-base text-text-medium mb-8 leading-relaxed font-medium line-clamp-2">{desc}</p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-10 mt-auto">
          {files.map((file, i) => <FileChip key={i} name={file} />)}
        </div>
      </div>

      {/* Footer entirely glassmorphic */}
      <div className="relative z-10 px-8 py-5 border-t border-white/60 flex items-center justify-between mt-auto bg-white/20 backdrop-blur-md rounded-b-[3rem]">
        <span className="text-sm font-bold text-text-medium px-3 py-1 bg-white/40 rounded-full">
          {files.length} {files.length === 1 ? 'file' : 'files'}
        </span>
        
        {part === '1' ? (
          <span className="text-sm font-bold text-primary flex items-center group-hover:text-primary-light transition-colors py-1">
            View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        ) : (
          <span className="text-sm font-bold text-slate-400 py-1">
            Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
};

const PartsGrid = () => {
  const partsData = [
    {
      part: '1',
      name: 'Project Foundation',
      desc: 'Base config layer — dependencies, spec, deployment',
      files: ['requirements.txt', 'openenv.yaml', 'Dockerfile'],
      status: 'ready'
    },
    {
      part: '2',
      name: 'Data Models & Schemas',
      desc: 'Typed Pydantic models for all API inputs and outputs',
      files: ['models/__init__.py', 'models/schemas.py'],
      status: 'ready'
    },
    {
      part: '3',
      name: 'Base Environment',
      desc: 'Core simulation engine and session management',
      files: ['environment/__init__.py', 'environment/base_env.py', 'environment/state_manager.py'],
      status: 'ready'
    },
    {
      part: '4',
      name: 'Three Tasks',
      desc: 'Easy, Medium, Hard supply chain simulation tasks',
      files: ['tasks/__init__.py', 'tasks/easy_task.py', 'tasks/medium_task.py', 'tasks/hard_task.py'],
      status: 'ready'
    },
    {
      part: '5',
      name: 'Three Graders',
      desc: 'Scoring agents that output 0.0–1.0 performance scores',
      files: ['graders/__init__.py', 'graders/easy_grader.py', 'graders/medium_grader.py', 'graders/hard_grader.py'],
      status: 'ready'
    },
    {
      part: '6',
      name: 'Main API Server',
      desc: 'FastAPI server exposing reset, step, state endpoints',
      files: ['app.py'],
      status: 'ready'
    },
    {
      part: '7',
      name: 'Baseline Agents',
      desc: 'Deterministic agents proving reproducible benchmark scores',
      files: ['baseline/baseline_inference.py', 'baseline/random_agent.py'],
      status: 'ready'
    },
    {
      part: '8',
      name: 'Tests & Documentation',
      desc: 'Full test suite and complete project documentation',
      files: ['tests/test_endpoints.py', 'tests/test_graders.py', 'docs/api_reference.md', 'README.md'],
      status: 'ready'
    }
  ];

  return (
    <section className="py-32 relative bg-transparent px-6 overflow-hidden z-10 border-t border-white/50">
      <div className="max-w-[85rem] mx-auto relative z-10">
        
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-md">Architecture</span>
            <h2 className="text-5xl md:text-7xl font-bold font-display text-dark-green tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              8 Foundational Parts.<br /><span className="text-primary/90 italic">Zero Black Boxes.</span>
            </h2>
            <p className="text-xl text-text-medium font-medium leading-relaxed">
              Every system, from environment states down to the exact Pydantic schema schemas, is explicitly documented. Build with total confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {partsData.map((part, index) => (
            <PartsCard
              key={index}
              {...part}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsGrid;
