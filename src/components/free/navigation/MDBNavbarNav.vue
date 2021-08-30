<template>
  <component :is="tag" :class="className" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";
import MDBCollapse from "../components/MDBCollapse";

export default {
  inheritAttrs: true,
  name: "MDBNavbarNav",
  components: { MDBCollapse },
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    justifyAround: {
      type: Boolean,
      default: false
    },
    class: {
      type: String
    },
    nav: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        props.nav ? "nav" : "navbar-nav",
        props.right
          ? "ms-auto"
          : props.center
          ? "justify-content-center w-100"
          : props.vertical
          ? "flex-column"
          : props.justifyAround
          ? "justify-content-around w-100"
          : "me-auto",
        props.class && `${props.class}`
      ];
    });

    return {
      props,
      className,
      attrs
    };
  }
};
</script>

<style lang="scss"></style>
