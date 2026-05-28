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

	const pricingData = [
		{
			name: '1 Week Refresher',
			price: '45,000',
			description:
				'1-week intensive refresher driving program in Lagos for learners with prior experience needing quick defensive driving and practical reinforcement.',
			features: [
				'Intensive theory + simulator (first session)',
				'Defensive driving training',
				'Learner’s permit included'
			],
			ctaText: 'Choose 1 Week'
		},
		{
			name: '2 Weeks Plan',
			price: '90,000',
			description:
				'2-week structured driving program in Lagos for beginners and refreshers covering theory, simulator training, and practical driving.',
			features: [
				'Theory + simulator training',
				'Defensive driving lessons',
				'Learner’s permit included'
			],
			ctaText: 'Choose 2 Weeks'
		},
		{
			name: '3 Weeks Beginner',
			price: '120,000',
			description:
				'3-week beginner driving program in Lagos designed to build confidence through structured theory, simulator, and practical training.',
			features: [
				'Beginner driving curriculum',
				'Theory + simulator sessions',
				'Learner’s permit included'
			],
			ctaText: 'Choose 3 Weeks'
		},
		{
			name: '4 Weeks Mastery',
			price: '145,000',
			description:
				'4-week complete beginner program in Lagos for full driving mastery, road confidence, and defensive driving skills.',
			features: [
				'Full driving training program',
				'Theory + simulator sessions',
				'Learner’s permit included'
			],
			ctaText: 'Choose 4 Weeks'
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
	description="Affordable driving lesson packages in Lagos for beginners and experienced drivers. Serving Lekki, Ajah, Ikota, Agungi, Jakande & Igbo Efon. Book via WhatsApp."
	canonical={`${SITE_URL}/pricing`}
	schema={faqSchema}
/>

<div class="bg-slate-950">
	<PricingHeader
		title="Clear, Competitive Pricing"
		description="Choose the right package for your driving journey in Lagos. No hidden fees, just straightforward tuition."
	/>

	<section class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
		<div class="grid items-stretch gap-8 pt-4 md:grid-cols-3 lg:gap-12">
			{#each pricingData as price}
				<PricingCard
					name={price.name}
					price={price.price}
					description={price.description}
					features={price.features}
					ctaText={price.ctaText}
				/>
			{/each}
		</div>
	</section>

	<PricingFAQ {faqs} />

	<PricingCTA
		title="Ready to master Lagos roads?"
		description="Join hundreds of successful students who learned with us in Lekki and across Lagos. Start your driving journey today."
		ctaText="Book Your First Lesson"
	/>
</div>
