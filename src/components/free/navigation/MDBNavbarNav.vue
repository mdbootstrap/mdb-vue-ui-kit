<template>
  <component
    :is="props.tag"
    v-if="!collapseId"
    :class="className"
    v-bind="attrs"
    ><slot></slot
  ></component>
  <div v-if="collapseId" :class="collapseClass" :id="collapseId">
    <component :is="props.tag" :class="className" v-bind="attrs">
      <slot></slot>
    </component>
    <slot name="contentRight"></slot>
  </div>
</template>

<script>
import { computed, inject, ref } from "vue";

export default {
  inheritAttrs: true,
  name: "MDBNavbarNav",
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
    collapse: {
      type: [Boolean, String],
      default: false
    },
    class: {
      type: String
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "navbar-nav",
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

    const injectIsCollapsed = inject("isCollapsed", true);
    const isCollapsed = ref(injectIsCollapsed);

    const collapseClass = computed(() => {
      return ["collapse", "navbar-collapse", isCollapsed.value ? "" : "show"];
    });

    const collapseId = computed(() => {
      if (!props.collapse) {
        return false;
      }
      return props.collapse !== true
        ? props.collapse
        : "navbarSupportedContent";
    });

    return {
      props,
      className,
      collapseId,
      collapseClass,
      attrs
    };
  }
};
</script>
