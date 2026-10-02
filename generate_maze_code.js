const fs = require('fs');
const content = `
import React, { useState, useEffect, useCallback, memo } from 'react';
import { User, Key, DoorOpen, SkipForward } from 'lucide-react';
import { formatTime } from './utils.js';

const LEVELS = [
  {
    size: 3,
    start: [2, 0],
    key: [0, 1],
    door: [2, 2],
    walls: [[1, 0], [1, 2]]
  },
  {
    size: 4,
    start: [3, 0],
    key: [0, 3],
    door: [3, 3],
    walls: [[2, 0], [1, 2], [2, 2], [2, 3]]
  },
  {
    size: 5,
    start: [4, 0],
    key: [0, 4],
    door: [4, 4],
    walls: [[3, 0], [3, 1], [3, 2], [3, 3], [1, 1], [1, 2], [1, 3], [1, 4]]
  },
  {
    size: 6,
    start: [5, 0],
    key: [0, 5],
    door: [5, 5],
    walls: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]]
  }
];

export default function MemoryMaze({ onComplete }) {
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const level = LEVELS[currentLevelIdx];
    
    const [playerPos, setPlayerPos] = useState(level ? level.start : [0,0]);
    const [hasKey, setHasKey] = useState(false);
    const [timeLeft, setTimeLeft] = useState(4 * 60); // 4 minutes
    const [flashRed, setFlashRed] = useState(false);
    const [attempts, setAttempts] = useState(1);

    // Timer
    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete(currentLevelIdx * 25); // Some score based on progress
            return;
        }
        const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, onComplete, currentLevelIdx]);

    // Handle end of game
    useEffect(() => {
        if (currentLevelIdx >= LEVELS.length) {
            onComplete(100);
        }
    }, [currentLevelIdx, onComplete]);

    // Initialize level state when level changes
    useEffect(() => {
        if (level) {
            setPlayerPos(level.start);
            setHasKey(false);
        }
    }, [currentLevelIdx, level]);

    const handleMove = useCallback((dr, dc) => {
        if (!level || flashRed) return;

        const [r, c] = playerPos;
        const nr = r + dr;
        const nc = c + dc;

        // Check bounds
        if (nr < 0 || nr >= level.size || nc < 0 || nc >= level.size) {
            return; // Can't move out of bounds
        }

        // Check wall collision
        const isWall = level.walls.some(([wr, wc]) => wr === nr && wc === nc);
        if (isWall) {
            setFlashRed(true);
            setAttempts(a => a + 1);
            setTimeout(() => {
                setFlashRed(false);
                setPlayerPos(level.start);
            }, 300);
            return;
        }

        // Move player
        setPlayerPos([nr, nc]);

        // Check Key
        if (!hasKey && nr === level.key[0] && nc === level.key[1]) {
            setHasKey(true);
        }

        // Check Door
        if (hasKey && nr === level.door[0] && nc === level.door[1]) {
            // Level complete
            setCurrentLevelIdx(prev => prev + 1);
        }
    }, [playerPos, level, flashRed, hasKey]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['ArrowUp', 'w', 'W'].includes(e.key)) handleMove(-1, 0);
            if (['ArrowDown', 's', 'S'].includes(e.key)) handleMove(1, 0);
            if (['ArrowLeft', 'a', 'A'].includes(e.key)) handleMove(0, -1);
            if (['ArrowRight', 'd', 'D'].includes(e.key)) handleMove(0, 1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleMove]);

    if (!level || currentLevelIdx >= LEVELS.length) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center py-12 px-4 select-none font-sans">
            
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Memory Maze (Level {currentLevelIdx + 1}/{LEVELS.length})</h2>
                    <div className="text-sm font-medium text-gray-500">Grid: {level.size}x{level.size}</div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Move through the invisible maze. Collect the <strong>KEY</strong> then get to the <strong>DOOR</strong>. If you hit a wall, you restart! Use <strong>Arrow Keys</strong> or <strong>WASD</strong>.
                </p>

                {/* Grid */}
                <div 
                    className={\`mx-auto border border-gray-300 bg-white shadow-inner \${flashRed ? 'bg-red-50 transition-colors duration-75' : ''}\`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: \`repeat(\${level.size}, minmax(0, 1fr))\`,
                        width: \`\${level.size * 60}px\`,
                        height: \`\${level.size * 60}px\`,
                        gap: '1px',
                        backgroundColor: '#e5e7eb'
                    }}
                >
                    {Array.from({ length: level.size * level.size }).map((_, i) => {
                        const r = Math.floor(i / level.size);
                        const c = i % level.size;
                        
                        const isPlayer = playerPos[0] === r && playerPos[1] === c;
                        const isKey = !hasKey && level.key[0] === r && level.key[1] === c;
                        const isDoor = level.door[0] === r && level.door[1] === c;
                        // Walls are invisible!

                        return (
                            <div 
                                key={i} 
                                className={\`bg-white flex items-center justify-center relative \${flashRed && isPlayer ? 'bg-red-200' : ''}\`}
                            >
                                {isKey && <Key size={24} className="text-amber-500" />}
                                {isDoor && <DoorOpen size={28} className={\`\${hasKey ? 'text-green-600' : 'text-gray-400'}\`} />}
                                {isPlayer && (
                                    <div className="absolute z-10 w-[80%] h-[80%] bg-gray-800 rounded flex items-center justify-center shadow-lg">
                                        <User size={24} className="text-white" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 flex items-center justify-center gap-12">
                     <div className={\`w-[76px] h-[76px] rounded-full border-[5px] flex items-center justify-center transition-colors \${timeLeft <= 30 ? 'border-red-500' : 'border-[#3a3a3a]'}\`}>
                        <span className={\`text-[22px] font-bold tabular-nums transition-colors \${timeLeft <= 30 ? 'text-red-500' : 'text-[#3a3a3a]'}\`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-sm font-bold text-gray-500 mb-1 tracking-wider uppercase">Attempts</div>
                        <div className="text-3xl font-black text-gray-800">{attempts}</div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setCurrentLevelIdx(p => p + 1)}
                        className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 active:scale-95 transition font-semibold text-sm shadow-sm"
                    >
                        Skip Level <SkipForward size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
}
`;
fs.writeFileSync('./src/MemoryMaze.jsx', content);
