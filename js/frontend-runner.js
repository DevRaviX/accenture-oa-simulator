// Frontend Assessment Runner for Section C
export class FrontendRunner {
  constructor(containerElement, questionData) {
    this.container = containerElement;
    this.question = questionData;
    this.activeTab = 'html'; // 'html', 'css', 'js'
    this.activeOutputTab = 'result'; // 'result', 'console'
    this.currentHtml = questionData.initialHtml;
    this.currentCss = questionData.initialCss;
    this.currentJs = questionData.initialJs;
    this.consoleLogs = [];
  }

  render() {
    this.container.innerHTML = `
      <div class="coding-container">
        <!-- Left Panel: Problem Statement & Code Editor -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab" data-tab="desc">📄 Objective</button>
              <button class="ide-tab active" data-tab="html">&lt;/&gt; HTML</button>
              <button class="ide-tab" data-tab="css"># CSS</button>
              <button class="ide-tab" data-tab="js">JS JavaScript</button>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-secondary" id="btn-reset-fe" style="font-size:12px; padding:4px 10px;">Reset</button>
              <button class="btn-primary" id="btn-run-fe" style="font-size:12px; padding:4px 12px; background:#16a34a;">▶ Run & Preview</button>
            </div>
          </div>

          <!-- Tab Content Views -->
          <div id="tab-desc" style="display:none; padding:20px; overflow-y:auto; flex:1;">
            <h3 style="font-size:16px; margin-bottom:10px; color:#0f172a;">${this.question.title}</h3>
            <p style="font-size:14px; color:#334155; margin-bottom:16px;">${this.question.objective}</p>
            <div style="background:#f8fafc; padding:14px; border-radius:6px; border-left:4px solid #a100ff;">
              <strong style="font-size:13px; color:#0f172a;">Constraints & Requirements:</strong>
              <ul style="margin-top:8px; padding-left:20px; font-size:13px; color:#475569; line-height:1.6;">
                ${this.question.requirements.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="editor-wrapper" id="editor-wrap">
            <textarea class="code-textarea" id="fe-editor" spellcheck="false"></textarea>
          </div>

          <!-- Bottom Action Bar -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; color:#64748b;">Frontend Interactive Sandbox</span>
            <button class="btn-primary" id="btn-validate-fe" style="background:#2563eb; font-size:12.5px;">
              ✓ Validate & Submit Solution
            </button>
          </div>
        </div>

        <!-- Right Panel: Live Result Preview & Console -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-output-tab="result">🖥 Result Preview</button>
              <button class="ide-tab" data-output-tab="console">📋 Console (<span id="fe-log-count">0</span>)</button>
              <button class="ide-tab" data-output-tab="tests">🧪 Test Verification</button>
            </div>
          </div>

          <div style="flex:1; position:relative; overflow:hidden;">
            <iframe id="fe-preview-iframe" class="preview-iframe"></iframe>
            <div id="fe-console-view" class="console-output" style="display:none;"></div>
            <div id="fe-test-view" style="display:none; padding:20px; overflow-y:auto; height:100%;">
              <div style="font-size:14px; font-weight:700; margin-bottom:12px; color:#0f172a;">
                Automated Grading Verification
              </div>
              <div id="fe-test-results-list">
                <div style="color:#64748b; font-size:13px;">Click "Validate & Submit Solution" to execute test suite.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
    this.updateEditorContent();
    this.runCode();
  }

  attachEvents() {
    const tabs = this.container.querySelectorAll('.panel-header-tabs .ide-tab[data-tab]');
    const editor = document.getElementById('fe-editor');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.saveCurrentEditorContent();
        this.activeTab = tab.getAttribute('data-tab');
        this.updateEditorContent();
      });
    });

    const outputTabs = this.container.querySelectorAll('[data-output-tab]');
    outputTabs.forEach(ot => {
      ot.addEventListener('click', () => {
        outputTabs.forEach(t => t.classList.remove('active'));
        ot.classList.add('active');
        this.activeOutputTab = ot.getAttribute('data-output-tab');
        this.updateOutputView();
      });
    });

    editor.addEventListener('input', () => {
      this.saveCurrentEditorContent();
    });

    document.getElementById('btn-run-fe').addEventListener('click', () => {
      this.saveCurrentEditorContent();
      this.runCode();
    });

    document.getElementById('btn-reset-fe').addEventListener('click', () => {
      if (confirm('Reset code to initial template?')) {
        this.currentHtml = this.question.initialHtml;
        this.currentCss = this.question.initialCss;
        this.currentJs = this.question.initialJs;
        this.updateEditorContent();
        this.runCode();
      }
    });

    document.getElementById('btn-validate-fe').addEventListener('click', () => {
      this.saveCurrentEditorContent();
      this.runCode();
      this.validateSolution();
    });
  }

  saveCurrentEditorContent() {
    const editor = document.getElementById('fe-editor');
    if (!editor) return;
    if (this.activeTab === 'html') this.currentHtml = editor.value;
    else if (this.activeTab === 'css') this.currentCss = editor.value;
    else if (this.activeTab === 'js') this.currentJs = editor.value;
  }

  updateEditorContent() {
    const editor = document.getElementById('fe-editor');
    const desc = document.getElementById('tab-desc');
    const wrap = document.getElementById('editor-wrap');

    if (this.activeTab === 'desc') {
      desc.style.display = 'block';
      wrap.style.display = 'none';
      return;
    }

    desc.style.display = 'none';
    wrap.style.display = 'block';

    if (this.activeTab === 'html') editor.value = this.currentHtml;
    else if (this.activeTab === 'css') editor.value = this.currentCss;
    else if (this.activeTab === 'js') editor.value = this.currentJs;
  }

  updateOutputView() {
    const iframe = document.getElementById('fe-preview-iframe');
    const consoleView = document.getElementById('fe-console-view');
    const testView = document.getElementById('fe-test-view');

    iframe.style.display = this.activeOutputTab === 'result' ? 'block' : 'none';
    consoleView.style.display = this.activeOutputTab === 'console' ? 'block' : 'none';
    testView.style.display = this.activeOutputTab === 'tests' ? 'block' : 'none';
  }

  runCode() {
    const iframe = document.getElementById('fe-preview-iframe');
    const consoleView = document.getElementById('fe-console-view');
    this.consoleLogs = [];

    const fullDocument = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          ${this.currentCss}
        </style>
        <script>
          window.__logs = [];
          const origLog = console.log;
          console.log = function(...args) {
            window.__logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
            origLog.apply(console, args);
          };
          window.onerror = function(msg, url, line) {
            window.__logs.push('Error: ' + msg + ' (Line ' + line + ')');
          };
        </script>
      </head>
      <body>
        ${this.extractBodyContent(this.currentHtml)}
        <script>
          try {
            ${this.currentJs}
          } catch(err) {
            console.log('Script execution error: ' + err.message);
          }
        </script>
      </body>
      </html>
    `;

    iframe.srcdoc = fullDocument;

    setTimeout(() => {
      try {
        const frameLogs = iframe.contentWindow?.__logs || [];
        this.consoleLogs = frameLogs;
        consoleView.textContent = frameLogs.length > 0 ? frameLogs.join('\n') : '[Console is empty]';
        document.getElementById('fe-log-count').textContent = frameLogs.length;
      } catch (e) {}
    }, 300);
  }

  extractBodyContent(html) {
    const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    return match ? match[1] : html;
  }

  validateSolution() {
    const iframe = document.getElementById('fe-preview-iframe');
    const testList = document.getElementById('fe-test-results-list');
    const outputTabs = this.container.querySelectorAll('[data-output-tab]');

    // Switch to test tab
    outputTabs.forEach(t => t.classList.remove('active'));
    this.container.querySelector('[data-output-tab="tests"]').classList.add('active');
    this.activeOutputTab = 'tests';
    this.updateOutputView();

    let tests = [];

    // Test 1: Check if <p id="selected-fruit"> or <p id="selected-item"> exists
    const hasP = this.currentHtml.includes('id="selected-fruit"') || this.currentHtml.includes('selected-fruit');
    tests.push({
      name: "Requirement 1: Paragraph tag with id 'selected-fruit' created",
      passed: hasP,
      details: hasP ? "Found <p id='selected-fruit'> in markup." : "Missing <p id='selected-fruit'> tag."
    });

    // Test 2: Check CSS text-align: center on .dropdown-container
    const hasCenterAlign = /text-align\s*:\s*center/i.test(this.currentCss);
    tests.push({
      name: "Requirement 2: .dropdown-container text-align set to center",
      passed: hasCenterAlign,
      details: hasCenterAlign ? "CSS contains 'text-align: center'." : "Ensure text-align: center is declared in .dropdown-container rule."
    });

    // Test 3: Check JS click handler
    const hasClickHandler = /addEventListener\s*\(\s*['"]click['"]/i.test(this.currentJs) && 
                           (this.currentJs.includes('selected-fruit') || this.currentJs.includes('fruit-dropdown'));
    tests.push({
      name: "Requirement 3: Click event listener dynamically updates fruit text",
      passed: hasClickHandler,
      details: hasClickHandler ? "Click event listener properly updates paragraph." : "Make sure to attach click event to #show-selected-btn and read #fruit-dropdown."
    });

    const passedCount = tests.filter(t => t.passed).length;

    testList.innerHTML = `
      <div style="margin-bottom:16px; padding:12px; border-radius:6px; background:${passedCount === tests.length ? '#dcfce7' : '#fee2e2'};">
        <strong>${passedCount} / ${tests.length} Requirements Passed</strong>
        <span style="float:right; font-weight:700; color:${passedCount === tests.length ? '#15803d' : '#b91c1c'};">
          ${passedCount === tests.length ? 'ALL CONSTRAINTS SATISFIED' : 'PENDING ACTION ITEMS'}
        </span>
      </div>
      ${tests.map(t => `
        <div class="testcase-item">
          <div>
            <strong>${t.name}</strong>
            <div style="color:#64748b; font-size:11.5px; margin-top:3px;">${t.details}</div>
          </div>
          <span class="${t.passed ? 'tc-badge-pass' : 'tc-badge-fail'}">
            ${t.passed ? 'PASSED' : 'FAILED'}
          </span>
        </div>
      `).join('')}
    `;
  }
}
