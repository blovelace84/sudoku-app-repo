// src/utils/sudoku.js

// Static 6x6 puzzle to start with
export function generateSudoku() {
  return [
    [0, 0, 3, 0, 2, 0],
    [0, 5, 0, 0, 0, 6],
    [3, 0, 0, 2, 0, 0],
    [0, 6, 0, 0, 0, 3],
    [0, 0, 0, 0, 4, 0],
    [0, 1, 0, 0, 0, 0],
  ];
}

export function getSolution() {
    return[
        [1, 4, 3, 6, 2, 5],
        [2, 5, 6, 4, 1, 3],
        [3, 2, 5, 2, 6, 4],
        [4, 6, 1, 5, 3, 2],
        [5, 3, 2, 1, 4, 6],
        [6, 1, 4, 3, 5, 1],
    ];
}
    
// Validate placing `value` at (row, col)
export function isValid(board, row, col, value) {
  if (!value || value < 1 || value > 6) return false;

  // Check row and column
  for (let i = 0; i < 6; i++) {
    if (board[row][i] === value && i !== col) return false;
    if (board[i][col] === value && i !== row) return false;
  }

  // Check 2x3 subgrid
  const boxRow = Math.floor(row / 2) * 2;
  const boxCol = Math.floor(col / 3) * 3;

  for (let r = boxRow; r < boxRow + 2; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if ((r !== row || c !== col) && board[r][c] === value) return false;
    }
  }

  return true;
}
