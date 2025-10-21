<script>
  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import Hint from "./components/Hint.svelte";
  import { generateSudoku, getSolution, isValid } from "./utils/sudoku.js";

  let difficulty = "medium";
  let board = generateSudoku(difficulty);
  let solution = getSolution();
  let highlightedCell = null;

  function handleCellChange(row, col, val) {
    board[row][col] = val;
  }

  function newGame() {
    board = generateSudoku(difficulty);
    solution = getSolution();
    highlightedCell = null;
  }

  function checkSolution() {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 6; c++) {
        const val = board[r][c];
        if (val !== 0 && !isValid(board, r, c, val)) {
          alert("Incorrect solution!");
          return;
        }
      }
    }
    alert("Looks good so far!");
  }

  function giveHint() {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 6; c++) {
        if (board[r][c] === 0) {
          board[r][c] = solution[r][c];
          highlightedCell = { row: r, col: c };
          return;
        }
      }
    }
    alert("No empty cells left!");
  }
</script>

<main>
  <h1>🧩 Sudoku Game</h1>
  <SudokuGrid {board} onCellChange={handleCellChange} />
  <Controls onNewGame={newGame} onCheckSolution={checkSolution} />
  <Hint onHint={giveHint} />
</main>

<style>
  main {
    text-align: center;
    font-family: sans-serif;
  }
</style>
