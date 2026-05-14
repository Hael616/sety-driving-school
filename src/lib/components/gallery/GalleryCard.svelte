<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	interface Props {
		src: string;
		alt: string;
		caption?: string;
		/** First image in the grid should be eager-loaded for LCP */
		eager?: boolean;
		width?: number;
		height?: number;
	}

	let { src, alt, caption, eager = false, width = 800, height = 533 }: Props = $props();
</script>

<Card padding="none" class="group relative w-full overflow-hidden" style="aspect-ratio: 3/2;">
	<img
		{src}
		{alt}
		{width}
		{height}
		loading={eager ? 'eager' : 'lazy'}
		decoding={eager ? 'sync' : 'async'}
		fetchpriority={eager ? 'high' : 'auto'}
		class="h-full w-full object-cover will-change-transform transition-transform duration-500 group-hover:scale-105"
	/>
	{#if caption}
		<div
			class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-12"
		>
			<p class="text-lg font-medium text-white">{caption}</p>
		</div>
	{/if}
</Card>
