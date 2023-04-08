<template>
	<section class="text-gray-600 body-font">
		<div class="container pt-24 mx-auto flex flex-wrap">
			<div class="flex w-full mb-20 flex-wrap">
				<h1
					class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
				>
					{{ hero.title }}
				</h1>
				<p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
					{{ hero.description }}
				</p>
			</div>
			<nuxt-img
				:src="hero.image"
				class="w-full object-cover h-full object-center block"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
	const fetch = useAxiosFetch();
	const hero = await fetch.getHero();
</script>
