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
      <h2 class="text-shrimp-500 font-display text-4xl font-bold mb-8 w-2/3">
        {{ blok.title }}
      </h2>
      <div class="grid grid-cols-3 gap-12">
        <article
          v-for="{ uuid, content, slug } of recipes"
          class="bg-white rounded-lg overflow-hidden shadow-md"
          :key="uuid"
        >
          <img class="w-full" :src="content.media.filename" :alt="content.media.alt" />
          <div class="p-4 relative min-h-200px">
            <h3 class="font-bold text-xl text-shrimp-600 w-1/2">
              <NuxtLink :to="`/recipes/${slug}`"> {{ content.title }}</NuxtLink>
            </h3>
            <span class="bg-shrimp-100 rounded-full absolute right-8 -top-33px p-4">
              <img class="w-36px h-36px" :src="content.category.content.icon.filename" alt="" />
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
