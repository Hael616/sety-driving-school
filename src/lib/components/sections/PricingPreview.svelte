<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { generateWhatsAppLink } from '$lib/utils/whatsapp';

	const waUrl =
		"https://wa.me/2347033233038?text=Hello,%20I'd%20like%20to%20book%20driving%20lessons.";

	const plans = [
		{
			name: '1 Week Refresher',
			price: '₦45,000',
			description:
				'1-week intensive refresher driving program in Lagos for learners with prior experience needing quick defensive driving and practical reinforcement.',
			features: [
				'Intensive theory + simulator (first session)',
				'Defensive driving training',
				'Learner’s permit included'
			],
			popular: false
		},
		{
			name: '3 Weeks Beginner',
			price: '₦120,000',
			description:
				'3-week beginner driving program in Lagos designed to build confidence through structured theory, simulator, and practical training.',
			features: [
				'Beginner driving curriculum',
				'Theory + simulator sessions',
				'Learner’s permit included'
			],
			popular: true
		}
	];
</script>

<section class="bg-slate-950 py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Simple, Upfront Pricing
			</h2>
			<p class="mt-4 text-lg text-slate-400">
				Choose a package that fits your learning pace. No hidden charges.
			</p>
		</div>

		<div class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
			{#each plans as plan}
				<Card
					variant={plan.popular ? 'elevated' : 'default'}
					padding="lg"
					class="relative flex flex-col {plan.popular ? 'ring-2 ring-green-500' : ''}"
				>
					{#if plan.popular}
						<div
							class="absolute top-0 right-0 -mt-4 mr-6 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase shadow-sm"
						>
							Most Popular
						</div>
					{/if}

					<div class="mb-6">
						<h3 class="text-2xl font-bold text-slate-100">{plan.name}</h3>
						<div class="mt-4 flex items-baseline text-5xl font-extrabold text-slate-100">
							{plan.price}
						</div>
						<p class="mt-4 text-slate-400">{plan.description}</p>
					</div>

					<ul class="mb-8 flex-1 space-y-4">
						{#each plan.features as feature}
							<li class="flex items-start">
								<svg
									class="h-6 w-6 shrink-0 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span class="ml-3 text-slate-300">{feature}</span>
							</li>
						{/each}
					</ul>

					<Button variant={plan.popular ? 'primary' : 'secondary'} size="lg" class="w-full">
						<a
							href={generateWhatsAppLink({ type: 'package', name: plan.name, price: plan.price })}
							target="_blank"
							rel="noopener noreferrer"
							class="flex w-full items-center justify-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
								/>
							</svg>
							Choose Plan
						</a>
					</Button>
				</Card>
			{/each}
		</div>
	</div>
</section>
