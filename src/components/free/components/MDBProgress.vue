<template>
  <component :is="tag" :class="className" :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBProgress",
};
</script>

<script setup lang="ts">
import { computed, provide } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  height: Number,
  circular: Boolean,
});

const className = computed(() => [
  "progress",
  props.circular && "progress-circular",
]);

const style = computed(() => {
  return { height: props.height + "px" };
});

provide("isCircular", props.circular);
</script>
