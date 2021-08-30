<template>
  <component :is="tag" :class="className" v-bind="attrs">
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
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["modal-body"];
    });

    return {
      className,
      attrs,
      props,
    };
  },
};
</script>
