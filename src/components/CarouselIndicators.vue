<template>
  <ol :is="tag" :class="className"><slot></slot></ol>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-indicators'
      );
    }
  }
};
</script>

<style scoped>
</style>
