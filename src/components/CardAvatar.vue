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
  data() {
    return {
      className: classNames(
        'avatar',
        this.color ? this.color : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>
