<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

    console.log(data);
</script>

<h1>Settings</h1>

<div class="submenu">
	{#each data.sections as section}
		<a href="/settings/{section.slug}">{section.title}</a>
	{/each}
</div>

{@render children()}