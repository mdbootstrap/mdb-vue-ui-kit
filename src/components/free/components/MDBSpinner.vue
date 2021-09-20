<template>
  <component :is="tag" :class="className" role="status">
    <span class="visually-hidden">Loading...</span>
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBSpinner",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    grow: {
      type: Boolean,
      default: false,
    },
    color: String,
    size: String,
  },
  setup(props) {
    const className = computed(() => {
      return [
        props.grow ? "spinner-grow" : "spinner-border",
        props.color && `text-${props.color}`,
        `${
          props.size
            ? props.grow
              ? "spinner-grow-" + props.size
              : "spinner-border-" + props.size
            : ""
        }`,
      ];
    });

    return {
      className,
      props,
    };
  },
};
</script>
