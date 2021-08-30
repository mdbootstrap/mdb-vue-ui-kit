<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    enter-active-class="collapsing"
    leave-active-class="collapsing"
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
  provide
} from "vue";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBCollapse",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: Boolean,
    id: String,
    collapseClass: String,
    duration: {
      type: Number,
      default: 300
    },
    sidenav: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const className = computed(() => {
      return [
        props.sidenav ? "sidenav-collapse" : "collapse",
        props.collapseClass,
        navbarFlexWrapValue.value ? "navbar-collapse" : "",
        showClass.value
      ];
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
        return;
      }
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

    const collapse = ref("collapse");

    const uid = computed(() => {
      return props.id ? props.id : getUID("collapsibleContent-");
    });

    const beforeEnter = el => {
      el.style.height = "0";
    };
    const enter = el => {
      el.style.height = el.scrollHeight + "px";
    };
    const beforeLeave = el => {
      el.style.height = el.scrollHeight + "px";
    };
    const leave = el => {
      el.style.height = "0";
    };

    return {
      collapse,
      className,
      isActive,
      uid,
      beforeEnter,
      enter,
      beforeLeave,
      leave,
      attrs,
      props
    };
  }
};
</script>
