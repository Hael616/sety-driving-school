<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outline' | 'white';
		size?: 'sm' | 'md' | 'lg';
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variants = {
		primary:
			'bg-green-600 text-white font-semibold hover:bg-green-500 shadow-lg shadow-green-900/20 border border-transparent',
		secondary:
			'bg-slate-800 text-white font-semibold hover:bg-slate-700 shadow-md border border-slate-700/50',
		outline:
			'bg-transparent text-white font-medium border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 shadow-sm',
		white:
			'bg-white text-green-700 font-bold hover:bg-slate-50 shadow-md border border-transparent'
	};

	const sizes = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-base',
		lg: 'h-14 px-8 text-lg'
	};
</script>

<button
	class="inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 {variants[
		variant
	]} {sizes[size]} {className}"
	{disabled}
	{...rest}
>
	{@render children?.()}
</button>
