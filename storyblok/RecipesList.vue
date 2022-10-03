<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})

const { recipes, fetchRecipes } = useRecipes()

await fetchRecipes()
</script>
<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto py-20">
      <h2 class="text-shrimp-500 font-display text-4xl font-bold mb-16 w-2/3">
        {{ blok.title }}
      </h2>
      <div class="grid grid-cols-4 gap-12">
        <article
          v-for="{ uuid, content, slug } of recipes"
          class="bg-white rounded-lg overflow-hidden shadow-md"
          :key="uuid"
        >
          <NuxtLink :to="`/recipes/${slug}`">
            <img class="w-full" :src="content.media.filename" :alt="content.media.alt" />
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
      </div>
    </div>
  </section>
</template>
