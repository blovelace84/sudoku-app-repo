<script>
  import Board from "./components/Board.svelte";
  import { createEmptyBoard } from "./lib/board.js";

  // Start with an empty board
  let board = createEmptyBoard();
</script>

<main>
  <h1>Sudoku</h1>
  <Board bind:board />
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
</style>
