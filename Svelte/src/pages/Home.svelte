<script>
	import Input from '../components/input.svelte'
	import Button from '../components/button.svelte'
	let name =""
	let getName = (event) => {
		name = event.detail.text
	}
	let search = (event) => {
		alert(name)
	}
</script>

<main>
    <h1>Home</h1>
	<Input on:nameChange={getName} label="Nome"/>
	<Button on:clicked={search} label="BUSCAR"></Button>
	<h1>nome digitado : {name}</h1>
</main>

<style>

</style>