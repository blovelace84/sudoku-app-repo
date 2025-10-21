// src/utils/sudoku.js

// ✅ Generate a full 6x6 Sudoku solution
export function generateFullBoard() {
  const board = Array.from({ length: 6 }, () => Array(6).fill(0));
  solveSudoku(board);
  return board;
}

// ✅ Check if placing a number is valid
export function isValid(board, row, col, num) {
  for (let i = 0; i < 6; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  const boxRow = Math.floor(row / 2) * 2;
  const boxCol = Math.floor(col / 3) * 3;

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === num) {
        return false;
      }
    }
  }

  return true;
}

// ✅ Backtracking solver
function solveSudoku(board) {
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 6; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// ✅ Create a playable puzzle with some numbers removed
export function generateSudoku(difficulty = 'medium') {
  const solution = generateFullBoard();

  // Deep copy
  const puzzle = solution.map((row) => [...row]);

  // Adjust number of empty cells by difficulty
  let empties;
  if (difficulty === 'easy') empties = 10;
  else if (difficulty === 'hard') empties = 20;
  else empties = 15; // medium default

  while (empties > 0) {
    const row = Math.floor(Math.random() * 6);
    const col = Math.floor(Math.random() * 6);
    if (puzzle[row][col] !== 0) {
      puzzle[row][col] = 0;
      empties--;
    }
  }

  return puzzle;
}

// ✅ Expose solver for hint feature
export function getSolution() {
  const board = generateFullBoard();
  return board;
}
