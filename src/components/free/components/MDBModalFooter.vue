<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBModalFooter",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const className = computed(() => ["modal-footer"]);
</script>
