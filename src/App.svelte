<script>
  import Random from "./Random.svelte";
  import List from "./List.svelte";

  import { store } from "./lib/store";
  const { firstName, lastName } = store;

  let name;
</script>

<main>
  <h1>{name}</h1>

  <Random bind:name />

  <div style="margin-top: 8rem;">
    <h2 style="margin-bottom: .25rem;">Custom List</h2>
    <p>
      Masukkan list nama untuk diacak<br />
      <small>(Pisahkan nama per baris)</small>
    </p>
    <div class="textbox-wrap">
      <div>
        <p>First Name</p>
        <List store={firstName} local="fn" />
      </div>
      &nbsp;&nbsp;
      <div>
        <p>Last Name</p>
        <List store={lastName} local="ln" />
      </div>
    </div>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .textbox-wrap {
    display: flex;
    justify-content: center;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 12rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
      font-size: 4rem;
    }

    p {
      max-width: none;
    }
  }
</style>
