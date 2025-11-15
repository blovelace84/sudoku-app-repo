<script>
  import {
    resetPuzzle,
    validatePuzzle,
    solvePuzzle,
    clearEditableCells,
    loadNewPuzzle,
  } from "../utils/puzzleLogic.js";

  const handleReset = () => resetPuzzle();
  const handleCheck = () => validatePuzzle();
  const handleSolve = () => solvePuzzle();
  const handleClear = () => clearEditableCells();
  const handleNewPuzzle = () => loadNewPuzzle();
</script>

<div class="controls">
  <button on:click={handleReset}>Reset</button>
  <button on:click={handleCheck}>Check</button>
  <button on:click={handleSolve}>Solve</button>
  <button on:click={handleClear}>Clear Editable</button>
  <button on:click={handleNewPuzzle}>New Puzzle</button>
</div>

<style>
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }

  button {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border-radius: 6px;
    border: none;
    background-color: #6a0dad;
    color: white;
    cursor: pointer;
    transition: background 0.2s ease;
    min-width: 120px;
  }

  button:hover {
    background-color: #580e9b;
  }

  @media (max-width: 600px) {
    button {
      font-size: 0.9rem;
      padding: 0.5rem;
      min-width: 100px;
    }
  }
</style>
