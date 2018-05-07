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
    textColor: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'card-header',
        this.color ? this.color : '',
        this.textColor ? this.textColor + '-text' : ''
      )
    };
  }
};
</script>

<style scoped>
</style>
