<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const Breadcrumb =  {
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  computed: {
    className() {
      return [
        'breadcrumb'
      ];
    }
  }
};

export default Breadcrumb;
export { Breadcrumb as mdbBreadcrumb };

</script>

<style scoped>

</style>
