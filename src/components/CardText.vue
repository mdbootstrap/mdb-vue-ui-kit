<template>
  <p :is="tag" :class="className"><slot></slot></p>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "p"
    }
  },
  computed: {
    className() {
      return classNames(
        'card-text'
      );
    }
  }
};
</script>

<style scoped>
</style>
