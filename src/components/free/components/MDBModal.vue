<template>
  <transition
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <component
      ref="root"
      v-if="isActive"
      :is="tag"
      :class="wrapperClass"
      :style="[backdropStyle, backdropOverflowStyle]"
      :aria-hidden="!isActive"
      :aria-modal="isActive ? true : null"
      :aria-labelledby="labelledby"
      role="dialog"
      @click.self="closeModal"
      v-bind="attrs"
    >
      <div :class="dialogClass" role="document" ref="dialog">
        <div class="modal-content" :style="computedContentStyle">
          <slot></slot>
        </div>
      </div>
    </component>
  </transition>
</template>

<script>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watchEffect,
} from "vue";

import { on, off } from "../../utils/MDBEventHandlers";

export default {
  name: "MDBModal",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    modelValue: Boolean,
    size: {
      type: String,
      validator: (value) =>
        ["sm", "lg", "xl"].indexOf(value.toLowerCase()) > -1,
    },
    removeBackdrop: {
      type: Boolean,
      default: false,
    },
    staticBackdrop: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    bgSrc: {
      type: String,
      default: "",
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 400,
    },
    labelledby: String,
    fullscreen: {
      type: [Boolean, String],
      default: false,
    },
    animation: {
      type: Boolean,
      default: true,
    },
    dialogClasses: {
      type: String,
    },
    transform: String,
  },
  emits: ["show", "shown", "hide", "hidden", "update:modelValue"],
  setup(props, { attrs, emit }) {
    const root = ref("root");
    const dialog = ref("dialog");
    const dialogTransform = ref("");

    const isActive = ref(props.modelValue);

    const thisElement = ref(null);

    watchEffect(() => {
      isActive.value = props.modelValue;
      if (isActive.value) {
        emit("update:modelValue", true);
      }
    });

    const wrapperClass = computed(() => {
      return [
        "modal",
        props.animation && "fade",
        isActive.value && "show",
        props.staticBackdrop && "modal-static",
      ];
    });

    const dialogClass = computed(() => {
      return [
        "modal-dialog",
        props.size && "modal-" + props.size,
        props.centered && "modal-dialog-centered",
        props.scrollable && "modal-dialog-scrollable",
        props.fullscreen && fullscreenClass.value,
        props.dialogClasses,
      ];
    });

    const backdropStyle = computed(() => {
      return props.removeBackdrop
        ? false
        : { "background-color": `rgba(0,0,0, 0.5)` };
    });

    // shouldOverflow with backdropOverflowStyle prevents bottom modal create additional scrollbar on show
    const shouldOverflow = ref(
      props.transform === "translate(0,25%)" ? false : true
    );
    const backdropOverflowStyle = computed(() => {
      if (shouldOverflow.value) {
        return;
      }
      return "overflow: hidden";
    });

    const computedContentStyle = computed(() => {
      return props.bgSrc
        ? { "background-image": `url("${props.bgSrc}")` }
        : false;
    });

    const fullscreenClass = computed(() => {
      if (!props.fullscreen) {
        return false;
      }
      return [
        props.fullscreen !== true
          ? `modal-fullscreen-${props.fullscreen}`
          : "modal-fullscreen",
      ];
    });

    const closeModal = () => {
      if (props.staticBackdrop) {
        animateStaticModal(dialog.value);
        return;
      }

      emit("update:modelValue", false);
    };

    provide("closeModal", closeModal);

    const animateStaticModal = (el) => {
      el.style.transform = `scale(1.02)`;
      setTimeout(() => (el.style.transform = `scale(1.0)`), 300);
    };

    const handleEscKeyUp = (e) => {
      if (e.key === "Escape" && isActive.value) {
        closeModal();
      }
    };

    const isBodyOverflowing = ref(null);
    const scrollbarWidth = ref(0);

    // Bootstrap way to measure scrollbar width
    const getScrollbarWidth = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "modal-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      const scrollbarWidth =
        scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    const setScrollbar = () => {
      const rect = document.body.getBoundingClientRect();
      isBodyOverflowing.value =
        Math.round(rect.left + rect.right) < window.innerWidth;
      scrollbarWidth.value = isBodyOverflowing.value
        ? getScrollbarWidth().toFixed(2)
        : 0;
    };

    const enter = (el) => {
      shouldOverflow.value =
        props.transform === "translate(0,25%)" ? false : true;

      dialogTransform.value = props.transform || "translate(0, -25%)";

      el.childNodes[0].style.transform = dialogTransform.value;
      el.style.opacity = 0;
      el.style.display = "block";

      setScrollbar();
      document.body.style.paddingRight = `${scrollbarWidth.value}px`;
      el.style.paddingRight = `${scrollbarWidth.value}px`;
      document.body.classList.add("modal-open");

      emit("show", root.value);
    };
    const afterEnter = (el) => {
      el.childNodes[0].style.transform = "translate(0,0)";
      el.style.opacity = 1;

      setTimeout(() => {
        shouldOverflow.value = true;
        emit("shown", root.value);
      }, 400);
      thisElement.value = root.value;
    };
    const beforeLeave = (el) => {
      el.childNodes[0].style.transform = dialogTransform.value;
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.paddingRight = null;
        document.body.style.paddingRight = null;
        document.body.classList.remove("modal-open");
      }, 200);

      emit("hide", thisElement.value);
    };
    const afterLeave = () => {
      emit("hidden", thisElement.value);
      shouldOverflow.value = false;
    };

    onMounted(() => {
      on(window, "keyup", handleEscKeyUp);
    });

    onBeforeUnmount(() => {
      off(window, "keyup", handleEscKeyUp);
    });

    return {
      wrapperClass,
      dialogClass,
      backdropStyle,
      backdropOverflowStyle,
      computedContentStyle,
      root,
      dialog,
      isActive,
      closeModal,
      enter,
      afterEnter,
      beforeLeave,
      afterLeave,
      attrs,
      props,
    };
  },
};
</script>
