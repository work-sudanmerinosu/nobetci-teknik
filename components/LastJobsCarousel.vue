<template>
	<Carousel>
		<Slide v-for="slide in abbas" :key="slide">
			<img class="carousel__item" :src="slide" />
		</Slide>

		<template #addons>
			<Navigation />
			<Pagination />
		</template>
	</Carousel>
</template>

<script setup lang="ts">
	import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
	import 'vue3-carousel/dist/carousel.css';

	const abbas = [
		'https://dummyimage.com/500x300',
		'https://dummyimage.com/500x300',
		'https://dummyimage.com/500x300',
		'https://dummyimage.com/500x300',
		'https://dummyimage.com/500x300',
	];
</script>
