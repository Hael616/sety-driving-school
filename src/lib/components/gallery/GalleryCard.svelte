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

	let { src, alt, caption, eager = false, width = 800, height = 600 }: Props = $props();

	// Generate responsive srcset strings for WebP images dynamically
	const getSrcset = (imageSrc: string) => {
		if (!imageSrc.endsWith('.webp')) return undefined;
		const base = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
		return `${base}-480w.webp 480w, ${base}-768w.webp 768w, ${base}-1024w.webp 1024w`;
	};

	const srcset = $derived(getSrcset(src));
</script>

<Card padding="none" class="group relative w-full overflow-hidden aspect-[4/3]">
	<img
		{src}
		{srcset}
		sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1024px"
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
