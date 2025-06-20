<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	
	let { children } = $props();
</script>

<div class="layout">
	<div class="side">
		<Sidebar />
	</div>
	<div class="right">
		<!-- <Header /> -->
		{@render children()}
	</div>
</div>

<style>
	.layout {
		height: 100vh;
		display: flex;
		flex-direction: row;
	}
	.side {
		display: none;
	}
	@media (min-width: 48rem) {
		.side {
			/* width: calc(var(--spacing) * 64); */
			background-color: white;
			display: block;
			position: fixed;
			top: 0;
			height: 100vh;
			width: calc(var(--spacing) * 64);
		}
	}
	.right {
		background-color: var(--color-body);
		/* border: 1px solid red; */
		/* height: 2000px; */
		flex: 1;
		padding: 2rem;
		height: 2000px;
		/* display: flex;
		flex-direction: column; */
	}
	@media (min-width: 48rem) {
		.right {
			margin-left: calc(var(--spacing) * 64);
		}
	}
	/* .top { */
		/* flex: 0; */
		/* position: fixed;
		top: 0;
		width: 100%;
        margin-left: calc(var(--spacing) * 64); */
		/* flex: 1; */
		/* display: flex; */
		/* flex-direction: column; */
	/* } */
	/* .content { */
		/* background-color: var(--color-border); */
		/* border: 1px solid red; */
		/* flex-grow: 1; */
		/* padding: 2rem; */
		/* overflow-x: hidden; */
		/* overflow: scroll; */
	/* } */
</style>