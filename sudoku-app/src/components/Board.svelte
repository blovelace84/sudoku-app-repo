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

{#each board as row, rowIndex}
  <div class="row">
    {#each row as cell, colIndex}
      <!-- if you want predefined numbers non-editable -->
      <input
        class="cell"
        type="text"
        maxlength="1"
        bind:value={board[rowIndex][colIndex]}
        on:input={(e) => onInput(e, rowIndex, colIndex)}
      />
    {/each}
  </div>
{/each}

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 3px solid black;
  }

  .cell {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #000;
    outline: none;
  }

  .cell:disabled {
    background-color: #f2f2f2;
    color: black;
    font-weight: bold;
  }
</style>
