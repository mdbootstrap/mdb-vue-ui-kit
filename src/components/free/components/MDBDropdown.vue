<template>
  <component :is="tag" :class="className" v-bind="attrs" ref="root">
    <slot />
  </component>
</template>

<script>
import { computed, onUnmounted, provide, ref, watchEffect, watch } from "vue";
import MDBPopper from "../../utils/MDBPopper.js";
import { on, off } from "../../utils/MDBEventHandlers.js";
import { handleBreakpoints } from "../../utils/MDBBreakpointHandler.js";

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
    target: String,
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const className = computed(() => {
      return [
        props.btnGroup ? "btn-group" : "dropdown",
        props.dropup && "dropup",
        props.dropend && "dropend",
        props.dropstart && "dropstart"
      ];
    });

    const {
      setPopper,
      isPopperActive,
      closePopper,
      openPopper,
      updatePopper
    } = MDBPopper();

    const root = ref("root");
    const triggerEl = ref(null);
    const popperEl = ref(null);
    const windowWidth = ref(window.innerWidth);

    const menuAlignClasses = ref("");
    provide("menuAlignClasses", menuAlignClasses);

    provide("closePopper", closePopper);

    // ------------------- isActive -------------------
    // controlled by modelValue property, triggers DropdownMenu visibilty
    // by toggling its v-if value on or off
    const isActive = ref(props.modelValue);

    watchEffect(() => (isActive.value = props.modelValue));
    provide("isActive", isActive);

    // ------------------- isMenuMounted -------------------
    // controls if DropdownMenu has been mounted into DOM and its element
    // can be targeted by the Popper setup function
    const isMenuMounted = ref(false);
    const setMenuMountedState = boolean => {
      isMenuMounted.value = boolean;
    };
    provide("setMenuMountedState", setMenuMountedState);

    const handleMenuMountedState = mountedValue => {
      if (mountedValue) {
        popperSetup();

        openPopper();
      } else {
        closePopper();
      }
    };

    watch(
      () => isMenuMounted.value,
      cur => handleMenuMountedState(cur),
      { immediate: true }
    );

    // ------------------- isPopperActive -------------------
    // controls if Popper is mounted into DOM
    // also Poppers visibility triggers DropdownMenu open/close animation
    // with adding/removing 'show' class

    // style fix for .dropup .dropdown-menu
    // original style 'bottom=100%' corrupts popper position
    watchEffect(() => {
      if (isPopperActive.value && props.dropup) {
        const dropdowns = document.querySelectorAll(".dropup .dropdown-menu");
        dropdowns.forEach(dropdown => {
          dropdown.style.bottom = "auto";
        });
      }
    });

    provide("isPopperActive", isPopperActive);

    // ------------------- handleEscAndOutsideClick -------------------
    // mimics toggling modelValue when user click outside the toggle button
    // or close dropdown with escape button
    const handleEscAndOutsideClick = () => {
      emit("update:modelValue", false);
    };

    provide("handleEscAndOutsideClick", handleEscAndOutsideClick);

    // ------------------- Utilites and setups -------------------
    const popperPosition = props.dropup
      ? "top"
      : props.dropend
      ? "right"
      : props.dropstart
      ? "left"
      : "bottom";

    const popperSetup = () => {
      triggerEl.value = props.target
        ? document.querySelector(props.target)
        : root.value.querySelector("[data-trigger]");
      popperEl.value = root.value.querySelector("[data-popper]");

      if (typeof props.align === "string") {
        menuAlignClasses.value = `dropdown-menu-${props.align}`;
      } else {
        menuAlignClasses.value = props.align.map(prop =>
          `dropdown-menu-${prop}`.trim()
        );
      }

      let align = props.align;
      if (
        typeof props.align !== "string" ||
        (props.align !== "start" && props.align !== "end")
      ) {
        align = getBreakpointValue();
        on(window, "resize", listenToResize);
      }

      const placement = `${popperPosition}-${align}`;

      const config = {
        placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.offset || "0"
          }
        }
      };

      setPopper(triggerEl.value, popperEl.value, config);
    };

    const getBreakpointValue = () => {
      windowWidth.value = window.innerWidth;

      let propsValues = props.align;
      if (typeof props.align === "string") {
        propsValues = ["start", props.align];
      }

      const activeBrakpointValue = handleBreakpoints(
        windowWidth.value,
        propsValues
      );

      if (!activeBrakpointValue) {
        return;
      }

      return activeBrakpointValue.includes("start") ? "start" : "end";
    };

    const listenToResize = () => {
      const align = getBreakpointValue();
      updatePopper("placement", `${popperPosition}-${align}`);
    };

    onUnmounted(() => {
      off(window, "resize", listenToResize);
    });

    return {
      className,
      root,
      attrs,
      props
    };
  }
};
</script>
