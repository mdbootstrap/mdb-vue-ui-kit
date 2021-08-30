<template v-slot:default="slotProps">
  <component
    :is="tag"
    type="button"
    :class="className"
    data-mdb-toggle="dropdown"
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
      default: "button"
    },
    color: {
      type: String,
      default: "primary"
    },
    href: [String, null],
    split: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    mdbClickOutside
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        btnClass.value,
        "dropdown-toggle",
        props.split && "dropdown-toggle-split",
        props.size && `btn-${props.size}`
      ];
    });

    const btnClass = computed(() => {
      if (props.tag === "button") {
        const color = props.color ? `btn-${props.color}` : "";
        return `btn ${color}`;
      }
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

    const handleClickOutside = e => {
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
      props
    };
  }
};
</script>
