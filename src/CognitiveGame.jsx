import React, { useState, useEffect, useCallback, memo } from "react";
import { RefreshCw, ArrowRightLeft, Check, Globe, SkipForward } from "lucide-react";
import { formatTime } from "./utils.js";

const GRID_SIZE = 8;
const TOTAL_LEVELS = 3;
const TILE_BG = "#6b6e75";
const ARROW_COLOR = "#ffffff";

/* ── Direction helpers ─────────────────────────────────── */
// 0=right, 90=down, 180=left, 270=up
const DR = { 0: 0, 90: 1, 180: 0, 270: -1 };
const DC = { 0: 1, 90: 0, 180: -1, 270: 0 };

function getOutput(tile, dir) {
  if (tile.type === "empty") return null;
  const { type, rotation, reversed } = tile;

  if (type === "straight") {
    // The base SVG draws →→→ (dir=0) for !reversed, ←←← (dir=180) for reversed.
    // CSS rotation rotates the visual arrows, so the accepted direction rotates too.
    const acceptDir = reversed
      ? (180 + rotation) % 360
      : (0 + rotation) % 360;
    if (dir === acceptDir) return acceptDir;
  }

  if (type === "corner") {
    const combos = {
      0:   { fwd: [90, 0],   rev: [180, 270] },
      90:  { fwd: [180, 90],  rev: [270, 0]   },
      180: { fwd: [270, 180], rev: [0, 90]    },
      270: { fwd: [0, 270],   rev: [90, 180]  },
    };
    const c = combos[rotation];
    if (!reversed && dir === c.fwd[0]) return c.fwd[1];
    if (reversed && dir === c.rev[0]) return c.rev[1];
  }

  if (type === "cross") {
    // Base SVG: !reversed accepts dir=0 (→) and dir=90 (↓)
    //           reversed accepts dir=180 (←) and dir=270 (↑)
    // CSS rotation rotates these accepted directions.
    if (!reversed) {
      const d1 = (0 + rotation) % 360;
      const d2 = (90 + rotation) % 360;
      if (dir === d1) return d1;
      if (dir === d2) return d2;
    } else {
      const d1 = (180 + rotation) % 360;
      const d2 = (270 + rotation) % 360;
      if (dir === d1) return d1;
      if (dir === d2) return d2;
    }
  }

  return null;
}

/* ── DFS path generator ──────────────────────────────── */
function generatePathDFS(startR, endR) {
  const visited = Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(false));
  const path = [];

  function dfs(r, c) {
    path.push({ r, c });
    visited[r][c] = true;
    if (r === endR && c === GRID_SIZE - 1) return true;

    const dirs = [
      { dr: -1, dc: 0 },
      { dr: 1, dc: 0 },
      { dr: 0, dc: -1 },
      { dr: 0, dc: 1 },
    ];
    dirs.sort(() => Math.random() - 0.5);

    for (const { dr, dc } of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < GRID_SIZE &&
        nc >= 0 &&
        nc < GRID_SIZE &&
        !visited[nr][nc]
      ) {
        if (dfs(nr, nc)) return true;
      }
    }
    path.pop();
    return false;
  }
  dfs(startR, 0);
  return path;
}

/* ── Level generator ─────────────────────────────────── */
function classifyTile(inDir, outDir) {
  let type,
    rotation = 0,
    reversed = false;
  if (inDir === outDir) {
    type = "straight";
    if (inDir === 0) { rotation = 0; reversed = false; }
    else if (inDir === 180) { rotation = 0; reversed = true; }
    else if (inDir === 90) { rotation = 90; reversed = false; }
    else { rotation = 90; reversed = true; }
  } else {
    type = "corner";
    const key = `${inDir}-${outDir}`;
    const map = {
      "90-0": [0, false],
      "180-270": [0, true],
      "180-90": [90, false],
      "270-0": [90, true],
      "270-180": [180, false],
      "0-90": [180, true],
      "0-270": [270, false],
      "90-180": [270, true],
    };
    if (map[key]) {
      [rotation, reversed] = map[key];
    }
  }
  return { type, rotation, reversed };
}

function generateLevels(count) {
  const levels = [];
  for (let l = 0; l < count; l++) {
    const grid = Array(GRID_SIZE)
      .fill(null)
      .map(() =>
        Array(GRID_SIZE)
          .fill(null)
          .map(() => ({ type: "empty" }))
      );

    const startRow = Math.floor(Math.random() * GRID_SIZE);
    const endRow = Math.floor(Math.random() * GRID_SIZE);
    const path = generatePathDFS(startRow, endRow);

    for (let i = 0; i < path.length; i++) {
      const curr = path[i];
      const prev = i > 0 ? path[i - 1] : { r: startRow, c: -1 };
      const next =
        i < path.length - 1 ? path[i + 1] : { r: endRow, c: GRID_SIZE };

      const inDir =
        curr.c > prev.c ? 0 : curr.c < prev.c ? 180 : curr.r > prev.r ? 90 : 270;
      const outDir =
        next.c > curr.c ? 0 : next.c < curr.c ? 180 : next.r > curr.r ? 90 : 270;

      const tile = classifyTile(inDir, outDir);
      grid[curr.r][curr.c] = { ...tile, isPath: true };
    }

    // Fill with decoy tiles (60-70% like the screenshots)
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (grid[r][c].type === "empty") {
          if (Math.random() < 0.55) {
            const rnd = Math.random();
            grid[r][c] = {
              type: rnd < 0.45 ? "straight" : rnd < 0.80 ? "corner" : "cross",
              rotation: [0, 90, 180, 270][Math.floor(Math.random() * 4)],
              reversed: Math.random() < 0.5,
            };
          }
        } else {
          // scramble solution tiles
          grid[r][c].rotation =
            [0, 90, 180, 270][Math.floor(Math.random() * 4)];
          grid[r][c].reversed = Math.random() < 0.5;
        }
      }
    }
    levels.push({ grid, startRow, endRow });
  }
  return levels;
}



/* ── Rocket SVG (spaceship silhouette like in the screenshots) ── */
const RocketIcon = ({ size = 36, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    {/* Spaceship body pointing right */}
    <polygon points="95,50 15,20 25,44 25,56 15,80" />
    {/* Top fin */}
    <polygon points="30,32 15,10 20,35" />
    {/* Bottom fin */}
    <polygon points="30,68 15,90 20,65" />
  </svg>
);

/* ── Tile rendering ─────────────────────────────────── */
const Tile = memo(({ cell }) => {
  if (cell.type === "empty") return null;
  const rot = { transform: `rotate(${cell.rotation}deg)` };
  const sw = 3.5;

  if (cell.type === "straight") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" style={rot}>
        {/* Solid filled bar spanning full width */}
        <rect x="0" y="32" width="100" height="36" fill={TILE_BG} />
        {cell.reversed ? (
          <>
            <path d="M 82,50 L 68,50 M 75,42 L 67,50 L 75,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 57,50 L 43,50 M 50,42 L 42,50 L 50,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 32,50 L 18,50 M 25,42 L 17,50 L 25,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <path d="M 18,50 L 32,50 M 25,42 L 33,50 L 25,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 43,50 L 57,50 M 50,42 L 58,50 L 50,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 68,50 L 82,50 M 75,42 L 83,50 L 75,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    );
  }

  if (cell.type === "corner") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" style={rot}>
        {/* L-shape: vertical arm from top + horizontal arm to right */}
        <rect x="32" y="0" width="36" height="68" fill={TILE_BG} />
        <rect x="32" y="32" width="68" height="36" fill={TILE_BG} />
        {cell.reversed ? (
          <>
            {/* Arrow up on vertical arm (↑) */}
            <path d="M 50,52 L 50,18 M 42,28 L 50,18 L 58,28" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* Arrow left on horizontal arm (←) */}
            <path d="M 82,50 L 55,50 M 65,42 L 55,50 L 65,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            {/* Arrow down on vertical arm (↓) */}
            <path d="M 50,18 L 50,52 M 42,42 L 50,52 L 58,42" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* Arrow right on horizontal arm (→) */}
            <path d="M 55,50 L 82,50 M 75,42 L 83,50 L 75,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    );
  }

  if (cell.type === "cross") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" style={rot}>
        {/* Plus shape */}
        <rect x="0" y="32" width="100" height="36" fill={TILE_BG} />
        <rect x="32" y="0" width="36" height="100" fill={TILE_BG} />
        {cell.reversed ? (
          <>
            {/* ←← on horizontal arm, ↑↑ on vertical arm */}
            <path d="M 82,50 L 58,50 M 68,42 L 58,50 L 68,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 45,50 L 18,50 M 28,42 L 18,50 L 28,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 50,82 L 50,58 M 42,68 L 50,58 L 58,68" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 50,45 L 50,18 M 42,28 L 50,18 L 58,28" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            {/* →→ on horizontal arm, ↓↓ on vertical arm */}
            <path d="M 18,50 L 42,50 M 32,42 L 42,50 L 32,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 55,50 L 82,50 M 72,42 L 82,50 L 72,58" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 50,18 L 50,42 M 42,32 L 50,42 L 58,32" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 50,55 L 50,82 M 42,72 L 50,82 L 58,72" stroke={ARROW_COLOR} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    );
  }
  return null;
});

/* ── Main component ──────────────────────────────────── */
export default function CognitiveGame({ onComplete }) {
  const [allLevels] = useState(() => generateLevels(TOTAL_LEVELS));
  const [currentLevel, setCurrentLevel] = useState(0);
  const [levelData, setLevelData] = useState(() => allLevels[0]);
  const [grid, setGrid] = useState(() => allLevels[0].grid);
  const [selectedCell, setSelectedCell] = useState(null);
  const [animToken, setAnimToken] = useState(null);
  const [modal, setModal] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [successfulLevels, setSuccessfulLevels] = useState(0);
  const [toast, setToast] = useState(null);
  const [timeLeft, setTimeLeft] = useState(4 * 60);

  /* countdown timer */
  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true);
      setAnimToken(null);
      setSelectedCell(null);
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  /* token animation step */
  useEffect(() => {
    if (!animToken) return;

    const step = () => {
      const { r, c, dir } = animToken;
      const nextR = r + DR[dir];
      const nextC = c + DC[dir];

      if (nextR === levelData.endRow && nextC === GRID_SIZE && dir === 0) {
        setAnimToken({ r: nextR, c: nextC, dir });
        setTimeout(() => setModal(true), 300);
        return;
      }

      if (nextR < 0 || nextR >= GRID_SIZE || nextC < 0 || nextC >= GRID_SIZE) {
        setToast("Token fell off the grid — path is broken!");
        setAnimToken(null);
        return;
      }

      const outDir = getOutput(grid[nextR][nextC], dir);
      if (outDir === null) {
        setToast("Invalid path or wrong arrow direction!");
        setAnimToken(null);
        return;
      }

      setAnimToken({ r: nextR, c: nextC, dir: outDir });
    };

    const t = setTimeout(step, 350);
    return () => clearTimeout(t);
  }, [animToken, grid, levelData.endRow]);

  /* auto-dismiss toast */
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(id);
  }, [toast]);

  /* actions */
  const rotateSelected = useCallback(() => {
    if (!selectedCell || animToken || timeLeft <= 0) return;
    const { r, c } = selectedCell;
    const cell = grid[r][c];
    if (cell.type === "empty") return;
    setGrid((prev) => {
      const g = prev.map((row) => [...row]);
      g[r][c] = { ...cell, rotation: (cell.rotation + 90) % 360 };
      return g;
    });
  }, [selectedCell, grid, animToken]);

  const reverseSelected = useCallback(() => {
    if (!selectedCell || animToken || timeLeft <= 0) return;
    const { r, c } = selectedCell;
    const cell = grid[r][c];
    if (cell.type === "empty") return;
    setGrid((prev) => {
      const g = prev.map((row) => [...row]);
      g[r][c] = { ...cell, reversed: !cell.reversed };
      return g;
    });
  }, [selectedCell, grid, animToken]);

  const validatePath = useCallback(() => {
    if (animToken || timeLeft <= 0) return;
    setAnimToken({ r: levelData.startRow, c: -1, dir: 0 });
  }, [animToken, levelData.startRow, timeLeft]);

  const nextLevel = (success = false) => {
    let newScore = successfulLevels;
    if (success === true) {
      newScore += 1;
      setSuccessfulLevels(newScore);
    }

    if (currentLevel < TOTAL_LEVELS - 1) {
      const idx = currentLevel + 1;
      setCurrentLevel(idx);
      setLevelData(allLevels[idx]);
      setGrid(allLevels[idx].grid);
      setAnimToken(null);
      setSelectedCell(null);
      setModal(false);
      setTimeUp(false);
      setToast(null);
      setTimeLeft(4 * 60);
    } else {
      if (onComplete) onComplete({ levelsCompleted: newScore, totalLevels: TOTAL_LEVELS });
    }
  };

  /* Keyboard shortcuts: R = rotate, F = flip/reverse, Enter = validate */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'r' || e.key === 'R') rotateSelected();
      if (e.key === 'f' || e.key === 'F') reverseSelected();
      if (e.key === 'Enter') validatePath();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotateSelected, reverseSelected, validatePath]);

  const cellPct = 100 / GRID_SIZE;

  return (
    <div className="flex flex-col bg-[#e8eaed] min-h-[600px] w-full font-sans">
      {/* ── Header bar ── */}
      <div className="w-full bg-[#3c3f44] py-3 px-6">
        <h1 className="text-lg font-bold italic text-gray-300 tracking-wide">
          Question {currentLevel + 1} of {TOTAL_LEVELS}
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-6">
        {/* ── Grid container ── */}
        <div
          className="relative bg-[#eceef1] shadow-lg"
          style={{ width: 520, height: 520, border: "8px solid #d5d8de" }}
        >
          {/* Grid cells */}
          <div
            className="absolute inset-0"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            }}
          >
            {grid.map((row, r) =>
              row.map((cell, c) => (
                <div
                  key={`${r}-${c}`}
                  onClick={() =>
                    !animToken &&
                    !timeUp &&
                    cell.type !== "empty" &&
                    setSelectedCell({ r, c })
                  }
                  className={`relative flex items-center justify-center transition-all duration-150 ${
                    selectedCell?.r === r && selectedCell?.c === c
                      ? "ring-[3px] ring-yellow-400 z-10 scale-[1.08] shadow-xl"
                      : ""
                  } ${
                    cell.type !== "empty"
                      ? "cursor-pointer"
                      : ""
                  }`}
                  style={{
                    borderRight: c < GRID_SIZE - 1 ? "1px solid #dcdfe4" : "none",
                    borderBottom: r < GRID_SIZE - 1 ? "1px solid #dcdfe4" : "none",
                  }}
                >
                  <Tile cell={cell} />
                </div>
              ))
            )}
          </div>

          {/* Start icon (Rocket / spaceship) */}
          <div
            className="absolute -left-16 flex items-center justify-center z-10"
            style={{
              top: `${levelData.startRow * cellPct + cellPct / 2}%`,
              transform: "translateY(-50%)",
            }}
          >
            <RocketIcon size={44} className="text-[#2d2f33]" />
          </div>

          {/* Destination icon (Globe) */}
          <div
            className="absolute -right-16 flex items-center justify-center z-10"
            style={{
              top: `${levelData.endRow * cellPct + cellPct / 2}%`,
              transform: "translateY(-50%)",
            }}
          >
            <Globe
              size={38}
              className="text-[#2d2f33]"
              fill="currentColor"
              strokeWidth={1}
            />
          </div>

          {/* Animated token */}
          {animToken && (
            <div
              className="absolute flex items-center justify-center z-20 transition-all duration-300 ease-linear"
              style={{
                width: `${cellPct}%`,
                height: `${cellPct}%`,
                top: `${animToken.r * cellPct}%`,
                left: `${animToken.c * cellPct}%`,
              }}
            >
              <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                <RocketIcon size={20} className="text-white" />
              </div>
            </div>
          )}

          {/* Win modal */}
          {modal && (
            <div className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white p-8 rounded-xl flex flex-col items-center shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Valid route – well done!
                </h2>
                <button
                  onClick={() => nextLevel(true)}
                  className="bg-[#4b5563] text-white px-8 py-3 rounded font-bold hover:bg-gray-800 shadow-md"
                >
                  CONTINUE
                </button>
              </div>
            </div>
          )}

          {/* Time's up modal */}
          {timeUp && !modal && (
            <div className="absolute inset-0 bg-red-900/70 z-30 flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white p-8 rounded-xl flex flex-col items-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Time's Up!
                </h2>
                <p className="text-gray-500 mb-6 text-center">You ran out of time for this question.</p>
                <button
                  onClick={() => nextLevel(false)}
                  className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 shadow-md"
                >
                  {currentLevel < TOTAL_LEVELS - 1 ? "NEXT QUESTION" : "FINISH"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Control panel ── */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {/* Circular timer */}
          <div className={`w-[76px] h-[76px] rounded-full border-[5px] flex items-center justify-center transition-colors ${timeLeft <= 30 ? 'border-red-500' : 'border-[#3a3a3a]'}`}>
            <span className={`text-[22px] font-bold tabular-nums transition-colors ${timeLeft <= 30 ? 'text-red-500' : 'text-[#3a3a3a]'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={rotateSelected}
              title="Rotate tile"
              className="w-[60px] h-[60px] bg-[#44474d] text-white rounded-lg flex items-center justify-center hover:bg-[#363840] active:scale-95 transition shadow-md"
            >
              <RefreshCw size={30} />
            </button>
            <button
              onClick={reverseSelected}
              title="Reverse arrows"
              className="w-[60px] h-[60px] bg-[#44474d] text-white rounded-lg flex items-center justify-center hover:bg-[#363840] active:scale-95 transition shadow-md"
            >
              <ArrowRightLeft size={30} />
            </button>
            <button
              onClick={validatePath}
              title="Validate route"
              className="w-[60px] h-[60px] bg-[#44474d] text-white rounded-lg flex items-center justify-center hover:bg-[#363840] active:scale-95 transition shadow-md"
            >
              <Check size={34} />
            </button>
          </div>

          {/* Skip question */}
          <button
            onClick={() => nextLevel(false)}
            title="Skip this question"
            className="flex items-center gap-2 px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 active:scale-95 transition font-semibold text-sm shadow-sm"
          >
            Skip <SkipForward size={18} />
          </button>
        </div>
      </div>

      {/* ── In-page toast notification ── */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[320px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span className="font-semibold text-sm">{toast}</span>
            <button onClick={() => setToast(null)} className="ml-auto text-white/70 hover:text-white text-lg font-bold">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
