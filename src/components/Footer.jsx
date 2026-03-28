import React from 'react';
import { Github, Twitter, MessageSquare, Leaf } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4 text-sm">
    <h4 className="font-bold text-white mb-2">{title}</h4>
    {links.map((link, i) => (
      <a key={i} href="#" className="text-bg-mint/80 hover:text-white transition-colors">
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white border-t border-bg-mint/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-bg-mint flex items-center justify-center text-dark-green">
                <Leaf size={18} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Supply Chain OpenEnv</span>
            </div>
            
            <p className="text-bg-mint/80 text-sm mb-6 max-w-sm leading-relaxed">
              A complete, open-source reinforcement learning environment customized to train AI agents on real-world inventory optimization tracking.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-bold">
                HF
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <FooterColumn 
            title="Resources" 
            links={['Documentation', 'API Reference', 'Baseline Results', 'OpenEnv Spec']} 
          />

          {/* Column 3: Community */}
          <FooterColumn 
            title="Community" 
            links={['HuggingFace Space', 'GitHub Repository', 'Report Issue', 'Contribute']} 
          />
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bg-mint/60">
          <div>
            © 2024 Supply Chain OpenEnv · MIT License · Built for the AI community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
