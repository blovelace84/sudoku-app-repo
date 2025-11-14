<script>
  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import { puzzle, editable } from "./stores/sudokuStore";
  import { initialPuzzle, generateEditableMask } from "./utils/puzzleLoader";

  puzzle.set(initialPuzzle);
  editable.set(generateEditableMask(initialPuzzle));
</script>

<main>
  <h1>Sudoku App</h1>
  <SudokuGrid />
  <Controls />
</main>
