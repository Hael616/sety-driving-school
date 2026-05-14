<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	const testimonials = [
		{
			quote:
				'The idea of driving on the express used to terrify me, but my instructor was incredibly patient. Now I drive from Lekki to Ikeja with zero anxiety!',
			name: 'Chisom O.',
			role: 'First-time Driver'
		},
		{
			quote:
				'Their scheduling is perfect for the typical Lagos 9-to-5. I took my lessons early mornings and weekends without any stress. Highly recommended.',
			name: 'Tunde A.',
			role: 'Tech Professional'
		},
		{
			quote:
				'The cars are extremely neat, AC is always chilling, and the instructors are very professional. I got my license sorted out seamlessly.',
			name: 'Aisha F.',
			role: 'University Student'
		}
	];
</script>

<section class="bg-slate-900 py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Hear from Confident Drivers
			</h2>
			<p class="mt-4 text-lg text-slate-400">
				Real stories from people who mastered driving with us in Lagos.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each testimonials as review}
				<Card variant="default" padding="lg" class="flex flex-col">
					<div class="mb-6 flex gap-1 text-yellow-400">
						{#each Array(5) as _}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 fill-current"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
					<blockquote class="mb-6 flex-1 text-lg text-slate-300 italic">
						"{review.quote}"
					</blockquote>
					<div class="flex items-center gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-400 uppercase ring-1 ring-slate-700"
						>
							{review.name.charAt(0)}
						</div>
						<div>
							<p class="font-semibold text-slate-100">{review.name}</p>
							<p class="text-sm text-slate-400">{review.role}</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>
