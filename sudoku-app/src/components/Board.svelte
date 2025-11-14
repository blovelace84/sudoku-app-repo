<script>
  export let board;
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
        class="cell"
        type="text"
        maxlength="1"
        bind:value={board[rowIndex][colIndex]}
        on:input={(e) => onInput(e, rowIndex, colIndex)}
      />
    {/each}
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    width: 100%;
    max-width: 450px;
    aspect-ratio: 1 / 1;
    border: 3px solid #333;
    background: white;
  }

  .cell {
    width: 100%;
    color: black;
    background: white;
    font-weight: 600;
    height: 100%;
    text-align: center;
    font-size: clamp(1rem, 4vw, 1.8rem);
    border: 1px solid #999;
    outline: none;
    background: #fafafa;
  }

  /* Thick borders for 3×3 blocks */
  .cell:nth-child(3n + 1) {
    border-left-width: 3px;
  }
  .cell:nth-child(3n) {
    border-right-width: 3px;
  }
  .cell:nth-child(n + 1):nth-child(-n + 9) {
    border-top-width: 3px;
  }
  .cell:nth-last-child(-n + 9) {
    border-bottom-width: 3px;
  }

  /* Darker background for fixed cells if you want */
  .fixed {
    background: #ddd;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    .board {
      max-width: 90vw;
    }
  }
</style>
