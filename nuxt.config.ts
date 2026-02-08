export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: ['@primevue/nuxt-module', '@nuxt/image'],

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
    '~/assets/css/fonts.css',
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
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Akash Bagchi | Portfolio',
      script: [
        {
          children: `
            if (localStorage.getItem('color-scheme') === 'dark' || (!localStorage.getItem('color-scheme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          `,
          type: 'text/javascript',
        },
      ],
    },
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
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
