<template>
  <div :is="tag" :class="className" role="listbox"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-inner'
      );
    }
  }
};
</script>

<style scoped>
</style>
