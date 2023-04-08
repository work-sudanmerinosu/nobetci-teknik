<template>
	<div>
		<div class="flex flex-col text-center w-full mb-20">
			<h1
				class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
			>
				Son işlerimiz
			</h1>
		</div>
		<Carousel :autoplay="2000" :wrap-around="true">
			<Slide v-for="image in works.images" :key="image">
				<nuxt-img :src="image" class="carousel__item" />
			</Slide>

			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
	import { Carousel, Pagination, Slide } from 'vue3-carousel';
	import 'vue3-carousel/dist/carousel.css';
	const fetch = useAxiosFetch();
	const works = await fetch.getWorks();
</script>

<style scoped>
	.carousel__item {
		min-height: 200px;
		max-width: 1280px;
		max-height: 720px;

		width: 100%;
		font-size: 20px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel__slide {
		padding: 10px;
	}

	.carousel__prev,
	.carousel__next {
		box-sizing: content-box;
		border: 5px solid white;
	}
</style>
