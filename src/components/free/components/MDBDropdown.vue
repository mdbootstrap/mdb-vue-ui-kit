<template>
  <component :is="props.tag" :class="className" v-bind="attrs" ref="root">
    <slot />
  </component>
</template>

<script>
import { computed, onMounted, provide, ref, watchEffect } from "vue";
import MDBUsePopper from "../../utils/MDBUsePopper.js";

export default {
  name: "MDBDropdown",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    btnGroup: {
      type: Boolean,
      default: false
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropend: {
      type: Boolean,
      default: false
    },
    dropstart: {
      type: Boolean,
      default: false
    },
    align: {
      type: [String, Array],
      default: "start"
    },
    updatePosition: {
      type: Boolean,
      default: true
    },
    offset: String,
    target: String
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        props.btnGroup ? "btn-group" : "dropdown",
        props.dropup && "dropup",
        props.dropend && "dropend",
        props.dropstart && "dropstart"
      ];
    });

    const { setInitial, isActive, close, open } = MDBUsePopper();
    const root = ref("root");
    const triggerEl = ref(null);
    const popperEl = ref(null);

    onMounted(() => {
      triggerEl.value = props.target
        ? document.querySelector(props.target)
        : root.value.querySelector("[data-trigger]");
      popperEl.value = root.value.querySelector("[data-popper]");

      let position = props.dropup
        ? "top"
        : props.dropend
        ? "right"
        : props.dropstart
        ? "left"
        : "bottom";

      let align = props.align;

      if (props.align !== "start") {
        if (typeof props.align !== "string") {
          props.align.forEach(align => {
            popperEl.value.classList.add(`dropdown-menu-${align}`);
          });
        } else {
          popperEl.value.classList.add(`dropdown-menu-${props.align}`);
        }
      }

      const placement = `${position}-${align}`;

      const config = {
        placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.offset || "0"
          }
        }
      };

      setInitial(triggerEl.value, popperEl.value, config);
    });

    // style fix for .dropup .dropdown-menu bottom=100% corrupting popper
    watchEffect(() => {
      if (isActive.value && props.dropup) {
        const dropdowns = document.querySelectorAll(".dropup .dropdown-menu");
        dropdowns.forEach(dropdown => {
          dropdown.style.bottom = "auto";
        });
      }
    });

    const setValue = value => {
      if (value) {
        open();
      } else {
        close();
      }
    };

    provide("isActive", isActive);
    provide("setValue", setValue);
    provide("closePopper", close);

    return {
      className,
      root,
      attrs,
      props
    };
  }
};
</script>
