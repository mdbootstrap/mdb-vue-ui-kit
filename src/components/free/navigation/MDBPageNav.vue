<template>
  <component :is="tag" :class="className">
    <a
      v-if="prev"
      class="page-link"
      :href="href"
      :tabindex="disabledTabindex"
      :aria-disabled="disabled"
      aria-label="Previous"
    >
      <span aria-hidden="true">{{ prevValue }}</span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      v-if="next"
      class="page-link"
      :href="href"
      :tabindex="disabledTabindex"
      :aria-disabled="disabled"
      aria-label="Next"
    >
      <span aria-hidden="true">{{ nextValue }}</span>
      <span class="sr-only">Next</span>
    </a>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBPageNav",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "li",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "#",
  },
  prev: {
    type: Boolean,
    default: false,
  },
  next: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => ["page-item", props.disabled && "disabled"]);
const prevValue = computed(() => (props.icon ? "«" : "Previous"));
const nextValue = computed(() => (props.icon ? "»" : "Next"));
const disabledTabindex = computed(() => (props.disabled ? "-1" : "false"));
</script>
