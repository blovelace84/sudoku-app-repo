<script>
  import { fade } from "svelte/transition";

  export let value;
  export let row;
  export let col;
  export let highlighted = false;
  export let onInput = () => {};

  // Convert 0 to an empty string for display
  let displayValue = value === 0 ? "" : value;

  // Update displayed value whenever prop changes
  $: displayValue = value === 0 ? "" : value;

  function handleInput(e) {
    const val = parseInt(e.target.value);

    if (val >= 1 && val <= 6) {
      onInput(val);
    } else if (e.target.value === "") {
      onInput(0); // treat empty input as 0
    } else {
      e.target.value = "";
    }
  }
</script>

<div class="cell {highlighted ? 'highlight' : ''}" transition:fade>
  <input
    type="text"
    maxlength="1"
    bind:value={displayValue}
    on:input={handleInput}
  />
</div>

<style>
  .cell {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    background-color: green;
    transition: background-color 0.5s ease;
  }

  .cell.highlight {
    background-color: #fffa9e;
    animation: pulse 1s ease-in-out;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    background: transparent;
  }

  @keyframes pulse {
    0% {
      background-color: #fff48c;
    }
    50% {
      background-color: #ffe;
    }
    100% {
      background-color: #fff48c;
    }
  }
</style>
