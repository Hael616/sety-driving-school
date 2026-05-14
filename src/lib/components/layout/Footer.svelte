<script lang="ts">
	import { BUSINESS, SITE_URL } from '$lib/seo';

	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/gallery', label: 'Gallery' }
	];

	const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello, I'd like to book driving lessons.")}`;
</script>

<footer class="border-t border-slate-800 bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid gap-10 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<a href="/" class="text-2xl font-bold tracking-tight text-white">
					<span class="text-green-500">Sety</span> Driving School
				</a>
				<p class="mt-3 text-sm leading-relaxed text-slate-400">
					Professional driving lessons in Lekki, Ajah, Ikota, Agungi, Jakande, Igbo Efon and
					across Lagos. Learn to drive safely with expert, patient instructors.
				</p>
				<address class="mt-4 not-italic">
					<p class="text-sm text-slate-400">
						📍 {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.country}
					</p>
					<a
						href="tel:{BUSINESS.phone}"
						class="mt-1 block text-sm text-green-400 hover:text-green-300"
					>
						📞 {BUSINESS.phone}
					</a>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-1 block text-sm text-green-400 hover:text-green-300"
					>
						💬 WhatsApp Us
					</a>
				</address>
			</div>

			<!-- Quick Links -->
			<nav aria-label="Footer navigation">
				<h3 class="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
				<ul class="mt-4 space-y-2">
					{#each footerLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-slate-400 transition-colors hover:text-green-400"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Service Areas -->
			<div>
				<h3 class="text-sm font-semibold tracking-wider text-white uppercase">Areas We Serve</h3>
				<ul class="mt-4 columns-2 space-y-2">
					{#each BUSINESS.areasServed as area}
						<li class="text-sm text-slate-400">{area}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="mt-10 border-t border-slate-800 pt-8 text-center">
			<p class="text-sm text-slate-500">
				© {currentYear}
				{BUSINESS.name}. All rights reserved. · Lekki, Lagos, Nigeria.
			</p>
		</div>
	</div>
</footer>
