<template>
  <transition>
    <component :is="props.tag" :class="className" v-bind="attrs" data-popper>
      <slot />
    </component>
  </transition>
</template>

<script>
import { computed, inject, onMounted, ref, watch, watchEffect } from "vue";

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
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const className = computed(() => {
      return [
        "dropdown-menu",
        isActive.value && "show",
        fadeClass.value,
        props.dark && "dropdown-menu-dark"
      ];
    });

    const isActive = ref(props.modelValue);
    const active = inject("isActive", false);
    const setValue = inject("setValue", () => false);

    onMounted(() => {
      if (!props.modelValue) {
        isActive.value = active.value;
      }
    });

    const fadeClass = ref("");

    const handleActiveChange = (cur, prev) => {
      if ((!prev && cur === true) || prev === false) {
        setValue(true);
        fadeClass.value = props.animation && `animation ${props.fadeIn}`;
      } else if (prev === true) {
        setValue(false);
        fadeClass.value = props.animation && `animation ${props.fadeOut}`;
      }

      emit("update:modelValue", isActive.value);

      if (!props.animation) {
        return;
      }

      setTimeout(() => {
        fadeClass.value = false;
      }, 300);
    };

    watch(
      () => isActive.value,
      (cur, prev) => handleActiveChange(cur, prev),
      { immediate: true }
    );

    // watcher specially for mdbClickOutside - isActive.value should be provide
    watch(
      () => active.value,
      (cur, prev) => {
        if (prev === true && isActive.value === true && cur === false) {
          isActive.value = false;
        }
      }
    );

    watchEffect(() => (isActive.value = props.modelValue));

    return {
      className,
      isActive,
      attrs,
      props
    };
  }
};
</script>
