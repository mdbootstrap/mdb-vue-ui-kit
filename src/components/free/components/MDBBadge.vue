<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps({
  badge: String,
  color: String,
  pill: Boolean,
  dot: Boolean,
  notification: Boolean,
  tag: {
    type: String,
    default: "span",
  },
});
const attrs = useAttrs();

const className = computed(() => {
  return [
    "badge",
    props.color && `bg-${props.color}`,
    props.badge && `badge-${props.badge}`,
    props.pill && "rounded-pill",
    props.dot && "badge-dot",
    props.notification && "badge-notification",
  ];
});

defineExpose({ attrs });
</script>
