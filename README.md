# Accenture Mock Test Assessment Simulator

A fully responsive, interactive single-page application built with React and Vite that faithfully simulates the real Accenture Online Assessment (OA) environment. It includes both Cognitive and Technical sections with accurate evaluation and grading logic.

## 🚀 Features

- **Actual & Sample Papers**: Choose between practice mode or "Actual Paper" simulation mode.
- **Cognitive Games**:
  - **Path Finder**: A routing game testing logical pathfinding under time pressure.
  - **Memory Maze**: A memory and directional awareness game with invisible boundaries.
- **Technical & Coding Sections**:
  - **45-Question Technical Assessment**: Covers Common Applications, SQL & Pseudocode, Networking & Cloud Security, and Computer Science.
  - **Coding Assessment**: Integrated code editor interface simulation.
- **Strict Grading Logic**: 
  - Sections are strictly locked in "Actual" mode.
  - A 65% passing threshold is required for the Technical section. Failing to meet the threshold instantly ends the test with a "Not Qualified" banner.
- **Comprehensive Results Review**:
  - Review your answers post-submission.
  - Highlights correct answers in green and incorrect choices in red.
  - In-depth performance breakdown by domain (Strengths vs Lagging Areas).

## 🛠️ Technology Stack

- **React 18** (Functional Components & Hooks)
- **Vite** (Next-generation frontend tooling)
- **Tailwind CSS** (Utility-first styling framework)
- **Lucide React** (Beautiful vector icons)

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevRaviX/accenture-oa-simulator.git
   cd accenture-oa-simulator
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 🚀 Vercel Deployment

This project is fully ready to be deployed on Vercel. 
Since it's a standard Vite application, Vercel will automatically detect the build settings.

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically use the following settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy**!

---
*Built for educational and practice purposes.*
