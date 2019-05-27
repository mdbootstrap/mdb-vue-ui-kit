<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
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
.form-elegant .modal-body {
    font-weight: 400; }

.form-dark .font-small,
.form-elegant .font-small {
    font-size: 0.8rem; }
</style>
