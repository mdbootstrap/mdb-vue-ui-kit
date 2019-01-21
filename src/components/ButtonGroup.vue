<template>
  <component :is="tag" :class="className" role="group">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const BtnGroup = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        this.vertical ? 'btn-group-vertical' : 'btn-group',
        this.size && 'btn-group-' + this.size
      );
    }
  }
};

export default BtnGroup;
export { BtnGroup as mdbBtnGroup };

</script>

<style scoped>
</style>
