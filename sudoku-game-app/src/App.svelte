<script>
  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import { puzzle, editable } from "./stores/sudokuStore";
  import { initialPuzzle, generateEditableMask } from "./utils/puzzleLoader";

  puzzle.set(initialPuzzle);
  editable.set(generateEditableMask(initialPuzzle));
</script>

<main class="app">
  <h1>Sudoku App</h1>
  <div class="grid-wrapper">
    <SudokuGrid />
    <Controls />
  </div>
</main>

<style>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: lightblue;
    min-height: 100vh;
  }

  .grid-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
