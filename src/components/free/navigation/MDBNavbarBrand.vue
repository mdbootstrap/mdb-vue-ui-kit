<template>
  <component :is="isLink" class="navbar-brand" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBNavbarBrand",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props, { attrs }) {
    const isLink = computed(() => {
      return attrs.href ? "a" : props.tag;
    });

    return {
      isLink,
      props,
      attrs,
    };
  },
};
</script>
