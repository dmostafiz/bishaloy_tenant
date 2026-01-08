// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@peterbud/nuxt-query',
    'nuxt-swiper',
  ],

  ui: {
    colorMode: false
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Private keys (server-only)

    // Public keys (accessible in both server and client)
    public: {
      serverDomain: process.env.SERVER_DOMAIN,
      appDomain: process.env.APP_DOMAIN
    }
  },

  nuxtQuery: {
    autoImports: ['useQuery', 'useMutation'],

    // Enable/disable Nuxt DevTools integration (default: true)
    devtools: true,
    
    queryClientOptions: {
      defaultOptions: {
        queries: {
          // for example disable refetching on window focus
          refetchOnWindowFocus: false,

          // or change the default refetch interval
          // refetchInterval: 5000,
        },
      },
    },
  },

})