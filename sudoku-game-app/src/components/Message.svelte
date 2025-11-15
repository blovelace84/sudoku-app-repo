<script>
  export let message = "";
  export let type = "info"; // "info", "success", "error"
</script>

{#if message}
  <div class={`message ${type}`}>
    {message}
  </div>
{/if}

<style>
  .message {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-size: 1rem;
    text-align: center;
    max-width: 90%;
  }

  .info {
    background-color: #e0f0ff;
    color: #004080;
    border: 1px solid #99c2ff;
  }

  .success {
    background-color: #ffe6e6;
    color: #006600;
    border: 1px solid #ff9999;
  }
  .error {
    background-color: #ffe6e6;
    color: #990000;
    border: 1px solid #ff4d4d;
  }
</style>
