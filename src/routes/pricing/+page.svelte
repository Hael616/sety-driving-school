<script lang="ts">
	import PricingHeader from '$lib/components/pricing/PricingHeader.svelte';
	import PricingCard from '$lib/components/pricing/PricingCard.svelte';
	import PricingFAQ from '$lib/components/pricing/PricingFAQ.svelte';
	import PricingCTA from '$lib/components/pricing/PricingCTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL } from '$lib/seo';

	const faqs = [
		{
			question: "Do I need a learner's permit before starting driving lessons in Lagos?",
			answer:
				"Yes, but we can guide you through the full process of obtaining your learner's permit from the FRSC before your practical lessons begin. Many of our students in Lekki and Ajah get this sorted within days."
		},
		{
			question: 'How many lessons will I need to be ready for Lagos roads?',
			answer:
				'Most complete beginners feel confident and road-ready after 15–20 hours of professional training. Our instructors will give you honest feedback on your progress throughout every session.'
		},
		{
			question: 'Do you offer driving lessons in Ajah, Ikota and Agungi?',
			answer:
				'Yes! We serve all of Lekki and surrounding areas including Ajah, Ikota, Agungi, Jakande, Igbo Efon, Osapa London, Chevron and Victoria Island. We come to your convenient pick-up location.'
		},
		{
			question: 'Can I choose my lesson times?',
			answer:
				'Absolutely. We offer flexible scheduling, including early mornings and Saturdays, to accommodate the busy lifestyles of professionals and students in Lagos.'
		},
		{
			question: "Do you help with getting a Nigerian driver's license?",
			answer:
				"Yes! We provide full guidance on the FRSC process, from your learner's permit through to your final practical driving test and license collection."
		}
	];

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
</script>

<SEO
	title="Driving Lesson Prices in Lekki, Lagos – Sety Driving School"
	description="Transparent driving lesson packages starting from ₦100,000 in Lekki, Lagos. No hidden fees. Serving Lekki, Ajah, Ikota, Agungi, Jakande & Igbo Efon. Book via WhatsApp."
	canonical="{SITE_URL}/pricing"
	schema={faqSchema}
/>

<div class="bg-slate-950">
	<PricingHeader
		title="Clear, Competitive Pricing"
		description="Choose the right package for your driving journey in Lagos. No hidden fees, just straightforward tuition."
	/>

	<section class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
		<div class="grid items-stretch gap-8 pt-4 md:grid-cols-3 lg:gap-12">
			<PricingCard
				name="Beginner"
				price="100,000"
				description="Perfect for complete beginners taking their first steps on Lagos roads."
				features={[
					'10 hours of practical driving',
					'Air-conditioned, dual-controlled car',
					'Traffic rules & theory',
					'FRSC test guidance'
				]}
				ctaText="Choose Beginner"
			/>

			<PricingCard
				name="Intermediate"
				price="130,000"
				description="Our most popular choice for consistent, steady progress and confidence building."
				features={[
					'20 hours of practical driving',
					'Air-conditioned, dual-controlled car',
					'Mock driving assessments',
					'Priority lesson booking',
					'Mainland/Island route practice'
				]}
				highlighted={true}
				ctaText="Choose Intermediate"
			/>

			<PricingCard
				name="Advanced"
				price="200,000"
				description="Comprehensive training to master Lagos traffic with maximum confidence."
				features={[
					'30 hours of practical driving',
					'Air-conditioned, dual-controlled car',
					'Extensive mock assessments',
					'Expressway driving practice',
					'Defensive driving techniques',
					'Flexible premium scheduling'
				]}
				ctaText="Choose Advanced"
			/>
		</div>
	</section>

	<PricingFAQ {faqs} />

	<PricingCTA
		title="Ready to master Lagos roads?"
		description="Join hundreds of successful students who learned with us in Lekki and across Lagos. Start your driving journey today."
		ctaText="Book Your First Lesson"
	/>
</div>
