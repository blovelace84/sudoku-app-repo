<script>
  import { puzzle } from "../stores/sudokuStore";
  import { initialPuzzle } from "../utils/puzzleLoader";

  function reset() {
    puzzle.set(initialPuzzle);
  }
</script>

<button on:click={reset}>Reset Puzzle</button>
<!-- Add more buttons for check, solve, etc. -->
