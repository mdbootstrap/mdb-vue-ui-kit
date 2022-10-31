<template>
  <li v-if="href" class="nav-item" role="presentation">
    <a
      :id="uid"
      ref="item"
      :class="className"
      role="tab"
      :aria-controls="controls"
      :href="href"
      v-bind="$attrs"
      @click.prevent="handleClick"
    >
      <slot />
    </a>
  </li>
  <component
    :is="tag"
    v-else
    :id="uid"
    ref="item"
    :class="className"
    role="tab"
    :aria-controls="controls"
    v-bind="$attrs"
    @click.prevent="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBTabItem",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, inject, onMounted, ref, watchEffect } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "a",
  },
  tabId: {
    type: String,
    required: true,
  },
  href: String,
});

const item = ref<HTMLLinkElement | HTMLElement>(null);
const className = computed(() => ["nav-link", isActive.value && "active"]);
const uid = computed(() => `tab-${props.tabId}`);
const controls = computed(() => `${props.tabId}`);
const activeTabId = inject<Ref<string>>("activeTab");

const isActive = ref(activeTabId && activeTabId.value === props.tabId);
const updateActiveTab =
  inject<(element: HTMLElement, tabId: string) => void>("updateActiveTab");

watchEffect(
  () => (isActive.value = activeTabId && activeTabId.value === props.tabId)
);

const handleClick = () => {
  updateActiveTab(item.value, props.tabId);
};

onMounted(() => {
  if (isActive.value && updateActiveTab) {
    updateActiveTab(item.value, props.tabId);
  }
});
</script>
