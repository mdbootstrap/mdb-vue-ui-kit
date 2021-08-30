<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    enter-active-class="collapsing"
    leave-active-class="collapsing show"
    :duration="duration"
  >
    <component
      v-show="isActive"
      :is="tag"
      :class="className"
      :id="uid"
      v-bind="attrs"
      ref="collapse"
    >
      <slot></slot>
    </component>
  </transition>
</template>

<script>
import {
  computed,
  ref,
  inject,
  watch,
  watchEffect,
  onMounted,
  provide,
  onUnmounted,
} from "vue";
import { getUID } from "../../utils/getUID";
import { on, off } from "@/components/utils/MDBEventHandlers";

export default {
  name: "MDBCollapse",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    modelValue: Boolean,
    id: String,
    collapseClass: String,
    duration: {
      type: Number,
      default: 300,
    },
    sidenav: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const collapse = ref(null);

    const className = computed(() => {
      return [
        collapseClass.value,
        props.collapseClass,
        navbarFlexWrapValue.value ? "navbar-collapse" : "",
        showClass.value,
      ];
    });

    const collapseClass = computed(() => {
      return props.sidenav
        ? "sidenav-collapse"
        : isActive.value
        ? "collapse"
        : null;
    });

    const accordionState = inject("accordionState", null);
    const incrementAccordionItemsCount = inject(
      "incrementAccordionItemsCount",
      false
    );
    const setAccordionActiveItem = inject("setAccordionActiveItem", false);
    const index = ref(null);

    const manageAccordion = () => {
      if (index.value !== null && isActive.value) {
        setAccordionActiveItem(index.value);
      }
    };

    watchEffect(
      () => {
        if (accordionState) {
          if (accordionState.active !== index.value) {
            emit("update:modelValue", false);
          }
        }
      },
      { flush: "post" }
    );

    onMounted(() => {
      if (isActive.value) {
        collapse.value.style.height = collapse.value.scrollHeight + "px";
      }

      if (accordionState) {
        index.value = incrementAccordionItemsCount();

        if (isActive.value) {
          setAccordionActiveItem(index.value);
        }
      }
    });

    const isActive = ref(props.modelValue);
    watchEffect(() => {
      isActive.value = props.modelValue;
      if (accordionState) {
        manageAccordion();
      }
    });

    const openCollapse = () => {
      emit("update:modelValue", true);
    };

    provide("openCollapse", openCollapse);

    const navbarFlexWrapValue = inject("navbarFlexWrapValue", false);

    const showClass = computed(() => {
      if (
        !navbarFlexWrapValue ||
        (navbarFlexWrapValue.value === "wrap" && isActive.value)
      ) {
        return "show";
      } else if (navbarFlexWrapValue === "nowrap" && isActive.value) {
        return false;
      }

      return false;
    });

    const checkWrapCollapseValue = (cur, prev) => {
      if (prev === "null" && props.modelValue) {
        // open on first render when collapsed props
        isActive.value = true;
      } else if (prev === "null" && !props.modelValue) {
        // close on first render when no collapsed props
        isActive.value = false;
      } else if (prev === "nowrap") {
        // always close when resizing down from full navbar
        isActive.value = false;
      }
    };

    watch(
      () => navbarFlexWrapValue.value,
      (cur, prev) => {
        if (cur === "nowrap") {
          isActive.value = true;
        } else if (cur === "wrap") {
          checkWrapCollapseValue(cur, prev);
        }
        emit("update:modelValue", isActive.value);
      },
      { immediate: true }
    );

    const uid = computed(() => {
      return props.id ? props.id : getUID("collapsibleContent-");
    });

    const beforeEnter = (el) => {
      el.style.height = "0";
    };
    const enter = (el) => {
      el.style.height = `${getContentHeight()}px`;
    };

    const afterEnter = (el) => {
      if (!el.classList.contains("show")) {
        el.classList.add("show");
      }
    };

    const beforeLeave = (el) => {
      if (!el.style.height) {
        el.style.height = `${el.offsetHeight}px`;
      }
    };
    const leave = (el) => {
      el.style.height = "0";
    };

    const afterLeave = (el) => {
      el.classList.add("collapse");
    };

    const previousWindowWidth = ref(null);
    const isThrottled = ref(false);

    const getContentHeight = () => {
      const contentNodes = [
        ...document.getElementById(uid.value).childNodes,
      ].filter((el) => el.textContent.trim() != "");
      return contentNodes.reduce((acc, cur) => {
        return acc + nodeOuterHeight(cur);
      }, 0);
    };

    const nodeOuterHeight = (node) => {
      const height = node.offsetHeight;

      if (!height) {
        // if there is no height it means this node is an inline node without any tag, eg: text node
        if (document.createRange) {
          const range = document.createRange();
          range.selectNodeContents(node);
          if (range.getBoundingClientRect) {
            const rect = range.getBoundingClientRect();
            if (rect) {
              return rect.bottom - rect.top;
            }
          }
        }
        return;
      }

      const style = window.getComputedStyle(node);

      return ["top", "bottom"]
        .map((side) => parseInt(style[`margin-${side}`]))
        .reduce((accHeight, margin) => accHeight + margin, height);
    };

    const handleResize = () => {
      if (!isActive.value || isThrottled.value) return;

      isThrottled.value = true;

      const windowWidth = window.innerWidth;
      const contentHeight = getContentHeight();

      collapse.value.style.height = `${contentHeight}px`;

      previousWindowWidth.value = windowWidth;
      setTimeout(() => {
        isThrottled.value = false;
      }, 100);
    };

    onMounted(() => {
      previousWindowWidth.value = window.innerWidth;
      on(window, "resize", handleResize);
    });

    onUnmounted(() => {
      off(window, "resize", handleResize);
    });

    return {
      collapse,
      className,
      isActive,
      uid,
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave,
      attrs,
      props,
    };
  },
};
</script>
