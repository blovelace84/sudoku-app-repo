<script>
  import { puzzle, editable, updateCell } from "../stores/sudokuStore";

  // Use Svelte's reactive store values
  $: grid = $puzzle;
  $: mask = $editable;

  function handleInput(i, j, e) {
    const input = e.currentTarget;
    // Keep only digits 1-9
    const raw = input.value.replace(/[^1-9]/g, "").slice(0, 1);
    input.value = raw;
    updateCell(i, j, raw ? parseInt(raw, 10) : null);
  }
</script>

<div class="sudoku-grid" aria-label="Sudoku grid">
  {#if grid && grid.length === 9}
    {#each grid as row, i}
      {#each row as cell, j}
        <input
          class="cell {mask?.[i]?.[j] ? 'editable' : 'fixed'} {j === 2 ||
          j === 5
            ? 'b-right'
            : ''} {i === 2 || i === 5 ? 'b-bottom' : ''}"
          type="text"
          inputmode="numeric"
          pattern="[1-9]*"
          maxlength="1"
          autocomplete="off"
          aria-label={`Row ${i + 1} Column ${j + 1}`}
          readonly={!mask?.[i]?.[j]}
          value={cell ?? ""}
          on:input={(e) => handleInput(i, j, e)}
        />
      {/each}
    {/each}
  {/if}
</div>

<style>
  .sudoku-grid {
    --cell-size: 2.5rem;
    display: grid;
    grid-template-columns: repeat(9, var(--cell-size));
    gap: 0;
    border: 2px solid #333;
    width: fit-content;
    background: #fff;
  }

  .cell {
    width: var(--cell-size);
    height: var(--cell-size);
    border: 1px solid #bbb;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1;
    color: #222;
    background-color: #f9f9f9;
  }

  .cell.fixed {
    background-color: #f1f1f1;
    font-weight: 700;
  }

  .cell.editable {
    background-color: #fff;
    font-weight: 400;
  }

  .cell:focus {
    outline: none;
    border-color: #6a0dad;
    box-shadow: inset 0 0 0 2px #6a0dad22;
    background-color: #faf5ff;
  }

  /* Thick borders between 3x3 subgrids */
  .cell.b-right {
    border-right: 2px solid #333;
  }
  .cell.b-bottom {
    border-bottom: 2px solid #333;
  }

  @media (max-width: 600px) {
    .sudoku-grid {
      --cell-size: 2rem;
    }
    .cell {
      font-size: 1.1rem;
    }
  }
</style>
