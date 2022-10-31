<template>
  <component :is="tag" :class="className">
    <slot />
    <MDBBtnClose v-if="close" :white="closeWhite" @click.prevent="closeModal" />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBModalHeader",
};
</script>

<script setup lang="ts">
import { computed, inject } from "vue";
import MDBBtnClose from "./MDBBtnClose.vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  close: {
    type: Boolean,
    default: true,
  },
  closeWhite: {
    type: Boolean,
    default: false,
  },
  color: String,
});

const closeModal = inject<() => void>("closeModal");

const className = computed(() => {
  return ["modal-header", props.color && `bg-${props.color}`];
});
</script>
