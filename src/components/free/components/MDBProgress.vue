<template>
  <component :is="tag" :class="className" :style="style">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  height: Number,
});

const className = computed(() => ["progress"]);
const style = computed(() => {
  return { height: props.height + "px" };
});
</script>
