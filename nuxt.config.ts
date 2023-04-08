// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge', 'nuxt-icon'],
	css: ['~/assets/css/main.css'],
	extends: ['nuxt-seo-kit'],
	app: {
		head: {
			title: 'Nöbetçi Teknik Servis',
			meta: [
				{
					name: 'description',
					content: 'Antalyadaki tüm teknik işleriniz için en iyisi.',
				},
			],
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
	runtimeConfig: {
		public: {
			baseUrl: process.env.BACKEND_URL || 'http://localhost:1337/api',
			siteUrl:
				process.env.NUXT_PUBLIC_SITE_URL ||
				'https://www.nobetciteknikservis.net',
			siteName: 'Nöbetçi Teknik Servis',
			siteDescription: 'Antalyadaki tüm teknik işleriniz için en iyisi.',
			language: 'tr-TR',
		},
	},
});
