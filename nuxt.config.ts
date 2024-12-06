export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: true
  },

  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],

  build: {
    transpile: ['primevue']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
      head: {
          link: [{
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'
          }]
      }
  },

  compatibilityDate: '2024-12-07',
})
