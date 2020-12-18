import { writable } from 'svelte/store'


export function createSearchResult() {
  const { subscribe, set } = writable([])

  function setValue(data) {
    set(data)
  }

  return { subscribe, setValue }
}