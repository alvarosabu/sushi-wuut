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
    <div class="container mx-auto py-20 px-8 sm:px-0">
      <h2 class="text-shrimp-500 font-display text-4xl font-bold mb-16 w-2/3">
        {{ blok.title }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <RecipeCard
          v-for="{ uuid, content, slug } in recipes"
          :key="uuid"
          :uuid="uuid"
          :content="content"
          :slug="slug"
        />
      </div>
    </div>
  </section>
</template>
