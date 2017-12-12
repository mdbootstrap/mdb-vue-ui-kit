<template>
  <a :is="tag" :href="href" :class="className"><slot></slot></a>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "a"
    },
    href: {
      type: String,
      default: "#"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'dropdown-item',
        this.disabled ? 'disabled' : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>
