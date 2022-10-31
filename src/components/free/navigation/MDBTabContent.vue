<template>
  <keep-alive>
    <div v-if="isVertical" :class="columnClassName">
      <component :is="tag" :class="className" v-bind="$attrs">
        <slot />
      </component>
    </div>
    <component :is="tag" v-else :class="className" v-bind="$attrs">
      <slot />
    </component>
  </keep-alive>
</template>

<script lang="ts">
export default {
  name: "MDBTabContent",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  col: {
    type: String,
    default: "9",
  },
  contentClasses: String,
});

const isVertical = inject<Ref<boolean> | boolean>("isVertical", false);
const className = computed(() => {
  return ["tab-content", props.contentClasses && props.contentClasses];
});
const columnClassName = computed(() => {
  return [`col-${props.col}`];
});
</script>
