<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBPagination",
  props: {
    tag: {
      type: String,
      default: "ul",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = computed(() => {
      return [
        "pagination",
        props.sm && "pagination-sm",
        props.lg && "pagination-lg",
        props.circle && "pagination-circle",
      ];
    });

    return {
      className,
      props,
    };
  },
};
</script>
