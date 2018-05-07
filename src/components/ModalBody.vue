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
  data() {
    return {
      className: classNames(
        'modal-body'
      )
    };
  },

};
</script>

<style scoped>

</style>
