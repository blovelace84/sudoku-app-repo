<script>
  import Board from "./components/Board.svelte";
  import Controls from "./components/Controls.svelte";
  import { generateRandomPuzzle } from "./lib/generator";
  import { getBoardErrors } from "./lib/sudoku.js";

  let board = generateRandomPuzzle();
  let message = "";

  // Check if board is complete and correct
  function checkBoard() {
    const errors = getBoardErrors(board);
    if (errors.length > 0) {
      message = "There are mistakes!";
    } else if (board.flat().some((v) => v == null)) {
      message = "The board is not complete.";
    } else {
      message = "Congratulations! You solved it!";
    }
  }

  function resetBoard() {
    board = board.map((row) =>
      row.map((v) => (typeof v === "number" ? null : v))
    );
    message = "";
  }

  function solveBoard() {
    // Add some automatic solving logic here later
  }

  // Reset board to empty board
  function newGame() {
    board = generateRandomPuzzle(25); // 25 clues
    message = "";
  }
</script>

<main>
  <h1>Sudoku</h1>
  <Board bind:board />
  <Controls
    onNewGame={newGame}
    onCheck={checkBoard}
    onReset={resetBoard}
    onSolve={solveBoard}
  />
  {#if message}
    <p class="message">{message}</p>
  {/if}
</main>

<style>
  :global(body) {
    background: linear-gradient(135deg, #c9e4f7 0%, #e6f0fa 100%);
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: "poppins", sans-serif;
  }
  main {
    background: #ffffffcc;
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 2rem 3rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    font-family: sans-serif;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .message {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
</style>
