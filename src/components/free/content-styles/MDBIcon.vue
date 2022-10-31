<template>
  <i :class="className">
    <slot />
  </i>
</template>

<script lang="ts">
export default {
  name: "MDBIcon",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  iconStyle: {
    type: String,
    default: "fas",
  },
  icon: String,
  flag: String,
  size: String,
  fw: Boolean,
  solid: Boolean,
});

const className = computed(() => {
  return [
    !props.flag && props.iconStyle,
    props.flag ? `flag flag-${props.flag}` : `fa-${props.icon}`,
    props.size && `fa-${props.size}`,
    props.fw && "fa-fw",
    props.solid && "fa-solid",
  ];
});
</script>
