<template>
    <component :is="tag" :class="className">
      <slot></slot>
    </component>
</template>

<script>
const Pagination = {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    circle: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    className() {
      return [
        'pagination',
        this.sm  ? 'pagination-sm' : false,
        this.lg  ? 'pagination-lg' : false,
        this.circle ? 'pagination-circle' : false,
        this.color ? 'pg-'+this.color : false
      ];
    }
  }
};

export default Pagination;
export { Pagination as mdbPagination };
</script>

<style scoped>
</style>
