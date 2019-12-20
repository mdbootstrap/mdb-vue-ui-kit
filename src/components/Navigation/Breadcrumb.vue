<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const Breadcrumb =  {
  props: {
    tag: {
      type: String,
      default: "ol"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'breadcrumb',
        this.color && `${this.color}-color`
      ];
    }
  }
};

export default Breadcrumb;
export { Breadcrumb as mdbBreadcrumb };

</script>

<style>
.breadcrumb .breadcrumb-item.active {
  background-color: transparent;
}
</style>
