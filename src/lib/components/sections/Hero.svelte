<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="hero-section relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
	<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
			Master Lagos Roads with <span class="text-green-500">Confidence</span>
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
			Navigate Lekki traffic and beyond like a pro. Learn with expert instructors in modern,
			air-conditioned cars, with schedules built around your busy Lagos life.
		</p>
		<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
			<Button variant="outline" size="lg">
				<a
					href="https://wa.me/2347033233038?text=Hello,%20I'd%20like%20to%20book%20driving%20lessons."
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2"
				>
					See Our Plans
				</a>
			</Button>
			<Button variant="outline" size="lg">
				<a href="/gallery" class="flex items-center gap-2"> View Our Fleet </a>
			</Button>
		</div>
	</div>
</section>

<style>
	/* Defined in CSS — avoids Tailwind parsing a long arbitrary-value radial-gradient
	   at build time, and is more cache-friendly for the browser */
	.hero-section {
		background: radial-gradient(ellipse at top, #0f172a 0%, #020617 60%);
	}
</style>
