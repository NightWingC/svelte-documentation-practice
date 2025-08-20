<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '../components/nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Nav />
<div class="p-2 max-w-6xl mx-auto">
	{@render children?.()}
</div>
