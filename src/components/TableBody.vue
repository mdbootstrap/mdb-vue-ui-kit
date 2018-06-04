<template>
  <tbody :is="tag" :class="className">
    <slot></slot>
  </tbody>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "tbody"
    },
    color: {
      type: String,
    }
  },
  computed: {
    className() {
      return classNames(
        this.color ? 'tbody-' + this.color : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
