<script>
  import {
    resetPuzzle,
    validatePuzzle,
    solvePuzzle,
    clearEditableCells,
    loadNewPuzzle,
  } from "../utils/puzzleLogic.js";

  function handleReset() {
    resetPuzzle();
  }

  function handleCheck() {
    validatePuzzle();
  }

  function handleSolve() {
    solvePuzzle();
  }

  function handleClear() {
    clearEditableCells();
  }

  function handleNewPuzzle() {
    loadNewPuzzle(); // You can pass difficulty later if needed
  }
</script>

<div class="controls">
  <button on:click={handleReset}>🔄 Reset</button>
  <button on:click={handleCheck}>✅ Check</button>
  <button on:click={handleSolve}>🧠 Solve</button>
  <button on:click={handleClear}>🧹 Clear</button>
  <button on:click={handleNewPuzzle}>🎲 New Puzzle</button>
</div>

<style>
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
  }

  button {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    background-color: #6a0dad;
    color: white;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background-color: #8e2de2;
  }
</style>
