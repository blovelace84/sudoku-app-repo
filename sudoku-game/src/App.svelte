<script>
  // @ts-nocheck

  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import Hint from "./components/Hint.svelte";
  import { generateSudoku, isValid, getSolution } from "./utils/sudoku.js";
  import { unmount } from "svelte";

  let difficulty = "medium";
  let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  let solution = getSolution();
  let highlightedCell = null;

  let message = ""; // ✅ message text
  let messageType = ""; // ✅ 'success' or 'error'

  function handleCellChange(row, col, val) {
    board[row][col] = val;
  }

  function newGame() {
    board = generateBoard();
    solution = getSolution();
    highlightedCell = null;
    message = "";
  }

  function generateBoard() {
    const newBoard = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => 0)
    );

    //randomly fill some cells to create some numbers between 1 and 9
    for (let i = 0; i < 20; i++) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      const num = Math.floor(Math.random() * 9) + 1;
      newBoard[row][col] = num;
    }
    return newBoard;
  }

  function checkSolution() {
    let correct = true;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        if (val === 0 || !isValid(board, r, c, val)) {
          correct = false;
        }
      }
    }

    if (correct) {
      message = "🎉 Congratulations! Your solution is correct!";
      messageType = "success";
    } else {
      message = "❌ Oops! Something is incorrect — keep trying!";
      messageType = "error";
    }

    // Optional: clear message after a few seconds
    setTimeout(() => (message = ""), 3000);
  }

  function giveHint() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === 0) {
          board[r][c] = solution[r][c];
          highlightedCell = { row: r, col: c };
          setTimeout(() => (highlightedCell = null), 1500);
          return;
        }
      }
    }
    message = "🎉 No more empty cells!";
    messageType = "success";
  }
</script>

<main>
  <h1>🧩 9X9 Sudoku</h1>

  <SudokuGrid {board} onCellChange={handleCellChange} />

  <button on:click={newGame}>New Game</button>

  <Controls onNewGame={newGame} onCheckSolution={checkSolution} />
  <Hint onHint={giveHint} />

  {#if message}
    <div class="message {messageType}">
      {message}
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    font-family: sans-serif;
  }

  .message {
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 10px;
    display: inline-block;
    animation: fadeIn 0.5s ease;
  }

  .message.success {
    background-color: #c8f7c5;
    color: #1b5e20;
    border: 2px solid #81c784;
  }

  .message.error {
    background-color: #ffcdd2;
    color: #b71c1c;
    border: 2px solid #e57373;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
