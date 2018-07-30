<template>
  <li :is="tag" :class="className"><slot></slot></li>
</template>

<script>
import classNames from 'classnames';

const BreadcrumbItem = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'breadcrumb-item',
        this.active ? 'active' : ''
      );
    }
  }
};

export default BreadcrumbItem;
export { BreadcrumbItem as mdbBreadcrumbItem };
</script>

<style scoped>
</style>
