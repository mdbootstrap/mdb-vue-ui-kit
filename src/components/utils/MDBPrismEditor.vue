<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";

defineProps({
  modelValue: String,
  highlight: {
    type: Function as PropType<(code: string) => any>,
  },
  lineNumbers: Boolean,
});
</script>
