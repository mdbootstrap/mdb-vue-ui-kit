<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBCol",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  col: String,
  sm: String,
  md: String,
  lg: String,
  xl: String,
  offset: String,
  offsetSm: String,
  offsetMd: String,
  offsetLg: String,
  offsetXl: String,
  auto: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    props.col ? "col-" + props.col : "",
    props.sm ? "col-sm-" + props.sm : "",
    props.md ? "col-md-" + props.md : "",
    props.lg ? "col-lg-" + props.lg : "",
    props.xl ? "col-xl-" + props.xl : "",
    !props.col && !props.sm && !props.md && !props.lg && !props.xl ? "col" : "",
    props.offset ? "offset-" + props.offset : "",
    props.offsetSm ? "offset-sm-" + props.offsetSm : "",
    props.offsetMd ? "offset-md-" + props.offsetMd : "",
    props.offsetLg ? "offset-lg-" + props.offsetLg : "",
    props.offsetXl ? "offset-xl-" + props.offsetXl : "",
    props.auto ? "col-auto" : "",
  ];
});
</script>
