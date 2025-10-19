<script>
  export let onNewGame;
  export let onCheckSolution;
</script>

<div class="controls">
  <button on:click={onNewGame}>New Game</button>
  <button on:click={onCheckSolution}>Check Solution</button>
</div>

<style>
  .controls {
    margin-top: 10px;
  }

  button {
    margin-right: 10px;
  }
</style>
