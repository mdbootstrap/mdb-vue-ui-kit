<template>
  <component :is="tag" :class="className" role="toolbar">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const BtnToolbar = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return classNames(
        'btn-toolbar'
      );
    }
  }
};

export default BtnToolbar;
export { BtnToolbar as mdbBtnToolbar };

</script>

<style scoped>

</style>
