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
    responsive: {
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
  data() {
    return {
      height: null
    };
  },
  computed: {
    masonryClass() {
      return [
        this.horizontal || this.flexbox ? this.flexbox ? 'masonry-with-flex' : 'masonry-horizontal' : 'masonry-with-columns'
      ];
    },
    masonryStyle() { 
      return {
        maxHeight: this.height ? isNaN(this.height) ? this.height : `${this.height}px` : null
      };
    },
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth < 600) {
        this.height = null;
      }
      else if (window.innerWidth < 1200) {
        const dimentions = this.$slots.default.filter(el => el.tag).map(img => img.elm.clientWidth);
        const center = Math.floor(dimentions.length/2);
        const firstCol = dimentions.slice(0, center).reduce((a, b) => a + b);
        const secCol = dimentions.slice(center).reduce((a, b) => a + b);

        this.height = firstCol > secCol ? firstCol : secCol;
      }
      else {
        this.height = this.maxHeight;
      }
    }
  },
  mounted() {
    if (this.responsive) {
      setTimeout(this.checkScreenSize, 200);
      window.addEventListener("resize", this.checkScreenSize);
    } else {
      this.height = this.maxHeight;
    }
    
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
  },
  beforeDestroy() {
    if (this.responsive) {
      window.removeEventListener("resize", this.checkScreenSize);
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
