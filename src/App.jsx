import React, { useState, useEffect } from 'react';
import CognitiveGame from './CognitiveGame.jsx';
import { papers } from '../js/data/index.js'; 

function App() {
  const [candidateRoll, setCandidateRoll] = useState('');
  const [sessionToken, setSessionToken] = useState('');
  const [currentSection, setCurrentSection] = useState('sec_a');

  const generateWatermark = () => {
    setCandidateRoll('24' + Math.floor(100000 + Math.random() * 900000));
    setSessionToken(Math.floor(10000000 + Math.random() * 90000000).toString());
  };

  useEffect(() => {
    generateWatermark();
  }, []);

  const watermarkText = `${candidateRoll} - ${sessionToken}`;

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col font-sans overflow-hidden">
      
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0 flex flex-wrap gap-x-24 gap-y-12 items-center justify-center transform -rotate-12 scale-150">
        {Array.from({ length: 150 }).map((_, i) => (
          <span key={i} className="text-3xl font-bold whitespace-nowrap text-gray-500">
            {watermarkText}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="bg-gray-900 text-white flex justify-between items-center p-4 z-10 shadow-md">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold tracking-widest flex items-center gap-2">
            <span className="text-purple-500 text-2xl">&gt;</span> accenture
          </div>
          <div 
            className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded cursor-pointer hover:bg-gray-700 transition"
            title="Click to randomize Roll Number / Watermark" 
            onClick={generateWatermark} 
          >
            <span className="text-gray-400 text-sm">Roll:</span>
            <strong className="font-mono">{candidateRoll}</strong>
            <span className="text-xs opacity-60">⟳</span>
          </div>
          <div className="text-sm font-light hidden md:block border-l border-gray-700 pl-6 ml-2">
            Campus Hiring - Technical &amp; Coding 2025 - Assessment Slot 1
          </div>
        </div>
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition">
            Finish Test
          </button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 z-10 flex">
        <button 
          className={`px-6 py-4 font-semibold text-sm transition border-b-2 flex items-center gap-2
            ${currentSection === 'sec_a' ? 'border-purple-600 text-purple-700 bg-purple-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setCurrentSection('sec_a')}
        >
          Section A: Behavioral &amp; Cognitive
          <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">Eliminatory</span>
        </button>
        <button 
          className={`px-6 py-4 font-semibold text-sm transition border-b-2 flex items-center gap-2
            ${currentSection === 'sec_b' ? 'border-purple-600 text-purple-700 bg-purple-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setCurrentSection('sec_b')}
        >
          Section B: Technical Assessment
          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">45 Qs | 45 Mins</span>
        </button>
        <button 
          className={`px-6 py-4 font-semibold text-sm transition border-b-2 flex items-center gap-2
            ${currentSection === 'sec_c' ? 'border-purple-600 text-purple-700 bg-purple-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setCurrentSection('sec_c')}
        >
          Section C: Coding &amp; Full-Stack
          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">3 Qs | 60 Mins</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 w-full max-w-[100vw] overflow-y-auto">
        {currentSection === 'sec_a' && <CognitiveGame onComplete={() => setCurrentSection('sec_b')} />}
        {currentSection === 'sec_b' && <div className="p-8 text-center text-gray-500">Section B Placeholder</div>}
        {currentSection === 'sec_c' && <div className="p-8 text-center text-gray-500">Section C Placeholder</div>}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-xs flex justify-between items-center p-3 z-10 border-t border-gray-800">
        <div>
          Need Help? Contact us <span className="text-blue-400 ml-1">+91 63665-24235</span>
        </div>
        <div>
          Secure Exam Browser 1.6.8 • Candidate ID: <span className="font-mono text-gray-300 ml-1">{watermarkText}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
