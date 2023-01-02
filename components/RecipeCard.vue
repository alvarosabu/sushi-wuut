<script setup lang="ts">
defineProps<{
  uuid: string
  content: any
  slug: string
}>()
</script>
<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-md" :key="uuid">
    <NuxtLink :to="`/recipes/${slug}`" >
      <NuxtImg  aspect-ratio="16/9"
          provider="storyblok"
          format="webp"
          sizes="sm:100vw md:75vw lg:600px xl:1200px" class="w-full aspect-video object-cover" :src="content.media.filename" :alt="content.media.alt" />
      <div class="p-4 relative min-h-200px">
        <h3 class="font-bold text-xl text-shrimp-600 w-1/2">
          {{ content.title }}
        </h3>
        <span class="bg-gray-100 rounded-full absolute right-8 -top-33px p-4">
          <img
            class="w-36px h-36px filter-grayscale contrast-25"
            :src="content.category.content.icon.filename"
            alt=""
          />
        </span>
      </div>
    </NuxtLink>
  </article>
</template>
