<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
