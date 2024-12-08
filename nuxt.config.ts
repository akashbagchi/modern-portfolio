export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: ['@primevue/nuxt-module'],

  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false,
        },
      },
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],

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
