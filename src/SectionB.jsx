import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, ChevronLeft, Flag } from 'lucide-react';

const TOTAL_QUESTIONS = 45;
const DURATION_SECONDS = 45 * 60; // 45 mins

// Generate dummy questions based on syllabus
const generateMockQuestions = () => {
  const topics = ['Pseudocode', 'Computer Networks', 'Network Security', 'Cloud Computing', 'MS Excel'];
  return Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => ({
    id: i + 1,
    topic: topics[i % topics.length],
    text: `Sample question for ${topics[i % topics.length]} (Question ${i + 1})`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
  }));
};

const questions = generateMockQuestions();

export default function SectionB({ onComplete }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState({}); // 'answered', 'marked', 'skipped'

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIdx) => {
    setAnswers({ ...answers, [currentQ]: optionIdx });
    setStatus({ ...status, [currentQ]: 'answered' });
  };

  const markForReview = () => {
    setStatus({ ...status, [currentQ]: 'marked' });
    if (currentQ < TOTAL_QUESTIONS - 1) setCurrentQ(curr => curr + 1);
  };

  const saveAndNext = () => {
    if (!answers[currentQ] && status[currentQ] !== 'marked') {
      setStatus({ ...status, [currentQ]: 'skipped' });
    }
    if (currentQ < TOTAL_QUESTIONS - 1) {
      setCurrentQ(curr => curr + 1);
    } else {
      // Optional: auto submit if on last question
    }
  };

  return (
    <div className="flex h-[calc(100vh-140px)] w-full bg-white font-sans text-gray-800">
      
      {/* Left Area - Question Content */}
      <div className="flex-1 flex flex-col border-r border-gray-200 relative">
        
        {/* Section Header */}
        <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Technical Assessment</h2>
          <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-bold shadow-sm">
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl">Question {currentQ + 1}</h3>
            <span className="text-sm bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
              Topic: {questions[currentQ].topic}
            </span>
          </div>
          
          <p className="text-lg mb-8">{questions[currentQ].text}</p>
          
          <div className="flex flex-col gap-4 max-w-2xl">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = answers[currentQ] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`text-left px-6 py-4 rounded-lg border-2 transition-all ${
                    isSelected 
                      ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-md' 
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold mr-4 inline-block w-6 h-6 text-center leading-6 rounded-full border border-current">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
          <button 
            onClick={() => setCurrentQ(curr => Math.max(0, curr - 1))}
            disabled={currentQ === 0}
            className="flex items-center gap-2 px-6 py-2 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={markForReview}
              className="flex items-center gap-2 px-6 py-2 rounded border border-yellow-500 text-yellow-700 bg-yellow-50 hover:bg-yellow-100"
            >
              <Flag size={20} /> Mark for Review
            </button>
            <button 
              onClick={saveAndNext}
              className="flex items-center gap-2 px-8 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 font-medium shadow-sm"
            >
              Save &amp; Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Palette */}
      <div className="w-80 bg-gray-50 p-6 flex flex-col">
        <h3 className="font-bold text-gray-700 mb-4">Question Palette</h3>
        
        {/* Status Legend */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-6 text-gray-600">
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> Answered</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-500 rounded-sm"></div> Marked</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded-sm"></div> Skipped</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-sm"></div> Unvisited</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-2 pb-8">
          {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => {
            let bgColor = 'bg-gray-200 text-gray-700'; // unvisited
            let ring = currentQ === i ? 'ring-2 ring-purple-600 ring-offset-2' : '';

            if (status[i] === 'answered') bgColor = 'bg-green-500 text-white';
            else if (status[i] === 'marked') bgColor = 'bg-yellow-500 text-white';
            else if (status[i] === 'skipped') bgColor = 'bg-red-500 text-white';

            return (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-10 h-10 rounded-sm font-medium flex items-center justify-center transition-all ${bgColor} ${ring}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
