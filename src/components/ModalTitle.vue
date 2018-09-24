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
