import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, ChevronLeft, Flag, X } from 'lucide-react';
import { formatTime } from './utils.js';
import { papers } from '../js/data/index.js';
import { actualSectionB } from './actualData.js';

const DURATION_SECONDS = 45 * 60; // 45 mins

export default function SectionB({ onComplete, paperType, isReviewMode = false, initialAnswers = {}, initialStatus = {} }) {
  const questions = paperType === 'actual' ? actualSectionB : papers.paper1.sectionB.questions;
  const TOTAL_QUESTIONS = questions.length;

  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [answers, setAnswers] = useState(initialAnswers);
  const [status, setStatus] = useState(initialStatus); // 'answered', 'marked', 'skipped'

  useEffect(() => {
    if (timeLeft <= 0) {
      const answered = Object.values(status).filter(s => s === 'answered').length;
      const marked = Object.values(status).filter(s => s === 'marked').length;
      if (onComplete) onComplete({ answered, marked, skipped: TOTAL_QUESTIONS - answered - marked, total: TOTAL_QUESTIONS, answers, status });
      return;
    }
    if (isReviewMode) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const handleAnswer = (optionIdx) => {
    setAnswers({ ...answers, [currentQ]: optionIdx });
    setStatus({ ...status, [currentQ]: 'answered' });
  };

  const clearAnswer = () => {
    const newAnswers = { ...answers };
    delete newAnswers[currentQ];
    setAnswers(newAnswers);
    const newStatus = { ...status };
    delete newStatus[currentQ];
    setStatus(newStatus);
  };

  const submitSection = () => {
    const answered = Object.values(status).filter(s => s === 'answered').length;
    const marked = Object.values(status).filter(s => s === 'marked').length;
    
    // Evaluate performance per domain
    const performance = {};
    actualSectionB.forEach((q, idx) => {
      if (!performance[q.domain]) {
        performance[q.domain] = { total: 0, correct: 0 };
      }
      performance[q.domain].total++;
      if (answers[idx] !== undefined && q.options[answers[idx]] === q.answer) {
        performance[q.domain].correct++;
      }
    });

    if (onComplete) {
      onComplete({ 
        answered, marked, skipped: TOTAL_QUESTIONS - answered - marked, total: TOTAL_QUESTIONS,
        performance, answers, status
      });
    }
  };

  const markForReview = () => {
    setStatus({ ...status, [currentQ]: 'marked' });
    if (currentQ < TOTAL_QUESTIONS - 1) setCurrentQ(curr => curr + 1);
  };

  const saveAndNext = () => {
    if (answers[currentQ] === undefined && status[currentQ] !== 'marked') {
      setStatus({ ...status, [currentQ]: 'skipped' });
    }
    if (currentQ < TOTAL_QUESTIONS - 1) {
      setCurrentQ(curr => curr + 1);
    } else {
      // Optional: auto submit if on last question
    }
  };

  const groupedQuestions = questions.reduce((acc, q, idx) => {
    const domain = q.domain || "General";
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(idx);
    return acc;
  }, {});

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
              Topic: {questions[currentQ].subSectionName || questions[currentQ].domain}
            </span>
          </div>
          
          <p className="text-lg mb-6 whitespace-pre-wrap">{questions[currentQ].text || questions[currentQ].question}</p>
          
          {questions[currentQ].code && (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm mb-8 overflow-x-auto whitespace-pre-wrap">
              {questions[currentQ].code}
            </pre>
          )}
          
          <div className="flex flex-col gap-4 max-w-2xl">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = answers[currentQ] === idx;
              const isCorrect = isReviewMode && opt === questions[currentQ].answer;
              const isWrongChoice = isReviewMode && isSelected && !isCorrect;

              let btnClass = isSelected 
                  ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-md' 
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50';

              if (isReviewMode) {
                  if (isCorrect) {
                      btnClass = 'border-green-500 bg-green-50 text-green-900 shadow-md';
                  } else if (isWrongChoice) {
                      btnClass = 'border-red-500 bg-red-50 text-red-900 shadow-md opacity-80';
                  } else {
                      btnClass = 'border-gray-200 opacity-50 cursor-default';
                  }
              }

              return (
                <button
                  key={idx}
                  onClick={() => !isReviewMode && handleAnswer(idx)}
                  disabled={isReviewMode}
                  className={`text-left px-6 py-4 rounded-lg border-2 transition-all ${btnClass}`}
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
          {!isReviewMode ? (
            <div className="flex gap-3">
              <button 
                onClick={clearAnswer}
                disabled={answers[currentQ] === undefined}
                className="flex items-center gap-2 px-5 py-2 rounded border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <X size={18} /> Clear
              </button>
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
          ) : (
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  if (currentQ < TOTAL_QUESTIONS - 1) setCurrentQ(c => c + 1);
                }}
                disabled={currentQ === TOTAL_QUESTIONS - 1}
                className="flex items-center gap-2 px-8 py-2 rounded bg-purple-600 text-white font-bold hover:bg-purple-700 shadow-md disabled:opacity-50"
              >
                Next <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Palette */}
      <div className="w-80 bg-gray-50 p-6 flex flex-col">
        <h3 className="font-bold text-gray-700 mb-4">Question Palette</h3>
        
        {/* Status Legend */}
        {isReviewMode ? (
          <div className="grid grid-cols-2 gap-2 text-xs mb-6 text-gray-600">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> Correct</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded-sm"></div> Incorrect</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200 rounded-sm border border-gray-300"></div> Skipped</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 text-xs mb-6 text-gray-600">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> Answered</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-500 rounded-sm"></div> Marked</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded-sm"></div> Skipped</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-sm"></div> Unvisited</div>
          </div>
        )}

        {/* Grid */}
        <div className="flex-1 overflow-y-auto pr-2 pb-8 flex flex-col gap-6">
          {Object.entries(groupedQuestions).map(([domain, indices]) => (
            <div key={domain}>
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{domain}</h4>
              <div className="grid grid-cols-5 gap-2">
                {indices.map((i) => {
                  let bgColor = 'bg-gray-200 text-gray-700'; // unvisited
                  let ring = currentQ === i ? 'ring-2 ring-purple-600 ring-offset-2' : '';

                  if (isReviewMode) {
                    const userAns = answers[i];
                    if (userAns !== undefined) {
                      if (questions[i].options[userAns] === questions[i].answer) {
                        bgColor = 'bg-green-500 text-white';
                      } else {
                        bgColor = 'bg-red-500 text-white';
                      }
                    } else {
                      bgColor = 'bg-gray-200 text-gray-700 border border-gray-300';
                    }
                  } else {
                    if (status[i] === 'answered') bgColor = 'bg-green-500 text-white';
                    else if (status[i] === 'marked') bgColor = 'bg-yellow-500 text-white';
                    else if (status[i] === 'skipped') bgColor = 'bg-red-500 text-white';
                  }

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
          ))}
        </div>

        {isReviewMode ? (
          <button
            onClick={() => onComplete()}
            className="mt-auto w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition shadow-md flex items-center justify-center gap-2"
          >
            <ChevronLeft size={18} /> Back to Results
          </button>
        ) : (
          <button
            onClick={submitSection}
            className="mt-auto w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition shadow-md"
          >
            Submit Section →
          </button>
        )}
      </div>

    </div>
  );
}
