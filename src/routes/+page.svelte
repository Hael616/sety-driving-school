<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import HowItWorks from '$lib/components/sections/HowItWorks.svelte';
	import PricingPreview from '$lib/components/sections/PricingPreview.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL, BUSINESS } from '$lib/seo';

	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'DrivingSchool'],
		name: BUSINESS.name,
		description:
			'Professional driving lessons in Lekki, Ajah, Ikota, Agungi, Jakande, Igbo Efon and Osapa. Learn to drive safely on Lagos roads with expert, patient instructors.',
		url: SITE_URL,
		telephone: BUSINESS.phone,
		email: BUSINESS.email,
		image: `${SITE_URL}/og-image.jpg`,
		logo: `${SITE_URL}/favicon.svg`,
		priceRange: '₦₦',
		currenciesAccepted: 'NGN',
		paymentAccepted: 'Cash, Bank Transfer',
		address: {
			'@type': 'PostalAddress',
			streetAddress: BUSINESS.address.street,
			addressLocality: BUSINESS.address.city,
			addressRegion: BUSINESS.address.state,
			postalCode: BUSINESS.address.postalCode,
			addressCountry: 'NG'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: BUSINESS.geo.latitude,
			longitude: BUSINESS.geo.longitude
		},
		areaServed: BUSINESS.areasServed.map((area) => ({
			'@type': 'City',
			name: `${area}, Lagos`
		})),
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '07:00',
				closes: '18:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Saturday',
				opens: '08:00',
				closes: '16:00'
			}
		],
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: BUSINESS.phone,
			contactType: 'Customer Service',
			availableLanguage: ['English', 'Yoruba']
		},
		sameAs: [`https://wa.me/${BUSINESS.whatsapp}`],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Driving Lesson Packages',
			itemListElement: [
				{
					'@type': 'Offer',
					name: 'Beginner Driving Lessons',
					description:
						'A complete 3-week beginner driving course in Lagos covering practical driving, defensive techniques, theoretical lessons, simulator training, and learner’s permit.',
					price: '120000',
					priceCurrency: 'NGN'
				},
				{
					'@type': 'Offer',
					name: 'Advanced Beginner Driving Lessons',
					description:
						'A complete 3-week beginner driving course in Lagos covering practical driving, defensive techniques, theoretical lessons, simulator training, and learner’s permit.',
					price: '145000',
					priceCurrency: 'NGN'
				},
				{
					'@type': 'Offer',
					name: 'Refresher Driving Lessons',
					description:
						'A 1-week intensive driving program in Lagos designed mainly for refresher learners who want fast-track practical and theoretical driving lessons, including simulator training and learner’s permit.',
					price: '45000',
					priceCurrency: 'NGN'
				},
				{
					'@type': 'Offer',
					name: 'Advanced Refresher Driving Lessons',
					description:
						'A 2-week driving course in Lagos for beginners and refresher students focused on defensive driving, practical road training, theory classes, simulator sessions, and learner’s permit.',
					price: '90000',
					priceCurrency: 'NGN'
				}
			]
		}
	};
</script>

<SEO
	title="Sety Driving School | Professional Driving Lessons in Lekki"
	description="Looking for a driving school in Lekki, Ajah or Ikota? Sety Driving School offers expert driving lessons across Lagos with flexible schedules, modern cars & certified instructors. Book on WhatsApp today."
	canonical={SITE_URL}
	schema={localBusinessSchema}
/>

<Hero />
<Features />
<HowItWorks />
<PricingPreview />
<Testimonials />
<CTA />
