// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge', 'nuxt-icon'],
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: 'Nöbetçi Teknik',
			htmlAttrs: {
				lang: 'tr',
			},
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
