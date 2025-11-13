<script>
  export let onNewGame;
  export let onCheck;
  export let onReset;
  export let onSolve;
</script>

<div class="controls">
  <button on:click={onNewGame}>New Game</button>
  <button on:click={onCheck}>Check</button>
  <button on:click={onReset}>Reset</button>
  <button on:click={onSolve}>Solve</button>
</div>

<style>
  .controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  button {
    background: #000;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition:
      transform 0.2s,
      background 0.2s;
  }

  button:hover {
    background: #222;
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    button {
      flex: 1 1 45%;
      font-size: 0.9rem;
      padding: 0.5rem;
    }
  }
</style>
