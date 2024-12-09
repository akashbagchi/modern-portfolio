export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: ['@primevue/nuxt-module'],

  primevue: {
    options: {
      unstyled: false,
      theme: 'none',
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
    edgeConfig: import.meta.env.EDGE_CONFIG,
    adminSecret: process.env.ADMIN_SECRET,
    public: {
      vercelEnv: import.meta.env.VERCEL_ENV || 'development',
      enableAdmin: process.env.ENABLE_ADMIN === 'true',
    },
  },

  devServer: {
    port: 3000,
  },

  nitro: {
    debug: true,
  },

  compatibilityDate: '2024-12-08',
})
