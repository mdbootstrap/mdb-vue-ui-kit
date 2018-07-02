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
    cascade: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'card-body',
        this.color ? this.color + '-color' : '',
        this.cascade && 'card-body-cascade'
      );
    }
  }
};
</script>

<style scoped>
</style>

