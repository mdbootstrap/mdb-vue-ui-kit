<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const Btn = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return classNames(
        'btn-group'
      );
    }
  }
};

export default Btn;
export { Btn as mdbBtnGroup };

</script>

<style scoped>

</style>
