<script>
  import { fade } from "svelte/transition";

  export let value;
  export const row = undefined;
  export const col = undefined;
  export let highlighted = false;

  // ✅ Svelte 5: use custom event via props instead of dispatch
  export let onInput = (_value) => {};

  function handleInput(e) {
    const val = parseInt(e.target.value);
    if (val >= 1 && val <= 6) {
      onInput(val);
    } else if (e.target.value === "") {
      onInput(0);
    } else {
      e.target.value = "";
    }
  }
</script>

<div class="cell {highlighted ? 'highlight' : ''}" transition:fade>
  <input type="text" maxlength="1" bind:value on:input={handleInput} />
</div>

<style>
  .cell {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid groove;
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
