<template>
  <component
    :is="tag"
    :class="className"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :disabled="disabled ? true : null"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBListGroupItem",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "li",
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  action: {
    type: Boolean,
    default: false,
  },
  color: String,
});

const className = computed(() => {
  return [
    "list-group-item",
    props.active && "active",
    props.disabled && "disabled",
    props.action && "list-group-item-action",
    props.color && `list-group-item-${props.color}`,
  ];
});
</script>
