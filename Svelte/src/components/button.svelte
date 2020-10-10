<script>
    import Button, {Label} from '@smui/button';
    import { createEventDispatcher } from 'svelte';
    export let label = "";
    const dispatch = createEventDispatcher();
    function click() {
        dispatch('clicked');
    }
</script>
<style></style>
<div>
    <Button on:click={click} variant="raised"><Label>{label}</Label></Button>
</div>