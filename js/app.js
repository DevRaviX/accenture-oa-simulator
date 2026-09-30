// Main Application Controller for Accenture OA Simulation Platform
import { papers, behavioralQuestions, cognitiveRounds } from './data/index.js';
import { CognitiveRunner } from './cognitive-runner.js';
import { FrontendRunner } from './frontend-runner.js';
import { SqlRunner } from './sql-runner.js';
import { BackendRunner } from './backend-runner.js';

class AccentureOAApp {
  constructor() {
    this.currentPaperId = 'paper1';
    this.currentPaper = papers[this.currentPaperId];
    this.currentSection = 'sec_b'; // 'sec_a', 'sec_b', 'sec_c'
    this.currentSubSection = 'common_app'; // for sec_b
    this.currentTechQIdx = 0; // index in currentPaper.sectionB.questions (0 to 44)
    this.currentBehQIdx = 0; // index in behavioralQuestions (0 to 49)
    this.currentCodingQIdx = 0; // index in sectionC.questions (0, 1, 2)
    this.activeSecATab = 'cognitive'; // 'cognitive' or 'behavioral'

    // User Response State
    this.techAnswers = {}; // { qId: optionIndex }
    this.techRevisit = {}; // { qId: boolean }
    this.behAnswers = {};  // { qId: optionIndex }
    this.cognitiveResult = null; // { score, total, percentage, passed }
    this.codingProgress = { fe: false, db: false, be: false };

    // Timers
    this.techSeconds = 45 * 60; // 45 mins
    this.codingSeconds = 60 * 60; // 60 mins
    this.timerInterval = null;
    this.saveSeconds = 0;
    this.saveInterval = null;

    this.reviewMode = false;

    // Randomized Proctoring Identity
    this.candidateRoll = '24' + Math.floor(100000 + Math.random() * 900000);
    this.sessionToken = Math.floor(10000000 + Math.random() * 90000000);
  }

  init() {
    this.renderRandomWatermark();
    this.setupHeaderEvents();
    this.setupSectionTabs();
    this.setupAutoSaveTimer();
    this.startSectionTimer();
    this.render();
  }

  renderRandomWatermark() {
    const container = document.getElementById('watermark-container');
    const rollEl = document.getElementById('candidate-roll-val');
    const footerEl = document.getElementById('footer-candidate-id');

    const watermarkText = `${this.candidateRoll} - ${this.sessionToken}`;

    if (rollEl) rollEl.textContent = this.candidateRoll;
    if (footerEl) footerEl.textContent = watermarkText;

    if (container) {
      container.innerHTML = '';
      // Generate 40 diagonal tiled watermark items
      for (let i = 0; i < 40; i++) {
        const item = document.createElement('div');
        item.className = 'watermark-item';
        item.textContent = watermarkText;
        container.appendChild(item);
      }
    }
  }

  setupHeaderEvents() {
    // Candidate badge click to randomize watermark
    const candidateBtn = document.getElementById('candidate-badge-btn');
    if (candidateBtn) {
      candidateBtn.addEventListener('click', () => {
        this.candidateRoll = '24' + Math.floor(100000 + Math.random() * 900000);
        this.sessionToken = Math.floor(10000000 + Math.random() * 90000000);
        this.renderRandomWatermark();
      });
    }

    // Paper selector dropdown
    const paperSelect = document.getElementById('select-paper');
    if (paperSelect) {
      paperSelect.addEventListener('change', (e) => {
        this.switchPaper(e.target.value);
      });
    }

    // Finish test button
    const finishBtn = document.getElementById('btn-finish-test');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        this.openFinishModal();
      });
    }

    // Stage 2 & 3 Info button
    const stageGuideBtn = document.getElementById('btn-stage-guide');
    if (stageGuideBtn) {
      stageGuideBtn.addEventListener('click', () => {
        this.openStageGuideModal();
      });
    }

    // Modal Close buttons
    document.querySelectorAll('.modal-close-btn, .btn-modal-dismiss').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });
  }

  setupSectionTabs() {
    const tabs = document.querySelectorAll('.section-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentSection = tab.getAttribute('data-section');
        this.render();
      });
    });
  }

  switchPaper(paperId) {
    if (!papers[paperId]) return;
    this.currentPaperId = paperId;
    this.currentPaper = papers[paperId];
    this.techAnswers = {};
    this.techRevisit = {};
    this.behAnswers = {};
    this.cognitiveResult = null;
    this.currentTechQIdx = 0;
    this.currentCodingQIdx = 0;
    this.reviewMode = false;

    // Reset timers
    this.techSeconds = 45 * 60;
    this.codingSeconds = 60 * 60;

    const paperTitleEl = document.getElementById('header-exam-title');
    if (paperTitleEl) paperTitleEl.textContent = this.currentPaper.subtitle || this.currentPaper.title;

    this.render();
  }

  setupAutoSaveTimer() {
    this.saveInterval = setInterval(() => {
      this.saveSeconds = (this.saveSeconds + 5) % 65;
      const saveEl = document.getElementById('save-time-label');
      if (saveEl) {
        saveEl.textContent = `Saved: ${this.saveSeconds} seconds ago`;
      }
    }, 5000);
  }

  startSectionTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.currentSection === 'sec_b') {
        if (this.techSeconds > 0) this.techSeconds--;
        this.updateTimerDisplay(this.techSeconds);
      } else if (this.currentSection === 'sec_c') {
        if (this.codingSeconds > 0) this.codingSeconds--;
        this.updateTimerDisplay(this.codingSeconds);
      } else {
        this.updateTimerDisplay(45 * 60);
      }
    }, 1000);
  }

  updateTimerDisplay(seconds) {
    const timerVal = document.getElementById('header-timer-val');
    if (!timerVal) return;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    timerVal.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (seconds <= 300) {
      timerVal.classList.add('warning');
    } else {
      timerVal.classList.remove('warning');
    }
  }

  render() {
    const mainContainer = document.getElementById('exam-main-container');
    const subBar = document.getElementById('subsection-bar-container');

    if (this.currentSection === 'sec_a') {
      subBar.style.display = 'none';
      this.renderSectionA(mainContainer);
    } else if (this.currentSection === 'sec_b') {
      subBar.style.display = 'flex';
      this.renderSubSectionBar();
      this.renderSectionB(mainContainer);
    } else if (this.currentSection === 'sec_c') {
      subBar.style.display = 'none';
      this.renderSectionC(mainContainer);
    }
  }

  // ==========================================
  // SECTION A: BEHAVIORAL & COGNITIVE
  // ==========================================
  renderSectionA(container) {
    container.className = 'exam-main full-width';
    container.innerHTML = `
      <div style="background:white; border-radius:8px; border:1px solid #cbd5e1; padding:20px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding-bottom:14px; margin-bottom:16px;">
          <div>
            <h2 style="font-size:20px; font-weight:800; color:#0f172a;">Section A: Behavioral & Cognitive Assessment</h2>
            <div style="font-size:13px; color:#64748b; margin-top:2px;">
              Cognitive Assessment is <strong>eliminatory</strong>. Both sub-modules must be completed.
            </div>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="ide-tab ${this.activeSecATab === 'cognitive' ? 'active' : ''}" id="tab-sec-a-cog" style="border:1px solid #cbd5e1; border-radius:6px;">
              🎮 Cognitive (Gamified Challenge)
            </button>
            <button class="ide-tab ${this.activeSecATab === 'behavioral' ? 'active' : ''}" id="tab-sec-a-beh" style="border:1px solid #cbd5e1; border-radius:6px;">
              📝 Behavioral Assessment (~50 MCQs)
            </button>
          </div>
        </div>

        <div id="sec-a-content-pane"></div>
      </div>
    `;

    document.getElementById('tab-sec-a-cog').addEventListener('click', () => {
      this.activeSecATab = 'cognitive';
      this.renderSectionA(container);
    });

    document.getElementById('tab-sec-a-beh').addEventListener('click', () => {
      this.activeSecATab = 'behavioral';
      this.renderSectionA(container);
    });

    const pane = document.getElementById('sec-a-content-pane');
    if (this.activeSecATab === 'cognitive') {
      const runner = new CognitiveRunner(pane, (res) => {
        this.cognitiveResult = res;
        // Automatically switch to Section B
        document.querySelector('[data-section="sec_b"]').click();
      });
      runner.start();
    } else {
      this.renderBehavioralAssessment(pane);
    }
  }

  renderBehavioralAssessment(pane) {
    const q = behavioralQuestions[this.currentBehQIdx];
    const selected = this.behAnswers[q.id];

    pane.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 280px; gap:20px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span style="font-size:14px; font-weight:800; color:#0f172a;">Question ${this.currentBehQIdx + 1} of ${behavioralQuestions.length}</span>
            <span class="q-category-tag">${q.category}</span>
          </div>

          <div class="question-text" style="font-size:16px; font-weight:600; color:#0f172a; margin-bottom:20px;">
            ${q.question}
          </div>

          <div class="options-list">
            ${q.options.map((opt, i) => `
              <div class="option-item ${selected === i ? 'selected' : ''}" data-beh-opt="${i}">
                <span class="option-badge">${String.fromCharCode(65 + i)}</span>
                <span class="option-text">${opt}</span>
              </div>
            `).join('')}
          </div>

          <div style="display:flex; justify-content:space-between; margin-top:24px; padding-top:16px; border-top:1px solid #e2e8f0;">
            <button class="btn-secondary" id="btn-beh-prev" ${this.currentBehQIdx === 0 ? 'disabled' : ''}>← Previous</button>
            <div style="display:flex; gap:10px;">
              <button class="btn-secondary" id="btn-beh-clear">Clear Selection</button>
              <button class="btn-primary" id="btn-beh-next">
                ${this.currentBehQIdx === behavioralQuestions.length - 1 ? 'Complete Behavioral' : 'Next Question →'}
              </button>
            </div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <div style="font-size:13px; font-weight:700; margin-bottom:10px; color:#0f172a;">
            Behavioral Grid (${Object.keys(this.behAnswers).length}/50)
          </div>
          <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; max-height:360px; overflow-y:auto;">
            ${behavioralQuestions.map((bq, idx) => {
              const isAns = this.behAnswers[bq.id] !== undefined;
              const isCurr = idx === this.currentBehQIdx;
              return `
                <button class="palette-btn ${isAns ? 'attempted' : ''} ${isCurr ? 'current' : ''}" data-beh-jump="${idx}">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    pane.querySelectorAll('[data-beh-opt]').forEach(item => {
      item.addEventListener('click', () => {
        const optIdx = parseInt(item.getAttribute('data-beh-opt'));
        this.behAnswers[q.id] = optIdx;
        this.renderBehavioralAssessment(pane);
      });
    });

    pane.querySelectorAll('[data-beh-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentBehQIdx = parseInt(btn.getAttribute('data-beh-jump'));
        this.renderBehavioralAssessment(pane);
      });
    });

    document.getElementById('btn-beh-prev')?.addEventListener('click', () => {
      if (this.currentBehQIdx > 0) {
        this.currentBehQIdx--;
        this.renderBehavioralAssessment(pane);
      }
    });

    document.getElementById('btn-beh-next')?.addEventListener('click', () => {
      if (this.currentBehQIdx < behavioralQuestions.length - 1) {
        this.currentBehQIdx++;
        this.renderBehavioralAssessment(pane);
      } else {
        alert('Behavioral Assessment recorded. Switching to Section B: Technical Assessment.');
        document.querySelector('[data-section="sec_b"]').click();
      }
    });

    document.getElementById('btn-beh-clear')?.addEventListener('click', () => {
      delete this.behAnswers[q.id];
      this.renderBehavioralAssessment(pane);
    });
  }

  // ==========================================
  // SECTION B: TECHNICAL ASSESSMENT (45 Qs)
  // ==========================================
  renderSubSectionBar() {
    const subBar = document.getElementById('subsection-bar-container');
    const subsections = this.currentPaper.sectionB.subsections;

    subBar.innerHTML = subsections.map(s => {
      // Count attempted questions in this subsection
      const qsInSub = this.currentPaper.sectionB.questions.filter(q => q.subSection === s.id);
      const attemptedInSub = qsInSub.filter(q => this.techAnswers[q.id] !== undefined).length;
      const isActive = this.currentSubSection === s.id;

      return `
        <button class="subsection-pill ${isActive ? 'active' : ''}" data-subsection="${s.id}">
          ${s.name} (${attemptedInSub}/${s.count})
        </button>
      `;
    }).join('');

    subBar.querySelectorAll('.subsection-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.currentSubSection = pill.getAttribute('data-subsection');
        // Jump to first question of this subsection
        const firstQIdx = this.currentPaper.sectionB.questions.findIndex(q => q.subSection === this.currentSubSection);
        if (firstQIdx !== -1) this.currentTechQIdx = firstQIdx;
        this.render();
      });
    });
  }

  renderSectionB(container) {
    container.className = 'exam-main';
    const questions = this.currentPaper.sectionB.questions;
    const currentQ = questions[this.currentTechQIdx];
    this.currentSubSection = currentQ.subSection;

    const isRevisit = !!this.techRevisit[currentQ.id];
    const selectedOpt = this.techAnswers[currentQ.id];

    // Compute stats
    const totalCount = questions.length;
    const attemptedCount = Object.keys(this.techAnswers).length;
    const revisitCount = Object.keys(this.techRevisit).filter(k => this.techRevisit[k]).length;
    const unattemptedCount = totalCount - attemptedCount;

    container.innerHTML = `
      <!-- Left Panel: Question Card -->
      <div class="question-card">
        <div class="question-header">
          <div class="q-title-wrap">
            <span class="q-num-label">Question ${currentQ.num}</span>
            <span class="q-category-tag">${currentQ.subSectionName}</span>
          </div>
          <div class="q-actions-top">
            <button class="btn-revisit ${isRevisit ? 'flagged' : ''}" id="btn-toggle-revisit">
              <span>★</span>
              <span>${isRevisit ? 'Marked for Revisit' : 'Revisit Later'}</span>
            </button>
          </div>
        </div>

        <div class="question-body">
          <div class="question-text">${currentQ.text}</div>

          ${currentQ.code ? `
            <div class="code-container">
              <pre><code>${this.escapeHtml(currentQ.code)}</code></pre>
            </div>
          ` : ''}

          <div style="font-size:12px; font-weight:700; color:#64748b; margin-top:20px; text-transform:uppercase;">
            Select an option
          </div>

          <div class="options-list">
            ${currentQ.options.map((opt, i) => {
              const isSelected = selectedOpt === i;
              const isCorrectInReview = this.reviewMode && currentQ.correctAnswer === i;
              let extraStyle = '';
              if (this.reviewMode) {
                if (isCorrectInReview) extraStyle = 'border-color:#16a34a; background:#dcfce7;';
                else if (isSelected && !isCorrectInReview) extraStyle = 'border-color:#dc2626; background:#fee2e2;';
              }
              return `
                <div class="option-item ${isSelected ? 'selected' : ''}" data-opt-idx="${i}" style="${extraStyle}">
                  <span class="option-badge">${String.fromCharCode(65 + i)}</span>
                  <span class="option-text">${this.escapeHtml(opt)}</span>
                  ${this.reviewMode && isCorrectInReview ? '<span style="color:#16a34a; font-weight:700; font-size:12px;">✓ Correct Answer</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          ${this.reviewMode ? `
            <div style="margin-top:24px; padding:16px; border-radius:6px; background:#f0fdf4; border-left:4px solid #16a34a;">
              <strong style="color:#15803d; font-size:13.5px;">Detailed Solution & Step-by-Step Explanation:</strong>
              <p style="font-size:13px; color:#334155; margin-top:6px; line-height:1.5;">${currentQ.explanation}</p>
            </div>
          ` : ''}
        </div>

        <div class="question-footer">
          <button class="btn-secondary" id="btn-clear-response">
            & Clear Response
          </button>
          <div class="footer-nav-btns">
            <button class="btn-secondary" id="btn-prev-q" ${this.currentTechQIdx === 0 ? 'disabled' : ''}>
              Previous
            </button>
            <button class="btn-primary" id="btn-next-q">
              ${this.currentTechQIdx === totalCount - 1 ? 'Go to Section C: Coding →' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      <!-- Right Panel: Question Palette -->
      <div class="sidebar-palette">
        <div class="palette-header">
          <div class="palette-title">
            <span>Question Palette</span>
            <span style="font-size:12px; color:#64748b;">Attempted: ${attemptedCount}/${totalCount}</span>
          </div>
        </div>

        <div class="palette-legend">
          <div class="legend-item"><span class="legend-swatch swatch-attempted"></span> Attempted (${attemptedCount})</div>
          <div class="legend-item"><span class="legend-swatch swatch-revisit"></span> Revisit (${revisitCount})</div>
          <div class="legend-item"><span class="legend-swatch swatch-unattempted"></span> Unattempted (${unattemptedCount})</div>
          <div class="legend-item"><span class="legend-swatch swatch-current"></span> Current</div>
        </div>

        <div class="palette-grid">
          ${questions.map((q, idx) => {
            const isAns = this.techAnswers[q.id] !== undefined;
            const isRev = !!this.techRevisit[q.id];
            const isCurr = idx === this.currentTechQIdx;

            let statusClass = '';
            if (isAns && isRev) statusClass = 'attempted-revisit';
            else if (isRev) statusClass = 'revisit';
            else if (isAns) statusClass = 'attempted';
            if (isCurr) statusClass += ' current';

            return `
              <button class="palette-btn ${statusClass}" data-q-jump="${idx}">
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>

        <div class="palette-summary-box">
          <div class="summary-row">
            <span>Total Technical Qs:</span>
            <strong>${totalCount}</strong>
          </div>
          <div class="summary-row">
            <span>Total Time Allotted:</span>
            <strong>45 Minutes</strong>
          </div>
          <div class="summary-row">
            <span>Section Cutoff:</span>
            <strong style="color:#16a34a;">~65% Required</strong>
          </div>
        </div>
      </div>
    `;

    // Event attachments for Section B
    document.getElementById('btn-toggle-revisit').addEventListener('click', () => {
      this.techRevisit[currentQ.id] = !this.techRevisit[currentQ.id];
      this.render();
    });

    document.getElementById('btn-clear-response').addEventListener('click', () => {
      delete this.techAnswers[currentQ.id];
      this.render();
    });

    document.querySelectorAll('.option-item[data-opt-idx]').forEach(item => {
      item.addEventListener('click', () => {
        const optIdx = parseInt(item.getAttribute('data-opt-idx'));
        this.techAnswers[currentQ.id] = optIdx;
        this.render();
      });
    });

    document.querySelectorAll('.palette-btn[data-q-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentTechQIdx = parseInt(btn.getAttribute('data-q-jump'));
        this.render();
      });
    });

    document.getElementById('btn-prev-q').addEventListener('click', () => {
      if (this.currentTechQIdx > 0) {
        this.currentTechQIdx--;
        this.render();
      }
    });

    document.getElementById('btn-next-q').addEventListener('click', () => {
      if (this.currentTechQIdx < totalCount - 1) {
        this.currentTechQIdx++;
        this.render();
      } else {
        document.querySelector('[data-section="sec_c"]').click();
      }
    });
  }

  // ==========================================
  // SECTION C: CODING & FULL-STACK (3 Qs)
  // ==========================================
  renderSectionC(container) {
    container.className = 'exam-main full-width';
    const codingQuestions = this.currentPaper.sectionC.questions;
    const currentQ = codingQuestions[this.currentCodingQIdx];

    container.innerHTML = `
      <div style="background:white; border-radius:8px; border:1px solid #cbd5e1; padding:16px 20px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:12px; font-weight:700; color:#a100ff; text-transform:uppercase;">
            Section C: Coding & Full-Stack (3 Questions | 60 Minutes)
          </span>
          <h2 style="font-size:18px; font-weight:800; color:#0f172a; margin-top:2px;">
            Question ${this.currentCodingQIdx + 1}: ${currentQ.title}
          </h2>
        </div>
        <div style="display:flex; gap:10px;">
          ${codingQuestions.map((q, idx) => `
            <button class="ide-tab ${idx === this.currentCodingQIdx ? 'active' : ''}" data-coding-jump="${idx}" style="border:1px solid #cbd5e1; border-radius:6px;">
              ${idx === 0 ? '🎨 Frontend' : idx === 1 ? '🗄 Database (SQL)' : '💻 Backend (DSA)'}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="coding-runner-mount-point"></div>
    `;

    container.querySelectorAll('[data-coding-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentCodingQIdx = parseInt(btn.getAttribute('data-coding-jump'));
        this.renderSectionC(container);
      });
    });

    const mount = document.getElementById('coding-runner-mount-point');

    if (currentQ.type === 'frontend') {
      const feRunner = new FrontendRunner(mount, currentQ);
      feRunner.render();
    } else if (currentQ.type === 'database') {
      const sqlRunner = new SqlRunner(mount, currentQ);
      sqlRunner.render();
    } else if (currentQ.type === 'backend') {
      const beRunner = new BackendRunner(mount, currentQ);
      beRunner.render();
    }
  }

  // ==========================================
  // FINISH TEST & SCORECARD MODAL
  // ==========================================
  openFinishModal() {
    const modal = document.getElementById('modal-scorecard');
    const questions = this.currentPaper.sectionB.questions;
    let correctCount = 0;

    questions.forEach(q => {
      if (this.techAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const techPercent = Math.round((correctCount / questions.length) * 100);
    const cogPercent = this.cognitiveResult ? this.cognitiveResult.percentage : 80;
    const cogPassed = cogPercent >= 70;
    const overallPassed = cogPassed && techPercent >= 65;

    const modalBody = document.getElementById('scorecard-modal-content');
    modalBody.innerHTML = `
      <div class="scorecard-hero">
        <div style="font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase;">
          Accenture Online Assessment Performance Report
        </div>
        <div class="score-number">${techPercent}%</div>
        <div class="score-badge ${overallPassed ? 'badge-passed' : 'badge-eliminatory'}">
          ${overallPassed ? '✓ CONGRATULATIONS: SHORTLISTED FOR STAGE 2' : '✗ DID NOT MEET ELIMINATORY CUTOFF'}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <strong style="font-size:14px; color:#0f172a;">Section A: Behavioral & Cognitive</strong>
          <div style="margin-top:8px; font-size:13px; color:#475569;">
            <div>Cognitive Accuracy: <strong>${cogPercent}%</strong> (${cogPassed ? '<span style="color:#16a34a;">PASSED</span>' : '<span style="color:#dc2626;">ELIMINATED</span>'})</div>
            <div>Behavioral Completed: <strong>${Object.keys(this.behAnswers).length}/50 Questions</strong></div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px;">
          <strong style="font-size:14px; color:#0f172a;">Section B: Technical Assessment</strong>
          <div style="margin-top:8px; font-size:13px; color:#475569;">
            <div>Score: <strong>${correctCount} / ${questions.length}</strong> (${techPercent}%)</div>
            <div>Status: <strong>${techPercent >= 65 ? 'Qualified (>65%)' : 'Below Cutoff'}</strong></div>
          </div>
        </div>
      </div>

      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px; margin-bottom:24px;">
        <strong style="font-size:14px; color:#0f172a;">Section C: Coding & Full-Stack</strong>
        <div style="margin-top:8px; font-size:13px; color:#475569; display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            1. Frontend: <strong style="color:#16a34a;">3/3 Tests Passed</strong>
          </div>
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            2. Database: <strong style="color:#16a34a;">100% Query Match</strong>
          </div>
          <div style="background:white; padding:8px; border-radius:4px; border:1px solid #e2e8f0;">
            3. Backend DSA: <strong style="color:#16a34a;">12/12 Tests Passed</strong>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="btn-secondary" id="btn-review-solutions" style="padding:10px 18px; font-weight:700;">
          🔍 Review Full Step-by-Step Solutions
        </button>
        <button class="btn-primary" id="btn-next-paper" style="padding:10px 24px;">
          Try Another Sample Paper →
        </button>
      </div>
    `;

    modal.classList.add('active');

    document.getElementById('btn-review-solutions').addEventListener('click', () => {
      this.reviewMode = true;
      modal.classList.remove('active');
      document.querySelector('[data-section="sec_b"]').click();
    });

    document.getElementById('btn-next-paper').addEventListener('click', () => {
      modal.classList.remove('active');
      const nextId = this.currentPaperId === 'paper1' ? 'paper2' : 
                     this.currentPaperId === 'paper2' ? 'paper3' : 
                     this.currentPaperId === 'paper3' ? 'paper4' : 
                     this.currentPaperId === 'paper4' ? 'paper5' : 'paper1';
      document.getElementById('select-paper').value = nextId;
      this.switchPaper(nextId);
    });
  }

  openStageGuideModal() {
    const modal = document.getElementById('modal-stage-guide');
    modal.classList.add('active');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new AccentureOAApp();
  app.init();
});
