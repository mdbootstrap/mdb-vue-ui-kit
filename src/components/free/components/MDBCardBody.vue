<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBCardBody",
};
</script>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  text: {
    type: [String, Array] as PropType<string | string[]>,
  },
});

const className = computed(() => {
  const text = props.text;

  return ["card-body", props.text && spreadProps(text)];
});

const spreadProps = (props: string | string[]) => {
  if (typeof props === "string") {
    return `text-${props}`;
  }
  return props.map((prop) => `text-${prop}`.trim()).join(" ");
};
</script>
