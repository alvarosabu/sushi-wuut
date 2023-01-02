<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const route = useRoute()
const { slug } = route.params

const { fetchRecipeBySlug } = useRecipes()

const story = await fetchRecipeBySlug(slug as string)

useHead({
  title: `${story?.content.title} - Sushi Wuut`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: story?.content.excerpt,
    },
    // og
    {
      hid: 'og:description',
      property: 'og:description',
      content: story?.content.excerpt,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${story?.content.title} - Sushi Wuut`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `http://sushi.wuut/recipes/${slug}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: story?.content.media?.filename,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: story?.content.media?.alt,
    },
    {
      hid: 'og:publish_date',
      property: 'og:publish_date',
      content: story?.published_at,
    },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@alvarosabu' },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `${story?.content.title} - Sushi Wuut`,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: story?.content.excerpt,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: story?.content.media?.filename,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: story?.content.media?.alt,
    },
  ],
})
</script>
<template>
  <div class="text-gray-600">
    <header v-if="story" class="relative mb-24 container mx-auto px-4 md:px-0">
      <div class="flex justify-end w-full md:w-1/2">
        <img
          class="rounded-lg aspect-square object-cover"
          :src="story.content.media.filename"
          :alt="story.content.media.alt"
        />
      </div>
      <div
        class="bg-white rounded-lg overflow-hidden md:shadow-md md:px-8 py-8 w-full md:absolute md:w-1/2 top-4 right-8"
      >
        <h1 class="text-shrimp-500 font-display text-4xl font-bold mb-8 w-2/3">
          {{ story.content.title }}
        </h1>
        <span class="bg-gray-100 rounded-full absolute right-8 p-4">
          <img
            class="w-36px h-36px filter-grayscale contrast-25"
            :src="story.content.category.content.icon.filename"
            alt=""
          />
        </span>
        <ul class="flex mb-8 border-b border-gray-200 pb-4 text-gray-400">
          <li class="flex items-center mr-4">
            <i class="i-carbon-time" />
            <span class="ml-2">{{ story.content.prep_time }} mins</span>
          </li>
          <li class="flex items-center">
            <i class="i-carbon-user" />
            <span class="ml-2">Serves {{ story.content.diners }}</span>
          </li>
        </ul>

        <div class="prose">
          <RichTextRenderer v-if="story.content" :document="story.content.ingredients"></RichTextRenderer>
        </div>
      </div>
    </header>
    <div class="mx-auto prose px-8 md:px-0">
      <RichTextRenderer v-if="story.content.steps" :document="story.content.steps"></RichTextRenderer>
    </div>
  </div>
</template>
