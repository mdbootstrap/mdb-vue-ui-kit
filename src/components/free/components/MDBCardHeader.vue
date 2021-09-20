<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardHeader",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    bg: String,
    border: String,
  },
  setup(props) {
    const className = computed(() => {
      return [
        "card-header",
        props.border && `border-${props.border}`,
        props.bg && `bg-${props.bg}`,
      ];
    });

    return {
      className,
      props,
    };
  },
};
</script>
