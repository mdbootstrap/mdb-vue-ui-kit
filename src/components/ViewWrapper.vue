<template>
  <div :is="tag" :class="className">
    <img v-if="src" :src="src" :alt="alt" class="img-fluid">
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
    overlay: {
      type: String,
    },
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'view'
      ),
    };
  }
};
</script>

<style scoped>
</style>
