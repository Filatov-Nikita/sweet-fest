<template>
  <img :src="path" />
</template>

<script setup>
import { computed } from 'vue';

  const props = defineProps({
    src: {
      required: true,
      type: String,
    }
  });

  const path = computed(() => {
    const base = import.meta.env.BASE_URL ?? '/';
    const src = (base !== '/' ? base : '') + props.src;
    return src;
  });
</script>
