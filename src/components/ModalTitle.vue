<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const ModalTitle = {
  props: {
    tag: {
      type: String,
      default: "h5"
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'modal-title',
        this.bold && 'font-weight-bold'
      );
    }
  }
};

export default ModalTitle;
export { ModalTitle as mdbModalTitle };
</script>
