<template v-slot:default="slotProps">
  <component
    :is="tag"
    type="button"
    :class="className"
    :aria-expanded="expanded"
    aria-haspopup="true"
    @click="toggle"
    v-mdb-click-outside="handleClickOutside"
    v-mdb-ripple
    data-trigger
  >
    <slot v-if="!split" />
    <span v-else class="visually-hidden">Toggle Dropdown</span>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBDropdownToggle",
};
</script>

<script setup lang="ts">
import { computed, inject, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import MDBBtn from "./MDBBtn.vue";
import vMdbClickOutside from "../../../directives/free/mdbClickOutside";
import vMdbRipple from "../../../directives/free/mdbRipple";

const props = defineProps({
  ...MDBBtn.props,
  tag: {
    type: String,
    default: "button",
  },
  href: [String, null],
  split: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    btnClass.value,
    "dropdown-toggle",
    props.split && "dropdown-toggle-split",
    props.size && `btn-${props.size}`,
    props.outline && `btn-outline-${props.outline}`,
  ];
});

const btnClass = computed(() => {
  if (props.tag !== "button") return;
  const color =
    props.color && !props.outline
      ? `btn-${props.color}`
      : props.outline
      ? ""
      : "btn-primary";
  return `btn ${color}`;
});

const expanded = ref(false);
const toggle = () => {
  expanded.value = !expanded.value;
};

const isPopperActive = inject<Ref<boolean>>("isPopperActive");
watchEffect(() => {
  expanded.value = isPopperActive.value;
});

const handleEscAndOutsideClick = inject<() => void>("handleEscAndOutsideClick");

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;

  if (isPopperActive && !target.closest(".dropdown-menu")) {
    handleEscAndOutsideClick();
  }
};
</script>
