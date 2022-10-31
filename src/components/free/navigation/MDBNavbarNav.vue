<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBNavbarNav",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "ul",
  },
  right: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  justifyAround: {
    type: Boolean,
    default: false,
  },
  class: String,
  nav: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    props.nav ? "nav" : "navbar-nav",
    props.right
      ? "ms-auto"
      : props.center
      ? "justify-content-center w-100"
      : props.vertical
      ? "flex-column"
      : props.justifyAround
      ? "justify-content-around w-100"
      : "me-auto",
    props.class && `${props.class}`,
  ];
});
</script>
