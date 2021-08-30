<template>
  <component :is="tag" :class="className" v-bind="attrs" :role="role">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBtnGroup",
  props: {
    size: String,
    vertical: Boolean,
    role: {
      type: String,
      default: "group",
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        props.size && `btn-group-${props.size}`,
        props.vertical ? "btn-group-vertical" : "btn-group",
      ];
    });

    return {
      className,
      attrs,
      props,
    };
  },
};
</script>
