<template>
  <h4 :is="tag" :class="className"><slot></slot></h4>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "h4"
    }
  },
  computed: {
    className() {
      return classNames(
        'card-title'
      );
    }
  }
};
</script>

<style scoped>
</style>
