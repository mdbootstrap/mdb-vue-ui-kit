<template>
  <component :is="tag" :class="className" v-bind="attrs">
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
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["modal-title", props.bold && "font-weight-bold"];
    });

    return {
      className,
      attrs,
      props,
    };
  },
};
</script>
