<template>
  <component :is="tag" :class="masonryClass" :style="masonryStyle" ref="masonry">
    <slot></slot>
  </component>
</template>

<script>
const Masonry = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    flexbox: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: [String, Number],
      default: 'auto'
    },
    numCols: {
      type: Number
    }
  },
  computed: {
    masonryClass() {
      return [
        this.horizontal || this.flexbox ? this.flexbox ? 'masonry-with-flex' : 'masonry-horizontal' : 'masonry-with-columns'
      ];
    },
    masonryStyle() {     
      return {
        maxHeight: isNaN(this.maxHeight) ? this.maxHeight : `${this.maxHeight}px`
      };
    }
  },
  mounted() {
    if (!this.horizontal && !this.flexbox) {
      const colHeights = Array(this.numCols).fill(0);
      const masonryWrapper = this.$refs.masonry;
      Array.from(masonryWrapper.children).forEach((child, i) => {
        const order = i % this.numCols;
        child.style.order = order;
        colHeights[order] += parseFloat(child.clientHeight);
      });
      masonryWrapper.style.height = Math.max(...colHeights) + 'px';
    }
  }
};

export default Masonry;
export { Masonry as mdbMasonry };
</script>

<style scoped>
.masonry-with-columns, .masonry-with-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }
.masonry-horizontal {
  display: flex;
  flex-wrap: wrap; }
.masonry-horizontal div {
  flex: 1 0 auto; }
</style>
