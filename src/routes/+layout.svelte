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
		<div class="top">
			<Header />
		</div>
		<div class="content">
			<div class="etc">test</div>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.layout {
		height: 100vh;
		/* border: 1px solid red; */
		/* display: flex; */
		/* flex-direction: row; */
		display: flex;
		flex-direction: row;
	}
	.side {
        width: calc(var(--spacing) * 64);
		/* position: fixed;
		top: 0;
		height: 100vh;
        width: calc(var(--spacing) * 64); */
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.top {
		flex: 0;
		/* position: fixed;
		top: 0;
		width: 100%;
        margin-left: calc(var(--spacing) * 64); */
		/* flex: 1; */
		/* display: flex; */
		/* flex-direction: column; */
	}
	.content {
		background-color: var(--color-border);
		border: 1px solid red;
		flex-grow: 1;
		height: 100%;
		/* overflow-x: hidden; */
		overflow: scroll;
	}
</style>