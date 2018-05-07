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
  data() {
    return {
      className: classNames(
        'modal-title'
      )
    };
  },

};
</script>

<style scoped>

</style>
