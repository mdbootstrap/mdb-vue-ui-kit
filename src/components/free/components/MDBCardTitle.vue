<template>
  <component :is="tagName" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBCardTitle",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "h5",
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
});

const tagName = computed(() => {
  if (!props.subtitle) {
    return props.tag;
  }
  return props.tag !== "h5" ? props.tag : "h6";
});

const className = computed(() => {
  return [props.subtitle ? "card-subtitle" : "card-title"];
});
</script>
