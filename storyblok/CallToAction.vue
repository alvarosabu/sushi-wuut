<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <button
    class="font-bold font-sans border-2 rounded-full px-2 py-1.5"
    :class="
      blok.type === 'solid'
        ? 'bg-shrimp-600 text-white border-transparent'
        : 'bg-white text-shrimp-600 border-shrimp-600'
    "
  >
    {{ blok.label }}
  </button>
</template>
