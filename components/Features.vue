<template>
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto">
			<div class="flex flex-col text-center w-full mb-20">
				<h1
					class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
				>
					{{ features.title }}
				</h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
					{{ features.description }}
				</p>
			</div>
			<div class="flex flex-wrap -m-2">
				<div
					v-for="feature in features.jobs"
					class="p-2 lg:w-1/3 md:w-1/2 w-full"
				>
					<div
						class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
					>
						<nuxt-img
							alt="team"
							class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
							:src="feature.image"
						/>
						<div class="flex-grow">
							<h2 class="text-gray-900 title-font font-medium">
								{{ feature.title }}
							</h2>
							<p class="text-gray-500">{{ feature.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const fetch = useAxiosFetch();
	const features = await fetch.getFeatures();
</script>
