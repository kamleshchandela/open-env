import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Package, Settings, Container, ChevronDown, ChevronUp, 
  CheckCircle, Circle, Terminal, ArrowRight, ArrowDown, FileText, ListChecks
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import confetti from 'canvas-confetti';

const codeStringOpenEnv = `name: supply-chain-openenv
version: 1.0.0
description: >
  A real-world supply chain management RL environment
  with 3 progressive difficulty tasks
author: Your Name
license: MIT

environment:
  type: sequential
  max_steps: 365
  seed: 42

tasks:
  - name: easy
    description: Single product inventory management
    difficulty: 1
    max_steps: 30
    
  - name: medium
    description: Multi-product multi-supplier management
    difficulty: 2
    max_steps: 60
    
  - name: hard
    description: Full supply chain with disruptions
    difficulty: 3
    max_steps: 90

action_space:
  type: Dict
  description: Order quantities per product

observation_space:
  type: Dict
  description: Inventory levels, demand forecast, budget

reward:
  range: [0.0, 1.0]
  type: continuous

deployment:
  platform: huggingface-spaces
  port: 7860
  framework: fastapi`;

const codeStringDocker = `# Use official Python 3.11 slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first (Docker layer caching)
COPY requirements.txt .

# Install all dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy entire project
COPY . .

# Expose HuggingFace Spaces port
EXPOSE 7860

# Start the FastAPI server
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]`;

const ExpandableSection = ({ icon: Icon, title, tag, isFirst, isLast, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`bg-white border-x border-t ${isFirst ? 'rounded-t-2xl' : ''} ${isLast && !isExpanded ? 'border-b rounded-b-2xl' : ''} ${isLast && isExpanded ? 'border-b-0' : ''} border-border-green overflow-hidden transition-all duration-300 hover:bg-slate-50`}
      initial={false}
    >
      <div 
        className="p-6 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-bg-pale text-primary border border-border-green`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-mono text-dark-green">{title}</h3>
            <span className={`text-xs font-bold tracking-wider text-primary uppercase`}>{tag}</span>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-400">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={`bg-white ${isLast ? 'border-b border-border-green rounded-b-2xl' : ''}`}
          >
            <div className="px-6 pb-6 pt-0 border-t border-border-green mt-2 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Part1 = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({
    reqs: false,
    yaml: false,
    docker: false,
    build: false,
    install: false,
    validate: false
  });

  const [hasConfettied, setHasConfettied] = useState(false);

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllComplete = completedCount === 6;

  useEffect(() => {
    if (isAllComplete && !hasConfettied) {
      setHasConfettied(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#16a34a', '#22c55e', '#dcfce7', '#4ade80']
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllComplete]);

  return (
    <div className="min-h-screen bg-off-white pb-24 relative z-10 pt-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Section 1: Header */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="p-2 rounded-full bg-white border border-border-green hover:bg-bg-pale transition-all text-text-medium hover:text-primary"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="text-sm font-medium text-text-medium">
                <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/')}>Dashboard</span> 
                <span className="mx-2">/</span> 
                <span className="text-dark-green font-bold">Part 1</span>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-lg bg-bg-mint text-primary text-xs font-bold tracking-[0.2em] uppercase border border-border-green mb-4">
                PART 01
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-green tracking-tight">Project Foundation</h1>
              <p className="text-lg text-text-medium max-w-2xl leading-relaxed">
                The base configuration layer that defines the entire environment — dependencies, spec, and deployment context.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-border-green">
                📄 <span className="text-dark-green">3 Files</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-border-green">
                ⚡ <span className="text-dark-green">Foundation Layer</span>
              </div>
              <div className="bg-bg-pale px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-primary border border-primary/20">
                ✅ Required First
              </div>
            </div>
            
            <div className="w-full h-px bg-border-green mt-4" />
          </section>

          {/* Section 2: Overview Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'requirements.txt', desc: 'All Python dependencies the project needs to run', tag: 'CONFIG' },
              { icon: Settings, title: 'openenv.yaml', desc: 'OpenEnv specification config defining tasks and spaces', tag: 'SPEC' },
              { icon: Container, title: 'Dockerfile', desc: 'Container instructions for HuggingFace Spaces deployment', tag: 'DEPLOY' }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 rounded-2xl border border-border-green hover:shadow-md transition-all group relative overflow-hidden flex flex-col`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-primary opacity-50 group-hover:opacity-100 transition-opacity`} />
                <card.icon size={28} className={`text-primary mb-4`} />
                <h3 className="text-lg font-bold font-mono mb-2 text-dark-green">{card.title}</h3>
                <p className="text-sm text-text-medium mb-4 flex-grow">{card.desc}</p>
                <div className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-bg-mint text-primary inline-block border border-border-green self-start`}>
                  {card.tag}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Section 3: Why This Comes First */}
          <section className="bg-white p-8 rounded-3xl relative overflow-hidden border border-border-green shadow-sm">
            <h2 className="text-2xl font-bold font-display mb-8 text-dark-green">Why Part 1 is the Foundation</h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Dependency Flow Visual */}
              <div className="flex flex-col items-center gap-2 bg-off-white p-6 rounded-2xl border border-border-green w-full md:w-auto shadow-inner">
                <div className="bg-white px-6 py-3 rounded-lg text-primary font-mono text-sm border border-border-green font-bold">requirements.txt</div>
                <motion.div 
                  className="h-8 w-0.5 bg-border-green relative overflow-hidden" 
                >
                   <motion.div animate={{y: ['-100%', '100%']}} transition={{duration: 1, repeat: Infinity, ease: 'linear'}} className="absolute inset-0 bg-primary h-1/2" />
                </motion.div>
                <div className="bg-white px-6 py-3 rounded-lg text-primary font-mono text-sm border border-border-green font-bold">openenv.yaml</div>
                <motion.div 
                  className="h-8 w-0.5 bg-border-green relative overflow-hidden" 
                >
                   <motion.div animate={{y: ['-100%', '100%']}} transition={{duration: 1, repeat: Infinity, ease: 'linear'}} className="absolute inset-0 bg-primary h-1/2" />
                </motion.div>
                <div className="bg-white px-6 py-3 rounded-lg text-primary font-mono text-sm border border-border-green font-bold">Dockerfile</div>
              </div>

              {/* Explanations */}
              <div className="flex flex-col gap-6">
                {[
                  { num: 1, text: "Without requirements.txt, nothing installs, nothing runs." },
                  { num: 2, text: "Without openenv.yaml, no framework can discover or use the environment." },
                  { num: 3, text: "Without Dockerfile, the environment cannot be deployed." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border text-primary bg-bg-mint border-primary/20`}>
                      {item.num}
                    </div>
                    <p className="text-text-medium mt-1 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Deep Dives */}
          <section className="flex flex-col">
            <h2 className="text-2xl font-bold font-display mb-6 text-dark-green">File Deep Dive</h2>
            
            {/* requirements.txt */}
            <ExpandableSection icon={Package} title="requirements.txt" tag="Deep Dive" isFirst>
              <div className="pt-4 flex flex-col gap-6">
                <p className="text-text-medium leading-relaxed">
                  This file declares all external Python libraries needed. We separate the application framework dependencies (FastAPI, Uvicorn) from the scientific ones (NumPy) and testing utilities (PyTest).
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-border-green">
                  <table className="w-full text-left text-sm text-text-dark">
                    <thead className="bg-bg-pale text-xs uppercase text-text-medium border-b border-border-green">
                      <tr>
                        <th className="px-6 py-4">Library Name</th>
                        <th className="px-6 py-4">Version</th>
                        <th className="px-6 py-4">Why Needed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-green bg-white">
                      {[
                        ['fastapi', '0.104.0', 'Web framework for API endpoints'],
                        ['uvicorn', '0.24.0', 'ASGI server to run FastAPI'],
                        ['pydantic', '2.5.0', 'Data validation and typed models'],
                        ['numpy', '1.26.0', 'Numerical calculations for simulation'],
                        ['pyyaml', '6.0.1', 'Parse openenv.yaml config file'],
                        ['pytest', '7.4.0', 'Run test suite'],
                        ['httpx', '0.25.0', 'HTTP client for testing endpoints'],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-3 font-mono text-dark-green font-bold">{row[0]}</td>
                          <td className="px-6 py-3 font-mono text-text-medium">{row[1]}</td>
                          <td className="px-6 py-3 text-text-medium">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl overflow-hidden shadow-inner border border-slate-700 bg-[#1e293b]">
                  <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700 text-xs text-slate-400 font-mono">
                    <Terminal size={14} className="mr-2" /> bash
                  </div>
                  <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}>
                    pip install -r requirements.txt
                  </SyntaxHighlighter>
                </div>

                <div className="bg-bg-pale border-l-4 border-primary p-4 rounded-r-lg text-sm text-dark-green border-y border-r border-border-green">
                  <strong className="font-bold text-primary text-base">Tip:</strong> Always pin your dependency versions (e.g. <code className="bg-white px-1 border border-border-green rounded text-primary">fastapi==0.104.0</code>) to ensure reproducibility across machines.
                </div>
              </div>
            </ExpandableSection>

            {/* openenv.yaml */}
            <ExpandableSection icon={Settings} title="openenv.yaml" tag="Deep Dive">
              <div className="pt-4 flex flex-col gap-6">
                <p className="text-text-medium leading-relaxed">
                  The OpenEnv specification file. This is the contract that tells any RL training framework exactly how to interact with your environment. It defines the tasks available, the structure of observations, and the reward ranges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[
                    { title: 'Tasks Section', desc: 'Defines the 3 difficulties (easy, medium, hard) and their maximum steps.' },
                    { title: 'Action Space', desc: 'Specifies that actions must be sent as JSON Dictionaries.' },
                    { title: 'Observation Space', desc: 'Defines the structure of the data the agent receives back.' },
                    { title: 'Reward', desc: 'Configures a continuous reward scaled strictly between 0.0 and 1.0.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-border-green shadow-sm shadow-primary/5">
                      <h4 className="font-bold text-dark-green mb-1">{item.title}</h4>
                      <p className="text-sm text-text-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl overflow-hidden shadow-inner border border-slate-700 bg-[#1e293b]">
                  <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700 text-xs text-slate-400 font-mono">
                    <FileText size={14} className="mr-2" /> openenv.yaml
                  </div>
                  <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}>
                    {codeStringOpenEnv}
                  </SyntaxHighlighter>
                </div>
                
                <div className="text-text-light text-sm italic text-center font-medium">
                  * This file is auto-discovered by any OpenEnv-compatible training framework *
                </div>
              </div>
            </ExpandableSection>

            {/* Dockerfile */}
            <ExpandableSection icon={Container} title="Dockerfile" tag="Deep Dive" isLast>
              <div className="pt-4 flex flex-col gap-6">
                <p className="text-text-medium leading-relaxed">
                  Containerization guarantees your environment runs exactly the same everywhere. This Dockerfile is optimized for HuggingFace Spaces by exposing port 7860 and using an unprivileged user (handled automatically by HF).
                </p>

                <div className="rounded-xl overflow-hidden shadow-inner border border-slate-700 bg-[#1e293b]">
                  <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700 text-xs text-slate-400 font-mono">
                    <Container size={14} className="mr-2" /> Dockerfile
                  </div>
                  <SyntaxHighlighter language="docker" style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}>
                    {codeStringDocker}
                  </SyntaxHighlighter>
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-border-green">
                  <div className="bg-bg-pale px-4 py-3 border-b border-border-green text-sm font-bold text-dark-green">
                    Instruction Breakdown
                  </div>
                  <div className="divide-y divide-border-green">
                    {[
                      ['FROM python:3.11-slim', 'Base image, minimal Python 3.11'],
                      ['WORKDIR /app', 'All commands run from /app directory'],
                      ['COPY requirements.txt', 'Copy deps file first for layer caching'],
                      ['RUN pip install', 'Install all Python dependencies'],
                      ['COPY . .', 'Copy all project files into container'],
                      ['EXPOSE 7860', 'Open port 7860 (HuggingFace default)'],
                      ['CMD uvicorn', 'Start FastAPI server when container runs'],
                    ].map((row, i) => (
                      <div key={i} className="flex p-3 text-sm hover:bg-slate-50 transition-colors">
                        <div className="w-1/2 font-mono text-primary font-bold">{row[0]}</div>
                        <div className="w-1/2 text-text-medium">{row[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-inner border border-slate-700 bg-[#1e293b]">
                  <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700 text-xs text-slate-400 font-mono">
                    <Terminal size={14} className="mr-2" /> bash
                  </div>
                  <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}>
{`# Build the Docker image
docker build -t supply-chain-openenv .

# Run locally on port 7860
docker run -p 7860:7860 supply-chain-openenv`}
                  </SyntaxHighlighter>
                </div>

                <div className="bg-bg-pale border-l-4 border-primary p-4 rounded-r-lg text-sm text-dark-green border border-border-green">
                  <strong className="font-bold text-primary">Important:</strong> Port 7860 is required by HuggingFace Spaces — do not change it unless you are deploying elsewhere.
                </div>
              </div>
            </ExpandableSection>
          </section>

          {/* Section 5: Connection Diagram */}
          <section className="bg-white rounded-3xl p-8 border border-border-green shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold font-display mb-8 text-dark-green">How These 3 Files Connect</h2>
            
            <div className="relative p-8 rounded-2xl bg-off-white border border-border-green flex flex-col items-center gap-12 inner-shadow">
              
              <div className="flex justify-between w-full max-w-lg relative z-10">
                <div className="bg-white p-4 rounded-xl border border-border-green flex flex-col items-center gap-2 shadow-sm w-40 text-center">
                  <Package className="text-primary" />
                  <span className="font-mono text-sm text-dark-green font-bold">requirements</span>
                  <span className="text-xs text-text-medium">Installs libraries</span>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-border-green flex flex-col items-center gap-2 shadow-sm w-40 text-center">
                  <Settings className="text-primary" />
                  <span className="font-mono text-sm text-dark-green font-bold">openenv.yaml</span>
                  <span className="text-xs text-text-medium">Defines spec</span>
                </div>
              </div>

              {/* Central Arrow Down */}
              <motion.div 
                className="absolute top-[35%] w-full flex justify-center z-0"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="text-border-green" size={32} />
              </motion.div>

              <div className="bg-white p-6 rounded-xl border-2 border-primary flex flex-col items-center gap-2 shadow-[0_5px_15px_rgba(22,163,74,0.1)] w-full max-w-sm text-center relative z-10">
                <Container className="text-primary" size={32} />
                <span className="font-mono font-bold text-dark-green text-lg">Dockerfile</span>
                <span className="text-sm text-text-medium mt-2 font-medium">Wraps everything and deploys mapping to Port 7860</span>
              </div>
            </div>
          </section>

          {/* Section 6: Checklist */}
          <section className="bg-white rounded-3xl p-8 border border-border-green shadow-sm relative">
            <h2 className="text-2xl font-bold font-display mb-6 text-dark-green flex items-center gap-3">
              <ListChecks className="text-primary" /> Part 1 Completion Checklist
            </h2>
            
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-8 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-primary to-primary-light h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completedCount / 6) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                { id: 'reqs', label: 'requirements.txt created with libraries pinned' },
                { id: 'yaml', label: 'openenv.yaml created with all 3 tasks defined' },
                { id: 'docker', label: 'Dockerfile created with port 7860 exposed' },
                { id: 'build', label: 'docker build runs without errors' },
                { id: 'install', label: 'pip install -r requirements.txt completes successfully' },
                { id: 'validate', label: 'openenv.yaml validates against OpenEnv spec' },
              ].map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${checkedItems[item.id] ? 'bg-bg-pale border-primary shadow-sm' : 'bg-off-white border-border-green hover:bg-slate-50'}`}
                >
                  <motion.div 
                    initial={false}
                    animate={{ scale: checkedItems[item.id] ? [1, 1.2, 1] : 1 }}
                    className={`${checkedItems[item.id] ? 'text-primary' : 'text-slate-300'}`}
                  >
                    {checkedItems[item.id] ? <CheckCircle size={24} className="fill-bg-pale" /> : <Circle size={24} />}
                  </motion.div>
                  <span className={`text-sm font-semibold transition-colors ${checkedItems[item.id] ? 'text-dark-green' : 'text-text-medium'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {isAllComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  className="mt-8 pt-6 border-t border-border-green flex flex-col items-center text-center gap-6"
                >
                  <div className="bg-bg-pale text-primary px-6 py-4 rounded-xl border border-primary font-bold w-full text-lg shadow-sm">
                    🎉 Part 1 Complete! Ready to move to Data Models & Schemas.
                  </div>
                  
                  <button className="btn-primary flex items-center gap-2">
                    Go to Part 2 <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 8: Navigation Footer */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 mt-4 border-t border-border-green">
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-white rounded-xl border border-border-green shadow-sm text-text-medium flex items-center gap-2 hover:text-primary transition-colors font-bold"
            >
              <ArrowLeft size={16} /> Dashboard
            </button>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-text-medium uppercase tracking-widest">Part 1 of 8</span>
              <div className="flex gap-1">
                <div className="w-8 h-1 bg-primary rounded-full" />
                {[2,3,4,5,6,7,8].map(n => (
                  <div key={n} className="w-8 h-1 bg-slate-200 rounded-full" />
                ))}
              </div>
            </div>

            <button 
              className="px-6 py-3 bg-off-white rounded-xl border border-border-green text-slate-400 flex items-center gap-2 cursor-not-allowed font-bold"
              disabled
            >
              Part 2: Schema <ArrowRight size={16} />
            </button>
          </section>

        </div>

        {/* Sticky Sidebar (Section 7) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-24 flex flex-col gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-border-green shadow-sm">
              <h3 className="font-bold font-display text-dark-green mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-primary" /> Commands Ref
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-medium font-bold uppercase tracking-wider">Install Deps</span>
                  <code className="text-xs font-mono bg-[#1e293b] p-2.5 rounded-lg text-primary border border-slate-700 overflow-x-auto shadow-inner">
                    pip install -r requirements.txt
                  </code>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-medium font-bold uppercase tracking-wider">Build Docker</span>
                  <code className="text-xs font-mono bg-[#1e293b] p-2.5 rounded-lg text-primary-light border border-slate-700 overflow-x-auto shadow-inner">
                    docker build -t openenv .
                  </code>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-medium font-bold uppercase tracking-wider">Run Docker</span>
                  <code className="text-xs font-mono bg-[#1e293b] p-2.5 rounded-lg text-blue-400 border border-slate-700 overflow-x-auto shadow-inner">
                    docker run -p 7860:7860 openenv
                  </code>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-medium font-bold uppercase tracking-wider">Validate YAML</span>
                  <code className="text-xs font-mono bg-[#1e293b] p-2.5 rounded-lg text-amber-300 border border-slate-700 overflow-x-auto whitespace-nowrap shadow-inner">
                    python -c "import yaml; yaml.safe_load(open('openenv.yaml'))"
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-border-green shadow-sm">
              <h3 className="font-bold font-display text-dark-green mb-4">File Sizes</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-mono text-dark-green font-bold flex items-center gap-2"><Package size={14} className="text-primary"/> reqs.txt</span>
                  <span className="text-text-medium font-medium">~400 bytes</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-3">
                  <span className="font-mono text-dark-green font-bold flex items-center gap-2"><Settings size={14} className="text-primary"/> openenv.yaml</span>
                  <span className="text-text-medium font-medium">~800 bytes</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-3">
                  <span className="font-mono text-dark-green font-bold flex items-center gap-2"><Container size={14} className="text-primary"/> Dockerfile</span>
                  <span className="text-text-medium font-medium">~500 bytes</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-amber-700 font-medium">
                <strong>Key Reminder:</strong> These 3 files must exist in the ROOT of your project directory, not inside any subfolder.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Part1;
