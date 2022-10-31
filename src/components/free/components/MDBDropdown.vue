<template>
  <component :is="tag" :class="className" ref="root">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBDropdown",
};
</script>

<script setup lang="ts">
import {
  computed,
  onUnmounted,
  provide,
  ref,
  watchEffect,
  watch,
  PropType,
} from "vue";
import MDBPopper from "../../utils/MDBPopper";
import { on, off } from "../../utils/MDBEventHandlers";
import { handleBreakpoints } from "../../utils/MDBBreakpointHandler";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  boundary: {
    type: String,
    default: "clippingParent",
  },
  btnGroup: {
    type: Boolean,
    default: false,
  },
  dropup: {
    type: Boolean,
    default: false,
  },
  dropend: {
    type: Boolean,
    default: false,
  },
  dropstart: {
    type: Boolean,
    default: false,
  },
  align: {
    type: [String, Array] as PropType<string | string[]>,
    default: "start",
  },
  offset: {
    type: [Array, String, Function] as PropType<
      string | (() => string | number[]) | number[]
    >,
    default: () => [0, 0],
  },
  popperConfig: [null, Object, Function],
  target: String,
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const className = computed(() => {
  return [
    props.btnGroup ? "btn-group" : "dropdown",
    props.dropup && "dropup",
    props.dropend && "dropend",
    props.dropstart && "dropstart",
  ];
});

const {
  setPopper,
  isPopperActive,
  closePopper,
  openPopper,
  updatePopper,
  getPopperOffset,
} = MDBPopper();

const root = ref<HTMLDivElement | HTMLElement | null>(null);
const triggerEl = ref<string | HTMLElement>(null);
const popperEl = ref<string | HTMLElement>(null);
const windowWidth = ref(window.innerWidth);

const menuAlignClasses = ref<string | string[]>("");
provide("menuAlignClasses", menuAlignClasses);

provide("closePopper", closePopper);

// ------------------- isActive -------------------
// controlled by modelValue property, triggers DropdownMenu visibilty
// by toggling its v-if value on or off
const isActive = ref(props.modelValue);

const canUpdate = ref(true);
const canUpdateTimeout = ref(0);
const syncValuesTimeout = ref(0);

watch(
  () => props.modelValue,
  (curr) => {
    // clears interval so we can sync values after spam clicking dropdown button
    clearInterval(syncValuesTimeout.value);
    if (canUpdate.value && curr !== isActive.value) {
      isActive.value = props.modelValue;
      canUpdate.value = false;
    }
    syncValuesTimeout.value = setTimeout(() => {
      isActive.value = props.modelValue;
    }, 300);
  }
);

watch(
  () => canUpdate.value,
  (curr) => {
    if (!curr) {
      canUpdateTimeout.value = setTimeout(() => {
        canUpdate.value = true;
      }, 200);
    }
  }
);

provide("isActive", isActive);

// ------------------- isMenuMounted -------------------
// controls if DropdownMenu has been mounted into DOM and its element
// can be targeted by the Popper setup function
const isMenuMounted = ref(false);
const dropdownMenu = ref<HTMLElement | null>(null);
const setMenuMountedState = (boolean: boolean, menuRef: HTMLElement) => {
  isMenuMounted.value = boolean;
  dropdownMenu.value = menuRef;
};
provide("setMenuMountedState", setMenuMountedState);

const handleMenuMountedState = (mountedValue: boolean) => {
  if (mountedValue) {
    popperSetup();

    openPopper();
  } else {
    closePopper();
  }
};

watch(
  () => isMenuMounted.value,
  (cur) => handleMenuMountedState(cur),
  { immediate: true }
);

// ------------------- isPopperActive -------------------
// controls if Popper is mounted into DOM
// also Poppers visibility triggers DropdownMenu open/close animation
// with adding/removing 'show' class

provide("isPopperActive", isPopperActive);
provide("externalTarget", props.target);

// ------------------- handleEscAndOutsideClick -------------------
// mimics toggling modelValue when user click outside the toggle button
// or close dropdown with escape button
const handleEscAndOutsideClick = () => {
  emit("update:modelValue", false);
};

provide("handleEscAndOutsideClick", handleEscAndOutsideClick);

// ------------------- Utilites and setups -------------------
const popperPosition = props.dropup
  ? "top"
  : props.dropend
  ? "right"
  : props.dropstart
  ? "left"
  : "bottom";

const getConfig = () => {
  if (typeof props.align === "string") {
    menuAlignClasses.value = `dropdown-menu-${props.align}`;
  } else {
    menuAlignClasses.value = props.align.map((prop) =>
      `dropdown-menu-${prop}`.trim()
    );
  }

  let align = props.align;
  if (
    typeof props.align !== "string" ||
    (props.align !== "start" && props.align !== "end")
  ) {
    align = getBreakpointValue();
    on(window, "resize", listenToResize);
  }

  const placement = `${popperPosition}-${align}`;

  let boundary = document.querySelector(props.boundary) as HTMLElement | string;
  if (!boundary) {
    boundary = props.boundary;
  }

  const defaultBsPopperConfig = {
    placement,
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary,
        },
      },
      {
        name: "offset",
        options: {
          offset: getPopperOffset(props.offset, root.value),
        },
      },
    ],
  };

  return {
    ...defaultBsPopperConfig,
    ...(typeof props.popperConfig === "function"
      ? props.popperConfig(defaultBsPopperConfig)
      : props.popperConfig),
  };
};

const popperSetup = () => {
  triggerEl.value = props.target
    ? (document.querySelector(props.target) as HTMLElement)
    : (root.value.querySelector("[data-trigger]") as HTMLElement);
  popperEl.value = dropdownMenu.value;

  const config = getConfig();

  setPopper(triggerEl.value, popperEl.value, config);
};

const getBreakpointValue = () => {
  windowWidth.value = window.innerWidth;

  let propsValues = props.align;
  if (typeof props.align === "string") {
    propsValues = ["start", props.align];
  }

  const activeBrakpointValue = handleBreakpoints(
    windowWidth.value,
    propsValues as any[]
  );

  if (!activeBrakpointValue) {
    return;
  }

  return activeBrakpointValue.includes("start") ? "start" : "end";
};

const listenToResize = () => {
  const align = getBreakpointValue();
  updatePopper("placement", `${popperPosition}-${align}`);
};

onUnmounted(() => {
  clearInterval(canUpdateTimeout.value);
  clearInterval(syncValuesTimeout.value);
  off(window, "resize", listenToResize);
});
</script>
