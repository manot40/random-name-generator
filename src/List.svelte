<script>
  import { onMount } from "svelte";

  export let store, local;

  let value = $store;

  onMount(() => {
    const localData = localStorage.getItem(local);
    if (!localData) {
      localStorage.setItem(local, "[]");
    } else {
      const parsed = JSON.parse(localData);
      value = parsed.join("\n");
      store.set(parsed);
    }
  });

  const handleChange = (e) => {
    const value = e.target.value.split("\n");
    localStorage.setItem(local, JSON.stringify(value));
    store.set(value);
  };
</script>

<textarea bind:value on:change={handleChange} />

<style>
  textarea {
    min-width: 100px;
    max-width: 350px;
    min-height: 100px;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: none repeat scroll 0 0 rgba(196, 85, 21, 0.07);
    border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Helvetica,
      Arial, sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;
  }

  textarea:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
</style>
