
<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>
<script>
import classNames from 'classnames';

const Jumbotron = {
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

export default Jumbotron;
export { Jumbotron as mdbJumbotron };
</script>

<style scoped>

</style>
