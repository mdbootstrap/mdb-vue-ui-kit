<template>
  <component :is="isLink" class="navbar-brand">
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
    };
  },
};
</script>
