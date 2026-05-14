<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}

	let { title, description }: Props = $props();
</script>

<div class="mx-auto max-w-3xl py-16 text-center sm:py-24">
	<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
		{title}
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
		{description}
	</p>
</div>
