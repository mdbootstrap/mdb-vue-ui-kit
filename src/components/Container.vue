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
    fluid: {
      type: Boolean,
      default: false
    },
    freeBird: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.fluid ? 'container-fluid' : 'container',
        this.freeBird ? 'free-bird' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>

