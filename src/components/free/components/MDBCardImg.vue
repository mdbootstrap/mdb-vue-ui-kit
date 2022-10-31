<template>
  <component
    :is="tag"
    :src="src"
    :alt="alt"
    :class="className"
    v-bind="$attrs"
  ></component>
  <div class="card-img-overlay" v-if="overlay" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "MDBCardImg",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "img",
  },
  src: {
    type: String,
    required: true,
  },
  alt: String,
  top: {
    type: Boolean,
    default: false,
  },
  bottom: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    props.top && `card-img-top`,
    props.bottom && `card-img-bottom`,
    props.fluid && `img-fluid`,
    props.overlay && "card-img",
    !props.top && !props.bottom && !props.fluid && !props.overlay && `card-img`,
  ];
});
</script>
