import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCcw, ArrowRightLeft, Check, Rocket, Globe } from 'lucide-react';

const GRID_SIZE = 15;
const START_ROW = 7; // Middle of 15x15
const END_ROW = 7;

// Directions: 0: Right, 90: Down, 180: Left, 270: Up
// Tile Types: 'empty', 'straight', 'corner'
// Let's stick to 'straight' for simplicity if the user didn't give strict shapes, 
// actually the prompt says: "Include straight paths (up, down, left, right) and 90-degree turn paths (corners routing left-to-up, right-to-down, etc.)"
// But clicking an empty cell places a "default path tile", clicking it rotates it 90 degrees.
// If we want both straight and corner, maybe we can toggle through them: Empty -> Straight -> Corner -> Empty?
// The prompt says "clicking an empty cell places a default path tile; clicking an existing path tile rotates it 90 degrees clockwise."
// Let's add a "Modifier" button action: "representing an action like reversing arrow directions or swapping tiles." 
// Let's use the Modifier button to change the *type* of the next placed tile (Straight vs Corner), or to toggle the selected tile's type.

const INITIAL_GRID = Array(GRID_SIZE).fill(null).map(() => 
  Array(GRID_SIZE).fill(null).map(() => ({ type: 'empty', rotation: 0 }))
);

export default function CognitiveGame({ onComplete }) {
  const [grid, setGrid] = useState(INITIAL_GRID);
  const [timeLeft, setTimeLeft] = useState(300); // 5:00
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost
  const [modifierActive, setModifierActive] = useState(false); // If active, places corners instead of straights

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0 && gameStatus === 'playing') {
      setGameStatus('lost');
      return;
    }
    const timer = setInterval(() => {
      if (gameStatus === 'playing') setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameStatus]);

  const handleCellClick = (r, c) => {
    if (gameStatus !== 'playing') return;

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      const cell = newGrid[r][c];

      if (cell.type === 'empty') {
        newGrid[r][c] = {
          type: modifierActive ? 'corner' : 'straight',
          rotation: 0
        };
      } else {
        // Rotate 90 degrees clockwise
        newGrid[r][c] = {
          ...cell,
          rotation: (cell.rotation + 90) % 360
        };
      }
      return newGrid;
    });
  };

  const handleReset = () => {
    setGrid(INITIAL_GRID);
    setGameStatus('playing');
    setTimeLeft(300);
  };

  const toggleModifier = () => {
    setModifierActive(!modifierActive);
  };

  const getNextPos = (r, c, enterDir, type, rotation) => {
    // enterDir is the direction we are moving *into* the cell (0: right, 90: down, 180: left, 270: up)
    if (type === 'straight') {
      // Straight path just continues in its rotation direction. 
      // But it only works if we enter from the opposite of its rotation (i.e. entering going Right (0) means it must be pointing Right (0))
      // Or we can just say "the straight path points in 'rotation' direction, we must enter from opposite".
      // Wait, a simpler logic: a tile just FORCES the movement in its 'rotation' direction, regardless of entry.
      // But path validity usually requires continuity.
      // Let's assume the path simply redirects the flow to its output direction.
      // Output direction is based on type and rotation.
      if (type === 'straight') {
         // Output is 'rotation'
         return { dir: rotation };
      }
    } else if (type === 'corner') {
      // Corner:
      // Rot 0: In from Left(0) -> Out Down(90) OR In from Top(90) -> Out Right(0)
      // Rot 90: In from Right(180) -> Out Down(90) OR In from Top(90) -> Out Left(180)
      // Actually, simple corner: Top-Left corner (points Right and Down).
      // Let's map corner outputs based on rotation.
      // Rot 0 (Top-Left): If entering going Left(180), output Down(90). If entering going Up(270), output Right(0).
      if (rotation === 0) { // Connects Right and Down
         if (enterDir === 180) return { dir: 90 };
         if (enterDir === 270) return { dir: 0 };
      } else if (rotation === 90) { // Connects Left and Down
         if (enterDir === 0) return { dir: 90 };
         if (enterDir === 270) return { dir: 180 };
      } else if (rotation === 180) { // Connects Left and Up
         if (enterDir === 0) return { dir: 270 };
         if (enterDir === 90) return { dir: 180 };
      } else if (rotation === 270) { // Connects Right and Up
         if (enterDir === 180) return { dir: 270 };
         if (enterDir === 90) return { dir: 0 };
      }
    }
    return null; // Invalid connection
  };

  const validatePath = () => {
    let currR = START_ROW;
    let currC = 0;
    let currentDir = 0; // moving right initially
    
    let steps = 0;
    while (steps < 400) { // Max steps to prevent infinite loop
      if (currR < 0 || currR >= GRID_SIZE || currC < 0 || currC >= GRID_SIZE) break;

      const cell = grid[currR][currC];
      if (cell.type === 'empty') break;

      let nextMove;
      if (cell.type === 'straight') {
         // for a straight, it just outputs in its rotation direction.
         // to be valid, we should be entering it flowing in the same direction.
         if (currentDir === cell.rotation) {
             nextMove = { dir: cell.rotation };
         } else {
             break; // Invalid entry
         }
      } else {
          nextMove = getNextPos(currR, currC, currentDir, cell.type, cell.rotation);
      }

      if (!nextMove) break;

      currentDir = nextMove.dir;
      if (currentDir === 0) currC++;
      else if (currentDir === 90) currR++;
      else if (currentDir === 180) currC--;
      else if (currentDir === 270) currR--;

      // Check win condition
      if (currC === GRID_SIZE && currR === END_ROW && currentDir === 0) {
        setGameStatus('won');
        if (onComplete) setTimeout(onComplete, 2000);
        return;
      }
      
      steps++;
    }
    
    // If it breaks out and didn't win
    alert("Path is broken or leads nowhere!");
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Helper to render tile SVG
  const renderTile = (cell) => {
    if (cell.type === 'empty') return null;
    
    if (cell.type === 'straight') {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white" style={{ transform: `rotate(${cell.rotation}deg)` }}>
          <path d="M 20,50 L 80,50 M 60,30 L 80,50 L 60,70" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    
    if (cell.type === 'corner') {
      // Connects center to Right and center to Down
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white" style={{ transform: `rotate(${cell.rotation}deg)` }}>
          <path d="M 50,100 L 50,50 L 100,50" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 min-h-[600px] w-full font-sans">
      
      {/* Game Board Container */}
      <div className="relative w-[600px] h-[600px] bg-white border border-gray-300 shadow-xl rounded-sm mb-8 flex items-center justify-center">
        
        {/* Grid Layer */}
        <div 
          className="absolute inset-0 bg-grid-pattern"
          style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}
        >
          {grid.map((row, r) => 
            row.map((cell, c) => (
              <div 
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                className={`flex items-center justify-center cursor-pointer border border-gray-200 transition-colors duration-200
                  ${cell.type !== 'empty' ? 'bg-gray-800' : 'hover:bg-gray-100'}
                `}
              >
                {renderTile(cell)}
              </div>
            ))
          )}
        </div>

        {/* Start Icon (Rocket) */}
        <div 
          className="absolute -left-14 w-12 h-12 bg-gray-900 rounded-md flex items-center justify-center shadow-md"
          style={{ top: `calc(${(START_ROW / GRID_SIZE) * 100}% + ${(100/GRID_SIZE)/2}%)`, transform: 'translateY(-50%)' }}
        >
          <Rocket size={24} className="text-white" />
        </div>

        {/* Destination Icon (Globe) */}
        <div 
          className="absolute -right-14 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-md"
          style={{ top: `calc(${(END_ROW / GRID_SIZE) * 100}% + ${(100/GRID_SIZE)/2}%)`, transform: 'translateY(-50%)' }}
        >
          <Globe size={24} className="text-white" />
        </div>
        
        {/* Overlay Messages */}
        {gameStatus === 'won' && (
          <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center z-10">
            <h2 className="text-4xl font-bold text-green-700 drop-shadow-md">Path Verified!</h2>
          </div>
        )}
        {gameStatus === 'lost' && (
          <div className="absolute inset-0 bg-red-500/20 backdrop-blur-sm flex items-center justify-center z-10">
            <h2 className="text-4xl font-bold text-red-700 drop-shadow-md">Game Over</h2>
          </div>
        )}
      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-10">
        <div className="w-24 h-24 rounded-full border-8 border-gray-800 flex items-center justify-center text-3xl font-bold text-gray-800 bg-white shadow-sm">
          {formatTime(timeLeft)}
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleReset}
            className="w-20 h-20 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300"
            title="Reset Grid"
          >
            <RefreshCcw size={32} />
          </button>
          <button 
            onClick={toggleModifier}
            className={`w-20 h-20 text-white rounded-xl flex items-center justify-center transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300
              ${modifierActive ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-800 hover:bg-gray-700'}
            `}
            title="Toggle Corner/Straight Mode"
          >
            <ArrowRightLeft size={32} />
          </button>
          <button 
            onClick={validatePath}
            disabled={gameStatus !== 'playing'}
            className="w-20 h-20 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-gray-300"
            title="Verify Path"
          >
            <Check size={36} />
          </button>
        </div>
      </div>
      
      <p className="mt-6 text-gray-500 text-sm">
        Click empty cells to place a path. Click again to rotate. Use the middle button to toggle between straight and corner paths.
      </p>
    </div>
  );
}
