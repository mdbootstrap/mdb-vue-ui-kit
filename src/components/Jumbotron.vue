
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
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'jumbotron',
        this.fluid ? 'jumbotron-fluid' : ''
      );
    }
  }
};
</script>

<style scoped>

</style>
