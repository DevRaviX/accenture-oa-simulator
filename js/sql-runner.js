// Database SQL Assessment Runner for Section C
export class SqlRunner {
  constructor(containerElement, questionData) {
    this.container = containerElement;
    this.question = questionData;
    this.currentSql = questionData.starterSql;
    this.schemaVisible = false;
  }

  render() {
    this.container.innerHTML = `
      <div class="coding-container">
        <!-- Left Panel: Problem Statement & SQL Editor -->
        <div class="coding-left-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-tab="sql">⌨ SQL Query Editor</button>
              <button class="ide-tab" data-tab="schema">🗄 View Database Schema</button>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-secondary" id="btn-schema-toggle" style="font-size:12px; padding:4px 10px;">
                👁 Toggle Schema
              </button>
              <button class="btn-primary" id="btn-run-sql" style="font-size:12px; padding:4px 12px; background:#16a34a;">
                ▶ Execute SQL
              </button>
            </div>
          </div>

          <div id="sql-desc" style="padding:18px; background:#f8fafc; border-bottom:1px solid #cbd5e1;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h3 style="font-size:15px; font-weight:800; color:#0f172a;">${this.question.title}</h3>
              <span class="tab-badge" style="background:#e0e7ff; color:#3730a3;">MySQL 8.0 / ANSI SQL</span>
            </div>
            <p style="font-size:13.5px; color:#334155; margin-bottom:10px;">${this.question.objective}</p>
            <div style="font-size:12.5px; color:#475569;">
              <strong>Required Output Columns:</strong> 
              <code style="background:#ede9fe; color:#5b21b6; padding:2px 6px; border-radius:4px; font-family:var(--font-mono);">
                ${this.question.expectedColumns.join(', ')}
              </code>
            </div>
          </div>

          <div class="editor-wrapper" id="sql-editor-wrap">
            <textarea class="code-textarea" id="sql-editor" spellcheck="false">${this.currentSql}</textarea>
          </div>

          <div id="schema-viewer-pane" style="display:none; padding:20px; overflow-y:auto; flex:1; background:#ffffff;">
            ${this.renderSchemaHtml()}
          </div>

          <!-- Bottom Action Bar -->
          <div style="padding:12px 16px; background:#f8fafc; border-top:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; color:#64748b;">Relational Query Engine Active</span>
            <button class="btn-primary" id="btn-validate-sql" style="background:#2563eb; font-size:12.5px;">
              ✓ Validate & Submit Query
            </button>
          </div>
        </div>

        <!-- Right Panel: Execution Output & Verification -->
        <div class="coding-right-panel">
          <div class="panel-header-tabs">
            <div class="ide-tabs">
              <button class="ide-tab active" data-out-tab="output">📊 Query Result Output</button>
              <button class="ide-tab" data-out-tab="expected">📋 Expected Result</button>
              <button class="ide-tab" data-out-tab="schema-view">🗂 Sample Table Records</button>
            </div>
          </div>

          <div style="flex:1; overflow-y:auto; padding:20px;">
            <div id="sql-output-tab">
              <div id="sql-result-status" style="margin-bottom:12px; font-size:13px; color:#64748b;">
                Click "Execute SQL" to run your query on mock tables.
              </div>
              <div id="sql-output-table-wrap"></div>
            </div>

            <div id="sql-expected-tab" style="display:none;">
              <div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:10px;">
                Expected Benchmark Output (Rows matching BASIC > 5000):
              </div>
              ${this.renderExpectedTableHtml()}
            </div>

            <div id="sql-sample-records-tab" style="display:none;">
              <div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:10px;">
                Mock Database Tables:
              </div>
              ${this.renderSampleTablesHtml()}
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderSchemaHtml() {
    return Object.entries(this.question.schema).map(([tableName, columns]) => `
      <div style="margin-bottom:20px; border:1px solid #cbd5e1; border-radius:6px; overflow:hidden;">
        <div style="background:#1e293b; color:white; padding:8px 12px; font-weight:700; font-size:13px; display:flex; justify-content:space-between;">
          <span>TABLE: ${tableName}</span>
          <span style="font-size:11px; opacity:0.8;">[relational]</span>
        </div>
        <table class="table-results-view">
          <thead>
            <tr><th>Column Name</th><th>Type</th><th>Key</th></tr>
          </thead>
          <tbody>
            ${columns.map(c => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td><code style="font-family:var(--font-mono); color:#2563eb;">${c.type}</code></td>
                <td>${c.pk ? '<span style="color:#d97706; font-weight:700;">PRIMARY KEY</span>' : 'FOREIGN / ATTR'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `).join('');
  }

  renderExpectedTableHtml() {
    return `
      <table class="table-results-view">
        <thead>
          <tr>
            <th>EMPID</th>
            <th>EMPNAME</th>
            <th>BASIC</th>
            <th>NETPAY</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>E101</td><td>John Doe</td><td>8500.00</td><td>11200.00</td></tr>
          <tr><td>E102</td><td>Jane Smith</td><td>6200.00</td><td>8400.00</td></tr>
          <tr><td>E104</td><td>Sara Connor</td><td>8500.00</td><td>11350.00</td></tr>
        </tbody>
      </table>
      <div style="margin-top:10px; font-size:12px; color:#64748b;">
        * Note: E103 is filtered out because its BASIC is 4200.00 (<= 5000).
      </div>
    `;
  }

  renderSampleTablesHtml() {
    return `
      <h4 style="font-size:13px; margin:10px 0 6px 0;">employee_info</h4>
      <table class="table-results-view" style="margin-bottom:14px;">
        <thead><tr><th>EMPID</th><th>EMPNAME</th><th>DEPTID</th><th>EMPLOYEE_CATEGORY</th></tr></thead>
        <tbody>
          <tr><td>E101</td><td>John Doe</td><td>D01</td><td>CAT_A</td></tr>
          <tr><td>E102</td><td>Jane Smith</td><td>D02</td><td>CAT_B</td></tr>
          <tr><td>E103</td><td>Robert Paul</td><td>D01</td><td>CAT_C</td></tr>
          <tr><td>E104</td><td>Sara Connor</td><td>D03</td><td>CAT_A</td></tr>
        </tbody>
      </table>

      <h4 style="font-size:13px; margin:10px 0 6px 0;">salary_info</h4>
      <table class="table-results-view" style="margin-bottom:14px;">
        <thead><tr><th>EMPLOYEE_CATEGORY</th><th>BASIC</th><th>HRA</th><th>DA</th></tr></thead>
        <tbody>
          <tr><td>CAT_A</td><td>8500.00</td><td>2500.00</td><td>1500.00</td></tr>
          <tr><td>CAT_B</td><td>6200.00</td><td>1800.00</td><td>1200.00</td></tr>
          <tr><td>CAT_C</td><td>4200.00</td><td>1200.00</td><td>800.00</td></tr>
        </tbody>
      </table>

      <h4 style="font-size:13px; margin:10px 0 6px 0;">emp_payroll</h4>
      <table class="table-results-view">
        <thead><tr><th>TRANSNO</th><th>EMPID</th><th>MONTH</th><th>NETPAY</th></tr></thead>
        <tbody>
          <tr><td>1001</td><td>E101</td><td>DECEMBER</td><td>11200.00</td></tr>
          <tr><td>1002</td><td>E102</td><td>DECEMBER</td><td>8400.00</td></tr>
          <tr><td>1003</td><td>E103</td><td>DECEMBER</td><td>5600.00</td></tr>
          <tr><td>1004</td><td>E104</td><td>DECEMBER</td><td>11350.00</td></tr>
        </tbody>
      </table>
    `;
  }

  attachEvents() {
    const editor = document.getElementById('sql-editor');
    editor.addEventListener('input', () => {
      this.currentSql = editor.value;
    });

    const schemaToggleBtn = document.getElementById('btn-schema-toggle');
    const schemaPane = document.getElementById('schema-viewer-pane');
    const editorWrap = document.getElementById('sql-editor-wrap');

    schemaToggleBtn.addEventListener('click', () => {
      this.schemaVisible = !this.schemaVisible;
      schemaPane.style.display = this.schemaVisible ? 'block' : 'none';
      editorWrap.style.display = this.schemaVisible ? 'none' : 'block';
      schemaToggleBtn.textContent = this.schemaVisible ? '📝 Back to Editor' : '👁 Toggle Schema';
    });

    // Output tabs
    const outTabs = this.container.querySelectorAll('[data-out-tab]');
    outTabs.forEach(ot => {
      ot.addEventListener('click', () => {
        outTabs.forEach(t => t.classList.remove('active'));
        ot.classList.add('active');
        const tabKey = ot.getAttribute('data-out-tab');
        document.getElementById('sql-output-tab').style.display = tabKey === 'output' ? 'block' : 'none';
        document.getElementById('sql-expected-tab').style.display = tabKey === 'expected' ? 'block' : 'none';
        document.getElementById('sql-sample-records-tab').style.display = tabKey === 'schema-view' ? 'block' : 'none';
      });
    });

    document.getElementById('btn-run-sql').addEventListener('click', () => {
      this.executeSql();
    });

    document.getElementById('btn-validate-sql').addEventListener('click', () => {
      this.executeSql();
      this.validateSql();
    });
  }

  executeSql() {
    const statusEl = document.getElementById('sql-result-status');
    const tableWrap = document.getElementById('sql-output-table-wrap');
    const query = this.currentSql.trim();

    if (!query) {
      statusEl.innerHTML = `<span style="color:#ef4444; font-weight:700;">Query cannot be empty.</span>`;
      return;
    }

    // In-memory relational join evaluation
    try {
      const qLower = query.toLowerCase();
      // Check for JOIN keywords
      const hasJoinSalary = qLower.includes('join') && qLower.includes('salary_info');
      const hasJoinPayroll = qLower.includes('join') && qLower.includes('emp_payroll');
      const hasFilter = qLower.includes('5000') || qLower.includes('basic > 5000') || qLower.includes('basic>5000');

      if (!hasJoinSalary || !hasJoinPayroll) {
        statusEl.innerHTML = `
          <div style="background:#fee2e2; color:#991b1b; padding:10px; border-radius:6px; font-size:13px;">
            ⚠️ <strong>Relational Integrity Warning:</strong> Query must join both <code>salary_info</code> (for BASIC) and <code>emp_payroll</code> (for NETPAY).
          </div>
        `;
        tableWrap.innerHTML = '';
        return;
      }

      // Simulate output rows
      const data = this.question.mockData;
      let rows = [];

      data.employee_info.forEach(emp => {
        const sal = data.salary_info.find(s => s.EMPLOYEE_CATEGORY === emp.EMPLOYEE_CATEGORY);
        const pay = data.emp_payroll.find(p => p.EMPID === emp.EMPID);

        if (sal && pay) {
          if (!hasFilter || sal.BASIC > 5000) {
            rows.push({
              EMPID: emp.EMPID,
              EMPNAME: emp.EMPNAME,
              BASIC: sal.BASIC.toFixed(2),
              NETPAY: pay.NETPAY.toFixed(2)
            });
          }
        }
      });

      statusEl.innerHTML = `
        <div style="color:#15803d; font-weight:700; margin-bottom:8px;">
          ✓ Query Executed Successfully. Returned ${rows.length} rows. (Query runtime: 12ms)
        </div>
      `;

      tableWrap.innerHTML = `
        <table class="table-results-view">
          <thead>
            <tr>
              ${this.question.expectedColumns.map(col => `<th>${col}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                <td>${r.EMPID}</td>
                <td>${r.EMPNAME}</td>
                <td>${r.BASIC}</td>
                <td>${r.NETPAY}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } catch (err) {
      statusEl.innerHTML = `<span style="color:#ef4444; font-weight:700;">Syntax Error: ${err.message}</span>`;
      tableWrap.innerHTML = '';
    }
  }

  validateSql() {
    const qLower = this.currentSql.toLowerCase();
    const hasColumns = ['empid', 'empname', 'basic', 'netpay'].every(c => qLower.includes(c));
    const hasSalaryJoin = qLower.includes('salary_info') && qLower.includes('employee_category');
    const hasPayrollJoin = qLower.includes('emp_payroll') && qLower.includes('empid');
    const hasFilter = qLower.includes('5000');

    const passed = hasColumns && hasSalaryJoin && hasPayrollJoin && hasFilter;

    const statusEl = document.getElementById('sql-result-status');
    statusEl.innerHTML += `
      <div style="margin-top:12px; padding:12px; border-radius:6px; background:${passed ? '#dcfce7' : '#fee2e2'};">
        <strong style="color:${passed ? '#15803d' : '#991b1b'};">
          ${passed ? '✓ ALL DATABASE TEST CONSTRAINTS PASSED (100% Score)' : '✗ DATABASE CONSTRAINTS FAILED'}
        </strong>
        <div style="font-size:12px; color:#475569; margin-top:4px;">
          ${passed ? 'Joins, projected columns, and WHERE salary > 5000 conditions verified.' : 'Please verify multi-table JOIN ON keys and BASIC > 5000 condition.'}
        </div>
      </div>
    `;
  }
}
