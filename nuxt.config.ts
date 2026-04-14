export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  site: {
    url: 'https://koransis.com',
    name: 'Koransis',
    description: 'Kuaför, güzellik merkezi, berber ve spa salonları için online randevu sistemi. 7/24 randevu alma, müşteri takibi, hazır web sitesi ve analitik paneli tek platformda.',
    defaultLocale: 'tr'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800, 900] }
    ]
  },

  image: {
    quality: 80,
    formats: ['webp', 'avif']
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

  compatibilityDate: '2025-01-15'
})
