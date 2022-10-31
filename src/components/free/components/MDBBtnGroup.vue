<template>
  <component :is="tag" :class="className" :role="role">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBBtnGroup",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: String,
  vertical: Boolean,
  role: {
    type: String,
    default: "group",
  },
  tag: {
    type: String,
    default: "div",
  },
});

const className = computed(() => {
  return [
    props.size && `btn-group-${props.size}`,
    props.vertical ? "btn-group-vertical" : "btn-group",
  ];
});
</script>
