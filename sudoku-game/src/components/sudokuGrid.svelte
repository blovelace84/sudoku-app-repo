<script>
  export let board = [];
  export let onCellChange;

  function handleInput(event, row, col) {
    const val = parseInt(event.target.value) || 0;
    onCellChange(row, col, val);
  }

  function getBorderClass(row, col) {
    let classes = [];
    if (row % 3 === 0) classes.push("top-border");
    if (col % 3 === 0) classes.push("left-border");
    if (row === 8) classes.push("bottom-border");
    if (col === 8) classes.push("right-border");
    return classes.join(" ");
  }
</script>

<div class="sudoku-grid">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <input
        type="text"
        maxlength="1"
        class="cell {getBorderClass(rowIndex, colIndex)}"
        value={cell === 0 ? "" : cell}
        on:input={(e) => handleInput(e, rowIndex, colIndex)}
      />
    {/each}
  {/each}
</div>

<style>
  .sudoku-grid {
    display: grid;
    grid-template-columns: repeat(9, 45px);
    grid-template-rows: repeat(9, 45px);
    border: 3px solid black;
    background-color: white;
    width: max-content;
    margin: 20px auto;
  }

  .cell {
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 1.4rem;
    border: 1px solid #1278d7;
    outline: none;
    background-color: green;
  }

  .cell:focus {
    background-color: #4a1dbc;
  }

  /* Bold borders every 3x3 */
  .top-border {
    border-top: 3px solid black;
  }
  .left-border {
    border-left: 3px solid black;
  }
  .bottom-border {
    border-bottom: 3px solid black;
  }
  .right-border {
    border-right: 3px solid black;
  }
</style>
