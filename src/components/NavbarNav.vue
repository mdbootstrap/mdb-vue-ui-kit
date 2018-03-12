<template>
<ul :is="tag" :class="className"><slot></slot></ul>

</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'navbar-nav',
        this.right ? 'ml-auto' : 'mr-auto'
      )
    };
  }
};
</script>

<style scoped>

</style>
