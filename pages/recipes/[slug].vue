<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const route = useRoute()
const { slug } = route.params

const { fetchRecipeBySlug } = useRecipes()

const story = await fetchRecipeBySlug(slug as string)
</script>
<template>
  <div class="container mx-auto text-gray-600">
    <header v-if="story" class="relative">
      <img class="rounded-lg aspect-square" :src="story.content.media.filename" :alt="story.content.media.alt" />
      <div class="bg-white rounded-lg overflow-hidden shadow-md p-8 absolute w-1/2 top-4 right-0">
        <h1 class="text-shrimp-500 font-display text-4xl font-bold mb-8 w-2/3">
          {{ story.content.title }}
        </h1>
        <ul class="flex mb-8 border-b border-gray-200 pb-4">
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
          <RichTextRenderer :document="story.content.ingredients"></RichTextRenderer>
        </div>
      </div>
    </header>
    <div class="prose">
      <RichTextRenderer :document="story.content.steps"></RichTextRenderer>
    </div>
  </div>
</template>
