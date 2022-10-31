<template>
  <component :is="tag" :class="itemClassName" ref="itemRef">
    <h2 :class="headerClassName">
      <button
        @click="toggleAccordion"
        :class="buttonClassName"
        aria-expanded="true"
        :aria-controls="collapseId"
      >
        <i v-if="icon" :class="icon"></i>{{ headerTitle }}
      </button>
    </h2>
    <MDBCollapse :id="collapseId" v-model="isActive">
      <div :class="bodyClassName">
        <slot />
      </div>
    </MDBCollapse>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBAccordionItem",
};
</script>

<script setup lang="ts">
import { computed, inject, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import MDBCollapse from "./MDBCollapse.vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  collapseId: {
    type: String,
    required: true,
  },
  headerTitle: String,
  headerClasses: String,
  bodyClasses: String,
  itemClasses: String,
  icon: String,
});

const itemRef = ref<HTMLDivElement | HTMLElement | null>(null);
const itemClassName = computed(() => {
  return ["accordion-item", props.itemClasses];
});
const headerClassName = computed(() => {
  return ["accordion-header", props.headerClasses];
});
const bodyClassName = computed(() => {
  return ["accordion-body", props.bodyClasses];
});
const buttonClassName = computed(() => {
  return ["accordion-button", !isActive.value && "collapsed"];
});
const icon = computed(() => {
  return props.icon ? [props.icon] : false;
});

const setActiveItem = inject<(item: string) => void | null>(
  "setActiveItem",
  null
);
const activeItem = inject<Ref<string> | null>("activeItem", null);
const stayOpen = inject<Ref<boolean> | boolean>("stayOpen", false);

const isActive = ref(activeItem.value === props.collapseId);

watchEffect(() => {
  if (stayOpen) {
    return;
  }
  isActive.value = activeItem.value === props.collapseId;
});

const toggleAccordion = () => {
  if (stayOpen) {
    isActive.value = !isActive.value;
  } else {
    isActive.value ? setActiveItem("") : setActiveItem(props.collapseId);
  }
};
</script>
