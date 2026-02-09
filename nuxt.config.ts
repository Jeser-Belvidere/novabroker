// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	colorMode: {
		preference: 'dark'
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	nitro: {
		plugins: ['plugins/updateCurrency.server.ts'],
		experimental: {
			tasks: true,
		},
		scheduledTasks: {
			// Run once a day
			'0 18 * * *': ['currency:update'],
		},
	},
	ssr: true,
	modules: ['@nuxt/eslint', 'nuxt-schema-org', 'vue3-carousel-nuxt', '@nuxtjs/device', '@nuxt/ui', '@nuxtjs/seo' ],
	ui: {
		fonts: false,
	},
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: 'NOVABROKER',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
			htmlAttrs: {
				lang: 'ru',
			},
			link: [
				{ rel: 'manifest', href: '/manifest.json' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'preload',
					href: '/fonts/AdventPro-VariableFont_wdth,wght.ttf',
					as: 'font',
					type: 'font/ttf',
					crossorigin: 'anonymous',
				},
				{ rel: 'canonical', href: 'https://xn--80acboyohdrd.xn--p1ai/' },
				{
					rel: 'icon',
					type: 'image/svg+xml',
					sizes: 'any',
					href: '/icon64x64.svg',
					media: '(prefers-color-scheme: light)',
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					sizes: '128x128',
					href: '/icon128x128.svg',
					media: '(prefers-color-scheme: light)',
				},
				{
					rel: 'apple-touch-icon',
					type: 'image/svg+xml',
					sizes: '180x180',
					href: '/icon180x180.svg',
					media: '(prefers-color-scheme: light)',
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					sizes: '512x512',
					href: '/icon512x512.svg',
					media: '(prefers-color-scheme: light)',
				},
			],
			meta: [
				{
					name: 'title',
					content: 'NOVABROKER',
				},
				{
					name: 'keywords',
					content:
            'ВЭД, консалтинг, Таможенный брокер, Сертификация, Сопровождение сделок, Новаброкер, Novabroker',
				},
				{
					name: 'description',
					content:
            'NOVABROKER - Мы предоставляем полный спектр услуг по ВЭД-консалтингу. Оптимизация логистики, таможенное оформление и сопровождение сделок. Снизьте риски и экономьте время с нашими экспертами.',
				},
				{
					property: 'og:title',
					content: 'NOVABROKER - ВЭД консалтинг',
				},
				{
					property: 'og:description',
					content:
            'NOVABROKER - Мы предоставляем полный спектр услуг по ВЭД-консалтингу. Оптимизация логистики, таможенное оформление и сопровождение сделок. Снизьте риски и экономьте время с нашими экспертами.',
				},
				{
					property: 'og:image',
					content: 'https://новаброкер.рф/icon300x300.jpg',
				},
				{
					property: 'og:url',
					content: 'https://новаброкер.рф/',
				},
				{
					property: 'og:type',
					content: 'website',
				},
			],
			script: [{ src: 'yametrika.js', async: true, defer: true }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},
});