// Backend DSA Assessment Runner for Section C
export class BackendRunner {
  constructor(containerElement, questionData) {
    this.container = containerElement;
    this.question = questionData;
    this.activeLang = 'java'; // 'java', 'python', 'cpp', 'csharp'
    this.codeByLang = { ...questionData.templates };
    this.useCustomInput = false;
    this.customInputVal = '';
    this.activeTab = 'problem'; // 'problem', 'testcases', 'custom'
  }

  render() {
    this.container.innerHTML = `
      <div class="coding-container">
        <!-- Left Panel: Problem Specification & IDE -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab ${this.activeTab === 'problem' ? 'active' : ''}" data-be-tab="problem">📄 Problem Description</button>
              <button class="ide-tab ${this.activeTab === 'custom' ? 'active' : ''}" data-be-tab="custom">⚙ Custom Input</button>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:11.5px; color:#64748b; font-weight:600;">Language:</span>
              <select id="be-lang-select" style="background:#1e293b; color:white; border:1px solid #475569; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:600; cursor:pointer;">
                <option value="java" ${this.activeLang === 'java' ? 'selected' : ''}>Java 21 (OpenJDK)</option>
                <option value="python" ${this.activeLang === 'python' ? 'selected' : ''}>Python 3.12</option>
                <option value="cpp" ${this.activeLang === 'cpp' ? 'selected' : ''}>C++ 20 (GCC)</option>
                <option value="csharp" ${this.activeLang === 'csharp' ? 'selected' : ''}>C# 12 (.NET 8)</option>
              </select>
            </div>
          </div>

          <!-- Problem Tab -->
          <div id="be-problem-view" style="${this.activeTab === 'problem' ? 'display:block' : 'display:none'}; padding:18px; overflow-y:auto; max-height:220px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <h3 style="font-size:15px; font-weight:800; color:#0f172a; margin-bottom:8px;">${this.question.title}</h3>
            <p style="font-size:13.5px; color:#334155; line-height:1.5; margin-bottom:12px;">${this.question.problemStatement}</p>
            
            <div style="background:#ffffff; border:1px solid #e2e8f0; padding:12px; border-radius:6px; font-size:12.5px; margin-bottom:10px;">
              <strong>Input Specification:</strong> ${this.question.inputSpec}<br/>
              <strong style="margin-top:4px; display:inline-block;">Output Specification:</strong> ${this.question.outputSpec}
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              ${this.question.examples.map((ex, i) => `
                <div style="background:#ede9fe; padding:10px; border-radius:6px; font-size:12px;">
                  <strong style="color:#6b21a8;">Example ${i + 1}:</strong>
                  <div><code>Input: "${ex.input}"</code></div>
                  <div><code>Output: ${ex.output}</code></div>
                  <div style="color:#64748b; font-size:11px; margin-top:4px;">${ex.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Custom Input Tab -->
          <div id="be-custom-view" style="${this.activeTab === 'custom' ? 'display:block' : 'display:none'}; padding:18px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <label style="font-size:13px; font-weight:700; color:#0f172a; display:block; margin-bottom:6px;">
              Provide Custom Test Input:
            </label>
            <input type="text" id="be-custom-input" placeholder="e.g. aaaabbbcc or ccee" value="${this.customInputVal}"
                   style="width:100%; padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; font-family:var(--font-mono); font-size:13px;"/>
            <div style="font-size:11.5px; color:#64748b; margin-top:6px;">
              * String length must be a perfect square (1, 4, 9, 16, 25...).
            </div>
          </div>

          <!-- Code Editor -->
          <div class="editor-wrapper" style="flex:1;">
            <textarea class="code-textarea" id="be-code-editor" spellcheck="false">${this.codeByLang[this.activeLang]}</textarea>
          </div>

          <!-- Bottom Action Controls -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:8px;">
              <input type="checkbox" id="chk-use-custom" ${this.useCustomInput ? 'checked' : ''} style="cursor:pointer;"/>
              <label for="chk-use-custom" style="font-size:12.5px; color:#475569; cursor:pointer;">Use Custom Input</label>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="btn-secondary" id="btn-compile-test" style="font-size:12.5px; padding:6px 14px;">
                ⚙ Compile and Test
              </button>
              <button class="btn-primary" id="btn-submit-code" style="background:#16a34a; font-size:12.5px; padding:6px 18px;">
                ✓ Submit Code
              </button>
            </div>
          </div>
        </div>

        <!-- Right Panel: Code Execution & Graded Test Cases -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-res-tab="execution">💻 Code Execution</button>
              <button class="ide-tab" data-res-tab="history">⏱ Code History</button>
            </div>
          </div>

          <div style="flex:1; overflow-y:auto; padding:20px;">
            <div id="be-execution-results">
              <div style="font-size:13px; color:#64748b;">
                Click <strong>"Compile and Test"</strong> to run against Basic Test Cases, or <strong>"Submit Code"</strong> to execute against all 10 Graded Test Cases.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const editor = document.getElementById('be-code-editor');
    editor.addEventListener('input', () => {
      this.codeByLang[this.activeLang] = editor.value;
    });

    const langSelect = document.getElementById('be-lang-select');
    langSelect.addEventListener('change', (e) => {
      this.activeLang = e.target.value;
      editor.value = this.codeByLang[this.activeLang] || '';
    });

    const tabs = this.container.querySelectorAll('[data-be-tab]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeTab = tab.getAttribute('data-be-tab');
        document.getElementById('be-problem-view').style.display = this.activeTab === 'problem' ? 'block' : 'none';
        document.getElementById('be-custom-view').style.display = this.activeTab === 'custom' ? 'block' : 'none';
      });
    });

    const chkCustom = document.getElementById('chk-use-custom');
    chkCustom.addEventListener('change', (e) => {
      this.useCustomInput = e.target.checked;
      if (this.useCustomInput) {
        document.querySelector('[data-be-tab="custom"]').click();
      }
    });

    const customInputEl = document.getElementById('be-custom-input');
    customInputEl.addEventListener('input', (e) => {
      this.customInputVal = e.target.value;
    });

    document.getElementById('btn-compile-test').addEventListener('click', () => {
      this.runExecution(false);
    });

    document.getElementById('btn-submit-code').addEventListener('click', () => {
      this.runExecution(true);
    });
  }

  // Pure algorithmic solver for the problem to evaluate test cases
  solveAlgorithm(inputStr) {
    if (!inputStr) return 0;
    const len = inputStr.length;
    const n = Math.floor(Math.sqrt(len));
    if (n * n !== len) return 0; // Length constraint

    let count = 0;

    // Check rows
    for (let r = 0; r < n; r++) {
      let isUniform = true;
      const firstChar = inputStr.charAt(r * n);
      for (let c = 1; c < n; c++) {
        if (inputStr.charAt(r * n + c) !== firstChar) {
          isUniform = false;
          break;
        }
      }
      if (isUniform) count++;
    }

    // Check columns
    for (let c = 0; c < n; c++) {
      let isUniform = true;
      const firstChar = inputStr.charAt(c);
      for (let r = 1; r < n; r++) {
        if (inputStr.charAt(r * n + c) !== firstChar) {
          isUniform = false;
          break;
        }
      }
      if (isUniform) count++;
    }

    return count;
  }

  runExecution(isSubmission) {
    const resultsContainer = document.getElementById('be-execution-results');
    
    // Check if custom input mode
    if (this.useCustomInput && this.customInputVal.trim()) {
      const customIn = this.customInputVal.trim();
      const output = this.solveAlgorithm(customIn);
      resultsContainer.innerHTML = `
        <div style="background:#f0fdf4; border:1px solid #86efac; padding:14px; border-radius:6px; margin-bottom:16px;">
          <strong style="color:#15803d; font-size:14px;">✓ Custom Input Execution Complete</strong>
          <div style="margin-top:8px; font-size:13px; font-family:var(--font-mono);">
            <div>Input: "${customIn}" (Length: ${customIn.length}, Grid: ${Math.sqrt(customIn.length)}x${Math.sqrt(customIn.length)})</div>
            <div style="margin-top:4px; font-weight:700; color:#0f172a;">Output: ${output}</div>
            <div style="margin-top:4px; font-size:11.5px; color:#64748b;">Execution Time: 8ms | Peak Memory: 24.2 MB</div>
          </div>
        </div>
      `;
      return;
    }

    const testCasesToRun = isSubmission 
      ? this.question.testCases 
      : this.question.testCases.filter(t => t.type === 'basic');

    let passedCount = 0;
    const results = testCasesToRun.map(tc => {
      const actual = this.solveAlgorithm(tc.input);
      const passed = String(actual) === String(tc.expectedOutput);
      if (passed) passedCount++;
      return {
        ...tc,
        actualOutput: actual,
        passed,
        runtime: Math.floor(Math.random() * 8) + 4
      };
    });

    const isAllPass = passedCount === testCasesToRun.length;

    resultsContainer.innerHTML = `
      <div style="background:${isAllPass ? '#dcfce7' : '#fee2e2'}; border:1px solid ${isAllPass ? '#86efac' : '#fca5a5'}; padding:16px; border-radius:8px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:15px; color:${isAllPass ? '#15803d' : '#991b1b'};">
            ${isSubmission ? 'Graded Test Execution Summary' : 'Basic Test Execution'}
          </strong>
          <span style="font-size:14px; font-weight:800; color:${isAllPass ? '#15803d' : '#991b1b'};">
            ${passedCount} / ${testCasesToRun.length} Passed
          </span>
        </div>
        <div style="font-size:12px; color:#475569; margin-top:4px;">
          ${isAllPass ? 'All test constraints and edge cases cleared successfully!' : 'Some test cases failed. Please review boundary conditions.'}
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${results.map(r => `
          <div style="border:1px solid #cbd5e1; border-radius:6px; padding:12px; background:#ffffff;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-weight:700; font-size:13px; color:#0f172a;">${r.name}</span>
              <span class="${r.passed ? 'tc-badge-pass' : 'tc-badge-fail'}">
                ${r.passed ? 'PASSED' : 'FAILED'}
              </span>
            </div>
            <div style="font-size:12px; font-family:var(--font-mono); color:#475569; background:#f8fafc; padding:8px; border-radius:4px;">
              <div>Input: <code>"${r.input}"</code></div>
              <div>Expected: <code>${r.expectedOutput}</code> | Actual: <code>${r.actualOutput}</code></div>
              <div style="color:#94a3b8; font-size:11px; margin-top:3px;">Runtime: ${r.runtime}ms</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}
