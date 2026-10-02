import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CheckCircle, Lock, AlertTriangle } from 'lucide-react';
import CognitiveGame from './CognitiveGame.jsx';
import MemoryMaze from './MemoryMaze.jsx';
import SectionB from './SectionB.jsx';
import SectionC from './SectionC.jsx';
import { papers } from '../js/data/index.js'; 

const SECTION_ORDER = ['sec_a', 'sec_a2', 'sec_b', 'sec_c'];
const SECTION_LABELS = {
  sec_a: 'Cognitive 1: Path Finder',
  sec_a2: 'Cognitive 2: Memory Maze',
  sec_b: 'Section B: Technical',
  sec_c: 'Section C: Coding',
};

function App() {
  const [paperType, setPaperType] = useState(null); // 'actual' or 'sample'
  const [candidateRoll, setCandidateRoll] = useState('');
  const [sessionToken, setSessionToken] = useState('');
  const [currentSection, setCurrentSection] = useState('sec_a');
  const [completedSections, setCompletedSections] = useState(new Set());
  const [sectionResults, setSectionResults] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);
  const [reviewMode, setReviewMode] = useState(null);
  const [eliminatedMessage, setEliminatedMessage] = useState(null);

  const generateWatermark = useCallback(() => {
    setCandidateRoll('24' + Math.floor(100000 + Math.random() * 900000));
    setSessionToken(Math.floor(10000000 + Math.random() * 90000000).toString());
  }, []);

  useEffect(() => {
    generateWatermark();
  }, [generateWatermark]);

  /* Restore progress from localStorage */
  useEffect(() => {
    const saved = localStorage.getItem('accenture-oa-progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.paperType) setPaperType(data.paperType);
        if (data.currentSection) setCurrentSection(data.currentSection);
        if (data.completedSections) setCompletedSections(new Set(data.completedSections));
        if (data.sectionResults) setSectionResults(data.sectionResults);
      } catch (e) { /* corrupted data, ignore */ }
    }
  }, []);

  /* Persist progress to localStorage */
  useEffect(() => {
    if (paperType) {
      localStorage.setItem('accenture-oa-progress', JSON.stringify({
        paperType,
        currentSection,
        completedSections: [...completedSections],
        sectionResults,
      }));
    }
  }, [paperType, currentSection, completedSections, sectionResults]);

  const isSectionUnlocked = (section) => {
    if (paperType !== 'actual') return true;
    const idx = SECTION_ORDER.indexOf(section);
    if (idx === 0) return true;
    return completedSections.has(SECTION_ORDER[idx - 1]);
  };

  const getScorePercentage = (section, data) => {
    if (!data) return 0;
    if (section === 'sec_a' || section === 'sec_a2') {
      if (data.totalLevels) return (data.levelsCompleted / data.totalLevels) * 100;
    }
    if (section === 'sec_b') {
      if (data.performance) {
        let correct = 0, total = 0;
        Object.values(data.performance).forEach(d => { correct += d.correct; total += d.total; });
        return total > 0 ? (correct / total) * 100 : 0;
      }
    }
    if (section === 'sec_c') {
      if (data.submitted) {
        return (Object.keys(data.submitted).length / 3) * 100;
      }
    }
    return 100;
  };

  const handleSectionComplete = useCallback((section) => (data) => {
    setSectionResults(prev => ({ ...prev, [section]: data || {} }));
    
    let passed = true;
    if (paperType === 'actual') {
      const score = getScorePercentage(section, data);
      if (score < 65) {
        passed = false;
        setEliminatedMessage(`You scored ${score.toFixed(0)}% in ${SECTION_LABELS[section]}. You need at least 65% to qualify for the next section. Better luck next time!`);
      }
    }

    setCompletedSections(prev => new Set([...prev, section]));
    
    if (!passed) {
      setShowResults(true);
      return;
    }

    const idx = SECTION_ORDER.indexOf(section);
    if (idx < SECTION_ORDER.length - 1) {
      setCurrentSection(SECTION_ORDER[idx + 1]);
    } else {
      setShowResults(true);
    }
  }, [paperType]);

  const handleFinishTest = () => {
    setShowFinishConfirm(false);
    setShowResults(true);
  };

  const handleNewTest = () => {
    localStorage.removeItem('accenture-oa-progress');
    window.location.reload();
  };

  const watermarkText = `${candidateRoll} - ${sessionToken}`;

  // Memoize the 150 spans so they aren't recreated on every state change (e.g., tab switch)
  const watermarkPattern = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => (
      <span key={i} className="text-3xl font-bold whitespace-nowrap text-gray-500">
        {watermarkText}
      </span>
    ));
  }, [watermarkText]);

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col font-sans overflow-hidden">
      
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0 flex flex-wrap gap-x-24 gap-y-12 items-center justify-center transform -rotate-12 scale-150">
        {watermarkPattern}
      </div>

      {/* Header */}
      <header className="bg-gray-900 text-white flex justify-between items-center p-4 z-10 shadow-md">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold tracking-widest flex items-center gap-2">
            <span className="text-purple-500 text-2xl">&gt;</span> Accenture
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
          <button 
            onClick={() => paperType && setShowFinishConfirm(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition disabled:opacity-50"
            disabled={!paperType}
          >
            Finish Test
          </button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 z-10 flex overflow-x-auto">
        {SECTION_ORDER.map((sec) => {
          const isActive = currentSection === sec;
          const isCompleted = completedSections.has(sec);
          const isUnlocked = isSectionUnlocked(sec);
          const isEliminatory = sec === 'sec_a' || sec === 'sec_a2';
          const qCount = sec === 'sec_b' ? '45 Qs' : sec === 'sec_c' ? '3 Qs' : null;

          return (
            <button
              key={sec}
              className={`shrink-0 px-6 py-4 font-semibold text-sm transition border-b-2 flex items-center gap-2
                ${isActive ? 'border-purple-600 text-purple-700 bg-purple-50' : 'border-transparent'}
                ${!isActive && isUnlocked ? 'text-gray-600 hover:bg-gray-50' : ''}
                ${!isUnlocked ? 'text-gray-400 cursor-not-allowed opacity-60' : ''}
                ${isCompleted && !isActive ? 'text-green-700' : ''}
              `}
              onClick={() => isUnlocked && !showResults && setCurrentSection(sec)}
              disabled={!isUnlocked}
              title={!isUnlocked ? 'Complete the previous section to unlock' : ''}
            >
              {isCompleted && <CheckCircle size={16} className="text-green-600" />}
              {!isUnlocked && <Lock size={14} className="text-gray-400" />}
              {SECTION_LABELS[sec]}
              {isEliminatory && (
                <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Eliminatory</span>
              )}
              {qCount && (
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">{qCount}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 w-full max-w-[100vw] overflow-hidden">
        {reviewMode === 'sec_b' ? (
          <SectionB 
            paperType={paperType} 
            isReviewMode={true} 
            initialAnswers={sectionResults.sec_b?.answers || {}} 
            initialStatus={sectionResults.sec_b?.status || {}}
            onComplete={() => setReviewMode(null)} 
          />
        ) : showResults ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
              <div className="text-center mb-8">
                {eliminatedMessage ? (
                  <>
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle size={40} className="text-red-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Not Qualified</h2>
                    <p className="text-red-600 bg-red-50 p-4 rounded-lg inline-block border border-red-200 shadow-sm font-semibold max-w-lg mt-2">
                      {eliminatedMessage}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Assessment Complete</h2>
                    <p className="text-gray-500 mt-2">Here is your performance summary</p>
                  </>
                )}
              </div>
              
              <div className="space-y-3">
                {SECTION_ORDER.map(sec => {
                  const isCompleted = completedSections.has(sec);
                  const result = sectionResults[sec] || {};
                  return (
                    <div key={sec} className={`flex items-center justify-between p-4 rounded-lg border ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center gap-3">
                        {isCompleted 
                          ? <CheckCircle size={20} className="text-green-600" /> 
                          : <AlertTriangle size={20} className="text-yellow-500" />
                        }
                        <div>
                          <p className="font-semibold text-gray-800">{SECTION_LABELS[sec]}</p>
                          {result.levelsCompleted !== undefined && (
                            <p className="text-sm text-gray-500">{result.levelsCompleted}/{result.totalLevels} levels completed</p>
                          )}
                          {result.answered !== undefined && (
                            <p className="text-sm text-gray-500">
                              {result.answered} answered &middot; {result.marked || 0} marked &middot; {result.skipped || 0} skipped &mdash; of {result.total}
                            </p>
                          )}
                          {result.submitted && (
                            <p className="text-sm text-gray-500">
                              Submitted: {Object.entries(result.submitted).filter(([,v]) => v).map(([k]) => k).join(', ') || 'none'}
                            </p>
                          )}
                          {result.performance && (
                            <div className="mt-4 border-t border-gray-100 pt-3 flex flex-col gap-3">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Evaluation / Performance</p>
                              {Object.entries(result.performance).map(([domain, data]) => {
                                const percentage = Math.round((data.correct / data.total) * 100) || 0;
                                let color = 'bg-red-500';
                                if (percentage >= 70) color = 'bg-green-500';
                                else if (percentage >= 40) color = 'bg-yellow-500';
                                
                                return (
                                  <div key={domain} className="flex flex-col gap-1 w-full max-w-sm">
                                    <div className="flex justify-between text-xs text-gray-700">
                                      <span className="truncate pr-2" title={domain}>{domain}</span>
                                      <span className="font-bold whitespace-nowrap">{data.correct} / {data.total} ({percentage}%)</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                      <div className={`${color} h-1.5 rounded-full transition-all`} style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    {percentage < 40 && (
                                      <p className="text-[10px] text-red-500 mt-0.5">⚠️ Lagging Area: Focus on improving this</p>
                                    )}
                                    {percentage >= 80 && (
                                      <p className="text-[10px] text-green-600 mt-0.5">⭐ Strength: Excellent Knowledge</p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {sec === 'sec_b' && result.answers && (
                            <button 
                              onClick={() => setReviewMode('sec_b')} 
                              className="mt-5 w-full text-sm font-bold text-purple-600 border border-purple-600 rounded-lg px-4 py-2 hover:bg-purple-50 transition shadow-sm"
                            >
                              Review Questions &amp; Answers
                            </button>
                          )}
                        </div>
                      </div>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${isCompleted ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-700'}`}>
                        {isCompleted ? 'Completed' : 'Skipped'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <button 
                  onClick={handleNewTest}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-lg transition shadow-md"
                >
                  Start New Assessment
                </button>
              </div>
            </div>
          </div>
        ) : !paperType ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-2xl flex flex-col items-center max-w-lg w-full">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-3xl font-bold">&gt;</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Select Assessment Paper</h1>
              <p className="text-gray-500 text-center mb-8">Choose whether to practice with sample questions or take the simulated actual previous year questions.</p>
              
              <div className="flex gap-4 w-full">
                <button 
                  onClick={() => setPaperType('sample')}
                  className="flex-1 py-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition flex flex-col items-center gap-2 group"
                >
                  <span className="text-gray-700 font-semibold group-hover:text-purple-700">Sample Paper</span>
                  <span className="text-xs text-gray-500">Practice questions</span>
                </button>
                <button 
                  onClick={() => setPaperType('actual')}
                  className="flex-1 py-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition flex flex-col items-center gap-2 group"
                >
                  <span className="text-gray-700 font-semibold group-hover:text-purple-700">Actual Paper</span>
                  <span className="text-xs text-gray-500">PYQ (Dec 2025)</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {currentSection === 'sec_a' && <CognitiveGame onComplete={handleSectionComplete('sec_a')} />}
            {currentSection === 'sec_a2' && <MemoryMaze onComplete={handleSectionComplete('sec_a2')} />}
            {currentSection === 'sec_b' && <SectionB paperType={paperType} onComplete={handleSectionComplete('sec_b')} />}
            {currentSection === 'sec_c' && <SectionC paperType={paperType} onComplete={handleSectionComplete('sec_c')} />}
          </>
        )}
      </main>

      {/* Finish Test Confirmation Modal */}
      {showFinishConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Submit Test?</h2>
            </div>
            <p className="text-gray-600 mb-2">
              You have completed <strong>{completedSections.size}</strong> of <strong>{SECTION_ORDER.length}</strong> sections.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Once submitted, you will not be able to revisit any questions.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setShowFinishConfirm(false)}
                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition"
              >
                Continue Test
              </button>
              <button 
                onClick={handleFinishTest}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition shadow-sm"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-xs flex justify-between items-center p-3 z-10 border-t border-gray-800">
        <div>
          Need Help? Contact us <span className="text-blue-400 ml-1">+91 63665-24235</span>
        </div>
        <div>
          Secure Exam Browser 1.6.8 &bull; Candidate ID: <span className="font-mono text-gray-300 ml-1">{watermarkText}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
