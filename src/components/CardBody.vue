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
        'card-body',
        this.color ? this.color + '-color' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>

