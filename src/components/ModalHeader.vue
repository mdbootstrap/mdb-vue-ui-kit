<template>
  <component :is="tag" :class="className">
    <slot></slot>
    <a v-if="close" flat class="close" @click.prevent="away">&times;</a>
  </component>
</template>

<script>
import classNames from 'classnames';

const ModalHeader = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    close: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className() {
      return classNames(
        'modal-header'
      );
    }
  },
  methods: {
    away() {
      this.$parent.$emit('close');
    }
  }
};

export default ModalHeader;
export { ModalHeader as mdbModalHeader };
</script>

<style scoped>

</style>
