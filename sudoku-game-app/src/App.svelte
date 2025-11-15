<script>
  import SudokuGrid from "./components/SudokuGrid.svelte";
  import Controls from "./components/Controls.svelte";
  import { puzzle, editable, statusMessage } from "./stores/sudokuStore";
  import { initialPuzzles, generateEditableMask } from "./utils/puzzleLoader";
  import Message from "./components/Message.svelte";
  $: msg = $statusMessage;
  puzzle.set(initialPuzzles[0]);
  editable.set(generateEditableMask(initialPuzzles[0]));
</script>

<main class="app">
  <h1>Sudoku App</h1>
  <div class="grid-wrapper">
    <SudokuGrid />
    <Controls />
    <Message message={msg.message} type={msg.type} />
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
