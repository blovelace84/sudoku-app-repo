<script>
  export let value = null;
  export let row;
  export let col;
  export let errors = []; // pass errors array if needed

  function handleInput(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= 9) value = val;
    else value = null;
  }

  $: isError = errors.some(([r, c]) => r === row && c === col);
</script>

<input
  type="text"
  bind:value
  on:input={handleInput}
  maxlength="1"
  class="cell"
  class:error={isError}
/>

<style>
  .cell {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #999;
    box-sizing: border-box;
  }

  .error {
    background-color: #ffcccc;
  }
</style>
