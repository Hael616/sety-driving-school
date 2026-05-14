<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<section class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
		{@render children()}
	</div>
</section>
