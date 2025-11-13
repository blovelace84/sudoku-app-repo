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
  <div class="board-container">
    <Board bind:board />
  </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 1rem;
    background: linear-gradient(135deg, #1c08d0, #c9e4f7);
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .board-container {
    background: rgb(128, 101, 205);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 100%;
    max-width: 400px;
  }

  .message {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #333;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }
    .board-container {
      max-width: 90vw;
      padding: 0.5rem;
    }
  }
</style>
