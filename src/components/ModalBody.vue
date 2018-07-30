<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const ModalBody = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return classNames(
        'modal-body'
      );
    }
  }
};

export default ModalBody;
export { ModalBody as mdbModalBody };
</script>

<style scoped>

</style>
