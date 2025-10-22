<script>
  import Cell from "./Cell.svelte";

  export let board;
  export let onCellChange;
  /** @type {{ row: number, col: number } | null} */
  export let highlightedCell = null;

  // Return a CSS class name for the 6x6 Sudoku sub-section the cell belongs to.
  // For a 6x6 board with 2x3 blocks, block rows are size 2 and block cols are size 3.
  function getSectionClass(row, col) {
    const blockRow = Math.floor(row / 2);
    const blockCol = Math.floor(col / 3);
    return `section-${blockRow}-${blockCol}`;
  }

  function handleInput(event, row, col) {
    const val = event.detail;
    onCellChange(row, col, val);
  }
</script>

<div class="sudoku-grid">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <input
        type="text"
        maxlength="1"
        class="cell
        {highlightedCell?.row === rowIndex && highlightedCell?.col === colIndex
          ? 'highlight'
          : ''}
        {getSectionClass(rowIndex, colIndex)}"
        value={cell === 0 ? "" : cell}
        on:input={(e) => handleInput(e, rowIndex, colIndex)}
      />
    {/each}
  {/each}
</div>

<style>
  .sudoku-grid {
    display: grid;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(6, 50px);
    gap: 2px;
    justify-content: center;
    margin: 20px auto;
  }
  .cell {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    border: 1px solid gray;
    background-color: green;
    outline: none;
  }
  .cell.highlight {
    background-color: #fffa9e;
    animation: pulse 1s ease-in-out;
  }

  /* ✅ Subgrid separation using thicker borders */
  .section-0-0 {
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
  .section-0-1 {
    border-bottom: 3px solid black;
  }
  .section-1-0 {
    border-right: 3px solid black;
  }

  /* optional hover styling */
  .cell:hover {
    background-color: #21c8db;
  }
</style>
