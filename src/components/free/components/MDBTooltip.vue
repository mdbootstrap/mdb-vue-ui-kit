<template>
  <component
    :is="tag"
    ref="triggerEl"
    style="display: inline-block"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <slot name="reference" />
  </component>
  <transition name="fade">
    <div
      ref="popperEl"
      v-show="isActive"
      :class="{
        tooltip: true,
        show: showClass,
        'tooltip-inner': true
      }"
      :style="[widthStyle]"
    >
      <slot name="tip" />
      <div x-arrow class="tooltip_arrow" v-if="arrow"></div>
    </div>
  </transition>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue";
import MDBUsePopper from "../../utils/MDBUsePopper.js";

export default {
  name: "MDBTooltip",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    modelValue: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    reference: String,
    popover: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    offset: {
      type: String,
      default: "0, 5"
    },
    direction: {
      type: String,
      default: "top",
      validator: value =>
        ["top", "right", "bottom", "left"].indexOf(value.toLowerCase()) > -1
    },
    maxWidth: {
      type: Number,
      default: 276
    },
    arrow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs, emit }) {
    const { setInitial, isActive, open, close, destroy } = MDBUsePopper();
    const triggerEl = ref("triggerEl");
    const popperEl = ref("popperEl");

    const widthStyle = computed(
      () => `max-width: ${props.maxWidth}px!important`
    );

    onMounted(() => {
      triggerEl.value = props.reference
        ? document.querySelector(props.reference)
        : triggerEl.value;
      popperEl.value = props.popover
        ? document.querySelector(props.popover)
        : popperEl.value;

      const placement = props.direction;

      const config = {
        placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.arrow ? "0" : props.offset
          }
        },
        gpuAcceleration: false,
        ...props.options
      };

      setInitial(triggerEl.value, popperEl.value, config);
    });

    watchEffect(() => (props.modelValue ? open() : close()));

    const showClass = ref(0);

    const onMouseOver = () => {
      emit("update:modelValue", true);
      setTimeout(() => {
        showClass.value = true;
      }, 150);
    };
    const onMouseOut = () => {
      showClass.value = false;
      emit("update:modelValue", false);
    };

    onUnmounted(() => {
      destroy();
    });

    return {
      isActive,
      triggerEl,
      popperEl,
      widthStyle,
      onMouseOver,
      onMouseOut,
      showClass,
      attrs,
      props
    };
  }
};
</script>
