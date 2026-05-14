<script lang="ts">
	import GalleryHeader from '$lib/components/gallery/GalleryHeader.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import GalleryCard from '$lib/components/gallery/GalleryCard.svelte';
	import GalleryCTA from '$lib/components/gallery/GalleryCTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL } from '$lib/seo';

	// Unsplash: append &fm=webp for WebP + size variants for srcset
	const BASE = 'https://images.unsplash.com';

	const images = [
		{
			// LCP candidate — 600w for mobile, 800w for desktop
			src: `${BASE}/photo-1449965408869-eaa3f722e40d?w=800&fm=webp&q=75&auto=format&fit=crop`,
			alt: 'Student learning to drive in Lekki Lagos with instructor',
			caption: 'First Day Behind the Wheel',
			eager: true
		},
		{
			src: `${BASE}/photo-1469285994282-454ceb49e63c?w=800&fm=webp&q=70&auto=format&fit=crop`,
			alt: 'Hands on steering wheel during driving lesson in Lagos',
			caption: 'Mastering Lagos Traffic'
		},
		{
			src: `${BASE}/photo-1549317661-bd32c8ce0be2?w=800&fm=webp&q=70&auto=format&fit=crop`,
			alt: 'Car driving on Lagos expressway during lesson',
			caption: 'Expressway Driving Practice'
		},
		{
			src: `${BASE}/photo-1600320254374-ce2d293c324e?w=800&fm=webp&q=70&auto=format&fit=crop`,
			alt: 'Student celebrating after passing Nigerian driving test',
			caption: "Driver's License Secured!"
		},
		{
			src: `${BASE}/photo-1580273916550-e323be2ae537?w=800&fm=webp&q=70&auto=format&fit=crop`,
			alt: 'Modern air-conditioned driving school car in Lekki',
			caption: 'Our Air-Conditioned Fleet'
		},
		{
			src: `${BASE}/photo-1502877338535-766e1452684a?w=800&fm=webp&q=70&auto=format&fit=crop`,
			alt: 'Driving instructor giving feedback to student in Lagos',
			caption: 'Patient, Expert Guidance'
		}
	];
</script>

<SEO
	title="Gallery – Sety Driving School in Lekki, Lagos"
	description="See our students, instructors and modern driving fleet in action across Lekki, Ajah and Lagos. Real lessons, real results. Book your driving lesson today."
	canonical="{SITE_URL}/gallery"
/>

<div class="bg-slate-950">
	<GalleryHeader
		title="Our Driving Community"
		description="See our students in action across Lekki, Ajah and Lagos — and celebrate the success of confident new drivers."
	/>

	<GalleryGrid>
		{#each images as img, i}
			<GalleryCard
				src={img.src}
				alt={img.alt}
				caption={img.caption}
				eager={i === 0}
				width={800}
				height={533}
			/>
		{/each}
	</GalleryGrid>

	<GalleryCTA
		title="Ready to Join Our Community?"
		description="Hundreds of drivers across Lekki, Ajah and Ikota have learned with us. Send us a WhatsApp message to secure your spot today."
		whatsappNumber="2347033233038"
		ctaText="Chat on WhatsApp"
	/>
</div>
