<template>
  <div :class="className" :is="tag">
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
    }
  },
  computed: {
    className() {
      return classNames(
        'media-body'
      );
    }
  }
};

</script>

<style scoped>

</style>
