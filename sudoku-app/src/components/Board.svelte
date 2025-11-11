<script>
  import Cell from "./Cell.svelte";
  export let board;
</script>

<div class="board">
  {#each board as row, i}
    <div class="row">
      {#each row as cell, j}
        <Cell {cell} row={i} col={j} />
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
    grid-template-columns: repeat(9, 40px);
  }
</style>
