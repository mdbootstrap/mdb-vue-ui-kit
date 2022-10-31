<template>
  <button :class="className" aria-label="Close"></button>
</template>

<script lang="ts">
export default {
  name: "MDBBtnClose",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return ["btn-close", props.white && `btn-close-white`];
});
</script>
