<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
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
      return [
        'breadcrumb-item',
        this.active ? 'active' : ''
      ];
    }
  }
};

export default BreadcrumbItem;
export { BreadcrumbItem as mdbBreadcrumbItem };
</script>

<style scoped>
</style>
