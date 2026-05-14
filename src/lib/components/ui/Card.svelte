<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'default' | 'elevated';
		padding?: 'sm' | 'md' | 'lg' | 'none';
		children?: Snippet;
	}

	let {
		variant = 'default',
		padding = 'md',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variants = {
		default: 'bg-slate-900 shadow-lg border border-slate-800/80',
		elevated: 'bg-slate-800 shadow-xl border border-slate-700/80 ring-1 ring-white/5'
	};

	const paddings = {
		none: 'p-0',
		sm: 'p-4 sm:p-5',
		md: 'p-6 sm:p-8',
		lg: 'p-8 sm:p-10'
	};
</script>

<div
	class="overflow-hidden rounded-xl transition-shadow duration-200 {variants[variant]} {paddings[
		padding
	]} {className}"
	{...rest}
>
	{@render children?.()}
</div>
