<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBRow",
};
</script>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  start: {
    type: Boolean,
    default: false,
  },
  end: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  between: {
    type: Boolean,
    default: false,
  },
  around: {
    type: Boolean,
    default: false,
  },
  cols: [String, Array] as PropType<string | (string | number)[]>,
});

const className = computed(() => {
  const columns = props.cols;

  return [
    "row",
    props.cols ? `${spreadProps(columns)}` : "",
    props.start && "justify-content-start",
    props.end && "justify-content-end",
    props.center && "justify-content-center",
    props.between && "justify-content-between",
    props.around && "justify-content-around",
  ];
});

const spreadProps = (props: string | (string | number)[]) => {
  if (typeof props === "string") {
    return `row-cols-${props}`;
  }
  return props.map((prop) => `row-cols-${prop}`.trim()).join(" ");
};
</script>
