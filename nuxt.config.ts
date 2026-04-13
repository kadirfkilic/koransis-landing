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
    description: 'Koransis - Kolay Randevu Sistemi. Güzellik merkezleri, kuaförler ve randevu bazlı işletmeler için profesyonel SaaS randevu yönetim platformu.',
    defaultLocale: 'tr'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
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

  compatibilityDate: '2025-01-15'
})
