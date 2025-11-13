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
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  button {
    background-color: rgb(19, 203, 28);
    border: 2px solid #000;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background-color: #f1f1f1;
    transform: translateY(-2px);
  }

  button:active {
    background-color: #e1e1e1;
    transform: translateY(0);
  }

  /* Optional dark mode variant */
  @media (prefers-color-scheme: dark) {
    button {
      background-color: #1e1e1e;
      color: #fff;
      border-color: #fff;
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
    }

    button:hover {
      background-color: #333;
    }

    button:active {
      background-color: #222;
    }
  }
</style>
