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
    },
    gradient: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'card-up',
        this.color ? this.color + '-color' : '',
        this.gradient ? this.gradient + '-gradient' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
