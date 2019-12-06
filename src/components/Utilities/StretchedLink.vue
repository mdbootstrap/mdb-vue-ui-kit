<template>
  <component :is="tag" class="stretched-link" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
const StretchedLink = {
  props: {
    tag: {
      type: String,
      default: "a"
    },
    
  },
};

export default StretchedLink;
export { StretchedLink as mdbStretchedLink };
</script>

<style scoped>
</style>
