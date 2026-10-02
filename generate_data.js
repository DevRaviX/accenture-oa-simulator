const fs = require('fs');
const actualSectionB = [];

// Section 1: Common Application / Technical (7)
for (let i = 1; i <= 7; i++) {
  actualSectionB.push({
    id: `actual_b_sec1_${i}`,
    domain: "Common Application / Technical",
    question: `Common Application question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
  });
}

// Section 2: SQL & Pseudocode (10)
for (let i = 1; i <= 10; i++) {
  actualSectionB.push({
    id: `actual_b_sec2_${i}`,
    domain: "SQL & Pseudocode",
    question: `SQL/Pseudocode question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option B"
  });
}

// Section 3: Fundamentals of Networking, Security & Cloud (14)
for (let i = 1; i <= 14; i++) {
  actualSectionB.push({
    id: `actual_b_sec3_${i}`,
    domain: "Fundamentals of Networking, Security & Cloud",
    question: `Networking/Security/Cloud question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option C"
  });
}

// Section 4: Computer Science (14)
for (let i = 1; i <= 14; i++) {
  actualSectionB.push({
    id: `actual_b_sec4_${i}`,
    domain: "Computer Science",
    question: `Computer Science question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option D"
  });
}

// We will replace the actualSectionB array in actualData.js
let actualDataContent = fs.readFileSync('./src/actualData.js', 'utf8');
const match = actualDataContent.match(/export const actualSectionB = \[\s*\{[\s\S]*?\}\s*\];/);
if (match) {
    const newExport = `export const actualSectionB = ${JSON.stringify(actualSectionB, null, 2)};`;
    const newContent = actualDataContent.replace(match[0], newExport);
    fs.writeFileSync('./src/actualData.js', newContent);
    console.log("actualData.js updated.");
} else {
    console.log("Could not find actualSectionB in actualData.js");
}
