<script lang="ts">
	import { SITE_URL, BUSINESS, DEFAULT_SEO, type PageSEO } from '$lib/seo';
	import { page } from '$app/state';

	interface Props extends Partial<PageSEO> {
		/** Optional JSON-LD structured data object(s). Pass an array for multiple schemas. */
		schema?: object | object[];
	}

	let {
		title = DEFAULT_SEO.title,
		description = DEFAULT_SEO.description,
		canonical,
		ogImage = DEFAULT_SEO.ogImage,
		ogType = 'website',
		noIndex = false,
		schema
	}: Props = $props();

	// Fallback to the current absolute page URL (ensuring no trailing slash for subpages, and matching www)
	const canonicalUrl = $derived(
		canonical ??
			(() => {
				let path: string = page.url.pathname;
				if (path === '/') return SITE_URL;
				if (path.endsWith('/')) {
					path = path.slice(0, -1);
				}
				return `${SITE_URL}${path}`;
			})()
	);

	const schemaJson = $derived(
		schema ? JSON.stringify(Array.isArray(schema) ? schema : [schema]) : null
	);
</script>

<svelte:head>
	<!-- Primary -->
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noIndex}
		<meta name="robots" content="noindex,nofollow" />
	{:else}
		<meta name="robots" content="index,follow" />
	{/if}
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={BUSINESS.name} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:alt" content={title} />
	{/if}
	<meta property="og:locale" content="en_NG" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
	{/if}

	<!-- Geo / Local -->
	<meta name="geo.region" content="NG-LA" />
	<meta name="geo.placename" content="Lekki, Lagos, Nigeria" />
	<meta name="geo.position" content="{BUSINESS.geo.latitude};{BUSINESS.geo.longitude}" />
	<meta name="ICBM" content="{BUSINESS.geo.latitude}, {BUSINESS.geo.longitude}" />

	<!-- Structured Data -->
	{#if schemaJson}
		{@html `<script type="application/ld+json">${schemaJson}</script>`}
	{/if}
</svelte:head>
