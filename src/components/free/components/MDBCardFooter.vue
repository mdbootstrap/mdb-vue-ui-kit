<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBCardFooter",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  bg: String,
  border: String,
});

const className = computed(() => {
  return [
    "card-footer",
    props.border && `border-${props.border}`,
    props.bg && `bg-${props.bg}`,
  ];
});
</script>
