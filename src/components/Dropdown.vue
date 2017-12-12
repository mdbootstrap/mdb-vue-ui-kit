<template>
  <div :is="tag" :class="className"><slot></slot></div>
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
    }
  },
  data() {
    return {
      className: classNames(
        this.btnGroup ? 'btn-group' : 'dropdown',
        this.show ? 'show' : '',
        this.dropup ? 'dropup' : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>
