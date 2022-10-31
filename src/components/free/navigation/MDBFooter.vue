<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBFooter",
};
</script>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "footer",
  },
  bg: {
    type: String,
    default: "light",
  },
  text: [String, Array] as PropType<string | (string | string)[]>,
});

const className = computed(() => {
  const text = props.text;

  return [
    props.bg && props.bg !== "none" && `bg-${props.bg}`,
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
