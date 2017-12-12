<template>
  <nav>
    <ul :is="tag" :class="className">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    circle: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data() {
    return {
      className: classNames(
        'pagination',
        this.sm  ? 'pagination-sm' : false,
        this.lg  ? 'pagination-lg' : false,
        this.circle ? 'pagination-circle' : false,
        this.color ? 'pg-'+this.color : false
      )
    };
  }
};
</script>

<style scoped>
</style>
