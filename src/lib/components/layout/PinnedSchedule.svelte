<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	let isExpanded = $state(true);

	function toggle() {
		isExpanded = !isExpanded;
	}
</script>

<div
	class="fixed right-6 bottom-6 z-50"
	class:w-auto={!isExpanded}
	class:w-[calc(100%-3rem)]={isExpanded}
	class:max-w-sm={isExpanded}
	class:sm:max-w-md={isExpanded}
>
	{#if isExpanded}
		<div
			transition:slide={{ duration: 300 }}
			class="relative overflow-hidden rounded-2xl border border-green-500/20 bg-slate-950/90 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
		>
			<!-- Decorative Background Glow -->
			<div
				class="absolute -top-12 -right-12 -z-10 h-24 w-24 rounded-full bg-green-500/10 blur-2xl"
			></div>

			<!-- Header -->
			<div
				onclick={toggle}
				class="flex cursor-pointer items-center justify-between border-b border-slate-800/80 pb-3"
			>
				<div class="flex items-center gap-2">
					<!-- Pulsing Green Indicator Dot -->
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
					</span>
					<h4 class="text-xs font-semibold tracking-wider text-slate-400 uppercase">
						Training Schedule
					</h4>
				</div>
				<!-- Minimize Button -->
				<button
					onclick={(e) => {
						e.stopPropagation();
						toggle();
					}}
					class="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
					aria-label="Minimize schedule"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
						class="h-4 w-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</button>
			</div>

			<!-- Body -->
			<div class="mt-4 space-y-4 text-sm text-slate-300">
				<!-- Option 1 -->
				<div class="flex gap-3">
					<div
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-green-500/10 text-green-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-3.5 w-3.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
							/>
						</svg>
					</div>
					<div>
						<p class="leading-none font-medium text-white">Mon–Fri Option</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-400">
							30 mins practical + 10 mins theory (up to 5x weekly)
						</p>
					</div>
				</div>

				<!-- Option 2 -->
				<div class="flex gap-3">
					<div
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-green-500/10 text-green-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-3.5 w-3.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
							/>
						</svg>
					</div>
					<div>
						<p class="leading-none font-medium text-white">3x Weekly Option</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-400">1 hour practical per session</p>
					</div>
				</div>

				<!-- First Session Note -->
				<div class="flex items-start gap-3 border-t border-slate-800/80 pt-3.5">
					<div
						class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-green-500/10 text-green-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-3.5 w-3.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 4.57a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37Zm0 0L12 18m3.59-3.63L18 12"
							/>
						</svg>
					</div>
					<p class="text-xs leading-normal font-medium text-green-400">
						First session: 1-hour theory + simulator training
					</p>
				</div>
			</div>
		</div>
	{:else}
		<!-- Floating Collapsed Pill -->
		<!-- Pulsing outer ring wrapper to draw attention when collapsed -->
		<div class="relative ml-auto w-fit" transition:fade={{ duration: 150 }}>
			<!-- Animated pulsing ring -->
			<span
				class="pointer-events-none absolute z-1 h-full w-full animate-pulse rounded-full bg-green-500/15 transition-all duration-300 hover:scale-105"
			></span>
			<button
				onclick={toggle}
				class="group relative flex items-center gap-2.5 rounded-full border border-green-500/40 bg-slate-950/90 px-5 py-3.5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-green-400/60 hover:bg-slate-900/95 focus:ring-2 focus:ring-green-500/50 focus:outline-none active:scale-95"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
				</span>
				<span
					class="text-xs font-semibold tracking-wider text-slate-300 uppercase transition-colors group-hover:text-white"
				>
					Training Schedule
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-white"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
				</svg>
			</button>
		</div>
	{/if}
</div>
