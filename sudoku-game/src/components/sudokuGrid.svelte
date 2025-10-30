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
    grid-template-columns: repeat(9, 50px);
    grid-template-rows: repeat(9, 50px);
    border: 3px solid black;
    background-color: white;
    width: 450px;
    height: 450px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .cell {
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 1.4rem;
    border: 1px solid #1278d7;
    outline: none;
    background-color: darkgreen;
    box-sizing: border-box;
    transition: background-color 0.2s;
  }

  .cell:focus {
    background-color: #1278d7;
  }

  /* ✅ Thick lines every 3x3 for visual clarity */
  .top-border {
    border-top: 3px solid black !important;
  }
  .left-border {
    border-left: 3px solid black !important;
  }
  .bottom-border {
    border-bottom: 3px solid black !important;
  }
  .right-border {
    border-right: 3px solid black !important;
  }

  /* ✅ Optional subtle hover effect */
  .cell:hover {
    background-color: #1278d7;
  }
</style>
