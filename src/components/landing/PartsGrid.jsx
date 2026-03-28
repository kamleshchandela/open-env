import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

const FileChip = ({ name }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-pale border border-border-green hover:bg-bg-mint hover:scale-105 transition-all duration-300 cursor-default">
    <FileText size={12} className="text-primary-light" />
    <span className="text-[12px] font-mono font-medium text-primary">{name}</span>
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
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={handleClick}
      className={`bg-white rounded-2xl border-y border-r border-[#bbf7d0] border-l-[4px] border-l-primary flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 ${part === '1' ? 'cursor-pointer' : ''}`}
      id={`part-${part}`}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
            PART {part.padStart(2, '0')}
          </span>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold uppercase tracking-wider ${isReady ? 'text-primary' : 'text-slate-400'}`}>
              {isReady ? 'Ready' : 'Upcoming'}
            </span>
            <div className={`w-2 h-2 rounded-full ${isReady ? 'bg-success' : 'bg-slate-300'}`} />
          </div>
        </div>

        {/* Body */}
        <h3 className="text-2xl font-bold font-display text-dark-green mb-2">{name}</h3>
        <p className="text-sm text-text-medium mb-6 leading-relaxed line-clamp-2">{desc}</p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {files.map((file, i) => <FileChip key={i} name={file} />)}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-8 py-4 border-t border-border-green flex items-center justify-between mt-auto bg-slate-50/50 rounded-b-2xl">
        <span className="text-xs font-semibold text-text-medium">
          {files.length} {files.length === 1 ? 'file' : 'files'}
        </span>
        
        {part === '1' ? (
          <span className="text-xs font-bold text-primary flex items-center group-hover:text-primary-light transition-colors">
            View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        ) : (
          <span className="text-xs font-semibold text-slate-400">
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
    <section className="py-24 bg-off-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">Project Structure</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-green mb-4 tracking-tight">
            8 Parts. Complete Coverage.
          </h2>
          <p className="text-lg text-text-medium max-w-2xl">
            Every file explained. Every decision justified. Build with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {partsData.map((part, index) => (
            <PartsCard
              key={index}
              {...part}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsGrid;
