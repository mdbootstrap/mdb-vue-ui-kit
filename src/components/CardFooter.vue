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
      type: String,
      default: 'deep-purple'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      className: classNames(
        'card-footer',
        'bg-' + this.color,
        this.textColor + '-text'
      )
    };
  }
};
</script>

<style scoped>
</style>
