<script>
  export let value;
  export let row;
  export let col;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleInput(e) {
    const val = parseInt(e.target.value) || 0;
    dispatch("input", val);
  }
</script>

<input
  class="cell"
  type="number"
  min="1"
  max="9"
  value={value === 0 ? "" : value}
  on:input={handleInput}
/>

<style>
  .cell {
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 1.5em;
    border: 1px solid #ccc;
  }
</style>
