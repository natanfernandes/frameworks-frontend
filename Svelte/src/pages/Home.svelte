<script>
	import Input from "../components/input.svelte";
	import Button from "../components/button.svelte";
	import { createSearchResult } from "../state.js";
	const list = createSearchResult();
	let name = "";
	let inputError = "";
	let getName = (event) => {
		name = event.detail.text;
	};
	
	let search = async (event) => {
		if (!isValid()) return;
		console.log(list)
		await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`)
			.then((r) => r.json())
			.then((data) => {
				console.log(data)
				list.setValue(data[0].res);
			});
		console.log(list)
	};
	function isValid() {
		if (!name) {
			inputError = "Este campo é obrigatório!";
			return false;
		}

		if (name.length < 2) {
			inputError = "Este campo tem tamanho minino de 2 caracteres!";
			return false;
		}
		inputError = "";
		return true;
	}
</script>

<style>
</style>

<main>
	<h1>Home</h1>
	<Input on:nameChange={getName} label="Nome*" />
	{#if inputError}
		<p style="color: red">{inputError}</p>
	{/if}
	<Button on:clicked={search} label="BUSCAR" />
	<h1>nome digitado : {name}</h1>
	{#each $list as element}
		<li><b> Periodo : </b>{element.periodo} | <b> Frequencia : </b>{element.frequencia}</li>
	{/each}
</main>
