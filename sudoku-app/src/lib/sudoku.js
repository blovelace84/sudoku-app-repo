// Check if placing `num` at board[row][col] is valid
export function isValid(board, row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) if (board[row][x] === num) return false;

  // Check column
  for (let y = 0; y < 9; y++) if (board[y][col] === num) return false;

  // Check 3x3 box
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[startRow + i][startCol + j] === num) return false;

  return true;
}

// Check the whole board for errors
export function getBoardErrors(board) {
  const errors = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val != null) {
        board[i][j] = null; // temporarily remove
        if (!isValid(board, i, j, val)) errors.push([i, j]);
        board[i][j] = val; // restore
      }
    }
  }
  return errors; // array of [row, col] that are invalid
}
