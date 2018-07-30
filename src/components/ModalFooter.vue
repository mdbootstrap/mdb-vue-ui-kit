<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const ModalFooter = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return classNames(
        'modal-footer'
      );
    }
  }
};

export default ModalFooter;
export { ModalFooter as mdbModalFooter };
</script>

<style scoped>

</style>
