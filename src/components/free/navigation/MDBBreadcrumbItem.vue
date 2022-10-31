<template>
  <component :is="tag" :class="className" :aria-current="currentName">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBBreadcrumbItem",
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
  current: {
    type: String,
    default: "page",
  },
});

const className = computed(() => ["breadcrumb-item", props.active && "active"]);
const currentName = computed(() => props.active && props.current);
</script>
