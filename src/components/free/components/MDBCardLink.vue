<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineProps({
  tag: {
    type: String,
    default: "a",
  },
});

const className = computed(() => ["card-link"]);
</script>
