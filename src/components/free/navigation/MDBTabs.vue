<template>
  <component v-if="isVertical" class="row" :is="tag" v-bind="attrs">
    <slot />
  </component>
  <slot v-else />
</template>

<script>
import { provide, onMounted, onUnmounted, ref, watch } from "vue";
import { handleBreakpoints } from "../../utils/MDBBreakpointHandler";
import { on, off } from "../../utils/MDBEventHandlers";

export default {
  name: "MDBTabs",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: {
      type: String,
      required: true
    },
    vertical: {
      type: [Boolean, String],
      default: false
    }
  },
  emits: ["update:modelValue", "hide", "hidden", "show", "shown"],
  setup(props, { emit, attrs }) {
    const prevTab = ref(null);
    const activeTab = ref(null);
    const activeTabId = ref(props.modelValue);

    watch(
      () => props.modelValue,
      cur => {
        if (cur !== activeTabId.value) {
          activeTabId.value = cur;
          updateActiveTab(null, cur);
        }
      }
    );

    const updateActiveTab = (element, tabId) => {
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
        relatedTarget: activeTab.value
      });
    };

    provide("activeTab", activeTabId);
    provide("updateActiveTab", updateActiveTab);
    provide("emitShown", emitShown);
    provide("emitHidden", emitHidden);

    const isVertical = ref(false);
    const windowWidth = ref(window.innerWidth);
    const activeBrakpointValue = ref(null);

    provide("isVertical", isVertical);

    const handleWindowResize = () => {
      windowWidth.value = window.innerWidth;

      const breakpointValue = handleBreakpoints(windowWidth.value, [
        "column",
        props.vertical
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

    return {
      isVertical,
      props,
      attrs
    };
  }
};
</script>
