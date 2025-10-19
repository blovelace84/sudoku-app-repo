<script>
  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import { generateSudoku, isValid } from "./utils/sudoku.js";

  let board = generateSudoku();

  function handleCellChange(row, col, val) {
    board[row][col] = val;
  }

  function newGame() {
    board = generateSudoku();
  }

  function checkSolution() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        if (val !== 0 && !isValid(board, r, c, val)) {
          alert("Incorrect solution!");
          return;
        }
      }
    }
    alert("Looks good so far!");
  }
</script>

<main>
  <h1>🧩 Sudoku Game</h1>
  <SudokuGrid {board} onCellChange={handleCellChange} />
  <Controls onNewGame={newGame} onCheckSolution={checkSolution} />
</main>

<style>
  main {
    text-align: center;
    font-family: sans-serif;
  }
</style>
