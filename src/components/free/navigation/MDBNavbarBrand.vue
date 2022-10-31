<template>
  <component :is="isLink" class="navbar-brand">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBNavbarBrand",
};
</script>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});
const attrs = useAttrs();
const isLink = computed(() => (attrs.href ? "a" : props.tag));
</script>
