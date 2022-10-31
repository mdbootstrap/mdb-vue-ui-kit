<template>
  <component
    :is="tag"
    ref="triggerEl"
    style="display: inline-block"
    v-mdb-click-outside="handleClickOutside"
    :tabindex="dismissible ? 0 : null"
    v-bind="$attrs"
  >
    <slot name="reference" />
  </component>
  <transition>
    <div
      ref="popperEl"
      :class="{ popover: true, fade: true }"
      v-if="isActive && ($slots.header || $slots.body)"
      :style="[widthStyle]"
    >
      <div class="popover-header" v-if="$slots.header">
        <slot name="header" />
      </div>
      <div class="popover-body" v-if="$slots.body">
        <slot name="body" />
      </div>
      <slot />
      <div data-popper-arrow class="popover_arrow" v-if="arrow"></div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: "MDBPopover",
};
</script>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watchEffect,
  PropType,
} from "vue";
import MDBPopper from "../../utils/MDBPopper";
import vMdbClickOutside from "../../../directives/free/mdbClickOutside";
import { on, off } from "../../utils/MDBEventHandlers";

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
    default: "bottom",
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
  dismissible: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const {
  setPopper,
  isPopperActive,
  openPopper,
  closePopper,
  destroyPopper,
  getPopperOffset,
} = MDBPopper();
const triggerEl = ref<HTMLElement | null>(null);
const popperEl = ref<HTMLElement | null>(null);

const widthStyle = computed(() => `max-width: ${props.maxWidth}px!important`);

const getOffset = () => {
  if (!props.arrow) {
    return props.offset;
  }

  return [0, 10];
};

const getConfig = () => {
  const placement = props.direction;

  let boundary = document.querySelector(props.boundary) as HTMLElement | string;
  if (!boundary) {
    boundary = props.boundary;
  }

  const offset = getOffset();

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
          offset: getPopperOffset(offset, triggerEl.value),
        },
      },
      {
        name: "arrow",
        options: {
          element: `.popover_arrow`,
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

  return false;
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
</script>
