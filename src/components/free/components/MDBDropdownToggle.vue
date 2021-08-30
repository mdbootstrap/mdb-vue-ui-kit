<template v-slot:default="slotProps">
  <component
    :is="props.tag"
    type="button"
    :class="className"
    data-mdb-toggle="dropdown"
    :aria-expanded="expanded"
    aria-haspopup="true"
    v-bind="attrs"
    @click="toggle"
    v-click-outside="handleClickOutside"
    data-trigger
  >
    <slot v-if="!props.split"></slot>
    <span v-else class="visually-hidden">Toggle Dropdown</span>
  </component>
</template>

<script>
import { computed, inject, ref } from "vue";
import MDBBtn from "./MDBBtn.vue";
import mdbClickOutside from "@/directives/clickOutside.js";

export default {
  name: "MDBDropdownToggle",
  tag: {
    type: String,
    default: "button"
  },
  components: { MDBBtn },
  inheritAttrs: false,
  emits: ["toggle-dropdown"],
  props: {
    ...MDBBtn.props,
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
    "click-outside": mdbClickOutside
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

    const close = inject("closePopper", () => false);
    const handleClickOutside = () => {
      close();
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
