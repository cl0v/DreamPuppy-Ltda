export default defineNuxtConfig({
  // debug: true,
  devtools: { enabled: true }, // Desativar em produção
  modules: [
    "@nuxt/ui",
    '@nuxt/image',
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "vue3-carousel-nuxt",
    "@nuxt/icon",
  ],
  // extends: ['@nuxt/ui-pro'],
  site: {
    url: 'https://ipets.dreampuppy.com.br',
    name: 'iPets',
    description: 'Compre seu filhote de forma segura!',
  },
  css: [
    '~/assets/css/tailwind.css',
    `~/style.css`
  ],
  //  plugins: [`~/plugins/lottie-vue-player.client.js`],
  ui: {
    global: true,
  },
  content: {},
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    mercadopagoWebhookSecret: process.env.NUXT_MERCADOPAGO_WEBHOOK_SECRET,
    mercadopagoAccessToken: process.env.NUXT_MERCADOPAGO_ACCESS_TOKEN,
    public: {
      baseURL: 'https://ipets.dreampuppy.com.br',
      devBaseURL: 'localhost:3000',
      mercadopagoKey: process.env.NUXT_PUBLIC_MERCADOPAGO_KEY,
    },
  },
  app: {
    head: {
      // title: 'iPets - Filhotes disponíveis',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'pt_BR'
      },
      meta: [
        { name: 'description', content: 'Compre seu filhote de forma segura.' }
      ],
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        },
      ],
    }
  },
  i18n: {
    locales: [
      { code: 'pt_BR', file: 'pt-BR.json' },
    ],
    langDir: 'locales',
    defaultLocale: 'pt_BR',
    strategy: 'no_prefix'
  },

})