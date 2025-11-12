<script>
  import Board from "./components/Board.svelte";
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

  // Reset board to empty board
  function newGame() {
    board = generateRandomPuzzle(25); // 25 clues
    message = "";
  }
</script>

<main>
  <h1>Sudoku</h1>
  <Board bind:board />
  <div class="controls">
    <button on:click={checkBoard}>Check</button>
    <button on:click={newGame}>New Game</button>
  </div>
  {#if message}
    <p class="message">{message}</p>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    font-family: sans-serif;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .controls {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .message {
    margin-top: 1rem;
    font-weight: bold;
  }
</style>
