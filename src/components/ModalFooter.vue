<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return classNames(
        'modal-footer'
      );
    }
  }
};
</script>

<style scoped>

</style>
