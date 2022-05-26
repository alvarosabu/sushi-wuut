import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  buildModules: [
    '@unocss/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_TOKEN }],
  ],
  css: ['@unocss/reset/tailwind.css'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    typography: true, // enabled `@unocss/preset-typography`
  },
})
