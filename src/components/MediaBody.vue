<template>
  <div :is="tag">
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
  data () {
    return {
      className: classNames(
        'media-body'
      )
    };
  }
};

</script>

<style scoped>

</style>
