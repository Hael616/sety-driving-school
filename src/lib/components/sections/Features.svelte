<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	const features = [
		{
			title: 'Lagos-Savvy Instructors',
			description:
				'Learn from patient, experienced professionals who understand the unique dynamics of driving in Lagos.',
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			title: 'Flexible for Lagos Life',
			description:
				'Classes available 6 days a week, including Saturdays, so you can learn without disrupting your busy schedule.',
			icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			title: 'Clear, Upfront Pricing',
			description:
				'No hidden charges or surprises. Just straightforward packages that deliver real value.',
			icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			title: 'Modern, Safe Vehicles',
			description:
				'Practice in crisp, air-conditioned, dual-controlled cars that make learning comfortable and safe.',
			icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
		}
	];
</script>

<section class="bg-slate-900 py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Drive With Us?</h2>
			<p class="mt-4 text-lg text-slate-400">
				We equip you with the skills and confidence to handle Nigerian roads safely and smoothly.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<Card variant="default" padding="lg" class="flex h-full flex-col items-center text-center">
					<div
						class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-green-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={feature.icon} />
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold text-slate-100">{feature.title}</h3>
					<p class="text-slate-400">{feature.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>
