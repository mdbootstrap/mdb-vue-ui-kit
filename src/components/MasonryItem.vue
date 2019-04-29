<template>
  <component :is="tag" :style="style">
    <slot></slot>
  </component>
</template>

<script>
const MasonryItem = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    order: {
      type: [String, Number],
      default: '' || 0
    },
    itemStyle: {
      type: Object
    }
  },
  computed: {
    style() {
      return {
        'order': this.order,
        ...this.itemStyle
      };
    }
  }
};

export default MasonryItem;
export { MasonryItem as mdbMasonryItem };
</script>

<style scoped>
.masonry-with-columns div {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}
</style>
