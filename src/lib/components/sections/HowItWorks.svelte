<script lang="ts">
	const steps = [
		{
			num: '01',
			title: 'Pick a Plan',
			description: 'Whether you are a complete beginner or just need a refresher, we have a package for you.'
		},
		{
			num: '02',
			title: 'Set Your Schedule',
			description: 'Book lesson times that fit seamlessly into your daily Lagos routine.'
		},
		{
			num: '03',
			title: 'Hit the Road',
			description: 'Get behind the wheel with our expert instructors and start driving with confidence.'
		}
	];
</script>

<section class="bg-slate-950 py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Started in 3 Steps</h2>
			<p class="mt-4 text-lg text-slate-400">
				Your journey to navigating Nigerian roads starts right here.
			</p>
		</div>

		<div class="relative grid gap-8 md:grid-cols-3">
			<div
				class="absolute top-12 right-[15%] left-[15%] hidden h-0.5 bg-slate-800 md:block"
				aria-hidden="true"
			></div>
			{#each steps as step}
				<div class="relative text-center">
					<div
						class="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white shadow-md ring-8 ring-slate-950"
					>
						{step.num}
					</div>
					<h3 class="mb-3 text-xl font-semibold text-slate-100">{step.title}</h3>
					<p class="mx-auto max-w-xs text-slate-400">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
