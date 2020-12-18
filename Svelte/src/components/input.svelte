<script>
  import Textfield from "@smui/textfield";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let value = "";
  export let label = "";
  function getName() {
        dispatch('nameChange', {
            text: value
        });
    }

  function validate() {

  }
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }
  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .columns :global(.mdc-text-field) {
    width: 218px;
  }
</style>

<div class="columns margins">
    <Textfield
      required="true"
      bind:value={value}
      label={label}
      on:change={getName}
    />
</div>
