<template>
  <li :is="tag" :class="className"><slot></slot></li>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'breadcrumb-item',
        this.active ? 'active' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
