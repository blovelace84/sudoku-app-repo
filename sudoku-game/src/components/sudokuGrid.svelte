<script>
  import Cell from "./Cell.svelte";

  export let board;
  export let onCellChange;
  /** @type {{ row: number, col: number } | null} */
  export let highlightedCell = null;
</script>

<div class="grid">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <Cell
        value={cell}
        row={rowIndex}
        col={colIndex}
        highlighted={highlightedCell &&
          highlightedCell.row === rowIndex &&
          highlightedCell.col === colIndex}
        onInput={(val) => onCellChange(rowIndex, colIndex, val)}
      />
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(6, 50px);
    gap: 2px;
    justify-content: center;
    margin: 20px auto;
  }
</style>
