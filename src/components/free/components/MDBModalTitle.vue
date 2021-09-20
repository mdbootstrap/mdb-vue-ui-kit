<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBModalTitle",
  props: {
    tag: {
      type: String,
      default: "h5",
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["modal-title", props.bold && "font-weight-bold"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
