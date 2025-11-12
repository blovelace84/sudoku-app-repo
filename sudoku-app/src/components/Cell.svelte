<script>
  export let value = null;
  export let row;
  export let col;
  export let errors = [];

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
    width: 60px;
    height: 60px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    border: 1px solid #bbb;
    background-color: #fff;
    color: #222;
    outline: none;
    box-sizing: border-box;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  /* Thicker vertical lines for 3x3 boxes */
  .cell:nth-child(3n) {
    border-right: 3px solid #000;
  }

  /* Optional: First column thicker border */
  .cell:first-child {
    border-left: 3px solid #000;
  }

  /* Highlight error cells */
  .error {
    background-color: #ffcccc;
  }

  /* Input focus (optional for clarity) */
  .cell:focus {
    background-color: #e8f0fe;
    color: #000;
    border-color: #4285f4;
  }

  /* Disable arrows for numeric input */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .error {
    background-color: #ffcccc;
  }
</style>
