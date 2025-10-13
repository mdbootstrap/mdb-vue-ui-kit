<template>
  <component
    :is="tag"
    :class="className"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :style="progressBarStyle"
  >
    <div v-if="isCircular" :class="progressCircularLabelClass">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBProgressBar",
};
</script>

<script setup lang="ts">
import { computed, inject } from "vue";

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
  circularLabelClass: {
    type: String,
    default: "progress-label",
  },
});

const isCircular = inject<boolean>("isCircular", false);

const className = computed(() => {
  return [
    "progress-bar",
    props.bg && `bg-${props.bg}`,
    props.striped && "progress-bar-striped",
    props.animated && "progress-bar-animated",
  ];
});

const progressCircularLabelClass = computed(() => {
  return [props.circularLabelClass];
});

const progressBarStyle = computed(() => {
  if (isCircular) {
    return [
      {
        "--percentage": props.value,
      },
    ];
  }

  return [
    {
      width: ((props.value - props.min) / (props.max - props.min)) * 100 + "%",
    },
  ];
});
</script>
