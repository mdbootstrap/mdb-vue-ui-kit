<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBBadge",
};
</script>

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
    props.color && `badge-${props.color}`,
    props.badge && `bg-${props.badge}`,
    props.pill && "rounded-pill",
    props.dot && "badge-dot",
    props.notification && "badge-notification",
  ];
});

defineExpose({ attrs });
</script>
