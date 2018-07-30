<template>
  <h5 :is="tag" :class="className">
    <slot></slot>
  </h5>
</template>

<script>
import classNames from 'classnames';

const ModalTitle = {
  props: {
    tag: {
      type: String,
      default: "h5"
    },
  },
  computed: {
    className() {
      return classNames(
        'modal-title'
      );
    }
  }
};

export default ModalTitle;
export { ModalTitle as mdbModalTitle };
</script>

<style scoped>

</style>
