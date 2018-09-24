<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

const Container = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fluid: {
      type: Boolean,
      default: false
    },
    freeBird: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.fluid ? 'container-fluid' : 'container',
        this.freeBird ? 'free-bird' : ''
      );
    }
  }
};

export default Container;
export { Container as mdbContainer };
</script>

<style scoped>
</style>

