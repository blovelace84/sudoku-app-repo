<script>
  import Cell from "./Cell.svelte";
  export let board;
  export let onCellChange;
</script>

<div class="grid">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <Cell
        value={cell}
        row={rowIndex}
        col={colIndex}
        on:input={(e) => onCellChange(rowIndex, colIndex, e.detail)}
      />
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 50px);
    margin: 20px auto;
    border: 2px solid green;
    background-color: beige;
    gap: 2px;
    justify-content: center;
  }
</style>
