<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBModalBody",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["modal-body"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
