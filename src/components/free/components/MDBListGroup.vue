<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  flush: {
    type: Boolean,
    default: false,
  },
  horizontal: {
    type: [Boolean, String],
    default: false,
  },
  numbered: Boolean,
  tag: {
    type: String,
    default: "ul",
  },
});
const className = computed(() => {
  return [
    "list-group",
    props.horizontal && horizontalClass.value,
    props.flush && "list-group-flush",
    props.numbered && "list-group-numbered",
  ];
});

const horizontalClass = computed(() => {
  if (!props.horizontal) {
    return;
  }
  return props.horizontal !== true
    ? `list-group-horizontal-${props.horizontal}`
    : "list-group-horizontal";
});
</script>
