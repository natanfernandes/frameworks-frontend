<main>
	<Router url="{url}">
		<div class="top-app-bar-container">
		<TopAppBar variant="static" color='primary'>
			<Row>
			<Section>
				<Title>About my name</Title>
			</Section>
			</Row>
		</TopAppBar>
		</div>
		<nav>
		  <Link to="/">Home</Link>
		  <Link to="/common-names">Nomes mais comuns</Link>
		  <Link to="/ranking">Ranking</Link>
		</nav>
		<div>
		  <Route path="/"><Home /></Route>
		  <Route path="/common-names"><CommonNames /></Route>
		  <Route path="/ranking"><Ranking /></Route>
		</div>
	  </Router>
</main>

<script>
	import { Router, Link, Route } from "svelte-routing";
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
	import Home from './pages/Home.svelte'
	import CommonNames from './pages/CommonNames.svelte'
	import Ranking from './pages/Ranking.svelte'
	export let url = "";
</script>

<style>
	main {
		text-align: center;
		max-width: 240px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	nav {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
</style>