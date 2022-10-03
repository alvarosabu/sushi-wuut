<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})

const { categories, fetchCategories, formattedCategories } = useCategories()

await fetchCategories()
</script>
<template>
  <section class="relative categories bg-shrimp-400 w-full h-600px mt-50">
    <img src="/tint-orange.png" class="absolute right-0 -top-50" alt="" />
    <div class="z-10 absolute w-full py-20">
      <div class="container mx-auto flex justify-between z-10">
        <div class="w-1/2">
          <h2 class="text-white font-display text-4xl font-bold mb-8 w-2/3">
            {{ blok.title }}
          </h2>
          <ul class="grid grid-cols-3 gap-8 py-8">
            <li v-for="{ icon, name, uuid } of formattedCategories" :key="uuid">
              <div class="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img class="w-76px h-76px mb-4" :src="icon.filename" :alt="icon.alt" />
                <h3 class="text-shrimp-600 font-display text-xl font-bold mb-4">
                  {{ name }}
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-1/3">
          <img v-if="blok.media" :src="blok.media.filename" :alt="blok.media.alt" :title="blok.media.title" />
        </div>
      </div>
    </div>
  </section>
</template>
