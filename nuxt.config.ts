// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  modules: [
    '@unocss/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_TOKEN, use: [apiPlugin] }],
  ],
  css: ['@unocss/reset/tailwind.css'],
})
