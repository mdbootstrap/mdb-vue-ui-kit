<template v-slot:default="slotProps">
  <component
    :is="tag"
    type="button"
    :class="className"
    :aria-expanded="expanded"
    aria-haspopup="true"
    v-bind="attrs"
    @click="toggle"
    v-mdb-click-outside="handleClickOutside"
    data-trigger
  >
    <slot v-if="!split"></slot>
    <span v-else class="visually-hidden">Toggle Dropdown</span>
  </component>
</template>

<script>
import { computed, inject, ref, watchEffect } from "vue";
import MDBBtn from "./MDBBtn.vue";
import mdbClickOutside from "@/directives/free/mdbClickOutside.js";

export default {
  name: "MDBDropdownToggle",
  components: { MDBBtn },
  inheritAttrs: false,
  emits: ["toggle-dropdown"],
  props: {
    ...MDBBtn.props,
    tag: {
      type: String,
      default: "button",
    },
    href: [String, null],
    split: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    mdbClickOutside,
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        btnClass.value,
        "dropdown-toggle",
        props.split && "dropdown-toggle-split",
        props.size && `btn-${props.size}`,
        props.outline && `btn-outline-${props.outline}`,
      ];
    });

    const btnClass = computed(() => {
      if (props.tag !== "button") return;
      const color =
        props.color && !props.outline
          ? `btn-${props.color}`
          : props.outline
          ? ""
          : "btn-primary";
      return `btn ${color}`;
    });

    const expanded = ref(false);
    const toggle = () => {
      expanded.value = !expanded.value;
    };

    const isPopperActive = inject("isPopperActive", false);
    watchEffect(() => {
      expanded.value = isPopperActive.value;
    });

    const handleEscAndOutsideClick = inject("handleEscAndOutsideClick", false);

    const handleClickOutside = (e) => {
      if (isPopperActive && !e.target.closest(".dropdown-menu")) {
        handleEscAndOutsideClick();
      }
    };

    return {
      className,
      expanded,
      toggle,
      handleClickOutside,
      attrs,
      props,
    };
  },
};
</script>
