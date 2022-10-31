<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBModalTitle",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "h5",
  },
  bold: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return ["modal-title", props.bold && "font-weight-bold"];
});
</script>
