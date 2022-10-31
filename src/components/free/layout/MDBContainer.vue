<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBContainer",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  sm: {
    type: Boolean,
    default: false,
  },
  md: {
    type: Boolean,
    default: false,
  },
  lg: {
    type: Boolean,
    default: false,
  },
  xl: {
    type: Boolean,
    default: false,
  },
  xxl: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    props.fluid ? "container-fluid" : "",
    props.sm ? "container-sm" : "",
    props.md ? "container-md" : "",
    props.lg ? "container-lg" : "",
    props.xl ? "container-xl" : "",
    props.xxl ? "container-xxl" : "",
    !props.fluid &&
    !props.sm &&
    !props.md &&
    !props.lg &&
    !props.xl &&
    !props.xxl
      ? "container"
      : "",
  ];
});
</script>
