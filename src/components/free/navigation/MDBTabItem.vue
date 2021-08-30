<template>
  <li v-if="href" class="nav-item" role="presentation">
    <a
      :class="className"
      role="tab"
      :aria-controls="controls"
      :id="uid"
      :href="href"
      @click.prevent="handleClick(tabId)"
      ref="item"
    >
      <slot />
    </a>
  </li>
  <component
    v-else
    :is="tag"
    :class="className"
    role="tab"
    :aria-controls="controls"
    :id="uid"
    @click.prevent="handleClick(tabId)"
    ref="item"
  >
    <slot />
  </component>
</template>

<script>
import { computed, inject, onMounted, ref, watchEffect } from "vue";

export default {
  name: "MDBTabItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    tabId: {
      type: String,
      required: true
    },
    href: String
  },
  setup(props, { attrs }) {
    const item = ref("item");

    const className = computed(() => {
      return ["nav-link", isActive.value && "active"];
    });

    const uid = computed(() => {
      return `tab-${props.tabId}`;
    });
    const controls = computed(() => {
      return `${props.tabId}`;
    });

    const activeTabId = inject("activeTab", false);
    const isActive = ref(
      activeTabId &&
        (activeTabId.value === props.tabId ||
          (activeTabId && activeTabId === props.tabId))
    );

    const updateActiveTab = inject("updateActiveTab", false);
    watchEffect(
      () =>
        (isActive.value =
          activeTabId &&
          (activeTabId.value === props.tabId ||
            (activeTabId && activeTabId === props.tabId)))
    );

    const handleClick = () => {
      updateActiveTab(item.value, props.tabId);
    };

    onMounted(() => {
      if (isActive.value && updateActiveTab) {
        updateActiveTab(item.value, props.tabId);
      }
    });

    return {
      item,
      uid,
      controls,
      className,
      handleClick,
      props,
      attrs
    };
  }
};
</script>
