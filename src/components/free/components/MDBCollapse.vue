<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    enter-active-class="collapsing"
    leave-active-class="collapsing"
    :duration="props.duration"
  >
    <component
      v-if="isActive"
      :is="props.tag"
      :class="className"
      :id="uid"
      v-bind="attrs"
    >
      <slot></slot>
    </component>
  </transition>
</template>

<script>
import { computed, ref, inject, watch, watchEffect } from "vue";
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const className = computed(() => {
      return [
        "collapse",
        props.collapseClass,
        navbarWrap.value ? "navbar-collapse" : "",
        showClass.value
      ];
    });

    const isActive = ref(props.modelValue);
    watchEffect(() => (isActive.value = props.modelValue));

    const navbarWrap = inject("isWrap", false);

    const showClass = computed(() => {
      if (!navbarWrap || (navbarWrap.value === "wrap" && isActive.value)) {
        return "show";
      } else if (navbarWrap === "nowrap" && isActive.value) {
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
      () => navbarWrap.value,
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
