<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="hero">
    <div class="flex justify-between flex-col sm:flex-row mx-auto container font-sans">
      <div class="w-full sm:w-1/2">
        <img
          class="w-full h-auto"
          v-if="blok.media"
          :src="blok.media.filename"
          :alt="blok.media.alt"
          :title="blok.media.title"
        />
      </div>
      <div class="p-8 md:p-4 pt-16 w-full sm:w-1/3">
        <h1 class="text-shrimp-600 font-display text-3xl font-bold mb-4">
          {{ blok.title }}
        </h1>
        <p class="text-gray-700 mb-8">{{ blok.text }}</p>
        <ul class="flex justify-end">
          <li v-for="action in blok.actions" class="mr-4">
            <NuxtLink to="/recipes">
              <StoryblokComponent :blok="action" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
