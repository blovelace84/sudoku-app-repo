<script>
  import Cell from "./Cell.svelte";
  import { getBoardErrors } from "../lib/sudoku.js";

  export let board;
  $: errors = getBoardErrors(board);
</script>

<div class="board">
  {#each board as row, i}
    <div class="row">
      {#each row as cell, j}
        <Cell bind:value={board[i][j]} row={i} col={j} {errors} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    border: 3px solid #000;
    background-color: #000;
    width: fit-content;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  .row {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  /* Thicker horizontal lines for 3x3 boxes */
  .row:nth-child(3n) :global(.cell) {
    border-bottom: 3px solid #000;
  }

  /* Optional: Top border thickness for the first row */
  .row:first-child :global(.cell) {
    border-top: 3px solid #000;
  }
</style>
