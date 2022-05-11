import { writable } from "svelte/store";

function defineStore() {
  const _firstName = writable([]);
  const _lastName = writable([]);

  /**
   *
   * @param {import('svelte/store').Writable} store
   * @returns
   */
  const action = (store) => ({
    subscribe: store.subscribe,
    set: (val) => store.set(val.filter((i) => i !== "")),
    clear: () => store.set([]),
  });

  return {
    firstName: action(_firstName),
    lastName: action(_lastName),
  };
}

export const store = defineStore();
