<script>
  import { puzzle, editable, updateCell } from "../stores/sudokuStore";
  import { get } from "svelte/store";

  const grid = get(puzzle);
  const mask = get(editable);
</script>

<div class="grid">
  {#each grid as row, i}
    <div class="row">
      {#each row as cell, j}
        <input
          type="text"
          maxlength="1"
          class:editable={mask[i][j]}
          value={cell || ""}
          on:input={(e) => {
            const input = e.currentTarget;
            const val = parseInt(input.value);
            updateCell(i, j, val >= 1 && val <= 9 ? val : null);
          }}
        />
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    gap: 2px;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }
  input {
    width: 2rem;
    height: 2rem;
    text-align: center;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  .editable {
    background-color: #e0b3ff;
  }
</style>
