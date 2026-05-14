<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/gallery', label: 'Gallery' }
	];

	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);

	function handleScroll() {
		isScrolled = window.scrollY > 10;
	}

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	// Close menu when navigating
	$effect(() => {
		// When $page.url changes, close the menu
		$page.url;
		isMobileMenuOpen = false;
	});

	const waUrl =
		"https://wa.me/2347033233038?text=Hello,%20I'd%20like%20to%20book%20driving%20lessons.";
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="sticky top-0 z-50 w-full transition-colors duration-300 {isScrolled
		? 'border-b border-slate-800 bg-slate-950/95 shadow-lg'
		: 'border-b border-transparent bg-slate-950'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex flex-shrink-0 items-center">
				<a
					href="/"
					class="flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
				>
					<span class="text-green-500">Sety</span> Driving School
				</a>
			</div>

			<!-- Desktop Nav -->
			<nav class="hidden items-center space-x-8 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="relative py-2 text-sm font-medium transition-colors duration-200 hover:text-white {$page
							.url.pathname === link.href
							? 'text-white'
							: 'text-slate-400'}"
					>
						{link.label}
						{#if $page.url.pathname === link.href}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-green-500"
								aria-hidden="true"
							></span>
						{/if}
					</a>
				{/each}
				<div class="ml-4 border-l border-slate-800 pl-4">
					<Button
						variant="primary"
						class="px-6 py-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
					>
						<a
							href={waUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-4 w-4"
							>
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
								/>
							</svg>
							Start Driving
						</a>
					</Button>
				</div>
			</nav>

			<!-- Mobile menu button -->
			<div class="flex items-center md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-inset"
					aria-controls="mobile-menu"
					aria-expanded={isMobileMenuOpen}
					onclick={toggleMenu}
				>
					<span class="sr-only">Open main menu</span>
					{#if isMobileMenuOpen}
						<svg
							class="block h-6 w-6"
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg
							class="block h-6 w-6"
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Dropdown -->
	{#if isMobileMenuOpen}
		<div
			class="absolute top-16 left-0 w-full border-b border-slate-800 bg-slate-900 shadow-2xl md:hidden"
			id="mobile-menu"
			transition:slide={{ duration: 250 }}
		>
			<div class="space-y-3 px-4 pt-4 pb-6">
				{#each links as link}
					<a
						href={link.href}
						class="block rounded-xl px-4 py-3 text-base font-medium transition-colors {$page.url
							.pathname === link.href
							? 'bg-slate-800 text-white'
							: 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}"
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-4 border-t border-slate-800 pt-6">
					<Button variant="primary" class="w-full justify-center py-3.5 text-base">
						<a
							href={waUrl}
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
							Start Driving
						</a>
					</Button>
				</div>
			</div>
		</div>
	{/if}
</header>
