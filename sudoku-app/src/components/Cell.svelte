<script>
  export let cell;
  export let row;
  export let col;

  let value = cell;

  function handleInput(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= 9) value = value;
    else value = null;
  }
</script>

<input
  type="text"
  bind:value
  on:input={handleInput}
  maxlength="1"
  class="cell"
  data-row={row}
  data-col={col}
/>

<style>
  .cell {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #ccc;
  }
</style>
