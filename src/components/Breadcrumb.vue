<template>
  <ol :is="tag" :class="className"><slot></slot></ol>
</template>

<script>
import classNames from 'classnames';

const Breadcrumb =  {
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  computed: {
    className() {
      return classNames(
        'breadcrumb'
      );
    }
  }
};

export default Breadcrumb;
export { Breadcrumb as mdbBreadcrumb };

</script>

<style scoped>

</style>
