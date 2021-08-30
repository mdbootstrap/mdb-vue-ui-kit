<template>
  <component
    :is="props.tag"
    :class="className"
    role="progressbar"
    :aria-valuenow="props.value"
    :aria-valuemin="props.min"
    :aria-valuemax="props.max"
    :style="[
      {
        width: ((props.value - props.min) / (props.max - props.min)) * 100 + '%'
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
