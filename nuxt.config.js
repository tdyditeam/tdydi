import tm from './locales/tm'
import ru from './locales/ru'
import en from './locales/en'
import metaHome from './SEO/main'
require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: metaHome,

  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css', 'swiper/css/swiper.css'],
  ssr: true,
  loading: {
    color: '#16ab65',
    height: '2px',
  },

  target: 'server',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/toast.js',
    // '@/plugins/lazyload.js',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
  ],
  env: {
    BASE_API: process.env.BASE_API,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    BASE_API: process.env.BASE_API,
    retry: true,
  },

  i18n: {
    baseUrl: `${process.env.SITE_URL}`,
    locales: [
      {
        code: 'tm',
        lang: 'TM',
        name: 'TM',
        iso: 'tm-TM',
        file: 'tm',
        isCatchallLocale: true,
      },
      { code: 'ru', lang: 'RU', name: 'RU', iso: 'ru-RU', file: 'ru' },
      { code: 'en', lang: 'EN', name: 'EN', iso: 'en-EN', file: 'en' },
    ],
    defaultLocale: 'tm',
    seo: true,
    vueI18n: {
      fallbackLocale: 'tm',
      messages: {
        tm,
        ru,
        en,
      },
    },
  },

  //   filenames: { chunk: '[name].[chunkhash].js' },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    middleware: 'loader',
  },
}
