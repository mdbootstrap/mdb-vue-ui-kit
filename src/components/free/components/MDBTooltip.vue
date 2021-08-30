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
      v-if="isActive"
      :class="{
        tooltip: true,
        fade: true,
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
import { computed, nextTick, onUnmounted, ref, watchEffect } from "vue";
import MDBPopper from "../../utils/MDBPopper.js";

export default {
  name: "MDBTooltip",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    modelValue: Boolean,
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
    const {
      setPopper,
      isPopperActive,
      openPopper,
      closePopper,
      destroyPopper
    } = MDBPopper();
    const triggerEl = ref("triggerEl");
    const popperEl = ref("popperEl");

    const widthStyle = computed(
      () => `max-width: ${props.maxWidth}px!important`
    );

    const popperSetup = () => {
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

      setPopper(triggerEl.value, popperEl.value, config);
    };

    const isThrottled = ref(false);

    watchEffect(() => {
      if (props.modelValue) {
        if (isThrottled.value) {
          return;
        }

        nextTick(() => {
          popperSetup();

          setTimeout(openPopper, 0);
          setTimeout(() => {
            popperEl.value.classList.add("show");
          }, 0);
        });
      } else {
        if (!isPopperActive.value) {
          return;
        }
        setTimeout(() => {
          popperEl.value.classList.remove("show");
        }, 10);

        isThrottled.value = true;

        setTimeout(() => {
          closePopper();
          isThrottled.value = false;
        }, 150);
        destroyPopper();
      }
    });

    const isActive = computed(() => {
      if (props.modelValue || (!props.modelValue && isPopperActive.value)) {
        return true;
      } else if (!props.modelValue && !isPopperActive.value) {
        return false;
      }
    });

    const onMouseOver = () => {
      emit("update:modelValue", true);
    };
    const onMouseOut = () => {
      emit("update:modelValue", false);
    };

    onUnmounted(() => {
      destroyPopper();
    });

    return {
      isActive,
      triggerEl,
      popperEl,
      widthStyle,
      onMouseOver,
      onMouseOut,
      attrs,
      props
    };
  }
};
</script>
