<script setup lang="ts">
const story = await useStoryblok('home', { version: 'draft' })
</script>
<template>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
