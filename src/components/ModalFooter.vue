<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const ModalFooter = {
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
        'modal-footer',
        this.start && "justify-content-start",
        this.end && "justify-content-end",
        this.center && "justify-content-center",
        this.between && "justify-content-between",
        this.around && "justify-content-around"
      );
    }
  }
};

export default ModalFooter;
export { ModalFooter as mdbModalFooter };
</script>

<style scoped>
.form-dark .font-small,
.form-elegant .font-small {
    font-size: 0.8rem; }

.form-dark .modal-footer,
.form-elegant .modal-footer {
    font-weight: 400; }
</style>
