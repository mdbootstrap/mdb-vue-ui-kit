<template>
  <div :is="tag" :class="className" :style="[{'margin-left' : this.split ? '-0.3rem' : ''}]"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    show: {
      type: Boolean
    },
    btnGroup: {
      type: Boolean
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        this.btnGroup ? 'btn-group' : 'dropdown',
        this.show ? 'show' : '',
        this.dropup ? 'dropup' : '',
        this.dropright ? 'dropright' : '',
        this.dropleft ? 'dropleft' : ''
      )
    };
  }
};
</script>

<style scoped>
.dropdown {
  display: inline-block;
}
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>
