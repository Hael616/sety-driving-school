export const SITE_URL = 'https://www.setydrivingschool.com.ng';

export const BUSINESS = {
	name: 'Sety Driving School',
	shortName: 'Sety Driving',
	tagline: 'Driving Lessons in Lekki, Lagos',
	phone: '+2347033233038',
	whatsapp: '2347033233038',
	email: 'contact@setydrivingschool.com.ng',
	address: {
		street: '58 Lekki - Epe Expy, Lekki Peninsula II',
		city: 'Lagos',
		state: 'Lagos State',
		country: 'Nigeria',
		postalCode: '106104'
	},
	geo: {
		latitude: '6.4698',
		longitude: '3.5852'
	},
	// Neighbourhoods served — used in copy and schema
	areasServed: [
		'Lekki',
		'Ajah',
		'Ikota',
		'Agungi',
		'Jakande',
		'Igbo Efon',
		'Osapa',
		'Chevron',
		'Lekki Phase 1',
		'Lekki Phase 2',
		'Victoria Island',
		'Lagos Island'
	]
} as const;

export interface PageSEO {
	title: string;
	description: string;
	canonical?: string;
	ogImage?: string;
	ogType?: 'website' | 'article';
	noIndex?: boolean;
}

export const DEFAULT_SEO: PageSEO = {
	title: `${BUSINESS.name} – Driving Lessons in Lekki, Lagos`,
	description:
		'Sety Driving School offers professional driving lessons in Lekki, Ajah, Ikota, Agungi and across Lagos. Expert instructors, modern cars, flexible schedules. Book via WhatsApp today.',
	ogType: 'website',
	ogImage: `${SITE_URL}/og-image.jpg`
};
