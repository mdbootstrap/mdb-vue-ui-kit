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
  data() {
    return {
      className: classNames(
        'card-up',
        this.color ? this.color : '',
        this.gradient ? this.gradient + '-gradient' : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>
