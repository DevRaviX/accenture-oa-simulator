import React, { useState, useEffect } from 'react';
import { Clock, Code, Database, Layout, Play, Send, CheckCircle } from 'lucide-react';
import { formatTime } from './utils.js';
import { papers } from '../js/data/index.js';
import { actualSectionC } from './actualData.js';

const DURATION_SECONDS = 60 * 60; // 60 mins

export default function SectionC({ onComplete, paperType }) {
  const qList = paperType === 'actual' ? actualSectionC : papers.paper1.sectionC.questions;
  
  const CODING_PROBLEMS = {
    frontend: {
      title: qList[0]?.title || 'Frontend Challenge',
      desc: qList[0]?.objective || 'Create UI component',
      initialCode: qList[0]?.initialHtml || '',
      language: 'HTML/JS'
    },
    dsa: {
      title: qList[2]?.title || 'Backend/DSA: Array Manipulation',
      desc: qList[2]?.objective || 'Write a program to solve the given DSA problem.',
      initialCode: qList[2]?.initialCode || 'function solution() {\n  // Write your code here\n}',
      language: 'JavaScript/C++'
    },
    sql: {
      title: qList[1]?.title || 'Database Query',
      desc: qList[1]?.objective || 'Write an SQL query.',
      initialCode: qList[1]?.initialCode || '-- Write your SQL query here\n',
      language: 'SQL'
    }
  };

  const [activeTab, setActiveTab] = useState('frontend');
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [codeData, setCodeData] = useState({
    frontend: CODING_PROBLEMS.frontend.initialCode,
    dsa: CODING_PROBLEMS.dsa.initialCode,
    sql: CODING_PROBLEMS.sql.initialCode,
  });
  const [consoleOutput, setConsoleOutput] = useState('> Ready to execute...');
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState({ frontend: false, dsa: false, sql: false });

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete({ submitted });
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleOutput('> Compiling...');
    setTimeout(() => {
      setConsoleOutput('> Compiling...\n> Running test cases...');
      setTimeout(() => {
        const passed = Math.floor(Math.random() * 3) + 2;
        const total = passed + Math.floor(Math.random() * 2);
        setConsoleOutput(
          '> Compiling...\n> Running test cases...\n' +
          Array.from({ length: passed }, (_, i) => '> Test Case ' + (i + 1) + ': Passed \u2713').join('\n') +
          (total > passed ? '\n> Test Case ' + (passed + 1) + ': Failed \u2717 (hidden)' : '') +
          '\n> ' + passed + '/' + total + ' test cases passed.'
        );
        setIsRunning(false);
      }, 800);
    }, 600);
  };

  const handleSubmit = () => {
    setSubmitted(prev => ({ ...prev, [activeTab]: true }));
    setConsoleOutput('> Submitting ' + activeTab + ' solution...\n> \u2713 Solution submitted successfully!');
  };

  const handleSubmitSection = () => {
    if (onComplete) onComplete({ submitted });
  };

  const handleCodeChange = (e) => {
    setCodeData({ ...codeData, [activeTab]: e.target.value });
  };

  const currentProb = CODING_PROBLEMS[activeTab];

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] w-full bg-gray-50 font-sans text-gray-800">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm z-10">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Code size={20} className="text-purple-600" /> Coding &amp; Full-Stack
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-500">Attempt all 3 questions</span>
          <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full font-bold shadow-sm">
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <button
            onClick={handleSubmitSection}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition shadow-sm"
          >
            Submit Section →
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Panel: Tabs & Problem Description */}
        <div className="w-1/3 flex flex-col bg-white border-r border-gray-200">
          
          {/* Vertical Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button 
              onClick={() => setActiveTab('frontend')}
              className={`flex-1 py-3 text-sm font-semibold flex flex-col items-center gap-1 transition ${activeTab === 'frontend' ? 'bg-white text-purple-700 border-t-2 border-t-purple-600' : 'text-gray-500 hover:bg-gray-100 border-t-2 border-transparent'}`}
            >
              <Layout size={18} /> Frontend
            </button>
            <button 
              onClick={() => setActiveTab('sql')}
              className={`flex-1 py-3 text-sm font-semibold flex flex-col items-center gap-1 transition ${activeTab === 'sql' ? 'bg-white text-purple-700 border-t-2 border-t-purple-600' : 'text-gray-500 hover:bg-gray-100 border-t-2 border-transparent'}`}
            >
              <Database size={18} /> SQL
            </button>
            <button 
              onClick={() => setActiveTab('dsa')}
              className={`flex-1 py-3 text-sm font-semibold flex flex-col items-center gap-1 transition ${activeTab === 'dsa' ? 'bg-white text-purple-700 border-t-2 border-t-purple-600' : 'text-gray-500 hover:bg-gray-100 border-t-2 border-transparent'}`}
            >
              <Code size={18} /> DSA
            </button>
          </div>

          {/* Description */}
          <div className="flex-1 p-6 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">{currentProb.title}</h3>
            <div className="prose prose-sm text-gray-700 whitespace-pre-wrap">
              <p>{currentProb.desc}</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Code Editor Mockup */}
        <div className="w-2/3 flex flex-col bg-gray-900">
          {/* Editor Header */}
          <div className="flex justify-between items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
            <div className="text-gray-300 text-sm font-mono flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4">{currentProb.language} Environment</span>
            </div>
            <div className="flex gap-2">
              <button onClick={handleRun} disabled={isRunning} className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 text-sm rounded transition disabled:opacity-50">
                <Play size={14} /> {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button onClick={handleSubmit} className={'flex items-center gap-1 ' + (submitted[activeTab] ? 'bg-emerald-700' : 'bg-green-600 hover:bg-green-500') + ' text-white px-3 py-1 text-sm rounded shadow transition'}>
                {submitted[activeTab] ? <><CheckCircle size={14} /> Submitted</> : <><Send size={14} /> Submit Solution</>}
              </button>
            </div>
          </div>

          {/* Textarea mimicking an editor */}
          <textarea 
            value={codeData[activeTab]}
            onChange={handleCodeChange}
            className="flex-1 bg-gray-900 text-green-400 font-mono p-4 focus:outline-none resize-none leading-relaxed whitespace-pre"
            spellCheck="false"
          />
          
          {/* Console Output Mockup */}
          <div className="h-48 bg-black border-t border-gray-700 flex flex-col">
            <div className="bg-gray-800 text-gray-400 text-xs px-4 py-1 uppercase tracking-wider font-semibold">Console Output</div>
            <div className="p-4 text-gray-500 font-mono text-sm flex-1 overflow-y-auto whitespace-pre-wrap">
              {consoleOutput}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
