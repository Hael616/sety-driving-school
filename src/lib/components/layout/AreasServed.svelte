<script lang="ts">
	import { BUSINESS } from '$lib/seo';
</script>

<!--
	Areas Served section — adds natural location keywords for local SEO
	without cluttering primary UI. Sits above the main footer.
-->
<section class="border-t border-slate-800 bg-slate-950 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-xl font-semibold text-slate-300 sm:text-2xl">
				Serving Lekki and All Surrounding Areas
			</h2>
			<p class="mx-auto mt-3 max-w-2xl text-slate-400">
				Sety Driving School provides professional driving lessons across Lekki and the greater Lagos
				area — wherever you are, we come to you.
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Areas we serve">
				{#each BUSINESS.areasServed as area}
					<span
						class="rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-300"
					>
						{area}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
