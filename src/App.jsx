import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/landing/Navbar';
import Dashboard from './pages/Dashboard';
import Part1 from './pages/Part1';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Soft AI Ambient Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/20 blur-[100px] mix-blend-multiply opacity-50 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-bg-mint/80 blur-[150px] mix-blend-multiply opacity-50 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="min-h-screen relative z-0 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="/part-1" element={<Part1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
