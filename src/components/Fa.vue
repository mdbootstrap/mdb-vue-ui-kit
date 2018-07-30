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
    }
  },
  computed: {
    className() {
      return classNames(
        'fa',
        this.icon ? 'fa-' + this.icon : '',
        this.size ? 'fa-' + this.size : false,
        this.fixed ? 'fa-fw' : false,
        this.pull ? 'fa-pull-' + this.pull : false,
        this.border ? 'fa-border' : false,
        this.spin ? 'fa-spin' : false,
        this.pulse ? 'fa-pulse' : false,
        this.rotate ? 'fa-rotate-' + this.rotate : false,
        this.flip ? 'fa-flip-' + this.flip : false,
        this.inverse ? 'fa-inverse' : false,
        this.stack ? 'fa-' + this.stack : false
      );
    }
  }
};

export default Fa;
export { Fa as mdbIcon };
</script>

<style scoped>

</style>

