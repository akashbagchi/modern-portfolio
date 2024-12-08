export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: ['@primevue/nuxt-module'],

  primevue: {
    options: {
      theme: 'aura',
      ripple: true,
      inputVariant: 'filled',
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  css: [
    'primeicons/primeicons.css', // PrimeIcons
    '~/assets/css/main.css', // Tailwind CSS
  ],

  build: {
    transpile: ['primevue'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      vercelEnv: import.meta.env.VERCEL_ENV || 'development',
    },
  },

  compatibilityDate: '2024-12-08',
})
