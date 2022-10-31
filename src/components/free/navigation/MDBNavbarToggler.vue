<template>
  <component
    :is="tag"
    :class="navTogglerClass"
    type="button"
    :aria-controls="target"
    :aria-expanded="isExpanded"
    aria-label="Toggle navigation"
    @click="handleClick"
  >
    <MDBIcon :icon="togglerIcon" :size="togglerSize" :iconStyle="iconStyle" />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBNavbarToggler",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { MDBIcon } from "../../../index.free";

const props = defineProps({
  tag: {
    type: String,
    default: "button",
  },
  target: {
    type: String,
    default: "#navbarSupportedContent",
  },
  togglerClass: String,
  togglerIcon: {
    type: String,
    default: "bars",
  },
  togglerSize: {
    type: String,
    default: "1x",
  },
  iconStyle: {
    type: String,
    default: "fas",
  },
});

const isExpanded = ref(false);
const navTogglerClass = computed(() => ["navbar-toggler", props.togglerClass]);
const handleClick = () => (isExpanded.value = !isExpanded.value);
</script>
