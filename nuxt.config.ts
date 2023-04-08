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
					content:
						"Nöbetçi Teknik Servisimiz Antalya'nın her yerinde evinizin ve iş yerinizin her türlü teknik ihtiyacında 7/24 kesintisiz hizmet vermektedir..",
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
			siteDescrption:
				"Nöbetçi Teknik Servisimiz Antalya'nın her yerinde evinizin ve iş yerinizin her türlü teknik ihtiyacında 7/24 kesintisiz hizmet vermektedir..",
			language: 'tr-TR',
		},
	},
});
