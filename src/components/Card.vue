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
    cascade: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    narrow: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    testimonial: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'card',
        this.cascade ? 'card-cascade' : '',
        this.wide ? 'wider' : '',
        this.narrow ? 'narrower' : '',
        this.reverse ? 'reverse' : '',
        this.dark ? 'card-dark' : '',
        this.testimonial ? 'testimonial-card' : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>
