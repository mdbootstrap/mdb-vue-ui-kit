<template>
  <table :is="tag" :class="className">
    <slot></slot>
  </table>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "table"
    },
    dark: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Boolean,
      default: false
    },
    responsiveSm: {
      type: Boolean,
      default: false
    },
    responsiveMd: {
      type: Boolean,
      default: false
    },
    responsiveLg: {
      type: Boolean,
      default: false
    },
    responsiveXl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'table',
        this.dark ? 'table-dark' : '',
        this.striped ? 'table-striped' : '',
        this.bordered ? 'table-bordered' : '',
        this.hover ? 'table-hover' : '',
        this.sm ? 'table-sm' : '',
        this.responsive ? 'table-responsive' : '',
        this.responsiveSm ? 'table-responsive-sm' : '',
        this.responsiveMd ? 'table-responsive-md' : '',
        this.responsiveLg ? 'table-responsive-lg' : '',
        this.responsiveXl ? 'table-responsive-xl' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
