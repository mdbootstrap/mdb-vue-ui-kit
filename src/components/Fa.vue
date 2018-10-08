<template>
  <i :class="className"></i>
</template>

<script>
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';

const Fa = {
  props: {
    icon: {
      type: String,
    },
    size: {
      type: [Boolean, String],
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    pull: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: [Boolean, String],
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false
    },
    inverse: {
      type: [Boolean, String],
      default: false
    },
    stack: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ''
    },
  },
  computed: {
    className() {
      return classNames(
        'fa',
        this.icon && 'fa-' + this.icon,
        this.size && 'fa-' + this.size,
        this.fixed && 'fa-fw',
        this.pull && 'fa-pull-' + this.pull,
        this.border && 'fa-border',
        this.spin && 'fa-spin',
        this.pulse && 'fa-pulse',
        this.rotate && 'fa-rotate-' + this.rotate,
        this.flip && 'fa-flip-' + this.flip,
        this.inverse && 'fa-inverse',
        this.stack && 'fa-' + this.stack,
        this.color && 'text-' + this.color
      );
    }
  }
};

export default Fa;
export { Fa as mdbIcon };
</script>

<style scoped>

</style>

