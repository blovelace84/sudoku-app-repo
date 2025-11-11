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
    gap: 1px;
    background: black;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(9, 50px);
  }
</style>
