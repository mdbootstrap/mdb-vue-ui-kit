<template>
  <component :is="tag" v-if="isVertical" class="row" v-bind="$attrs">
    <slot />
  </component>
  <slot v-else />
</template>

<script lang="ts">
export default {
  name: "MDBTabs",
};
</script>

<script setup lang="ts">
import { provide, onMounted, onUnmounted, ref, watch } from "vue";
import { handleBreakpoints } from "../../utils/MDBBreakpointHandler";
import { on, off } from "../../utils/MDBEventHandlers";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  modelValue: String,
  vertical: {
    type: [Boolean, String],
    default: false,
  },
});
const emit = defineEmits([
  "update:modelValue",
  "hide",
  "hidden",
  "show",
  "shown",
]);

const prevTab = ref<HTMLElement>(null);
const activeTab = ref<HTMLElement>(null);
const activeTabId = ref(props.modelValue);

watch(
  () => props.modelValue,
  (cur) => {
    if (cur !== activeTabId.value) {
      activeTabId.value = cur;
      updateActiveTab(null, cur);
    }
  }
);

const updateActiveTab = (element: HTMLElement, tabId: string) => {
  if (!element) {
    element = document.body.querySelector(`#tab-${tabId}`);
  }
  if (prevTab.value) {
    emit("hide", { target: prevTab.value, relatedTarget: element });
  }
  emit("show", { target: element, relatedTarget: prevTab.value });
  emit("update:modelValue", tabId);

  activeTab.value = element;
  activeTabId.value = tabId;
};

const emitShown = () => {
  emit("shown", { target: activeTab.value, relatedTarget: prevTab.value });
  prevTab.value = activeTab.value;
};

const emitHidden = () => {
  emit("hidden", {
    target: prevTab.value,
    relatedTarget: activeTab.value,
  });
};

provide("activeTab", activeTabId);
provide("updateActiveTab", updateActiveTab);
provide("emitShown", emitShown);
provide("emitHidden", emitHidden);

const isVertical = ref(false);
const windowWidth = ref(window.innerWidth);
const activeBrakpointValue = ref<string | null>(null);

provide("isVertical", isVertical);

const handleWindowResize = () => {
  windowWidth.value = window.innerWidth;

  const breakpointValue = handleBreakpoints(windowWidth.value, [
    "column",
    props.vertical,
  ]);

  if (breakpointValue === activeBrakpointValue.value) return;

  isVertical.value = breakpointValue === props.vertical ? true : false;
  activeBrakpointValue.value = breakpointValue;
};

onMounted(() => {
  if (!props.vertical) return;

  if (props.vertical === true) {
    isVertical.value = true;
  } else {
    handleWindowResize();
    on(window, "resize", handleWindowResize);
  }
});

onUnmounted(() => {
  off(window, "resize", handleWindowResize);
});
</script>
