<script>
  export let board;
</script>

<div class="board">
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <div class="cell">
        {#if cell !== 0}
          <span class="fixed">{cell}</span>
        {:else}
          <input
            type="text"
            maxlength="1"
            on:input={(e) => {
              const target = e.currentTarget;
              const val = parseInt(target.value) || 0;
              board[rowIndex][colIndex] = val;
            }}
          />
        {/if}
      </div>
    {/each}
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    width: 100%;
    max-width: 400px; /* Adjust if you want bigger */
    aspect-ratio: 1 / 1;
    border: 3px solid black;
    background: white;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .cell {
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1rem, 2vw, 1.5rem);
    position: relative;
  }

  .fixed {
    color: #000;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: inherit;
    border: none;
    outline: none;
    background: transparent;
  }

  /* Thicker subgrid borders */
  .cell:nth-child(3n) {
    border-right: 2px solid black;
  }

  .cell:nth-child(9n + 1) {
    border-left: 2px solid black;
  }

  /* Thicker horizontal lines */
  .cell:nth-child(n + 19):nth-child(-n + 27),
  .cell:nth-child(n + 46):nth-child(-n + 54) {
    border-bottom: 2px solid black;
  }

  /* Outer bottom border */
  .cell:nth-last-child(-n + 9) {
    border-bottom: 2px solid black;
  }

  @media (max-width: 600px) {
    .board {
      max-width: 90vw;
    }

    .cell {
      font-size: clamp(0.9rem, 4vw, 1.2rem);
    }
  }
</style>
