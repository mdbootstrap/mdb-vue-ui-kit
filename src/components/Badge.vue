<template>
  <span :is="tag" :class="className">
    <slot></slot>
  </span>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "span"
    },
    color: {
      type: String,
      default: "primary-color"
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'badge',
        this.color,
        this.pill ? 'badge-pill' : false
      )
    };
  },

};
</script>

<style scoped>

</style>
