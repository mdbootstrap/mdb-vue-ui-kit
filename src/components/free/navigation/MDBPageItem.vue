<template>
  <component :is="tag" :class="className">
    <a
      class="page-link"
      :href="href"
      :aria-label="labelValue"
      :aria-disabled="disabled"
      :tabindex="disabledTabindex"
    >
      <span v-if="icon" aria-hidden="true">
        <slot />
      </span>
      <span v-if="icon" class="sr-only">{{ labelValue }}</span>
      <slot v-else />
    </a>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBPageItem",
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
  href: String,
  icon: {
    type: Boolean,
    defaul: false,
  },
  label: {
    type: String,
  },
});

const className = computed(() => {
  return ["page-item", props.active && "active", props.disabled && "disabled"];
});
const labelValue = computed(() => {
  return props.icon && props.label ? props.label : props.href;
});
const disabledTabindex = computed(() => {
  return props.disabled ? "-1" : " false";
});
</script>
