<template>
  <component :is="tag" :class="className" class="border">
    <h6 v-if="header" class="pt-3 pl-3">{{header}}</h6>
    <hr>
    <ul :class="listClass">
      <slot></slot>
    </ul>
  </component>
</template>

<script>
import classNames from "classnames";

const Treeview = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    header: String,
    animated: {
      type: Boolean,
      default: false
    },
    colorful: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.animated && 'treeview-animated',
        this.colorful && 'treeview-colorful'
      );
    },
    listClass() {
      return classNames(
        'list-unstyled',
        this.animated ? 'treeview-animated-list mb-3 pl-3 pb-2' : '',
        this.colorful ? 'treeview-colorful-list' : 'mb-1 pl-3 pb-2 '
      );
    }
  }
};

export default Treeview;
export { Treeview as mdbTreeview };
</script>

<style scoped>
</style>
