<template>
  <footer :is="tag" :class="className">
    <slot></slot>
  </footer>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "footer"
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'page-footer mt-4',
        this.color ? this.color : ''
      )
    };
  }
};
</script>

<style scoped>

</style>
