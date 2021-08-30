<template>
  <transition v-if="!shouldTeleport">
    <component
      v-if="isMounted"
      :is="tag"
      :class="className"
      :style="staticStyle"
      v-bind="attrs"
      data-popper
      ref="root"
    >
      <slot />
    </component>
  </transition>
  <teleport v-else :to="externalTarget">
    <transition>
      <component
        v-if="isMounted"
        :is="tag"
        :class="className"
        :style="staticStyle"
        v-bind="attrs"
        :data-popper="externalTarget"
        ref="root"
      >
        <slot />
      </component>
    </transition>
  </teleport>
</template>

<script>
import { computed, inject, onMounted, ref, watch } from "vue";
import { on, off } from "../../utils/MDBEventHandlers.js";

export default {
  name: "MDBDropdownMenu",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    fadeIn: {
      type: String,
      default: "fade-in"
    },
    fadeOut: {
      type: String,
      default: "fade-out"
    },
    animation: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "dropdown-menu",
        menuAlignClasses.value,
        fadeClass.value,
        showClass.value && "show",
        props.dark && "dropdown-menu-dark"
      ];
    });
    const menuAlignClasses = inject("menuAlignClasses", "dropdown-menu-start");
    const root = ref("root");
    const fadeClass = ref("");
    const showClass = ref(false);

    const staticStyle = computed(() => {
      return props.static ? { display: "block", position: "static" } : false;
    });

    const handleAnimation = () => {
      if (!props.animation) {
        return;
      }

      setTimeout(() => {
        fadeClass.value = false;
      }, 300);
    };

    // ------------------- isActive -------------------
    // controls if DropdownMenu is presented into DOM by isMounted value
    // controls close class and animation

    const setMenuMountedState = inject("setMenuMountedState", () => false);
    const isActive = inject("isActive", false);
    watch(
      () => isActive.value,
      cur => {
        if (cur) {
          setTimeout(() => {
            setMenuMountedState(true, root.value);
          }, 100);
        } else if (!cur && isPopperActive) {
          setInactive();

          setTimeout(() => {
            setMenuMountedState(false);
          }, 300);
        }
      }
    );

    const setInactive = () => {
      // keyboard navigation
      off(document, "keydown", handleDown);
      count.value = 0;

      // close animation
      fadeClass.value = props.animation && `animation ${props.fadeOut}`;
      showClass.value = false;

      handleAnimation();
    };

    const isMounted = computed(() => {
      if (props.static) {
        // standalone DropdownMenu component that needs to be visible always
        return true;
      } else if (isActive.value || (!isActive.value && isPopperActive.value)) {
        return true;
      } else if (!isActive.value && !isPopperActive.value) {
        setTimeout(() => {
          return false;
        }, 300);
      }
    });

    const externalTarget = inject("externalTarget", false);
    const shouldTeleport = ref(false);

    onMounted(() => {
      if (externalTarget) {
        const target = document.body.querySelector(externalTarget);
        if (target) {
          shouldTeleport.value = true;
        }
      }
    });

    // ------------------- isPopperActive -------------------
    // controls if DropdownMenu is visible for user or not
    // controls show class and animation
    const isPopperActive = inject("isPopperActive", false);

    const setActive = () => {
      on(document, "keydown", handleDown);
      fadeClass.value = props.animation && `animation ${props.fadeIn}`;

      handleAnimation();
    };

    watch(
      () => isPopperActive.value,
      (cur, prev) => {
        if ((!prev && cur === true) || prev === false) {
          items.value = root.value.querySelectorAll(".dropdown-item");

          showClass.value = true;
          setActive();
        }
      }
    );

    // ------------------- Utilities for keyboard navigation -------------------

    const count = ref(0);
    const items = ref(null);

    const handleEscAndOutsideClick = inject(
      "handleEscAndOutsideClick",
      () => false
    );

    const handleDown = e => {
      const key = e.key;
      if (key === "ArrowUp" || key === "ArrowDown") {
        e.preventDefault();
      }

      if (!isActive.value) {
        return;
      }

      items.value.forEach(item => {
        item.classList.remove("active");
      });

      switch (key) {
        case "Escape":
          handleEscAndOutsideClick();
          return;
        case "Enter":
          items.value[count.value - 1]?.click();
          // setInactive();

          return;
        case "ArrowUp":
          count.value--;

          if (count.value <= 0) {
            count.value = items.value.length;
          }
          break;
        case "ArrowDown":
          count.value++;
          if (count.value > items.value.length) {
            count.value = 1;
          }
          break;
        default:
          break;
      }

      items.value[count.value - 1]?.classList.add("active");
    };

    return {
      staticStyle,
      showClass,
      className,
      isMounted,
      shouldTeleport,
      externalTarget,
      root,
      attrs,
      props
    };
  }
};
</script>
