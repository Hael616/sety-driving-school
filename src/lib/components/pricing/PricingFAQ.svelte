<script lang="ts">
	interface FAQ {
		question: string;
		answer: string;
	}

	interface Props {
		title?: string;
		faqs: FAQ[];
	}

	let { title = 'Frequently Asked Questions', faqs }: Props = $props();
</script>

<section class="py-20 sm:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
			{title}
		</h2>
		<div class="space-y-6">
			{#each faqs as faq}
				<div class="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
					<h3 class="text-lg font-semibold text-slate-100">{faq.question}</h3>
					<p class="mt-3 leading-relaxed text-slate-400">{faq.answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
