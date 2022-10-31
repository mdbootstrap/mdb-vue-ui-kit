<template>
  <div v-if="isVertical" :class="columnClassName">
    <component :is="tag" :class="className">
      <slot />
    </component>
  </div>
  <component :is="tag" v-else :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBTabNav",
};
</script>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "ul",
  },
  pills: Boolean,
  justify: Boolean,
  fill: Boolean,
  tabsClasses: String,
  col: {
    type: String,
    default: "3",
  },
});

const isVertical = inject<Ref<boolean>>("isVertical");
const className = computed(() => {
  return [
    "nav",
    props.pills ? "nav-pills" : "nav-tabs",
    props.justify && "nav-justified",
    props.fill && "nav-fill",
    isVertical.value && "flex-column",
    props.tabsClasses && props.tabsClasses,
  ];
});
const columnClassName = computed(() => {
  return [`col-${props.col}`];
});
</script>
