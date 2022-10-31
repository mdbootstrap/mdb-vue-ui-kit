<template>
  <component
    :is="tag"
    ref="triggerEl"
    style="display: inline-block"
    v-bind="$attrs"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
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
        'tooltip-inner': true,
      }"
      :style="[widthStyle]"
    >
      <slot name="tip" />
      <div data-popper-arrow class="tooltip_arrow" v-if="arrow"></div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: "MDBTooltip",
};
</script>

<script setup lang="ts">
import { computed, nextTick, ref, watchEffect, PropType } from "vue";
import MDBPopper from "../../utils/MDBPopper";

const props = defineProps({
  tag: {
    type: String,
    default: "span",
  },
  modelValue: Boolean,
  reference: String,
  popover: String,
  options: {
    type: [Object, Function] as PropType<{ [props: string]: any } | Function>,
    default() {
      return {};
    },
  },
  boundary: {
    type: String,
    default: "clippingParent",
  },
  fallbackPlacements: {
    type: Array as PropType<string[]>,
    default: () => ["top", "right", "bottom", "left"],
  },
  offset: {
    type: String,
    default: "0, 5",
  },
  direction: {
    type: String,
    default: "top",
    validator: (value: string) =>
      ["top", "right", "bottom", "left"].indexOf(value.toLowerCase()) > -1,
  },
  maxWidth: {
    type: Number,
    default: 276,
  },
  arrow: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const { setPopper, isPopperActive, openPopper, closePopper, getPopperOffset } =
  MDBPopper();
const triggerEl = ref<HTMLElement | null>(null);
const popperEl = ref<HTMLElement | null>(null);

const widthStyle = computed(() => `max-width: ${props.maxWidth}px!important`);

const getConfig = () => {
  const placement = props.direction;

  let boundary = document.querySelector(props.boundary) as HTMLElement | string;
  if (!boundary) {
    boundary = props.boundary;
  }

  const defaultBsPopperConfig = {
    placement,
    modifiers: [
      {
        name: "flip",
        options: {
          fallbackPlacements: props.fallbackPlacements,
        },
      },
      {
        name: "preventOverflow",
        options: {
          boundary,
        },
      },
      {
        name: "offset",
        options: {
          offset: getPopperOffset(props.offset, triggerEl.value),
        },
      },
      {
        name: "arrow",
        options: {
          element: `.tooltip_arrow`,
          padding: 5,
        },
      },
    ],
  };

  return {
    ...defaultBsPopperConfig,
    ...(typeof props.options === "function"
      ? props.options(defaultBsPopperConfig)
      : props.options),
  };
};

const popperSetup = () => {
  triggerEl.value = props.reference
    ? document.querySelector(props.reference)
    : triggerEl.value;
  popperEl.value = props.popover
    ? document.querySelector(props.popover)
    : popperEl.value;

  const config = getConfig();

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
  }
});

const isActive = computed(() => {
  if (props.modelValue || (!props.modelValue && isPopperActive.value)) {
    return true;
  } else if (!props.modelValue && !isPopperActive.value) {
    return false;
  }

  return false;
});

const onMouseEnter = () => {
  !props.disabled && emit("update:modelValue", true);
};
const onMouseLeave = () => {
  !props.disabled && emit("update:modelValue", false);
};
</script>
