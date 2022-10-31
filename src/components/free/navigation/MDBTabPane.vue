<template>
  <transition
    :duration="150"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <component
      :is="tag"
      v-show="isActive"
      :id="uid"
      ref="item"
      :class="className"
      role="tabpanel"
      :aria-labelledby="labelledby"
    >
      <slot />
    </component>
  </transition>
</template>

<script lang="ts">
export default {
  name: "MDBTabPane",
};
</script>

<script setup lang="ts">
import { computed, ref, inject, watchEffect, onMounted } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  tabId: {
    type: String,
    required: true,
  },
});

const item = ref<HTMLDivElement | HTMLElement>(null);
const className = computed(() => [
  "tab-pane fade",
  isActive.value && "show active",
]);
const uid = computed(() => `${props.tabId}`);
const labelledby = computed(() => `tab-${props.tabId}`);

const activeTabId = inject<Ref<string>>("activeTab");
const isActive = ref(activeTabId && activeTabId.value === props.tabId);

watchEffect(
  () => (isActive.value = activeTabId && activeTabId.value === props.tabId)
);

const emitShown = inject<(element: string) => void>("emitShown");
const emitHidden = inject<(element: string) => void>("emitHidden");

onMounted(() => {
  if (isActive.value && emitShown) {
    emitShown(props.tabId);
  }
});

const afterEnter = (el: HTMLElement) => {
  el.style.opacity = "1";
};
const enter = (el: HTMLElement) => {
  el.style.opacity = "0";
  emitShown(props.tabId);
};
const beforeLeave = (el: HTMLElement) => {
  el.style.opacity = "1";
  emitHidden(props.tabId);
};
const afterLeave = (el: HTMLElement) => {
  el.style.opacity = "0";
};
</script>
