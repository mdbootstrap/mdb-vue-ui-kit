<template>
  <component :is="tag" v-bind="$attrs" :class="className" ref="accordionRef">
    <slot />
  </component>
</template>

<script>
import { computed, provide, ref, watchEffect } from "vue";

export default {
  name: "MDBAccordion",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: String,
    stayOpen: Boolean,
    flush: Boolean,
    classes: String
  },
  setup(props, { emit }) {
    const accordionRef = ref(null);
    const className = computed(() => {
      return ["accordion", props.flush && "accordion-flush", props.classes];
    });

    const activeItem = ref(props.modelValue);
    const setActiveItem = item => {
      activeItem.value = item;
      emit("update:modelValue", item);
    };

    watchEffect(() => (activeItem.value = props.modelValue));

    provide("activeItem", activeItem);
    provide("stayOpen", props.stayOpen);
    provide("setActiveItem", setActiveItem);

    return {
      accordionRef,
      setActiveItem,
      className
    };
  }
};
</script>
