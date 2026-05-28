<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import AreasServed from '$lib/components/layout/AreasServed.svelte';
	import PinnedSchedule from '$lib/components/layout/PinnedSchedule.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-slate-950 text-slate-300 antialiased selection:bg-green-500/30 selection:text-green-50"
>
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<AreasServed />
	<Footer />
	<PinnedSchedule />
</div>
