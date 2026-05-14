<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'size'> {
		value?: string | number;
		error?: string;
	}

	let {
		type = 'text',
		value = $bindable(''),
		placeholder = '',
		error = '',
		disabled = false,
		class: className = '',
		...rest
	}: Props = $props();
</script>

<div class="flex w-full flex-col gap-1.5">
	<input
		{type}
		bind:value
		{placeholder}
		{disabled}
		class="w-full rounded-xl border bg-white px-4 py-3 text-base transition-all duration-200 placeholder:text-slate-400 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50
		{error
			? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
			: 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/20'} {className}"
		{...rest}
	/>
	{#if error}
		<span class="text-sm font-medium text-red-500">{error}</span>
	{/if}
</div>
