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
      @click.self="
        () => {
          if (staticBackdrop) {
            animateStaticBackdrop();
          } else {
            closeModal();
          }
        }
      "
    >
      <div :class="dialogClass" role="document" ref="dialog">
        <div class="modal-content" :style="computedContentStyle">
          <slot />
        </div>
      </div>
    </component>
  </transition>
</template>

<script setup lang="ts">
import useMDBModal from "../../../composables/free/useMDBModal";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  modelValue: Boolean,
  size: {
    type: String,
    validator: (value: string) =>
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
  keyboard: {
    type: Boolean,
    default: true,
  },
  focus: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits([
  "show",
  "shown",
  "hide",
  "hidden",
  "update:modelValue",
]);

const {
  wrapperClass,
  dialogClass,
  backdropStyle,
  backdropOverflowStyle,
  computedContentStyle,
  root,
  dialog,
  isActive,
  closeModal,
  animateStaticBackdrop,
  enter,
  afterEnter,
  beforeLeave,
  afterLeave,
} = useMDBModal(props, emit);
</script>
