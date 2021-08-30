<template>
  <transition
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
    :duration="150"
  >
    <component
      v-show="isActive"
      :is="tag"
      :class="className"
      v-bind="attrs"
      ref="item"
      role="tabpanel"
      :aria-labelledby="labelledby"
      :id="uid"
    >
      <slot />
    </component>
  </transition>
</template>

<script>
import { computed, ref, inject, watchEffect, onMounted } from "vue";

export default {
  name: "MDBTabPane",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    tabId: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["tab-pane fade", isActive.value && "show active"];
    });

    const item = ref("item");
    const uid = computed(() => {
      return `${props.tabId}`;
    });
    const labelledby = computed(() => {
      return `tab-${props.tabId}`;
    });

    const activeTabId = inject("activeTab", false);
    const isActive = ref(
      activeTabId &&
        (activeTabId.value === props.tabId || activeTabId === props.tabId)
    );

    watchEffect(
      () =>
        (isActive.value =
          activeTabId &&
          (activeTabId.value === props.tabId || activeTabId === props.tabId))
    );

    const emitShown = inject("emitShown", false);
    const emitHidden = inject("emitHidden", false);

    onMounted(() => {
      if (isActive.value && emitShown) {
        emitShown(props.tabId);
      }
    });

    const afterEnter = el => {
      el.style.opacity = "1";
    };
    const enter = el => {
      el.style.opacity = "0";
      emitShown(props.tabId);
    };
    const beforeLeave = el => {
      el.style.opacity = "1";
      emitHidden(props.tabId);
    };
    const afterLeave = el => {
      el.style.opacity = "0";
    };

    return {
      isActive,
      item,
      uid,
      labelledby,
      afterEnter,
      enter,
      beforeLeave,
      afterLeave,
      className,
      props,
      attrs
    };
  }
};
</script>
