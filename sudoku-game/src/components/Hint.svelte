<script>
  export let onHint;
</script>

<div class="hint-containter">
  <button on:click={onHint}>💡Need a Hint?</button>
</div>

<style>
  .hint-containter {
    margin-top: 10px;
  }

  button {
    background-color: green;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: teal;
  }
</style>
