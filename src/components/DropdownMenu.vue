<template>
  <div :is="tag" data-toggle="dropdown-menu" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    dropup: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'dropdown-menu',
        'd-none',
        this.right ? 'dropdown-menu-right' : '',
        this.dropup ? 'dropup' : ''
      ),
    };
  }
};
</script>

<style scoped>
.d-fade-in {
  animation: fadeIn .2s linear;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
      opacity: 1;
  }
}
.dropup {
  position: absolute;
  top: auto;
  bottom: 100%;
}
</style>
