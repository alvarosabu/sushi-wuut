// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { apiPlugin } from '@storyblok/vue'

const OPEN_GRAPH = [
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'Sushi Wuut',
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: 'Sushi Wuut',
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'http://alvarosaburido.dev',
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
  },
  { property: 'og:updated_time', content: new Date().toISOString() },
]

const TWITTER = [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@shushiwuut' },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: 'Sushi Wuut',
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671362003/OG_zpg7nx.png',
  },
  {
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: 'Sushi Wuut Preview',
  },
]

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Sushi Wuut',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sushi Wuut is sushi recipe app built with Nuxt 3, Storyblok, and Unocss',
        },
        { hid: 'author', name: 'author', content: 'Alvaro Saburido' },
        {
          hid: 'keywords',
          property: 'keywords',
          keywords: 'sushi, recipes, nuxt, storyblok, unocss',
        },
        ...OPEN_GRAPH,
        ...TWITTER,
      ]
    }
  },
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  modules: [
    '@unocss/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_TOKEN, use: [apiPlugin] }],
  ],
  css: ['@unocss/reset/tailwind.css'],
})
