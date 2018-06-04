<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'edge-header',
        this.color ? this.color : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
