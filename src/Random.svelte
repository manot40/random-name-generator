<script>
  import { faker } from "@faker-js/faker";
  faker.setLocale("id_ID");

  import { store } from "./lib/store";
  const { firstName, lastName } = store;

  let isConcat = false;

  const generate = () => {
    if ($firstName[0] && $lastName[0]) {
      if (isConcat) {
        const concated = $firstName.concat($lastName);
        const rand = faker.helpers.arrayElements(concated, 2);
        return `${rand[0]} ${rand[1]}`;
      } else {
        const fN = faker.helpers.arrayElement($firstName);
        const lN = faker.helpers.arrayElement($lastName);
        return `${fN} ${lN}`;
      }
    } else {
      return faker.name.findName(undefined, undefined, "female");
    }
  };

  export let name = generate();

  const randomize = () => {
    name = generate();
  };
</script>

<div>
  <button on:click={randomize}> Random </button>
  <div style="font-size: .85rem;">
    <br />
    <input id="concat" bind:checked={isConcat} type="checkbox" />
    <label for="concat">Gabungkan daftar custom Firstname dan Lastname</label>
  </div>
</div>

<style>
  button {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
