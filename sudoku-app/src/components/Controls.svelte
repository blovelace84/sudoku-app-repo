<script>
  export let onNewGame;
  export let onCheck;
</script>

<div>
  <button on:click={onNewGame}>New Game</button>
  <button on:click={onCheck}>Check</button>
</div>
