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
        width: ((value - min) / (max - min)) * 100 + '%'
      }
    ]"
    v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBProgressBar",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    bg: String,
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "progress-bar",
        props.bg && `bg-${props.bg}`,
        props.striped && "progress-bar-striped",
        props.animated && "progress-bar-animated"
      ];
    });

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
