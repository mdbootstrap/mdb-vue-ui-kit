<template>
  <component
    :is="tag"
    :class="className"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :disabled="disabled ? true : null"
    v-mdb-ripple="props.ripple"
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
import vMdbRipple from "../../../directives/free/mdbRipple";

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
  noBorder: Boolean,
  spacing: {
    type: [Boolean, String],
    default: false,
  },
  ripple: {
    type: [Object, Boolean],
    default: false,
  },
});

const spacingClass = computed(() => {
  if (!props.spacing) {
    return;
  }
  return props.spacing !== true ? props.spacing : "px-3";
});

const className = computed(() => {
  return [
    "list-group-item",
    props.active && "active",
    props.disabled && "disabled",
    props.action && "list-group-item-action",
    props.color && `list-group-item-${props.color}`,
    props.noBorder && `border-0`,
    props.spacing && spacingClass.value,
  ];
});
</script>
