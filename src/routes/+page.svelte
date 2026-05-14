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
			'Professional driving lessons in Lekki, Ajah, Ikota, Agungi, Jakande, Igbo Efon and Osapa London. Learn to drive safely on Lagos roads with expert, patient instructors.',
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
					name: 'Beginner Driving Package',
					description: '10 hours of practical driving lessons for complete beginners in Lekki, Lagos',
					price: '100000',
					priceCurrency: 'NGN'
				},
				{
					'@type': 'Offer',
					name: 'Intermediate Driving Package',
					description: '20 hours of driving lessons with mock assessments — most popular choice',
					price: '130000',
					priceCurrency: 'NGN'
				},
				{
					'@type': 'Offer',
					name: 'Advanced Driving Package',
					description: '30 hours of comprehensive driving training including expressway practice',
					price: '200000',
					priceCurrency: 'NGN'
				}
			]
		}
	};
</script>

<SEO
	title="Sety Driving School – #1 Driving School in Lekki, Lagos"
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
