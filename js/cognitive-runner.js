// Interactive Accenture Cognitive Gaming Assessment Runner
// Replicates the exact Arrow Motion & Grid Challenge from Accenture OA 2025/2026 (PDF Screens 1-7, 10)

export class CognitiveRunner {
  constructor(containerElement, onComplete) {
    this.container = containerElement;
    this.onComplete = onComplete;
    this.currentQIndex = 0; // 0: Question 1 of 3, 1: Question 2 of 3, 2: Question 3 of 3
    this.score = 0;
    this.maxScore = 300; // 100 points per question
    this.timerSeconds = 4 * 60; // 4:00 minutes (240s) countdown per question
    this.timerInterval = null;
    this.soundEnabled = true;
    this.audioCtx = null;

    // Challenge 1 State (Path Tracing)
    this.q1CurrentStep = 0;
    this.q1Path = [
      { r: 0, c: 0 },
      { r: 0, c: 1 },
      { r: 0, c: 2 },
      { r: 1, c: 2 },
      { r: 2, c: 2 },
      { r: 2, c: 3 },
      { r: 2, c: 4 },
      { r: 3, c: 4 }
    ];
    this.q1Clicked = [{ r: 0, c: 0 }];

    // Challenge 2 State (Anomaly Hunter)
    this.q2TargetsFound = 0;
    this.q2TotalTargets = 5;

    // Challenge 3 State (Grid Rotation)
    this.q3GridState = [];
    this.q3TargetState = [];
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
  }

  playSound(type) {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'click') {
        osc.frequency.setValueAtTime(480, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'win') {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {}
  }

  start() {
    this.currentQIndex = 0;
    this.score = 0;
    this.timerSeconds = 4 * 60; // 04:00 minutes as in PDF (Page 3, 4, 5)
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    clearInterval(this.timerInterval);
    this.startCountdownTimer();

    if (this.currentQIndex === 0) {
      this.renderQuestion1();
    } else if (this.currentQIndex === 1) {
      this.renderQuestion2();
    } else if (this.currentQIndex === 2) {
      this.renderQuestion3();
    } else {
      this.renderResults();
    }
  }

  startCountdownTimer() {
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      const timerEl = document.getElementById('cog-game-timer');
      if (timerEl) {
        const m = Math.floor(this.timerSeconds / 60);
        const s = this.timerSeconds % 60;
        timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (this.timerSeconds <= 60) {
          timerEl.parentElement.classList.add('warning');
        }
      }

      if (this.timerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.playSound('wrong');
        alert('Time elapsed for this challenge. Progressing to the next question.');
        this.nextQuestion();
      }
    }, 1000);
  }

  formatTime(totalSecs) {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // ==========================================
  // QUESTION 1 OF 3: ARROW PATH TRACING
  // ==========================================
  renderQuestion1() {
    this.q1CurrentStep = 0;
    this.q1Clicked = [{ r: 0, c: 0 }];

    // 4 rows x 5 columns grid of arrows
    // Path: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,3) -> (2,4) -> (3,4) [Goal]
    const gridArrows = [
      ['→', '→', '↓', '←', '↑'],
      ['↑', '→', '↓', '→', '↓'],
      ['←', '↑', '→', '→', '↓'],
      ['→', '←', '↑', '←', '★']
    ];

    const targetSteps = ['→', '→', '↓', '↓', '→', '→', '↓'];

    this.container.innerHTML = `
      <div class="gaming-arena">
        <!-- Top Navigation -->
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 1 of 3: Motion &amp; Arrow Path Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <!-- Layout -->
        <div class="gaming-layout">
          <!-- Left Sidebar / Target Box -->
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Target Sequence (From PDF Page 3 &amp; 7)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Follow the Flow</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                Start at <strong>START (0, 0)</strong>. Follow each arrow's direction in sequence to reach the <strong>GOAL (★)</strong>. Click adjacent tiles in correct directional order.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Required Step Sequence:</div>
                <div class="target-pattern-sequence" id="q1-target-seq">
                  ${targetSteps.map((arr, i) => `
                    <div class="target-arrow-pill" id="target-pill-${i}">${arr}</div>
                  `).join('')}
                </div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Current Path:</span>
                  <strong id="q1-step-label" style="color:#38bdf8;">Step 1 of 7</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Eliminatory Threshold:</span>
                  <strong style="color:#22c55e;">&gt;= 70%</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-next-cog-q" style="width:100%; padding:10px; display:none;">
                Proceed to Question 2 of 3 →
              </button>
            </div>
          </div>

          <!-- Center Stage / Interactive Grid -->
          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Click the next tile in the path following arrow direction:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(5, 64px);">
              ${gridArrows.map((row, r) => 
                row.map((cell, c) => {
                  const isStart = (r === 0 && c === 0);
                  const isGoal = (r === 3 && c === 4);
                  let extraClass = '';
                  if (isStart) extraClass = 'start-node selected';
                  if (isGoal) extraClass = 'goal-node';
                  return `
                    <div class="arrow-tile ${extraClass}" data-r="${r}" data-c="${c}" id="tile-${r}-${c}">
                      ${cell}
                    </div>
                  `;
                }).join('')
              ).join('')}
            </div>

            <div id="q1-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Follow arrows from START (top-left) to reach the GOAL.
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachQ1Events();
  }

  attachQ1Events() {
    this.setupSoundButton();
    const tiles = this.container.querySelectorAll('.arrow-tile');
    const feedback = document.getElementById('q1-feedback');
    const stepLabel = document.getElementById('q1-step-label');
    const nextBtn = document.getElementById('btn-next-cog-q');

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const r = parseInt(tile.getAttribute('data-r'));
        const c = parseInt(tile.getAttribute('data-c'));
        const expectedNext = this.q1Path[this.q1CurrentStep + 1];

        this.playSound('click');

        if (expectedNext && r === expectedNext.r && c === expectedNext.c) {
          // Correct step!
          this.q1CurrentStep++;
          tile.classList.add('selected', 'correct');
          this.playSound('correct');

          // Highlight target pill
          const pill = document.getElementById(`target-pill-${this.q1CurrentStep - 1}`);
          if (pill) {
            pill.style.borderColor = '#22c55e';
            pill.style.background = '#14532d';
            pill.style.color = '#86efac';
          }

          stepLabel.textContent = `Step ${this.q1CurrentStep + 1} of 7`;
          feedback.innerHTML = `<span style="color:#22c55e;">✓ Correct move! Keep following the directional flow.</span>`;

          if (this.q1CurrentStep === this.q1Path.length - 1) {
            // Reached Goal!
            this.playSound('win');
            this.score += 100;
            feedback.innerHTML = `<span style="color:#22c55e; font-size:15px;">🎉 Goal Reached! Full path navigated successfully! (+100 pts)</span>`;
            nextBtn.style.display = 'block';
          }
        } else {
          // Wrong tile clicked
          this.playSound('wrong');
          tile.classList.add('wrong');
          setTimeout(() => tile.classList.remove('wrong'), 400);
          feedback.innerHTML = `<span style="color:#ef4444;">✗ Deviated from arrow sequence! Check direction from the last active tile.</span>`;
        }
      });
    });

    nextBtn.addEventListener('click', () => {
      this.currentQIndex = 1;
      this.renderCurrentQuestion();
    });
  }

  // ==========================================
  // QUESTION 2 OF 3: TARGET ANOMALY HUNTER
  // ==========================================
  renderQuestion2() {
    this.q2TargetsFound = 0;
    this.q2TotalTargets = 5;

    // 5x5 Grid where background flow is '→', but 5 targets are anomalous '↗' (as in PDF Page 1: "→ ↗ →")
    const gridData = [
      ['→', '→', '↗', '→', '→'],
      ['→', '↗', '→', '→', '→'],
      ['→', '→', '→', '↗', '→'],
      ['→', '→', '→', '→', '↗'],
      ['↗', '→', '→', '→', '→']
    ];

    this.container.innerHTML = `
      <div class="gaming-arena">
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 2 of 3: Matrix Flow &amp; Target Spotting Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <div class="gaming-layout">
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Target Pattern (From PDF Page 1 &amp; 4)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Spot Deviant Arrows</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                In the PDF recording (<em>"Accenture gaming test"</em>), the background stream flows <strong>RIGHT (→)</strong> while subtle target anomalies break the orientation.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Target Deviant to Find:</div>
                <div class="target-pattern-sequence">
                  <div class="target-arrow-pill" style="border-color:#38bdf8; color:#38bdf8;">↗</div>
                </div>
                <div style="font-size:11px; color:#64748b;">(Diagonal Top-Right)</div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Targets Found:</span>
                  <strong id="q2-count-label" style="color:#38bdf8;">0 / 5</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Total Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Accuracy:</span>
                  <strong id="q2-acc-label" style="color:#22c55e;">100%</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-next-cog-q" style="width:100%; padding:10px; display:none;">
                Proceed to Question 3 of 3 →
              </button>
            </div>
          </div>

          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Rapidly click all 5 deviating arrows <strong>[↗]</strong> in the matrix:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(5, 64px);">
              ${gridData.map((row, r) => 
                row.map((cell, c) => {
                  const isAnomaly = (cell === '↗');
                  return `
                    <div class="arrow-tile" data-anomaly="${isAnomaly ? 'true' : 'false'}" id="tile-q2-${r}-${c}">
                      ${cell}
                    </div>
                  `;
                }).join('')
              ).join('')}
            </div>

            <div id="q2-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Scan the grid rows and click every anomalous arrow.
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachQ2Events();
  }

  attachQ2Events() {
    this.setupSoundButton();
    const tiles = this.container.querySelectorAll('.arrow-tile');
    const countLabel = document.getElementById('q2-count-label');
    const feedback = document.getElementById('q2-feedback');
    const nextBtn = document.getElementById('btn-next-cog-q');

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const isAnomaly = tile.getAttribute('data-anomaly') === 'true';
        if (tile.classList.contains('correct')) return; // Already claimed

        if (isAnomaly) {
          this.playSound('correct');
          tile.classList.add('correct');
          this.q2TargetsFound++;
          countLabel.textContent = `${this.q2TargetsFound} / ${this.q2TotalTargets}`;
          feedback.innerHTML = `<span style="color:#22c55e;">✓ Target spotted! (${this.q2TargetsFound}/${this.q2TotalTargets})</span>`;

          if (this.q2TargetsFound === this.q2TotalTargets) {
            this.playSound('win');
            this.score += 100;
            feedback.innerHTML = `<span style="color:#22c55e; font-size:15px;">🎉 All target anomalies located! (+100 pts)</span>`;
            nextBtn.style.display = 'block';
          }
        } else {
          this.playSound('wrong');
          tile.classList.add('wrong');
          setTimeout(() => tile.classList.remove('wrong'), 400);
          feedback.innerHTML = `<span style="color:#ef4444;">✗ Regular background arrow! Find the deviating diagonal arrows.</span>`;
        }
      });
    });

    nextBtn.addEventListener('click', () => {
      this.currentQIndex = 2;
      this.renderCurrentQuestion();
    });
  }

  // ==========================================
  // QUESTION 3 OF 3: ARROW ROTATION & SWITCH
  // ==========================================
  renderQuestion3() {
    // 3x3 interactive rotation puzzle (from PDF Page 5 & 10)
    // Candidate clicks arrow tiles to rotate them until all point UP (↑) to match target state
    const directions = ['→', '↓', '←', '↑'];
    this.q3GridState = [
      '→', '↓', '←',
      '←', '→', '↓',
      '↓', '←', '→'
    ];
    this.q3TargetState = ['↑', '↑', '↑', '↑', '↑', '↑', '↑', '↑', '↑'];

    this.container.innerHTML = `
      <div class="gaming-arena">
        <div class="gaming-top-bar">
          <div class="gaming-q-title">
            <span style="color:#a855f7;">🎮</span>
            <span>Question 3 of 3: Grid Rotation &amp; Orientation Challenge</span>
            <span class="cognitive-badge-eliminatory">⚠️ Eliminatory Section</span>
          </div>
          <div style="display:flex; align-items:center; gap:14px;">
            <button class="sound-toggle-btn" id="btn-toggle-sound">
              <span>${this.soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
            </button>
            <div class="gaming-timer-pill">
              <span>⏱</span>
              <span id="cog-game-timer">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>
        </div>

        <div class="gaming-layout">
          <div class="gaming-sidebar">
            <div>
              <div style="font-size:12px; font-weight:700; color:#a855f7; text-transform:uppercase;">
                Transformation Rule (From PDF Page 5 &amp; 10)
              </div>
              <h3 style="font-size:16px; margin:4px 0 10px 0; color:#f8fafc;">Align the Vector Stream</h3>
              <p style="font-size:13px; color:#94a3b8; line-height:1.5;">
                In the PDF screens 5 &amp; 10, the matrix requires directional alignment. <strong>Click each arrow cell</strong> to rotate it 90° clockwise until all arrows point <strong>UP (↑)</strong>.
              </p>

              <div class="target-pattern-box">
                <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Target Orientation:</div>
                <div class="target-pattern-sequence">
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                  <div class="target-arrow-pill" style="border-color:#22c55e; color:#22c55e;">↑</div>
                </div>
              </div>

              <div style="margin-top:16px; background:#090d16; border:1px solid #334155; border-radius:8px; padding:12px;">
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Aligned Tiles:</span>
                  <strong id="q3-aligned-label" style="color:#38bdf8;">0 / 9</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Total Score:</span>
                  <strong style="color:#a855f7;">${this.score} pts</strong>
                </div>
                <div class="game-hud-stat">
                  <span style="color:#94a3b8;">Status:</span>
                  <strong style="color:#eab308;">In Progress</strong>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button class="btn-primary" id="btn-submit-q3" style="width:100%; padding:10px; background:#16a34a;">
                ✓ Verify &amp; Finish Cognitive Section
              </button>
            </div>
          </div>

          <div class="gaming-stage">
            <div style="margin-bottom:14px; font-size:13px; color:#94a3b8;">
              Click individual arrow tiles to rotate them 90° clockwise:
            </div>
            <div class="interactive-arrow-grid" style="grid-template-columns: repeat(3, 76px);">
              ${this.q3GridState.map((arr, idx) => `
                <div class="arrow-tile" data-idx="${idx}" id="tile-q3-${idx}" style="width:76px; height:76px; font-size:36px;">
                  ${arr}
                </div>
              `).join('')}
            </div>

            <div id="q3-feedback" style="margin-top:20px; font-size:13.5px; font-weight:700; color:#38bdf8; min-height:22px;">
              Rotate each arrow until every tile points UP [↑].
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachQ3Events();
  }

  attachQ3Events() {
    this.setupSoundButton();
    const rotSequence = ['→', '↓', '←', '↑'];
    const tiles = this.container.querySelectorAll('.arrow-tile');
    const alignedLabel = document.getElementById('q3-aligned-label');
    const feedback = document.getElementById('q3-feedback');
    const submitBtn = document.getElementById('btn-submit-q3');

    const checkAligned = () => {
      const aligned = this.q3GridState.filter(a => a === '↑').length;
      alignedLabel.textContent = `${aligned} / 9`;
      return aligned === 9;
    };

    checkAligned();

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        this.playSound('click');
        const idx = parseInt(tile.getAttribute('data-idx'));
        const currentArrow = this.q3GridState[idx];
        const nextArrow = rotSequence[(rotSequence.indexOf(currentArrow) + 1) % rotSequence.length];
        this.q3GridState[idx] = nextArrow;
        tile.textContent = nextArrow;

        if (nextArrow === '↑') {
          tile.classList.add('correct');
        } else {
          tile.classList.remove('correct');
        }

        const isComplete = checkAligned();
        if (isComplete) {
          this.playSound('win');
          feedback.innerHTML = `<span style="color:#22c55e; font-size:15px;">✓ Perfect Vector Alignment! Ready to submit.</span>`;
        }
      });
    });

    submitBtn.addEventListener('click', () => {
      const isComplete = checkAligned();
      if (isComplete) {
        this.score += 100;
      } else {
        const partial = Math.round((this.q3GridState.filter(a => a === '↑').length / 9) * 100);
        this.score += partial;
      }
      this.currentQIndex = 3;
      this.renderResults();
    });
  }

  setupSoundButton() {
    const btn = document.getElementById('btn-toggle-sound');
    if (btn) {
      btn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        btn.querySelector('span').textContent = this.soundEnabled ? '🔊 Sound On' : '🔇 Muted';
      });
    }
  }

  nextQuestion() {
    this.currentQIndex++;
    this.renderCurrentQuestion();
  }

  // ==========================================
  // FINAL RESULTS & ELIMINATORY VERDICT
  // ==========================================
  renderResults() {
    clearInterval(this.timerInterval);
    const percentage = Math.min(100, Math.round((this.score / this.maxScore) * 100));
    const passed = percentage >= 70; // 70% Accenture cut-off

    this.container.innerHTML = `
      <div class="cognitive-card" style="text-align:center; padding:40px 24px;">
        <div style="font-size:52px; margin-bottom:12px;">${passed ? '🎯' : '⚠️'}</div>
        <h2 style="font-size:26px; font-weight:800; color:#0f172a; margin-bottom:8px;">
          Cognitive Assessment Completed
        </h2>
        <p style="color:#64748b; font-size:14px; max-width:520px; margin:0 auto 24px auto;">
          The Cognitive Section is <strong>eliminatory</strong> in the Accenture Online Assessment. Candidates must achieve &gt;= 70% to qualify for Section B.
        </p>

        <div style="display:inline-flex; align-items:center; gap:24px; background:#f8fafc; padding:20px 36px; border-radius:12px; border:1px solid #cbd5e1; margin-bottom:28px;">
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Score</div>
            <div style="font-size:32px; font-weight:900; color:#a100ff;">${this.score} / ${this.maxScore}</div>
          </div>
          <div style="width:1px; height:46px; background:#cbd5e1;"></div>
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Accuracy</div>
            <div style="font-size:32px; font-weight:900; color:#0f172a;">${percentage}%</div>
          </div>
          <div style="width:1px; height:46px; background:#cbd5e1;"></div>
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Eliminatory Verdict</div>
            <div class="score-badge ${passed ? 'badge-passed' : 'badge-eliminatory'}" style="margin-top:6px;">
              ${passed ? '✓ PASSED COGNITIVE CUTOFF' : '✗ ELIMINATED (< 70%)'}
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:16px;">
          <button class="btn-secondary" id="btn-replay-cognitive" style="padding:10px 20px;">
            ⟳ Play Again
          </button>
          <button class="btn-primary" id="btn-proceed-technical" style="padding:10px 28px; font-size:14.5px;">
            Proceed to Section B: Technical Assessment →
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-replay-cognitive')?.addEventListener('click', () => {
      this.start();
    });

    document.getElementById('btn-proceed-technical')?.addEventListener('click', () => {
      if (this.onComplete) {
        this.onComplete({
          score: this.score,
          total: this.maxScore,
          percentage,
          passed
        });
      }
    });
  }
}
