<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script lang="ts">
export default {
  name: "MDBCardGroup",
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

const className = computed(() => ["card-group"]);
</script>
