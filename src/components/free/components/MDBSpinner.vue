<template>
  <component :is="tag" :class="className" role="status">
    <span class="visually-hidden">Loading...</span>
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBSpinner",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  grow: {
    type: Boolean,
    default: false,
  },
  color: String,
  size: String,
});

const className = computed(() => {
  return [
    props.grow ? "spinner-grow" : "spinner-border",
    props.color && `text-${props.color}`,
    `${
      props.size
        ? props.grow
          ? "spinner-grow-" + props.size
          : "spinner-border-" + props.size
        : ""
    }`,
  ];
});
</script>
