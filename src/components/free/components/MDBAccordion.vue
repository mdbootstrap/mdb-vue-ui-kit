<template>
  <component :is="tag" :class="className" ref="accordionRef">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBAccordion",
};
</script>

<script setup lang="ts">
import { computed, provide, ref, watchEffect } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  modelValue: String,
  stayOpen: Boolean,
  flush: Boolean,
  classes: String,
  borderless: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const accordionRef = ref<HTMLDivElement | HTMLElement | null>(null);
const className = computed(() => {
  return [
    "accordion",
    props.flush && "accordion-flush",
    props.classes,
    props.borderless && "accordion-borderless",
  ];
});

const activeItem = ref(props.modelValue);
const setActiveItem = (item: string) => {
  activeItem.value = item;
  emit("update:modelValue", item);
};

watchEffect(() => (activeItem.value = props.modelValue));

provide("activeItem", activeItem);
provide("stayOpen", props.stayOpen);
provide("setActiveItem", setActiveItem);
</script>
