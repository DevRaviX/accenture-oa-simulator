
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
    const [hitWall, setHitWall] = useState(null);
    const [attempts, setAttempts] = useState(1);
    const [successfulLevels, setSuccessfulLevels] = useState(0);

    // Timer
    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete({ levelsCompleted: successfulLevels, totalLevels: LEVELS.length });
            return;
        }
        const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, onComplete, successfulLevels]);

    // Handle end of game
    useEffect(() => {
        if (currentLevelIdx >= LEVELS.length) {
            onComplete({ levelsCompleted: successfulLevels, totalLevels: LEVELS.length });
        }
    }, [currentLevelIdx, onComplete, successfulLevels]);

    // Initialize level state when level changes
    useEffect(() => {
        if (level) {
            setPlayerPos(level.start);
            setHasKey(false);
            setHitWall(null);
            setTimeLeft(4 * 60);
            setAttempts(1);
        }
    }, [currentLevelIdx, level]);

    const handleMove = useCallback((dr, dc) => {
        if (!level || hitWall) return;

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
            if ("vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setHitWall({ r: nr, c: nc, dr, dc });
            setAttempts(a => a + 1);
            setTimeout(() => {
                setHitWall(null);
                setPlayerPos(level.start);
                setHasKey(false);
            }, 1000);
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
            setSuccessfulLevels(prev => prev + 1);
            setCurrentLevelIdx(prev => prev + 1);
        }
    }, [playerPos, level, hitWall, hasKey]);

    const handleCellClick = (r, c) => {
        if (!level || hitWall) return;
        const dr = r - playerPos[0];
        const dc = c - playerPos[1];
        // Only allow movement to immediate adjacent cells (up, down, left, right)
        if (Math.abs(dr) + Math.abs(dc) === 1) {
            handleMove(dr, dc);
        }
    };

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
        <div className="min-h-[calc(100vh-140px)] w-full bg-[#f3f4f6] flex flex-row justify-center items-start py-4 px-4 gap-8 select-none font-sans">
            


            {/* Maze Card */}
            <div className="w-fit bg-white rounded-2xl shadow-sm border border-gray-200 p-4 pb-3 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-800">Memory Maze (Level {currentLevelIdx + 1}/{LEVELS.length})</h2>
                        <span className="text-sm font-medium bg-gray-100 text-gray-500 px-3 py-1 rounded-full">Grid: {level.size}x{level.size}</span>
                    </div>
                    <button
                        onClick={() => setCurrentLevelIdx(p => p + 1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 active:scale-95 transition font-semibold text-sm shadow-sm ml-8"
                    >
                        Skip <SkipForward size={16} />
                    </button>
                </div>

                <div className="flex justify-center">
                    {/* Grid */}
                    <div 
                        className={`border border-gray-300 bg-white shadow-inner ${hitWall ? 'bg-red-50 transition-colors duration-75' : ''}`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${level.size}, minmax(0, 1fr))`,
                        width: '480px',
                        height: '480px',
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
                        
                        // Check if this cell is currently the hit wall
                        const isHitWall = hitWall && hitWall.r === r && hitWall.c === c;
                        let hitWallStyle = 'bg-white';
                        if (isHitWall) {
                            if (hitWall.dr === 1) hitWallStyle += ' border-t-4 border-red-500 z-10'; // moving down, hit top of wall
                            else if (hitWall.dr === -1) hitWallStyle += ' border-b-4 border-red-500 z-10'; // moving up, hit bottom of wall
                            else if (hitWall.dc === 1) hitWallStyle += ' border-l-4 border-red-500 z-10'; // moving right, hit left of wall
                            else if (hitWall.dc === -1) hitWallStyle += ' border-r-4 border-red-500 z-10'; // moving left, hit right of wall
                        }
                        
                        // Highlight valid adjacent cells lightly on hover for mouse users
                        const drHover = r - playerPos[0];
                        const dcHover = c - playerPos[1];
                        const isAdjacent = Math.abs(drHover) + Math.abs(dcHover) === 1;

                        return (
                            <div 
                                key={i} 
                                onClick={() => handleCellClick(r, c)}
                                className={`flex items-center justify-center relative transition-colors ${hitWallStyle} ${isAdjacent && !hitWall ? 'hover:bg-gray-100 cursor-pointer' : ''}`}
                            >
                                {isKey && <Key size={24} className="text-amber-500" />}
                                {isDoor && <DoorOpen size={28} className={`${hasKey ? 'text-green-600' : 'text-gray-400'}`} />}
                                {isPlayer && (
                                    <div className="absolute z-10 w-[80%] h-[80%] bg-gray-800 rounded flex items-center justify-center shadow-lg">
                                        <User size={24} className="text-white" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-12">
                     <div className={`w-[64px] h-[64px] rounded-full border-[4px] flex items-center justify-center transition-colors ${timeLeft <= 30 ? 'border-red-500' : 'border-[#3a3a3a]'}`}>
                        <span className={`text-[18px] font-bold tabular-nums transition-colors ${timeLeft <= 30 ? 'text-red-500' : 'text-[#3a3a3a]'}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider uppercase">Attempts</div>
                        <div className="text-2xl font-black text-gray-800">{attempts}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
