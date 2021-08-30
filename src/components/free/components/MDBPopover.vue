<template>
  <component
    :is="tag"
    ref="triggerEl"
    style="display: inline-block"
    v-click-outside="handleClickOutside"
    :tabindex="dismissible ? 0 : null"
  >
    <slot name="reference" />
  </component>
  <transition>
    <div
      ref="popperEl"
      :class="{ popover: true, fade: true }"
      v-if="isActive && ($slots.header || $slots.body)"
      :style="[widthStyle, marginStyle]"
    >
      <div class="popover-header" v-if="$slots.header">
        <slot name="header" />
      </div>
      <div class="popover-body" v-if="$slots.body">
        <slot name="body" />
      </div>
      <slot />
      <div x-arrow class="popover_arrow" v-if="arrow"></div>
    </div>
  </transition>
</template>

<script>
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watchEffect
} from "vue";
import MDBPopper from "../../utils/MDBPopper.js";
import mdbClickOutside from "@/directives/clickOutside.js";
import { on, off } from "../../utils/MDBEventHandlers";

export default {
  name: "MDBPopover",
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
      default: "bottom",
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
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    updatePosition: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    "click-outside": mdbClickOutside
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

    const marginStyle = computed(() => {
      if (!props.arrow) {
        return;
      }

      let margin;
      switch (props.direction) {
        case "top":
          margin = "margin-bottom: 16px";
          break;
        case "bottom":
          margin = "margin-top: 16px";
          break;
        case "right":
          margin = "margin-left: 16px";
          break;
        case "left":
          margin = "margin-right: 16px";
          break;

        default:
          break;
      }
      return margin;
    });

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

    watchEffect(() => {
      if (props.modelValue) {
        nextTick(() => {
          popperSetup();

          setTimeout(openPopper, 0);
          setTimeout(() => {
            popperEl.value.classList.add("show");

            if (props.hover) {
              on(popperEl.value, "mouseover", onMouseOver);
              on(popperEl.value, "mouseout", onMouseOut);
            }
          }, 0);
        });
      } else {
        if (!isPopperActive.value) {
          return;
        }
        setTimeout(() => {
          off(popperEl.value, "mouseover", onMouseOver);
          off(popperEl.value, "mouseout", onMouseOut);

          popperEl.value.classList.remove("show");
        }, 0);
        setTimeout(closePopper, 0);
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

    const handleClickOutside = () => {
      if (!props.dismissible || !props.modelValue) {
        return;
      }
      emit("update:modelValue", false);
    };

    const destroy = () => {
      off(triggerEl.value, "mouseover", onMouseOver);
      off(triggerEl.value, "mouseout", onMouseOut);

      destroyPopper();
    };

    onMounted(() => {
      if (props.hover) {
        on(triggerEl.value, "mouseover", onMouseOver);
        on(triggerEl.value, "mouseout", onMouseOut);
      }
    });

    onUnmounted(() => {
      destroy();
    });

    return {
      isActive,
      triggerEl,
      popperEl,
      widthStyle,
      marginStyle,
      handleClickOutside,
      attrs,
      props
    };
  }
};
</script>
