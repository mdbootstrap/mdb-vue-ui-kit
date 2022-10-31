<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBPagination",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "ul",
  },
  circle: {
    type: Boolean,
    default: false,
  },
  lg: {
    type: Boolean,
    default: false,
  },
  sm: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    "pagination",
    props.sm && "pagination-sm",
    props.lg && "pagination-lg",
    props.circle && "pagination-circle",
  ];
});
</script>
