// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],

  runtimeConfig: {
    // Private keys (server-only)

    // Public keys (accessible in both server and client)
    public: {
      serverDomain: process.env.SERVER_DOMAIN,
      appDomain: process.env.APP_DOMAIN
    }
  },

  extends: [
    './layers/activator'
  ]
})