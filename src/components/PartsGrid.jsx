import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCode, Folder, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const FileChip = ({ name }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
    <FileCode size={14} className="text-secondary" />
    <span className="text-[13px] font-mono text-slate-300">{name}</span>
  </div>
);

const PartsCard = ({ part, name, files, status, delay }) => {
  const isReady = status === 'ready';
  const navigate = useNavigate();

  const handleClick = () => {
    if (part === '1') {
      navigate('/part-1');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, delay }}
      onClick={handleClick}
      className={`glass p-8 flex flex-col h-full group glow-purple hover:glow-cyan border-white/5 hover:border-secondary/20 transition-all duration-300 ${part === '1' ? 'cursor-pointer relative overflow-hidden' : ''}`}
      id={`part-${part}`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase border border-primary/30">
          PART {part.padStart(2, '0')}
        </span>
        <div className={`flex items-center gap-2 text-sm font-medium ${isReady ? 'text-success' : 'text-amber-400'}`}>
          <div className={`w-2 h-2 rounded-full ${isReady ? 'bg-success animate-pulse' : 'bg-amber-400'}`} />
          {isReady ? 'Ready' : 'In Progress'}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6 gradient-text bg-gradient-to-r from-white to-slate-400">
        {name}
      </h3>

      {part === '1' && (
        <div className="absolute top-8 right-8 flex items-center text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details <ArrowRight size={16} className="ml-1" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {files.map((file, index) => (
          <FileChip key={index} name={file} />
        ))}
      </div>
    </motion.div>
  );
};

const PartsGrid = () => {
  const partsData = [
    {
      part: '1',
      name: 'Project Foundation',
      files: ['requirements.txt', 'openenv.yaml', 'Dockerfile'],
      status: 'ready'
    },
    {
      part: '2',
      name: 'Data Models & Schemas',
      files: ['models/__init__.py', 'models/schemas.py'],
      status: 'ready'
    },
    {
      part: '3',
      name: 'Base Environment',
      files: ['environment/__init__.py', 'environment/base_env.py', 'environment/state_manager.py'],
      status: 'ready'
    },
    {
      part: '4',
      name: 'Three Tasks',
      files: ['tasks/__init__.py', 'tasks/easy_task.py', 'tasks/medium_task.py', 'tasks/hard_task.py'],
      status: 'ready'
    },
    {
      part: '5',
      name: 'Three Graders',
      files: ['graders/__init__.py', 'graders/easy_grader.py', 'graders/medium_grader.py', 'graders/hard_grader.py'],
      status: 'ready'
    },
    {
      part: '6',
      name: 'Main API Server',
      files: ['app.py'],
      status: 'ready'
    },
    {
      part: '7',
      name: 'Baseline Agents',
      files: ['baseline/baseline_inference.py', 'baseline/random_agent.py'],
      status: 'ready'
    },
    {
      part: '8',
      name: 'Tests & Docs',
      files: ['tests/test_endpoints.py', 'tests/test_graders.py', 'docs/api_reference.md', 'README.md'],
      status: 'ready'
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partsData.map((part, index) => (
          <PartsCard
            key={index}
            {...part}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default PartsGrid;
