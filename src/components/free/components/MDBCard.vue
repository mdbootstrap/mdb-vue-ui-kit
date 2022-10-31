<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBCard",
};
</script>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  border: String,
  bg: String,
  text: [String, Array] as PropType<string | string[]>,
  shadow: String,
});

const className = computed(() => {
  const text = props.text;

  return [
    "card",
    props.border && `border border-${props.border}`,
    props.bg && `bg-${props.bg}`,
    props.shadow && `shadow-${props.shadow}`,
    props.text && spreadProps(text),
  ];
});

const spreadProps = (props: string | string[]) => {
  if (typeof props === "string") {
    return `text-${props}`;
  }
  return props.map((prop) => `text-${prop}`.trim()).join(" ");
};
</script>
