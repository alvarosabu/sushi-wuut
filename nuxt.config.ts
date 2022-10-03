// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  buildModules: [
    '@unocss/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_TOKEN, useApiClient: true }],
  ],
  css: ['@unocss/reset/tailwind.css'],
})
