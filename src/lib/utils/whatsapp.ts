const WHATSAPP_NUMBER = '2347033233038';

type PackageCTA = {
	type: 'package';
	name: string;
	price: string | number;
};

type GeneralCTA = {
	type: 'general';
	name?: never;
	price?: never;
};

type WhatsAppLinkOptions = PackageCTA | GeneralCTA;

/**
 * Generates a pre-filled WhatsApp link for the Sety Driving School.
 *
 * @example
 * // Package CTA
 * generateWhatsAppLink({ type: 'package', name: 'Standard', price: 50000 })
 * // → https://wa.me/2348012345678?text=Hello%2C%20I%27m%20interested%20in%20...
 *
 * @example
 * // General CTA
 * generateWhatsAppLink({ type: 'general' })
 * // → https://wa.me/2348012345678?text=Hello%2C%20I%20would%20like%20...
 */
export function generateWhatsAppLink(options: WhatsAppLinkOptions): string {
	let message: string;

	if (options.type === 'package') {
		message = `Hello, I'm interested in the ${options.name} package (₦${options.price}). Please I would like more details.`;
	} else {
		message = `Hello, I would like to make some enquiries about your driving school.`;
	}

	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
