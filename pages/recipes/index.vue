<script setup lang="ts">
// Feature: filtering
const filter = ref('')

// Feature: filtering by category
const category = ref('')

const { categories, fetchCategories } = useCategories()
await fetchCategories()

// Feature: fetching the recipes
const { recipes, fetchRecipes } = useRecipes(filter, category)
await fetchRecipes()

watch(filter, async () => {
  await fetchRecipes()
})

watch(category, async () => {
  await fetchRecipes()
})
</script>
<template>
  <div class="container mx-auto py-20">
    <h2 class="text-shrimp-500 font-display text-4xl font-bold mb-8">Recipes</h2>
    <div class="w-full flex justify-between py-8 mb-4">
      <div class="form-control w-1/2 flex items-center relative">
        <input type="text" class="w-full bg-gray-200 rounded-lg px-4 py-2 text-sm" v-model="filter" />
        <i class="absolute top-2 right-4 i-carbon-search"></i>
      </div>
      <div class="form-control w-1/3 flex items-center relative">
        <select class="w-full bg-gray-200 rounded-lg px-4 py-2 text-sm appearance-none" v-model="category">
          <option value="">None</option>
          <option v-for="{ name, uuid } of categories" :value="uuid">{{ name }}</option>
        </select>
        <i class="absolute top-2 right-4 i-carbon-chevron-down"></i>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
      <RecipeCard v-for="{ uuid, content, slug } in recipes" :key="uuid" :uuid="uuid" :content="content" :slug="slug" />
    </div>
  </div>
</template>
