import { get } from 'svelte/store';
import { puzzle, editable, statusMessage } from '../stores/sudokuStore';
import { getRandomPuzzle, generateEditableMask } from './puzzleLoader';

// 🔄 Reset to original puzzle
export function resetPuzzle() {
  const resetGrid = getRandomPuzzle();
  const resetMask = generateEditableMask(resetGrid);

  puzzle.set(resetGrid);
  editable.set(resetMask);

  console.log("🔄 Puzzle has been reset to the original state.");
}

// ✅ Validate puzzle (basic uniqueness check)
export function validatePuzzle() {
  const grid = get(puzzle);
  const errors = [];

  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      const rVal = grid[i][j];
      const cVal = grid[j][i];
      const bVal = grid[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rVal) row.add(rVal);
      if (cVal) col.add(cVal);
      if (bVal) box.add(bVal);
    }

    if (row.size < 9 || col.size < 9 || box.size < 9) {
      errors.push(`Conflict in row ${i + 1}, column ${i + 1}, or box ${Math.floor(i / 3) * 3 + (i % 3) + 1}`);
    }
  }

  if(errors.length){
    statusMessage.set({ message: "❌ Conflicts found:\n" + errors.join("\n"), type: 'error'})
  }else{
    statusMessage.set({ message: "✅ Puzzle is valid!", type: 'success' });
  }
}

// 🧠 Solve puzzle using backtracking
export function solvePuzzle() {
  const grid = get(puzzle);
  const mask = get(editable);

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (grid[boxRow][boxCol] === num) return false;
    }
    return true;
  }

  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (mask[row][col] && !grid[row][col]) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              grid[row][col] = num;
              if (solve()) return true;
              grid[row][col] = null;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  if (solve()) {
    puzzle.set(grid);
    statusMessage.set({ message: "🧠 Puzzle solved!", type: 'success' });
  } else {
    statusMessage.set({ message: "❌ No solution found.", type: 'error' });
  }
}

// 🧹 Clear all editable cells
export function clearEditableCells() {
  const grid = get(puzzle);
  const mask = get(editable);
  const cleared = grid.map((row, i) =>
    row.map((cell, j) => (mask[i][j] ? null : cell))
  );
  puzzle.set(cleared);
}

// 🎲 Load new puzzle (placeholder for future expansion)
export function loadNewPuzzle() {
  const newPuzzle = getRandomPuzzle(); // Replace with random or difficulty-based puzzle later
  puzzle.set(newPuzzle);
  editable.set(generateEditableMask(newPuzzle));
}