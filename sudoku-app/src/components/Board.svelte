<script>
  export let board;
  export let initialBoard;
  export let handleInput;

  function onInput(event, row, col) {
    const target = event.target;
    const value = target.value;

    // Only allow digits 1–9
    if (value === "" || /^[1-9]$/.test(value)) {
      handleInput(row, col, value === "" ? 0 : Number(value));
    } else {
      // Clear invalid input
      event.target.value = "";
    }
  }
</script>

<div class="board">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <input
        class="cell {initialBoard[rowIndex][colIndex] !== 0 ? 'given' : ''}"
        type="text"
        maxlength="1"
        value={cell === 0 ? "" : String(cell)}
        on:input={(e) => onInput(e, rowIndex, colIndex)}
        disabled={initialBoard[rowIndex][colIndex] !== 0}
      />
    {/each}
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    width: min(90vw, 500px);
    margin: 0 auto;
    max-width: 450px;
    aspect-ratio: 1 / 1;
    border: 3px solid black;
    background: white;
  }

  .cell {
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid #000;
    outline: none;
    background: white;
    color: black;
  }

  .cell:disabled {
    cursor: default;
  }

  .cell.given {
    background: #d59be8;
    color: black;
  }

  /* Custom selectors for thickness */

  /* Custom selectors for thickness */
  .cell:nth-child(n + 1):nth-child(-n + 9),
  .cell:nth-child(n + 28):nth-child(-n + 36),
  .cell:nth-child(n + 55):nth-child(-n + 63) {
    border-top-width: 3px;
  }

  .cell:nth-child(n + 19):nth-child(-n + 27),
  .cell:nth-child(n + 46):nth-child(-n + 54),
  .cell:nth-child(n + 73):nth-child(-n + 81) {
    border-bottom-width: 3px;
  }

  @media (max-width: 480px) {
    .board {
      max-width: 90vw;
    }
  }
</style>
