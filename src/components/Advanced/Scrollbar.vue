<template>
  <perfect-scrollbar :class="className" :options="settings" :style="scrollStyles">
    <slot></slot>
  </perfect-scrollbar>
</template>

<script>
import classNames from 'classnames';
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

const Scrollbar = {
  components: {
    PerfectScrollbar
  },
  props: {
    wheelSpeed: {
      type: Number,
      default: 1
    },
    wheelPropagation: {
      type: Boolean,
      default: false
    },
    swipeEasing: {
      type: Boolean,
      default: true
    },
    minScrollbarLength: {
      type: Number,
      default: null
    },
    maxScrollbarLength: {
      type: Number,
      default: null
    },
    scrollingThreshold: {
      type: Number,
      default: 1000
    },
    useBothWheelAxes: {
      type: Boolean,
      default: false
    },
    suppressScrollX: {
      type: Boolean,
      default: false
    },
    suppressScrollY: {
      type: Boolean,
      default: false
    },
    scrollXMarginOffset: {
      type: Number,
      default: 0
    },
    scrollYMarginOffset: {
      type: Number,
      default: 0
    },
    scrollClass: {
      type: String
    },
    scrollStyle: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      name: 'Scrollbar',
      yRail: null,
      settings: {
        wheelSpeed: this.wheelSpeed,
        wheelPropagation: this.wheelPropagation,
        swipeEasing: this.swipeEasing,
        minScrollbarLength: this.minScrollbarLength,
        maxScrollbarLength: this.maxScrollbarLength,
        scrollingThreshold: this.scrollingThreshold,
        useBothWheelAxes: this.useBothWheelAxes,
        suppressScrollX: this.suppressScrollX,
        suppressScrollY: this.suppressScrollY,
        scrollXMarginOffset: this.scrollXMarginOffset,
        scrollYMarginOffset: this.scrollYMarginOffset
      }
    };
  },
  computed: {
    className() {
      return classNames(
        this.scrollClass
      );
    },
    scrollStyles() {
      return this.scrollStyle;
    }
  },
  mounted() {
    this.setStyle('width', this.width);
    this.setStyle('height', this.height);
  },
  methods: {
    setStyle(prop, value){
      this.$el.style[prop] = value;
    }
  },
};

export default Scrollbar;
export { Scrollbar as mdbScrollbar };
</script>

<style>
</style>