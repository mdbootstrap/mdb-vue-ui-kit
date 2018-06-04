<template>
  <thead :is="tag" :class="className"><slot></slot></thead>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "thead"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        this.color ? 'thead-' + this.color : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
