<template>
  <component
    :is="tag"
    :class="navTogglerClass"
    type="button"
    :aria-controls="target"
    :aria-expanded="isExpanded"
    aria-label="Toggle navigation"
    @click="handleClick"
    v-bind="attrs"
  >
    <MDBIcon :icon="togglerIcon" :size="togglerSize" :iconStyle="iconStyle" />
  </component>
</template>

<script>
import { computed, ref } from "vue";
import { MDBIcon } from "@/index.free.js";

export default {
  name: "MDBNavbarToggler",
  inheritAttrs: false,
  components: {
    MDBIcon
  },
  props: {
    tag: {
      type: String,
      default: "button"
    },
    target: {
      type: String,
      default: "#navbarSupportedContent"
    },
    togglerClass: {
      type: String
    },
    togglerIcon: {
      type: String,
      default: "bars"
    },
    togglerSize: {
      type: String,
      default: "1x"
    },
    iconStyle: {
      type: String,
      default: "fas"
    }
  },
  setup(props, { attrs }) {
    const navTogglerClass = computed(() => {
      return ["navbar-toggler", props.togglerClass];
    });

    const isExpanded = ref(false);

    const handleClick = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      navTogglerClass,
      handleClick,
      isExpanded,
      props,
      attrs
    };
  }
};
</script>
