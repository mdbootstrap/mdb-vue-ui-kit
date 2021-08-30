<template>
  <component :class="navClass" :is="props.tag" role="navigation" v-bind="attrs">
    <div v-if="props.container" :class="containerClass">
      <slot></slot>
    </div>
    <slot v-if="!container"></slot>
  </component>
</template>

<script>
import { computed, provide, ref, onMounted } from "vue";

export default {
  name: "MDBNavbar",
  props: {
    tag: {
      type: String,
      default: "nav"
    },
    bg: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    double: {
      type: Boolean,
      default: false
    },
    expand: {
      type: String
    },
    position: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    scrollingOffset: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: false
    },
    container: {
      type: [Boolean, String],
      default: false
    },
    classContainer: {
      type: String
    }
  },
  setup(props, { attrs, slots }) {
    const navClass = computed(() => {
      return [
        "navbar",
        props.dark && "navbar-dark",
        props.light && "navbar-light",
        props.bg && !props.transparent ? `bg-${props.bg}` : "",
        props.expand
          ? props.expand === "small" || props.expand === "sm"
            ? "navbar-expand-sm"
            : props.expand === "medium" || props.expand === "md"
            ? "navbar-expand-md"
            : props.expand === "large" || props.expand === "lg"
            ? "navbar-expand-lg"
            : "navbar-expand-xl"
          : "",
        props.position === "top"
          ? "fixed-top"
          : props.position === "bottom"
          ? "fixed-bottom"
          : props.position === "sticky"
          ? "sticky-top"
          : "",
        props.scrolling && "scrolling-navbar",
        props.double && "double-nav",
        props.center && "justify-content-center"
      ];
    });

    const containerClass = computed(() => {
      if (!props.container) {
        return false;
      }
      return [
        props.container !== true
          ? `container-${props.container}`
          : "container-fluid",
        props.classContainer && props.classContainer
      ];
    });

    const isCollapsed = ref(true);
    provide("isCollapsed", isCollapsed);

    const handleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    const checkSlots = ref([]);
    // check if Navbar has NavbarNav child element
    const hasNav = checkSlots.value.filter(
      slot => slot.type.name === "MDBNavbarNav"
    );

    provide("toggleCollapse", hasNav.length ? handleCollapse : false);

    const handleScroll = () => {
      if (window.pageYOffset > props.scrollingOffset) {
        isCollapsed.value = true;
      } else {
        isCollapsed.value = false;
      }
    };

    onMounted(() => {
      // needed in case slots.default cant be reached on tests
      if (slots.default) {
        checkSlots.value = slots.default() || [];
      }

      if (props.scrolling) {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return {
      navClass,
      containerClass,
      props,
      attrs
    };
  }
};
</script>
