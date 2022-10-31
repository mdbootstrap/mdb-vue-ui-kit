<template>
  <component
    :is="tag"
    :class="className"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :style="[
      {
        width: ((value - min) / (max - min)) * 100 + '%',
      },
    ]"
    ><slot></slot
  ></component>
</template>

<script lang="ts">
export default {
  name: "MDBProgressBar",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  bg: String,
  striped: {
    type: Boolean,
    default: false,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
});

const className = computed(() => {
  return [
    "progress-bar",
    props.bg && `bg-${props.bg}`,
    props.striped && "progress-bar-striped",
    props.animated && "progress-bar-animated",
  ];
});
</script>
