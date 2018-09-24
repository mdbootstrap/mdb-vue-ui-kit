<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const Row = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    between: {
      type: Boolean,
      default: false
    },
    around: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'row',
        this.start && "justify-content-start",
        this.end && "justify-content-end",
        this.center && "justify-content-center",
        this.between && "justify-content-between",
        this.around && "justify-content-around"
      );
    }
  }
};

export default Row;
export { Row as mdbRow };
</script>

<style scoped>
</style>
