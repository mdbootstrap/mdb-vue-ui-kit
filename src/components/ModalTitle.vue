<template>
  <h5 :is="tag" :class="className">
    <slot></slot>
  </h5>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "h5"
    },
  },
  computed: {
    className() {
      return classNames(
        'modal-title'
      );
    }
  }
};
</script>

<style scoped>

</style>
