<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBListGroup",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  flush: {
    type: Boolean,
    default: false,
  },
  horizontal: {
    type: [Boolean, String],
    default: false,
  },
  numbered: Boolean,
  tag: {
    type: String,
    default: "ul",
  },
  light: Boolean,
  small: Boolean,
});
const className = computed(() => {
  return [
    "list-group",
    props.horizontal && horizontalClass.value,
    props.flush && "list-group-flush",
    props.numbered && "list-group-numbered",
    props.light && "list-group-light",
    props.small && "list-group-small",
  ];
});

const horizontalClass = computed(() => {
  if (!props.horizontal) {
    return;
  }
  return props.horizontal !== true
    ? `list-group-horizontal-${props.horizontal}`
    : "list-group-horizontal";
});
</script>
